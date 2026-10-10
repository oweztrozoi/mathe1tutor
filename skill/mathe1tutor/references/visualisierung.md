# Animationen und Graphen – Referenz

Die Engine ist fertig: Schrittsteuerung, Farben, KaTeX, Koordinatensystem mit Graphen, Schieberegler mit Live-Neuzeichnen, Ziehpunkte, Numerik und 3D mit ViewCube. **Du schreibst nur `inhalt.js`** mit `CONFIG`, `LEGEND`, `build()`, `STEPS`, `PRAXIS` (darf `null` sein) und optional `LIVE`. Lies vorher das passende Muster:

| Muster | zeigt |
|---|---|
| `assets/beispiele/inhalt-konzept-ableitung.js` | Regler, Live-Formeln, animierter Grenzübergang (`set`), Ziehpunkt, Tangente |
| `assets/beispiele/inhalt-rechenbeispiel-kurvendiskussion.js` | Rechenbeispiel mit `ask`, mehrere Graphen, Punkte, Erkunden-Schritt |
| `assets/beispiele/inhalt-konzept-riemann.js` | Flächen, Riemann/Trapez, `setze`, `pi:true`-Achse |
| `assets/beispiele/inhalt-komplex-wurzeln.js` | Gauß'sche Zahlenebene (`gleich:true`), Zeiger, Winkel, Kreis, Polygon |
| `assets/beispiele/inhalt-3d-kreuzprodukt.js` | 3D-Vektoren mit Reglern, Parallelogramm, `view:` |

## Ablauf
1. **Erst rechnen, dann zeichnen.** Ergebnisse mit Code prüfen (Python/JS). In Texten Zahlen per `tx(wert,stellen)` (Formel, Dezimalkomma `{,}`) bzw. `fmt()` (Fließtext) einsetzen, `vz(v)` liefert vorzeichenbehaftet `+3{,}0`/`-3{,}0` zum Anhängen. Nicht abtippen.
2. Drehbuch: 4–10 Schritte, je eine Idee. Rechenbeispiel: Aufgabe → Ansatz/Satz → Rechenschritte (mind. einer als `ask`) → Ergebnis → Kontrolle → (Erkunden mit Regler). Konzept: Frage → Intuition am Graphen → Definition → Live-Erkunden → Folgerung.
3. Bauen:
   - Chat (bevorzugt, wenn ein Inline-Widget-Werkzeug wie `show_widget` da ist): `python3 scripts/baue_animation.py inhalt.js w.html --chat`, Inhalt von `w.html` unverändert als Widget-Code übergeben; Titel im Antworttext nennen. Steht in `assets/cdn.txt` eine URL, lädt das Fragment die Engine per CDN (~4–6 kB). Schreibt die Person „ohne CDN“ oder meldet eine leere Animation: `--chat --voll`.
   - Sonst / zum Behalten: `python3 scripts/baue_animation.py inhalt.js seite.html` → Artifact oder Datei.
   - Ohne Codeausführung: `assets/kopf-chat.html` (bzw. `kopf-seite.html`) + Inhalt + `</script>` (Seite zusätzlich `</body></html>`).
   - Nach Änderungen an `assets/engine/`: `--kopf` ausführen.
4. Wenn möglich rendern und Screenshot prüfen (Beschriftungen, Formelbreite).

## Farben – Graph, Regler und Formel identisch
`"A"` blau `\cA{}` · `"B"` orange `\cB{}` · `"C"` grün `\cC{}` · `"D"` rot `\cD{}` · `"E"` violett `\cE{}` · `"F"` türkis `\cF{}` · neutral `"var(--muted)"`.
Eine Größe = eine Farbe überall: Graph, Punkt, Regler, Zahl in der Formel (`\cB{${tx(W.h,2)}}`). Bewährt: $f$ A, $f'$/Sekante/zweite Größe B, Hilfsgrößen/Flächen C, Ergebnis/Fehler D, Tangente/Ableitungswert E, Sonderpunkte F. `LEGEND` darf TeX enthalten: `{c:"A", label:"$f$"}`. In JS-Strings Backslash doppelt (`"\\cA{x}"`), in Template-Strings ebenso.

## Inhalt-Gerüst
```js
const CONFIG = {title:"…", subtitle:"… $TeX$", tags:["Konzept","Grundlagen"], autoplayMs:6000};
const LEGEND = [{c:"A", label:"$f$"}, …];
const f = x => x*x/2 - 1;                 // Funktionen als JS; Math.sin usw. ausschreiben
function build(){
  const K = koord({x:[-3,3], y:[-2,4]});
  at(0); K.achsen();
  regler("a", {min:-2, max:2, step:0.1, wert:1, c:"B", label:"a"});     // → W.a
  at(0); K.graph(x => W.a*f(x), {c:"A", name:"f", id:"f"});            // zeichnet live neu
}
const STEPS = [{title:"…", text:"… $\\cA{f}$ …", tex:() => `\\cB{a}=${tx(W.a,1)}`, hl:["f","a"]}, …];
const LIVE = () => `…`;                    // optional: Live-Formel unter den Reglern (immer sichtbar)
const PRAXIS = {title:"…", text:"…"};      // oder null
```
**Reservierte Namen** (Engine, nicht neu deklarieren): `W, REGS, UPD, ELS, live, koord, regler, at, viewbox, label, text, line, arrow, poly, rect, circle, point, winkel, abl, integral, nullstelle, nullstellen, newton, taylor, fak, binom, tx, fmt, vz, val, col, rad, ansicht3d, animiere, setzeW, show, play, stop, cur` (plus interne Hilfsfunktionen) – eigene Namen deutsch und konkret wählen (`sek`, `summe`, `d1`). Mathematische Funktionen als `Math.sin` usw. oder lokal `const {sin, cos, exp, sqrt, PI} = Math;` **innerhalb** von `build()` bzw. der eigenen Funktionen.

## STEPS
`{title, text, tex, ask, hl:[ids/Reglernamen], dim:true, set, setze, live, view}`
- `text`, `tex`, `ask` dürfen **Funktionen** sein (`() => \`…${tx(W.a)}…\``): werden bei jeder Reglerbewegung neu gesetzt.
- `tex` eine Display-Formel (lang → `\\begin{aligned}…\\end{aligned}`); `ask` versteckt `tex` bis „Lösung zeigen“ (Abspielen stoppt dort).
- `set:{h:[1.5,0.02,3000]}` animiert `W.h` beim Betreten des Schritts von 1,5 auf 0,02 in 3 s; `set:{a:2}` gleitet vom aktuellen Wert auf 2. **Das** ist die Grenzwert-/Parameter-Animation.
- `setze:{art:2}` setzt Werte sofort (für Umschalter).
- `live:` überschreibt `LIVE` für diesen Schritt (`null` = ausblenden).
- `hl` lässt Elemente pulsieren und hebt gleichnamige Regler hervor; `dim:true` blendet den Rest ab.
- `view:"vorne"` usw. nur mit 3D.

## Regler und Ziehpunkte
`regler(name, {min, max, step, wert, c, label, d, einheit, play})` → `W[name]`; sichtbar ab dem aktuellen `at()`-Schritt. `label` ist TeX (`"x_0"`, `"\\varphi"`). ▶ lässt den Wert hin und her laufen (`play:false` bei ganzzahligen Reglern wie `n`). `d` = angezeigte Nachkommastellen.
`K.zieh(name, f, {c,label})`: ziehbarer Punkt auf dem Graphen von `f` (ohne `f` auf der $x$-Achse); nutzt die Grenzen des gleichnamigen Reglers, also **nach** `regler()` aufrufen.
Eigene Animation: `animiere(name, ziel, ms, start)`.

## Koordinatensystem `koord`
`const K = koord({x:[x0,x1], y:[y0,y1], box:[px,py,b,h], gleich:false, pi:false, namen:["x","y"], dx, dy, gitter:true})`
Standard-viewBox 600×380 (ändern mit `viewbox(w,h)` **vor** `koord`). `gleich:true` = gleiche Skalierung (Kreise, komplexe Zahlen, Vektoren). `pi:true` = $x$-Ticks bei Vielfachen von $\frac\pi2$. `K.X(x)`, `K.Y(y)`, `K.P([x,y])` → Pixel.

**Alle Argumente dürfen Funktionen sein** (`() => [W.x0, f(W.x0)]`); dann wird live neu gezeichnet.
- `K.achsen()` Gitter, Achsen, Zahlen.
- `K.graph(f, {c, w, dash, von, bis, n, name, nameX, ndx, ndy, id})` – Polstellen/Lücken werden automatisch unterbrochen.
- `K.kurve(t => [x,y], t0, t1, {c, name, nameT})` Parameterkurve.
- `K.punkt(p, {c, label, lot:true, lx:"x_0", ly:"f(x_0)", hohl:true, dx, dy})` – `lot` zeichnet Hilfslinien zu den Achsen.
- `K.strecke(A, B, {c, w, dash, label})` · `K.gerade(p, m, {c, label})` · `K.tangente(f, a, {c})` · `K.senkrecht(x, {label})` · `K.waagrecht(y, {label})` (Asymptoten).
- `K.pfeil(A, B, {c, label})` · `K.zeiger(z, {c, label})` (vom Ursprung) · `K.winkel(m, rPx, a1, a2, {c, label})` (Winkel in **Radiant**).
- `K.flaeche(f, a, b, {g, c, opacity, vorzeichen:true, c2})` Fläche zwischen `f` und `g` (Standard $x$-Achse); `vorzeichen` färbt negative Anteile mit `c2`.
- `K.riemann(f, a, b, n, {art:"links"|"rechts"|"mitte"|"ober"|"unter"|"trapez", c})`.
- `K.folge(n => a_n, N, {c, n0, verbinden})` · `K.band(y0, eps, {c, label})` ($\varepsilon$-Streifen).
- `K.kreis(m, r, {c, dash, fill})` · `K.polygon(pts, {c, close, dash, fill})` · `K.text(p, "s", {c, dx, dy})`.

## Numerik (für korrekte Zahlen und Live-Werte)
`abl(f)` bzw. `abl(f,2)` → Ableitungsfunktion (numerisch) · `integral(f,a,b)` (Simpson) · `nullstelle(f,a,b)` (Bisektion) · `nullstellen(f,a,b)` (alle mit Vorzeichenwechsel) · `newton(f,x0,n)` → Iterierte · `taylor(f,a,n)` (bis $n\approx4$; exakte Koeffizienten lieber selbst angeben) · `fak(n)`, `binom(n,k)`.
Exakte Ergebnisse (Brüche, Wurzeln, π) gehören als TeX in den Text; die Numerik dient für Live-Werte und Kontrolle.

## 3D (`ansicht3d`, orthografisch, Rechtssystem, z nach oben)
Drehen per Ziehen, **ViewCube** oben rechts (Fläche → Normalansicht, Ecke → Isometrie, Pfeile → Nachbarseite, „Home“).
```js
const V = ansicht3d({x:290, y:250, s:62, yaw:35, pitch:24, zentrum:[mx,my,mz]});  // s = px/Einheit
V.achsen(len) · V.vektor(v, c, "u", {ab:p}) · V.pfeil(a, b, c, txt) · V.linie(a, b, {dash}) · V.punkt(p, txt, {c})
V.flaeche([p1,p2,…], {c}) · V.parallelogramm(u, v, {c, ab}) · V.netz((x,y) => z, {x:[a,b], y:[c,d], n, c}) · V.kurve(t => [x,y,z], t0, t1, {c})
V.quader(ecke, [dx,dy,dz], {c}) · V.bogen(m, r, n1, n2, a1°, a2°, c, txt) · V.text(p, "…") · V.gehe("vorne"|"oben"|…|"home")
```
Punkte/Vektoren/Winkel dürfen Funktionen sein (Regler!). Schritt mit `view:"vorne"` zeigt Winkel unverzerrt, danach `view:"home"`. Vorne = Blick von −y, Rechts = von +x, Oben = von +z.
**Wann 3D:** Vektoren im ℝ³ (Kreuzprodukt, Spatprodukt, Ebenen/Hesse, Geraden), Zylinder-/Kugelkoordinaten, Flächen $z=f(x,y)$ mit partiellen Ableitungen und Tangentialebene, Rotationskörper. Sonst ist 2D klarer.

## Layout-Tipps
- Bereich so wählen, dass alles Wichtige drin ist (Extrema, Nullstellen, Schnittpunkte); Graph-Namen mit `nameX`/`ndx`/`ndy` von anderen Kurven wegsetzen.
- Text-Labels im SVG verstehen nur `_`/`^` (z. B. `"x_0"`, `"f'"`), kein TeX; griechische Buchstaben als Unicode (`"φ"`).
- Was nicht mehr gebraucht wird, mit `at(von,bis)` ausblenden.
- Regler-Werte, die bis zum Schritt `k` gelten sollen, über `set`/`setze` des Schritts steuern, nicht in `build()` verändern.
