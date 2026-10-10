/* Konzept 3D: Kreuzprodukt – Regler für Winkel und Länge, drehbar mit ViewCube */
const CONFIG = {
  title: "Das Kreuzprodukt im Raum",
  subtitle: "$\\vec u\\times\\vec v$ steht normal auf beiden – Länge = Parallelogrammfläche",
  tags: ["Konzept", "3D"],
  autoplayMs: 6000
};
const LEGEND = [
  {c:"A", label:"$\\vec u$"}, {c:"B", label:"$\\vec v$"}, {c:"E", label:"$\\vec u\\times\\vec v$"}, {c:"C", label:"Parallelogramm"}
];
const kreuz = (a,b) => [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]];
const u = () => [2, 0, 0];
const v = () => [W.v*Math.cos(W.phi), W.v*Math.sin(W.phi), 0];
const w = () => kreuz(u(), v());
const L = a => Math.hypot(...a);
function build(){
  viewbox(600, 400);
  regler("phi", {min:0, max:Math.PI, step:0.01, wert:1.0, c:"B", label:"\\varphi", d:2});
  regler("v", {min:0.5, max:2.5, step:0.05, wert:1.8, c:"B", label:"|\\vec v|"});
  const V = ansicht3d({x:290, y:250, s:62, yaw:35, pitch:24, zentrum:[1,0.8,1]});
  at(0); V.achsen;
  at(0); V.vektor(u, "A", "u", {id:"u"});
  at(0); V.vektor(v, "B", "v", {id:"v"});
  at(1); V.bogen([0,0,0], 0.6, [1,0,0], [0,1,0], 0, () => W.phi*180/Math.PI, "B", "φ", {id:"phi"});
  at(2); V.parallelogramm(u, v, {c:"C", fillOpacity:0.2, id:"par"});
  at(3); V.vektor(w, "E", "u×v", {id:"w"});
}
const STEPS = [
  { title:"Zwei Vektoren",
    text:"$\\cA{\\vec u}=(2,0,0)$ liegt auf der $x$-Achse, $\\cB{\\vec v}$ in der $xy$-Ebene unter dem Winkel $\\cB{\\varphi}$. Dreh die Skizze mit der Maus oder dem Würfel.",
    hl:["u","v"] },
  { title:"Definition (Komponenten)",
    text:"Das äußere Produkt ist komponentenweise definiert:",
    tex:"\\vec u\\times\\vec v=\\begin{pmatrix}u_2v_3-u_3v_2\\\\u_3v_1-u_1v_3\\\\u_1v_2-u_2v_1\\end{pmatrix}" },
  { title:"Länge = Fläche",
    text:() => `$\\|\\vec u\\times\\vec v\\|=\\|\\cA{\\vec u}\\|\\,\\|\\cB{\\vec v}\\|\\sin\\cB{\\varphi}$ ist der Inhalt des <b>Parallelogramms</b>. Bei $\\cB{\\varphi}=0$ oder $\\pi$ (parallel) ist sie null.`,
    tex:() => `\\cC{A}=\\cA{${tx(2,0)}}\\cdot\\cB{${tx(W.v,2)}}\\cdot\\sin\\cB{${tx(W.phi,2)}}=\\cC{${tx(L(w()),3)}}`,
    hl:["par","phi","v"] },
  { title:"Richtung: normal auf beide",
    text:"$\\cE{\\vec u\\times\\vec v}$ steht normal auf $\\cA{\\vec u}$ und $\\cB{\\vec v}$; $\\cA{\\vec u},\\cB{\\vec v},\\cE{\\vec u\\times\\vec v}$ bilden ein <b>Rechtssystem</b> (Rechte-Hand-Regel). Schau von vorne – dann siehst du den rechten Winkel unverzerrt.",
    tex:() => `\\cE{\\vec u\\times\\vec v}=\\begin{pmatrix}0\\cdot0-0\\cdot v_2\\\\0\\cdot v_1-2\\cdot0\\\\2\\cdot v_2-0\\cdot v_1\\end{pmatrix}=\\cE{\\begin{pmatrix}0\\\\0\\\\${tx(w()[2],3)}\\end{pmatrix}}`,
    view:"vorne", hl:["w"] },
  { title:"Lass φ laufen",
    text:"Der Winkel läuft von $0$ bis $\\pi$: Die Länge von $\\cE{\\vec u\\times\\vec v}$ folgt genau $\\sin\\cB{\\varphi}$ – maximal bei $\\cB{\\varphi}=\\tfrac\\pi2$.",
    tex:() => `\\cB{\\varphi}=${tx(W.phi,2)}:\\quad\\|\\cE{\\vec u\\times\\vec v}\\|=\\cC{${tx(L(w()),3)}}`,
    set:{phi:[0.05,3.09,5000]}, view:"home", hl:["w","par"] },
  { title:"Antikommutativ",
    ask:"Was passiert mit $\\vec v\\times\\vec u$? Überlege mit der Rechte-Hand-Regel, bevor du nachsiehst.",
    text:"Vertauschen dreht die Richtung um: $\\vec v\\times\\vec u=-\\,\\vec u\\times\\vec v$. Der Betrag (Fläche) bleibt gleich.",
    tex:"\\vec v\\times\\vec u=-(\\vec u\\times\\vec v)" }
];
const PRAXIS = {
  title: "Drehmoment und Rotation",
  text: "Greift eine Kraft $\\vec f$ im Punkt $\\vec p$ an, ist $\\vec p\\times\\vec f$ ihr Moment bezüglich $\\vec o$. Und bei einer Rotation mit Winkelgeschwindigkeitsvektor $\\vec\\omega$ hat jeder Körperpunkt die Geschwindigkeit $\\vec v=\\vec\\omega\\times\\vec x$."
};
