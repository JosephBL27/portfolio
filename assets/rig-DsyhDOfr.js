import{c as e}from"./projects-CnSkbXN_.js";import{B as t,Hn as n,I as r,It as i,Nt as a,P as o,Rt as s,S as c,Un as l,V as u,Vt as d,Wn as f,Xn as p,Yn as m,ar as h,at as g,br as _,bt as v,c as y,et as b,f as ee,h as x,j as S,lt as te,o as ne,p as re,s as C,sr as ie,u as ae,vt as oe,wr as se,yr as w,yt as T}from"./three.core-rbApIkjy.js";import{D as ce,E,N as le}from"./main-BfTGMAJq.js";import{t as ue}from"./RoundedBoxGeometry-BBGETCXM.js";import{t as de}from"./BufferGeometryUtils-v4Qs01o8.js";import{n as fe,t as pe}from"./lane-BoByweoM.js";var D=e=>e<0?0:e>1?1:e,me=(e,t,n)=>e+(t-e)*n,O=(e,t,n)=>{let r=D((n-e)/(t-e));return r*r*(3-2*r)},he=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,ge=e=>1-(1-D(e))**3,_e=e=>D(e)*D(e)*D(e);function ve(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ye(e,t,n){if(e<=0)return 0;if(n>=1)return 1-Math.exp(-t*e)*(1+t*e);let r=t*Math.sqrt(1-n*n);return 1-Math.exp(-n*t*e)*(Math.cos(r*e)+n*t/r*Math.sin(r*e))}function be(e){let t=e.length,n=e.map(e=>e[0]),r=e.map(e=>e[1]),i=[],a=Array(t).fill(0);for(let e=0;e<t-1;e++)i.push((r[e+1]-r[e])/(n[e+1]-n[e]));a[0]=i[0],a[t-1]=i[t-2];for(let e=1;e<t-1;e++)a[e]=i[e-1]*i[e]<=0?0:(i[e-1]+i[e])/2;for(let e=0;e<t-1;e++){if(i[e]===0){a[e]=0,a[e+1]=0;continue}let t=a[e]/i[e],n=a[e+1]/i[e],r=t*t+n*n;if(r>9){let o=3/Math.sqrt(r);a[e]=o*t*i[e],a[e+1]=o*n*i[e]}}return e=>{if(e<=n[0])return r[0];if(e>=n[t-1])return r[t-1];let i=0;for(;e>n[i+1];)i++;let o=n[i+1]-n[i],s=(e-n[i])/o,c=s*s,l=c*s;return(2*l-3*c+1)*r[i]+(l-2*c+s)*o*a[i]+(-2*l+3*c)*r[i+1]+(l-c)*o*a[i+1]}}function xe(e){return{uTime:{value:0},uDissolve:{value:0},uWarm:{value:0},uWarm2:{value:0},uAmb:{value:.16},uMoon:{value:1},uGlow:{value:0},uCopy:{value:0},uLightPos:{value:new _},uLight2Pos:{value:new _},uWarmCol:{value:new x(1,.62,.3)},uEdge:{value:new x(1,.72,.4)},uTymC:{value:new w(0,3.9)},uLane:{value:e.lane.u},uRes:{value:e.res},uLaneOn:fe}}var k={stone:0,wood:1,iron:2,brass:3,floor:4,glow:5,cloth:6,paper:7,emis:8,carved:9,shard:10},Se=`
attribute float aKind;
varying vec3 vW; varying vec3 vN; varying vec3 vL; varying vec2 vUv; varying float vK;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vL = position; vUv = uv; vK = aKind;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Ce=`
precision highp float;
uniform float uTime, uDissolve, uWarm, uWarm2, uAmb, uMoon, uGlow, uCopy;
uniform vec3 uLightPos, uLight2Pos, uWarmCol, uEdge, uTint;
uniform vec2 uTymC;
varying vec3 vW; varying vec3 vN; varying vec3 vL; varying vec2 vUv; varying float vK;
${pe}

float h13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vn(vec3 p) {
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h13(i), h13(i + vec3(1,0,0)), f.x), mix(h13(i + vec3(0,1,0)), h13(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h13(i + vec3(0,0,1)), h13(i + vec3(1,0,1)), f.x), mix(h13(i + vec3(0,1,1)), h13(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vn(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
float fbm2(vec3 p) { return 0.6 * vn(p) + 0.4 * vn(p * 2.3 + 3.7); }

struct Surf { vec3 alb; float rough; float metal; float h; vec3 emis; float ao; float bump; };

void stoneS(vec3 P, vec3 N, out Surf s) {
  vec3 an = abs(N); vec2 q; float face = 0.0;
  if (an.z >= an.x && an.z >= an.y) q = P.xy; else if (an.x >= an.y) { q = P.zy; face = 7.0; } else { q = P.xz; face = 13.0; }
  float ch = 0.58, row = floor(q.y / ch);
  float bl = 1.0 + 0.9 * h13(vec3(row, 3.7, 1.3 + face));
  float off = bl * h13(vec3(row, 9.1, 4.4 + face));
  float cx = (q.x + off) / bl, col = floor(cx);
  vec2 f = vec2(fract(cx) * bl, fract(q.y / ch) * ch);
  float e = min(min(f.x, bl - f.x), min(f.y, ch - f.y));
  float joint = 1.0 - smoothstep(0.010, 0.034, e);
  float bid = h13(vec3(col, row, 2.0 + face));
  float n1 = fbm(P * 2.6), n2 = vn(P * 15.0), n3 = vn(P * 40.0);
  float bevel = smoothstep(0.0, 0.075, e);
  s.h = bevel * 0.55 + n1 * 0.35 + n2 * 0.07 + n3 * 0.02 - joint * 0.45;
  vec3 base = uTint * (0.74 + 0.4 * bid) * (0.78 + 0.46 * n1);
  base *= 1.0 - 0.42 * joint;
  base = mix(base, base * vec3(0.8, 0.88, 0.66), smoothstep(0.55, 0.92, n2) * 0.45);
  s.alb = base; s.rough = 0.9; s.metal = 0.0; s.emis = vec3(0.0); s.ao = 1.0 - 0.4 * joint - 0.12 * (1.0 - bevel); s.bump = 0.7;
}
void woodS(vec3 P, vec3 N, out Surf s) {
  float pw = 0.3125, pid = floor(P.x / pw + 0.0001), fx = fract(P.x / pw) * pw, edge = min(fx, pw - fx);
  float gap = 1.0 - smoothstep(0.003, 0.02, edge);
  float g = fbm(vec3(P.x * 16.0 + pid * 7.0, P.y * 1.0 + pid * 3.0, P.z * 5.0));
  float rings = 0.5 + 0.5 * sin(P.x * 34.0 + g * 7.0 + pid * 2.0);
  float cross = 1.0 - smoothstep(0.004, 0.018, abs(fract(P.y / 0.92 + pid * 0.37) - 0.5) - 0.495);
  s.h = 0.5 * (1.0 - gap) + rings * 0.05 + g * 0.05 + 0.0 * cross;
  vec3 oak = mix(vec3(0.17, 0.095, 0.045), vec3(0.34, 0.2, 0.1), g);
  oak *= (0.82 + 0.34 * h13(vec3(pid, 1.0, 2.0))) * (0.74 + 0.3 * rings);
  oak = mix(oak, vec3(0.02, 0.014, 0.01), gap * 0.92);
  s.alb = oak; s.rough = 0.58; s.metal = 0.0; s.emis = vec3(0.0); s.ao = 1.0 - 0.7 * gap; s.bump = 1.1;
}
void ironS(vec3 P, out Surf s) {
  float n = fbm(P * 9.0), r = smoothstep(0.58, 0.8, fbm(P * 3.1 + 11.0));
  s.alb = mix(vec3(0.07, 0.072, 0.08), vec3(0.2, 0.09, 0.045), r * 0.7) * (0.8 + 0.5 * n);
  s.rough = 0.36 + 0.4 * n + 0.2 * r; s.metal = 0.85 - 0.5 * r; s.h = n * 0.25; s.emis = vec3(0.0); s.ao = 1.0; s.bump = 0.45;
}
void brassS(vec3 P, out Surf s) {
  float n = fbm(P * 12.0);
  s.alb = vec3(0.82, 0.58, 0.24) * (0.7 + 0.5 * n); s.rough = 0.3 + 0.2 * n; s.metal = 0.95; s.h = n * 0.1; s.emis = vec3(0.0); s.ao = 1.0; s.bump = 0.3;
}
void floorS(vec3 P, out Surf s) {
  float c = cos(0.05), sn = sin(0.05); vec2 q = vec2(c * P.x - sn * P.z, sn * P.x + c * P.z) / vec2(1.25, 1.9);
  vec2 id = floor(q), f = fract(q); float e = min(min(f.x, 1.0 - f.x) * 1.25, min(f.y, 1.0 - f.y) * 1.9);
  float joint = 1.0 - smoothstep(0.012, 0.04, e);
  float tone = h13(vec3(id, 3.3)), n = fbm(vec3(P.x * 1.7, 0.0, P.z * 1.7)), vein = smoothstep(0.7, 0.95, vn(vec3(P.x * 6.0 + n * 4.0, 0.0, P.z * 1.2)));
  s.alb = mix(vec3(0.09, 0.085, 0.095), vec3(0.2, 0.18, 0.16), tone * 0.6 + n * 0.4) * (1.0 - 0.7 * joint) * (1.0 + 0.5 * vein);
  s.rough = 0.22 + 0.5 * joint; s.metal = 0.0; s.h = (1.0 - joint) * 0.3 + n * 0.1; s.emis = vec3(0.0); s.ao = 1.0 - 0.5 * joint; s.bump = 0.35;
}
void clothS(vec3 P, out Surf s) {
  vec2 uv = vUv; float wf = 1.0 - smoothstep(0.004, 0.012, max(fwidth(uv.x), fwidth(uv.y)));
  float weave = 0.5 + wf * (0.25 * sin(uv.x * 120.0) + 0.25 * sin(uv.y * 150.0));
  float border = smoothstep(0.045, 0.05, min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y))) - smoothstep(0.075, 0.08, min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y)));
  vec2 c = abs(uv - vec2(0.5, 0.55)); float dia = 1.0 - smoothstep(0.0, 0.015, abs(c.x * 0.9 + c.y * 0.45 - 0.2));
  vec3 maroon = vec3(0.42, 0.035, 0.07) * (0.7 + 0.35 * weave);
  s.alb = mix(maroon, vec3(0.9, 0.64, 0.24), clamp(border + dia * 0.9, 0.0, 1.0));
  s.rough = 0.85; s.metal = 0.0; s.h = weave * 0.25; s.emis = vec3(0.0); s.ao = 1.0; s.bump = 0.5;
}
void carvedS(vec3 P, vec3 N, out Surf s) {
  vec2 q = P.xy - uTymC; float r = length(q), a = atan(q.y, q.x);
  float rose = r - (0.62 + 0.07 * cos(a * 8.0));
  float rim = 1.0 - smoothstep(0.0, 0.035, abs(rose));
  vec2 qa = abs(q); float d4 = min(length(qa - vec2(0.2, 0.0)), length(qa - vec2(0.0, 0.2))) - 0.19; // quatrefoil
  float petals = 1.0 - smoothstep(-0.015, 0.015, d4);
  float boss = 1.0 - smoothstep(0.0, 0.05, r - 0.06);
  float ring2 = 1.0 - smoothstep(0.0, 0.03, abs(r - 0.4));
  float lobes = 0.5 + 0.5 * cos(a * 8.0 + 0.0);
  float spokes = (1.0 - smoothstep(0.0, 0.03, abs(fract(a * 8.0 / 6.2831853 + 0.5) - 0.5) * r * 0.78)) * step(0.4, r) * step(r, 0.6);
  float rel = rim * 0.7 + petals * 0.9 + boss * 0.7 + ring2 * 0.4 + spokes * 0.45;
  vec3 st = vec3(0.0); Surf b; stoneS(P, N, b);
  s = b; s.h = b.h * 0.35 + rel * 1.2; s.alb = b.alb * (0.82 + 0.5 * clamp(rel, 0.0, 1.0)) + vec3(0.1, 0.07, 0.03) * boss;
  s.ao = b.ao * (0.62 + 0.38 * clamp(rel * 1.4, 0.0, 1.0)); s.bump = 1.5;
}
void glowS(vec3 P, out Surf s) {
  // stained glass: voronoi-ish cells of gold / amber / maroon / pale between dark lead, a pointed-window mullion pattern
  vec2 uv = vUv * vec2(5.0, 9.0); vec2 id = floor(uv), f = fract(uv); float best = 9.0, second = 9.0; vec2 bc = vec2(0.0);
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec2 g = vec2(float(i), float(j)); vec2 o = vec2(h13(vec3(id + g, 1.0)), h13(vec3(id + g, 2.0)));
    float d = length(g + o - f); if (d < best) { second = best; best = d; bc = id + g; } else if (d < second) second = d;
  }
  float lead = 1.0 - smoothstep(0.02, 0.07, second - best);
  float pick = h13(vec3(bc, 5.0));
  vec3 c = pick < 0.35 ? vec3(1.0, 0.72, 0.28) : pick < 0.6 ? vec3(1.0, 0.5, 0.18) : pick < 0.8 ? vec3(0.78, 0.1, 0.14) : vec3(1.0, 0.92, 0.7);
  float mull = 1.0 - smoothstep(0.0, 0.012, abs(vUv.x - 0.5));
  s.alb = vec3(0.02); s.rough = 0.5; s.metal = 0.0; s.h = 0.0; s.ao = 1.0; s.bump = 0.0;
  s.emis = mix(c * (0.9 + 0.5 * h13(vec3(bc, 9.0))), vec3(0.01), clamp(lead + mull * 0.8, 0.0, 1.0)) * uGlow;
}
void paperS(vec3 P, out Surf s) {
  float ln = 0.5 + 0.5 * sin(P.y * 520.0 + fbm(P * 20.0) * 3.0);
  s.alb = vec3(0.86, 0.79, 0.64) * (0.72 + 0.28 * ln); s.rough = 0.9; s.metal = 0.0; s.h = ln * 0.2; s.emis = vec3(0.0); s.ao = 1.0; s.bump = 0.4;
}

vec3 envFake(vec3 R, vec3 P) {
  vec3 col = mix(vec3(0.012, 0.014, 0.022), vec3(0.06, 0.075, 0.12), clamp(R.y * 0.5 + 0.5, 0.0, 1.0));
  vec3 L1 = normalize(uLightPos - P), L2 = normalize(uLight2Pos - P);
  col += uWarmCol * (pow(max(dot(R, L1), 0.0), 7.0) * 1.6 * uWarm + pow(max(dot(R, L2), 0.0), 7.0) * 1.2 * uWarm2);
  col += vec3(0.5, 0.62, 0.9) * pow(max(dot(R, normalize(vec3(-0.4, 0.8, 0.5))), 0.0), 24.0) * 0.5 * uMoon;
  return col;
}
vec3 pointL(vec3 P, vec3 N, vec3 V, vec3 alb, float rough, float metal, vec3 lp, vec3 lc, float k) {
  vec3 Lv = lp - P; float d2 = dot(Lv, Lv); vec3 L = Lv * inversesqrt(max(d2, 1e-4));
  float att = 1.0 / (1.0 + d2 * k), nl = max(dot(N, L) * 0.85 + 0.15, 0.0);
  vec3 H = normalize(L + V); float sp = pow(max(dot(N, H), 0.0), mix(180.0, 6.0, rough)) * (1.0 - rough * 0.8);
  vec3 F0 = mix(vec3(0.04), alb, metal);
  return (alb * (1.0 - metal) * nl + F0 * sp * 2.2 + F0 * metal * nl * 0.6) * lc * att;
}

void main() {
  vec3 N = normalize(vN); if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(cameraPosition - vW);
  // ---- dissolve: a fine noisy edge that burns bright (the particle world's materialise); the copy lane: no stage there while copy is on screen
  float rim = 0.0;
  if (uDissolve < 0.995 || uCopy > 0.002) {
    float dn = fbm(vW * 2.6 + vec3(3.0, 1.0, 7.0)) * 0.8 + 0.18 * vn(vW * 13.0);
    float inLane = 1.0 - laneMask();
    float thr = uDissolve * 1.25 - 0.12;
    if (dn >= thr) discard;
    if (dn >= thr - uCopy * inLane * 1.5) discard;
    rim = smoothstep(thr - 0.05, thr, dn);
  }
  Surf s; s.emis = vec3(0.0);
  int k = int(vK + 0.5);
  vec3 P = vL;
  if (k == 0) stoneS(P, N, s);
  else if (k == 1) woodS(P, N, s);
  else if (k == 2) ironS(P, s);
  else if (k == 3) brassS(P, s);
  else if (k == 4) floorS(vW, s);
  else if (k == 5) glowS(P, s);
  else if (k == 6) clothS(P, s);
  else if (k == 7) paperS(P, s);
  else if (k == 9) carvedS(P, N, s);
  else {
    // the lit room seen through the doorway: a bright floor and far window, columns in silhouette, a falloff to the jambs
    vec2 q = vUv;
    float g = 1.0 - smoothstep(0.0, 0.85, length((q - vec2(0.5, 0.42)) * vec2(1.3, 0.8)));
    float col = 0.0;
    for (int i = 0; i < 3; i++) { float cx = 0.5 + (float(i) - 1.0) * 0.26; float w = 0.018 + 0.012 * abs(float(i) - 1.0); col = max(col, 1.0 - smoothstep(w, w * 1.8, abs(q.x - cx))); }
    float win = (1.0 - smoothstep(0.1, 0.16, abs(q.x - 0.5))) * smoothstep(0.38, 0.45, q.y) * (1.0 - smoothstep(0.78, 0.84, q.y - abs(q.x - 0.5) * 0.9));
    float floorG = smoothstep(0.38, 0.0, q.y);
    vec3 wcol = mix(vec3(1.0, 0.62, 0.3), vec3(1.0, 0.88, 0.62), g * g);
    vec3 e = wcol * (0.35 + 1.5 * g + 0.7 * floorG) + vec3(1.0, 0.8, 0.5) * win * 0.9;
    e *= 1.0 - col * 0.82 * smoothstep(0.1, 0.45, q.y);
    s.alb = vec3(0.0); s.rough = 1.0; s.metal = 0.0; s.h = 0.0; s.ao = 1.0; s.bump = 0.0;
    s.emis = e * (0.25 + 1.3 * uWarm);
  }
  // ---- screen-space bump (no tangents needed)
  {
    vec3 dpx = dFdx(vW), dpy = dFdy(vW); float dhx = dFdx(s.h), dhy = dFdy(s.h);
    vec3 r1 = cross(dpy, N), r2 = cross(N, dpx); float det = dot(dpx, r1);
    vec3 grad = sign(det) * (dhx * r1 + dhy * r2);
    N = normalize(abs(det) * N - grad * s.bump * 0.2);
  }
  // ---- lighting (display-referred, hand-tuned)
  vec3 col = s.alb * uAmb * (0.55 + 0.45 * N.y) * vec3(0.6, 0.68, 0.95);
  vec3 Lm = normalize(vec3(-0.4, 0.8, 0.5));
  col += s.alb * (1.0 - s.metal) * vec3(0.28, 0.34, 0.5) * max(dot(N, Lm), 0.0) * 0.5 * uMoon;
  col += pointL(vW, N, V, s.alb, s.rough, s.metal, uLightPos, uWarmCol * uWarm * 3.4, 0.08);
  col += pointL(vW, N, V, s.alb, s.rough, s.metal, uLight2Pos, uWarmCol * uWarm2 * 3.0, 0.05);
  vec3 R = reflect(-V, N); float fr = pow(1.0 - max(dot(N, V), 0.0), 5.0);
  col += envFake(R, vW) * (mix(vec3(0.04), s.alb, s.metal) + fr * (1.0 - s.rough) * 0.6) * (1.0 - s.rough * 0.85);
  col *= s.ao;
  col += s.emis;
  col += uEdge * rim * 2.0;
  gl_FragColor = vec4(max(col, 0.0), 1.0);
}`;function we(e,t={}){return new n({vertexShader:Se,fragmentShader:Ce,side:t.side??0,uniforms:{...e,uTint:{value:new x(t.tint??9076074)}}})}function A(e,t){let n=e.getAttribute(`position`).count;return e.setAttribute(`aKind`,new C(new Float32Array(n).fill(t),1)),e.getAttribute(`uv`)||e.setAttribute(`uv`,new C(new Float32Array(n*2),2)),e.getAttribute(`normal`)||e.computeVertexNormals(),e}function j(e){let t=e.map(e=>{let t=e.index?e.toNonIndexed():e;for(let e of Object.keys(t.attributes))[`position`,`normal`,`uv`,`aKind`].includes(e)||t.deleteAttribute(e);return t}),n=de(t,!1);if(!n)throw Error(`merge failed`);return n.computeBoundingSphere(),n.computeBoundingBox(),n}var Te=new oe,Ee=new d,De=new S,Oe=new _,ke=new _(1,1,1);function M(e,t,n=[0,0,0],r=1){return De.set(n[0],n[1],n[2],`YXZ`),Ee.setFromEuler(De),typeof r==`number`?ke.set(r,r,r):ke.set(r[0],r[1],r[2]),Te.compose(Oe.set(t[0],t[1],t[2]),Ee,ke),e.applyMatrix4(Te),e}var N=(e,t,n,r,i,a,o=.02)=>A(M(o>0?new ue(e,t,n,2,Math.min(o,e/2.2,t/2.2,n/2.2)):new ne(e,t,n),r,a),i),P=(e,t,n,r,i,a=14,o)=>A(M(new c(e,t,n,a,1),r,o),i),F=(e,t,n,r=10,i=7,a=1)=>A(M(new p(e,r,i),t,[0,0,0],a),n);function I(e,t,n,r=16){return A(M(new b(e.map(e=>new w(e[0],e[1])),r),t),n)}function L(e,t,n,r,i=[0,0,0],a=[0,0,0],s=6){return A(M(new o(e,{depth:t,bevelEnabled:n>0,bevelSize:n,bevelThickness:n,bevelSegments:1,curveSegments:s,steps:1}),i,a),r)}function R(e,t,n,r=0,i=10){let a=-e+n,o=n+r,s=Math.acos(-a/o),c=[];for(let e=0;e<=i;e++){let n=Math.PI+(s-Math.PI)*(e/i);c.push(new w(a+o*Math.cos(n),t+o*Math.sin(n)))}let l=c.slice(0,-1).reverse().map(e=>new w(-e.x,e.y));return{pts:[...c,...l],apex:t+Math.sqrt(o*o-a*a)}}function Ae(e,t,n,r,i,a,o,s,c){let u=-e+n,d=[],f=(e=>Math.acos(-u/e))((r+i)/2),p=(e,n)=>new w(u+n*Math.cos(e),t+n*Math.sin(e));for(let e=0;e<2;e++)for(let n=0;n<s;n++){let m=Math.PI+(f-Math.PI)*(n/s),h=Math.PI+(f-Math.PI)*((n+1)/s),g=m+(h-m)*.025,_=h-(h-m)*.025,v=new l,y=n<s-1?[p(g,r),p(g,i),p(_,i),p(_,r)]:[p(g,r),p(g,i),new w(.006,t+Math.sqrt(i*i-u*u)),new w(.006,t+Math.sqrt(r*r-u*u))];v.moveTo(y[0].x,y[0].y);for(let e=1;e<4;e++)v.lineTo(y[e].x,y[e].y);v.closePath();let b=L(v,o-a,.012,c,[0,0,a]);e===1&&(M(b,[0,0,0],[0,0,0],[-1,1,1]),je(b)),d.push(b)}return d}function je(e){let t=e.getAttribute(`position`),n=e.getAttribute(`normal`),r=e.getAttribute(`uv`),i=e.getAttribute(`aKind`);if(e.index){let t=e.index;for(let e=0;e<t.count;e+=3){let n=t.getX(e+1),r=t.getX(e+2);t.setX(e+1,r),t.setX(e+2,n)}t.needsUpdate=!0;return}let a=e=>{if(!e)return;let t=e.itemSize;for(let n=0;n<e.count;n+=3)for(let r=0;r<t;r++){let t=e.getComponent(n+1,r),i=e.getComponent(n+2,r);e.setComponent(n+1,r,i),e.setComponent(n+2,r,t)}};a(t),a(n),a(r),a(i)}function Me(e=`radial`,t=128){let n=document.createElement(`canvas`);n.width=n.height=t;let r=n.getContext(`2d`);if(e===`radial`){let e=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,`rgba(255,255,255,1)`),e.addColorStop(.35,`rgba(255,255,255,0.55)`),e.addColorStop(.7,`rgba(255,255,255,0.12)`),e.addColorStop(1,`rgba(255,255,255,0)`),r.fillStyle=e,r.fillRect(0,0,t,t)}else if(e===`linearY`){let e=r.createLinearGradient(0,0,0,t);e.addColorStop(0,`rgba(255,255,255,1)`),e.addColorStop(1,`rgba(255,255,255,0)`),r.fillStyle=e,r.fillRect(0,0,t,t)}else{let e=r.createLinearGradient(0,0,t,0);e.addColorStop(0,`rgba(255,255,255,0)`),e.addColorStop(.5,`rgba(255,255,255,1)`),e.addColorStop(1,`rgba(255,255,255,0)`),r.fillStyle=e,r.fillRect(0,0,t,t)}let i=new ae(n);return i.colorSpace=``,i.needsUpdate=!0,i}var Ne=null;function Pe(e,...t){let n=e.renderer;try{Ne??=new se(4,4,{type:u,depthBuffer:!0});for(let r of t){n.compileAsync(r,e.camera,e.scene).catch(()=>{});let t=n.getRenderTarget();n.setRenderTarget(Ne);try{n.compileAsync(r,e.camera,e.scene).catch(()=>{})}finally{n.setRenderTarget(t)}}}catch{}}var z={w:2.5,h:9.2,sill:6};function Fe(){return{uWinPos:{value:Array.from({length:5},()=>new _)},uWinCol:{value:Array.from({length:5},()=>new x(1,1,1))},uWinI:{value:[1,1,1,1,1]},uGain:{value:[1,1,1,1,1]},tGlass:{value:null},uCamL:{value:new _(0,2.4,8)},uHallLit:{value:1},uProj:{value:1},uLamp:{value:new x(1,.56,.18)},uSunK:{value:[.35,.35,.35,.35,.35]}}}var Ie=`
uniform vec3 uWinPos[5]; uniform vec3 uWinCol[5]; uniform float uWinI[5]; uniform float uGain[5]; uniform float uSunK[5];
uniform sampler2D tGlass; uniform vec3 uCamL, uLamp; uniform float uHallLit, uProj;
const float HL = ${E.len.toFixed(2)}, WP = ${ce.toFixed(3)}, WW = ${z.w.toFixed(3)}, WH = ${z.h.toFixed(3)}, WS = ${z.sill.toFixed(3)};
// the window picture at a point of the end-wall plane (hall-local x, y): rgb, 0 outside every lancet
vec3 glassAt(vec2 hit, float lod, out int which) {
  which = 0;
  float fi = clamp(floor(2.5 - hit.x / WP), 0.0, 4.0); which = int(fi);
  float xc = (2.0 - fi) * WP;
  float u = 0.5 - (hit.x - xc) / WW, v = (hit.y - WS) / WH;
  if (u <= 0.0 || u >= 1.0 || v <= 0.0 || v >= 1.0) return vec3(0.0);
  return textureLod(tGlass, vec2((fi + u) / 5.0, v), lod).rgb * uGain[which];
}
vec3 hallExtra(vec3 alb, float rough, float metal, vec3 N, vec3 V, int k) {
  vec3 acc = vec3(0.0);
  for (int i = 0; i < 5; i++) {
    vec3 Lv = uWinPos[i] - vW; float d2 = dot(Lv, Lv); vec3 L = Lv * inversesqrt(max(d2, 1e-3));
    float att = 1.0 / (1.0 + d2 * 0.0042);
    float nl = max(dot(N, L) * 0.7 + 0.3, 0.0);
    vec3 H = normalize(L + V); float sp = pow(max(dot(N, H), 0.0), mix(110.0, 8.0, rough)) * (1.0 - rough * 0.7);
    acc += uWinCol[i] * uWinI[i] * att * (alb * (1.0 - metal) * nl * 1.9 + vec3(sp) * 0.3);
  }
  if (k == 4) {
    // polished flags: the sun patches and the mirror image of the end wall
    vec3 Pl = vL; vec3 Vl = normalize(uCamL - Pl);
    float fr = 0.16 + 0.84 * pow(1.0 - clamp(Vl.y, 0.0, 1.0), 4.0);
    vec3 R = vec3(-Vl.x, Vl.y, -Vl.z);
    if (R.z > 0.02) {
      float s = (HL - 0.5 - Pl.z) / R.z; vec2 hit = vec2(Pl.x + R.x * s, R.y * s); int w1;
      vec3 g = glassAt(hit, 1.4 + rough * 5.0 + s * 0.05, w1);
      acc += g * fr * (1.0 - rough * 0.8) * 0.62 * (0.45 + 0.55 * uSunK[w1]) * smoothstep(0.0, 0.5, R.y);
    }
    float s2 = (HL - 0.5 - Pl.z) / 0.83; vec2 hp = vec2(Pl.x + s2 * 0.1, s2 * 0.55); int w2;
    vec3 sun = glassAt(hp, 1.2 + s2 * 0.045, w2);
    acc += sun * uProj * 0.55 * uSunK[w2] * smoothstep(0.0, 1.5, s2);
  }
  return acc * uHallLit;
}
`;function Le(e,t,n={}){let r=we(e,n),i=r.fragmentShader,a=(e,t)=>{i.includes(e)||console.warn(`[hall] shader patch missed:`,e.slice(0,40)),i=i.replace(e,t)};return a(`void main() {`,Ie+`
void main() {`),a(`    if (dn >= thr - uCopy * inLane * 1.5) discard;
`,``),a(`if (uDissolve < 0.995 || uCopy > 0.002) {`,`if (uDissolve < 0.995) {`),a(`float n1 = fbm(P * 2.6), n2 = vn(P * 15.0), n3 = vn(P * 40.0);`,`float n1 = fbm2(P * 2.6), n2 = vn(P * 15.0), n3 = 0.5;`),a(`float joint = 1.0 - smoothstep(0.010, 0.034, e);`,`float jw = fwidth(e); float joint = 1.0 - smoothstep(0.010, 0.034 + jw * 1.2, e); joint = mix(joint, 0.07, smoothstep(0.03, 0.14, jw));`),a(`s.ao = 1.0 - 0.4 * joint - 0.12 * (1.0 - bevel); s.bump = 0.7;`,`s.ao = 1.0 - 0.4 * joint - 0.12 * (1.0 - bevel); s.bump = 0.5 * (1.0 - smoothstep(0.02, 0.1, jw));`),a(`float joint = 1.0 - smoothstep(0.012, 0.04, e);`,`float jw = fwidth(e); float joint = 1.0 - smoothstep(0.012, 0.04 + jw * 1.2, e); joint = mix(joint, 0.1, smoothstep(0.03, 0.14, jw));`),a(`s.ao = 1.0 - 0.5 * joint; s.bump = 0.35;`,`s.ao = 1.0 - 0.5 * joint; s.bump = 0.2 * (1.0 - smoothstep(0.02, 0.1, jw));`),a(`F0 * sp * 2.2`,`F0 * sp * 1.0`),a(`grad * s.bump * 0.2`,`grad * s.bump * 0.14`),a(`  else if (k == 9) carvedS(P, N, s);`,`  else if (k == 9) carvedS(P, N, s);
  else if (k == 11) { s.alb = vec3(0.3, 0.18, 0.07); s.rough = 0.34; s.metal = 0.85; s.h = 0.0; s.ao = 1.0; s.bump = 0.0; s.emis = uLamp * (0.12 + 0.62 * pow(max(dot(N, V), 0.0), 1.6)) * (0.94 + 0.06 * vn(P * 3.0 + uTime * 0.3)); }
  else if (k == 12) { s.alb = vec3(0.0); s.rough = 1.0; s.metal = 0.0; s.h = 0.0; s.ao = 1.0; s.bump = 0.0; s.emis = vec3(1.0, 0.72, 0.34) * (2.2 + 0.7 * vn(P * 9.0 + uTime * 5.0)); }`),a(`  col *= s.ao;`,`  col += hallExtra(s.alb, s.rough, s.metal, N, V, k);
  col *= s.ao;`),a(`  gl_FragColor = vec4(max(col, 0.0), 1.0);`,`  col *= 1.0 - 0.72 * uCopy * (1.0 - laneMask());
  gl_FragColor = vec4(max(col, 0.0), 1.0);`),r.fragmentShader=i,Object.assign(r.uniforms,t),r}function Re(e){let t=e.fragmentShader,n=`    if (dn >= thr - uCopy * inLane * 1.5) discard;
`;return!t.includes(n)||!t.includes(`  col *= s.ao;`)?(console.warn(`[hall] lane patch missed`),e):(t=t.replace(n,``).replace(`if (uDissolve < 0.995 || uCopy > 0.002) {`,`if (uDissolve < 0.995) {`).replace(`  gl_FragColor = vec4(max(col, 0.0), 1.0);`,`  col *= 1.0 - 0.6 * uCopy * (1.0 - laneMask());
  gl_FragColor = vec4(max(col, 0.0), 1.0);`),e.fragmentShader=t,e)}var ze=(e,t)=>Re(we(e,t)),B=1.25,V=2.9,H=2.1,Be=5.6,Ve=8.6,He=.3,Ue=1.6,We=-.75,Ge=(e,t)=>{let n=e*1.9,r=Math.sqrt(n*n-(n-e)*(n-e)),i=R(e,t-r,n,0,12).pts,a=new l;a.moveTo(-e,0),a.lineTo(-e,t-r);for(let e of i)a.lineTo(e.x,e.y);return a.lineTo(e,0),a.closePath(),a};function Ke(e,t,n=1){let r=e/1.235,i=t/2.7,a=[N(e,t,.14,[e/2,t/2,0],k.wood,void 0,.012)],o=n*.084;for(let t of[.42,1.32,2.22]){let s=t*i;a.push(N(e*.94,.15,.028,[e*.47,s,o],k.iron,void 0,.006)),a.push(N(.18,.2,.03,[e*.94+.02,s,o],k.iron,[0,0,Math.PI/4],.004)),a.push(P(.085,.085,.032,[.09,s,o],k.iron,10,[Math.PI/2,0,0]));for(let e=0;e<6;e++)a.push(F(.027,[(.25+e*.185)*r,s,o+n*.012],k.iron,7,5,[1,1,.6]));a.push(N(e*.94,.15,.028,[e*.47,s,-o],k.iron,void 0,.006))}a.push(N(.08,t,.028,[e-.05,t/2,o],k.iron,void 0,.005)),a.push(N(.08,t,.028,[.05,t/2,o],k.iron,void 0,.005));let s=Math.round(10*i);for(let r=0;r<s;r++){let i=.18+r*((t-.3)/Math.max(1,s-1));a.push(F(.024,[e-.05,i,o+n*.012],k.iron,7,5,[1,1,.6])),a.push(F(.024,[.05,i,o+n*.012],k.iron,7,5,[1,1,.6]))}return a.push(P(.12,.13,.04,[e-.2,1.3*i,o+n*.02],k.brass,16,[Math.PI/2,0,0])),a.push(A(M(new h(.115,.017,8,20),[e-.2,1.17*i,o+n*.07],[.2*n,0,0]),k.iron)),j(a)}var qe=`
precision highp float; uniform float uI; uniform vec3 uCol; varying vec2 vUv;
void main() { float x = abs(vUv.x - 0.5) * 2.0; float core = exp(-x * x * 120.0), halo = exp(-x * x * 7.0) * 0.2;
  float v = smoothstep(0.0, 0.05, vUv.y) * (1.0 - smoothstep(0.86, 1.0, vUv.y)); float a = (core + halo) * v * uI; gl_FragColor = vec4(uCol * a, a); }`,Je=`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;function Ye(e){return new n({vertexShader:Je,fragmentShader:qe,uniforms:{uI:{value:0},uCol:{value:new x(e[0],e[1],e[2])}},transparent:!0,depthWrite:!1,depthTest:!0,blending:2,side:2})}function Xe(e){let n=[];{let e=new l;e.moveTo(-5.6,-.5),e.lineTo(Be,-.5),e.lineTo(Be,Ve),e.lineTo(0,11),e.lineTo(-5.6,Ve),e.closePath();let t=new a,r=R(B,V,H,0,12).pts;t.moveTo(-1.25,-.5),t.lineTo(-1.25,V);for(let e of r)t.lineTo(e.x,e.y);t.lineTo(B,-.5),t.closePath(),e.holes.push(t),n.push(L(e,.6,.02,k.stone,[0,0,-.75],[0,0,0],8))}let r=[.12,.36,.6];for(let e=0;e<3;e++){let t=H+He*e,i=H+He*(e+1);for(let a of Ae(B,V,H,t,i,-.7,r[e],8,k.stone))n.push(a);for(let t of[-1,1]){let i=B+He*e,a=B+He*(e+1),o=t*(i+a)/2,s=V/6;for(let t=0;t<6;t++)n.push(N(.288,.4693333333333333,r[e]+.7-.01,[o,s*(t+.5),(r[e]-.7)/2],k.stone,void 0,.012));let c=.062,l=t*(a-.085);n.push(P(c,c,2.6799999999999997,[l,1.46,r[e]-.03],k.stone,12)),n.push(I([[.001,0],[.12,0],[.12,.05],[.085,.09],[.07,.12],[.001,.12]],[l,0,r[e]-.03],k.stone,12)),n.push(I([[.001,0],[.065,0],[.075,.05],[.11,.1],[.12,.17],[.001,.17]],[l,2.8,r[e]-.03],k.stone,12))}}for(let e of Ae(B,V,H,3,3.1,-.7,.68,14,k.stone))n.push(e);for(let e of[-1,1]){let t=e*5.8999999999999995;n.push(N(1,2.4,1.9,[t,.7,.1],k.stone,void 0,.03)),n.push(N(.86,2.3,1.7,[t,3,0],k.stone,void 0,.03)),n.push(N(.72,2.3,1.5,[t,5.3,-.1],k.stone,void 0,.03)),n.push(N(.6,2.3,1.3,[t,7.6,-.2],k.stone,void 0,.03)),n.push(N(.74,.14,.9,[t,8.85,-.2],k.stone,void 0,.02)),n.push(P(.02,.4,1.9,[t,9.9,-.2],k.stone,4,[0,Math.PI/4,0])),n.push(F(.08,[t,10.9,-.2],k.stone,8,6));for(let e=0;e<4;e++)n.push(F(.055,[t+Math.cos(e*Math.PI/2)*.18,9.3,-.2+Math.sin(e*Math.PI/2)*.18],k.stone,6,5))}n.push(N(11.399999999999999,.16,.5,[0,5.9,-.2],k.stone,void 0,.02)),n.push(N(11.399999999999999,.16,.5,[0,8.2,-.2],k.stone,void 0,.02)),n.push(N(13,.7,2.7,[0,-.35,.3],k.stone,void 0,.03));let i=[];for(let e=1;e<=3;e++)i.push(N(5.4+.5*e,.19,.62,[0,-.7+.19*(4-e)-.095,1.65+.5*e-.18],k.stone,void 0,.02));n.push(N(2.6,.22,.34,[0,2.79,-.45],k.stone,void 0,.02));{let e=R(B,V,H,0,12).pts,t=new l;t.moveTo(-1.25,V);for(let n of e)t.lineTo(n.x,n.y);t.lineTo(B,V),t.closePath(),n.push(L(t,.16,.012,k.carved,[0,0,-.52],[0,0,0],8))}let o=[];{let e=new re(1.25,40),t=e.getAttribute(`uv`),r=e.getAttribute(`position`);for(let e=0;e<r.count;e++)t.setXY(e,r.getX(e)/2.5+.5,r.getY(e)/2.5+.5);o.push(A(M(e,[0,7.35,-.12]),k.glow)),n.push(A(M(new h(1.3,.1,8,40),[0,7.35,-.12]),k.stone));for(let e=0;e<8;e++){let t=e/8*Math.PI*2;n.push(N(.05,1.2,.07,[Math.cos(t)*.62,7.35+Math.sin(t)*.62,-.1],k.stone,[0,0,t-Math.PI/2],.01))}n.push(A(M(new h(.34,.06,8,24),[0,7.35,-.1]),k.stone));for(let e of[-1,1]){let t=new f(Ge(.62,4.4),8),r=t.getAttribute(`position`),i=t.getAttribute(`uv`);for(let e=0;e<r.count;e++)i.setXY(e,(r.getX(e)+.62)/1.24,r.getY(e)/4.4);o.push(A(M(t,[e*3.9,1.1,-.12]),k.glow));let s=Ge(.76,4.54),c=new a,l=Ge(.62,4.4).getPoints(12);c.moveTo(l[0].x,l[0].y);for(let e of l)c.lineTo(e.x,e.y);c.closePath(),s.holes.push(c),n.push(L(s,.16,.01,k.stone,[e*3.9,1,-.2],[0,0,0],8))}}let s=new T(j(n),ze(e,{tint:12891287}));s.name=`hall-facade`;let c=new T(j(o),ze(e,{side:2}));c.name=`hall-facade-glow`;let u=Ke(1.235,2.6999999999999997,1),d=n=>{let r=new t,i=new T(u,ze(e,{tint:9071176}));return i.name=`hall-leaf`,r.add(i),r.position.set(n*B,0,-.48),r.scale.x=-n,r},p=new T(j(i),ze(e,{tint:11707528}));return p.name=`hall-steps`,{stone:s,leafL:d(-1),leafR:d(1),steps:p,glow:c}}var U=Math.max(E.hw,9),W=E.len,G=.9,K={hw:1.6,h:5.4,base:.22},Ze=8.8,q=U*1.12,Qe=W/6,$e=Ze+Math.sqrt(q*q-(q-U)*(q-U));function et(e,t=0){return Ze+Math.sqrt(Math.max(0,(q+t)*(q+t)-(-Math.abs(e)-(-U+q))**2))}var tt=(e,t)=>{let n=R(U,Ze,q,e,20).pts,r=R(U,Ze,q,t,20).pts.slice().reverse(),i=new l;i.moveTo(n[0].x,n[0].y);for(let e of n)i.lineTo(e.x,e.y);for(let e of r)i.lineTo(e.x,e.y);return i.closePath(),i};function J(e,t,n=0){let r=e*1.9,i=Math.sqrt(r*r-(r-e)*(r-e)),a=R(e+n,t-i,r+n*0,0,14).pts;return[new w(-e-n,-n),...a,new w(e+n,-n)]}var nt=e=>{let t=e*1.9;return Math.sqrt(t*t-(t-e)*(t-e))},rt=e=>{let t=new l;t.moveTo(e[0].x,e[0].y);for(let n of e)t.lineTo(n.x,n.y);return t.closePath(),t};function it(e,t,n){let r=[],o=Array.from({length:7},(e,t)=>t*Qe);r.push(A(M(new i(2*(U+G),W+.4),[0,0,W/2-.1],[-Math.PI/2,0,0]),k.floor));for(let e of[-1,1])r.push(N(G,9,W,[e*(U+G/2),9/2,W/2],k.stone,void 0,0));{let e=R(U,Ze,q,G,20).pts,t=new l;t.moveTo(-U-G,0),t.lineTo(-U-G,Ze);for(let n of e)t.lineTo(n.x,n.y);t.lineTo(U+G,0),t.closePath();let n=z.sill+z.h-nt(z.w/2);for(let e=0;e<5;e++){let r=le(e),i=new a,o=z.w/2,s=R(o,n,o*1.9,0,14).pts;i.moveTo(r-o,z.sill),i.lineTo(r-o,n);for(let e of s)i.lineTo(r+e.x,e.y);i.lineTo(r+o,z.sill),i.closePath(),t.holes.push(i)}{let e=new a,n=K.h-nt(K.hw),r=R(K.hw,n,K.hw*1.9,0,14).pts;e.moveTo(-K.hw,0),e.lineTo(-K.hw,n);for(let t of r)e.lineTo(t.x,t.y);e.lineTo(K.hw,0),e.closePath(),t.holes.push(e)}r.push(L(t,1,.01,k.stone,[0,0,W-1],[0,0,0],8))}r.push(L(tt(G,0),W,.01,k.stone,[0,0,0],[0,0,0],8));for(let e=0;e<5;e++){let t=le(e),n=z.w/2,i=J(n,z.h,.22),o=J(n,z.h,0),s=rt(i),c=new a;c.moveTo(o[0].x,o[0].y);for(let e of o)c.lineTo(e.x,e.y);c.closePath(),s.holes.push(c),r.push(L(s,.14,.01,k.stone,[t,z.sill,W-1.14],[0,0,0],8)),r.push(N(z.w+.7,.16,.44,[t,z.sill-.06,W-1.1],k.stone,void 0,.02))}{let e=J(K.hw,K.h,.3),t=J(K.hw,K.h,0),n=rt(e),i=new a;i.moveTo(t[0].x,t[0].y);for(let e of t)i.lineTo(e.x,e.y);i.closePath(),n.holes.push(i),r.push(L(n,.16,.01,k.stone,[0,0,W-1.16],[0,0,0],8)),r.push(N(2*K.hw+.9,.12,1.1,[0,.06,W-.5],k.stone,void 0,.02));let o=K.h-nt(K.hw),s=R(K.hw+.01,o,K.hw*1.9,0,14).pts,c=o+.2,u=new l;u.moveTo(-K.hw-.01,c);for(let e of s)e.y>=c&&u.lineTo(e.x,e.y);u.lineTo(K.hw+.01,c),u.closePath(),r.push(L(u,.22,.01,k.wood,[0,0,W-.66],[0,0,0],8)),r.push(N(2*K.hw+.1,.2,.3,[0,c-.02,W-.62],k.iron,void 0,.01)),r.push(F(.22,[0,c+1,W-.7],k.brass,14,10))}r.push(N(2*U,.22,3.6,[0,.11,W-1.8-1],k.stone,void 0,.02)),r.push(N(2*U-.8,.22,.7,[0,.11,W-4.7-.2],k.stone,void 0,.02));for(let e=1;e<6;e++){let t=o[e];for(let e of[-1,1]){let n=e*(U-.14);r.push(I([[.001,0],[.78,0],[.78,.2],[.62,.34],[.5,.46],[.001,.46]],[n,0,t],k.stone,14)),r.push(P(.4,.44,8.3,[n,.46+(8.3-.46)/2,t],k.stone,14));for(let i of[-.6,.6])r.push(P(.17,.19,8.5,[n-e*.06,4.55,t+i],k.stone,10)),r.push(I([[.001,0],[.26,0],[.26,.12],[.17,.16],[.001,.16]],[n-e*.06,.2,t+i],k.stone,10));for(let e of[2.2,4.4,6.6])r.push(I([[.4,0],[.5,0],[.5,.08],[.4,.1]],[n,e,t],k.stone,14));r.push(I([[.001,0],[.42,0],[.55,.18],[.74,.34],[.78,.6],[.001,.6]],[n,8.25,t],k.stone,14));for(let i of[-.6,.6])r.push(I([[.001,0],[.2,0],[.3,.12],[.36,.3],[.001,.3]],[n-e*.06,8.5,t+i],k.stone,10))}r.push(L(tt(0,-.62),.5,.02,k.stone,[0,0,t-.25],[0,0,0],8))}for(let e=0;e<6;e++){let t=o[e],n=o[e+1];for(let e of[0,1]){let i=[];for(let r=0;r<=16;r++){let a=r/16,o=-U+2*U*a,s=e?t+(n-t)*a:n-(n-t)*a;i.push(new _(o,et(o,-.02)-.07,s))}r.push(A(new ie(new ee(i),40,.1,6,!1),k.stone))}r.push(F(.24,[0,$e-.1,(t+n)/2],k.brass,12,8))}r.push(A(new ie(new g(new _(0,$e-.06,0),new _(0,$e-.06,W)),6,.09,6,!1),k.stone));for(let e of[-1,1])r.push(N(.14,2.3,W-.4,[e*(U-.07),1.15,W/2],k.wood,void 0,.01)),r.push(N(.26,.12,W-.4,[e*(U-.13),2.36,W/2],k.wood,void 0,.01)),r.push(N(.2,.14,W,[e*(U-.1),8,W/2],k.stone,void 0,.01));for(let e of[-1,1])for(let[t,n]of[[8,14.6],[16,22]]){let i=e*5.6,a=(t+n)/2,o=n-t;r.push(N(1.7,.1,o,[i,1.05,a],k.wood,void 0,.02));for(let e of[t+.9,n-.9])r.push(N(.14,1,1.3,[i-.55,.5,e],k.wood,void 0,.01)),r.push(N(.14,1,1.3,[i+.55,.5,e],k.wood,void 0,.01));r.push(N(1.2,.08,o-1.6,[i,.3,a],k.wood,void 0,.01));for(let e of[-1.45,1.45])r.push(N(.5,.08,o-.3,[i+e,.62,a],k.wood,void 0,.01),N(.4,.6,o-1,[i+e,.3,a],k.wood,void 0,.01));let s=Math.floor((o-1.6)/2);for(let n=0;n<=s;n++){let a=t+.9+n*((o-1.8)/s),c=i+e*-.3;r.push(P(.16,.18,.04,[c,1.12,a],k.brass,14)),r.push(P(.025,.025,.4,[c,1.34,a],k.brass,6)),r.push(A(M(new p(.21,16,8,0,Math.PI*2,0,Math.PI/2),[c,1.5,a],[0,0,0],[1,.7,1]),11)),r.push(P(.05,.05,.08,[c,1.8,a],k.brass,8))}for(let n=0;n<3;n++)r.push(N(.34,.1+.03*n,.5,[i+e*.5,1.15+.06*n,t+2.4+n*2.2+(n&1)*.1],k.cloth,[0,.2*n,0],.01))}for(let e=1;e<6;e++)for(let t of[-1,1])r.push(A(M(new i(1,3.7),[t*(U-.78),5.6,o[e]],[0,-t*Math.PI/2,0]),k.cloth)),r.push(P(.035,.035,1.2,[t*(U-.74),7.5,o[e]],k.brass,6,[Math.PI/2,0,0]));r.push(A(M(new i(1.9,W-2),[0,.012,W/2],[-Math.PI/2,0,0]),k.cloth));for(let e of[6.5,15.5,24.5]){let t=$e-3.6,n=1.3;r.push(A(M(new h(n,.05,8,32),[0,t,e],[Math.PI/2,0,0]),k.iron)),r.push(A(M(new h(n*.55,.035,8,28),[0,t+.2,e],[Math.PI/2,0,0]),k.iron));for(let i=0;i<12;i++){let a=i/12*Math.PI*2,o=Math.cos(a)*n,s=Math.sin(a)*n;r.push(P(.04,.05,.3,[o,t+.17,e+s],k.paper,8)),r.push(F(.07,[o,t+.42,e+s],12,8,6,[.8,1.7,.8]))}for(let i of[0,2.1,4.2])r.push(P(.015,.015,$e-t+.3,[Math.cos(i)*n*.5,t+($e-t+.3)/2,e+Math.sin(i)*n*.5],k.iron,4))}let s=new T(j(r),e);s.name=`hall-shell`,s.frustumCulled=!1;let c=[],u=[],d=[];for(let e=0;e<5;e++){let t=le(e),n=z.w/2,r=new f(rt(J(n,z.h)),10),a=r.getAttribute(`position`),o=r.getAttribute(`uv`),s=new Float32Array(a.count).fill(e);for(let e=0;e<a.count;e++){let n=a.getX(e),r=a.getY(e);o.setXY(e,.5-n/z.w,r/z.h),a.setXYZ(e,t+n,z.sill+r,W-.55)}r.setAttribute(`aWin`,new C(s,1)),c.push(r);let l=new T(new i(z.w*1.2,z.h*1.2),new v({visible:!1}));l.position.set(t,z.sill+z.h/2,W-.5),l.rotation.y=Math.PI,l.userData.win=e,l.name=`hall-pick-`+e,u.push(l),d.push(new _(t,z.sill+z.h*.55,W-3.5))}let m=new T(at(c),t);m.name=`hall-glass`,m.frustumCulled=!1;let y=[],b=[];for(let e=0;e<6;e++)for(let t of[-1,1]){let n=(o[e]+o[e+1])/2,r=1.05,i=5.9,s=new f(rt(J(r,i)),8),c=s.getAttribute(`position`),l=s.getAttribute(`uv`);for(let e=0;e<c.count;e++)l.setXY(e,(c.getX(e)+r)/(2*r),c.getY(e)/i);M(s,[t*(U-.1),2.7,n],[0,-t*Math.PI/2,0]),y.push(A(s,k.glow));let u=J(r,i,.2),d=J(r,i,0),p=rt(u),m=new a;m.moveTo(d[0].x,d[0].y);for(let e of d)m.lineTo(e.x,e.y);m.closePath(),p.holes.push(m),b.push(L(p,.16,.01,k.stone,[t*(U-.26),2.7,n],[0,-t*Math.PI/2,0],6))}let x=j(b),S=new T(j(y),n);return S.name=`hall-side`,S.frustumCulled=!1,s.geometry=j([s.geometry,x]),{stone:s,glass:m,side:S,proxies:u,winC:d}}function at(e){let t=e.map(e=>e.index?e.toNonIndexed():e),n=0;for(let e of t)n+=e.getAttribute(`position`).count;let r=new Float32Array(n*3),i=new Float32Array(n*2),a=new Float32Array(n),o=0;for(let e of t){let t=e.getAttribute(`position`),n=e.getAttribute(`uv`),s=e.getAttribute(`aWin`);for(let e=0;e<t.count;e++)r.set([t.getX(e),t.getY(e),t.getZ(e)],(o+e)*3),i.set([n.getX(e),n.getY(e)],(o+e)*2),a[o+e]=s.getX(e);o+=t.count}let s=new y;return s.setAttribute(`position`,new C(r,3)),s.setAttribute(`uv`,new C(i,2)),s.setAttribute(`aWin`,new C(a,1)),s.computeBoundingSphere(),s}var ot=`
precision highp float; uniform float uI; varying vec2 vUv;
void main() { vec2 d = (vUv - vec2(0.5, 0.35)) * vec2(1.5, 1.0); float g = 1.0 - smoothstep(0.0, 0.62, length(d)); float a = g * g * uI;
  gl_FragColor = vec4(vec3(0.09, 0.15, 0.34) * a, a); }`,st=class{group=new t;leafL=new t;leafR=new t;seam;night;constructor(e,t){let r=K.h-nt(K.hw)+.2,a=K.hw-.012,o=r-K.base,s=Ke(a,o,-1),c=Le(e,t,{tint:9071176});for(let[e,t]of[[this.leafL,-1],[this.leafR,1]]){let n=new T(s,c);n.name=`hall-far-leaf`,n.frustumCulled=!1,e.add(n),e.position.set(t*K.hw,K.base,W-.5),e.scale.x=-t,this.group.add(e)}let l=Ye([.55,.72,1]);this.seam=new T(new i(.7,o),l),this.seam.geometry.translate(0,o/2,0),this.seam.position.set(0,K.base,W-.78),this.seam.renderOrder=6,this.seam.frustumCulled=!1;let u=new n({vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:ot,uniforms:{uI:{value:0}},transparent:!0,depthWrite:!1,blending:2,side:2});this.night=new T(new i(2*K.hw,K.h),u),this.night.position.set(0,K.h/2,W+.25),this.night.renderOrder=5,this.night.frustumCulled=!1,this.group.add(this.seam,this.night),this.group.name=`hall-far-doors`}frame(e){let t=1.5,n=0,r=0;e!=null&&(n=Math.min(1.8,t*ye(Math.max(0,e-.15),13.5,.55)),r=Math.min(1.8,t*ye(Math.max(0,e-.17),15,.6))),this.leafL.rotation.y=-n,this.leafR.rotation.y=r;let i=Math.min(1,.5*(n+r)/t),a=this.seam.material,o=this.night.material;a.uniforms.uI.value=.85*(1-O(0,.5,i)),o.uniforms.uI.value=1.1*O(.1,.8,i)*(e==null?0:1-O(.62,.82,e))}},Y=1200;function ct(e){let t=t=>e.match(t)?.[1]??null,n=t(/\((V\d+) at my peak\)/),r=t(/(\d+\+) board games/),i=t(/(\d+\+) records/),a=t(/guitar \((\d+) years\)/),o=t(/(\d+) on Chess\.com/);return[{id:`hold`,label:`Bouldering`,fact:n&&`${n} at my peak`,short:n,light:[.32,.62,1]},{id:`meeple`,label:`Board games`,fact:r&&`${r} games`,short:r,light:[.3,.95,.5]},{id:`records`,label:`Records`,fact:i&&`${i} records and CDs`,short:i,light:[1,.3,.68]},{id:`guitar`,label:`Guitar`,fact:a&&`${a} years`,short:a&&`${a} years`,light:[1,.7,.24]},{id:`knight`,label:`Chess`,fact:o&&`${o} on Chess.com`,short:o,light:[.66,.46,1]}]}var X={ruby:[.82,.07,.14],garnet:[.62,.04,.12],rose:[.95,.32,.52],coral:[1,.42,.3],orange:[1,.46,.08],amber:[1,.68,.12],gold:[1,.82,.3],pale:[1,.93,.62],ivory:[.99,.96,.84],lime:[.62,.9,.2],emerald:[.05,.62,.3],green:[.1,.72,.38],jade:[.1,.55,.45],teal:[0,.62,.64],cyan:[.2,.82,.98],sky:[.4,.78,1],sapphire:[.08,.3,.88],cobalt:[.06,.2,.7],navy:[.04,.08,.36],indigo:[.2,.14,.62],violet:[.5,.24,.85],amethyst:[.62,.3,.8],plum:[.38,.08,.42],magenta:[.9,.18,.62],night:[.1,.07,.2],slate:[.16,.18,.34],brown:[.5,.26,.08],walnut:[.34,.16,.06]},lt=16,Z=(e,t)=>{e.fillStyle=e.strokeStyle=`rgb(${t*lt},0,0)`};function ut(e,t){let n=160-t,r=n*1.9,i=r-n,a=Math.sqrt(r*r-i*i)+t,o=Math.acos(-i/r);e.beginPath(),e.moveTo(160-n,1204),e.lineTo(160-n,a);for(let t=1;t<=28;t++){let i=Math.PI+(o-Math.PI)*(t/28);e.lineTo(160-n+r+r*Math.cos(i),a-r*Math.sin(i))}for(let t=27;t>=0;t--){let i=Math.PI+(o-Math.PI)*(t/28);e.lineTo(160+n-r-r*Math.cos(i),a-r*Math.sin(i))}e.lineTo(160+n,1204),e.closePath()}var Q=(e,t,n=0,r=0,i=1,a=0)=>{let o=Math.cos(a),s=Math.sin(a);e.beginPath(),t.forEach(([t,a],c)=>{let l=n+(t*o-a*s)*i,u=r+(t*s+a*o)*i;c?e.lineTo(l,u):e.moveTo(l,u)}),e.closePath(),e.fill()},$=(e,t,n,r)=>{e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill()},dt=(e,t,n,r,i,a=0)=>{e.beginPath(),e.ellipse(t,n,r,i,a,0,Math.PI*2),e.fill()},ft=(e,t,n,r,i)=>{e.lineWidth=i,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.stroke()};function pt(e,t,n,r,i,a,o=0){for(let s=0;s<r;s++){Z(e,s%2?i:a);let c=o+s/r*Math.PI*2,l=o+(s+1)/r*Math.PI*2,u=1800;e.beginPath(),e.moveTo(t,n),e.lineTo(t+Math.cos(c)*u,n+Math.sin(c)*u),e.lineTo(t+Math.cos(l)*u,n+Math.sin(l)*u),e.closePath(),e.fill()}}function mt(e,t,n,r,i,a,o){Z(e,o),ft(e,t,n,r,12),Z(e,i);for(let i=0;i<6;i++){let a=i/6*Math.PI*2+Math.PI/6;dt(e,t+Math.cos(a)*r*.55,n+Math.sin(a)*r*.55,r*.3,r*.17,a)}Z(e,a),$(e,t,n,r*.24)}var ht=[[-.16,-.42],[.16,-.42],[.2,-.3],[.64,-.18],[.64,.02],[.3,.08],[.36,.5],[.04,.5],[0,.26],[-.04,.5],[-.36,.5],[-.3,.08],[-.64,.02],[-.64,-.18],[-.2,-.3]],gt=[[.18,1],[.84,1],[.84,.9],[.78,.86],[.76,.7],[.78,.54],[.72,.38],[.64,.22],[.58,.1],[.55,.01],[.48,.1],[.44,.14],[.36,.2],[.3,.28],[.14,.43],[.05,.51],[.04,.59],[.1,.65],[.18,.63],[.28,.59],[.34,.54],[.4,.6],[.44,.68],[.36,.76],[.28,.83],[.24,.88],[.16,.9]],_t=(e,t,n)=>{mt(e,160,228,74,t,n,7),Z(e,1),e.lineWidth=34,ut(e,17),e.stroke(),Z(e,7),e.lineWidth=8,ut(e,40),e.stroke()},vt=(e,t,n,r)=>{Z(e,r),e.lineWidth=n,e.lineCap=`round`,e.lineJoin=`round`,e.beginPath(),t.forEach(([t,n],r)=>r?e.lineTo(t,n):e.moveTo(t,n)),e.stroke()},yt=[{pal:{0:[X.sapphire,X.cobalt,[.1,.42,.95]],6:[X.indigo,[.28,.22,.74],X.navy],8:[X.sky,X.cyan,[.7,.92,1]],1:[X.navy,X.gold],7:[X.gold,X.amber],2:[X.orange,[.95,.3,.05],[1,.6,.14]],3:[X.gold,X.amber],4:[X.ivory,X.pale],5:[X.night,X.navy,[.06,.06,.2]],9:[X.amber,X.gold]},paint(e){Z(e,0),e.fillRect(0,0,320,Y),pt(e,160,820,18,0,6,.1),Z(e,8),Q(e,[[44,584],[286,536],[286,1086],[44,1112]],0,0,1),Z(e,5),Q(e,[[52,596],[278,550],[278,1076],[52,1102]],0,0,1),Z(e,6),Q(e,[[44,556],[286,494],[286,604],[160,650],[44,626]]),Z(e,8),e.lineWidth=7,e.lineJoin=`round`,e.beginPath(),e.moveTo(44,626),e.lineTo(160,650),e.lineTo(286,604),e.stroke();for(let[t,n,r]of[[226,676,19],[92,752,18],[236,1010,18],[86,1040,17]])Z(e,2),dt(e,t,n,r,r*.76,.3);vt(e,[[170,800],[210,742],[228,684]],30,4),vt(e,[[140,806],[112,782],[96,758]],28,4),vt(e,[[156,790],[146,868],[136,930]],62,4),vt(e,[[136,930],[190,960],[232,1006]],34,4),vt(e,[[136,930],[108,986],[90,1034]],34,4),Z(e,4),$(e,148,742,33),_t(e,9,4)}},{pal:{0:[X.emerald,X.green,[.04,.5,.26]],6:[X.jade,[.08,.42,.34],X.teal],8:[X.lime,[.45,.82,.3]],1:[X.garnet,X.gold],7:[X.gold,X.pale],2:[X.ruby,[.9,.12,.18],X.garnet],3:[X.amber,X.gold,X.orange],4:[X.ivory,X.pale],5:[X.night,X.slate],9:[X.cyan,X.sapphire,X.sky]},paint(e){Z(e,0),e.fillRect(0,0,320,Y),pt(e,160,800,24,0,6,.2),Z(e,5),$(e,160,814,134),Z(e,8),ft(e,160,814,134,10),Z(e,4),Q(e,ht,160,820,172),$(e,160,820-172*.7,51.6),Z(e,3),Q(e,[[-.2,-.36],[-.05,-.36],[-.12,.46],[-.32,.46]],160,820,172),_t(e,3,2)}},{pal:{0:[X.magenta,[.78,.14,.58],X.plum],6:[X.violet,X.amethyst,[.42,.2,.74]],8:[X.rose,[1,.55,.7]],1:[X.night,X.gold],7:[X.gold,X.pale],2:[X.coral,[1,.36,.22],X.orange],3:[X.gold,X.amber],4:[X.ivory,X.pale],5:[X.night,[.14,.08,.26],[.08,.05,.18]],9:[[.2,.12,.38],X.plum,X.indigo]},paint(e){Z(e,0),e.fillRect(0,0,320,Y),pt(e,150,830,26,0,6,.05),Z(e,5),$(e,150,836,112),Z(e,4),ft(e,150,836,108,12),Z(e,8),ft(e,150,836,76,6),Z(e,8),ft(e,150,836,56,5),Z(e,2),$(e,150,836,36),Z(e,4),$(e,150,836,10),Z(e,4);for(let t of[-2.5,.65])e.lineWidth=12,e.lineCap=`round`,e.beginPath(),e.arc(150,836,90,t,t+.8),e.stroke();vt(e,[[248,618],[246,726],[196,806]],22,3),Z(e,3),$(e,248,618,30),Z(e,5),$(e,248,618,11),Z(e,4),Q(e,[[-22,-12],[22,-12],[22,12],[-22,12]],190,812,1,.64),_t(e,8,3)}},{pal:{0:[X.ruby,X.garnet,[.7,.08,.2]],6:[X.coral,[.92,.3,.16],X.orange],8:[X.pale,X.gold],1:[X.walnut,X.gold],7:[X.gold,X.pale],2:[X.amber,X.gold,[1,.76,.28],X.orange],3:[X.walnut,[.34,.14,.05]],4:[X.ivory,X.pale],5:[X.night,[.18,.09,.08]],9:[X.ruby,X.garnet]},paint(e){Z(e,0),e.fillRect(0,0,320,Y),pt(e,160,800,20,0,6,.2),e.save(),e.translate(158,790),e.rotate(.34),e.scale(.8,.8),Z(e,2),e.fillRect(-19,-360,38,400),Z(e,4),e.beginPath(),e.moveTo(-30,-360),e.lineTo(30,-360),e.lineTo(26,-470),e.lineTo(-26,-470),e.closePath(),e.fill(),Z(e,5);for(let[t,n]of[[-14,-440],[-14,-408],[-14,-376],[14,-440],[14,-408],[14,-376]])$(e,t,n,6);Z(e,5),dt(e,0,70,114,118),dt(e,0,214,146,146),Z(e,4),dt(e,0,70,104,108),dt(e,0,214,136,136),e.fillRect(-84,100,168,90),Z(e,2),ft(e,0,180,62,16),Z(e,5),$(e,0,180,44),Z(e,3),e.fillRect(-62,290,124,24),e.restore(),_t(e,8,3)}},{pal:{0:[X.violet,X.amethyst,[.4,.18,.78]],6:[X.indigo,[.28,.2,.74],X.plum],8:[X.pale,X.gold,X.ivory],1:[X.night,X.gold],7:[X.gold,X.pale],2:[X.ivory,[.95,.9,.8],X.pale],3:[X.gold,X.amber],4:[X.cyan,X.sky],5:[X.night,[.1,.06,.24]],9:[X.ruby,X.garnet]},paint(e){Z(e,0),e.fillRect(0,0,320,Y);for(let t=-1;t<16;t++)for(let n=-1;n<6;n++)Z(e,(n+t)%2?0:6),Q(e,[[0,-45],[45,0],[0,45],[-45,0]],n*90+(t&1?45:0),t*90+45);let t=gt.map(([e,t])=>[e-.5,t-.5]);Z(e,3),$(e,160,810,140),Z(e,5),$(e,160,810,128),Z(e,2),Q(e,t,168,818,262),Z(e,5),$(e,141.8,765.6,9),Z(e,3),Q(e,[[.6,.15],[.76,.4],[.72,.5],[.62,.3],[.5,.2]].map(([e,t])=>[e-.5,t-.5]),168,818,262),Z(e,3),Q(e,[[.1,.92],[.9,.92],[.92,.99],[.08,.99]].map(([e,t])=>[e-.5,t-.5]),168,818,262),_t(e,3,9)}}],bt=(e,t,n=0)=>{let r=Math.sin(e*127.1+t*311.7+n*74.7)*43758.5453;return r-Math.floor(r)};function*xt(e,t,n,r=100){let i=document.createElement(`canvas`);i.width=320,i.height=Y;let a=i.getContext(`2d`,{willReadFrequently:!0});a.imageSmoothingEnabled=!1,e.paint(a);let o=a.getImageData(0,0,320,Y).data,s=new Uint8Array(320*Y);for(let e=0;e<s.length;e++)s[e]=Math.min(9,Math.round(o[e*4]/lt));yield;let c=Math.ceil(Y/26)+2,l=new Float32Array(735),u=new Float32Array(735),d=ve(t);for(let e=0;e<c;e++)for(let t=0;t<15;t++)l[e*15+t]=(t-.5+.1+d()*.8)*26,u[e*15+t]=(e-.5+.1+d()*.8)*26;let f=n.getContext(`2d`),p=ve(t*7+1);for(let n=0;n<Y;n+=r){let i=Math.min(r,Y-n),a=f.createImageData(320,i),o=a.data;for(let r=n;r<n+i;r++){let i=Math.floor(r/26)+1;for(let a=0;a<320;a++){let c=Math.floor(a/26)+1,d=1e9,f=1e9,m=0;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){let n=(i+e)*15+(c+t),o=a-l[n],s=r-u[n],p=o*o+s*s;p<d?(f=d,d=p,m=n):p<f&&(f=p)}let h=(Math.sqrt(f)-Math.sqrt(d))*.5,g=s[r*320+a],_=(e,t)=>s[Math.min(1199,Math.max(0,t))*320+Math.min(319,Math.max(0,e))]!==g,v=h<1.7||_(a+2,r)||_(a,r+2)||_(a-2,r)||_(a,r-2);(r>=538&&r<542||r>=1118&&r<1122)&&(v=!0);let y=((r-n)*320+a)*4;if(v){o[y]=10,o[y+1]=8,o[y+2]=12,o[y+3]=255;continue}let b=e.pal[g]??e.pal[0],ee=bt(m,g,t),x=b[Math.floor(ee*b.length)%b.length],S=(.62+.5*Math.min(1,h/11))*(.84+.3*bt(m,g+3,t))*(.94+.12*p()),te=.92+.12*Math.sin((a*.5+r*.9)*.05+ee*40);o[y]=Math.min(255,x[0]*S*te*255),o[y+1]=Math.min(255,x[1]*S*te*255),o[y+2]=Math.min(255,x[2]*S*te*255),o[y+3]=255}}f.putImageData(a,0,n),yield}f.save(),ut(f,0),f.rect(0,0,320,Y),f.clip(`evenodd`),f.fillStyle=`#05040a`,f.fillRect(0,0,320,Y),f.restore()}function St(){let e=document.createElement(`canvas`);e.width=1600,e.height=Y;let t=e.getContext(`2d`);t.fillStyle=`#05040a`,t.fillRect(0,0,e.width,e.height);function*n(){for(let e=0;e<5;e++){let n=document.createElement(`canvas`);n.width=320,n.height=Y;for(let t of xt(yt[e],11+e*17,n))yield-1;t.drawImage(n,e*320,0),yield e}}return{canvas:e,gen:n()}}var Ct=ct(e.bio.offBoard),wt=`
attribute vec3 aAxis; attribute vec4 aBeam; attribute vec4 aCol; // x = length, y = width0, z = width1, w = seed; rgb + window
varying vec2 vUv; varying vec4 vCol; varying float vSeed;
void main() {
  vUv = uv; vSeed = aBeam.w; vCol = aCol;
  vec3 axisW = normalize(mat3(modelMatrix) * aAxis);
  vec3 o = (modelMatrix * vec4(position, 1.0)).xyz;
  vec3 c = o + axisW * aBeam.x * uv.x;
  vec3 lat = normalize(cross(axisW, cameraPosition - c));
  float wd = mix(aBeam.y, aBeam.z, uv.x);
  gl_Position = projectionMatrix * viewMatrix * vec4(c + lat * (uv.y - 0.5) * wd, 1.0);
}`,Tt=`
precision highp float;
uniform float uI, uTime, uK[5]; varying vec2 vUv; varying vec4 vCol; varying float vSeed;
float h(float x) { return fract(sin(x * 91.3 + vSeed * 17.0) * 43758.5); }
float vn(float x) { float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(h(i), h(i + 1.0), f); }
void main() {
  float across = 1.0 - abs(vUv.y - 0.5) * 2.0; across = pow(max(across, 0.0), 1.8);
  float along = smoothstep(0.0, 0.06, vUv.x) * pow(1.0 - vUv.x, 1.25);
  float flick = 0.74 + 0.26 * vn(vUv.x * 4.0 - uTime * 0.25 + vSeed * 9.0);
  float a = across * along * flick * uI * uK[int(vCol.w + 0.5)];
  gl_FragColor = vec4(vCol.rgb * a, a);
}`,Et=`
attribute float aWin; varying vec2 vUv; varying float vW; varying vec3 vP;
void main() { vUv = uv; vW = aWin; vec4 w = modelMatrix * vec4(position, 1.0); vP = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,Dt=`
precision highp float;
uniform sampler2D tGlass; uniform float uGain[5], uTime, uDissolve, uVis, uCopy; varying vec2 vUv; varying float vW; varying vec3 vP;
${pe}
float h13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vn(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h13(i), h13(i + vec3(1,0,0)), f.x), mix(h13(i + vec3(0,1,0)), h13(i + vec3(1,1,0)), f.x), f.y), mix(mix(h13(i + vec3(0,0,1)), h13(i + vec3(1,0,1)), f.x), mix(h13(i + vec3(0,1,1)), h13(i + vec3(1,1,1)), f.x), f.y), f.z); }
void main() {
  if (uDissolve < 0.995 && vn(vP * 2.6 + vec3(3.0, 1.0, 7.0)) * 0.8 + 0.18 * vn(vP * 13.0) >= uDissolve * 1.25 - 0.12) discard;
  vec2 uv = vec2((vW + vUv.x) / 5.0, vUv.y);
  vec3 c = texture2D(tGlass, uv).rgb;
  float g = uGain[int(vW + 0.5)];
  // sun behind the glass: the lower middle of each lancet burns a little warmer, and the light breathes
  float glow = 0.9 + 0.22 * (1.0 - abs(vUv.x - 0.5) * 1.6) * (1.0 - vUv.y * 0.6);
  float shimmer = 0.97 + 0.03 * sin(uTime * 0.7 + vW * 1.7 + vUv.y * 6.0);
  vec3 col = c * g * glow * shimmer * uVis;
  col *= 1.0 - 0.55 * uCopy * (1.0 - laneMask());
  gl_FragColor = vec4(col, 1.0);
}`,Ot=`
attribute vec4 aD; uniform float uTime, uI, uScale; varying float vA;
void main() {
  vec3 p = position + vec3(sin(uTime * 0.21 + aD.x * 6.28) * 0.5, sin(uTime * 0.17 + aD.y * 6.28) * 0.4 + uTime * 0.025 * aD.z, cos(uTime * 0.19 + aD.w * 6.28) * 0.5);
  vec4 mv = viewMatrix * modelMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vA = uI * (0.35 + 0.65 * fract(aD.x * 7.3 + uTime * 0.15));
  gl_PointSize = clamp(uScale * (0.5 + aD.z * 0.9) / -mv.z, 1.0, 5.0);
}`,kt=`precision highp float; varying float vA; void main() { float d = length(gl_PointCoord - 0.5) * 2.0; float a = (1.0 - smoothstep(0.2, 1.0, d)) * vA; gl_FragColor = vec4(vec3(1.0, 0.82, 0.58) * a, a); }`,At=`
precision highp float; uniform float uI, uOpen; uniform vec3 uCol; varying vec2 vUv;
void main() { float z = vUv.y; float w = (0.16 + 0.75 * z) * (0.35 + 0.65 * uOpen); float across = 1.0 - smoothstep(0.0, w, abs(vUv.x - 0.5) * 2.0);
  float len = pow(1.0 - z, 1.5) * smoothstep(0.0, 0.03, z); float a = across * across * len * uI * (0.15 + 0.85 * uOpen); gl_FragColor = vec4(uCol * a, a); }`,jt=`
precision highp float; uniform float uA; uniform vec3 uCol; varying vec2 vUv;
void main() { vec2 d = vUv - 0.5; float r = length(d * vec2(1.35, 1.0)); float core = 1.0 - smoothstep(0.0, 0.62, r);
  float a = clamp(uA * (0.4 + 1.1 * core * core), 0.0, 1.0); gl_FragColor = vec4(uCol * a * 0.9, a); }`,Mt=`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;function Nt(e,t,r,i=2){return new n({vertexShader:t??Mt,fragmentShader:e,uniforms:r,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,side:i})}var Pt=class{built=!1;root=new t;front=new t;flood={uA:{value:0},uCol:{value:new x(1,.72,.42)}};proxies=[];shH;shD;hu;leafL;leafR;bu={uI:{value:0},uTime:{value:0},uK:{value:[.4,.4,.4,.4,.4]}};du={uTime:{value:0},uI:{value:0},uScale:{value:900}};hdu={uTime:{value:0},uI:{value:0},uScale:{value:900}};viewH=900;doorB={uI:{value:0},uTime:{value:0},uK:{value:[1,1,1,1,1]}};su={uI:{value:0},uOpen:{value:0},uCol:{value:new x(1,.72,.42)}};gu={tGlass:{value:null},uGain:{value:[1,1,1,1,1]},uTime:{value:0},uDissolve:{value:0},uVis:{value:1},uCopy:{value:0},uLane:null,uRes:null,uLaneOn:null};fSeam;far;doorBeams;spill;doorDust;hallDust;hallBeams;floodQuad;tmp=new _;painter=null;atlasTex=null;get glassDone(){return!this.painter}buildMs=0;pump(e=3){let t=this.painter;if(!t)return;let n=performance.now();for(;performance.now()-n<e;){let e=t.gen.next();if(e.done){this.painter=null,this.atlasTex&&(this.atlasTex.needsUpdate=!0);return}e.value===1&&this.atlasTex&&(this.atlasTex.needsUpdate=!0)}}winWorld=[];winCol=[];toWorld(e,t,n,r=new _){return r.set(e,t,n).applyMatrix4(this.root.matrixWorld)}toLocal(e,t=new _){return t.copy(e).applyMatrix4(new oe().copy(this.root.matrixWorld).invert())}build(e){if(this.built)return;this.built=!0;let t=performance.now(),a=e;this.shH=xe(a),this.shD=xe(a),this.shD.uTymC.value.set(0,2.9+.95),this.shD.uWarmCol.value.set(1,.72,.42),this.shH.uWarmCol.value.set(1,.78,.5),this.hu=Fe();let o=St();this.painter=o;let c=new ae(o.canvas);c.colorSpace=``,c.generateMipmaps=!0,c.minFilter=te,c.anisotropy=Math.min(8,e.renderer.capabilities.getMaxAnisotropy()),c.needsUpdate=!0,this.atlasTex=c,this.hu.tGlass.value=c,this.gu.tGlass.value=c,this.gu.uLane=this.shH.uLane,this.gu.uRes=this.shH.uRes,this.gu.uLaneOn=this.shH.uLaneOn,this.gu.uCopy=this.shH.uCopy,Ct.forEach((e,t)=>{this.hu.uWinCol.value[t].setRGB(e.light[0],e.light[1],e.light[2]),this.winCol.push(this.hu.uWinCol.value[t].clone())}),this.hu.uGain.value=this.gu.uGain.value;let l=it(Le(this.shH,this.hu,{tint:6973282}),new n({vertexShader:Et,fragmentShader:Dt,uniforms:this.gu,side:2}),Le(this.shH,this.hu,{side:2}));this.root.add(l.stone,l.glass,l.side,...l.proxies),this.proxies=l.proxies,this.root.position.set(E.at[0],E.at[1],E.at[2]),this.root.rotation.y=E.yaw,this.root.name=`hall`,this.root.userData.noReflect=!0;let u=Xe(this.shD);this.leafL=u.leafL,this.leafR=u.leafR,this.front.add(u.stone,u.steps,u.glow,u.leafL,u.leafR),this.front.scale.setScalar(Ue),this.front.rotation.y=Math.PI,this.front.position.set(0,0,We*Ue),this.front.name=`hall-front`,this.root.add(this.front),this.fSeam=new T(new i(.8,V-.2),Ye([1,.72,.42])),this.fSeam.geometry.translate(0,(V-.2)/2,0),this.fSeam.position.set(0,0,-.3),this.fSeam.renderOrder=6,this.fSeam.frustumCulled=!1,this.front.add(this.fSeam),this.far=new st(this.shH,this.hu),this.root.add(this.far.group);let d=new T(new i(13,9),new v({map:Me(`radial`,128),color:0,transparent:!0,opacity:.5,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.set(0,-.72,1),d.renderOrder=-2,this.front.add(d);{let t=[],n=[],a=[],o=[],c=[],l=[];for(let e=0;e<9;e++){let r=(e/8-.5)*1,i=-.04-.1*Math.abs(r)-.05*(e*7%3),s=7.5+e%3*1.4,u=[Math.sin(r)*Math.cos(i),Math.sin(i),Math.cos(r)*Math.cos(i)],d=t.length/3;for(let[i,l]of[[0,0],[1,0],[0,1],[1,1]])t.push(0,1.8,-.9),n.push(i,l),a.push(u[0],u[1],u[2]),o.push(s*Ue,(.25+e%2*.15)*Ue,(1.4+.5*Math.abs(r))*Ue,e+.37),c.push(1,.7,.4,0);l.push(d,d+1,d+2,d+2,d+1,d+3)}let u=new y;u.setAttribute(`position`,new r(t,3)),u.setAttribute(`uv`,new r(n,2)),u.setAttribute(`aAxis`,new r(a,3)),u.setAttribute(`aBeam`,new r(o,4)),u.setAttribute(`aCol`,new r(c,4)),u.setIndex(l),u.boundingSphere=new m(new _(0,1,4),60),this.doorBeams=new T(u,Nt(Tt,wt,this.doorB)),this.doorBeams.frustumCulled=!1,this.doorBeams.renderOrder=6,this.front.add(this.doorBeams);let d=new i(2,9);d.applyMatrix4(new oe().makeRotationX(-Math.PI/2).setPosition(0,.03,4));let f=d.getAttribute(`uv`);for(let e=0;e<f.count;e++)f.setY(e,1-f.getY(e));this.spill=new T(d,Nt(At,null,this.su)),this.spill.renderOrder=5,this.spill.frustumCulled=!1,this.front.add(this.spill);let p=e.q.dust?160:0,h=new Float32Array(p*3),g=new Float32Array(p*4);for(let e=0;e<p;e++){h[e*3]=(Math.random()-.5)*3.6,h[e*3+1]=.3+Math.random()*3.6,h[e*3+2]=-.8+Math.random()*6.5;for(let t=0;t<4;t++)g[e*4+t]=Math.random()}let v=new y;v.setAttribute(`position`,new C(h,3)),v.setAttribute(`aD`,new C(g,4)),v.boundingSphere=new m(new _(0,2,2.5),30),this.doorDust=new s(v,Nt(kt,Ot,this.du)),this.doorDust.frustumCulled=!1,this.doorDust.renderOrder=7,this.front.add(this.doorDust)}{let t=[],n=[],i=[],a=[],o=[],c=[];for(let e=0;e<5;e++){let r=Ct[e].light,s=le(e);for(let l=0;l<3;l++){let u=(l-1)*.5,d=new _(.1-.02*l,-.5-.05*l,-.86).normalize(),f=t.length/3;for(let[c,f]of[[0,0],[1,0],[0,1],[1,1]])t.push(s+u,z.sill+z.h*(.38+.2*l),W-.7),n.push(c,f),i.push(d.x,d.y,d.z),a.push(28-l*3,1.2+.4*l,3.6+.8*l,e*3+l+.4),o.push(r[0],r[1],r[2],e);c.push(f,f+1,f+2,f+2,f+1,f+3)}}let l=new y;l.setAttribute(`position`,new r(t,3)),l.setAttribute(`uv`,new r(n,2)),l.setAttribute(`aAxis`,new r(i,3)),l.setAttribute(`aBeam`,new r(a,4)),l.setAttribute(`aCol`,new r(o,4)),l.setIndex(c),l.boundingSphere=new m(new _(0,6,W/2),60),this.hallBeams=new T(l,Nt(Tt,wt,this.bu)),this.hallBeams.frustumCulled=!1,this.hallBeams.renderOrder=6,this.root.add(this.hallBeams);let u=e.q.dust?260:0,d=new Float32Array(u*3),f=new Float32Array(u*4);for(let e=0;e<u;e++){d[e*3]=(Math.random()-.5)*2*(U-1),d[e*3+1]=.6+Math.random()*11,d[e*3+2]=3+Math.random()*(W-5);for(let t=0;t<4;t++)f[e*4+t]=Math.random()}let p=new y;p.setAttribute(`position`,new C(d,3)),p.setAttribute(`aD`,new C(f,4)),p.boundingSphere=new m(new _(0,6,W/2),60),this.hallDust=new s(p,Nt(kt,Ot,this.hdu)),this.hallDust.frustumCulled=!1,this.hallDust.renderOrder=7,this.root.add(this.hallDust)}this.floodQuad=new T(new i(2,2),Nt(jt,`varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,this.flood,0)),this.floodQuad.material.depthTest=!1,this.floodQuad.renderOrder=100,this.floodQuad.frustumCulled=!1,this.floodQuad.userData.noReflect=!0,this.floodQuad.visible=!1,e.scene.add(this.root,this.floodQuad),this.root.visible=!1,this.root.updateMatrixWorld(!0);for(let e=0;e<5;e++)this.winWorld.push(this.toWorld(le(e),z.sill+z.h*.5,W-2.2));Pe(a,this.root,this.floodQuad),this.buildMs=performance.now()-t}frame(e,t){if(!this.built)return;let n=e.hallIn>.002||e.facadeIn>.002;if(this.root.visible=n,!n){this.floodQuad.visible=this.flood.uA.value>.003;return}let{shH:r,shD:i,hu:a}=this;r.uDissolve.value=e.hallIn,i.uDissolve.value=e.facadeIn,r.uTime.value=i.uTime.value=e.t,r.uCopy.value=e.copy*.8,i.uCopy.value=e.copy;let o=1.5,s=o,c=o,l=1;if(e.u!=null){let t=e.u;s=Math.min(1.78,o*ye(Math.max(0,t-.1),10.5,.5)),c=Math.min(1.78,o*ye(Math.max(0,t-.12),11.5,.55)),l=D(.5*(s+c)/o)}this.leafL.rotation.y=s,this.leafR.rotation.y=-c;let u=e.u??1,d=O(.4,.47,u)*(1-O(.55,.65,u)),f=e.u==null?0:1-O(.52,.64,u);i.uWarm.value=(.04+.9*O(.1,.4,u)*(.4+.6*l))*(1+.5*d),i.uAmb.value=.8,i.uMoon.value=3,i.uGlow.value=.35+1.3*O(.1,.5,u),i.uLightPos.value.copy(this.front.localToWorld(this.tmp.set(0,1.9,-1.4))),i.uLight2Pos.value.copy(i.uLightPos.value),this.doorB.uI.value=1.1*l*f*(.85+.15*Math.sin(e.t*.9)),this.doorB.uTime.value=e.t,this.su.uI.value=1.3*l*f,this.su.uOpen.value=l,this.du.uTime.value=e.reduced?0:e.t,this.du.uI.value=.9*Math.max(l*f,e.hallIn*.5),this.du.uScale.value=this.viewH*.9,this.hdu.uScale.value=this.viewH*.9,this.doorBeams.visible=this.spill.visible=this.doorDust.visible=f>.01;let p=e.hallIn,m=e.dive;for(let t=0;t<5;t++){let n=e.hover[t]??0,r=e.active[t]??0,i=e.glint[t]??0,o=m&&m.i===t?m.k:0,s=Math.max(n,r,.55*i,o);a.uWinPos.value[t].copy(this.winWorld[t]),a.uWinI.value[t]=(.28+.8*s+.5*o)*p,a.uSunK.value[t]=.35+.65*s,this.bu.uK.value[t]=(.35+.65*s)*1.45,this.gu.uGain.value[t]=1.3+.55*n+.3*r+.45*i+1.4*o}this.far.frame(e.exit);{let t=e.u??1;this.fSeam.material.uniforms.uI.value=e.u==null?0:.95*(1-O(0,.35,l))*(1-O(.1,.2,t))*(.9+.1*Math.sin(e.t*1.7))}this.gu.uTime.value=e.reduced?0:e.t,this.gu.uDissolve.value=e.hallIn,this.bu.uI.value=1.1*p,this.bu.uTime.value=e.reduced?0:e.t,a.uHallLit.value=1,a.uProj.value=.9*p,this.toLocal(t,a.uCamL.value),r.uWarm.value=.5*p,r.uWarm2.value=.45*p,r.uGlow.value=1.6,r.uAmb.value=.2,r.uMoon.value=.22,this.toWorld(0,3.4,8,r.uLightPos.value),this.toWorld(0,3.4,22,r.uLight2Pos.value),this.hallBeams.visible=this.hallDust.visible=e.hallIn>.05,this.floodQuad.visible=this.flood.uA.value>.003,this.hdu.uTime.value=e.reduced?0:e.t,this.hdu.uI.value=.8*p}dispose(){this.root.removeFromParent(),this.floodQuad.removeFromParent()}},Ft=null,It=()=>Ft??=new Pt;export{D as a,ge as c,Pe as d,ve as f,z as i,be as l,It as n,_e as o,O as p,W as r,he as s,Ct as t,me as u};