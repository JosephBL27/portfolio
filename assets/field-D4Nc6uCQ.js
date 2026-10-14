import{Dr as e,Er as t,F as n,Ht as r,J as i,Jn as a,Lt as o,Nt as s,Or as c,Rt as l,Tt as u,U as d,Ut as ee,Wt as te,_ as ne,d as re,en as ie,jr as ae,k as oe,n as se,or as ce,qn as le,u as f}from"./three.core-CUlgq_p4.js";import{n as ue}from"./three.module-CpT8QX6F.js";import{I as de,L as fe,_ as pe,k as p}from"./main-BNUvMtJi.js";import{a as me,i as he,n as ge,r as _e}from"./post-D9o-gPd_.js";var m=`
vec3 pcurl(vec3 p) {
  // cheap divergence-free-ish field from a sum of rotated sines
  vec3 q = p;
  vec3 a = vec3(sin(q.y * 1.7 + q.z * 0.9), sin(q.z * 1.3 + q.x * 1.1), sin(q.x * 1.5 + q.y * 0.7));
  vec3 b = vec3(cos(q.z * 2.3 - q.y * 0.6), cos(q.x * 2.1 - q.z * 0.8), cos(q.y * 1.9 - q.x * 1.2));
  return cross(a, b) + 0.5 * vec3(sin(q.y * 3.1 + 1.3), sin(q.z * 2.9 + 2.1), sin(q.x * 3.3 + 0.7));
}`,h=[`swirl`,`pour`,`print`,`shatter`,`sweep`,`gravity`,`threads`],g={name:`sweep`,orbits:`shatter`,brain:`threads`,secretary:`print`,watchdog:`sweep`,pushup:`gravity`,zeta:`print`,table:`gravity`,phase:`swirl`,counties:`sweep`,dyads:`pour`,surface:`print`,cloudflare:`threads`,appfolio:`shatter`,recruiting:`pour`,chomchom:`gravity`,uchicago:`print`,mathecon:`sweep`,compass:`swirl`,hold:`pour`,meeple:`gravity`,guitar:`threads`,turntable3d:`sweep`,knight:`shatter`,bust:`print`,epilogue:`pour`},ve=e=>Math.max(0,h.indexOf(e&&g[e]||`swirl`)),ye={zeta:{shape:`pixel`,size:2.4,sharp:1,thin:.6,gain:.26},surface:{shape:`ring`,size:3,sharp:.6,thin:.7,gain:.22},uchicago:{solid:1,size:1.7,sharp:.35,opaque:.5,thin:.3,gain:.5},brain:{shape:`disc`,size:1.6,sharp:-1,gain:.9},counties:{size:.6,sharp:.2,gain:2},table:{shape:`streak`,streak:4,size:1,gain:1},bust:{solid:.85,size:1.3,opaque:.4,gain:.65},meeple:{solid:.7,size:1.3,sharp:.3,opaque:.3,gain:.65},knight:{solid:.8,size:1.25,sharp:.3,opaque:.35,gain:.65}},be=-6.6,xe=[p[0],p[1]+.3,p[2]];function Se(e){return e?{s1:[+(e.shape===`pixel`),+(e.shape===`ring`),e.shape===`streak`?Math.max(1,e.streak??4):1,Math.max(-1,Math.min(1,e.sharp??0))],s2:[Math.max(0,Math.min(1,e.solid??0)),Math.max(0,Math.min(1,e.opaque??0)),e.gain??1,Math.max(0,Math.min(.9,e.thin??0))],size:e.size??1}:{s1:[0,0,1,0],s2:[0,0,1,0],size:1}}var _=`
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
}`;function Ce(e){let t=(e,t)=>!!e.glsl&&RegExp(`\\b${t}_${e.id}\\s*\\(`).test(e.glsl),n=(n,r,i)=>e.map((e,i)=>t(e,n)?`  if (id == ${i}) return ${n}_${e.id}(${r});\n`:``).join(``)+`  return ${i};\n`;return`
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
uniform sampler2D uExpo; uniform float uExpoOn; // the auto-exposure lives on the GPU (field.ts): a 1x1 float texture, never read back; uExpoOn 0 = not driven (gain 1)
varying float vExpo;
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
  vExpo = uExpoOn > 0.5 ? texelFetch(uExpo, ivec2(0), 0).r : 1.0;
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
}`}var we=`
precision highp float;
varying vec4 vCol; varying float vDepth;
varying vec4 vShape; varying vec2 vDir; varying vec3 vSolid; varying vec3 vL; varying float vExpo;
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
  gl_FragColor = vec4(col * vCol.a * a * (1.0 + uGainX) * vExpo * fa, oa);
}`;function Te(e,t,n=1){let r=new Float32Array(e*2),i=new Float32Array(e*4),a=n>>>0,o=()=>(a=a*1664525+1013904223>>>0,a/4294967296);for(let n=0;n<e;n++)r[n*2]=(n%t+.5)/t,r[n*2+1]=(Math.floor(n/t)+.5)/(e/t),i[n*4]=o(),i[n*4+1]=o(),i[n*4+2]=o(),i[n*4+3]=o();return{ref:r,rnd:i}}function Ee(e,t){let n=t.length>>2,r=1/0,i=-1/0,a=1/0,o=-1/0,s=0;for(let c=0;c<n;c++){let n=c*4;if(t[n+3]<=.25)continue;let l=e[n],u=e[n+1];l<a&&(a=l),l>o&&(o=l),u<r&&(r=u),u>i&&(i=u),s++}if(s<200||!(i>r)||!(o>a))return[-2.6,2.6,-2.9,2.9];let c=new Uint32Array(256),l=new Uint32Array(256),u=255/(i-r),d=255/(o-a);for(let i=0;i<n;i++){let n=i*4;t[n+3]<=.25||(c[(e[n+1]-r)*u|0]++,l[(e[n]-a)*d|0]++)}let ee=(e,t,n,r)=>{let i=t,a=n,o=0,c=s*.015,l=s*.985;for(let r=0;r<256;r++)if(o+=e[r],o>=c){i=t+r/255*(n-t);break}o=0;for(let r=0;r<256;r++)if(o+=e[r],o>=l){a=t+(r+1)/255*(n-t);break}return[i,Math.min(a,n)]},[te,ne]=ee(c,r,i,u),[re,ie]=ee(l,a,o,d);return[te,Math.max(ne,te+.1),re,Math.max(ie,re+.1)]}var De=()=>new Promise(e=>setTimeout(e,0)),Oe=(e,t,n,r)=>t+(e-t)*Math.exp(-r/Math.max(1e-4,n));function v(p,m){let h=m.forms;if(!h.length)throw Error(`createField: no forms`);let g=he(m.count),_=g.base,v=Math.round(Math.sqrt(_)),y={v:me()},ke=typeof matchMedia==`function`?matchMedia(`(prefers-reduced-motion: reduce)`):null,Ae=()=>{y.v=ke.matches,S.reducedMotion=y.v,Q()};ke?.addEventListener?.(`change`,Ae);let b=new ue({canvas:p,antialias:!1,alpha:!1,powerPreference:`high-performance`,stencil:!1,depth:!1});b.debug.checkShaderErrors=!1,b.setClearColor(0,1),b.autoClear=!0,b.info.autoReset=!1;let x=new le,S=new pe;S.reducedMotion=y.v;let C=S.camera,{ref:je,rnd:Me}=Te(_,v),w=new re;w.setAttribute(`position`,new f(new Float32Array(_*3),3)),w.setAttribute(`ref`,new f(je,2)),w.setAttribute(`rnd`,new f(Me,4));let Ne=new Map,Pe=e=>{let t=Ne.get(e);if(!t){let n=Math.floor(_/e),r=new Uint32Array(n);for(let t=0;t<n;t++)r[t]=t*e;t=new f(r,1),Ne.set(e,t)}return t},Fe=h.map(e=>e.id),T=new Map(Fe.map((e,t)=>[e,t])),E={uPosA:{value:null},uPosB:{value:null},uColA:{value:null},uColB:{value:null},uIdA:{value:0},uIdB:{value:0},uMix:{value:0},uTime:{value:0},uTurb:{value:1.2},uDriftA:{value:.04},uDriftB:{value:.04},uSizeA:{value:1},uSizeB:{value:1},uPointSize:{value:2},uDpr:{value:1},uMinPx:{value:0},uSpread:{value:.4},uPlaceA:{value:new c(0,0,0,0)},uPlaceB:{value:new c(0,0,0,0)},uScaleA:{value:1},uScaleB:{value:1},uMouse:{value:new e(99,99,0)},uMouseR:{value:.6},uMouseK:{value:0},uFocus:{value:9},uBokeh:{value:.15},uGainX:{value:0},uFieldHide:{value:0},uAlphaBlend:{value:1},uStyle:{value:0},uBndA:{value:new c(-2.6,2.6,-2.9,2.9)},uBndB:{value:new c(-2.6,2.6,-2.9,2.9)},uCenA:{value:new e},uCenB:{value:new e},uFloorY:{value:be},uHub:{value:new e(...xe)},uTexW:{value:512},uS1A:{value:new c(0,0,1,0)},uS1B:{value:new c(0,0,1,0)},uS2A:{value:new c(0,0,1,0)},uS2B:{value:new c(0,0,1,0)},uLight:{value:[0,1,2,3].map(()=>new c(0,0,0,0))},uLightCol:{value:[0,1,2,3].map(()=>new e(0,0,0))},uTintK:{value:.7},uMixV:{value:0},uStreakK:{value:1},uRes:{value:new t(1440,900)}};for(let e of h)Object.assign(E,e.uniforms??{});let Ie=new a({vertexShader:Ce(h),fragmentShader:we,uniforms:E,transparent:!0,depthTest:!0,depthWrite:!1,blending:5,blendEquation:100,blendSrc:201,blendDst:205}),D=new te(w,Ie);D.frustumCulled=!1,D.visible=!1,x.add(D);let Le=new le,Re=new Map;function ze(e){let t=Math.max(1,Math.min(512,Math.round(1/Math.max(.001,e)))),n=Re.get(t);if(!n){let e=new re;for(let t of[`position`,`ref`,`rnd`])e.setAttribute(t,w.getAttribute(t));let r=Math.floor(_/t),i=new Uint32Array(r);for(let e=0;e<r;e++)i[e]=e*t;e.setIndex(new f(i,1)),n=new te(e,Ie),n.frustumCulled=!1,n.visible=!1,n.name=`particles-subset-${t}`,Le.add(n),Re.set(t,n)}return n}let O=Math.max(0,Math.min(g.tiers.length-1,m.tier??0)),k=1,A=1,j=1,Be=()=>Math.max(.5,Math.min(typeof devicePixelRatio==`number`?devicePixelRatio:1,g.dprCap)*g.tiers[O].dprMul),Ve=()=>{let e=p.getBoundingClientRect();A=Math.max(1,Math.round(e.width||p.clientWidth||innerWidth)),j=Math.max(1,Math.round(e.height||p.clientHeight||innerHeight)),E.uRes.value.set(A,j)};Ve(),k=Be(),b.setPixelRatio(k),b.setSize(A,j,!1),S.setAspect(A/j),E.uDpr.value=k,E.uTexW.value=v;let M=ge(b,x,C,A,j,k),He=()=>{Ve(),k=Be(),b.setPixelRatio(k),b.setSize(A,j,!1),M.setSize(A,j,k),S.setAspect(A/j),E.uDpr.value=k,X.dpr=k,Q()},Ue=typeof ResizeObserver<`u`?new ResizeObserver(()=>He()):null;Ue?.observe(p),addEventListener(`resize`,He);let We=e=>{O=e;let t=g.tiers[e];t.stride===1?w.setIndex(null):w.setIndex(Pe(t.stride)),w.setDrawRange(0,1/0),E.uPointSize.value=2*t.sizeMul,X.tier=e,X.particles=Math.floor(_/t.stride),M.setTier(e),He()},Ge=new ae(64,36,{type:d,depthBuffer:!1,minFilter:s,magFilter:s}),Ke=0,qe=!1;function Je(){if(!D.visible)return;let e=[];for(let t of x.children)t!==D&&t.visible&&(t.visible=!1,e.push(t));let t=b.getRenderTarget(),n=E.uFieldHide.value;E.uDpr.value=64/Math.max(1,A),E.uMinPx.value=1,E.uFieldHide.value=0,b.setRenderTarget(Ge),b.render(x,C),b.setRenderTarget(t),E.uDpr.value=k,E.uMinPx.value=0,E.uFieldHide.value=n;for(let t of e)t.visible=!0;qe=!0}let N=[0,1].map(()=>new ae(1,1,{type:d,depthBuffer:!1,minFilter:s,magFilter:s})),Ye=new a({vertexShader:`void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
precision highp float;
uniform sampler2D tPrev; uniform sampler2D tParticles; uniform sampler2D tFrame;
uniform float uDt; uniform float uMax; uniform float uMin; uniform float uTarget; uniform float uSin; uniform float uAuto; uniform float uFixed; uniform float uSrc; uniform float uK; uniform float uInit;
void main() {
  if (uInit > 0.5) { gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); return; }
  float expo = texelFetch(tPrev, ivec2(0), 0).r;
  float goal = uFixed, tau = 0.3;
  if (uAuto > 0.5) {
    float m;
    if (uSrc < 0.5) {
      float s = 0.0;
      for (int y = 0; y < 36; y++) for (int x = 0; x < 64; x++) s += dot(texelFetch(tParticles, ivec2(x, y), 0).rgb, vec3(0.299, 0.587, 0.114));
      m = s / 2304.0 * uK;
    } else { float r = texelFetch(tFrame, ivec2(0), 0).r; m = r * r * 4.0; }
    float raw = max(1e-4, m / max(1e-3, expo));
    goal = min(uMax * (1.0 - 0.3 * uSin), max(uMin, uTarget / raw));
    tau = goal < expo ? 0.25 : (goal - expo > 0.2 ? 0.28 : 0.7);
  }
  gl_FragColor = vec4(goal + (expo - goal) * exp(-uDt / max(1e-4, tau)), 0.0, 0.0, 1.0);
}`,depthTest:!1,depthWrite:!1,uniforms:{tPrev:{value:null},tParticles:{value:Ge.texture},tFrame:{value:M.meterTexture},uDt:{value:0},uMax:{value:1.5},uMin:{value:.15},uTarget:{value:.15},uSin:{value:0},uAuto:{value:1},uFixed:{value:1},uSrc:{value:0},uK:{value:1},uInit:{value:0}}}),Xe=new le,Ze=new l(-1,1,1,-1,0,1);{let e=new u(new r(2,2),Ye);e.frustumCulled=!1,Xe.add(e)}let P=0;E.uExpo={value:N[0].texture},E.uExpoOn={value:0};function Qe(e){let t=b.getRenderTarget(),n=Ye.uniforms;n.uInit.value=+!!e,n.tPrev.value=N[P].texture,b.setRenderTarget(N[1-P]),b.render(Xe,Ze),b.setRenderTarget(t),P=1-P,E.uExpo.value=N[P].texture}function $e(){Qe(!0),Qe(!0),E.uExpoOn.value=1}$e();function et(e,t){let n=M.settings,r=Ye.uniforms,i=R&&qe;(!n.autoExposure||i||!R&&M.meterReady)&&(r.uDt.value=e,r.uMax.value=n.max,r.uMin.value=n.min,r.uTarget.value=n.target,r.uSin.value=t,r.uAuto.value=+!!n.autoExposure,r.uFixed.value=1+g.tiers[O].gain,r.uSrc.value=+!i,Qe(!1))}let F={a:Fe[0],b:Fe[0],mix:0},I=null,L=null,R=!1,tt=2.9,nt=0,z=0,rt=0,it=1,at={n:0},ot=new Set,st=new Set,B=!0,ct=!1,V=new Map,H=[],lt=0,ut=()=>m.onProgress?.(lt/h.length),dt=e=>{let t=new oe(e,v,v,ie,d);return t.minFilter=s,t.magFilter=s,t.generateMipmaps=!1,t.wrapS=t.wrapT=ne,t.flipY=!1,t.needsUpdate=!0,t};async function ft(e){let t=new Float32Array(_*4),n=new Float32Array(_*4),r=performance.now();try{await e.build(fe(e.id,_),t,n)}catch(r){console.error(`[field] form "${e.id}" failed to build, using a dust shell`,r),t.fill(0),n.fill(0),de.dust(t,n,0,_,fe(e.id,_).rand,6,.18)}let i={pos:dt(t),col:dt(n),bnd:Ee(t,n)};try{b.initTexture(i.pos),b.initTexture(i.col)}catch{}V.set(e.id,i),X.built=V.size,typeof console<`u`&&console.debug(`[field] built ${e.id} in ${(performance.now()-r).toFixed(0)} ms`)}let pt=new Set(m.firstIds?.length?m.firstIds:h.slice(0,3).map(e=>e.id)),mt=()=>{},ht=new Promise(e=>{mt=e}),gt=!1,_t=()=>{if(!gt){for(let e of pt)if(T.has(e)&&!V.has(e))return;gt=!0,mt()}},vt=(async()=>{let e=h.slice(),t=e.findIndex(e=>e.id===F.a);for(t>0&&e.unshift(...e.splice(t,1));e.length;){let t=gt?-1:e.findIndex(e=>pt.has(e.id));t<0&&(t=e.findIndex(e=>H.includes(e.id))),t<0&&(t=0);let n=e.splice(t,1)[0];await ft(n),lt++,ut(),B=!0,Q(),_t(),await De()}_t()})(),yt=e=>V.has(e)?e:null;function bt(){B=!1;let e=yt(F.a),t=yt(F.b);if(!e&&!t){let n=V.keys().next().value;if(!n){D.visible=!1;return}e=t=n}else e?t||=e:e=t;let n=V.get(e),r=V.get(t),i=h[T.get(e)],a=h[T.get(t)];E.uPosA.value=n.pos,E.uColA.value=n.col,E.uIdA.value=T.get(e),E.uPosB.value=r.pos,E.uColB.value=r.col,E.uIdB.value=T.get(t),E.uDriftA.value=i.drift??.04,E.uDriftB.value=a.drift??.04;let o=Se(i.style??ye[i.id]),s=Se(a.style??ye[a.id]);E.uSizeA.value=(i.pointSize??2)/2*o.size,E.uSizeB.value=(a.pointSize??2)/2*s.size,E.uS1A.value.set(...o.s1),E.uS2A.value.set(...o.s2),E.uS1B.value.set(...s.s1),E.uS2B.value.set(...s.s2),E.uBndA.value.set(...n.bnd),E.uBndB.value.set(...r.bnd),nt=i===a?0:ve(a.id),Ct=i===a?[i]:[i,a],wt=St(i),Tt=St(a),ct||(ct=!0,S.snap()),D.visible=!0}let xt={epilogue:5},St=e=>{let t=e.camera,n=t?.halfWidth??xt[e.id];return t&&n?{...t,halfWidth:n}:t},Ct=[],wt,Tt,Et=new Set,Dt=e=>T.has(e)?e:(Et.has(e)||(Et.add(e),console.warn(`[field] unknown form "${e}"`)),Fe[0]),U=(e,t)=>e===t||e.at[0]===t.at[0]&&e.at[1]===t.at[1]&&e.at[2]===t.at[2]&&(e.yaw??0)===(t.yaw??0)&&(e.scale??1)===(t.scale??1),Ot=(e,t,n)=>e===n.a&&U(t,n.placeA)||e===n.b&&U(t,n.placeB),kt=(e,t)=>{let n=h[T.get(e)??0];return((n&&St(n))?.halfWidth??2.9)*(t.scale??1)};function At(e,t,n){let r=t.scale??1,i=t.yaw??0,a=Math.cos(i),o=Math.sin(i),s=.5*(e.z+e.w)*r,c=.5*(e.x+e.y)*r;n.set(a*s+t.at[0],c+t.at[1],-o*s+t.at[2])}function jt(e){let t=I;if(!t)return;L||(L={a:t.a,b:t.b,mix:t.a===t.b?0:t.mix,pa:t.placeA,pb:t.placeB},F.a=L.a,F.b=L.b,B=!0);let n=L,r=n.a===n.b,i;if(t.a===n.a&&t.b===n.b&&U(t.placeA,n.pa)&&U(t.placeB,n.pb))i=t.a===t.b?0:t.mix;else{let e=r||n.mix<=.002,a=r||n.mix>=.998;if(e||a){let r=e?{id:n.a,pl:n.pa}:{id:n.b,pl:n.pb},a=Ot(r.id,r.pl,t)?{a:t.a,b:t.b,mix:t.a===t.b||r.id===t.a&&U(r.pl,t.placeA)?0:1,pa:t.placeA,pb:t.placeB}:null;if(a)L=a,i=t.a===t.b?0:t.mix;else{let e=t.mix>=.5&&t.a!==t.b;L={a:r.id,b:e?t.b:t.a,mix:0,pa:r.pl,pb:e?t.placeB:t.placeA},i=1}F.a=L.a,F.b=L.b,B=!0}else i=Ot(n.b,n.pb,t)?1:Ot(n.a,n.pa,t)?0:+(n.mix>.5)}let a=L;if(a.a===a.b)a.mix=0;else{let t=y.v?.35:.9,n=Oe(a.mix,i,.07,e),r=e/t;a.mix+=Math.max(-r,Math.min(r,n-a.mix)),Math.abs(a.mix-i)<.002&&(a.mix=i),a.mix=Math.max(0,Math.min(1,a.mix))}F.mix=a.mix;let o=a.pa,s=a.pb;E.uPlaceA.value.set(o.at[0],o.at[1],o.at[2],o.yaw??0),E.uScaleA.value=o.scale??1,E.uPlaceB.value.set(s.at[0],s.at[1],s.at[2],s.yaw??0),E.uScaleB.value=s.scale??1,tt=kt(a.a,o)+(kt(a.b,s)-kt(a.a,o))*a.mix,At(E.uBndA.value,o,E.uCenA.value),At(E.uBndB.value,s,E.uCenB.value)}let Mt=0,W=!1,Nt=!1,Pt=!1,Ft=!1,It=typeof document<`u`&&document.hidden,G=0,K=0,Lt=0,q=0,Rt=0,J=0,zt=1.2,Bt=1.2,Vt=0,Ht=0,Ut=0,Wt=0,Gt=!1,Kt=-9,qt=0,Jt=new Set,Y=new _e,Yt=m.adaptive!==!1,Xt=new Float32Array(120),Zt=0,Qt=0,X={fps:0,frameMs:0,medianMs:0,p95Ms:0,maxMs:0,tier:O,tiers:g.tiers.length,particles:Math.floor(_/g.tiers[O].stride),baseParticles:_,dpr:k,drawCalls:0,exposure:1,meanLum:0,built:0,total:h.length,paused:!1,rendering:!1},Z=new e;function $t(){if(Z.set(Ut,Wt,.5).unproject(C).sub(C.position),Math.abs(Z.z)<1e-4)return;let e=-C.position.z/Z.z;E.uMouse.value.set(C.position.x+Z.x*e,C.position.y+Z.y*e,0)}function en(e){if(!W)return;Mt=requestAnimationFrame(en);let t=K?(e-K)/1e3:1/60;K=e;let n=Math.min(.05,Math.max(0,t)),r=Ft||It;if(Rt++,r||(G+=n),Xt[Qt]=t*1e3,Qt=(Qt+1)%Xt.length,Zt=Math.min(Xt.length,Zt+1),!r&&Rt>8&&D.visible&&Yt&&Y.push(t*1e3)&&O<g.tiers.length-1){let e=Y.median();We(O+1),Y.reset(),m.onQuality?.(X),console.info(`[field] median frame ${e.toFixed(1)} ms: quality tier ${O}/${g.tiers.length-1} (${X.particles} particles, dpr ${k.toFixed(2)})`)}for(let e of ot)try{e(G,n)}catch(e){console.error(e)}if(R)jt(n);else{let e={at:[0,0,0]};At(E.uBndA.value,e,E.uCenA.value),At(E.uBndB.value,e,E.uCenB.value)}B&&bt(),E.uMix.value=F.mix,E.uTime.value=G,E.uStyle.value=y.v?0:nt,n>0&&(z=Oe(z,Math.abs(F.mix-rt)/n,.05,n),z<.004&&(z=0)),rt=F.mix,E.uMixV.value=z,E.uStreakK.value=y.v?0:it;for(let e of Ct)e.update?.(G,r?0:n);R&&I?S.setDirect(I.cam.pos,I.cam.target,I.cam.fov??35,tt):S.setTargets(wt,Tt,F.mix),S.update(n,G);for(let e of st)try{e()}catch(e){console.error(e)}E.uFocus.value=Vt>0?Vt:S.distance,E.uBokeh.value=.15*Math.min(1,9/Math.max(1,E.uFocus.value)),E.uPointSize.value=2*g.tiers[O].sizeMul,zt=Oe(zt,Bt,.14,n),E.uTurb.value=zt;let i=performance.now()/1e3-Kt<.14;qt=Oe(qt,Gt&&i?y.v?.18:.35:0,i?.07:.45,n),E.uMouseK.value=qt,$t(),J=Math.min(1,J+n/1.1),M.setFade(D.visible?J*J*(3-2*J):0);let a=Math.sin(Math.PI*Math.min(1,Math.max(0,F.mix)));M.setDim(1-.35*a),vn(),M.setMeterOn(!R),et(n,a),b.info.reset(),R&&++Ke%3==0&&Je(),M.render(n,G),X.drawCalls=b.info.render.calls;for(let e of Jt)try{e(G,n)}catch(e){console.error(e)}if(X.frameMs=X.frameMs?X.frameMs*.9+t*1e3*.1:t*1e3,X.fps=1e3/Math.max(1,X.frameMs),Zt>=30&&Rt%10==0){let e=Float32Array.from(Xt.subarray(0,Zt)).sort();X.medianMs=e[e.length-1>>1],X.p95Ms=e[Math.min(e.length-1,Math.floor(e.length*.95))],X.maxMs=e[e.length-1]}let o=Math.abs(F.mix-Lt);Lt=F.mix,q=S.energy>.002||o>1e-5||z>.004||qt>.002||Math.abs(zt-Bt)>.001||J<1||B||!D.visible&&V.size===0?0:q+1,r&&q>12&&nn()}function tn(){W||Nt||Pt||(W=!0,K=0,Rt=0,q=0,Y.reset(30),X.rendering=!0,Mt=requestAnimationFrame(en))}function nn(){W=!1,cancelAnimationFrame(Mt),X.rendering=!1}function Q(){!W&&!Nt&&!Pt&&tn(),q=0}let rn=e=>{let t=p.getBoundingClientRect();t.width&&t.height&&(Ut=(e.clientX-t.left)/t.width*2-1,Wt=-((e.clientY-t.top)/t.height)*2+1,S.setPointer(Math.max(-1,Math.min(1,Ut)),Math.max(-1,Math.min(1,Wt))),Gt=!0,Kt=performance.now()/1e3,Q())},an=()=>{S.setPointer(0,0),Gt=!1,Q()},on=()=>{It=document.hidden,K=0,It||Q()},sn=e=>{e.preventDefault(),Nt=!0,nn(),console.warn(`[field] webgl context lost`)},cn=()=>{Nt=!1,B=!0,Y.reset(),$e(),console.info(`[field] webgl context restored`),tn()};addEventListener(`pointermove`,rn,{passive:!0}),document.documentElement.addEventListener(`pointerleave`,an),document.addEventListener(`visibilitychange`,on),p.addEventListener(`webglcontextlost`,sn,!1),p.addEventListener(`webglcontextrestored`,cn,!1),We(O),ut(),tn();let ln=b.compileAsync.bind(b),un=(e,t)=>{for(let n=e.parent;n;n=n.parent)if(n===t)return!0;return!1};b.compileAsync=(e,t,n)=>{let r=b.getRenderTarget();r===null&&b.setRenderTarget(M.sceneTarget);let i=e;if(n&&e!==n&&un(e,n)){let t=e;i=new o,i.traverseVisible=()=>{},i.traverse=e=>t.traverse(e)}try{return ln(i,t,n)}finally{r===null&&b.setRenderTarget(null)}};let dn=new Map,fn=new WeakSet,pn=e=>{let t=e,r=t.isSpotLight?new ce(16777215,0):t.isPointLight?new ee(16777215,0):t.isDirectionalLight?new n(16777215,0):t.isHemisphereLight?new i(16777215,0,0):t.isAmbientLight?new se(16777215,0):null;return r&&(r.name=`ghost:`+e.name,r.visible=!1,fn.add(r)),r},mn=e=>{e.traverse(e=>{let t=e;if(!t.isLight||dn.has(t)||fn.has(t))return;let n=pn(t);n&&(dn.set(t,n),hn(n))})},hn=x.add.bind(x);x.add=(...e)=>{hn(...e);for(let t of e)mn(t);return x};let gn=e=>{for(let t=e;t;t=t.parent)if(!t.visible)return!0;return!1},_n=0,vn=()=>{++_n%120==0&&mn(x);for(let[e,t]of dn){let n=gn(e);t.visible!==n&&(t.visible=n)}};mn(x);let yn=e=>{try{return b.compileAsync(e??x,C,x).then(()=>void 0,()=>void 0)}catch{return Promise.resolve()}},$=new e;return{ready:vt,readyFirst:ht,setState(e,t,n){if(R&&(R=!1,I=null,L=null,S.clearDirect()),e=Dt(e),t=Dt(t),n=Math.max(0,Math.min(1,n)),e!==F.a||t!==F.b){B=!0;for(let n of[e,t])!V.has(n)&&!H.includes(n)&&H.push(n)}(e!==F.a||t!==F.b||n!==F.mix)&&(F.a=e,F.b=t,F.mix=n,Q())},setWorld(e){let t=Dt(e.a),n=Dt(e.b);R=!0;for(let e of[t,n])!V.has(e)&&!H.includes(e)&&H.push(e);let r=Math.max(0,Math.min(1,e.mix)),i=e.cam,a=!I||I.a!==t||I.b!==n||Math.abs(I.mix-r)>1e-6||I.placeA!==e.placeA||I.placeB!==e.placeB||Math.abs(I.cam.pos[0]-i.pos[0])+Math.abs(I.cam.pos[1]-i.pos[1])+Math.abs(I.cam.pos[2]-i.pos[2])+Math.abs(I.cam.target[0]-i.target[0])+Math.abs(I.cam.target[1]-i.target[1])+Math.abs(I.cam.target[2]-i.target[2])+Math.abs((I.cam.fov??35)-(i.fov??35))>1e-5;I={a:t,b:n,mix:r,placeA:e.placeA,placeB:e.placeB,cam:{pos:[i.pos[0],i.pos[1],i.pos[2]],target:[i.target[0],i.target[1],i.target[2]],fov:i.fov}},a&&Q()},addObject(e){return x.add(e),mn(e),Q(),()=>{x.remove(e)}},onBeforeRender(e){return ot.add(e),Q(),()=>{ot.delete(e)}},onAfterCamera(e){return st.add(e),Q(),()=>{st.delete(e)}},renderer:b,scene:x,points:D,compileAhead:yn,async readExposure(){try{let e=new Float32Array(4);return await b.readRenderTargetPixelsAsync(N[P],0,0,1,1,e),X.exposure=e[0],e[0]}catch{return NaN}},setFieldAlpha(e){let t=1-Math.max(0,Math.min(1,isFinite(e)?e:1));Math.abs(t-E.uFieldHide.value)<1e-4||(E.uFieldHide.value=t,Q())},setLights(e){let t=E.uLight.value,n=E.uLightCol.value,r=0;for(let i of e){if(r>=4)break;let e=i.position,a=i.color,o=Math.max(0,Math.min(1,i.intensity));!(i.radius>0)||o<=.001||(t[r].set(e.x??e[0],e.y??e[1],e.z??e[2],i.radius),n[r].set((a.r??a[0])*o,(a.g??a[1])*o,(a.b??a[2])*o),r++)}for(let e=r;e<4;e++)t[e].w=0,n[e].set(0,0,0);r!==at.n&&(at.n=r,Q())},setStreak(e){it=Math.max(0,e),Q()},subset:ze,drawSubset(e,t,n,r){if(!D.visible)return;let i=ze(n),a=E,o=a.uDpr.value,s=a.uGainX.value;a.uDpr.value=o*(r?.dprScale??1),a.uGainX.value=(1+s)*(r?.gain??1)-1,i.visible=!0;let c=e.autoClear;e.autoClear=!1;try{e.render(Le,t)}finally{e.autoClear=c,i.visible=!1,a.uDpr.value=o,a.uGainX.value=s}},get shown(){return{a:F.a,b:F.b,mix:F.mix}},setTurbulence(e){e=Math.max(0,e),!(Math.abs(e-Bt)<1e-4)&&(Bt=e,Q())},setFocus(e){Vt=e>0&&isFinite(e)?e:0,Q()},setVelocity(e){Math.abs(e-Ht)>.002&&(Ht=e,S.setVelocity(e),Q())},setTime(e){G=e,Q()},project(e){return C.updateMatrixWorld(),$.set(e[0],e[1],e[2]).project(C),{x:($.x*.5+.5)*A,y:(-$.y*.5+.5)*j,visible:$.z>-1&&$.z<1&&Math.abs($.x)<1.15&&Math.abs($.y)<1.15}},setPaused(e){Ft=e,X.paused=e,e||(K=0,Y.reset(20)),Q()},onFrame(e){return Jt.add(e),Q(),()=>{Jt.delete(e)}},get count(){return X.particles},camera:C,stats:X,post:M,dispose(){Pt=!0,nn(),removeEventListener(`pointermove`,rn),removeEventListener(`resize`,He),document.documentElement.removeEventListener(`pointerleave`,an),document.removeEventListener(`visibilitychange`,on),p.removeEventListener(`webglcontextlost`,sn),p.removeEventListener(`webglcontextrestored`,cn),ke?.removeEventListener?.(`change`,Ae),Ue?.disconnect();for(let e of V.values())e.pos.dispose(),e.col.dispose();V.clear();for(let e of Re.values())e.geometry.dispose();w.dispose(),Ie.dispose(),M.dispose(),Ge.dispose(),N.forEach(e=>e.dispose()),Ye.dispose(),b.dispose()}}}export{v as createField};