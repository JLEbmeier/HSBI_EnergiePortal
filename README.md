# Erste Schritte -> Starten der Webseite

Dies ist ein NextJS-Starter

## Erste Schritte

Um die Entwicklungsumgebung lokal zu starten, folge diesen Schritten:

1.  **Node.js installieren:** Stelle sicher, dass du Node.js (Version 18 oder höher wird empfohlen) und npm (oder yarn) auf deinem Computer installiert hast. Du kannst Node.js von [nodejs.org](https://nodejs.org/) herunterladen.
2.  **Abhängigkeiten installieren:**
    *   Öffne ein Terminal oder eine Kommandozeile.
    *   Navigiere in das Hauptverzeichnis des heruntergeladenen Projekts (der Ordner, der diese `README.md`-Datei enthält).
    *   Führe den folgenden Befehl aus, um alle notwendigen Pakete zu installieren:
        ```bash
        npm install
        ```
        (Oder `yarn install`, falls du Yarn bevorzugst)
        Dieser Vorgang kann einige Minuten dauern.
3.  **Entwicklungsserver starten:**
    *   Führe im selben Terminalfenster den folgenden Befehl aus:
        ```bash
        npm run dev
        ```
        (Oder `yarn dev`)
4.  **Website öffnen:**
    *   Der Befehl startet einen lokalen Webserver. Sobald er bereit ist (du solltest eine Meldung wie `ready - started server on 0.0.0.0:9002, url: http://localhost:9002` sehen), öffne deinen Webbrowser und gehe zu:
        [http://localhost:9002](http://localhost:9002)

5.  **Website schließen:**
    *   STRG + C

Du solltest nun die Website sehen, die lokal auf deinem Computer läuft. Änderungen, die du am Code vornimmst (z. B. in Dateien unter `src/app/`), werden automatisch erkannt, und die Website wird im Browser neu geladen.

Um den Entwicklungsserver zu stoppen, gehe zurück zum Terminalfenster und drücke `Ctrl + C`.
