import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/layout/header";


// Sample project data (replace with actual data source later)
const projects = [
  {
    id: "solar-dach-gebaeude-a",
    title: "Solaranlage Gebäude A",
    description: "Unsere erste große Solaranlage auf dem Dach von Gebäude A. Sie versorgt Teile des Campus mit sauberem Strom.",
    status: "In Betrieb",
    imageUrl: "https://picsum.photos/400/250?random=1",
    capacity: "50 kWp",
    startDate: "2023-05-10",
    fundingProgress: 100,
    aiHint: "solar panels roof"
  },
  {
    id: "solar-fassade-bibliothek",
    title: "Solarfassade Bibliothek",
    description: "Innovative Solarintegration in die Fassade der Campus-Bibliothek. Ein Pilotprojekt für ästhetische Energiegewinnung.",
    status: "In Planung",
    imageUrl: "https://picsum.photos/400/250?random=2",
    capacity: "25 kWp",
    startDate: "2024-09-01",
    fundingProgress: 65,
    aiHint: "modern building facade solar"
  },
   {
    id: "carport-solar-parkplatz",
    title: "Solar-Carport Parkplatz P2",
    description: "Überdachung des Parkplatzes P2 mit Solarmodulen. Bietet Schatten für Autos und erzeugt gleichzeitig Strom.",
    status: "Im Bau",
    imageUrl: "https://picsum.photos/400/250?random=3",
    capacity: "100 kWp",
    startDate: "2024-03-15",
    fundingProgress: 90,
    aiHint: "solar carport parking"
  },
   {
    id: "balkonkraftwerke-wohnheim",
    title: "Balkonkraftwerke Studierendenwohnheim",
    description: "Förderung und Installation von Balkonkraftwerken für die Bewohner des Studierendenwohnheims.",
    status: "In Betrieb",
    imageUrl: "https://picsum.photos/400/250?random=4",
    capacity: "15 kWp (gesamt)",
    startDate: "2023-11-01",
    fundingProgress: 100,
    aiHint: "apartment balcony solar panel"
  },
];

export default function ProjectsPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Betrieb":
        return "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200 dark:border-green-700";
      case "Im Bau":
        return "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700";
      case "In Planung":
        return "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500";
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Top part - full width with padding, left-aligned */}
      <div className="w-full max-w-screen-xl px-6 md:px-12">
        <Header />
        <div className="mb-12 text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Unsere Energieprojekte
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Entdecke die Solarenergieprojekte, mit denen wir die HSBI nachhaltiger machen.
          </p>
        </div>
      </div>

      {/* Centered content with more horizontal padding */}
      <div className="w-full max-w-screen-xl px-6 md:px-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.imageUrl}
                  alt={`Bild von ${project.title}`}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.aiHint}
                />
                <Badge
                  variant="outline"
                  className={`absolute top-2 right-2 ${getStatusColor(project.status)}`}
                >
                  {project.status}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-sm pt-1">
                  Kapazität: {project.capacity} | Start:{" "}
                  {new Date(project.startDate).toLocaleDateString("de-DE")}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2 pt-4 border-t mt-auto">
                {project.status !== "In Betrieb" && (
                  <>
                    <div className="w-full">
                      <label className="text-xs text-muted-foreground mb-1 block">
                        Finanzierungsfortschritt
                      </label>
                      <Progress value={project.fundingProgress} aria-label={`${project.fundingProgress}% finanziert`} />
                      <span className="text-xs text-muted-foreground mt-1 block">
                        {project.fundingProgress}%
                      </span>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/projects/${project.id}/support`}>Projekt unterstützen</Link>
                    </Button>
                  </>
                )}
                {project.status === "In Betrieb" && (
                  <Button size="sm" variant="link" className="p-0 h-auto" asChild>
                    <Link href={`/energy-data?project=${project.id}`}>
                      Live-Daten anzeigen &rarr;
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Du hast eine Projektidee?</h2>
          <p className="text-muted-foreground mb-6">
            Hast du einen Vorschlag für ein neues Energieprojekt an der HSBI? Lass es uns wissen!
          </p>
          <Button size="lg">
            <Link href="/">Projekt vorschlagen</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
