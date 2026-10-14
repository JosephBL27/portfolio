import{Dr as e,Er as t,Gn as n,Jn as r,K as i,Rn as a,Tt as o,_ as s,c,d as l,en as u,ht as d,k as f,lr as p,mt as m,nr as ee,u as h}from"./three.core-CUlgq_p4.js";import{j as te}from"./main-BNUvMtJi.js";var g=140,ne=108,re=[1,.5,.26],ie=[.36,.43,.74],ae=()=>new Promise(e=>setTimeout(e,0));async function _(e){let t=await fetch(e);if(!t.ok)throw Error(`${e}: HTTP ${t.status}`);return createImageBitmap(await t.blob(),{colorSpaceConversion:`none`,premultiplyAlpha:`none`})}var oe=`
varying vec3 vP; varying vec2 vUv;
void main() { vP = position; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,se=e=>`
precision highp float;
varying vec3 vP; varying vec2 vUv;
uniform sampler2D tColor, tNormal, tShade, tNoise;
uniform vec3 uCam, uSunDir, uSunCol, uAmb;
uniform vec2 uAnti, uSizeM;
uniform float uPres, uTime, uUnit, uSunI, uFarFade, uMistY, uDebug, uScale, uHRef;
${e}
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
// value noise from ONE texture fetch (two z layers packed in R and G, the second shifted by (37, 17)): the hash-and-lerp version cost a third of the frame
float vn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return texture2D(tNoise, (i + f + 0.5) / 256.0).r; }
float fbm3(vec2 p) { float a = 0.5, s = 0.0; mat2 m = mat2(1.6, 1.2, -1.2, 1.6); for (int i = 0; i < 3; i++) { s += a * vn(p); p = m * p; a *= 0.5; } return s; }
float n3(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); vec2 rg = texture2D(tNoise, (i.xy + vec2(37.0, 17.0) * i.z + f.xy + 0.5) / 256.0).rg; return mix(rg.x, rg.y, f.z); }
vec3 toDisplay(vec3 c) { return mix(c * 12.92, 1.055 * pow(max(c, 0.0), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
// granite relief the 19 m height field cannot carry: blocky ridged noise, sharper on steep ground, gone with distance (a 5 m crack is sub-pixel past a few km)
float rockH(vec3 p, float amp2) { float l = 1.0 - abs(2.0 * n3(p * 2.3 + 1.3) - 1.0), a = 1.0 - abs(2.0 * n3(p * 6.0) - 1.0), b = 1.0 - abs(2.0 * n3(p * 17.0 + 3.7) - 1.0), c = n3(p * 44.0 + 9.1); return l * 0.8 + a * 0.5 + b * 0.28 * amp2 + c * 0.14 * amp2; }
void main() {
  vec3 rdv = vP - uCam; float dist = length(rdv); vec3 rd = rdv / dist;
  vec3 N = normalize(texture2D(tNormal, vUv).xyz * 2.0 - 1.0);
  vec2 sh = texture2D(tShade, vUv).rg;
  vec3 alb = texture2D(tColor, vUv).rgb;                                                // linear (sRGB texture)
  float slope = 1.0 - N.y;                                                               // 0 flat .. 1 vertical
  float hm = vP.y * uScale + uHRef;                                                      // metres above sea level
  float high = smoothstep(1750.0, 2150.0, hm);                                           // above the tree line's thick part the slopes are bare granite
  float cliff = max(smoothstep(0.24, 0.58, slope), high * smoothstep(0.05, 0.22, slope) * 0.85);
  // relief: a normal perturbation from a 3D rock field, on the steeper ground, fading with distance
  float dF = 1.0 - smoothstep(22.0, 80.0, dist);
  float amp2 = 1.0 - smoothstep(10.0, 40.0, dist);
  if (dF > 0.01) {
    float e = 0.014, r0 = rockH(vP, amp2);
    vec3 g = vec3(rockH(vP + vec3(e, 0.0, 0.0), amp2) - r0, rockH(vP + vec3(0.0, e, 0.0), amp2) - r0, rockH(vP + vec3(0.0, 0.0, e), amp2) - r0) / e;
    N = normalize(N - (0.03 + 0.07 * cliff) * dF * (g - dot(g, N) * N));
  }
  // albedo: the orthophoto is a view from above, so on a cliff it is stretched and shows only the tree line. Cliffs become granite (lit grey, the photo only
  // modulating it: ledges and trees stay dark), forest stays the photo; desaturated a quarter and darkened for dusk
  float lum = dot(alb, vec3(0.2126, 0.7152, 0.0722));
  vec3 forest = mix(vec3(lum), alb, 0.75) * 1.25;
  float up = n3(vec3(vP.x * 3.0 + vP.z * 3.0, vP.y * 0.5, 0.0)) ;                       // slow warm/cool drift
  vec3 granite = mix(vec3(0.30, 0.29, 0.285), vec3(0.34, 0.31, 0.275), up) * (0.55 + 1.1 * smoothstep(0.015, 0.22, lum));
  vec2 face = vec2(dot(vP.xz, vec2(N.z, -N.x)) * 70.0, vP.y * 9.0);                      // along the face x up it: vertical water streaks
  float streak = smoothstep(0.58, 0.82, fbm3(face) * 1.25) * cliff;
  granite *= 1.0 - 0.38 * streak;
  alb = mix(forest, granite, cliff);
  // canopy grain up close: the photo is 6 m a pixel, a tree is not
  float near = (1.0 - smoothstep(0.0, 34.0, dist)) * (1.0 - cliff);
  vec2 q = vP.xz * 12.0 / uUnit;
  float g2 = fbm3(q) * 0.65 + vn(q * 3.1) * 0.35;
  alb *= 1.0 + (g2 - 0.5) * 0.9 * near;
  float mid = (1.0 - smoothstep(30.0, 100.0, dist));                                     // stands of trees and bare patches: the photo alone is soft at this range
  alb *= 1.0 + (fbm3(vP.xz * 3.4 + 5.0) - 0.5) * 0.9 * mid * (1.0 - 0.7 * cliff);
  // light: the sun (low, behind and to the right), baked shadow, then the sky
  float ndl = max(dot(N, uSunDir), 0.0);
  float vis = sh.r;
  vec3 direct = uSunCol * uSunI * ndl * vis;
  float ao = sh.g * sh.g;
  // sky light: blue from above, and the bright sunset sky in the west lights every face that looks at it (the shadowed side of a ridge is rose, not black)
  vec2 sunH = normalize(uSunDir.xz);
  float westFace = max(dot(N.xz, sunH), 0.0) * (1.0 - 0.6 * N.y);
  vec3 amb = (uAmb * (0.55 + 0.45 * (N.y * 0.5 + 0.5)) + vec3(0.62, 0.34, 0.30) * 0.5 * westFace) * ao;
  vec3 col = alb * (direct + amb);
  if (uDebug > 0.5) { gl_FragColor = vec4(uDebug < 1.5 ? vec3(1.0, 0.0, 1.0) : uDebug < 2.5 ? vec3(ndl) : uDebug < 3.5 ? vec3(vis) : uDebug < 4.5 ? vec3(ao) : N * 0.5 + 0.5, 1.0); return; }
  col = toDisplay(col);
  // thin valley mist, lying low and drifting
  float mistN = fbm3(vP.xz * 0.045 + vec2(uTime * 0.012, -uTime * 0.007));
  float mist = (1.0 - smoothstep(uMistY, uMistY + 1.7, vP.y)) * (0.30 + 0.55 * mistN);
  vec3 skyH = skyCol(normalize(vec3(rd.x, max(rd.y, 0.012), rd.z)), uAnti);
  col = mix(col, skyH * 1.15 + vec3(0.02, 0.02, 0.035), mist * (0.25 + 0.75 * smoothstep(6.0, 40.0, dist)));
  // atmospheric perspective toward the sky colour of the same ray; low ground sits in thicker air
  float k = pow(dist / 150.0, 1.35) * (1.12 - 0.34 * smoothstep(-1.2, 7.0, vP.y));
  float fogF = 1.0 - exp(-k);
  vec3 hz = skyH;
  // warm forward scatter near the horizon: lit haze takes the sun's colour
  hz += vec3(1.0, 0.52, 0.28) * 0.13 * fogF * (1.0 - fogF) * (0.35 + 0.65 * vis) * (1.0 - smoothstep(0.0, 0.5, rd.y));
  // no hard mesh edge: the border and everything past the far fade is pure sky
  vec2 e = min(vUv, 1.0 - vUv) * uSizeM;
  float edge = min(e.x, e.y);
  float border = 1.0 - smoothstep(0.0, 2200.0, edge);
  float farF = smoothstep(uFarFade - 26.0, uFarFade, dist);
  float f = max(max(fogF, border), farF);
  col = mix(col, hz, clamp(f, 0.0, 1.0));
  // dither: the shade maps are 6-bit
  col += (h21(gl_FragCoord.xy) - 0.5) / 255.0;
  gl_FragColor = vec4(col * uPres, 1.0);
}`;async function v(g,v){let ce=performance.now(),le=0,y=performance.now(),ue=()=>{let e=performance.now();le=Math.max(le,e-y),y=e},b=async()=>{ue(),await ae(),y=performance.now()},x=`/portfolio/terrain/`,de=g.renderer.capabilities.maxTextureSize,S=await(await fetch(`${x}yosemite.json`)).json();if(de<Math.max(S.grid.color[0],S.grid.height[0]))throw Error(`max texture size ${de} is below the terrain's ${S.grid.color[0]}`);let[C,fe,pe]=await Promise.all([_(`${x}yosemite-height.png`),_(`${x}yosemite-color.jpg`),_(`${x}yosemite-shade.png`)]),me=performance.now()-ce;y=performance.now();let[w,T]=S.grid.height;if(C.width!==w||C.height!==T)throw Error(`terrain height size mismatch`);let he=new OffscreenCanvas(w,T).getContext(`2d`,{willReadFrequently:!0});he.drawImage(C,0,0);let ge=he.getImageData(0,0,w,T).data,E=new Float32Array(w*T);for(let e=0;e<w*T;e++)E[e]=ge[e*4]*256+ge[e*4+1]+ge[e*4+2]/256-32768;C.close(),await b();let D=v.metresPerUnit??140,{bounds:O}=S,k=(O.lat0+O.lat1)/2,A=Math.PI/180,_e=111132.954-559.822*Math.cos(2*k*A)+1.175*Math.cos(4*k*A),ve=111412.84*Math.cos(k*A)-93.5*Math.cos(3*k*A)+.118*Math.cos(5*k*A),j=te.find(e=>e.id===g.def.id),ye=j.cam.pos[0]-g.def.at[0],be=j.cam.pos[2]-g.def.at[2],xe=Math.cos(g.def.yaw),Se=Math.sin(g.def.yaw),M=new e(ye*xe-be*Se,j.cam.pos[1]-g.def.at[1],ye*Se+be*xe),Ce=S.view.bearingDeg*A,N=Math.cos(Ce),P=Math.sin(Ce),we=(S.view.lon-O.lon0)*ve,Te=(S.view.lat-O.lat0)*_e,F=1207+.85*D,Ee=(e,t,n,r)=>{let i=e-we,a=t-Te;return r.set((i*N-a*P)/D+M.x,(n-F)/D,M.z-(i*P+a*N)/D)},I=g.phone?2:1,L=Math.floor((w-1)/I),R=Math.floor((T-1)/I),z=L+1,B=R+1,V=new Float32Array(z*B*3),De=new Float32Array(z*B*2),H=new Float32Array(z*B),U=new Uint8Array(z*B),Oe=S.size_m.east/w,ke=S.size_m.north/T,W=1/D,Ae=M.x,je=M.y,G=M.z,Me=Math.cos(78*Math.PI/180);for(let e=0;e<B;e++){let t=Math.min(T-1,e*I),n=(t+.5)/T,r=(T-t-.5)*ke-Te;for(let i=0;i<z;i++){let a=Math.min(w-1,i*I),o=e*z+i,s=(a+.5)*Oe-we,c=(s*N-r*P)*W+Ae,l=(E[t*w+a]-F)*W,u=G-(s*P+r*N)*W,d=Math.hypot(c,u);if(d<8.5){let e=Math.min(1,Math.max(0,(d-5)/3.5)),t=e*e*(3-2*e);l=Math.min(l,-.4)*(1-t)+l*t}V[o*3]=c,V[o*3+1]=l,V[o*3+2]=u,De[o*2]=(a+.5)/w,De[o*2+1]=n;let f=Math.hypot(c-Ae,l-je,u-G);H[o]=f,U[o]=+(G-u>f*Me||f<22)}e%48==47&&await b()}let K=new Uint32Array(L*R*6),q=0,J=0;for(let e=0;e<R;e++){for(let t=0;t<L;t++){let n=e*z+t,r=n+1,i=n+z,a=i+1;if(!(U[n]|U[r]|U[i]|U[a])||Math.min(H[n],H[r],H[i],H[a])>ne)continue;K[q++]=n,K[q++]=i,K[q++]=r,K[q++]=r,K[q++]=i,K[q++]=a;let o=Math.max(H[n],H[r],H[i],H[a]);o>J&&(J=o)}e%96==95&&await b()}let Y=new l;Y.setAttribute(`position`,new h(V,3)),Y.setAttribute(`uv`,new h(De,2)),Y.setIndex(new h(K.subarray(0,q),1)),Y.boundingSphere=new ee(new e(M.x,0,M.z-60),190),Y.boundingBox=new c(new e(-200,-20,-200),new e(200,40,100));let Ne={};for(let[t,n,r]of[[`Half Dome`,37.7459,-119.5332],[`El Capitan`,37.734,-119.6377],[`Sentinel Dome`,37.7228,-119.5855],[`Cathedral Rocks`,37.7128,-119.6255]]){let i=Math.round((r-O.lon0)/(O.lon1-O.lon0)*w-.5),a=Math.round((O.lat1-n)/(O.lat1-O.lat0)*T-.5),o=-1e9;for(let e=a-6;e<=a+6;e++)for(let t=i-6;t<=i+6;t++)o=Math.max(o,E[e*w+t]);let s=Ee((r-O.lon0)*ve,(n-O.lat0)*_e,o,new e);Ne[t]=[s.x,s.y,s.z]}await b();let Pe=S.size_m.east/w,Fe=S.size_m.north/T,X=E,Z=new Uint8Array(w*T*4);for(let e=0;e<T;e++){e%100==99&&await b();for(let t=0;t<w;t++){let n=Math.max(0,t-1),r=Math.min(w-1,t+1),i=Math.max(0,e-1),a=Math.min(T-1,e+1),o=(X[e*w+r]-X[e*w+n])/((r-n)*Pe),s=-(X[a*w+t]-X[i*w+t])/((a-i)*Fe),c=-o,l=-s,u=1/Math.hypot(c,1,l),d=(c*N-l*P)*u,f=u,p=-(c*P+l*N)*u,m=(e*w+t)*4;Z[m]=Math.round((d*.5+.5)*255),Z[m+1]=Math.round((f*.5+.5)*255),Z[m+2]=Math.round((p*.5+.5)*255),Z[m+3]=255}}let Ie=Math.min(8,g.renderer.capabilities.getMaxAnisotropy()),Le=(e,t)=>(e.colorSpace=t?n:``,e.flipY=!1,e.generateMipmaps=!0,e.minFilter=d,e.magFilter=m,e.wrapS=e.wrapT=s,e.anisotropy=Ie,e.needsUpdate=!0,e),Re=Le(new p(fe),!0),ze=Le(new p(pe),!1),Q=Le(new f(Z,w,T,u),!1),Be=(()=>{let e=new Uint8Array(65536),t=2654435769;for(let n=0;n<e.length;n++)t=Math.imul(t,1664525)+1013904223>>>0,e[n]=t>>>24;let n=new Uint8Array(262144);for(let t=0;t<256;t++)for(let r=0;r<256;r++){let i=(t*256+r)*4;n[i]=e[t*256+r],n[i+1]=e[(t+17&255)*256+(r+37&255)],n[i+3]=255}let r=new f(n,256,256,u);return r.wrapS=r.wrapT=a,r.magFilter=r.minFilter=m,r.generateMipmaps=!1,r.needsUpdate=!0,r})();for(let e of[Re,Q,ze,Be])g.renderer.initTexture(e),await b();let Ve=(()=>{let[t,n,r]=S.sun.dirENU;return new e(t*N-n*P,r,-(t*P+n*N)).normalize()})(),He=new t(-Ve.x,-Ve.z).normalize(),Ue={tColor:{value:Re},tNormal:{value:Q},tShade:{value:ze},tNoise:{value:Be},uCam:{value:M.clone()},uSunDir:{value:Ve},uSunCol:{value:new e(...v.sunCol??re)},uAmb:{value:new e(...ie)},uAnti:{value:He},uSizeM:{value:new t(S.size_m.east,S.size_m.north)},uPres:g.fog.pres,uTime:g.fog.time,uUnit:{value:D/140},uSunI:{value:3.2},uFarFade:{value:104},uMistY:{value:-.35},uDebug:{value:0},uScale:{value:D},uHRef:{value:F}},We=new r({uniforms:Ue,vertexShader:oe,fragmentShader:se(v.skyGlsl),depthWrite:!0,depthTest:!0,side:0}),$=new o(Y,We);$.name=`terrain`,$.frustumCulled=!1,$.renderOrder=-8,$.userData.noReflect=!0;let Ge=new i;return Ge.name=`terrain-group`,Ge.add($),ue(),{group:Ge,mesh:$,update(e,t,n){Ue.uCam.value.copy(t)},info:{ms:performance.now()-ce,maxTaskMs:le,tris:q/3,verts:z*B,metresPerUnit:D,farthest:J,fetchMs:me,segs:[L,R],t0:ce,t1:performance.now(),landmarks:Ne},dispose(){Y.dispose(),We.dispose(),Re.dispose(),Q.dispose(),ze.dispose(),Be.dispose()}}}export{g as METRES_PER_UNIT,v as loadTerrain};