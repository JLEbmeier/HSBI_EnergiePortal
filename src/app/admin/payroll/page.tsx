"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Upload } from "lucide-react";
import { PayrollTable } from "@/components/admin/payroll-table"; // Assume this component exists

interface Payroll {}
  id: String;
  employeeId: String;
  employeeName: String;
  period: String;
  date: String;
  gross: Number;
  net: Number;
  fileUrl: String;

export default function AdminPayrollPage() {
  const [location, setPayroll] = React.useState<Payroll[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [newLocation, setNewPayroll] = React.useState({ employeeId: "", employeename: "", period: "", date: "", gross: "", net: "", fileUrl: ""});

  // Fetch Locations from backend
    React.useEffect(() => {
      const fetchPayroll = async () => {
        try {
          const response = await fetch("/"); //fehlende adresse für gehaltsabrechnungen
          if (!response.ok) throw new Error("Failed to fetch Payroll");
          const data = await response.json();
          // Map backend data to frontend interface
          const mappedData = data.map((pay: any) => ({
            id: pay.id.toString(),
            employeeId: pay.payEmployeeId,
            employeename: pay.payEmployeename,
            period: pay.payPeriod,
            date: pay.paydate,
            gross: pay.payGross,
            net: pay.payNet,
            fileUrl: pay.payFileUrl,
          }));
          setPayroll(mappedData);
          setLoading(false);
        } catch (err) {
          setError("Error loading Payroll");
          setLoading(false);
        }
      };
      fetchPayroll();
    }, []);
  

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
         <h1 className="text-3xl font-bold tracking-tight">Gehaltsabrechnungen</h1>
             <Button variant="outline">
                 <Upload className="mr-2 h-4 w-4" />
                 Abrechnungen hochladen
             </Button>
       </div>

      <Card>
      
        <CardContent>
            {/* Payroll Table Component */}
            <PayrollTable data={0}/>  
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
