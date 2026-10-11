import{B as e,Hn as t,Jt as n,Mn as r,T as i,Yn as a,a as o,br as s,c,ct as l,lt as u,m as d,nr as f,s as p,yr as m,yt as ee,zn as te}from"./three.core-rbApIkjy.js";import{A as ne}from"./main-BfTGMAJq.js";var h=140,re=108,ie=[1,.5,.26],ae=[.36,.43,.74],oe=()=>new Promise(e=>setTimeout(e,0));async function se(e){let t=await fetch(e);if(!t.ok)throw Error(`${e}: HTTP ${t.status}`);return createImageBitmap(await t.blob(),{colorSpaceConversion:`none`,premultiplyAlpha:`none`})}var ce=`
varying vec3 vP; varying vec2 vUv;
void main() { vP = position; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,le=e=>`
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
}`;async function g(h,g){let _=performance.now(),v=0,y=performance.now(),ue=()=>{let e=performance.now();v=Math.max(v,e-y),y=e},b=async()=>{ue(),await oe(),y=performance.now()},x=`/portfolio/terrain/`,de=h.renderer.capabilities.maxTextureSize,S=await(await fetch(`${x}yosemite.json`)).json();if(de<Math.max(S.grid.color[0],S.grid.height[0]))throw Error(`max texture size ${de} is below the terrain's ${S.grid.color[0]}`);let[C,fe,pe]=await Promise.all([se(`${x}yosemite-height.png`),se(`${x}yosemite-color.jpg`),se(`${x}yosemite-shade.png`)]),me=performance.now()-_;y=performance.now();let[w,T]=S.grid.height;if(C.width!==w||C.height!==T)throw Error(`terrain height size mismatch`);let he=new OffscreenCanvas(w,T).getContext(`2d`,{willReadFrequently:!0});he.drawImage(C,0,0);let E=he.getImageData(0,0,w,T).data,D=new Float32Array(w*T);for(let e=0;e<w*T;e++)D[e]=E[e*4]*256+E[e*4+1]+E[e*4+2]/256-32768;C.close(),await b();let O=g.metresPerUnit??140,{bounds:k}=S,A=(k.lat0+k.lat1)/2,j=Math.PI/180,ge=111132.954-559.822*Math.cos(2*A*j)+1.175*Math.cos(4*A*j),_e=111412.84*Math.cos(A*j)-93.5*Math.cos(3*A*j)+.118*Math.cos(5*A*j),M=ne.find(e=>e.id===h.def.id),ve=M.cam.pos[0]-h.def.at[0],ye=M.cam.pos[2]-h.def.at[2],be=Math.cos(h.def.yaw),xe=Math.sin(h.def.yaw),N=new s(ve*be-ye*xe,M.cam.pos[1]-h.def.at[1],ve*xe+ye*be),Se=S.view.bearingDeg*j,P=Math.cos(Se),F=Math.sin(Se),Ce=(S.view.lon-k.lon0)*_e,we=(S.view.lat-k.lat0)*ge,I=1207+.85*O,Te=(e,t,n,r)=>{let i=e-Ce,a=t-we;return r.set((i*P-a*F)/O+N.x,(n-I)/O,N.z-(i*F+a*P)/O)},L=h.phone?2:1,R=Math.floor((w-1)/L),z=Math.floor((T-1)/L),B=R+1,V=z+1,H=new Float32Array(B*V*3),U=new Float32Array(B*V*2),W=new Float32Array(B*V),G=new Uint8Array(B*V),Ee=S.size_m.east/w,De=S.size_m.north/T,Oe=1/O,ke=N.x,Ae=N.y,K=N.z,je=Math.cos(78*Math.PI/180);for(let e=0;e<V;e++){let t=Math.min(T-1,e*L),n=(t+.5)/T,r=(T-t-.5)*De-we;for(let i=0;i<B;i++){let a=Math.min(w-1,i*L),o=e*B+i,s=(a+.5)*Ee-Ce,c=(s*P-r*F)*Oe+ke,l=(D[t*w+a]-I)*Oe,u=K-(s*F+r*P)*Oe,d=Math.hypot(c,u);if(d<8.5){let e=Math.min(1,Math.max(0,(d-5)/3.5)),t=e*e*(3-2*e);l=Math.min(l,-.4)*(1-t)+l*t}H[o*3]=c,H[o*3+1]=l,H[o*3+2]=u,U[o*2]=(a+.5)/w,U[o*2+1]=n;let f=Math.hypot(c-ke,l-Ae,u-K);W[o]=f,G[o]=+(K-u>f*je||f<22)}e%48==47&&await b()}let q=new Uint32Array(R*z*6),J=0,Y=0;for(let e=0;e<z;e++){for(let t=0;t<R;t++){let n=e*B+t,r=n+1,i=n+B,a=i+1;if(!(G[n]|G[r]|G[i]|G[a])||Math.min(W[n],W[r],W[i],W[a])>re)continue;q[J++]=n,q[J++]=i,q[J++]=r,q[J++]=r,q[J++]=i,q[J++]=a;let o=Math.max(W[n],W[r],W[i],W[a]);o>Y&&(Y=o)}e%96==95&&await b()}let X=new c;X.setAttribute(`position`,new p(H,3)),X.setAttribute(`uv`,new p(U,2)),X.setIndex(new p(q.subarray(0,J),1)),X.boundingSphere=new a(new s(N.x,0,N.z-60),190),X.boundingBox=new o(new s(-200,-20,-200),new s(200,40,100));let Me={};for(let[e,t,n]of[[`Half Dome`,37.7459,-119.5332],[`El Capitan`,37.734,-119.6377],[`Sentinel Dome`,37.7228,-119.5855],[`Cathedral Rocks`,37.7128,-119.6255]]){let r=Math.round((n-k.lon0)/(k.lon1-k.lon0)*w-.5),i=Math.round((k.lat1-t)/(k.lat1-k.lat0)*T-.5),a=-1e9;for(let e=i-6;e<=i+6;e++)for(let t=r-6;t<=r+6;t++)a=Math.max(a,D[e*w+t]);let o=Te((n-k.lon0)*_e,(t-k.lat0)*ge,a,new s);Me[e]=[o.x,o.y,o.z]}await b();let Ne=S.size_m.east/w,Pe=S.size_m.north/T,Z=D,Q=new Uint8Array(w*T*4);for(let e=0;e<T;e++){e%100==99&&await b();for(let t=0;t<w;t++){let n=Math.max(0,t-1),r=Math.min(w-1,t+1),i=Math.max(0,e-1),a=Math.min(T-1,e+1),o=(Z[e*w+r]-Z[e*w+n])/((r-n)*Ne),s=-(Z[a*w+t]-Z[i*w+t])/((a-i)*Pe),c=-o,l=-s,u=1/Math.hypot(c,1,l),d=(c*P-l*F)*u,f=u,p=-(c*F+l*P)*u,m=(e*w+t)*4;Q[m]=Math.round((d*.5+.5)*255),Q[m+1]=Math.round((f*.5+.5)*255),Q[m+2]=Math.round((p*.5+.5)*255),Q[m+3]=255}}let Fe=Math.min(8,h.renderer.capabilities.getMaxAnisotropy()),Ie=(e,t)=>(e.colorSpace=t?te:``,e.flipY=!1,e.generateMipmaps=!0,e.minFilter=u,e.magFilter=l,e.wrapS=e.wrapT=d,e.anisotropy=Fe,e.needsUpdate=!0,e),Le=Ie(new f(fe),!0),Re=Ie(new f(pe),!1),ze=Ie(new i(Q,w,T,n),!1),Be=(()=>{let e=new Uint8Array(65536),t=2654435769;for(let n=0;n<e.length;n++)t=Math.imul(t,1664525)+1013904223>>>0,e[n]=t>>>24;let a=new Uint8Array(262144);for(let t=0;t<256;t++)for(let n=0;n<256;n++){let r=(t*256+n)*4;a[r]=e[t*256+n],a[r+1]=e[(t+17&255)*256+(n+37&255)],a[r+3]=255}let o=new i(a,256,256,n);return o.wrapS=o.wrapT=r,o.magFilter=o.minFilter=l,o.generateMipmaps=!1,o.needsUpdate=!0,o})();for(let e of[Le,ze,Re,Be])h.renderer.initTexture(e),await b();let Ve=(()=>{let[e,t,n]=S.sun.dirENU;return new s(e*P-t*F,n,-(e*F+t*P)).normalize()})(),He=new m(-Ve.x,-Ve.z).normalize(),Ue={tColor:{value:Le},tNormal:{value:ze},tShade:{value:Re},tNoise:{value:Be},uCam:{value:N.clone()},uSunDir:{value:Ve},uSunCol:{value:new s(...g.sunCol??ie)},uAmb:{value:new s(...ae)},uAnti:{value:He},uSizeM:{value:new m(S.size_m.east,S.size_m.north)},uPres:h.fog.pres,uTime:h.fog.time,uUnit:{value:O/140},uSunI:{value:3.2},uFarFade:{value:104},uMistY:{value:-.35},uDebug:{value:0},uScale:{value:O},uHRef:{value:I}},We=new t({uniforms:Ue,vertexShader:ce,fragmentShader:le(g.skyGlsl),depthWrite:!0,depthTest:!0,side:0}),$=new ee(X,We);$.name=`terrain`,$.frustumCulled=!1,$.renderOrder=-8,$.userData.noReflect=!0;let Ge=new e;return Ge.name=`terrain-group`,Ge.add($),ue(),{group:Ge,mesh:$,update(e,t,n){Ue.uCam.value.copy(t)},info:{ms:performance.now()-_,maxTaskMs:v,tris:J/3,verts:B*V,metresPerUnit:O,farthest:Y,fetchMs:me,segs:[R,z],t0:_,t1:performance.now(),landmarks:Me},dispose(){X.dispose(),We.dispose(),Le.dispose(),ze.dispose(),Re.dispose(),Be.dispose()}}}export{h as METRES_PER_UNIT,g as loadTerrain};