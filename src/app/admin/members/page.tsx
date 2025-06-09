import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Mail } from "lucide-react";
import { MemberTable } from "@/components/admin/member-table"; // Assume this component exists

export default function AdminMembersPage() {
   // Placeholder data - Fetch real data in implementation
    const members = [
        { id: "mem001", name: "Max Mustermann", joinDate: "2023-06-15", status: "Aktiv", shares: 2, email: "max.mustermann@mail.com" },
        { id: "mem002", name: "Erika Mustermann", joinDate: "2023-07-01", status: "Aktiv", shares: 1, email: "erika.mustermann@mail.com" },
        { id: "mem003", name: "Peter Schmidt", joinDate: "2024-01-10", status: "Aktiv", shares: 5, email: "peter.schmidt@mail.com" },
         { id: "mem004", name: "Lisa Müller", joinDate: "2024-02-20", status: "Inaktiv", shares: 1, email: "lisa.mueller@mail.com" }, // Example Inactive
    ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
         <h1 className="text-3xl font-bold tracking-tight">Mitgliederverwaltung</h1>
          <div className="flex space-x-2">
             <Button variant="outline">
                 <Mail className="mr-2 h-4 w-4" />
                 Kommunikation senden
             </Button>
             <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                 Neues Mitglied hinzufügen
             </Button>
          </div>
       </div>

      <Card>
        <CardHeader>
          <CardTitle>Mitgliederliste</CardTitle>
          <CardDescription>Verwaltung von Mitgliederdaten, Beiträgen und Kommunikation.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Member Table Component */}
          <MemberTable data={members} />
        </CardContent>
      </Card>

       {/* Placeholder for Contribution Management */}
       <Card>
           <CardHeader>
               <CardTitle>Beitragsverwaltung</CardTitle>
                <CardDescription>Übersicht über Genossenschaftsanteile und Zahlungen.</CardDescription>
           </CardHeader>
           <CardContent>
                <p className="text-muted-foreground">Funktionen zur Verwaltung von Anteilen und Beiträgen werden hier hinzugefügt.</p>
           </CardContent>
        </Card>

         {/* Placeholder for Communication Tools */}
       <Card>
           <CardHeader>
               <CardTitle>Kommunikation</CardTitle>
                <CardDescription>Werkzeuge für den Versand von Newslettern oder Mitteilungen an Mitglieder.</CardDescription>
           </CardHeader>
           <CardContent>
                <p className="text-muted-foreground">Tools für E-Mail-Versand oder Benachrichtigungen werden hier integriert.</p>
           </CardContent>
        </Card>

    </div>
  );
}
