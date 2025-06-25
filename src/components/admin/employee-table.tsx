"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Define the shape of employee data
interface Employee {
  id: string;
  name: string;
  role: string;
  email: string;
}

interface EmployeeTableProps {
  data: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
}

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
      </Button>
    ),
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Rolle
      </Button>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        E-mail
      </Button>
    ),
  },
  {
    id: "actions",
    cell: ({ row, table }) => {
      const employee = row.original;
      const setEmployees = table.options.meta?.setEmployees as React.Dispatch<React.SetStateAction<Employee[]>>;

      const handleDelete = async () => {
        try {
          const response = await fetch(`/api_v1/employees/${employee.id}`, {
            method: "DELETE",
          });
          if (!response.ok) throw new Error("Failed to delete employee");
          setEmployees((prev) => prev.filter((emp) => emp.id !== employee.id));
        } catch (err) {
          console.error("Error deleting employee:", err);
        }
      };

      const handleEdit = async (updatedEmployee: Employee) => {
        try {
          const response = await fetch(`/api_v1/employees/${employee.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              empName: updatedEmployee.name,
              empEmail: updatedEmployee.email,
              empPosition: updatedEmployee.role,
            }),
          });
          if (!response.ok) throw new Error("Failed to update employee");
          const updated = await response.json();
          setEmployees((prev) =>
            prev.map((emp) =>
              emp.id === employee.id
                ? { id: updated.id.toString(), name: updated.empName, role: updated.empPosition, email: updated.empEmail }
                : emp
            )
          );
        } catch (err) {
          console.error("Error updating employee:", err);
        }
      };

      return (
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Menü öffnen</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Aktionen</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(employee.email)}>
                E-Mail kopieren
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DialogTrigger asChild>
                <DropdownMenuItem>Bearbeiten</DropdownMenuItem>
              </DialogTrigger>
              <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10" onClick={handleDelete}>
                Löschen
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Mitarbeiter bearbeiten</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Name"
                defaultValue={employee.name}
                onChange={(e) => (employee.name = e.target.value)}
              />
              <Input
                placeholder="Rolle"
                defaultValue={employee.role}
                onChange={(e) => (employee.role = e.target.value)}
              />
              <Input
                placeholder="E-Mail"
                defaultValue={employee.email}
                onChange={(e) => (employee.email = e.target.value)}
              />
              <Button onClick={() => handleEdit(employee)}>Speichern</Button>
            </div>
          </DialogContent>
        </Dialog>
      );
    },
  },
];

export function EmployeeTable({ data, setEmployees }: EmployeeTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    meta: {
      setEmployees,
    },
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Mitarbeiter filtern..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Keine Ergebnisse.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}