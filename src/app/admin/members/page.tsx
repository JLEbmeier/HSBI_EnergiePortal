"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { MemberTable } from "@/components/admin/member-table";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Define the shape of member data to match backend
interface Member {
  id: string;
  name: string;
  joinDate: string;
  status: string;
  shares: number;
  email: string;
}

export default function AdminMembersPage() {
  const [members, setMembers] = React.useState<Member[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [newMember, setNewMember] = React.useState({ name: "", email: "", status: "Aktiv", shares: 0 });

  // Fetch members from backend
  React.useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("/members/all-members");
        if (!response.ok) throw new Error("Failed to fetch members");
        const data = await response.json();
        // Map backend data to frontend interface
        const mappedData = data.map((mem: any) => ({
          id: mem.id.toString(),
          name: mem.memberName,
          joinDate: mem.memberJoinDate,
          status: mem.memberStatus,
          shares: mem.memberContribution,
          email: mem.memberEmail,
        }));
        setMembers(mappedData);
        setLoading(false);
      } catch (err) {
        setError("Error loading members");
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  // Handle new member creation
  const handleCreateMember = async () => {
    try {
      const response = await fetch("/members/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          memberName: newMember.name,
          memberEmail: newMember.email,
          memberStatus: newMember.status,
          memberContribution: newMember.shares,
          memberJoinDate: new Date().toISOString().split("T")[0],
        }),
      });
      if (!response.ok) throw new Error("Failed to create member");
      const newMem = await response.json();
      setMembers([
        ...members,
        {
          id: newMem.id.toString(),
          name: newMem.memberName,
          joinDate: newMem.memberJoinDate,
          status: newMem.memberStatus,
          shares: newMem.memberContribution,
          email: newMem.memberEmail,
        },
      ]);
      setNewMember({ name: "", email: "", status: "Aktiv", shares: 0 });
    } catch (err) {
      setError("Error creating member");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Mitgliederverwaltung</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Neues Mitglied hinzufügen
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Neues Mitglied erstellen</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Name"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              />
              <Input
                placeholder="E-Mail"
                value={newMember.email}
                onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
              />
              <Input
                placeholder="Status"
                value={newMember.status}
                onChange={(e) => setNewMember({ ...newMember, status: e.target.value })}
              />
              <Input
                type="number"
                placeholder="Anteile"
                value={newMember.shares}
                onChange={(e) => setNewMember({ ...newMember, shares: parseFloat(e.target.value) })}
              />
              <Button onClick={handleCreateMember}>Erstellen</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mitgliederliste</CardTitle>
          <CardDescription>Verwaltung von Mitgliederdaten und Anteilen.</CardDescription>
        </CardHeader>
        <CardContent>
          <MemberTable data={members} setMembers={setMembers} />
        </CardContent>
      </Card>
    </div>
  );
}