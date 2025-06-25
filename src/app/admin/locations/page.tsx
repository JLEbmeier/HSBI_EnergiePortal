"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, MapPin } from "lucide-react";
import { LocationTable } from "@/components/admin/location-table"; // Assume this component exists
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Location {}
id: String;
name: String;
type: String;
status: String;
capacity: String;
address: String;



export default function AdminLocationsPage() {
  const [location, setLocations] = React.useState<Location[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [newLocation, setNewLocation] = React.useState({ name: "", type: "", status: "", capacity: "", adress: ""});

  // Fetch Locations from backend
  React.useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("/locations/all");
        // Hier die Pfäde untersuchen
        if (!response.ok) throw new Error("Failed to fetch Locations");
        const data = await response.json();
        // Map backend data to frontend interface
        const mappedData = data.map((loc: any) => ({
          id: loc.id.toString(),
          name: loc.locName,
          type: loc.locType,
          status: loc.locStatus,
          capacity: loc.locCapacity,
          adress: loc.locAdress,
        }));
        setLocations(mappedData);
        setLoading(false);
      } catch (err) {
        setError("Error loading Locations");
        setLoading(false);
      }
    };
    fetchLocations();
  }, []);

  return (
    <div className="space-y-8">
       <div className="flex items-center justify-between">
         <h1 className="text-3xl font-bold tracking-tight">Standortmanagement</h1>
         <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
             Neuen Standort hinzufügen
         </Button>
       </div>

      <Card>
        <CardHeader>
          <CardTitle>Standortübersicht</CardTitle>
          <CardDescription>Verwaltung der Solaranlagenstandorte, technischer Daten und Wartungspläne.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Location Table Component */}
          <LocationTable data={location} />
        </CardContent>
      </Card>

       {/* Placeholder for Map View */}
       <Card>
           <CardHeader>
               <CardTitle>Kartenansicht</CardTitle>
               <MapPin className="h-4 w-4 text-muted-foreground" />
           </CardHeader>
           <CardContent>
                <div className="h-64 bg-muted rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Kartenansicht der Standorte (Integration mit Mapping-Bibliothek erforderlich).</p>
                </div>
           </CardContent>
       </Card>

        {/* Placeholder for Maintenance Schedule */}
       <Card>
           <CardHeader>
               <CardTitle>Wartungspläne</CardTitle>
               <CardDescription>Übersicht über anstehende und vergangene Wartungsarbeiten.</CardDescription>
           </CardHeader>
           <CardContent>
                <p className="text-muted-foreground">Wartungsplanungs- und Tracking-Funktionen werden hier hinzugefügt.</p>
                {/* Example: List upcoming maintenance tasks */}
           </CardContent>
       </Card>

    </div>
  );
}
