/* Konzept: Ableitung als Grenzwert der Sekantensteigung */
const CONFIG = {
  title: "Von der Sekante zur Tangente",
  subtitle: "Die Ableitung als Grenzwert $\\;f'(x_0)=\\lim_{h\\to0}\\frac{f(x_0+h)-f(x_0)}{h}$",
  tags: ["Konzept"],
  autoplayMs: 6000
};
const LEGEND = [
  {c:"A", label:"Graph $f$"}, {c:"B", label:"Sekante"}, {c:"C", label:"Schrittweite $h$"},
  {c:"D", label:"Zuwachs $\\Delta f$"}, {c:"E", label:"Tangente"}
];
const f = x => x*x*x/4 - x + 1;          // f(x) = x³/4 − x + 1
const df = x => 3*x*x/4 - 1;             // exakte Ableitung zum Vergleich
const sek = () => (f(W.x0+W.h) - f(W.x0)) / W.h;
function build(){
  const K = koord({x:[-3.2,3.6], y:[-1.5,4.5]});
  at(0); K.achsen();
  regler("x0", {min:-2.5, max:2.5, step:0.05, wert:1.5, c:"A", label:"x_0"});
  at(0); K.graph(f, {c:"A", name:"f", nameX:-2.6, id:"f"});
  at(0); K.punkt(() => [W.x0, f(W.x0)], {c:"A", label:"P", lot:true, lx:"x_0"});
  at(1); regler("h", {min:0.02, max:2, step:0.01, wert:1.5, c:"C", label:"h"});
  at(1); K.punkt(() => [W.x0+W.h, f(W.x0+W.h)], {c:"B", label:"Q", lot:true, lx:() => W.h>0.4 ? "x_0+h" : ""});
  at(1); K.gerade(() => [W.x0, f(W.x0)], sek, {c:"B", id:"sek"});
  at(2); K.strecke(() => [W.x0, f(W.x0)], () => [W.x0+W.h, f(W.x0)], {c:"C", w:3, id:"h", label:"h", dy:16});
  at(2); K.strecke(() => [W.x0+W.h, f(W.x0)], () => [W.x0+W.h, f(W.x0+W.h)], {c:"D", w:3, id:"df", label:"Δf", dx:22, dy:0});
  at(4); K.tangente(f, () => W.x0, {c:"E", w:2.4, dash:true, id:"tan"});
  at(5); K.zieh("x0", f, {c:"A"});
}
const STEPS = [
  { title:"Wie steil ist der Graph in P?",
    text:"Gegeben ist $\\cA{f(x)=\\tfrac14x^3-x+1}$. Für eine Gerade ist die Steigung einfach – aber wie steil ist eine <b>Kurve</b> im Punkt $\\cA{P}$? Verschieb $\\cA{x_0}$ mit dem Regler.",
    hl:["f"] },
  { title:"Hilfspunkt Q und Sekante",
    text:"Wir nehmen einen zweiten Punkt $\\cB{Q}$ im Abstand $\\cC{h}$ dazu. Die Gerade durch $\\cA{P}$ und $\\cB{Q}$ heißt <b>Sekante</b>. Ihre Steigung können wir ausrechnen.",
    hl:["sek","h"] },
  { title:"Steigungsdreieck",
    text:() => `Steigung = Zuwachs $\\cD{\\Delta f}$ durch Schrittweite $\\cC{h}$ (Differenzenquotient). Live mit den Reglerwerten:`,
    tex:() => `\\frac{\\cD{f(x_0+h)-f(x_0)}}{\\cC{h}}=\\frac{\\cD{${tx(f(W.x0+W.h)-f(W.x0),3)}}}{\\cC{${tx(W.h,2)}}}=\\cB{${tx(sek(),3)}}`,
    hl:["h","df"] },
  { title:"h wird kleiner",
    text:"Jetzt lassen wir $\\cC{h}\\to0$ laufen. $\\cB{Q}$ wandert zu $\\cA{P}$, die Sekante dreht sich – und kommt zur Ruhe. Zieh den $\\cC{h}$-Regler auch selbst.",
    tex:() => `\\cC{h}=${tx(W.h,2)}\\;\\Rightarrow\\;\\frac{\\cD{\\Delta f}}{\\cC{h}}=\\cB{${tx(sek(),3)}}`,
    set:{h:[1.5,0.02,3500]}, hl:["sek","h"] },
  { title:"Grenzlage = Tangente",
    text:"Die Grenzlage der Sekante ist die <b>Tangente</b> in $\\cA{P}$. Ihre Steigung ist die <b>Ableitung</b> $\\cE{f'(x_0)}$:",
    tex:() => `\\cE{f'(x_0)}=\\lim_{\\cC{h}\\to0}\\frac{\\cD{f(x_0+h)-f(x_0)}}{\\cC{h}}=\\tfrac34x_0^2-1=\\cE{${tx(df(W.x0),3)}}`,
    hl:["tan"] },
  { title:"Selbst ausprobieren",
    ask:"Bei welchen $x_0$ ist die Tangente <b>waagrecht</b>? Rechne mit $f'(x)=\\tfrac34x^2-1=0$ und prüf es dann, indem du den Punkt $\\cA{P}$ ziehst.",
    text:"Aus $\\tfrac34x_0^2=1$ folgt $x_0=\\pm\\tfrac{2}{\\sqrt3}\\approx\\pm1{,}155$. Dort ist $\\cE{f'(x_0)}=0$: lokales Minimum bzw. Maximum.",
    tex:() => `x_0=${tx(W.x0,2)}:\\quad\\cE{f'(x_0)}=${tx(df(W.x0),3)}`,
    hl:["tan"] }
];
const LIVE = () => `\\cA{x_0}=${tx(W.x0,2)},\\;\\cC{h}=${tx(W.h??1.5,2)}\\;\\Rightarrow\\;\\text{Sekante }\\cB{${tx(sek(),3)}},\\;\\text{Tangente }\\cE{${tx(df(W.x0),3)}}`;
const PRAXIS = {
  title: "Momentangeschwindigkeit",
  text: "Ist $s(t)$ der zurückgelegte Weg, dann ist $\\frac{s(t)-s(a)}{t-a}$ die mittlere Geschwindigkeit im Zeitraum $[a,t]$ (Sekante). Für $t\\to a$ wird daraus die Momentangeschwindigkeit $v(a)=\\dot s(a)$ (Tangente) – genau das, was ein Tacho anzeigt."
};
