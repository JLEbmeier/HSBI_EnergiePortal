import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-auto bg-muted/50">
      <div className="container py-8 ml-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-2">HSBI Energieportal</h3>
            <p className="text-sm text-muted-foreground">
              Eine Initiative der HSBI Energiegenossenschaft Studienwerke,
              angeleitet von Engeno.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-2">Links</h4>
            <ul className="space-y-1">
              <li><Link href="/projects" className="text-sm hover:underline">Projekte</Link></li>
              <li><Link href="/energy-data" className="text-sm hover:underline">Energiedaten</Link></li>
              <li><Link href="/membership" className="text-sm hover:underline">Mitgliedschaft</Link></li>
              <li><Link href="/impressum" className="text-sm hover:underline">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-sm hover:underline">Datenschutz</Link></li>
            </ul>
          </div>
           <div>
            <h4 className="text-md font-semibold mb-2">Kontakt</h4>
             <p className="text-sm text-muted-foreground">
                HSBI Energiegenossenschaft<br/>
                Artilleriestraße 9<br/>
                32427 Minden<br/>
                Email: <a href="mailto:info@hsbi-energie.de" className="hover:underline">info@hsbi-energie.de</a>
            </p>
          </div>
        </div>
        <Separator className="my-6" />
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} HSBI Energiegenossenschaft Studienwerke. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
