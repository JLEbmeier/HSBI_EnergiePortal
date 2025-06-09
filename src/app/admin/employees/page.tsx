import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { EmployeeTable } from "@/components/admin/employee-table"; // Assume this component exists

export default function AdminEmployeesPage() {
  // Placeholder data - Fetch real data in implementation
  const employees = [
    { id: "emp001", name: "Anna Schmidt", team: "Verwaltung", role: "Manager", email: "anna.schmidt@hsbi-energie.de" },
    { id: "emp002", name: "Ben Weber", team: "Technik", role: "Techniker", email: "ben.weber@hsbi-energie.de" },
    { id: "emp003", name: "Clara Becker", team: "Mitgliederbetreuung", role: "Sachbearbeiterin", email: "clara.becker@hsbi-energie.de"},
     { id: "emp004", name: "David Fischer", team: "Technik", role: "Projektleiter", email: "david.fischer@hsbi-energie.de"},
  ];


  return (
    <div className="space-y-8">
       <div className="flex items-center justify-between">
         <h1 className="text-3xl font-bold tracking-tight">Mitarbeiterorganisation</h1>
         <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
             Neuen Mitarbeiter hinzufügen
         </Button>
       </div>

      <Card>
        <CardHeader>
          <CardTitle>Mitarbeiterliste</CardTitle>
          <CardDescription>Verwaltung von Teams, Aufgaben und Mitarbeiterdaten.</CardDescription>
        </CardHeader>
        <CardContent>
           {/* Employee Table Component */}
           <EmployeeTable data={employees} />
        </CardContent>
      </Card>

       {/* Placeholder for Team Management */}
       <Card>
           <CardHeader>
               <CardTitle>Teamübersicht</CardTitle>
                <CardDescription>Verwaltung von Teams und deren Mitgliedern.</CardDescription>
           </CardHeader>
           <CardContent>
                <p className="text-muted-foreground">Team-Management-Funktionen werden hier hinzugefügt (z.B. Teams erstellen, Mitglieder zuweisen).</p>
           </CardContent>
        </Card>

         {/* Placeholder for Task Management */}
       <Card>
           <CardHeader>
               <CardTitle>Aufgabenverwaltung</CardTitle>
                <CardDescription>Übersicht und Zuweisung interner Aufgaben.</CardDescription>
           </CardHeader>
           <CardContent>
                <p className="text-muted-foreground">Aufgaben-Management-Funktionen werden hier hinzugefügt (z.B. Aufgaben erstellen, zuweisen, Status verfolgen).</p>
           </CardContent>
        </Card>

    </div>
  );
}
