import { Header } from "@/components/layout/header";

export default function DatenschutzPage() {
  return (
    <div className="flex flex-col items-center">
      <Header /> 
        <div className="container py-12 md:py-16 lg:py-20 max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight mb-6">Datenschutzerklärung</h1>

          <p className="mb-4">Stand: {new Date().toLocaleDateString('de-DE')}</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-lg font-semibold mt-4 mb-1">Allgemeine Hinweise</h3>
          <p className="text-sm mb-3">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>
          <h3 className="text-lg font-semibold mt-4 mb-1">Datenerfassung auf dieser Website</h3>
          <h4 className="font-medium mt-2 mb-1">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p className="text-sm mb-3">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
          </p>
          <h4 className="font-medium mt-2 mb-1">Wie erfassen wir Ihre Daten?</h4>
          <p className="text-sm mb-3">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br />
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>
          <h4 className="font-medium mt-2 mb-1">Wofür nutzen wir Ihre Daten?</h4>
          <p className="text-sm mb-3">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Im Falle einer Mitgliedschaft oder Nutzung des internen Bereichs werden Daten zur Verwaltung der Mitgliedschaft bzw. zur Bereitstellung der internen Funktionen verwendet.
          </p>
          <h4 className="font-medium mt-2 mb-1">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
            <p className="text-sm mb-3">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.<br/>
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">2. Hosting</h2>
          <p className="text-sm mb-3">
            Wir hosten unsere Website bei [Name des Hosting-Anbieters, z.B. Firebase Hosting / Google Cloud]. Der Anbieter ist [vollständiger Name und Adresse des Anbieters]. Details entnehmen Sie der Datenschutzerklärung des Anbieters: [Link zur Datenschutzerklärung des Hosters].<br/>
            Die Verwendung von [Hosting-Anbieter] erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>
            {/* Ggf. Auftragsverarbeitungsvertrag erwähnen */}
            <p className="text-sm mb-3">
                Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
            </p>


          <h2 className="text-xl font-semibold mt-6 mb-2">3. Allgemeine Hinweise und Pflicht­informationen</h2>
          <h3 className="text-lg font-semibold mt-4 mb-1">Datenschutz</h3>
          <p className="text-sm mb-3">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.<br />
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.<br />
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">Hinweis zur verantwortlichen Stelle</h3>
          <p className="text-sm mb-3">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
            HSBI Energiegenossenschaft Studienwerke eG (in Gründung)<br />
            Musterstraße 1<br />
            33619 Bielefeld<br /><br />
            Telefon: +49 (0) 123 456789 (Beispiel)<br />
            E-Mail: <a href="mailto:info@hsbi-energie.de" className="text-primary hover:underline">info@hsbi-energie.de</a><br /><br />
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>

            <h3 className="text-lg font-semibold mt-4 mb-1">Speicherdauer</h3>
            <p className="text-sm mb-3">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            {/* Weitere Abschnitte hinzufügen: Widerruf Einwilligung, Beschwerderecht, Recht auf Datenübertragbarkeit, SSL/TLS, Cookies, Server-Log-Dateien, Kontaktformular, Mitgliederdaten, Mitarbeiterdaten/Gehaltsabrechnungen, Analyse-Tools etc. */}
            {/* Diese Abschnitte sind stark von der tatsächlichen Implementierung abhängig (z.B. welche Cookies, welche Formulare, welche Tools). */}

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Datenerfassung auf dieser Website</h2>
              <h3 className="text-lg font-semibold mt-4 mb-1">Cookies</h3>
                <p className="text-sm mb-3">
                    Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.<br/>
                    {/* Ggf. auf Drittanbieter-Cookies eingehen */}
                    Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).<br/>
                    Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.<br/>
                    Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.<br/>
                    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.<br/>
                    Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-1">Server-Log-Dateien</h3>
                <p className="text-sm mb-3">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                    <ul>
                        <li>Browsertyp und Browserversion</li>
                        <li>verwendetes Betriebssystem</li>
                        <li>Referrer URL</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>Uhrzeit der Serveranfrage</li>
                        <li>IP-Adresse</li>
                    </ul>
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.<br/>
                    Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-1">Kontaktformular / E-Mail-Kontakt</h3>
                <p className="text-sm mb-3">
                    Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular bzw. Ihrer E-Mail inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.<br/>
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.<br/>
                    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Mitglieder- und Mitarbeiterdaten</h2>
              <h3 className="text-lg font-semibold mt-4 mb-1">Verarbeitung von Mitgliederdaten</h3>
                <p className="text-sm mb-3">
                    Im Rahmen der Mitgliedschaft erheben und verarbeiten wir personenbezogene Daten (z. B. Name, Adresse, Kontaktdaten, Bankverbindung, erworbene Anteile) zur Erfüllung der genossenschaftlichen Pflichten und zur Verwaltung der Mitgliedschaft. Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie zur Erfüllung rechtlicher Verpflichtungen (Art. 6 Abs. 1 lit. c DSGVO, z. B. Genossenschaftsgesetz). Die Daten werden gelöscht, sobald sie für den Zweck ihrer Verarbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </p>
            <h3 className="text-lg font-semibold mt-4 mb-1">Verarbeitung von Mitarbeiterdaten und Gehaltsabrechnungen</h3>
                <p className="text-sm mb-3">
                    Im Rahmen des Beschäftigungsverhältnisses und zur Durchführung der Gehaltsabrechnung verarbeiten wir personenbezogene Daten unserer Mitarbeiter (z. B. Name, Adresse, Kontaktdaten, Bankverbindung, Sozialversicherungsnummer, Steuerdaten, Arbeitszeiten, Gehaltsdaten). Dies erfolgt zur Anbahnung, Durchführung und Beendigung des Beschäftigungsverhältnisses gemäß § 26 BDSG sowie zur Erfüllung rechtlicher Verpflichtungen (Art. 6 Abs. 1 lit. c DSGVO, z. B. Steuer-, Sozialversicherungsrecht).<br/>
                    Der Zugriff auf Gehaltsabrechnungen im internen Bereich ist durch geeignete technische und organisatorische Maßnahmen geschützt und nur für den jeweiligen Mitarbeiter bzw. berechtigte Personen (z. B. Personalabteilung) möglich. Die Daten werden gemäß den gesetzlichen Aufbewahrungsfristen gespeichert und anschließend gelöscht.
                </p>


          {/* Add further sections as needed */}

        </div>
      </div>
      );
    }
