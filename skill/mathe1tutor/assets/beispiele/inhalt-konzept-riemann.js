/* Konzept: Riemannsummen → Integral, Trapezregel */
const CONFIG = {
  title: "Vom Rechteck zum Integral",
  subtitle: "$\\int_0^{\\pi/2}\\sin x\\,dx$ als Grenzwert von Zwischensummen",
  tags: ["Konzept"],
  autoplayMs: 6000
};
const LEGEND = [{c:"A", label:"$f(x)=\\sin x$"}, {c:"B", label:"Zwischensumme"}, {c:"C", label:"exakte Fläche"}];
const f = Math.sin, a = 0, b = Math.PI/2;
const ARTEN = ["links", "rechts", "mitte", "trapez"];
const summe = () => { const n = Math.round(W.n), h = (b-a)/n, art = ARTEN[W.art]; let s = 0;
  for (let k = 0; k < n; k++) { const l = a + k*h, r = l + h;
    s += art === "links" ? f(l) : art === "rechts" ? f(r) : art === "mitte" ? f(l + h/2) : (f(l) + f(r))/2; }
  return s*h; };
function build(){
  const K = koord({x:[-0.15,1.75], y:[-0.15,1.15], pi:true, dy:0.5});
  W.art = 0;
  at(0); K.achsen();
  at(1); regler("n", {min:1, max:40, step:1, wert:4, c:"B", label:"n", play:false});
  at(1,4); K.riemann(f, a, b, () => W.n, {c:"B", art:() => ARTEN[W.art], id:"R"});
  at(4); K.flaeche(f, a, b, {c:"C", opacity:0.28, id:"F"});
  at(5); K.riemann(f, a, b, () => W.n, {c:"B", art:"trapez", opacity:0.15, id:"T"});
  at(0); K.graph(f, {c:"A", name:"sin x", nameX:1.15, ndy:-18, id:"f", von:-0.1, bis:1.72});
}
const STEPS = [
  { title:"Gesucht: Fläche unter sin",
    text:"Wie groß ist die Fläche zwischen $\\cA{\\sin x}$ und der $x$-Achse für $0\\le x\\le\\frac\\pi2$? Idee: durch Rechtecke annähern.",
    hl:["f"] },
  { title:"Linke Zwischensumme",
    text:"Zerlege $[0,\\frac\\pi2]$ in $\\cB{n}$ gleich breite Teile und nimm als Höhe den Funktionswert am <b>linken</b> Rand. Weil $\\sin$ hier wächst, ist das zu wenig.",
    tex:() => `\\cB{S_n}=\\sum_{k=1}^{n} f(\\xi_k)\\,\\Delta x=\\cB{${tx(summe(),4)}}`,
    setze:{art:0}, hl:["R","n"] },
  { title:"Rechte Zwischensumme",
    text:"Mit dem <b>rechten</b> Rand ist es zu viel. Die wahre Fläche liegt dazwischen.",
    tex:() => `\\cB{S_n}=${tx(summe(),4)}`,
    setze:{art:1}, hl:["R"] },
  { title:"Feiner zerlegen: n → ∞",
    text:"Mit der Feinheit $\\to0$ streben <b>alle</b> Zwischensummen gegen denselben Wert – das ist das Riemannintegral. Wir lassen $\\cB{n}$ von 4 bis 40 laufen (Mittelpunkte).",
    tex:() => `n=${Math.round(W.n)}:\\quad \\cB{S_n}=${tx(summe(),5)}`,
    setze:{art:2}, set:{n:[4,40,4000]}, hl:["R","n"] },
  { title:"Exakt mit dem Hauptsatz",
    ask:"Welche Stammfunktion hat $\\sin x$? Setze die Grenzen ein.",
    text:"Hauptsatz: $\\int_a^bf\\,dx=F(b)-F(a)$ mit $F'=f$. Hier $F(x)=-\\cos x$:",
    tex:"\\cC{\\int_0^{\\pi/2}\\sin x\\,dx}=\\left[-\\cos x\\right]_0^{\\pi/2}=0-(-1)=\\cC{1}",
    hl:["F"] },
  { title:"Trapezregel",
    text:"Numerisch nimmt man statt Rechtecken <b>Trapeze</b>. Mit $n=1$ gibt das nur $0{,}785$, aber der Fehler fällt wie $\\frac1{n^2}$. Probier den Regler.",
    tex:() => `T_{${Math.round(W.n)}}=\\cB{${tx(summe(),5)}},\\quad\\text{Fehler }=${tx(1-summe(),5)}`,
    setze:{art:3, n:1}, hl:["T","n"] }
];
const PRAXIS = {
  title: "Arbeit beim Dehnen einer Feder",
  text: "Die Kraft einer Feder wächst mit der Dehnung: $F=cx$. Die Arbeit ist die Fläche unter dieser Kurve, $\\int_0^l cx\\,dx=\\frac{cl^2}2$. Ist die Kraft nur als Messreihe bekannt, rechnet man die Fläche mit der Trapezregel."
};
