"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
   const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // --- Placeholder Login Logic ---
    // In a real app, replace this with actual authentication (e.g., Firebase Auth, NextAuth.js)
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    if (email === "admin@hsbi-energie.de" && password === "password") {
       toast({
         title: "Login erfolgreich",
         description: "Willkommen im Admin-Bereich.",
       });
       // Redirect to the admin dashboard upon successful login
       // We need to create this page next.
       router.push("/admin/dashboard");
    } else {
       toast({
         variant: "destructive",
         title: "Login fehlgeschlagen",
         description: "Ungültige E-Mail oder Passwort.",
       });
        setIsLoading(false);
    }
     // --- End Placeholder Logic ---
  };

  return (
      <div className="flex flex-col items-center">
      <Header /> 
      <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] py-12">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>
              Bitte melde dich an, um auf den internen Bereich zuzugreifen.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
              <div className="space-y-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input
                  id="email"
                  type="email"
                  placeholder="admin@hsbi-energie.de"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  />
              </div>
              <div className="space-y-2">
                  <Label htmlFor="password">Passwort</Label>
                  <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  />
              </div>
              </CardContent>
              <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Anmelden"}
              </Button>
              </CardFooter>
          </form>
        </Card>
        <footer></footer>
      </div>
    </div>
    );
  }
