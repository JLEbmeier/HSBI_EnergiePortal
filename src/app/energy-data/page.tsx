import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EnergyChart } from "@/components/energy-chart"; // Assume this component exists
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

// Sample data (replace with actual data fetching and processing)
const summaryData = {
  totalCapacity: "190 kWp",
  currentProduction: 75.5, // kW
  todayEnergy: 310.2, // kWh
  totalEnergy: 125480.5, // kWh
  co2Saved: 62.7, // tons
  status: "Normal", // Could be 'Normal', 'Warning', 'Error'
};

const projectData = [
  { id: "solar-dach-gebaeude-a", name: "Gebäude A", current: 28.1, today: 115.5 },
  { id: "carport-solar-parkplatz", name: "Carport P2", current: 45.3, today: 185.0 },
  { id: "balkonkraftwerke-wohnheim", name: "Balkonkraftwerke", current: 2.1, today: 9.7 },
  { id: "solar-fassade-bibliothek", name: "Bibliothek Fassade", current: 0.0, today: 0.0 }, // Not active yet
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Normal":
      return <CheckCircle2 className="h-5 w-5 text-green-600" />;
    case "Warning":
      return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    case "Error":
      return <AlertCircle className="h-5 w-5 text-red-600" />;
    default:
      return null;
  }
};

export default function EnergyDataPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
          Energiedaten unserer Anlagen
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Erfahre in Echtzeit, wie viel saubere Energie wir produzieren und welchen Beitrag wir zur Nachhaltigkeit leisten.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aktuelle Leistung</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summaryData.currentProduction.toFixed(1)} kW</div>
            <p className="text-xs text-muted-foreground">Gesamtproduktion aller Anlagen</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Heute erzeugt</CardTitle>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m7.8 16.2-2.9 2.9"/><path d="M6 12H2"/><path d="m7.8 7.8-2.9-2.9"/><circle cx="12" cy="12" r="4"/></svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summaryData.todayEnergy.toFixed(1)} kWh</div>
            <p className="text-xs text-muted-foreground">Seit Mitternacht</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CO₂ Einsparung</CardTitle>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M12.2 2h-.4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h.4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/><path d="M18 16h-2a4 4 0 0 0-4 4v0"/><path d="m6 16 6-14"/></svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summaryData.co2Saved.toFixed(1)} t</div>
            <p className="text-xs text-muted-foreground">Gesamteinsparung seit Start</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Systemstatus</CardTitle>
            {getStatusIcon(summaryData.status)}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summaryData.status}</div>
             <p className="text-xs text-muted-foreground">Zustand aller Anlagen</p>
          </CardContent>
        </Card>
      </div>

       {/* Chart Section */}
        <Card className="mb-12 shadow-lg">
            <CardHeader>
                <CardTitle>Energieerzeugung im Zeitverlauf</CardTitle>
                <CardDescription>Produktion der letzten 24 Stunden</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] md:h-[400px]">
                 {/* Chart Component Goes Here */}
                 <EnergyChart />
                 <p className="text-center text-muted-foreground mt-4 text-sm">Beispiel-Chart</p>
            </CardContent>
        </Card>


      {/* Detailed Project Data */}
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="details">Projektdetails</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
           <Card>
            <CardHeader>
              <CardTitle>Anlagenübersicht</CardTitle>
               <CardDescription>Aktuelle Leistung und Tagesproduktion pro Projekt.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {projectData.map(p => (
                        <div key={p.id} className="flex justify-between items-center p-3 rounded-md bg-muted/50">
                            <span className="font-medium">{p.name}</span>
                            <div className="text-right">
                                <p className="text-sm font-semibold">{p.current.toFixed(1)} kW</p>
                                <p className="text-xs text-muted-foreground">{p.today.toFixed(1)} kWh heute</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="details">
           <Card>
             <CardHeader>
              <CardTitle>Detailansicht</CardTitle>
               <CardDescription>Wähle ein Projekt für detaillierte historische Daten (Funktion in Entwicklung).</CardDescription>
            </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">Detaillierte Ansichten für jedes Projekt werden in Kürze verfügbar sein.</p>
                {/* Future: Add dropdown or list to select project and display detailed chart/data */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
