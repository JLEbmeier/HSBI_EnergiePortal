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
import { Badge } from "@/components/ui/badge";
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

// Define the shape of member data
interface Member {
  id: string;
  name: string;
  joinDate: string;
  status: string;
  shares: number;
  email: string;
}

interface MemberTableProps {
  data: Member[];
  setMembers: React.Dispatch<React.SetStateAction<Member[]>>;
}

const getStatusColor = (status: string) => {
  return status === "Aktiv"
    ? "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200 dark:border-green-700"
    : "bg-red-100 text-red-800 border-red-300 dark:bg-red-900 dark:text-red-200 dark:border-red-700";
};

export const columns: ColumnDef<Member>[] = [
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
    accessorKey: "joinDate",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        beitrittsdatum
      </Button>
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("joinDate"));
      return date.toLocaleDateString("de-DE");
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return <Badge variant="outline" className={getStatusColor(status)}>{status}</Badge>;
    },
  },
  {
    accessorKey: "shares",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Anteile
      </Button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("shares"));
      return <div className="text-center font-medium">{amount}</div>;
    },
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
      const member = row.original;
      const setMembers = table.options.meta?.setMembers as React.Dispatch<React.SetStateAction<Member[]>>;
      
      const handleDelete = async () => {
        try {
          const response = await fetch(`/members/${member.id}`, {
            method: "DELETE",
          });
          if (!response.ok) throw new Error("Failed to delete member");
          setMembers((prev) => prev.filter((emp) => mem.id !== member.id));
        } catch (err) {
          console.error("Error deleting Member:", err);
        }
      };

      const handleEdit = async (updatedMember: Member) => {
        try {
          const response = await fetch(`/members/${member.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              memberName: updatedMember.name,
              memberEmail: updatedMember.email,
              memberStatus: updatedMember.status,
              memberContribution: updatedMember.shares,
              memberJoinDate: updatedMember.joinDate,
            }),
          });
          if (!response.ok) throw new Error("Failed to update member");
          const updated = await response.json();
          setMembers((prev) =>
            prev.map((mem) =>
              mem.id === member.id
                ? {
                    id: updated.id.toString(),
                    name: updated.memberName,
                    joinDate: updated.memberJoinDate,
                    status: updated.memberStatus,
                    shares: updated.memberContribution,
                    email: updated.memberEmail,
                  }
                : mem
            )
          );
        } catch (err) {
          console.error("Error updating member:", err);
        }
      };

      const handleToggleStatus = async () => {
        const newStatus = member.status === "Aktiv" ? "Inaktiv" : "Aktiv";
        try {
          const response = await fetch(`/members/${member.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              memberName: member.name,
              memberEmail: member.email,
              memberStatus: newStatus,
              memberContribution: member.shares,
              memberJoinDate: member.joinDate,
            }),
          });
          if (!response.ok) throw new Error("Failed to toggle status");
          const updated = await response.json();
          setMembers((prev) =>
            prev.map((mem) =>
              mem.id === member.id
                ? {
                    id: updated.id.toString(),
                    name: updated.memberName,
                    joinDate: updated.memberJoinDate,
                    status: updated.memberStatus,
                    shares: updated.memberContribution,
                    email: updated.memberEmail,
                  }
                : mem
            )
          );
        } catch (err) {
          console.error("Error toggling status:", err);
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
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(member.email)}>
                E-Mail kopieren
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DialogTrigger asChild>
                <DropdownMenuItem>Bearbeiten</DropdownMenuItem>
              </DialogTrigger>
              <DropdownMenuItem
                className="text-destructive focus:text-destructive focus:bg-destructive/10"
                onClick={handleToggleStatus}
              >
                {member.status === "Aktiv" ? "Auf Inaktiv setzen" : "Auf Aktiv setzen"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Mitglied bearbeiten</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Name"
                defaultValue={member.name}
                onChange={(e) => (member.name = e.target.value)}
              />
              <Input
                placeholder="E-Mail"
                defaultValue={member.email}
                onChange={(e) => (member.email = e.target.value)}
              />
              <Input
                placeholder="Status"
                defaultValue={member.status}
                onChange={(e) => (member.status = e.target.value)}
              />
              <Input
                type="number"
                placeholder="Anteile"
                defaultValue={member.shares}
                onChange={(e) => (member.shares = parseFloat(e.target.value))}
              />
              <Button onClick={() => handleEdit(member)}>Speichern</Button>
            </div>
          </DialogContent>
        </Dialog>
      );
    },
  },
];

export function MemberTable({ data, setMembers }: MemberTableProps) {
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
      setMembers,
    },
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Mitglieder filtern..."
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