import Image from "next/image";
import Link from "next/link";
import PVSolar from "@/app/images/PVSolar.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, TrendingUp } from "lucide-react";
import { EnergyChart } from "@/components/energy-chart"; // Placeholder for chart component
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />  
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Gemeinsam Energie gestalten – Für Studierende.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Die HSBI Energiegenossenschaft Studienwerke macht nachhaltige Energie zugänglich und vereinfacht das Leben von Studierenden. Werde Teil der Energiewende an der HSBI.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/membership">Jetzt Mitglied werden</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">Unsere Projekte entdecken</Link>
                </Button>
              </div>
            </div>
            <Image
              src={PVSolar}
              width={600} // Ersetzen Sie durch die tatsächliche Breite des Logos
              height={400} // Ersetzen Sie durch die tatsächliche Höhe des Logos
              alt="HSBI Logo"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              data-ai-hint="hsbi logo"
              />
          </div>
        </div>
      </section>

      {/* Introduction/Features Section */}
      <section className="w-full py-12 md:py-24 bg-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
             <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Unsere Mission</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nachhaltigkeit. Gemeinschaft. Unterstützung.</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Wir setzen uns für eine grünere Zukunft ein, fördern den Gemeinschaftssinn und unterstützen Studierende durch innovative Energieprojekte.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Saubere Energie</CardTitle>
                <CardDescription>
                  Wir investieren in Solaranlagen auf dem Campus, um grünen Strom zu erzeugen und CO2-Emissionen zu reduzieren.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/projects" className="text-sm font-medium text-primary hover:underline">
                  Mehr erfahren &rarr;
                </Link>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Starke Gemeinschaft</CardTitle>
                <CardDescription>
                  Als Mitglied wirst du Teil einer engagierten Gemeinschaft, die aktiv die Energiewende mitgestaltet.
                </CardDescription>
              </CardHeader>
              <CardContent>
                 <Link href="/membership" className="text-sm font-medium text-primary hover:underline">
                  Mitglied werden &rarr;
                </Link>
              </CardContent>
            </Card>
             <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Studentische Vorteile</CardTitle>
                <CardDescription>
                  Profitiere von günstigerem Strom, Mitbestimmung und weiteren Vorteilen, die das studentische Leben erleichtern.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/membership#benefits" className="text-sm font-medium text-primary hover:underline">
                  Vorteile entdecken &rarr;
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

       {/* Energy Data Preview Section */}
       <section className="w-full py-12 md:py-24">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
             <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Live-Daten</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Unsere Energieerzeugung im Blick
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Verfolge live, wie viel saubere Energie unsere Solaranlagen produzieren. Transparenz ist uns wichtig.
            </p>
            <Button asChild>
                <Link href="/energy-data">Zur Detailansicht</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center">
             {/* Placeholder for Energy Chart */}
             <Card className="w-full max-w-md shadow-lg">
                <CardHeader>
                    <CardTitle>Aktuelle Leistung</CardTitle>
                    <CardDescription>Gesamte Erzeugung heute</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Replace with actual chart component */}
                     <EnergyChart />
                    <p className="text-center text-muted-foreground mt-4 text-sm">Beispiel-Chart</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 border-t bg-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Engagiere dich jetzt!</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              Werde Teil der HSBI Energiegenossenschaft und gestalte aktiv eine nachhaltige Zukunft für Studierende.
            </p>
            <Button asChild size="lg">
              <Link href="/membership">Mitglied werden</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
