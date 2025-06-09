
import { Header } from "@/components/layout/header";

export default function ImpressumPage() {
  return (
<div className="flex flex-col items">
      <Header /> 
      <h1 className="text-3xl font-bold tracking-tight mb-6">Impressum</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">Angaben gemäß § 5 TMG</h2>
      <p>
        HSBI Energiegenossenschaft Studienwerke eG (in Gründung)<br />
        Artilleriestraße 9<br />
        32427 Minden
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Vertreten durch:</h2>
      <p>
        Jan Luca Ebmeier (CEO/Geschäftsführer)<br />
        Dhanuka Wheperumage (CTO/Mitgründer)
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Kontakt</h2>
      <p>
        Telefon: +49 (0) 123 456789 (Beispiel – bitte ersetzen)<br />
        E-Mail: <a href="mailto:info@hsbi-energie.de" className="text-primary hover:underline">info@hsbi-energie.de</a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Registereintrag</h2>
      <p>
        Eintragung im Genossenschaftsregister.<br />
        Registergericht: Amtsgericht Bielefeld (Beispiel – wird nach Eintragung ergänzt)<br />
        Registernummer: GnR XXX (Beispiel – wird nach Eintragung ergänzt)
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Zuständiger Prüfungsverband</h2>
      <p>
        Genossenschaftsverband – Verband der Regionen e.V. (Beispiel – bitte nach Gründung ersetzen)<br />
        Peter-Müller-Straße 26<br />
        40468 Düsseldorf
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p>
        Jan Luca Ebmeier, Dhanuka Wheperumage<br />
        Artilleriestraße 9<br />
        32427 Minden
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr</a>.<br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.<br />
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h3 className="text-lg font-semibold mtprinted-6 mb-2">Haftung für Inhalte</h3>
      <p className="text-sm text-muted-foreground">
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Haftung für Links</h3>
      <p className="text-sm text-muted-foreground">
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Urheberrecht</h3>
      <p className="text-sm text-muted-foreground">
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>
    </div>
  );
}