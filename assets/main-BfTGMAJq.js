const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sfx-DTJfjaTo.js","assets/projects-CnSkbXN_.js","assets/projects-CRchVlQX.css","assets/guitar-CRuz6Cfr.js","assets/sound-Z5EtZ-XE.js","assets/reels-CUkJekWC.js","assets/case-DM66aDU3.js","assets/split-DQ7YRuB9.js","assets/stagger-B0LDEwmR.js","assets/split-DQrr_bRC.css","assets/fluid-RUMQT8eh.js","assets/turntable-D2piElXQ.js","assets/fluid-Df3cnL6L.css","assets/data-B3Y__3jV.js","assets/media--ltg8lOJ.js","assets/fx-CvWQkh9d.js","assets/fx-B5NRECAZ.css","assets/mini-BPtB1_d6.js","assets/case-Dz6h537K.css","assets/field-DfitI_oo.js","assets/three.core-rbApIkjy.js","assets/three.module-BfDJo5X8.js","assets/post-7OqpY8sP.js","assets/Pass-CuTGqH_b.js","assets/ui-B-E2Xw1K.js","assets/scramble-C0KnOWs8.js","assets/copy-D8BFJtkd.js","assets/glass-B4xejBSe.js","assets/credits-DGWb33c5.js","assets/glass-C7J6ptvq.css","assets/ui-9-9YkIZW.css","assets/objects-X2fJwN0Z.js","assets/brainColor-BA1k28w3.js","assets/brain-B_f9XjWA.js","assets/theme-B6hjuvG9.js","assets/tv-CRU5LojB.js","assets/RoomEnvironment-SJxtcJk8.js","assets/tvset-BomlkYkc.js","assets/glbmodel-OszHnxV2.js","assets/BufferGeometryUtils-v4Qs01o8.js","assets/occlusion-B0JHOc5W.js","assets/annotate-C8sROfjq.js","assets/annotate-Dwr_u39t.css","assets/astro-BNn4_XLX.js","assets/signals-DI8cpp-Q.js","assets/brainmode-CngLOfjV.js","assets/common-ChC9dhBN.js","assets/cabinet-C9e4WnOv.js","assets/env-Be7kQnbl.js","assets/rig-DsyhDOfr.js","assets/RoundedBoxGeometry-BBGETCXM.js","assets/lane-BoByweoM.js","assets/kit-CImi8KJv.js","assets/contact-BvpRh05E.js","assets/finale-D5_KJ_ij.js","assets/finale-_ysrB87u.css","assets/glyphs-BDo5kuD9.js","assets/atlas-BOYnMWZ4.js","assets/hall-B01zVz3u.js","assets/transitions-CZAYDTz1.js","assets/hall-Cgrm9cpa.css","assets/haze-WloDHJru.js","assets/hero3d-B4kQo6hR.js","assets/hero3d-zYscixJM.css","assets/mirror-BSEKO-LB.js","assets/reactive-CdX4L7Wf.js","assets/presets-FlpOJk-x.js","assets/rings-CTBfxknd.js","assets/spaces-Dwzhkb5O.js","assets/common-uX_yTxFT.js","assets/stages-Dz80f0Lx.js","assets/vibe-5Q9E-Vhx.js","assets/crate-BlLOO2xx.js","assets/crate-Ds7Raay5.css","assets/bus-BtRVaMBs.js"])))=>i.map(i=>d[i]);
import{c as e,l as t,n,o as r,s as i,t as a,u as o}from"./projects-CnSkbXN_.js";import{An as s,Dt as c,L as l,Pt as u,T as d,br as f,jt as p,yr as m}from"./three.core-rbApIkjy.js";import{a as h,c as g,d as _,f as v,l as y,o as b,s as x,t as S,u as C}from"./brainColor-BA1k28w3.js";import{n as w}from"./guitar-CRuz6Cfr.js";import{C as T,n as E,x as D}from"./qvr-math-DqlbEbrJ.js";function O(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var k=e=>{let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0};function A(e,t){return{count:t,rand:O(k(e)),async image(e,t=512){let n=new Image;n.decoding=`async`,n.src=e,await n.decode();let r=Math.min(1,t/Math.max(n.naturalWidth,n.naturalHeight)),i=Math.max(1,Math.round(n.naturalWidth*r)),a=Math.max(1,Math.round(n.naturalHeight*r)),o=document.createElement(`canvas`);o.width=i,o.height=a;let s=o.getContext(`2d`,{willReadFrequently:!0});return s.drawImage(n,0,0,i,a),s.getImageData(0,0,i,a)},async textMask(e,{font:t,width:n,height:r,align:i=`center`}){try{await document.fonts.load(t)}catch{}let a=document.createElement(`canvas`);a.width=n,a.height=r;let o=a.getContext(`2d`,{willReadFrequently:!0});o.fillStyle=`#fff`,o.font=t,o.textAlign=i,o.textBaseline=`middle`;let s=e.split(`
`),c=r/s.length;return s.forEach((e,t)=>o.fillText(e,i===`center`?n/2:i===`right`?n:0,c*(t+.5))),o.getImageData(0,0,n,r)}}}var j={set(e,t,n,r,i,a,o,s,c,l,u){let d=n*4;e[d]=r,e[d+1]=i,e[d+2]=a,e[d+3]=o,t[d]=s,t[d+1]=c,t[d+2]=l,t[d+3]=u},hex(e){let t=parseInt(e.replace(`#`,``),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]},dust(e,t,n,r,i,a=7,o=.08,s=[.9,.88,.82]){for(let c=n;c<r;c++){let n=i()*2-1,r=i()*Math.PI*2,l=a*(.55+.45*Math.cbrt(i())),u=Math.sqrt(1-n*n);j.set(e,t,c,Math.cos(r)*u*l,n*l*.6,Math.sin(r)*u*l-2,0,s[0],s[1],s[2],o*i())}},sampleMask(e,t,n,r=!1,i=.5){let a=[],{width:o,height:s,data:c}=e,l=[];for(let e=0;e<o*s;e++)(r?(c[e*4]*.299+c[e*4+1]*.587+c[e*4+2]*.114)/255:c[e*4+3]/255)>=i&&l.push(e);if(!l.length)return a;for(let e=0;e<t;e++){let e=l[Math.floor(n()*l.length)];a.push([e%o+n(),Math.floor(e/o)+n(),e])}return a}},M=o({default:()=>pe}),N=Math.PI*2,P=-1.7,F=[.5,.62,.86],I=[.76,.86,1],L=[.34,.43,.66],R=[1,.76,.29],z=[1,.87,.52],B=[1,.94,.78],ee=[1,.56,.2],V=[.66,.82,1],te=[1,.3,.22],ne=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],re=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],ie=(e,t,n)=>re(re(e.o,ne(e.ex,t)),ne(e.ey,n)),ae=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],H=1.9,oe=e=>[-3.3+6.6*e,-1.55+3.9*(Math.exp(H*e)-1)/(Math.exp(H)-1),.9*Math.sin(N*e+.6)],se=e=>.14+.3*e,ce=e=>7*e,le=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],ue=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},de=e=>{let t=oe(Math.max(0,e-.004)),n=oe(Math.min(1,e+.004)),r=ue([n[0]-t[0],n[1]-t[1],n[2]-t[2]]),i=ue(le(r,[0,1,0])),a=le(r,i),o=ce(e);return[i[0]*Math.cos(o)+a[0]*Math.sin(o),i[1]*Math.cos(o)+a[1]*Math.sin(o),i[2]*Math.cos(o)+a[2]*Math.sin(o)]},fe=e=>e.toFixed(4),pe={id:`appfolio`,build(e,t,n){let r=e.count,i=e.rand,a=r/262144,o=(1/a)**.8,s=e=>Math.max(1,Math.round(e*a)),c=0,l=(e,i,a,s,l,u)=>{c<r&&j.set(t,n,c++,e,i,a,s,l[0],l[1],l[2],u*o)},u=(e,t,n,r,i)=>l(e[0],e[1],e[2],t+Math.min(.98,Math.max(0,n)*.98),r,i),d=.004,f=(e,t,n,r,a,o,c=-1)=>{let l=s(n);for(let n=0;n<l;n++){let s=(n+i())/l;u([e[0]+(t[0]-e[0])*s+(i()-.5)*d,e[1]+(t[1]-e[1])*s+(i()-.5)*d,e[2]+(t[2]-e[2])*s+(i()-.5)*d],r,c<0?i():c,a,o)}},p=(e,t,n,r,a,o,c)=>{let l=s(r);for(let r=0;r<l;r++){let r=i(),s=i();u([e[0]+t[0]*r+n[0]*s,e[1]+t[1]*r+n[1]*s,e[2]+t[2]*r+n[2]*s],a,i(),o,c)}},m=(e,t,n,r,i,a,o,s,c)=>f(ie(e,t,n),ie(e,r,i),a,o,s,c),h=(e,t,n,r,i,a,o,s,c)=>p(ie(e,t,n),ne(e.ex,r-t),ne(e.ey,i-n),a,o,s,c),g=[R,R,R,z,z,ee,B,V],_=(e,t,n,r,a,o,c=1)=>{let l=g[Math.floor(i()*g.length)],d=s(150*c);for(let s=0;s<d;s++){let s=t+(i()-.5)*r,c=n+i()*a,d=Math.min(Math.abs(s-t)/(r/2),1),f=1-.28*(c-n)/a;u(ie(e,s,c),2,o,l,(.62+.3*i())*f*(1-.15*d))}let f=s(12*c);for(let s=0;s<f;s++)u(ie(e,t+(i()-.5)*r*2,n+a/2+(i()-.5)*a*2.2),2,o,l,.05);let p=t-r/2,h=t+r/2,_=n+a;m(e,p,n,h,n,14*c,3,I,.55),m(e,p,_,h,_,12*c,3,F,.4),m(e,p,n,p,_,12*c,3,F,.4),m(e,h,n,h,_,12*c,3,F,.4),m(e,t,n,t,_,8*c,3,L,.25);let v=s(5*c);for(let o=0;o<v;o++)u(ie(e,t+(i()-.5)*r,n+i()*a),3,i(),L,.07);let y=s(34*c);if(e.o[2]>.3&&e.ex[0]===1)for(let s=0;s<y;s++){let s=ie(e,t+(i()-.5)*r*.8,n+i()*a);u([s[0]+(i()-.5)*.02,2*P-s[1]-i()**1.5*.28,s[2]+.55+i()*.5],9,o,l,.34)}},v=.27,y=-1.15,b=1.8200000000000003,x={o:[0,0,.45],ex:[1,0,0],ey:[0,1,0]},S={o:[1,0,-.45],ex:[0,0,1],ey:[0,1,0]},C={o:[-1,0,.45],ex:[0,0,-1],ey:[0,1,0]},w=e=>Math.min(1,(e+.5)/11*.8+i()*.18);h({...x,o:[-1,0,.45]},0,y,2,b,4200,0,L,.05),h(S,0,y,.9,b,1900,0,L,.045),h(C,0,y,.9,b,1900,0,L,.045);for(let e=0;e<=11;e++){let t=y+e*v;f([-1.02,t,.45],[1.02,t,.45],110,1,e===0||e===11?I:F,e===0||e===11?.8:.4),f([1,t,.45],[1,t,-.45],40,1,F,.3),f([-1,t,.45],[-1,t,-.45],40,1,F,.3)}for(let e of[-1,1])f([e,y,.45],[e,b,.45],220,1,I,.85),f([e,y,-.45],[e,b,-.45],120,1,F,.4);for(let e=1;e<6;e++)f([-1+2/6*e,y,.45],[-1+2/6*e,b,.45],130,1,L,.22);for(let e=0;e<11;e++){let t=y+e*v+.06;for(let n=0;n<6;n++)_(x,-1+(n+.5)*(2/6),t,.2,.17,w(e));for(let n=0;n<3;n++)_(S,(n+.5)*.3,t,.17,.17,w(e),.9),_(C,(n+.5)*.3,t,.17,.17,w(e),.9)}for(let e=2;e<11;e+=3)for(let t=0;t<6;t+=2)f([-1+2/6*t+.04,y+e*v+.045,.5],[-1+(t+1)*(2/6)-.04,y+e*v+.045,.5],24,1,I,.55);{let e={o:[-1.8,0,.6],ex:[1,0,0],ey:[0,1,0]};h(e,0,P,3.6,y,2400,0,L,.05),f([-1.8,P,.6],[-1.8,y,.6],100,1,I,.8),f([1.8,P,.6],[1.8,y,.6],100,1,I,.8),f([-1.8,y,.6],[1.8,y,.6],250,1,I,.85),f([-1.8,-1.18,.6],[1.8,-1.18,.6],200,1,F,.45),f([-1.8,y,.6],[-1.8,y,-.5],60,1,F,.4),f([1.8,y,.6],[1.8,y,-.5],60,1,F,.4),f([-1.8,y,-.5],[-1,y,-.5],50,1,L,.3),f([1,y,-.5],[1.8,y,-.5],50,1,L,.3);for(let t=0;t<6;t++){let n=-1.5+t*.6,r=t===2||t===3,a=.01+i()*.12;_(e,n,P+(r?.02:.1),r?.26:.42,r?.36:.26,a,r?1.5:2.2),f([n-.27,-1.22,.6],[n+.27,-1.22,.6],36,1,I,.7),f([n-.27,-1.22,.6],[n-.22,-1.2999999999999998,.78],8,1,F,.5),f([n+.27,-1.22,.6],[n+.22,-1.2999999999999998,.78],8,1,F,.5),f([n-.22,-1.2999999999999998,.78],[n+.22,-1.2999999999999998,.78],30,1,I,.8),t<5&&f([n+.3,P,.6],[n+.3,y,.6],36,1,F,.5)}}{let e={o:[-.62,0,.3],ex:[1,0,0],ey:[0,1,0]};h(e,0,b,1.24,2.16,1100,0,L,.05),f([-.62,b,.3],[-.62,2.16,.3],50,1,I,.8),f([.62,b,.3],[.62,2.16,.3],50,1,I,.8),f([-.66,2.16,.3],[.66,2.16,.3],120,1,I,.85);for(let t=0;t<3;t++)_(e,.2+t*.42,1.9000000000000004,.2,.17,.9+.08*i(),1.1);let t=.28;for(let e=0;e<4;e++){let n=2.2600000000000002+e*.05,r=s(46);for(let e=0;e<r;e++){let a=(e+i())/r*N;u([t+.13*Math.cos(a),n,0+.13*Math.sin(a)],1,i(),I,.7)}}for(let e of[-.1,.1])f([t+e,2.16,0],[t+e,2.22,0],14,1,F,.6);f([.14,2.47,0],[t,2.56,0],12,1,I,.8),f([.42000000000000004,2.47,0],[t,2.56,0],12,1,I,.8),f([-.3,2.16,0],[-.3,2.8200000000000003,0],120,1,I,.9);for(let e of[2.37,2.6000000000000005])f([-.38,e,0],[-.22,e,0],12,1,I,.8);let n=s(60);for(let e=0;e<n;e++){let e=.025*Math.sqrt(i()),t=i()*N;u([-.3+e*Math.cos(t),2.8400000000000003+e*Math.sin(t),e*Math.sin(t*2)],10,i(),te,1)}let r=s(180);for(let e=0;e<r;e++){let e=.2*i()**1.4,t=i()*N,n=Math.acos(2*i()-1);u([-.3+e*Math.sin(n)*Math.cos(t),2.8400000000000003+e*Math.cos(n),e*Math.sin(n)*Math.sin(t)],10,i(),te,.07)}}for(let e of[{x0:-4,x1:-2.7,top:.55,z:-1.5,far:!1},{x0:-2.6,x1:-1.5,top:1.25,z:-1.6,far:!1},{x0:1.5,x1:2.6,top:.95,z:-1.6,far:!1},{x0:2.7,x1:4,top:.25,z:-1.5,far:!1},{x0:-3.4,x1:-2.1,top:1.85,z:-2.7,far:!0},{x0:2,x1:3.3,top:1.55,z:-2.7,far:!0},{x0:-1.1,x1:.1,top:1.1,z:-3.1,far:!0}]){let t=e.far?.5:1,n={o:[e.x0,0,e.z],ex:[1,0,0],ey:[0,1,0]},r=e.x1-e.x0;h(n,0,P,r,e.top,Math.round(r*(e.top-P)*380),0,L,.04*t),f([e.x0,P,e.z],[e.x0,e.top,e.z],80,1,F,.6*t),f([e.x1,P,e.z],[e.x1,e.top,e.z],80,1,F,.6*t),f([e.x0-.02,e.top,e.z],[e.x1+.02,e.top,e.z],Math.round(r*90),1,I,.8*t);let a=Math.max(2,Math.round(r/.2)),o=Math.max(2,Math.floor((e.top-P-.1)/.25));for(let n=0;n<o;n++)for(let o=0;o<a;o++){let c=(o+.5)*(r/a),l=-1.5999999999999999+n*.25+.04,d=i(),f=s(26);for(let n=0;n<f;n++)u([e.x0+c+(i()-.5)*.12,l+i()*.12,e.z],6,d,i()<.3?V:R,.5*t);let p=s(5);for(let n=0;n<p;n++)u([e.x0+c+(i()-.5)*.14,l+(i()-.1)*.14,e.z],3,i(),L,.12*t)}f([e.x0+r*.3,e.top,e.z],[e.x0+r*.3,e.top+.1,e.z],14,1,F,.5*t),f([e.x0+r*.3-.08,e.top+.1,e.z],[e.x0+r*.3+.08,e.top+.1,e.z],12,1,F,.5*t)}f([-6.5,P,.6],[6.5,P,.6],600,8,I,.55),f([-6.5,P,1.45],[6.5,P,1.45],600,8,I,.5),f([-6.5,P,1.5],[6.5,P,1.5],400,8,L,.3);for(let e=-6.3;e<6.4;e+=.7)f([e,P,2.5],[e+.36,P,2.5],26,8,z,.45);p([-6.5,P,.6],[13,0,0],[0,0,.85],1800,8,L,.03),p([-6.5,P,1.5],[13,0,0],[0,0,2.2],4200,8,L,.025);for(let e=0,t=s(3400);e<t;e++){let e=(i()-.5)*11,t=.7+i()*2.8,n=.05+i()*.28;f([e,-1.702,t],[e+n,-1.702,t],3,8,i()<.5?R:V,.06+.1*i())}for(let e of[-2.6,2.55,-5,5]){f([e,P,1.2],[e,-.44999999999999996,1.2],70,8,I,.75),f([e,-.44999999999999996,1.2],[e+(e<0?.28:-.28),-.3799999999999999,1.2],22,8,I,.75);let t=e+(e<0?.28:-.28),n=-.3999999999999999;for(let e=0,r=s(160);e<r;e++){let e=i()*2-1,r=i()*N,a=Math.sqrt(1-e*e),o=.04*Math.cbrt(i());u([t+Math.cos(r)*a*o,n+e*o,1.2+Math.sin(r)*a*o],8,i(),B,.9)}for(let e=0,r=s(520);e<r;e++){let e=i()*2-1,r=i()*N,a=Math.sqrt(1-e*e),o=.55*i()**1.6;u([t+Math.cos(r)*a*o,n+e*o,1.2+Math.sin(r)*a*o],8,i(),R,.05)}for(let e=0,n=s(480);e<n;e++){let e=i()*N,n=.9*Math.sqrt(i());u([t+Math.cos(e)*n,-1.695,1.2+Math.sin(e)*n*.7],8,i(),R,.05*(1-n))}}{let e=s(3e4);for(let t=0;t<e;t++){let e=i(),t=i()*2-1,n=oe(e),r=de(e),a=se(e)/2*t,o=ae(ae(ee,z,Math.min(1,e*1.4)),B,Math.max(0,e-.82)*4.5);u([n[0]+r[0]*a,n[1]+r[1]*a,n[2]+r[2]*a],4,e,o,.22+.55*Math.abs(t)**3+.15*i())}for(let e of[-1,1]){let t=s(4600);for(let n=0;n<t;n++){let r=(n+i())/t,a=oe(r),o=de(r),s=se(r)/2*e;u([a[0]+o[0]*s,a[1]+o[1]*s,a[2]+o[2]*s],4,r,ae(z,B,Math.max(0,r-.6)),.95)}}let t=s(3200);for(let e=0;e<t;e++)l(0,0,0,12+i()*.98,z,.9)}for(let e=0,t=s(3600);e<t;e++){let e=i()*Math.PI,t=i()*N;u([14*Math.sin(e)*Math.cos(t)*.9,.3+Math.abs(14*Math.cos(e))*.34,-4.8-i()*4],7,i(),[.82,.88,1],.15+.6*i()**3)}for(let e=0,t=s(7600);e<t;e++){let e=P+i()**1.9*2.4;u([(i()-.5)*12,e,-3.2+i()*2],11,i(),ae(ee,[.55,.45,.8],(e-P)/2.4),.05+.05*(1-(e-P)/2.4))}for(let e=0,t=s(3600);e<t;e++){let e=2.4*i()**.8,t=i()*N;u([e*Math.cos(t)*1,.3+e*Math.sin(t)*1,-1],11,i(),[.5,.5,.85],.02*(1-e/2.5))}let T=c;j.dust(t,n,c,r,i,6.5,.045*o,[.7,.72,.9]);for(let e=T;e<r;e++)t[e*4+3]=7.5},glsl:`
const float AF_CYC = 18.0;
const float AF_KE = ${fe(H)};
const float AF_G = ${fe(P)};
float af_q(vec4 d) { return fract(d.w) / 0.98; }
float af_tc(float t) { return mod(t, AF_CYC); }
float af_ton(float q) { return -2.7 * log(1.0 - 0.95 * q); }
float af_fade(float tc) { return 1.0 - smoothstep(16.3, 17.7, tc); }
float af_head(float tc) { float k = smoothstep(7.2, 14.8, tc); return k * 1.015; }
vec3 af_c(float u) { return vec3(-3.3 + 6.6 * u, AF_G + 0.15 + 3.9 * (exp(AF_KE * u) - 1.0) / (exp(AF_KE) - 1.0), 0.9 * sin(6.2831853 * u + 0.6)); }
vec3 anim_appfolio(vec3 p, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl > 11.5) {                                                  // sparks stream off the ribbon's head
    float tc = af_tc(t), h = af_head(tc), u = clamp(h - r.x * r.x * 0.2, 0.0, 1.0);
    return af_c(u) + (r.yzw - 0.5) * (0.06 + 0.3 * r.x) + vec3(0.0, -0.08 * r.x * r.x, 0.0) * sin(t * 2.0 + r.y * 9.0);
  }
  if (cl > 3.5 && cl < 4.5) {                                       // the ribbon flutters
    float u = af_q(d);
    p.z += 0.05 * sin(t * 1.4 + u * 11.0) * (0.3 + u); p.y += 0.02 * sin(t * 1.1 + u * 8.0);
    return p;
  }
  if (cl > 10.5 && cl < 11.5) { p.x += sin(t * 0.07 + p.z * 0.9 + r.x * 3.0) * 0.4; p.y += sin(t * 0.2 + r.y * 20.0) * 0.03; }
  return p;
}
float size_appfolio(vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl > 11.5) return 1.5;
  if (cl > 9.5 && cl < 10.5) return 1.8;
  if (cl > 6.5 && cl < 7.5) return 0.7 + 0.8 * r.x;
  if (cl > 3.5 && cl < 4.5) return 1.1;
  return 1.0;
}
vec4 color_appfolio(vec4 c, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001), q = af_q(d), tc = af_tc(t);
  float a = c.a; vec3 rgb = c.rgb;
  float fd = af_fade(tc), hot = smoothstep(8.5, 14.5, tc);
  if (cl > 1.5 && cl < 2.5 || cl > 8.5 && cl < 9.5) {               // lit windows (and their reflections): floor by floor
    float ton = q < 0.3 ? -1.0 : af_ton((q - 0.3) / 0.7);                                // the first windows are already lit when the cycle opens
    float lit = smoothstep(ton, ton + 0.4, tc) * fd * smoothstep(0.0, 0.7, tc);
    float flash = step(ton, tc) * exp(-(tc - ton) * 4.5) * step(0.0, ton);
    a *= lit * (0.9 + 0.1 * sin(t * (1.0 + 2.0 * q) + q * 70.0)) * (1.0 + 2.2 * flash) * (1.0 + 0.35 * hot);
    rgb = mix(rgb, vec3(1.0, 0.93, 0.7), 0.45 * hot * lit + 0.5 * flash);
    if (cl > 8.5) a *= 0.7 + 0.3 * sin(t * 1.7 + d.x * 14.0 + r.x * 9.0);
  } else if (cl > 3.5 && cl < 4.5) {                                // the ribbon draws on, then holds
    float h = af_head(tc);
    float shown = 1.0 - smoothstep(h - 0.05, h, q);
    float tip = exp(-pow((q - h) / 0.03, 2.0)) * step(0.001, h) * step(h, 1.03);
    float sheen = 0.7 + 0.6 * pow(0.5 + 0.5 * sin(q * 34.0 - t * 2.4), 4.0);
    a *= (0.1 + 0.9 * shown) * sheen * (1.0 + 2.0 * tip) * mix(1.0, fd, step(0.02, h));
    rgb = mix(rgb, vec3(1.0, 0.95, 0.8), clamp(tip + 0.25 * sheen * shown * hot, 0.0, 1.0));
  } else if (cl > 11.5) {                                           // sparks
    float h = af_head(tc);
    a *= smoothstep(0.005, 0.05, h) * (1.0 - r.x) * fd * (0.5 + 0.5 * sin(t * (2.0 + 5.0 * r.w) + r.z * 40.0)) * (1.0 - 0.8 * smoothstep(1.0, 1.02, h));
  } else if (cl > 5.5 && cl < 6.5) {                                // skyline windows: slow toggles
    float tg = 0.5 + 0.5 * sin(t * (0.07 + 0.1 * fract(q * 7.3)) + q * 53.0);
    a *= smoothstep(0.42, 0.58, tg);
  } else if (cl > 9.5 && cl < 10.5) {                               // beacon
    float b = pow(max(0.0, sin(t * 2.6)), 6.0); a *= 0.12 + 0.88 * b;
  } else if (cl > 7.5 && cl < 8.5) {
    a *= 0.85 + 0.15 * sin(t * 2.1 + q * 60.0);
  } else if (cl > 6.5 && cl < 7.5) {
    a *= 0.35 + 0.65 * (0.5 + 0.5 * sin(t * (0.6 + 2.2 * r.y) + r.x * 90.0));
  } else if (cl > 10.5 && cl < 11.5) {
    a *= 0.7 + 0.3 * sin(t * 0.4 + r.x * 30.0);
  }
  return vec4(rgb, a);
}`,camera:{pos:[0,.5,9.6],target:[0,.2,0],fov:35},pointSize:2,drift:.004},me=o({default:()=>ye}),U=t,he=2.8,ge=new d(new Float32Array(2048),2048,1,s,l);ge.minFilter=ge.magFilter=c;var _e={u_brain_mode:{value:new m(0,0)},u_brain_sweep:{value:2},u_brain_rheat:{value:Array(9).fill(.5)},u_brain_lheat:{value:ge}},ve=e=>{let t=Math.sin(e*127.1+311.7)*43758.5453;return t-Math.floor(t)};if(typeof location<`u`){let e=new URLSearchParams(location.search).get(`brainmode`);e!=null&&h.set(+e,!0)}var ye={id:`brain`,async build(e,t,n){let r=e.count,i=e.rand;ye.pointSize=1.8*Math.min(1.6,(262144/r)**.35);let a=await _(),o=Math.floor(r*.5),s=Math.floor(r*.1),c=Math.floor(r*.2),l=Math.floor(r*.04),u=Math.floor(r*.025),d=Math.floor(r*.015),f=Math.floor(r*.02),p=U.nodes.length,m=Math.max(...U.nodes.map(e=>e[3]),1),h=e=>(e/m)**.42,S=[0,0,0],w=(e,t,n)=>(v(e,t,n,S),[S[0]*he,S[1]*he,S[2]*he]),T=g.map(()=>[.6,.64,.66]),E=g.map(()=>.4),D=g.map(()=>-1),O={};U.nodes.forEach(e=>{O[e[2]]=(O[e[2]]??0)+1}),U.groups.forEach((e,t)=>{let n=x[e],r=O[t]??0;if(n==null||r<=D[n])return;D[n]=r;let i=b(e);T[n]=[i.r,i.g,i.b];let a=0;for(let e of U.nodes)e[2]===t&&(a+=h(e[3]));E[n]=Math.min(1,a/r*1.5)}),_e.u_brain_rheat.value=E;let k=0,A=()=>(i()+i()+i()-1.5)*1.6,M=a.idx.length/3,N=new Float64Array(M),P=0;for(let e=0;e<M;e++){let t=a.idx[e*3]*3,n=a.idx[e*3+1]*3,r=a.idx[e*3+2]*3,i=a.pos[n]-a.pos[t],o=a.pos[n+1]-a.pos[t+1],s=a.pos[n+2]-a.pos[t+2],c=a.pos[r]-a.pos[t],l=a.pos[r+1]-a.pos[t+1],u=a.pos[r+2]-a.pos[t+2];P+=.5*Math.hypot(o*u-s*l,s*c-i*u,i*l-o*c),N[e]=P}for(let e=0;e<o;e++){let e=i()*P,r=0,o=M-1;for(;r<o;){let t=r+o>>1;N[t]<e?r=t+1:o=t}let s=a.idx[r*3],c=a.idx[r*3+1],l=a.idx[r*3+2],u=i(),d=i();u+d>1&&(u=1-u,d=1-d);let f=1-u-d,p=a.pos[s*3]*f+a.pos[c*3]*u+a.pos[l*3]*d,m=a.pos[s*3+1]*f+a.pos[c*3+1]*u+a.pos[l*3+1]*d,h=a.pos[s*3+2]*f+a.pos[c*3+2]*u+a.pos[l*3+2]*d,g=a.fold[s]*f+a.fold[c]*u+a.fold[l]*d,_=a.region[s],v=w(p,m,h),y=T[_];j.set(t,n,k++,v[0],v[1],v[2],-10-_,y[0]*.5+.5,y[1]*.5+.52,y[2]*.5+.56,(.17+.44*g**1.1)*(.6+.8*i()))}let F=y(U.nodes,U.groups),I=U.nodes.map((e,t)=>w(F[t*3],F[t*3+1],F[t*3+2])),L=e=>(1+e)**.72,R=U.nodes.reduce((e,t)=>e+L(t[3]),0),z=k+s;for(let e=0;e<p&&k<z;e++){let r=U.nodes[e],a=r[3]/m,o=b(U.groups[r[2]]),c=Math.max(3,Math.round(s*L(r[3])/R)),l=.016+.045*Math.sqrt(a);for(let r=0;r<c&&k<z;r++){let r=.55+.45*a;j.set(t,n,k++,I[e][0]+A()*l,I[e][1]+A()*l,I[e][2]+A()*l,-1-a,o.r*.55+.45,o.g*.55+.45,o.b*.55+.45,(.3+.2*r-.2*a*a)*(.6+.4*i()))}}for(;k<z;){let e=Math.floor(i()*k);j.set(t,n,k++,t[e*4]+A()*.02,t[e*4+1]+A()*.02,t[e*4+2]+A()*.02,t[e*4+3],n[e*4],n[e*4+1],n[e*4+2],n[e*4+3])}let B=U.links.length,ee=new Float32Array(B),V=new Float32Array(B*3),te=0,ne=ge.image.data;for(let e=0;e<B;e++){let[t,n]=U.links[e],r=[F[t*3],F[t*3+1],F[t*3+2]],i=[F[n*3],F[n*3+1],F[n*3+2]],a=C(r,i,U.nodes[t][2]!==U.nodes[n][2],ve(e*1.7+.2));V[e*3]=a[0],V[e*3+1]=a[1],V[e*3+2]=a[2],ee[e]=Math.hypot(a[0]-r[0],a[1]-r[1],a[2]-r[2])+Math.hypot(i[0]-a[0],i[1]-a[1],i[2]-a[2])+.05,te+=ee[e],ne[e]=(h(U.nodes[t][3])+h(U.nodes[n][3]))*.5}ge.needsUpdate=!0;let re=k+c;for(let e=0;e<B;e++){let[r,a]=U.links[e],o=b(U.groups[U.nodes[r][2]]),s=b(U.groups[U.nodes[a][2]]),l=U.nodes[r][2]!==U.nodes[a][2],u=[F[r*3],F[r*3+1],F[r*3+2]],d=[F[a*3],F[a*3+1],F[a*3+2]],f=[V[e*3],V[e*3+1],V[e*3+2]],p=Math.max(5,Math.round(c*ee[e]/te));for(let r=0;r<p&&k<re;r++){let a=(r+i())/p,c=1-a,m=w(c*c*u[0]+2*c*a*f[0]+a*a*d[0],c*c*u[1]+2*c*a*f[1]+a*a*d[1],c*c*u[2]+2*c*a*f[2]+a*a*d[2]),h=.0045,g=o.r*c+s.r*a,_=o.g*c+s.g*a,v=o.b*c+s.b*a;j.set(t,n,k++,m[0]+(i()-.5)*h,m[1]+(i()-.5)*h,m[2]+(i()-.5)*h,e+Math.min(a,.9995),g*.7+.3,_*.7+.3,v*.7+.3,l?.13:.24)}}for(;k<re;){let e=z+Math.floor(i()*(k-z));j.set(t,n,k++,t[e*4]+(i()-.5)*.01,t[e*4+1],t[e*4+2],t[e*4+3],n[e*4],n[e*4+1],n[e*4+2],n[e*4+3])}let ie=new Map;U.nodes.forEach((e,t)=>{ie.has(e[2])||ie.set(e[2],[]),ie.get(e[2]).push(t)});let ae=k+l;for(let[e,r]of ie){let a=b(U.groups[e]),o=r.reduce((e,t)=>e+I[t][0],0)/r.length,s=r.reduce((e,t)=>e+I[t][1],0)/r.length,c=r.reduce((e,t)=>e+I[t][2],0)/r.length,u=.3+.03*Math.sqrt(r.length),d=Math.round(l*(r.length+20)/(p+20*ie.size));for(let e=0;e<d&&k<ae;e++)j.set(t,n,k++,o+A()*u*.6,s+A()*u*.6,c+A()*u*.6,-.25,a.r,a.g,a.b,.035+.03*i())}for(;k<ae;){let e=re+Math.floor(i()*(k-re));j.set(t,n,k++,t[e*4]+A()*.02,t[e*4+1],t[e*4+2],-.25,n[e*4],n[e*4+1],n[e*4+2],.03)}let H=w(0,-.06,-.04);for(let e=0;e<u;e++){let e=i()*2-1,r=i()*6.2832,a=Math.sqrt(1-e*e),o=.15*i()**.7;j.set(t,n,k++,H[0]+Math.cos(r)*a*o,H[1]+e*o,H[2]+Math.sin(r)*a*o,-3,1,.97,.9,.12+.12*i())}for(let e=0;e<d;e++)j.set(t,n,k++,H[0]+A()*.34,H[1]+A()*.34,H[2]+A()*.34,-3.5,.75,.85,1,.015+.02*i());for(let e=0;e<f;e++){let r=e%3,a=i()**1.7,o=.02*(1-.6*a),s=[[1,.8,.55],[.6,.85,1],[.85,.75,1]][r];j.set(t,n,k++,H[0]+A()*o,H[1]+A()*o,H[2]+A()*o,3e3+r*2+a,s[0],s[1],s[2],(1-a)*.6+.05)}j.dust(t,n,k,r,i,6.2,.07,[.7,.8,1]);for(let e=k;e<r;e++)t[e*4+3]=-.5},uniforms:_e,glsl:`
uniform vec2 u_brain_mode; uniform float u_brain_sweep; uniform float u_brain_rheat[9]; uniform sampler2D u_brain_lheat;
${S}
float bh_h(float n) { return fract(sin(n * 127.1 + 311.7) * 43758.5453); }
vec3 bh_orbit(float id, float ang) {
  float rad = 0.5 + 0.14 * id;
  vec3 q = vec3(cos(ang), 0.0, sin(ang)) * rad;
  float tl = 0.5 + 0.75 * id, c = cos(tl), s = sin(tl);
  q = vec3(q.x, q.y * c - q.z * s, q.y * s + q.z * c);
  float c2 = cos(id * 2.1), s2 = sin(id * 2.1);
  q.xz = vec2(c2 * q.x - s2 * q.z, s2 * q.x + c2 * q.z);
  return q;
}
float bh_pulse(vec4 d, float t) {
  float lid = floor(d.w), s = d.w - lid;
  float sp = 0.14 + 0.2 * bh_h(lid + 7.3);
  float ph = fract(t * sp + bh_h(lid)) * 1.9 - 0.3;
  float q = ph - s;
  return step(0.0, q) * exp(-q * 15.0) * smoothstep(0.0, 0.012, q);
}
vec3 anim_brain(vec3 p, vec4 d, vec4 r, float t) {
  float w = d.w;
  if (w >= 2999.0) {
    float v = w - 3000.0, id = floor(v * 0.5), lag = v - id * 2.0;
    p += bh_orbit(id, t * (0.8 + 0.28 * id) - lag * 1.3 + id * 2.0);
  } else if (w <= -2.9 && w > -3.6) {
    float sw = 1.0 + 0.1 * sin(t * 1.4 + r.x * 6.0);
    p = (p - vec3(-0.112, -0.165, -0.033)) * sw + vec3(-0.112, -0.165, -0.033);
  } else if (w < 0.0 && w > -2.1) {
    p += 0.004 * vec3(sin(t * 1.3 + r.x * 40.0), sin(t * 1.1 + r.y * 40.0), sin(t * 1.5 + r.z * 40.0));
  } else if (w < -9.0) {
    p += 0.0025 * vec3(sin(t * 0.9 + r.x * 50.0), sin(t * 0.8 + r.y * 50.0), sin(t * 1.0 + r.z * 50.0));
  }
  float yaw = 0.34 * sin(t * 0.13);
  float c = cos(yaw), s = sin(yaw);
  p.xz = vec2(c * p.x + s * p.z, -s * p.x + c * p.z);
  return p;
}
float size_brain(vec4 d, vec4 r, float t) {
  float w = d.w;
  if (w < -9.0) return 0.95;
  if (w >= 2999.0) { float v = w - 3000.0; float lag = v - floor(v * 0.5) * 2.0; return 1.9 - 1.3 * lag; }
  if (w >= 0.0) return 1.1 + 1.9 * bh_pulse(d, t);
  if (w > -0.3) return 3.6;
  if (w > -2.05 && w <= -0.9) return 0.85 + 1.5 * (-w - 1.0);
  if (w <= -3.4 && w > -3.6) return 2.2;
  if (w <= -2.9) return 1.3;
  return 0.8;
}
vec4 color_brain(vec4 c, vec4 d, vec4 r, float t) {
  float w = d.w;
  float zn = clamp(d.x / ${(2*he).toFixed(3)} + 0.5, 0.0, 1.0);
  if (w < -9.0) {
    // the cortex: tinted by its lobe's folder, recoloured by the mode, with a slow shimmer
    float heat = u_brain_rheat[int(clamp(-w - 10.0 + 0.5, 0.0, 8.0))];
    c.rgb = bc(u_brain_mode, u_brain_sweep, c.rgb, heat, zn, r.w, 0.0, t);
    c.a *= 0.85 + 0.15 * sin(t * 0.7 + r.y * 30.0);
  } else if (w >= 0.0 && w < 2500.0) {
    float lid = floor(w), s = w - lid;
    float heat = texture2D(u_brain_lheat, vec2((lid + 0.5) / 2048.0, 0.5)).r;
    float wave = bc_wave(s, bh_h(lid + 0.31), t);
    c.rgb = bc(u_brain_mode, u_brain_sweep, c.rgb, heat, zn, bh_h(lid), wave, t);
    float p = bh_pulse(d, t);
    c.rgb = mix(c.rgb, vec3(1.0, 0.98, 0.92), clamp(p * 0.8, 0.0, 1.0));
    c.a *= (1.0 + 6.0 * p) * (0.7 + 0.9 * wave);
    c.a *= 0.8 + 0.2 * sin(t * 0.6 + lid * 0.37);
  } else if (w < 0.0 && w > -2.1 && w <= -0.9) {
    float heat = pow(clamp(-w - 1.0, 0.0, 1.0), 0.42);
    c.rgb = bc(u_brain_mode, u_brain_sweep, c.rgb, heat, zn, r.w, 0.35 * pow(0.5 + 0.5 * sin(t * 1.3 + r.w * 40.0), 6.0), t);
    c.a *= 0.8 + 0.2 * sin(t * 1.7 + r.x * 30.0);
  } else if (w < 0.0 && w > -0.3) {
    c.rgb = bc(u_brain_mode, u_brain_sweep, c.rgb, 0.5, zn, r.w, 0.0, t);
  } else if (w <= -2.9 && w > -3.6) {
    c.a *= 0.85 + 0.15 * sin(t * 2.1 + r.y * 20.0);
  }
  return c;
}`,camera:{pos:[0,.6,11.2],target:[0,-.1,0],fov:35},pointSize:1.8,drift:.015,update(){_e.u_brain_mode.value.set(h.cur,h.prev),_e.u_brain_sweep.value=h.sweep()}},be=o({default:()=>Te,sculpt:()=>we}),xe=e=>e.toFixed(5),Se=e=>`vec3(${xe(e[0])}, ${xe(e[1])}, ${xe(e[2])})`;function Ce(){let e=window;return!e.__v3Gate||e.__v3Ready?Promise.resolve():new Promise(e=>{let t=setTimeout(e,6e3);window.addEventListener(`v3:ready`,()=>{clearTimeout(t),e()},{once:!0})})}function we(e){let t=e.id,n=e.offset??[0,0,0],r=e.albedo??[.93,.89,.8],i=e.key??[1,.93,.82],a=e.fill??[.55,.65,.9],o=e.rim??[.7,.8,1],s=e.dust??.05;return{id:t,async build(n,i,a){await Ce();let o=await(await fetch(e.url,{priority:`low`})).arrayBuffer(),c=new DataView(o);if(c.getUint32(0,!0)!==827609171)throw Error(`[${t}] ${e.url} is not an SPT1 file`);let l=c.getUint32(4,!0),u=c.getFloat32(8,!0),d=new Int16Array(o,16,l*3),f=new Int8Array(o,16+l*6,l*3),p=new Uint8Array(o,16+l*9,l),m=Math.floor(n.count*(1-s)),h=u/32767*e.size,g=.0075*e.size;for(let e=0;e<m;e++){let t=e%l,r=+(e>=l),o=r?(n.rand()-.5)*g:0,s=r?(n.rand()-.5)*g:0,c=r?(n.rand()-.5)*g:0;j.set(i,a,e,d[t*3]*h+o,d[t*3+1]*h+s,d[t*3+2]*h+c,p[t]/255,f[t*3]/254+.5,f[t*3+1]/254+.5,f[t*3+2]/254+.5,1)}let _=e.dustTint??r;for(let t=m;t<n.count;t++){let r=n.rand()*2-1,o=n.rand()*Math.PI*2,s=e.size*(1.1+1.3*Math.cbrt(n.rand())),c=Math.sqrt(1-r*r);j.set(i,a,t,Math.cos(o)*c*s*1.25,r*s,Math.sin(o)*c*s,-1,_[0],_[1],_[2],.05+.1*n.rand())}},uniforms:{[`u_${t}_yaw`]:{value:0}},glsl:`
uniform float u_${t}_yaw;
mat3 rot_${t}(float a) { float c = cos(a), s = sin(a); return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c); }
mat3 tilt_${t}() { float c = cos(${xe(e.tilt??0)}), s = sin(${xe(e.tilt??0)}); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }
float yaw_${t}(float t) { return u_${t}_yaw + ${xe(e.yaw0??0)} + ${xe(e.sway??.3)} * sin(t * 0.37) + ${xe(e.spin??0)} * t; }
vec3 anim_${t}(vec3 p, vec4 d, vec4 r, float t) {
  if (d.w < 0.0) return p;
  return tilt_${t}() * (rot_${t}(yaw_${t}(t)) * p) + ${Se(n)};
}
float size_${t}(vec4 d, vec4 r, float t) {
  if (d.w < 0.0) return 0.8 + 0.6 * r.y;
  return 1.0;
}
vec4 color_${t}(vec4 c, vec4 d, vec4 r, float t) {
  if (d.w < 0.0) return c;
  mat3 R = tilt_${t}() * rot_${t}(yaw_${t}(t));
  vec3 n = normalize(R * (c.rgb * 2.0 - 1.0));
  vec3 wp = R * d.xyz + ${Se(n)};
  vec3 V = normalize(cameraPosition - wp);
  float ao = d.w;
  vec3 L1 = normalize(vec3(-0.55, 0.7, 0.62));
  vec3 L2 = normalize(vec3(0.85, 0.05, 0.3));
  float nl = dot(n, L1);
  float lam = max(nl, 0.0);
  float wrap = pow(clamp(nl * 0.5 + 0.5, 0.0, 1.0), 2.0);         // soft marble wrap-around
  float fl = max(dot(n, L2), 0.0);
  float nv = max(dot(n, V), 0.0);
  float rimF = pow(1.0 - nv, 3.0);
  float spec = pow(max(dot(reflect(-L1, n), V), 0.0), ${xe(e.shine??28)});
  vec3 col = ${Se(i)} * (0.62 * lam + 0.2 * wrap) + ${Se(a)} * 0.24 * fl + ${Se(o)} * rimF * 0.5 + ${Se(i)} * spec * ${xe(e.spec??.5)};
  col *= mix(0.18, 1.0, ao * ao);
  col += ${Se(a)} * 0.035;
  float glint = step(0.996, fract(r.w * 173.0 + t * 0.07)) * lam * 0.9;   // a few glinting grains
  col += glint;
  ${e.tweak??``}
  float facing = smoothstep(-0.1, 0.2, dot(n, V));
  float a = ${xe(e.alpha??.34)} * mix(${xe(e.back??.05)}, 1.0, facing);
  return vec4(${Se(r)} * col, a);
}`,update(e,t){},camera:e.camera??{pos:[0,.2,9],target:[0,0,0]},pointSize:e.pointSize??1.7,drift:e.drift??.012}}var Te=we({id:`bust`,url:`/portfolio/models/bust.bin`,size:1.6,albedo:[.96,.93,.86],sway:.18,alpha:.7,pointSize:2.1,shine:34,spec:.42,tweak:`
  col = col * 1.22 + vec3(0.03, 0.032, 0.04);
  col *= mix(vec3(0.86, 0.92, 1.06), vec3(1.05, 1.0, 0.93), smoothstep(0.05, 0.75, lam));
  float vein = smoothstep(0.94, 1.0, sin(d.x * 9.0 + sin(d.y * 7.0 + d.z * 5.0) * 2.2 + sin(d.z * 11.0) * 0.9));
  col *= 1.0 - 0.11 * vein;`}),Ee=o({default:()=>Qe}),De=`/portfolio/media/wwii/imbalance-map-lg.webp`,Oe=[.851,.643,.255],ke=[1,.86,.52],Ae=[.93,.9,.82],je=[.5,.6,.8],Me=e=>e.toFixed(5),Ne=Math.PI/180,Pe={piedmont:[37.8238,-122.2316],laney:[37.7956,-122.2655],annarbor:[42.2808,-83.743],chicago:[41.7886,-87.5987]};function Fe(e,t){let n=29.5*Ne,r=45.5*Ne,i=23*Ne,a=-96*Ne,o=(Math.sin(n)+Math.sin(r))/2,s=Math.cos(n)**2+2*o*Math.sin(n),c=e=>Math.sqrt(s-2*o*Math.sin(e))/o,l=o*(t*Ne-a);return[c(e*Ne)*Math.sin(l),c(i)-c(e*Ne)*Math.cos(l)]}var Ie=Math.min(...[[48.38,-124.73],[42.84,-124.57],[40.44,-124.41]].map(e=>Fe(e[0],e[1])[0])),Le=Math.max(...[[44.81,-66.95],[44.9,-66.98]].map(e=>Fe(e[0],e[1])[0])),Re=Math.max(...[[49,-123.03],[49,-122.76],[48.38,-124.73]].map(e=>Fe(e[0],e[1])[1])),ze=6.9,Be=.26,Ve=(e,t,n)=>[e,t*Math.cos(Be)+n*Math.sin(Be),n*Math.cos(Be)-t*Math.sin(Be)],He=ze*(Re-Fe(24.55,-81.8)[1])/(Le-Ie)/2,Ue=(e,t)=>[ze*((e-Ie)/(Le-Ie)-.5),He-ze*(Re-t)/(Le-Ie)],We=(e,t)=>{let[n,r]=Fe(e,t);return Ue(n,r)},Ge=We(...Pe.piedmont),Ke=We(...Pe.laney),qe=We(...Pe.annarbor),Je=We(...Pe.chicago),Ye=Ve(Je[0]-.3,Je[1]+.04,.03),Xe=e.education,Ze=(e,t)=>Xe.find(t=>t.school.includes(e))?.school??t,Qe={id:`campus`,async build(e,t,n){let r=e.count,i=e.rand,{width:a,height:o,data:s}=await e.image(De,r>1e5?900:560),c=a*o,l=new Uint8Array(c),u=e=>s[e*4]>=249&&s[e*4+1]>=249&&s[e*4+2]>=249,d=new Int32Array(c),f=0,p=e=>{!l[e]&&u(e)&&(l[e]=1,d[f++]=e)};for(let e=0;e<a;e++)p(e),p((o-1)*a+e);for(let e=0;e<o;e++)p(e*a),p(e*a+a-1);for(;f;){let e=d[--f],t=e%a,n=(e-t)/a;for(let e=-1;e<=1;e++)for(let r=-1;r<=1;r++){if(!r&&!e)continue;let i=t+r,s=n+e;if(i<0||s<0||i>=a||s>=o)continue;let c=s*a+i;!l[c]&&u(c)&&(l[c]=1,d[f++]=c)}}let m=Math.floor(a*.462),h=Math.floor(o*.795);for(let e=h;e<o;e++)for(let t=0;t<m;t++)l[e*a+t]=1;let g=a,_=0,v=o,y=0,b=[],x=[];for(let e=0;e<c;e++){if(l[e])continue;let t=e%a,n=(e-t)/a;t<g&&(g=t),t>_&&(_=t),n<v&&(v=n),n>y&&(y=n),b.push(e),(t>0?l[e-1]:1)|(t<a-1?l[e+1]:1)|(n>0?l[e-a]:1)|(n<o-1?l[e+a]:1)&&x.push(e)}let S=(_+1-g)/(Le-Ie),C=(e,t)=>Ue(Ie+(e-g)/S,Re-(t-v)/S),w=0,T=(e,i,a,o,s,c)=>{w<r&&j.set(t,n,w++,e,i,a,o,s[0],s[1],s[2],c)},E=()=>{let e=0;for(;e<1e-6;)e=i();return Math.sqrt(-2*Math.log(e))*Math.cos(Math.PI*2*i())},D=(e,t,n,r,i,a)=>{let o=Ve(e,t,n);T(o[0],o[1],o[2],r,i,a)},O=Math.floor(r*.3),k=Math.floor(r*.16);for(let e=0;e<O;e++){let e=b[Math.floor(i()*b.length)],[t,n]=C(e%a+i(),Math.floor(e/a)+i());D(t,n,(i()-.5)*.03,2,je,.11+.12*i())}for(let e=0;e<k;e++){let e=x[Math.floor(i()*x.length)],[t,n]=C(e%a+i(),Math.floor(e/a)+i());D(t,n,(i()-.5)*.02,2.5,Ae,.3+.25*i())}let A=Math.floor(r*.035),M=[];for(let e=25;e<=50;e+=5)M.push({lat:e});for(let e=-125;e<=-65;e+=10)M.push({lon:e});for(let e=0,t=0;e<A&&t<A*12;t++){let t=M[Math.floor(i()*M.length)],n=i(),[r,a]=We(t.lat??22+n*30,t.lon??-128+n*66);Math.abs(r)>3.85||a>He+.3||a<-He-.3||(D(r,a,0,3,je,.16+.1*i()),e++)}let N=Ge,P=Ke,F=[(N[0]+P[0])/2,(N[1]+P[1])/2],I=qe,L=Je,R=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1]),z=R(F,I)*1.12,B=z/(z+R(I,L)*1.4),ee=(e,t,n,r,i)=>{let a=Math.sin(Math.PI*i);return[e[0]+(t[0]-e[0])*i,e[1]+(t[1]-e[1])*i+n*a,r*a]},V=e=>e<=B?ee(F,I,.55,.85,e/B):ee(I,L,-.06,.2,(e-B)/(1-B)),te=Math.floor(r*.12),ne=Math.floor(r*.04);for(let e=0;e<te;e++){let e=i(),[t,n,r]=V(e);D(t+E()*.009,n+E()*.009,r+E()*.009,e,Oe,.5+.4*i())}for(let e=0;e<ne;e++){let e=i(),[t,n,r]=V(e);D(t+E()*.05,n+E()*.05,r+E()*.05,e,Oe,.07+.1*i())}for(let e=0;e<Math.floor(r*.012);e++){let e=i(),[t,n]=V(e);D(t+E()*.012,n+E()*.012,.005,e,Oe,.18)}let re=[{uv:[N[0]+0,N[1]+.045],u:0,c:ke,r:.1},{uv:[P[0]+0,P[1]-.045],u:0,c:ke,r:.1},{uv:I,u:B,c:[1,.82,.3],r:.12},{uv:L,u:1,c:ke,r:.14}];for(let e of re){let t=10+e.u;for(let n=0;n<Math.floor(r*.0025);n++){let n=.045*i()**.6,r=i()*Math.PI*2;D(e.uv[0]+Math.cos(r)*n,e.uv[1]+Math.sin(r)*n,.03+E()*.01,t,e.c,.5+.9*i())}for(let n=0;n<Math.floor(r*.0018);n++){let n=i()*Math.PI*2,r=e.r+E()*.006;D(e.uv[0]+Math.cos(n)*r,e.uv[1]+Math.sin(n)*r,.03,t,e.c,.5)}for(let n=0;n<Math.floor(r*.001);n++){let n=i()*Math.PI*2,r=e.r*1.9+E()*.008;D(e.uv[0]+Math.cos(n)*r,e.uv[1]+Math.sin(n)*r,.03,t,e.c,.2)}for(let n=0;n<Math.floor(r*7e-4);n++)D(e.uv[0]+E()*.004,e.uv[1]+E()*.004,.03+i()*.3,t,e.c,.35)}let ie=Ye,ae=Math.floor(r*.1),H=[],oe=[.98,.84,.5],se=(e,t,n,r,a,o,s)=>{for(let c=0;c<s;c++){let s=i();H.push([e+(r-e)*s,t+(a-t)*s,n+(o-n)*s])}},ce=(e,t,n,r,a,o)=>{for(let s=0;s<o;s++)H.push([e+(t-e)*i(),n+(r-n)*i(),a])},le=(e,t,n,r,a,o)=>{for(let s=0;s<o;s++)H.push([a,n+(r-n)*i(),e+(t-e)*i()])},ue=(e,t,n,r,a,o)=>{for(let s=0;s<o;s++){let o=i()*2-1,s=Math.abs(o),c=t+r*.55,l=s<.01?t+r:i()<.5?t+(c-t)*i():c+(t+r-c)*(1-s)**.8;l<c?H.push([e+(i()<.5?-n:n),l,a]):H.push([e+o*n,l,a])}},de=(e,t,n,r,a,o)=>{for(let s=0;s<o;s++){let o=i(),s=(1-o)*r;if(i()<.55){let r=Math.floor(i()*4),c=r%2?1:-1,l=r<2?1:-1;H.push([e+c*s,t+o*a,n+l*s])}else{let r=Math.floor(i()*4),c=(i()*2-1)*s;r===0?H.push([e+c,t+o*a,n+s]):r===1?H.push([e+c,t+o*a,n-s]):r===2?H.push([e+s,t+o*a,n+c]):H.push([e-s,t+o*a,n+c])}}},fe=[{dx:0,hw:.075,hh:.62,sp:.2,win:3,pin:!0},{dx:.13,hw:.065,hh:.84,sp:.3,win:4,pin:!0},{dx:.25,hw:.1,hh:.4,sp:.1,win:2,pin:!0},{dx:.375,hw:.06,hh:.95,sp:.34,win:5,pin:!1},{dx:.48,hw:.075,hh:.55,sp:.18,win:3,pin:!0},{dx:.585,hw:.05,hh:.34,sp:.14,win:2,pin:!1}],pe=Math.floor(ae/fe.length);for(let e of fe){let t=e.dx,n=e.hw,r=e.hh,i=pe;ce(t-n,t+n,0,r,0+n,Math.floor(i*.12)),ce(t-n,t+n,0,r,0-n,Math.floor(i*.05)),le(0-n,0+n,0,r,t+n,Math.floor(i*.05)),le(0-n,0+n,0,r,t-n,Math.floor(i*.05));for(let e of[-1,1])for(let a of[-1,1])se(t+e*n,0,0+a*n,t+e*n,r,0+a*n,Math.floor(i*.045));for(let e=1;e<=3;e++){let a=r*e/4;se(t-n,a,0+n,t+n,a,0+n,Math.floor(i*.025)),se(t+n,a,0-n,t+n,a,0+n,Math.floor(i*.012))}for(let a=0;a<e.win;a++)ue(t,r*(.1+.62*a/Math.max(1,e.win)),n*.42,r*.11,0+n+.002,Math.floor(i*.045));se(t-n*1.1,r,0+n*1.1,t+n*1.1,r,0+n*1.1,Math.floor(i*.04));for(let e=0;e<5;e++)se(t-n+e*n*2/4,r,0+n*1.1,t-n+e*n*2/4,r+n*.4,0+n*1.1,Math.floor(i*.012));if(de(t,r,0,n*.95,e.sp,Math.floor(i*.2)),e.pin)for(let e of[-1,1])for(let a of[-1,1])de(t+e*n*1.05,r,0+a*n*1.05,n*.2,n*1.7,Math.floor(i*.025))}se(-.1,0,.05,.7,0,.05,Math.floor(ae*.05));for(let e=0;e<ae;e++){let t=H[Math.min(H.length-1,Math.floor(e*H.length/ae))];T(ie[0]+t[0],ie[1]+t[1],ie[2]+t[2],5,oe,.45+.6*i())}for(;w<r;)T((i()-.5)*12,(i()-.5)*6.5,-.3-i()*3.5,-1,[.8,.84,.95],.015+.06*i()**2)},glsl:`
float cmp_cycle(float t) { return mod(t, 12.0); }
float cmp_head(float t) { return clamp(cmp_cycle(t) / 7.0, 0.0, 1.0); }
float cmp_life(float t) { return 1.0 - smoothstep(10.0, 11.6, cmp_cycle(t)); }
vec3 anim_campus(vec3 p, vec4 d, vec4 r, float t) {
  float w = d.w;
  if (w < -0.5) return p + vec3(sin(t * 0.2 + r.x * 40.0), 0.6 * sin(t * 0.27 + r.y * 40.0), cos(t * 0.17 + r.z * 40.0)) * 0.07;
  if (w > 4.5 && w < 6.0) {                      // gothic skyline: stands a touch lower, then rises as the pulse arrives
    float c = cmp_cycle(t);
    float g = smoothstep(6.5, 8.6, c) * (1.0 - smoothstep(10.0, 11.8, c));
    float by = ${Me(Ye[1])};
    return vec3(p.x, by + (p.y - by) * (0.86 + 0.14 * g), p.z);
  }
  return p;
}
float size_campus(vec4 d, vec4 r, float t) {
  float w = d.w;
  if (w < -0.5) return 0.8;
  if (w >= 10.0) return 1.8;
  if (w > 4.5 && w < 6.0) return 0.95;
  if (w > 2.9 && w < 3.1) return 0.7;
  if (w > 1.9) return 0.8;
  return 1.1;
}
vec4 color_campus(vec4 c, vec4 d, vec4 r, float t) {
  float w = d.w;
  float head = cmp_head(t), life = cmp_life(t);
  if (w < -0.5) return c;
  if (w <= 1.0) {                                // route: unlit ahead of the pulse, bright head, steady glow behind it
    float behind = head - w;
    float lit = behind < 0.0 ? 0.16 : 0.8 + 2.6 * exp(-behind * 14.0);
    c.a *= mix(0.16, lit, life);
    c.rgb = mix(c.rgb, vec3(1.0, 0.93, 0.7), 0.7 * exp(-max(behind, 0.0) * 30.0) * step(0.0, behind));
  } else if (w >= 10.0) {                        // station: flashes as the pulse passes, then keeps a glow
    float u = w - 10.0;
    float behind = head - u;
    float flash = behind >= 0.0 ? exp(-behind * 7.0) : 0.0;
    c.a *= mix(0.45, 0.8 + 1.4 * flash, life);
    c.rgb += vec3(0.25, 0.2, 0.1) * flash;
  } else if (w > 4.5 && w < 6.0) {               // towers: dim until the pulse arrives, then lit with twinkling windows
    float arrive = smoothstep(6.6, 8.2, cmp_cycle(t)) * life;
    float tw = step(0.93, fract(r.x * 37.0 + floor(t * 0.7) * 0.31));
    c.a *= 0.4 + 0.85 * arrive + tw * 1.4 * arrive;
  } else if (w > 2.4 && w < 2.6) {               // coast: a slow shimmer along the outline
    c.a *= 0.8 + 0.4 * sin(t * 0.6 + d.x * 1.6 + d.y * 1.1);
  }
  return c;
}`,camera:{pos:[0,1.2,10],target:[0,.1,0],fov:35},pointSize:2.2,drift:.004,anchors:[{id:`piedmont`,label:Ze(`Piedmont`,`Piedmont High School`),pos:Ve(Ge[0],Ge[1]+.16,.2)},{id:`laney`,label:Ze(`Laney`,`Laney College`),pos:Ve(Ke[0],Ke[1]-.2,.2)},{id:`michigan`,label:Ze(`Michigan`,`University of Michigan`),pos:Ve(qe[0],qe[1]+.3,.2)},{id:`chicago`,label:Ze(`Chicago`,`University of Chicago`),pos:[Ye[0]+.1,Ye[1]+1.55,Ye[2]]}]},$e=o({default:()=>Pt}),et=Math.PI*2,tt=Math.PI/180*48,nt=-1.18,rt=-.2,it=[Math.cos(tt),-Math.sin(tt)],at=[Math.sin(tt),Math.cos(tt)],ot=(e,t,n=0)=>[e,nt+t*it[0]+n*at[0],rt+t*it[1]+n*at[1]],st=-3.55,ct=1,lt=et*1.15,ut=-1.35,dt=e=>st+7.1*e,ft=e=>ct*Math.sin(lt*e+ut),pt=e=>ct*lt*Math.cos(lt*e+ut)/7.1,mt=.27,ht=[.075,.275,.5,.725,.925],gt=[[.4,.95,.9],[1,.6,.82],[1,.78,.42],[.78,.72,1],[.5,.76,1]],_t=1,vt=2.6,yt=.6,bt=14,xt=8,St=[0,1.62,-.7],Ct=(e,t)=>{let n=(e-st)/7.1,r=pt(n);return Math.abs(t-ft(n))/Math.sqrt(1+r*r)},wt=(e,t,n,r,i)=>(e-n)*(e-n)+(t-r)*(t-r)<i*i,Tt=(e,t,n,r,i,a)=>e>=n&&e<=i&&t>=r&&t<=a,Et=[1,.62,.25],Dt=[.35,.95,.88],Ot=[1,.55,.8],kt=[.7,.55,1],At=[.45,.68,1],jt=[.95,.96,1],Mt=[1,.88,.4],Nt=[(e,t)=>{for(let n of[.42,0,-.42]){if(wt(e,t,-.42,n,.13))return Et;if(Tt(e,t,-.17,n-.05,.52,n+.05))return Dt}return Tt(e,t,-.22,.8,.22,1)||Tt(e,t,-.72,-.84,.72,.88)&&!Tt(e,t,-.64,-.76,.64,.8)?Dt:null},(e,t)=>Tt(e,t,0,-.9,.24,-.4)?kt:wt(e,t,-.2,0,.09)||wt(e,t,.2,0,.09)||Math.abs(e)<.03&&t>.5||t<-.16&&t>-.34&&Math.abs(e)<.2&&Math.abs(t+.2+.12*e*e*6)<.035?null:wt(e,t,-.38,.22,.46)||wt(e,t,.3,.3,.46)||wt(e,t,0,.5,.38)||wt(e,t,-.5,-.18,.38)||wt(e,t,.46,-.12,.4)||wt(e,t,0,-.2,.46)?Ot:null,(e,t)=>{if(wt(e,t,.35,.4,.07))return null;if(Tt(e,t,-.82,-.88,-.03,-.18)||Tt(e,t,.03,-.88,.82,-.18))return Math.abs(e)<.06?null:At;let n=((e-.12)/.62)**2+((t-.3)/.4)**2<1,r=e<-.42&&e>-.9&&Math.abs(t-.3)<(e+.9)*.55*.9+0&&Math.abs(t-.3)<.38*(1-(-.42-e)/.48*0)&&e+.9>Math.abs(t-.3)*.9;return n||r?Et:null},(e,t)=>!((e/.92)**2+((t-.08)/.46)**2<1||wt(e,t,-.6,-.3,.3)||wt(e,t,.6,-.3,.3))||Math.abs(e+.42)<.05&&Math.abs(t-.12)<.2||Math.abs(e+.42)<.2&&Math.abs(t-.12)<.05?null:wt(e,t,.38,.22,.09)?Ot:wt(e,t,.56,.04,.09)?Mt:jt,(e,t)=>{let n=e-.08,r=t+.62,i=n*.5+r*.866,a=-n*.866+r*.5;if(i>0&&i<1.15&&Math.abs(a)<.075)return Et;if(i>=1.15&&i<1.38&&Math.abs(a)<.075*(1.38-i)/.23)return Mt;if(!Tt(e,t,-.62,-.88,.4,.88))return null;for(let n of[.5,.2,-.1,-.4])if(Tt(e,t,-.4,n-.04,.2,n+.04))return null;return At}],Pt={id:`chomchom`,build(e,t,n){let r=e.count,i=e.rand,a=(262144/r)**.8,o=0,s=(e,i,s,c,l,u)=>{o<r&&j.set(t,n,o++,e,i,s,c,l[0],l[1],l[2],u*a)},c=(e,t,n,r,i,a)=>{let o=ot(e,t,n);s(o[0],o[1],o[2],r,i,a)},l=e=>Math.max(1,Math.floor(e*r)),u=[.55,.98,.64],d=[.5,.92,.7],f=[1,.96,.84],p=[Ot,Mt,Dt,kt,[1,.72,.5],jt],m=l(.37);{let e=Math.sqrt(33.496*.66/m)*.92,t=[];for(let n=-3.95;n<3.95;n+=e)for(let r=-2.12;r<2.12;r+=e){let a=n+i()*e,o=r+i()*e;if(a>3.95||o>2.12||o<-2.12)continue;let s=(Math.abs(a)/3.95)**4+(Math.abs(o)/2.12)**4;i()>1-Math.min(1,Math.max(0,(s-.5)/.5))**1.5*.97||Ct(a,o)<.34||t.push([a,o,i()])}let n=Math.min(1,m/t.length);for(let[e,r,a]of t){if(a>n)continue;let t=Math.sin((e*.8+r*.55)*2.1)>0;c(e,r,(i()-.5)*.02,1,t?u:d,(t?.3:.2)*(.7+.6*i()))}}for(let e=0,t=0;e<l(.02)&&t<2e4;t++){let t=(i()*2-1)*3.8,n=(i()*2-1)*2;Ct(t,n)<.47000000000000003||(c(t,n,.03,2,p[Math.floor(i()*p.length)],.55),e++)}let h=l(.055);for(let e=0;e<h;e++){let e=-3.9+i()*7.8,t=(e-st)/7.1,n=pt(t),r=1/Math.sqrt(1+n*n),a=i()<.5?-1:1,o=mt*(1+(i()-.5)*.06);c(e+a*o*-n*r,ft(t)+a*o*r,.01,3,f,.34)}let g=l(.016);for(let e=0;e<g;e++){let t=-3.85+i()*7.7,n=(t-st)/7.1;if((t*1.18%.34+.34)%.34>.17){if(e--,i()<0)break}else c(t,ft(n)+(i()-.5)*.026,.012,4,jt,.62)}ht.forEach((e,t)=>{let n=dt(e),r=ft(e),a=.1*t,o=gt[t];for(let e=0;e<l(.0045);e++){let e=.4+.3*i()**1.6,t=i()*et;c(n+e*Math.cos(t),r+e*Math.sin(t),.01,5+a,o,.07)}for(let e=0;e<l(.0045);e++){let e=i()*et;c(n+.42*Math.cos(e),r+.42*Math.sin(e),.03,5+a,[1,1,1],.8)}for(let e=0;e<l(.0035);e++){let e=i()*et;c(n+.455*Math.cos(e),r+.455*Math.sin(e),.03,5+a,o,.5)}for(let e=0;e<l(.007);e++){let e=.4*Math.sqrt(i()),t=i()*et;c(n+e*Math.cos(t),r+e*Math.sin(t),.02,5+a,[.9,.92,1],.07)}let s=Nt[t];for(let e=0,t=0;e<l(.0075)&&t<2e5;t++){let t=i()*2-1,o=i()*2-1,l=s(t,o);l&&(c(n+t*.27,r+o*.27,.05,6+a,l,.55),e++)}}),[[-3.4,1.55],[-2.6,-1.55],[-.9,1.6],[1,-1.65],[2.2,1.55],[3.4,-1.4],[3.55,.9],[-1.3,-1.7],[.35,1],[-3.55,-.3]].forEach(([e,t],n)=>{if(Ct(e,t)<.6)return;let r=ot(e,t,.02),a=.26+n%3*.08/2,o=.2+n%2*.04;for(let e=0;e<l(.0018);e++){let e=i();s(r[0]+(i()-.5)*.03,r[1]+e*a,r[2],7+.9*e*.5,[.6,.45,.3],.2)}for(let e=0;e<l(.004);e++){let e=o*Math.sqrt(i()),t=i()*et,n=(a+e*Math.sin(t))/(a+o);s(r[0]+e*Math.cos(t),r[1]+a+e*Math.sin(t),r[2]+.02,7+.9*Math.min(1,n)*.9,[.62,1,.66],.36)}}),[[-3,.2],[2.9,.4],[1.8,-.35],[-.2,-1.25],[-1.9,1.3]].forEach(([e,t])=>{if(Ct(e,t)<.55)return;let n=ot(e,t,.02);for(let e=0;e<l(.0032);e++){let t=.17*Math.sqrt(i()),r=i()*Math.PI,a=[-.15,0,.15][e%3],o=[0,.08,0][e%3];s(n[0]+a+t*Math.cos(r),n[1]+o+t*Math.sin(r),n[2]+.01,8,[.3,.85,.5],.26)}});for(let e=0;e<5;e++){let t=-3.6+e*1.8+e%2*.3,n=[1.2,-.9,.5,-1.5,1.7][e],r=ot(t,n,.55+e%3*.12),a=[[-.2,0,.12],[0,.07,.16],[.2,.01,.12],[.36,-.02,.09],[-.34,-.03,.08]];for(let t=0;t<l(.0032);t++){let[n,o,c]=a[t%a.length],l=c*Math.sqrt(i()),u=i()*Math.PI;s(r[0]+n+l*Math.cos(u),r[1]+o+l*Math.sin(u)-(i()<.3?i()*.04:0),r[2],9+.1*e,[.97,.97,1],.62)}}for(let e=0;e<l(.03);e++){let e=2.6*i()**.8,t=i()*et;s(St[0]+e*Math.cos(t),St[1]+e*Math.sin(t)*.9,St[2]-.5-i()*.4,15,e<1.3?[1,.72,.9]:[.7,.75,1],.05)}let _=l(.1),v=Math.PI*(3-Math.sqrt(5));for(let e=0;e<_;e++){let t=1-2*(e+.5)/_,n=Math.sqrt(1-t*t),r=e*v;s(Math.cos(r)*n,t,Math.sin(r)*n,10,jt,.3+.1*i())}for(let e=0;e<l(.035);e++){let e=i()*2-1,t=i()*et,n=Math.cbrt(i())*.98,r=Math.sqrt(1-e*e);s(Math.cos(t)*r*n,e*n,Math.sin(t)*r*n,11,[1,.82,.95],.1)}for(let e=0;e<l(.032);e++){let e=i()*2-1,t=i()*et,n=Math.sqrt(1-e*e);s(Math.cos(t)*n,e,Math.sin(t)*n,12,[.9,.85,1],.2)}let y=l(.012);for(let e=0;e<y;e++){let t=(e+i())/y*et;s(Math.cos(t)*1.55,Math.sin(t)*1.55,St[2]+.05-St[2]*0,13,jt,.4)}for(let e=0;e<l(.012);e++){let e=ot(dt(ht[1]),ft(ht[1]),.1);s(e[0],e[1],e[2],14,[1,.75,.9],.6)}let b=(e,t)=>{let n=Math.hypot(e,t),r=Math.atan2(t,e),i=et/5,a=((r-Math.PI/2)%i+i)%i-i/2;return n<.42/(Math.cos(a)+1.55*Math.abs(Math.sin(a))*1)*1+0};ht.forEach((e,t)=>{for(let e=0,n=0;e<l(.0035)&&n<1e5;n++){let n=(i()*2-1)*.5,r=(i()*2-1)*.5;if(!b(n,r))continue;let a=Math.hypot(n,r);s(n,r,.02,16+.1*t,a<.2?[1,.95,.7]:[1,.82,.3],.75),e++}for(let e=0;e<l(.0045);e++)s(0,0,0,17+.1*t,p[Math.floor(i()*p.length)],.9)});for(let e=0;e<l(.0035);e++){let e=(i()*2-1)*.28,t=(i()*2-1)*.14;s(e,t,0,18,e>.08&&Math.abs(t)<.09?[1,.9,.8]:[1,.32,.26],1.1)}for(let e=0;e<l(.006);e++)s(0,0,0,19,[1,.55,.45],.5);j.dust(t,n,o,r,i,6.4,.07*a,[.95,.85,1]);for(let e=o;e<r;e++)t[e*4+3]=0},glsl:`
const float CH_C = ${bt.toFixed(1)};
const float CH_BR = ${xt.toFixed(1)};
const vec3 CH_BC = vec3(${St.map(e=>e.toFixed(3)).join(`,`)});
const float CH_TAU = 6.2831853;
float ch_ease(float x) { x = clamp(x, 0.0, 1.0); return x * x * (3.0 - 2.0 * x); }
float ch_breath(float t) { return 0.5 - 0.5 * cos(CH_TAU * t / CH_BR); }
vec3 ch_w(float u, float v, float h) { return vec3(u, ${nt.toFixed(4)} + v * ${it[0].toFixed(5)} + h * ${at[0].toFixed(5)}, ${rt.toFixed(4)} + v * ${it[1].toFixed(5)} + h * ${at[1].toFixed(5)}); }
vec2 ch_path(float s) { return vec2(${st.toFixed(3)} + ${7.1.toFixed(3)} * s, ${ct.toFixed(3)} * sin(${lt.toFixed(5)} * s + ${ut.toFixed(3)})); }
vec2 ch_tan(float s) { return normalize(vec2(1.0, ${(ct*lt/7.1).toFixed(5)} * cos(${lt.toFixed(5)} * s + ${ut.toFixed(3)}))); }
float ch_sts(float k) {
${ht.map((e,t)=>`  if (k < ${t}.5) return ${e.toFixed(4)};`).join(`
`)}
  return ${ht[4].toFixed(4)};
}
float ch_arr(float k) { return ${_t.toFixed(2)} + k * ${vt.toFixed(2)}; }
float ch_age(float k, float tc) { return mod(tc - ch_arr(k), CH_C); }
float ch_s(float tc) {
  float s = mix(0.0, ${ht[0].toFixed(4)}, ch_ease(tc / ${_t.toFixed(2)}));
${ht.slice(0,4).map((e,t)=>{let n=_t+t*vt+yt,r=_t+(t+1)*vt;return`  s = tc > ${n.toFixed(2)} ? mix(${e.toFixed(4)}, ${ht[t+1].toFixed(4)}, ch_ease((tc - ${n.toFixed(2)}) / ${(r-n).toFixed(2)})) : s;`}).join(`
`)}
  float a4 = ${12 .toFixed(2)};
  s = tc > a4 ? mix(${ht[4].toFixed(4)}, 1.04, ch_ease((tc - a4) / 1.6)) : s;
  return s;
}
float ch_carA(float tc) { return smoothstep(0.0, 0.3, tc) * (1.0 - smoothstep(${13.1.toFixed(2)}, ${13.6.toFixed(2)}, tc)); }
vec3 anim_chomchom(vec3 p, vec4 d, vec4 r, float t) {
  float w = d.w, cl = floor(w + 0.001);
  float k = floor(fract(w) * 10.0 + 0.5);
  float tc = mod(t, CH_C), b = ch_breath(t);
  if (cl < 0.5) return p + 0.06 * vec3(sin(t * 0.21 + r.x * 40.0), sin(t * 0.17 + r.y * 40.0), sin(t * 0.13 + r.z * 40.0));
  if (cl < 1.5) return p + vec3(0.0, ${at[0].toFixed(4)}, ${at[1].toFixed(4)}) * 0.03 * sin(t * 0.7 + p.x * 1.7 + p.y * 2.3);
  if (cl < 2.5) return p + vec3(0.0, 0.025 * sin(t * 1.3 + r.x * 30.0), 0.0);
  if (cl > 4.5 && cl < 6.5) {
    vec2 st = ch_path(ch_sts(k)); vec3 c = ch_w(st.x, st.y, 0.0);
    float age = ch_age(k, tc), pu = age < 1.6 ? exp(-age * 3.0) : 0.0;
    vec3 q = c + (p - c) * (1.0 + 0.1 * pu);
    float bob = cl > 5.5 ? 0.012 * sin(t * 1.4 + k * 1.7) : 0.0;
    return q + vec3(0.0, ${at[0].toFixed(4)}, ${at[1].toFixed(4)}) * (0.07 * pu + bob);
  }
  if (cl > 6.5 && cl < 7.5) { float hf = fract(w) / 0.9; return p + vec3(0.03 * hf * sin(t * 1.1 + p.x * 2.0) + 0.012 * hf * sin(t * 2.3 + p.x * 5.0), 0.0, 0.0); }
  if (cl > 8.5 && cl < 9.5) {
    float sp = 0.045 + 0.018 * k, x = mod(p.x + t * sp + 4.6, 9.2) - 4.6;
    return vec3(x, p.y + 0.03 * sin(t * 0.5 + k * 2.0), p.z);
  }
  if (cl > 9.5 && cl < 10.5) {
    float R = 0.62 + 0.30 * b;
    float wob = 1.0 + 0.03 * sin(t * 1.3 + p.x * 3.1 + p.y * 2.3) + 0.02 * sin(t * 1.9 - p.z * 4.0 + p.y * 3.0);
    return CH_BC + p * R * wob;
  }
  if (cl > 10.5 && cl < 11.5) { float R = 0.62 + 0.30 * b; return CH_BC + p * R * 0.97; }
  if (cl > 11.5 && cl < 12.5) {
    float R = 0.62 + 0.30 * b;
    float rho = 1.28 + (0.35 + 1.1 * r.x) * (1.0 - b);
    float a = 0.55 * (1.0 - b) * (r.y - 0.5) + t * 0.05 * (r.z - 0.5);
    float ca = cos(a), sa = sin(a);
    vec3 q = vec3(p.x * ca + p.z * sa, p.y, -p.x * sa + p.z * ca);
    return CH_BC + q * R * rho;
  }
  if (cl > 12.5 && cl < 13.5) return CH_BC + vec3(p.x, p.y, 0.0) * (0.93 + 0.1 * b) + vec3(0.0, 0.0, 0.05);
  if (cl > 13.5 && cl < 14.5) {
    vec2 st = ch_path(ch_sts(1.0)); vec3 A = ch_w(st.x, st.y, 0.35);
    vec3 B = CH_BC - vec3(0.0, 0.62 + 0.30 * b, 0.0);
    float f = fract(t * 0.11 + r.x);
    vec3 C = (A + B) * 0.5 + vec3(0.9, 0.2, 0.0);
    vec3 P = (1.0 - f) * (1.0 - f) * A + 2.0 * (1.0 - f) * f * C + f * f * B;
    return P + 0.09 * vec3(sin(t * 0.9 + r.y * 20.0 + f * 9.0), sin(t * 0.7 + r.z * 20.0), 0.5 * sin(t * 1.1 + r.w * 20.0));
  }
  if (cl > 14.5 && cl < 15.5) return p + vec3(0.05 * sin(t * 0.2 + r.x * 30.0), 0.05 * cos(t * 0.17 + r.y * 30.0), 0.0) + (p - CH_BC) * 0.04 * b;
  if (cl > 15.5 && cl < 17.5) {
    vec2 st = ch_path(ch_sts(k)); vec3 c = ch_w(st.x, st.y, 0.55);
    float age = ch_age(k, tc);
    if (cl < 16.5) {
      float q = age / 1.7, e = ch_ease(age / 0.35);
      float sc = (e + 0.18 * sin(3.14159 * min(1.0, age / 0.5))) * (1.0 - 0.5 * smoothstep(0.6, 1.0, q));
      float lift = 0.1 + 0.85 * (1.0 - pow(1.0 - clamp(q, 0.0, 1.0), 2.0));
      float a = age * 2.6, wb = 0.35 * sin(age * 4.0);
      vec2 l = vec2(p.x * cos(wb) - p.y * sin(wb), p.x * sin(wb) + p.y * cos(wb));
      return c + vec3(0.0, lift, 0.12) + vec3(l.x * cos(a), l.y, 0.0) * sc;
    }
    float ang = r.y * CH_TAU, sp = 0.45 + 1.15 * r.z;
    vec3 dir = vec3(cos(ang), 0.5 + 0.9 * abs(sin(ang)), 0.3 * (r.w - 0.5));
    return c + vec3(0.0, 0.2, 0.1) + dir * sp * age * (1.0 - 0.25 * age) + vec3(0.0, -0.9 * age * age, 0.0) + vec3(0.04 * sin(age * 9.0 + r.x * 20.0), 0.0, 0.0);
  }
  if (cl > 17.5 && cl < 18.5) {
    float s = ch_s(tc); vec2 pt = ch_path(s), tg = ch_tan(s);
    vec2 uv = pt + tg * p.x * 1.0 + vec2(-tg.y, tg.x) * p.y * 1.0;
    return ch_w(uv.x, uv.y, 0.08);
  }
  if (cl > 18.5 && cl < 19.5) {
    float lag = r.x * 0.55;
    float s = ch_s(max(0.0, tc - lag)); vec2 pt = ch_path(s), tg = ch_tan(s);
    vec2 uv = pt + vec2(-tg.y, tg.x) * (r.y - 0.5) * 0.1 * (0.4 + lag * 2.0);
    return ch_w(uv.x, uv.y, 0.07 + r.z * 0.08 * lag);
  }
  return p;
}
float size_chomchom(vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl < 0.5) return 1.0;
  if (cl < 1.5) return 1.5;
  if (cl < 2.5) return 1.6;
  if (cl > 15.5 && cl < 16.5) return 1.25;
  if (cl > 16.5 && cl < 17.5) return 0.9;
  if (cl > 17.5 && cl < 18.5) return 1.0;
  if (cl > 9.5 && cl < 11.5) return 1.0;
  return 1.0;
}
vec4 color_chomchom(vec4 c, vec4 d, vec4 r, float t) {
  float w = d.w, cl = floor(w + 0.001), k = floor(fract(w) * 10.0 + 0.5);
  float tc = mod(t, CH_C), b = ch_breath(t);
  vec3 rgb = c.rgb; float a = c.a;
  if (cl < 0.5) return vec4(rgb, a * (0.6 + 0.4 * sin(t * (0.5 + r.x) + r.y * 30.0)));
  if (cl < 1.5) { a *= 0.82 + 0.18 * sin(t * 0.6 + d.x * 1.1 - d.y * 0.8); return vec4(rgb, a); }
  if (cl < 2.5) { a *= 0.35 + 0.65 * (0.5 + 0.5 * sin(t * (1.0 + r.x * 1.6) + r.y * 40.0)); return vec4(rgb, a); }
  if (cl > 3.5 && cl < 4.5) {
    float s = (d.x - (${st.toFixed(3)})) / ${7.1.toFixed(3)};
    float wv = smoothstep(0.55, 1.0, fract(s * 3.0 - t * 0.12));
    a *= 0.45 + 1.1 * wv; rgb = mix(rgb, vec3(1.0, 0.95, 0.7), wv * 0.5); return vec4(rgb, a);
  }
  if (cl > 4.5 && cl < 6.5) {
    float age = ch_age(k, tc), pu = age < 1.6 ? exp(-age * 3.0) : 0.0;
    a *= 1.0 + 1.5 * pu; rgb = mix(rgb, vec3(1.0), pu * 0.45); return vec4(rgb, a);
  }
  if (cl > 8.5 && cl < 9.5) {
    float x = mod(d.x + t * (0.045 + 0.018 * k) + 4.6, 9.2) - 4.6;
    a *= smoothstep(4.4, 3.3, abs(x)); return vec4(rgb, a);
  }
  if (cl > 9.5 && cl < 10.5) {
    vec3 n = d.xyz;
    float h = 0.5 * n.x + 0.35 * n.y + 0.15 * n.z + t * 0.04;
    vec3 iri = 0.5 + 0.5 * cos(CH_TAU * (h + vec3(0.0, 0.33, 0.67)));
    rgb = mix(vec3(0.82, 0.85, 1.0), iri * 0.85 + 0.25, 0.7);
    float hl = smoothstep(0.78, 0.95, dot(n, normalize(vec3(-0.5, 0.65, 0.55))));
    float hl2 = smoothstep(0.88, 0.97, dot(n, normalize(vec3(0.55, -0.6, 0.5))));
    a = 0.30 * (0.55 + 0.45 * b) + hl * 1.4 + hl2 * 0.4;
    rgb = mix(rgb, vec3(1.0), hl * 0.8);
    return vec4(rgb, a);
  }
  if (cl > 10.5 && cl < 11.5) { rgb = mix(vec3(1.0, 0.78, 0.92), vec3(0.8, 0.9, 1.0), b); return vec4(rgb, a * (0.35 + 1.2 * b)); }
  if (cl > 11.5 && cl < 12.5) { rgb = mix(vec3(0.75, 0.8, 1.0), vec3(1.0, 0.82, 0.95), b); return vec4(rgb, a * (0.3 + 1.1 * (1.0 - b) * (0.4 + r.w))); }
  if (cl > 12.5 && cl < 13.5) {
    float ph = fract(t / CH_BR);
    float ang = atan(d.x, d.y) / CH_TAU; ang = ang < 0.0 ? ang + 1.0 : ang;
    float behind = mod(ph - ang + 1.0, 1.0);
    float tr = exp(-behind * 7.0), head = exp(-behind * 90.0);
    vec3 base = ang < 0.5 ? vec3(0.55, 0.95, 0.85) : vec3(0.8, 0.7, 1.0);
    return vec4(mix(base, vec3(1.0), head), a * (0.3 + 3.0 * tr + 6.0 * head));
  }
  if (cl > 13.5 && cl < 14.5) { float f = fract(t * 0.11 + r.x); return vec4(rgb, a * sin(3.14159 * f) * (0.6 + 0.8 * r.w)); }
  if (cl > 14.5 && cl < 15.5) return vec4(mix(rgb, vec3(1.0, 0.8, 0.9), b * 0.5), a * (0.55 + 0.9 * b));
  if (cl > 15.5 && cl < 17.5) {
    float age = ch_age(k, tc);
    if (cl < 16.5) {
      float q = age / 1.7;
      float vis = age < 1.7 ? smoothstep(0.0, 0.08, age) * (1.0 - smoothstep(0.62, 1.0, q)) : 0.0;
      float tw = 1.0 + 0.4 * sin(age * 20.0 + r.x * 6.0);
      return vec4(rgb, a * vis * tw);
    }
    float vis = age < 1.6 ? pow(1.0 - age / 1.6, 1.3) * smoothstep(0.0, 0.05, age) : 0.0;
    return vec4(rgb, a * vis * (0.7 + 0.5 * sin(age * 16.0 + r.x * 30.0)));
  }
  if (cl > 17.5 && cl < 18.5) return vec4(rgb, a * ch_carA(tc));
  if (cl > 18.5) return vec4(rgb, a * ch_carA(tc) * (1.0 - r.x) * 0.7);
  return vec4(rgb, a);
}`,camera:{pos:[0,1.1,10.3],target:[0,-.05,-.3],fov:35},pointSize:1.9,drift:.012},Ft=o({default:()=>on}),It=Math.PI*2,Lt=Math.PI/180,Rt=2.05,zt=[.957,.506,.125],Bt=[1,.72,.28],Vt=[1,.9,.7],Ht=[.62,.74,.92],Ut=[.3,.44,.72],Wt=[1,.72,.38],Gt=[1,.93,.78],Kt=(()=>{let e=[.62,.3,.62],t=Math.hypot(e[0],e[1],e[2]);return e.map(e=>e/t)})(),qt=`/portfolio/`,Jt=e=>Math.max(0,Math.min(1,e)),Yt=[[51.5,-.1],[48.9,2.35],[50.1,8.7],[52.4,4.9],[40.4,-3.7],[59.3,18.1],[52.2,21],[41,29],[55.75,37.6],[25.2,55.3],[19.1,72.9],[28.6,77.2],[13.1,80.3],[13.75,100.5],[1.35,103.8],[-6.2,106.8],[22.3,114.2],[31.2,121.5],[39.9,116.4],[25,121.5],[37.6,127],[35.7,139.7],[34.7,135.5],[14.6,121],[-33.9,151.2],[-37.8,145],[-31.95,115.9],[-36.85,174.8],[-26.2,28],[-33.9,18.4],[-1.3,36.8],[6.5,3.4],[30,31.2],[33.6,-7.6],[-23.55,-46.6],[-22.9,-43.2],[-34.6,-58.4],[-33.45,-70.65],[-12.05,-77],[4.7,-74.1],[19.4,-99.1],[34.05,-118.25],[37.8,-122.4],[47.6,-122.3],[39.7,-105],[32.8,-96.8],[41.9,-87.6],[33.75,-84.4],[25.8,-80.2],[40.7,-74],[43.65,-79.4],[39,-77.5],[21.3,-157.85],[61.2,-149.9],[64.1,-21.9],[32.1,34.8],[24.7,46.7],[24.9,67],[3.14,101.7],[21,105.85],[10.8,106.7],[38.7,-9.14],[45.5,9.2],[48.2,16.4],[53.35,-6.26],[60.2,24.9]],Xt=(e,t)=>[Math.cos(e*Lt)*Math.sin(t*Lt),Math.sin(e*Lt),Math.cos(e*Lt)*Math.cos(t*Lt)],Zt=Yt.map(e=>Xt(e[0],e[1])),Qt=(()=>{let e=O(20260210),t=[],n=new Set;for(;t.length<84;){let r=Math.floor(e()*Zt.length),i=Math.floor(e()*Zt.length);if(r===i||n.has(`${Math.min(r,i)}_${Math.max(r,i)}`))continue;let a=Zt[r][0]*Zt[i][0]+Zt[r][1]*Zt[i][1]+Zt[r][2]*Zt[i][2],o=Math.acos(Math.max(-1,Math.min(1,a)));o<.4||o>2.5||(n.add(`${Math.min(r,i)}_${Math.max(r,i)}`),t.push([r,i]))}return t})(),$t=Qt.length,en=e=>e.toFixed(4),tn=e=>`vec3(${en(e[0])}, ${en(e[1])}, ${en(e[2])})`,nn=`const vec3 CF_A[${$t}] = vec3[${$t}](${Qt.map(e=>tn(Zt[e[0]])).join(`, `)});`,rn=`const vec3 CF_B[${$t}] = vec3[${$t}](${Qt.map(e=>tn(Zt[e[1]])).join(`, `)});`,an=(e,t,n)=>{let r=Math.acos(Math.max(-1,Math.min(1,e[0]*t[0]+e[1]*t[1]+e[2]*t[2]))),i=Math.max(Math.sin(r),.001),a=(1+(.05+.4*r/Math.PI)*Math.sin(Math.PI*n))*Rt,o=Math.sin((1-n)*r)/i,s=Math.sin(n*r)/i;return[(e[0]*o+t[0]*s)*a,(e[1]*o+t[1]*s)*a,(e[2]*o+t[2]*s)*a]},on={id:`cloudflare`,async build(e,t,n){let r=e.count,i=e.rand,a=r/262144,o=(1/a)**.8,s=e=>Math.max(1,Math.round(e*a)),c=0,l=(e,i,a,s,l,u)=>{c<r&&j.set(t,n,c++,e,i,a,s,l[0],l[1],l[2],u*o)},u=(e,t,n=Rt)=>{let r=Xt(e,t);return[r[0]*n,r[1]*n,r[2]*n]},[d,f,p]=await Promise.all([e.image(`${qt}media/geo/land-110m-1024x512.png`,1024),e.image(`${qt}media/geo/blue-marble-1024.jpg`,1024),e.image(`${qt}media/geo/black-marble-2048.jpg`,1024)]),m=d.width,h=d.height,g=d.data,_=(e,t,n)=>{let r=Math.max(0,Math.min(f.width-1,Math.floor((t+180)/360*f.width))),i=(Math.max(0,Math.min(f.height-1,Math.floor((90-e)/180*f.height)))*f.width+r)*4,a=f.data[i]/255,o=f.data[i+1]/255,s=f.data[i+2]/255,c=.299*a+.587*o+.114*s,l=1.35;return a=c+(a-c)*l,o=c+(o-c)*l,s=c+(s-c)*l,[Jt(Math.max(0,a)**.82*n),Jt(Math.max(0,o)**.82*n),Jt(Math.max(0,s)**.82*n)]},v=(e,t)=>{let n=(Math.floor(e)%m+m)%m,r=Math.max(0,Math.min(h-1,Math.floor(t)));return g[(r*m+n)*4]>127};for(let e=0,t=s(88e3),n=0;e<t&&n<t*8;n++){let t=i()*360-180,n=Math.asin(i()*2-1)/Lt,r=(t+180)/360*m,a=(90-n)/180*h;if(!v(r,a))continue;e++;let o=!v(r+3,a)||!v(r-3,a)||!v(r,a+3)||!v(r,a-3),s=u(n,t,Rt*(1+(i()-.5)*.004)),c=_(n,t,1.75),d=o?[c[0]*.7+Ht[0]*.3,c[1]*.7+Ht[1]*.3,c[2]*.7+Ht[2]*.3]:c;l(s[0],s[1],s[2],0+i()*.98,d,o?.85:.62)}for(let e=0,t=s(34e3),n=0;e<t&&n<t*8;n++){let t=i()*360-180,n=Math.asin(i()*2-1)/Lt;if(v((t+180)/360*m,(90-n)/180*h))continue;let r=_(n,t,3);e++;let a=u(n,t,Rt*.998);l(a[0],a[1],a[2],2+i()*.98,[r[0]*.6+Ut[0]*.4,r[1]*.6+Ut[1]*.4,r[2]*.6+Ut[2]*.4],.17)}for(let e=-80;e<=80;e+=20)for(let t=0,n=s(330);t<n;t++){let r=u(e,(t+i())/n*360-180,Rt*1.001);l(r[0],r[1],r[2],1+i()*.98,Ut,e===0?.28:.15)}for(let e=-180;e<180;e+=20)for(let t=0,n=s(250);t<n;t++){let r=u((t+i())/n*180-90,e,Rt*1.001);l(r[0],r[1],r[2],1+i()*.98,Ut,.13)}Zt.forEach((e,t)=>{let n=[e[0]*Rt,e[1]*Rt,e[2]*Rt];for(let t=0,n=s(110);t<n;t++){let n=.02*Math.sqrt(i()),r=i()*It,a=[Math.cos(r)*n,Math.sin(r)*n],o=cn(sn(e,[0,1,0])),s=sn(e,o),c=cn([e[0]+o[0]*a[0]+s[0]*a[1],e[1]+o[1]*a[0]+s[1]*a[1],e[2]+o[2]*a[0]+s[2]*a[1]]);l(c[0]*Rt*1.006,c[1]*Rt*1.006,c[2]*Rt*1.006,4+i()*.98,t%7?zt:Vt,.8)}for(let t=0,n=s(70);t<n;t++){let t=.03+.16*i()**1.5,n=i()*It,r=[Math.cos(n)*t,Math.sin(n)*t],a=cn(sn(e,[0,1,0])),o=sn(e,a),s=cn([e[0]+a[0]*r[0]+o[0]*r[1],e[1]+a[1]*r[0]+o[1]*r[1],e[2]+a[2]*r[0]+o[2]*r[1]]);l(s[0]*Rt*1.004,s[1]*Rt*1.004,s[2]*Rt*1.004,5+i()*.98,zt,.1)}for(let e=0,t=s(130);e<t;e++)l(n[0],n[1],n[2],6+i()*.98,zt,.7)}),Qt.forEach(([e,t],n)=>{let r=n/$t*.98;for(let n=0,a=s(230);n<a;n++){let o=(n+i())/a,s=an(Zt[e],Zt[t],o);l(s[0],s[1],s[2],7+r,zt,.1+.12*Math.sin(Math.PI*o))}for(let e=0,t=s(220);e<t;e++)l(0,0,0,8+r,Bt,.7)});{62*Lt;let e=Rt*1.42;for(let t=0,n=s(5200);t<n;t++){let t=i()*It;l(Math.cos(t)*e,0,Math.sin(t)*e,9.1,zt,.1)}for(let t=0;t<16;t++)for(let n=0,r=s(110);n<r;n++){let n=t/16*It-i()*i()*.28;l(Math.cos(n)*e,0,Math.sin(n)*e,9.9,Bt,.7)}}{let e=p.width,t=p.height,n=new Float64Array(e*t+1),r=new Float32Array(e*t);for(let i=0;i<t;i++){let a=Math.cos((90-(i+.5)/t*180)*Lt);for(let t=0;t<e;t++){let o=(i*e+t)*4,s=(p.data[o]*.3+p.data[o+1]*.59+p.data[o+2]*.11)/255,c=i*e+t;r[c]=s,n[c+1]=n[c]+(s<.035?0:s)*a}}let a=n[e*t];if(a>0)for(let o=0,c=s(3e4);o<c;o++){let o=i()*a,s=0,c=e*t-1;for(;s<c;){let e=s+c>>1;n[e+1]<o?s=e+1:c=e}let d=s%e,f=(s-d)/e,p=r[s],m=u(90-(f+i())/t*180,(d+i())/e*360-180,Rt*1.002),h=Math.min(1,p*p*1.6),g=[Wt[0]+(Gt[0]-Wt[0])*h,Wt[1]+(Gt[1]-Wt[1])*h,Wt[2]+(Gt[2]-Wt[2])*h];l(m[0],m[1],m[2],11+i()*.98,g,.38+.6*Math.min(1,p*1.7))}}for(let e=0,t=s(22e3);e<t;e++){let e=i()*2-1,t=i()*It,n=Math.sqrt(1-e*e),r=Rt*(1.01+.2*i()*i());l(Math.cos(t)*n*r,e*r,Math.sin(t)*n*r,3+i()*.98,[.96,.52,.16],.1)}for(let e=0,t=s(9e3);e<t;e++){let e=i()*2-1,t=i()*It,n=Math.sqrt(1-e*e),r=5.5+i()*3;l(Math.cos(t)*n*r,e*r*.7,Math.sin(t)*n*r-2,10+i()*.98,[.85,.88,1],.1+.4*i()**3)}j.dust(t,n,c,r,i,6.5,.04*o,[.8,.7,.6]);for(let e=c;e<r;e++)t[e*4+3]=10.5},glsl:`
${nn}
${rn}
const float CF_R = ${en(Rt)};
const float CF_NA = ${$t}.0;
const float CF_PI = 3.14159265;
const vec3 CF_SUN = vec3(${en(Kt[0])}, ${en(Kt[1])}, ${en(Kt[2])});
vec3 cf_rot(vec3 p, float t) {
  float a = 1.7 + t * 0.06; float c = cos(a), s = sin(a);
  p = vec3(p.x * c + p.z * s, p.y, -p.x * s + p.z * c);
  float ct = cos(0.41), st = sin(0.41);
  return vec3(p.x * ct - p.y * st, p.x * st + p.y * ct, p.z);
}
vec3 cf_arc(int id, float s) {
  vec3 a = CF_A[id], b = CF_B[id];
  float om = acos(clamp(dot(a, b), -1.0, 1.0)); float so = max(sin(om), 0.001);
  vec3 u = (a * sin((1.0 - s) * om) + b * sin(s * om)) / so;
  return u * (1.0 + (0.05 + 0.4 * om / CF_PI) * sin(CF_PI * s)) * CF_R;
}
int cf_id(float ph) { return int(floor(ph / 0.98 * CF_NA + 0.5)); }
float cf_hash(float x) { return fract(sin(x * 91.3458) * 47453.5453); }
float cf_head(int id, float t, float r_y) { return fract(t * (0.07 + 0.09 * cf_hash(float(id) + 0.3)) + cf_hash(float(id) * 1.7) + (r_y > 0.5 ? 0.5 : 0.0)); }
float cf_tail(float r_x) { return r_x * r_x * 0.2; }
vec3 cf_ring(vec3 p, float t) {
  vec3 ax = normalize(vec3(0.15, 0.88, 0.45)); float a = t * 0.22 + 0.0;
  return p * cos(a) + cross(ax, p) * sin(a) + ax * dot(ax, p) * (1.0 - cos(a));
}
vec3 anim_cloudflare(vec3 p, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001), ph = fract(d.w);
  if (cl > 10.5) return cf_rot(p, t);                               // night lights turn with the planet
  if (cl > 9.5) return p;
  if (cl > 8.5) {                                                   // orbit ring (tilted by the axis)
    vec3 ax = normalize(vec3(0.15, 0.88, 0.45));
    vec3 u = normalize(cross(ax, vec3(0.0, 0.0, 1.0))), v = cross(ax, u);
    float ang = atan(p.z, p.x);
    vec3 q = (u * cos(ang) + v * sin(ang)) * length(p.xz);
    return cf_ring(q, t);
  }
  if (cl > 7.5) {                                                   // packets
    int id = cf_id(ph); float tl = cf_tail(r.x); float s = cf_head(id, t, r.y) - tl;
    return cf_rot(cf_arc(id, max(s, 0.0)) * 1.004, t);
  }
  if (cl > 5.5 && cl < 6.5) {                                       // ripple rings expand from each node
    vec3 n = normalize(d.xyz); vec3 e1 = normalize(cross(n, vec3(0.0, 1.0, 0.0))); vec3 e2 = cross(n, e1);
    float rp = fract(t * 0.26 + cf_hash(dot(n, vec3(12.9, 78.2, 37.7))) + (r.x > 0.5 ? 0.5 : 0.0));
    float ang = ph / 0.98 * 6.2831853 * 1.0 + r.y * 6.2831853;
    vec3 q = normalize(n + (e1 * cos(ang) + e2 * sin(ang)) * tan(0.3 * rp));
    return cf_rot(q * CF_R * 1.005, t);
  }
  if (cl > 2.5 && cl < 3.5) return p;                               // atmosphere stays upright
  return cf_rot(p, t);
}
float size_cloudflare(vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl > 10.5) return 1.3;
  if (cl > 3.5 && cl < 4.5) return 1.3;
  if (cl > 7.5 && cl < 8.5) return 1.25;
  if (cl > 8.5 && cl < 9.5) return fract(d.w) > 0.5 ? 1.6 : 0.9;
  if (cl > 9.5) return 0.8;
  return 1.0;
}
vec4 color_cloudflare(vec4 c, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001), ph = fract(d.w);
  float a = c.a; vec3 rgb = c.rgb;
  if (cl > 10.5) {                                                  // night lights: only on the night side, twinkling, dim at the limb
    vec3 nn = normalize(cf_rot(d.xyz + vec3(0.0, 0.0, 1e-4), t));
    float night = 1.0 - smoothstep(-0.14, 0.1, dot(nn, CF_SUN));
    a *= night * (0.82 + 0.18 * sin(t * (1.0 + 3.0 * r.y) + r.x * 60.0)) * (0.1 + 0.9 * smoothstep(-0.3, 0.55, nn.z));
    return vec4(rgb, a);
  }
  if (cl > 9.5) { a *= 0.3 + 0.7 * (0.5 + 0.5 * sin(t * (0.5 + 2.0 * r.y) + r.x * 90.0)); return vec4(rgb, a); }
  if (cl > 8.5) { float h = step(0.5, ph); a *= mix(1.0, 1.0, h); return vec4(rgb, a); }
  vec3 n = normalize(cf_rot(d.xyz + vec3(0.0, 0.0, 1e-4), t));
  float f = n.z;
  if (cl > 7.5) {                                                   // packets: bright head, fading tail, dim on the far side
    int id = cf_id(ph); float tl = cf_tail(r.x); float s = cf_head(id, t, r.y) - tl;
    if (s < 0.0) return vec4(rgb, 0.0);
    vec3 pn = normalize(cf_arc(id, s)); float fz = normalize(cf_rot(pn, t)).z;
    a *= pow(1.0 - tl / 0.2, 1.6) * (0.25 + 0.75 * smoothstep(-0.35, 0.5, fz));
    rgb = mix(rgb, vec3(1.0, 0.95, 0.8), 0.55 * (1.0 - tl / 0.2));
    return vec4(rgb, a);
  }
  if (cl > 6.5) {                                                   // arc lines
    a *= 0.3 + 0.7 * smoothstep(-0.4, 0.6, f); return vec4(rgb, a);
  }
  if (cl > 5.5) {                                                   // ripples: fade as they grow
    float rp = fract(t * 0.26 + cf_hash(dot(normalize(d.xyz), vec3(12.9, 78.2, 37.7))) + (r.x > 0.5 ? 0.5 : 0.0));
    a *= pow(1.0 - rp, 1.5) * smoothstep(0.0, 0.06, rp) * (0.2 + 0.8 * smoothstep(-0.2, 0.4, f)); return vec4(rgb, a);
  }
  if (cl > 4.5) { a *= (0.15 + 0.85 * smoothstep(-0.3, 0.5, f)) * (0.75 + 0.25 * sin(t * 1.2 + d.x * 9.0 + d.y * 7.0)); return vec4(rgb, a); }
  if (cl > 3.5) { float nf = cf_hash(d.x * 7.1 + d.y * 3.3 + d.z * 1.9); a *= (0.1 + 0.9 * smoothstep(-0.35, 0.55, f)) * (0.85 + 0.15 * sin(t * 1.6 + nf * 30.0)); rgb = mix(rgb, vec3(1.0, 0.85, 0.5), 0.45); return vec4(rgb, a); }
  if (cl > 2.5) { vec3 nn = normalize(d.xyz); float rim = 1.0 - abs(nn.z); a *= pow(rim, 2.2) * 2.4; return vec4(rgb, a); }
  // land, ocean and graticule: dim on the far side, edge-lit at the limb, and day or night about the fixed sun
  float lit = 0.14 + 0.86 * smoothstep(-0.25, 0.8, f);
  float limb = 1.0 + 0.7 * pow(1.0 - abs(f), 3.0);
  float sd = dot(n, CF_SUN);
  float day = smoothstep(-0.14, 0.26, sd);
  float twi = exp(-pow(sd / 0.12, 2.0));                            // a warm band along the terminator
  rgb = mix(rgb * 0.42, rgb * 1.1, day);
  rgb = mix(rgb, vec3(1.0, 0.6, 0.3), 0.28 * twi * (cl < 0.5 ? 1.0 : 0.4));
  float floorA = cl < 0.5 ? 0.3 : 0.45;
  float boost = cl < 0.5 ? 1.0 + 0.5 * day : (cl < 1.5 ? 1.0 : 1.0 + 1.4 * day);   // sunlit land and sea read brighter than the night side
  return vec4(rgb, a * lit * limb * mix(floorA, 1.0, day) * boost);
}`,camera:{pos:[0,.5,9.4],target:[0,.05,0],fov:35},pointSize:1.9,drift:.004},sn=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],cn=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},ln=o({default:()=>vn}),un=Math.PI*2,dn=Math.PI/180,W={bez:2.62,bez2:2.585,bezIn:2.5,eras:2.24,books:1.84,eps:1.4,themes:.98,motto:.86,mottoIn:.7,rays:.64,face:.34},fn=24*dn,pn=[[`PRIMORDIAL AGE`,0,3],[`EARLY HEROIC AGE`,3,8],[`MATURE HEROIC AGE`,8,11],[`TROJAN WAR`,11,13],[`TROY TO ROME`,13,14],[`ROMAN HISTORY`,14,15]],mn=[`Creation`,`The Four Ages`,`Lycaon`,`The Great Flood`,`Deucalion & Pyrrha`,`Apollo & Daphne`,`Io`,`Pan & Syrinx`],hn=[`Order & recurrence`,`Power and the body`,`Speech under pressure`,`Predation & escape`],gn=[`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`,`VIII`,`IX`,`X`,`XI`,`XII`,`XIII`,`XIV`,`XV`],_n=`OMNIA MUTANTUR · NIHIL INTERIT · ALL THINGS CHANGE · NOTHING PERISHES · `,vn={id:`compass`,async build(e,t,n){let r=e.count,i=e.rand,a=(262144/r)**.8,o=j.hex(`#D9A441`),s=j.hex(`#F1E9D4`),c={eras:[.9,.68,.3],books:[.86,.9,.98],eps:[.9,.5,.34],themes:[.55,.82,.55]},l=0,u=(e,i,o,s,c,u)=>{l<r&&j.set(t,n,l++,e,i,o,s,c[0],c[1],c[2],u*a)},d=e=>Math.max(1,Math.floor(e*r)),f=async(t,n,r,i)=>{let a=await e.textMask(t,{font:n,width:r,height:i,align:`center`}),o=r,s=0,c=i,l=0,u=a.data;for(let e=0;e<i;e++)for(let t=0;t<r;t++)u[(e*r+t)*4+3]>127&&(t<o&&(o=t),t>s&&(s=t),e<c&&(c=e),e>l&&(l=e));return s<=o&&(o=0,s=r,c=0,l=i),{img:a,x0:o,x1:s+1,y0:c,y1:l+1}},p=`"Archivo Variable", "Helvetica Neue", Arial, sans-serif`,m=`"Bodoni Moda Variable", "Didot", Georgia, serif`,[h,g,_,v,y,b]=await Promise.all([Promise.all(pn.map(e=>f(e[0],`600 64px ${p}`,1024,96))),Promise.all(gn.map(e=>f(e,`700 100px ${m}`,320,140))),f(`LIBER`,`600 56px ${p}`,360,80),Promise.all(mn.map(e=>f(e,`500 60px ${m}`,1024,96))),Promise.all(hn.map(e=>f(e,`500 60px ${m}`,1024,96))),f(_n,`600 40px ${p}`,3072,64)]),x=(e,t,n,r,a,o,s,c,l,d,f=0)=>{let p=t.x1-t.x0,m=t.y1-t.y0,h=Math.min(a/m,o/p),g=(t.x0+t.x1)/2,_=(t.y0+t.y1)/2,v=j.sampleMask(t.img,s,i);for(let t of v){let a=(t[0]-g)*h,o=(_-t[1])*h+f,s=n-a/r,p=r+o;u(p*Math.cos(s),p*Math.sin(s),d+(i()-.5)*.012,e,c,l)}return h},S=(e,t,n,r,a,o,s,c,l)=>{for(let d=0;d<o;d++){let o=Math.sqrt(t*t+i()*(n*n-t*t)),d=r+i()*(a-r);u(o*Math.cos(d),o*Math.sin(d),l+(i()-.5)*.02,e,s,c)}},C=(e,t,n,r,a,o,s=0,c=un)=>{for(let l=0;l<n;l++){let n=s+i()*(c-s),l=t+(i()-.5)*.006;u(l*Math.cos(n),l*Math.sin(n),o,e,r,a)}},w=(e,t,n,r,a,o,s,c)=>{let l=Math.cos(t),d=Math.sin(t);for(let t=0;t<a;t++){let t=n+i()*(r-n),a=(i()-.5)*.007;u(t*l-a*d,t*d+a*l,c,e,o,s)}},T=e=>Math.PI/2-e*fn,E=d(.03);for(let e=0;e<E;e++){let e=W.face*Math.sqrt(i()),t=i()*un;u(e*Math.cos(t),e*Math.sin(t),.1,7,o,.34)}C(7,W.face,d(.012),o,.8,.1),C(7,W.face*1.12,d(.005),s,.4,.1);let D=(e,t,n,r,a,o,c=.95)=>{for(let l=0;l<o;l++){let o=r+i()*(a-r);u(e+n*Math.cos(o),t+n*Math.sin(o),.11,7,s,c)}},O=d(.0035);D(-.115,.07,.04,0,un,O),D(.115,.07,.04,0,un,O),D(-.115,.115,.07,55*dn,125*dn,O),D(.115,.115,.07,55*dn,125*dn,O);for(let e=0;e<O;e++){let e=i();u(.01*e,.045-.14*e,.11,7,s,.95)}D(0,.03,.15,240*dn,300*dn,O);let k=d(.03);for(let e=0;e<k;e++){let t=e%24,n=t%2==0,r=t/24*un,a=n?W.rays:W.rays*.78,s=i(),c=i();s+c>1&&(s=1-s,c=1-c);let l=W.face*1.2+(a-W.face*1.2)*s,d=(n?.085:.07)*(1-s)*(c*2-1)*.5,f=Math.cos(r),p=Math.sin(r);u(l*f-d*p,l*p+d*f,.06,6,n?o:[.95,.78,.4],.5)}C(5,W.motto+.075,d(.006),o,.5,-.03),C(5,W.mottoIn,d(.006),o,.5,-.03),S(5,W.mottoIn,W.motto+.075,0,un,d(.012),c.themes,.14,-.03),x(5,b,Math.PI/2,W.motto+.002,.062,un*(W.motto+.002)*.985,d(.032),s,.5,-.03,0),S(4,W.themes,W.eps,0,un,d(.06),c.themes,.2,-.02),C(4,W.themes,d(.014),o,.8,-.02);for(let e=0;e<4;e++)w(4,T(0)-e*90*dn,W.themes,W.eps,110,o,.8,-.02);for(let e=0;e<60;e++)w(4,T(0)-e*6*dn,W.themes,W.themes+(e%5?.04:.08),9,s,.5,-.02);hn.forEach((e,t)=>x(4,y[t],T(0)-(t+.5)*90*dn,(W.themes+W.eps)/2,.105,1.55,d(.0125),[.8,.95,.75],.55,-.02)),S(3,W.eps,W.books,0,un,d(.07),c.eps,.2,0),C(3,W.eps,d(.014),o,.8,0);for(let e=0;e<8;e++)w(3,T(0)-e*45*dn,W.eps,W.books,110,o,.8,0);for(let e=0;e<120;e++)w(3,T(0)-e*3*dn,W.books-(e%5?.04:.08),W.books,9,s,.45,0);mn.forEach((e,t)=>x(3,v[t],T(0)-(t+.5)*45*dn,(W.eps+W.books)/2-.01,.115,1.05,d(.0075),[1,.82,.62],.55,0)),S(2,W.books,W.eras,0,un,d(.075),c.books,.17,.02),C(2,W.books,d(.014),o,.85,.02);for(let e=0;e<15;e++)w(2,T(e),W.books,W.eras,90,o,.8,.02);for(let e=0;e<15;e++){let t=T(e+.5),n=(W.books+W.eras)/2*fn*.8;x(2,g[e],t,1.99,.19,n,d(.0075),s,.6,.02,-.01),x(2,_,t,2.165,.045,fn*2.16*.5,d(.0016),o,.6,.02)}S(1,W.eras,W.bezIn,0,un,d(.035),c.eras,.2,.04),C(1,W.eras,d(.012),o,.8,.04),C(1,W.bezIn,d(.014),o,.85,.04),pn.forEach(([,e,t],n)=>{w(1,T(e),W.eras,W.bezIn,100,o,.85,.04);let r=(t-e)*fn*(W.eras+W.bezIn)/2;x(1,h[n],T((e+t)/2),(W.eras+W.bezIn)/2,.075,r*.84,d(.0075),[1,.84,.5],.6,.04)}),C(0,W.bez,d(.011),o,.8,.06),C(0,W.bez2,d(.007),s,.4,.06),S(0,W.bezIn,W.bez,0,un,d(.02),o,.12,.06);for(let e=0;e<240;e++)w(0,un/240*e,W.bezIn+.01,e%5?W.bezIn+.06:W.bezIn+.11,e%5?7:11,e%5?o:s,.6,.06);let A=Math.PI/2-12*dn,M=Math.PI/2+12*dn;S(0,W.books,W.eras,A,M,d(.012),o,.16,.05),C(0,W.books,d(.004),s,.8,.05,A,M),C(0,W.eras,d(.004),s,.8,.05,A,M),w(0,A,W.books,W.eras,60,s,.8,.05),w(0,M,W.books,W.eras,60,s,.8,.05);let N=d(.016);for(let e=0;e<N;e++){let e=i(),t=W.rays+e*(W.bez2-W.rays),n=.008*(1-.7*e);u((i()*2-1)*n,t,.16,8,s,.42)}let P=d(.006);for(let e=0;e<P;e++){let e=i()*2-1,t=i()*2-1;Math.abs(e)+Math.abs(t)>1&&(e=Math.sign(e)*(1-Math.abs(e)),t=Math.sign(t)*(1-Math.abs(t))),u(e*.045,W.bez2+.11+t*.11,.17,8,o,.9)}for(let e=0;e<d(.004);e++){let e=i()*un;u(.1*Math.cos(e),-.88+.1*Math.sin(e),.16,8,o,.8)}for(let e=0;e<d(.003);e++){let e=i();u((i()-.5)*.02,-W.rays-e*(.78-W.rays),.16,8,s,.6)}let F=d(.04);for(let e=0;e<F;e++){let e=3.4*i()**.7,t=i()*un;u(e*Math.cos(t),e*Math.sin(t),-.3-i()*.2,0,o,.03)}j.dust(t,n,l,r,i,6.6,.07*a,[.95,.84,.6]);for(let e=l;e<r;e++)t[e*4+3]=9},glsl:`
const float CP_TX = -0.50;
const float CP_TY = 0.22;
float cp_ang(float cl, float t) {
  if (cl < 0.5) return 0.0;
  if (cl < 1.5) return t * 0.022;
  if (cl < 2.5) return -t * 0.032;
  if (cl < 3.5) return t * 0.05;
  if (cl < 4.5) return -t * 0.075;
  if (cl < 5.5) return t * 0.11;
  if (cl < 6.5) return t * 0.16;
  if (cl > 7.5 && cl < 8.5) return 0.035 * sin(t * 0.6) + 0.012 * sin(t * 2.3);
  return 0.0;
}
vec3 cp_tilt(vec3 q) {
  float ca = cos(CP_TX), sa = sin(CP_TX);
  q = vec3(q.x, q.y * ca - q.z * sa, q.y * sa + q.z * ca);
  float cb = cos(CP_TY), sb = sin(CP_TY);
  return vec3(q.x * cb + q.z * sb, q.y, -q.x * sb + q.z * cb);
}
vec3 anim_compass(vec3 p, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl > 8.5) return p + 0.04 * vec3(sin(t * 0.13 + r.x * 40.0), sin(t * 0.11 + r.y * 40.0), sin(t * 0.09 + r.z * 40.0));
  float a = cp_ang(cl, t);
  float c = cos(a), s = sin(a);
  vec3 q = vec3(p.x * c - p.y * s, p.x * s + p.y * c, p.z);
  if (cl > 5.5 && cl < 6.5) q.xy *= 1.0 + 0.05 * sin(t * 2.4 + atan(p.y, p.x) * 12.0);
  if (cl > 6.5 && cl < 7.5) q.xy *= 1.0 + 0.02 * sin(t * 1.6);
  return cp_tilt(q);
}
float size_compass(vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl > 8.5) return 1.0;
  if (cl > 7.5) return 1.3;
  if (cl > 5.5 && cl < 6.5) return 1.2;
  return 0.95;
}
vec4 color_compass(vec4 c, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl > 8.5) return c;
  vec3 rgb = c.rgb; float a = c.a;
  if (cl > 1.5 && cl < 4.5) {
    float th = atan(d.y, d.x) + cp_ang(cl, t);
    float dd = abs(mod(th - 1.5707963 + 3.1415927, 6.2831853) - 3.1415927);
    float w = exp(-dd * dd / (2.0 * 0.16 * 0.16));
    float k = cl < 2.5 ? 1.6 : (cl < 3.5 ? 0.8 : 0.4);
    a *= 1.0 + k * w;
    rgb = mix(rgb, vec3(1.0, 0.95, 0.82), clamp(0.5 * w * k, 0.0, 0.8));
  }
  if (cl < 0.5) a *= 0.8 + 0.2 * sin(t * (0.8 + r.x * 1.6) + r.y * 30.0);
  if (cl > 5.5 && cl < 6.5) a *= 0.8 + 0.4 * sin(t * 2.4 + atan(d.y, d.x) * 12.0);
  if (cl > 6.5 && cl < 7.5) a *= 0.9 + 0.2 * sin(t * 1.6);
  return vec4(rgb, a);
}`,camera:{pos:[.3,.9,11.3],target:[.3,.5,0],fov:35},pointSize:1.9,drift:.012},yn=o({default:()=>xn}),bn=`/portfolio/media/wwii/imbalance-map-lg.webp`,xn={id:`counties`,async build(e,t,n){let r=e.count,i=e.rand,{width:a,height:o,data:s}=await e.image(bn,r>1e5?700:480),c=a*o,l=new Uint8Array(c),u=e=>s[e*4]>=249&&s[e*4+1]>=249&&s[e*4+2]>=249,d=new Int32Array(c),f=0,p=e=>{!l[e]&&u(e)&&(l[e]=1,d[f++]=e)};for(let e=0;e<a;e++)p(e),p((o-1)*a+e);for(let e=0;e<o;e++)p(e*a),p(e*a+a-1);((e,t)=>{for(;f;){let n=d[--f],r=n%a,i=(n-r)/a;for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){if(!s&&!n)continue;let c=r+s,l=i+n;if(c<0||l<0||c>=a||l>=o)continue;let p=l*a+c;!e[p]&&u(p)&&(e[p]=t,d[f++]=p)}}})(l,1);let m=Math.floor(a*.462),h=Math.floor(o*.795);for(let e=h;e<o;e++)for(let t=0;t<m;t++)l[e*a+t]=1;let g=new Uint8Array(c),_=Math.max(30,Math.floor(c*22e-5)),v=new Uint8Array(c),y=[];for(let e=0;e<c;e++)if(!(l[e]||v[e]||!u(e))){for(y.length=0,f=0,d[f++]=e,v[e]=1;f;){let e=d[--f];y.push(e);let t=e%a,n=(e-t)/a;for(let e=-1;e<=1;e++)for(let r=-1;r<=1;r++){let i=t+r,s=n+e;if(!r&&!e||i<0||s<0||i>=a||s>=o)continue;let c=s*a+i;!v[c]&&!l[c]&&u(c)&&(v[c]=1,d[f++]=c)}}if(y.length>=_)for(let e of y)g[e]=1}let b=new Float32Array(c),x=new Int8Array(c),S=new Uint8Array(c),C=new Uint8Array(c),w=a,T=0,E=o,D=0;for(let e=0;e<c;e++){if(l[e]||g[e])continue;C[e]=1;let t=s[e*4],n=s[e*4+1],r=s[e*4+2],i=.299*t+.587*n+.114*r;Math.max(t,n,r)-Math.min(t,n,r)<16&&i<242||(S[e]=1,b[e]=Math.min(1,Math.max(0,(247-i)/205)),x[e]=t>=r?1:-1);let o=e%a,c=(e-o)/a;o<w&&(w=o),o>T&&(T=o),c<E&&(E=c),c>D&&(D=c)}let O=r>15e4?3:2,k=3,A=0,M=0,N=new Float32Array,P=new Float32Array,F=new Float32Array,I=0,L=e=>{A=Math.ceil((T-w+1)/e),M=Math.ceil((D-E+1)/e),N=new Float32Array(A*M).fill(-1),P=new Float32Array(A*M),F=new Float32Array(A*M),I=0;for(let t=0;t<M;t++)for(let n=0;n<A;n++){let r=0,i=0,s=0,c=0,l=0;for(let u=E+t*e;u<Math.min(o,E+t*e+e);u++)for(let t=w+n*e;t<Math.min(a,w+n*e+e);t++){let e=u*a+t;l++,C[e]&&(r++,S[e]&&(i++,s+=b[e],c+=x[e]*b[e]))}if(r<l*.5)continue;let u=i?s/i:0;P[t*A+n]=u,F[t*A+n]=i&&s>1e-4?c/s:0,N[t*A+n]=.03+R*u**1.3,I++}},R=.5;for(k=3;k<14&&(L(k),!(I*O*O<=r*.36));k++);let z=7.3/(T-w),B=(w+T)/2,ee=(E+D)/2,V=k*z,te=e=>(w+e*k+k/2-B)*z,ne=e=>(E+e*k+k/2-ee)*z,re=(e,t)=>e<0||t<0||e>=A||t>=M?0:Math.max(0,N[t*A+e]),ie=[[0,1,1,0],[-1,0,.62,1],[1,0,.42,2],[0,-1,0,3]],ae=0;for(let e=0;e<M;e++)for(let t=0;t<A;t++){let n=N[e*A+t];if(!(n<0))for(let r of ie){let i=n-re(t+r[0],e+r[1]);i>.004&&(ae+=i*V*r[2])}}let H=I*O*O,oe=Math.min(r*.3,r*.9-H),se=Math.min(oe/Math.max(1e-6,ae),1/(V/O)**2*1.5),ce=[.94,.91,.82],le=[1,.86,.56],ue=[.72,.83,1],de=0,fe=(e,i,a,o,s,c,l,u)=>{de<r&&j.set(t,n,de++,e,i,a,o,s,c,l,u)},pe=[1,.62,.42,.2];for(let e=0;e<M;e++)for(let t=0;t<A;t++){let n=e*A+t,r=N[n];if(r<0)continue;let a=P[n],o=F[n],s=te(t),c=ne(e),l=o>=0?le:ue,u=Math.min(1,a*1.7),d=ce[0]+(l[0]-ce[0])*u,f=ce[1]+(l[1]-ce[1])*u,p=ce[2]+(l[2]-ce[2])*u,m=re(t,e+1)===0||re(t-1,e)===0||re(t+1,e)===0||re(t,e-1)===0,h=.1+.9*a;for(let e=0;e<O;e++)for(let t=0;t<O;t++)fe(s+((e+.5)/O-.5)*V+(i()-.5)*V*.1,r,c+((t+.5)/O-.5)*V+(i()-.5)*V*.1,h,d,f,p,(.42+1.05*a*a+.4*a+(m?.22:0))*.8);for(let n of ie){let o=re(t+n[0],e+n[1]),l=r-o;if(l<=.004)continue;let u=Math.floor(l*V*n[2]*se+i());for(let e=0;e<u;e++){let e=(i()-.5)*V,t=o+i()*l,r=.45+.55*Math.min(1,t/.22);fe(n[0]?s+n[0]*V*.5:s+e,t,n[1]?c+n[1]*V*.5:c+e,h,d,f,p,(.1+.34*a)*(.35+.65*pe[n[3]])*r*1)}}}for(;de<r;)fe((i()-.5)*9.4,.08+i()**1.7*2.3,(i()-.5)*6.2,-1,.93,.89,.8,.015+.04*i())},glsl:`
float cnt_crest(float x, float t) {
  float s = fract(x * 0.17 - t * 0.14);
  float d = (s - 0.12) / 0.10;
  return exp(-d * d);
}
vec3 anim_counties(vec3 p, vec4 d, vec4 r, float t) {
  if (d.w < -0.5) return p + vec3(sin(t * 0.30 + r.x * 40.0), 0.5 * sin(t * 0.40 + r.y * 40.0), cos(t * 0.25 + r.z * 40.0)) * 0.09;
  p.y *= 0.84 + 0.46 * cnt_crest(p.x, t);
  return p;
}
float size_counties(vec4 d, vec4 r, float t) { return d.w < -0.5 ? 1.0 : 0.85; }
vec4 color_counties(vec4 c, vec4 d, vec4 r, float t) {
  float k = cnt_crest(d.x, t);
  if (d.w < -0.5) return c;
  c.rgb = mix(c.rgb, vec3(1.0, 0.9, 0.62), 0.35 * k * d.w);
  c.a *= 1.0 + 0.6 * k * max(d.w, 0.15);
  return c;
}`,camera:{pos:[0,6.6,6.2],target:[0,.1,.1],fov:35},pointSize:2.3,drift:.003},Sn=o({default:()=>Mn}),Cn=-1.55,wn=-.12,Tn=-3.1,En=4,Dn=3.5,On=[-2.25,-1.05,.15,1.35],kn=[-1.65,-.45,.75,2.05],An=12,jn=[[.62,.38,.4],[.45,.58,.48],[.78,.62,.3],[.33,.45,.62],[.65,.37,.26],[.82,.78,.68],[.3,.32,.38],[.5,.4,.58],[.28,.58,.56],[.7,.5,.44]],Mn={id:`dyads`,async build(e,t,n){let r=e.count,i=e.rand,a=(262144/r)**.8,o=j.hex(`#7FD1C7`),s=j.hex(`#EDE6D6`),c=0,l=(e,i,o,s,l,u)=>{c<r&&j.set(t,n,c++,e,i,o,s,l[0],l[1],l[2],u*a)},u=e=>Math.max(1,Math.floor(e*r)),d=(e,t,n,r,a,o=2)=>{for(let s=0;s<n;s++){let n=i();l(e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n,o,r,a)}},f=1100,p=await e.textMask(`THRIFT`,{font:`800 230px "Bodoni Moda Variable", Didot, Georgia, serif`,width:f,height:300}),m=f,h=0,g=300,_=0;for(let e=0;e<300;e++)for(let t=0;t<f;t++)p.data[(e*f+t)*4+3]>127&&(t<m&&(m=t),t>h&&(h=t),e<g&&(g=e),e>_&&(_=e));h<=m&&(m=0,h=f,g=0,_=300);let v={x:-1.55,y:1.42,w:3},y=v.w/(h-m+1);for(let e of j.sampleMask(p,u(.045),i))l(v.x+(e[0]-(m+h)/2)*y,v.y-(e[1]-(g+_)/2)*y,-3.06,5,[.55,.95,.88],.8);let b=v.w/2+.22,x=(_-g+1)*y/2+.2,S=[[-b,-x],[b,-x],[b,x],[-b,x],[-b,-x]].map(e=>[v.x+e[0],v.y+e[1],-3.06]);for(let e=0;e<4;e++)d(S[e],S[e+1],u(.003),o,.6,5);d([v.x-b*.7,v.y+x,-3.06],[v.x-b*.7,2.35,-3.06],220,o,.3,5),d([v.x+b*.7,v.y+x,-3.06],[v.x+b*.7,2.35,-3.06],220,o,.3,5);let C=[-1.3,-.72,-.14,.44];for(let e of C)d([-4,e,Tn],[En,e,Tn],u(.003),s,.4,4);for(let e=0;e<=6;e++)d([-4+8/6*e,Cn,Tn],[-4+8/6*e,.95,Tn],u(.0018),s,.3,4);let w=u(.04);for(let e=0;e<w;e++){let t=Math.floor(i()*4),n=.22+.2*(e%7/7),r=-3.8+e*.6180339%1*7.6,a=.1+.16*(e*7%5/5),o=jn[(e*3+t)%jn.length];l(r+(i()-.5)*n,C[t]+.01+i()*a,Tn+.03*i(),4,o,.34)}[[[-4,Cn,Tn],[En,Cn,Tn]],[[En,Cn,Tn],[En,Cn,2.8]],[[En,Cn,2.8],[-4,Cn,2.8]],[[-4,Cn,2.8],[-4,Cn,Tn]]].forEach(e=>d(e[0],e[1],u(.0045),o,.6,3));for(let e of[[-4,Tn],[En,Tn]])d([e[0],Cn,e[1]],[e[0],1.1,e[1]],u(.002),o,.35,3);for(let e of kn)for(let t=0;t<40;t++){let n=-3.5+t/39*2*Dn;d([n,Cn,e],[n+.08,Cn,e],14,o,.5,3)}let T=u(.04);for(let e=0;e<T;e++){let e=i()<.7,t=e?kn[Math.floor(i()*4)]+(i()*2-1)*.42:Tn+i()*5.9;l((i()*2-1)*En,Cn,t,3,o,e?.055:.025)}for(let e of On){d([-3.5,wn,e],[Dn,wn,e],u(.0075),[.8,.95,.92],.65,2);for(let t of[-3.5,Dn])d([t,Cn,e],[t,wn,e],u(.0025),[.7,.85,.82],.5,2),d([t,Cn,e-.35],[t,Cn,e+.35],u(.0012),[.7,.85,.82],.5,2);d([0,Cn,e],[0,wn,e],u(.0012),[.7,.85,.82],.35,2)}let E=[.55,.85,.75,.95,.5],D=(e,t)=>e===0?t<.14?.06+t/.14*.14:t<.42?.2:.15:e===1?t<.15?.06+t/.15*.08:t<.4?.14-.04*((t-.15)/.25):.1+.11*((t-.4)/.6):e===2?.12-.02*t:e===3?t<.12?.07+t/.12*.14:.21+.02*t:.09+.11*t,O=On.length*26,k=Math.max(60,Math.floor(u(.55)/O));for(let e=0;e<On.length;e++)for(let t=0;t<26;t++){let n=-3.4+(t+.5*i())*((2*Dn-.2)/26),r=Math.floor(i()*5),a=1.5+i()*.55,o=Math.cos(a),s=Math.sin(a),c=jn[Math.floor(i()*jn.length)],u=E[r]*(.88+.24*i()),d=i()<.25,f=-.16499999999999998,p=On[e]+(i()-.5)*.06;for(let e=0;e<k;e++){if(i()<.05){let e=(i()*2-1)*(D(r,.1)+.03);l(n+e*s,-.145+(i()-.5)*.01,p+e*o,1,[.85,.85,.8],.5);continue}if(i()<.32){let e=i(),t=(i()<.5?-1:1)*D(r,e);i()<.18&&(e=1,t=(i()*2-1)*D(r,1));let a=1.2-.2*e;l(n+t*s,f-e*u,p+t*o,1,[Math.min(1,c[0]*a+.1),Math.min(1,c[1]*a+.1),Math.min(1,c[2]*a+.1)],.85);continue}let e=0,t=0;for(let n=0;n<8&&(e=i(),t=(i()*2-1)*.24,!(Math.abs(t)<D(r,e)&&!(r===2&&e>.3&&Math.abs(t)<.014)));n++);let a=.8+.3*i()-.25*e+(d&&Math.floor(e*u/.055)%2?.28:0);l(n+t*s+(i()-.5)*.03,f-e*u,p+t*o,1,[c[0]*a,c[1]*a,c[2]*a],.62)}}let A=u(.1)/24,M=[[10,.14],[11,.3],[12,.12],[13,.12],[14,.16],[15,.16]];for(let e=0;e<24;e++)for(let[t,n]of M){let r=Math.floor(A*n),a=t+e/64;for(let e=0;e<r;e++){let e=0,n=0,r=0;if(t===10){let t=0,a=0,o=0;do t=i()*2-1,a=i()*2-1,o=i()*2-1;while(t*t+a*a+o*o>1);e=t*.08,n=1.04+a*.09,r=o*.08}else if(t===11){let t=i(),a=i()*6.2832,o=Math.sqrt(i());n=.5+t*.44,e=Math.cos(a)*o*.065,r=Math.sin(a)*o*.12*(.78+.28*t)}else if(t<=13){let a=i(),o=t===12?-1:1;n=.93-a*.36,r=o*.145+(i()-.5)*.03,e=(i()-.5)*.03}else{let a=i(),o=t===14?-1:1;n=.52-a*.52,r=o*.058+(i()-.5)*.04,e=(i()-.5)*.04+(a>.97?.025:0)}l(e,n,r,a,o,.6)}}let N=u(.02)/An,P=u(.018)/An;for(let e=0;e<An;e++){for(let t=0;t<N;t++)l(0,0,0,16+e/32,o,.55);for(let t=0;t<P;t++)l(0,0,0,17+e/32,o,.45)}j.dust(t,n,c,r,i,6.6,.07*a,[.7,.9,.86]);for(let e=c;e<r;e++)t[e*4+3]=0},glsl:`
const float DY_FL = ${Cn.toFixed(2)};
const float DY_RH = ${wn.toFixed(2)};
float dy_split(float p) { return mod(p + floor(p / 4.0), 2.0); }
float dy_lane(float p) { float l = mod(p, 4.0); return l < 0.5 ? -1.65 : (l < 1.5 ? -0.45 : (l < 2.5 ? 0.75 : 2.05)); }
float dy_s(float pr, float t) {
  float ph = fract(t / 26.0 + pr * 0.173);
  return smoothstep(0.12, 0.32, ph) * (1.0 - smoothstep(0.62, 0.82, ph)) * dy_split(pr);
}
vec2 dy_xz(float pr, float who, float t) {
  float j = floor(pr / 4.0);
  float xc = (j - 1.0) * 2.2 + 0.6 * sin(t * (0.21 + 0.017 * pr) + pr * 1.9);
  float s = dy_s(pr, t);
  float sg = who < 0.5 ? -1.0 : 1.0;
  float x = xc + sg * s * 1.3 + 0.22 * s * sin(t * 0.5 + pr * 3.1 + who * 2.0);
  x = x * pow(1.0 + pow(abs(x) / 3.5, 6.0), -0.16667);
  float z = dy_lane(pr) + sg * (0.17 + 0.10 * s);
  return vec2(x, z);
}
float dy_fig(float w) { return floor(fract(w) * 64.0 + 0.5); }
vec3 anim_dyads(vec3 p, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl < 0.5) return p + 0.04 * vec3(sin(t * 0.13 + r.x * 40.0), sin(t * 0.11 + r.y * 40.0), sin(t * 0.09 + r.z * 40.0));
  if (cl < 1.5) { // garment: pendulum sway of the hem
    float hang = max(0.0, DY_RH - p.y);
    return p + vec3(0.0, 0.0, 0.016 * hang * sin(t * 1.15 + p.x * 6.3 + r.x * 0.8));
  }
  if (cl < 9.5) return p;
  if (cl < 15.5) {
    float fig = dy_fig(d.w);
    float pr = floor(fig * 0.5), who = fig - pr * 2.0;
    vec2 a = dy_xz(pr, who, t - 0.05), b = dy_xz(pr, who, t + 0.05), c = dy_xz(pr, who, t);
    vec2 v = (b - a) / 0.1;
    float sp = length(v);
    float amp = smoothstep(0.015, 0.16, sp);
    float yaw = 3.14159265 * (1.0 - smoothstep(-0.05, 0.05, v.x));
    float ph = t * 5.0 + pr * 1.3 + who * 0.7;
    float sw = 0.55 * amp * sin(ph);
    vec3 q = p;
    float ang = 0.0, py = 0.0;
    if (cl > 13.5) { py = 0.52; ang = (cl < 14.5 ? 1.0 : -1.0) * sw; }
    else if (cl > 11.5) { py = 0.92; ang = (cl < 12.5 ? -1.0 : 1.0) * sw * 0.8; }
    if (py > 0.0) {
      float dy = q.y - py, ca = cos(ang), sa = sin(ang);
      q = vec3(q.x * ca - dy * sa, py + q.x * sa + dy * ca, q.z);
    }
    q.y += 0.02 * amp * abs(sin(ph));
    if (cl > 9.5 && cl < 11.5) q.x += 0.03 * amp * sin(ph * 0.5);
    float cy = cos(yaw), sy = sin(yaw);
    q = vec3(q.x * cy + q.z * sy, q.y, -q.x * sy + q.z * cy);
    return vec3(c.x + q.x, DY_FL + q.y, c.y + q.z);
  }
  float pr = floor(fract(d.w) * 32.0 + 0.5);
  vec2 a = dy_xz(pr, 0.0, t), b = dy_xz(pr, 1.0, t);
  if (cl < 16.5) { // thread at waist height, sagging
    float u = r.y;
    vec2 m = mix(a, b, u);
    return vec3(m.x, DY_FL + 0.62 - 0.07 * sin(u * 3.14159265) + 0.012 * sin(t * 3.0 + u * 30.0 + r.z * 6.0), m.y);
  }
  vec2 mid = 0.5 * (a + b); vec2 dv = b - a; float dist = length(dv);
  vec2 dir = dist > 0.01 ? dv / dist : vec2(1.0, 0.0), perp = vec2(-dir.y, dir.x);
  float th = r.y * 6.2831853;
  float A = 0.5 * dist + 0.4 + 0.02 * sin(t * 1.3 + pr), B = 0.34 + 0.015 * sin(t * 1.7 + pr * 2.0);
  vec2 e = mid + dir * cos(th) * A + perp * sin(th) * B;
  return vec3(e.x, DY_FL + 0.012, e.y);
}
float size_dyads(vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl > 9.5 && cl < 15.5) return 1.55;
  if (cl > 15.5 && cl < 16.5) return 1.0;
  if (cl > 16.5) return 0.9;
  if (cl > 4.5 && cl < 5.5) return 1.3;
  return 1.0;
}
vec4 color_dyads(vec4 c, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl < 0.5) return c;
  if (cl > 9.5 && cl < 15.5) {
    float fig = dy_fig(d.w);
    float who = fig - floor(fig * 0.5) * 2.0;
    vec3 rgb = who < 0.5 ? vec3(1.0, 0.91, 0.76) : vec3(0.42, 0.9, 0.84);
    float k = cl < 10.5 ? 1.3 : (cl < 11.5 ? 1.0 : 0.82);
    return vec4(rgb * k, c.a);
  }
  if (cl > 15.5) {
    float pr = floor(fract(d.w) * 32.0 + 0.5);
    float dist = length(dy_xz(pr, 0.0, t) - dy_xz(pr, 1.0, t));
    float near = 1.0 - smoothstep(0.4, 1.7, dist);
    float a = cl < 16.5 ? c.a * near * (0.6 + 0.4 * sin(t * 3.0 + r.y * 40.0)) : c.a * (0.35 + 0.65 * near);
    return vec4(c.rgb, a);
  }
  if (cl > 4.5 && cl < 5.5) return vec4(c.rgb, c.a * (0.88 + 0.12 * sin(t * 2.0 + r.x * 2.0)) * (1.0 - 0.5 * step(0.985, sin(t * 0.7) * sin(t * 1.9))));
  return c;
}`,camera:{pos:[3.9,4.2,11.2],target:[1.5,0,-.3],fov:35},pointSize:1.6,drift:.01},Nn=o({default:()=>Pn}),Pn={id:`epilogue`,async build(e,t,n){let r=e.rand;for(let i=0;i<e.count;i++){let e=r()*2-1,a=r()*Math.PI*2,o=Math.sqrt(1-e*e),s=14+40*Math.cbrt(r()),c=.5+.5*r();j.set(t,n,i,Math.cos(a)*o*s,e*s*.7,Math.sin(a)*o*s,0,.8*c,.86*c,1*c,.03+.1*r()**4)}},camera:{pos:[0,0,20],target:[0,0,0],fov:36},pointSize:1.2,drift:.004},Fn=o({default:()=>nr}),In=new Uint8Array(512);(()=>{let e=90210,t=Array.from({length:256},(e,t)=>t);for(let n=255;n>0;n--){e=e*1664525+1013904223>>>0;let r=e%(n+1),i=t[n];t[n]=t[r],t[r]=i}for(let e=0;e<512;e++)In[e]=t[e&255]})();var Ln=(e,t,n)=>In[In[In[e&255]+(t&255)]+(n&255)]/255;function Rn(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=Math.floor(n),o=e-r,s=t-i,c=n-a;o=o*o*(3-2*o),s=s*s*(3-2*s),c=c*c*(3-2*c);let l=Ln(r,i,a),u=Ln(r+1,i,a),d=Ln(r,i+1,a),f=Ln(r+1,i+1,a),p=Ln(r,i,a+1),m=Ln(r+1,i,a+1),h=Ln(r,i+1,a+1),g=Ln(r+1,i+1,a+1),_=l+(u-l)*o,v=d+(f-d)*o,y=p+(m-p)*o,b=h+(g-h)*o,x=_+(v-_)*s;return x+(y+(b-y)*s-x)*c}var zn=(e,t,n,r=4)=>{let i=.5,a=0,o=1;for(let s=0;s<r;s++)a+=i*Rn(e*o+s*17.3,t*o-s*9.1,n*o+s*5.7),i*=.5,o*=2.02;return a/(1-.5**r)},Bn=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Vn=84,Hn=42,Un=48,Wn=-9.6,Gn=9.6,Kn=-3.8,qn=-10.4,Jn=0,Yn=19.2/Vn,Xn=7.199999999999999/Hn,Zn=10.4/Un,Qn=(e,t,n)=>(n*Hn+t)*Vn+e,$n=(()=>{let e=Math.hypot(-.45,.82,.38);return[-.45/e,.82/e,.38/e]})(),er=(e,t,n)=>1+.3*(Rn(e*2.1+3,t*2.1,n*2.1-5)-.5);function tr(e){let t=[],n=(r,i,a,o,s)=>{if(t.push([r,i,a,o]),s>=3||o<.3)return;let c=s===0?6:s===1?5:3;for(let t=0;t<c;t++){let t=e()*2-1,c=e()*2-1,l=e()*2-1,u=Math.hypot(t,c,l)||1;t/=u,c/=u,l/=u,c<-.12&&(c=-c*.55);let d=o*(.5+.17*e()),f=o*(.74+.2*e()),p=i+c*f;p<-3.3||n(r+t*f,p,a+l*f,d,s+1)}};for(let t=0;t<15;t++){let r=(t+e())/15,i=-8.2+16.4*r,a=-9+e()*6.2,o=1-Math.abs(Math.sin(r*3.1+.4))*0;n(i,-2.5+e()*1.5*o,a,1.5+e()*.9+.08*-a,0)}return n(-5.2,-.6,-6.8,1.9,0),n(4.9,-.3,-7.6,2.1,0),n(.8,-1.3,-9.2,2.2,0),n(-6.8,1.9,-9.6,1.1,1),n(7.6,1.5,-9.4,1,1),t}var nr={id:`fog`,build(e,t,n){let r=e.count,i=e.rand;nr.pointSize=5.6*Math.min(1.7,(262144/r)**.4);let a=Math.floor(r*.56),o=a+Math.floor(r*.22),s=Math.floor(r*.08),c=Math.floor(r*.06),l=r-o-s-c,u=new Float32Array(3528*Un),d=tr(i);for(let[e,t,n,r]of d){let i=r*1.3,a=Math.max(0,Math.floor((e-i-Wn)/Yn)),o=Math.min(83,Math.ceil((e+i-Wn)/Yn)),s=Math.max(0,Math.floor((t-i-Kn)/Xn)),c=Math.min(41,Math.ceil((t+i-Kn)/Xn)),l=Math.max(0,Math.floor((n-i-qn)/Zn)),d=Math.min(47,Math.ceil((n+i-qn)/Zn));for(let i=l;i<=d;i++)for(let l=s;l<=c;l++)for(let s=a;s<=o;s++){let a=Wn+(s+.5)*Yn,o=Kn+(l+.5)*Xn,c=qn+(i+.5)*Zn,d=a-e,f=o-t,p=c-n,m=Math.sqrt(d*d+f*f+p*p)/r;if(m>1.3)continue;let h=er(a,o,c),g=1-m*h*(m*h);g>u[Qn(s,l,i)]&&(u[Qn(s,l,i)]=g)}}for(let e=0;e<Un;e++)for(let t=0;t<Hn;t++){let n=Bn(-3.8,-2.3,Kn+(t+.5)*Xn);for(let r=0;r<Vn;r++){let i=Qn(r,t,e);u[i]>0&&(u[i]*=n)}}let f=$n[0]/$n[1],p=$n[2]/$n[1],m=new Float32Array(3528*Un),h=f*Xn/Yn,g=p*Xn/Zn;for(let e=41;e>=0;e--){let t=Math.round(h*(41-e))-Math.round(h*(Hn-e)),n=Math.round(g*(41-e))-Math.round(g*(Hn-e));for(let r=0;r<Un;r++)for(let i=0;i<Vn;i++){let a=0;if(e<41){let o=i+t,s=r+n;o>=0&&o<Vn&&s>=0&&s<Un&&(a=m[Qn(o,e+1,s)])}m[Qn(i,e,r)]=a*.97+u[Qn(i,e,r)]*Xn}}let _=(e,t,n,r)=>{let i=(t-Wn)/Yn-.5,a=(n-Kn)/Xn-.5,o=(r-qn)/Zn-.5,s=Math.max(0,Math.min(82,Math.floor(i))),c=Math.max(0,Math.min(40,Math.floor(a))),l=Math.max(0,Math.min(46,Math.floor(o))),u=Math.min(1,Math.max(0,i-s)),d=Math.min(1,Math.max(0,a-c)),f=Math.min(1,Math.max(0,o-l)),p=Qn(s,c,l),m=3528,h=e[p]*(1-u)+e[p+1]*u,g=e[p+Vn]*(1-u)+e[p+Vn+1]*u,_=e[p+m]*(1-u)+e[p+m+1]*u,v=e[p+m+Vn]*(1-u)+e[p+m+Vn+1]*u;return(h*(1-d)+g*d)*(1-f)+(_*(1-d)+v*d)*f},v=0,y=(e,t,n,r)=>{let i=e[3],a=i/er(e[0]+t*i,e[1]+n*i,e[2]+r*i),o=e[0]+t*a,s=e[1]+n*a,c=e[2]+r*a;return s<-3.75||o<Wn||o>Gn||c<qn||c>Jn||_(u,o,s,c)>.2?-1:a},b=()=>{let e=i()*2-1,t=i()*2-1,n=i()*2-1,r=e*e+t*t+n*n;if(r>1||r<.0025)return null;let a=Math.sqrt(r);return n/a<-.55?null:[e/a,t/a,n/a]},x=[],S=[],C=0;for(let e of d){let t=0,n=0;for(;n<10;){let r=b();r&&(n++,y(e,r[0],r[1],r[2])>0&&t++)}t!==0&&(C+=e[3]*e[3]*(t/10),x.push(e),S.push(C))}let w=()=>{let e=i()*C,t=0,n=x.length-1;for(;t<n;){let r=t+n>>1;S[r]<e?t=r+1:n=r}return x[t]},T=[1,.965,.87],E=[.3,.38,.56],D=0;for(;v<a&&D<a*8;){D++;let e=w(),r=b();if(!r)continue;let a=y(e,r[0],r[1],r[2]);if(a<0)continue;let o=r[0],s=r[1],c=r[2],l=a*(1-.14*i()**2),u=e[0]+o*l,d=e[1]+s*l,f=e[2]+c*l,p=.5+.5*(o*$n[0]+s*$n[1]+c*$n[2]),h=_(m,u,d,f),g=Math.exp(-h*1.1),x=.2+.16*Math.max(0,c)+.1*Math.max(0,s),S=Math.min(1,(x+.8*p**1.6)*(.4+.6*g)*1.15),C=Bn(-1.5,-9.5,f),O=Bn(-3.8,-1,d),k=(E[0]+(T[0]-E[0])*S)*(1-.3*C)+.114*C,A=(E[1]+(T[1]-E[1])*S)*(1-.3*C)+.15*C,M=(E[2]+(T[2]-E[2])*S)*(1-.3*C)+.216*C,N=(.1+.9*S)*(1-.45*C)*O*(.9+.2*i())*.4;j.set(t,n,v,u,d,f,0,k,A,M,N),v++}for(;v<o;){let e=w(),r=b();if(!r)continue;let a=.82*Math.cbrt(i()),o=e[3],s=e[0]+r[0]*o*a,c=e[1]+r[1]*o*a,l=e[2]+r[2]*o*a;if(c<-3.75||s<Wn||s>Gn||l<qn||l>Jn)continue;let u=.5+.5*(r[0]*$n[0]+r[1]*$n[1]+r[2]*$n[2]),d=Math.exp(-_(m,s,c,l)*1.1),f=Math.min(1,(.22+.55*u**1.4)*(.35+.65*d)*(.7+.3*a)),p=Bn(-1.5,-9.5,l),h=Bn(-3.8,-1,c),g=(E[0]+(T[0]-E[0])*f)*(1-.3*p)+.114*p,y=(E[1]+(T[1]-E[1])*f)*(1-.3*p)+.15*p,x=(E[2]+(T[2]-E[2])*f)*(1-.3*p)+.216*p;j.set(t,n,v,s,c,l,4,g,y,x,(.05+.1*f)*(1-.45*p)*h),v++}for(;v<o;){let e=Math.floor(i()*v),r=t[e*4]+(i()-.5)*.12,a=t[e*4+1]+(i()-.5)*.12,o=t[e*4+2]+(i()-.5)*.12;j.set(t,n,v,r,a,o,0,n[e*4],n[e*4+1],n[e*4+2],n[e*4+3]),v++}for(let e=0;e<s;e++){let e=0,r=0,a=0,o=0;for(let t=0;t<12&&(e=(i()*2-1)*5.5,r=-2.6+i()*3.3,a=.2+i()*4,o=zn(e*.55,r*.9,a*.55+20,3)-.46-.35*Math.max(0,r),!(o>0&&i()<o*3));t++);let s=Bn(-2.6,.5,r);j.set(t,n,v++,e,r,a,1,.92-.2*(1-s),.92-.14*(1-s),.94,.05+.05*Math.max(0,o))}for(let e=0;e<c;e++){let e=(i()*2-1)*15,r=-2.4+i()**1.5*3.2+(i()-.5)*.3,a=-14+i()*3,o=1-Math.abs(r+.2)/2.4;j.set(t,n,v++,e,r,a,2,.55,.64,.8,.03+.06*Math.max(0,o)*i())}for(let e=0;e<l;e++){let e=(i()*2-1)*12,r=1+i()*4.5,a=-14+i()*12;j.set(t,n,v++,e,r,a,3,.95,.93,.88,.1+.5*i()*i())}},glsl:`
uniform float u_fog_cam;
vec3 anim_fog(vec3 p, vec4 d, vec4 r, float t) {
  vec3 q = p * vec3(0.5, 0.8, 0.5);
  // slow coherent billowing: neighbouring particles move together
  p.x += 0.16 * sin(q.y * 2.3 + q.z * 1.1 + t * 0.21) + 0.08 * sin(q.z * 3.1 - t * 0.17);
  p.y += 0.09 * sin(q.x * 2.7 + q.z * 1.7 + t * 0.27) + 0.05 * sin(q.x * 5.0 - t * 0.31);
  p.z += 0.13 * sin(q.x * 2.1 + q.y * 2.6 - t * 0.19);
  if (d.w > 0.5 && d.w < 1.5) { p.x += 0.7 * sin(t * 0.085 + p.z * 0.9 + p.y * 0.4); p.y += 0.12 * sin(t * 0.2 + p.x * 0.8); }
  if (d.w > 2.5 && d.w < 3.5) { p.y += 0.04 * sin(t * 0.5 + r.x * 40.0); }
  return p;
}
float size_fog(vec4 d, vec4 r, float t) {
  if (d.w > 3.5) return 2.5;
  if (d.w > 2.5) return 0.3;
  if (d.w > 0.5 && d.w < 1.5) return 2.4;
  if (d.w > 1.5) return 3.0;
  return 0.9 + 0.5 * smoothstep(-1.0, -9.0, d.z);
}
vec4 color_fog(vec4 c, vec4 d, vec4 r, float t) {
  float near = smoothstep(0.35, 1.9, u_fog_cam - d.z);                  // nothing pops in the lens
  float breathe = 0.93 + 0.07 * sin(t * 0.35 + d.x * 0.6 + d.z * 0.4);
  // a slow warm glint of sun travelling across the bank tops
  float glint = exp(-pow((d.x * 0.5 + d.z * 0.35) - (mod(t * 0.35, 18.0) - 9.0), 2.0) * 0.12) * smoothstep(-0.8, 1.6, d.y);
  c.rgb += vec3(0.5, 0.36, 0.16) * glint * 0.35 * step(d.w, 0.5);
  if (d.w > 2.5 && d.w < 3.5) c.a *= 0.6 + 0.4 * sin(t * (1.0 + r.y * 2.0) + r.x * 30.0);
  c.a *= near * breathe;
  return c;
}`,uniforms:{u_fog_cam:{value:5.8}},camera:{pos:[0,.4,5.8],target:[0,.4,-3],fov:40},pointSize:5.6,drift:.05},rr=[0,0,0],ir=(e,t)=>{let n=e*Math.PI/180;return[Math.sin(n)*24,t,Math.cos(n)*24]},ar=[{id:`work`,angle:25,height:-2,center:ir(25,-2),accent:`#B48CFF`,projects:[`qvr`,`cloudflare`,`appfolio`,`recruiting-os`,`chomchom`]},{id:`systems`,angle:85,height:-1.5,center:ir(85,-1.5),accent:`#FF4A2B`,projects:[`secretary`,`watchdog`,`selforge`,`zeta`,`table-model`,`hand-compass`]},{id:`research`,angle:145,height:2.5,center:ir(145,2.5),accent:`#FF6A8A`,projects:[`love-island`,`wwii`,`thrift`]},{id:`mind`,angle:205,height:2,center:ir(205,2),accent:`#8FB8FF`,projects:[`second-brain`,`skills`,`axe-os`,`carta`]},{id:`education`,angle:265,height:1.5,center:ir(265,1.5),accent:`#D9A441`,projects:[`metamorphoses`,`odyssey`,`liaozhai`]},{id:`about`,angle:325,height:-1,center:ir(325,-1),accent:`#EDE6D6`,projects:[]}],or=e=>ar.find(t=>t.id===e);function sr(e,t=10,n=.18,r=1.2){let i=e.angle*Math.PI/180+n,a=24+t;return{pos:[Math.sin(i)*a,e.height+r,Math.cos(i)*a],target:e.center,fov:35}}var cr=(e,t=0,n=0,r=0)=>[e.center[0]+t,e.center[1]+n,e.center[2]+r],lr=e=>e.angle*Math.PI/180,G=e=>or(e);function ur(e,t,n=0,r=40,i=12,a=35){let o=e.angle*Math.PI/180+n,s=r*Math.PI/180;return{pos:[t[0]+Math.sin(o)*Math.cos(s)*i,t[1]+Math.sin(s)*i,t[2]+Math.cos(o)*Math.cos(s)*i],target:[t[0],t[1]+.2,t[2]],fov:a}}function dr(e,t,n,r=1.2,i=35){let a=24*Math.cos(t)+Math.sqrt(Math.max(0,n*n-576*Math.sin(t)**2)),o=e.angle*Math.PI/180+t;return{pos:[Math.sin(o)*a,e.height+r,Math.cos(o)*a],target:e.center,fov:i}}function fr(e,t,n=.7){let r=24*Math.cos(e)+Math.sqrt(Math.max(0,t*t-576*Math.sin(e)**2));return n*Math.atan2(r*Math.sin(e),r*Math.cos(e)-24)}var pr={at:[-12.7,-4.5,26],yaw:.7236,len:36,hw:7.6,height:17.2};function mr(e,t,n){let r=Math.cos(pr.yaw),i=Math.sin(pr.yaw);return[pr.at[0]+e*r+n*i,pr.at[1]+t,pr.at[2]-e*i+n*r]}var hr=3.1,gr=e=>(2-e)*hr,_r=pr.yaw+Math.PI,vr=[{id:`hold`,i:0,at:mr(4.5,0,56),yaw:_r,radius:8},{id:`meeple`,i:1,at:mr(-4.5,0,74),yaw:_r,radius:8},{id:`records`,i:2,at:mr(4.5,0,92),yaw:_r,radius:8},{id:`guitar`,i:3,at:mr(-4.5,0,110),yaw:_r,radius:8},{id:`knight`,i:4,at:mr(4.5,0,128),yaw:_r,radius:8}];function yr(e,t,n,r,i=36,a=1.3){let o=vr[e].at,s=vr[e].yaw+t,c=n*Math.PI/180;return{pos:[o[0]+Math.sin(s)*Math.cos(c)*r,o[1]+Math.sin(c)*r,o[2]+Math.cos(s)*Math.cos(c)*r],target:[o[0],o[1]+a,o[2]],fov:i}}var br=(e,t=0)=>{let n=vr[e].at;return[n[0],n[1]+t,n[2]]},K=[{id:`clouds`,area:`hub`,form:`fog`,place:{at:[0,0,40]},cam:{pos:[13.5,.3,36],target:[-4,0,35.6],fov:40},back:.94,lift:.1,dwell:1.2,travel:0,overlay:`prologue`,sound:`wind`},{id:`name`,area:`hub`,form:`name`,place:{at:[0,-.2,14]},cam:{pos:[0,.4,24],target:[0,0,10],fov:36},frame:[0,.13],back:2.4,dwell:1.4,travel:1,overlay:`name`,sound:`poweron`},{id:`world`,area:`hub`,form:`orbits`,place:{at:[0,0,0]},cam:{pos:[38,16,44],target:[0,-1,0],fov:38},frame:[.2,0],back:1.35,lift:.22,dwell:1,travel:1.2,overlay:`world`},{id:`surface`,area:`work`,form:`surface`,place:{at:cr(G(`work`)),yaw:lr(G(`work`)),scale:.92},cam:sr(G(`work`),12),frame:[.3,0],back:1.92,lift:.36,dwell:1.3,travel:1.4,tvs:[`qvr`],overlay:`surface`,sound:`work`},{id:`cloudflare`,area:`work`,form:`cloudflare`,place:{at:cr(G(`work`),0,.2,0),yaw:lr(G(`work`))+fr(.26,11,.5),scale:.85},cam:dr(G(`work`),.26,11,.8),frame:[-.3,0],back:1.79,lift:.08,dwell:1.2,travel:.7,tvs:[`cloudflare`],overlay:`cloudflare`,sound:`sig.cloudflare`},{id:`appfolio`,area:`work`,form:`appfolio`,place:{at:cr(G(`work`),0,.1,0),yaw:lr(G(`work`))+fr(.34,12.5),scale:.86},cam:dr(G(`work`),.34,12.5,.6),frame:[.3,0],back:3.07,lift:.11,dwell:1.2,travel:.7,tvs:[`appfolio`],overlay:`appfolio`,sound:`sig.appfolio`},{id:`recruiting`,area:`work`,form:`recruiting`,place:{at:cr(G(`work`)),yaw:lr(G(`work`))+fr(.42,12.5),scale:.75},cam:dr(G(`work`),.42,12.5,.4),frame:[-.3,0],back:1.68,lift:.14,dwell:1.1,travel:.7,tvs:[`recruiting-os`],overlay:`recruiting`,sound:`sig.recruiting`},{id:`chomchom`,area:`work`,form:`chomchom`,place:{at:cr(G(`work`),0,-.1,0),yaw:lr(G(`work`))+fr(.5,12.5),scale:.74},cam:dr(G(`work`),.5,12.5,1.8),frame:[.28,0],back:1.56,lift:.3,dwell:1.2,travel:.7,tvs:[`chomchom`],overlay:`chomchom`,sound:`sig.chomchom`},{id:`secretary`,area:`systems`,form:`secretary`,place:{at:cr(G(`systems`)),yaw:lr(G(`systems`))+fr(-.14,11.5),scale:.9},cam:dr(G(`systems`),-.14,11.5,.6),frame:[.3,0],back:3.29,lift:.3,dwell:1.3,travel:1.4,tvs:[`secretary`],overlay:`secretary`,sound:`systems`},{id:`watchdog`,area:`systems`,form:`watchdog`,place:{at:cr(G(`systems`),0,.2,0),yaw:lr(G(`systems`))+fr(.04,11,.5),scale:1},cam:dr(G(`systems`),.04,11,1.8),frame:[-.3,0],back:2.37,lift:.1,dwell:1.1,travel:.7,tvs:[`watchdog`],overlay:`watchdog`,sound:`sig.watchdog`},{id:`alarm`,area:`systems`,form:`pushup`,place:{at:cr(G(`systems`),0,0,0),yaw:lr(G(`systems`))},cam:sr(G(`systems`),9.5,.12),frame:[.2,0],back:2.26,lift:.15,dwell:1.3,travel:.7,tvs:[`selforge`],overlay:`alarm`},{id:`drill`,area:`systems`,form:`zeta`,place:{at:cr(G(`systems`),0,.4,0),yaw:lr(G(`systems`))+.25},cam:sr(G(`systems`),9.5,.32),frame:[-.3,0],back:1.44,lift:.09,dwell:1.1,travel:.7,tvs:[`zeta`],overlay:`drill`},{id:`table`,area:`systems`,form:`table`,place:{at:cr(G(`systems`),0,-.3,0),yaw:lr(G(`systems`))+.5},cam:ur(G(`systems`),cr(G(`systems`),0,-.3,0),.5,36,12.8),frame:[.24,0],back:4.76,lift:.09,dwell:1.3,travel:.7,tvs:[`table-model`,`hand-compass`],overlay:`table`},{id:`market`,area:`research`,form:`phase`,place:{at:cr(G(`research`)),yaw:lr(G(`research`))},cam:sr(G(`research`),10),frame:[-.34,0],back:3.84,lift:.29,dwell:1.2,travel:1.4,tvs:[`love-island`],overlay:`market`,sound:`research`},{id:`record`,area:`research`,form:`counties`,place:{at:cr(G(`research`),0,-.4,0),yaw:lr(G(`research`))+.3},cam:ur(G(`research`),cr(G(`research`),0,-.4,0),.3,46,12.5),frame:[.3,0],back:2.18,lift:.22,dwell:1.2,travel:.7,tvs:[`wwii`],overlay:`record`},{id:`pair`,area:`research`,form:`dyads`,place:{at:cr(G(`research`),0,-.3,0),yaw:lr(G(`research`))+.6},cam:sr(G(`research`),10,.62,1.6),frame:[-.3,0],back:1.44,lift:.16,dwell:1.1,travel:.7,tvs:[`thrift`],overlay:`pair`},{id:`mind`,area:`mind`,form:`brain`,place:{at:cr(G(`mind`)),yaw:lr(G(`mind`))},cam:sr(G(`mind`),12.5),frame:[-.42,0],back:2.56,lift:.15,dwell:1.6,travel:1.4,tvs:G(`mind`).projects,overlay:`mind`,sound:`mind`},{id:`school`,area:`education`,form:`uchicago`,place:{at:cr(G(`education`)),yaw:lr(G(`education`))+fr(.1,10.5,.5),scale:.72},cam:dr(G(`education`),.1,10.5,.8),frame:[-.32,0],back:2.23,lift:.16,dwell:1.4,travel:1.4,overlay:`education`,sound:`education`},{id:`mathecon`,area:`education`,form:`mathecon`,place:{at:cr(G(`education`),0,.1,0),yaw:lr(G(`education`))+fr(.26,11.5),scale:.76},cam:dr(G(`education`),.26,11.5,.6),frame:[.3,0],back:2.1,lift:-.06,dwell:1.4,travel:.7,overlay:`mathecon`,sound:`sig.mathecon`},{id:`instrument`,area:`education`,form:`compass`,place:{at:cr(G(`education`),0,.2,0),yaw:lr(G(`education`))+fr(.42,12,.6),scale:1.05},cam:dr(G(`education`),.42,12,1.2),frame:[-.3,0],back:2.54,lift:.27,dwell:1.3,travel:.7,tvs:[`metamorphoses`,`odyssey`,`liaozhai`],overlay:`instrument`},{id:`gate`,area:`about`,form:`fog`,place:{at:mr(0,5,-6),yaw:pr.yaw},cam:{pos:mr(0,2.8,-15),target:mr(0,5.2,0),fov:40},frame:[.22,0],back:1.3,lift:.1,dwell:1.2,travel:1.2,overlay:`gate`,sound:`sig.hall`},{id:`hall`,area:`about`,form:`fog`,place:{at:mr(0,5,17),yaw:pr.yaw},cam:{pos:mr(0,3.6,18),target:mr(0,8.6,36),fov:46},frame:[.35,0],back:1.1,dwell:1.7,travel:1.6,overlay:`hall`},{id:`hold`,area:`about`,form:`hold`,place:{at:br(0),yaw:vr[0].yaw+.1},cam:yr(0,0,14,13.5,44,2.75),frame:[-.22,0],back:1.13,lift:.17,dwell:.9,travel:1.4,overlay:`hold`,sound:`about`},{id:`meeple`,area:`about`,form:`meeple`,place:{at:br(1),yaw:vr[1].yaw+.25},cam:yr(1,0,54,21.5,44,1.75),frame:[-.22,0],back:.98,lift:.29,dwell:.9,travel:.7,overlay:`meeple`},{id:`records`,area:`about`,form:`turntable3d`,place:{at:br(2),yaw:vr[2].yaw+.45},cam:yr(2,.25,30,15.5,40,1.25),frame:[-.3,0],back:1.75,lift:.55,dwell:.9,travel:.7,overlay:`records`},{id:`guitar`,area:`about`,form:`guitar`,place:{at:br(3),yaw:vr[3].yaw+.62,scale:1.45},cam:yr(3,0,20,10,40,2),frame:[-.22,0],back:2.5,lift:.13,dwell:.9,travel:.7,overlay:`guitar`,sound:`sig.guitar`},{id:`knight`,area:`about`,form:`knight`,place:{at:br(4,2.4),yaw:vr[4].yaw+.62},cam:yr(4,0,46,21,44,1.25),frame:[-.22,0],back:1.15,lift:.36,dwell:.9,travel:.7,overlay:`knight`},{id:`epilogue`,area:`hub`,form:`orbits`,place:{at:[0,0,0]},cam:{pos:[0,54,50],target:[0,-2,0],fov:40},frame:[-.3,0],back:1.5,lift:.55,dwell:1.4,travel:1.6,overlay:`epilogue`,sound:`sig.world`}];K.forEach(e=>{e.cam.pos=[...e.cam.pos],e.cam.target=[...e.cam.target]});var xr=K.map(e=>({pos:[...e.cam.pos],target:[...e.cam.target]}));function Sr(e=1600,t=900){let n=e/Math.max(1,t),r=Math.min(1,Math.max(0,(n-1.05)/.5));K.forEach((e,t)=>{let i=xr[t],a=e.frame,o=[...i.pos],s=[...i.target];if(a&&r>0){let t=s[0]-o[0],i=s[1]-o[1],c=s[2]-o[2],l=Math.hypot(t,i,c)||1,u=Math.hypot(t,c)||1,d=-c/u,f=t/u,p=l*Math.tan((e.cam.fov??35)*Math.PI/360),m=p*n,h=-a[0]*r*m,g=-(a[1]??0)*r*p;for(let e of[o,s])e[0]+=d*h,e[2]+=f*h,e[1]+=g}let c=Math.min(1,Math.max(0,(1.05-n)/.45)),l=1+((e.back??1)-1)*c;if(l!==1)for(let e=0;e<3;e++)o[e]=s[e]+(o[e]-s[e])*l;if(e.lift&&c>0){let t=Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])||1,n=-e.lift*c*t*Math.tan((e.cam.fov??35)*Math.PI/360);o[1]+=n,s[1]+=n}for(let t=0;t<3;t++)e.cam.pos[t]=o[t],e.cam.target[t]=s[t]})}if(typeof window<`u`){Sr(window.innerWidth,window.innerHeight);let e=0;window.addEventListener(`resize`,()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>Sr(window.innerWidth,window.innerHeight))})}var Cr=o({default:()=>pi}),wr=3.64,Tr=1.3,Er=4.5,Dr=5.8,Or=6.75,kr=2.5,Ar=.36,jr=[[0,0],[.03,.4],[.1,.7],[.2,.93],[.45,1.22],[.9,1.34],[1.4,1.22],[1.8,1.02],[2.05,.97],[2.4,1.03],[2.8,1.02],[3.15,.86],[3.45,.52],[3.64,.22]],Mr=e=>.62+.17*(1-e/wr);function Nr(e){let t=jr.length;if(e<=0)return 0;if(e>=jr[t-1][0])return jr[t-1][1];let n=0;for(;jr[n+1][0]<e;)n++;let r=jr[Math.max(0,n-1)],i=jr[n],a=jr[n+1],o=jr[Math.min(t-1,n+2)],s=a[0]-i[0],c=(e-i[0])/s,l=c*c,u=l*c,d=(a[1]-r[1])/(a[0]-r[0])*s,f=(o[1]-i[1])/(o[0]-i[0])*s;return Math.max(0,(2*u-3*l+1)*i[1]+(u-2*l+c)*d+(-2*u+3*l)*a[1]+(u-l)*f)}var Pr=e=>Dr-Er*(1-2**(-e/12)),Fr=Pr(17),Ir=e=>.15+.08*Math.min(1,Math.max(0,(Dr-e)/(Dr-Fr))),Lr=e=>.17+.1*((e-Dr)/.95)**.8,Rr=.38,zr=Math.cos(Rr),Br=Math.sin(Rr),Vr=(()=>{let e=1e9,t=-1e9,n=1e9,r=-1e9,i=(i,a)=>{let o=i*zr-a*Br,s=i*Br+a*zr;e=Math.min(e,o),t=Math.max(t,o),n=Math.min(n,s),r=Math.max(r,s)};for(let e=0;e<=wr;e+=.05)i(e,Nr(e)),i(e,-Nr(e));return i(Or,.3),i(Or,-.3),i(6.45,.45),i(6.45,-.45),{K:Math.min(7.2/(t-e),4.7/(r-n)),cx:(e+t)/2,cy:(n+r)/2}})();function Hr(e,t,n){return[(e*zr-t*Br-Vr.cx)*Vr.K,(e*Br+t*zr-Vr.cy)*Vr.K,n*Vr.K]}var Ur=[-Br,zr],Wr=6,Gr=e=>(e-2.5)*.115,Kr=e=>(e-2.5)*.05,qr=(e,t)=>[Tr+Er*t,Gr(e)+(Kr(e)-Gr(e))*t,.075-.03*t],Jr=[82.5,110,440/3,196,740/3,330].map(e=>e/82.5*1.5),Yr=.075,Xr=Array.from({length:Wr},(e,t)=>({a:Hr(...qr(t,0)),b:Hr(...qr(t,1))})),Zr={u_guitar_t0:{value:Array(Wr).fill(-99)},u_guitar_amp:{value:Array(Wr).fill(0)},u_guitar_pp:{value:Array(Wr).fill(.5)},u_guitar_f:{value:Jr},u_guitar_en:{value:0}},Qr=0,$r=()=>typeof document<`u`&&(document.documentElement.classList.contains(`rm`)||document.documentElement.classList.contains(`reduced`));function ei(e,t,n,r=0){Zr.u_guitar_t0.value[e]=Qr+r,Zr.u_guitar_amp.value[e]=$r()?0:Yr*Math.min(1,Math.max(.15,t)),Zr.u_guitar_pp.value[e]=Math.min(.85,Math.max(.15,n))}function ti(e=.55){for(let t=0;t<Wr;t++)ei(t,e*(.85+t/5*.15),.3+.04*t,t*.045)}typeof window<`u`&&(window.__guitar={pluck:(e,t=.8)=>{ei(e,t,.4),w(e,t)},strum:(e=.6)=>ti(e),uniforms:Zr,get segs(){return ri},get live(){return ii}});var ni=K.find(e=>e.form===`guitar`),ri=Array.from({length:Wr},()=>({ax:0,ay:0,bx:0,by:0})),ii=!1,ai=null,oi=Array(Wr).fill(0),si=new f;function ci(e,t,n,r){let i=ni?.place,a=i?.scale??1,o=i?.yaw??0,s=i?.at??[0,0,0],c=Math.cos(o),l=Math.sin(o),u=e[0]*a,d=e[1]*a,f=e[2]*a;return si.set(c*u+l*f+s[0],d+s[1],-l*u+c*f+s[2]).project(t),[(si.x*.5+.5)*n,(-si.y*.5+.5)*r]}function li(e,t,n,r,i){let a=n-e,o=r-t,s=i.bx-i.ax,c=i.by-i.ay,l=a*c-o*s;if(Math.abs(l)<1e-6)return-1;let u=((i.ax-e)*c-(i.ay-t)*s)/l,d=((i.ax-e)*o-(i.ay-t)*a)/l;return u>=0&&u<=1&&d>=0&&d<=1?d:-1}function ui(e){if(window.__guitarMesh){ai=null;return}let t=performance.now();if(ii&&ai&&t-ai.t<300){let n=e.clientX-ai.x,r=e.clientY-ai.y,i=Math.max(1,t-ai.t),a=Math.hypot(n,r)/i;for(let n=0;n<Wr;n++){if(t<oi[n])continue;let r=li(ai.x,ai.y,e.clientX,e.clientY,ri[n]);if(r<0)continue;oi[n]=t+110;let i=Math.min(1,.22+a*.5);ei(n,i,r),w(n,i)}}ai={x:e.clientX,y:e.clientY,t}}if(typeof window<`u`){window.addEventListener(`pointermove`,ui,{passive:!0});for(let e of[`pointerdown`,`pointercancel`])window.addEventListener(e,()=>{ai=null},{passive:!0})}var di=!1,fi=Hr(kr,0,0),pi={id:`guitar`,build(e,t,n){let r=e.count,i=e.rand;pi.pointSize=1.9*Math.min(1.6,(262144/r)**.35);let a=0,o=(e,r,i,o,s,c,l,u)=>{let d=Hr(e,r,i);j.set(t,n,a++,d[0],d[1],d[2],o,s,c,l,u)},s=e=>Math.floor(r*e),c=[];for(let e=0;e<=wr;e+=.02)c.push([e,Nr(e)]);for(let e=wr;e>=0;e-=.02)c.push([e,-Nr(e)]);let l=c.map((e,t)=>{let n=c[(t+1)%c.length];return Math.hypot(n[0]-e[0],n[1]-e[1])}),u=l.reduce((e,t)=>e+t,0),d=e=>{let t=e*u,n=0;for(;t>l[n]&&n<l.length-1;)t-=l[n],n++;let r=c[n],i=c[(n+1)%c.length],a=t/(l[n]||1);return[r[0]+(i[0]-r[0])*a,r[1]+(i[1]-r[1])*a,n]},f=(e,t)=>Math.abs(t)<Nr(e),p=e=>.78+.22*Math.sin(e*64+Math.sin(e*9)*1.3);for(let e=s(.26);e>0;){let t=i()*wr,n=(i()*2-1)*1.36;!f(t,n)||Math.hypot(t-kr,n)<.38||(o(t,n,0,1,.96,.7,.4,(.22+.16*p(n))*(.7+.6*i())),e--)}for(let e=s(.07);e>0;){let t=i()*wr,n=(i()*2-1)*1.36;f(t,n)&&(o(t,n,-Mr(t),0,.72,.44,.24,.09*(.6+.8*i())),e--)}for(let e=s(.1);e>0;e--){let e=d(i()),t=-i()*Mr(e[0]);o(e[0],e[1],t,0,.8,.5,.28,.2*(.6+.8*i()))}for(let e=s(.035);e>0;e--){let e=d(i());o(e[0],e[1],.004,0,1,.93,.76,.55*(.7+.5*i()))}for(let e=s(.015);e>0;e--){let e=d(i());o(e[0],e[1],-Mr(e[0]),0,.95,.85,.65,.22)}for(let[e,t,n]of[[.385,.01,[1,.82,.5]],[.43,.012,[.7,.9,1]],[.47,.01,[1,.82,.5]]])for(let r=s(t);r>0;r--){let t=i()*6.2832;o(kr+Math.cos(t)*e,Math.sin(t)*e,.004,2,n[0],n[1],n[2],.7*(.7+.5*i()))}for(let e=s(.008);e>0;e--){let e=Math.floor(i()*48),t=(e+i()*.6)/48*6.2832,n=.4+.02*i()+e%2*.015;o(kr+Math.cos(t)*n,Math.sin(t)*n,.004,2,.95,.95,1,.6)}for(let e=s(.012);e>0;e--){let e=i()*6.2832;o(kr+Math.cos(e)*Ar,Math.sin(e)*Ar,-i()*.09,2,1,.75,.45,.5)}for(let e=s(.016);e>0;e--){let e=1.1400000000000001+i()*.34,t=(i()*2-1)*.62;Math.abs(t)/.62>1-.18*(Math.abs(e-Tr)/.17)**2||o(e,t,i()*.07,0,.68,.42,.3,.55*(.7+.5*i()))}for(let e=s(.004);e>0;e--)o(Tr+(i()-.5)*.02,(i()*2-1)*.33,.07+i()*.025,3,1,.97,.9,.85);for(let e=0;e<Wr;e++)for(let t=s(.0012);t>0;t--){let t=i()*6.2832,n=.016*Math.sqrt(i());o(1.2+Math.cos(t)*n,Gr(e)+Math.sin(t)*n,.072,3,.97,.95,.9,.85)}for(let e=s(.06);e>0;e--){let e=Fr+i()*(Dr-Fr);o(e,(i()*2-1)*Ir(e),.03,0,.55,.38,.3,.2*(.7+.5*i()))}for(let e=s(.02);e>0;e--){let e=Fr+i()*(5.8-Fr);o(e,(i()<.5?-1:1)*Ir(e),.03-i()*.15,0,.7,.45,.28,.2)}for(let e=1;e<=17;e++){let t=Pr(e),n=Math.floor(s(.04)/17);for(let e=0;e<n;e++)o(t+(i()-.5)*.012,(i()*2-1)*Ir(t),.035,3,.85,.9,1,.3*(.7+.5*i()))}for(let e of[3,5,7,9,15,17,12]){let t=(Pr(e)+Pr(e-1))/2,n=e===12?[-.06,.06]:[0];for(let e of n)for(let n=s(.0012);n>0;n--){let n=i()*6.2832,r=.028*Math.sqrt(i());o(t+Math.cos(n)*r,e+Math.sin(n)*r,.036,3,1,1,1,.85)}}for(let e=s(.003);e>0;e--)o(Dr+(i()-.5)*.04,(i()*2-1)*.16,.03+i()*.03,3,1,.97,.9,.5);for(let e=s(.03);e>0;e--){let e=Dr+i()*.95;o(e,(i()*2-1)*Lr(e),-.03*((e-Dr)/.95),0,.62,.42,.3,.3*(.7+.5*i()))}let m=[];for(let e=0;e<6;e++){let t=e<3?1:-1,n=e<3?e:5-e;m.push([6.02+n*.25,t*.115])}for(let e=0;e<6;e++){let[t,n]=m[e],r=Math.sign(n);for(let e=s(.0022);e>0;e--){let e=i()*6.2832,r=.03*Math.sqrt(i());o(t+Math.cos(e)*r,n+Math.sin(e)*r,.02,3,.9,.93,1,.7)}for(let e=s(.0018);e>0;e--)o(t,n+r*(.03+i()*(Lr(t)-.03+.04)),-.02-i()*.03,3,.8,.84,.9,.5);for(let e=s(.0016);e>0;e--){let e=i()*6.2832,a=.04*Math.sqrt(i());o(t+Math.cos(e)*a*.9,n+r*(Lr(t)+.06)+Math.sin(e)*a,-.035,3,.96,.92,.82,.5)}let a=Kr(e),c=s(.002);for(let e=0;e<c;e++){let e=i();o(Dr+(t-Dr)*e,a+(n-a)*e,.045-.025*e,0,.85,.9,1,.28)}}for(let e=0;e<Wr;e++){let t=e<3?[1,.74,.46]:[.86,.93,1],n=s(.0135);for(let r=0;r<n;r++){let a=(r+i())/n,s=qr(e,a),c=.003*(e<3?1.4:.8);o(s[0],s[1]+(i()-.5)*c,s[2]+(i()-.5)*c,100+e+a*.99,t[0],t[1],t[2],e<3?.42:.36)}}j.dust(t,n,a,r,i,6.5,.04,[.9,.7,.45]);for(let e=a;e<r;e++)t[e*4+3]=4},uniforms:Zr,glsl:`
uniform float u_guitar_t0[6]; uniform float u_guitar_amp[6]; uniform float u_guitar_pp[6]; uniform float u_guitar_f[6]; uniform float u_guitar_en;
vec3 anim_guitar(vec3 p, vec4 d, vec4 r, float t) {
  float w = d.w;
  if (w >= 99.5) {
    int i = int(floor(w - 100.0 + 0.01));
    float s = clamp(fract(w) / 0.99, 0.0, 1.0);
    float disp = 0.003 * sin(t * 1.3 + float(i) * 1.7) * sin(3.14159 * s);     // sympathetic shimmer, always there
    float tt = t - u_guitar_t0[i] + (r.x - 0.5) * 0.024;                       // a touch of temporal blur
    if (tt > 0.0 && tt < 5.0) {
      float A = u_guitar_amp[i], pp = u_guitar_pp[i];
      for (int n = 1; n <= 4; n++) {
        float fn = float(n);
        float a = sin(fn * 3.14159 * pp) / (fn * fn);
        float om = 6.28318 * u_guitar_f[i] * fn * (1.0 + 0.0007 * fn * fn);
        disp += A * a * sin(fn * 3.14159 * s) * cos(om * tt) * exp(-tt * (0.5 + 0.5 * fn));
      }
    }
    p += vec3(${Ur[0].toFixed(5)}, ${Ur[1].toFixed(5)}, 0.0) * disp + vec3(0.0, 0.0, 0.5) * disp;
  } else if (w > 0.5 && w < 1.5) {
    // the top plate breathes with the energy in the strings
    float dh = length(p.xy - vec2(${fi[0].toFixed(4)}, ${fi[1].toFixed(4)}));
    p.z += u_guitar_en * 0.018 * sin(t * 9.0 - dh * 7.0) * exp(-dh * 0.5);
  }
  return p;
}
float size_guitar(vec4 d, vec4 r, float t) {
  float w = d.w;
  if (w >= 99.5) return 1.05;
  if (w > 1.5 && w < 2.5) return 0.9;
  if (w > 2.5 && w < 3.5) return 1.15;
  if (w > 0.5 && w < 1.5) return 0.9;
  return 0.85;
}
vec4 color_guitar(vec4 c, vec4 d, vec4 r, float t) {
  float w = d.w;
  if (w >= 99.5) {
    int i = int(floor(w - 100.0 + 0.01));
    float tt = t - u_guitar_t0[i];
    float flash = tt > 0.0 ? exp(-tt * 2.2) * clamp(u_guitar_amp[i] / ${Yr.toFixed(3)}, 0.0, 1.0) : 0.0;
    c.rgb = mix(c.rgb, vec3(1.0, 0.97, 0.9), flash * 0.6);
    c.a *= 1.0 + 1.6 * flash;
  } else if (w > 1.5 && w < 2.5) {
    c.a *= 1.0 + u_guitar_en * 2.2 + 0.12 * sin(t * 1.4 + r.y * 6.0);
    c.rgb = mix(c.rgb, vec3(1.0, 0.85, 0.55), u_guitar_en * 0.5);
  } else if (w > 2.5 && w < 3.5) {
    c.a *= 0.8 + 0.2 * step(0.97, fract(r.w * 91.0 + t * 0.11)) * 4.0;
  }
  return c;
}`,camera:{pos:[0,.3,10.5],target:[0,0,0],fov:35},pointSize:1.9,drift:.006,update(e){Qr=e;let t=0;for(let n=0;n<Wr;n++){let r=e-Zr.u_guitar_t0.value[n];r>0&&(t=Math.max(t,Zr.u_guitar_amp.value[n]/Yr*Math.exp(-r*1.3)))}Zr.u_guitar_en.value=t;let n=window.__v3?.field,r=n?.shown,i=!!r&&(r.b===`guitar`&&r.mix>.85||r.a===`guitar`&&r.mix<.15);if(ii=i&&!!n?.camera,i&&!di&&(di=!0,ti()),(!r||r.b!==`guitar`&&r.a!==`guitar`||r.a!==`guitar`&&r.mix<.4)&&(di=!1),ii){let e=innerWidth,t=innerHeight;for(let r=0;r<Wr;r++){let[i,a]=ci(Xr[r].a,n.camera,e,t),[o,s]=ci(Xr[r].b,n.camera,e,t),c=ri[r];c.ax=i,c.ay=a,c.bx=o,c.by=s}}}},mi=o({default:()=>Ai});function hi(e,t,n,r){let i=document.createElement(`canvas`);i.width=t,i.height=n;let a=i.getContext(`2d`,{willReadFrequently:!0});a.fillStyle=`#fff`,e(a);let o=a.getImageData(0,0,t,n).data,s=new Float32Array(t*n);for(let e=0;e<s.length;e++)s[e]=o[e*4+3]/255;let c=new Float32Array(s.length);for(let e=0;e<2;e++){for(let e=0;e<n;e++){let n=0,i=e*t;for(let e=-r;e<=r;e++)n+=s[i+Math.min(t-1,Math.max(0,e))];for(let e=0;e<t;e++)c[i+e]=n/(2*r+1),n+=s[i+Math.min(t-1,e+r+1)]-s[i+Math.max(0,e-r)]}for(let e=0;e<t;e++){let i=0;for(let a=-r;a<=r;a++)i+=c[Math.min(n-1,Math.max(0,a))*t+e];for(let a=0;a<n;a++)s[a*t+e]=i/(2*r+1),i+=c[Math.min(n-1,a+r+1)*t+e]-c[Math.max(0,a-r)*t+e]}}let l=new Uint8Array(s.length);for(let e=0;e<s.length;e++)l[e]=+(s[e]>.5);let u=new Float32Array(s.length);for(let e=0;e<u.length;e++)u[e]=l[e]?1e6:0;let d=Math.SQRT2;for(let e=0;e<n;e++)for(let n=0;n<t;n++){let r=e*t+n;if(!l[r])continue;let i=u[r];i=n===0||e===0?Math.min(i,1):Math.min(i,u[r-1]+1,u[r-t]+1,u[r-t-1]+d,u[r-t+1<r?r-t+1:r]+d),u[r]=i}for(let e=n-1;e>=0;e--)for(let r=t-1;r>=0;r--){let i=e*t+r;if(!l[i])continue;let a=u[i];a=r===t-1||e===n-1?Math.min(a,1):Math.min(a,u[i+1]+1,u[i+t]+1,u[i+t+1]+d,u[i+t-1]+d),u[i]=a}let f=new Float32Array(u.length);for(let e=1;e<n-1;e++)for(let n=1;n<t-1;n++){let r=e*t+n;f[r]=l[r]?(u[r]*4+u[r-1]+u[r+1]+u[r-t]+u[r+t])/8:0}return{W:t,Hh:n,depth:f,inside:l,blur:s}}var gi=(e,t,n,r)=>{let i=Math.hypot(e,t,n)||1,a=e=>Math.max(0,Math.min(63,Math.round((e/i*.5+.5)*63)));return r+8*(a(e)+64*(a(t)+64*a(n)))},_i=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},vi=(e,t)=>{let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=_i(n,r),l=_i(n+1,r),u=_i(n,r+1),d=_i(n+1,r+1);return((c+(l-c)*o)*(1-s)+(u+(d-u)*o)*s)*2-1},yi=(e,t,n,r,i=0)=>a=>{a.beginPath(),a.ellipse(e,t,n,r,i,0,Math.PI*2),a.fill()},bi=(e,t,n,r)=>{e.globalCompositeOperation=`destination-out`,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill(),e.globalCompositeOperation=`source-over`},xi=e=>{e.beginPath(),e.moveTo(40,196),e.bezierCurveTo(30,130,90,72,176,60),e.bezierCurveTo(250,50,300,78,352,66),e.bezierCurveTo(430,50,500,96,504,168),e.bezierCurveTo(508,236,470,296,400,312),e.bezierCurveTo(350,324,330,292,282,306),e.bezierCurveTo(240,320,214,340,160,332),e.bezierCurveTo(90,322,50,262,40,196),e.closePath(),e.fill(),bi(e,262,188,24)},Si=e=>{yi(120,112,100,88,-.2)(e),bi(e,120,112,14)},Ci=e=>{e.beginPath(),e.moveTo(70,30),e.bezierCurveTo(116,10,150,40,146,90),e.bezierCurveTo(144,140,170,170,150,220),e.bezierCurveTo(130,262,76,262,60,220),e.bezierCurveTo(48,180,70,150,64,100),e.bezierCurveTo(60,70,50,50,70,30),e.closePath(),e.fill(),bi(e,104,140,13)},wi=e=>{e.beginPath(),e.moveTo(20,60),e.bezierCurveTo(60,24,200,30,290,40),e.bezierCurveTo(330,46,346,80,322,100),e.bezierCurveTo(280,126,120,120,40,108),e.bezierCurveTo(14,100,8,76,20,60),e.closePath(),e.fill(),bi(e,170,76,12)},Ti=e=>{yi(70,64,54,42,.5)(e),bi(e,70,64,9)},Ei=4.35,Di=2.65,Oi=.62,ki=[{res:.78,draw:xi,W:520,Hh:380,hx:262,hy:188,hr:24,sc:.0062,node:[0,0],rot:-.06,hgt:.7,rad:.6,lump:.1,tint:[1,.4,.24],mat:0},{draw:Si,W:250,Hh:230,hx:120,hy:112,hr:14,sc:.0066,node:[-5,2],rot:.4,hgt:.34,rad:.62,lump:.1,tint:[.96,.92,.8],mat:1},{draw:Ci,W:210,Hh:280,hx:104,hy:140,hr:13,sc:.0072,node:[4,1],rot:.35,hgt:.42,rad:.3,lump:.14,tint:[.7,.82,.94],mat:1},{draw:wi,W:350,Hh:150,hx:170,hy:76,hr:12,sc:.0062,node:[-4,-2],rot:-.1,hgt:.3,rad:.28,lump:.08,tint:[.97,.74,.4],mat:1},{draw:Ti,W:140,Hh:130,hx:70,hy:64,hr:9,sc:.0066,node:[3,-2],rot:.9,hgt:.22,rad:.28,lump:.1,tint:[.95,.9,.8],mat:1},{draw:Ti,W:140,Hh:130,hx:70,hy:64,hr:9,sc:.0058,node:[5,-1],rot:-.6,hgt:.2,rad:.28,lump:.1,tint:[.62,.78,.76],mat:1}],Ai={id:`hold`,build(e,t,n){let r=e.count,i=e.rand,a=0,o=(e,i,o,s,c,l,u,d)=>{a<r&&j.set(t,n,a++,e,i,o,s,c,l,u,d)},s=ki.map(e=>{let t=e.res??1,n={...e,W:Math.round(e.W*t),Hh:Math.round(e.Hh*t),hx:e.hx*t,hy:e.hy*t,hr:e.hr*t,sc:e.sc/t};return{sp:n,R:hi(n=>{n.scale(t,t),e.draw(n)},n.W,n.Hh,3)}}),c=r*.4/7.4,l=(e,t,n,r)=>{let i=Math.max(0,Math.min(t-2,Math.floor(n))),a=Math.max(0,Math.floor(r)),o=n-i,s=r-a,c=a*t+i;return(e[c]*(1-o)+e[c+1]*o)*(1-s)+(e[c+t]*(1-o)+e[c+t+1]*o)*s};for(let{sp:e,R:t}of s){let{W:n,Hh:a,depth:s,inside:u}=t,d=e.sc,f=Math.cos(e.rot),p=Math.sin(e.rot),m=e.node[0]*Oi,h=e.node[1]*Oi,g=t=>t>=e.rad?e.hgt:e.hgt*Math.sqrt(Math.max(0,1-(1-t/e.rad)*(1-t/e.rad))),_=(t,r)=>{let i=l(s,n,t,r)*d,o=1+e.lump*(.65*vi(t*.03+e.node[0],r*.03+e.node[1])+.35*vi(t*.085,r*.085)),c=1+.18*(1-r/a);return g(i)*o*c},v=(t,n)=>{let r=(t-e.hx)*d,i=(e.hy-n)*d;return[m+r*f-i*p,h+r*p+i*f]},y=new Float32Array(n*a);for(let e=0;e<n*a;e++)u[e]&&s[e]>=.4&&(y[e]=_(e%n+.5,Math.floor(e/n)+.5));let b=e=>u[e]&&s[e]>=.4?y[e]:0;for(let t=n+1;t<n*a-n-1;t++){if(!u[t]||s[t]<.4)continue;let r=t%n,a=Math.floor(t/n),l=(b(t+1)-b(t-1))/(2*d),m=(b(t+n)-b(t-n))/(2*d),h=Math.sqrt(1+l*l+m*m),g=Math.floor(c*d*d*Math.min(h,4)+i());for(let n=0;n<g;n++){let n=i(),c=i(),u=r+n,h=a+c,g=y[t]+(l*(n-.5)+m*(c-.5))*d,[_,b]=v(u,h),x=-l,S=m,C=x*f-S*p,w=x*p+S*f,T=s[t]*d,E=Math.hypot(u-e.hx,h-e.hy),D=.88+.12*vi(u*.4,h*.4);E<e.hr+5&&(D*=1.5);let O=.5+.5*Math.min(1,T/.22);o(_,b,g,gi(C,w,1,e.mat),e.tint[0]*D,e.tint[1]*D,e.tint[2]*D,.55*O)}}let x=e.hr*d,[S,C]=v(e.hx,e.hy),w=Math.floor(r*(e.mat===0?.01:.003));for(let e=0;e<w;e++){let e=x*.78*Math.sqrt(i()),t=i()*6.283185,n=e<x*.3?.08:1.1;o(S+e*Math.cos(t),C+e*Math.sin(t),.035,gi(0,0,1,1),.82*n,.84*n,.88*n,.55)}}let u=s[0],d=u.sp,f=(e,t)=>{for(let{sp:n,R:r}of s){let i=Math.cos(-n.rot),a=Math.sin(-n.rot),o=e-n.node[0]*Oi,s=t-n.node[1]*Oi,c=o*i-s*a,l=o*a+s*i,u=n.hx+c/n.sc,d=n.hy-l/n.sc;if(!(u<1||d<1||u>=r.W-1||d>=r.Hh-1)&&r.inside[Math.floor(d)*r.W+Math.floor(u)]&&r.depth[Math.floor(d)*r.W+Math.floor(u)]>1.5)return!0}return!1},p=(e,t)=>{let n=e-.34-d.node[0]*Oi,r=t+.3-d.node[1]*Oi,i=Math.cos(-d.rot),a=Math.sin(-d.rot),o=n*i-r*a,s=n*a+r*i,c=d.hx+o/d.sc,l=d.hy-s/d.sc;return c<0||l<0||c>=u.R.W||l>=u.R.Hh?0:u.R.blur[Math.floor(l)*u.R.W+Math.floor(c)]},m=Math.floor(r*.3),h=Math.sqrt(2*Ei*2*Di/m),g=Math.ceil(2*Ei/h),_=Math.ceil(2*Di/h);for(let e=0;e<g;e++)for(let t=0;t<_;t++){let n=-4.35+(e+i())/g*2*Ei,r=-2.65+(t+i())/_*2*Di,a=Math.round(n/Oi),s=Math.round(r/Oi),c=n-a*Oi,l=r-s*Oi,u=Math.hypot(c,l);if(u<.085||f(n,r))continue;let d=Math.exp(-((n+.3)*(n+.3)/10+(r-.1)*(r-.1)/5)),m=1-.78*Math.min(1,p(n,r)*1.2),h=(i()-.5)*.7,v=(i()-.5)*.7,y=.5+.5*_i(e*1.7,t*2.3),b=u<.115?2.6:1,x=Math.abs((n+.31)/(4*Oi)-Math.round((n+.31)/(4*Oi)))*(4*Oi),S=Math.abs((r+.31)/(3*Oi)-Math.round((r+.31)/(3*Oi)))*(3*Oi),C=x<.016||S<.016?2.2:1;o(n,r,0,gi(h,v,1,2),.88,.88,.86,.62*m*(.5+y)*b*C*(.35+.65*d))}for(let e=-7;e<=7;e++)for(let t=-5;t<=5;t++){let n=e*Oi,a=t*Oi;if(Math.abs(n)>Ei||Math.abs(a)>Di||f(n,a))continue;let s=Math.exp(-((n+.3)*(n+.3)/10+(a-.1)*(a-.1)/5)),c=1-.78*Math.min(1,p(n,a)*1.2),l=Math.floor(r*6e-4);for(let e=0;e<l;e++){let e=i()*6.283185,t=.085+i()*.035;o(n+t*Math.cos(e),a+t*Math.sin(e),0,gi(-Math.cos(e)*.6,-Math.sin(e)*.6,1,2),.95,.95,.92,.5*(.3+.7*s)*c)}}let v=[[-.55,1.1,.45,.42],[.4,1.2,.5,.34],[-1.3,.2,.3,.3],[.95,-.8,.35,.4],[-.1,-1,.25,.5]],y=Math.floor(r*.07);for(let e=0;e<y;e++){let e=v[Math.floor(i()*v.length)],t=()=>(i()+i()+i()-1.5)*.9;o(e[0]+t()*e[3],e[1]+t()*e[3]*.9,e[2]+Math.abs(t())*e[3],gi(0,0,1,3),1,.98,.94,.07+.12*i())}for(;a<r;)o((i()-.5)*9.2,(i()-.5)*5.6,.1+i()**1.7*3,gi(0,0,1,4),1,.96,.9,.04+.12*i()**2)},glsl:`
vec3 hd_n(float w, out float mat) {
  float v = floor(w + 0.5);
  mat = mod(v, 8.0); v = floor(v / 8.0);
  float a = mod(v, 64.0); v = floor(v / 64.0);
  float b = mod(v, 64.0); float c = floor(v / 64.0);
  return normalize(vec3(a, b, c) / 63.0 * 2.0 - 1.0);
}
vec3 anim_hold(vec3 p, vec4 d, vec4 r, float t) {
  float mat; hd_n(d.w, mat);
  if (mat > 2.5) {
    float s = mat > 3.5 ? 1.0 : 0.6;
    p += s * vec3(sin(t * 0.21 + r.x * 40.0) * 0.14, cos(t * 0.17 + r.y * 40.0) * 0.14 - 0.03 * t * (mat > 3.5 ? 0.0 : 0.15), sin(t * 0.25 + r.z * 40.0) * 0.1);
    if (mat < 3.5) p.y = mod(p.y + 1.6, 3.4) - 1.6;
  }
  return p;
}
float size_hold(vec4 d, vec4 r, float t) { float mat; hd_n(d.w, mat); return mat > 3.5 ? 0.75 : (mat > 2.5 ? 1.5 : (mat > 1.5 ? 1.2 : 1.0)); }
vec4 color_hold(vec4 c, vec4 d, vec4 r, float t) {
  float mat; vec3 n = hd_n(d.w, mat);
  if (mat > 2.5) { c.a *= 0.55 + 0.45 * sin(t * 1.3 + r.w * 40.0); return c; }
  // a key light that drifts along the wall (like a headtorch), plus a cool rim from the right
  vec3 L1 = normalize(vec3(-0.62 + 0.28 * sin(t * 0.33), 0.55 + 0.1 * sin(t * 0.21), 0.42));
  vec3 L2 = normalize(vec3(0.8, -0.1, 0.45));
  float dif = max(dot(n, L1), 0.0);
  float rim = pow(1.0 - max(n.z, 0.0), 2.0) * (0.35 + 0.65 * max(dot(n, L2), 0.0));
  vec3 Hv = normalize(L1 + vec3(0.0, 0.0, 1.0));
  float sp = pow(max(dot(n, Hv), 0.0), 26.0);
  float wall = mat > 1.5 ? 1.0 : 0.0;
  vec3 rgb = c.rgb * (0.10 + (1.1 - 0.35 * wall) * dif) + vec3(0.55, 0.72, 1.0) * rim * 0.55 + vec3(1.0, 0.92, 0.82) * sp * (0.95 - 0.55 * wall);
  return vec4(rgb, c.a);
}`,camera:{pos:[2.8,1.1,8.2],target:[0,0,0],fov:35},pointSize:2.4,drift:.002},ji=o({default:()=>Mi}),Mi=we({id:`hold3d`,url:`/portfolio/models/hold3d.bin`,size:1.7,yaw0:-.22,tilt:.16,sway:.3,albedo:[.96,.9,.78],key:[1,.9,.74],fill:[.55,.65,.95],spec:.55,shine:34,alpha:.8,pointSize:2.2,camera:{pos:[0,1.2,8.8],target:[0,0,0]}}),Ni=o({default:()=>Hi});function Pi(e,t,n,r){let i=document.createElement(`canvas`);i.width=t,i.height=n;let a=i.getContext(`2d`,{willReadFrequently:!0});a.fillStyle=`#fff`,e(a);let o=a.getImageData(0,0,t,n).data,s=new Float32Array(t*n);for(let e=0;e<s.length;e++)s[e]=o[e*4+3]/255;let c=new Float32Array(s.length);for(let e=0;e<2;e++){for(let e=0;e<n;e++){let n=0,i=e*t;for(let e=-r;e<=r;e++)n+=s[i+Math.min(t-1,Math.max(0,e))];for(let e=0;e<t;e++)c[i+e]=n/(2*r+1),n+=s[i+Math.min(t-1,e+r+1)]-s[i+Math.max(0,e-r)]}for(let e=0;e<t;e++){let i=0;for(let a=-r;a<=r;a++)i+=c[Math.min(n-1,Math.max(0,a))*t+e];for(let a=0;a<n;a++)s[a*t+e]=i/(2*r+1),i+=c[Math.min(n-1,a+r+1)*t+e]-c[Math.max(0,a-r)*t+e]}}let l=new Uint8Array(s.length);for(let e=0;e<s.length;e++)l[e]=+(s[e]>.5);let u=new Float32Array(s.length);for(let e=0;e<u.length;e++)u[e]=l[e]?1e6:0;let d=Math.SQRT2;for(let e=0;e<n;e++)for(let n=0;n<t;n++){let r=e*t+n;if(!l[r])continue;let i=u[r];i=n===0||e===0?Math.min(i,1):Math.min(i,u[r-1]+1,u[r-t]+1,u[r-t-1]+d,u[r-t+1<r?r-t+1:r]+d),u[r]=i}for(let e=n-1;e>=0;e--)for(let r=t-1;r>=0;r--){let i=e*t+r;if(!l[i])continue;let a=u[i];a=r===t-1||e===n-1?Math.min(a,1):Math.min(a,u[i+1]+1,u[i+t]+1,u[i+t+1]+d,u[i+t-1]+d),u[i]=a}let f=new Float32Array(u.length);for(let e=1;e<n-1;e++)for(let n=1;n<t-1;n++){let r=e*t+n;f[r]=l[r]?(u[r]*4+u[r-1]+u[r+1]+u[r-t]+u[r+t])/8:0}return{W:t,Hh:n,depth:f,inside:l,blur:s}}var Fi=(e,t,n,r)=>{let i=Math.hypot(e,t,n)||1,a=e=>Math.max(0,Math.min(63,Math.round((e/i*.5+.5)*63)));return r+8*(a(e)+64*(a(t)+64*a(n)))},Ii=400,Li=580,Ri=e=>{e.beginPath(),e.moveTo(112,580),e.lineTo(112,500),e.bezierCurveTo(108,476,100,452,104,428),e.bezierCurveTo(110,404,134,394,144,376),e.bezierCurveTo(116,372,86,366,62,354),e.bezierCurveTo(36,346,18,336,12,320),e.bezierCurveTo(4,302,8,284,18,268),e.bezierCurveTo(38,232,70,186,104,142),e.bezierCurveTo(116,124,120,108,122,92),e.lineTo(128,36),e.bezierCurveTo(132,18,140,6,150,2),e.bezierCurveTo(160,16,168,38,172,60),e.bezierCurveTo(194,52,222,58,246,76),e.bezierCurveTo(232,88,240,102,264,108),e.bezierCurveTo(246,124,256,138,284,142),e.bezierCurveTo(266,160,278,174,306,176),e.bezierCurveTo(288,196,300,210,328,212),e.bezierCurveTo(310,234,322,250,348,250),e.bezierCurveTo(332,282,342,312,354,332),e.bezierCurveTo(358,382,352,432,358,472),e.lineTo(360,500),e.lineTo(360,580),e.closePath(),e.fill()},zi=[[18,318],[52,334],[100,346],[138,358]],Bi=(e,t,n)=>{let r=1e9;for(let i=0;i<n.length-1;i++){let a=n[i][0],o=n[i][1],s=n[i+1][0],c=n[i+1][1],l=s-a,u=c-o,d=Math.max(0,Math.min(1,((e-a)*l+(t-o)*u)/(l*l+u*u)));r=Math.min(r,Math.hypot(e-a-d*l,t-o-d*u))}return r},Vi=-1.9,Hi={id:`knight`,build(e,t,n){let r=e.count,i=e.rand,a=0,o=(e,i,o,s,c,l,u,d)=>{a<r&&j.set(t,n,a++,e,i,o,s,c,l,u,d)},s=2.1/500,c=.36,l=.36,u=[.95,.92,.84],d=[],{W:f,Hh:p,depth:m,inside:h}=Pi(Ri,Ii,Li,4),g=e=>e>=l?c:c*Math.sqrt(Math.max(0,1-(1-e/l)*(1-e/l))),_=e=>e>=l?0:Math.min(4,(1-e/l)*c/l/Math.max(.001,Math.sqrt(Math.max(0,1-(1-e/l)*(1-e/l))))),v=[],y=[],b=0,x=0;for(let e=0;e<f*p;e++){if(!h[e]||m[e]<.5||Math.floor(e/f)>500)continue;let t=m[e]*s,n=Math.sqrt(1+_(t)*_(t));b+=n,v.push(e),y.push(n),m[e]<1.5&&x++}let S=Math.floor(r*.36),C=(e,t)=>{let n=Math.min(f-2,Math.max(1,Math.round(e))),r=Math.min(p-2,Math.max(1,Math.round(t)))*f+n;return[(m[r+1]-m[r-1])*.5,(m[r+f]-m[r-f])*.5]},w=S/(2*b*1),T=(e,t,n,r,a,c,l)=>{let f=r*s,p=_(f),m=(e-205)*s,h=(500-t)*s+-.9999999999999999,v=.9+.1*Math.sin(m*5+Math.sin(h*4)*2);+(e>190&&t>50&&t<340)&&(v*=.55+.45*Math.abs(Math.sin(r*.42))**2.2);let y=(e-100)*1,b=(t-206)*1.25,x=Math.hypot(y,b);x<9?v*=.05:x<16&&(v*=1.6);let S=e-26,C=t-296,w=Math.hypot(S,C);w<7?v*=.06:w<11&&(v*=1.5);let T=Bi(e,t,zi);T<2.6?v*=.12:T<5&&(v*=1.35);let E=e>126&&e<160&&t<70&&r>3?.55:1,D=n*g(f);l<1&&i()>l||(o(m,h,D,Fi(-p*a,p*c,n,0),u[0]*v*E,u[1]*v*E,u[2]*v*E,.3*(.78+.22*Math.min(1,r/12))),d.length<2e4&&i()<.15&&d.push([m,h,D,-p*a,p*c,n,v*E]))};for(let e=0;e<v.length;e++){let t=v[e],n=t%f,r=Math.floor(t/f),a=m[t];for(let t=1;t>=-1;t-=2){let o=Math.floor(w*y[e]*(t>0?1.5:.12)+i());for(let e=0;e<o;e++){let e=n+i(),o=r+i(),[s,c]=C(e,o);T(e,o,t,a,s,c,1)}}}let E=[[.72,0],[.75,.035],[.75,.09],[.71,.145],[.67,.18],[.69,.225],[.6,.29],[.5,.38],[.45,.5],[.47,.58],[.57,.64],[.6,.68],[.55,.725],[.52,.77],[.55,.83],[.52,.9]],D=Math.floor(r*.11),O=0;for(let e=0;e<E.length-1;e++){let t=E[e+1][0]-E[e][0],n=E[e+1][1]-E[e][1];O+=Math.hypot(t,n)*2*Math.PI*(E[e][0]+E[e+1][0])/2}let k=D/O;for(let e=0;e<E.length-1;e++){let[t,n]=E[e],[r,a]=E[e+1],s=Math.hypot(r-t,a-n);(t+r)/2;let c=Math.max(1,Math.round(s*Math.sqrt(k))),l=[a-n,-(r-t)],f=Math.hypot(l[0],l[1])||1;for(let e=0;e<c;e++){let s=(e+i())/c,p=t+(r-t)*s,m=n+(a-n)*s,h=Math.max(1,Math.round(2*Math.PI*p*Math.sqrt(k))),g=i()*6.283;for(let e=0;e<h;e++){let t=g+(e+i())/h*6.283185,n=Math.cos(t),r=Math.sin(t),a=l[0]/f*n,s=l[1]/f,c=l[0]/f*r,_=.85+.15*Math.sin(m*70),v=Vi+m;o(p*n,v,p*r,Fi(a,s,c,0),u[0]*_,u[1]*_,u[2]*_,.5),d.length<28e3&&i()<.1&&d.push([p*n,v,p*r,a,s,c,_])}}}for(let e=0,t=Math.floor(r*.012);e<t;e++){let e=.52*Math.sqrt(i()),t=i()*6.283185;o(e*Math.cos(t),-.9999999999999999,e*Math.sin(t),Fi(0,1,0,0),u[0]*.8,u[1]*.8,u[2]*.8,.4)}for(let e of d)o(e[0],2*Vi-e[1],e[2],Fi(e[3],-e[4],e[5],3),u[0]*e[6],u[1]*e[6],u[2]*e[6],.2);let A=1.3,M=(e,t)=>Math.exp(-(e*e/28+t*t/16)),N=0;for(let e=-5;e<=5;e++)for(let t=-4;t<=4;t++)e+t&1&&(N+=M(e*A,t*A));let P=r*.2,F=Math.sqrt(A*A*N/P);for(let e=-5;e<=5;e++)for(let t=-4;t<=4;t++){let n=!!(e+t&1),r=e*A,a=t*A,s=n?F:F*2.6,c=Math.ceil(A/s);for(let e=0;e<c;e++)for(let t=0;t<c;t++){let s=r+((e+.5+(i()-.5)*.9)/c-.5)*A,l=a+((t+.5+(i()-.5)*.9)/c-.5)*A,u=M(s,l);if(i()>u)continue;let d=Math.min(A/2-Math.abs(s-r),A/2-Math.abs(l-a))<.04?1.5:1,f=1-.85*Math.exp(-(s*s+l*l)/.45);o(s,-1.9029999999999998,l,Fi(0,1,0,n?1:2),.95,.92,.82,(n?.5:.1)*d*Math.min(1,u*1.4)*f)}}for(;a<r;)o((i()-.5)*9,Vi+i()*5.4,(i()-.5)*6-.4,Fi(0,1,0,4),1,.94,.82,.05+.16*i()**3)},glsl:`
vec3 kn_n(float w, out float mat) {
  float v = floor(w + 0.5);
  mat = mod(v, 8.0); v = floor(v / 8.0);
  float a = mod(v, 64.0); v = floor(v / 64.0);
  float b = mod(v, 64.0); float c = floor(v / 64.0);
  return normalize(vec3(a, b, c) / 63.0 * 2.0 - 1.0);
}
float kn_ang(float t) { return 0.5 * sin(t * 0.35) + 0.1 * sin(t * 0.8 + 1.0); }
vec3 kn_rot(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(c * v.x + s * v.z, v.y, -s * v.x + c * v.z); }
vec3 anim_knight(vec3 p, vec4 d, vec4 r, float t) {
  float mat; kn_n(d.w, mat);
  if (mat < 0.5 || (mat > 2.5 && mat < 3.5)) p = kn_rot(p, kn_ang(t));
  else if (mat > 3.5) { p += vec3(sin(t * 0.3 + r.x * 30.0) * 0.12, 0.10 * t * (0.2 + r.y), cos(t * 0.27 + r.z * 30.0) * 0.12); p.y = -1.9 + mod(p.y + 1.9, 5.4); }
  return p;
}
float size_knight(vec4 d, vec4 r, float t) { float mat; kn_n(d.w, mat); return mat > 3.5 ? 0.7 : (mat > 0.5 && mat < 2.5 ? 0.9 : 1.0); }
vec4 color_knight(vec4 c, vec4 d, vec4 r, float t) {
  float mat; vec3 n = kn_n(d.w, mat);
  if (mat > 3.5) { c.a *= 0.6 + 0.4 * sin(t * 1.7 + r.w * 40.0); return c; }
  if (mat > 0.5 && mat < 2.5) return c;
  if (mat < 0.5 || mat > 2.5) n = kn_rot(n, kn_ang(t));
  vec3 L1 = normalize(vec3(-0.78, 0.50, 0.38));
  vec3 L2 = normalize(vec3(0.75, 0.25, -0.55));
  float dif = max(dot(n, L1), 0.0);
  float rim = pow(1.0 - max(n.z, 0.0), 2.2) * (0.5 + 0.5 * dot(n, L2));
  vec3 Hv = normalize(L1 + vec3(0.0, 0.0, 1.0));
  float sp = pow(max(dot(n, Hv), 0.0), 40.0);
  vec3 rgb = c.rgb * (0.09 + 1.25 * dif) + vec3(0.62, 0.78, 1.0) * rim * 0.6 + vec3(1.0, 0.95, 0.85) * sp * 0.8;
  return vec4(rgb, c.a);
}`,camera:{pos:[2.6,3.4,8.2],target:[0,-.4,0],fov:35},pointSize:2.9,drift:.002},Ui=o({default:()=>ma}),Wi=Math.PI*2,q=[.94,.95,.91],Gi=[.6,.8,1],Ki=[1,.66,.58],qi=[1,.82,.36],Ji=[.66,.46,.28],Yi=[.38,.5,.54],Xi=[.85,.45],Zi=[2.9,1.45],Qi=[1.3,-2],$i=[2.35,1.6],ea=[-1.75,-1.28],ta=[.3,-.2],na=[-.85,.8],ra=[`x′ = Ax`,`∂u/∂t = Δu`,`max U(x) s.t. p·x ≤ m`,`MC = MR`,`∇f(x) = 0`,`Ax = λx`],ia=-3.75,aa=[1.78,1.12,.46],oa=`"Times New Roman", Times, "STIX Two Text", serif`,sa=(e,t)=>{let n=e-ta[0],r=t-ta[1];return .3*(n*n+1.5*r*r)+.04*Math.sin(4.2*e+1)*Math.cos(3.6*t)},ca=.5,la=.866,ua=(e,t)=>{let n=sa(e,t),r=t*.95;return[ea[0]+e*1.7,ea[1]+n*ca-r*la,r*ca+n*la]},da=e=>[ta[0]+(na[0]-ta[0])*.72**e,ta[1]+(na[1]-ta[1])*.62**e],fa=1,pa=()=>{let e=window.__v3?.state?.();if(!e||typeof e.mix!=`number`)return 1;let t=Math.min(1,Math.max(0,e.mix));return Math.min(1,(e.a===`mathecon`?1-t:0)+(e.b===`mathecon`?t:0))},ma={id:`mathecon`,async build(e,t,n){let r=e.count,i=e.rand,a=r/262144,o=(1/a)**.8,s=e=>Math.max(1,Math.round(e*a)),c=0,l=(e,i,a,s,l,u)=>{c<r&&j.set(t,n,c++,e,i,a,s,l[0],l[1],l[2],u*o)},u=()=>(i()-.5)*.006,d=(e,t,n,r,a,o)=>{let c=s(t);for(let t=0;t<c;t++){let s=(t+i())/c,d=e(s);l(d[0]+u(),d[1]+u(),d[2]+u(),n+(o?o(s):i()*.98),typeof r==`function`?r(s):r,typeof a==`function`?a(s):a)}},f=(e,t,n,r,i,a,o=0)=>d(n=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,o],n,r,i,a),p=(e,t,n,r,a,o,c=.07)=>{let d=Math.hypot(t[0]-e[0],t[1]-e[1]),f=Math.max(2,Math.round(d/c)),p=Math.max(2,Math.round(s(n)/f/2));for(let n=0;n<f;n+=2)for(let s=0;s<p;s++){let s=(n+i())/f;l(e[0]+(t[0]-e[0])*s+u(),e[1]+(t[1]-e[1])*s+u(),u(),r+i()*.98,a,o)}},m=async(t,n,r,i)=>{let a=await e.textMask(t,{font:n,width:r,height:i,align:`left`}),o=r,s=0,c=i,l=0,u=0,d=a.data;for(let e=0;e<i;e++)for(let t=0;t<r;t++)d[(e*r+t)*4+3]>127&&(u++,t<o&&(o=t),t>s&&(s=t),e<c&&(c=e),e>l&&(l=e));return u||(o=0,s=r,c=0,l=i),{img:a,x0:o,x1:s+1,y0:c,y1:l+1,ink:u}},h=`italic 700 130px ${oa}`,g=`italic 700 110px ${oa}`,[_,v,y,b,x,S,C,w,T]=await Promise.all([Promise.all(ra.map(e=>m(e,h,1900,200))),m(`P`,g,160,170),m(`Q`,g,160,170),m(`S`,g,160,170),m(`D`,g,160,170),m(`x`,g,160,170),m(`y`,g,160,170),m(`U`,g,160,170),m(`θ ← θ − η∇L(θ)`,`italic 700 100px ${oa}`,1100,150)]),E=(e,t,n,r,a,o,c,d,f,p=0)=>{let m=(e.y0+e.y1)/2,h=e.x1-e.x0;for(let g of j.sampleMask(e.img,s(a),i)){let a=(g[0]-e.x0)/h;l(t+(g[0]-e.x0)*r+u()*.4,n+(m-g[1])*r+u()*.4,p+u()*.3,o+(f?f(Math.min(1,Math.max(0,a))):i()*.98),c,d)}},D=(e,t,n,r,i,a,o,s)=>{let c=r/(e.y1-e.y0),l=(e.x1-e.x0)*c;E(e,t-l/2,n,c,i,a,o,s)};{let e=_.reduce((e,t)=>e+t.ink,0);_.forEach((t,n)=>E(t,ia,aa[n%3],Math.min(.00378,4.1/Math.max(1,t.x1-t.x0)),25650*t.ink/e,20+n,q,1,e=>e*.98))}let O=(e,t,n=0)=>[Xi[0]+e*Zi[0],Xi[1]+t*Zi[1],n];f(O(0,0),O(0,1.1),330,2,q,.8),f(O(0,0),O(1.08,0),560,2,q,.8);for(let[e,t]of[[0,1.1],[1.08,0]]){let n=O(e,t);for(let t of[-1,1])f(n,e?[n[0]-.08,n[1]+.05*t]:[n[0]+.05*t,n[1]-.08],22,2,q,.8)}d(e=>O(.05+.92*e,.12+.7*(.05+.92*e)),1300,4,Gi,.55),d(e=>O(.04+.74*e,.95-.75*(.04+.74*e)),1300,5,Ki,.6),d(e=>O(.04+.74*e,.95-.75*(.04+.74*e)),500,6,Ki,.2),D(v,Xi[0]-.17,Xi[1]+Zi[1]*1.1+.05,.17,380,2,q,.9),D(y,Xi[0]+Zi[0]*1.08+.17,Xi[1]-.02,.17,380,2,q,.9),D(b,Xi[0]+Zi[0]*1+.1,Xi[1]+Zi[1]*.82+.02,.17,380,4,Gi,.95),D(x,Xi[0]+Zi[0]*.84+.12,Xi[1]+Zi[1]*.3+0,.17,380,5,Ki,.95);{let e=.83/1.45,t=.5206896551724138,n=O(e,t);for(let e=0,t=s(900);e<t;e++){let e=.055*Math.sqrt(i()),t=i()*Wi;l(n[0]+e*Math.cos(t),n[1]+e*Math.sin(t),.02,7+i()*.98,qi,.8)}for(let e=0,t=s(1100);e<t;e++){let e=.05+.3*i()**1.6,t=i()*Wi;l(n[0]+e*Math.cos(t),n[1]+e*Math.sin(t),0,7+i()*.98,qi,.07)}p(O(0,t),O(e,t),700,8,qi,.8),p(O(e,0),O(e,t),700,8,qi,.8)}{let e=(e,t)=>{let n=Math.min(1,sa(e,t)/1.1);return[.62+.38*n,.82+.06*n-.1*n*n,1-.45*n]};for(let t=0;t<21;t++){let n=-1+2*t/20,r=t===0||t===20;d(e=>{let t=-1+2*e;return ua(n,t)},r?720:520,10,t=>e(n,-1+2*t),e=>(.34+.28*(.5*(1+(-1+2*e))))*(r?1.3:1)),d(e=>ua(-1+2*e,n),r?720:520,10,t=>e(-1+2*t,n),()=>(.34+.28*(.5*(1+n)))*(r?1.3:1))}for(let t=0,n=s(8e3);t<n;t++){let t=i()*2-1,n=i()*2-1,r=ua(t,n),a=e(t,n);l(r[0],r[1],r[2],11+i()*.98,a,.07)}d(e=>{let t=da(e*13),n=ua(t[0],t[1]);return[n[0],n[1]+.02,n[2]+.02]},1500,12,qi,.9,e=>e*.98);for(let e=0;e<=13;e++){let t=da(e),n=ua(t[0],t[1]);for(let t=0,r=s(70);t<r;t++){let t=.032*Math.sqrt(i()),r=i()*Wi;l(n[0]+t*Math.cos(r),n[1]+.02+t*Math.sin(r),n[2]+.02,13+e/13*.98,[1,.94,.7],1)}}for(let e=0,t=s(650);e<t;e++){let e=i()*Wi,t=.048*Math.sqrt(i());l(Math.cos(e)*t,Math.sin(e)*t,(i()-.5)*.02,14+i()*.98,[1,.96,.8],.9)}for(let e=0,t=s(1400);e<t;e++)l(0,0,0,15+i()*.98,qi,.8);E(T,-3.8,-2.2,.003,1100,2,q,.8)}{let e=(e,t,n=0)=>[Qi[0]+e*$i[0],Qi[1]+t*$i[1],n];f(e(0,0),e(0,1.08),300,2,q,.8),f(e(0,0),e(1.08,0),460,2,q,.8);for(let[t,n]of[[0,1.08],[1.08,0]]){let r=e(t,n);for(let e of[-1,1])f(r,t?[r[0]-.08,r[1]+.05*e]:[r[0]+.05*e,r[1]-.08],22,2,q,.8)}let t=.9,n=.85;d(r=>{let i=r;return e(i*t,(1-i)*n)},1100,16,Gi,.55);let r=(t,n,r,i,a)=>{let o=t/1.3;d(n=>{let r=o*Math.exp(n*Math.log(1.3/o));return e(r,t/r)},n,r,i,e=>{let n=o*Math.exp(e*Math.log(1.3/o)),r=t/n;return n>.98||r>.98?0:a})};r(.19125,1100,17,Ki,.6),r(.06,700,18,q,.28),r(.3,700,18,q,.28);let a=e(t/2,n/2);for(let e=0,t=s(700);e<t;e++){let e=.05*Math.sqrt(i()),t=i()*Wi;l(a[0]+e*Math.cos(t),a[1]+e*Math.sin(t),.02,19+i()*.98,qi,1)}for(let e=0,t=s(800);e<t;e++){let e=.05+.28*i()**1.6,t=i()*Wi;l(a[0]+e*Math.cos(t),a[1]+e*Math.sin(t),0,19+i()*.98,qi,.07)}D(S,Qi[0]+$i[0]*1.08+.17,Qi[1]-.02,.15,300,2,q,.9),D(C,Qi[0]-.17,Qi[1]+$i[1]*1.08+.05,.15,300,2,q,.9),D(w,Qi[0]+$i[0]*.76,Qi[1]+$i[1]*.3,.15,300,18,Ki,.7)}let k=4.1,A=2.4;for(let[e,t]of[[0,.9],[.045,.65],[.09,.4]])f([-4.1-e,-2.4-e],[k+e,-2.4-e],1500,1,Ji,t,.08),f([-4.1-e,A+e],[k+e,A+e],1500,1,Ji,t,.08),f([-4.1-e,-2.4-e],[-4.1-e,A+e],860,1,Ji,t,.08),f([k+e,-2.4-e],[k+e,A+e],860,1,Ji,t,.08);f([-3.9,-2.55],[3.9,-2.55],600,1,Ji,.9,.18),f([-3.9,-2.62],[3.9,-2.62],600,1,Ji,.6,.18);for(let[e,t]of[[-2.6,q],[-2.3,qi],[-2.05,Ki]])f([e,-2.5],[e+.2,-2.46],60,2,t,.95,.2),f([e,-2.47],[e+.2,-2.43],60,2,t,.95,.2);for(let e of[-2.5,-2.43])f([2.55,e],[3,e],70,2,q,.5,.2);f([2.55,-2.5],[2.55,-2.43],20,2,q,.5,.2),f([3,-2.5],[3,-2.43],20,2,q,.5,.2),p([.35,-2.2],[.35,2.25],500,2,q,.22,.09),p([-4,.02],[4,.02],700,2,q,.22,.09);let M=Math.min(Math.max(s(7e4),1),r-c-s(12e3));for(let e=0;e<M;e++)l((i()*2-1)*k,(i()*2-1)*A,-.05-i()*.04,0+i()*.98,Yi,.125+.07*i());let N=c;for(let e=N,t=Math.min(r,N+s(12e3));e<t;e++)l((i()*2-1)*4.6,(i()*2-1)*2.9,.1+i()*.5,30+i()*.98,q,.1+.2*i());j.dust(t,n,c,r,i,6.5,.04*o,[.7,.78,.8]);for(let e=c;e<r;e++)t[e*4+3]=30.5},glsl:`
uniform float u_mathecon_pres;
const vec2 MH_O1 = vec2(0.85, 0.45);
const vec2 MH_K1 = vec2(2.9, 1.45);
const vec2 MH_O2 = vec2(1.3, -2.0);
const vec2 MH_K2 = vec2(2.35, 1.6);
const vec2 MH_C3 = vec2(-1.75, -1.28);
const vec2 MH_UM = vec2(0.3, -0.2);
const vec2 MH_U0 = vec2(-0.85, 0.8);
float mh_e(float t) { float m = mod(t, 12.0); return smoothstep(2.0, 4.2, m) - smoothstep(7.0, 9.2, m); }
vec2 mh_eq(float t) { float sq = 0.24 * mh_e(t); float q = (0.83 + 0.75 * sq) / 1.45; return vec2(q, 0.12 + 0.7 * q); }
float mh_x1(float t) { return 0.9 / (1.0 + 0.8 * mh_e(t + 6.0)); }
float mh_h(vec2 uv) { vec2 a = uv - MH_UM; return 0.3 * (a.x * a.x + 1.5 * a.y * a.y) + 0.04 * sin(4.2 * uv.x + 1.0) * cos(3.6 * uv.y); }
vec3 mh_surf(vec2 uv) { float h = mh_h(uv), z = uv.y * 0.95; return vec3(MH_C3.x + uv.x * 1.7, MH_C3.y + h * 0.5 - z * 0.866, z * 0.5 + h * 0.866); }
vec2 mh_gd(float k) { return MH_UM + (MH_U0 - MH_UM) * vec2(pow(0.72, k), pow(0.62, k)); }
float mh_tau(float t) { return mod(t, 17.0); }
float mh_kb(float t) { return clamp((mh_tau(t) - 1.0) / 0.75, 0.0, 13.0); }
float mh_vis(float t) { float tau = mh_tau(t); return smoothstep(0.0, 0.8, tau) * (1.0 - smoothstep(15.0, 16.5, tau)); }
float mh_lt(float e, float t) { return mod(t - e * 2.4, 14.4); }
vec3 anim_mathecon(vec3 p, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl > 19.5 && cl < 25.5) {                                   // equations dissolve like chalk dust
    float lt = mh_lt(cl - 20.0, t);
    float dl = clamp((lt - 6.0 - r.x * 0.5) / 0.75, 0.0, 1.0);
    p.y -= dl * dl * (0.25 + 0.5 * r.y); p.x += (r.z - 0.5) * 0.35 * dl; p.z += (r.w - 0.5) * 0.3 * dl;
    return p;
  }
  if (cl > 4.5 && cl < 5.5) { p.x += 0.24 * mh_e(t) * MH_K1.x; return p; }
  if (cl > 6.5 && cl < 7.5) { p.xy += (mh_eq(t) - mh_eq(0.0)) * MH_K1; return p; }
  if (cl > 7.5 && cl < 8.5) { p.xy = MH_O1 + (p.xy - MH_O1) * (mh_eq(t) / mh_eq(0.0)); return p; }
  if (cl > 13.5 && cl < 15.5) {                                   // ball and trail ride the surface
    float kb = mh_kb(t);
    if (cl < 14.5) { vec3 b = mh_surf(mh_gd(kb)); return b + vec3(0.0, 0.06, 0.06) + p; }
    float kk = max(kb - r.x * r.x * 2.4, 0.0);
    return mh_surf(mh_gd(kk)) + vec3(0.0, 0.03, 0.03) + (r.yzw - 0.5) * 0.03;
  }
  if (cl > 15.5 && cl < 16.5) { p.x = MH_O2.x + (p.x - MH_O2.x) * mh_x1(t) / 0.9; return p; }
  if (cl > 16.5 && cl < 17.5) { p.xy = MH_O2 + (p.xy - MH_O2) * sqrt(mh_x1(t) / 0.9); return p; }
  if (cl > 18.5 && cl < 19.5) { p.x += (mh_x1(t) - 0.9) * 0.5 * MH_K2.x; return p; }
  if (cl > 29.5) { float k = 0.1 + 0.12 * r.y; p.y = mod(p.y + 2.9 - t * k, 5.8) - 2.9; p.x += 0.2 * sin(t * 0.4 + r.x * 6.283); return p; }
  return p;
}
float size_mathecon(vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl > 13.5 && cl < 14.5) return 1.6;
  if (cl > 14.5 && cl < 15.5) return 1.2;
  if (cl > 29.5) return 0.8;
  if (cl < 0.5) return 0.9;
  return 1.0;
}
vec4 color_mathecon(vec4 c, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001), ph = fract(d.w) / 0.98;
  float a = c.a; vec3 rgb = c.rgb;
  float P = u_mathecon_pres;
  // v15: the supply-demand drawing writes itself on (axes -> supply -> demand -> the dot and its guides), a chalk tip leading each curve
  if (cl > 3.5 && cl < 6.5) {
    float q = (d.x - MH_O1.x) / MH_K1.x;
    float s = cl < 4.5 ? (q - 0.05) / 0.92 : (q - 0.04) / 0.74;
    float head = (cl < 4.5 ? smoothstep(0.48, 0.84, P) : cl < 5.5 ? smoothstep(0.6, 0.93, P) : smoothstep(0.82, 1.0, P)) * 1.08;
    float tip = exp(-pow((s - head) / 0.035, 2.0)) * step(head, 1.04) * step(0.001, head);
    a *= step(s, head) * (1.0 + 1.6 * tip);
    rgb = mix(rgb, vec3(1.0, 0.9, 0.62), clamp(tip, 0.0, 1.0));
  } else if (cl > 6.5 && cl < 8.5) {
    a *= smoothstep(0.9, 1.0, P);
  } else if (cl > 1.5 && cl < 2.5 && d.x > MH_O1.x - 0.3 && d.y > MH_O1.y - 0.12 && d.x < MH_O1.x + MH_K1.x * 1.1 + 0.35 && d.y < MH_O1.y + MH_K1.y * 1.2) {
    a *= smoothstep(0.3, 0.55, P);                                // the axes and their labels come first
  }
  if (cl > 19.5 && cl < 25.5) {                                   // write in with a chalk tip, hold, dissolve
    float lt = mh_lt(cl - 20.0, t);
    float head = lt / 1.7;
    float dl = clamp((lt - 6.0 - r.x * 0.5) / 0.75, 0.0, 1.0);
    float vis = step(ph, head) * (1.0 - dl);
    float tip = exp(-pow((ph - head) / 0.025, 2.0)) * step(head, 1.04);
    a *= vis * (1.0 + 1.8 * tip) * (0.92 + 0.08 * sin(t * 1.3 + r.x * 40.0));
    rgb = mix(rgb, vec3(1.0, 0.86, 0.45), clamp(tip, 0.0, 1.0));
  } else if (cl > 4.5 && cl < 5.5) {
    float sq = 0.24 * mh_e(t); float lq = (d.x - MH_O1.x) / MH_K1.x + sq; a *= 1.0 - smoothstep(1.0, 1.06, lq);
  } else if (cl > 6.5 && cl < 7.5) {
    a *= 1.0 + 0.5 * sin(t * 2.4);
  } else if (cl > 7.5 && cl < 8.5) {
    a *= 0.7 + 0.3 * sin(t * 2.0 + d.x * 26.0 + d.y * 26.0);
  } else if (cl > 11.5 && cl < 12.5) {                            // the descent path lights up as the ball passes
    float kb = mh_kb(t), kp = ph * 13.0, vs = mh_vis(t);
    a *= 0.22 + 1.5 * step(kp, kb + 0.05) * vs;
  } else if (cl > 12.5 && cl < 13.5) {
    float kb = mh_kb(t), kp = ph * 13.0, vs = mh_vis(t);
    a *= 0.12 + 1.6 * step(kp, kb + 0.05) * vs;
  } else if (cl > 13.5 && cl < 14.5) {
    a *= mh_vis(t);
  } else if (cl > 14.5 && cl < 15.5) {
    float kb = mh_kb(t); float lag = r.x * r.x * 2.4; a *= mh_vis(t) * (1.0 - lag / 2.4) * step(lag, kb + 0.01) * (0.6 + 0.4 * smoothstep(0.0, 0.3, kb));
  } else if (cl > 16.5 && cl < 17.5) {
    float s = sqrt(mh_x1(t) / 0.9); vec2 lo = (d.xy - MH_O2) / MH_K2 * s; a *= (1.0 - smoothstep(0.96, 1.0, lo.y)) * (1.0 - smoothstep(0.96, 1.0, lo.x));
  } else if (cl > 18.5 && cl < 19.5) {
    a *= 1.0 + 0.5 * sin(t * 2.4 + 1.0);
  } else if (cl > 9.5 && cl < 11.5) {
    a *= 0.9 + 0.1 * sin(t * 0.9 + d.x * 3.0);
  } else if (cl > 29.5) {
    a *= 0.35 + 0.65 * (0.5 + 0.5 * sin(t * (0.5 + r.y * 1.5) + r.x * 60.0));
  } else if (cl < 0.5) {
    a *= 0.75 + 0.25 * sin(t * (0.3 + r.x) + r.y * 60.0);
  }
  return vec4(rgb, a);
}`,camera:{pos:[0,0,9.7],target:[0,0,0],fov:35},pointSize:2,style:{gain:1.25,size:1.1},uniforms:{u_mathecon_pres:{value:1}},update(){fa=pa(),ma.uniforms.u_mathecon_pres.value=fa},drift:.002},ha=o({default:()=>xa});function ga(e,t,n,r){let i=document.createElement(`canvas`);i.width=t,i.height=n;let a=i.getContext(`2d`,{willReadFrequently:!0});a.fillStyle=`#fff`,e(a);let o=a.getImageData(0,0,t,n).data,s=new Float32Array(t*n);for(let e=0;e<s.length;e++)s[e]=o[e*4+3]/255;let c=new Float32Array(s.length);for(let e=0;e<2;e++){for(let e=0;e<n;e++){let n=0,i=e*t;for(let e=-r;e<=r;e++)n+=s[i+Math.min(t-1,Math.max(0,e))];for(let e=0;e<t;e++)c[i+e]=n/(2*r+1),n+=s[i+Math.min(t-1,e+r+1)]-s[i+Math.max(0,e-r)]}for(let e=0;e<t;e++){let i=0;for(let a=-r;a<=r;a++)i+=c[Math.min(n-1,Math.max(0,a))*t+e];for(let a=0;a<n;a++)s[a*t+e]=i/(2*r+1),i+=c[Math.min(n-1,a+r+1)*t+e]-c[Math.max(0,a-r)*t+e]}}let l=new Uint8Array(s.length);for(let e=0;e<s.length;e++)l[e]=+(s[e]>.5);let u=new Float32Array(s.length);for(let e=0;e<u.length;e++)u[e]=l[e]?1e6:0;let d=Math.SQRT2;for(let e=0;e<n;e++)for(let n=0;n<t;n++){let r=e*t+n;if(!l[r])continue;let i=u[r];i=n===0||e===0?Math.min(i,1):Math.min(i,u[r-1]+1,u[r-t]+1,u[r-t-1]+d,u[r-t+1<r?r-t+1:r]+d),u[r]=i}for(let e=n-1;e>=0;e--)for(let r=t-1;r>=0;r--){let i=e*t+r;if(!l[i])continue;let a=u[i];a=r===t-1||e===n-1?Math.min(a,1):Math.min(a,u[i+1]+1,u[i+t]+1,u[i+t+1]+d,u[i+t-1]+d),u[i]=a}let f=new Float32Array(u.length);for(let e=1;e<n-1;e++)for(let n=1;n<t-1;n++){let r=e*t+n;f[r]=l[r]?(u[r]*4+u[r-1]+u[r+1]+u[r-t]+u[r+t])/8:0}return{W:t,Hh:n,depth:f,inside:l,blur:s}}var _a=(e,t,n,r)=>{let i=Math.hypot(e,t,n)||1,a=e=>Math.max(0,Math.min(63,Math.round((e/i*.5+.5)*63)));return r+8*(a(e)+64*(a(t)+64*a(n)))},va=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},ya=e=>{e.beginPath(),e.arc(200,94,62,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(146,140),e.bezierCurveTo(116,148,78,156,50,172),e.bezierCurveTo(14,190,4,228,24,250),e.bezierCurveTo(42,268,80,266,112,262),e.bezierCurveTo(116,300,90,352,58,398),e.bezierCurveTo(40,424,46,464,84,466),e.lineTo(156,466),e.bezierCurveTo(176,466,178,446,176,424),e.bezierCurveTo(176,384,182,346,200,334),e.bezierCurveTo(218,346,224,384,224,424),e.bezierCurveTo(222,446,224,466,244,466),e.lineTo(316,466),e.bezierCurveTo(354,464,360,424,342,398),e.bezierCurveTo(310,352,284,300,288,262),e.bezierCurveTo(320,266,358,268,376,250),e.bezierCurveTo(396,228,386,190,350,172),e.bezierCurveTo(322,156,284,148,254,140),e.closePath(),e.fill()},ba=-1.5,xa={id:`meeple`,build(e,t,n){let r=e.count,i=e.rand,a=0,o=(e,i,o,s,c,l,u,d)=>{a<r&&j.set(t,n,a++,e,i,o,s,c,l,u,d)},s=ga(ya,400,480,5),c=3.05/470,l=.18,{W:u,Hh:d,depth:f,inside:p}=s,m=e=>e>=l?.4:.22000000000000003+Math.sqrt(Math.max(0,l*l-(l-e)*(l-e))),h=e=>e>=l?0:Math.min(4,(l-e)/Math.max(1e-4,Math.sqrt(Math.max(0,l*l-(l-e)*(l-e))))),g=[],_=[],v=0,y=0;for(let e=0;e<u*d;e++){if(!p[e]||f[e]<.5)continue;let t=f[e]*c;v+=Math.sqrt(1+h(t)*h(t)),g.push(e),_.push(v),f[e]<1.6&&y++}let b=Math.floor(r*.46),x=2*v*c*c,S=y/1.1*c*c*2*.22000000000000003,C=Math.floor(b*S/(S+x)),w=b-C,T=(e,t)=>{let n=Math.min(u-2,Math.max(1,Math.round(e))),r=Math.min(d-2,Math.max(1,Math.round(t)))*u+n;return[(f[r+1]-f[r-1])*.5,(f[r+u]-f[r-u])*.5]},E=(e,t)=>.74+.26*Math.sin((e*2.3+.8*Math.sin(t*3.1+e*.7)+t*.15)*14)+.06*va(Math.floor(e*90),Math.floor(t*90)),D=[1,.74,.44],O=w/(2*v);for(let e=0;e<g.length;e++){let t=g[e],n=e?_[e]-_[e-1]:_[0],r=f[t],a=r*c,s=h(a),l=t%u,d=Math.floor(t/u);for(let e=1;e>=-1;e-=2){let t=Math.floor(O*n*(e>0?1.45:.3)+i());for(let n=0;n<t;n++){let t=l+i(),n=d+i(),[u,f]=T(t,n),p=(t-200)*c,h=(470-n)*c+ba,g=E(p,h),_=.78+.22*Math.min(1,r/14);o(p,h,e*m(a),_a(-s*u,s*f,e,0),D[0]*g,D[1]*g,D[2]*g,.55*_)}}}let k=[];for(let e of g)f[e]<1.6&&k.push(e);let A=C/k.length;for(let e of k){let t=Math.floor(A+i());for(let n=0;n<t;n++){let t=e%u+i(),n=Math.floor(e/u)+i(),[r,a]=T(t,n),s=Math.hypot(r,a)||1,l=(i()*2-1)*.22000000000000003,d=(t-200)*c,f=(470-n)*c+ba,p=E(d,f)*.9;o(d,f,l,_a(-r/s,a/s,0,0),D[0]*p,D[1]*p,D[2]*p,.5)}}let M=[[[0,0]],[[-1,-1],[1,1]],[[-1,-1],[0,0],[1,1]],[[-1,-1],[1,-1],[-1,1],[1,1]],[[-1,-1],[1,-1],[0,0],[-1,1],[1,1]],[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]]],N=[[[1,0,0],[0,0,-1],[0,1,0],3],[[-1,0,0],[0,0,1],[0,1,0],4],[[0,1,0],[1,0,0],[0,0,1],6],[[0,0,1],[1,0,0],[0,1,0],2],[[0,0,-1],[-1,0,0],[0,1,0],5]],P=(e,t,n,r,a)=>{let s=n/2,c=n*.13,l=ba+s,u=Math.cos(r),d=Math.sin(r),f=Math.ceil(n/a);for(let n of N){let r=n[0][0]*u+n[0][2]*d,a=-n[0][0]*d+n[0][2]*u;if(!(r*.27+n[0][1]*.15+a*.95<.02))for(let r=0;r<f;r++)for(let a=0;a<f;a++){let p=(r+.5+(i()-.5)*.9)/f*2-1,m=(a+.5+(i()-.5)*.9)/f*2-1,h=(n[0][0]+n[1][0]*p+n[2][0]*m)*s,g=(n[0][1]+n[1][1]*p+n[2][1]*m)*s,_=(n[0][2]+n[1][2]*p+n[2][2]*m)*s,v=n[0][0],y=n[0][1],b=n[0][2],x=Math.max(-(s-c),Math.min(s-c,h)),S=Math.max(-(s-c),Math.min(s-c,g)),C=Math.max(-(s-c),Math.min(s-c,_)),w=h-x,T=g-S,E=_-C,D=Math.hypot(w,T,E),O=1,k=Math.abs(p)<=1-c/s&&Math.abs(m)<=1-c/s;if(D>1e-6&&(v=w/D,y=T/D,b=E/D,h=x+v*c,g=S+y*c,_=C+b*c,k||(O=1.15)),k)for(let e of M[n[3]-1]){let t=Math.hypot(p-e[0]*.5,m-e[1]*.5);t<.15?O=.05:t<.2&&(O=1.45)}let A=h*u+_*d,j=-h*d+_*u,N=v*u+b*d,P=-v*d+b*u;o(e+A,l+g,t+j,_a(N,y,P,1),.95*O,.93*O,.86*O,.62*Math.min(1.25,O*.85+.15))}}};P(-1.95,1.05,.72,.55,.0125),P(1.75,1.5,.62,-.4,.0125),P(-1,1.8,.46,1.1,.0125);let F=.95,I=1.32,L=.12,R=(e,t,n,r)=>{let[i,a,o]=e,s=i*Math.cos(r)-a*Math.sin(r),c=i*Math.sin(r)+a*Math.cos(r);i=s,a=c;let l=a*Math.cos(t)-o*Math.sin(t),u=a*Math.sin(t)+o*Math.cos(t);a=l,o=u;let d=i*Math.cos(n)+o*Math.sin(n),f=-i*Math.sin(n)+o*Math.cos(n);return i=d,o=f,[i,a,o]},z=(e,t,n,r,a,s,c,l,u,d)=>{let f=Math.ceil(F/l),p=Math.ceil(I/l);for(let l=0;l<f;l++)for(let m=0;m<p;m++){let h=((l+.5+(i()-.5)*.9)/f-.5)*F,g=((m+.5+(i()-.5)*.9)/p-.5)*I,_=Math.max(0,Math.abs(h)-(F/2-L)),v=Math.max(0,Math.abs(g)-(I/2-L));if(_*_+v*v>L*L)continue;let y=Math.min(F/2-Math.abs(h),I/2-Math.abs(g)),b=y<.035?1.35:y<.075?.18:.55;y>=.075&&(b=.25+.9*(Math.abs(Math.sin((h+g)*20))*Math.abs(Math.sin((h-g)*20))));let x=R([h+c[0],g+c[1],u],r,a,s),S=R([0,0,1],r,a,s);o(e+x[0],t+x[1],n+x[2],_a(S[0],S[1],S[2],2),.93*b*d,.9*b*d,.82*b*d,.55)}};for(let e=0;e<3;e++){let t=(e-1)*.26;z(1.95,ba,-1.35+e*.02,-.1,-.35,t,[0,I/2],.0135,0,.85+.08*e)}let B=2.55,ee=.55;z(B,-1.39,ee,-Math.PI/2,.35,0,[0,0],.0125,0,1);for(let e=0;e<9;e++){let t=-1.49+e*.0115,n=.35+(i()-.5)*.05;for(let e=0;e<4;e++){let r=e%2?I:F,a=Math.floor(r/.0125);for(let r=0;r<a;r++){let s=(r+i())/a-.5,c=e%2?e===1?F/2:-.95/2:s*F,l=e%2?s*I:e===0?I/2:-1.32/2,u=Math.max(0,Math.abs(c)-(F/2-L)),d=Math.max(0,Math.abs(l)-(I/2-L));if(u*u+d*d>L*L*1.4)continue;let f=c,p=l,m=f*Math.cos(n)+p*Math.sin(n),h=-f*Math.sin(n)+p*Math.cos(n),g=e%2?e===1?1:-1:0,_=e%2?0:e===0?1:-1;o(B+m,t+i()*.0115,ee+h,_a(g*Math.cos(n)+_*Math.sin(n),0,-g*Math.sin(n)+_*Math.cos(n),2),.95,.93,.86,.5)}}}let V=Math.floor(r*.1);for(let e=0;e<V;e++){let e=4.4*Math.sqrt(i()),t=i()*Math.PI*2,n=Math.cos(t)*e,r=Math.sin(t)*e*.8+.2,a=Math.exp(-(e*e)/8.5),s=1-.8*Math.exp(-(n*n/1.4+(r+.1)*(r+.1)/.5)),c=.35+.65*Math.abs(Math.sin(e*11))**10;o(n,-1.504,r,_a(0,1,0,3),.95,.9,.78,.5*a*s*c)}for(;a<r;)o((i()-.5)*8,ba+i()*4.2,(i()-.5)*5-.5,_a(0,1,0,4),1,.93,.8,.05+.18*i()**3)},glsl:`
vec3 mpl_n(float w, out float mat) {
  float v = floor(w + 0.5);
  mat = mod(v, 8.0); v = floor(v / 8.0);
  float a = mod(v, 64.0); v = floor(v / 64.0);
  float b = mod(v, 64.0); float c = floor(v / 64.0);
  return normalize(vec3(a, b, c) / 63.0 * 2.0 - 1.0);
}
float mpl_ang(float t) { return 0.62 * sin(t * 0.42) + 0.12 * sin(t * 0.9 + 1.0); }
vec3 mpl_rot(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(c * v.x + s * v.z, v.y, -s * v.x + c * v.z); }
vec3 anim_meeple(vec3 p, vec4 d, vec4 r, float t) {
  float mat; vec3 n = mpl_n(d.w, mat);
  if (mat < 0.5) { p = mpl_rot(p - vec3(0.0, 0.0, 0.0), mpl_ang(t)); p.y += 0.02 * sin(t * 1.3); }
  else if (mat > 3.5) { p += vec3(sin(t * 0.3 + r.x * 30.0) * 0.12, 0.10 * t * (0.2 + r.y) , cos(t * 0.27 + r.z * 30.0) * 0.12); p.y = -1.5 + mod(p.y + 1.5, 4.2); }
  return p;
}
float size_meeple(vec4 d, vec4 r, float t) { float mat; mpl_n(d.w, mat); return mat > 3.5 ? 0.7 : (mat > 2.5 ? 0.9 : 1.0); }
vec4 color_meeple(vec4 c, vec4 d, vec4 r, float t) {
  float mat; vec3 n = mpl_n(d.w, mat);
  if (mat > 2.5) { if (mat > 3.5) c.a *= 0.6 + 0.4 * sin(t * 1.7 + r.w * 40.0); return c; }
  if (mat < 0.5) n = mpl_rot(n, mpl_ang(t));
  vec3 L1 = normalize(vec3(-0.78, 0.50, 0.38));
  vec3 L2 = normalize(vec3(0.75, 0.25, -0.55));
  float dif = max(dot(n, L1), 0.0);
  float rim = pow(1.0 - max(n.z, 0.0), 2.2) * (0.5 + 0.5 * dot(n, L2));
  vec3 Hv = normalize(L1 + vec3(0.0, 0.0, 1.0));
  float sp = pow(max(dot(n, Hv), 0.0), 36.0);
  vec3 rgb = c.rgb * (0.10 + 1.25 * dif) + vec3(0.62, 0.78, 1.0) * rim * 0.55 + vec3(1.0, 0.95, 0.85) * sp * 0.9;
  return vec4(rgb, c.a);
}`,camera:{pos:[2.4,1.3,8.4],target:[0,-.1,0],fov:35},pointSize:2.5,drift:.002},Sa=o({default:()=>Aa}),Ca=`900 340px "Bodoni Moda Variable", "Bodoni 72", Didot, serif`,wa=2800,Ta=520,Ea=7.5,Da=.8,Oa=1;function ka(e){let{width:t,height:n,data:r}=e,i=new Uint8Array(t*n),a=new Uint8Array(t*n),o=new Uint8Array(t*n);for(let e=0;e<t*n;e++)i[e]=+(r[e*4+3]>40);for(let e=0;e<n;e++)for(let n=Oa;n<t-Oa;n++){let r=0;for(let a=-1;a<=Oa;a++)r|=i[e*t+n+a];a[e*t+n]=r}for(let e=Oa;e<n-Oa;e++)for(let n=0;n<t;n++){let r=0;for(let i=-1;i<=Oa;i++)r|=a[(e+i)*t+n];o[e*t+n]=r}let s=t,c=0,l=n,u=0;for(let e=0;e<n;e++)for(let n=0;n<t;n++)o[e*t+n]&&(n<s&&(s=n),n>c&&(c=n),e<l&&(l=e),e>u&&(u=e));let d=(e,r)=>{let i=new Uint8Array(t*n);for(let a=r;a<n-r;a++)for(let n=r;n<t-r;n++){let o=a*t+n;e[o]&&e[o-r]&&e[o+r]&&e[o-r*t]&&e[o+r*t]&&(i[o]=1)}return i},f=d(o,1),p=d(o,3),m=new Uint8Array(t*n),h=[],g=[];for(let e=0;e<t*n;e++)o[e]&&(g.push(e),p[e]||(m[e]=1),f[e]||h.push(e));return{ink:o,rim:m,edge:h,ink0:g,x0:s,x1:c,y0:l,y1:u}}var Aa={id:`name`,async build(e,t,n){let r=e.count,i=e.rand;Aa.pointSize=1.9*Math.min(1.55,(262144/r)**.35);let[a,o]=await Promise.all([e.textMask(`JOSEPH`,{font:Ca,width:wa,height:Ta}),e.textMask(`BLUMBERG`,{font:Ca,width:wa,height:Ta})]),s=ka(a),c=ka(o),l=Ea/Math.max(1,c.x1-c.x0),u=(s.y1-s.y0)*l,d=(c.y1-c.y0)*l,f=.3*Math.max(u,d),p=(u+f+d)/2,m=(e,t)=>{let n=(e.x0+e.x1)/2,r=t?p:p-u-f,i=t?u:d;return(t,a)=>[(t-n)*l,r-(a-e.y0)*l-0*i]},h=m(s,!0),g=m(c,!1),_=Math.floor(r*.5),v=Math.floor(r*.1),y=Math.floor(r*.13),b=Math.floor(r*.05),x=Math.floor(r*.07),S=Math.floor(r*.07),C=s.ink0.length,w=c.ink0.length,T=C+w,E=0,D=(e,t,n)=>(e?g:h)(t,n),O=e=>e?c:s;for(let e=0;e<2;e++){let r=O(e),a=Math.round(_*(e?w:C)/T),o=r.x1-r.x0+1,s=r.y1-r.y0+1,c=Math.sqrt(o*s/(a/((e?w:C)/(o*s))*1)),l=0,u=1+e*1000003;for(;l<a&&u<a*40;){let a=(.5+u*.7548776662466927)%1,d=(.5+u*.5698402909980532)%1;u++;let f=r.x0+a*o+(i()-.5)*c*.6,p=r.y0+d*s+(i()-.5)*c*.6,m=f|0,h=p|0;if(m<0||h<0||m>=wa||h>=Ta)continue;let g=h*wa+m;if(!r.ink[g])continue;l++;let[_,v]=D(e,f,p),y=r.rim[g],b=1-(p-r.y0)/s,x=(.82+.18*b)*(.92+.08*i());j.set(t,n,E++,_,v,Da/2+(i()-.5)*.01,0,.95*x,.91*x,.83*x,y?.9:.3+.1*b)}for(;l<a;){let a=r.ink0[Math.floor(i()*r.ink0.length)],[o,s]=D(e,a%wa+i(),Math.floor(a/wa)+i());j.set(t,n,E++,o,s,Da/2,0,.9,.86,.78,.5),l++}}for(let e=0;e<2;e++){let r=O(e),a=Math.round(v*(e?w:C)/T),o=r.edge.length/a;for(let s=0;s<a;s++){let a=r.edge[Math.min(r.edge.length-1,Math.floor((s+i())*o))],[c,l]=D(e,a%wa+i(),Math.floor(a/wa)+i());j.set(t,n,E++,c,l,.405,.2,1,.96,.88,1)}}for(let e=0;e<2;e++){let r=O(e),a=Math.round(y*(e?w:C)/T),o=r.edge.length/a;for(let s=0;s<a;s++){let a=r.edge[Math.min(r.edge.length-1,Math.floor((s+i())*o))],[c,l]=D(e,a%wa+i(),Math.floor(a/wa)+i()),u=i(),d=Da/2-u*Da,f=.78-.5*u;j.set(t,n,E++,c,l,d,1,1*f+.06,.66*f+.06,.34*f+.06,.42*(1-.45*u))}}for(let e=0;e<b;e++){let e=i()*T<C?0:1,r=O(e),a=r.ink0[Math.floor(i()*r.ink0.length)],[o,s]=D(e,a%wa+i(),Math.floor(a/wa)+i());j.set(t,n,E++,o,s,-.8/2,2,.5,.46,.4,.2)}for(let e=0;e<x;e++){let e=i()*T<C?0:1,r=O(e),a=r.ink0[Math.floor(i()*r.ink0.length)],[o,s]=D(e,a%wa+i(),Math.floor(a/wa)+i()),c=i()*6.2832,l=.03+.28*i()**1.6;j.set(t,n,E++,o+Math.cos(c)*l,s+Math.sin(c)*l,(i()-.5)*Da,3,.9,.82,.68,.05+.06*(1-l/.31))}for(let e=0;e<S;e++){let e=i()*6.2832,r=Math.sqrt(i());j.set(t,n,E++,Math.cos(e)*r*6.2,Math.sin(e)*r*2.3,(i()-.5)*3.4,4,1,.9,.72,.08+.5*i()*i())}j.dust(t,n,E,r,i,7.5,.06,[.9,.86,.78]);for(let e=E;e<r;e++)t[e*4+3]=5},glsl:`
vec3 anim_name(vec3 p, vec4 d, vec4 r, float t) {
  float k = d.w;
  if (k < 2.5) {
    // the word breathes: a slow travelling ripple in depth, plus a fine shimmer on the surface
    p.z += 0.07 * sin(p.x * 1.5 + p.y * 0.9 - t * 0.85) * (k < 1.5 ? 1.0 : 0.6);
    p.xy += 0.0055 * vec2(sin(t * 2.9 + r.x * 60.0), cos(t * 2.4 + r.y * 60.0));
    p.y += 0.02 * sin(p.x * 2.2 - t * 0.6);
    // sparks: a few particles lift off the letters and fall back (the form dissolves a little at its edges)
    float lift = pow(0.5 + 0.5 * sin(t * 0.8 + r.x * 53.0 + r.z * 7.0), 22.0) * step(0.78, r.y);
    p += lift * vec3((r.z - 0.5) * 0.5, 0.15 + r.w * 0.5, (r.x - 0.5) * 0.9);
    // a slow yaw sway so the extrusion and the side walls show
    float a = 0.3 * sin(t * 0.23);
    float ca = cos(a), sa = sin(a);
    p.xz = vec2(ca * p.x + sa * p.z, -sa * p.x + ca * p.z);
  } else if (k < 3.5) {
    p.xy += 0.05 * vec2(sin(t * 0.8 + r.x * 30.0), cos(t * 0.7 + r.y * 30.0));
  } else if (k < 4.5) {
    // motes rise and drift, wrapping vertically
    float sp = 0.03 + 0.07 * r.z;
    p.y = mod(p.y + 2.6 + t * sp, 5.2) - 2.6;
    p.x += 0.35 * sin(t * 0.3 + r.x * 20.0); p.z += 0.4 * sin(t * 0.22 + r.y * 20.0);
  } else {
    p.xy += 0.15 * vec2(sin(t * 0.2 + r.x * 25.0), cos(t * 0.17 + r.y * 25.0));
  }
  return p;
}
float size_name(vec4 d, vec4 r, float t) {
  float k = d.w;
  if (k < 0.1) return 1.55;
  if (k < 0.5) return 0.95;
  if (k < 1.5) return 0.85;
  if (k < 2.5) return 0.8;
  if (k < 3.5) return 3.4;
  if (k < 4.5) return 0.8 + 1.4 * r.w;
  return 0.8;
}
vec4 color_name(vec4 c, vec4 d, vec4 r, float t) {
  float k = d.w;
  // a slanted band of light sweeping across the word, and a slower return glint
  float s = d.x + 0.38 * d.y;
  float b1 = mix(-7.0, 7.0, fract(t * 0.085));
  float b2 = mix(7.0, -7.0, fract(t * 0.047 + 0.4));
  float g1 = exp(-pow(s - b1, 2.0) * 1.7), g2 = exp(-pow(s - b2, 2.0) * 3.0) * 0.5;
  float g = g1 + g2;
  if (k < 2.5) {
    float silk = 0.82 + 0.18 * sin(d.x * 2.3 + d.y * 3.1 + t * 0.9 + 1.7 * sin(d.x * 0.9 - t * 0.4));
    c.a *= silk;
    c.rgb = mix(c.rgb, vec3(1.0, 0.94, 0.8), clamp(g * 0.8, 0.0, 1.0));
    c.a *= 1.0 + g * 2.4;
    c.a *= 1.0 + 0.5 * pow(0.5 + 0.5 * sin(t * 2.2 + r.z * 90.0), 10.0);
    c.rgb += vec3(1.0, 0.6, 0.25) * 0.5 * pow(0.5 + 0.5 * sin(t * 0.8 + r.x * 53.0 + r.z * 7.0), 22.0) * step(0.78, r.y);   // sparse twinkle on the face
  } else if (k < 3.5) {
    c.a *= 0.75 + 0.25 * sin(t * 0.7 + d.x * 0.8) + g * 1.2;
  } else if (k < 4.5) {
    c.a *= 0.35 + 0.65 * pow(0.5 + 0.5 * sin(t * (0.8 + r.y * 1.6) + r.x * 40.0), 3.0);
  }
  return c;
}`,camera:{pos:[.9,.45,9.6],target:[0,0,0],fov:35},pointSize:1.9,drift:.012},ja=o({default:()=>Ha}),Ma=Math.PI*2,Na=7,Pa=44,Fa=[{r:9.5,amp:.35,m:2,ph:.4,speed:.11,share:.8},{r:13.5,amp:.5,m:3,ph:1.9,speed:-.08,share:1},{r:18.5,amp:.7,m:2,ph:3.1,speed:.06,share:1.3},{r:31,amp:.9,m:3,ph:.9,speed:-.045,share:1.8},{r:38,amp:1.1,m:2,ph:2.4,speed:.035,share:2.1},{r:46,amp:1.4,m:3,ph:5,speed:-.028,share:2.4}],Ia={work:`I · Work`,systems:`II · Systems`,research:`III · Research`,mind:`IV · Second Brain`,education:`V · Education`,about:`VI · About`},La=e=>e.toFixed(5),Ra=ar[0].angle*Math.PI/180,za=(ar[1].angle-ar[0].angle)*Math.PI/180;function Ba(e){let t=ar.length,n=((e-Ra)/za%t+t)%t,r=Math.floor(n),i=n-r,a=e=>ar[(e%t+t)%t].height,o=a(r-1),s=a(r),c=a(r+1),l=a(r+2);return .5*(2*s+(-o+c)*i+(2*o-5*s+4*c-l)*i*i+(-o+3*s-3*c+l)*i*i*i)}var Va=e=>j.hex(e),Ha={id:`orbits`,build(e,t,n){let r=e.count,i=e.rand,a=0,o=(e,i,o,s,c,l,u,d)=>{a<r&&j.set(t,n,a++,e,i,o,s,c,l,u,d)},s=()=>{let e=0;for(;e<1e-6;)e=i();return Math.sqrt(-2*Math.log(e))*Math.cos(Ma*i())},c=[.95,.92,.84],l=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],u=r/262144,d=ar.map(e=>Va(e.accent));ar.forEach((e,t)=>{let[n,a,c]=e.center,f=e.angle*Math.PI/180,p=Math.sin(f),m=Math.cos(f),h=-p,g=l(d[t],[1,1,1],.3),_=Math.floor(r*.0072),v=Math.floor(r*.0042);for(let e=0;e<_;e++){let e=i()*2-1,t=i()*Ma,r=Math.sqrt(1-e*e),s=.3*i()**.6;o(n+Math.cos(t)*r*s,a+e*s,c+Math.sin(t)*r*s,0,g[0],g[1],g[2],.28+.5*(1-s/.3))}for(let e=0;e<v;e++){let e=i()*Ma,r=1.15+s()*.025,l=Math.sin(e)*r,u=Math.cos(e)*r;o(n+m*u+s()*.02,a+l,c+h*u+s()*.02,0,d[t][0],d[t][1],d[t][2],.7+.4*i())}let y=Math.floor(r*.0035);for(let e=0;e<y;e++){let e=i()*2-1,r=i()*Ma,l=Math.sqrt(1-e*e),u=.5+Math.abs(s())*.55;o(n+Math.cos(r)*l*u,a+e*u*.8,c+Math.sin(r)*l*u,0,d[t][0],d[t][1],d[t][2],.22*i())}let b=e.projects.length;for(let e=0;e<b;e++){let r=e/b*Ma+t,l=1.95,d=.35+.05*e,f=Math.max(20,Math.floor(70*u));for(let e=0;e<f;e++){let e=s()*.035;o(n+Math.sin(r)*l+e,a+.15*Math.sin(r*2)+s()*.03,c+Math.cos(r)*l+s()*.035,2+d,g[0],g[1],g[2],.3+.35*i())}}}),ar.forEach((e,t)=>{let[n,a,c]=e.center,l=Math.floor(r*.0032),u=Math.floor(r*.0028);for(let e=0;e<l;e++){let e=i();o(n+s()*.02,a*(1-e)+s()*.02,c+s()*.02,0,d[t][0],d[t][1],d[t][2],.22*(1-e*.7))}for(let e=0;e<u;e++){let e=i()*Ma,r=.9+s()*.03;o(n+Math.cos(e)*r,s()*.02,c+Math.sin(e)*r,0,d[t][0],d[t][1],d[t][2],.3)}});let f=Math.floor(r*.1);for(let e=0;e<f;e++){let e=i()*Ma,t=0,n=0;for(let r=0;r<ar.length;r++){let i=Math.abs((e-ar[r].angle*Math.PI/180+Math.PI*3)%Ma-Math.PI),a=Math.exp(-(i*i)/(.4*.2));a>t&&(t=a,n=r)}let r=l(c,d[n],.15+.85*t),a=24+s()*.07;o(Math.sin(e)*a,Ba(e)+s()*.05,Math.cos(e)*a,.5,r[0],r[1],r[2],.32+.35*t)}let p=Math.floor(r*.03);for(let e=0;e<p;e++){let e=i()*Ma,t=24+s()*.9;o(Math.sin(e)*t,Ba(e)*(.9-.9*Math.abs(t-24)*.1)+s()*.18,Math.cos(e)*t,0,c[0],c[1],c[2],.08+.06*i())}let m=Math.floor(r*.012);ar.forEach((e,t)=>{let n=e.angle*Math.PI/180,r=Math.sin(n),a=Math.cos(n);for(let n=0;n<m;n++){let n=i(),u=Na+n*(22.5-Na),f=e.height*(n*n*(3-2*n)),p=l(c,d[t],.35+.5*n);o(r*u+s()*.025,f+s()*.025,a*u+s()*.025,.75,p[0],p[1],p[2],.07+.13*n)}});let h=Fa.reduce((e,t)=>e+t.share,0),g=Math.floor(r*.16);for(let e of Fa){let t=Math.floor(g*e.share/h),n=l([.72,.8,1],c,e.r<20?.55:.1);for(let r=0;r<t;r++){let t=i()*Ma,r=e.r+s()*.08,a=e.amp*Math.sin(e.m*t+e.ph)+s()*.05;o(Math.sin(t)*r,a,Math.cos(t)*r,1+(e.speed<0?.5:0)+Math.abs(e.speed),n[0],n[1],n[2],.16+.12*i())}}let _=Math.floor(r*.04);for(let e=0;e<_;e++){let e=i()*2-1,t=i()*Ma,n=Math.sqrt(1-e*e),r=58+i()*60;o(Math.cos(t)*n*r,e*r*.55,Math.sin(t)*n*r,-2,.85,.9,1,.05+.2*i()**3)}let v=Math.sqrt(Na),y=Math.sqrt(Pa);for(;a<r;){let e=(v+i()*(y-v))**2,t=i()*Ma,n=.5+.5*Math.cos(2*(t-1.35*Math.log(e/Na)));if(i()>.35+.65*n)continue;let r=Math.min(1,(e-Na)/3),a=l([.66,.74,1],[1,.86,.62],Math.max(0,1-(e-Na)/26));o(Math.sin(t)*e,s()*(.1+.022*e),Math.cos(t)*e,-1,a[0],a[1],a[2],(.07+.2*i())*r*(.5+.5*n))}},glsl:`
vec3 anim_orbits(vec3 p, vec4 d, vec4 r, float t) {
  float w = d.w;
  if (w < -1.5) return p;
  if (w < -0.5) {                                   // dust disk: bounded differential sway, never winds up
    float rr = max(length(p.xz), ${La(Na)});
    float a = 0.5 * (9.0 / rr) * sin(t * 0.05);
    float c = cos(a), s = sin(a);
    return vec3(c * p.x + s * p.z, p.y + 0.05 * sin(t * 0.25 + r.y * 40.0), -s * p.x + c * p.z);
  }
  if (w >= 2.0) {                                   // satellite: circles its marker about the vertical axis
    float ang = atan(p.x, p.z);
    float kk = floor((ang - ${La(Ra)}) / ${La(za)} + 0.5);
    float ac = ${La(Ra)} + kk * ${La(za)};
    vec2 c0 = vec2(sin(ac), cos(ac)) * ${La(24)};
    vec2 q = p.xz - c0;
    float a = (w - 2.0) * t, c = cos(a), s = sin(a);
    return vec3(c0.x + c * q.x + s * q.y, p.y, c0.y - s * q.x + c * q.y);
  }
  if (w >= 1.0) {                                   // orbit trail: rigid rotation about the hub axis (sign = direction)
    float sw = w - 1.0;
    float dir = sw > 0.3 ? -1.0 : 1.0;
    float sp = sw - (sw > 0.3 ? 0.5 : 0.0);
    float a = dir * sp * t, c = cos(a), s = sin(a);
    return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
  }
  return p;
}
float size_orbits(vec4 d, vec4 r, float t) {
  float w = d.w;
  if (w < -1.5) return 0.7;
  if (w < -0.5) return 0.62;
  if (w >= 2.0) return 1.5;
  if (w >= 1.0) return 0.8;
  if (w > 0.7) return 0.7;
  if (w > 0.4) return 0.85;
  return 1.0;
}
vec4 color_orbits(vec4 c, vec4 d, vec4 r, float t) {
  float w = d.w;
  if (w > 0.4 && w < 0.6) {                         // main ring: a comet circles it
    float ang = atan(d.x, d.z) / 6.2831853 + 0.5;
    float q = fract(t * 0.028 - ang);
    c.a *= 1.0 + 2.4 * exp(-11.0 * q);
  } else if (w > 0.7 && w < 0.8) {                  // spokes: pulses run outward from the hub
    float u = (length(d.xz) - ${La(Na)}) / ${La(22.5-Na)};
    float ph = fract(sin(atan(d.x, d.z) * 12.9898) * 43758.5);
    float q = fract(ph + t * 0.09 - u);
    c.a *= 1.0 + 3.2 * exp(-16.0 * q);
  } else if (w >= 1.0 && w < 2.0) {                 // trails: bright head, long fading tail (rides with the rotation)
    float ang = atan(d.x, d.z) / 6.2831853 + 0.5;
    float ph = fract(length(d.xz) * 0.37);
    float q = fract(ang - ph);
    c.a *= 0.5 + 2.6 * exp(-5.5 * q);
  } else if (w > -0.1 && w < 0.1) {                 // markers: slow breathing, each out of step
    float ang = atan(d.x, d.z);
    float kk = floor((ang - ${La(Ra)}) / ${La(za)} + 0.5);
    c.a *= 0.86 + 0.14 * sin(t * 1.3 + kk * 1.7);
  } else if (w >= 2.0) {
    c.a *= 0.9 + 0.1 * sin(t * 3.0 + r.x * 6.0);
  }
  return c;
}`,camera:{pos:[0,16,58],target:[0,-1,0],fov:38},pointSize:11,drift:.012,anchors:ar.map(e=>({id:e.id,label:Ia[e.id]??e.id,pos:[e.center[0],e.center[1]+1.8,e.center[2]]}))},Ua=o({default:()=>Ya}),Wa=-.24,Ga=1.55,Ka=.3,qa=[2.9,.4,1.1],Ja=[-2.7,-.7,-1],Ya={id:`phase`,build(e,t,n){let r=e.count,i=e.rand,a=(262144/r)**.8,o=j.hex(`#FF6A8A`),s=j.hex(`#EDE6D6`),c=0,l=(e,r,i,a,o,s,l,u)=>{j.set(t,n,c++,e,r,i,a,o,s,l,u)},u=e=>Math.max(1,Math.floor(e*r)),d=u(.6),f=Math.ceil(d/110),p=[];for(let e=0;e<110;e++){let t=e*2.399963,n=1+2.25*Math.sqrt((e+.5)/110),r=1.9*(2*(e*.618034%1)-1),a=i()<.14?1.7:1,o=i();p.push([n*Math.cos(t),n*Math.sin(t),r,o,a])}for(let e=0;e<d;e++){let t=e%110,n=Math.floor(e/110),r=p[t],o=Math.min(.998,(n+i())/f);l(r[0],r[1],r[2],1+o*.999,r[3],r[4],0,.22*a)}let m=u(.1);for(let e=0;e<m;e++){let e=i()*6.2832,t=.8+3.6*Math.sqrt(i()),n=(i()*2-1)*2.2;l(t*Math.cos(e),t*Math.sin(e),n,6+i()*.999,i(),1,0,.075*a)}let h=u(.04);for(let e=0;e<2;e++){let t=e===0?qa:Ja;for(let n=0;n<h;n++)l(t[0],t[1],t[2],2+e*.5,e,1,0,.5*a)}let g=u(.025);for(let e=0;e<g;e++){let e=()=>(i()+i()+i()-1.5)*.7;l(e()*.2,e()*.16,e()*.14,7,1,.82,.74,.3*a)}let _=u(.012);for(let e=0;e<_;e++)l(0,0,0,3,o[0],o[1],o[2],.35*a);let v=u(.085),y=[[1,.28],[0,.82]],b=[[1,-.28/.82],[0,1/.82]],x=[[Wa,-1.55],[Ga,Wa]],S=(e,t)=>[[e[0][0]*t[0][0]+e[0][1]*t[1][0],e[0][0]*t[0][1]+e[0][1]*t[1][1]],[e[1][0]*t[0][0]+e[1][1]*t[1][0],e[1][0]*t[0][1]+e[1][1]*t[1][1]]],C=S(S(y,x),b),w=[[-C[0][1],C[0][0]],[-C[1][1],C[1][0]]].map(e=>{let t=Math.hypot(e[0],e[1]);return[e[0]/t,e[1]/t]}),T=3.9,E=2.35,D=()=>{let e=i();if(e<.2){let e=Math.floor(i()*3),t=i()*2-1,n=[T,E,2][e];return[e===0?t*n:0,e===1?t*n:0,e===2?t*n:0,.85,4]}if(e<.3){let e=Math.floor(i()*3),t=(Math.floor(i()*2*(e===0?6:3))-(e===0?6:3))*.7+0,n=(i()*2-1)*.07;return[e===0?t:n,e===1?t:e===0?n:0,e===2?t:e===1?n:0,.7,4.1]}if(e<.34){let e=Math.floor(i()*3),t=i()*.22,n=(i()<.5?-1:1)*t*.38,r=[T,E,2][e];return[e===0?r-t:n,e===1?r-t:e===0?n:0,e===2?r-t:e===1?n:0,.9,4]}if(e<.52){let e=Math.floor(i()*2),t=(i()*2-1)*4.6,n=w[e][0]*t,r=w[e][1]*t;return Math.abs(n)>T||Math.abs(r)>E?[n*.001,r*.001,0,0,4.3]:[n,r,0,.55*(Math.sin(t*7)>-.1?1:.12),4.2+e*.05]}let t=Math.floor(i()*12),n=i()*2-1,r=t&1?1:-1,a=t&2?1:-1;t&4;let o;return o=t<4?[n*T,r*E,a*2]:t<8?[r*T,n*E,a*2]:[r*T,a*E,n*2],[o[0],o[1],o[2],.22,4.4]};for(let e=0;e<v;e++){let[e,t,n,r,o]=D();l(e+(i()-.5)*.006,t+(i()-.5)*.006,n,o,s[0],s[1],s[2],r*a)}j.dust(t,n,c,r,i,6.4,.08*a,[1,.8,.82]);for(let e=c;e<r;e++)t[e*4+3]=5},glsl:`
const float PH_A = ${Wa.toFixed(3)};
const float PH_W = ${Ga.toFixed(3)};
const float PH_MU = ${Ka.toFixed(3)};
const float PH_TMAX = 8.5;
const float PH_SP = 0.9;
const float PH_TC = 9.0;
const float PH_TRAIL = 1.9;
vec3 ph_flow(vec3 p0, float s) {
  float e = exp(PH_A * s), c = cos(PH_W * s), sn = sin(PH_W * s);
  float u = e * (p0.x * c - p0.y * sn), v = e * (p0.x * sn + p0.y * c);
  return vec3(u + 0.28 * v, 0.82 * v, p0.z * exp(-PH_MU * s));
}
float ph_tau(float ph, float t) { return pow(mod(t * PH_SP / PH_TMAX + ph, 1.0), 1.8); }
float ph_head(float t) { return mod(t * 0.85, PH_TC); }
float ph_hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
vec3 anim_phase(vec3 p, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl < 1.5 || (cl > 5.5 && cl < 6.5)) {
    float ph = fract(d.w) / 0.999;
    return ph_flow(p, PH_TMAX * ph_tau(ph, t));
  }
  if (cl < 2.9) {
    float id = fract(d.w) * 2.0;
    float sh = ph_head(t);
    float dl = pow(r.y, 1.7) * PH_TRAIL;
    float s = max(0.0, sh - dl);
    vec3 q = ph_flow(p, s);
    return q + 0.012 * vec3(sin(t * 7.0 + r.x * 40.0), cos(t * 6.0 + r.z * 40.0), sin(t * 5.0 + r.w * 40.0)) * (0.2 + dl);
  }
  if (cl < 3.5) {
    float sh = ph_head(t);
    vec3 a = ph_flow(vec3(${qa.map(e=>e.toFixed(2)).join(`, `)}), sh);
    vec3 b = ph_flow(vec3(${Ja.map(e=>e.toFixed(2)).join(`, `)}), sh);
    float u = r.y;
    vec3 q = mix(a, b, u);
    float wv = sin(u * 3.14159265);
    q.z += 0.10 * wv * sin(u * 26.0 - t * 7.0 + r.x * 0.6);
    q.y += 0.10 * wv * sin(u * 19.0 + t * 5.0 + r.z);
    return q;
  }
  if (cl > 6.5 && cl < 7.5) return p * (1.0 + 0.22 * sin(t * 2.2 + r.x * 6.283) * r.y);
  return p;
}
float size_phase(vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl < 1.5) { float ph = fract(d.w) / 0.999; float x = ph_tau(ph, t); return mix(1.9, 0.85, smoothstep(0.0, 0.8, x)); }
  if (cl > 5.5 && cl < 6.5) return 2.3;
  if (cl < 2.9) { float dl = pow(r.y, 1.7); return mix(4.2, 0.55, smoothstep(0.0, 0.45, dl)); }
  if (cl < 3.5) return 0.9;
  if (cl < 4.5) return 0.8;
  if (cl > 6.5 && cl < 7.5) return 1.7;
  return 1.0;
}
vec4 color_phase(vec4 c, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  vec3 acc = vec3(1.0, 0.42, 0.54);
  vec3 ivo = vec3(0.95, 0.90, 0.83);
  if (cl < 1.5 || (cl > 5.5 && cl < 6.5)) {
    float ph = fract(d.w) / 0.999;
    float x = ph_tau(ph, t);
    vec3 base = mix(acc, vec3(0.78, 0.60, 1.0), 0.28 * c.r);
    vec3 rgb = mix(base, ivo, smoothstep(0.05, 0.6, x));
    rgb = mix(rgb, vec3(1.0, 0.86, 0.70), smoothstep(0.7, 1.0, x));
    float a = c.a * smoothstep(0.0, 0.05, x) * (1.0 - smoothstep(0.96, 1.0, x)) * mix(1.0, 0.42, smoothstep(0.3, 1.0, x));
    if (cl > 5.5) a *= 0.9 + 0.1 * sin(t + d.x);
    return vec4(rgb, a * (cl < 1.5 ? c.g : 1.0));
  }
  if (cl < 2.9) {
    float id = fract(d.w) * 2.0;
    float sh = ph_head(t);
    float dl = pow(r.y, 1.7) * PH_TRAIL;
    float live = step(0.0, sh - dl);
    float fade = smoothstep(0.0, 0.6, sh) * (1.0 - smoothstep(PH_TC - 1.4, PH_TC, sh));
    float tail = pow(1.0 - dl / PH_TRAIL, 2.6) + 0.9 * exp(-dl * 9.0);
    vec3 hot = mix(vec3(1.0, 0.36, 0.52), vec3(1.0, 0.70, 0.46), id);
    vec3 rgb = mix(hot, vec3(1.0, 0.97, 0.92), smoothstep(0.35, 0.0, dl));
    return vec4(rgb, c.a * live * fade * tail * (1.0 + 2.2 * smoothstep(0.12, 0.0, dl)));
  }
  if (cl < 3.5) {
    float sh = ph_head(t);
    float fade = smoothstep(0.0, 0.6, sh) * (1.0 - smoothstep(PH_TC - 1.4, PH_TC, sh));
    float u = r.y;
    return vec4(c.rgb, c.a * fade * (0.5 + 0.5 * sin(u * 40.0 - t * 5.0)) * (0.4 + 0.6 * sin(u * 3.14159265)));
  }
  return c;
}`,camera:{pos:[4.6,1.5,9.4],target:[0,-.05,0],fov:36},pointSize:1.7,drift:.012,anchors:[{id:`x`,label:`one partner`,pos:[4.15,0,0]},{id:`y`,label:`the other`,pos:[0,2.6,0]},{id:`z`,label:`the public`,pos:[0,0,2.25]}]},Xa=o({default:()=>Eo}),Za=1.22,Qa=2.5,$a=.36,eo=-.95,to={cx:0,cy:1,r:.66,len:.16},no=to.cy-.4,ro=1.6,io=-.9,ao=.355,oo=.17,so=.4,co=.42,lo=.52,uo=.26,fo=.28,po=.27,mo=.11,ho=.075,go=new m(-.8150000000000001,-.7999999999999999),_o=e=>e*e*(3-2*e);function vo(e,t){let n=e/ro%1,r=ho+.22499999999999998*_o(.5+.5*Math.cos(n*Math.PI*2)),i=Math.cos(r),a=Math.sin(r);t[0].set(io,-.9149999999999999,0),t[1].set(go.x,go.y,0),t[2].set(go.x+so*i,go.y+so*a,0),t[3].set(t[2].x+co*i,t[2].y+co*a,0),t[4].set(t[3].x+lo*i,t[3].y+lo*a,0),t[5].set(t[4].x+uo*Math.cos(r+.42),t[4].y+uo*Math.sin(r+.42),0);let o=-.9049999999999999,s=ao-t[4].x,c=o-t[4].y,l=Math.min(Math.hypot(s,c),.549),u=(fo*fo-po*po+l*l)/(2*l),d=Math.sqrt(Math.max(0,fo*fo-u*u)),f=s/Math.hypot(s,c),p=c/Math.hypot(s,c),m=t[4].x+f*u,h=t[4].y+p*u,g=-p,_=f;g>0&&(g=-g,_=-_),t[6].set(m+g*d,h+_*d,0),t[7].set(ao,o,0),t[8].set(.46499999999999997,-.9149999999999999,0),t[9].set(to.cx,to.cy,0),t[10].set(0,0,0),t[11].set(0,0,0)}var yo=[{id:0,len:oo,r0:.045,r1:.03,bulge:0,ez:1,z:.065,a:1},{id:0,len:oo,r0:.045,r1:.03,bulge:0,ez:1,z:-.065,a:.6},{id:1,len:so,r0:.045,r1:.062,bulge:.014,ez:1,z:.065,a:1},{id:1,len:so,r0:.045,r1:.062,bulge:.014,ez:1,z:-.065,a:.6},{id:2,len:co,r0:.062,r1:.095,bulge:.008,ez:1,z:.065,a:1},{id:2,len:co,r0:.062,r1:.095,bulge:.008,ez:1,z:-.065,a:.6},{id:3,len:lo,r0:.1,r1:.115,bulge:.02,ez:1.4,z:0,a:1},{id:4,len:uo,r0:.045,r1:.04,bulge:0,ez:1,z:0,a:1},{id:5,len:0,r0:.105,r1:.105,bulge:0,ez:1,z:0,a:1.15},{id:6,len:fo,r0:.056,r1:.042,bulge:.004,ez:1,z:.15,a:1},{id:6,len:fo,r0:.056,r1:.042,bulge:.004,ez:1,z:-.15,a:.55},{id:7,len:po,r0:.042,r1:.032,bulge:.004,ez:1,z:.15,a:1},{id:7,len:po,r0:.042,r1:.032,bulge:.004,ez:1,z:-.15,a:.55},{id:8,len:mo,r0:.032,r1:.026,bulge:0,ez:1.3,z:.15,a:1},{id:8,len:mo,r0:.032,r1:.026,bulge:0,ez:1.3,z:-.15,a:.55}],bo=e=>{let t=(e.r0+e.r1)/2;return(2*Math.PI*t*e.len+4*Math.PI*t*t)*e.ez**.5*(e.a<.7?.6:1)},xo=yo.reduce((e,t)=>e+bo(t),0),So=(e,t,n,r)=>{let i=2*(t-r),a=2*(n-r),o=Math.PI*r/2,s=2*i+2*a+4*o;e=(e%s+s)%s;let c=t-r,l=n-r;if(e<i)return[-c+e,-n,0,-1];if(e-=i,e<o){let t=-Math.PI/2+e/r;return[c+Math.cos(t)*r,-l+Math.sin(t)*r,Math.cos(t),Math.sin(t)]}if(e-=o,e<a)return[t,-l+e,1,0];if(e-=a,e<o){let t=e/r;return[c+Math.cos(t)*r,l+Math.sin(t)*r,Math.cos(t),Math.sin(t)]}if(e-=o,e<i)return[c-e,n,0,1];if(e-=i,e<o){let t=Math.PI/2+e/r;return[-c+Math.cos(t)*r,l+Math.sin(t)*r,Math.cos(t),Math.sin(t)]}if(e-=o,e<a)return[-t,l-e,-1,0];e-=a;let u=Math.PI+e/r;return[-c+Math.cos(u)*r,-l+Math.sin(u)*r,Math.cos(u),Math.sin(u)]},Co=(e,t,n,r,i)=>{let a=Math.max(0,Math.abs(e)-(n-i)),o=Math.max(0,Math.abs(t)-(r-i));return a*a+o*o<=i*i},wo=Array.from({length:12},()=>new f);vo(0,wo);var To={j:{value:wo},rep:{value:0},flare:{value:0},ph:{value:0}},Eo={id:`pushup`,build(e,t,n){let r=e.count,i=e.rand,a=0,o=(e,t)=>e+16*t,s=(e,i,o,s,c,l,u,d)=>{a<r&&j.set(t,n,a++,e,i,o,s,c,l,u,d)},c=j.hex(`#EDE6D6`),l=j.hex(`#FF4A2B`),u=[.62,.7,.9],d=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],f=(e,t,n)=>{for(let r of yo){let a=Math.round(e*bo(r)/xo),l=(r.r0+r.r1)/2,u=2*Math.PI*l*r.len,f=4*Math.PI*l*l;for(let e=0;e<a;e++){let e=i()<.6,a,l,p;if(i()*(u+f)<u){let t=i(),n=r.r0+(r.r1-r.r0)*t+r.bulge*Math.sin(Math.PI*t),o=i()*Math.PI*2,s=e?1-.05*i():Math.sqrt(i())*.95;a=t*r.len,l=n*s*Math.cos(o),p=n*s*Math.sin(o)*r.ez}else{let t=i()*Math.PI*2,n=i()*2-1,o=Math.sqrt(1-n*n),s=n,c=Math.cos(t)*o,u=Math.sin(t)*o,d=e?1-.05*i():Math.cbrt(i())*.95,f=s<0?r.r0:r.r1;a=(s<0?0:r.len)+s*f*d,l=c*f*d,p=u*f*d*r.ez}let m=d(c,[1,.96,.9],.3);s(a,l,p+r.z,o(t,r.id),m[0],m[1],m[2],.062*r.a*n)}}};f(Math.floor(r*.37),1,1),f(Math.floor(r*.03),6,.3);let p=12+2*Math.PI*$a,m=Math.floor(r*.07);for(let e=0;e<m;e++){let[e,t,n,r]=So(i()*p,Za,Qa,$a),a=i()*.028,c=(i()*2-1)*.045;s(e-n*a,t-r*a,c,o(0,0),.95,.92,.84,.3)}let h=Math.floor(r*.012);for(let e=0;e<h;e++){let[e,t,n,r]=So(i()*p*.95,1.145,2.425,.29);s(e-n*i()*.01,t-r*i()*.01,-.02+(i()-.5)*.01,o(0,1),.8,.85,1,.16)}let g=Math.floor(r*.004),_=[[-1,1.62,1.82],[-1,1.2,1.5],[-1,.78,1.08],[1,1.1,1.62]];for(let e=0;e<g;e++){let[t,n,r]=_[e%_.length];s(t*(1.232+i()*.022),n+(r-n)*i(),(i()-.5)*.05,o(0,1),.95,.92,.84,.5)}let v=2.3,y=.072,b=Math.floor(r*.006);for(let e=0;e<b;e++){let[e,t]=So(i()*(.9119999999999999+2*Math.PI*y),.3,y,y);s(e,v+t,(i()-.5)*.015,o(0,2),.85,.88,.95,.3)}for(let e=0;e<Math.floor(b*.25);e++){let e=i()*Math.PI*2,t=.03*Math.sqrt(i());s(.18+Math.cos(e)*t,v+Math.sin(e)*t,0,o(0,2),.7,.8,1,.45)}let x=Math.floor(r*.005);for(let e=0;e<x;e++)s((i()*2-1)*.42,-2.33+(i()-.5)*.014,(i()-.5)*.01,o(0,3),.95,.92,.85,.34);let S=-1.88,C=.15,w=Math.floor(r*.01);for(let e=0;e<w;e++){let[e,t]=So(i()*(2.52+2*Math.PI*C),.78,C,C);s(e,S+t,(i()-.5)*.015,o(0,6),.9,.9,.95,.12)}for(let e=0;e<Math.floor(w*.8);e++){let e=i()*Math.PI*2,t=.115*Math.sqrt(i());s(-.63+Math.cos(e)*t,S+Math.sin(e)*t,0,o(0,6),1,.45,.3,.09)}let T=Math.floor(r*.11);for(let e=0;e<T;e++){let e=0,t=0;for(let n=0;n<8&&(e=(i()*2-1)*1.15,t=(i()*2-1)*2.43,!Co(e,t,1.15,2.43,.29)||Math.abs(e)<.32999999999999996&&Math.abs(t-v)<.102);n++);let n=Math.hypot(e-to.cx,(t-to.cy)*.8),r=Math.exp(-(n*n)/.55),a=Math.exp(-((t-eo)*(t-eo))/.28)*Math.exp(-(e*e)/2.2),c=d(u,l,Math.min(1,r*1.4));s(e,t,-.05+(i()-.5)*.02,o(0,4),c[0],c[1],c[2],.022+.16*r*r+.06*r+.06*a)}let E=Math.floor(r*.022);for(let e=0;e<E;e++){let e=(i()*2-1)*1.08,t=Math.exp(-((Math.abs(e)/1.08)**4)*2.5);i()<.45?s(e,eo-.012*i(),(i()*2-1)*.3,o(0,5),.95,.9,.82,.2*t):s(e,-.96,(i()*2-1)*.38,o(0,5),.75,.8,.95,.07*t)}let D=Math.floor(r*.03);for(let e=0;e<D;e++){let t=e%10,n=Math.PI/2-t*Math.PI*2/10,r=Math.cos(n),a=Math.sin(n),c=to.r+to.len*i(),l=(i()*2-1)*.017;s(to.cx+r*c-a*l,to.cy+a*c+r*l,(i()*2-1)*.022,o(2,t),.95,.92,.85,.12)}let O=Math.floor(r*.012);for(let e=0;e<O;e++){let e=i()*Math.PI*2,t=to.r-.065+(i()-.5)*.014;s(to.cx+Math.cos(e)*t,to.cy+Math.sin(e)*t,(i()-.5)*.02,o(2,15),.95,.92,.85,.16)}let k=Math.floor(r*.04);for(let e=0;e<k;e++){let e=i()*Math.PI*2,t=Math.sqrt(i());s(Math.cos(e)*t,0,Math.sin(e)*t,o(3,0),l[0],l[1],l[2],.075)}for(;a<r;){let e=i()*2-1,t=i()*Math.PI*2,n=Math.sqrt(1-e*e),r=Math.cbrt(i()),a=Math.cos(t)*n*r*4.6,c=e*r*3.4,l=Math.sin(t)*n*r*2.6-.8,u=Math.abs(a)<1.32&&Math.abs(c)<2.6&&l>-.3;s(a,c,l,o(4,0),.9,.86,.8,(u?.01:.03)+.1*i()**3)}},uniforms:{u_pushup_j:To.j,u_pushup_rep:To.rep,u_pushup_flare:To.flare,u_pushup_ph:To.ph},update(e){vo(e,wo);let t=Math.floor(e/ro),n=e/ro%1;To.rep.value=t%11,To.ph.value=n,To.flare.value=Math.exp(-n*ro*3.2)*(t%11==10?1.6:1)},glsl:`
uniform vec3 u_pushup_j[12];
uniform float u_pushup_rep, u_pushup_flare, u_pushup_ph;
const float PU_FLOOR = ${eo.toFixed(3)};
const vec2 PU_RING = vec2(${to.cx.toFixed(3)}, ${to.cy.toFixed(3)});
const float PU_FLAME_BASE = ${no.toFixed(3)};
void pu_bone(int b, out vec3 A, out vec3 B, out float len) {
  if (b == 0) { A = u_pushup_j[1]; B = u_pushup_j[0]; len = ${oo}; }
  else if (b == 1) { A = u_pushup_j[1]; B = u_pushup_j[2]; len = ${so}; }
  else if (b == 2) { A = u_pushup_j[2]; B = u_pushup_j[3]; len = ${co}; }
  else if (b == 3) { A = u_pushup_j[3]; B = u_pushup_j[4]; len = ${lo}; }
  else if (b == 4) { A = u_pushup_j[4]; B = u_pushup_j[5]; len = ${uo}; }
  else if (b == 5) { A = u_pushup_j[5]; B = u_pushup_j[5] + vec3(1.0, 0.0, 0.0); len = 0.0; }
  else if (b == 6) { A = u_pushup_j[4]; B = u_pushup_j[6]; len = ${fo}; }
  else if (b == 7) { A = u_pushup_j[6]; B = u_pushup_j[7]; len = ${po}; }
  else { A = u_pushup_j[7]; B = u_pushup_j[8]; len = ${mo}; }
}
vec3 pu_sway(vec3 q, float t) {
  float a = 0.2 * sin(t * 0.42) + 0.05 * sin(t * 0.9 + 1.0);
  float c = cos(a), s = sin(a);
  return vec3(c * q.x + s * q.z, q.y, -s * q.x + c * q.z);
}
vec3 anim_pushup(vec3 p, vec4 d, vec4 r, float t) {
  float kind = mod(d.w, 16.0); float id = floor(d.w / 16.0 + 0.001);
  vec3 q = p;
  if (kind < 0.5) { /* phone: already in phone space */ }
  else if (kind < 1.5 || (kind > 5.5 && kind < 6.5)) {
    vec3 A, B; float len; pu_bone(int(id + 0.5), A, B, len);
    vec2 T = normalize(B.xy - A.xy + vec2(1e-5, 0.0)); vec2 N = vec2(-T.y, T.x);
    q = vec3(A.xy + T * p.x + N * p.y, p.z);
    if (kind > 5.5) q.y = 2.0 * PU_FLOOR - q.y;
  } else if (kind < 2.5) {
    float pop = abs(id - (u_pushup_rep - 1.0)) < 0.5 ? u_pushup_flare : 0.0;
    vec2 dir = normalize(p.xy - PU_RING + vec2(1e-5));
    q.xy += dir * 0.045 * pop;
  } else if (kind < 3.5) {
    float fl = u_pushup_flare;
    float ph = fract(r.x + t * (0.5 + 0.55 * r.y));
    float hgt = 0.56 * (1.0 + 0.4 * fl);
    float w = 0.23 * pow(1.0 - ph, 1.15) * (0.35 + 0.65 * smoothstep(0.0, 0.22, ph)) * (1.0 + 0.2 * fl);
    float wob = (sin(t * 7.0 + ph * 8.0 + r.z * 20.0) * 0.04 + sin(t * 3.3 + r.w * 30.0) * 0.025) * ph;
    q = vec3(PU_RING.x + p.x * w + wob, PU_FLAME_BASE + ph * hgt, p.z * w * 0.8);
  } else if (kind < 4.5) {
    float a = r.x * 6.2831 + t * (0.05 + 0.08 * r.y);
    q = p + vec3(sin(a) * 0.15, sin(t * 0.2 + r.z * 30.0) * 0.12 + 0.05 * t * (0.3 + r.w), cos(a) * 0.1);
    q.y = mod(q.y + 3.4, 6.8) - 3.4;
    return q;
  }
  return pu_sway(q, t);
}
float size_pushup(vec4 d, vec4 r, float t) {
  float kind = mod(d.w, 16.0), id = floor(d.w / 16.0 + 0.001);
  if (kind < 0.5) return id > 3.5 && id < 4.5 ? 1.7 : (id > 4.5 ? 1.2 : 0.9);
  if (kind < 1.5) return 0.95;
  if (kind < 2.5) return 1.25;
  if (kind < 3.5) return 1.0 + 0.5 * r.y;
  if (kind < 4.5) return 0.8;
  return 0.8;
}
vec4 color_pushup(vec4 c, vec4 d, vec4 r, float t) {
  float kind = mod(d.w, 16.0), id = floor(d.w / 16.0 + 0.001);
  float fl = u_pushup_flare;
  vec3 verm = vec3(1.0, 0.29, 0.17);
  if (kind < 0.5) {
    if (id < 0.5) {
      float ang = atan(d.y, d.x);
      float g = pow(max(0.0, cos(ang - t * 0.7)), 26.0) + 0.6 * pow(max(0.0, cos(ang + 2.4 - t * 0.7 * 0.5)), 40.0);
      c.rgb += vec3(1.0, 0.9, 0.75) * g * 0.9; c.a *= 1.0 + 0.5 * g;
    } else if (id > 3.5 && id < 4.5) {
      float dr = length(vec2(d.x - PU_RING.x, (d.y - PU_RING.y) * 0.8));
      float pulse = exp(-dr * dr / 0.8) * fl;
      c.rgb += verm * pulse * 0.6; c.a *= 1.0 + 1.6 * pulse + 0.1 * sin(t * 1.7 + r.w * 40.0);
    } else if (id > 5.5) { c.a *= 0.7 + 0.3 * sin(t * 2.2); }
    else if (id > 4.5) { c.a *= 1.0 + 0.5 * fl; }
    return c;
  }
  if (kind < 1.5 || (kind > 5.5 && kind < 6.5)) {
    vec3 A, B; float len; pu_bone(int(id + 0.5), A, B, len);
    vec2 T = normalize(B.xy - A.xy + vec2(1e-5, 0.0)); vec2 N = vec2(-T.y, T.x);
    float cap = d.x - clamp(d.x, 0.0, len);
    vec3 nl = normalize(vec3(cap, d.y, d.z) + vec3(1e-4));
    vec3 n = vec3(T * nl.x + N * nl.y, nl.z);
    if (id > 4.5 && id < 5.5) n = normalize(vec3(d.x, d.y, d.z) + vec3(1e-4));
    if (kind > 5.5) n.y = -n.y;
    vec3 L = normalize(vec3(-0.4, 0.8, 0.55));
    float dif = max(dot(n, L), 0.0);
    float rim = pow(1.0 - abs(n.z), 2.0);
    float up = max(n.y, 0.0);
    vec3 rgb = c.rgb * (0.3 + 1.05 * dif) + vec3(0.6, 0.7, 1.0) * rim * 0.18;
    rgb += verm * up * (0.22 + 0.9 * fl) * (0.55 + 0.45 * n.z);
    c.a *= 1.0 + 0.5 * fl;
    return vec4(rgb, c.a);
  }
  if (kind < 2.5) {
    if (id > 14.5) {
      float dy = d.y - PU_RING.y, dx = d.x - PU_RING.x;
      float f = fract((1.5707963 - atan(dy, dx)) / 6.2831853);
      float prog = (u_pushup_rep + u_pushup_ph) / 10.0;
      float lit = smoothstep(prog + 0.003, prog - 0.003, f);
      float head = exp(-abs(f - prog) * 90.0) * step(0.001, prog);
      c.rgb = mix(c.rgb * 0.7, verm * 1.2, lit); c.a *= 0.55 + 0.9 * lit + 2.0 * head * (1.0 - lit * 0.0);
      c.rgb += vec3(1.0, 0.8, 0.55) * head * 0.8;
      return c;
    }
    float lit = step(id + 0.5, u_pushup_rep);
    float newest = step(abs(id - (u_pushup_rep - 1.0)), 0.5);
    vec3 rgb = mix(c.rgb * 0.55, verm * 1.35, lit);
    rgb += vec3(1.0, 0.75, 0.5) * newest * fl * 1.1;
    float a = c.a * (0.5 + 1.1 * lit + 1.2 * newest * fl);
    return vec4(rgb, a);
  }
  if (kind < 3.5) {
    float ph = fract(r.x + t * (0.5 + 0.55 * r.y));
    float heat = pow(1.0 - ph, 2.0);
    vec3 rgb = mix(verm, vec3(1.0, 0.86, 0.6), heat);
    float a = c.a * (0.35 + 1.6 * pow(1.0 - ph, 0.7)) * (1.0 + 0.45 * fl);
    return vec4(rgb * (1.0 + 0.1 * fl), a);
  }
  c.a *= 0.65 + 0.35 * sin(t * 1.3 + r.w * 40.0);
  return c;
}`,camera:{pos:[1.75,.1,9.8],target:[1.75,.1,0],fov:35},pointSize:1.7,drift:.004},Do=o({default:()=>Wo}),Oo=24,ko=28,Ao=447,jo=-2.85,Mo=-1.98,No=6.75/ko,Po=3.96/Oo,Fo=No*.8,Io=Po*.7,Lo=-2.9,Ro=3.9499999999999997,zo=1.0499999999999998/2,Bo=20,Vo=1.4,Ho=18.6,Uo=.3,Wo={id:`recruiting`,async build(e,t,n){let r=e.count,i=e.rand,a=(262144/r)**.8,o=0,s=(e,i,s,c,l,u)=>{o<r&&j.set(t,n,o++,e,i,s,c,l[0],l[1],l[2],u*a)},c=e=>Math.max(1,Math.floor(e*r)),l=[.3,.95,.58],u=[1,.72,.26],d=[.5,.7,1],f=[.92,.96,1],p=[.55,.92,1],m=[l,u,d],h=`"Archivo Variable", "Helvetica Neue", Arial, sans-serif`,g=async(t,n,r,i)=>{let a=await e.textMask(t,{font:n,width:r,height:i,align:`center`}),o=r,s=0,c=i,l=0,u=a.data;for(let e=0;e<i;e++)for(let t=0;t<r;t++)u[(e*r+t)*4+3]>127&&(t<o&&(o=t),t>s&&(s=t),e<c&&(c=e),e>l&&(l=e));return s<=o&&(o=0,s=r,c=0,l=i),{img:a,x0:o,x1:s+1,y0:c,y1:l+1}},[_,v,y,b]=await Promise.all([g(`OFFICIAL`,`600 56px ${h}`,520,90),g(`ESTIMATED`,`600 56px ${h}`,620,90),g(`SECONDARY`,`600 56px ${h}`,640,90),g(`NOW`,`700 70px ${h}`,300,100)]),x=(e,t,n,r,a,o,c,l)=>{let u=r/(e.y1-e.y0);(e.x0+e.x1)/2;let d=(e.y0+e.y1)/2;for(let r of j.sampleMask(e.img,a,i))s(t+(r[0]-e.x0)*u,n+(d-r[1])*u,.02,l,o,c);return(e.x1-e.x0)*u},S=[],C=Array.from({length:Oo},()=>.7+.6*i());for(let e=0;e<Oo;e++)for(let t=0;t<ko;t++){let n=.42+.6*Math.exp(-(((t-7)/6)**2))+.22*Math.exp(-(((t-20)/3)**2));S.push([i()**(1/(n*C[e])),e*ko+t])}S.sort((e,t)=>t[0]-e[0]);let w=S.slice(0,Ao).map(e=>e[1]),T=Math.floor(c(.47)/Ao),E=Math.floor(c(.2)/Ao);for(let e of w){let t=Math.floor(e/ko),n=jo+(e%ko+.5)*No,r=Mo+(t+.5)*Po,a=i(),o=a<.56?0:a<.86?1:2,c=.1*o;for(let e=0;e<T;e++)s(n+(i()-.5)*Fo,r+(i()-.5)*Io,0,1+c,m[o],.11);for(let e=0;e<E;e++){let e=i()*.6167142857142858,t,a;e<Fo?(t=e-Fo/2,a=-.11549999999999999/2):e<.3083571428571429?(t=Fo/2,a=e-Fo-Io/2):e<.5012142857142857?(t=Fo/2-(e-Fo-Io),a=Io/2):(t=-.19285714285714287/2,a=Io/2-(e-2*Fo-Io)),s(n+t,r+a,0,2+c,m[o],.3)}}for(let e=0;e<Oo;e++){let t=Mo+(e+.5)*Po;if(e%2==0)for(let e=0;e<c(.0016);e++)s(-3.95+i()*7.85,t+(i()-.5)*Po*.94,-.03,8,[.5,.6,.8],.028);let n=.075;for(let e=0;e<c(45e-5);e++)s(-3.95+i()*n,t+(i()-.5)*n,.01,3,p,.35);let r=[.3+i()*.45,.14+i()*.25];for(let e=0;e<c(75e-5);e++)s(-3.83+i()*r[0],t+.012+(i()-.5)*.026,.01,3,f,.3);for(let e=0;e<c(5e-4);e++)s(-3.83+i()*r[1],t-.032+(i()-.5)*.02,.01,3,[.6,.7,.9],.22)}for(let e=0;e<=ko;e++){let t=jo+e*No,n=e%4==0;for(let e=0;e<c(n?.0014:5e-4);e++)s(t,2.03+i()*(n?.12:.06),0,4,n?f:[.55,.65,.85],n?.5:.34);for(let e=0;e<c(5e-4);e++)s(t,-2.03-i()*(n?.12:.06),0,4,[.55,.65,.85],.3);if(n)for(let e=0;e<c(.0011);e++)s(t,Mo+i()*3.96,-.02,4,[.55,.7,.95],.085)}let D=.5-.54;[[_,l],[v,u],[y,d]].forEach(([e,t])=>{for(let e=0;e<c(.0012);e++)s(D+i()*.11,-2.5+(i()-.5)*.08,0,10,t,.5);let n=x(e,D+.18,-2.5,.07,c(.0034),[.75,.82,.95],.5,7);D+=.18+n+.22});let O=c(.014);for(let e=0;e<O;e++)s(0,-2.1+i()*4.2,.05,5,[.8,.97,1],.75);for(let e=0;e<c(.065);e++)s(-2.95+i()*6.95,-2.03+i()*4.06,-.01,6,[.45,.85,1],.1);for(let e=0;e<c(.004);e++){let e=i(),t=i();e+t>1&&(e=1-e,t=1-t),s((e-t)*.07,2.15-(e+t)*.1,.05,9,f,.9)}for(let e=0;e<c(.004);e++){let e=i(),t=i();e+t>1&&(e=1-e,t=1-t),s((e-t)*.07,-2.15+(e+t)*.1,.05,9,f,.9)}{let e=.085/(b.y1-b.y0),t=(b.x0+b.x1)/2,n=(b.y0+b.y1)/2;for(let r of j.sampleMask(b.img,c(.0045),i))s((r[0]-t)*e,2.32+(n-r[1])*e,.05,9,[.85,.98,1],.75)}for(let e=0;e<c(.025);e++)s(0,Mo+i()*3.96,.04,11,[.7,.95,1],.6);j.dust(t,n,o,r,i,6.4,.06*a,[.6,.78,1]);for(let e=o;e<r;e++)t[e*4+3]=0},glsl:`
const float RC_C = ${Bo.toFixed(1)};
const float RC_T0 = ${Vo.toFixed(2)};
const float RC_T1 = ${Ho.toFixed(2)};
const float RC_PI = 3.14159265;
float rc_h(vec2 c) { return fract(sin(dot(c, vec2(127.1, 311.7))) * 43758.5453); }
float rc_nowx(float tc) { return mix(${Lo.toFixed(3)}, ${Ro.toFixed(3)}, clamp((tc - RC_T0) / (RC_T1 - RC_T0), 0.0, 1.0)); }
float rc_lineA(float tc) { return smoothstep(0.9, 1.6, tc) * (1.0 - smoothstep(18.4, 19.4, tc)); }
vec3 rc_tilt(vec3 q) {
  float c = cos(${Uo.toFixed(3)}), s = sin(${Uo.toFixed(3)}); float x = q.x - ${zo.toFixed(3)};
  return vec3(x * c + q.z * s + ${zo.toFixed(3)}, q.y, -x * s + q.z * c);
}
// per-cell timing from the cell grid
vec2 rc_cell(vec3 p) { return floor(vec2((p.x - ${jo.toFixed(3)}) / ${No.toFixed(5)}, (p.y - ${Mo.toFixed(3)}) / ${Po.toFixed(5)})); }
vec3 anim_recruiting(vec3 p, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001), tc = mod(t, RC_C);
  float nx = rc_nowx(tc), la = rc_lineA(tc);
  if (cl < 0.5) return rc_tilt(p + 0.06 * vec3(sin(t * 0.21 + r.x * 40.0), sin(t * 0.17 + r.y * 40.0), sin(t * 0.13 + r.z * 40.0)));
  if (cl < 2.5) {
    vec2 cell = rc_cell(p);
    float cx = ${jo.toFixed(3)} + (cell.x + 0.5) * ${No.toFixed(5)}, cy = ${Mo.toFixed(3)} + (cell.y + 0.5) * ${Po.toFixed(5)};
    float h = rc_h(cell), fx = (cx - ${Lo.toFixed(3)}) / ${6.85.toFixed(3)};
    float tw = fx * (RC_T0 - 0.3) + h * 0.25, tl = RC_T0 + fx * (RC_T1 - RC_T0);
    float u1 = (tc - tw) / 0.32, u2 = (tc - tl) / 0.32;
    float sy = 1.0, lift = 0.0;
    if (u1 > 0.0 && u1 < 1.0) { sy *= abs(cos(RC_PI * u1)); lift += 0.1 * sin(RC_PI * u1); }
    if (u2 > 0.0 && u2 < 1.0) { sy *= abs(cos(RC_PI * u2)); lift += 0.1 * sin(RC_PI * u2); }
    float dx = cx - nx, imm = step(0.0, dx) * (1.0 - smoothstep(0.0, 1.7, dx)) * la;
    lift += 0.16 * imm * imm + 0.012 * sin(t * 1.3 + h * 20.0) * imm;
    return rc_tilt(vec3(p.x, cy + (p.y - cy) * max(sy, 0.04), p.z + lift));
  }
  if (cl > 4.5 && cl < 5.5) return rc_tilt(vec3(nx + 0.003 * sin(t * 9.0 + p.y * 6.0), p.y, p.z));
  if (cl > 8.5 && cl < 9.5) return rc_tilt(vec3(nx + p.x, p.y, p.z));
  if (cl > 10.5) {
    float age = fract(t * 0.7 + r.z);
    return rc_tilt(vec3(nx - (0.03 + 0.55 * age * (0.25 + r.x)), p.y + (r.y - 0.5) * 0.04 * age, p.z + (r.w - 0.5) * 0.05));
  }
  return rc_tilt(p);
}
float size_recruiting(vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl < 0.5) return 1.3;
  if (cl > 0.5 && cl < 1.5) return 1.1;
  if (cl > 4.5 && cl < 5.5) return 1.5;
  if (cl > 10.5) return 1.2;
  return 1.0;
}
vec4 color_recruiting(vec4 c, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001), tc = mod(t, RC_C);
  float nx = rc_nowx(tc), la = rc_lineA(tc);
  vec3 rgb = c.rgb; float a = c.a;
  if (cl < 0.5) return vec4(rgb, a * (0.6 + 0.4 * sin(t * (0.5 + r.x) + r.y * 30.0)));
  if (cl < 2.5) {
    vec2 cell = rc_cell(d.xyz);
    float cx = ${jo.toFixed(3)} + (cell.x + 0.5) * ${No.toFixed(5)};
    float h = rc_h(cell), fx = (cx - ${Lo.toFixed(3)}) / ${6.85.toFixed(3)};
    float tw = fx * (RC_T0 - 0.3) + h * 0.25, tl = RC_T0 + fx * (RC_T1 - RC_T0);
    float dx = cx - nx;
    float passed = tc < RC_T0 ? 1.0 - smoothstep(tw, tw + 0.12, tc) : 1.0 - smoothstep(0.0, 0.1, dx);
    float imm = step(0.0, dx) * (1.0 - smoothstep(0.0, 1.7, dx)) * la;
    float fl1 = (tc > tw && tc < tw + 1.0) ? exp(-(tc - tw) * 4.0) : 0.0;
    float fl2 = (tc > tl && tc < tl + 1.2) ? exp(-(tc - tl) * 2.6) : 0.0;
    rgb = mix(rgb, vec3(0.46, 0.52, 0.64), passed * 0.7);
    a *= mix(1.0, 0.36, passed);
    a *= 1.0 + imm * (0.9 + 0.5 * sin(t * 5.0 + h * 6.28));
    rgb = mix(rgb, vec3(1.0, 0.95, 0.8), imm * 0.28);
    rgb += vec3(0.9, 0.95, 1.0) * (fl1 * 0.5 + fl2 * 0.8);
    a *= 1.0 + 1.8 * fl1 + 2.6 * fl2;
    return vec4(rgb, a);
  }
  if (cl > 3.5 && cl < 4.5) return vec4(rgb, a * (0.8 + 0.2 * sin(t * 0.8 + d.x * 3.0)));
  if (cl > 4.5 && cl < 5.5) return vec4(rgb, a * la * (0.65 + 0.5 * sin(d.y * 9.0 - t * 7.0) * sin(d.y * 3.0 + t)));
  if (cl > 5.5 && cl < 6.5) {
    float dxl = nx - d.x;
    float g = dxl > 0.0 ? exp(-dxl / 0.55) : exp(dxl / 0.06);
    return vec4(rgb, a * la * g * 2.0);
  }
  if (cl > 8.5 && cl < 9.5) return vec4(rgb, a * la);
  if (cl > 10.5) { float age = fract(t * 0.7 + r.z); return vec4(rgb, a * la * pow(1.0 - age, 2.0)); }
  return vec4(rgb, a);
}`,camera:{pos:[.1,0,10.9],target:[.05,0,0],fov:35},pointSize:1.8,drift:.004},Go=o({SECRETARY_SOURCES:()=>us,default:()=>ms,secretaryStreams:()=>ps,secretaryUniforms:()=>ds}),Ko=14,qo=1.9,Jo=[.5,3.7,6.9,10.1],Yo=-1.45,Xo=1.35,Zo=-1.75,Qo=1.75,$o=1.38,es=10,ts=1.28,ns=.3,rs=[0,0,1,1,1,2,2,2,3,3],is=[[1,.4,.34],[1,.76,.3],[.4,.86,1],[.68,.68,.9]],as=[[1,.42,.34],[.3,.74,1],[.62,.56,1],[.36,.95,.56]],os=[[[-3.75,2.05],[-2.7,1.1],[-1.5,.78]],[[3.7,2.35],[1.3,2.6],[.25,1.82]],[[-3.75,-2.05],[-2.7,-1],[-1.5,-.62]],[[3.7,-2.35],[1.3,-2.6],[.25,-1.82]]],J={x0:1.85,x1:3.5,y0:-1.25,y1:1.75,cols:5,rows:8,head:.3},ss=[[1,1,2],[3,4,2],[0,5,2],[4,2,2]],cs=e=>{let t=(J.x1-J.x0)/J.cols,n=(J.y1-J.head-J.y0)/J.rows,[r,i,a]=ss[e],o=J.x0+r*t+.03,s=J.x0+(r+1)*t-.03,c=J.y1-J.head-i*n-.03,l=J.y1-J.head-(i+a)*n+.03;return{x0:o,x1:s,y0:l,y1:c,cx:(o+s)/2,cy:(l+c)/2}},ls=e=>{let t=e<3?0:e<5?1:e<8?2:3,n=e<3?e:e<5?e-3:e<8?e-5:e-8;return Jo[t]+2.1+.2*n},us=[`Gmail`,`University Outlook`,`iMessage`,`WhatsApp`],ds={hi:{value:-1}},fs=(e,t)=>{let[n,r,i]=os[e],a=1-t;return[a*a*n[0]+2*a*t*r[0]+t*t*i[0],a*a*n[1]+2*a*t*r[1]+t*t*i[1]]};function ps(e,t=20){let n=Math.cos(.24),r=Math.sin(.24),i=Math.cos(-.07),a=Math.sin(-.07),o=e.scale??1,s=e.yaw??0,c=Math.cos(s),l=Math.sin(s);return us.map((s,u)=>({name:s,k:u,path:Array.from({length:t+1},(s,d)=>{let[f,p]=fs(u,d/t),m=.06,h=f*n+m*r,g=-f*r+m*n,_=p*i-g*a,v=p*a+g*i,y=h*o,b=_*o,x=v*o;return[c*y+l*x+e.at[0],b+e.at[1],-l*y+c*x+e.at[2]]})}))}var ms={id:`secretary`,build(e,t,n){let r=e.count,i=e.rand,a=(262144/r)**.8,o=0,s=(e,i,s,c,l,u)=>{o<r&&j.set(t,n,o++,e,i,s,c,l[0],l[1],l[2],u*a)},c=e=>Math.max(1,Math.floor(e*r)),l=[.95,.93,.85],u=[1,.8,.4],d=[.55,.75,1],f=(e,t,n,r,a,o,c,l,u=0)=>{let d=n-e,f=r-t,p=2*(d+f);for(let m=0;m<a;m++){let a=i()*p,m,h;a<d?(m=e+a,h=t):a<d+f?(m=n,h=t+a-d):a<2*d+f?(m=n-(a-d-f),h=r):(m=e,h=r-(a-2*d-f)),s(m,h,u,o,c,l)}},p=(e,t,n,r,a,o,c,l,u=0)=>{for(let d=0;d<a;d++)s(e+i()*(n-e),t+i()*(r-t),u,o,c,l)},m=(e,t,n,r,a,o,c,l,u=0)=>{for(let d=0;d<a;d++){let a=i();s(e+(n-e)*a,t+(r-t)*a,u,o,c,l)}};f(Yo,Zo,Xo,Qo,c(.016),1,l,.5),f(-1.48,-1.78,1.3800000000000001,1.78,c(.006),1,d,.3,-.02),p(Yo,$o,Xo,Qo,c(.012),1,d,.1),m(Yo,$o,Xo,$o,c(.004),1,l,.6);for(let e=0;e<c(.0045);e++)s(-1.3499999999999999+i()*.9,1.56+(i()-.5)*.04,.01,1,l,.4);for(let e=0;e<c(.003);e++)s(-1.3499999999999999+i()*.55,1.49+(i()-.5)*.025,.01,1,[.6,.7,.9],.3);p(Yo,Zo,Xo,$o,c(.045),12,[.45,.65,1],.026,-.03);for(let e=0;e<es;e++){let t=ts-(e+.5)*ns,n=.01*e,r=is[rs[e]];m(Yo,ts-(e+1)*ns,Xo,ts-(e+1)*ns,c(.0018),2+n,[.55,.65,.85],.22),p(-1.38,t-.085,-1.27,t+.085,c(.0016),3+n,r,.55),f(-1.38,t-.085,-1.27,t+.085,c(8e-4),3+n,r,.7);let a=.7+.65*i(),o=a*(.35+.3*i());p(-1.15,t+.02,-1.15+a,t+.06,c(.0024),3+n,l,.42),p(-1.15,t-.065,-1.15+o,t-.035,c(.0014),3+n,[.65,.75,.95],.3),f(.9500000000000001,t-.075,1.27,t+.075,c(.0012),3+n,[.7,.8,1],.45),p(1,t-.015,1.1+.1*i(),t+.015,c(7e-4),3+n,[.8,.88,1],.4)}f(J.x0,J.y0,J.x1,J.y1,c(.012),6,l,.45);let h=(J.x1-J.x0)/J.cols,g=(J.y1-J.head-J.y0)/J.rows;m(J.x0,J.y1-J.head,J.x1,J.y1-J.head,c(.003),6,l,.5);for(let e=1;e<J.cols;e++)m(J.x0+e*h,J.y0,J.x0+e*h,J.y1,c(.0022),6,d,.2);for(let e=1;e<J.rows;e++)m(J.x0,J.y1-J.head-e*g,J.x1,J.y1-J.head-e*g,c(.0022),6,d,.16);for(let e=0;e<J.cols;e++)p(J.x0+e*h+.1,J.y1-.18,J.x0+(e+1)*h-.1,J.y1-.13,c(9e-4),6,l,.4);ss.forEach((e,t)=>{let n=cs(t);f(n.x0,n.y0,n.x1,n.y1,c(.0042),7+.1*t,u,.7),p(n.x0,n.y0,n.x1,n.y1,c(.0062),7+.1*t,[1,.7,.28],.18),p(n.x0+.05,n.y1-.09,n.x0+.05+.18,n.y1-.06,c(9e-4),7+.1*t,[1,.92,.7],.6)});for(let e=0;e<4;e++){let t=.6+e*.2,n=1.565;for(let r=0;r<c(8e-4);r++){let r=i()*6.2832;s(t+.045*Math.cos(r),n+.045*Math.sin(r),.02,8+.1*e,l,.8)}for(let r=0;r<c(8e-4);r++){let r=i()*6.2832,a=.03*Math.sqrt(i());s(t+a*Math.cos(r),n+a*Math.sin(r),.02,8+.1*e,[.5,.95,1],.9)}}let _=Math.floor(c(.125)/48);for(let e=0;e<4;e++)for(let t=0;t<12;t++){let n=4+.1*e+.001*t,r=as[e];if(e<2){let e=.15,t=.105;for(let a=0;a<_;a++){let a=i();if(a<.45){let a=Math.floor(i()*4),o=i(),c=0,l=0;a===0?(c=-.15+2*e*o,l=-.105):a===1?(c=e,l=-.105+2*t*o):a===2?(c=e-2*e*o,l=t):(c=-.15,l=t-2*t*o),s(c,l,0,n,r,.7)}else if(a<.7){let r=i();s((i()<.5?-1:1)*e*(1-r),t-r*t*1,.01,n,[1,1,1],.6)}else s((i()*2-1)*e,(i()*2-1)*t,0,n,r,.2)}}else{let e=.15,t=.1;for(let a=0;a<_;a++){let a=i();if(a<.4){let a=Math.floor(i()*4),o=i(),c=0,l=0;a===0?(c=-.15+2*e*o,l=-.1):a===1?(c=e,l=-.1+2*t*o):a===2?(c=e-2*e*o,l=t):(c=-.15,l=t-2*t*o),s(c,l,0,n,r,.7)}else if(a<.5){let e=i();s(-.105-e*.06,-.1-e*.07,.01,n,r,.7)}else if(a<.68){let e=Math.floor(i()*3),t=i()*6.2832,r=.018*Math.sqrt(i());s((e-1)*.07+r*Math.cos(t),r*Math.sin(t),.01,n,[1,1,1],.9)}else s((i()*2-1)*e,(i()*2-1)*t,0,n,r,.22)}}}for(let e=0;e<4;e++)for(let t=0;t<c(.075);t++)s(0,0,0,5+.1*e,as[e],.34);for(let e=0;e<4;e++){let[t,n]=os[e][0],r=e%2==0?1:-1;for(let i=0;i<3;i++){let a=t-r*0+i*.05*r,o=n-i*.05*(n>0?1:-1)*-1*0+i*.05;f(a-.17,o-.12,a+.17,o+.12,c(.0042),9+.1*e,as[e],.55-i*.12)}for(let a=0;a<c(.004);a++){let a=i()*6.2832,o=.34*(.8+.2*i());s(t+.05*r+o*Math.cos(a),n+.05+o*Math.sin(a)*.9,-.01,9+.1*e,as[e],.22)}}for(let e=0;e<4;e++)for(let t=0;t<c(.011);t++){let t=i()*6.2832;s(Math.cos(t),Math.sin(t),-.08,11+.1*e,[.6,.85,1],.6)}j.dust(t,n,o,r,i,6.2,.07*a,[.7,.8,1]);for(let e=o;e<r;e++)t[e*4+3]=0},glsl:`
const float SC_C = ${Ko.toFixed(1)};
const float SC_FL = ${qo.toFixed(2)};
const float SC_PI = 3.14159265;
uniform float u_secretary_hi;
float sc_tp(float m) { ${Jo.map((e,t)=>`if (m < ${t}.5) return ${e.toFixed(2)};`).join(` `)} return ${Jo[3].toFixed(2)}; }
vec2 sc_bz(float k, float s) {
  vec2 a, b, c;
${os.map((e,t)=>`  ${t?`else `:``}if (k < ${t}.5) { a = vec2(${e[0][0]}, ${e[0][1]}); b = vec2(${e[1][0]}, ${e[1][1]}); c = vec2(${e[2][0]}, ${e[2][1]}); }`).join(`
`)}
  float u = 1.0 - s;
  return u * u * a + 2.0 * u * s * b + s * s * c;
}
vec2 sc_hold(float m) {
${ss.map((e,t)=>{let n=cs(t);return`  if (m < ${t}.5) return vec2(${n.cx.toFixed(4)}, ${n.cy.toFixed(4)});`}).join(`
`)}
  return vec2(0.0);
}
float sc_rowt(float r) {
${Array.from({length:es},(e,t)=>`  if (r < ${t}.5) return ${ls(t).toFixed(2)};`).join(`
`)}
  return ${ls(9).toFixed(2)};
}
vec3 sc_tilt(vec3 q) {
  float cy = cos(0.24), sy = sin(0.24);
  q = vec3(q.x * cy + q.z * sy, q.y, -q.x * sy + q.z * cy);
  float cp = cos(-0.07), sp = sin(-0.07);
  return vec3(q.x, q.y * cp - q.z * sp, q.y * sp + q.z * cp);
}
float sc_ease(float x) { x = clamp(x, 0.0, 1.0); return x * x * (3.0 - 2.0 * x); }
// glyph timing: stream k, glyph j -> age in flight (q 0..1)
float sc_q(float k, float j, float tc) {
  float m = floor(j / 3.0), g = j - m * 3.0;
  float L = sc_tp(m) + 0.12 * g + 0.06 * k;
  return (tc - L) / SC_FL;
}
vec3 anim_secretary(vec3 p, vec4 d, vec4 r, float t) {
  float w = d.w, cl = floor(w + 0.001), tc = mod(t, SC_C);
  float kf = fract(w) * 10.0, k = floor(kf + 0.0001);
  if (cl < 0.5) return sc_tilt(p + 0.06 * vec3(sin(t * 0.21 + r.x * 40.0), sin(t * 0.17 + r.y * 40.0), sin(t * 0.13 + r.z * 40.0)));
  if (cl > 3.5 && cl < 4.5) {
    float j = floor((kf - k) * 100.0 + 0.5);
    float q = sc_q(k, j, tc), e = sc_ease(q);
    vec2 B = sc_bz(k, e);
    float sc = mix(0.55, 1.0, smoothstep(0.0, 0.25, q)) * (1.0 - 0.5 * smoothstep(0.78, 1.0, q));
    float a = 0.3 * sin(q * 5.0 + k * 1.7 + j);
    vec2 l = vec2(p.x * cos(a) - p.y * sin(a), p.x * sin(a) + p.y * cos(a)) * sc;
    return sc_tilt(vec3(B + l, 0.08 + 0.04 * sin(q * SC_PI)));
  }
  if (cl > 4.5 && cl < 5.5) {
    float s = fract(r.x + t * 0.11), e = s;
    vec2 B = sc_bz(k, e);
    float jit = 0.05 * (1.0 - 0.55 * s);
    return sc_tilt(vec3(B + jit * vec2(r.y * 2.0 - 1.0, r.z * 2.0 - 1.0), 0.02 * (r.w - 0.5)));
  }
  if (cl > 6.5 && cl < 7.5) {
    vec2 c = sc_hold(k); float w0 = sc_tp(k) + 2.6;
    float pop = tc > w0 ? 1.0 + 0.16 * exp(-(tc - w0) * 6.0) * cos((tc - w0) * 18.0) : 1.0;
    float on = smoothstep(w0 - 0.01, w0 + 0.01, tc);
    return sc_tilt(vec3(c + (p.xy - c) * mix(0.96, pop, on), p.z + 0.05 * on));
  }
  if (cl > 10.5 && cl < 11.5) {
    float age = tc - sc_tp(k);
    float rad = 0.35 + max(age, 0.0) * 1.9;
    return sc_tilt(vec3(p.xy * rad * vec2(1.0, 1.0) + vec2(-0.05, 0.0), p.z));
  }
  if (cl > 2.5 && cl < 3.5) {
    float row = floor(fract(w) * 100.0 + 0.5), wt = sc_rowt(row);
    float lift = (tc > wt && tc < wt + 0.6) ? 0.04 * exp(-(tc - wt) * 5.0) : 0.0;
    return sc_tilt(p + vec3(0.0, 0.0, lift));
  }
  if (cl > 8.5 && cl < 9.5) return sc_tilt(p + vec3(0.0, 0.012 * sin(t * 1.4 + k * 2.0), 0.0));
  return sc_tilt(p);
}
float size_secretary(vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  float hk = floor(fract(d.w) * 10.0 + 0.0001), on = (cl > 3.5 && cl < 5.5) || (cl > 8.5 && cl < 9.5) ? step(abs(hk - u_secretary_hi), 0.5) : 0.0;
  if (cl < 0.5) return 1.3;
  if (cl > 4.5 && cl < 5.5) return 0.85 * (1.0 + 0.45 * on);
  if (cl > 3.5 && cl < 4.5) return 0.9 * (1.0 + 0.3 * on);
  if (cl > 11.5) return 3.0;
  return 1.0;
}
vec4 color_secretary_base(vec4 c, vec4 d, vec4 r, float t);
vec4 color_secretary(vec4 c, vec4 d, vec4 r, float t) {
  vec4 o = color_secretary_base(c, d, r, t);
  float cl = floor(d.w + 0.001), hk = floor(fract(d.w) * 10.0 + 0.0001);
  float on = (cl > 3.5 && cl < 5.5) || (cl > 8.5 && cl < 9.5) ? step(abs(hk - u_secretary_hi), 0.5) : 0.0;
  return vec4(mix(o.rgb, vec3(1.0), 0.28 * on), o.a * (1.0 + 1.5 * on));
}
vec4 color_secretary_base(vec4 c, vec4 d, vec4 r, float t) {
  float w = d.w, cl = floor(w + 0.001), tc = mod(t, SC_C);
  float kf = fract(w) * 10.0, k = floor(kf + 0.0001);
  vec3 rgb = c.rgb; float a = c.a;
  if (cl < 0.5) return vec4(rgb, a * (0.6 + 0.4 * sin(t * (0.5 + r.x) + r.y * 30.0)));
  if (cl < 1.5) { a *= 0.88 + 0.12 * sin(t * 0.9 + d.y * 2.0); return vec4(rgb, a); }
  if (cl > 11.5 && cl < 12.5) { float b = 0.0; for (int m = 0; m < 4; m++) { float ag = tc - sc_tp(float(m)) - 1.9; b += ag > 0.0 && ag < 1.2 ? exp(-ag * 3.0) : 0.0; } return vec4(rgb, a * (0.7 + 2.0 * b)); }
  if (cl > 1.5 && cl < 3.5) {
    float row = floor(fract(w) * 100.0 + 0.5), wt = sc_rowt(row);
    float f = clamp((tc - wt) / 0.55, 0.0, 1.0);
    float xn = (d.x - ${Yo.toFixed(3)}) / ${2.8.toFixed(3)};
    float on = step(xn, f) * (1.0 - smoothstep(13.0, 13.7, tc)) * step(wt, tc + 0.0001);
    float head = exp(-pow((xn - f) / 0.035, 2.0)) * step(0.001, f) * step(f, 0.999);
    if (cl < 2.5) return vec4(rgb, a * (0.6 + 0.8 * on + 1.0 * head));
    float flash = (tc > wt + 0.5 && tc < wt + 1.4) ? exp(-(tc - wt - 0.5) * 3.0) : 0.0;
    return vec4(mix(rgb, vec3(1.0), head * 0.7 + flash * 0.25), a * (0.2 + 1.2 * on + 2.4 * head + 0.5 * flash));
  }
  if (cl > 3.5 && cl < 4.5) {
    float j = floor((kf - k) * 100.0 + 0.5), q = sc_q(k, j, tc);
    float vis = (q > 0.0 && q < 1.0) ? smoothstep(0.0, 0.06, q) * (1.0 - smoothstep(0.86, 1.0, q)) : 0.0;
    return vec4(rgb, a * vis * 1.2);
  }
  if (cl > 4.5 && cl < 5.5) {
    float s = fract(r.x + t * 0.11);
    float surge = 0.0;
    for (int m = 0; m < 4; m++) { float sp = (tc - sc_tp(float(m)) - 0.06 * k) / SC_FL; surge += exp(-pow((s - sp) / 0.2, 2.0)); }
    float env = sin(SC_PI * s);
    return vec4(mix(rgb, vec3(1.0), clamp(surge * 0.35, 0.0, 0.6)), a * env * (0.45 + 2.6 * surge));
  }
  if (cl > 5.5 && cl < 6.5) return vec4(rgb, a);
  if (cl > 6.5 && cl < 7.5) {
    float w0 = sc_tp(k) + 2.6, on = smoothstep(w0 - 0.01, w0 + 0.3, tc) * (1.0 - smoothstep(13.0, 13.7, tc));
    float glow = (tc > w0 && tc < w0 + 1.4) ? exp(-(tc - w0) * 2.4) : 0.0;
    return vec4(mix(rgb, vec3(1.0, 0.95, 0.8), glow * 0.5), a * (0.2 + 1.4 * on + 1.6 * glow + 0.2 * on * sin(t * 2.0 + k)));
  }
  if (cl > 7.5 && cl < 8.5) {
    float cur = tc >= sc_tp(k) ? (k > 2.5 ? 1.0 : (tc < sc_tp(k + 1.0) ? 1.0 : 0.0)) : 0.0;
    float done = tc >= sc_tp(k) ? 1.0 : 0.0;
    return vec4(rgb, a * (0.18 + 0.45 * done + 1.2 * cur * (0.8 + 0.2 * sin(t * 4.0))));
  }
  if (cl > 8.5 && cl < 9.5) {
    float ag = 100.0; for (int m = 0; m < 4; m++) { float x = tc - sc_tp(float(m)); if (x >= 0.0 && x < ag) ag = x; }
    return vec4(rgb, a * (0.85 + 2.0 * exp(-ag * 2.5)));
  }
  if (cl > 10.5 && cl < 11.5) {
    float age = tc - sc_tp(k);
    float vis = (age > 0.0 && age < 2.4) ? exp(-age * 1.5) * smoothstep(0.0, 0.1, age) : 0.0;
    return vec4(rgb, a * vis * 1.4);
  }
  return vec4(rgb, a);
}`,uniforms:{u_secretary_hi:ds.hi},camera:{pos:[.05,.1,10.2],target:[0,0,0],fov:35},pointSize:1.9,drift:.006},hs=o({default:()=>gs}),gs={id:`sphere`,build(e,t,n){let r=e.count;for(let i=0;i<r;i++){let a=e.rand()*2-1,o=e.rand()*Math.PI*2,s=Math.sqrt(1-a*a),c=i<r*.08,l=c?.35*Math.cbrt(e.rand()):1.6+(e.rand()-.5)*.04,u=c?j.hex(`#FF4A2B`):j.hex(`#EDE6D6`);j.set(t,n,i,Math.cos(o)*s*l,a*l,Math.sin(o)*s*l,0,u[0],u[1],u[2],c?.9:.35)}},glsl:`
vec3 anim_sphere(vec3 p, vec4 d, vec4 r, float t) { return p * (1.0 + 0.03 * sin(t * 1.3 + r.x * 6.28)); }`,camera:{pos:[0,0,7],target:[0,0,0]}},_s=o({default:()=>Ds}),vs=3.2,ys=2.2,Y=-1.15,bs=3.2,xs=.12,Ss=e=>-.05+.45*e,Cs=(e,t)=>D(E,Ss(e),T(t)),ws=e=>-1.0699999999999998+(e-xs)*bs,Ts=13,Es=8,Ds={id:`surface`,build(e,t,n){let r=e.count,i=e.rand,a=(262144/r)**.8,o=j.hex(`#B48CFF`),s=j.hex(`#EDE6D6`),c=0,l=(e,r,i,a,o,s,l,u)=>{j.set(t,n,c++,e,r,i,a,o,s,l,u)},u=e=>Math.max(1,Math.floor(e*r)),d=e=>e*vs,f=e=>ys*(1-2*e),p=(e,t,n,r,s=0,c=0)=>l(d(e)+(i()-.5)*s,ws(Cs(e,t))+c+(i()-.5)*.012,f(t)+(i()-.5)*s,n,o[0],1,0,r*a),m=u(.56),h=Math.ceil(Math.sqrt(m/(vs/ys))),g=Math.ceil(m/h);for(let e=0;e<m;e++){let t=e%g,n=Math.floor(e/g);p((t+i())/g*2-1,Math.min(1,(n+i())/h),1,.5)}let _=u(.075),v=Math.floor(_/13);for(let e=0;e<13;e++)for(let t=0;t<v;t++)p(-1+e/6,i(),2,.2,.006,.004);let y=u(.075),b=Math.floor(y/11);for(let e=0;e<11;e++)for(let t=0;t<b;t++)p(i()*2-1,e/10,3,.2,.006,.004);let x=u(.035),S=Math.ceil(Math.sqrt(x/(vs/ys))),C=Math.ceil(x/S);for(let e=0;e<x;e++){let t=e%C,n=Math.floor(e/C),r=(t+i())/C*2-1,o=Math.min(1,(n+i())/S);l(d(r),Y,f(o),4,1,1,0,.11*a)}let w=u(.034);for(let e=0;e<w;e++){let e=i();e<.55?p(i()*2-1,0,6,.38,.004,.012):e<.78?p(i()*2-1,1,6,.4,.004,.012):p(-1,i(),6,.45,.004,.012)}let T=u(.02),E=Math.floor(T/104);for(let e=0;e<Ts;e++)for(let t=0;t<Es;t++)for(let n=0;n<E;n++)p(-.9+.15*e,.04+t/7*.92,7,.55,.026,.022);let D=u(.07),O=(e,t,n,r)=>{for(let o=0;o<n;o++){let n=i();l(e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n,5,s[0]*.92,s[1]*.9,s[2]*1.05,r*a)}},k=D,A=c,M=e=>Math.floor(e*k);O([-3.2,Y,ys],[vs,Y,ys],M(.12),.8),O([vs,Y,ys],[vs,Y,-2.2],M(.08),.8),O([vs,Y,-2.2],[-3.2,Y,-2.2],M(.06),.42),O([-3.2,Y,-2.2],[-3.2,Y,ys],M(.06),.42),O([-3.2,Y,-2.2],[-3.2,1.5500000000000003,-2.2],M(.1),.85),O([vs,Y,-2.2],[vs,.050000000000000044,-2.2],M(.03),.3),O([-3.2,Y,ys],[-3.2,.050000000000000044,ys],M(.03),.3);for(let e=0;e<=12;e++){let t=-3.2+e/12*2*vs;O([t,Y,ys],[t,Y,ys+(e%2?.07:.13)],26,.8)}for(let e=0;e<=10;e++){let t=ys-e/10*2*ys;O([vs,Y,t],[vs+(e%5?.07:.13),Y,t],26,.8)}for(let e=0;e<=10;e++){let t=Y+e*.27;O([-3.2,t,-2.2],[-3.2-(e%5?.07:.13),t,-2.2],26,.8)}for(let e=1;e<=9;e++){let t=Y+e*.27;O([-3.2,t,-2.2],[vs,t,-2.2],M(.012),.14),O([-3.2,t,ys],[-3.2,t,-2.2],M(.008),.14)}for(let e=0;e<=12;e++){let t=-3.2+e/12*2*vs;O([t,Y,-2.2],[t,1.4500000000000002,-2.2],M(.01),.1)}for(let e=1;e<=5;e++){let t=ys-e/5*2*ys;O([-3.2,Y,t],[-3.2,1.4500000000000002,t],M(.008),.1)}for(;c-A<k&&c<r;)O([-3.2,Y,ys],[vs,Y,ys],1,.8);j.dust(t,n,c,r,i,6.6,.075*a,[.78,.7,.95]);for(let e=c;e<r;e++)t[e*4+3]=8},glsl:`
const float SF_X = ${vs.toFixed(2)};
const float SF_Z = ${ys.toFixed(2)};
const float SF_Y0 = ${Y.toFixed(2)};
const float SF_YS = ${bs.toFixed(2)};
const float SF_IV0 = ${xs.toFixed(2)};
const float SF_P1 = 7.0;
const float SF_P2 = 11.0;
const float SF_TMIN = 0.0191781;   // one week in years
const float SF_TR = 104.2857;      // 2 years / 1 week
// ripple fronts (ETF rebalancing flows) sweeping across maturities: returns (bump, envelope)
vec2 sf_ripple(float k, float m, float t, float P, float dir, float off) {
  float ph = fract(t / P + off);
  float f = ph * 1.7 - 0.35;
  if (dir < 0.0) f = 1.0 - f;
  float w = m - f;
  float env = exp(-w * w / (2.0 * 0.08 * 0.08)) * (0.65 + 0.35 * cos(k * 1.8 + off * 6.0));
  return vec2(env * cos(w * 32.0), env);
}
// SSVI implied vol at form coordinates (k in [-1,1], m in [0,1] log-maturity), parameters breathing slowly
float sf_ssvi(float ku, float m, float t) {
  float k = -0.05 + 0.45 * ku;
  float T = SF_TMIN * pow(SF_TR, clamp(m, 0.0, 1.0));
  float lvl = 0.17 + 0.012 * sin(t * 0.23) + 0.008 * sin(t * 0.11 + 1.0);
  float slope = 0.35 + 0.06 * sin(t * 0.13 + 2.0);
  float rho = -0.70 + 0.10 * sin(t * 0.17 + 0.6);
  float eta = 0.80 + 0.07 * sin(t * 0.21 + 2.2);
  float sa = lvl * (1.0 + slope * (1.0 - exp(-T / 0.6)));
  float th = sa * sa * T;
  float ph = eta / (sqrt(th) * sqrt(1.0 + th));
  float x = ph * k + rho;
  float w = 0.5 * th * (1.0 + rho * ph * k + sqrt(x * x + 1.0 - rho * rho));
  return sqrt(w / T);
}
float sf_iv(float k, float m, float t, out float hot) {
  float iv = sf_ssvi(k, m, t);
  vec2 r1 = sf_ripple(k, m, t, SF_P1, 1.0, 0.0), r2 = sf_ripple(k, m, t, SF_P2, -1.0, 0.45);
  iv += 0.020 * r1.x + 0.012 * r2.x;
  hot = r1.y + 0.6 * r2.y;
  return iv;
}
float sf_y(float iv) { return SF_Y0 + 0.08 + (iv - SF_IV0) * SF_YS; }
float sf_h(vec2 q) { return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
// a listed quote: which lattice cell, and how far its mid is jittering right now (in vol)
vec2 sf_quote(float k, float m, float t) {
  vec2 q = vec2(floor((k + 0.9) / 0.15 + 0.5), floor((m - 0.04) / 0.131429 + 0.5));
  float h1 = sf_h(q), h2 = sf_h(q + 7.3);
  float n = sin(t * (0.9 + 0.8 * h1) + h1 * 40.0) * 0.6 + sin(t * 0.37 + h2 * 30.0) * 0.5;
  return vec2(0.006 * (1.0 + 0.9 * abs(k)) * n, 0.5 + 0.5 * sin(t * (1.6 + h2) + h1 * 20.0));
}
vec3 anim_surface(vec3 p, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl > 7.5) return p + 0.05 * vec3(sin(t * 0.13 + r.x * 40.0), sin(t * 0.11 + r.y * 40.0), sin(t * 0.09 + r.z * 40.0));
  if (cl > 3.5 && cl < 5.5) return p;
  float k = p.x / SF_X, m = 0.5 - p.z / (2.0 * SF_Z), hot;
  float iv = sf_iv(k, m, t, hot);
  if (cl > 6.5) {
    vec2 qn = sf_quote(k, m, t);
    return vec3(p.x, sf_y(iv + qn.x) + 0.022, p.z);
  }
  float lift = cl < 1.5 ? (r.y - 0.5) * 0.012 : cl < 3.5 ? 0.004 : 0.014;
  return vec3(p.x, sf_y(iv) + lift + 0.0035 * sin(t * 1.3 + r.x * 60.0), p.z);
}
float size_surface(vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl < 1.5) return 0.95;
  if (cl < 3.5) return 1.1;
  if (cl < 4.5) return 0.85;
  if (cl < 5.5) return 0.9;
  if (cl < 6.5) return 1.25;
  if (cl < 7.5) return 1.25;
  return 1.0;
}
vec3 sf_ramp(float h) {
  vec3 c0 = vec3(0.13, 0.04, 0.33), c1 = vec3(0.52, 0.32, 0.93), c2 = vec3(0.78, 0.65, 1.0), c3 = vec3(0.97, 0.93, 0.85);
  if (h < 0.34) return mix(c0, c1, h / 0.34);
  if (h < 0.68) return mix(c1, c2, (h - 0.34) / 0.34);
  return mix(c2, c3, clamp((h - 0.68) / 0.32, 0.0, 1.0));
}
vec4 color_surface(vec4 c, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl < 0.5 || (cl > 4.5 && cl < 5.5) || cl > 7.5) return c;
  float k = d.x / SF_X, m = 0.5 - d.z / (2.0 * SF_Z), hot;
  float iv = sf_iv(k, m, t, hot);
  if (cl > 6.5) {
    vec2 qn = sf_quote(k, m, t);
    vec3 cream = vec3(0.99, 0.94, 0.82);
    return vec4(cream + vec3(0.6, 0.4, 0.2) * clamp(hot, 0.0, 1.0), c.a * (0.55 + 0.6 * qn.y));
  }
  float h = pow(clamp((iv - SF_IV0) / 0.56, 0.0, 1.2), 0.7);
  vec3 rgb = sf_ramp(h);
  float a = c.a;
  if (cl < 1.5) {
    a *= 0.55 + 0.5 * h;
    // iso-vol contour lines every 2.5 vol points, drawn where the moving surface crosses each level
    float e = 0.03, ex = e / SF_X, ez = e / (2.0 * SF_Z), hh;
    float gx = (sf_iv(k + ex, m, t, hh) - sf_iv(k - ex, m, t, hh)) / (2.0 * e);
    float gz = (sf_iv(k, m - ez, t, hh) - sf_iv(k, m + ez, t, hh)) / (2.0 * e);
    float slope = max(length(vec2(gx, gz)), 0.02);
    a /= 1.0 + 1.1 * slope;   // steep faces seen edge-on stack particles: keep them from blowing out
    float dist = abs(fract(iv / 0.025 + 0.5) - 0.5) * 0.025 / slope;
    float line = smoothstep(0.02, 0.005, dist);
    rgb = mix(rgb, vec3(0.99, 0.95, 0.88), line * 0.85);
    a *= 1.0 + 1.9 * line;
  }
  else if (cl < 3.5) { a *= 0.8 + 0.7 * h; rgb = mix(rgb, vec3(0.97, 0.93, 0.85), 0.25); }
  else if (cl < 4.5) { rgb = sf_ramp(h * 0.85) * 0.9; a *= 0.5 + h; }
  else { rgb = mix(rgb, vec3(0.97, 0.93, 0.85), 0.55); }
  rgb += vec3(0.97, 0.93, 0.85) * 0.55 * clamp(hot, 0.0, 1.0);
  a *= 1.0 + 1.1 * clamp(hot, 0.0, 1.0);
  return vec4(rgb, a);
}`,camera:{pos:[2.6,5.2,10.8],target:[1.1,-.15,0],fov:35},pointSize:2,drift:.01,anchors:[{id:`strike`,label:`Strike`,pos:[0,Y,2.4800000000000004]},{id:`maturity`,label:`Maturity`,pos:[3.52,Y,0]},{id:`iv`,label:`Implied vol`,pos:[-3.2-.1,1.7000000000000002,-2.2]}]},Os=o({default:()=>Ks}),ks=3.55,As=2.05,js=.17,Ms=3.7199999999999998,Ns=2.2199999999999998,Ps=3,Fs=1.68,Is=.86,Ls=1.2,Rs=.64,zs=.89,Bs=[2.72,-1.32],Vs=(()=>{let e=[-.35,.78,.52],t=Math.hypot(e[0],e[1],e[2]);return[e[0]/t,e[1]/t,e[2]/t]})(),Hs=[[`A`,0],[`K`,0],[`Q`,0],[`J`,1],[`10`,2],[`4`,3],[`2`,0]];function Us(e,t,n=720){let r=new Float32Array(n+1),i=e,a=0;for(let o=1;o<=n;o++){let s=o/n*Math.PI*2,c=e*Math.cos(s),l=t*Math.sin(s);r[o]=r[o-1]+Math.hypot(c-i,l-a),i=c,a=l}return r}function Ws(e,t){let n=e.length-1,r=t*e[n],i=0,a=n;for(;a-i>1;){let t=i+a>>1;e[t]<r?i=t:a=t}let o=(r-e[i])/Math.max(1e-9,e[a]-e[i]);return(i+o)/n*Math.PI*2}function Gs(e,t){for(let n=0;n<60;n++){if(e===2){let e=t()*2-1,n=t()*2-1;if(Math.abs(e)*1.3+Math.abs(n)<=1)return[e,n];continue}if(e===3){if(t()<.8){let e=Math.floor(t()*3),n=[0,-.5,.5][e],r=[.45,-.15,-.15][e],i=t()*6.2832,a=.38*Math.sqrt(t());return[n+Math.cos(i)*a,r+Math.sin(i)*a]}let e=-1+t()*.95,n=.07+.3*(1-(e+1)/.95)*.9;return[(t()*2-1)*n,e]}let n=e===0;if(e===0&&t()<.12){let e=-1+t()*.6,n=.09+.3*(1-(e+1)/.6);return[(t()*2-1)*n,e]}let r=(t()*2-1)*1.15,i=-1.05+t()*2.35,a=r*r+i*i-1;if(a*a*a-r*r*i*i*i<=0){let e=r/1.15,t=(i-.125)/1.175;return n?[e*.92,-t*.88+.12]:[e,t]}}return[0,0]}var Ks={id:`table`,async build(e,t,n){let r=e.count,i=e.rand,a=(262144/r)**.8,o=j.hex(`#3FBF8A`),s=j.hex(`#EDE6D6`),c=j.hex(`#FF6B57`),l=0,u=(e,r,i,a,o,s,c,u)=>{j.set(t,n,l++,e,r,i,a,o,s,c,u)},d=e=>Math.max(1,Math.floor(e*r)),f=Array.from(new Set(Hs.map(e=>e[0]))),p={};for(let t of f){let n=await e.textMask(t,{font:`700 200px "Bodoni Moda Variable", "Bodoni 72", Georgia, serif`,width:256,height:256});p[t]=j.sampleMask(n,1200,i)}let m=d(.16);for(let e=0;e<m;e++){let e=Math.sqrt(i()),t=i()*6.2832,n=ks*e*Math.cos(t),r=As*e*Math.sin(t),o=Math.exp(-(n*n/6+(r-.1)*(r-.1)/1.9)),s=o**1.6,c=1-.55*e**6,l=.03+s*.08,d=.34+s*.22,f=.22+s*.16,p=.7+.6*i();u(n,0,r,1,l,d,f,(.034+.034*o)*c*p*a)}let h=d(.04),g=Us(ks*.93,As*.93),_=0,v=Math.floor(h*.42),y=Math.floor(h*.36),b=Math.floor(h*.12);for(;_<v;_++){let e=Ws(g,i());u(ks*.93*Math.cos(e),.004,As*.93*Math.sin(e),10,o[0],o[1],o[2],.55*a)}for(;_<v+y;_++){let e=2.6,t=-.76,n=.6,r=i()*13.120000000000001,o,c,l=2*e,d=1.3599999999999999;r<l?(o=-2.6+r,c=t):r<6.5600000000000005?(o=e,c=t+(r-l)):r<11.76?(o=e-(r-l-d),c=n):(o=-2.6,c=n-(r-2*l-d));let f=.5+.5*Math.sin(r*22);u(o,.004,c,10,s[0]*.8,s[1]*.9,s[2]*.8,.3*(f>.35?1:.15)*a)}for(;_<v+y+b;_++){let e=i()*6.2832;u(1.2*Math.cos(e),.004,.62+.4*Math.sin(e),10,o[0],o[1],o[2],.28*a)}for(;_<h;_++){let[e,t]=Gs(0,i);u(e*.3,.004,-1.52-t*.3,10,o[0],o[1],o[2],.34*a)}let x=d(.1),S=Us(Ms,Ns),C=Math.floor(x*.1);for(let e=0;e<x;e++){let t=Ws(S,i()),n=Math.cos(t)/Ms,r=Math.sin(t)/Ns,o=Math.hypot(n,r),c=n/o,l=r/o,d=e<C,f=d?.62+(i()-.5)*.02:i()*6.2832,p=Math.cos(f),m=Math.sin(f),h=Ms*Math.cos(t)+js*p*c*-1,g=Ns*Math.sin(t)+js*p*l*-1,_=.13+js*m*.95,v=-p*c,y=m,b=-p*l,x=Math.max(0,v*Vs[0]+y*Vs[1]+b*Vs[2]),w=(1-Math.abs(y*0+(b*.5+.5)))**3*0,T=.72+.28*Math.cos(t*46);if(d){let e=Math.sin(t*150)>-.2?1:.1;u(h,_,g,11,s[0],s[1],s[2]*.9,.55*e*a)}else{let e=.12+.88*x**1.4;u(h,_,g,2,.34+e*.66,.24+e*.58,.17+e*.42,(.04+.17*e*e+w)*T*a)}}let w=d(.022),T=[];for(let e=0;e<6;e++){let t=Math.PI/2+e*Math.PI/3;T.push([Ps*Math.cos(t),Fs*Math.sin(t)])}for(let e=0;e<w;e++){let t=e%6,[n,r]=T[t],c=i(),l=t===0,d=3+t*.1,f,p,m=0,h;c<.4?(m=.26,p=i()*6.2832,h=.75):c<.62?(m=.19,p=i()*6.2832,h=.4):c<.76?(p=Math.floor(i()*12)/12*6.2832+(i()-.5)*.03,m=.29+i()*.06,h=.6):(m=.17*Math.sqrt(i()),p=i()*6.2832,h=.14),f=m;let g=l?o:s;u(n+Math.cos(p)*f,.006,r+Math.sin(p)*f,d,g[0],g[1],g[2],h*a)}let E=[[.22,.66,.46],[.86,.26,.22],[.27,.47,.92],[.93,.87,.72],[.86,.26,.22],[.27,.47,.92]],D=[8,6,7,5,7,6],O=[];T.forEach(([e,t],n)=>{let r=n===0?-0:0,i=n===0?1.62:e,a=n===0?1.45:t;O.push({x:i+r,z:a+0,n:D[n],c:E[n]});let o=n===0?.3:0,s=n===0?-.2:0,c=n===0?0:-t/Fs*.5*(n===3?1:.8),l=n===0?0:e/Ps*.5;O.push({x:i+o+c,z:a+s+l,n:3,c:E[(n+3)%6]})});let k=[];for(let e of O)for(let t=0;t<e.n;t++)k.push({x:e.x+(i()-.5)*.012,y:.028+t*.062,z:e.z+(i()-.5)*.012,c:e.c,top:t===e.n-1});let A=d(.13),M=.175,N=.056;for(let e=0;e<A;e++){let t=k[e%k.length];if(t.top&&i()<.42){let e=i(),n=i()*6.2832,r,o=t.c,c=.5;e<.35?(r=M*(.92+.06*i()),o=s,c=.6):e<.62?(r=M*(.56+.04*i()),o=t.c,c=.65):e<.78?(r=M*.25*Math.sqrt(i()),o=s,c=.55):(r=M*Math.sqrt(i()),c=.22),u(t.x+Math.cos(n)*r,t.y+N*.5+.002,t.z+Math.sin(n)*r,4,o[0],o[1],o[2],c*a)}else{let e=i()*6.2832,n=t.y+(i()-.5)*N,r=Math.sin(e*4)>.25,o=Math.cos(e),c=Math.sin(e),l=.3+.7*Math.max(0,o*Vs[0]+c*Vs[2]+.3),d=r?s:t.c;u(t.x+o*M,n,t.z+c*M,4,d[0],d[1],d[2],(r?.52:.46)*l*a)}}let P=d(.032),F=.24,I=.32,L=Math.cos(I),R=Math.sin(I);for(let e=0;e<P;e++){let e=i(),t=0,n=0,r=0,o=.5;if(e<.3){let e=Math.floor(i()*12),a=i()-.5;if(e<8){n=e<4?0:F;let i=e%4;i===0?(r=-.89/2,t=a*Rs):i===1?(t=Rs/2,r=a*zs):i===2?(r=zs/2,t=a*Rs):(t=-.64/2,r=a*zs)}else{let i=e-8;t=(i&1?1:-1)*Rs/2,r=(i&2?1:-1)*zs/2,n=(a+.5)*F}o=.8}else if(e<.62){let e=Math.floor(i()*4),a=Math.floor(i()*20)/20*F+.002,s=i()-.5;e===0?(t=s*Rs,r=zs/2):e===1?(t=Rs/2,r=s*zs):e===2?(t=s*Rs,r=-.89/2):(t=-.64/2,r=s*zs),n=a,o=.42}else e<.92?(t=(i()-.5)*.6,r=(i()-.5)*.85,n=F,o=Math.abs(((t+r)*14+50)%2-1)<.14||Math.abs(((t-r)*14+50)%2-1)<.14?.5:.08):(t=(i()-.5)*Rs,r=(i()-.5)*zs,n=F*i(),o=.06);let c=t*L+r*R+Bs[0],l=-t*R+r*L+Bs[1];u(c,n,l,5,s[0],s[1],s[2]*.9,o*a)}let z=d(.031),B=1.35;for(let e=0;e<7;e++){let[t,n]=Hs[e],r=n===1||n===2,l=e<2,d=r?c:s,f=100+e*10,m=Math.floor(z*.17),h=Math.floor(z*.2),g=Math.floor(z*.45),_=z-m-h-g,v=l?[1,1,.95]:[s[0]*.9,s[1]*.9,s[2]*.85],y=.07,b=3.56+2*Math.PI*y;for(let e=0;e<m;e++){let e=i()*b,t,n,r=Is-2*y,o=Ls-2*y,s=Math.PI*y/2;if(e<r)t=-.72/2+e,n=Ls/2;else if((e-=r)<s){let i=e/y;t=r/2+Math.sin(i)*y,n=o/2+Math.cos(i)*y}else if((e-=s)<o)t=Is/2,n=o/2-e;else if((e-=o)<s){let i=e/y;t=r/2+Math.cos(i)*y,n=-1.06/2-Math.sin(i)*y}else if((e-=s)<r)t=r/2-e,n=-1.2/2;else if((e-=r)<s){let r=e/y;t=-.72/2-Math.sin(r)*y,n=-1.06/2-Math.cos(r)*y}else if((e-=s)<o)t=-.86/2,n=-1.06/2+e;else{e-=o;let r=e/y;t=-.72/2-Math.cos(r)*y,n=o/2+Math.sin(r)*y}u(t,n,0,f,v[0],v[1],v[2],(l?1:.9)*a)}for(let e=0;e<h;e++)u((i()-.5)*.8099999999999999,(i()-.5)*1.15,.004,f+1,.9,.9,.84,(l?.24:.13)*a);let x=0,S=(e,t,n,r,i,o)=>{let s=Math.cos(r),c=Math.sin(r);for(let[r,l]of i){let i=r*n,p=l*n;u(e+i*s-p*c,t+i*c+p*s,.008,f+1,d[0],d[1],d[2],o*a),x++}},C=p[t],w=Math.floor(g*.17),T=Math.floor(g*.05),E=g-2*w-2*T,D=e=>{let t=[];for(let n=0;n<e;n++){let e=C[n%C.length];t.push([(e[0]-128)/256,-(e[1]-128)/256-0])}return t},O=e=>{let t=[];for(let r=0;r<e;r++)t.push(Gs(n,i));return t},k=D(w),A=D(w),j=O(T),M=O(T),N=O(E),P=(t===`10`?.205:.27)*B;S(-.27474999999999994,Ls/2-.125*B,P,0,k,1),S(-.27474999999999994,Ls/2-.235*B,.052*B,0,j,1),S(Is/2-.115*B,-.43124999999999997,P,Math.PI,A,1),S(Is/2-.115*B,-.28275,.052*B,Math.PI,M,1),S(0,0,.135*B,0,N,.8);for(let e=0;e<_;e++){let e=i(),t,n,r;if(e<.18){let e=i()*4,a=.76,o=1.0999999999999999;e<1?(t=(i()-.5)*a,n=o/2):e<2?(t=(i()-.5)*a,n=-1.0999999999999999/2):e<3?(t=a/2,n=(i()-.5)*o):(t=-.76/2,n=(i()-.5)*o),r=.7}else if(e<.3){let e=i()*6.2832,a=.14+(i()<.5?0:.055);t=Math.cos(e)*a,n=Math.sin(e)*a,r=.9}else{t=(i()-.5)*.74,n=(i()-.5)*1.08;let e=Math.abs(((t+n)*11+100)%2-1),a=Math.abs(((t-n)*11+100)%2-1);r=e<.12||a<.12?.55:.03}u(t,n,-.004,f+2,o[0]*.6+.2,o[1]*.75+.1,o[2]*.7+.1,r*a)}}let ee=d(.014);for(let e=0;e<ee;e++){let e=i(),t=i()*6.2832,n,r=.3;if(e<.42)n=1;else if(e<.55)n=.93,r=.15;else if(e<.85){let e=Math.floor(i()*48),t=e%12==0,r=e/48*6.2832+(i()-.5)*.01;n=1+i()*(t?.17:.07)*(i()<.5?1:-1),u(0+Math.cos(r)*n,.008,1.42+Math.sin(r)*n*.97,8,o[0],o[1],o[2],(t?.9:.4)*a);continue}else{let e=i();n=.92*e,u((i()-.5)*.012*(1-e*.9),.01,1.42-n,12,s[0],s[1],s[2],(.25+.5*e*e)*a);continue}u(Math.cos(t)*n,.008,1.42+Math.sin(t)*n*.97,8,o[0],o[1],o[2],r*a)}let V=d(.04);for(let e=0;e<V;e++){let e=3.4*(1-Math.cbrt(i()))-.15,t=3.1*(1-Math.max(0,e)/3.6)+.12,n=t*Math.sqrt(i()),r=i()*6.2832,o=Math.exp(-(n*n)/(t*t*.5));u(Math.cos(r)*n*1.08,e,Math.sin(r)*n*.62-.05,9,.85,.95,.88,(.014+.03*o)*a*(.4+i()))}j.dust(t,n,l,r,i,7.4,.1*a,[.85,.9,.85]);for(let e=l;e<r;e++)t[e*4+3]=0},glsl:`
const float TBL_CYC = 11.0;
const float TBL_PI = 3.14159265;
float tbl_start(float k) {
  if (k < 0.5) return 0.2;
  if (k < 1.5) return 0.6;
  if (k < 2.5) return 1.5;
  if (k < 3.5) return 1.8;
  if (k < 4.5) return 2.1;
  if (k < 5.5) return 3.0;
  return 3.9;
}
vec3 tbl_slot(float k) {            // x, z, yaw of the final pose
  if (k < 0.5) return vec3(-0.5, 1.42, 0.13);
  if (k < 1.5) return vec3(0.5, 1.42, -0.13);
  return vec3((k - 4.0) * 0.95, 0.02, 0.0);
}
float tbl_q(float k, float t) {     // 0 on the deck .. 1 in its slot
  float tc = mod(t, TBL_CYC);
  float s = clamp((tc - tbl_start(k)) / 0.8, 0.0, 1.0);
  float e = 1.0 - pow(1.0 - s, 3.0);
  float rs = 9.4 + (6.0 - k) * 0.11;
  float r = clamp((tc - rs) / 0.7, 0.0, 1.0);
  float er = r * r * (3.0 - 2.0 * r);
  return e * (1.0 - er);
}
float tbl_fill(float t) {
  float tc = mod(t, TBL_CYC);
  return 0.64 * smoothstep(5.0, 6.8, tc) * (1.0 - smoothstep(9.0, 10.2, tc));
}
vec3 anim_table(vec3 p, vec4 d, vec4 r, float t) {
  float w = d.w;
  if (w >= 100.0) {
    float k = floor((w - 100.0) / 10.0 + 0.001);
    float layer = w - 100.0 - k * 10.0;
    float q = tbl_q(k, t);
    vec3 sl = tbl_slot(k);
    float flip = smoothstep(0.08, 0.72, q);
    float th = TBL_PI * (1.0 - flip);
    float phi = 0.66 * smoothstep(0.05, 0.95, q) + 0.30 * sin(TBL_PI * q);   // 38 degrees: nearly face-on to the 36 degree camera, and low enough not to stand in front of the back seat's chips
    float c = cos(th), s = sin(th);
    vec3 v = vec3(p.x * c + p.z * s, p.y, -p.x * s + p.z * c);
    float cp = cos(phi), sp = sin(phi);
    vec3 wv = vec3(v.x, v.y * sp + v.z * cp, -v.y * cp + v.z * sp);
    float yaw = mix(0.32, sl.z, smoothstep(0.0, 1.0, q)) + 0.10 * sin(TBL_PI * q) * (0.5 - fract(k * 0.37));
    float cy = cos(yaw), sy = sin(yaw);
    wv = vec3(wv.x * cy + wv.z * sy, wv.y, -wv.x * sy + wv.z * cy);
    float yc = mix(0.262, 0.012, q) + ${(Ls/2).toFixed(3)} * sp + 0.62 * sin(TBL_PI * q);
    vec3 ctr = vec3(mix(${Bs[0].toFixed(3)}, sl.x, q), yc, mix(${Bs[1].toFixed(3)}, sl.y, q));
    return ctr + wv;
  }
  float cl = floor(w + 0.001);
  if (cl < 0.5) return p + 0.07 * vec3(sin(t * 0.31 + r.x * 6.283), sin(t * 0.23 + r.y * 6.283), cos(t * 0.27 + r.z * 6.283));
  if (cl > 8.5 && cl < 9.5) {
    float a = t * (0.03 + 0.04 * r.w), c = cos(a), s = sin(a);
    return vec3(c * p.x - s * p.z, p.y + 0.10 * sin(t * 0.4 + r.x * 6.283), s * p.x + c * p.z);
  }
  if (cl > 7.5 && cl < 8.5) {
    float a = t * 0.22, c = cos(a), s = sin(a); float zz = p.z - 1.42;
    return vec3(c * p.x - s * zz, p.y, 1.42 + s * p.x + c * zz);
  }
  if (cl > 11.5 && cl < 12.5) {
    float tc = mod(t, TBL_CYC);
    float a = 0.55 * sin(t * 0.8) * exp(-0.0 * t) + 0.9 * sin(t * 2.1) * 0.12;
    float c = cos(a), s = sin(a); float zz = p.z - 1.42;
    return vec3(c * p.x - s * zz, p.y, 1.42 + s * p.x + c * zz);
  }
  if (cl > 3.5 && cl < 4.5) return p + vec3(0.0, 0.0035 * sin(t * 1.3 + p.x * 9.0), 0.0);
  return p;
}
float size_table(vec4 d, vec4 r, float t) {
  float w = d.w;
  if (w >= 100.0) { float layer = w - 100.0 - floor((w - 100.0) / 10.0 + 0.001) * 10.0; return layer > 0.5 && layer < 1.5 ? 0.68 : 0.8; }
  float cl = floor(w + 0.001);
  if (cl < 0.5) return 1.3;
  if (cl > 8.5 && cl < 9.5) return 2.0;
  if (cl > 0.5 && cl < 1.5) return 1.5;
  if (cl > 1.5 && cl < 2.5) return 1.3;
  if (cl > 11.5) return 0.8;
  return 1.0;
}
vec4 color_table(vec4 c, vec4 d, vec4 r, float t) {
  float w = d.w;
  float tc = mod(t, TBL_CYC);
  if (w >= 100.0) {
    float k = floor((w - 100.0) / 10.0 + 0.001);
    float layer = w - 100.0 - k * 10.0;
    float q = tbl_q(k, t);
    float flip = smoothstep(0.08, 0.72, q);
    float face = cos(TBL_PI * (1.0 - flip));
    float vis = layer < 0.5 ? 1.0 : (layer < 1.5 ? smoothstep(0.02, 0.3, face) : smoothstep(0.02, 0.3, -face));
    float since = tc - (tbl_start(k) + 0.8);
    float flash = (since > 0.0 && since < 1.6) ? exp(-since * 3.2) : 0.0;
    c.rgb += vec3(0.20, 0.75, 0.50) * flash * (layer < 0.5 ? 1.0 : 0.25);
    c.a *= vis * (1.0 + 0.9 * flash);
    return c;
  }
  float cl = floor(w + 0.001);
  if (cl > 0.5 && cl < 1.5) {
    float u = d.x * 0.7 + d.z * 0.45;
    float band = exp(-pow((u - (fract(t * 0.055) * 10.0 - 5.0)) / 0.8, 2.0));
    c.rgb += vec3(0.10, 0.42, 0.30) * band * 0.9;
    c.a *= 1.0 + band * 0.9;
    return c;
  }
  if (cl > 2.5 && cl < 3.5) {
    float seat = floor(fract(w) * 10.0 + 0.5);
    float act = floor(mod(t * 0.8, 6.0));
    float on = 1.0 - smoothstep(0.0, 1.0, abs(mod(t * 0.8, 6.0) - (seat + 0.5)));
    c.rgb = mix(c.rgb, vec3(0.25, 0.82, 0.58), on * 0.8);
    c.a *= 1.0 + on * 1.6;
    return c;
  }
  if (cl > 6.5 && cl < 7.5) {
    float f = fract(w) / 0.99;
    float fl = tbl_fill(t);
    float vis = 1.0 - smoothstep(fl - 0.004, fl + 0.004, f);
    float head = exp(-pow((f - fl) / 0.03, 2.0)) * step(0.01, fl);
    c.rgb = mix(c.rgb, vec3(0.85, 1.0, 0.92), head * 0.8 + f * 0.25);
    c.a *= vis * (1.0 + head * 1.8);
    return c;
  }
  if (cl > 7.5 && cl < 8.5) { c.a *= 0.65 + 0.35 * sin(t * 1.4 + d.x * 2.0); return c; }
  return c;
}`,camera:{pos:[0,5.6,7.4],target:[0,-.2,.2],fov:34},pointSize:1.9,drift:.006},qs=o({default:()=>Js}),Js=we({id:`turntable3d`,url:`/portfolio/models/turntable3d.bin`,size:2.25,tilt:.5,offset:[0,-.15,0],albedo:[.96,.9,.78],key:[1,.9,.74],fill:[.55,.65,.95],spec:.6,shine:40,sway:.28,alpha:.85,pointSize:2.2,camera:{pos:[0,2.9,8.6],target:[0,-.1,0]}}),Ys=o({default:()=>hc}),Xs=Math.PI*2,X=[.8,.7,.56],Z=[1,.91,.76],Zs=[.56,.47,.38],Qs=[1,.77,.34],$s=[1,.9,.66],ec=[1,.52,.17],tc=typeof innerWidth==`number`&&innerWidth<=760,nc=[.8,.06,.12],rc=[.62,.04,.09],ic=[[.9,.12,.16],[1,.76,.28],[1,.48,.13],[.78,.26,.1]],ac=[Qs,nc,$s,nc,ec,Qs,nc,nc],oc=[$s,Qs,$s,Qs,ec],sc=`CRESCAT SCIENTIA · VITA EXCOLATUR`,cc=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],lc=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],uc=(e,t,n)=>lc(lc(e.o,cc(e.ex,t)),cc(e.ey,n)),dc=(e,t=0)=>({o:[t,0,e],ex:[1,0,0],ey:[0,1,0]}),fc=(e,t,n)=>Math.sqrt(Math.max(0,n*n-(e+n-t)*(e+n-t))),pc=(e,t)=>Math.sqrt(t*t-(t-e)*(t-e)),mc=(e,t,n)=>{let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,1274126177)|0;return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296},hc={id:`uchicago`,async build(e,t,n){let r=e.count,i=e.rand,a=r/262144,o=(1/a)**.8*.72,s=e=>Math.max(1,Math.round(e*a)),c=0,l=(e,i,a,s,l,u)=>{c<r&&j.set(t,n,c++,e,i,a,s,l[0],l[1],l[2],u*o)},u=(e,t,n,r)=>l(e[0],e[1],e[2],t+i()*.98,n,t===1?r*.85:r),d=.0028,f=(e,t,n,r,a,o)=>{let c=s(n);for(let n=0;n<c;n++){let s=(n+i())/c;u([e[0]+(t[0]-e[0])*s+(i()-.5)*d,e[1]+(t[1]-e[1])*s+(i()-.5)*d,e[2]+(t[2]-e[2])*s+(i()-.5)*d],r,a,o)}},p=(e,t,n,r,a,o,c)=>{let l=s(r);for(let r=0;r<l;r++){let r=i(),s=i();u([e[0]+t[0]*r+n[0]*s,e[1]+t[1]*r+n[1]*s,e[2]+t[2]*r+n[2]*s],a,o,c)}},m=(e,t,n,r,i,a,o,s,c)=>f(uc(e,t,n),uc(e,r,i),a,o,s,c),h=(e,t,n,r,i,a,o,s,c)=>p(uc(e,t,n),cc(e.ex,r-t),cc(e.ey,i-n),a,o,s,c),g=(e,t,n,r,a,o,c,l,d=1)=>{let f=s(a);for(let a=0;a<f;a++){let s=(a+i())/f*Xs;u(d===1?[e+r*Math.cos(s),t+r*Math.sin(s),n]:[e+r*Math.cos(s),t,n+r*Math.sin(s)],o,c,l)}},_=(e,t,n,r,a,o,c,l,d)=>{let f=Math.acos(-(a-r)/a),p=Math.max(2,s(o)>>1);for(let o=0;o<2;o++)for(let s=0;s<p;s++){let m=f+(Math.PI-f)*((s+i())/p),h=a-r+a*Math.cos(m),g=n+a*Math.sin(m);u(uc(e,t+(o?-h:h),g),c,l,d)}},v=(e,t,n,r,a,o,c,l,d,f=!0)=>{let p=pc(r,a),h=n+o-p,g=s(c*.5),v=Math.floor(t*100+n*1e3),y=Math.max(.05,r*.95);for(let s=0,c=0;s<g&&c<g*8;c++){let c=(i()*2-1)*r,f=n+i()*o;if(f>h+fc(Math.abs(c),r,a))continue;s++;let p=(c+r)/y,m=(f-n)/.115,g=p-Math.floor(p),_=m-Math.floor(m),b=g<.08||g>.92||_<.1||_>.9,x=mc(Math.floor(p),Math.floor(m),v),S=d[Math.floor(x*d.length)%d.length],C=.8+.2*(1-(f-n)/o);u(uc(e,t+c,f),l,S,b?.2:.7*C)}_(e,t,h,r+.012,a,70+r*500,1,Z,.8),_(e,t,h,r+.05,a*1.05,60+r*400,1,X,.45),f&&(m(e,t-r-.012,n,t-r-.012,h,40+o*60,1,Z,.7),m(e,t+r+.012,n,t+r+.012,h,40+o*60,1,Z,.7),m(e,t-r-.05,n-.02,t+r+.05,n-.02,30+r*200,1,Z,.7)),r>.085&&m(e,t,n,t,h+p*.45,30+o*40,1,Z,.7)},y=(e,t,n,r,a)=>{let o=(r,i)=>uc(e,t+r*Math.cos(i),n+r*Math.sin(i)),c=s(a*.55),l=Xs/12;for(let e=0;e<c;e++){let e=r*.97*Math.sqrt(i()),t=i()*Xs,n=t/l,a=n-Math.floor(n),s=Math.floor(n),c=e/r,d=c<.3?0:c<.66?1:2,f=a<.07||a>.93||Math.abs(c-.3)<.03||Math.abs(c-.66)<.03,p=d===0?$s:s+d&1?d===1?nc:ec:Qs;u(o(e,t),3,p,f?.2:d===0?1:.75)}for(let a=0;a<12;a++){let c=a*l;f(o(.3*r,c),o(r,c),34,3,Z,.7),o(.8*r,c+l/2);let d=.15*r,p=s(30);for(let a=0;a<p;a++){let o=(a+i())/p*Xs;u(uc(e,t+.8*r*Math.cos(c+l/2)+d*Math.cos(o),n+.8*r*Math.sin(c+l/2)+d*Math.sin(o)),3,Z,.55)}}for(let e of[.3,.66]){let t=s(90*e*3);for(let n=0;n<t;n++){let a=(n+i())/t*Xs;u(o(e*r,a),3,Z,.7)}}{let e=s(260);for(let t=0;t<e;t++){let n=(t+i())/e*Xs;u(o(r+.012,n),1,Z,.9),u(o(r+.05,n),1,X,.5)}}},b=(e,t,n,r,i,a,o,s)=>{for(let c=r;c<=i+1e-6;c+=a)m(e,t,c,n,c,o,1,Zs,s)},x=(e,t,n,r,i,a)=>{for(let o=t;o+i<=n+1e-6;o+=i*2)m(e,o,r,o,r+a,12,1,Z,.7),m(e,o+i,r,o+i,r+a,12,1,Z,.7),m(e,o,r+a,o+i,r+a,12,1,Z,.8);m(e,t,r,n,r,50,1,Z,.7)},S=(e,t,n,r,i,a,o,s,c=0)=>{for(let[c,l]of[[-1,-1],[1,-1],[1,1],[-1,1]])f([e+c*r,n,t+l*r],[e,i,t],a,1,o,s);for(let a=1;a<=c;a++){let o=a/(c+1),s=r*(1-o),l=n+(i-n)*o;f([e-s,l,t+s],[e+s,l,t+s],16,1,X,.5),f([e-s,l,t-s],[e-s,l,t+s],10,1,X,.4),f([e+s,l,t-s],[e+s,l,t+s],10,1,X,.4)}},C=(e,t,n,r,i,a,o)=>{for(let[s,c]of[[-1,-1],[1,-1],[1,1],[-1,1]])f([e+s*i,n,t+c*i],[e+s*i,r,t+c*i],a,1,Z,o)},w=await e.textMask(sc,{font:`700 128px "Bodoni Moda Variable", "Didot", Georgia, serif`,width:3400,height:220,align:`center`});{let e=3400,t=0,n=220,r=0,a=w.data;for(let i=0;i<220;i++)for(let o=0;o<3400;o++)a[(i*3400+o)*4+3]>127&&(o<e&&(e=o),o>t&&(t=o),i<n&&(n=i),i>r&&(r=i));t<=e&&(e=0,t=3400,n=0,r=220);let o=t-e+1,c=r-n+1,u=Math.min(.17/c,6.2/o),d=(e+t)/2,f=(n+r)/2;for(let e of j.sampleMask(w,s(24e3),i))l((e[0]-d)*u,-1.76+(f-e[1])*u,1.4+(i()-.5)*.012,4+i()*.98,[1,.96,.82],.36)}let T={x0:.15,x1:1.35,z0:-.9,z1:.3},E=-1.6,D=1.4,O=1.2;[{o:[T.x0,0,T.z1],ex:[1,0,0],ey:[0,1,0]},{o:[T.x1,0,T.z0],ex:[-1,0,0],ey:[0,1,0]},{o:[T.x0,0,T.z0],ex:[0,0,1],ey:[0,1,0]},{o:[T.x1,0,T.z1],ex:[0,0,-1],ey:[0,1,0]}].forEach((e,t)=>{h(e,0,E,O,D,1100,0,X,.06),b(e,0,O,-1.5,D,.18,50,.2);for(let t of[-.58,.4,1.28])m(e,-.02,t,1.22,t,90,1,Z,.7),m(e,-.02,t-.03,1.22,t-.03,60,1,X,.4);for(let t of[0,O])m(e,t,E,t,1.52,200,1,Z,.75),m(e,t+(t?.07:-.07),E,t+(t?.07:-.07),.2,100,1,X,.45),m(e,t+(t?.07:-.07),.2,t,.35,16,1,X,.45);v(e,.32,-.5,.1,.26,.9,900,2,ac),v(e,.88,-.5,.1,.26,.9,900,2,ac),t===0?v(e,.6,E,.2,.5,.98,1500,2,oc):m(e,.35,E,.35,-.7,20,1,Zs,.3);for(let t of[.27,.6,.93])v(e,t,.5,.07,.22,.66,420,12,[Qs,$s,ec,Qs]);x(e,0,O,D,.1,.1),m(e,0,1.5,O,1.5,40,1,Z,.4)});for(let[e,t]of[[T.x0,T.z0],[T.x1,T.z0],[T.x1,T.z1],[T.x0,T.z1]]){C(e,t,D,1.98,.05,90,.9),S(e,t,1.98,.065,2.28,60,Z,.9,2),f([e-.065,1.98,t],[e+.065,1.98,t],14,1,Z,.7);let n=s(22);for(let r=0;r<n;r++)u([e+(i()-.5)*.02,2.28+i()*.07,t+(i()-.5)*.02],1,$s,1)}{let e=(T.x0+T.x1)/2,t=(T.z0+T.z1)/2,n=.27;C(e,t,1.5,2.02,n,160,.85);for(let r of[1.5,1.72,2.02])f([e-n,r,t+n],[e+n,r,t+n],70,1,Z,.7),f([e-n,r,t-n],[e-n,r,t+n],50,1,Z,.6),f([e+n,r,t-n],[e+n,r,t+n],50,1,Z,.6);let r={o:[e-n,0,t+n],ex:[1,0,0],ey:[0,1,0]};v(r,n,1.62,.07,.2,.34,220,12,[$s,Qs,ec]),v(r,.09,1.62,.04,.12,.28,90,12,[Qs,$s]),v(r,n*2-.09,1.62,.04,.12,.28,90,12,[Qs,$s]),h(r,0,1.5,n*2,2.02,500,0,X,.08),S(e,t,2.02,.29000000000000004,2.78,190,Z,.95,9);let a=s(60);for(let n=0;n<a;n++)u([e+(i()-.5)*.02,2.74+i()*.14,t+(i()-.5)*.02],1,$s,1)}let k=dc(0,-3.5),A=1.8,M=.35,N=1.55;h(k,0,E,A,M,1500,0,X,.07);for(let e=0,t=s(1700);e<t;e++){let e=i()*A,t=1.2000000000000002*(1-Math.abs(e-A/2)/(A/2));u(uc(k,e,M+i()*t),0,X,.07)}m(k,0,M,A/2,N,150,1,Z,.9),m(k,A,M,A/2,N,150,1,Z,.9),m(k,.05,.32999999999999996,1.75,.32999999999999996,90,1,Z,.6),m(k,-.04,E,-.04,M,150,1,Z,.8),m(k,1.84,E,1.84,M,150,1,Z,.8),m(k,-.05,.349,.05,.43,12,1,Z,.5);{let e=uc(k,A/2,N);f(e,[e[0],e[1]+.26,e[2]],40,1,$s,1),f([e[0]-.08,e[1]+.17,e[2]],[e[0]+.08,e[1]+.17,e[2]],18,1,$s,1)}b(k,0,A,-1.5,M,.2,40,.18),y(k,A/2,.8,.38,6e3),v(k,.9,-.55,.12,.3,.85,1e3,2,ac),v(k,.45,-.55,.09,.24,.7,640,2,ac),v(k,1.35,-.55,.09,.24,.7,640,2,ac),v(k,.9,E,.26,.62,.98,1500,2,oc);let P=-3.5,F=-1.7,I=-2.6;for(let[e,t]of[[P,I],[F,I]]){p([e,M,0],[t-e,1.2000000000000002,0],[0,0,-3],1500,0,X,.06);for(let n=0;n<=10;n++){let r=n/10;f([e+(t-e)*r,M+1.2000000000000002*r,0],[e+(t-e)*r,M+1.2000000000000002*r,-3],60,1,Zs,.28)}for(let n=0;n<=12;n++)f([e,M,-n*.25],[t,N,-n*.25],40,1,Zs,.22)}f([I,N,0],[I,N,-3],130,1,Z,.9),f([P,M,0],[P,M,-3],110,1,Z,.7),f([F,M,0],[F,M,-3],110,1,Z,.7);for(let[e,t]of[[P,1],[F,-1]]){let n={o:[e,0,0],ex:[0,0,-1],ey:[0,1,0]};h(n,0,E,3,M,1400,0,X,.06),b(n,0,3,-1.5,M,.22,60,.16);for(let e=0;e<5;e++)v(n,.4+e*.55,-.55,.085,.24,.8,560,2,ac);for(let e=0;e<=5;e++){let r=.125+e*.55;t*-.12,m(n,r,E,r,.39999999999999997,90,1,Z,.55),f([n.o[0]+t*-.1,E,-r],[n.o[0]+t*-.1,.1,-r],60,1,X,.4),f([n.o[0]+t*-.1,.1,-r],[n.o[0],M,-r],14,1,X,.4)}}{let e=dc(-.05,-1.7),t=1.85;h(e,0,E,t,-.1,800,0,X,.06),b(e,0,t,-1.5,-.1,.2,40,.16),v(e,.45,-1,.07,.2,.7,420,2,ac),v(e,1.4,-1,.07,.2,.7,420,2,ac),x(e,0,t,-.1,.1,.09)}{let e=dc(-.1,1.35),t=2.25;h(e,0,E,t,.25,1500,0,X,.065),b(e,0,t,-1.5,.25,.2,60,.17);for(let t=0;t<4;t++)v(e,.34+t*.52,-.7,.1,.27,.85,700,2,ac);v(e,2.07,-1.05,.04,.12,.5,120,2,[Qs,$s]),x(e,0,1.85,.25,.1,.09);for(let t=0;t<=4;t++)m(e,.08+t*.52,E,.08+t*.52,.28,90,1,Z,.5);f([1.35,.25,-.1],[2.35,.8,-.5],50,1,Z,.8),f([3.2,.25,-.1],[2.55,.8,-.5],50,1,Z,.8),f([2.35,.8,-.5],[2.55,.8,-.5],20,1,Z,.8);let n=3.45,r=-.15,a=.2;for(let e=0;e<10;e++){let t=e/10*Xs;f([n+a*Math.cos(t),E,r+a*Math.sin(t)],[n+a*Math.cos(t),1,r+a*Math.sin(t)],110,1,e<5?Z:Zs,e<5?.7:.35)}for(let e=-1.5;e<=1;e+=.2)g(n,e,r,a,70,1,Zs,.3,0);g(n,1,r,.23,120,1,Z,.85,0);for(let e=0;e<10;e++){let t=e/10*Xs;f([n+.23*Math.cos(t),1,r+.23*Math.sin(t)],[n,1.55,r],50,1,Z,.8)}for(let e of[-.4,.4])v({o:[n,0,.05000000000000002],ex:[1,0,0],ey:[0,1,0]},0,e,.035,.1,.34,100,2,[Qs,ec]);let o=s(40);for(let e=0;e<o;e++)u([n+(i()-.5)*.02,1.55+i()*.12,r+(i()-.5)*.02],1,$s,1)}let L=(e,t,n)=>{let r=.8,a=.31,o=.66,c=-1.32,l=t*r;h(e,0,E,l,-.74,t*380,0,X,.06);for(let n=0;n<t;n++){let t=r*(n+.5);_(e,t,c,a,o,320,1,Z,.95),_(e,t,c,.355,o*1.04,280,1,X,.55);let l=s(520);for(let n=0,r=0;n<l&&r<l*8;r++){let r=(i()*2-1)*a,s=E+i()*(c+pc(a,o)-E);s>c+fc(Math.abs(r),a,o)||(n++,u(uc(e,t+r,s-0+0),9,ec,.05+.1*(1-Math.min(1,(s-E)/1))))}_(e,t,c,.27,o*.9,200,1,Zs,.45)}for(let n=0;n<=t;n++){let t=n*r;m(e,t-.07,E,t-.07,c,90,1,Z,.8),m(e,t+.07,E,t+.07,c,90,1,Z,.8),m(e,t-.1,-1.34,t+.1,-1.34,18,1,Z,.8),m(e,t-.1,-1.57,t+.1,-1.57,18,1,Z,.6),m(e,t-.07,c,t-.07,-.74,40,1,X,.4)}h(e,-.05,-.78,l+.05,-.46,t*420,10,rc,.26);for(let n of[-.78,-.46])m(e,-.05,n,l+.05,n,t*55,1,Qs,.7);if(m(e,-.08,-.43,l+.08,-.43,t*50,1,Z,.8),x(e,-.05,l+.05,-.42,.09,.08),n)for(let t of[1,3,7,9]){let n=t*r;for(let t=0,r=s(900);t<r;t++){let t=i(),r=(i()*2-1)*.05,a=-.74-t*.5,o=t>.82?Math.abs(r)/.05*.04*(t-.82)/.18*4:0;u(uc(e,n+r,a+o*0),10,nc,.5*(1-.35*t))}m(e,n-.052,-.74,n-.052,-1.24,50,10,Qs,.7),m(e,n+.052,-.74,n+.052,-1.24,50,10,Qs,.7),m(e,n-.052,-1.24,n,-1.16,14,10,Qs,.7),m(e,n+.052,-1.24,n,-1.16,14,10,Qs,.7),m(e,n-.05,-.78,n+.05,-.78,14,10,Qs,.8)}};L(dc(1.3,-4),10,!0),L({o:[-4,0,1.3],ex:[0,0,-1],ey:[0,1,0]},2,!1),L({o:[4,0,1.3],ex:[0,0,-1],ey:[0,1,0]},2,!1),p([-3.9,E,-.3],[7.8,0,0],[0,0,1.55],5600,8,[.3,.55,.5],.06);for(let[e,t]of[[[-3.85,-.25],[3.85,1.25]],[[3.85,-.25],[-3.85,1.25]]]){for(let n of[-.045,.045])f([e[0],-1.5950000000000002,e[1]+n],[t[0],-1.5950000000000002,t[1]+n],330,8,Z,.4);p([e[0],-1.5950000000000002,e[1]-.045],[t[0]-e[0],0,t[1]-e[1]],[0,0,.09],350,8,X,.1)}for(let e of[.5,.56]){let t=s(260);for(let n=0;n<t;n++){let r=(n+i())/t*Xs;u([e*1.9*Math.cos(r),-1.5950000000000002,.5+e*.55*Math.sin(r)],8,Z,.4)}}p([-6.5,-1.61,-3.6],[13,0,0],[0,0,3.6],3600,8,Zs,.025),p([-6.5,-1.61,1.4],[13,0,0],[0,0,1.6],1800,8,Zs,.03);for(let e=0;e<8;e++)f([-6.5,-1.61,1.5+e*.18],[6.5,-1.61,1.5+e*.18],70,8,Zs,.12);for(let[e,t]of[[-2.7,.35],[-.95,.95],[.95,.95],[2.7,.35]]){f([e,E,t],[e,-1.18,t],50,1,Z,.7);let n=s(160);for(let r=0;r<n;r++){let n=i()*2-1,r=i()*Xs,a=Math.sqrt(1-n*n),o=.045*Math.cbrt(i());u([e+Math.cos(r)*a*o,-1.14+n*o*1.3,t+Math.sin(r)*a*o],9,$s,.9)}let r=s(520);for(let n=0;n<r;n++){let n=i()*2-1,r=i()*Xs,a=Math.sqrt(1-n*n),o=.55*i()**1.6;u([e+Math.cos(r)*a*o,-1.14+n*o,t+Math.sin(r)*a*o],9,Qs,.05)}let a=s(450);for(let n=0;n<a;n++){let n=i()*Xs,r=.85*Math.sqrt(i());u([e+Math.cos(n)*r,-1.59,t+Math.sin(n)*r*.6],9,Qs,.05*(1-r))}}for(let e=0,t=s(4200);e<t;e++){let e=i()*Math.PI,t=i()*Xs;u([14*Math.sin(e)*Math.cos(t)*.9,.3+Math.abs(14*Math.cos(e))*.34,-4.5-i()*4+Math.min(0,14*Math.sin(e)*Math.sin(t)*.1)],6,[.82,.88,1],.15+.6*i()**3)}{let e=-3.4,t=2.45,n=-2.6,r=.28,a=[[.1,.08,.07],[-.12,-.05,.09],[.04,-.16,.05],[-.04,.17,.045]];for(let o=0,c=s(3600);o<c;o++){let o=r*Math.sqrt(i()),s=i()*Xs,c=o*Math.cos(s),l=o*Math.sin(s),d=1;for(let e of a)Math.hypot(c-e[0],l-e[1])<e[2]&&(d=.5);u([e+c,t+l,n],7,[.95,.95,.88],.26*d*(.75+c/r*.5))}g(e,t,n,r,260,7,[1,1,.92],.8);for(let n=0,a=s(3200);n<a;n++){let n=r+1.2*i()**1.8,a=i()*Xs;u([e+n*Math.cos(a),t+n*Math.sin(a),-2.7],7,[.7,.8,1],.05*(1-(n-r)/1.3))}}for(let e=0,t=s(3e3);e<t;e++)u([(i()-.5)*12,-1.58+i()**1.6*.75,-3+i()*6.2],11,[.55,.65,.9],.02+.04*i());for(let e=0,t=s(2400);e<t;e++){let e=ic[Math.floor(i()*ic.length)];l((i()-.5)*8.6,-1.7+i()*4.7,-.8+i()*3.6,5+i()*.98,e,.3+.22*i())}for(let e=0,t=s(2e3);e<t;e++){let e=2.6*i()**.8,t=i()*Xs;u([.75+e*Math.cos(t)*1.2,.6+e*Math.sin(t),-2],11,[.55,.62,.95],.025*(1-e/2.7))}for(let e=0,t=s(1800);e<t;e++){let e=2.2*i()**.9,t=i()*Xs;u([.75+e*Math.cos(t)*1.5,-.2+e*Math.sin(t)*.9,-2.2],11,nc,.03*(1-e/2.3))}let R=c;j.dust(t,n,c,r,i,6.5,.05*o,[.6,.68,.95]);for(let e=R;e<r;e++)t[e*4+3]=6.5},glsl:`
const vec2 UC_ROSE = vec2(-2.6, 0.8);
float uc_leafY(vec4 d, vec4 r, float t) { return mod(d.y + 1.7 - t * (0.10 + 0.15 * r.y), 4.7) - 1.7; }
float uc_sweep(float x, float t) { float s = -6.5 + mod(t * 0.8, 17.0); float q = (x - s) / 0.7; return exp(-q * q); }
vec3 anim_uchicago(vec3 p, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl > 4.5 && cl < 5.5) {                       // leaves fall, sway and tumble
    float k = 0.5 + r.z * 0.9;
    return vec3(d.x + 0.32 * sin(t * k * 0.7 + r.x * 6.283) + 0.12 * t * 0.0, uc_leafY(d, r, t), d.z + 0.22 * cos(t * k * 0.6 + r.w * 6.283));
  }
  if (cl > 2.5 && cl < 3.5) {                       // the rose window turns
    vec2 q = p.xy - UC_ROSE; float a = t * 0.06; float c = cos(a), s = sin(a);
    return vec3(UC_ROSE + vec2(c * q.x - s * q.y, s * q.x + c * q.y), p.z);
  }
  if (cl > 9.5 && cl < 10.5) { p.x += sin(t * 1.3 + p.x * 3.0 + p.y * 2.0) * 0.022 * (-0.5 - p.y); p.z += sin(t * 1.1 + p.y * 4.0) * 0.012 * (-0.5 - p.y); return p; }
  if (cl > 10.5 && cl < 11.5) { p.x += sin(t * 0.07 + p.z * 0.9 + r.x * 3.0) * 0.5; p.y += sin(t * 0.2 + r.y * 20.0) * 0.03; return p; }
  return p;
}
float size_uchicago(vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl > 4.5 && cl < 5.5) return 1.05;
  if (cl > 5.5 && cl < 6.5) return 0.7 + 0.8 * r.x;
  if (cl > 3.5 && cl < 4.5) return 0.9;
  if (cl > 6.5 && cl < 7.5) return 1.2;
  return 1.0;
}
vec4 color_uchicago(vec4 c, vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001), ph = fract(d.w);
  float a = c.a;
  vec3 rgb = c.rgb;
  float sw = uc_sweep(d.x, t);
  if (cl > 1.5 && cl < 3.5 || cl > 11.5) {          // lit glass: candle flicker, plus the passing sweep
    a *= 0.86 + 0.14 * sin(t * (1.1 + 2.0 * ph) + ph * 50.0);
    a *= 1.0 + 0.9 * sw;
    if (cl > 11.5) a *= 1.0 + 1.6 * exp(-mod(t, 9.0) * 1.1);   // the bell tolls: belfry flares then fades
  } else if (cl > 3.5 && cl < 4.5) {                // motto: the sweep reads the letters
    a *= 0.8 + 1.7 * sw;
    rgb = mix(rgb, vec3(1.0, 0.8, 0.45), 0.35 + 0.4 * sw);
  } else if (cl > 4.5 && cl < 5.5) {                // leaves flash as they turn
    float y = uc_leafY(d, r, t);
    a *= (0.45 + 0.55 * abs(sin(t * (1.2 + 2.0 * r.w) + r.x * 20.0))) * smoothstep(-1.7, -1.2, y) * (1.0 - smoothstep(2.3, 2.9, y));
  } else if (cl > 5.5 && cl < 6.5) {
    a *= 0.35 + 0.65 * (0.5 + 0.5 * sin(t * (0.6 + 2.2 * r.y) + r.x * 90.0));
  } else if (cl > 8.5 && cl < 9.5) {
    a *= 0.85 + 0.15 * sin(t * 2.3 + ph * 60.0) * sin(t * 0.9 + ph * 13.0);
  } else if (cl > 10.5 && cl < 11.5) {
    a *= 0.7 + 0.3 * sin(t * 0.4 + r.x * 30.0);
  } else if (cl < 1.5 && cl > 0.5) {
    a *= 1.0 + 0.5 * sw;
  }
  // v15: a slow warm light climbs the chapel tower (stone, glass, belfry), lingers, and starts again from the foot
  if (d.x > 0.05 && d.x < 1.45 && d.z > -1.05 && d.z < 0.45 && (cl < 2.5 || cl > 11.5)) {
    float ty = -1.7 + mod(t * 0.3, 6.4);
    float q = (d.y - ty) / 0.34;
    float vs = exp(-q * q) + 0.22 * exp(-max(ty - d.y, 0.0) / 1.1) * step(d.y, ty);
    a *= 1.0 + 1.7 * vs;
    rgb = mix(rgb, vec3(1.0, 0.8, 0.46), clamp(0.55 * vs, 0.0, 0.6));
  }
  return vec4(rgb, a);
}`,camera:{pos:[0,1.2,9.9],target:[0,.55,0],fov:35},pointSize:2,style:{solid:1,size:tc?2.15:1.95,sharp:.5,opaque:.5,thin:.22,gain:tc?.78:.6},drift:.004},gc=o({blipForm:()=>jc,blipState:()=>Nc,blipWorld:()=>Mc,blipsLocal:()=>Ac,default:()=>Rc,watchdogUniforms:()=>Pc}),Q=Math.PI*2,_c=2.35,vc=Q/8,yc=-.92,bc=.12,xc=[.25,1,.5],Sc=[1,.7,.2],Cc=[.55,.66,.85],wc=-2.95,Tc=.19,Ec=-3.35,Dc=3.3;function Oc(e){let t=[],n=(n,r,i,a,o)=>{for(let s=0,c=0;s<a&&c<4e3;c++){let a=_c*(r+(i-r)*Math.sqrt(e())),c=e()*Q,l=a*Math.cos(c),u=a*Math.sin(c);t.some(e=>Math.hypot(e.x-l,e.y-u)<o)||(t.push({x:l,y:u,kind:n,amber:!1,code:0,cross:0,cell:0}),s++)}};n(`job`,.4,.93,20,.5),n(`cred`,.25,.4,2,.5),n(`pause`,.1,.22,2,.4);let r=t.filter(e=>e.kind===`job`);for(let e of[2,9,15])r[e]&&(r[e].amber=!0);for(let e of t){let t=Math.atan2(e.y,e.x);t<0&&(t+=Q),e.code=t/Q*.999,e.cross=((Math.PI/2-Math.atan2(e.y,e.x))%Q+Q)%Q/vc}return[...t].sort((e,t)=>e.cross-t.cross).forEach((e,t)=>{e.cell=t}),t}var kc=null;function Ac(){return kc??=Oc(A(`watchdog`,1).rand)}function jc(e,t=[0,0,0]){let n=.03,r=Math.cos(yc),i=Math.sin(yc),a=Math.cos(bc),o=Math.sin(bc),s=e.y*r-n*i,c=e.y*i+n*r;return t[0]=e.x*a+c*o,t[1]=s,t[2]=-e.x*o+c*a,t}function Mc(e,t,n=[0,0,0]){let r=jc(e,n),i=t.scale??1,a=t.yaw??0,o=Math.cos(a),s=Math.sin(a),c=r[0]*i,l=r[1]*i,u=r[2]*i;return n[0]=o*c+s*u+t.at[0],n[1]=l+t.at[1],n[2]=-s*c+o*u+t.at[2],n}function Nc(e){return e.kind===`pause`?{key:`paused`,words:`Paused`}:e.kind===`cred`?{key:`credential`,words:`Credential check`}:e.amber?{key:`stale`,words:`Stale: its output is late`}:{key:`fresh`,words:`Fresh: made what it should this hour`}}var Pc={pulse:{value:+!(typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches||typeof document<`u`&&document.documentElement.classList.contains(`rm`))},hi:{value:-1},pc:{value:-1},pt:{value:-99},cx:{value:0}},Fc=Ac(),Ic=(()=>{let e=Array(24).fill(0),t=Array(24).fill(0);for(let n of Fc)e[n.cell]=n.cross,t[n.cell]=(n.cell-11.5)*Tc;return{cw:e,cx:t}})(),Lc=e=>e.toFixed(5),Rc={id:`watchdog`,build(e,t,n){let r=e.count,i=e.rand,a=(262144/r)**.8,o=0,s=(e,i,s,c,l,u)=>{o<r&&j.set(t,n,o++,e,i,s,c,l[0],l[1],l[2],u*a)},c=e=>Math.max(1,Math.floor(e*r)),l=(e,t)=>{let n=Math.atan2(t,e);return n<0&&(n+=Q),n/Q*.999},u=[.85,1,.9],d=[.35,.8,.5],f=Oc(i),p=e=>e.kind===`pause`?Cc:e.amber?Sc:xc,m=c(.45);for(let e=0;e<m;e++){let e=_c*Math.sqrt(i()),t=i()*Q;s(e*Math.cos(t),e*Math.sin(t),0,1,u,.034)}[.25,.5,.75].forEach(e=>{for(let t=0;t<c(.0095*e/.5+.004);t++){let t=i()*Q,n=_c*e+(i()-.5)*.006;s(n*Math.cos(t),n*Math.sin(t),.01,2,d,.4)}});for(let e=0;e<12;e++){let t=e*Q/12,n=e%3==0;for(let e=0;e<c(n?.006:.0028);e++){let e=_c*i();s(e*Math.cos(t),e*Math.sin(t),.01,2,d,n?.3:.16)}}for(let[e,t,n]of[[_c,.7,.014],[2.42,.4,.01],[2.5500000000000003,.5,.01]])for(let r=0;r<c(n);r++){let n=i()*Q;s((e+(i()-.5)*.006)*Math.cos(n),(e+(i()-.5)*.006)*Math.sin(n),.02,6,u,t)}for(let e=0;e<360;e++){let t=e%15==0,n=e%5==0,a=e*Q/360,o=2.42,c=o+(t?.13:n?.07:.035);for(let e=0;e<(t?14:n?7:3)*(r/262144,1);e++){let e=o+i()*(c-o);s(e*Math.cos(a),e*Math.sin(a),.02,6,t?[.9,1,.95]:d,t?.8:.4)}}for(let e=0;e<c(.0025);e++){let e=i()*Q,t=.09*Math.sqrt(i());s(t*Math.cos(e),t*Math.sin(e),.03,8,[.8,1,.9],.8)}for(let e=0;e<c(.002);e++){let e=i()*Q;s(.14*Math.cos(e),.14*Math.sin(e),.03,8,xc,.7)}for(let e=0;e<c(.011);e++)s(_c*i(),(i()-.5)*.012,.04,4,[.85,1,.92],.8);let h=Math.floor(c(.065)/f.length),g=Math.floor(c(.055)/f.length);for(let e of f){let t=p(e),n=l(e.x,e.y);if(e.kind===`cred`){for(let r=0;r<h;r++){let r=i()*Q;s(e.x+.075*Math.cos(r),e.y+.075*Math.sin(r),.03,12+n,t,.6)}for(let r=0;r<Math.floor(h*.3);r++){let r=i()*Q,a=.03*Math.sqrt(i());s(e.x+a*Math.cos(r),e.y+a*Math.sin(r),.03,12+n,t,.5)}}else if(e.kind===`pause`)for(let r=0;r<h;r++){let r=i()*Q,a=.055*Math.sqrt(i());s(e.x+a*Math.cos(r),e.y+a*Math.sin(r),.03,11+n,t,.45)}else for(let r=0;r<h;r++){let r=i()*Q,a=.045*Math.sqrt(-2*Math.log(1-i()*.98))*.7;s(e.x+a*Math.cos(r),e.y+a*Math.sin(r),.03,3+n,t,.5)}if(e.kind!==`pause`)for(let r=0;r<g;r++)s(e.x,e.y,.02,5+n,t,.6)}let _=[...f].sort((e,t)=>e.cell-t.cell).map(e=>({b:e}));for(let e=0;e<24;e++){let t=_[e].b,n=p(t),r=l(t.x,t.y),a=(e-11.5)*Tc;for(let e=0;e<c(.0017);e++)s(a+(i()-.5)*.15,wc+(i()-.5)*.15,.02,7+r,n,.18);for(let e=0;e<c(.0013);e++){let e=i()*4*.15,t=Math.floor(e/.15),o=e%.15-.075,c=t===0?o:t===1?.075:t===2?-o:-.075,l=t===0?-.075:t===1?o:t===2?.075:-o;s(a+c,wc+l,.02,7+r,n,.55)}}for(let e=0;e<c(.0045);e++){let e=i()<.5?-1:1;s(-12*Tc+(e>0?24*Tc:0)+(i()-.5)*.003,wc+(i()-.5)*.24,.02,6,d,.3)}for(let e=0;e<c(.02);e++)s((i()-.5)*5.16,Ec+(i()-.5)*.012,.02,13,[.55,1,.75],.28);for(let e=0;e<c(.05);e++){let e=_c*.98*Math.sqrt(i()),t=i()*Q;s(e*Math.cos(t),e*Math.sin(t),.03,9,[.5,1,.7],.5)}for(let e=0;e<c(.04);e++){let e=_c*(1.15+.5*i()**1.5),t=i()*Q;s(e*Math.cos(t),e*Math.sin(t),-.05,10,[.3,.85,.6],.03)}j.dust(t,n,o,r,i,6.5,.07*a,[.5,.95,.75]);for(let e=o;e<r;e++)t[e*4+3]=0},glsl:`
const float WD_TAU = 6.2831853;
const float WD_W = ${vc.toFixed(5)};
const float WD_RS = ${_c.toFixed(3)};
const float WD_CW[24] = float[24](${Ic.cw.map(Lc).join(`, `)});
const float WD_CX[24] = float[24](${Ic.cx.map(Lc).join(`, `)});
uniform float u_watchdog_pulse; uniform float u_watchdog_hi; uniform float u_watchdog_pc; uniform float u_watchdog_pt; uniform float u_watchdog_cx;
float wd_beam(float t) { return 1.5707963 - WD_W * t; }
float wd_behind(float th, float t) { return mod(th - wd_beam(t), WD_TAU); }
vec3 wd_tilt(vec3 q) {
  float ca = cos(${yc}), sa = sin(${yc});
  q = vec3(q.x, q.y * ca - q.z * sa, q.y * sa + q.z * ca);
  float cb = cos(${bc}), sb = sin(${bc});
  return vec3(q.x * cb + q.z * sb, q.y, -q.x * sb + q.z * cb);
}
float wd_ang(float w) { return fract(w + 0.0) / 0.999 * WD_TAU; }
// seconds since the beam last crossed this blip; a clicked blip counts from the click when that is more recent
float wd_since(float w, float t) {
  float s = wd_behind(wd_ang(w), t) / WD_W;
  if (u_watchdog_pc >= 0.0 && abs(fract(w) - u_watchdog_pc) < 0.0004) { float s2 = t - u_watchdog_pt; if (s2 >= 0.0 && s2 < 6.0) s = min(s, s2); }
  return s;
}
float wd_isc(float w, float code) { return code >= 0.0 && abs(fract(w) - code) < 0.0004 ? 1.0 : 0.0; }
// one heartbeat: P, Q, R, S, T as gaussians; u = distance behind the front that carries it
float wd_g(float u, float c, float w) { float x = (u - c) / w; return exp(-x * x); }
float wd_beat(float u) { return 0.16 * wd_g(u, 0.2, 0.09) - 0.1 * wd_g(u, 0.5, 0.03) + 0.66 * wd_g(u, 0.58, 0.032) - 0.22 * wd_g(u, 0.67, 0.032) + 0.2 * wd_g(u, 1.04, 0.14); }
// the strip's trace: every cell launches a beat when the beam crosses its blip; the beat runs outward both ways at ${Dc} units a second and fades with age and distance
vec2 wd_trace(float x, float t) {
  float y = 0.0, e = 0.0;
  for (int i = 0; i < 24; i++) {
    float age = mod(t - WD_CW[i], 8.0), d = abs(x - WD_CX[i]), u = ${Dc.toFixed(2)} * age - d;
    if (u > 0.0 && u < 1.7) { float b = wd_beat(u) * exp(-d * 0.38 - age * 1.8); y += b; e += abs(b); }
  }
  if (u_watchdog_pc >= 0.0) {
    float age = t - u_watchdog_pt, d = abs(x - u_watchdog_cx), u = ${Dc.toFixed(2)} * age - d;
    if (age >= 0.0 && u > 0.0 && u < 1.7) { float b = 1.25 * wd_beat(u) * exp(-d * 0.3 - age * 1.4); y += b; e += abs(b); }
  }
  return vec2(y * 0.95, e) * u_watchdog_pulse;
}
vec3 anim_watchdog(vec3 p, vec4 d, vec4 r, float t) {
  float w = d.w, cl = floor(w + 0.001);
  if (cl < 0.5) return p + 0.06 * vec3(sin(t * 0.21 + r.x * 40.0), sin(t * 0.17 + r.y * 40.0), sin(t * 0.13 + r.z * 40.0));
  if (cl > 3.5 && cl < 4.5) {
    float b = wd_beam(t), c = cos(b), s = sin(b);
    return wd_tilt(vec3(p.x * c - p.y * s, p.x * s + p.y * c, p.z));
  }
  if (cl > 4.5 && cl < 5.5) {
    float since = wd_since(w, t);
    float rad = 0.02 + min(since, 1.6) * 0.34;
    float a = r.x * WD_TAU;
    return wd_tilt(vec3(p.x + cos(a) * rad, p.y + sin(a) * rad, p.z));
  }
  if (cl > 6.5 && cl < 7.5) {
    float since = wd_since(w, t);
    float lift = since < 0.8 ? 0.07 * exp(-since * 5.0) : 0.0;
    return wd_tilt(vec3(p.x, p.y, p.z + lift));
  }
  if (cl > 9.5 && cl < 10.5) return wd_tilt(p + 0.03 * vec3(sin(t * 0.3 + r.x * 40.0), sin(t * 0.25 + r.y * 40.0), 0.0));
  if (cl > 12.5 && cl < 13.5) return wd_tilt(vec3(p.x, p.y + wd_trace(p.x, t).x, p.z));
  return wd_tilt(p);
}
float size_watchdog(vec4 d, vec4 r, float t) {
  float cl = floor(d.w + 0.001);
  if (cl < 0.5) return 1.3;
  if (cl < 1.5) return 1.25;
  if (cl > 3.5 && cl < 4.5) return 1.5;
  if ((cl > 2.5 && cl < 3.5) || (cl > 10.5 && cl < 13.0)) return (cl > 2.5 && cl < 3.5 ? 1.5 : 1.0) * (1.0 + 0.7 * wd_isc(d.w, u_watchdog_hi));
  if (cl > 8.5 && cl < 9.5) return 1.1;
  if (cl > 12.5 && cl < 13.5) return 1.25;
  return 1.0;
}
vec4 color_watchdog(vec4 c, vec4 d, vec4 r, float t) {
  float w = d.w, cl = floor(w + 0.001);
  vec3 rgb = c.rgb; float a = c.a;
  if (cl < 0.5) return vec4(rgb, a * (0.6 + 0.4 * sin(t * (0.5 + r.x) + r.y * 30.0)));
  if (cl < 1.5) {
    float th = atan(d.y, d.x), bh = wd_behind(th, t);
    float tr = exp(-bh * 1.9), edge = exp(-bh * 60.0);
    float rad = length(d.xy) / WD_RS;
    float tw = 0.75 + 0.25 * sin(t * 3.0 + r.x * 60.0);
    rgb = mix(vec3(0.25, 0.9, 0.5), vec3(0.7, 1.0, 0.8), edge);
    return vec4(rgb, a * (0.5 + 15.0 * tr * tw * (0.6 + 0.6 * rad) + 8.0 * edge));
  }
  if (cl > 1.5 && cl < 2.5) { float th = atan(d.y, d.x), bh = wd_behind(th, t); return vec4(rgb, a * (0.7 + 1.8 * exp(-bh * 2.2))); }
  if ((cl > 2.5 && cl < 3.5) || (cl > 10.5 && cl < 13.0)) {
    float since = wd_since(w, t);
    float fl = exp(-since * 0.75);
    float hi = wd_isc(w, u_watchdog_hi);
    float amber = step(0.8, rgb.r) * step(rgb.b, 0.3);
    float slow = cl > 10.5 && cl < 11.5 ? 0.35 + 0.65 * (0.5 + 0.5 * sin(t * 1.1 + d.x * 5.0)) * 0.6 : 1.0;
    float stale = amber * 0.4 * sin(t * 3.0 + d.x * 7.0);
    float k = cl > 10.5 && cl < 11.5 ? 0.6 : 1.0;
    return vec4(mix(rgb, vec3(1.0), clamp(fl * 0.55 * k + 0.35 * hi, 0.0, 1.0)), a * slow * (0.35 + 3.4 * fl * k + stale + 1.6 * hi));
  }
  if (cl > 3.5 && cl < 4.5) return vec4(rgb, a * (0.75 + 0.25 * sin(t * 40.0 + r.x * 20.0)));
  if (cl > 4.5 && cl < 5.5) {
    float since = wd_since(w, t);
    float vis = since < 2.0 ? exp(-since * 2.2) * smoothstep(0.0, 0.04, since) : 0.0;
    float flare = 1.0 + u_watchdog_pulse * 1.7 * exp(-since * 4.5);
    return vec4(mix(rgb, vec3(1.0), clamp(0.5 * (flare - 1.0), 0.0, 0.6)), a * vis * 1.6 * flare);
  }
  if (cl > 5.5 && cl < 6.5) { float th = atan(d.y, d.x), bh = wd_behind(th, t); return vec4(rgb, a * (0.65 + 1.2 * exp(-bh * 4.0))); }
  if (cl > 6.5 && cl < 7.5) {
    float since = wd_since(w, t);
    float fl = exp(-since * 0.6);
    float hi = wd_isc(w, u_watchdog_hi);
    return vec4(mix(rgb, vec3(1.0), clamp(fl * 0.5 + 0.3 * hi, 0.0, 1.0)), a * (0.5 + 3.2 * fl + 2.0 * hi));
  }
  if (cl > 7.5 && cl < 8.5) return vec4(rgb, a * (0.8 + 0.4 * sin(t * 2.0)));
  if (cl > 8.5 && cl < 9.5) {
    float th = atan(d.y, d.x), bh = wd_behind(th, t);
    float tw = pow(0.5 + 0.5 * sin(t * (1.5 + r.x * 3.0) + r.y * 80.0), 6.0);
    return vec4(rgb, a * (0.06 + tw * (0.8 + 2.2 * exp(-bh * 1.6))));
  }
  if (cl > 9.5 && cl < 10.5) return vec4(rgb, a * (0.7 + 0.3 * sin(t * 0.6 + d.x)));
  if (cl > 12.5 && cl < 13.5) {
    vec2 tr = wd_trace(d.x, t);
    float edge = smoothstep(1.35, 2.2, abs(d.x)) ;
    return vec4(mix(rgb, vec3(1.0), clamp(tr.y * 1.4, 0.0, 0.8)), a * (0.6 + 9.0 * tr.y) * (1.0 - 0.8 * edge));
  }
  return vec4(rgb, a);
}`,uniforms:{u_watchdog_pulse:Pc.pulse,u_watchdog_hi:Pc.hi,u_watchdog_pc:Pc.pc,u_watchdog_pt:Pc.pt,u_watchdog_cx:Pc.cx},camera:{pos:[0,.8,9.6],target:[0,-.7,.5],fov:35},pointSize:1.9,drift:.006},zc=o({default:()=>vl}),Bc=.68,Vc=.135,Hc=.02,Uc=.03,Wc=1.5,Gc=(e,t)=>[[t-Bc+Hc,e],[t-Bc+Hc+Vc,e+Vc],[t+Bc-Hc-Vc,e+Vc],[t+Bc-Hc,e],[t+Bc-Hc-Vc,e-Vc],[t-Bc+Hc+Vc,e-Vc]],Kc=(e,t,n)=>[[e,n],[e+Vc,n-Vc],[e+Vc,t+Vc],[e,t],[e-Vc,t+Vc],[e-Vc,n-Vc]],qc=1-Uc*Math.SQRT2,Jc=.115+Uc*Math.SQRT2,Yc=e=>[Gc(1.115,e),Kc(e+Bc-Vc,Jc,qc),Kc(e+Bc-Vc,-qc,-Jc),Gc(-1.115,e),Kc(e-Bc+Vc,-qc,-Jc),Kc(e-Bc+Vc,Jc,qc),Gc(0,e)],Xc=[[0,1,2,3,4,5,6],[0,1,2,3,4,5]],Zc=[-1.5*.56,Wc*.56],Qc=11,$c=13,el=10,tl=.6,nl=36,rl=.005,il=100,al=2400,ol=1300,sl=-7.4,cl=ol*rl/2,ll=[],ul=0;for(let e=0;e<$c;e++){ll.push([]);for(let t=0;t<Qc;t++){let n=sl+(t*el+(e%2?5:0))*tl*nl*rl+.42,r=cl-il*rl*(e+.5),i=n/3.45,a=r/3,o=i*i+a*a>1&&n<4.5;ll[e].push(o?ul++:-1)}}for(var dl=29;ul%dl===0;)dl+=2;var fl=(()=>{let e=49734321,t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),n=(e,n)=>e+Math.floor(t()*(n-e+1));return()=>{let e=t();if(e<.34)return`${n(12,99)} × ${n(3,12)}`;if(e<.62)return`${n(11,99)} + ${n(11,99)}`;if(e<.82)return`${n(30,140)} - ${n(11,29)}`;let r=n(3,12);return`${r*n(4,14)} ÷ ${r}`}})(),pl=2.3,ml=120,hl=e=>{let t=0;for(let n=0;n<e.length;n++){let r=e[(n+1)%e.length];t+=e[n][0]*r[1]-r[0]*e[n][1]}return Math.abs(t)/2},gl=(e,t,n,r)=>{let i=r[0]-n[0],a=r[1]-n[1],o=Math.max(0,Math.min(1,((e-n[0])*i+(t-n[1])*a)/(i*i+a*a)));return Math.hypot(e-n[0]-i*o,t-n[1]-a*o)},_l=(e,t,n)=>{let r=0;for(let i=0;i<n.length;i++){let a=n[i],o=n[(i+1)%n.length],s=(o[0]-a[0])*(t-a[1])-(o[1]-a[1])*(e-a[0]);if(s!==0){if(r!==0&&Math.sign(s)!==r)return!1;r=Math.sign(s)}}return!0},vl={id:`zeta`,async build(e,t,n){let r=e.count,i=e.rand,a=0,o=(e,t)=>e+16*t,s=(e,i,o,s,c,l,u,d)=>{a<r&&j.set(t,n,a++,e,i,o,s,c,l,u,d)},c=j.hex(`#F2B441`),l=[1,.95,.8],u=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],d=(e,t,n,r,a)=>{let d=1e9,f=-1e9,p=1e9,m=-1e9;for(let[t,n]of e)d=Math.min(d,t),f=Math.max(f,t),p=Math.min(p,n),m=Math.max(m,n);for(let h=0;h<t;h++){let t=0,h=0;do t=d+(f-d)*i(),h=p+(m-p)*i();while(!_l(t,h,e));let g=1e9;for(let n=0;n<e.length;n++)g=Math.min(g,gl(t,h,e[n],e[(n+1)%e.length]));let _=Math.sqrt(Math.max(0,1-(1-Math.min(1,g/.08))**2)),v=(i()*2-1)*.1*_,y=Math.exp(-g/.03),b=u(c,l,.15+.7*y);s(t,h,v,o(n,r),b[0],b[1],b[2],a*(.55+1.1*y))}},f=Math.floor(r*.28),p=Math.floor(r*.008);for(let e=0;e<2;e++){let t=Yc(Zc[e]),n=Xc[e].reduce((e,n)=>e+hl(t[n]),0);for(let r of Xc[e])d(t[r],Math.round(f/2*hl(t[r])/n),0,e*8+r,.5);for(let n=0;n<7;n++)Xc[e].includes(n)||d(t[n],Math.round(p/2*hl(t[n])/hl(t[6])),1,e*8+n,.03)}let m=Math.floor(r*.04);for(let e=0;e<m;e++){let e=Zc[Math.floor(i()*2)],t=i()*Math.PI*2,n=.45+1.1*i()**.9;s(e+Math.cos(t)*n*.75,Math.sin(t)*n*1.2,-.25-i()*.4,o(5,0),c[0],c[1]*.9,c[2]*.7,.012+.03*Math.exp(-n*1.5))}let h=Math.floor(r*.05)/141;for(let e=0;e<ml;e++){let t=e%10==0,n=Math.PI/2-e/ml*Math.PI*2,r=Math.cos(n),a=Math.sin(n),l=t?.26:.11,u=t?.022:.012,d=Math.round(h*(t?2.5:1)*(.7+l/.26*.6)+i());for(let t=0;t<d;t++){let t=pl+l*i(),n=(i()*2-1)*u;s(r*t-a*n,a*t+r*n,(i()*2-1)*.02,o(2,e),c[0],c[1],c[2],.2)}}let g=Math.floor(r*.02);for(let e=0;e<g;e++){let e=i()*Math.PI*2,t=2.2399999999999998+(i()-.5)*.012;s(Math.cos(e)*t,Math.sin(e)*t,(i()-.5)*.02,o(3,0),c[0],c[1],c[2],.2)}let _=[];for(let e=0;e<$c;e++){let t=e%2?` `.repeat(5):``;for(let n=0;n<Qc;n++)t+=ll[e][n]>=0?fl().padEnd(el,` `):` `.repeat(el);_.push(t)}let v=await e.textMask(_.join(`
`),{font:`500 ${nl}px "IBM Plex Mono", monospace`,width:al,height:ol,align:`left`}),y=Math.floor(r*.27),b=j.sampleMask(v,y,i,!1,.45),x=e=>{let t=Math.sin(e*91.7+3.1)*43758.5453;return-.45-2*(t-Math.floor(t))};for(let[e,t]of b){let n=Math.min(12,Math.floor(t/il)),r=Math.floor((e/(tl*nl)-(n%2?5:0))/el),i=r>=0&&r<Qc?ll[n][r]:-1;if(i<0)continue;let a=sl+e*rl,l=cl-t*rl,d=x(i),f=.3+.7*Math.min(1,Math.max(0,(a+7)/3.6)),p=1-.3*(-d-.45)/2,m=u(c,[1,.88,.62],.25);s(a,l,d,o(4,i),m[0],m[1],m[2],.17*f*p)}for(;a<r;)s((i()*2-1)*7.2-1.2,(i()*2-1)*3.6,(i()*2-1)*2.2-.6,o(6,0),c[0],c[1]*.95,c[2]*.8,.03+.12*i()**3)},glsl:`
const float PZ_CYC = 30.0;
const float PZ_NC = ${ul.toFixed(1)};
const float PZ_STEP = ${dl.toFixed(1)};
const float PZ_R = ${pl.toFixed(3)};
vec3 pz_yaw(vec3 q, float a) { float c = cos(a), s = sin(a); return vec3(c * q.x + s * q.z, q.y, -s * q.x + c * q.z); }
float pz_h(float x) { return fract(sin(x * 12.9898 + 4.1414) * 43758.5453); }
vec3 anim_zeta(vec3 p, vec4 d, vec4 r, float t) {
  float kind = mod(d.w, 16.0);
  float a = 0.13 * sin(t * 0.37) + 0.035 * sin(t * 0.83 + 1.0);
  if (kind > 5.5) {
    vec3 q = p + vec3(sin(t * 0.13 + r.x * 40.0) * 0.2, 0.06 * t * (0.3 + r.y), cos(t * 0.11 + r.z * 40.0) * 0.15);
    q.y = mod(q.y + 3.6, 7.2) - 3.6;
    return q;
  }
  vec3 q = p;
  if (kind < 1.5) q *= 1.0 + 0.012 * sin(t * 1.6 + d.x);
  if (kind > 3.5 && kind < 4.5) a *= 0.7;
  return pz_yaw(q, a);
}
float size_zeta(vec4 d, vec4 r, float t) {
  float kind = mod(d.w, 16.0);
  if (kind < 0.5) return 1.0;
  if (kind < 1.5) return 0.9;
  if (kind > 4.5 && kind < 5.5) return 3.4;
  if (kind > 3.5 && kind < 4.5) return 0.8;
  return 0.85;
}
vec4 color_zeta(vec4 c, vec4 d, vec4 r, float t) {
  float kind = mod(d.w, 16.0), id = floor(d.w / 16.0 + 0.001);
  float scan = 0.8 + 0.2 * sin(d.y * 70.0 - t * 2.6);
  float sweepY = 3.6 - mod(t * 0.75, 8.6);
  float band = exp(-pow((d.y - sweepY) / 0.16, 2.0));
  float shimmer = 0.9 + 0.1 * sin(t * 9.0 + r.w * 60.0);
  vec3 hot = vec3(1.0, 0.95, 0.8);
  if (kind < 1.5) {
    vec3 rgb = c.rgb + hot * band * 0.7;
    float flick = 1.0 - 0.1 * step(0.985, sin(t * 2.3) * 0.5 + 0.5);
    return vec4(rgb, c.a * (kind < 0.5 ? scan * shimmer * flick * (1.0 + 1.1 * band) : (0.7 + 0.3 * sin(t * 0.8 + id))));
  }
  if (kind < 2.5 || kind < 3.5) {
    float f = fract(t / PZ_CYC);
    float frac = kind < 2.5 ? id / 120.0 : fract((1.5707963 - atan(d.y, d.x)) / 6.2831853);
    float dx = frac - f;
    float remain = step(0.0, dx);
    float head = exp(-abs(dx) * 120.0 / 1.6);
    float after = exp(min(dx, 0.0) * 120.0 / 7.0);
    float a = c.a * (remain * 1.0 + (1.0 - remain) * (0.12 + 0.8 * after)) * (0.8 + 0.2 * scan);
    vec3 rgb = mix(c.rgb, hot, head * 0.85);
    a *= 1.0 + 4.0 * head;
    a *= 1.0 + 2.5 * exp(-f * 60.0);
    return vec4(rgb, a);
  }
  if (kind < 4.5) {
    float cell = id;
    float h1 = pz_h(cell + 0.5), h2 = pz_h(cell * 1.7 + 9.0);
    float vis = 0.18 + 0.82 * smoothstep(-0.25, 0.55, sin(t * (0.45 + 1.0 * h1) + h2 * 40.0));
    float tick = t * 2.2;
    float act = 0.0;
    for (int j = 0; j < 4; j++) {
      float idx = mod((floor(tick) - float(j)) * PZ_STEP, PZ_NC);
      float w = (j == 0 ? smoothstep(0.0, 0.25, fract(tick)) : 1.0 - float(j) * 0.24);
      act += step(abs(cell - idx), 0.5) * w;
    }
    vec3 rgb = mix(c.rgb, hot, min(1.0, act) * 0.8) + hot * band * 0.25;
    float flick = 0.82 + 0.18 * sin(t * 23.0 + h2 * 60.0);
    return vec4(rgb, c.a * vis * scan * flick * (1.0 + 4.0 * act) + 0.0);
  }
  if (kind < 5.5) return vec4(c.rgb, c.a * (0.8 + 0.2 * sin(t * 1.4)) * (1.0 + 0.5 * band));
  c.a *= 0.6 + 0.4 * sin(t * 1.1 + r.w * 40.0);
  return c;
}`,camera:{pos:[-2.4,0,10.6],target:[-2.4,0,0],fov:35},pointSize:2.2,drift:.004},yl=Object.assign({"./appfolio.ts":M,"./brain.ts":me,"./bust.ts":be,"./campus.ts":Ee,"./chomchom.ts":$e,"./cloudflare.ts":Ft,"./compass.ts":ln,"./counties.ts":yn,"./dyads.ts":Sn,"./epilogue.ts":Nn,"./fog.ts":Fn,"./guitar.ts":Cr,"./hold.ts":mi,"./hold3d.ts":ji,"./knight.ts":Ni,"./mathecon.ts":Ui,"./meeple.ts":ha,"./name.ts":Sa,"./orbits.ts":ja,"./phase.ts":Ua,"./pushup.ts":Xa,"./recruiting.ts":Do,"./secretary.ts":Go,"./sphere.ts":hs,"./surface.ts":_s,"./table.ts":Os,"./turntable3d.ts":qs,"./uchicago.ts":Ys,"./watchdog.ts":gc,"./zeta.ts":zc}),bl={};for(let e of Object.values(yl)){let t=e.default;for(let e of Array.isArray(t)?t:t?[t]:[])bl[e.id]=e}var xl={pos:[0,0,9],target:[0,0,0],fov:35};function Sl(e,t,n,r,i){let a=2/Math.max(1e-4,r),o=a*i,s=1/(1+o+.48*o*o+.235*o*o*o),c=e-t,l=(n+a*c)*i;return[t+(c+l)*s,(n-a*l)*s]}var Cl=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)},wl=class e{camera=new u(35,1,.05,120);reducedMotion=!1;halfWidth=2.9;p=[0,0,9];pv=[0,0,0];t=[0,0,0];tv=[0,0,0];f=35;fv=0;px=0;pxv=0;py=0;pyv=0;kick=0;kickV=0;kickIn=0;nx=0;ny=0;a=xl;b=xl;mix=0;fresh=!0;direct=null;prevP=[0,0,0];prevDir=[0,0,-1];spd=0;yawRate=0;roll=0;fovAdd=0;speedNorm=0;havePrev=!1;static SPEED_REF=30;tmpR=new f;tmpU=new f;tmpD=new f;energy=0;distance=9;setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}setTargets(e,t,n){this.a=e??xl,this.b=t??xl,this.mix=n}setDirect(e,t,n,r){let i=this.direct??={pos:[0,0,0],target:[0,0,0],fov:35,hw:this.halfWidth};for(let n=0;n<3;n++)i.pos[n]=e[n],i.target[n]=t[n];i.fov=n,i.hw=r??this.halfWidth}clearDirect(){this.direct=null}setPointer(e,t){this.nx=e,this.ny=t}setVelocity(e){this.kickIn=e}snap(){this.fresh=!0,this.havePrev=!1}update(t,n){t=Math.min(t,.1);let r=Cl(this.mix),i=this.a,a=this.b,o=this.direct,s=(e,t)=>e+(t-e)*r,c=o?o.pos.slice():[s(i.pos[0],a.pos[0]),s(i.pos[1],a.pos[1]),s(i.pos[2],a.pos[2])],l=o?o.target.slice():[s(i.target[0],a.target[0]),s(i.target[1],a.target[1]),s(i.target[2],a.target[2])],u=o?o.fov:s(i.fov??35,a.fov??35),d=Math.tan(u*Math.PI/360),f=this.camera.aspect,m=c[0]-l[0],h=c[1]-l[1],g=c[2]-l[2],_=Math.hypot(m,h,g)||1,v=(o?o.hw:s(i.halfWidth??this.halfWidth,a.halfWidth??this.halfWidth))/(d*f)*.95;if(v>_){let e=v/_;c[0]=l[0]+m*e,c[1]=l[1]+h*e,c[2]=l[2]+g*e}this.fresh&&=(this.p=c.slice(),this.t=l.slice(),this.f=u,this.pv=[0,0,0],this.tv=[0,0,0],this.fv=0,!1);let y=o?this.reducedMotion?.02:.11:.62,b=0;for(let e=0;e<3;e++){let[n,r]=Sl(this.p[e],c[e],this.pv[e],y,t);this.p[e]=n,this.pv[e]=r;let[i,a]=Sl(this.t[e],l[e],this.tv[e],y*.9,t);this.t[e]=i,this.tv[e]=a,b+=Math.abs(r)+Math.abs(a)+Math.abs(n-c[e])+Math.abs(i-l[e])}{let[e,n]=Sl(this.f,u,this.fv,o?y:.55,t);this.f=e,this.fv=n,b+=Math.abs(n)+Math.abs(e-u)*.1}let x=this.reducedMotion,S=x?0:this.nx,C=x?0:this.ny;{let[e,n]=Sl(this.px,S,this.pxv,.42,t);this.px=e,this.pxv=n,b+=Math.abs(n)+Math.abs(e-S)}{let[e,n]=Sl(this.py,C,this.pyv,.42,t);this.py=e,this.pyv=n,b+=Math.abs(n)+Math.abs(e-C)}let w=x?0:Math.max(-3,Math.min(3,this.kickIn))*(o?.1:.3);{let[e,n]=Sl(this.kick,w,this.kickV,.32,t);this.kick=e,this.kickV=n,b+=Math.abs(n)+Math.abs(e-w)}this.energy=b;let T=this.p,E=this.t;{let n=!this.havePrev,r=n?0:Math.hypot(T[0]-this.prevP[0],T[1]-this.prevP[1],T[2]-this.prevP[2])/Math.max(t,.001);this.havePrev=!0,this.spd+=(r-this.spd)*(1-Math.exp(-t/.12));let i=Math.min(1,this.spd/e.SPEED_REF);this.speedNorm=i;let a=E[0]-T[0],s=E[2]-T[2],c=Math.hypot(a,s)||1,l=a/c,u=s/c;n&&(this.prevDir[0]=l,this.prevDir[2]=u);let d=Math.atan2(this.prevDir[2]*l-this.prevDir[0]*u,this.prevDir[0]*l+this.prevDir[2]*u);this.prevDir[0]=l,this.prevDir[2]=u;let f=Math.max(-1.2,Math.min(1.2,d/Math.max(t,.001)));this.yawRate+=(f-this.yawRate)*(1-Math.exp(-t/.3)),this.prevP[0]=T[0],this.prevP[1]=T[1],this.prevP[2]=T[2];let p=o&&!x;this.fovAdd+=((p?3.5*i:0)-this.fovAdd)*(1-Math.exp(-t/.2)),this.roll+=((p?this.yawRate/.6*.0436*Math.min(1,i*2):0)-this.roll)*(1-Math.exp(-t/.3)),this.energy+=Math.abs(this.fovAdd)*.2+Math.abs(this.roll)*4+this.spd*.01}this.tmpD.set(E[0]-T[0],E[1]-T[1],E[2]-T[2]);let D=this.tmpD.length()||1;this.distance=D,this.tmpD.multiplyScalar(1/D),this.tmpR.crossVectors(this.tmpD,p.DEFAULT_UP).normalize(),this.tmpU.crossVectors(this.tmpR,this.tmpD).normalize();let O=D/9,k=+!x,A=o?1-.85*this.speedNorm:1,j=this.px*.55*O*A+Math.sin(n*.21)*.06*O*k,M=-this.py*.32*O*A+Math.sin(n*.17+1.3)*.04*O*k,N=this.camera;N.position.set(T[0]+this.tmpR.x*j+this.tmpU.x*M+this.tmpD.x*this.kick,T[1]+this.tmpR.y*j+this.tmpU.y*M+this.tmpD.y*this.kick,T[2]+this.tmpR.z*j+this.tmpU.z*M+this.tmpD.z*this.kick),N.up.set(0,1,0),N.lookAt(E[0],E[1],E[2]),this.roll&&N.rotateZ(this.roll);let P=this.f+Math.abs(this.kick)*1.6+this.fovAdd;Math.abs(N.fov-P)>1e-4&&(N.fov=P,N.updateProjectionMatrix()),N.updateMatrixWorld()}},Tl=typeof location<`u`?new URLSearchParams(location.search):new URLSearchParams;function El(e){let t=Tl.get(`extras`);if(t==null||t===``)return!0;if(t===`0`||t===`off`||t===`none`)return!1;let n=t.split(`,`).map(e=>e.trim()).filter(Boolean);if(n.includes(`-`+e))return!1;let r=n.filter(e=>!e.startsWith(`-`)&&e!==`1`&&e!==`all`);return!r.length||r.includes(e)}var Dl=()=>typeof innerWidth==`number`&&(innerWidth<=760||typeof matchMedia==`function`&&matchMedia(`(pointer: coarse) and (max-width: 1100px)`).matches),Ol=()=>r.reduced||typeof document<`u`&&document.documentElement.classList.contains(`rm`),kl=e=>e<0?0:e>1?1:e,Al=(e,t,n)=>{let r=kl((n-e)/(t-e));return r*r*(3-2*r)},jl=(e,t,n,r)=>t+(e-t)*Math.exp(-r/Math.max(1e-4,n)),Ml=(e,t,n)=>e+(t-e)*n;function Nl(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Pl=(()=>{let e=window,t=e.__atmos??={};return t.on??={},t.cpu??={},t})(),Fl=e=>Pl.on[e]!==!1;function Il(e,t){return(...n)=>{let r=performance.now();t(...n);let i=performance.now()-r;Pl.cpu[e]=(Pl.cpu[e]??i)*.95+i*.05}}var Ll=o({DWELL_SCALE:()=>Rl,FlightFollower:()=>ld,LEG_SECS:()=>Eu,MIN_FORMED_U:()=>Vl,SCROLL_SCALE:()=>Bl,SCROLL_VH:()=>uu,SET_PIECE_SECS:()=>xu,TRAVEL_SCALE:()=>zl,bezier:()=>Hl,darkSeconds:()=>zu,dwellRange:()=>hu,flightAt:()=>Vu,hopSeconds:()=>nd,jumpDuration:()=>Ku,legEase:()=>Ul,legRange:()=>gu,legSeconds:()=>Du,monoCubic:()=>bu,nearestWaypoint:()=>vu,powerOffArmed:()=>Uu,powerOffAt:()=>Hu,refreshLegSecs:()=>Lu,segmentAt:()=>qu,stationAt:()=>Gu,stepTarget:()=>Ju,waypointIndex:()=>_u,waypointP:()=>mu}),Rl=.6,zl=.48,Bl=Rl,Vl=1.04;function Hl(e,t,n,r){let i=3*e,a=3*(n-e)-i,o=1-i-a,s=3*t,c=3*(r-t)-s,l=1-s-c,u=e=>((o*e+a)*e+i)*e,d=e=>((l*e+c)*e+s)*e,f=e=>(3*o*e+2*a)*e+i;return e=>{if(e<=0)return 0;if(e>=1)return 1;let t=e;for(let n=0;n<6;n++){let n=u(t)-e,r=f(t);if(Math.abs(n)<1e-6||Math.abs(r)<1e-6)break;t-=n/r}let n=0,r=1;if(t<0||t>1||Math.abs(u(t)-e)>1e-5){t=e;for(let i=0;i<24;i++)u(t)<e?n=t:r=t,t=(n+r)/2}return d(t)}}var Ul=Hl(.65,0,.35,1),Wl=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Gl=e=>Math.min(1,Math.max(0,e)),Kl=(e,t,n)=>e+(t-e)*n,ql=(()=>{let e=0;for(let t=0;t<200;t++){let n=t/200;e=Math.max(e,(Ul(n+.002)-Ul(Math.max(0,n-.002)))/(n+.002-Math.max(0,n-.002)))}return e})(),Jl=e=>{let t=.01,n=Math.max(0,e-t),r=Math.min(1,e+t);return(Ul(r)-Ul(n))/(r-n)/ql},Yl=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]);function Xl(e,t,n,r,i){let a=(e,t)=>Math.max(.001,Math.sqrt(Yl(e,t))),o=0+a(e,t),s=o+a(t,n),c=s+a(n,r),l=o+(s-o)*i,u=[0,0,0];for(let i=0;i<3;i++){let a=((o-l)*e[i]+(l-0)*t[i])/(o-0),d=((s-l)*t[i]+(l-o)*n[i])/(s-o),f=((c-l)*n[i]+(l-s)*r[i])/(c-s),p=((s-l)*a+(l-0)*d)/(s-0),m=((c-l)*d+(l-o)*f)/(c-o);u[i]=((s-l)*p+(l-o)*m)/(s-o)}return u}var Zl=(e,t,n)=>{let r=e[0]-t[0],i=e[2]-t[2],a=Math.cos(n),o=Math.sin(n);return[t[0]+a*r+o*i,e[1],t[2]-o*r+a*i]},Ql=K.length,$l=K.map((e,t)=>K[t-1]?.area===e.area&&e.area!==`hub`||K[t+1]?.area===e.area&&e.area!==`hub`?.025:e.area===`hub`?.03:.07),eu=e=>K[e].cam,tu=e=>K[e].cam.fov??35,nu=e=>Zl(eu(e).pos,eu(e).target,-$l[e]),ru=e=>Zl(eu(e).pos,eu(e).target,+$l[e]),iu=e=>{let t=0;for(let n=0;n<400;n++)e((n+.5)/400)&&t++;return t/400},au=iu(e=>Wl(.25,.8,Ul(e))>=.98),ou=iu(e=>Wl(.25,.8,Ul(e))<=.02),su=K.map((e,t)=>t>0?e.travel*zl:0),cu=K.map((e,t)=>{let n=su[t]*au+(t+1<Ql?su[t+1]*ou:0);return Math.max(e.dwell*Rl,Vl-n)}),lu=[],$=0;for(let e=0;e<Ql;e++)su[e]>0&&(lu.push({kind:`leg`,i:e,w:su[e],start:$,end:$+su[e]}),$+=su[e]),lu.push({kind:`dwell`,i:e,w:cu[e],start:$,end:$+cu[e]}),$+=cu[e];var uu=Math.round($*100)/100,du=e=>{let t=0,n=lu.length-1;for(;t<n;){let r=t+n+1>>1;lu[r].start<=e?t=r:n=r-1}return lu[t]},fu=e=>lu.find(t=>t.kind===`dwell`&&t.i===e),pu=e=>lu.find(t=>t.kind===`leg`&&t.i===e),mu=e=>{let t=fu(Math.max(0,Math.min(Ql-1,e)));return(t.start+t.w*.5)/$},hu=e=>{let t=fu(e);return[t.start/$,t.end/$]},gu=e=>{let t=pu(e);return t?[t.start/$,t.end/$]:null},_u=e=>K.findIndex(t=>t.id===e),vu=e=>{let t=0,n=9;for(let r=0;r<Ql;r++){let i=Math.abs(mu(r)-e);i<n&&(n=i,t=r)}return t},yu=e=>Math.min(1,Math.max(.12,Yl(eu(e-1).pos,eu(e).pos)/22));function bu(e,t){let n=e.length,r=[],i=[],a=[];for(let a=0;a<n-1;a++)r[a]=e[a+1]-e[a],i[a]=(t[a+1]-t[a])/r[a];a[0]=i[0],a[n-1]=i[n-2];for(let e=1;e<n-1;e++)a[e]=i[e-1]*i[e]<=0?0:3*(r[e-1]+r[e])/((2*r[e]+r[e-1])/i[e-1]+(r[e]+2*r[e-1])/i[e]);for(let e=0;e<n-1;e++){if(i[e]===0){a[e]=0,a[e+1]=0;continue}let t=a[e]/i[e],n=a[e+1]/i[e],r=t*t+n*n;if(r>9){let o=3/Math.sqrt(r);a[e]=o*t*i[e],a[e+1]=o*n*i[e]}}return i=>{if(i<=e[0])return t[0];if(i>=e[n-1])return t[n-1];let o=0;for(;o<n-2&&i>e[o+1];)o++;let s=(i-e[o])/r[o],c=s*s,l=c*s;return(2*l-3*c+1)*t[o]+(l-2*c+s)*r[o]*a[o]+(-2*l+3*c)*t[o+1]+(l-c)*r[o]*a[o+1]}}var xu={"gate>hall":5,"hall>hold":3.4,"name>world":2.4,"knight>epilogue":3.6,"mind>school":2},Su=1.35,Cu=new Set([`knight>epilogue`]),wu=e=>{let t=Math.max(Yl(eu(e-1).pos,eu(e).pos),Yl(eu(e-1).target,eu(e).target)),n=Math.sqrt(Gl((t-2)/41));return Math.round((Su+.5999999999999999*n)*20)/20};function Tu(e,t){if(e===0)return 0;let n=`${K[e-1].id}>${K[e].id}`,r=xu[n];return r&&(t||Cu.has(n))?r:wu(e)}var Eu=K.map((e,t)=>Tu(t,!Dl()&&!Ol())),Du=e=>Eu[Math.max(0,Math.min(Ql-1,e))],Ou=.15,ku=.87,Au=1,ju=e=>{let t=0,n=1;for(let r=0;r<40;r++){let r=(t+n)/2;Ul(r)<e?t=r:n=r}return(t+n)/2},Mu=ju(Ou),Nu=ju(ku),Pu=(e,t)=>e===0||(Nu-Mu)*t<=Au?null:bu([0,.5-Au/(2*t),.5+Au/(2*t),1],[0,Ou,ku,1]),Fu=Eu.map((e,t)=>Pu(t,e)),Iu=!Dl()&&!Ol();function Lu(){let e=Iu=!Dl()&&!Ol();for(let t=0;t<Ql;t++)Eu[t]=Tu(t,e),Fu[t]=Pu(t,Eu[t])}var Ru=()=>{(!Dl()&&!Ol())!==Iu&&Lu()};if(typeof window<`u`){let e=0;window.addEventListener(`resize`,()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>requestAnimationFrame(Lu))})}function zu(e){return e<=0||K[e-1].overlay===K[e].overlay?0:Fu[e]?Au:(Nu-Mu)*Eu[e]}function Bu(e){e=Math.min(1,Math.max(0,e));let t=e*$,n=du(t),r=n.w>0?Math.min(1,Math.max(0,(t-n.start)/n.w)):0;if(n.kind===`dwell`){let t=n.i,i=K[t],a=i.cam,o=$l[t]*(2*r-1),s=Zl(a.pos,a.target,o);return{wp:t,next:t,t:0,a:i.form,b:i.form,mix:0,placeA:i.place,placeB:i.place,cam:{pos:s,target:[a.target[0],a.target[1],a.target[2]],fov:a.fov??35},speed:.08,area:i.area,overlay:i.overlay,overlayNext:i.overlay,overlayK:0,overlayOut:1,overlayIn:1,p:e,dwelling:!0,local:r,raw:0,tvsA:i.tvs??[],tvsB:i.tvs??[],sound:i.sound,legSecs:0}}let i=n.i,a=i-1,o=K[a],s=K[i],c=Ul(r),l=eu(Math.max(0,a-1)).pos,u=ru(a),d=nu(i),f=eu(Math.min(Ql-1,i+1)).pos,p=Xl(a-1>=0?l:[2*u[0]-d[0],2*u[1]-d[1],2*u[2]-d[2]],u,d,i+1<Ql?f:[2*d[0]-u[0],2*d[1]-u[1],2*d[2]-u[2]],c),m=a-1>=0?eu(a-1).target:null,h=eu(a).target,g=eu(i).target,_=i+1<Ql?eu(i+1).target:null,v=Xl(m??[2*h[0]-g[0],2*h[1]-g[1],2*h[2]-g[2]],h,g,_??[2*g[0]-h[0],2*g[1]-h[1],2*g[2]-h[2]],Ul(Math.min(1,r+.05))),y=Kl(tu(a),tu(i),c),b=o.overlay===s.overlay,x=Fu[i]?Fu[i](r):c,S=1-Wl(0,.3,x),C=Wl(.78,.96,x);return{wp:a,next:i,t:c,a:o.form,b:s.form,mix:Wl(.25,.8,c),placeA:o.place,placeB:s.place,cam:{pos:p,target:v,fov:y},speed:Math.max(.08,Jl(r)*yu(i)),area:c<.5?o.area:s.area,overlay:o.overlay,overlayNext:s.overlay,overlayK:x,overlayOut:b?1:S,overlayIn:b?1:C,p:e,dwelling:!1,local:0,raw:r,tvsA:o.tvs??[],tvsB:s.tvs??[],sound:s.sound,legSecs:Eu[i]}}function Vu(e){return Bu(e)}function Hu(e){return e.wp!==Ql-1||!e.dwelling?0:Wl(.22,.88,e.local)}function Uu(e,t=!1){return e.wp!==Ql-1||!e.dwelling?!1:e.local>=(t?.14:.24)}var Wu=K.map((e,t)=>mu(t));function Gu(e){if(e<=Wu[0])return 0;if(e>=Wu[Ql-1])return Ql-1;let t=0,n=Ql-1;for(;n-t>1;){let r=t+n>>1;Wu[r]<=e?t=r:n=r}return t+(e-Wu[t])/(Wu[n]-Wu[t])}var Ku=e=>Math.min(2.2,Math.max(1.2,.9+.3*e));function qu(e){let t=du(Gl(e)*$);return{kind:t.kind,i:t.i,loc:t.w>0?Gl((Gl(e)*$-t.start)/t.w):0}}function Ju(e,t){let n=du(Gl(e)*$);return Math.min(Ql-1,Math.max(0,n.kind===`dwell`?n.i+t:t>0?n.i:n.i-1))}var Yu=.62,Xu=.9,Zu=.6,Qu=.7,$u=.12;function ed(e,t,n,r=1/0){let i=e*$,a=t*$;if(Math.abs(a-i)<1e-5)return null;let o=a>i?1:-1,s=Math.min(i,a),c=Math.max(i,a),l=[];for(let e of lu){let t=Math.max(s,e.start),n=Math.min(c,e.end);n-t>1e-6&&l.push({sg:e,a:t,b:n})}o<0&&l.reverse();let u=[],d=0,f=0;if(l.forEach((e,t)=>{let n=(e.b-e.a)/e.sg.w,r=t===l.length-1,i=e.sg.kind===`leg`,a=Math.max(.001,i?Eu[e.sg.i]*n:(r?Xu:t===0?Yu:Zu)*n);u.push({t0:d,t1:d+a,p0:(o>0?e.a:e.b)/$,p1:(o>0?e.b:e.a)/$,ease:+!i}),d+=a,i&&(f=d)}),!u.length)return null;if(d>r){let e=r/d;for(let t of u)t.t0*=e,t.t1*=e;d*=e,f*=e}let p=u[0],m=p.ease===0?(p.p1-p.p0)/(p.t1-p.t0):0;return{from:e,g:t,dir:o,phases:u,total:d,t:0,carry:n-m,legEnd:f}}function td(e,t){t=Math.min(e.total,Math.max(0,t));let n=e.phases[e.phases.length-1];for(let r of e.phases)if(t<=r.t1){n=r;break}let r=Gl((t-n.t0)/(n.t1-n.t0)),i=n.ease===0?r:r*r*(3-2*r),a=Math.max(0,1-t/Math.min(e.total,Qu));return n.p0+(n.p1-n.p0)*i+e.carry*t*a*a}var nd=(e,t,n=1/0)=>ed(e,t,0,n)?.total??0,rd=lu.filter(e=>e.kind===`leg`).reduce((e,t)=>e+t.w,0)/Math.max(1,lu.filter(e=>e.kind===`leg`).length),id=1.6,ad=.012,od=.6,sd=.012,cd=2.8,ld=class{smoothTime;legFloor;dwellFloor;s=0;v=0;jump=null;hop=null;lastGoal=-1;boost=0;constructor(e=.3,t=1.8,n=.9){this.smoothTime=e,this.legFloor=t,this.dwellFloor=n}snap(e){this.s=e,this.v=0,this.jump=null,this.hop=null,this.lastGoal=e,this.boost=0}startHop(e,t=1/0){return e=Gl(e),Ru(),this.lastGoal=e,this.jump=null,this.boost=0,this.hop=ed(this.s,e,this.v,t),!!this.hop}get locked(){return!!this.jump||!!this.hop&&this.hop.t<this.hop.legEnd+$u}get jumpProgress(){let e=this.jump;return e?Ul(Math.min(1,e.t/e.dur)):0}update(e,t,n=t){if(t=Math.min(.1,Math.max(0,t)),e=Math.min(1,Math.max(0,e)),t<=0)return this.s;let r=this.lastGoal>=0?Math.abs(e-this.lastGoal):0,i=r>=ad&&r/Math.max(1/120,n)>=od;this.lastGoal=e;let a=Math.abs(Gu(e)-Gu(this.s));this.hop&&(i||Math.abs(e-this.hop.g)>sd)&&(this.hop=null),!this.hop&&!this.jump&&i&&a>.45&&a<=id&&this.startHop(e,cd),this.jump&&(i||Math.abs(e-this.jump.g)>sd)&&(this.boost=Math.max(this.boost,Math.abs(this.v)/Math.max(1e-6,this.nearCap(e))),this.jump=null),!this.jump&&i&&a>id&&(this.jump={p0:this.s,g:e,dur:Ku(a),t:0,v0:this.v});let o=this.hop;if(o){o.t+=t;let n=this.s;return this.s=Gl(td(o,o.t)),this.v=(this.s-n)/t,o.t>=o.total&&(this.s=Math.abs(e-o.g)<sd?e:o.g,this.v=0,this.hop=null),this.s}let s=this.jump;if(s){s.t+=t;let e=Math.min(1,s.t/s.dur),n=this.s,r=s.p0+(s.g-s.p0)*Ul(e)+s.v0*s.t*(1-e)*(1-e);return(s.g-s.p0)*(r-s.g)>0&&(r=s.g),this.s=Math.min(1,Math.max(0,r)),this.v=(this.s-n)/t,e>=1&&(this.s=s.g,this.v=0,this.jump=null),this.s}let[c,l]=Sl(this.s,e,this.v,this.smoothTime,t),u=c-this.s,d=this.nearCap(e)*(1+this.boost)*t;return this.boost*=Math.exp(-t/.45),Math.abs(u)>d?(u=Math.sign(u)*d,this.v=u/t):this.v=l,this.s=Math.min(1,Math.max(0,this.s+u)),Math.abs(e-this.s)<1e-6&&Math.abs(this.v)<1e-5&&(this.s=e,this.v=0),this.s}predict(e,t){let n=this.jump,r=this.hop,i={s:this.s,v:this.v,boost:this.boost,last:this.lastGoal,jt:n?n.t:0,ht:r?r.t:0},a=this.s;for(let n=0;n<4;n++)a=this.update(e,t/4);return this.s=i.s,this.v=i.v,this.boost=i.boost,this.lastGoal=i.last,this.jump=n,n&&(n.t=i.jt),this.hop=r,r&&(r.t=i.ht),a}nearCap(e){let t=du(this.s*$),n=t.kind===`leg`?this.legFloor:this.dwellFloor,r=Math.abs(e-this.s)*$/rd,i=Math.min(12,1+.75*Math.max(0,r-1));return t.w/$/n*i}},ud=30,dd=.5,fd=180,pd=280,md=40,hd=16,gd=.45,_d=.2;function vd(e){let t=document.documentElement,n=e.follower,r=[],i=typeof location<`u`?new URLSearchParams(location.search):new URLSearchParams,a=i.get(`step`)!==`0`,o={frame:k,step:f,magnet:i.get(`magnet`)!==`0`,log:r},s=()=>e.forced()||e.reduced(),c=()=>window.scrollY<=e.range()+4,l=()=>!!document.querySelector(`dialog[open]`)||t.classList.contains(`is-loading`)||t.classList.contains(`in-index`)||e.blocked(),u=e=>{for(let t=e;t&&t.nodeType===1&&t!==document.body&&t!==document.documentElement;t=t.parentElement){let e=getComputedStyle(t).overflowY;if((e===`auto`||e===`scroll`)&&t.scrollHeight>t.clientHeight+1)return!0}return!1},d=t=>a&&!e.forced()&&c()&&!l()&&!u(t);function f(t,i=`key`){if(n.jump)return!1;let a=n.s,o=qu(a),c=!!n.hop&&n.locked&&n.hop.dir!==t&&o.kind===`dwell`,l=c?o.i:Ju(a,t);if(!c&&o.kind===`dwell`&&l===o.i)return!1;let u=e.setProgress(mu(l));return s()||n.startHop(u),r.push({t:performance.now(),via:i,dir:t,to:l}),r.length>400&&r.shift(),!0}let p=e=>!n.locked||!!n.hop&&!n.jump&&n.hop.dir!==e&&n.hop.t>_d,m=()=>n.s>=mu(e.count-1)-1e-4&&!n.locked,h=0,g=-1e9,_=0,v=0,y=!0;addEventListener(`wheel`,e=>{if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||!d(e.target))return;let t=e.deltaMode===1?16:e.deltaMode===2?innerHeight:1,n=e.deltaY*t,r=e.deltaX*t;if(Math.abs(r)>Math.abs(n)||n===0)return;let i=n>0?1:-1;if(i>0&&m())return;e.preventDefault();let a=e.timeStamp,o=a-g,s=Math.abs(n),c=o>fd||Math.sign(n)!==v||s>_*2.2+18;if(_=o>fd?s:_+(s-_)*.3,g=a,v=Math.sign(n),!p(i))y=!0,h=0;else{if(c)y=!1,h=0;else if(y)return;h=h*Math.exp(-o/1e3/dd)+n,Math.abs(h)>=ud&&(h=0,y=!0,f(i,`wheel`))}},{passive:!1});let b=0;addEventListener(`keydown`,e=>{if(e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||!d(e.target)||e.target?.closest?.(`input, textarea, select, [contenteditable="true"]`))return;let t=e.key,r=0;if(t===`ArrowDown`||t===`PageDown`?r=1:t===`ArrowUp`||t===`PageUp`?r=-1:t===` `&&!e.target?.closest?.(`button, a[href], summary, [role="button"]`)&&(r=e.shiftKey?-1:1),!r)return;let i=r;i>0&&m()||(e.preventDefault(),!e.repeat&&(p(i)?(b=0,f(i,`key`)):n.jump||(b=i)))},!0);let x=-1,S=0,C=0,w=0,T=!1;addEventListener(`touchstart`,e=>{if(e.touches.length!==1||!d(e.target)){x=-1;return}let t=e.touches[0];x=t.identifier,S=t.clientX,C=t.clientY,w=performance.now(),T=!1},{passive:!0}),addEventListener(`touchmove`,e=>{if(x<0)return;let t=[...e.touches].find(e=>e.identifier===x);if(!t)return;let n=t.clientY-C,r=t.clientX-S;!T&&Math.abs(n)>8&&Math.abs(n)>Math.abs(r)&&(T=!0),T&&e.cancelable&&e.preventDefault()},{passive:!1}),addEventListener(`touchend`,e=>{if(x<0)return;let t=[...e.changedTouches].find(e=>e.identifier===x);if(!t)return;x=-1;let n=t.clientY-C,r=t.clientX-S,i=Math.max(1,performance.now()-w);if(!(!T||Math.abs(n)<Math.abs(r))&&(Math.abs(n)>=md||Math.abs(n)>=hd&&Math.abs(n)/i>=gd)){let e=n<0?1:-1;if(e>0&&m())return;p(e)&&f(e,`touch`)}},{passive:!0}),addEventListener(`touchcancel`,()=>{x=-1},{passive:!0});let E=!1,D=-1,O=0;addEventListener(`pointerdown`,()=>{E=!0},!0),addEventListener(`pointerup`,()=>{E=!1},!0),addEventListener(`pointercancel`,()=>{E=!1},!0);function k(t){if(!a)return;if(b&&!n.locked&&!n.jump&&d(document.activeElement)){let e=b;b=0,f(e,`key`)}let i=e.progress();if(Math.abs(i-D)>1e-6&&(D=i,O=t),!o.magnet||s()||n.hop||n.jump||E||x>=0||t-O<pd||Math.abs(n.s-i)>.003||!c()||l())return;let u=qu(i);if(u.kind!==`leg`)return;let p=u.loc>=.5?u.i:u.i-1,m=e.setProgress(mu(p));n.startHop(m),r.push({t:performance.now(),via:`magnet`,dir:p>=u.i?1:-1,to:p})}return o}var yd=new URLSearchParams(location.search),bd=yd.get(`ready`)===`all`,xd=window;xd.__v3Gate=!bd;var Sd=Object.assign({"../audio/sfx.ts":()=>n(()=>import(`./sfx-DTJfjaTo.js`),__vite__mapDeps([0,1,2,3,4])),"../audio/sound.ts":()=>n(()=>import(`./sound-Z5EtZ-XE.js`).then(e=>e.i),__vite__mapDeps([4,1,2])),"../reels/index.ts":()=>n(()=>import(`./reels-CUkJekWC.js`).then(e=>e.r),__vite__mapDeps([5,1,2])),"../ui/case.ts":()=>n(()=>import(`./case-DM66aDU3.js`),__vite__mapDeps([6,1,2,7,8,9,10,11,12,13,14,15,16,17,18])),"./engine/field.ts":()=>n(()=>import(`./field-DfitI_oo.js`),__vite__mapDeps([19,20,21,22,23])),"./ui/ui.ts":()=>n(()=>import(`./ui-B-E2Xw1K.js`),__vite__mapDeps([24,1,2,4,8,10,11,12,25,5,15,16,17,26,13,14,27,28,29,30])),"./world/objects.ts":()=>n(()=>import(`./objects-X2fJwN0Z.js`),__vite__mapDeps([31,1,2,20,32,13,14,33,34,35,21,36,37,38,39,40]))}),Cd=()=>{let e=globalThis.scheduler;return typeof e?.yield==`function`?e.yield():new Promise(e=>setTimeout(e,0))};function wd(){if(!(`serviceWorker`in navigator)||location.protocol===`file:`||new URLSearchParams(location.search).has(`nosw`))return;let e=()=>navigator.serviceWorker.register(`/portfolio/sw.js`,{scope:`/portfolio/`}).then(()=>navigator.serviceWorker.ready).then(e=>{let t=performance.getEntriesByType(`resource`).map(e=>e.name).filter(e=>e.startsWith(location.origin));e.active?.postMessage({type:`seed`,urls:t})}).catch(()=>{}),t=window.requestIdleCallback;t?t(e,{timeout:4e3}):setTimeout(e,2e3)}var Td=!1,Ed=!1;function Dd(){if(!Ed){Ed=!0;for(let e of[`https://audio-ssl.itunes.apple.com`,`https://is1-ssl.mzstatic.com`]){let t=document.createElement(`link`);t.rel=`preconnect`,t.href=e,t.crossOrigin=`anonymous`,document.head.append(t)}}}function Od(){if(Td)return;Td=!0;let e=[`terrain/yosemite.json`,`terrain/yosemite-height.png`,`terrain/yosemite-shade.png`,`terrain/yosemite-color.jpg`,`models/crag.glb`];(async()=>{for(let t of e)try{await(await fetch(`/portfolio/`+t,{priority:`low`})).arrayBuffer()}catch{}})()}async function kd(e){if(!Sd[e])return null;try{return await Sd[e]()}catch(t){return console.warn(`[v4] module failed`,e,t),null}}document.documentElement.dataset.theme=`night`,r.reduced&&document.documentElement.classList.add(`reduced`);var Ad=new Set,jd=e=>bl[e]?e:(Ad.has(e)||(Ad.add(e),console.warn(`[v4] form "${e}" is not built yet: using the sphere`)),`sphere`),Md=[];for(let e of K){let t=jd(e.form);Md.includes(t)||Md.push(t)}var Nd=Md.map(e=>bl[e]).filter(Boolean),Pd=[],Fd=e=>a.find(t=>t.id===e)?.name??e;(async()=>{let[e,t,o,s,c,l,u]=await Promise.all([kd(`./engine/field.ts`),kd(`./ui/ui.ts`),kd(`./world/objects.ts`),kd(`../ui/case.ts`),kd(`../reels/index.ts`),kd(`../audio/sound.ts`),kd(`../audio/sfx.ts`)]),d=document.getElementById(`field`),f=u?.sfx??null,p=-1,m=0;if(f&&l?.sound){let e=l.sound;e.enable=()=>f.init(),e.disable=()=>f.setEnabled(!1),Object.defineProperty(e,"on",{get:()=>f.enabled,configurable:!0})}let h=()=>{p=-1},g=c?.REELS??[],_=c?.CASE_REELS??g,v=c?.caseIndexFor??(e=>_.findIndex(t=>t.projectId===e)),y=s?.initCase?s.initCase({reels:_,onStep:()=>{},onClose:()=>{f?.cue?.(`close`),E?.setPaused?.(r.paused)}}):null,b=null,x=(e,t,n)=>{let i=v(e);if(i<0||!y){console.warn(`[v4] no case view for`,e);let t=a.find(t=>t.id===e),n=t?.demo?.url??t?.links?.[0]?.url;n&&/^https?:/.test(n)?window.open(n,`_blank`,`noopener,noreferrer`):document.getElementById(`index`)?.scrollIntoView({behavior:r.reduced?`auto`:`smooth`});return}let o=n??b?.screenRect?.(e)??t?.getBoundingClientRect();f?f.cue(`open`):l?.sound?.thwoop?.(),y.open(i,o??void 0),E?.setPaused?.(!0)},S=document.documentElement,C=null;if(t?.initV4UI)try{C=t.initV4UI({waypoints:K,onOpen:(e,t)=>x(e,t),onEnter:e=>{e&&f?.init?.().then(h)}})}catch(e){console.warn(`[v4] initV4UI failed`,e)}let w=()=>0,T=document.getElementById(`loader`);if(!C){let e=document.getElementById(`track`);e&&(e.style.height=`${uu*100}vh`,e.setAttribute(`aria-label`,`Joseph Blumberg`));try{history.scrollRestoration=`manual`}catch{}window.scrollTo(0,0),w=()=>{let e=document.documentElement.scrollHeight-innerHeight;return e>0?Math.min(1,Math.max(0,scrollY/e)):0}}let E=null,D={};if(e?.createField&&d)try{E=e.createField(d,{forms:Nd,onProgress:e=>C?.setLoading?.(e),firstIds:K.slice(0,3).map(e=>jd(e.form)),adaptive:yd.get(`adaptive`)!==`0`,tier:yd.has(`tier`)?+yd.get(`tier`):void 0});for(let[e,t]of Object.entries(Object.assign({"./world/extras/annotate.ts":()=>n(()=>import(`./annotate-C8sROfjq.js`),__vite__mapDeps([41,20,15,16,26,1,2,13,14,42])),"./world/extras/astro.ts":()=>n(()=>import(`./astro-BNn4_XLX.js`),__vite__mapDeps([43,20,44])),"./world/extras/brainmode.ts":()=>n(()=>import(`./brainmode-CngLOfjV.js`),__vite__mapDeps([45,20,32,46,37,21,36,35,1,2,38,39])),"./world/extras/cabinet.ts":()=>n(()=>import(`./cabinet-C9e4WnOv.js`),__vite__mapDeps([47,1,2,20,46,37,21,36,35,38,39,48,49,50,51,40,52,23])),"./world/extras/contact.ts":()=>n(()=>import(`./contact-BvpRh05E.js`),__vite__mapDeps([53,20,22,23])),"./world/extras/env.ts":()=>n(()=>import(`./env-Be7kQnbl.js`),__vite__mapDeps([48,20,21])),"./world/extras/finale.ts":()=>n(()=>import(`./finale-D5_KJ_ij.js`),__vite__mapDeps([54,20,8,10,11,12,25,26,1,2,13,14,27,5,28,29,55])),"./world/extras/glyphs.ts":()=>n(()=>import(`./glyphs-BDo5kuD9.js`),__vite__mapDeps([56,20,44,40,51,57])),"./world/extras/hall.ts":()=>n(()=>import(`./hall-B01zVz3u.js`),__vite__mapDeps([58,20,51,40,49,1,2,50,39,59,14,60])),"./world/extras/haze.ts":()=>n(()=>import(`./haze-WloDHJru.js`),__vite__mapDeps([61,20,44])),"./world/extras/hero3d.ts":()=>n(()=>import(`./hero3d-B4kQo6hR.js`),__vite__mapDeps([62,20,39,37,21,36,35,1,2,38,48,63])),"./world/extras/mirror.ts":()=>n(()=>import(`./mirror-BSEKO-LB.js`),__vite__mapDeps([64,20,40,51])),"./world/extras/pdyn.ts":()=>n(()=>import(`./pdyn-61_On4FI.js`),[]),"./world/extras/pov.ts":()=>n(()=>import(`./pov-BtxQoFNr.js`),[]),"./world/extras/reactive.ts":()=>n(()=>import(`./reactive-CdX4L7Wf.js`),__vite__mapDeps([65,20,11,44,66])),"./world/extras/rings.ts":()=>n(()=>import(`./rings-CTBfxknd.js`),__vite__mapDeps([67,1,2,20,44,40,51,57])),"./world/extras/spaces.ts":()=>n(()=>import(`./spaces-Dwzhkb5O.js`),__vite__mapDeps([68,1,2,20,48,21,49,50,39,51,40,52,23,69])),"./world/extras/stages.ts":()=>n(()=>import(`./stages-Dz80f0Lx.js`),__vite__mapDeps([70,20,13,1,2,14,50,28,46,37,21,36,35,38,39,48])),"./world/extras/transitions.ts":()=>n(()=>import(`./transitions-CZAYDTz1.js`),__vite__mapDeps([59,1,2,20,14,51,40,49,50,39])),"./world/extras/vibe.ts":()=>n(()=>import(`./vibe-5Q9E-Vhx.js`),__vite__mapDeps([71,20,11,72,73,66,74,52,39,23]))})))D[e]=Promise.resolve().then(t).catch(t=>(console.warn(`[v4] extra failed to load`,e,t),null));await(bd?E.ready:E.readyFirst)}catch(e){console.warn(`[v4] field failed`,e)}if(E&&o?.createWorld){let e=-1e9,t={"hub:poweron":`poweron`,"hub:poweroff":`poweroff`,"hub:channel":`channel`,"tv:on":`wake`,"tv:hover":`hover`};try{b=o.createWorld(E,{reels:g,interactive:!0,blocked:()=>!!y?.isOpen?.(),onOpen:(e,t)=>x(e,null,t),onEvent:(n,r)=>{for(let e of Pd)e(n,r);if(!f)return;let i=t[n];if(!i)f.cue(n,r);else{if(n===`tv:on`){let t=performance.now();if(t-e<3500)return;e=t}f.cue(i)}}})}catch(e){console.warn(`[v4] world failed`,e)}}let O=[],k=1/0,A=E?.setFieldAlpha?E.setFieldAlpha.bind(E):null;E&&A&&(E.setFieldAlpha=e=>{isFinite(e)&&(k=Math.min(k,e))});let j=()=>{A&&k!==1/0&&(A(k),k=1/0)};if(E){let e={field:E,world:b,ui:C,sfx:f,canvas:d,state:()=>I,openWork:x,emit:(e,t)=>{for(let n of Pd)n(e,t);f?.cue?.(e,t)},on:e=>(Pd.push(e),()=>{let t=Pd.indexOf(e);t>=0&&Pd.splice(t,1)})},t=Object.entries(D),n=window.__extraMs={};for(let[r,i]of t){try{let t=await i,a=performance.now(),o=t?.install?.(e);o&&O.push(o),n[r.slice(r.lastIndexOf(`/`)+1)]=+(performance.now()-a).toFixed(1)}catch(e){console.warn(`[v4] extra failed`,r,e)}await Cd()}}C?.ready?.(),xd.__v3Ready=!0,window.dispatchEvent(new Event(`v3:ready`)),wd(),!C&&T&&(T.style.transition=`opacity .6s`,T.style.opacity=`0`,setTimeout(()=>T.remove(),700)),i.on(`pause`,({paused:e})=>E?.setPaused?.(e)),f&&i.on(`sound`,({on:e})=>{e===f.enabled?e&&h():f.setEnabled(e)});let M=document.createElement(`style`);M.textContent=[`#field { cursor: grab }`,`html.tv-hover, html.tv-hover body, html.tv-hover main, html.tv-hover #field { cursor: pointer }`,`html.tv-grab #field { cursor: grab }`,`html.tv-drag, html.tv-drag body, html.tv-drag #field, html.pov-drag, html.pov-drag body, html.pov-drag #field { cursor: grabbing }`,`html.in-index #field, html.is-loading #field { cursor: default }`,`html.tv-drag, html.pov-drag { user-select: none; -webkit-user-select: none }`].join(`
`),document.head.append(M);let N=new ld,P=null,F=-1,I=Vu(0),L=performance.now(),R=0,z=[0,0,0],B=!1,ee=1,V=0,te=!0,ne=()=>r.reduced||S.classList.contains(`rm`),re=document.getElementById(`track`),ie=()=>Math.max(1,(re?.offsetHeight??0)-(parseFloat(S.style.getPropertyValue(`--vh`))||innerHeight)),ae=C?.progress&&re?vd({follower:N,count:K.length,progress:()=>C.progress(),range:ie,setProgress:e=>(scrollTo({top:e*ie(),behavior:`instant`}),C.progress()),reduced:ne,forced:()=>P!=null,blocked:()=>!!y?.isOpen?.()}):null,H=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},oe=e=>e.dwelling?e.wp:e.wp+e.t,se=.115,ce=.3,le=e=>e.mix>.5?{id:jd(e.b),pl:e.placeB}:{id:jd(e.a),pl:e.placeA},ue=null,de=null,fe=null,pe=`hub`,me=!1,U=!1,he=0,ge=e=>{if(requestAnimationFrame(ge),!E)return;let t=Math.max(.001,(e-L)/1e3),n=Math.min(.1,t);L=e,ae?.frame(e);let r=P??(C?.progress?C.progress():w());ne()&&(r=mu(vu(r))),te&&=(N.snap(r),!1);let i=P!=null||ne()?(N.snap(r),r):N.update(r,n,t);Math.abs(i-V)>1e-7&&(ee=i>V?1:-1),V=i;let a=Vu(i);I=a,!Td&&a.wp>=12&&Od(),!Ed&&a.wp>=20&&Dd();let o=N.jump,s=P!=null&&F>=0?(P-F)/t:0;F=P??-1;let c=e=>Math.abs(s)>1e-6&&Math.abs(s)<.3?Vu(Math.min(1,Math.max(0,i+s*e))):a,l=P!=null&&!ne()?c(se):a;if(P==null&&!ne()&&Math.abs(N.v)>1e-6){let e=N.predict(r,se);Math.abs(e-i)>1e-7&&(l=Vu(e))}let u=P!=null&&!ne()?c(ce):a;if(P==null&&!ne()&&!o&&Math.abs(N.v)>1e-6){let e=N.predict(r,ce);Math.abs(e-i)>1e-7&&(u=Vu(e))}let d=jd(u.a),h=jd(u.b),g=u.mix,_=u.placeA,v=u.placeB;if(o){if(ue!==o){let e=ue&&de&&fe?he>.5?fe:de:le(Vu(o.p0));if(ue=o,de=e,fe=le(Vu(o.g)),pe=Vu(o.g).area,me=o.g<o.p0,U=!1,p=-1,f){let e=Math.abs(Vu(o.g).wp-Vu(o.p0).wp);f.cue(me?`whoosh.rev`:`whoosh`,{intensity:Math.min(1,.45+.06*e)})}}let e=N.jumpProgress;d=de.id,_=de.pl,h=fe.id,v=fe.pl,g=he=H(.28,.92,e),!U&&e>=.6&&(U=!0,f?.cue(`morph.${pe}${me?`.rev`:``}`))}else ue&&=de=fe=null;let y=l.cam;for(let e of O)e.adjustCam&&(y=e.adjustCam(y,n,a)??y);E.setWorld({a:d,b:h,mix:g,placeA:_,placeB:v,cam:y}),E.setTurbulence?.(.9+.7*a.speed);let x=E.camera.position;B&&(R+=(Math.min(1,Math.hypot(x.x-z[0],x.y-z[1],x.z-z[2])/n/30)-R)*(1-Math.exp(-n/.12))),z=[x.x,x.y,x.z],B=!0;let S=E.post;if(S?.setGrade&&(o?S.setGrade(Vu(o.p0).area,pe,N.jumpProgress):S.setGrade(K[a.wp].area,K[a.next]?.area??K[a.wp].area,a.dwelling?0:a.t),S.setSubject(Math.hypot(a.cam.pos[0]-a.cam.target[0],a.cam.pos[1]-a.cam.target[1],a.cam.pos[2]-a.cam.target[2]),a.dwelling&&!o,Math.min(.5,t),a.wp)),C?.setCamera?.([x.x,x.y,x.z],a.cam.target),C?.setFlight?.({...a,form:a.t<.5?a.a:a.b,speed:R}),f){if(o){let t=N.jumpProgress,n=oe(Vu(o.p0)),r=oe(Vu(o.g));f.setFlight({speed:ee*R,area:pe,mix:Math.abs(2*t-1),wp:n+(r-n)*t,t:e/1e3,quiet:!0})}else if(f.setFlight({speed:ee*R,area:a.area,mix:a.dwelling?1:Math.abs(2*a.t-1),wp:oe(a),t:e/1e3}),a.dwelling&&a.wp!==p){p=a.wp;let t=K[a.wp].sound??`sig.${K[a.wp].id}`;t&&(!b||t!==`poweroff`&&t!==`poweron`)&&e-m>600&&(f.cue(t),m=e)}else a.dwelling||(p=-1)}if(C?.setAnchors){let e=[];if(a.dwelling&&!o&&b?.screenRect)for(let t of a.tvsA){let n=b.screenRect(t);n&&n.width>4&&n.right>0&&n.left<innerWidth&&n.bottom>0&&n.top<innerHeight&&e.push({id:t,label:Fd(t),x:n.left+n.width/2,y:n.bottom+14,visible:!0})}C.setAnchors(e)}};requestAnimationFrame(ge),E?.onBeforeRender?.((e,t)=>{b&&b.update({...I,wp:I.dwelling?I.wp:I.wp+I.t,speed:R*30},e,t);for(let n of O)n.update?.(e,t,I);j()}),window.__v3={field:E,ui:C,world:b,sfx:f,flightAt:Vu,openWork:x,caseView:y,follower:N,stepper:ae,forms:Md,state:()=>I,goto:e=>{P=e,e!=null&&N.snap(e)}}})();export{K as A,ps as C,hr as D,pr as E,A as F,mr as M,gr as N,rr as O,j as P,us as S,ar as T,wl as _,mu as a,Ac as b,jl as c,Dl as d,Ml as f,Il as g,Al as h,bu as i,or as j,vr as k,El as l,Nl as m,Ll as n,Pl as o,Ol as p,gu as r,kl as s,Vu as t,Fl as u,Nc as v,ds as w,Pc as x,Mc as y};