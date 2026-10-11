import{Dt as e,Hn as t,Jt as n,L as r,Rt as i,T as a,Vn as o,br as s,c,jt as l,m as u,s as d,wr as ee,xr as f,yr as te}from"./three.core-rbApIkjy.js";import{n as ne}from"./three.module-BfDJo5X8.js";import{F as re,O as p,P as ie,_ as ae}from"./main-BfTGMAJq.js";import{a as oe,i as se,n as ce,r as le}from"./post-7OqpY8sP.js";var m=`
vec3 pcurl(vec3 p) {
  // cheap divergence-free-ish field from a sum of rotated sines
  vec3 q = p;
  vec3 a = vec3(sin(q.y * 1.7 + q.z * 0.9), sin(q.z * 1.3 + q.x * 1.1), sin(q.x * 1.5 + q.y * 0.7));
  vec3 b = vec3(cos(q.z * 2.3 - q.y * 0.6), cos(q.x * 2.1 - q.z * 0.8), cos(q.y * 1.9 - q.x * 1.2));
  return cross(a, b) + 0.5 * vec3(sin(q.y * 3.1 + 1.3), sin(q.z * 2.9 + 2.1), sin(q.x * 3.3 + 0.7));
}`,h=[`swirl`,`pour`,`print`,`shatter`,`sweep`,`gravity`,`threads`],g={name:`sweep`,orbits:`shatter`,brain:`threads`,secretary:`print`,watchdog:`sweep`,pushup:`gravity`,zeta:`print`,table:`gravity`,phase:`swirl`,counties:`sweep`,dyads:`pour`,surface:`print`,cloudflare:`threads`,appfolio:`shatter`,recruiting:`pour`,chomchom:`gravity`,uchicago:`print`,mathecon:`sweep`,compass:`swirl`,hold:`pour`,meeple:`gravity`,guitar:`threads`,turntable3d:`sweep`,knight:`shatter`,bust:`print`,epilogue:`pour`},ue=e=>Math.max(0,h.indexOf(e&&g[e]||`swirl`)),de={zeta:{shape:`pixel`,size:2.4,sharp:1,thin:.6,gain:.26},surface:{shape:`ring`,size:3,sharp:.6,thin:.7,gain:.22},uchicago:{solid:1,size:1.7,sharp:.35,opaque:.5,thin:.3,gain:.5},brain:{shape:`disc`,size:1.6,sharp:-1,gain:.9},counties:{size:.6,sharp:.2,gain:2},table:{shape:`streak`,streak:4,size:1,gain:1},bust:{solid:.85,size:1.3,opaque:.4,gain:.65},meeple:{solid:.7,size:1.3,sharp:.3,opaque:.3,gain:.65},knight:{solid:.8,size:1.25,sharp:.3,opaque:.35,gain:.65}},fe=-6.6,pe=[p[0],p[1]+.3,p[2]];function me(e){return e?{s1:[+(e.shape===`pixel`),+(e.shape===`ring`),e.shape===`streak`?Math.max(1,e.streak??4):1,Math.max(-1,Math.min(1,e.sharp??0))],s2:[Math.max(0,Math.min(1,e.solid??0)),Math.max(0,Math.min(1,e.opaque??0)),e.gain??1,Math.max(0,Math.min(.9,e.thin??0))],size:e.size??1}:{s1:[0,0,1,0],s2:[0,0,1,0],size:1}}var _=`
struct MPath { vec3 p; float kc; float fl; float flash; float tk; float ga; vec3 fcol; };
float mp_ss(float a, float b, float x) { float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
vec3 mp_bez(vec3 p0, vec3 p1, vec3 p2, vec3 p3, float u) { float v = 1.0 - u; return v * v * v * p0 + 3.0 * v * v * u * p1 + 3.0 * v * u * u * p2 + u * u * u * p3; }
vec3 mp_rotY(vec3 p, vec3 c, float th) { float cs = cos(th), sn = sin(th); vec3 d = p - c; return c + vec3(cs * d.x + sn * d.z, d.y, -sn * d.x + cs * d.z); }

MPath mp_path(int sid, float m, vec3 a, vec3 b, vec3 aL, vec3 bL, vec3 cA, vec3 cB) {
  const float PI = 3.14159265;
  MPath o; o.flash = 0.0; o.tk = 1.0; o.ga = 1.0; o.fcol = vec3(1.0, 0.85, 0.6);
  vec4 r = rnd;
  if (sid == 1) {
    // ---- pour: a thin liquid stream along an arc that swings past the hub screen
    float hrel = clamp((a.y - cA.y) / max(0.5, (uBndA.y - uBndA.x) * uScaleA) + 0.5, 0.0, 1.0);
    float ord = mix(r.x, 1.0 - hrel, 0.55);
    float u = mp_ss(ord * 0.5, ord * 0.5 + 0.5, m);
    float pull = 0.92 * mp_ss(4.0, 16.0, distance(cA, cB));
    vec3 c1 = mix(cA + vec3(0.0, 3.5, 0.0), uHub, pull), c2 = mix(cB + vec3(0.0, 3.5, 0.0), uHub, pull);
    float bump = pow(max(sin(PI * u), 0.0), 0.7), wid = mix(1.0, 0.2, bump);
    vec3 off = mix(a - cA, b - cB, mp_ss(0.2, 0.8, u)) * wid;
    o.p = mp_bez(cA, c1, c2, cB, u) + off;
    o.kc = mp_ss(0.35, 0.65, u); o.fl = max(sin(PI * u), 0.0); o.tk = 0.2;
    o.p.y += sin(u * 18.0 - uTime * 3.0 + r.y * 6.0) * 0.16 * o.fl;
    o.ga = mix(1.0, 0.28, bump); o.flash = 0.15 * o.fl; o.fcol = vec3(0.75, 0.9, 1.0);
  } else if (sid == 2) {
    // ---- print: 24 slabs, bottom first. A slab's particles lift off the source, hover above their layer, then drop in
    float H = max(0.2, (uBndB.y - uBndB.x) * uScaleB);
    float yb = clamp((b.y - (cB.y - 0.5 * H)) / H, 0.0, 1.0);
    float yq = (floor(yb * 23.999) + 0.5) / 24.0;
    float tArr = 0.34 + 0.56 * yq + (r.y - 0.5) * 0.012;
    float u = clamp((m - (tArr - 0.30)) / 0.30, 0.0, 1.0);
    float ex = mp_ss(0.0, 0.82, u);
    float hover = b.y + 2.2 + 2.0 * r.z;
    float y = mix(mix(a.y, hover, mp_ss(0.0, 0.45, u)), b.y, mp_ss(0.72, 1.0, u));
    o.p = vec3(mix(a.x, b.x, ex), y, mix(a.z, b.z, ex));
    o.kc = mp_ss(0.4, 0.95, u); o.fl = max(sin(PI * u), 0.0); o.tk = 0.15;
    float dt = (m - tArr) / 0.03; o.flash = 1.1 * exp(-dt * dt) * step(0.001, m) * step(m, 0.999); o.fcol = vec3(1.0, 0.82, 0.55);
  } else if (sid == 3) {
    // ---- shatter: burst into a debris sphere around the midpoint, hang, assemble
    vec3 cm = 0.5 * (cA + cB);
    vec3 dir = normalize(r.yzw * 2.0 - 1.0 + vec3(0.0001));
    vec3 M = cm + dir * (5.0 + 8.0 * r.w) * vec3(1.0, 0.7, 1.0);
    float k = clamp((m - r.x * 0.28) / 0.72, 0.0, 1.0);
    vec3 P;
    if (k < 0.5) { float u = k * 2.0, e = 1.0 - (1.0 - u) * (1.0 - u) * (1.0 - u); P = mix(a, M, e); }
    else { float u = (k - 0.5) * 2.0, e = u * u * (3.0 - 2.0 * u); P = mix(M, b, e); }
    o.p = mp_rotY(P, cm, (r.z - 0.5) * 7.0 * sin(PI * k));
    o.kc = mp_ss(0.38, 0.62, k); o.fl = max(sin(PI * k), 0.0); o.tk = 0.45;
    o.flash = 0.3 * o.fl; o.fcol = vec3(1.0, 0.7, 0.45);
  } else if (sid == 4) {
    // ---- sweep: a planar front crosses the target along its own x axis
    float s = clamp((bL.x - uBndB.z) / max(0.1, uBndB.w - uBndB.z), 0.0, 1.0);
    float tF = 0.28 + 0.46 * s + (r.y - 0.5) * 0.03; // front arrival time: never before 0.26 (u must be 0 at mix 0) nor after ~0.76
    float u = mp_ss(tF - 0.26, tF, m);
    vec3 ax = vec3(cos(uPlaceB.w), 0.0, -sin(uPlaceB.w));
    o.p = mix(a, b, u) + ax * 1.1 * sin(PI * u) * (0.4 + r.z) + vec3(0.0, 1.0, 0.0) * 0.6 * sin(PI * u) * sin(s * 16.0 + u * 6.0);
    o.kc = mp_ss(0.35, 0.8, u); o.fl = max(sin(PI * u), 0.0); o.tk = 0.25;
    float dt = (m - tF) / 0.028; o.flash = 0.6 * exp(-dt * dt) * step(0.001, m) * step(m, 0.999); o.fcol = vec3(0.65, 0.88, 1.0);
  } else if (sid == 5) {
    // ---- gravity: free fall to the floor, one bounce with a splash, then a lift into the target
    const float T1 = 0.36, T2 = 0.52;
    // the bounce plane is the mirror floor, lifted when both forms hang high so the impact stays in the shot
    float fy = max(uFloorY, min(cA.y - 0.5 * (uBndA.y - uBndA.x) * uScaleA, cB.y - 0.5 * (uBndB.y - uBndB.x) * uScaleB) - 0.5);
    float drop = max(a.y - fy, 0.5);
    float u = clamp((m - r.x * 0.3) / 0.7, 0.0, 1.0);
    vec2 sd = normalize(vec2(r.y - 0.5, r.w - 0.5) + vec2(0.0001, 0.0));
    vec2 land = a.xz + sd * (0.25 * drop + 0.8) * (0.2 + 0.8 * sqrt(r.z));
    vec3 P;
    if (u < T1) { float v = u / T1; vec2 xz = mix(a.xz, land, 0.5 * v * v); P = vec3(xz.x, a.y - drop * v * v, xz.y); }
    else if (u < T2) {
      float v = (u - T1) / (T2 - T1), H = (0.8 + 0.18 * drop) * (0.5 + r.y);
      vec2 xz = mix(mix(a.xz, land, 0.5), land, v);
      P = vec3(xz.x, fy + 4.0 * H * v * (1.0 - v), xz.y);
    } else { float v = mp_ss(T2, 1.0, u); P = mix(vec3(land.x, fy, land.y), b, v); P.y += sin(PI * v) * 0.8 * r.z; }
    o.p = P; o.kc = mp_ss(0.5, 0.95, u); o.fl = max(sin(PI * u), 0.0); o.tk = 0.35;
    o.ga = 1.0 - 0.4 * mp_ss(0.15, 0.3, u) * (1.0 - mp_ss(0.62, 0.8, u)); // a pile on a plane is dense: dim it a little while it lies there
    float dt = (u - T1) / 0.05; o.flash = 1.0 * exp(-dt * dt) * step(0.001, m) * step(m, 0.999); o.fcol = vec3(1.0, 0.78, 0.5);
  } else if (sid == 6) {
    // ---- threads: bundles of 256 particles funnel onto one straight line (leader texel -> leader texel), ride it, fan out
    vec2 lref = (floor(ref * uTexW / 16.0) * 16.0 + 8.5) / uTexW;
    vec3 aLd = place(texture2D(uPosA, lref).xyz, uPlaceA, uScaleA), bLd = place(texture2D(uPosB, lref).xyz, uPlaceB, uScaleB);
    float u = mp_ss(r.x * 0.45, r.x * 0.45 + 0.55, m);
    float c1 = mp_ss(0.0, 0.28, u), d3 = mp_ss(0.72, 1.0, u), s = mp_ss(0.18, 0.82, u);
    o.p = mix(aLd, bLd, s) + (a - aLd) * (1.0 - c1) + (b - bLd) * d3;
    o.kc = mp_ss(0.55, 0.9, u); o.fl = max(sin(PI * u), 0.0); o.tk = 0.03;
    o.flash = 0.7 * c1 * (1.0 - d3) * o.fl; o.fcol = vec3(0.7, 0.9, 1.0);
  } else {
    // ---- swirl (the original)
    float delay = r.x * uSpread;
    float k = smoothstep(delay, delay + (1.0 - uSpread), m);
    o.p = mix(a, b, k); o.kc = k; o.fl = sin(PI * k);
  }
  return o;
}`;function he(e){let t=(e,t)=>!!e.glsl&&RegExp(`\\b${t}_${e.id}\\s*\\(`).test(e.glsl),n=(n,r,i)=>e.map((e,i)=>t(e,n)?`  if (id == ${i}) return ${n}_${e.id}(${r});\n`:``).join(``)+`  return ${i};\n`;return`
precision highp float;
uniform sampler2D uPosA; uniform sampler2D uPosB; uniform sampler2D uColA; uniform sampler2D uColB;
uniform int uIdA; uniform int uIdB;
uniform float uMix; uniform float uTime; uniform float uTurb; uniform float uDriftA; uniform float uDriftB;
uniform float uSizeA; uniform float uSizeB; uniform float uPointSize; uniform float uDpr; uniform float uSpread;
uniform float uMinPx; // v4: minimum point size in target pixels (0 = 1 device px); the field's exposure meter sets 1 so its tiny target stays energy-exact
// v4 world placement: each bound form can sit anywhere in the world (identity by default)
uniform vec4 uPlaceA; uniform vec4 uPlaceB; // xyz = offset, w = yaw (radians)
uniform float uScaleA; uniform float uScaleB;
vec3 place(vec3 p, vec4 pl, float s) { float c = cos(pl.w), q = sin(pl.w); p *= s; return vec3(c * p.x + q * p.z, p.y, -q * p.x + c * p.z) + pl.xyz; }
uniform vec3 uMouse; uniform float uMouseR; uniform float uMouseK;
// v19 signal bus (world/signals.ts; reactive.ts adds these to the material at runtime: until then they are zero and every branch below is skipped)
uniform vec4 uSgPtr; uniform vec3 uSgRo; uniform vec3 uSgPv; uniform vec3 uSgPcol; // pointer ray (xyz, w = presence), camera, pointer motion, light colour
uniform vec4 uSgMus; uniform vec4 uSgRip; uniform vec3 uSgMc;                          // music bands, beat ring (x phase, y amp), the song's colour
// v10 dynamics (all optional: a host that sets none of them gets the original swirl and plain additive discs)
uniform float uStyle;        // choreography id of this pair (MORPH_STYLES index)
uniform vec4 uBndA; uniform vec4 uBndB; // local bounds of each form: (ymin, ymax, xmin, xmax)
uniform vec3 uCenA; uniform vec3 uCenB; // world centre of each bound form (placement applied to the bounds centre; the field computes it on the CPU)
uniform float uFloorY; uniform vec3 uHub; uniform float uTexW;
uniform vec4 uS1A; uniform vec4 uS1B; uniform vec4 uS2A; uniform vec4 uS2B; // render styles, see packFormStyle
uniform vec4 uLight[4]; uniform vec3 uLightCol[4]; uniform float uTintK; // hub / live-TV light sources: xyz + radius, rgb * intensity
uniform float uMixV; uniform float uStreakK; uniform vec2 uRes; // |d mix / dt|, streak strength (0 = off), canvas size in css px
attribute vec2 ref; attribute vec4 rnd;
varying vec4 vCol; varying float vDepth;
varying vec4 vShape;  // x square, y ring, z elongation (sprite is an ellipse 1 : 1/z), w sharp (-1 glow .. 1 hard)
varying vec2 vDir;    // screen direction of the elongation
varying vec3 vSolid;  // x solid amount, y macro lambert, z opaque amount
varying vec3 vL;      // view-space direction to the key light, length = its intensity
${m}
${e.map(e=>e.glsl??``).join(`
`)}
vec3 animForm(int id, vec3 p, vec4 d, vec4 r, float t) {
${n(`anim`,`p, d, r, t`,`p`)}}
float sizeForm(int id, vec4 d, vec4 r, float t) {
${n(`size`,`d, r, t`,`1.0`)}}
vec4 colorForm(int id, vec4 c, vec4 d, vec4 r, float t) {
${n(`color`,`c, d, r, t`,`c`)}}
${_}
void main() {
  vec4 dA = texture2D(uPosA, ref), dB = texture2D(uPosB, ref);
  float t = uTime;
  vec3 aL = animForm(uIdA, dA.xyz, dA, rnd, t), bL = animForm(uIdB, dB.xyz, dB, rnd, t);
  vec3 a = place(aL, uPlaceA, uScaleA), b = place(bL, uPlaceB, uScaleB);
  int sid = int(uStyle + 0.5);
  vec3 cA = uCenA, cB = uCenB;
  MPath o = mp_path(sid, uMix, a, b, aL, bL, cA, cB);
  float k = o.kc, flight = o.fl;
  vec3 p = o.p;
  float drift = mix(uDriftA, uDriftB, k);
  p += pcurl(p * 0.42 + vec3(t * 0.07, -t * 0.05, t * 0.04) + rnd.yzw * 2.0) * (uTurb * flight * o.tk * (0.6 + rnd.w) + drift);
  // pointer: particles near the pointer ray part like water
  vec3 toM = p - uMouse; float dm = length(toM.xy);
  p += vec3(normalize(toM.xy + 1e-4), 0.25) * uMouseK * exp(-dm * dm / (uMouseR * uMouseR)) * (0.5 + rnd.z);
  // v19 signals: the pointer is a gentle gravity well and a light; the bass swells the cloud and each hit sends a ring out from the hub
  float sgGlow = 0.0, sgRing = 0.0;
  if (uSgPtr.w > 0.001) {
    vec3 rel = p - uSgRo; float tp = dot(rel, uSgPtr.xyz);
    if (tp > 0.5) {
      vec3 perp = rel - uSgPtr.xyz * tp; float R = 0.17 * tp + 0.6; float wq = exp(-dot(perp, perp) / (R * R)) * uSgPtr.w;
      p -= perp * (0.42 * wq);                        // the nearest particles lean toward the ray
      p += uSgPv * (R * wq * (0.5 + rnd.z));         // and are carried a little way along the pointer's motion
      sgGlow = wq;
    }
  }
  if (uSgRip.y > 0.001) {
    vec3 dh = p - uHub; float dl = length(dh), fr = (dl - uSgRip.x * 48.0) / 3.2;
    sgRing = exp(-fr * fr) * uSgRip.y; p += dh / (dl + 1e-3) * sgRing * 1.1;
  }
  if (uSgMus.x > 0.001) p += (p - uHub) * (uSgMus.x * 0.014 * (0.4 + rnd.w));
  vec4 cA4 = colorForm(uIdA, texture2D(uColA, ref), dA, rnd, t);
  vec4 cB4 = colorForm(uIdB, texture2D(uColB, ref), dB, rnd, t);
  vCol = mix(cA4, cB4, k);
  vCol.rgb += vec3(1.0, 0.45, 0.25) * flight * uTurb * 0.15 * rnd.y; // embers in flight
  vCol.a *= o.ga;
  vCol.rgb += o.fcol * o.flash * 0.9;                                  // style flash: scan line, wavefront, floor impact, thread glow
  // hub screen / live TV light: the channel's colour tints the particles near it
  if (uLight[0].w > 0.0) {
    vec3 tint = vec3(0.0);
    for (int i = 0; i < 4; i++) { float R = uLight[i].w; if (R > 0.0) { vec3 dd = p - uLight[i].xyz; tint += uLightCol[i] * exp(-dot(dd, dd) / (0.4 * R * R)); } }
    float tl = max(tint.r, max(tint.g, tint.b));
    if (tl > 0.001) { vec3 hue = tint / tl; float amt = clamp(tl * uTintK, 0.0, 0.62); vCol.rgb = mix(vCol.rgb, vCol.rgb * (0.35 + 1.45 * hue), amt) + tint * 0.035 * vCol.a; }
  }
  vCol.rgb += (uSgPcol * sgGlow * 0.95 + mix(vec3(0.85, 0.92, 1.0), uSgMc, 0.6) * sgRing * 0.9 + uSgMc * uSgMus.x * 0.05) * vCol.a;   // v19: the pointer's light, the beat ring, a bass flush in the song's colour
  float s = mix(uSizeA * sizeForm(uIdA, dA, rnd, t), uSizeB * sizeForm(uIdB, dB, rnd, t), k);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vDepth = -mv.z;
  float ps = uPointSize * s * uDpr * (9.0 / max(0.5, -mv.z)) * (0.75 + 0.5 * rnd.y);
  // v4 flight: far points never shrink below ~1 device px (they shimmer); the lost area is paid back as alpha.
  // Points nearer than ~2.5 units fade out and the size is capped, so flying through the cloud never blows out.
  { float minPs = uMinPx > 0.0 ? uMinPx : 1.0 * uDpr; if (ps < minPs) { vCol.a *= (ps * ps) / (minPs * minPs); ps = minPs; } }
  vCol.a *= smoothstep(0.25, 2.5, -mv.z);
  ps = min(ps, 40.0 * uDpr);
  // ---- v10 render style (blended A -> B with the colour progress)
  vec4 s1 = mix(uS1A, uS1B, k), s2 = mix(uS2A, uS2B, k);
  vCol.a *= s2.z > 0.0 ? s2.z : 1.0;
  if (uS2A.w + uS2B.w > 0.001) { // thinned form: a fixed pseudo-random subset is hidden (the rest carry bigger dots)
    float hh = fract(sin(dot(ref, vec2(12.9898, 78.233))) * 43758.5453);
    vCol.a *= 1.0 - (1.0 - smoothstep(s2.w, s2.w + 0.06, hh)) * smoothstep(0.0, 0.03, s2.w);
  }
  float eS = max(1.0, s1.z);
  float major = ps * sqrt(eS), minor = ps / sqrt(eS), major0 = major;
  vec2 dir = vec2(1.0, 0.0);
  if (uS1A.z + uS1B.z > 2.001) { // a static dash (brushed felt): along the form's own x axis, jittered per particle
    float yw = mix(uPlaceA.w, uPlaceB.w, k);
    vec3 xv = mat3(viewMatrix) * vec3(cos(yw), 0.0, -sin(yw));
    vec2 sd = normalize(xv.xy + vec2(1e-4)); float g = (rnd.z - 0.5) * 0.9, cg = cos(g), sg = sin(g);
    dir = vec2(cg * sd.x - sg * sd.y, sg * sd.x + cg * sd.y);
  }
  // motion streak: stretch along the particle's screen-space velocity (the derivative of its path over the mix), only while it is in flight
  if (uStreakK > 0.0 && uMixV > 0.0 && flight > 0.004 && uMix > 0.0005 && uMix < 0.9995) {
    MPath o2 = mp_path(sid, min(1.0, uMix + 0.015), a, b, aL, bL, cA, cB);
    vec4 q0 = projectionMatrix * modelViewMatrix * vec4(o.p, 1.0), q1 = projectionMatrix * modelViewMatrix * vec4(o2.p, 1.0);
    if (q0.w > 0.1 && q1.w > 0.1) {
      vec2 v = (q1.xy / q1.w - q0.xy / q0.w) * 0.5 * uRes / 0.015 * uMixV * 0.025; // css px over one 25 ms exposure
      float L = min(length(v), 28.0) * uStreakK * uDpr;
      if (L > 0.5) {
        float extra = major - ps;
        dir = normalize(dir * extra + (v / max(length(v), 1e-4)) * L + vec2(1e-5, 0.0));
        major += L;
        vCol.a *= pow(major0 / major, 0.45);
      }
    }
  }
  major = min(major, 40.0 * uDpr);
  vShape = vec4(s1.x, s1.y, clamp(major / max(minor, 0.5), 1.0, 40.0), s1.w);
  vDir = dir;
  // lit-surface look: a radial macro normal about the form's centre, lit by the key light (the hub screen)
  vL = vec3(0.0); vSolid = vec3(0.0, 0.5, s2.y);
  if (uS2A.x + uS2B.x > 0.0) {
    vec3 Lw = uLight[0].w > 0.0 ? normalize(uLight[0].xyz - p) : vec3(0.0, 1.0, 0.0);
    float keyI = clamp(dot(uLightCol[0], vec3(0.3333)), 0.0, 1.0);
    vL = mat3(viewMatrix) * Lw * (uLight[0].w > 0.0 ? keyI : 0.6);
    vSolid = vec3(s2.x, dot(normalize(p - mix(cA, cB, k) + vec3(1e-4)), Lw) * 0.5 + 0.5, s2.y);
  }
  gl_PointSize = major;
  if (vCol.a <= 0.002) gl_PointSize = 0.0;
}`}var ge=`
precision highp float;
varying vec4 vCol; varying float vDepth;
varying vec4 vShape; varying vec2 vDir; varying vec3 vSolid; varying vec3 vL;
uniform float uFocus; uniform float uBokeh; uniform float uGainX; // uGainX: extra gain, 0 = none (optional; the field raises it when it draws fewer particles)
uniform float uFieldHide;   // v10: 0 = particles drawn (default, so hosts that never set it are unaffected), 1 = every particle hidden (Field.setFieldAlpha)
uniform float uAlphaBlend;  // v10: 1 when the material blends (ONE, ONE_MINUS_SRC_ALPHA): the alpha channel then carries the form's "opaque" amount
void main() {
  vec2 c = gl_PointCoord - 0.5; c.y = -c.y;
  float E = vShape.z;
  vec2 q = c;
  if (E > 1.01) { q = vec2(dot(c, vDir), dot(c, vec2(-vDir.y, vDir.x))); q.y *= E; }
  float d = length(q);
  if (vShape.x > 0.001) d = mix(d, max(abs(q.x), abs(q.y)), vShape.x);
  float soft = mix(0.5, 0.18, clamp(1.0 - abs(vDepth - uFocus) * uBokeh, 0.0, 1.0));
  float sharp = vShape.w;
  if (sharp > 0.0) soft = mix(soft, 0.03, sharp);
  float a = smoothstep(0.5, 0.5 - soft, d);
  if (sharp < 0.0) a = mix(a, exp(-d * d * 14.0) * smoothstep(0.5, 0.4, d), -sharp); // glowing disc: a bright core with a long tail
  if (vShape.y > 0.001) a *= mix(1.0, smoothstep(0.16, 0.3, d), vShape.y) * (1.0 + 0.35 * vShape.y);
  if (a <= 0.001) discard;
  vec3 col = vCol.rgb;
  if (vSolid.x > 0.001) {
    vec3 n = vec3(c * 2.0, 0.0); n.z = sqrt(max(0.0, 1.0 - dot(n.xy, n.xy)));
    float Ll = length(vL); vec3 Ld = vL / max(Ll, 1e-4);
    float lam = max(0.0, dot(n, Ld)), spec = pow(max(0.0, dot(reflect(-Ld, n), vec3(0.0, 0.0, 1.0))), 16.0);
    float shade = 0.38 + Ll * (0.6 * vSolid.y + 0.55 * lam + 0.3 * spec);
    col *= mix(1.0, shade, vSolid.x);
  }
  float fa = 1.0 - uFieldHide;
  float oa = uAlphaBlend > 0.5 ? clamp(vSolid.z * a * min(1.0, vCol.a), 0.0, 0.9) * fa : 1.0;
  gl_FragColor = vec4(col * vCol.a * a * (1.0 + uGainX) * fa, oa);
}`;function _e(e,t,n=1){let r=new Float32Array(e*2),i=new Float32Array(e*4),a=n>>>0,o=()=>(a=a*1664525+1013904223>>>0,a/4294967296);for(let n=0;n<e;n++)r[n*2]=(n%t+.5)/t,r[n*2+1]=(Math.floor(n/t)+.5)/(e/t),i[n*4]=o(),i[n*4+1]=o(),i[n*4+2]=o(),i[n*4+3]=o();return{ref:r,rnd:i}}function ve(e,t){let n=t.length>>2,r=1/0,i=-1/0,a=1/0,o=-1/0,s=0;for(let c=0;c<n;c++){let n=c*4;if(t[n+3]<=.25)continue;let l=e[n],u=e[n+1];l<a&&(a=l),l>o&&(o=l),u<r&&(r=u),u>i&&(i=u),s++}if(s<200||!(i>r)||!(o>a))return[-2.6,2.6,-2.9,2.9];let c=new Uint32Array(256),l=new Uint32Array(256),u=255/(i-r),d=255/(o-a);for(let i=0;i<n;i++){let n=i*4;t[n+3]<=.25||(c[(e[n+1]-r)*u|0]++,l[(e[n]-a)*d|0]++)}let ee=(e,t,n,r)=>{let i=t,a=n,o=0,c=s*.015,l=s*.985;for(let r=0;r<256;r++)if(o+=e[r],o>=c){i=t+r/255*(n-t);break}o=0;for(let r=0;r<256;r++)if(o+=e[r],o>=l){a=t+(r+1)/255*(n-t);break}return[i,Math.min(a,n)]},[f,te]=ee(c,r,i,u),[ne,re]=ee(l,a,o,d);return[f,Math.max(te,f+.1),ne,Math.max(re,ne+.1)]}var ye=()=>new Promise(e=>setTimeout(e,0)),v=(e,t,n,r)=>t+(e-t)*Math.exp(-r/Math.max(1e-4,n));function y(p,m){let h=m.forms;if(!h.length)throw Error(`createField: no forms`);let g=se(m.count),_=g.base,y=Math.round(Math.sqrt(_)),b={v:oe()},be=typeof matchMedia==`function`?matchMedia(`(prefers-reduced-motion: reduce)`):null,xe=()=>{b.v=be.matches,C.reducedMotion=b.v,Q()};be?.addEventListener?.(`change`,xe);let x=new ne({canvas:p,antialias:!1,alpha:!1,powerPreference:`high-performance`,stencil:!1,depth:!1});x.setClearColor(0,1),x.autoClear=!0,x.info.autoReset=!1;let S=new o,C=new ae;C.reducedMotion=b.v;let w=C.camera,{ref:Se,rnd:Ce}=_e(_,y),T=new c;T.setAttribute(`position`,new d(new Float32Array(_*3),3)),T.setAttribute(`ref`,new d(Se,2)),T.setAttribute(`rnd`,new d(Ce,4));let we=new Map,Te=e=>{let t=we.get(e);if(!t){let n=Math.floor(_/e),r=new Uint32Array(n);for(let t=0;t<n;t++)r[t]=t*e;t=new d(r,1),we.set(e,t)}return t},Ee=h.map(e=>e.id),E=new Map(Ee.map((e,t)=>[e,t])),D={uPosA:{value:null},uPosB:{value:null},uColA:{value:null},uColB:{value:null},uIdA:{value:0},uIdB:{value:0},uMix:{value:0},uTime:{value:0},uTurb:{value:1.2},uDriftA:{value:.04},uDriftB:{value:.04},uSizeA:{value:1},uSizeB:{value:1},uPointSize:{value:2},uDpr:{value:1},uMinPx:{value:0},uSpread:{value:.4},uPlaceA:{value:new f(0,0,0,0)},uPlaceB:{value:new f(0,0,0,0)},uScaleA:{value:1},uScaleB:{value:1},uMouse:{value:new s(99,99,0)},uMouseR:{value:.6},uMouseK:{value:0},uFocus:{value:9},uBokeh:{value:.15},uGainX:{value:0},uFieldHide:{value:0},uAlphaBlend:{value:1},uStyle:{value:0},uBndA:{value:new f(-2.6,2.6,-2.9,2.9)},uBndB:{value:new f(-2.6,2.6,-2.9,2.9)},uCenA:{value:new s},uCenB:{value:new s},uFloorY:{value:fe},uHub:{value:new s(...pe)},uTexW:{value:512},uS1A:{value:new f(0,0,1,0)},uS1B:{value:new f(0,0,1,0)},uS2A:{value:new f(0,0,1,0)},uS2B:{value:new f(0,0,1,0)},uLight:{value:[0,1,2,3].map(()=>new f(0,0,0,0))},uLightCol:{value:[0,1,2,3].map(()=>new s(0,0,0))},uTintK:{value:.7},uMixV:{value:0},uStreakK:{value:1},uRes:{value:new te(1440,900)}};for(let e of h)Object.assign(D,e.uniforms??{});let De=new t({vertexShader:he(h),fragmentShader:ge,uniforms:D,transparent:!0,depthTest:!0,depthWrite:!1,blending:5,blendEquation:100,blendSrc:201,blendDst:205}),O=new i(T,De);O.frustumCulled=!1,O.visible=!1,S.add(O);let Oe=new o,ke=new Map;function Ae(e){let t=Math.max(1,Math.min(512,Math.round(1/Math.max(.001,e)))),n=ke.get(t);if(!n){let e=new c;for(let t of[`position`,`ref`,`rnd`])e.setAttribute(t,T.getAttribute(t));let r=Math.floor(_/t),a=new Uint32Array(r);for(let e=0;e<r;e++)a[e]=e*t;e.setIndex(new d(a,1)),n=new i(e,De),n.frustumCulled=!1,n.visible=!1,n.name=`particles-subset-${t}`,Oe.add(n),ke.set(t,n)}return n}let k=Math.max(0,Math.min(g.tiers.length-1,m.tier??0)),A=1,j=1,M=1,je=()=>Math.max(.5,Math.min(typeof devicePixelRatio==`number`?devicePixelRatio:1,g.dprCap)*g.tiers[k].dprMul),Me=()=>{let e=p.getBoundingClientRect();j=Math.max(1,Math.round(e.width||p.clientWidth||innerWidth)),M=Math.max(1,Math.round(e.height||p.clientHeight||innerHeight)),D.uRes.value.set(j,M)};Me(),A=je(),x.setPixelRatio(A),x.setSize(j,M,!1),C.setAspect(j/M),D.uDpr.value=A,D.uTexW.value=y;let N=ce(x,S,w,j,M,A),Ne=()=>{Me(),A=je(),x.setPixelRatio(A),x.setSize(j,M,!1),N.setSize(j,M,A),C.setAspect(j/M),D.uDpr.value=A,X.dpr=A,Q()},Pe=typeof ResizeObserver<`u`?new ResizeObserver(()=>Ne()):null;Pe?.observe(p),addEventListener(`resize`,Ne);let Fe=e=>{k=e;let t=g.tiers[e];t.stride===1?T.setIndex(null):T.setIndex(Te(t.stride)),T.setDrawRange(0,1/0),D.uPointSize.value=2*t.sizeMul,X.tier=e,X.particles=Math.floor(_/t.stride),N.setTier(e),Ne()},Ie=new ee(64,36,{type:r,depthBuffer:!1,minFilter:e,magFilter:e}),Le=new Float32Array(9216),Re=-1,ze=!1,Be=0;function Ve(){if(ze||!O.visible)return;let e=[];for(let t of S.children)t!==O&&t.visible&&(t.visible=!1,e.push(t));let t=x.getRenderTarget(),n=D.uFieldHide.value;D.uDpr.value=64/Math.max(1,j),D.uMinPx.value=1,D.uFieldHide.value=0,x.setRenderTarget(Ie),x.render(S,w),x.setRenderTarget(t),D.uDpr.value=A,D.uMinPx.value=0,D.uFieldHide.value=n;for(let t of e)t.visible=!0;ze=!0,x.readRenderTargetPixelsAsync(Ie,0,0,64,36,Le).then(e=>{let t=e,n=0;for(let e=0;e<t.length;e+=4)n+=.299*t[e]+.587*t[e+1]+.114*t[e+2];Re=n/2304*1,ze=!1}).catch(()=>{ze=!1})}let P={a:Ee[0],b:Ee[0],mix:0},F=null,I=null,L=!1,He=2.9,Ue=0,R=0,We=0,Ge=1,Ke={n:0},qe=new Set,z=!0,Je=!1,B=new Map,V=[],Ye=0,Xe=()=>m.onProgress?.(Ye/h.length),Ze=t=>{let i=new a(t,y,y,n,r);return i.minFilter=e,i.magFilter=e,i.generateMipmaps=!1,i.wrapS=i.wrapT=u,i.flipY=!1,i.needsUpdate=!0,i};async function Qe(e){let t=new Float32Array(_*4),n=new Float32Array(_*4),r=performance.now();try{await e.build(re(e.id,_),t,n)}catch(r){console.error(`[field] form "${e.id}" failed to build, using a dust shell`,r),t.fill(0),n.fill(0),ie.dust(t,n,0,_,re(e.id,_).rand,6,.18)}let i={pos:Ze(t),col:Ze(n),bnd:ve(t,n)};try{x.initTexture(i.pos),x.initTexture(i.col)}catch{}B.set(e.id,i),X.built=B.size,typeof console<`u`&&console.debug(`[field] built ${e.id} in ${(performance.now()-r).toFixed(0)} ms`)}let $e=new Set(m.firstIds?.length?m.firstIds:h.slice(0,3).map(e=>e.id)),et=()=>{},tt=new Promise(e=>{et=e}),nt=!1,rt=()=>{if(!nt){for(let e of $e)if(E.has(e)&&!B.has(e))return;nt=!0,et()}},it=(async()=>{let e=h.slice(),t=e.findIndex(e=>e.id===P.a);for(t>0&&e.unshift(...e.splice(t,1));e.length;){let t=nt?-1:e.findIndex(e=>$e.has(e.id));t<0&&(t=e.findIndex(e=>V.includes(e.id))),t<0&&(t=0);let n=e.splice(t,1)[0];await Qe(n),Ye++,Xe(),z=!0,Q(),rt(),await ye()}rt()})(),at=e=>B.has(e)?e:null;function ot(){z=!1;let e=at(P.a),t=at(P.b);if(!e&&!t){let n=B.keys().next().value;if(!n){O.visible=!1;return}e=t=n}else e?t||=e:e=t;let n=B.get(e),r=B.get(t),i=h[E.get(e)],a=h[E.get(t)];D.uPosA.value=n.pos,D.uColA.value=n.col,D.uIdA.value=E.get(e),D.uPosB.value=r.pos,D.uColB.value=r.col,D.uIdB.value=E.get(t),D.uDriftA.value=i.drift??.04,D.uDriftB.value=a.drift??.04;let o=me(i.style??de[i.id]),s=me(a.style??de[a.id]);D.uSizeA.value=(i.pointSize??2)/2*o.size,D.uSizeB.value=(a.pointSize??2)/2*s.size,D.uS1A.value.set(...o.s1),D.uS2A.value.set(...o.s2),D.uS1B.value.set(...s.s1),D.uS2B.value.set(...s.s2),D.uBndA.value.set(...n.bnd),D.uBndB.value.set(...r.bnd),Ue=i===a?0:ue(a.id),lt=i===a?[i]:[i,a],ut=ct(i),dt=ct(a),Je||(Je=!0,C.snap()),O.visible=!0}let st={epilogue:5},ct=e=>{let t=e.camera,n=t?.halfWidth??st[e.id];return t&&n?{...t,halfWidth:n}:t},lt=[],ut,dt,ft=new Set,pt=e=>E.has(e)?e:(ft.has(e)||(ft.add(e),console.warn(`[field] unknown form "${e}"`)),Ee[0]),H=(e,t)=>e===t||e.at[0]===t.at[0]&&e.at[1]===t.at[1]&&e.at[2]===t.at[2]&&(e.yaw??0)===(t.yaw??0)&&(e.scale??1)===(t.scale??1),mt=(e,t,n)=>e===n.a&&H(t,n.placeA)||e===n.b&&H(t,n.placeB),ht=(e,t)=>{let n=h[E.get(e)??0];return((n&&ct(n))?.halfWidth??2.9)*(t.scale??1)};function gt(e,t,n){let r=t.scale??1,i=t.yaw??0,a=Math.cos(i),o=Math.sin(i),s=.5*(e.z+e.w)*r,c=.5*(e.x+e.y)*r;n.set(a*s+t.at[0],c+t.at[1],-o*s+t.at[2])}function _t(e){let t=F;if(!t)return;I||(I={a:t.a,b:t.b,mix:t.a===t.b?0:t.mix,pa:t.placeA,pb:t.placeB},P.a=I.a,P.b=I.b,z=!0);let n=I,r=n.a===n.b,i;if(t.a===n.a&&t.b===n.b&&H(t.placeA,n.pa)&&H(t.placeB,n.pb))i=t.a===t.b?0:t.mix;else{let e=r||n.mix<=.002,a=r||n.mix>=.998;if(e||a){let r=e?{id:n.a,pl:n.pa}:{id:n.b,pl:n.pb},a=mt(r.id,r.pl,t)?{a:t.a,b:t.b,mix:t.a===t.b||r.id===t.a&&H(r.pl,t.placeA)?0:1,pa:t.placeA,pb:t.placeB}:null;if(a)I=a,i=t.a===t.b?0:t.mix;else{let e=t.mix>=.5&&t.a!==t.b;I={a:r.id,b:e?t.b:t.a,mix:0,pa:r.pl,pb:e?t.placeB:t.placeA},i=1}P.a=I.a,P.b=I.b,z=!0}else i=mt(n.b,n.pb,t)?1:mt(n.a,n.pa,t)?0:+(n.mix>.5)}let a=I;if(a.a===a.b)a.mix=0;else{let t=b.v?.35:.9,n=v(a.mix,i,.07,e),r=e/t;a.mix+=Math.max(-r,Math.min(r,n-a.mix)),Math.abs(a.mix-i)<.002&&(a.mix=i),a.mix=Math.max(0,Math.min(1,a.mix))}P.mix=a.mix;let o=a.pa,s=a.pb;D.uPlaceA.value.set(o.at[0],o.at[1],o.at[2],o.yaw??0),D.uScaleA.value=o.scale??1,D.uPlaceB.value.set(s.at[0],s.at[1],s.at[2],s.yaw??0),D.uScaleB.value=s.scale??1,He=ht(a.a,o)+(ht(a.b,s)-ht(a.a,o))*a.mix,gt(D.uBndA.value,o,D.uCenA.value),gt(D.uBndB.value,s,D.uCenB.value)}let vt=0,U=!1,yt=!1,bt=!1,xt=!1,St=typeof document<`u`&&document.hidden,W=0,G=0,Ct=0,K=0,wt=0,q=0,Tt=1.2,Et=1.2,Dt=0,Ot=0,J=1,kt=0,At=0,jt=!1,Mt=-9,Nt=0,Pt=new Set,Y=new le,Ft=m.adaptive!==!1,It=new Float32Array(120),Lt=0,Rt=0,X={fps:0,frameMs:0,medianMs:0,p95Ms:0,maxMs:0,tier:k,tiers:g.tiers.length,particles:Math.floor(_/g.tiers[k].stride),baseParticles:_,dpr:A,drawCalls:0,exposure:1,meanLum:0,built:0,total:h.length,paused:!1,rendering:!1},Z=new s;function zt(){if(Z.set(kt,At,.5).unproject(w).sub(w.position),Math.abs(Z.z)<1e-4)return;let e=-w.position.z/Z.z;D.uMouse.value.set(w.position.x+Z.x*e,w.position.y+Z.y*e,0)}function Bt(e){if(!U)return;vt=requestAnimationFrame(Bt);let t=G?(e-G)/1e3:1/60;G=e;let n=Math.min(.05,Math.max(0,t)),r=xt||St;if(wt++,r||(W+=n),It[Rt]=t*1e3,Rt=(Rt+1)%It.length,Lt=Math.min(It.length,Lt+1),!r&&wt>8&&O.visible&&Ft&&Y.push(t*1e3)&&k<g.tiers.length-1){let e=Y.median();Fe(k+1),Y.reset(),m.onQuality?.(X),console.info(`[field] median frame ${e.toFixed(1)} ms: quality tier ${k}/${g.tiers.length-1} (${X.particles} particles, dpr ${A.toFixed(2)})`)}for(let e of qe)try{e(W,n)}catch(e){console.error(e)}if(L)_t(n);else{let e={at:[0,0,0]};gt(D.uBndA.value,e,D.uCenA.value),gt(D.uBndB.value,e,D.uCenB.value)}z&&ot(),D.uMix.value=P.mix,D.uTime.value=W,D.uStyle.value=b.v?0:Ue,n>0&&(R=v(R,Math.abs(P.mix-We)/n,.05,n),R<.004&&(R=0)),We=P.mix,D.uMixV.value=R,D.uStreakK.value=b.v?0:Ge;for(let e of lt)e.update?.(W,r?0:n);L&&F?C.setDirect(F.cam.pos,F.cam.target,F.cam.fov??35,He):C.setTargets(ut,dt,P.mix),C.update(n,W),D.uFocus.value=Dt>0?Dt:C.distance,D.uBokeh.value=.15*Math.min(1,9/Math.max(1,D.uFocus.value)),D.uPointSize.value=2*g.tiers[k].sizeMul,Tt=v(Tt,Et,.14,n),D.uTurb.value=Tt;let i=performance.now()/1e3-Mt<.14;Nt=v(Nt,jt&&i?b.v?.18:.35:0,i?.07:.45,n),D.uMouseK.value=Nt,zt(),q=Math.min(1,q+n/1.1),N.setFade(O.visible?q*q*(3-2*q):0),x.info.reset(),L&&++Be%3==0&&Ve(),N.render(n,W),X.drawCalls=x.info.render.calls;let a=Math.sin(Math.PI*Math.min(1,Math.max(0,P.mix)));N.setDim(1-.35*a);{let e=N.settings,t=L&&Re>=0?Re:N.meanLum;if(e.autoExposure){if(t>=0){let r=Math.max(1e-4,t/Math.max(.001,J)),i=Math.min(e.max*(1-.3*a),Math.max(e.min,e.target/r));J=v(J,i,i<J?.25:.9,n),X.meanLum=t,X.particleLum=Re,X.frameLum=N.meanLum}}else J=v(J,1+g.tiers[k].gain,.3,n);X.exposure=J,D.uGainX.value=J-1}for(let e of Pt)try{e(W,n)}catch(e){console.error(e)}if(X.frameMs=X.frameMs?X.frameMs*.9+t*1e3*.1:t*1e3,X.fps=1e3/Math.max(1,X.frameMs),Lt>=30&&wt%10==0){let e=Float32Array.from(It.subarray(0,Lt)).sort();X.medianMs=e[e.length-1>>1],X.p95Ms=e[Math.min(e.length-1,Math.floor(e.length*.95))],X.maxMs=e[e.length-1]}let o=Math.abs(P.mix-Ct);Ct=P.mix,K=C.energy>.002||o>1e-5||R>.004||Nt>.002||Math.abs(Tt-Et)>.001||q<1||z||!O.visible&&B.size===0?0:K+1,r&&K>12&&Ht()}function Vt(){U||yt||bt||(U=!0,G=0,wt=0,K=0,Y.reset(30),X.rendering=!0,vt=requestAnimationFrame(Bt))}function Ht(){U=!1,cancelAnimationFrame(vt),X.rendering=!1}function Q(){!U&&!yt&&!bt&&Vt(),K=0}let Ut=e=>{let t=p.getBoundingClientRect();t.width&&t.height&&(kt=(e.clientX-t.left)/t.width*2-1,At=-((e.clientY-t.top)/t.height)*2+1,C.setPointer(Math.max(-1,Math.min(1,kt)),Math.max(-1,Math.min(1,At))),jt=!0,Mt=performance.now()/1e3,Q())},Wt=()=>{C.setPointer(0,0),jt=!1,Q()},Gt=()=>{St=document.hidden,G=0,St||Q()},Kt=e=>{e.preventDefault(),yt=!0,Ht(),console.warn(`[field] webgl context lost`)},qt=()=>{yt=!1,z=!0,Y.reset(),console.info(`[field] webgl context restored`),Vt()};addEventListener(`pointermove`,Ut,{passive:!0}),document.documentElement.addEventListener(`pointerleave`,Wt),document.addEventListener(`visibilitychange`,Gt),p.addEventListener(`webglcontextlost`,Kt,!1),p.addEventListener(`webglcontextrestored`,qt,!1),Fe(k),Xe(),Vt();let Jt=x.compileAsync.bind(x),Yt=(e,t)=>{for(let n=e.parent;n;n=n.parent)if(n===t)return!0;return!1};x.compileAsync=(e,t,n)=>{let r=x.getRenderTarget();r===null&&x.setRenderTarget(N.sceneTarget);let i=e;if(n&&e!==n&&Yt(e,n)){let t=e;i=new l,i.traverseVisible=()=>{},i.traverse=e=>t.traverse(e)}try{return Jt(i,t,n)}finally{r===null&&x.setRenderTarget(null)}};let Xt=e=>{try{return x.compileAsync(e??S,w,S).then(()=>void 0,()=>void 0)}catch{return Promise.resolve()}},$=new s;return{ready:it,readyFirst:tt,setState(e,t,n){if(L&&(L=!1,F=null,I=null,C.clearDirect()),e=pt(e),t=pt(t),n=Math.max(0,Math.min(1,n)),e!==P.a||t!==P.b){z=!0;for(let n of[e,t])!B.has(n)&&!V.includes(n)&&V.push(n)}(e!==P.a||t!==P.b||n!==P.mix)&&(P.a=e,P.b=t,P.mix=n,Q())},setWorld(e){let t=pt(e.a),n=pt(e.b);L=!0;for(let e of[t,n])!B.has(e)&&!V.includes(e)&&V.push(e);let r=Math.max(0,Math.min(1,e.mix)),i=e.cam,a=!F||F.a!==t||F.b!==n||Math.abs(F.mix-r)>1e-6||F.placeA!==e.placeA||F.placeB!==e.placeB||Math.abs(F.cam.pos[0]-i.pos[0])+Math.abs(F.cam.pos[1]-i.pos[1])+Math.abs(F.cam.pos[2]-i.pos[2])+Math.abs(F.cam.target[0]-i.target[0])+Math.abs(F.cam.target[1]-i.target[1])+Math.abs(F.cam.target[2]-i.target[2])+Math.abs((F.cam.fov??35)-(i.fov??35))>1e-5;F={a:t,b:n,mix:r,placeA:e.placeA,placeB:e.placeB,cam:{pos:[i.pos[0],i.pos[1],i.pos[2]],target:[i.target[0],i.target[1],i.target[2]],fov:i.fov}},a&&Q()},addObject(e){return S.add(e),Q(),()=>{S.remove(e)}},onBeforeRender(e){return qe.add(e),Q(),()=>{qe.delete(e)}},renderer:x,scene:S,points:O,compileAhead:Xt,setFieldAlpha(e){let t=1-Math.max(0,Math.min(1,isFinite(e)?e:1));Math.abs(t-D.uFieldHide.value)<1e-4||(D.uFieldHide.value=t,Q())},setLights(e){let t=D.uLight.value,n=D.uLightCol.value,r=0;for(let i of e){if(r>=4)break;let e=i.position,a=i.color,o=Math.max(0,Math.min(1,i.intensity));!(i.radius>0)||o<=.001||(t[r].set(e.x??e[0],e.y??e[1],e.z??e[2],i.radius),n[r].set((a.r??a[0])*o,(a.g??a[1])*o,(a.b??a[2])*o),r++)}for(let e=r;e<4;e++)t[e].w=0,n[e].set(0,0,0);r!==Ke.n&&(Ke.n=r,Q())},setStreak(e){Ge=Math.max(0,e),Q()},subset:Ae,drawSubset(e,t,n,r){if(!O.visible)return;let i=Ae(n),a=D,o=a.uDpr.value,s=a.uGainX.value;a.uDpr.value=o*(r?.dprScale??1),a.uGainX.value=(1+s)*(r?.gain??1)-1,i.visible=!0;let c=e.autoClear;e.autoClear=!1;try{e.render(Oe,t)}finally{e.autoClear=c,i.visible=!1,a.uDpr.value=o,a.uGainX.value=s}},get shown(){return{a:P.a,b:P.b,mix:P.mix}},setTurbulence(e){e=Math.max(0,e),!(Math.abs(e-Et)<1e-4)&&(Et=e,Q())},setFocus(e){Dt=e>0&&isFinite(e)?e:0,Q()},setVelocity(e){Math.abs(e-Ot)>.002&&(Ot=e,C.setVelocity(e),Q())},setTime(e){W=e,Q()},project(e){return w.updateMatrixWorld(),$.set(e[0],e[1],e[2]).project(w),{x:($.x*.5+.5)*j,y:(-$.y*.5+.5)*M,visible:$.z>-1&&$.z<1&&Math.abs($.x)<1.15&&Math.abs($.y)<1.15}},setPaused(e){xt=e,X.paused=e,e||(G=0,Y.reset(20)),Q()},onFrame(e){return Pt.add(e),Q(),()=>{Pt.delete(e)}},get count(){return X.particles},camera:w,stats:X,post:N,dispose(){bt=!0,Ht(),removeEventListener(`pointermove`,Ut),removeEventListener(`resize`,Ne),document.documentElement.removeEventListener(`pointerleave`,Wt),document.removeEventListener(`visibilitychange`,Gt),p.removeEventListener(`webglcontextlost`,Kt),p.removeEventListener(`webglcontextrestored`,qt),be?.removeEventListener?.(`change`,xe),Pe?.disconnect();for(let e of B.values())e.pos.dispose(),e.col.dispose();B.clear();for(let e of ke.values())e.geometry.dispose();T.dispose(),De.dispose(),N.dispose(),Ie.dispose(),x.dispose()}}}export{y as createField};