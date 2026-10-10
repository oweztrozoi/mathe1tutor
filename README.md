# Mathe1Tutor

Ein Claude-Skill für Mathematik 1 (Analysis einer Veränderlichen, komplexe Zahlen, Vektoren), der Aufgaben **Schritt für Schritt mit Animationen** erklärt und **Funktionsgraphen mit Schiebereglern** direkt im Chat zeichnet.

> **KI-generiert:** Dieses Repository wurde vollständig von einer KI (Claude, Anthropic) erstellt. Es ist kein offizielles Lehrmaterial, enthält keine offiziellen Unterlagen der TU Wien und kann Fehler enthalten.

## Funktionen

- **Schieberegler:** Stelle $x_0$, Schrittweite $h$, Parameter, Gliedanzahl … – Graph, Punkte und Formeln laufen live mit.
- **Farbige Formeln:** Jede Größe hat in Graph, Regler und Formel dieselbe Farbe.
- **Animationen:** Grenzübergänge (Sekante → Tangente, Riemannsumme → Integral) und Parameterverläufe laufen auf Knopfdruck ab.
- **Fertige Bausteine:** Graphen mit Polstellen-Erkennung, Tangenten, Flächen, Riemann-/Trapezsummen, Folgen mit ε-Streifen, komplexe Zeiger, ziehbare Punkte, 3D mit ViewCube, Numerik.

## Installation

Den Ordner `skill/mathe1tutor` als Zip packen und in Claude unter *Einstellungen → Skills* hochladen. Eigene Kursunterlagen können optional als Markdown in `references/unterlagen/` ergänzt werden.

## Aufbau

```
skill/mathe1tutor/
├── SKILL.md                    Anleitung für Claude
├── references/                 Animations-API, Anwendungen, optionale Unterlagen
├── scripts/baue_animation.py   baut Animationen und prüft auf Fehler
└── assets/
    ├── engine/                 Quellcode der Engine
    ├── dist/ma1-chat.js        gebündelte Engine, per jsDelivr geladen
    └── beispiele/              Muster-Animationen
```

Im Chat wird die Engine über jsDelivr aus diesem Repository geladen (Adresse in `assets/cdn.txt`). So muss Claude pro Animation nur den Inhalt schreiben, etwa 4 kB statt 33 kB.

**Engine ändern:** in `assets/engine/` bearbeiten, `python3 skill/mathe1tutor/scripts/baue_animation.py --kopf` ausführen, pushen und den neuen Commit-Hash in `assets/cdn.txt` eintragen.
