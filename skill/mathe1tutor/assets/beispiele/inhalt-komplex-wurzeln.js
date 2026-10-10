/* Rechenbeispiel: n-te Wurzeln einer komplexen Zahl – Gauß'sche Zahlenebene mit gleich skalierten Achsen */
const CONFIG = {
  title: "n-te Wurzeln in der Zahlenebene",
  subtitle: "Beispiel: dritte Wurzeln von $z=1+i$",
  tags: ["Rechenbeispiel"],
  autoplayMs: 6000
};
const LEGEND = [
  {c:"A", label:"$z$"}, {c:"B", label:"Wurzeln $w_k$"}, {c:"C", label:"Kreis $\\sqrt[n]{|z|}$"}, {c:"E", label:"Winkel"}
];
const r = () => Math.hypot(W.re, W.im), phi = () => Math.atan2(W.im, W.re);
const wk = k => { const R = Math.pow(r(), 1/W.n), t = (phi() + 2*Math.PI*k)/W.n; return [R*Math.cos(t), R*Math.sin(t)]; };
function build(){
  const K = koord({x:[-1.8,1.8], y:[-1.5,1.5], gleich:true, namen:["Re","Im"], dx:0.5, dy:0.5});
  at(0); K.achsen();
  at(5); regler("n", {min:2, max:8, step:1, wert:3, c:"B", label:"n", play:false});
  at(5); regler("re", {min:-1.5, max:1.5, step:0.05, wert:1, c:"A", label:"\\operatorname{Re}z"});
  at(5); regler("im", {min:-1.5, max:1.5, step:0.05, wert:1, c:"A", label:"\\operatorname{Im}z"});
  at(0); K.zeiger(() => [W.re, W.im], {c:"A", label:"z", id:"z"});
  at(1); K.winkel([0,0], 34, 0, phi, {c:"E", label:"φ", id:"phi"});
  at(2); K.kreis([0,0], () => Math.pow(r(), 1/W.n), {c:"C", dash:true, id:"kreis"});
  at(3); K.zeiger(() => wk(0), {c:"B", label:"w_1", id:"w1"});
  at(3); K.winkel([0,0], 58, 0, () => phi()/W.n, {c:"E", label:"φ/n", loff:20, id:"phin"});
  at(4); for (let k = 1; k < 8; k++) K.zeiger(() => k < W.n ? wk(k) : [0,0], {c:"B", label:() => k < W.n ? "w_"+(k+1) : "", id:"wk"});
  at(4); K.polygon(() => Array.from({length:W.n}, (_, k) => wk(k)), {c:"B", close:true, dash:true, w:1.2, id:"eck"});
}
const STEPS = [
  { title:"Die Zahl z",
    text:"Gesucht sind alle $w$ mit $w^3=\\cA{z}=1+i$. Zuerst zeichnen wir $\\cA{z}$ als Zeiger in der Gauß'schen Zahlenebene.",
    hl:["z"] },
  { title:"Polarform",
    ask:"Bestimme Betrag $|z|$ und Argument $\\varphi$ von $1+i$.",
    text:"Wurzeln zieht man am einfachsten in Polarform: $|z|=\\sqrt{1^2+1^2}$, und $z$ liegt auf der Winkelhalbierenden.",
    tex:"\\cA{z}=\\sqrt2\\left(\\cos\\cE{\\tfrac\\pi4}+i\\sin\\cE{\\tfrac\\pi4}\\right)",
    hl:["phi"] },
  { title:"Betrag: n-te Wurzel ziehen",
    text:"Alle Wurzeln haben denselben Betrag $\\sqrt[3]{|z|}=\\sqrt[3]{\\sqrt2}=\\sqrt[6]2\\approx1{,}122$. Sie liegen also auf einem $\\cC{\\text{Kreis}}$.",
    tex:"|w_k|=\\cC{\\sqrt[6]2\\approx1{,}122}",
    hl:["kreis"] },
  { title:"Erste Wurzel: Winkel durch n",
    text:"Für die erste Wurzel wird das Argument durch $n=3$ geteilt:",
    tex:"\\cB{w_1}=\\sqrt[6]2\\left(\\cos\\cE{\\tfrac{\\pi}{12}}+i\\sin\\cE{\\tfrac{\\pi}{12}}\\right)\\approx\\cB{1{,}0842+0{,}2905\\,i}",
    hl:["w1","phin"] },
  { title:"Alle n Wurzeln: +2π/n",
    ask:"Wie viele dritte Wurzeln gibt es, und um welchen Winkel sind sie gegeneinander verdreht?",
    text:"Statt $\\varphi$ darf man $\\varphi+2k\\pi$ nehmen. Geteilt durch $n$ ergibt das $n$ verschiedene Winkel im Abstand $\\tfrac{2\\pi}{n}$ – ein regelmäßiges $n$-Eck.",
    tex:"\\begin{aligned}\\cB{w_{k+1}}&=\\sqrt[6]2\\left(\\cos\\tfrac{\\frac\\pi4+2k\\pi}{3}+i\\sin\\tfrac{\\frac\\pi4+2k\\pi}{3}\\right)\\\\ \\cB{w_2}&\\approx-0{,}7937+0{,}7937\\,i,\\quad \\cB{w_3}\\approx-0{,}2905-1{,}0842\\,i\\end{aligned}",
    hl:["wk","eck"] },
  { title:"Selbst variieren",
    text:"Ändere $n$ und $\\cA{z}$: Es entstehen immer $n$ Wurzeln auf einem Kreis, gleichmäßig verteilt.",
    tex:() => `n=${W.n},\\;\\cA{z}=${tx(W.re,2)}${vz(W.im,2)}\\,i:\\quad|w_k|=\\cC{${tx(Math.pow(r(),1/W.n),3)}},\\;\\Delta\\varphi=\\tfrac{2\\pi}{${W.n}}`,
    hl:["n"] }
];
const PRAXIS = {
  title: "Wechselstromtechnik",
  text: "In der Elektrotechnik werden Spannungen und Ströme als rotierende Zeiger $U_0e^{i\\omega t}$ in der komplexen Ebene dargestellt. Die drei Phasen des Drehstroms sind genau um $\\tfrac{2\\pi}3$ gegeneinander verdreht – wie die drei dritten Wurzeln einer Zahl."
};
