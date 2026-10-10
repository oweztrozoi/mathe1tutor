/* Rechenbeispiel: Kurvendiskussion f(x) = x³/6 − 2x */
const CONFIG = {
  title: "Kurvendiskussion Schritt für Schritt",
  subtitle: "$f(x)=\\tfrac16x^3-2x$: Nullstellen, Extrema, Wendepunkt",
  tags: ["Rechenbeispiel"],
  autoplayMs: 6500
};
const LEGEND = [
  {c:"A", label:"$f$"}, {c:"B", label:"$f'$"}, {c:"E", label:"$f''$"},
  {c:"C", label:"Nullstellen"}, {c:"D", label:"Extrema"}, {c:"F", label:"Wendepunkt"}
];
const f = x => x*x*x/6 - 2*x, d1 = x => x*x/2 - 2, d2 = x => x;
const r12 = Math.sqrt(12);                       // Nullstellen ±√12 = ±2√3
function build(){
  const K = koord({x:[-5,5], y:[-5,5]});
  at(0); K.achsen();
  at(0); K.graph(f, {c:"A", name:"f", nameX:3.9, ndx:14, id:"f"});
  at(1); for (const x of [-r12, 0, r12]) K.punkt([x, 0], {c:"C", id:"N"});
  at(2); K.graph(d1, {c:"B", dash:true, w:2, name:"f'", nameX:-3.2, ndx:-16, id:"d1"});
  at(2,5); K.graph(d2, {c:"E", dash:true, w:1.6, name:"f''", nameX:-3.6, ndx:-18, ndy:6, id:"d2"});
  at(3); for (const x of [-2, 2]) K.senkrecht(x, {c:"B", id:"st"});
  at(4); K.punkt([-2, f(-2)], {c:"D", label:"H", dy:-14, id:"H"});
  at(4); K.punkt([ 2, f( 2)], {c:"D", label:"T", dy:16, id:"T"});
  at(5); K.punkt([0, 0], {c:"F", label:"W", dx:14, dy:16, id:"W"});
  at(5,5); K.tangente(f, 0, {c:"F", dash:true, w:1.8, id:"wt"});
  at(6); regler("x", {min:-4.5, max:4.5, step:0.05, wert:-3.5, c:"A", label:"x"});
  at(6); K.tangente(f, () => W.x, {c:"B", w:2, id:"tan"});
  at(6); K.zieh("x", f, {c:"A"});
}
const STEPS = [
  { title:"Aufgabe",
    text:"Diskutiere $\\cA{f(x)=\\tfrac16x^3-2x}$ auf $\\mathbb R$: Nullstellen, Monotonie, Extrema, Wendepunkte. Erste Beobachtung: $f(-x)=-f(x)$, also ist $f$ <b>ungerade</b> (punktsymmetrisch zum Ursprung).",
    hl:["f"] },
  { title:"Nullstellen",
    text:"$x$ herausheben: $\\cA{f(x)}=x\\left(\\tfrac16x^2-2\\right)=0$. Ein Produkt ist null, wenn ein Faktor null ist.",
    tex:"\\cC{x_1=0},\\qquad \\tfrac16x^2=2\\;\\Rightarrow\\;\\cC{x_{2,3}=\\pm\\sqrt{12}=\\pm2\\sqrt3\\approx\\pm3{,}464}",
    hl:["N"] },
  { title:"Ableitungen",
    ask:"Bilde $\\cB{f'}$ und $\\cE{f''}$ mit der Potenzregel $(x^n)'=nx^{n-1}$.",
    text:"Gliedweise ableiten (Summenregel):",
    tex:"\\cB{f'(x)=\\tfrac12x^2-2},\\qquad \\cE{f''(x)=x}",
    hl:["d1","d2"] },
  { title:"Stationäre Stellen",
    ask:"Wo ist die Tangente waagrecht? Setze $\\cB{f'(x)}=0$.",
    text:"Notwendige Bedingung für innere Extrema: $\\cB{f'(a)}=0$. Im Bild: dort schneidet der Graph von $\\cB{f'}$ die $x$-Achse.",
    tex:"\\cB{\\tfrac12x^2-2=0}\\;\\Rightarrow\\;x^2=4\\;\\Rightarrow\\;\\cD{x=\\pm2}",
    hl:["d1","st"] },
  { title:"Maximum oder Minimum?",
    text:"Hinreichende Bedingung (Leibniz): $\\cE{f''(a)}<0$ ⇒ lokales Maximum, $\\cE{f''(a)}>0$ ⇒ lokales Minimum.",
    tex:"\\begin{aligned}\\cE{f''(-2)}&=\\cE{-2}<0 &&\\Rightarrow \\cD{H\\left(-2\\,\\middle|\\,\\tfrac83\\right)}\\text{ Hochpunkt}\\\\ \\cE{f''(2)}&=\\cE{2}>0 &&\\Rightarrow \\cD{T\\left(2\\,\\middle|\\,-\\tfrac83\\right)}\\text{ Tiefpunkt}\\end{aligned}",
    hl:["H","T","d2"] },
  { title:"Wendepunkt",
    text:"$\\cE{f''(x)=x}=0$ bei $x=0$, und $\\cE{f''}$ wechselt dort das Vorzeichen ⇒ <b>Wendestelle</b>. Links ist $f$ konkav, rechts konvex. Die Wendetangente hat die Steigung $\\cB{f'(0)}=-2$.",
    tex:"\\cF{W(0\\,|\\,0)},\\qquad \\text{Wendetangente: }\\cF{y=-2x}",
    hl:["W","wt"] },
  { title:"Selbst erkunden",
    text:"Zieh den Punkt oder den Regler: Die Tangentensteigung ist $\\cB{f'(x)}$, das Vorzeichen von $\\cE{f''(x)}$ zeigt die Krümmung.",
    tex:() => `x=${tx(W.x,2)}:\\quad \\cB{f'(x)=${tx(d1(W.x),2)}}\\;(${d1(W.x)>0?"\\text{steigend}":d1(W.x)<0?"\\text{fallend}":"\\text{waagrecht}"}),\\quad \\cE{f''(x)=${tx(d2(W.x),2)}}\\;(${d2(W.x)>0?"\\text{konvex}":d2(W.x)<0?"\\text{konkav}":"\\text{Wendestelle}"})`,
    set:{x:[-3.5,3.5,5000]}, hl:["x","tan"] },
  { title:"Kontrolle und Ergebnis",
    text:"Kontrolle mit der Symmetrie: $f$ ungerade ⇒ $H$ und $T$ liegen punktsymmetrisch ✓, Wendepunkt im Ursprung ✓. Monotonie: steigend auf $(-\\infty,-2]$ und $[2,\\infty)$, fallend auf $[-2,2]$.",
    tex:"\\cC{N_{1,2,3}=0,\\;\\pm2\\sqrt3},\\quad \\cD{H\\!\\left(-2\\,\\middle|\\,\\tfrac83\\right),\\;T\\!\\left(2\\,\\middle|\\,-\\tfrac83\\right)},\\quad \\cF{W(0|0)}",
    hl:["N","H","T","W"] }
];
const PRAXIS = {
  title: "Wellengeschwindigkeit",
  text: "Im tiefen Kanal gilt $v(\\lambda)=\\sqrt{\\frac k\\lambda+\\frac\\lambda k}$. Dasselbe Vorgehen – $v'(\\lambda)=0$ setzen – liefert die einzige stationäre Stelle $\\lambda=k$ und die kleinstmögliche Geschwindigkeit $v(k)=\\sqrt2$ (in den Einheiten des Modells)."
};
