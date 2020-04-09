---
title: Anleitung
subtitle: Bringe deinen ersten Freifunk-Knoten online!
menu:
  main:
    name: Anleitung
layout: page
---
# Anleitung

Die Installation unserer Software halten wir so einfach wie möglich. Die Datei mit unserer Firmware kannst du an der selben Stelle hochladen, wo der Hersteller Updates für dein Gerät vorgesehen hat. Um Freifunk zu nutzen, musst du keine technischen Dinge einstellen.

Wenn du deinen Rechner schon einmal selbst an ein Netzwerk angeschlossen hast, solltest du mit unserer Anleitung zurecht kommen. Wenn nicht, dann bringe bitte deinen Router und deinen Laptop zu einem unserer Treffen mit oder frage uns im Slack-Chat!

## Gerät besorgen

Erst einmal benötigst du ein kompatibles Gerät. Handelsübliche WLAN-Router für 20 bis 30 Euro reichen aus, um einen Freifunk-Knoten zu betreiben. Aber bevor du nun in den Laden gehst und Geld ausgibst, schau einmal in die Liste der Downloads, welche Modelle mit unserer Software funktionieren.

Jedes Modell gibt es in verschiedenen Revisionen. Die aktuellen Revisionen werden meistens unterstützt. Klicke auf den den richtigen Knopf und speichere die Firmware ab, dann geht's unten weiter.

Falls du ein vorbereitetes Gerät bekommen hast, das du nur noch einrichten musst, dann überspringe die Installation und gehe direkt zur Einrichtung.

## Installation

Mit unserer Firmware wird dein WLAN-Router zu einem Freifunk-Knoten umprogrammiert. Die Installation funktioniert genau so, wie eine Aktualisierung der Firmware durch eine Datei des Herstellers. Mit unserer Firmware wird das Gerät umprogrammiert.

Es gibt nicht nur viele Modelle, sondern bei den meisten davon auch unterschiedliche Revisionen. Da diese recht unterschiedlich ausfallen können, benötigst du die genau passende Firmware-Datei für deinen Router. Auf der Unterseite deines Routers befindet sich ein Aufkleber mit der genauen Bezeichnung. Dort steht zum Beispiel "TP-Link WR-841ND Rev. 9".

Besuche nun die Download-Seite und lade die passende Firmware-Datei herunter.

Schließe den Router mit dem Netzteil an eine Steckdose an und verbinde ihn mit dem grauen Patchkabel zu deinem Rechner. Am Router kommt das Kabel in die Buchse 1 (gelb). Wenn dein Laptop keine passende Buchse hat, brauchst du noch einen USB-Netzwerkadapter.

Nun kommt es auf den Hersteller an, wie genau man die Firmware-Datei einspielen muss. Dazu gibt es normalerweise im Handbuch eine Anleitung. Bei TP-Link geht man folgendermaßen vor:

1. Besuche die Adresse [http://192.168.0.1](http://192.168.0.1/)
2. Nun kommt eine Passwort-Abfrage. Gib für Benutzernamen und Passwort jeweils "admin" ein.
3. Öffne "System Tools" und gehe zu "Firmware Upgrade".
4. Drücke bei "File" auf "Datei auswählen" und suche die heruntergeladene Firmware-Datei heraus.
5. Drücke auf "Upgrade" und im erscheinenden Fenster auf "OK".
6. Warte, bis der Prozess beendet ist und ziehe nicht den Stecker!
7. Wenn die Lampen am Router einmal alle gleichzeitig aufleuchten und danach ausgehen, startet das Gerät neu.
8. Sobald die Betriebslampe ⚙ blinkt, ist das Gerät bereit zur Einrichtung.

## Einrichtung

Nun befindet sich das Gerät im Config-Mode und erwartet einige Angaben, bevor es in Betrieb gehen kann. Als erstes verbinde es erneut mit deinem Rechner, in dem du das Patchkabel an einem Ende herausziehst und wieder einsteckst. Dadurch aktualisiert sich die Netzwerkverbindung an deinem Rechner. Dann besuche folgende Adresse:[http://192.168.1.1](http://192.168.1.1/)

Fülle das erscheinende Formular aus. Die Angaben sind freiwillig, denn sie landen öffentlich im Netz! Wir hoffen aber, dass du einen Ort der Aufstellung und eine Kontakt-Info hinterlässt, damit Freifunker aus deiner Community dich erreichen, wenn sie das Netzwerk mit dir zusammen erweitern wollen oder dich wegen Umbaumaßnahmen erreichen müssen.

**Name dieses Knotens** ist deine freie Wahl. Am besten, du hälst dich an eine Struktur. Wir empfehlen dir "Location-Raum-Nummer" oder ähnliches. Beispiele: "Poststraße-26-Dach", " Eris-Tempel-001", "Bolzplatz-Nord".

**Mesh-VPN** möchtest du wahrscheinlich aktivieren. Das bedeutet, dass dein Knoten über das lokale Netzwerk einen Tunnel zu einem unserer Server aufbaut. Über diesen verbindet sich deine Location mit dem Freifunk-Netzwerk und dem Rest des Internets. Wenn das Gerät lediglich zur Erweiterung deines lokalen Netzwerks dienen soll, dann benötigst du diese Funktion nicht unbedingt.

**Knoten auf der Karte anzeigen** ermöglicht die Anzeige deines Knotens auf unserer[Karte.](http://map.freifunk-duesseldorf.de/)Dazu gib die Koordinaten ein. Diese findest du beispielsweise bei [Google Maps](https://www.google.de/maps), wenn du auf die Stelle drei Mal schnell hintereinander klickst.

In dem Feld **Kontakt** trage bitte deine Mail-Adresse ein. Wenn du nicht deine private Anschrift verwenden möchtest, empfehlen wir dir die Verwendung einer weiteren Mailbox nur für diesen Zweck.

Es gibt noch ein paar mehr Felder und Funktionen, die wir hier nicht vollständig aufzählen möchten. Diese sollten selbsterklärend sein oder nur für erfahrene Anwender interessant. Wenn du unten angekommen bist und zufrieden mit den Eingaben, dann klicke auf "Fertig".

Nun startet dein Knoten neu. Das Patchkabel kannst du entfernen oder dazu verwenden, den Knoten mit der WAN-Buchse (blau) ans Netzwerk zu verbinden. Das hat aber nur einen Zweck, wenn du im vorherigen Schritt das Mesh-VPN aktiviert hast.

Fertig! Dein Knoten ist nun einsatzbereit. Solltest du einmal etwas ändern wollen, dann drücke so lange auf den Reset-Knopf des Knotens, bis er neu startet. Dann befindet sich dieser wieder im Config-Mode und du kannst alle Einstellungen verändern.

## Aufstellen

Den Freifunk-Knoten baust du am besten da auf, wo er gut erreichbar ist. Das ist zum Beispiel auf der Fensterbank der Fall. Wenn das Kabel mit dem Internet-Anschluss nicht bis dorthin reicht, dann nimm einfach mehrere Knoten, so dass sie sich per WLAN verbinden.

Freifunk-Knoten, die zu der selben Community gehören, verbinden sich auch immer per WLAN. So reichen sie wie in einer Eimerkette die Daten von Punkt zu Punkt weiter. Wer mag, kann mit größeren und speziellen Antennen diese Verbindungen verbessern und die Reichweite erhöhen.

Wir freuen uns, wenn du als neuer Freifunker zu unseren [Treffen](https://freifunk-duesseldorf.de/kontakt) kommst.