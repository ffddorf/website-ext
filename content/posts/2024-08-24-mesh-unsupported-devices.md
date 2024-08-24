---
title: Neue Firmware fürs Mesh-Netzwerk
subtitle: Bald kommt neue Software, ältere Geräte werden nicht unterstützt
date: 2024-08-24
layout: post
---

Damit die Teilnahme am Düsseldorfer Freifunk-Mesh-Netzwerk möglichst einfach ist, stellen wir eine alternative Firmware bereit, die auf vielen gängigen Geräten installiert werden kann. In diesem Mini-Betriebssytem ist alle Software und Konfiguration enthalten, die benötigt wird um einen Router oder Access Point zu einem "Freifunk-Knoten" zu machen. Uns ist wichtig, dass ihr keine Netzwerk-Admins mit langjähriger Erfahrung sein müsst um an Orten eurer Wahl Freifunk bereitzustellen.

Es wird bald ein größeres Update dieser Firmware geben. Leider wird dieses Update höhere Anforderungen an die Hardware der Geräte stellen. Das bedeutet, dass einige ältere Geräte das Update leider nicht installieren können werden.

Für die technischen Details [lest unten weiter](#technische-details).

Was bedeutet das für euch? Wenn ihr ein Gerät betreibt, das den Mindestanforderungen nicht mehr genügt wird dieses Gerät keine Sicherheitsupdates mehr erhalten und perspektivisch aus dem Netz ausgeschlossen werden. Wann genau das passiert haben wir noch nicht festgelegt und wir werden das mit genug Vorlaufzeit bekanntgeben.

Falls euer Gerät auf der Liste unten auftaucht, empfehlen wir euch, über eine Anschaffung eines neuen Geräts jetzt schon nachzudenken, damit der Betrieb eures Knotens nicht bald unterbrochen wird.

Wenn ihr Fragen zur Umstellung habt, kommt in [unseren Matrix-Kanal](https://matrix.to/#/#freifunk-duesseldorf:matrix.org) oder [schreibt uns eine E-Mail](mailto:kontakt@freifunk-duesseldorf.de).

### Geräte ohne Support

Dies sind die Geräte, die das Update nicht installieren können:

- D-Link
  - DIR-615 (C1, D1, D2, D3, D4, H1)
- Linksys
  - WRT160NL
- TP-Link
  - TL-MR13U (v1)
  - TL-MR3020 (v1)
  - TL-MR3040 (v1, v2)
  - TL-MR3220 (v1, v2)
  - TL-MR3420 (v1, v2)
  - TL-WA701N/ND (v1, v2)
  - TL-WA730RE (v1)
  - TL-WA750RE (v1)
  - TL-WA801N/ND (v1, v2, v3)
  - TL-WA830RE (v1, v2)
  - TL-WA850RE (v1)
  - TL-WA860RE (v1)
  - TL-WA901N/ND (v1, v2, v3, v4, v5)
  - TL-WA7210N (v2)
  - TL-WA7510N (v1)
  - TL-WR703N (v1)
  - TL-WR710N (v1, v2)
  - TL-WR740N (v1, v3, v4, v5)
  - TL-WR741N/ND (v1, v2, v4, v5)
  - TL-WR743N/ND (v1, v2)
  - TL-WR840N (v2)
  - TL-WR841N/ND (v3, v5, v7, v8, v9, v10, v11, v12)
  - TL-WR841N/ND (v1, v2)
  - TL-WR843N/ND (v1)
  - TL-WR940N (v1, v2, v3, v4, v5, v6)
  - TL-WR941ND (v2, v3, v4, v5, v6)
  - TL-WR1043N/ND (v1)
  - WDR4900
- Ubiquiti
  - AirGateway
  - AirGateway Pro
  - AirRouter
  - Bullet
  - LS-SR71
  - Nanostation XM
  - Nanostation Loco XM
  - Picostation
- Unknown
  - A5-V11
- VoCore
  - VoCore (8M, 16M)

## Technische Details

Die Firmware des Freifunk Düsseldorf basiert auf dem Framework [Gluon](https://gluon.readthedocs.io/), das von vielen Freifunk-Communities genutzt wird, um eine komfortable Firmware bereitzustellen. Gluon wiederum basiert of [OpenWRT](https://openwrt.org/), einer sehr verbereiteten Linux-Distribution für Netzwerk-Hardware.

Zum Zeitpunkt dieses Posts setzen wir beim Freifunk Düsseldorf die Version `2021.1.x` von Gluon ein. Am Jahr in der Versionsnummer könnt ihr erkennen, das diese schon etwas älter ist. Die aktuelle Version ist `2023.2.x`. Wir wollen Schritt für Schritt auf die neuste Version aktualisieren, da diese neue Features mitbringt und neue Geräte unterstützt.

Der Sprung von `2021.1.x` auf `2022.1.x` aktualisiert die Version von OpenWRT von `19.07` auf `22.03`. Mit diesem Sprung kommen viele Änderungen, unter anderem dass OpenWRT nun mehr Flash-Speicher und RAM benötigt. Das bedeutet dass ältere Geräte, die weniger Flash-Speicher und RAM haben, nicht mit der Aktualisierung kompatibel sind.

### Neue Supernodes

Ein zusätzlicher Grund warum wir mindestens Gluon `2022.1.x` benutzen wollen ist ein bestimmtes Feature: _FastD L2TP Offloading_.

Wir arbeiten seit einigen Monaten an einer neuen Generation Supernodes - das sind die großen Router, die als VPN-Endpunkte den Traffic der Freifunk-Knoten über das AS (Autonome System) des Freifunk Düsseldorf ausleiten. Bei dieser neuen Generation wollen wir einige Altlasten loswerden und das Netz um einiges schneller machen.

Teil des Konzept ist es, `fastd` statt `tunneldigger` als VPN-Koordinator einzusetzen. `tunneldigger` erhält keine Updates mehr und läuft nur mit python2. `fastd` haben wir früher eingesetzt, dann aber durch `tunneldigger` ersetzt, um L2TP als Tunnel-Protokoll nutzen zu können. L2TP wird direkt im Linux-Kernel verarbeitet und ist dadurch deutlich schneller. Da `fastd` jetzt auch L2TP unterstützt können wir wieder auf eine Software wechseln, die stabil funktioniert und weiterentwickelt wird.

Im Rahmen der neuen Supernode-Generation werden wir außerdem den Hosting-Standort wechseln und die Supernodes direkt an unserem Standort DUS2 betreiben, statt wie aktuell bei Hetzner. Davon versprechen wir uns deutliche Performance-Gewinne und geringere Kosten.
