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
import { Download, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

// Define the shape of your payroll data
interface PayrollEntry {
  id: string;
  employeeId: string;
  employeeName: string;
  period: string;
  date: string;
  gross: number;
  net: number;
  fileUrl: string;
}

// Define table columns dynamically based on isAdmin prop
const getColumns = (isAdmin: boolean): ColumnDef<PayrollEntry>[] => {
    const columns: ColumnDef<PayrollEntry>[] = [
        ...(isAdmin ? [{
            accessorKey: "employeeName",
            header: ({ column }: any) => (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Mitarbeiter
                </Button>
            ),
        }] : []),
        {
            accessorKey: "period",
            header: "Zeitraum",
        },
        {
            accessorKey: "date",
            header: "Datum",
             cell: ({ row }) => {
                const date = new Date(row.getValue("date"));
                return date.toLocaleDateString('de-DE');
            },
        },
        {
            accessorKey: "gross",
            header: "Brutto (€)",
             cell: ({ row }) => {
                const amount = parseFloat(row.getValue("gross"));
                const formatted = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(amount);
                return <div className="text-right font-medium">{formatted}</div>;
            },
        },
        {
            accessorKey: "net",
            header: "Netto (€)",
             cell: ({ row }) => {
                const amount = parseFloat(row.getValue("net"));
                const formatted = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(amount);
                return <div className="text-right font-medium">{formatted}</div>;
            },
        },
        {
            id: "actions",
            cell: ({ row }) => {
            const payroll = row.original;
            return (
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Menü öffnen</span>
                    <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Aktionen</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                       <Link href={payroll.fileUrl} target="_blank" download>
                           <Download className="mr-2 h-4 w-4" /> Herunterladen (PDF)
                       </Link>
                    </DropdownMenuItem>
                    {isAdmin && (
                        <>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Details anzeigen</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10">Löschen</DropdownMenuItem>
                        </>
                    )}
                </DropdownMenuContent>
                </DropdownMenu>
            );
            },
        },
    ];
    return columns;
};


interface PayrollTableProps {
  data: PayrollEntry[];
  isAdmin: boolean;
}

export function PayrollTable({ data, isAdmin }: PayrollTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const columns = React.useMemo(() => getColumns(isAdmin), [isAdmin]);


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
  });

  return (
    <div>
       <div className="flex items-center py-4">
        <Input
          placeholder="Abrechnungen filtern..."
           value={(table.getColumn(isAdmin ? "employeeName" : "period")?.getFilterValue() as string) ?? ""}
           onChange={(event) =>
             table.getColumn(isAdmin ? "employeeName" : "period")?.setFilterValue(event.target.value)
           }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
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
                  Keine Abrechnungen gefunden.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
