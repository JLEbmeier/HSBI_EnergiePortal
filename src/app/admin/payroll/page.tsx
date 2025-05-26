import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Upload } from "lucide-react";
import { PayrollTable } from "@/components/admin/payroll-table"; // Assume this component exists

export default function AdminPayrollPage() {
   // Placeholder data - Fetch real data based on logged-in user in implementation
   // Admins might see all, regular employees only their own.
    const payrollData = [
        { id: "pay001", employeeId: "emp001", employeeName: "Anna Schmidt", period: "2024-06", date: "2024-06-28", gross: 3500, net: 2450.50, fileUrl: "/documents/payroll/anna_schmidt_2024_06.pdf"},
        { id: "pay002", employeeId: "emp002", employeeName: "Ben Weber", period: "2024-06", date: "2024-06-28", gross: 2800, net: 1980.20, fileUrl: "/documents/payroll/ben_weber_2024_06.pdf"},
        { id: "pay003", employeeId: "emp001", employeeName: "Anna Schmidt", period: "2024-05", date: "2024-05-30", gross: 3500, net: 2450.50, fileUrl: "/documents/payroll/anna_schmidt_2024_05.pdf"},
        { id: "pay004", employeeId: "emp003", employeeName: "Clara Becker", period: "2024-06", date: "2024-06-28", gross: 2500, net: 1800.75, fileUrl: "/documents/payroll/clara_becker_2024_06.pdf"},
    ];

    // TODO: Determine user role (admin vs employee)
    const isAdmin = true; // Replace with actual role check
    const loggedInEmployeeId = "emp001"; // Replace with actual logged-in user ID if not admin

    const filteredPayrollData = isAdmin ? payrollData : payrollData.filter(p => p.employeeId === loggedInEmployeeId);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
         <h1 className="text-3xl font-bold tracking-tight">Gehaltsabrechnungen</h1>
         {isAdmin && (
             <Button variant="outline">
                 <Upload className="mr-2 h-4 w-4" />
                 Abrechnungen hochladen
             </Button>
         )}
       </div>

      <Card>
        <CardHeader>
          <CardTitle>{isAdmin ? "Alle Abrechnungen" : "Meine Abrechnungen"}</CardTitle>
          <CardDescription>
            {isAdmin
              ? "Übersicht und Verwaltung aller Gehaltsabrechnungen."
              : "Zugriff auf deine persönlichen Gehaltsabrechnungen."}
          </CardDescription>
        </CardHeader>
        <CardContent>
            {/* Payroll Table Component */}
            <PayrollTable data={filteredPayrollData} isAdmin={isAdmin} />
        </CardContent>
      </Card>

       {/* Add instructions or security notice if needed */}
        <Card className="border-l-4 border-yellow-500">
            <CardHeader>
                <CardTitle className="text-lg flex items-center"><FileText className="mr-2 h-5 w-5"/> Wichtiger Hinweis</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    Gehaltsabrechnungen enthalten sensible persönliche Daten. Stelle sicher, dass du berechtigt bist, diese Informationen einzusehen oder zu verwalten. Der Zugriff wird protokolliert.
                </p>
            </CardContent>
        </Card>
    </div>
  );
}
