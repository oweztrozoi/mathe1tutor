/* Mathe1Tutor – Chat-Engine (CDN). KI-generiert (Claude, Anthropic), kein offizielles Lehrmaterial. Baut Stil und Gerüst in <div id="ma1"> und startet, sobald der Inhalt geladen ist. */
(function(){var r=document.getElementById("ma1")||document.body.appendChild(document.createElement("div"));var h=document.head||document.body,st=document.createElement("style");st.textContent=":root{\n--bg:#f7f7f4; --card:#ffffff; --ink:#1d1d1b; --muted:#6b6b66; --line:#d9d8d2;\n--struct:#3a3a36; --hatch:#8a8a84; --hl:#fff3bf; --accent:#2f6fdf;\n--cA:#2f6fdf; --cB:#e8710a; --cC:#1e9e5a; --cD:#d93636; --cE:#8b5cf6; --cF:#0e9fb3;\n}\n@media (prefers-color-scheme: dark){\n:root:not([data-mode=\"light\"]){\n--bg:#171716; --card:#22221f; --ink:#ecebe6; --muted:#a3a29b; --line:#3b3a36;\n--struct:#d6d5cf; --hatch:#8f8e88; --hl:#4a4215; --accent:#6d9cf5;\n--cA:#6d9cf5; --cB:#f59a4a; --cC:#4cc98a; --cD:#f26b6b; --cE:#b29bfb; --cF:#3fc5d8;\n}\n}\n:root[data-mode=\"dark\"]{\n--bg:#171716; --card:#22221f; --ink:#ecebe6; --muted:#a3a29b; --line:#3b3a36;\n--struct:#d6d5cf; --hatch:#8f8e88; --hl:#4a4215; --accent:#6d9cf5;\n--cA:#6d9cf5; --cB:#f59a4a; --cC:#4cc98a; --cD:#f26b6b; --cE:#b29bfb; --cF:#3fc5d8;\n}\n*{box-sizing:border-box}\n.wrap{max-width:1100px;margin:0 auto;padding:16px}\nheader h1{font-size:1.35rem;margin:0 0 2px}\nheader p{margin:0;color:var(--muted)}\n.tag{display:inline-block;font-size:.75rem;padding:1px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted);margin-right:6px}\n.grid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:14px;margin-top:12px}\n@media (max-width:820px){.grid{grid-template-columns:minmax(0,1fr)}}\n.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px}\nsvg#stage{width:100%;height:auto;display:block;touch-action:manipulation}\n.legend{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:8px;font-size:.85rem;color:var(--muted)}\n.legend>span::before{content:\"\";display:inline-block;width:12px;height:12px;border-radius:3px;background:var(--c);margin-right:6px;vertical-align:-1px}\n.stephead{display:flex;justify-content:space-between;align-items:baseline;gap:8px}\n.stephead h2{font-size:1.05rem;margin:0}\n.count{color:var(--muted);font-size:.85rem;white-space:nowrap}\n#text{margin:8px 0}\n#formula{background:var(--bg);border-radius:8px;padding:10px 12px;overflow-x:auto;min-height:2.4em}\n#formula:empty{display:none}\n.ask{border-left:3px solid var(--accent);padding:6px 10px;margin:10px 0;background:color-mix(in srgb,var(--accent) 8%,transparent);border-radius:0 8px 8px 0}\n.ask>b{display:block;font-size:.8rem;color:var(--accent);text-transform:uppercase;letter-spacing:.04em}\nbutton.primary{background:var(--accent);border-color:var(--accent);color:#fff}\nbutton:disabled{opacity:.4;cursor:default}\n.controls{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:12px}\n.dots{display:flex;flex-wrap:wrap;gap:5px;margin-left:auto}\n.dots i{width:10px;height:10px;border-radius:50%;background:var(--line);cursor:pointer}\n.dots i.done{background:color-mix(in srgb,var(--accent) 45%,var(--line))}\n.dots i.now{background:var(--accent)}\n.praxis{margin-top:14px}\n.praxis h3{margin:0 0 4px;font-size:1rem}\n.praxis .k{font-size:.75rem;text-transform:uppercase;letter-spacing:.05em;color:var(--muted)}\n.hidden{display:none!important}\n.el{transition:opacity .45s ease}\n.el.off{opacity:0;pointer-events:none}\n.el.on{opacity:1}\n.el.dim{opacity:.28}\n.draw path.stroke,.draw line.stroke{stroke-dasharray:var(--len);stroke-dashoffset:var(--len);animation:draw .7s ease forwards}\n@keyframes draw{to{stroke-dashoffset:0}}\n.pulse{animation:pulse 1.1s ease-in-out 2}\n@keyframes pulse{50%{filter:drop-shadow(0 0 6px var(--hl)) drop-shadow(0 0 2px var(--hl))}}\n.hlbox{fill:var(--hl);opacity:.0;transition:opacity .3s}\n.el.hl .hlbox{opacity:.9}\nsvg text{font-family:\"Cambria Math\",\"STIX Two Math\",\"Times New Roman\",serif;font-style:italic}\nsvg text.up{font-style:normal;font-family:system-ui,sans-serif}\n.hint{font-size:.8rem;color:var(--muted);margin-top:4px}\nsvg#stage.dreh{cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none}\nsvg#stage.dreh:active{cursor:grabbing}\n.vc{cursor:pointer}\n.vc-f{fill:var(--card);stroke:var(--muted);stroke-width:1;fill-opacity:.92}\n.vc-f:hover{fill:var(--hl)}\n.vc-t{font:500 10px system-ui,sans-serif;fill:var(--ink);pointer-events:none;font-style:normal}\n.vc-c{fill:var(--muted);fill-opacity:.35}\n.vc-c:hover{fill:var(--accent);fill-opacity:1}\n.vc-h{font:11px system-ui,sans-serif;fill:var(--muted);font-style:normal}\n.vc-h:hover{fill:var(--accent)}\nsvg line.gl{stroke:var(--line);stroke-width:1}\n.zieh{cursor:grab;touch-action:none}\n.zieh:active{cursor:grabbing}\n.regler{margin-top:10px;display:flex;flex-direction:column;gap:6px}\n.rg{display:grid;grid-template-columns:minmax(44px,auto) minmax(0,1fr) 62px auto;align-items:center;gap:10px;padding:3px 8px;border-radius:8px;border:1px solid var(--line);transition:background .3s}\n.rg.hl{background:var(--hl)}\n.rg-n{color:var(--c);white-space:nowrap}\n.rg input{width:100%;accent-color:var(--c);margin:0}\n.rg output{font-variant-numeric:tabular-nums;text-align:right;color:var(--c);font-weight:500}\n.rg .rg-p{min-height:30px;padding:2px 9px;font-size:.8rem;line-height:1}\n.live{margin-top:8px;background:var(--bg);border-radius:8px;padding:4px 10px;overflow-x:auto}\n.live .katex-display{margin:.4em 0}\n:root:root:root{--bg:var(--surface-1);--card:var(--surface-2);--ink:var(--text-primary);--muted:var(--text-secondary);--line:var(--border-strong);--struct:var(--text-primary);--hatch:var(--text-secondary);--accent:var(--text-accent)}.wrap{padding:0}h1,h2,h3{font-weight:500}.card{border-width:.5px}.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}";h.appendChild(st);var l=document.createElement("link");l.rel="stylesheet";l.href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css";h.appendChild(l);r.innerHTML="<h2 class=\"sr-only\">Schritt-f\u00fcr-Schritt-Animation zu Mathematik 1</h2><div class=\"wrap\">\n<div class=\"grid\">\n<div class=\"card\">\n<svg id=\"stage\" viewBox=\"0 0 600 380\" role=\"img\" aria-label=\"Graph\"></svg>\n<div class=\"legend\" id=\"legend\"></div>\n<div class=\"regler hidden\" id=\"regler\"></div>\n<div class=\"live hidden\" id=\"live\"></div>\n<div class=\"hint hidden\" id=\"hint\">Skizze mit Maus oder Finger ziehen, um sie zu drehen.</div>\n</div>\n<div class=\"card\">\n<div class=\"stephead\"><h2 id=\"stitle\"></h2><span class=\"count\" id=\"count\"></span></div>\n<div id=\"text\"></div>\n<div class=\"ask hidden\" id=\"ask\"><b>Probier's zuerst selbst</b><span id=\"asktext\"></span></div>\n<button id=\"reveal\" class=\"hidden\">L\u00f6sung zeigen</button>\n<div id=\"formula\"></div>\n<div class=\"controls\">\n<button id=\"first\" title=\"Zum Anfang\">Anfang</button>\n<button id=\"prev\" title=\"Zur\u00fcck (\u2190)\">Zur\u00fcck</button>\n<button id=\"next\" class=\"primary\" title=\"Weiter (\u2192)\">Weiter</button>\n<button id=\"play\" title=\"Automatisch abspielen (Leertaste)\">Abspielen</button>\n<div class=\"dots\" id=\"dots\"></div>\n</div>\n</div>\n</div>\n<div class=\"card praxis hidden\" id=\"praxis\">\n<div class=\"k\">Anwendung</div>\n<h3 id=\"ptitle\"></h3>\n<div id=\"ptext\"></div>\n</div>\n</div>";})();
const NS="http://www.w3.org/2000/svg", svg=document.getElementById("stage"), ELS=[], UPD=[], KM={}, W={}, REGS=[];
let BUILD={from:0,to:Infinity};
const $=id=>document.getElementById(id);
const col=c=>c?(c.length===1?`var(--c${c})`:c):"var(--struct)";
const val=v=>typeof v==="function"?v():v;
const fmt=(v,d=1)=>(Math.abs(v)<.5*Math.pow(10,-d)?0:v).toFixed(d).replace(".",",").replace(/^-/,"−");
const rad=d=>d*Math.PI/180;
const tx=(v,d=1)=>fmt(v,d).replace(",","{,}").replace("−","-");
const vz=(v,d=1)=>(v<0&&Math.abs(v)>=.5*Math.pow(10,-d)?"-":"+")+tx(Math.abs(v),d);
let NODRAW=false,VIEW3D=null;
function mk(tag,a={},p){const n=document.createElementNS(NS,tag);for(const[k,v]of Object.entries(a))if(v!==undefined&&v!==null)n.setAttribute(k,v);(p||svg).appendChild(n);return n;}
function group(id){const g=mk("g",{class:"el off"});ELS.push({node:g,from:BUILD.from,to:BUILD.to,id:id||null});return g;}
function G(o){return o.parent||group(o.id);}
function at(from,to=Infinity){BUILD={from,to};}
function viewbox(w,h){svg.setAttribute("viewBox",`0 0 ${w} ${h}`);}
function live(f,id){const g=group(id);const r=()=>{while(g.firstChild)g.removeChild(g.firstChild);f(g);};UPD.push(r);r();return g;}
function label(x,y,txt,c,o={}){const g=G(o);
const t=mk("text",{x,y,fill:col(c),"font-size":o.size||17,"text-anchor":o.anchor||"middle","dominant-baseline":"middle",class:o.upright?"up":null,"font-weight":o.bold?"500":null},g);
const re=/([_^])(\{[^}]*\}|.)/g;let last=0,m;txt=String(txt);
const add=(s,sh)=>{if(!s)return;const ts=mk("tspan",sh?{"baseline-shift":sh,"font-size":"72%"}:{},t);ts.textContent=s;};
while((m=re.exec(txt))){add(txt.slice(last,m.index));add(m[2].replace(/[{}]/g,""),m[1]==="_"?"sub":"super");last=re.lastIndex;}
add(txt.slice(last));
if(o.halo!==false){t.setAttribute("paint-order","stroke");t.setAttribute("stroke","var(--card)");t.setAttribute("stroke-width","4");t.setAttribute("stroke-linejoin","round");}
return g;}
const text=(x,y,s,o={})=>label(x,y,s,o.c||"var(--muted)",{upright:true,size:14,...o});
function drawable(n,len){if(NODRAW)return n;n.setAttribute("class","stroke");n.style.setProperty("--len",len);return n;}
function line(x1,y1,x2,y2,o={}){const g=G(o);
const l=mk("line",{x1,y1,x2,y2,stroke:col(o.c),"stroke-width":o.w||2,"stroke-dasharray":o.dash?"7 5":null,"stroke-linecap":"round"},g);
if(!o.dash)drawable(l,Math.hypot(x2-x1,y2-y1));return g;}
function arrow(x1,y1,x2,y2,c,txt,o={}){const g=G(o);
const w=o.w||3,a=Math.atan2(y2-y1,x2-x1),h=Math.min(o.head||13,Math.hypot(x2-x1,y2-y1)*.6),bx=x2-h*Math.cos(a),by=y2-h*Math.sin(a),s=h*.5;
drawable(mk("path",{d:`M${x1},${y1} L${bx},${by}`,stroke:col(c),"stroke-width":w,fill:"none","stroke-linecap":"round","stroke-dasharray":o.dash?"7 5":null},g),Math.hypot(bx-x1,by-y1));
const tip=(X,Y,BX,BY)=>mk("path",{d:`M${X},${Y} L${BX+s*Math.sin(a)},${BY-s*Math.cos(a)} L${BX-s*Math.sin(a)},${BY+s*Math.cos(a)} Z`,fill:col(c)},g);
tip(x2,y2,bx,by);
if(o.double)tip(bx,by,bx-h*.9*Math.cos(a),by-h*.9*Math.sin(a));
if(txt){const lp=o.lpos??.5,off=o.loff??16,mx=x1+(x2-x1)*lp,my=y1+(y2-y1)*lp;label(mx-off*Math.sin(a),my+off*Math.cos(a),txt,c,{parent:g});}
return g;}
function poly(pts,o={}){const g=G(o);
mk("path",{d:"M"+pts.map(p=>p.join(",")).join(" L")+(o.close?" Z":""),stroke:o.c===null?"none":col(o.c),"stroke-width":o.w||2,fill:o.fill||"none","fill-opacity":o.fillOpacity??.18,"stroke-linejoin":"round","stroke-dasharray":o.dash?"7 5":null},g);return g;}
function rect(x,y,w,h,o={}){const g=G(o);mk("rect",{x,y,width:w,height:h,rx:o.rx||3,fill:o.fill||"var(--card)",stroke:col(o.c),"stroke-width":o.w||2,"fill-opacity":o.fillOpacity??1},g);return g;}
function circle(cx,cy,r,o={}){const g=G(o);mk("circle",{cx,cy,r,fill:o.fill||"none",stroke:col(o.c),"stroke-width":o.w||2,"stroke-dasharray":o.dash?"6 5":null},g);return g;}
function point(x,y,txt,o={}){const g=G(o);mk("circle",{cx:x,cy:y,r:o.r||4.5,fill:o.hohl?"var(--card)":col(o.c),stroke:col(o.c),"stroke-width":o.hohl?2:0},g);if(txt)label(x+(o.dx??12),y+(o.dy??-12),txt,o.c,{parent:g});return g;}
function winkel(cx,cy,r,a1,a2,c,txt,o={}){const g=G(o),P=a=>[cx+r*Math.cos(rad(a)),cy-r*Math.sin(rad(a))],[sx,sy]=P(a1),[ex,ey]=P(a2);
mk("path",{d:`M${sx},${sy} A${r},${r} 0 ${Math.abs(a2-a1)>180?1:0} ${a2>a1?0:1} ${ex},${ey}`,fill:"none",stroke:col(c||"var(--muted)"),"stroke-width":1.5},g);
if(txt){const[lx,ly]=P((a1+a2)/2),k=1+(o.loff??16)/r;label(cx+(lx-cx)*k,cy+(ly-cy)*k,txt,c||"var(--muted)",{parent:g,size:15});}return g;}
function abl(f,n=1,h=1e-4){if(n===2)return x=>(f(x+h)-2*f(x)+f(x-h))/(h*h);return x=>(f(x+h)-f(x-h))/(2*h);}
function integral(f,a,b,n=400){const h=(b-a)/n;let s=f(a)+f(b);for(let i=1;i<n;i++)s+=(i%2?4:2)*f(a+i*h);return s*h/3;}
function nullstelle(f,a,b,tol=1e-12){let fa=f(a);for(let i=0;i<200&&b-a>tol;i++){const m=(a+b)/2,fm=f(m);if(fa*fm<=0)b=m;else{a=m;fa=fm;}}return(a+b)/2;}
function nullstellen(f,a,b,n=400){const r=[];let x0=a,f0=f(a);for(let i=1;i<=n;i++){const x1=a+(b-a)*i/n,f1=f(x1);if(f0===0)r.push(x0);else if(f0*f1<0&&Math.abs(f1-f0)<1e6)r.push(nullstelle(f,x0,x1));x0=x1;f0=f1;}return r;}
function newton(f,x0,n=5){const d=abl(f),r=[x0];for(let i=0;i<n;i++){x0=x0-f(x0)/d(x0);r.push(x0);}return r;}
function taylor(f,a,n){const c=[f(a)];let h=.01;for(let k=1;k<=n;k++){let s=0;for(let j=0;j<=k;j++)s+=(j%2?-1:1)*binom(k,j)*f(a+(k/2-j)*h);c.push(s/Math.pow(h,k)/fak(k));}return x=>c.reduce((s,ck,k)=>s+ck*Math.pow(x-a,k),0);}
function fak(n){let r=1;for(let i=2;i<=n;i++)r*=i;return r;}
function binom(n,k){let r=1;for(let i=1;i<=k;i++)r=r*(n-k+i)/i;return r;}
function koord(o={}){
const vb=svg.viewBox.baseVal,VW=vb&&vb.width?vb.width:600,VH=vb&&vb.height?vb.height:380;
const[bx,by,bw,bh]=o.box||[44,14,VW-62,VH-40];let[x0,x1]=o.x||[-5,5],[y0,y1]=o.y||[-3,5];
if(o.gleich){const sx=bw/(x1-x0),sy=bh/(y1-y0),m=(y0+y1)/2,mx=(x0+x1)/2;if(sx<sy){const h=bh/sx;y0=m-h/2;y1=m+h/2;}else{const w=bw/sy;x0=mx-w/2;x1=mx+w/2;}}
const K={x0,x1,y0,y1,box:[bx,by,bw,bh]};
K.X=x=>bx+(x-x0)/(x1-x0)*bw;K.Y=y=>by+bh-(y-y0)/(y1-y0)*bh;K.P=p=>[K.X(p[0]),K.Y(p[1])];
K.sx=bw/(x1-x0);K.sy=bh/(y1-y0);
K.inv=(px,py)=>[x0+(px-bx)/bw*(x1-x0),y0+(by+bh-py)/bh*(y1-y0)];
const cid="kc"+Math.random().toString(36).slice(2,8),defs=svg.querySelector("defs")||mk("defs",{});
const cp=mk("clipPath",{id:cid},defs);mk("rect",{x:bx,y:by,width:bw,height:bh},cp);
const clip=g=>mk("g",{"clip-path":`url(#${cid})`},g);
const cl=(v,lo,hi)=>Math.max(lo,Math.min(hi,v));
const nice=r=>{const e=Math.pow(10,Math.floor(Math.log10(r/7))),f=r/7/e;return(f<1.5?1:f<3.5?2:f<7.5?5:10)*e;};
const piTxt=k=>{if(k===0)return"0";const s=k<0?"−":"",a=Math.abs(k);return s+(a===2?"π":a%2===0?(a/2)+"π":(a===1?"":a)+"π/2");};
K.achsen=(q={})=>{const g=G(q),dx=o.dx||(o.pi?Math.PI/2:nice(x1-x0)),dy=o.dy||nice(y1-y0),n=o.namen||["x","y"];
const dec=s=>s>=1?0:Math.ceil(-Math.log10(s)-1e-9);
const ax=cl(K.Y(0),by,by+bh),ay=cl(K.X(0),bx,bx+bw);
if(o.gitter!==false){for(let k=Math.ceil(x0/dx);k*dx<=x1+1e-9;k++)mk("line",{x1:K.X(k*dx),y1:by,x2:K.X(k*dx),y2:by+bh,class:"gl"},g);
for(let k=Math.ceil(y0/dy);k*dy<=y1+1e-9;k++)mk("line",{x1:bx,y1:K.Y(k*dy),x2:bx+bw,y2:K.Y(k*dy),class:"gl"},g);}
arrow(bx-4,ax,bx+bw+12,ax,"var(--muted)",null,{parent:g,w:1.4,head:9});arrow(ay,by+bh+4,ay,by-10,"var(--muted)",null,{parent:g,w:1.4,head:9});
label(bx+bw+12,ax+15,n[0],"var(--muted)",{parent:g,size:16,anchor:"end"});label(ay+9,by-6,n[1],"var(--muted)",{parent:g,size:16,anchor:"start"});
if(q.zahlen!==false){
for(let k=Math.ceil(x0/dx);k*dx<=x1+1e-9;k++){const v=k*dx;if(Math.abs(v)<1e-9||K.X(v)>bx+bw-10)continue;mk("line",{x1:K.X(v),y1:ax-3,x2:K.X(v),y2:ax+3,stroke:"var(--muted)"},g);
text(K.X(v),ax+13,o.pi?piTxt(Math.round(v/(Math.PI/2))):fmt(v,dec(dx)),{parent:g,size:11});}
for(let k=Math.ceil(y0/dy);k*dy<=y1+1e-9;k++){const v=k*dy;if(Math.abs(v)<1e-9||K.Y(v)<by+8)continue;mk("line",{x1:ay-3,y1:K.Y(v),x2:ay+3,y2:K.Y(v),stroke:"var(--muted)"},g);
text(ay-6,K.Y(v),fmt(v,dec(dy)),{parent:g,size:11,anchor:"end"});}
if(x0<0&&x1>0&&y0<0&&y1>0)text(ay-6,ax+12,"0",{parent:g,size:11,anchor:"end"});}
return g;};
const pfad=pts=>{let d="",prev=null;const H=bh*1.5;
for(const p of pts){if(!p||!isFinite(p[0])||!isFinite(p[1])){prev=null;continue;}const px=K.X(p[0]),py=cl(K.Y(p[1]),by-H,by+bh+H);
if(prev&&Math.abs(py-prev[1])>H)prev=null;d+=(prev?" L":" M")+px.toFixed(1)+","+py.toFixed(1);prev=[px,py];}return d;};
const stroke=(g,d,q,c)=>{const p=mk("path",{d,stroke:col(c),"stroke-width":q.w||2.6,fill:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-dasharray":q.dash?"7 5":null},clip(g));
if(!q.dash&&d)drawable(p,p.getTotalLength?p.getTotalLength()||bw:bw);return p;};
K.graph=(f,q={})=>live(g=>{const a=val(q.von)??x0,b=val(q.bis)??x1,n=q.n||500,pts=[];
for(let i=0;i<=n;i++){const x=a+(b-a)*i/n;let y;try{y=f(x);}catch(e){y=NaN;}pts.push([x,y]);}
stroke(g,pfad(pts),q,q.c);
if(q.name){const nx=val(q.nameX)??(a+(b-a)*.9),ny=f(nx);if(isFinite(ny))label(K.X(nx)+(q.ndx??0),cl(K.Y(ny),by+10,by+bh-10)+(q.ndy??-16),val(q.name),q.c,{parent:g});}},q.id);
K.kurve=(F,t0,t1,q={})=>live(g=>{const a=val(t0),b=val(t1),n=q.n||500,pts=[];for(let i=0;i<=n;i++){let p;try{p=F(a+(b-a)*i/n);}catch(e){p=null;}pts.push(p);}
stroke(g,pfad(pts),q,q.c);if(q.name){const p=F(val(q.nameT)??(a+(b-a)*.85));label(K.X(p[0])+(q.ndx??12),K.Y(p[1])+(q.ndy??-12),val(q.name),q.c,{parent:g});}},q.id);
K.punkt=(p,q={})=>live(g=>{const[x,y]=val(p);if(!isFinite(x)||!isFinite(y))return;const P=K.P([x,y]);
if(q.lot){const ax=cl(K.Y(0),by,by+bh),ay=cl(K.X(0),bx,bx+bw);line(P[0],P[1],P[0],ax,{parent:g,c:q.c,dash:true,w:1.4});line(P[0],P[1],ay,P[1],{parent:g,c:q.c,dash:true,w:1.4});
if(q.lx)label(P[0],ax+(y>=0?16:-14),val(q.lx),q.c,{parent:g,size:15});if(q.ly)label(ay+(x>=0?-8:8),P[1],val(q.ly),q.c,{parent:g,size:15,anchor:x>=0?"end":"start"});}
point(P[0],P[1],val(q.label),{parent:g,c:q.c,dx:q.dx,dy:q.dy,hohl:q.hohl,r:q.r});},q.id);
K.strecke=(A,B,q={})=>live(g=>{const P=K.P(val(A)),Q=K.P(val(B));
const l=mk("line",{x1:P[0],y1:P[1],x2:Q[0],y2:Q[1],stroke:col(q.c),"stroke-width":q.w||2,"stroke-dasharray":q.dash?"7 5":null,"stroke-linecap":"round"},clip(g));
if(!q.dash)drawable(l,Math.hypot(Q[0]-P[0],Q[1]-P[1]));
if(q.label)label((P[0]+Q[0])/2+(q.dx??0),(P[1]+Q[1])/2+(q.dy??-12),val(q.label),q.c,{parent:g});},q.id);
K.gerade=(p,m,q={})=>live(g=>{const[a,b]=val(p),k=val(m);if(!isFinite(k)||!isFinite(b))return;const f=x=>b+k*(x-a);
const P=K.P([x0,f(x0)]),Q=K.P([x1,f(x1)]);mk("line",{x1:P[0],y1:P[1],x2:Q[0],y2:Q[1],stroke:col(q.c),"stroke-width":q.w||2,"stroke-dasharray":q.dash?"7 5":null},clip(g));
if(q.label){const lx=val(q.labelX)??(a+(x1-a)*.6),L=K.P([lx,f(lx)]);label(L[0]+(q.dx??0),cl(L[1],by+10,by+bh-10)+(q.dy??-14),val(q.label),q.c,{parent:g});}},q.id);
K.tangente=(f,a,q={})=>K.gerade(()=>[val(a),f(val(a))],()=>abl(f)(val(a)),q);
K.senkrecht=(x,q={})=>live(g=>{const v=val(x);mk("line",{x1:K.X(v),y1:by,x2:K.X(v),y2:by+bh,stroke:col(q.c||"var(--muted)"),"stroke-width":q.w||1.5,"stroke-dasharray":q.durch?null:"6 5"},clip(g));if(q.label)label(K.X(v)+6,by+12,val(q.label),q.c||"var(--muted)",{parent:g,anchor:"start",size:15});},q.id);
K.waagrecht=(y,q={})=>live(g=>{const v=val(y);mk("line",{x1:bx,y1:K.Y(v),x2:bx+bw,y2:K.Y(v),stroke:col(q.c||"var(--muted)"),"stroke-width":q.w||1.5,"stroke-dasharray":q.durch?null:"6 5"},clip(g));if(q.label)label(bx+bw-4,K.Y(v)-10,val(q.label),q.c||"var(--muted)",{parent:g,anchor:"end",size:15});},q.id);
K.band=(yc,eps,q={})=>live(g=>{const c=val(yc),e=val(eps);mk("rect",{x:bx,y:K.Y(c+e),width:bw,height:Math.max(0,K.Y(c-e)-K.Y(c+e)),fill:col(q.c||"C"),"fill-opacity":q.opacity??.13},clip(g));
for(const s of[-1,1])mk("line",{x1:bx,y1:K.Y(c+s*e),x2:bx+bw,y2:K.Y(c+s*e),stroke:col(q.c||"C"),"stroke-width":1.2,"stroke-dasharray":"6 5"},clip(g));
if(q.label)label(bx+bw-6,K.Y(c+e)-10,val(q.label),q.c||"C",{parent:g,anchor:"end",size:15});},q.id);
K.pfeil=(A,B,q={})=>live(g=>{const P=K.P(val(A)),Q=K.P(val(B));if(Math.hypot(Q[0]-P[0],Q[1]-P[1])<2)return;arrow(P[0],P[1],Q[0],Q[1],q.c,val(q.label),{parent:g,w:q.w||2.6,loff:q.loff,lpos:q.lpos,dash:q.dash});},q.id);
K.zeiger=(z,q={})=>K.pfeil([0,0],z,q);
K.flaeche=(f,a,b,q={})=>live(g=>{const A=val(a),B=val(b),n=q.n||200,h=q.g||(()=>0);if(!(B>A))return;
const seg=(sel,c)=>{const top=[],bot=[];for(let i=0;i<=n;i++){const x=A+(B-A)*i/n,y=f(x),y0=h(x);const s=sel(y,y0);top.push(K.P([x,s?y:y0]));bot.push(K.P([x,y0]));}
mk("path",{d:"M"+top.map(p=>p.join(",")).join(" L")+" L"+bot.reverse().map(p=>p.join(",")).join(" L")+" Z",fill:col(c),"fill-opacity":q.opacity??.22,stroke:"none"},clip(g));};
if(q.vorzeichen){seg((y,y0)=>y>y0,q.c);seg((y,y0)=>y<y0,q.c2||"D");}else seg(()=>true,q.c);
if(q.label){const m=(A+B)/2;label(K.X(m),K.Y((f(m)+h(m))/2),val(q.label),q.c,{parent:g});}},q.id);
K.riemann=(f,a,b,n,q={})=>live(g=>{const A=val(a),B=val(b),N=Math.max(1,Math.round(val(n))),h=(B-A)/N,art=val(q.art)||"mitte";
for(let k=0;k<N;k++){const l=A+k*h,r=l+h;let pts;
if(art==="trapez")pts=[[l,0],[l,f(l)],[r,f(r)],[r,0]];
else{let y;if(art==="links")y=f(l);else if(art==="rechts")y=f(r);else if(art==="mitte")y=f(l+h/2);else{const s=[];for(let i=0;i<=8;i++)s.push(f(l+h*i/8));y=art==="ober"?Math.max(...s):Math.min(...s);}pts=[[l,0],[l,y],[r,y],[r,0]];}
mk("path",{d:"M"+pts.map(p=>K.P(p).join(",")).join(" L")+" Z",fill:col(q.c||"B"),"fill-opacity":q.opacity??.25,stroke:col(q.c||"B"),"stroke-width":1.2},clip(g));
if(art==="mitte"&&N<=24&&q.punkte!==false)point(...K.P([l+h/2,f(l+h/2)]),null,{parent:g,c:q.c||"B",r:2.8});}},q.id);
K.folge=(a,N,q={})=>live(g=>{const M=Math.round(val(N)),n0=q.n0??1,pts=[];for(let n=n0;n<=M;n++){const y=a(n);if(isFinite(y))pts.push([n,y]);}
if(q.verbinden)mk("path",{d:"M"+pts.map(p=>K.P(p).join(",")).join(" L"),stroke:col(q.c),"stroke-width":1,fill:"none","stroke-opacity":.5},clip(g));
const cg=clip(g);for(const p of pts){const P=K.P(p);mk("circle",{cx:P[0],cy:P[1],r:q.r||3.6,fill:col(q.c)},cg);}},q.id);
K.kreis=(m,r,q={})=>live(g=>{const M=K.P(val(m)),R=val(r);mk("ellipse",{cx:M[0],cy:M[1],rx:R*K.sx,ry:R*K.sy,fill:q.fill?col(q.c):"none","fill-opacity":q.fillOpacity??.12,stroke:col(q.c||"var(--muted)"),"stroke-width":q.w||1.6,"stroke-dasharray":q.dash?"6 5":null},clip(g));},q.id);
K.polygon=(pts,q={})=>live(g=>{const P=val(pts).map(K.P);if(P.length<2)return;mk("path",{d:"M"+P.map(p=>p.join(",")).join(" L")+(q.close?" Z":""),stroke:col(q.c),"stroke-width":q.w||1.6,fill:q.fill?col(q.c):"none","fill-opacity":q.fillOpacity??.15,"stroke-dasharray":q.dash?"6 5":null,"stroke-linejoin":"round"},clip(g));},q.id);
K.text=(p,s,q={})=>live(g=>{const P=K.P(val(p));label(P[0]+(q.dx??0),P[1]+(q.dy??0),val(s),q.c||"var(--ink)",{parent:g,size:q.size||16,anchor:q.anchor,upright:q.upright});},q.id);
K.winkel=(m,r,a1,a2,q={})=>live(g=>{const M=K.P(val(m)),A1=val(a1)*180/Math.PI,A2=val(a2)*180/Math.PI;if(Math.abs(A2-A1)<.5)return;winkel(M[0],M[1],val(r),A1,A2,q.c,val(q.label),{parent:g,loff:q.loff});},q.id);
K.zieh=(name,f,q={})=>{const g=live(g=>{const x=W[name],y=f?f(x):0;if(!isFinite(y))return;const P=K.P([x,y]);
mk("circle",{cx:P[0],cy:P[1],r:13,fill:col(q.c||"A"),"fill-opacity":.14,stroke:"none"},g);mk("circle",{cx:P[0],cy:P[1],r:6.5,fill:"var(--card)",stroke:col(q.c||"A"),"stroke-width":2.5},g);
if(q.label)label(P[0]+(q.dx??14),P[1]+(q.dy??-16),val(q.label),q.c||"A",{parent:g});},q.id);
g.classList.add("zieh");let drag=false;const R=REGS.find(r=>r.name===name)||{};
const mv=e=>{if(!drag)return;const pt=svg.createSVGPoint();pt.x=e.clientX;pt.y=e.clientY;const p=pt.matrixTransform(svg.getScreenCTM().inverse());
let x=K.inv(p.x,p.y)[0];const lo=R.min??x0,hi=R.max??x1,st=R.step||0;x=Math.max(lo,Math.min(hi,x));if(st)x=Math.round(x/st)*st;setzeW(name,+x.toFixed(10));};
g.addEventListener("pointerdown",e=>{drag=true;g.setPointerCapture(e.pointerId);e.stopPropagation();stopAnim(name);});g.addEventListener("pointermove",mv);g.addEventListener("pointerup",()=>drag=false);return g;};
return K;}
function ansicht3d(o={}){
const V={x:o.x??300,y:o.y??200,s:o.s??60,yaw:o.yaw??55,pitch:o.pitch??25,up:o.up||"z"};const HOME=[V.yaw,V.pitch];
const Z0=o.zentrum||[0,0,0],conv=q=>{const p=[q[0]-Z0[0],q[1]-Z0[1],q[2]-Z0[2]];return V.up==="y"?[p[0],-p[2],p[1]]:p;};
V.p=p=>{const[x,y,z]=conv(p),c=Math.cos(rad(V.yaw)),s=Math.sin(rad(V.yaw)),X=y*s-x*c,Y=x*s+y*c,cp=Math.cos(rad(V.pitch)),sp=Math.sin(rad(V.pitch));
return[V.x+V.s*X,V.y-V.s*(z*cp-Y*sp),Y*cp+z*sp];};
const add=(f,id)=>{const g=group(id);UPD.push(()=>{while(g.firstChild)g.removeChild(g.firstChild);f(g);});UPD[UPD.length-1]();return g;};
const add3=(a,b)=>[a[0]+b[0],a[1]+b[1],a[2]+b[2]];
V.linie=(a,b,q={})=>add(g=>{const[A,B]=[V.p(val(a)),V.p(val(b))];line(A[0],A[1],B[0],B[1],{parent:g,c:q.c,w:q.w,dash:q.dash});},q.id);
V.pfeil=(a,b,c,txt,q={})=>add(g=>{const[A,B]=[V.p(val(a)),V.p(val(b))];if(Math.hypot(B[0]-A[0],B[1]-A[1])>4)arrow(A[0],A[1],B[0],B[1],c,val(txt),{...q,parent:g,id:undefined});else if(txt)label(B[0]+12,B[1]-12,val(txt),c,{parent:g});},q.id);
V.vektor=(v,c,txt,q={})=>V.pfeil(()=>val(q.ab)||[0,0,0],()=>add3(val(q.ab)||[0,0,0],val(v)),c,txt,q);
V.punkt=(p,txt,q={})=>add(g=>{const P=V.p(val(p));point(P[0],P[1],val(txt),{...q,parent:g,id:undefined});},q.id);
V.text=(p,txt,q={})=>add(g=>{const P=V.p(val(p));label(P[0]+(q.dx||0),P[1]+(q.dy||0),val(txt),q.c||"var(--muted)",{parent:g,size:q.size||15});},q.id);
V.flaeche=(pts,q={})=>add(g=>{poly(val(pts).map(p=>V.p(p).slice(0,2)),{parent:g,close:true,c:q.c,fill:q.fill||col(q.c)||"var(--struct)",fillOpacity:q.fillOpacity??.14,dash:q.dash});},q.id);
V.achsen=(L=1.5,q={})=>add(g=>{const n=q.namen||["x","y","z"];[[L,0,0],[0,L,0],[0,0,L]].forEach((e,i)=>{const A=V.p(q.o||[0,0,0]),B=V.p([e[0]+(q.o?.[0]||0),e[1]+(q.o?.[1]||0),e[2]+(q.o?.[2]||0)]);
arrow(A[0],A[1],B[0],B[1],"var(--muted)",null,{parent:g,w:1.6,head:9});const d=Math.hypot(B[0]-A[0],B[1]-A[1])||1;label(B[0]+(B[0]-A[0])/d*12,B[1]+(B[1]-A[1])/d*12,n[i],"var(--muted)",{parent:g,size:15});});},q.id);
V.parallelogramm=(u,v,q={})=>V.flaeche(()=>{const p=val(q.ab)||[0,0,0],U=val(u),W_=val(v);return[p,add3(p,U),add3(add3(p,U),W_),add3(p,W_)];},q);
V.netz=(f,q={})=>add(g=>{const[xa,xb]=q.x||[-1,1],[ya,yb]=q.y||[-1,1],n=q.n||14,m=q.m||40;
for(let i=0;i<=n;i++){const xc=xa+(xb-xa)*i/n,yc=ya+(yb-ya)*i/n,P1=[],P2=[];
for(let j=0;j<=m;j++){const t=j/m,y=ya+(yb-ya)*t,x=xa+(xb-xa)*t;P1.push(V.p([xc,y,f(xc,y)]).slice(0,2));P2.push(V.p([x,yc,f(x,yc)]).slice(0,2));}
for(const P of[P1,P2])mk("path",{d:"M"+P.map(p=>p.join(",")).join(" L"),stroke:col(q.c||"var(--muted)"),"stroke-width":q.w||1,fill:"none","stroke-opacity":q.opacity??.55},g);}},q.id);
V.kurve=(F,t0,t1,q={})=>add(g=>{const a=val(t0),b=val(t1),n=q.n||120,P=[];for(let i=0;i<=n;i++)P.push(V.p(F(a+(b-a)*i/n)).slice(0,2));
mk("path",{d:"M"+P.map(p=>p.join(",")).join(" L"),stroke:col(q.c),"stroke-width":q.w||2.6,fill:"none","stroke-dasharray":q.dash?"7 5":null},g);},q.id);
V.quader=(p0,d,q={})=>add(g=>{const[x,y,z]=val(p0),[a,b,c]=val(d),P=(i,j,k)=>[x+i*a,y+j*b,z+k*c];
const F=[[P(0,0,0),P(1,0,0),P(1,1,0),P(0,1,0)],[P(0,0,1),P(1,0,1),P(1,1,1),P(0,1,1)],[P(0,0,0),P(1,0,0),P(1,0,1),P(0,0,1)],[P(0,1,0),P(1,1,0),P(1,1,1),P(0,1,1)],[P(0,0,0),P(0,1,0),P(0,1,1),P(0,0,1)],[P(1,0,0),P(1,1,0),P(1,1,1),P(1,0,1)]]
.map(f=>{const pr=f.map(V.p);return{pr,depth:pr.reduce((s,p)=>s+p[2],0)/4};}).sort((u,v)=>u.depth-v.depth);
for(const f of F)poly(f.pr.map(p=>p.slice(0,2)),{parent:g,close:true,c:q.c,fill:q.fill||col(q.c),fillOpacity:q.fillOpacity??.12,w:1.5});},q.id);
V.bogen=(m,r,n1,n2,A1,A2,c,txt,q={})=>add(g=>{const pts=[],a1=val(A1),a2=val(A2);for(let i=0;i<=24;i++){const t=rad(a1+(a2-a1)*i/24);pts.push(V.p([0,1,2].map(k=>m[k]+r*(Math.cos(t)*n1[k]+Math.sin(t)*n2[k]))).slice(0,2));}
poly(pts,{parent:g,c,w:q.w||2});if(txt){const P=pts[12];label(P[0]+(q.dx||0),P[1]+(q.dy||-12),val(txt),c,{parent:g});}},q.id);
$("hint")?.classList.remove("hidden");svg.classList.add("dreh");
const redraw=()=>{NODRAW=true;UPD.forEach(f=>f());NODRAW=false;};
const ANS={vorne:[180,0],hinten:[0,0],rechts:[90,0],links:[-90,0],oben:[V.yaw,90],unten:[V.yaw,-90]};
let anim=null;
V.gehe=(z,ms=450)=>{let[ty,tp]=Array.isArray(z)?z:z==="home"||z==="iso"?HOME:ANS[z]||HOME;
if(z==="oben"||z==="unten")ty=Math.round(V.yaw/90)*90;
const y0=V.yaw,p0=V.pitch,dy=((ty-y0)%360+540)%360-180,t0=performance.now();cancelAnimationFrame(anim);
const step=t=>{const k=Math.min(1,(t-t0)/ms),e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;V.yaw=y0+dy*e;V.pitch=p0+(tp-p0)*e;redraw();if(k<1)anim=requestAnimationFrame(step);};
anim=requestAnimationFrame(step);};
const vb=svg.viewBox.baseVal,CX=(vb&&vb.width?vb.width:600)-48,CY=46,CS=24,vc=mk("g",{class:"vc"});
const cubeP=p=>{const c=Math.cos(rad(V.yaw)),s=Math.sin(rad(V.yaw)),cp=Math.cos(rad(V.pitch)),sp=Math.sin(rad(V.pitch)),X=p[1]*s-p[0]*c,Y=p[0]*s+p[1]*c;return[CX+CS*X,CY-CS*(p[2]*cp-Y*sp),Y*cp+p[2]*sp];};
const FACES=[["oben",[0,0,1],"Oben"],["unten",[0,0,-1],"Unten"],["vorne",[0,-1,0],"Vorne"],["hinten",[0,1,0],"Hinten"],["rechts",[1,0,0],"Rechts"],["links",[-1,0,0],"Links"]];
const drawCube=()=>{while(vc.firstChild)vc.removeChild(vc.firstChild);
const d=[Math.sin(rad(V.yaw))*Math.cos(rad(V.pitch)),Math.cos(rad(V.yaw))*Math.cos(rad(V.pitch)),Math.sin(rad(V.pitch))];
const dot=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
for(const[name,n,txt]of FACES){if(dot(n,d)<=.02)continue;
const i=n.findIndex(v=>v!==0),u=[0,1,2].filter(k=>k!==i),pts=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([a,b])=>{const p=[0,0,0];p[i]=n[i];p[u[0]]=a;p[u[1]]=b;return cubeP(p);});
const f=mk("path",{d:"M"+pts.map(q=>q[0]+","+q[1]).join(" L")+" Z",class:"vc-f"},vc);f.addEventListener("click",()=>V.gehe(name));
const m=cubeP(n);if(dot(n,d)>.35){const t=mk("text",{x:m[0],y:m[1],class:"vc-t","text-anchor":"middle","dominant-baseline":"middle"},vc);t.textContent=txt;}}
if(FACES.filter(([,n])=>dot(n,d)>.02).length===1)for(const[name,n,txt]of FACES){if(Math.abs(dot(n,d))>.05)continue;
const P=cubeP(n.map(v=>v*1.75)),ax=P[0]-CX,ay=P[1]-CY,L=Math.hypot(ax,ay)||1,ux=ax/L,uy=ay/L,b=[P[0]-ux*6,P[1]-uy*6];
const t=mk("path",{d:`M${P[0]+ux*4},${P[1]+uy*4} L${b[0]-uy*6},${b[1]+ux*6} L${b[0]+uy*6},${b[1]-ux*6} Z`,class:"vc-c"},vc);
mk("title",{},t).textContent=txt;t.addEventListener("click",()=>V.gehe(name));}
for(const sx of[-1,1])for(const sy of[-1,1])for(const sz of[-1,1]){const c=[sx,sy,sz];if(dot(c,d)<=.3)continue;const P=cubeP(c);
const k=mk("circle",{cx:P[0],cy:P[1],r:4.5,class:"vc-c"},vc);
k.addEventListener("click",()=>{const yy=Math.atan2(sx,sy)*180/Math.PI;V.gehe([yy,sz*35.26]);});}
const h=mk("text",{x:CX,y:CY+CS*2.05+4,class:"vc-h","text-anchor":"middle"},vc);h.textContent="⌂ Home";h.addEventListener("click",()=>V.gehe("home"));};
vc.addEventListener("pointerdown",e=>e.stopPropagation());
UPD.push(drawCube);drawCube();setTimeout(()=>svg.appendChild(vc),0);
let drag=null;
svg.addEventListener("pointerdown",e=>{cancelAnimationFrame(anim);drag=[e.clientX,e.clientY,V.yaw,V.pitch];svg.setPointerCapture(e.pointerId);});
svg.addEventListener("pointermove",e=>{if(!drag)return;V.yaw=drag[2]+(e.clientX-drag[0])*.5;V.pitch=Math.max(-90,Math.min(90,drag[3]+(e.clientY-drag[1])*.4));redraw();});
svg.addEventListener("pointerup",()=>drag=null);
VIEW3D=V;
return V;}
const WORT={weiter:"Weiter",fertig:"Fertig",play:"Abspielen",pause:"Pause"};
let cur=0,timer=null,upd=false;const revealed=new Set(),ANIM={};
function regler(name,o={}){const r={name,min:o.min??-5,max:o.max??5,step:o.step??.01,d:o.d??(o.step>=1?0:o.step>=.1?1:2),c:o.c||"A",label:o.label||name,einheit:o.einheit||"",from:BUILD.from,to:BUILD.to,play:o.play!==false};
W[name]=o.wert??r.min;REGS.push(r);
const row=document.createElement("div");row.className="rg";row.style.setProperty("--c",col(r.c));
row.innerHTML=`<span class="rg-n" data-tex="${r.label.replace(/"/g,"&quot;")}"></span><input type="range" min="${r.min}" max="${r.max}" step="${r.step}" value="${W[name]}" aria-label="${name}"><output></output>`+(r.play?`<button class="rg-p" title="Wert durchlaufen lassen" aria-label="${name} animieren">▶</button>`:"");
$("regler").appendChild(row);r.row=row;r.inp=row.querySelector("input");r.out=row.querySelector("output");
r.inp.addEventListener("input",()=>{stopAnim(name);W[name]=+r.inp.value;plane();});
if(r.play)row.querySelector("button").onclick=()=>{if(ANIM[name]){stopAnim(name);return;}lauf(name);};
return r;}
function setzeW(name,v){W[name]=v;plane();}
function plane(){if(upd)return;upd=true;requestAnimationFrame(()=>{upd=false;aktualisiere();});}
function aktualisiere(){NODRAW=true;UPD.forEach(f=>f());NODRAW=false;
for(const r of REGS){if(+r.inp.value!==W[r.name])r.inp.value=W[r.name];r.out.textContent=fmt(W[r.name],r.d)+(r.einheit?" "+r.einheit:"");}
zeigeLive();dynamisch();}
function stopAnim(n){if(ANIM[n]){cancelAnimationFrame(ANIM[n]);delete ANIM[n];const r=REGS.find(r=>r.name===n);r?.row.querySelector(".rg-p")?.replaceChildren("▶");}}
function animiere(name,b,ms=900,a){stopAnim(name);const A=a??W[name],t0=performance.now();
const st=t=>{const k=Math.min(1,(t-t0)/ms),e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;W[name]=A+(b-A)*e;aktualisiere();if(k<1)ANIM[name]=requestAnimationFrame(st);else delete ANIM[name];};ANIM[name]=requestAnimationFrame(st);}
function lauf(name){const r=REGS.find(r=>r.name===name);if(!r)return;let dir=1,last=performance.now();r.row.querySelector(".rg-p")?.replaceChildren("❚❚");
const sp=(r.max-r.min)/4000;const st=t=>{const dt=t-last;last=t;let v=W[name]+dir*sp*dt;if(v>=r.max){v=r.max;dir=-1;}if(v<=r.min){v=r.min;dir=1;}W[name]=v;aktualisiere();ANIM[name]=requestAnimationFrame(st);};ANIM[name]=requestAnimationFrame(st);}
function setMacroColors(){const cs=getComputedStyle(document.documentElement);for(const k of"ABCDEF")KM["\\c"+k]="\\textcolor{#"+cs.getPropertyValue("--c"+k).trim()+"}{#1}";}
function renderMath(el){if(!el)return;
const plain=t=>t.replace(/\\c[A-F]|\\(text|mathrm|textstyle|tfrac|dfrac|frac|left|right|operatorname)/g,"").replace(/\\[,;!:]/g," ").replace(/\\cdot/g,"·").replace(/[{}]/g,"").replace(/\\/g,"");
el.querySelectorAll("[data-tex]").forEach(n=>{const t=n.dataset.tex;
if(!window.katex){n.textContent=plain(t);return;}
try{katex.render(t,n,{displayMode:n.dataset.display==="1",throwOnError:false,macros:{...KM}});}catch(e){n.textContent=plain(t);}});}
function texify(h){return h.replace(/\$\$([\s\S]+?)\$\$/g,(m,t)=>`<div data-tex="${t.replace(/"/g,"&quot;")}" data-display="1"></div>`).replace(/\$([^$]+?)\$/g,(m,t)=>`<span data-tex="${t.replace(/"/g,"&quot;")}"></span>`);}
function fitFormula(el){const f=el||$("formula");f.style.fontSize="";let k=1;while(f.scrollWidth>f.clientWidth+1&&k>.6){k-=.05;f.style.fontSize=k+"em";}}
const dtex=t=>t?`<div data-tex="${t.replace(/"/g,"&quot;")}" data-display="1"></div>`:"";
function zeigeLive(){const S=STEPS[cur]||{},L=S.live!==undefined?S.live:(typeof LIVE!=="undefined"?LIVE:null),t=L?val(L):"";
$("live").classList.toggle("hidden",!t);if(t){$("live").innerHTML=dtex(t);renderMath($("live"));fitFormula($("live"));}}
function dynamisch(){const S=STEPS[cur];if(!S)return;
if(typeof S.text==="function"){$("text").innerHTML=texify(S.text());renderMath($("text"));}
if(typeof S.tex==="function"&&!(S.ask&&!revealed.has(cur))){$("formula").innerHTML=dtex(S.tex());renderMath($("formula"));fitFormula();}}
function show(i){cur=Math.max(0,Math.min(STEPS.length-1,i));const S=STEPS[cur],hl=new Set(S.hl||[]);
for(const e of ELS){const vis=cur>=e.from&&cur<=e.to,was=e.node.classList.contains("on");
e.node.classList.toggle("on",vis);e.node.classList.toggle("off",!vis);
e.node.classList.toggle("dim",vis&&S.dim===true&&!(e.id&&hl.has(e.id)));e.node.classList.toggle("hl",vis&&!!e.id&&hl.has(e.id));
if(vis&&!was&&e.from===cur){e.node.classList.remove("draw");void e.node.offsetWidth;e.node.classList.add("draw");}
if(vis&&e.id&&hl.has(e.id)){e.node.classList.remove("pulse");void e.node.offsetWidth;e.node.classList.add("pulse");}}
let nReg=0;for(const r of REGS){const v=cur>=r.from&&cur<=r.to;r.row.classList.toggle("hidden",!v);r.row.classList.toggle("hl",v&&hl.has(r.name));nReg+=v;}
$("regler").classList.toggle("hidden",!nReg);
if(VIEW3D&&S.view)VIEW3D.gehe(S.view);$("stitle").textContent=S.title||"";$("count").textContent=`Schritt ${cur+1} / ${STEPS.length}`;$("text").innerHTML=texify(val(S.text)||"");
const hid=S.ask&&!revealed.has(cur);$("ask").classList.toggle("hidden",!S.ask);$("asktext").innerHTML=S.ask?texify(" "+val(S.ask)):"";$("reveal").classList.toggle("hidden",!hid);
$("formula").innerHTML=hid?"":dtex(val(S.tex));
["text","ask","formula"].forEach(k=>renderMath($(k)));fitFormula();
if(S.setze){Object.assign(W,S.setze);aktualisiere();}
if(S.set)for(const[k,v]of Object.entries(S.set)){if(Array.isArray(v))animiere(k,v[1],v[2]||1500,v[0]);else animiere(k,v,v===W[k]?1:700);}
zeigeLive();
$("prev").disabled=$("first").disabled=cur===0;$("next").textContent=cur===STEPS.length-1?WORT.fertig:WORT.weiter;$("next").disabled=cur===STEPS.length-1;
[...$("dots").children].forEach((d,k)=>d.className=k===cur?"now":k<cur?"done":"");
$("praxis").classList.toggle("hidden",!(PRAXIS&&(PRAXIS.always||cur===STEPS.length-1)));}
function stop(){clearInterval(timer);timer=null;$("play").textContent=WORT.play;}
function play(){if(timer){stop();return;}if(cur===STEPS.length-1)show(0);$("play").textContent=WORT.pause;
timer=setInterval(()=>{if(STEPS[cur].ask&&!revealed.has(cur)){stop();return;}if(cur>=STEPS.length-1)stop();else show(cur+1);},CONFIG.autoplayMs||5000);}
function init(){setMacroColors();
if($("title")){document.title=CONFIG.title;$("title").textContent=CONFIG.title;$("subtitle").innerHTML=texify(CONFIG.subtitle||"");renderMath($("subtitle"));
$("tags").innerHTML=(CONFIG.tags||[]).map(t=>`<span class="tag">${t}</span>`).join("");}
$("legend").innerHTML=(LEGEND||[]).map(l=>`<span style="--c:${col(l.c)}">${texify(l.label)}</span>`).join("");renderMath($("legend"));
renderMath($("regler"));
$("dots").innerHTML=STEPS.map((_,k)=>`<i title="Schritt ${k+1}" data-k="${k}"></i>`).join("");
$("dots").onclick=e=>{if(e.target.dataset.k){stop();show(+e.target.dataset.k);}};
if(PRAXIS){$("ptitle").textContent=PRAXIS.title;$("ptext").innerHTML=texify(PRAXIS.text);renderMath($("ptext"));}
$("next").onclick=()=>{stop();show(cur+1);};$("prev").onclick=()=>{stop();show(cur-1);};$("first").onclick=()=>{stop();show(0);};
$("play").onclick=play;$("reveal").onclick=()=>{revealed.add(cur);show(cur);};
addEventListener("keydown",e=>{if(e.target.tagName==="INPUT")return;if(e.key==="ArrowRight"){stop();show(cur+1);}else if(e.key==="ArrowLeft"){stop();show(cur-1);}else if(e.key===" "){e.preventDefault();play();}});
addEventListener("resize",()=>fitFormula());aktualisiere();show(0);}
function boot(){try{build();}catch(e){$("text").textContent="Fehler in build(): "+e.message;throw e;}
if(window.katex)init();else{let n=0;const t=setInterval(()=>{if(window.katex||++n>40){clearInterval(t);init();}},50);}}
(function warte(n=0){let ok=false;try{ok=typeof build==="function"&&typeof STEPS!=="undefined"&&typeof PRAXIS!=="undefined";}catch(e){}
if(ok&&document.readyState!=="loading"){window.MA1_OK=true;boot();}else if(n<400)setTimeout(()=>warte(n+1),25);})();
