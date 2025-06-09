import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Leaf, Users, Zap } from "lucide-react";
import { Header } from "@/components/layout/header";

const benefits = [
  {
    icon: Zap,
    title: "Günstiger Ökostrom",
    description: "Beziehe sauberen Strom aus unseren Anlagen zu fairen Konditionen.",
  },
  {
    icon: Leaf,
    title: "Aktiver Klimaschutz",
    description: "Unterstütze direkt den Ausbau erneuerbarer Energien an der HSBI.",
  },
  {
    icon: Users,
    title: "Mitbestimmung",
    description: "Gestalte als Mitglied die Zukunft unserer Genossenschaft aktiv mit.",
  },
   {
    icon: CheckCircle,
    title: "Studentische Vorteile",
    description: "Profitiere von exklusiven Angeboten und Projekten für Studierende.",
  },
];

export default function MembershipPage() {
  return (
    <div className="flex flex-col items-center">
      <Header /> 
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
          Werde Teil der Energiewende an der HSBI
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Gestalte mit uns eine nachhaltige Zukunft und profitiere als Mitglied von zahlreichen Vorteilen.
        </p>
         <Button asChild size="lg" className="mt-6">
            <Link href="#join">Jetzt Mitglied werden</Link>
         </Button>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="mb-16">
        <h2 className="text-2xl font-semibold tracking-tight text-center mb-8 md:text-3xl">
          Deine Vorteile als Mitglied
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-3">
                     <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How to Join Section */}
      <section id="join" className="mb-16 bg-muted/50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold tracking-tight text-center mb-8 md:text-3xl">
          So einfach wirst du Mitglied
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">1</div>
            <h3 className="font-semibold mb-2">Antrag herunterladen</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Lade den Mitgliedsantrag als PDF herunter.
            </p>
             <Button variant="outline" asChild>
                <Link href="/documents/mitgliedsantrag.pdf" target="_blank">Antrag (PDF)</Link>
             </Button>
          </div>
           <div className="flex flex-col items-center">
             <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">2</div>
            <h3 className="font-semibold mb-2">Ausfüllen & Unterschreiben</h3>
            <p className="text-sm text-muted-foreground">
              Fülle den Antrag vollständig aus und unterschreibe ihn.
            </p>
          </div>
           <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">3</div>
            <h3 className="font-semibold mb-2">Einreichen</h3>
            <p className="text-sm text-muted-foreground">
              Sende den Antrag per E-Mail an <a href="mailto:mitgliedschaft@hsbi-energie.de" className="underline">mitgliedschaft@hsbi-energie.de</a> oder gib ihn im Büro ab.
            </p>
          </div>
        </div>
         <p className="text-center text-xs text-muted-foreground mt-8">
             Mit dem Erwerb eines Genossenschaftsanteils wirst du offizielles Mitglied. Die genauen Konditionen findest du in unserer Satzung.
         </p>
      </section>

       {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-center mb-8 md:text-3xl">
          Häufig gestellte Fragen (FAQ)
        </h2>
        {/* Replace with Accordion component later if needed */}
        <div className="space-y-4 max-w-3xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Was kostet die Mitgliedschaft?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Die Mitgliedschaft erfordert den Erwerb von mindestens einem Genossenschaftsanteil. Der Wert eines Anteils beträgt aktuell 100 €. Dieser Betrag wird bei Austritt aus der Genossenschaft (gemäß Satzung) zurückgezahlt.
                    </p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="text-base">Muss ich Student an der HSBI sein?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Die Genossenschaft richtet sich primär an Studierende und Mitarbeiter der HSBI, steht aber grundsätzlich allen offen, die unsere Ziele unterstützen möchten.
                    </p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="text-base">Wie kann ich mich aktiv einbringen?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                       Es gibt viele Möglichkeiten! Du kannst an Mitgliederversammlungen teilnehmen, dich in Arbeitsgruppen engagieren oder bei Projekten mithelfen. Sprich uns einfach an!
                    </p>
                </CardContent>
            </Card>
        </div>
      </section>

    </div>
  );
}
