"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { EmployeeTable } from "@/components/admin/employee-table";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Define the shape of employee data to match backend
interface Employee {
  id: string;
  name: string;
  role: string;
  email: string;
}

export default function AdminEmployeesPage() {
  const [employees, setEmployees] = React.useState<Employee[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [newEmployee, setNewEmployee] = React.useState({ name: "", role: "", email: "" });

  // Fetch employees from backend
  React.useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("/api_v1/employees/all");
        if (!response.ok) throw new Error("Failed to fetch employees");
        const data = await response.json();
        // Map backend data to frontend interface
        const mappedData = data.map((emp: any) => ({
          id: emp.id.toString(),
          name: emp.empName,
          role: emp.empPosition,
          email: emp.empEmail,
        }));
        setEmployees(mappedData);
        setLoading(false);
      } catch (err) {
        setError("Error loading employees");
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  // Handle new employee creation
  const handleCreateEmployee = async () => {
    try {
      const response = await fetch("/api_v1/employees/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          empName: newEmployee.name,
          empEmail: newEmployee.email,
          empPosition: newEmployee.role,
        }),
      });
      if (!response.ok) throw new Error("Failed to create employee");
      const newEmp = await response.json();
      setEmployees([
        ...employees,
        { id: newEmp.id.toString(), name: newEmp.empName, role: newEmp.empPosition, email: newEmp.empEmail },
      ]);
      setNewEmployee({ name: "", role: "", email: "" });
    } catch (err) {
      setError("Error creating employee");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Mitarbeiterorganisation</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Neuen Mitarbeiter hinzufügen
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Neuen Mitarbeiter erstellen</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Name"
                value={newEmployee.name}
                onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
              />
              <Input
                placeholder="Rolle"
                value={newEmployee.role}
                onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
              />
              <Input
                placeholder="E-Mail"
                value={newEmployee.email}
                onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
              />
              <Button onClick={handleCreateEmployee}>Erstellen</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mitarbeiterliste</CardTitle>
          <CardDescription>Verwaltung von Mitarbeiterdaten.</CardDescription>
        </CardHeader>
        <CardContent>
          <EmployeeTable data={employees} setEmployees={setEmployees} />
        </CardContent>
      </Card>
    </div>
  );
}