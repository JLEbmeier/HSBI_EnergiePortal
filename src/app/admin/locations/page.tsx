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
        setLocation(mappedData);
        setLoading(false);
      } catch (err) {
        setError("Error loading Locations");
        setLoading(false);
      }
    };
    fetchLocations();
  }, []);

// Handle new location creation
  const handleCreateLocation = async () => {
    try {
      const response = await fetch("/energy-sources/new", {
        // await fetch adresse anpassen
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locName: newLocation.name,
          locType: newLocation.type,
          locStatus: newLocation.status,
          locCapacity: newLocation.capacity,
          // ??? location api muss gegebenfalls angepasst werden 
          locAdress: newLocation.adress,
        }),
      });
      // Hier ist der fehler
      if (!response.ok) throw new Error("Failed to create location");
      const newLoc = await response.json();
      setLocations([
        ...location,
        { id: newLoc.id.toString(), name: newLoc.locName, type: newLocation.locType, status: newLocation.locStatus, capacity: newLocation.locCapacity, adress: newLocation.locAdress }
      ]);
      setNewLocation({ name: "", type: "", status: "", capacity: "", adress: "" });
    } catch (err) {
      setError("Error creating Location");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

// hier ist auch ein fehler
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
                value={newLocation.name}
                onChange={(l) => setNewLocation({ ...newLocation, name: l.target.value })}
                />
                <Input
                placeholder="Type"
                value={newLocation.type}
                onChange={(l) => setNewLocation({ ...newLocation, type: l.target.value })}
                />
                <Input
                placeholder="Status"
                value={newLocation.status}
                onChange={(l) => setNewLocation({ ...newLocation, status: l.target.value })}
                />
                <Input
                placeholder="Capacity"
                value={newLocation.capacity}
                onChange={(l) => setNewLocation({ ...newLocation, capacity: l.target.value })}
                />
                <Input
                placeholder="Adress"
                value={newLocation.adress}
                onChange={(l) => setNewLocation({ ...newLocation, adress: l.target.value })}
                />
                
            <Button onClick={handleCreateLocation}>Erstellen</Button>


      <Card>
        <CardHeader>
          <CardTitle>Standortübersicht</CardTitle>
          <CardDescription>Verwaltung der Solaranlagenstandorte, technischer Daten und Wartungspläne.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Location Table Component */}
          <LocationTable data={location} setLocation={setLocations}/>
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
