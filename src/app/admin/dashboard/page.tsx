import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building, Zap, DollarSign } from "lucide-react";
import { EnergyChart } from "@/components/energy-chart"; // Reuse chart component
// Sample data - replace with real data fetching
const dashboardStats = {
  activeMembers: 125,
  locations: 4,
  totalProductionToday: 310.2, // kWh
  alerts: 1, // Number of active alerts/warnings
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8 pb-4">
      <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktive Mitglieder</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.activeMembers}</div>
            {/* <p className="text-xs text-muted-foreground">+5 seit letztem Monat</p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Standorte</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.locations}</div>
            <p className="text-xs text-muted-foreground">3 aktiv, 1 in Planung</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produktion Heute</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.totalProductionToday.toFixed(1)} kWh</div>
            {/* <p className="text-xs text-muted-foreground">Aktuell: 75.5 kW</p> */}
          </CardContent>
        </Card>
         <Card className={dashboardStats.alerts > 0 ? "border-yellow-500" : ""}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Warnungen</CardTitle>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${dashboardStats.alerts > 0 ? 'text-yellow-600' : ''}`}>{dashboardStats.alerts}</div>
            <p className="text-xs text-muted-foreground">{dashboardStats.alerts > 0 ? 'Aktive Warnungen prüfen' : 'Keine aktiven Warnungen'}</p>
          </CardContent>
        </Card>
      </div>

       {/* Energy Production Chart */}
        <Card>
            <CardHeader>
                <CardTitle>Gesamte Energieproduktion</CardTitle>
                <CardDescription>Übersicht der letzten 7 Tage</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
                {/* Replace with actual chart component */}
                <EnergyChart />
                <p className="text-center text-muted-foreground mt-4 text-sm">Beispiel-Chart (Woche)</p>
            </CardContent>
        </Card>


       {/* Placeholder for Recent Activity / Notifications */}
        <Card>
            <CardHeader>
                <CardTitle>Letzte Aktivitäten</CardTitle>
            </CardHeader>
            <CardContent>
                 <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Neues Mitglied "Max Mustermann" beigetreten.</li>
                    <li>Wartungsbericht für "Solaranlage Gebäude A" hinzugefügt.</li>
                    <li>Aufgabe "Budgetplanung Q3" an Team "Finanzen" zugewiesen.</li>
                    <li>Warnung: Geringe Produktion bei "Carport P2" um 14:00 Uhr.</li>
                 </ul>
                 {/* Add link to full activity log */}
            </CardContent>
        </Card>

    </div>
  );
}
