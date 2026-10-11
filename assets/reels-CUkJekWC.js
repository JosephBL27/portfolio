import{t as e,u as t}from"./projects-CnSkbXN_.js";var n={id:`test`,projectId:`selforge`,title:`Test card`,medium:`Placeholder test card`,colors:{bg:`#0b0b0c`,ink:`#f2efe8`,accent:`#ff5a3c`},frag:`precision highp float;
uniform float uTime; uniform vec2 uRes; uniform vec2 uMouse;
void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float bars = floor(uv.x * 7.0);
  vec3 c = 0.5 + 0.5 * cos(6.2831 * (bars / 7.0 + vec3(0.0, 0.33, 0.67)));
  float r = length(p);
  c = mix(c, vec3(0.06), smoothstep(0.30, 0.31, r) * smoothstep(0.45, 0.44, r));
  c *= 0.85 + 0.15 * sin(uTime * 3.0 + uv.y * 40.0);
  gl_FragColor = vec4(c, 1.0);
}`},r={id:`ember`,projectId:`selforge`,title:`Ember`,medium:`Generative flame, after the app's code-drawn mascot`,colors:{bg:`#0A0908`,ink:`#F4E9DA`,accent:`#FF6A4D`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;

#define TAU 6.2831853
#define REP 1.25
#define CYCLE 14.5

float h21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), u.x),
             mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) {
    s += a * vnoise(p);
    p = mat2(1.6, 1.2, -1.2, 1.6) * p + vec2(3.1, 1.7);
    a *= 0.5;
  }
  return s;
}

float fbm3(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 3; i++) {
    s += a * vnoise(p);
    p = mat2(1.6, 1.2, -1.2, 1.6) * p + vec2(3.1, 1.7);
    a *= 0.5;
  }
  return s * 1.143;
}

// heat 0..1 -> black body ramp: ember red, vermilion, gold, white-hot core
vec3 fireRamp(float h) {
  vec3 c = mix(vec3(0.0), vec3(0.42, 0.04, 0.015), smoothstep(0.0, 0.16, h));
  c = mix(c, vec3(1.0, 0.30, 0.15), smoothstep(0.10, 0.36, h));
  c = mix(c, vec3(1.0, 0.56, 0.18), smoothstep(0.32, 0.58, h));
  c = mix(c, vec3(1.0, 0.82, 0.44), smoothstep(0.55, 0.80, h));
  c = mix(c, vec3(1.0, 0.98, 0.93), smoothstep(0.78, 0.97, h));
  return c;
}

float sdSeg(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a, ba = b - a;
  float k = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * k);
}

void main() {
  float I = clamp(uIntensity, 0.0, 1.0);
  float px = 1.0 / uRes.y;
  vec2 p0 = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float T = mod(uTime, 3600.0) + uSeed * 40.0;

  // ---- rep clock: up, down, up; tick lights as the cycle closes ----
  float lt = mod(T, CYCLE);
  float done = min(floor(lt / REP), 10.0);          // reps completed
  float ph = fract(lt / REP);                        // phase inside the current rep
  float counting = step(lt, 10.0 * REP);               // 1 while counting, 0 during the flash
  float depth = (smoothstep(0.06, 0.40, ph) - smoothstep(0.56, 0.94, ph)) * counting;
  float since = lt - 10.0 * REP;                     // seconds since the tenth rep
  float flash = (1.0 - counting) * exp(-since * 2.6);
  float lastLit = (lt - (done) * REP);               // seconds since the last tick lit
  float pop = (done > 0.5 ? exp(-lastLit * 5.0) : 0.0) * counting;

  // ---- heat shimmer: air above the flame wobbles everything behind it ----
  float shimMask = smoothstep(-0.05, 0.25, p0.y) * exp(-p0.x * p0.x * 14.0);
  vec2 shim = vec2(vnoise(p0 * 26.0 + vec2(0.0, -T * 5.0)), vnoise(p0 * 26.0 + vec2(7.3, -T * 5.0))) - 0.5;
  vec2 p = p0 + shim * 0.006 * shimMask * (0.4 + 0.6 * I);

  // ---- flame (only evaluated inside its box) ----
  float squash = 1.0 - 0.12 * depth + 0.07 * pop + 0.12 * flash;
  float H = 0.52 * squash;
  vec2 fb = vec2(0.0, -0.215);                       // flame base
  float lean = (vnoise(vec2(T * 0.45, 3.7 + uSeed * 9.0)) - 0.5) * 0.30 + (uMouse.x - 0.5) * 0.36;
  float heat = 0.0;
  if (abs(p.x) < 0.36 && p.y > fb.y - 0.14 && p.y < fb.y + H * 1.25) {
    vec2 q = (p - fb) / H;
    float y = q.y;
    float yc = clamp(y, 0.0, 1.2);
    q.x -= ((vnoise(vec2(yc * 1.3 - T * 0.8, T * 0.21 + uSeed * 5.0)) - 0.5) * 0.5 + lean) * yc * yc;
    q.x *= 1.0 + 0.12 * depth;
    vec2 nq = vec2(q.x * 2.3, y * 1.45 - T * 1.75);
    vec2 warp = vec2(fbm3(nq + vec2(1.7, uSeed * 11.0)), fbm3(nq + vec2(8.3, 2.8)));
    float n = fbm(nq * 1.7 + (warp - 0.5) * 2.2 * (0.6 + 0.4 * I) + vec2(0.0, -T * 1.1));
    float halfW = 0.29 * sqrt(clamp((y + 0.15) / 0.34, 0.0, 1.0)) * pow(clamp(1.0 - y * 0.92, 0.0, 1.0), 0.9) + 0.002;
    float ax = q.x / halfW;
    float env = clamp(1.0 - ax * ax, -1.0, 1.0) * step(-0.149, y);
    float h = env * (0.86 - y * 0.38) - (1.0 - n) * (0.20 + 1.0 * yc);
    h += 0.34 * exp(-pow(q.x / 0.07, 2.0) - pow((y - 0.10) / 0.13, 2.0));   // white-hot core
    h *= 0.92 + 0.35 * flash + 0.22 * pop;
    h = smoothstep(0.0, 0.92, h);
    heat = clamp(h + (n - 0.5) * 0.22 * h * (1.0 - h), 0.0, 1.0);   // inner striations
  }
  vec3 fire = fireRamp(heat) * smoothstep(0.015, 0.14, heat) * 1.18;

  // ---- halo light and a halftone aura: the flame's shadow-self, drawn in dots ----
  vec2 hp = (p - vec2(0.0, fb.y + H * 0.36)) * vec2(1.25, 0.95);
  float halo = exp(-length(hp) * 4.2) * (0.85 + 0.3 * flash + 0.2 * pop + 0.08 * sin(T * 11.0) * I);
  vec3 col = vec3(0.024, 0.020, 0.019);
  float cellPx = uRes.y / 72.0;
  vec2 hc = gl_FragCoord.xy / cellPx;
  vec2 hcell = floor(hc);
  vec2 hcen = (hcell + 0.5) * cellPx;                  // sample the aura at the dot centre
  vec2 pa = (hcen - 0.5 * uRes) / uRes.y;
  float aura = 0.0;
  float AH = 0.80 * squash;
  vec2 ab = vec2(0.0, -0.285);
  if (abs(pa.x) < 0.5 && pa.y > ab.y - 0.05 && pa.y < ab.y + AH * 1.15) {
    vec2 aq = (pa - ab) / AH;
    float ay = clamp(aq.y, 0.0, 1.2);
    aq.x -= ((vnoise(vec2(ay * 1.1 - T * 0.5, T * 0.13)) - 0.5) * 0.5 + lean * 0.8) * ay * ay;
    float an = fbm3(vec2(aq.x * 1.9, aq.y * 1.25 - T * 0.85) + uSeed * 3.0);
    float aw = 0.33 * sqrt(clamp((aq.y + 0.06) / 0.3, 0.0, 1.0)) * pow(clamp(1.0 - aq.y * 0.9, 0.0, 1.0), 0.8) + 0.002;
    float aax = aq.x / aw;
    aura = clamp(1.0 - aax * aax, -1.0, 1.0) * (1.0 - aq.y * 0.35) - (1.0 - an) * (0.18 + 0.85 * ay);
    aura = smoothstep(0.0, 0.55, aura) * smoothstep(0.98, 0.72, aq.y) * (0.92 + 0.25 * flash + 0.12 * pop);
  }
  float hd = length(fract(hc) - 0.5);
  float rad = sqrt(clamp(aura, 0.0, 1.0)) * 0.54;
  float dotm = 1.0 - smoothstep(rad - 0.06, rad + 0.04, hd);
  float crisp = smoothstep(2.6, 5.5, cellPx);
  float ht = mix(aura * 0.42, dotm, crisp) * step(0.04, aura);
  vec3 dotCol = mix(vec3(0.42, 0.06, 0.03), vec3(1.0, 0.36, 0.22), smoothstep(0.1, 0.9, aura));
  col += dotCol * ht * 0.78;
  col += vec3(1.0, 0.34, 0.16) * halo * 0.09;

  // ---- rep ring ----
  vec2 rp = p;
  float rr = length(rp);
  float ang = atan(rp.x, rp.y);                      // 0 at 12 o'clock, clockwise
  float a01 = fract(ang / TAU);
  // fine dial
  float minor = fract(a01 * 60.0 + 0.5) - 0.5;
  float minorD = abs(minor) * TAU * rr / 60.0;
  float dial = smoothstep(px * 1.2, 0.0, minorD - px * 0.25) * smoothstep(0.418, 0.416, rr) * smoothstep(0.404, 0.406, rr);
  float hair = smoothstep(px * 1.3, 0.0, abs(rr - 0.322)) + smoothstep(px * 1.3, 0.0, abs(rr - 0.428));
  col += vec3(0.30, 0.29, 0.28) * dial * 0.8 + vec3(0.17, 0.16, 0.155) * hair;
  // ten rep ticks
  float seg = a01 * 10.0;
  float idx = floor(seg + 0.5);
  float da = (seg - idx) / 10.0 * TAU * rr;
  idx = mod(idx, 10.0);
  float R0 = 0.338, R1 = 0.392;
  float tickD = length(vec2(da, rr - clamp(rr, R0, R1)));
  float tw = 0.0085;
  float tick = smoothstep(tw + px, tw - px, tickD);
  float tickGlow = exp(-tickD * 70.0);
  float lit = step(idx + 0.5, done);
  float fade = 1.0 - smoothstep(0.5, 1.9, since) * (1.0 - counting);   // all ticks drain after the flash
  lit *= fade;
  float isNew = step(abs(idx - (done - 1.0)), 0.1) * pop;
  float isCur = step(abs(idx - done), 0.1) * counting;
  float fillTo = R0 + (R1 - R0) * smoothstep(0.0, 0.95, ph);
  float partial = isCur * step(rr, fillTo) * (0.35 + 0.65 * depth);
  float radial = clamp((rr - R0) / (R1 - R0), 0.0, 1.0);
  vec3 litCol = mix(vec3(1.0, 0.86, 0.50), vec3(1.0, 0.36, 0.20), radial);
  litCol = mix(litCol, vec3(1.0, 0.97, 0.9), isNew * 0.8 + flash * 0.9);
  vec3 offCol = vec3(0.13, 0.125, 0.12);
  float on = max(lit, partial * 0.55);
  vec3 tickCol = offCol * (1.0 - on) + mix(vec3(0.62, 0.08, 0.03), litCol, on * on) * on;
  col = mix(col, tickCol, tick);
  col += litCol * tickGlow * (lit * 0.55 + isNew * 1.4 + partial * 0.25 + flash * 0.8) * (0.6 + 0.4 * I);

  // completion shockwave
  float wave = (1.0 - counting) * exp(-since * 1.6);
  float wr = 0.36 + since * 0.55;
  col += vec3(1.0, 0.55, 0.28) * smoothstep(0.02, 0.0, abs(rr - wr)) * wave * 0.9 * (0.5 + 0.5 * I);

  // ---- flame over everything ----
  col = col * (1.0 - smoothstep(0.0, 0.18, heat)) + fire;

  // ---- embers rising ----
  for (int L = 0; L < 3; L++) {
    float fl = float(L);
    float sc = 16.0 + fl * 10.0;
    vec2 sp = p * sc;
    float spd = 2.2 + fl * 0.9;
    sp.y -= T * spd;
    sp.x += sin(sp.y * 0.55 + fl * 2.0 + T * 0.7) * 0.35;
    vec2 id = floor(sp);
    vec2 f = fract(sp) - 0.5;
    float r1 = h21(id + fl * 31.0 + floor(uSeed * 50.0));
    vec2 off = (vec2(h21(id + 3.1), h21(id + 7.7)) - 0.5) * 0.55;
    float ed = length((f - off) * vec2(1.0, 0.42)) * 0.85;
    float spread = 0.07 + max(p.y + 0.05, 0.0) * 0.6;
    float column = exp(-pow(p.x - lean * 0.18 * max(p.y + 0.2, 0.0), 2.0) / (spread * spread));
    float life = smoothstep(-0.06, 0.12, p.y) * (1.0 - smoothstep(0.18, 0.56, p.y + r1 * 0.14));
    float on = step(r1, 0.30 + 0.25 * I + 0.25 * flash);
    float twk = 0.55 + 0.45 * sin(T * (6.0 + r1 * 9.0) + r1 * 40.0);
    float spark = smoothstep(0.075, 0.0, ed) * on * column * life * twk;
    vec3 sc3 = mix(vec3(1.0, 0.42, 0.18), vec3(1.0, 0.85, 0.55), r1 * 2.5);
    col += sc3 * spark * (1.4 - fl * 0.3);
    col += sc3 * exp(-ed * 9.0) * on * column * life * 0.06;
  }

  // flash bloom
  col += vec3(1.0, 0.62, 0.32) * flash * exp(-length(p) * 3.0) * 0.35;

  // ---- grade: soft shoulder, vignette, grain ----
  col = col / (1.0 + 0.22 * max(col - 0.8, 0.0));
  float vig = smoothstep(1.25, 0.25, length(p0 * vec2(0.85, 1.05)));
  col *= 0.35 + 0.65 * vig;
  float g = h21(gl_FragCoord.xy + fract(T * 13.7) * 311.0) - 0.5;
  col += g * (0.035 + 0.025 * I);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`},i={id:`synapse`,projectId:`second-brain`,title:`Synapse`,medium:`A link graph firing, after the vault's notes and links`,colors:{bg:`#08080A`,ink:`#EEE8DA`,accent:`#FF5A3D`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;

const float SY_P = 3.4;      // seconds between waves leaving the core
const float SY_V = 2.35;     // seconds of travel per screen unit

float sh1(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float sh2(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 sh22(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float sss(float a, float b, float x) { float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
vec2 srot(vec2 v, float a) { float c = cos(a), s = sin(a); return vec2(c * v.x - s * v.y, s * v.x + c * v.y); }

float sWave(float wi, float ta, float Ls) {
  float a = sh1(wi * 3.17 + Ls * 1.31 + 0.5);
  float reach = mix(1.3, 3.8, sh1(wi * 7.13 + Ls * 2.9 + 1.5));
  return (0.45 + 0.55 * a) * sss(reach, reach * 0.45, ta);
}

float sKeep(vec2 a, vec2 b, float Ls) {
  vec2 dd = b - a;
  float hs = sh2(a + b + abs(dd) * vec2(17.3, 31.7) + Ls);
  if (abs(dd.x) + abs(dd.y) > 1.5) {
    float mainD = step(0.0, dd.x * dd.y);
    float pick = step(0.5, sh2(min(a, b) * 1.31 + Ls + 3.7));
    return (abs(mainD - pick) < 0.5 ? 1.0 : 0.0) * step(hs, 0.84);
  }
  return step(hs, 0.80);
}

// cheap cull: is the pixel within reach of the segment A-B at all
bool sNear(vec2 w, vec2 A, vec2 B, float zoom, float lim) {
  vec2 pa = w - A, ba = B - A;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h) / zoom <= lim;
}

// one edge, A to B (world units); pulse runs from the earlier arrival to the later one
vec3 sEdge(vec2 w, vec2 A, vec2 B, float tA, float tB, float tl, float zoom, float lw, float soft, float px, float Ls, float vis, vec3 CREAM, vec3 VERM) {
  vec2 pa = w - A, ba = B - A;
  float ll = dot(ba, ba);
  float h = clamp(dot(pa, ba) / ll, 0.0, 1.0);
  float d = length(pa - ba * h) / zoom;
  if (d > 0.02 + soft * 3.0) return vec3(0.0);
  float norm = min(1.0, (lw + 1.5 * px) / (lw + soft));
  float core = (1.0 - sss(lw, lw + soft + px, d)) * norm;
  float t0 = min(tA, tB), t1 = max(tA, tB);
  float hh = tA <= tB ? h : 1.0 - h;
  float dl = t1 - t0 + 0.07;
  float rel = tl - t0;
  float tau = mod(rel, SY_P);
  float str = sWave(floor(rel / SY_P), t0, Ls);
  float reach = tau - hh * dl;
  float en = reach > 0.0 ? exp(-reach * 2.8) : 0.0;
  float along = (tau / dl - hh) * sqrt(ll);
  float head = tau < dl + 0.05 ? exp(-along * along * 70.0) : 0.0;
  vec3 c = CREAM * 0.06 * vis * core;
  c += mix(CREAM, VERM, 0.8) * en * 0.5 * str * (core + exp(-d / (0.004 + soft)) * 0.15 * norm);
  c += (VERM * 1.8 + vec3(1.0, 0.85, 0.75) * 1.1 * head) * head * str * (core * 1.6 + exp(-d / (0.0035 + soft)) * 0.7 * norm);
  return c;
}

void main() {
  float I = clamp(uIntensity, 0.0, 1.0);
  float S = min(uRes.y, uRes.x / 1.3);
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / S;
  float px = 1.0 / S;
  vec2 mo = uMouse - 0.5;
  float t = uTime + uSeed * 37.0;
  // screens of 300..760 px are shown minified (the TV renders 960x720 into a ~300 px picture), so strokes
  // widen and brighten there; at 800 px and up the drawing is untouched
  float mf = mix(clamp(uRes.y / 300.0, 1.0, 2.4), 1.0, sss(700.0, 800.0, uRes.y));
  float mb = 1.0 + 0.85 * (mf - 1.0);
  vec3 CREAM = vec3(0.93, 0.89, 0.81);
  vec3 VERM = vec3(1.0, 0.33, 0.20);
  vec3 col = vec3(0.018, 0.018, 0.022) + vec3(0.035, 0.018, 0.016) * exp(-length(p) * 2.2);

  for (int L = 0; L < 3; L++) {
    float fl = float(L);
    float dens = fl < 0.5 ? 12.5 : (fl < 1.5 ? 6.2 : 2.6);
    float par = fl < 0.5 ? 0.012 : (fl < 1.5 ? 0.032 : 0.10);
    float bright = fl < 0.5 ? 0.36 : (fl < 1.5 ? 1.0 : mix(0.20, 0.5, I));
    float soft = fl < 0.5 ? 0.0012 : (fl < 1.5 ? 0.0 : 0.012);
    float lw = (fl < 0.5 ? 0.00045 : (fl < 1.5 ? 0.0007 : 0.0016)) * mf;
    float nsc = (fl < 0.5 ? 0.6 : (fl < 1.5 ? 1.0 : 2.2)) * pow(mf, 0.7);
    float tl = t - (fl < 0.5 ? 0.5 : (fl < 1.5 ? 0.0 : -0.3));
    float ang = t * (fl < 0.5 ? 0.010 : (fl < 1.5 ? -0.006 : 0.004)) + fl * 1.7;
    float zoom = dens * (1.0 + 0.03 * sin(t * 0.17 + fl * 2.0));
    float Ls = fl * 19.31 + 0.7;
    vec2 cs = -mo * par;
    vec2 cw = vec2(0.37 + fl * 17.0, 0.61 + fl * 9.0);
    vec2 w = srot(p - cs, ang) * zoom + cw;
    vec2 ci = floor(w);
    float soft2 = soft + px;

    float vis = mix(0.30, 1.0, exp(-length(p - cs) * 1.5));
    vec2 np[9]; float ta[9]; float ex[9];
    vec3 lc = vec3(0.0);
    // nodes (computed once, drawn in the same pass)
    for (int j = 0; j < 9; j++) {
      vec2 id = ci + vec2(float(j - (j / 3) * 3) - 1.0, float(j / 3) - 1.0);
      vec2 jit = sh22(id + Ls);
      vec2 pos = id + 0.5 + (jit - 0.5) * 0.72 + 0.05 * vec2(sin(t * 0.55 + jit.x * 6.28), cos(t * 0.47 + jit.y * 6.28));
      float dist = length(pos - cw);
      float e = step(0.14, sh2(id * 1.7 + Ls)) * step(0.85, dist);
      float tn = (dist + 0.85 * sh2(id * 3.1 + Ls)) / dens * SY_V;
      np[j] = pos; ex[j] = e; ta[j] = tn;
      if (e < 0.5) continue;
      float dn = length(w - pos) / zoom;
      float hub = pow(sh2(id * 5.3 + Ls), 5.0);
      float rN = (0.0036 + 0.0095 * hub) * nsc;
      if (dn > rN * 6.0 + 0.04 + soft2 * 3.0) continue;
      float rel = tl - tn;
      float tau = mod(rel, SY_P);
      float str = sWave(floor(rel / SY_P), tn, Ls);
      float fl2 = exp(-tau * 3.0) * str;
      float rN2 = rN * (1.0 + 0.6 * fl2);
      float norm = min(1.0, (rN + px) / (rN + soft2));
      float disc = (1.0 - sss(rN2 - px, rN2 + soft2, dn)) * norm;
      float halo = exp(-dn / (rN * 2.2 + soft2 + 0.003)) * norm;
      float rip = exp(-abs(dn - (rN2 + 0.004 + tau * 0.06)) / (0.0016 + soft2)) * exp(-tau * 2.4) * str * norm;
      lc += mix(CREAM * 0.75 * vis, vec3(1.0, 0.95, 0.88) * 1.8, fl2) * disc;
      lc += VERM * (halo * ((0.015 + 0.06 * hub) * vis + 1.1 * fl2) + rip * 0.6);
    }
    // edges: centre cell to its 8 neighbours, plus the 4 ring pairs that can cross the centre cell
    for (int j = 0; j < 9; j++) {
      if (j == 4) continue;
      vec2 o = vec2(float(j - (j / 3) * 3) - 1.0, float(j / 3) - 1.0);
      if (ex[4] * ex[j] > 0.5 && sNear(w, np[4], np[j], zoom, 0.02 + soft2 * 3.0) && sKeep(ci, ci + o, Ls) > 0.5)
        lc += sEdge(w, np[4], np[j], ta[4], ta[j], tl, zoom, lw, soft2, px, Ls, vis, CREAM, VERM);
    }
    if (ex[1] * ex[3] > 0.5 && sNear(w, np[1], np[3], zoom, 0.02 + soft2 * 3.0) && sKeep(ci + vec2(0.0, -1.0), ci + vec2(-1.0, 0.0), Ls) > 0.5) lc += sEdge(w, np[1], np[3], ta[1], ta[3], tl, zoom, lw, soft2, px, Ls, vis, CREAM, VERM);
    if (ex[1] * ex[5] > 0.5 && sNear(w, np[1], np[5], zoom, 0.02 + soft2 * 3.0) && sKeep(ci + vec2(0.0, -1.0), ci + vec2(1.0, 0.0), Ls) > 0.5) lc += sEdge(w, np[1], np[5], ta[1], ta[5], tl, zoom, lw, soft2, px, Ls, vis, CREAM, VERM);
    if (ex[7] * ex[3] > 0.5 && sNear(w, np[7], np[3], zoom, 0.02 + soft2 * 3.0) && sKeep(ci + vec2(0.0, 1.0), ci + vec2(-1.0, 0.0), Ls) > 0.5) lc += sEdge(w, np[7], np[3], ta[7], ta[3], tl, zoom, lw, soft2, px, Ls, vis, CREAM, VERM);
    if (ex[7] * ex[5] > 0.5 && sNear(w, np[7], np[5], zoom, 0.02 + soft2 * 3.0) && sKeep(ci + vec2(0.0, 1.0), ci + vec2(1.0, 0.0), Ls) > 0.5) lc += sEdge(w, np[7], np[5], ta[7], ta[5], tl, zoom, lw, soft2, px, Ls, vis, CREAM, VERM);

    // the core: its first ring of links
    if (fl > 0.5 && fl < 1.5) {
      vec2 cc = floor(cw);
      for (int j = 0; j < 9; j++) {
        vec2 id = cc + vec2(float(j - (j / 3) * 3) - 1.0, float(j / 3) - 1.0);
        vec2 jit = sh22(id + Ls);
        vec2 pos = id + 0.5 + (jit - 0.5) * 0.72 + 0.05 * vec2(sin(t * 0.55 + jit.x * 6.28), cos(t * 0.47 + jit.y * 6.28));
        float dist = length(pos - cw);
        float e = step(0.14, sh2(id * 1.7 + Ls)) * step(0.85, dist) * step(dist, 1.75);
        if (e < 0.5) continue;
        float tn = (dist + 0.85 * sh2(id * 3.1 + Ls)) / dens * SY_V;
        lc += sEdge(w, cw, pos, 0.0, tn, tl, zoom, lw * 1.3, soft2, px, Ls, 1.0, CREAM, VERM) * 1.2;
      }
    }
    col += lc * bright * mb;
  }

  // core
  {
    vec2 cs = -mo * 0.032;
    float dc = length(p - cs);
    float tc = mod(t, SY_P);
    float beat = exp(-tc * 3.6);
    float rc = 0.019 * (1.0 + 0.18 * beat);
    col += vec3(1.0, 0.96, 0.9) * (1.0 - sss(rc - px, rc + px, dc)) * (1.1 + 0.9 * beat);
    col += VERM * (exp(-dc / 0.028) * 0.45 + exp(-dc / 0.11) * 0.16) * (0.55 + 0.9 * beat);
    col += CREAM * exp(-abs(dc - 0.040) / max(px, 0.0006)) * 0.22;
    float dash = step(0.5, fract(atan(p.y - cs.y, p.x - cs.x) / 6.2831853 * 48.0 + t * 0.05));
    col += CREAM * exp(-abs(dc - 0.062) / max(px, 0.0006)) * 0.13 * dash * sss(260.0, 480.0, S);
    float wf = tc / SY_V;
    col += VERM * exp(-abs(dc - wf) / 0.01) * 0.07 * (1.0 - tc / SY_P) * smoothstep(0.03, 0.08, wf) * I;
  }

  col = 1.0 - exp(-col * 1.15);
  float vig = 1.0 - sss(0.35, 1.2, length(p * vec2(0.82, 1.06)));
  col *= mix(0.38, 1.0, vig);
  col += (sh2(gl_FragCoord.xy + fract(uTime * 7.31) * 157.0) - 0.5) * mix(0.012, 0.036, I);
  gl_FragColor = vec4(max(col, 0.0), 1.0);
}`},a={" ":[`.....`,`.....`,`.....`,`.....`,`.....`,`.....`,`.....`],0:[`.###.`,`#...#`,`#..##`,`#.#.#`,`##..#`,`#...#`,`.###.`],1:[`..#..`,`.##..`,`..#..`,`..#..`,`..#..`,`..#..`,`.###.`],2:[`.###.`,`#...#`,`....#`,`...#.`,`..#..`,`.#...`,`#####`],3:[`.###.`,`#...#`,`....#`,`..##.`,`....#`,`#...#`,`.###.`],4:[`...#.`,`..##.`,`.#.#.`,`#..#.`,`#####`,`...#.`,`...#.`],5:[`#####`,`#....`,`####.`,`....#`,`....#`,`#...#`,`.###.`],6:[`..##.`,`.#...`,`#....`,`####.`,`#...#`,`#...#`,`.###.`],7:[`#####`,`....#`,`...#.`,`..#..`,`.#...`,`.#...`,`.#...`],8:[`.###.`,`#...#`,`#...#`,`.###.`,`#...#`,`#...#`,`.###.`],9:[`.###.`,`#...#`,`#...#`,`.####`,`....#`,`...#.`,`.##..`],A:[`.###.`,`#...#`,`#...#`,`#####`,`#...#`,`#...#`,`#...#`],B:[`####.`,`#...#`,`#...#`,`####.`,`#...#`,`#...#`,`####.`],C:[`.####`,`#....`,`#....`,`#....`,`#....`,`#....`,`.####`],D:[`####.`,`#...#`,`#...#`,`#...#`,`#...#`,`#...#`,`####.`],E:[`#####`,`#....`,`#....`,`####.`,`#....`,`#....`,`#####`],F:[`#####`,`#....`,`#....`,`####.`,`#....`,`#....`,`#....`],G:[`.####`,`#....`,`#....`,`#.###`,`#...#`,`#...#`,`.####`],H:[`#...#`,`#...#`,`#...#`,`#####`,`#...#`,`#...#`,`#...#`],I:[`.###.`,`..#..`,`..#..`,`..#..`,`..#..`,`..#..`,`.###.`],J:[`..###`,`...#.`,`...#.`,`...#.`,`...#.`,`#..#.`,`.##..`],K:[`#...#`,`#..#.`,`#.#..`,`##...`,`#.#..`,`#..#.`,`#...#`],L:[`#....`,`#....`,`#....`,`#....`,`#....`,`#....`,`#####`],M:[`#...#`,`##.##`,`#.#.#`,`#.#.#`,`#...#`,`#...#`,`#...#`],N:[`#...#`,`##..#`,`#.#.#`,`#..##`,`#...#`,`#...#`,`#...#`],O:[`.###.`,`#...#`,`#...#`,`#...#`,`#...#`,`#...#`,`.###.`],P:[`####.`,`#...#`,`#...#`,`####.`,`#....`,`#....`,`#....`],Q:[`.###.`,`#...#`,`#...#`,`#...#`,`#.#.#`,`#..#.`,`.##.#`],R:[`####.`,`#...#`,`#...#`,`####.`,`#.#..`,`#..#.`,`#...#`],S:[`.####`,`#....`,`#....`,`.###.`,`....#`,`....#`,`####.`],T:[`#####`,`..#..`,`..#..`,`..#..`,`..#..`,`..#..`,`..#..`],U:[`#...#`,`#...#`,`#...#`,`#...#`,`#...#`,`#...#`,`.###.`],V:[`#...#`,`#...#`,`#...#`,`#...#`,`#...#`,`.#.#.`,`..#..`],W:[`#...#`,`#...#`,`#...#`,`#.#.#`,`#.#.#`,`##.##`,`#...#`],X:[`#...#`,`#...#`,`.#.#.`,`..#..`,`.#.#.`,`#...#`,`#...#`],Y:[`#...#`,`#...#`,`.#.#.`,`..#..`,`..#..`,`..#..`,`..#..`],Z:[`#####`,`....#`,`...#.`,`..#..`,`.#...`,`#....`,`#####`],".":[`.....`,`.....`,`.....`,`.....`,`.....`,`.##..`,`.##..`],":":[`.....`,`.##..`,`.##..`,`.....`,`.##..`,`.##..`,`.....`],"/":[`....#`,`....#`,`...#.`,`..#..`,`.#...`,`#....`,`#....`],"-":[`.....`,`.....`,`.....`,`#####`,`.....`,`.....`,`.....`],"+":[`.....`,`..#..`,`..#..`,`#####`,`..#..`,`..#..`,`.....`],"%":[`##..#`,`##..#`,`...#.`,`..#..`,`.#...`,`#..##`,`#..##`],$:[`..#..`,`.####`,`#.#..`,`.###.`,`..#.#`,`####.`,`..#..`],"×":[`.....`,`#...#`,`.#.#.`,`..#..`,`.#.#.`,`#...#`,`.....`],"=":[`.....`,`.....`,`#####`,`.....`,`#####`,`.....`,`.....`],"<":[`...#.`,`..#..`,`.#...`,`#....`,`.#...`,`..#..`,`...#.`],">":[`.#...`,`..#..`,`...#.`,`....#`,`...#.`,`..#..`,`.#...`],"?":[`.###.`,`#...#`,`....#`,`...#.`,`..#..`,`.....`,`..#..`],"(":[`...#.`,`..#..`,`.#...`,`.#...`,`.#...`,`..#..`,`...#.`],")":[`.#...`,`..#..`,`...#.`,`...#.`,`...#.`,`..#..`,`.#...`],",":[`.....`,`.....`,`.....`,`.....`,`.##..`,`..#..`,`.#...`],"*":[`.....`,`..#..`,`#.#.#`,`.###.`,`#.#.#`,`..#..`,`.....`],"'":[`..#..`,`..#..`,`.#...`,`.....`,`.....`,`.....`,`.....`],_:[`.....`,`.....`,`.....`,`.....`,`.....`,`.....`,`#####`],"#":[`.#.#.`,`#####`,`.#.#.`,`.#.#.`,`#####`,`.#.#.`,`.....`],"→":[`.....`,`..#..`,`...#.`,`#####`,`...#.`,`..#..`,`.....`],"←":[`.....`,`..#..`,`.#...`,`#####`,`.#...`,`..#..`,`.....`],"↑":[`..#..`,`.###.`,`#.#.#`,`..#..`,`..#..`,`..#..`,`..#..`],"↓":[`..#..`,`..#..`,`..#..`,`#.#.#`,`.###.`,`..#..`,`.....`]},o=Object.keys(a),s=o.length,c=e=>{let t=o.indexOf(e);if(t<0)throw Error(`font: no glyph for "${e}"`);return t.toFixed(1)},l=e=>e.length*6-1,u=e=>{if(e.length>12)throw Error(`font: "${e}" is longer than 12 characters`);let t=[0,0,0,0];for(let n=0;n<e.length;n++)t[Math.floor(n/3)]+=o.indexOf(e[n])*s**(n%3);return`vec4(${t.map(e=>e.toFixed(1)).join(`, `)}), ${e.length.toFixed(1)}`};function ee(e){let t=a[e].map(e=>e.split(``).reduce((e,t,n)=>e+(t===`#`?1<<n:0),0));return[t[0]+t[1]*32+t[2]*1024+t[3]*32768,t[4]+t[5]*32+t[6]*1024]}function d(e,t,n){if(t-e===1){let[t,r]=ee(o[e]);return`${n}return vec2(${t.toFixed(1)}, ${r.toFixed(1)});\n`}let r=e+t>>1;return`${n}if (c < ${(r-.5).toFixed(1)}) {\n${d(e,r,n+`  `)}${n}} else {\n${d(r,t,n+`  `)}${n}}\n`}var f=`
vec2 fGlyphBits(float c) {
${d(0,s,`  `)}}
float fCode(vec4 s, float i) {
  float comp = i < 2.5 ? s.x : (i < 5.5 ? s.y : (i < 8.5 ? s.z : s.w));
  float k = i - 3.0 * floor(i / 3.0);
  float pw = k < 0.5 ? 1.0 : (k < 1.5 ? ${s.toFixed(1)} : ${(s*s).toFixed(1)});
  return mod(floor((comp + 0.5) / pw), ${s.toFixed(1)});
}
// one glyph; g in font pixels, x 0..5, y 0..7 (up). Lit pixels are soft rounded dots.
float fChar(vec2 g, float code, float sc) {
  vec2 cell = floor(g);
  if (cell.x < 0.0 || cell.x > 4.0 || cell.y < 0.0 || cell.y > 6.0) return 0.0;
  float cy = 6.0 - cell.y;
  vec2 bits = fGlyphBits(code);
  float f = cy < 3.5 ? bits.x : bits.y;
  float rk = cy < 3.5 ? cy : cy - 4.0;
  float pw = rk < 0.5 ? 1.0 : (rk < 1.5 ? 32.0 : (rk < 2.5 ? 1024.0 : 32768.0));
  float row = mod(floor((f + 0.5) / pw), 32.0);
  float bp = cell.x < 0.5 ? 1.0 : (cell.x < 1.5 ? 2.0 : (cell.x < 2.5 ? 4.0 : (cell.x < 3.5 ? 8.0 : 16.0)));
  float on = mod(floor((row + 0.5) / bp), 2.0);
  if (on < 0.5) return 0.0;
  vec2 d = abs(g - cell - 0.5) - 0.33;
  float sd = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - 0.12;
  return clamp(0.5 - sd * sc, 0.0, 1.0);
}
float fText(vec2 q, vec4 s, float n, float sc) {
  float i = floor(q.x / 6.0);
  if (i < 0.0 || i >= n || q.y < -0.6 || q.y > 7.6) return 0.0;
  return fChar(vec2(q.x - i * 6.0, q.y), fCode(s, i), sc);
}
`,p=`
#ifndef PI
#define PI 3.14159265
#endif
#ifndef TAU
#define TAU 6.2831853
#endif
float d2(vec2 v) { return dot(v, v); }
float sdBox(vec2 p, vec2 b, float r) { vec2 d = abs(p) - b + r; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - r; }
float sdHeart0(vec2 p) {
  p.x = abs(p.x);
  if (p.y + p.x > 1.0) return sqrt(d2(p - vec2(0.25, 0.75))) - 0.35355;
  return sqrt(min(d2(p - vec2(0.0, 1.0)), d2(p - 0.5 * max(p.x + p.y, 0.0)))) * sign(p.x - p.y);
}
float sdSuit(vec2 p, float s) {
  if (s < 0.5) {            // spade
    float b = sdHeart0(vec2(p.x, 0.46 - p.y) / 0.80) * 0.80;
    vec2 q = p - vec2(0.0, -0.33);
    float st = max(abs(q.x) - (0.04 + 0.11 * (-q.y - 0.02) * 1.5), abs(q.y) - 0.15);
    return min(b, st);
  } else if (s < 1.5) {     // heart
    return sdHeart0(vec2(p.x, p.y + 0.46) / 0.80) * 0.80;
  } else if (s < 2.5) {     // diamond
    return (abs(p.x) * 0.60 + abs(p.y) * 0.42 - 0.24) / 0.73;
  }
  float c1 = length(p - vec2(0.0, 0.21)) - 0.22;
  float c2 = length(p - vec2(-0.23, -0.10)) - 0.22;
  float c3 = length(p - vec2(0.23, -0.10)) - 0.22;
  vec2 q = p - vec2(0.0, -0.30);
  float st = max(abs(q.x) - (0.035 + 0.12 * (-q.y - 0.02) * 1.6), abs(q.y) - 0.16);
  return min(min(c1, min(c2, c3)), st);
}
float rankCode(float r) {
  if (r < 0.5) return ${c(`A`)};
  if (r < 8.5) return ${c(`2`)} + r - 1.0;
  if (r < 9.5) return ${c(`T`)};
  if (r < 10.5) return ${c(`J`)};
  if (r < 11.5) return ${c(`Q`)};
  return ${c(`K`)};
}

// a card in its own frame (centre origin, world units); W = width; flip 0 = back .. 1 = face
vec4 card(vec2 q, float W, float flip, vec2 rs, float px) {
  float Hh = W * 1.4;
  float sx = max(abs(cos(PI * flip)), 0.02);
  q.x /= sx;
  float d = sdBox(q, vec2(W, Hh) * 0.5, W * 0.09);
  float a = smoothstep(px * 1.2, -px * 0.4, d);
  if (a <= 0.0) return vec4(0.0);
  vec3 c;
  if (flip < 0.5) {
    vec2 u = q / W;
    float lat = min(abs(fract((u.x + u.y) * 7.0) - 0.5), abs(fract((u.x - u.y) * 7.0) - 0.5));
    c = mix(vec3(0.46, 0.06, 0.10), vec3(0.64, 0.10, 0.15), smoothstep(0.0, 0.5, lat));
    c += vec3(0.85, 0.62, 0.28) * smoothstep(0.045, 0.0, lat) * 0.55;
    float fr = abs(sdBox(q, vec2(W, Hh) * 0.5 - W * 0.09, W * 0.04));
    c = mix(c, vec3(0.93, 0.88, 0.76), smoothstep(W * 0.012 + px, W * 0.012 - px, fr) * 0.9);
  } else {
    vec3 ink = (rs.y > 0.5 && rs.y < 2.5) ? vec3(0.80, 0.11, 0.17) : vec3(0.06, 0.065, 0.085);
    c = mix(vec3(0.985, 0.965, 0.92), vec3(0.90, 0.87, 0.80), smoothstep(Hh * 0.5, -Hh * 0.5, q.y) * 0.35);
    float pd = sdSuit(q / (W * 0.58) - vec2(0.0, -0.05), rs.y) * W * 0.58;
    c = mix(c, ink, smoothstep(px * 1.2, -px * 0.4, pd));
    float k = W * 0.0425;
    vec2 tq = (q - vec2(-W * 0.5 + W * 0.09, Hh * 0.5 - W * 0.09 - 7.0 * k)) / k;
    c = mix(c, ink, fChar(tq, rankCode(rs.x), k / px) * 0.95);
    float pp = sdSuit((q - vec2(-W * 0.5 + W * 0.20, Hh * 0.5 - W * 0.09 - 7.0 * k - W * 0.11)) / (W * 0.15), rs.y) * W * 0.15;
    c = mix(c, ink, smoothstep(px * 1.2, -px * 0.4, pp));
    c *= 1.0 - (1.0 - sx) * 0.55;
  }
  c *= 0.96 + 0.06 * smoothstep(-Hh * 0.5, Hh * 0.5, q.y);
  c = mix(c, vec3(0.05), smoothstep(px * 2.0, 0.0, abs(d + px * 0.5)) * 0.35);
  return vec4(c, a);
}
float cardShadow(vec2 q, float W, float soft) {
  float d = sdBox(q, vec2(W, W * 1.4) * 0.5, W * 0.09);
  return exp(-max(d, 0.0) / soft) * smoothstep(soft * 3.0, 0.0, d) * 0.6;
}

// ---------- chips ----------
vec3 chipCol(float t) {
  if (t < 0.5) return vec3(0.88, 0.86, 0.80);
  if (t < 1.5) return vec3(0.78, 0.17, 0.16);
  if (t < 2.5) return vec3(0.16, 0.34, 0.80);
  if (t < 3.5) return vec3(0.07, 0.07, 0.08);
  if (t < 4.5) return vec3(0.15, 0.55, 0.36);
  return vec3(0.86, 0.64, 0.24);
}
vec4 chip(vec2 q, float R, float typ, float px) {
  float r = length(q);
  float a = smoothstep(px * 1.2, -px * 0.4, r - R);
  if (a <= 0.0) return vec4(0.0);
  vec3 body = chipCol(typ);
  float ang = atan(q.y, q.x);
  float stripe = step(0.5, fract(ang / TAU * 8.0 + 0.5));
  float rim = smoothstep(R * 0.80, R * 0.86, r);
  vec3 sc = typ > 2.5 && typ < 3.5 ? vec3(0.9) : vec3(0.95, 0.93, 0.88);
  vec3 c = body * (0.92 + 0.1 * smoothstep(R, 0.0, r));
  c = mix(c, sc, rim * stripe * 0.9);
  c = mix(c, c * 0.55, rim * (1.0 - stripe));
  c = mix(c, sc, smoothstep(px * 1.0, 0.0, abs(r - R * 0.62)) * 0.55);
  c *= 0.78 + 0.35 * smoothstep(R * 1.0, R * 0.2, length(q - vec2(-0.3, 0.4) * R));
  c = mix(c, vec3(0.04), smoothstep(px * 1.6, 0.0, abs(r - R + px * 0.5)) * 0.45);
  return vec4(c, a);
}


`,te={id:`felt`,projectId:`table-model`,title:`Felt`,medium:`A simulated poker table from above: cards dealt, bets swept, equity re-priced`,colors:{bg:`#04100C`,ink:`#F1EBDA`,accent:`#3FBF8A`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;
${f}
${p}
#define CYC 20.0
#define LH 0.30
#define RR 0.31
#define NS 7

float hand;
float lt;

float h21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), u.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), u.x), u.y);
}
float H(float a, float b) { return h21(vec2(a + hand * 17.31, b + 3.7 + hand * 0.37)); }
mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, s, -s, c); }
float sdStad(vec2 p, float L, float R) { p.x = abs(p.x); p.x = max(p.x - L, 0.0); return length(p) - R; }
float ease(float x) { x = clamp(x, 0.0, 1.0); return 1.0 - pow(1.0 - x, 3.0); }
float eio(float x) { x = clamp(x, 0.0, 1.0); return x * x * (3.0 - 2.0 * x); }

// ---------- seats and the hand ----------
vec4 seatG(float k) {
  if (k < 0.5) return vec4(0.0, -0.366, 0.0, 1.0);
  if (k < 1.5) return vec4(-0.30, -0.366, 0.0, 1.0);
  if (k < 2.5) return vec4(-0.664, 0.0, 1.0, 0.0);
  if (k < 3.5) return vec4(-0.30, 0.366, 0.0, -1.0);
  if (k < 4.5) return vec4(0.30, 0.366, 0.0, -1.0);
  if (k < 5.5) return vec4(0.664, 0.0, -1.0, 0.0);
  return vec4(0.30, -0.366, 0.0, 1.0);
}
float dealer() { return floor(H(0.0, 0.0) * 7.0); }
float orderOf(float k) { return mod(k - dealer() - 1.0 + 14.0, 7.0); }
float stageA() { return H(1.5, 0.0) < 0.80 ? 0.0 : floor(H(1.0, 0.0) * 7.0); }
float stageB() { return mod(stageA() + 1.0 + floor(H(2.0, 0.0) * 6.0), 7.0); }
// 0..3: folds during that betting round, 4: plays to the showdown
float foldStage(float k) {
  if (abs(k - stageA()) < 0.5 || abs(k - stageB()) < 0.5) return 4.0;
  float r = H(10.0 + k, 1.0);
  return r < 0.42 ? 0.0 : (r < 0.70 ? 1.0 : (r < 0.88 ? 2.0 : (r < 0.96 ? 3.0 : 4.0)));
}
float foldTime(float k) {
  float fs = foldStage(k);
  float base = fs < 0.5 ? 2.9 : (fs < 1.5 ? 6.3 : (fs < 2.5 ? 9.7 : 13.0));
  return fs > 3.5 ? 99.0 : base + 0.11 * orderOf(k);
}
float winner() { return H(3.0, 0.0) < 0.5 ? stageA() : stageB(); }
vec2 holeCard(float k, float c) { return vec2(floor(H(30.0 + k * 2.0 + c, 5.0) * 13.0), floor(H(50.0 + k * 2.0 + c, 6.0) * 4.0)); }
vec2 boardCard(float i) { return vec2(floor(H(80.0 + i, 7.0) * 13.0), floor(H(90.0 + i, 8.0) * 4.0)); }
float swT(float r) { return r < 0.5 ? 3.9 : (r < 1.5 ? 7.0 : (r < 2.5 ? 10.4 : 13.6)); }
float betT(float r) { return r < 0.5 ? 2.4 : (r < 1.5 ? 5.5 : (r < 2.5 ? 8.9 : 12.2)); }
float boardT(float i) { return i < 0.5 ? 4.2 : (i < 1.5 ? 4.36 : (i < 2.5 ? 4.52 : (i < 3.5 ? 7.5 : 10.9))); }
float streetStart(float s) { return s < 0.5 ? 0.0 : (s < 1.5 ? 4.9 : (s < 2.5 ? 8.2 : 11.6)); }
float curStreet() { return lt < 4.9 ? 0.0 : (lt < 8.2 ? 1.0 : (lt < 11.6 ? 2.0 : 3.0)); }
float strength(float k, float s) { float v = 0.10 + H(120.0 + k * 4.0 + s, 9.0); return v * v; }
float isActive(float k) { return lt < foldTime(k) ? 1.0 : 0.0; }
float seatDelay(float k) { vec4 g = seatG(k); return length(g.xy * vec2(0.75, 1.5)) / 0.55; }
// equity of seat k now, 0..1; moves when the pricing wave reaches the seat
float equity(float k) {
  float s = curStreet();
  float del = seatDelay(k);
  float a = eio((lt - streetStart(s) - 0.15 - del) / 0.6);
  float tot = 0.0, mine = 0.0;
  for (int j = 0; j < NS; j++) {
    float fj = float(j);
    float w = mix(strength(fj, max(s - 1.0, 0.0)), strength(fj, s), s < 0.5 ? 1.0 : a) * isActive(fj);
    tot += w;
    if (abs(fj - k) < 0.5) mine = w;
  }
  float e = tot > 0.0 ? mine / tot : 0.0;
  float fin = eio((lt - 14.3 - del) / 0.6);
  float win = abs(k - winner()) < 0.5 ? 1.0 : 0.0;
  float inShow = foldStage(k) > 3.5 ? 1.0 : 0.0;
  return mix(e, win, fin * inShow) * eio((lt - 2.1 - del) / 0.6);
}
float waveAt(float t0, vec2 p) {
  float age = lt - t0;
  if (age < 0.0 || age > 1.6) return 0.0;
  float r = length(p * vec2(0.75, 1.5));
  return exp(-abs(r - age * 0.55) / 0.014) * (1.0 - age / 1.6);
}

// ---------- the camera: a perspective view of the table plane, tilted and yawed by the pointer ----------
vec3 gC, gF, gU;
float gFoc, gS, gPsi;
vec4 planeHit(vec2 s, float z) {
  vec3 rd = normalize(gF * gFoc + vec3(1.0, 0.0, 0.0) * s.x + gU * s.y);
  float t = (z - gC.z) / rd.z;
  vec3 P = gC + rd * t;
  vec2 w = rot(gPsi) * P.xy;
  return vec4(w, t / (gFoc * gS) / sqrt(max(-rd.z, 0.25)), 0.0);
}
// a world point (on a plane at height z) back to screen space (S units, y up)
vec2 proj(vec2 W, float z) {
  vec3 P = vec3(rot(-gPsi) * W, z);
  vec3 v = P - gC;
  return gFoc * vec2(v.x, dot(v, gU)) / dot(v, gF);
}
void main() {
  float I = clamp(uIntensity, 0.0, 1.0);
  float S = min(uRes.y, uRes.x / 1.45);
  vec2 p0 = (gl_FragCoord.xy - 0.5 * uRes) / S;
  float Tm = mod(uTime, 7200.0) + uSeed * CYC;
  hand = floor(Tm / CYC);
  lt = Tm - hand * CYC;
  vec2 mo = uMouse - 0.5;
  // camera: 60 degrees up from the table, swaying slowly; the pointer yaws and tips it
  gS = S; gFoc = 2.4;
  float phi = 1.047 + 0.05 * sin(Tm * 0.15) + mo.y * 0.10;
  gPsi = 0.05 * sin(Tm * 0.21) + mo.x * 0.26;
  gC = gFoc * vec3(0.0, -cos(phi), sin(phi));
  gF = vec3(0.0, cos(phi), -sin(phi));
  gU = vec3(0.0, sin(phi), cos(phi));
  vec4 h0 = planeHit(p0, 0.0), h1 = planeHit(p0, 0.016), h2 = planeHit(p0, 0.030);
  vec2 p = h0.xy, pc = h1.xy, pa = h2.xy;      // felt, cards and chips, rail hardware
  float px = h0.z, pxc = h1.z, pxa = h2.z;
  float pxs = 1.0 / S;                          // screen pixel (S units)
  vec2 LD = normalize(vec2(-0.45, 0.85));
  vec3 acc = vec3(0.25, 0.80, 0.58);
  vec2 potC = vec2(0.0, 0.118);
  vec2 deck = vec2(0.0, 0.222);
  float cs = curStreet();

  // ===== room, rail, felt =====
  float dF = sdStad(p, LH, RR);
  vec3 col = vec3(0.008, 0.014, 0.014) + vec3(0.014, 0.030, 0.024) * exp(-dot(p0, p0) * 1.3);
  float railW = 0.046;
  col *= 1.0 - 0.8 * exp(-max(dF - railW, 0.0) / 0.06) * step(railW, dF);
  float par = abs(p.x) < LH ? p.x : sign(p.x) * (LH + atan(abs(p.y), abs(p.x) - LH) * (RR + dF));
  if (dF < railW + 0.01) {
    vec2 nrm = normalize(vec2(p.x - clamp(p.x, -LH, LH), p.y) + 1e-5);
    float t = clamp(dF / railW, 0.0, 1.0);
    float face = max(dot(nrm, LD), 0.0);
    vec3 lea = vec3(0.060, 0.040, 0.032) * (0.55 + 1.1 * face * sin(t * PI));
    lea += vec3(0.55, 0.40, 0.28) * pow(face, 2.5) * exp(-pow((t - 0.40) / 0.16, 2.0)) * 0.46;
    lea += vec3(0.10, 0.09, 0.08) * exp(-pow((t - 0.78) / 0.10, 2.0)) * 0.55 * (0.5 + face);
    float dash = smoothstep(0.35, 0.28, abs(fract(par * 95.0) - 0.5)) * smoothstep(px * 1.5, 0.0, abs(dF - railW * 0.58) - 0.0007);
    lea += vec3(0.45, 0.36, 0.26) * dash * 0.55;
    col = mix(col, lea, smoothstep(px * 1.2, 0.0, dF - railW));
    float led = smoothstep(0.0040, 0.0, abs(dF - 0.0028));
    float chase = 0.5 + 0.5 * sin(par * 9.0 - Tm * 1.6);
    col += acc * led * (0.55 + 0.6 * chase) * mix(0.7, 1.2, I) * step(0.0, dF);
  }
  if (dF < 0.0) {
    float fib = h21(floor(gl_FragCoord.xy * 0.8)) * 0.55 + vnoise(p * 330.0) * 0.45;
    float cloud = vnoise(p * 9.0 + 3.0) * 0.5 + vnoise(p * 21.0) * 0.25;
    vec3 felt = mix(vec3(0.018, 0.150, 0.100), vec3(0.055, 0.330, 0.225), cloud);
    felt *= 0.86 + 0.26 * fib;
    float pool = exp(-dot(p * vec2(0.85, 1.6), p * vec2(0.85, 1.6)) * 2.2);
    felt *= 0.34 + 1.20 * pool;
    felt += vec3(0.02, 0.08, 0.055) * pool * 0.7;
    felt += acc * 0.12 * exp(dF / 0.05) * mix(0.6, 1.0, I);
    float bl = smoothstep(px * 1.4, 0.0, abs(dF + 0.085) - 0.0006);
    felt = mix(felt, vec3(0.78, 0.74, 0.60) * (0.30 + 0.5 * pool), bl * 0.55);
    col = felt;
    float wv = waveAt(2.1, p) + waveAt(4.95, p) + waveAt(8.25, p) + waveAt(11.65, p) + waveAt(14.35, p) * 1.6;
    col += acc * wv * 0.38 * mix(0.6, 1.0, I);
  }

  // ===== bets and the pot =====
  for (int k = 0; k < NS; k++) {
    float fk = float(k);
    vec4 sg = seatG(fk);
    vec2 dirk = sg.zw, perp = vec2(-dirk.y, dirk.x);
    vec2 spot = sg.xy + dirk * 0.200;
    if (d2(p - spot) > 0.016) continue;
    float ord = orderOf(fk);
    float fs = foldStage(fk);
    for (int r = 0; r < 4; r++) {
      float fr = float(r);
      if (fs < fr + 0.5) continue;
      float t0 = betT(fr) + 0.12 * ord;
      float t1 = swT(fr) + 0.05 * ord;
      float appear = ease((lt - t0) / 0.45);
      float sweep = eio((lt - t1) / 0.55);
      if (appear <= 0.0 || sweep >= 1.0) continue;
      float nchip = 1.0 + floor(H(200.0 + fk * 4.0 + fr, 1.0) * 3.0);
      vec2 pos = mix(mix(sg.xy + dirk * 0.05, spot, appear), potC, sweep);
      float typ = fr < 0.5 ? 1.0 : (fr < 1.5 ? 2.0 : (fr < 2.5 ? 3.0 : 5.0));
      for (int c = 0; c < 4; c++) {
        float fc = float(c);
        if (fc > nchip - 0.5) break;
        vec2 cp = pos + vec2(0.0014 * fc, 0.0052 * fc) * (1.0 - sweep) + perp * (fr - 1.5) * 0.020 * (1.0 - sweep);
        col *= 1.0 - 0.45 * smoothstep(0.022, 0.0, length(p - cp - vec2(0.004, -0.005))) * (1.0 - sweep * 0.8);
        vec4 ch = chip(p - cp, 0.021 * (1.0 - 0.35 * sweep), typ, px);
        col = mix(col, ch.rgb, ch.a * (1.0 - sweep));
      }
    }
  }
  {
    float potCount = 0.0;
    for (int r = 0; r < 4; r++) {
      float fr = float(r);
      float done = step(swT(fr) + 0.55, lt);
      float inRound = 0.0;
      for (int k = 0; k < NS; k++) inRound += foldStage(float(k)) > fr + 0.5 ? 1.0 : 0.0;
      potCount += done * inRound * 1.6;
    }
    potCount = min(floor(potCount), 12.0);
    float aw = eio((lt - 15.0) / 0.9);
    vec4 wsg = seatG(winner());
    vec2 pc2 = mix(potC, wsg.xy + wsg.zw * 0.05, aw);
    if (d2(p - pc2) < 0.012 && potCount > 0.5 && lt < 16.0) {
      for (int j = 0; j < 12; j++) {
        float fj = float(j);
        if (fj > potCount - 0.5) break;
        vec2 off = (vec2(H(300.0 + fj, 2.0), H(320.0 + fj, 3.0)) - 0.5) * vec2(0.075, 0.032) * (1.0 - 0.5 * aw);
        vec2 cp = pc2 + off + vec2(0.0, 0.0045 * floor(fj / 4.0));
        float typ = floor(H(340.0 + fj, 4.0) * 6.0);
        col *= 1.0 - 0.42 * smoothstep(0.022, 0.0, length(p - cp - vec2(0.004, -0.005)));
        vec4 ch = chip(p - cp, 0.020, typ, px);
        col = mix(col, ch.rgb, ch.a * (1.0 - smoothstep(0.7, 1.0, aw)));
      }
    }
  }

  // ===== hole cards =====
  float endSlide = eio((lt - 16.8) / 0.8);
  for (int k = 0; k < NS; k++) {
    float fk = float(k);
    vec4 sg = seatG(fk);
    vec2 dirk = sg.zw, perp = vec2(-dirk.y, dirk.x);
    vec2 base = sg.xy + dirk * 0.104;
    float ord = orderOf(fk);
    float fs = foldStage(fk);
    float tf = foldTime(fk);
    float hero = fk < 0.5 ? 1.0 : 0.0;
    float W = hero > 0.5 ? 0.062 : 0.050;
    float rot0 = dirk.y > 0.5 ? 0.0 : (dirk.y < -0.5 ? PI : (dirk.x > 0.5 ? -PI * 0.5 : PI * 0.5));
    if (lt > 3.4 && d2(pc - base) > 0.0036 && lt < 17.0 && lt > tf + 0.7) continue;
    for (int c = 0; c < 2; c++) {
      float fc = float(c);
      float td = 0.7 + (fc * 7.0 + ord) * 0.085;
      float u = ease((lt - td) / 0.42);
      if (u <= 0.0) continue;
      float side = fc * 2.0 - 1.0;
      vec2 tgt = base + perp * side * W * 0.40 * (hero > 0.5 ? 1.15 : 1.0);
      float trot = side * 0.13 + rot0;
      float lift = sin(u * PI);
      vec2 pos = mix(deck, tgt, u) + vec2(0.0, 0.05 * lift);
      float rt = mix(side * 2.2 + 1.2, trot, u);
      float fo = eio((lt - tf) / 0.5);
      pos = mix(pos, mix(tgt, potC * 0.4, 0.5), fo);
      pos = mix(pos, deck, endSlide);
      float flip = 0.0;
      if (hero > 0.5) flip = eio((lt - td - 0.45) / 0.35);
      if (fs > 3.5) flip = max(flip, eio((lt - 14.0 - ord * 0.06 - fc * 0.1) / 0.4));
      float vis = (1.0 - fo) * (1.0 - endSlide);
      if (vis <= 0.003) continue;
      vec2 q = rot(-rt) * (pc - pos);
      float shadow = cardShadow(rot(-rt) * (p - pos - vec2(0.004 + 0.012 * lift, -0.006 - 0.014 * lift)), W, 0.007 + 0.01 * lift);
      col *= 1.0 - shadow * vis;
      vec4 cd = card(q, W * (0.85 + 0.15 * u) * (1.0 - 0.15 * fo), flip, holeCard(fk, fc), pxc);
      col = mix(col, cd.rgb, cd.a * vis);
    }
  }

  // ===== deck and board =====
  {
    for (int j = 0; j < 4; j++) {
      float fj = float(j);
      vec2 q = pc - deck - vec2(-0.0012, 0.0018) * fj;
      vec4 cd = card(q, 0.058, 0.0, vec2(0.0), pxc);
      if (j == 0) col *= 1.0 - cardShadow(p - deck - vec2(0.006, -0.01), 0.058, 0.01);
      col = mix(col, cd.rgb * (0.7 + 0.1 * fj), cd.a);
    }
  }
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    float t0 = boardT(fi);
    float u = ease((lt - t0) / 0.40);
    if (u <= 0.0 || endSlide >= 1.0) continue;
    vec2 tgt = vec2((fi - 2.0) * 0.092, 0.0);
    float lift = sin(u * PI);
    vec2 pos = mix(mix(deck, tgt, u), deck, endSlide);
    float flip = eio((lt - t0 - 0.40) / 0.45);
    float W = 0.074;
    float vis = 1.0 - endSlide;
    col *= 1.0 - cardShadow(p - pos - vec2(0.005 + 0.012 * lift, -0.007 - 0.012 * lift), W, 0.008 + 0.01 * lift) * vis;
    vec4 cd = card(rot(-(1.0 - u) * 0.9 * (mod(fi, 2.0) * 2.0 - 1.0)) * (pc - pos), W, flip, boardCard(fi), pxc);
    col = mix(col, cd.rgb, cd.a * vis);
    float rd = smoothstep(t0 + 0.7, t0 + 0.95, lt) * (1.0 - smoothstep(t0 + 1.5, t0 + 2.0, lt));
    if (rd > 0.0) {
      vec2 hb = vec2(W * 0.5 + 0.010, W * 0.7 + 0.010);
      vec2 ad = abs(pc - tgt), e = abs(ad - hb);
      float lv = smoothstep(pxc * 1.4, 0.0, e.x - 0.0008) * step(ad.y, hb.y + 0.0008) * step(hb.y - ad.y, 0.017);
      float lh = smoothstep(pxc * 1.4, 0.0, e.y - 0.0008) * step(ad.x, hb.x + 0.0008) * step(hb.x - ad.x, 0.017);
      col += acc * max(lv, lh) * rd;
    }
  }

  // ===== dealer button =====
  {
    vec4 sg = seatG(dealer());
    vec2 dirk = sg.zw, perp = vec2(-dirk.y, dirk.x);
    vec2 bp = sg.xy + dirk * 0.135 + perp * 0.10;
    float pop = ease((lt - 0.1) / 0.5);
    vec2 q = pc - bp;
    float r = length(q);
    col *= 1.0 - 0.5 * smoothstep(0.03, 0.0, length(p - bp - vec2(0.004, -0.005))) * pop;
    float a = smoothstep(pxc * 1.2, -pxc * 0.4, r - 0.0165 * pop);
    vec3 bc = mix(vec3(0.95, 0.93, 0.86), vec3(0.78, 0.72, 0.6), smoothstep(0.0, 0.0165, r));
    bc = mix(bc, vec3(0.10, 0.10, 0.11), fChar(q / 0.0030 + vec2(2.5, 3.5), ${c(`D`)}, 0.0030 / pxc));
    col = mix(col, bc, a);
  }

  // ===== seats: avatar, equity ring (on the rail), billboard readouts =====
  for (int k = 0; k < NS; k++) {
    float fk = float(k);
    vec4 sg = seatG(fk);
    vec2 ap = sg.xy;
    vec2 dirk = sg.zw;
    float hero = fk < 0.5 ? 1.0 : 0.0;
    float R = hero > 0.5 ? 0.040 : 0.034;
    float act = isActive(fk);
    float e = equity(fk) * act;
    vec3 ac = hero > 0.5 ? vec3(0.98, 0.76, 0.34) : acc;
    float win = abs(fk - winner()) < 0.5 ? 1.0 : 0.0;
    vec2 q = pa - ap;
    if (d2(q) < 0.0144) {
      float r = length(q);
      col *= 1.0 - 0.55 * smoothstep(R + 0.03, R * 0.6, length(p - ap - vec2(0.004, -0.006)));
      float base = smoothstep(pxa * 1.2, -pxa * 0.4, r - R);
      vec3 bc = mix(vec3(0.020, 0.028, 0.030), vec3(0.090, 0.115, 0.12), smoothstep(R, -R * 0.3, q.y + q.x * 0.4));
      bc += vec3(0.05) * smoothstep(pxa * 1.5, 0.0, abs(r - R * 0.72) - pxa * 0.3);
      col = mix(col, bc, base);
      float ra = abs(r - (R + 0.0085));
      float ang = fract(atan(q.x, q.y) / TAU + 1.0);
      float track = smoothstep(0.0028 + pxa, 0.0028 - pxa, ra);
      col += vec3(0.14, 0.18, 0.17) * track * 0.55 * (0.4 + 0.6 * act);
      float arc = smoothstep(0.0034 + pxa, 0.0034 - pxa, ra) * step(ang, e) * act;
      float pulse = win * smoothstep(15.0, 15.6, lt) * (1.0 - smoothstep(17.0, 18.0, lt)) * (0.5 + 0.5 * sin(Tm * 6.0));
      col = mix(col, ac * (1.0 + 0.5 * pulse), arc);
      col += ac * exp(-max(ra - 0.003, 0.0) / 0.008) * 0.22 * step(ang, e) * act;
      float ha = e * TAU;
      col += ac * exp(-length(q - (R + 0.0085) * vec2(sin(ha), cos(ha))) / 0.006) * 0.6 * act * step(0.01, e);
    }
    // billboards: the seat number inside the puck, the equity readout beside it
    vec2 sa = proj(ap, 0.03);
    vec2 sq = (p0 - sa) / 0.0030 + vec2(2.5, 3.5);
    col = mix(col, vec3(0.86, 0.92, 0.90) * (0.35 + 0.65 * act), fChar(sq, ${c(`1`)} + fk, 0.0030 / pxs) * 0.95);
    vec2 side = abs(dirk.x) > 0.5 ? vec2(0.0, -1.0) : dirk * -1.0;
    vec2 ra2 = proj(ap + side * (R + 0.050), 0.03);
    float pct = floor(e * 100.0 + 0.5);
    float t10 = floor(pct / 10.0), t1 = pct - t10 * 10.0;
    float fsz = 0.0030;
    vec2 rq = (p0 - ra2) / fsz + vec2(8.5, 3.5);
    float txt = 0.0;
    if (rq.x > -2.0 && rq.x < 20.0 && rq.y > -1.0 && rq.y < 9.0) {
      if (act > 0.5) {
        if (pct >= 100.0) {
          txt = fChar(rq - vec2(-3.0, 0.0), ${c(`1`)}, fsz / pxs) + fChar(rq - vec2(3.0, 0.0), ${c(`0`)}, fsz / pxs) + fChar(rq - vec2(9.0, 0.0), ${c(`0`)}, fsz / pxs) + fChar(rq - vec2(15.0, 0.0), ${c(`%`)}, fsz / pxs);
        } else {
          txt = (t10 > 0.5 ? fChar(rq, ${c(`0`)} + t10, fsz / pxs) : 0.0) + fChar(rq - vec2(6.0, 0.0), ${c(`0`)} + t1, fsz / pxs) + fChar(rq - vec2(12.0, 0.0), ${c(`%`)}, fsz / pxs);
        }
      } else {
        txt = fText(rq - vec2(-1.5, 0.0), ${u(`FOLD`)}, fsz / pxs);
      }
    }
    col = mix(col, mix(vec3(0.60, 0.68, 0.66), ac * 1.1, 0.8 * act) * (0.55 + 0.45 * act), clamp(txt, 0.0, 1.0));
    if (win > 0.5 && lt > 15.3 && lt < 18.5) {
      float age = lt - 15.3;
      for (int j = 0; j < 14; j++) {
        float fj = float(j);
        float a2 = fj * 2.39996 + H(500.0, fj) * 0.6;
        float sp = 0.10 + 0.12 * H(501.0, fj);
        vec2 sqq = pa - ap - vec2(cos(a2), sin(a2)) * (R + sp * (1.0 - exp(-age * 2.2)) * 1.3) - vec2(0.0, -0.02 * age * age);
        float life = exp(-age * 1.3) * (0.6 + 0.4 * sin(age * 18.0 + fj * 3.0));
        col += ac * exp(-length(sqq) / 0.0045) * life * 0.9;
      }
    }
  }

  // ===== placard: the EV of every option, as bars (screen space) =====
  {
    vec2 o = vec2(-0.715, 0.442);
    vec2 sz = vec2(0.282, 0.150);
    vec2 q = p0 - o - vec2(sz.x * 0.5, -sz.y * 0.5);
    float d = sdBox(q, sz * 0.5, 0.012);
    col = mix(col, col * 0.30 + vec3(0.006, 0.022, 0.016), smoothstep(pxs, -pxs, d) * 0.93);
    col += acc * smoothstep(pxs * 1.5, 0.0, abs(d) - pxs * 0.4) * 0.40;
    float u = 0.0026;
    col = mix(col, vec3(0.84, 0.92, 0.89), fText((p0 - o - vec2(0.014, -0.0215)) / u, ${u(`TABLE MODEL`)}, u / pxs));
    float ev0 = 0.18 + 0.20 * H(400.0, 0.0), ev1 = 0.30 + 0.30 * H(401.0, 1.0), ev2 = 0.25 + 0.5 * H(402.0, 2.0);
    float sw = eio((lt - streetStart(cs) - 0.2) / 0.9);
    float best = ev2 > ev1 ? 2.0 : 1.0;
    if (cs > 2.5 && H(403.0, 0.0) < 0.35) best = 0.0;
    for (int j = 0; j < 3; j++) {
      float fj = float(j);
      float v = fj < 0.5 ? ev0 : (fj < 1.5 ? ev1 : ev2);
      v = mix(v * 0.2, v, sw);
      float rowy = o.y - 0.058 - fj * 0.030;
      float isb = abs(fj - best) < 0.5 ? 1.0 : 0.0;
      vec2 lq = (p0 - vec2(o.x + 0.014, rowy - 0.0092)) / u;
      float lab = fj < 0.5 ? fText(lq, ${u(`FOLD`)}, u / pxs) : (fj < 1.5 ? fText(lq, ${u(`CALL`)}, u / pxs) : fText(lq, ${u(`RAISE`)}, u / pxs));
      col = mix(col, mix(vec3(0.58, 0.66, 0.64), acc * 1.2, isb), lab);
      vec2 bq = p0 - vec2(o.x + 0.014 + 0.090, rowy);
      float bw = 0.150;
      float track = smoothstep(pxs, -pxs, sdBox(bq - vec2(bw * 0.5, 0.0), vec2(bw * 0.5, 0.0045), 0.002));
      float bd = sdBox(bq - vec2(bw * v * 0.5, 0.0), vec2(bw * v * 0.5, 0.0045), 0.002);
      col = mix(col, vec3(0.10, 0.17, 0.15), track * 0.9);
      col = mix(col, mix(vec3(0.45, 0.56, 0.54), acc * 1.2, isb), smoothstep(pxs, -pxs, bd));
      col += acc * isb * exp(-max(bd, 0.0) / 0.006) * 0.15 * sw;
    }
  }

  // ===== street ticker, bottom-right =====
  {
    float u = 0.0026;
    vec2 tq = (p0 - vec2(0.405, -0.462)) / u;
    for (int s = 0; s < 4; s++) {
      float fs2 = float(s);
      float on = abs(cs - fs2) < 0.5 ? 1.0 : 0.0;
      vec2 sq = tq - vec2(fs2 < 0.5 ? 0.0 : (fs2 < 1.5 ? 25.0 : (fs2 < 2.5 ? 55.0 : 85.0)), 0.0);
      float lab = fs2 < 0.5 ? fText(sq, ${u(`PRE`)}, u / pxs) : (fs2 < 1.5 ? fText(sq, ${u(`FLOP`)}, u / pxs) : (fs2 < 2.5 ? fText(sq, ${u(`TURN`)}, u / pxs) : fText(sq, ${u(`RIVER`)}, u / pxs)));
      col = mix(col, mix(vec3(0.40, 0.47, 0.45), acc * 1.15, on), lab * (0.7 + 0.3 * on));
    }
  }

  // ===== dust in the lamp light =====
  {
    float lamp = exp(-dot(p0 * vec2(0.9, 1.3), p0 * vec2(0.9, 1.3)) * 2.2);
    for (int L = 0; L < 2; L++) {
      float fl = float(L);
      vec2 g = (p0 - mo * 0.05 * (1.0 + fl)) * (13.0 + 9.0 * fl) + vec2(0.0, -Tm * (0.16 + 0.10 * fl)) + fl * 7.3;
      vec2 id = floor(g), f = fract(g) - 0.5;
      float r = h21(id + fl * 13.0);
      vec2 off = (vec2(h21(id + 1.7), h21(id + 4.3)) - 0.5) * 0.6 + vec2(0.15 * sin(Tm * 0.7 + r * 30.0), 0.0);
      float tw = 0.5 + 0.5 * sin(Tm * (1.0 + r * 2.0) + r * 40.0);
      col += vec3(0.75, 1.0, 0.88) * smoothstep(0.075, 0.0, length(f - off)) * step(0.80, r) * tw * lamp * 0.55 * (0.5 + 0.5 * I);
    }
  }

  // ===== grade =====
  col = col / (1.0 + 0.18 * max(col - 0.85, 0.0));
  float vig = smoothstep(1.35, 0.30, length(p0 * vec2(0.8, 1.05)));
  col *= 0.45 + 0.55 * vig;
  col += (h21(gl_FragCoord.xy + fract(uTime * 11.7) * 193.0) - 0.5) * (0.02 + 0.018 * I);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`},m=e=>e.toFixed(1),ne={id:`spots`,projectId:`hand-compass`,title:`Spots`,medium:`A simulated spot graded on the app’s five-step scale, Best Move to Blunder`,colors:{bg:`#05060A`,ink:`#F1EBDA`,accent:`#3FBF8A`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;
${f}
${p}
#define CYC 12.0
#define DCX 0.0
#define DCY 0.012
#define RO 0.340
#define RI 0.282
#define A0 -2.0944
#define ASPAN 4.18879

float cyc;
float lt;
float h21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), u.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), u.x), u.y);
}
float H(float a, float b) { return h21(vec2(a + cyc * 13.17, b + 5.3 + cyc * 0.71)); }
mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, s, -s, c); }
float ease(float x) { x = clamp(x, 0.0, 1.0); return 1.0 - pow(1.0 - x, 3.0); }
float eio(float x) { x = clamp(x, 0.0, 1.0); return x * x * (3.0 - 2.0 * x); }

vec3 gcol(float i) {
  if (i < 0.5) return vec3(0.16, 0.84, 0.54);
  if (i < 1.5) return vec3(0.64, 0.88, 0.26);
  if (i < 2.5) return vec3(0.98, 0.80, 0.22);
  if (i < 3.5) return vec3(0.98, 0.52, 0.17);
  return vec3(0.95, 0.26, 0.26);
}
// scale position 0..1 -> colour, continuous
vec3 gramp(float f) {
  float x = clamp(f, 0.0, 1.0) * 5.0 - 0.5;
  float i = clamp(floor(x), 0.0, 3.0);
  return mix(gcol(i), gcol(i + 1.0), smoothstep(0.35, 0.65, clamp(x - i, 0.0, 1.0)));
}
float gWidth(float i) { return i < 0.5 ? ${m(l(`BEST MOVE`))} : (i < 1.5 ? ${m(l(`GOOD MOVE`))} : (i < 2.5 ? ${m(l(`INACCURACY`))} : (i < 3.5 ? ${m(l(`MISTAKE`))} : ${m(l(`BLUNDER`))}))); }
float gLab(vec2 q, float i, float sc) {
  if (i < 0.5) return fText(q, ${u(`BEST MOVE`)}, sc);
  if (i < 1.5) return fText(q, ${u(`GOOD MOVE`)}, sc);
  if (i < 2.5) return fText(q, ${u(`INACCURACY`)}, sc);
  if (i < 3.5) return fText(q, ${u(`MISTAKE`)}, sc);
  return fText(q, ${u(`BLUNDER`)}, sc);
}
// a word that scrambles then resolves left to right (prog 0..1)
float fScr(vec2 q, vec4 s, float n, float sc, float prog) {
  float i = floor(q.x / 6.0);
  if (i < 0.0 || i >= n || q.y < -0.6 || q.y > 7.6) return 0.0;
  float code = fCode(s, i);
  if (code > 0.5 && i + 0.5 > prog * n) code = ${c(`A`)} + floor(h21(vec2(i, floor(uTime * 22.0) + cyc)) * 26.0);
  return fChar(vec2(q.x - i * 6.0, q.y), code, sc);
}
float gWord(vec2 q, float i, float sc, float prog) {
  if (i < 0.5) return fScr(q, ${u(`BEST MOVE`)}, sc, prog);
  if (i < 1.5) return fScr(q, ${u(`GOOD MOVE`)}, sc, prog);
  if (i < 2.5) return fScr(q, ${u(`INACCURACY`)}, sc, prog);
  if (i < 3.5) return fScr(q, ${u(`MISTAKE`)}, sc, prog);
  return fScr(q, ${u(`BLUNDER`)}, sc, prog);
}

void main() {
  float I = clamp(uIntensity, 0.0, 1.0);
  float S = min(uRes.y, uRes.x / 1.45);
  vec2 p0 = (gl_FragCoord.xy - 0.5 * uRes) / S;
  float px = 1.0 / S;
  vec2 mo = uMouse - 0.5;
  float Tm = mod(uTime, 3600.0) + uSeed * CYC;
  cyc = floor(Tm / CYC);
  lt = Tm - cyc * CYC;

  // the spot of this cycle
  float grade = mod(cyc * 2.0 + floor(uSeed * 5.0), 5.0);
  float chosen = floor(H(1.0, 0.0) * 3.0);
  float tag = H(2.0, 0.0) < 0.62 ? 0.0 : (H(3.0, 0.0) < 0.5 ? 1.0 : 2.0);
  // phases
  float tCommit = 3.25, tWipe0 = 3.35, tWipe1 = 4.75, tSettle = 4.75;
  float wipe = eio((lt - tWipe0) / (tWipe1 - tWipe0));
  float gF = (grade + 0.5) / 5.0;
  float k = clamp((lt - tSettle) / 1.0, 0.0, 1.0);
  float revealed = step(tWipe0, lt);
  float fm = lt < tSettle ? wipe : (gF + (1.0 - gF) * exp(-5.0 * k) * cos(10.0 * k));
  float settle = eio((lt - 5.4) / 0.8);
  float out0 = eio((lt - 11.0) / 0.9);

  vec2 DC = vec2(DCX, DCY) + mo * 0.012;
  vec2 q = p0 - DC;
  float r = length(q);
  float ang = atan(q.x, q.y);
  float f = (ang - A0) / ASPAN;

  // ===== ground: a compass rose, quietly turning =====
  vec3 col = vec3(0.010, 0.012, 0.018) + vec3(0.012, 0.016, 0.026) * exp(-dot(p0, p0) * 1.1);
  {
    float rr = r;
    float roseA = ang / 6.2831853 + Tm * 0.004;
    float tk = abs(fract(roseA * 72.0 + 0.5) - 0.5) * 6.2831853 * rr / 72.0;
    float major = step(abs(fract(roseA * 8.0 + 0.5) - 0.5), 0.0125);
    float band = smoothstep(0.455, 0.46, rr) * smoothstep(0.50 + 0.025 * major, 0.495 + 0.025 * major, rr);
    col += vec3(0.30, 0.34, 0.42) * smoothstep(px * 1.2 + 0.0004, 0.0, tk - 0.0004) * band * 0.45;
    for (int j = 0; j < 4; j++) {
      float fj = float(j);
      float rj = 0.455 + fj * 0.14 + (fj > 0.5 ? 0.0 : 0.0);
      col += vec3(0.26, 0.30, 0.40) * smoothstep(px * 1.4, 0.0, abs(rr - rj) - 0.0003) * (0.20 - 0.03 * fj);
    }
    // reticle
    float ax = min(abs(q.x), abs(q.y));
    col += vec3(0.24, 0.28, 0.36) * smoothstep(px * 1.2, 0.0, ax - 0.0002) * smoothstep(0.36, 0.5, rr) * 0.22;
  }

  // ===== the plate =====
  {
    float plate = smoothstep(px * 1.4, 0.0, r - (RO + 0.040));
    vec3 pc = mix(vec3(0.022, 0.026, 0.036), vec3(0.050, 0.056, 0.072), smoothstep(0.30, 0.46, r));
    pc += vec3(0.05, 0.055, 0.07) * smoothstep(px * 1.6, 0.0, abs(r - (RO + 0.038)) - 0.0008);
    pc *= 0.85 + 0.25 * vnoise(q * 90.0) * smoothstep(0.34, 0.2, r);
    col = mix(col, pc, plate);
  }
  vec3 amb = gcol(grade) * settle * (1.0 - out0);
  col += amb * exp(-max(r - RO, 0.0) / 0.12) * 0.10 * smoothstep(0.0, 0.2, r);

  // ===== the five-step ring =====
  float inRing = step(RI - 0.005, r) * step(r, RO + 0.005);
  if (inRing > 0.5 && f > -0.01 && f < 1.01) {
    float fi = clamp(f, 0.0, 0.9999);
    float si = floor(fi * 5.0);
    float u = fi * 5.0 - si;
    float segLen = ASPAN / 5.0 * r;
    float gap = smoothstep(0.0020, 0.0020 + px * 1.2, min(u, 1.0 - u) * segLen);
    float v = (r - RI) / (RO - RI);
    float edge = smoothstep(0.0, px * 1.5 / (RO - RI), v) * smoothstep(1.0, 1.0 - px * 1.5 / (RO - RI), v);
    vec3 sc = gcol(si);
    // lit state: dim and locked, then swept, then the grade stays bright
    float lock = 0.10 + 0.05 * sin(fi * 60.0 - Tm * 3.0) * (1.0 - revealed);
    float sweptOn = smoothstep(wipe + 0.012, wipe - 0.012, f) * revealed;
    float isG = abs(si - grade) < 0.5 ? 1.0 : 0.0;
    float keep = mix(1.0, mix(0.22, 1.0, isG), settle);
    float lit = mix(lock, 1.0, sweptOn) * mix(1.0, keep, step(tSettle, lt));
    lit = mix(lit, lock, out0);
    // bevel from a light up and to the left
    vec2 rd = q / max(r, 1e-4);
    float shade = 0.70 + 0.55 * clamp((2.0 * v - 1.0) * dot(rd, normalize(vec2(-0.5, 0.85))), -1.0, 1.0) + 0.0;
    float spec = pow(max((2.0 * v - 1.0) * dot(rd, normalize(vec2(-0.5, 0.85))), 0.0), 3.0) * 0.4;
    vec3 c = sc * (0.35 + 0.95 * lit) * shade + vec3(1.0, 0.97, 0.9) * spec * lit;
    c += sc * 0.55 * isG * settle * (0.65 + 0.35 * sin(Tm * 4.0)) * smoothstep(0.7, 0.2, abs(v - 0.5) * 2.0);
    // the sweep head burns white
    float head = exp(-abs(f - wipe) / 0.012) * revealed * step(lt, tWipe1 + 0.15);
    c += vec3(1.0, 0.95, 0.85) * head * 0.9;
    // the ring sits in the plate: an inner groove each side
    c *= 0.82 + 0.18 * smoothstep(0.0, 0.14, v) * smoothstep(1.0, 0.86, v);
    col = mix(col, c, edge * gap);
  }
  // fine ticks inside the ring (101 steps), longer every tenth
  {
    float tf = f * 100.0;
    float ti = floor(tf + 0.5);
    float dx = abs(tf - ti) * ASPAN / 100.0 * r;
    float major = step(abs(mod(ti, 10.0)), 0.5);
    float rlo = RI - 0.014 - 0.008 * major, rhi = RI - 0.004;
    float on = step(0.0, ti) * step(ti, 100.0) * step(rlo, r) * step(r, rhi);
    float tickLit = mix(0.25, 1.0, step(ti / 100.0, wipe) * revealed);
    col += vec3(0.62, 0.68, 0.78) * smoothstep(px * 1.2 + 0.0005, 0.0, dx - 0.0004) * on * tickLit * 0.7;
  }
  // light bleeding out of the ring onto the plate
  {
    float fi = clamp(f, 0.0, 0.9999);
    float si = floor(fi * 5.0);
    float sweptOn = smoothstep(wipe + 0.01, wipe - 0.01, f) * revealed;
    float isG = abs(si - grade) < 0.5 ? 1.0 : 0.0;
    float lit = sweptOn * mix(1.0, mix(0.15, 1.0, isG), settle) * (1.0 - out0);
    float inA = step(-0.01, f) * step(f, 1.01);
    col += gcol(si) * exp(-max(r - RO, 0.0) / 0.03) * step(RO, r) * lit * 0.20 * inA;
    col += gcol(si) * exp(-max(RI - r, 0.0) / 0.05) * step(r, RI) * lit * 0.12 * inA;
  }

  // ===== the radar wedge and the needle line =====
  {
    float aM = A0 + fm * ASPAN;
    float da = aM - ang;
    float inA = step(0.0, da) * step(f, 1.01);
    float tailLen = 0.45;
    float wedge = exp(-da / tailLen) * inA * smoothstep(RI - 0.02, RI - 0.2, r) * smoothstep(0.02, 0.12, r);
    float actv = revealed * (1.0 - smoothstep(tSettle + 0.9, tSettle + 1.5, lt));
    col += gramp(fm) * wedge * 0.20 * actv;
    // needle: a hairline from the ring toward the middle, behind the cards
    float nd = abs(sin(ang - aM)) * r;
    float nOn = step(r, RI) * step(0.05, r) * step(0.0, dot(q, vec2(sin(aM), cos(aM))));
    float nlife = revealed * (1.0 - out0);
    col += gramp(fm) * smoothstep(px * 1.2, 0.0, nd - 0.0006) * nOn * smoothstep(0.05, 0.25, r) * 0.55 * nlife;
  }

  // ===== interior: a little table =====
  {
    float inside = smoothstep(px * 1.2, 0.0, r - (RI - 0.018));
    vec3 ic = vec3(0.012, 0.014, 0.020) + vec3(0.02, 0.025, 0.035) * smoothstep(0.28, 0.0, r);
    ic += vec3(0.05, 0.09, 0.07) * exp(-r * 9.0) * 0.4;
    ic += amb * 0.10 * smoothstep(0.1, 0.27, r);
    // concentric engraving
    ic += vec3(0.07, 0.08, 0.10) * smoothstep(px * 1.4, 0.0, abs(r - 0.205) - 0.0003) * 0.7;
    ic += vec3(0.07, 0.08, 0.10) * smoothstep(px * 1.4, 0.0, abs(r - 0.145) - 0.0003) * 0.5;
    col = mix(col, ic, inside * step(r, RI));
    // the beam lives above this base; cards come after the wedge below
  }

  // wedge and needle were drawn on the plate; repaint them over the interior so they show
  {
    float aM = A0 + fm * ASPAN;
    float da = aM - ang;
    float inA = step(0.0, da) * step(f, 1.01);
    float wedge = exp(-da / 0.45) * inA * smoothstep(RI - 0.02, RI - 0.2, r) * smoothstep(0.02, 0.12, r);
    float actv = revealed * (1.0 - smoothstep(tSettle + 0.9, tSettle + 1.5, lt));
    col += gramp(fm) * wedge * 0.20 * actv * step(r, RI);
    float nd = abs(sin(ang - aM)) * r;
    float nOn = step(r, RI) * step(0.05, r) * step(0.0, dot(q, vec2(sin(aM), cos(aM))));
    col += gramp(fm) * smoothstep(px * 1.2, 0.0, nd - 0.0006) * nOn * smoothstep(0.05, 0.25, r) * 0.55 * revealed * (1.0 - out0);
  }

  // ===== cards: the flop above, the hero's two cards fanned below =====
  float cardsOut = out0;
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    float t0 = 0.15 + fi * 0.15;
    float u = ease((lt - t0) / 0.5);
    if (u <= 0.0 || cardsOut >= 1.0) continue;
    vec2 tgt = DC + vec2((fi - 1.0) * 0.080, 0.092);
    vec2 pos = mix(tgt + vec2(0.0, 0.34), tgt, u);
    float flip = eio((lt - t0 - 0.35) / 0.4);
    float Wc = 0.066;
    float lift = sin(u * PI);
    vec2 rel = p0 - pos;
    col *= 1.0 - cardShadow(rel - vec2(0.004 + 0.01 * lift, -0.005 - 0.01 * lift), Wc, 0.006 + 0.01 * lift) * (1.0 - cardsOut);
    vec4 cd = card(rot(-(1.0 - u) * 0.8 * (fi - 1.0)) * rel, Wc, flip, vec2(floor(H(10.0 + fi, 1.0) * 13.0), floor(H(20.0 + fi, 2.0) * 4.0)), px);
    col = mix(col, cd.rgb, cd.a * (1.0 - cardsOut));
  }
  for (int i = 0; i < 2; i++) {
    float fi = float(i);
    float t0 = 0.75 + fi * 0.18;
    float u = ease((lt - t0) / 0.55);
    if (u <= 0.0 || cardsOut >= 1.0) continue;
    float spread = mix(0.0, 0.34, u);
    float th = (fi - 0.5) * spread;
    vec2 pivot = DC + vec2(0.0, -0.228);
    vec2 pos = pivot + 0.142 * vec2(sin(th), cos(th));
    pos.y -= (1.0 - u) * 0.22;
    float flip = eio((lt - t0 - 0.45) / 0.4);
    float Wc = 0.098;
    vec2 rel = p0 - pos;
    col *= 1.0 - cardShadow(rot(th) * (rel - vec2(0.005, -0.008)), Wc, 0.009) * (1.0 - cardsOut);
    vec4 cd = card(rot(th) * rel, Wc, flip, vec2(floor(H(30.0 + fi, 3.0) * 13.0), floor(H(40.0 + fi, 4.0) * 4.0)), px);
    col = mix(col, cd.rgb, cd.a * (1.0 - cardsOut));
  }

  // ===== marker on the ring =====
  {
    float aM = A0 + fm * ASPAN;
    vec2 mp = DC + (RI + RO) * 0.5 * vec2(sin(aM), cos(aM));
    float md = length(p0 - mp);
    float vis = revealed * (1.0 - out0);
    vec3 mc = gramp(fm);
    col += mc * exp(-md / 0.016) * 0.85 * vis;
    col = mix(col, vec3(1.0, 0.98, 0.94), smoothstep(px * 1.3, 0.0, md - 0.0075) * vis);
    // pointer wedge on the inside edge
    vec2 rl = rot(aM) * (p0 - DC);                      // y up along the marker's radius
    float tri = max(abs(rl.x) * 1.6 + (rl.y - (RI - 0.030)) * 1.0 - 0.0, 0.0);
    float tr = smoothstep(px * 1.3, 0.0, max(abs(rl.x) * 1.5 + (RI - 0.004 - rl.y) * 0.0 + (rl.y - (RI - 0.004)) * 1.0, -(rl.y - (RI - 0.034)))) ;
    col += vec3(1.0) * tr * vis * 0.0;
    float pw = 0.0;
    pw = smoothstep(px * 1.3, 0.0, max(abs(rl.x) - (rl.y - (RI - 0.036)) * 0.55, max((RI - 0.036) - rl.y, rl.y - (RI - 0.006))));
    col = mix(col, vec3(1.0, 0.98, 0.94), pw * vis);
  }

  // ===== labels around the dial =====
  {
    float u = 0.0028;
    for (int i = 0; i < 5; i++) {
      float fi = float(i);
      float a = A0 + (fi + 0.5) / 5.0 * ASPAN;
      vec2 anc = DC + (RO + 0.062) * vec2(sin(a), cos(a));
      float w = gWidth(fi) * u;
      float al = 0.5 - 0.5 * sin(a);
      al = clamp(al * 1.1 - 0.05, 0.0, 1.0);
      vec2 org = anc - vec2(al * w, 0.5 * 7.0 * u - (cos(a) < 0.0 ? 0.0 : 0.0));
      float lab = gLab((p0 - org) / u, fi, u / px);
      float isG = abs(fi - grade) < 0.5 ? 1.0 : 0.0;
      float on = mix(0.38, 1.0, isG * settle);
      on = mix(on, 0.38, out0);
      vec3 lc = mix(vec3(0.62, 0.68, 0.78), gcol(fi) * 1.1, isG * settle);
      col = mix(col, lc * mix(0.85, 1.1, isG * settle), lab * on);
    }
  }

  // ===== left: the pipeline steps =====
  {
    float u = 0.0032;
    float stepNow = lt < 1.8 ? 0.0 : (lt < tWipe0 ? 1.0 : (lt < 4.9 ? 2.0 : 3.0));
    float x0 = -0.700;
    for (int j = 0; j < 4; j++) {
      float fj = float(j);
      float y = -0.112 - fj * 0.056;
      float on = abs(fj - stepNow) < 0.5 ? 1.0 : 0.0;
      float done = fj < stepNow - 0.5 ? 1.0 : 0.0;
      vec2 lq = (p0 - vec2(x0 + 0.030, y - 3.5 * u)) / u;
      float lab = fj < 0.5 ? fText(lq, ${u(`DEAL`)}, u / px) : (fj < 1.5 ? fText(lq, ${u(`COMMIT`)}, u / px) : (fj < 2.5 ? fText(lq, ${u(`SOLVE`)}, u / px) : fText(lq, ${u(`GRADE`)}, u / px)));
      vec3 lc = mix(vec3(0.55, 0.60, 0.70), vec3(0.95, 0.97, 1.0), on);
      lc = mix(lc, vec3(0.30, 0.78, 0.56), done * 0.6);
      col = mix(col, lc, lab * (0.55 + 0.45 * on));
      // node
      float nd = length(p0 - vec2(x0 + 0.008, y));
      vec3 nc = mix(vec3(0.16, 0.18, 0.22), mix(vec3(0.30, 0.78, 0.56), vec3(0.95, 0.97, 1.0), on), max(on, done));
      col = mix(col, nc, smoothstep(px * 1.2, 0.0, nd - 0.0058));
      col += vec3(0.95, 0.97, 1.0) * exp(-nd / 0.012) * on * 0.35;
      // connector
      if (fj < 3.5) col += vec3(0.3, 0.35, 0.45) * smoothstep(px * 1.2, 0.0, abs(p0.x - (x0 + 0.008)) - 0.0003) * step(y - 0.058 + 0.008, p0.y) * step(p0.y, y - 0.008) * (0.35 + 0.65 * done);
    }
  }

  // ===== right: the result =====
  {
    float x0 = 0.545;
    float ry = -0.185;
    float u = 0.0026;
    float resP = eio((lt - tSettle - 0.1) / 0.5);
    vec3 gc = gcol(grade);
    col = mix(col, vec3(0.62, 0.68, 0.78), fText((p0 - vec2(x0, ry + 0.150)) / u, ${u(`GRADE`)}, u / px) * 0.65);
    float w = gWidth(grade);
    float us = min(0.0040, 0.150 / w);
    float word = gWord((p0 - vec2(x0, ry + 0.088)) / us, grade, us / px, clamp((lt - tSettle - 0.1) / 0.8, 0.0, 1.0));
    col = mix(col, gc * 1.15, word * resP * (1.0 - out0));
    col += gc * 0.10 * exp(-length((p0 - vec2(x0 + 0.08, ry + 0.1)) * vec2(1.0, 2.4)) / 0.10) * resP * (1.0 - out0);
    // EV-loss scale: five bars, a marker at the grade
    float by = ry + 0.040;
    float bw = 0.150;
    vec2 bq = p0 - vec2(x0, by);
    float inBar = step(0.0, bq.x) * step(bq.x, bw);
    float seg = floor(clamp(bq.x / bw, 0.0, 0.9999) * 5.0);
    float su = bq.x / bw * 5.0 - seg;
    float bar = smoothstep(px, 0.0, abs(bq.y) - 0.0042) * inBar * smoothstep(0.0, 0.02, min(su, 1.0 - su));
    col = mix(col, gcol(seg) * mix(0.35, 1.0, resP), bar * 0.95);
    float mx = x0 + bw * (grade + 0.5) / 5.0;
    float tri = smoothstep(px * 1.3, 0.0, max(abs(p0.x - mx) - (p0.y - (by + 0.008)) * 0.0 - 0.0, 0.0));
    float mk = smoothstep(px * 1.3, 0.0, max(abs(p0.x - mx) * 1.0 - (by + 0.026 - p0.y) * 0.9, max(p0.y - (by + 0.0085), (by + 0.026) - p0.y)));
    col = mix(col, vec3(1.0, 0.98, 0.94), mk * resP * (1.0 - out0));
    col = mix(col, vec3(0.62, 0.68, 0.78), fText((p0 - vec2(x0, by - 0.030)) / u, ${u(`EV LOSS`)}, u / px) * 0.65);
    // the tag: where the grade comes from
    vec2 tq = (p0 - vec2(x0 + 0.010, ry - 0.034)) / u;
    float tw = tag < 0.5 ? ${m(l(`SOLVED`))} : (tag < 1.5 ? ${m(l(`HEURISTIC`))} : ${m(l(`EXACT MATH`))});
    float tl = tag < 0.5 ? fText(tq, ${u(`SOLVED`)}, u / px) : (tag < 1.5 ? fText(tq, ${u(`HEURISTIC`)}, u / px) : fText(tq, ${u(`EXACT MATH`)}, u / px));
    vec2 chipC = vec2(x0 + 0.010 + tw * u * 0.5, ry - 0.034 + 3.5 * u);
    float cd = sdBox(p0 - chipC, vec2(tw * u * 0.5 + 0.012, 0.0125), 0.0125);
    vec3 tc = tag < 0.5 ? vec3(0.30, 0.82, 0.58) : (tag < 1.5 ? vec3(0.96, 0.74, 0.30) : vec3(0.52, 0.72, 0.98));
    float tp = eio((lt - tSettle - 0.5) / 0.4) * (1.0 - out0);
    col = mix(col, tc * 0.14, smoothstep(px, -px, cd) * tp);
    col += tc * smoothstep(px * 1.4, 0.0, abs(cd) - px * 0.5) * 0.8 * tp;
    col = mix(col, tc * 1.15, tl * tp);
  }

  // ===== bottom: the choice, and the lock =====
  {
    float u = 0.0026;
    float showCh = ease((lt - 1.5) / 0.4) * (1.0 - out0);
    float hop = lt < tCommit ? mod(floor((lt - 1.9) / 0.34), 3.0) : chosen;
    if (lt < 1.9) hop = -1.0;
    float cy = DC.y - 0.290;
    for (int j = 0; j < 3; j++) {
      float fj = float(j);
      vec2 c = vec2(DC.x + (fj - 1.0) * 0.128, cy);
      float d = sdBox(p0 - c, vec2(0.052, 0.0175), 0.0175);
      float sel = abs(fj - hop) < 0.5 ? 1.0 : 0.0;
      float committed = step(tCommit, lt);
      float flash = exp(-(lt - tCommit) * 5.0) * step(tCommit, lt) * sel;
      vec3 bc = mix(vec3(0.62, 0.68, 0.78), vec3(0.96, 0.98, 1.0), sel);
      col = mix(col, bc * 0.10 * (1.0 + 4.0 * sel * committed), smoothstep(px, -px, d) * showCh);
      col += bc * smoothstep(px * 1.4, 0.0, abs(d) - px * 0.5) * (0.30 + 0.7 * sel) * showCh;
      col += bc * flash * exp(-max(d, 0.0) / 0.03) * 0.8 * showCh;
      vec2 lq = (p0 - c + vec2((fj < 0.5 ? 23.0 : (fj < 1.5 ? 23.0 : 29.0)) * u * 0.5, 3.5 * u)) / u;
      float lab = fj < 0.5 ? fText(lq, ${u(`FOLD`)}, u / px) : (fj < 1.5 ? fText(lq, ${u(`CALL`)}, u / px) : fText(lq, ${u(`RAISE`)}, u / px));
      col = mix(col, bc * mix(0.8, 1.15, sel), lab * showCh * mix(0.65, 1.0, sel));
    }
    // status line under the chips
    float stp = (1.0 - out0);
    vec2 sq = (p0 - vec2(DC.x, cy - 0.052)) / u;
    float lk = lt < tCommit ? fText(sq + vec2(${m(l(`LOCKED`)/2)}, 0.0), ${u(`LOCKED`)}, u / px) : fText(sq + vec2(${m(l(`COMMITTED`)/2)}, 0.0), ${u(`COMMITTED`)}, u / px);
    float lkOn = step(0.3, lt);
    vec3 lc = lt < tCommit ? vec3(0.62, 0.68, 0.78) : vec3(0.30, 0.82, 0.58);
    col = mix(col, lc, lk * lkOn * stp * (0.55 + 0.45 * step(tCommit, lt)));
  }

  // ===== dust and sparks on the active segment =====
  {
    float lamp = exp(-dot(p0 * vec2(0.9, 1.2), p0 * vec2(0.9, 1.2)) * 2.0);
    for (int L = 0; L < 2; L++) {
      float fl = float(L);
      vec2 g = (p0 - mo * 0.04 * (1.0 + fl)) * (12.0 + 9.0 * fl) + vec2(0.0, -Tm * (0.14 + 0.09 * fl)) + fl * 5.1;
      vec2 id = floor(g), fr = fract(g) - 0.5;
      float rr = h21(id + fl * 11.0);
      vec2 off = (vec2(h21(id + 1.3), h21(id + 4.1)) - 0.5) * 0.6;
      float tw = 0.5 + 0.5 * sin(Tm * (1.0 + rr * 2.0) + rr * 40.0);
      col += vec3(0.7, 0.8, 1.0) * smoothstep(0.07, 0.0, length(fr - off)) * step(0.82, rr) * tw * lamp * 0.4 * (0.5 + 0.5 * I);
    }
    if (settle > 0.01 && lt < 11.5) {
      float aG = A0 + gF * ASPAN;
      for (int j = 0; j < 12; j++) {
        float fj = float(j);
        float a = aG + (H(60.0, fj) - 0.5) * (ASPAN / 5.0) * 0.9;
        float ph = fract(Tm * (0.25 + 0.2 * H(61.0, fj)) + H(62.0, fj));
        float rr = RO + 0.004 + ph * (0.05 + 0.07 * H(63.0, fj));
        vec2 sp = DC + rr * vec2(sin(a), cos(a));
        col += gcol(grade) * exp(-length(p0 - sp) / 0.0045) * (1.0 - ph) * 0.9 * settle * (1.0 - out0);
      }
    }
  }

  // ===== grade =====
  col = col / (1.0 + 0.18 * max(col - 0.85, 0.0));
  float vig = smoothstep(1.3, 0.28, length(p0 * vec2(0.82, 1.1)));
  col *= 0.4 + 0.6 * vig;
  col += (h21(gl_FragCoord.xy + fract(uTime * 9.3) * 211.0) - 0.5) * (0.018 + 0.018 * I);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`},h={id:`phase`,projectId:`love-island`,title:`Phase portrait`,medium:`Coupled differential equations, drawn as a flow field`,colors:{bg:`#0B0C0D`,ink:`#EDE9DF`,accent:`#FF6A4D`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;

#define TAU 6.2831853
#define PI 3.14159265
#define AL 0.25
#define OM 1.0
#define K 0.25
#define N0 128.0
#define PHI 0.52
#define SQ 1.42
#define RATE 0.62
#define SEASON 22.0
#define SIG 1.18

float px;

float h21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 toZ(vec2 d) {
  float c = cos(PHI), s = sin(PHI);
  vec2 z = vec2(c * d.x + s * d.y, -s * d.x + c * d.y);
  z.y *= SQ;
  return z;
}
vec2 fromZ(vec2 z) {
  z.y /= SQ;
  float c = cos(PHI), s = sin(PHI);
  return vec2(c * z.x - s * z.y, s * z.x + c * z.y);
}
vec2 flowZ(vec2 z) { return vec2(-AL * z.x - OM * z.y, OM * z.x - AL * z.y); }
vec2 flowS(vec2 d) { return fromZ(flowZ(toZ(d))); }

// distance (px) to a line through the origin with normal nrm, dashed along it
float hairline(vec2 d, vec2 nrm, float dashes, float lw) {
  float l = length(nrm);
  float dist = abs(dot(d, nrm)) / l / px;
  float along = dot(d, vec2(-nrm.y, nrm.x)) / l;
  float on = dashes > 0.0 ? step(0.45, fract(along * dashes)) : 1.0;
  return (1.0 - smoothstep(lw, lw + 1.0, dist)) * on;
}

void main() {
  px = 1.0 / uRes.y;
  float I = clamp(uIntensity, 0.0, 1.0);
  // screens of 300..760 px are shown minified (the TV renders 960x720 into a ~300 px picture): widen and lift strokes
  float mf = mix(clamp(uRes.y / 300.0, 1.0, 2.4), 1.0, smoothstep(700.0, 800.0, uRes.y));
  float mb = 1.0 + 0.55 * (mf - 1.0);
  vec2 p0 = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float T = mod(uTime, 3600.0) + uSeed * 97.0;
  float aspect = uRes.x / uRes.y;

  // slow breathing camera
  float zoom = 1.0 + 0.035 * sin(T * 0.07);
  vec2 p = p0 / zoom;

  // drifting equilibrium
  vec2 f = vec2(0.075 * sin(T * 0.11 + 1.3), 0.05 * sin(T * 0.083 + 0.4)) + (uMouse - 0.5) * vec2(0.08, 0.06);
  vec2 d = p - f;
  vec2 z = toZ(d);
  float rho = max(length(z), 1e-4);
  float th = atan(z.y, z.x);
  float lr = log(rho);

  vec3 ink = vec3(0.040, 0.043, 0.047);
  vec3 cream = vec3(0.93, 0.905, 0.85);
  vec3 verm = vec3(1.0, 0.36, 0.22);
  vec3 cool = vec3(0.28, 0.68, 1.0);
  vec3 col = ink + vec3(0.018, 0.017, 0.016) * exp(-length(p0) * 1.6);

  // ---- comets: compute heads first, they light the field ----
  float si = floor((T + 3.0) / SEASON);
  float st = fract((T + 3.0) / SEASON);
  float tc = st * SEASON * RATE;
  float th0 = h21(vec2(si, 4.1 + floor(uSeed * 40.0))) * TAU;
  float cAlpha = smoothstep(0.0, 0.05, st) * (1.0 - smoothstep(0.90, 0.995, st));
  float lightA = 0.0, lightB = 0.0;
  vec3 trailC = vec3(0.0), trailCoreC = vec3(0.0);
  vec3 heads = vec3(0.0);
  for (int c = 0; c < 2; c++) {
    float fc = float(c);
    float r0 = mix(1.16, 0.94, fc);
    float t0 = th0 + fc * (PI + 0.42);
    float headTh = t0 + OM * tc;
    float hr = r0 * exp(-AL * tc);
    vec2 hp = f + fromZ(hr * vec2(cos(headTh), sin(headTh)));
    float dh = length(p - hp);
    vec3 pcl = mix(verm, cool, fc);
    float lg = exp(-dh * 7.0) * cAlpha;
    lightA += lg * (1.0 - fc); lightB += lg * fc;
    float core = exp(-pow(dh / (0.0042 + 1.6 * px), 2.0));
    float halo = exp(-dh / 0.022);
    float bloom = exp(-dh / 0.11);
    heads += (vec3(1.0, 0.97, 0.92) * core * 1.6 + pcl * halo * 0.85 + pcl * bloom * 0.20 * (0.5 + 0.5 * I)) * cAlpha;
    // trail: the same trajectory, sampled where it crosses this pixel's angle
    float nmax = floor((headTh - th) / TAU);
    for (int j = 0; j < 2; j++) {
      float tn = (th + TAU * (nmax - float(j)) - t0) / OM;
      float age = tc - tn;
      float TL = 6.8;
      if (age >= 0.0 && age <= TL) {
        float rn = r0 * exp(-AL * tn);
        float dz = abs(rho - rn) * 0.97 / SIG;          // screen units, near enough
        float a = 1.0 - age / TL;
        float w = max(mix(0.5, 3.0, a * a), mix(0.0006, 0.0034, a * a) / px);
        float dpx = dz / px;
        trailCoreC += mix(pcl, vec3(1.0, 0.9, 0.85), 0.45) * (1.0 - smoothstep(w * 0.45, w * 0.45 + 1.0, dpx)) * pow(a, 1.4);
        trailC += pcl * ((1.0 - smoothstep(w, w + 1.2, dpx)) * pow(a, 1.8) + exp(-dz / 0.012) * a * a * 0.22);
      }
    }
  }
  trailC *= cAlpha; trailCoreC *= cAlpha;
  float light = lightA + lightB;

  // ---- streamlines: level sets of s with a level-of-detail ladder ----
  float s = lr + K * th;
  float D = N0 / (TAU * K);
  float spacing0 = rho / (D * sqrt(1.0 + K * K) * SIG);
  float target = max(0.0135, 3.8 * px);
  float Lc = clamp(log2(target / spacing0), 0.0, 5.0);
  float Lf = floor(Lc);
  float sc = exp2(Lf);
  float g = s * D / sc;
  float nn = floor(g + 0.5);
  float dpx = abs(g - nn) * spacing0 * sc / px;
  float odd = mod(nn, 2.0);
  float lod = mix(1.0, 1.0 - fract(Lc), odd);
  float line = (1.0 - smoothstep(0.3 * mf, 1.15 * mf, dpx)) * lod;
  // per-lane identity, stable across LOD levels and the branch cut
  float lane = mod(nn * sc, N0);
  float hA = h21(vec2(lane, 1.7 + floor(uSeed * 23.0)));
  float hB = h21(vec2(lane, 9.3));
  float hC = h21(vec2(lane, 5.1));
  // dashes advected by flight time
  float tau = -lr / AL;
  float freq = 0.85 + 0.9 * hB;
  float ph = fract((tau - T * RATE) * freq + hA * 7.0);
  float dl = 0.18 + 0.32 * hC;
  float dash = smoothstep(0.0, dl, ph) * (1.0 - smoothstep(dl, dl + 0.035, ph));
  dash = pow(dash, 1.6);
  float hasDash = step(hA, 0.40 + 0.30 * I);
  float centre = smoothstep(0.012, 0.06, rho);         // let the focus breathe
  float edge = smoothstep(1.55, 1.05, rho);
  float base = 0.055 + 0.04 * hB;
  float bright = (base + dash * hasDash * (0.25 + 0.85 * hB * hB)) * centre * mb;
  vec3 lineCol = mix(cream, verm, clamp(lightA * 1.3, 0.0, 0.88));
  lineCol = mix(lineCol, cool, clamp(lightB * 1.3, 0.0, 0.88));
  col += lineCol * line * bright * (1.0 + light * 2.2) * edge;
  // soft flow sheen between lines so the field has a body
  col += cream * dash * hasDash * centre * 0.016 * exp(-dpx * 0.15);

  // ---- plot furniture: frame, ticks, zero axes, nullclines, equilibrium ----
  vec2 hb = vec2(0.5 * aspect, 0.5) - 0.055;
  vec2 q = abs(p0) - hb;
  float sdBox = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
  float frame = 1.0 - smoothstep(0.4, 1.4, abs(sdBox) / px);
  // ticks every 0.1, major every 0.5, pointing inward
  vec2 tk = abs(fract(p0 / 0.1 + 0.5) - 0.5) * 0.1 / px;
  vec2 tkm = abs(fract(p0 / 0.5 + 0.5) - 0.5) * 0.5 / px;
  float tlen = 0.012, tlenM = 0.024;
  float tickL = 0.0;
  // ticks on left/right edges (vary along y), on top/bottom edges (vary along x)
  float nearV = step(-q.x, tlen) * step(q.x, 0.0) * (1.0 - smoothstep(0.4, 1.2, tk.y));
  float nearVM = step(-q.x, tlenM) * step(q.x, 0.0) * (1.0 - smoothstep(0.4, 1.2, tkm.y));
  float nearH = step(-q.y, tlen) * step(q.y, 0.0) * (1.0 - smoothstep(0.4, 1.2, tk.x));
  float nearHM = step(-q.y, tlenM) * step(q.y, 0.0) * (1.0 - smoothstep(0.4, 1.2, tkm.x));
  tickL = max(max(nearV, nearVM), max(nearH, nearHM)) * step(q.x, 0.0) * step(q.y, 0.0);
  float furn = smoothstep(150.0, 320.0, uRes.y);        // fine furniture only when it can resolve
  col += vec3(0.42, 0.41, 0.39) * (frame * 0.55 + tickL * 0.5) * (0.35 + 0.65 * furn);
  float zx = (1.0 - smoothstep(0.3, 1.2, abs(p0.y) / px)) * step(q.x, 0.0);
  float zy = (1.0 - smoothstep(0.3, 1.2, abs(p0.x) / px)) * step(q.y, 0.0);
  col += vec3(0.30, 0.29, 0.28) * (zx + zy) * 0.22 * furn;
  // nullclines of the screen-space system: x' = 0 and y' = 0
  vec2 e1 = flowS(vec2(1.0, 0.0)), e2 = flowS(vec2(0.0, 1.0));
  vec2 row0 = vec2(e1.x, e2.x), row1 = vec2(e1.y, e2.y);
  float inside = step(q.x, 0.0) * step(q.y, 0.0);
  float nc = (hairline(d, row0, 70.0, 0.35) + hairline(d, row1, 0.0, 0.3) * 0.7) * inside;
  col += mix(cream, verm, 0.15) * nc * 0.20 * (0.5 + 0.5 * furn);
  // equilibrium marker: open circle and crosshair arms
  float dd = length(d);
  float ring = 1.0 - smoothstep(0.4, 1.3, abs(dd - 0.010) / px);
  vec2 ad = abs(d);
  float arms = (1.0 - smoothstep(0.3, 1.2, ad.y / px)) * step(0.018, ad.x) * step(ad.x, 0.034)
             + (1.0 - smoothstep(0.3, 1.2, ad.x / px)) * step(0.018, ad.y) * step(ad.y, 0.034);
  float settle = smoothstep(0.75, 1.0, st) * (1.0 - smoothstep(0.97, 1.0, st));
  col += cream * (ring * 0.85 + arms * 0.5);
  col += cream * exp(-dd / 0.03) * 0.05 + mix(verm, cool, 0.5 + 0.5 * sin(T * 0.8)) * exp(-dd / 0.05) * settle * 0.35;

  // ---- the couple ----
  col += trailC * 0.95 + trailCoreC * 0.9;
  col += heads;

  // ---- grade ----
  col = col / (1.0 + 0.25 * max(col - 0.85, 0.0));
  float vig = smoothstep(1.3, 0.3, length(p0 * vec2(0.8, 1.05)));
  col *= 0.42 + 0.58 * vig;
  float gr = h21(gl_FragCoord.xy + fract(T * 11.3) * 517.0) - 0.5;
  col += gr * (0.03 + 0.02 * I);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`},g={id:`digits`,projectId:`zeta`,title:`120 seconds`,medium:`Arithmetic drills in seven-segment light`,colors:{bg:`#070504`,ink:`#FFE2B4`,accent:`#FFA43A`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;
${f}

const float ZT_TAU = 6.2831853;
const float ZT_BIG = 100.0;
const float ZT_RS = 0.84;      // phase of a problem at which its answer resolves
const float ZT_SLOT = 1.49;    // mean seconds per problem (80 resolved by t = 119.1 s)
const float ZT_R0 = 0.372;     // countdown ring radius

float zh1(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float zh2(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }

// problems resolved by drill time t, as a monotone warp of a steady pace
float zSched(float t) { return t / ZT_SLOT + 0.18 * sin(t * 0.9) + 0.10 * sin(t * 2.3 + 1.0) - 0.0841471; }
float zScore(float t) { float u = zSched(t) - ZT_RS + 1.0; return floor(u) - 1.0 + smoothstep(0.0, 0.12, fract(u)); }

vec4 zProb(float id) {
  float h1 = zh1(id * 1.731 + 0.17), h2 = zh1(id * 2.917 + 5.3), h3 = zh1(id * 0.613 + 9.1);
  float op = step(0.45, h3);
  float a = op > 0.5 ? 2.0 + floor(h1 * 11.0) : 2.0 + floor(h1 * 99.0);
  float b = 2.0 + floor(h2 * 99.0);
  return vec4(a, b, op, op > 0.5 ? a * b : a + b);
}
float zNd(float n) { return n < 9.5 ? 1.0 : (n < 99.5 ? 2.0 : (n < 999.5 ? 3.0 : 4.0)); }
float zP10(float e) { return e < 0.5 ? 1.0 : (e < 1.5 ? 10.0 : (e < 2.5 ? 100.0 : 1000.0)); }
float zDigitL(float n, float nd, float i) { return floor(mod((n + 0.5) / zP10(nd - 1.0 - i), 10.0)); }
float zDigitR(float n, float r) { return floor(mod((n + 0.5) / zP10(r), 10.0)); }

float zMask(float d) {
  if (d < 0.5) return 63.0; if (d < 1.5) return 6.0; if (d < 2.5) return 91.0; if (d < 3.5) return 79.0;
  if (d < 4.5) return 102.0; if (d < 5.5) return 109.0; if (d < 6.5) return 125.0; if (d < 7.5) return 7.0;
  if (d < 8.5) return 127.0; if (d < 9.5) return 111.0; return 0.0;
}
float zBit(float m, float b) { return mod(floor(m / b + 0.01), 2.0); }
float zSeg(vec2 d, float L, float w) { return max(d.y - w, (d.x + d.y - L) * 0.7071); }

// glyph distance in glyph units (digit spans y -1..1). x: lit segments, y: unlit (ghost) segments.
// codes: 0-9 digits, 10 times, 11 plus, 12 equals, 13 blank, 14 ghost-only 8
vec2 zGlyph(vec2 g, float code) {
  if (code > 12.5 && code < 13.5) return vec2(ZT_BIG);
  g.x -= g.y * 0.11;
  const float W = 0.12;
  if (code > 9.5 && code < 12.5) {
    if (code < 10.5) {
      vec2 r = abs(vec2(g.x + g.y, g.x - g.y) * 0.7071);
      return vec2(min(zSeg(r, 0.50, W), zSeg(r.yx, 0.50, W)), ZT_BIG);
    }
    if (code < 11.5) { vec2 r = abs(g); return vec2(min(zSeg(r, 0.50, W), zSeg(r.yx, 0.50, W)), ZT_BIG); }
    return vec2(min(zSeg(abs(g - vec2(0.0, 0.28)), 0.52, W), zSeg(abs(g + vec2(0.0, 0.28)), 0.52, W)), ZT_BIG);
  }
  float m = zMask(code);
  float s0 = zSeg(abs(g - vec2(0.0, 0.94)), 0.49, W);
  float s1 = zSeg(abs(g - vec2(0.56, 0.47)).yx, 0.45, W);
  float s2 = zSeg(abs(g - vec2(0.56, -0.47)).yx, 0.45, W);
  float s3 = zSeg(abs(g + vec2(0.0, 0.94)), 0.49, W);
  float s4 = zSeg(abs(g + vec2(0.56, 0.47)).yx, 0.45, W);
  float s5 = zSeg(abs(g - vec2(-0.56, 0.47)).yx, 0.45, W);
  float s6 = zSeg(abs(g), 0.49, W);
  float on = ZT_BIG, off = ZT_BIG;
  if (zBit(m, 1.0) > 0.5) on = min(on, s0); else off = min(off, s0);
  if (zBit(m, 2.0) > 0.5) on = min(on, s1); else off = min(off, s1);
  if (zBit(m, 4.0) > 0.5) on = min(on, s2); else off = min(off, s2);
  if (zBit(m, 8.0) > 0.5) on = min(on, s3); else off = min(off, s3);
  if (zBit(m, 16.0) > 0.5) on = min(on, s4); else off = min(off, s4);
  if (zBit(m, 32.0) > 0.5) on = min(on, s5); else off = min(off, s5);
  if (zBit(m, 64.0) > 0.5) on = min(on, s6); else off = min(off, s6);
  return vec2(on, off);
}

// problem line: a, op, b, '='
float zCode1(float c, vec4 P, float na, float nb) {
  if (c < na - 0.5) return zDigitL(P.x, na, c);
  if (c < na + 0.5) return P.z > 0.5 ? 10.0 : 11.0;
  if (c < na + nb + 0.5) return zDigitL(P.y, nb, c - na - 1.0);
  return 12.0;
}

vec3 zShade(float d, float ghost, float px, float bright, float halo, vec3 amb, vec3 hot) {
  float core = smoothstep(px, -px, d);
  float inner = smoothstep(-0.02, -0.11, d);
  float dd = max(d, 0.0);
  float hl = exp(-dd * 2.4) * 0.20 + exp(-dd * 8.0) * 0.42;
  vec3 c = (amb * (core * 0.95 + hl * halo) + hot * inner * 0.85 * core) * bright;
  return c + amb * smoothstep(px, -px, ghost) * 0.05;
}

void main() {
  float I = clamp(uIntensity, 0.0, 1.0);
  float S = min(uRes.y, uRes.x / 1.45);
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / S;
  float pxs = 1.0 / S;
  vec2 mo = uMouse - 0.5;
  vec2 q = p * (1.0 + 0.05 * I * dot(p, p));
  vec3 AMB = vec3(1.0, 0.55, 0.16);
  vec3 HOT = vec3(1.0, 0.86, 0.60);

  float T = uTime + uSeed * 120.0;
  float run = floor(T / 126.0);
  float dt = T - run * 126.0;
  float act = step(dt, 120.0);
  float td = min(dt, 120.0);
  float s = zSched(td);
  float k = floor(s), ph = s - k;
  vec4 P = zProb(k + run * 157.0);
  float nd = zNd(P.w);
  float nt = clamp(floor((ph - ZT_RS) / 0.07) + nd, 0.0, nd);
  float res = step(ZT_RS, ph);
  float since = res > 0.5 ? (ph - ZT_RS) * ZT_SLOT : (ph + 1.0 - ZT_RS) * ZT_SLOT;
  if (k < 0.5 && res < 0.5) since = 99.0;
  if (act < 0.5) since = 99.0;
  float score = k + res;
  float bloom = exp(-since * 4.2);

  vec3 col = vec3(0.010, 0.007, 0.005);
  vec2 C = vec2(0.0, 0.0) + mo * 0.012;
  vec2 rc = q - C;
  float r = length(rc);

  // ---------- wall of past drills ----------
  {
    vec2 wq = q - mo * 0.04;
    float WH = 0.029, RH = 0.05, SL = 0.27;
    float wy = wq.y + T * 0.011;
    float row = floor(wy / RH);
    float wx = wq.x + zh1(row * 7.13 + 0.5) * SL + T * 0.004 * (mod(row, 2.0) - 0.5);
    float sc = floor(wx / SL);
    vec2 sid = vec2(sc, row);
    float hh = zh2(sid * 1.37 + 0.71);
    float per = 5.0 + 7.0 * zh2(sid * 1.3 + 4.1);
    float tt = T + hh * per;
    float cyc = floor(tt / per);
    float lph = tt - cyc * per;
    float live = step(0.42, zh2(sid * 2.1 + cyc * 1.7));
    vec4 WP = zProb(floor(zh2(sid + cyc * 0.37) * 9973.0));
    float na = zNd(WP.x), nb = zNd(WP.y), nw = zNd(WP.w);
    float tres = 0.8 + 0.9 * hh;
    float typed = clamp(floor((lph - tres) / 0.11) + nw, 0.0, nw);
    float cw = 0.648 * WH;
    float lx = wx - sc * SL - 0.012;
    float ci = floor(lx / cw);
    float wgs = 2.7 / WH;
    vec2 g = vec2((lx - (ci + 0.5) * cw) * wgs, (wy - (row + 0.5) * RH) * wgs);
    float nAll = na + nb + 2.0 + nw;
    if (live > 0.5 && ci >= 0.0 && ci < nAll - 0.5 && abs(g.y) < 1.6 && lph < per - 1.0) {
      float code = 13.0;
      if (ci < na + nb + 1.5) code = zCode1(ci, WP, na, nb);
      else if (ci - (na + nb + 2.0) < typed - 0.5) code = zDigitL(WP.w, nw, ci - (na + nb + 2.0));
      vec2 d = zGlyph(g, code);
      float fadeIn = mix(step(0.5, zh1(floor(T * 38.0) + hh * 91.0)), 1.0, smoothstep(0.05, 0.22, lph));
      float fadeOut = smoothstep(per - 1.0, per - 2.4, lph);
      float flash = lph > tres ? exp(-(lph - tres) * 2.6) : 0.0;
      float b = (0.085 + 0.40 * flash) * fadeIn * fadeOut;
      float mask = smoothstep(ZT_R0 - 0.02, ZT_R0 + 0.17, r) * mix(0.45, 1.0, I);
      float core = smoothstep(wgs * pxs * 1.4, -wgs * pxs * 1.4, d.x);
      col += AMB * (core + exp(-max(d.x, 0.0) * 5.0) * 0.25) * b * mask;
    }
  }

  // ---------- score line: climbs the screen across the 120 seconds ----------
  float hw = 0.5 * uRes.x / S;
  float xL = -hw + 0.08, xR = hw - 0.08;
  float yB = -0.43, yT = 0.41;
  float sy = (yT - yB) / 80.0;
  vec2 lq = q - mo * 0.02;
  {
    float tx = (lq.x - xL) / (xR - xL) * 120.0;
    float inT = step(0.0, tx) * step(tx, td);
    float f0 = yB + zScore(max(tx, 0.0)) * sy;
    float e = 0.18;
    float f1 = yB + zScore(max(tx - e, 0.0)) * sy, f2 = yB + zScore(tx + e) * sy;
    float slope = (f2 - f1) / (2.0 * e * (xR - xL) / 120.0);
    float dl = abs(lq.y - f0) / sqrt(1.0 + slope * slope);
    float inside = mix(0.22, 1.0, smoothstep(ZT_R0 - 0.03, ZT_R0 + 0.06, r));
    float lineC = smoothstep(pxs * 1.6, 0.0, dl - 0.0011);
    float lineG = exp(-dl / 0.006) * 0.35 + exp(-dl / 0.03) * 0.08;
    col += AMB * (lineC * 0.85 + lineG) * inT * inside * mix(0.6, 1.0, I);
    float under = step(lq.y, f0) * step(yB, lq.y) * inT;
    col += AMB * under * (0.010 + 0.05 * exp(-(f0 - lq.y) / 0.08)) * inside;
    // axis: baseline and a tick every 10 seconds
    float ax = smoothstep(pxs * 1.5, 0.0, abs(lq.y - yB + 0.012) - 0.0004) * step(xL, lq.x) * step(lq.x, xR);
    float tk = mod(tx + 5.0, 10.0) - 5.0;
    float tick = smoothstep(pxs * 1.4, 0.0, abs(tk * (xR - xL) / 120.0) - 0.0006) * step(abs(lq.y - yB + 0.02), 0.008) * step(-0.5, tx) * step(tx, 120.5);
    col += AMB * (ax * 0.10 + tick * mix(0.10, 0.45, step(tx, td)));
    // head and its score label
    vec2 H = vec2(xL + td / 120.0 * (xR - xL), yB + zScore(td) * sy);
    float dh = length(lq - H);
    float hb = 1.0 + 1.6 * bloom;
    col += (HOT * smoothstep(0.0075, 0.004, dh) + AMB * (exp(-dh / 0.012) * 0.5 + exp(-dh / 0.05) * 0.10)) * hb;
    float lH = 0.044;
    float ns = zNd(score);
    vec2 lo = H + vec2(0.022, 0.034);
    float lgs = 2.7 / lH;
    vec2 lg = (lq - lo) * lgs;
    float lci = floor(lg.x / 1.75);
    if (lci >= 0.0 && lci < ns - 0.5 && abs(lg.y) < 2.5) {
      vec2 d = zGlyph(vec2(lg.x - (lci + 0.5) * 1.75, lg.y), zDigitL(score, ns, lci));
      col += zShade(d.x, ZT_BIG, lgs * pxs, 0.85 + 0.6 * bloom, 1.0, AMB, HOT);
    }
  }

  // ---------- countdown ring: 120 ticks, one per second ----------
  {
    float turn = fract(atan(rc.x, rc.y) / ZT_TAU + 1.0);
    float e = td / 120.0;
    float ti = floor(turn * 120.0 + 0.5);
    float tim = mod(ti, 120.0);
    float tang = (turn * 120.0 - ti) / 120.0 * ZT_TAU * r;
    float major = step(mod(tim + 0.5, 10.0), 1.0);
    float five = step(mod(tim + 0.5, 5.0), 1.0);
    float tl = mix(mix(0.015, 0.025, five), 0.040, major);
    float tickD = max(abs(tang) - mix(0.0022, 0.0034, major), max(ZT_R0 - r, r - (ZT_R0 + tl)));
    float tickC = smoothstep(pxs * 1.2, -pxs * 0.6, tickD);
    float lit = step(td, tim + 1.0);
    float refill = dt > 124.4 ? step(turn, (dt - 124.4) / 1.6) : 0.0;
    lit = max(lit * act, refill);
    float age = td - (tim + 1.0);
    float ember = act * (age > 0.0 ? exp(-age * 0.8) : 0.0);
    float tb = lit * mix(0.62, 1.0, major) + ember * 0.9 + 0.075;
    col += mix(AMB, HOT, lit * major * 0.5) * tickC * tb;
    col += AMB * exp(-max(tickD, 0.0) / 0.004) * 0.10 * lit;
    // inner arc
    float ar = abs(r - (ZT_R0 - 0.016));
    float arcC = smoothstep(pxs * 1.4, 0.0, ar - 0.0009);
    float onArc = max(step(e, turn) * act, refill);
    col += AMB * arcC * mix(0.07, 0.6, onArc);
    // sweep head: radial beam plus a comet trail on the arc
    float da = fract(turn - e + 0.5) - 0.5;
    float tangH = da * ZT_TAU * r;
    float band = smoothstep(ZT_R0 - 0.05, ZT_R0 - 0.02, r) * smoothstep(ZT_R0 + 0.075, ZT_R0 + 0.045, r);
    col += (HOT * exp(-abs(tangH) / 0.0025) * 0.9 + AMB * exp(-abs(tangH) / 0.012) * 0.25) * band * act;
    float trail = da < 0.0 ? exp(da * ZT_TAU * 3.2) : 0.0;
    col += AMB * trail * exp(-ar / 0.005) * 0.5 * act;
    // outer hairline
    col += AMB * smoothstep(pxs * 1.4, 0.0, abs(r - (ZT_R0 + 0.062)) - 0.0005) * 0.10;
    // a pulse leaves the ring on every resolved answer
    float pr = ZT_R0 + 0.07 + since * 0.32;
    col += AMB * exp(-abs(r - pr) / 0.004) * exp(-since * 2.6) * 0.45 * I;
  }

  // ---------- the live drill ----------
  vec2 mq = q - C;
  {
    // countdown readout
    float cH = 0.050;
    float cgs = 2.7 / cH;
    float left = act > 0.5 ? ceil(120.0 - td) : 0.0;
    vec2 cg = (mq - vec2(-1.5 * 1.75 / cgs, 0.228)) * cgs;
    float cci = floor(cg.x / 1.75);
    if (cci >= 0.0 && cci < 2.5 && abs(cg.y) < 3.0) {
      float r3 = 2.0 - cci;
      float code = (left + 0.5 < zP10(r3) && r3 > 0.5) ? 14.0 : zDigitR(left, r3);
      vec2 d = zGlyph(vec2(cg.x - (cci + 0.5) * 1.75, cg.y), code);
      float warn = act * step(120.0 - td, 10.0) * (0.5 + 0.5 * step(0.5, fract(td * 2.0)));
      col += zShade(d.x, d.y, cgs * pxs, 0.62 + 0.5 * warn, 0.8, AMB, HOT);
    }

    // problem line
    float H1 = 0.115;
    float g1s = 2.7 / H1;
    float na = zNd(P.x), nb = zNd(P.y);
    float n1 = act > 0.5 ? na + nb + 2.0 : 0.0;
    vec2 g0 = (mq - vec2(-0.5 * n1 * 1.75 / g1s, 0.098)) * g1s;
    float flick = mix(step(0.45, zh1(floor(T * 40.0) + k * 3.0)), 1.0, smoothstep(0.035, 0.085, ph));
    if (abs(g0.y) < 5.0 && n1 > 0.5) {
      float ci = floor(g0.x / 1.75);
      float dOn = ZT_BIG, dGh = ZT_BIG;
      for (int j = -1; j <= 1; j++) {
        float c = ci + float(j);
        if (c < -0.5 || c > n1 - 0.5) continue;
        vec2 d = zGlyph(vec2(g0.x - (c + 0.5) * 1.75, g0.y), zCode1(c, P, na, nb));
        dOn = min(dOn, d.x); dGh = min(dGh, d.y);
      }
      col += zShade(dOn, dGh, g1s * pxs, flick * (0.92 + 0.35 * bloom), 1.0, AMB, HOT);
    }

    // answer field: four ghosted cells, calculator-style typing from the right
    float H2 = 0.165;
    float g2s = 2.7 / H2;
    vec2 a0 = (mq - vec2(-2.0 * 1.75 / g2s, -0.094)) * g2s;
    float val, nv, br;
    if (act < 0.5) {
      val = score; nv = zNd(score); br = 0.9 + 0.5 * (0.5 + 0.5 * sin(dt * 5.0));
    } else if (nt > 0.5) {
      val = floor((P.w + 0.5) / zP10(nd - nt)); nv = nt; br = 0.95 + 2.2 * bloom * res;
    } else {
      vec4 Pp = zProb(k - 1.0 + run * 157.0);
      val = Pp.w; nv = (k > 0.5) ? zNd(Pp.w) : 0.0; br = 2.4 * bloom;
    }
    if (abs(a0.y) < 5.0) {
      float ci = floor(a0.x / 1.75);
      float dOn = ZT_BIG, dGh = ZT_BIG;
      for (int j = -1; j <= 1; j++) {
        float c = ci + float(j);
        if (c < -0.5 || c > 3.5) continue;
        float rr = 3.0 - c;
        float code = rr < nv - 0.5 ? zDigitR(val, rr) : 14.0;
        vec2 d = zGlyph(vec2(a0.x - (c + 0.5) * 1.75, a0.y), code);
        dOn = min(dOn, d.x); dGh = min(dGh, d.y);
      }
      col += zShade(dOn, dGh, g2s * pxs, br, 1.0 + 0.8 * bloom, AMB, HOT);
      // broad bloom behind the field on resolve
      vec2 bq = abs(mq - vec2(0.0, -0.094)) - vec2(0.17, 0.05);
      float bd = length(max(bq, 0.0)) + min(max(bq.x, bq.y), 0.0);
      col += AMB * exp(-max(bd, 0.0) / 0.06) * 0.22 * bloom * res * mix(0.5, 1.0, I);
    }
    // underline cursor of the answer box
    float ul = smoothstep(pxs * 1.4, 0.0, abs(mq.y + 0.188) - 0.0008) * step(abs(mq.x), 0.21);
    float blink = act * (nt < 0.5 ? step(0.5, fract(T * 2.2)) : 0.0);
    col += AMB * ul * (0.18 + 0.5 * blink + 0.6 * bloom * res);
  }

  // ---------- new best: the 120 s run ends on 80 ----------
  {
    float bf = (1.0 - act) * smoothstep(0.1, 0.7, dt - 120.0);
    float ub = 0.0042;
    float tx = fText((mq - vec2(-${(l(`NEW BEST`)*.5).toFixed(1)} * ub, 0.080)) / ub, ${u(`NEW BEST`)}, ub / pxs);
    col += mix(AMB, HOT, 0.5) * tx * bf * (1.45 + 0.30 * sin(dt * 7.0));
    col += AMB * exp(-abs(r - (ZT_R0 + 0.07 + (dt - 120.0) * 0.20)) / 0.004) * exp(-(dt - 120.0) * 1.6) * (1.0 - act) * 0.5;
  }

  // ---------- CRT ----------
  col += AMB * 0.018 * bloom * I;
  float roll = exp(-pow(fract(q.y * 0.35 - T * 0.09) - 0.5, 2.0) * 50.0);
  col *= 1.0 + 0.06 * roll * I;
  col = 1.0 - exp(-col * 1.25);
  float scan = 0.5 + 0.5 * cos(gl_FragCoord.y * ZT_TAU / 3.0);
  col *= mix(1.0, 0.80 + 0.20 * scan, I * smoothstep(320.0, 640.0, uRes.y));
  float vig = smoothstep(1.25, 0.25, length(p * vec2(0.82, 1.08)));
  col *= mix(0.35, 1.0, vig);
  col += (zh2(gl_FragCoord.xy + fract(uTime * 7.31) * 157.0) - 0.5) * mix(0.012, 0.040, I);
  gl_FragColor = vec4(max(col, 0.0), 1.0);
}`},_=e=>e.toFixed(1),v={id:`surface`,projectId:`qvr`,title:`Surface`,medium:`An illustrative SSVI implied-volatility surface with synthetic quotes, re-priced by scheduled rebalancing flows`,colors:{bg:`#07050F`,ink:`#EFE9FF`,accent:`#B48CFF`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;
${f}
#define PI 3.14159265
#define PER 6.5
#define YS 2.6
#define IV0 0.10
#define XM 1.5
#define ZM 2.0

float Tm;
vec3 ro, fw, rt, upv;
float FOC, SS;

float h21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), u.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), u.x), u.y);
}
float eio(float x) { x = clamp(x, 0.0, 1.0); return x * x * (3.0 - 2.0 * x); }

// ---- the events: where and when a rebalance lands ----
vec2 evPos(float e) { return vec2((h21(vec2(e, 1.7)) - 0.5) * 1.9, 0.12 + 0.75 * h21(vec2(e, 4.2))); }
// ripple + local lift of one event at (x, z); returns (wave, lift)
vec2 evWave(float e, vec2 xz) {
  float age = Tm - e * PER;
  if (age < 0.0 || age > 6.0) return vec2(0.0);
  vec2 d = xz - evPos(e);
  d.y *= 1.35;
  float r = length(d);
  float front = age * 1.55 + 0.08;
  float env = smoothstep(front, front - 0.30, r);
  float wave = 0.034 * exp(-age * 0.62) * cos(r * 9.5 - age * 7.5) * exp(-r * 0.85) * env;
  float lift = 0.040 * exp(-age * 0.55) * exp(-r * r * 0.55) * eio(age * 3.0);
  return vec2(wave, lift);
}
// implied vol at (x, z): SSVI over log-moneyness k and log-spaced maturity (z = 0 front, one week; z = ZM back, two years)
float ivBase(float x, float z) {
  float m = clamp(z / ZM, 0.0, 1.0);
  float T = 0.0191781 * pow(104.2857, m);
  float k = -0.05 + 0.45 * (x / XM);
  float lvl = 0.17 + 0.010 * sin(Tm * 0.31 + z * 2.0);
  float rho = -0.70 + 0.08 * sin(Tm * 0.17 + 0.6);
  float eta = 0.80 + 0.06 * sin(Tm * 0.21 + 2.2);
  float sa = lvl * (1.0 + 0.35 * (1.0 - exp(-T / 0.6)));
  float th = sa * sa * T;
  float ph = eta / (sqrt(th) * sqrt(1.0 + th));
  float xx = ph * k + rho;
  float w = 0.5 * th * (1.0 + rho * ph * k + sqrt(xx * xx + 1.0 - rho * rho));
  return sqrt(w / T);
}
float hAt(vec2 xz) {
  float e = floor(Tm / PER);
  vec2 a = evWave(e, xz), b = evWave(e - 1.0, xz);
  return (ivBase(xz.x, xz.y) - IV0 + a.x + a.y + b.x + b.y) * YS;
}
float waveOnly(vec2 xz) {
  float e = floor(Tm / PER);
  return evWave(e, xz).x + evWave(e - 1.0, xz).x;
}

vec3 ramp(float h) {
  vec3 c = mix(vec3(0.030, 0.025, 0.150), vec3(0.24, 0.15, 0.72), smoothstep(0.0, 0.35, h));
  c = mix(c, vec3(0.56, 0.36, 1.00), smoothstep(0.25, 0.62, h));
  c = mix(c, vec3(1.00, 0.46, 0.80), smoothstep(0.55, 0.88, h));
  c = mix(c, vec3(1.00, 0.88, 0.94), smoothstep(0.85, 1.05, h));
  return c;
}
vec2 scr(vec3 P) { vec3 v = P - ro; return FOC * vec2(dot(v, rt), dot(v, upv)) / dot(v, fw); }

void main() {
  float I = clamp(uIntensity, 0.0, 1.0);
  float S = min(uRes.y, uRes.x / 1.45);
  SS = S;
  vec2 p0 = (gl_FragCoord.xy - 0.5 * uRes) / S;
  float px = 1.0 / S;
  vec2 mo = uMouse - 0.5;
  Tm = mod(uTime, 7200.0) + uSeed * PER * 4.0;
  float evIdx = floor(Tm / PER);
  float age = Tm - evIdx * PER;

  // camera: a slow sway, the pointer swings it
  FOC = 1.85;
  float az = 0.30 + 0.20 * sin(Tm * 0.11) + mo.x * 0.55;
  float el = 0.50 + 0.04 * sin(Tm * 0.09) + mo.y * 0.22;
  float R = 6.3;
  vec3 tg = vec3(-0.1, 0.62, 0.95);
  ro = tg + R * vec3(sin(az) * cos(el), sin(el), -cos(az) * cos(el));
  fw = normalize(tg - ro);
  rt = normalize(cross(vec3(0.0, 1.0, 0.0), fw));
  upv = cross(fw, rt);
  vec3 rd = normalize(fw * FOC + rt * p0.x + upv * p0.y);

  // ground: a deep violet haze, brighter low on the screen behind the plot
  vec3 col = mix(vec3(0.020, 0.012, 0.045), vec3(0.004, 0.003, 0.010), smoothstep(-0.5, 0.55, p0.y));
  col += vec3(0.10, 0.045, 0.22) * exp(-dot(p0 - vec2(0.0, -0.08), p0 - vec2(0.0, -0.08)) * 2.4) * 0.55;

  // ---- ray vs the plot box ----
  vec3 bmin = vec3(-XM, 0.0, 0.0), bmax = vec3(XM, 1.75, ZM);
  vec3 inv = 1.0 / rd;
  vec3 t0v = (bmin - ro) * inv, t1v = (bmax - ro) * inv;
  vec3 tmn = min(t0v, t1v), tmx = max(t0v, t1v);
  float tn = max(max(tmn.x, tmn.y), tmn.z), tf = min(min(tmx.x, tmx.y), tmx.z);
  float tHit = 1e9;
  bool hit = false;
  vec3 hp = vec3(0.0), nrm = vec3(0.0, 1.0, 0.0);
  float wall = 0.0;
  if (tf > max(tn, 0.0)) {
    float t = max(tn, 0.0) + 0.002;
    vec3 p = ro + rd * t;
    if (p.y < hAt(p.xz) + 0.0005) {
      hit = true; wall = 1.0; hp = p; tHit = t;
      vec3 a = abs(p - clamp(p, bmin, bmax));
      nrm = (abs(p.z - bmin.z) < 0.01) ? vec3(0.0, 0.0, -1.0) : (p.x < 0.0 ? vec3(-1.0, 0.0, 0.0) : vec3(1.0, 0.0, 0.0));
    } else {
      float tprev = t;
      float lim = 36.0 + 18.0 * I;
      for (int i = 0; i < 54; i++) {
        if (float(i) > lim) break;
        p = ro + rd * t;
        float d = p.y - hAt(p.xz);
        if (d < 0.0) { hit = true; break; }
        tprev = t;
        t += max(0.012, d * 0.42);
        if (t > tf) break;
      }
      if (hit) {
        float a = tprev, b = t;
        for (int j = 0; j < 4; j++) {
          float m = 0.5 * (a + b);
          vec3 q = ro + rd * m;
          if (q.y < hAt(q.xz)) b = m; else a = m;
        }
        tHit = 0.5 * (a + b);
        hp = ro + rd * tHit;
      }
    }
  }

  // ---- shade ----
  if (hit) {
    float pf = tHit / (FOC * S);                       // world size of one screen pixel here
    if (wall < 0.5) {
      float e = 0.010;
      float hx = hAt(hp.xz + vec2(e, 0.0)) - hAt(hp.xz - vec2(e, 0.0));
      float hz = hAt(hp.xz + vec2(0.0, e)) - hAt(hp.xz - vec2(0.0, e));
      nrm = normalize(vec3(-hx, 2.0 * e, -hz));
      float slope = length(vec2(hx, hz)) / (2.0 * e);
      float hn = pow(clamp((hp.y / YS - 0.02) / 0.5, 0.0, 1.1), 0.72);
      vec3 base = ramp(hn);
      vec3 L = normalize(vec3(-0.45, 0.80, -0.40));
      float dif = max(dot(nrm, L), 0.0);
      float fres = pow(1.0 - max(dot(nrm, -rd), 0.0), 3.0);
      vec3 c = base * (0.30 + 0.80 * dif);
      c += vec3(0.55, 0.40, 1.00) * fres * 0.45;
      // strike lines (x) and expiry lines (z): fine, with a bolder every fourth
      float lw = max(pf * 0.85, 0.0007);
      float gx = abs(fract(hp.x * 3.3333 + 0.5) - 0.5) / 3.3333;
      float gz = abs(fract(hp.z * 5.0 + 0.5) - 0.5) / 5.0;
      float mx = abs(fract(hp.x * 0.8333 + 0.5) - 0.5) / 0.8333;
      float mz = abs(fract(hp.z * 1.25 + 0.5) - 0.5) / 1.25;
      float grid = max(smoothstep(lw * 1.3, 0.0, gx - lw * 0.4), smoothstep(lw * 1.3, 0.0, gz - lw * 0.4));
      float major = max(smoothstep(lw * 1.6, 0.0, mx - lw * 0.6), smoothstep(lw * 1.6, 0.0, mz - lw * 0.6));
      c = mix(c, vec3(0.78, 0.66, 1.0), grid * 0.38 + major * 0.40);
      // iso-vol contours
      float cf = (hp.y / YS + IV0) / 0.025;
      float cd = abs(fract(cf + 0.5) - 0.5) * 0.025 * YS;
      float contour = smoothstep(max(pf * slope * 1.1, 0.0006) + 0.0004, 0.0, cd);
      c = mix(c, vec3(1.0, 0.86, 0.96), contour * 0.30);
      // re-pricing crests glow
      float wv = waveOnly(hp.xz);
      c += vec3(0.60, 0.88, 1.0) * pow(clamp(abs(wv) / 0.034, 0.0, 1.2), 2.0) * 0.55;
      // the new level lifts and fades back
      c += vec3(1.0, 0.55, 0.85) * clamp(evWave(evIdx, hp.xz).y / 0.04, 0.0, 1.0) * 0.32;
      // front edge = the SSVI slice, drawn hot
      float fe = smoothstep(lw * 3.0, 0.0, hp.z - 0.0) * 0.0;
      c += vec3(1.0, 0.92, 1.0) * smoothstep(0.012 + lw * 2.0, 0.0, hp.z) * 0.55;
      col = c;
      // distance haze
      col = mix(col, vec3(0.020, 0.012, 0.050), smoothstep(4.0, 8.0, tHit) * 0.6);
    } else {
      // a wall of the plot box, below the surface: dark glass with level lines and the profile edge
      float hh = hAt(hp.xz);
      vec3 wc = mix(vec3(0.020, 0.014, 0.075), vec3(0.11, 0.06, 0.30), smoothstep(0.0, hh, hp.y));
      wc *= 0.55 + 0.35 * (abs(nrm.x) > 0.5 ? 0.6 : 1.0);
      float lw = max(pf * 0.9, 0.0007);
      float lv = abs(fract(hp.y * 4.5 + 0.5) - 0.5) / 4.5;
      float hz = nrm.z != 0.0 ? abs(fract(hp.x * 3.3333 + 0.5) - 0.5) / 3.3333 : abs(fract(hp.z * 5.0 + 0.5) - 0.5) / 5.0;
      wc = mix(wc, vec3(0.62, 0.50, 1.0), smoothstep(lw * 1.2, 0.0, lv) * 0.22);
      wc = mix(wc, vec3(0.62, 0.50, 1.0), smoothstep(lw * 1.2, 0.0, hz) * 0.10);
      // profile edge: the top of the wall is the cut through the surface
      float edge = smoothstep(0.016 + lw * 2.0, 0.0, hh - hp.y);
      wc += vec3(0.95, 0.80, 1.0) * edge * 0.95;
      col = wc;
    }
  }

  // ---- an order-flow beam drops onto the surface at the event ----
  {
    vec2 ep = evPos(evIdx);
    float h0 = hAt(ep) ;
    vec2 u = ro.xz - ep, w = rd.xz;
    float tc = -dot(u, w) / max(dot(w, w), 1e-6);
    vec2 dh = u + w * tc;
    float yc = ro.y + rd.y * tc;
    float beamTop = h0 + 1.15;
    float vis = step(0.0, tc) * step(tc, tHit) * smoothstep(h0 - 0.05, h0 + 0.02, yc) * smoothstep(beamTop, beamTop - 0.5, yc);
    float strike = exp(-age * 2.2) * smoothstep(0.0, 0.05, age);
    float sw = 0.012 + 0.010 * tc * 0.12;
    col += vec3(0.85, 0.72, 1.0) * exp(-dot(dh, dh) / (sw * sw)) * vis * strike * 1.6;
    col += vec3(0.50, 0.32, 1.0) * exp(-dot(dh, dh) / (sw * sw * 36.0)) * vis * strike * 0.35;
    // a flare where it lands
    vec2 sp = scr(vec3(ep.x, h0, ep.y));
    col += vec3(1.0, 0.88, 1.0) * exp(-length(p0 - sp) / 0.020) * exp(-age * 3.0) * 0.8;
    col += vec3(0.65, 0.45, 1.0) * exp(-length((p0 - sp) * vec2(1.0, 2.6)) / 0.12) * exp(-age * 1.6) * 0.30;
    // its name, riding above the beam for a moment
    vec2 lp = scr(vec3(ep.x, h0 + 0.75, ep.y));
    float u0 = 0.0030;
    float lab = fText((p0 - lp - vec2(0.012, -0.006)) / u0, ${u(`REBALANCE`)}, u0 / px);
    col = mix(col, vec3(0.92, 0.84, 1.0), lab * smoothstep(0.1, 0.4, age) * smoothstep(3.0, 2.2, age) * 0.95);
    float tick = smoothstep(px * 1.4, 0.0, abs(p0.x - lp.x) - 0.0004) * step(p0.y, lp.y) * step(sp.y, p0.y);
    col += vec3(0.8, 0.7, 1.0) * tick * 0.0;
  }

  // ---- axis names: billboards anchored to the plot box ----
  {
    float u = 0.0028;
    vec3 gcol = vec3(0.62, 0.55, 0.86);
    vec2 a1 = scr(vec3(0.0, -0.06, -0.12));
    col = mix(col, gcol, fText((p0 - a1 + vec2(${_(l(`STRIKE`)*.5)} * u, 0.0)) / u, ${u(`STRIKE`)}, u / px) * 0.85);
    vec2 a2 = scr(vec3(-XM - 0.18, 0.0, 1.0));
    col = mix(col, gcol, fText((p0 - a2 + vec2(${_(l(`EXPIRY`))} * u, 0.0)) / u, ${u(`EXPIRY`)}, u / px) * 0.85);
    vec2 a3 = scr(vec3(-XM, 1.68, 0.0));
    col = mix(col, gcol, fText((p0 - a3 + vec2(${_(l(`IMPLIED VOL`))} * u * 0.0, -0.01)) / u, ${u(`IMPLIED VOL`)}, u / px) * 0.85);
    vec2 a4 = scr(vec3(0.0, 0.0, -0.02));
    col = mix(col, vec3(0.92, 0.86, 1.0), fText((p0 - a4 - vec2(-${_(l(`ATM`)*.5)} * u, 0.044)) / u, ${u(`ATM`)}, u / px) * 0.0);
    vec2 a5 = scr(vec3(XM, (ivBase(XM, 0.0) - IV0) * YS, 0.0));
    col = mix(col, vec3(1.0, 0.90, 1.0), fText((p0 - a5 - vec2(0.018, 0.0)) / u, ${u(`SSVI SLICE`)}, u / px) * 0.95);
    // the front edge's end cap
    col += vec3(1.0, 0.9, 1.0) * exp(-length(p0 - a5) / 0.006) * 0.5;
  }

  // ---- synthetic quotes: a 7 x 5 lattice of listed quotes jittering around the surface ----
  if (I > 0.05) {
    float qd = 0.0;
    for (int a = 0; a < 7; a++) {
      float fa = float(a);
      float qx = (-0.9 + 0.3 * fa) * XM;
      for (int b = 0; b < 5; b++) {
        float fb = float(b);
        float qz = (0.08 + 0.21 * fb) * ZM;
        // a dot rides a vertical line through the plot, so test the pixel against that line first (cheap)
        vec2 sa = scr(vec3(qx, 0.0, qz)), sb = scr(vec3(qx, 1.6, qz));
        vec2 pa = p0 - sa, ba = sb - sa;
        float hs = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
        if (length(pa - ba * hs) > 0.035) continue;
        vec2 qid = vec2(fa, fb);
        float n1 = h21(qid + 3.1), n2 = h21(qid + 9.7);
        float nz = sin(Tm * (0.9 + 0.8 * n1) + n1 * 40.0) * 0.6 + sin(Tm * 0.37 + n2 * 30.0) * 0.5;
        vec3 P = vec3(qx, hAt(vec2(qx, qz)) + 0.006 * (1.0 + 0.9 * abs(qx / XM)) * nz * YS + 0.022, qz);
        float dq = length(p0 - scr(P));
        float vis = step(length(P - ro), tHit + 0.07);
        float flick = 0.65 + 0.35 * sin(Tm * (1.6 + n2) + n1 * 20.0);
        qd += (exp(-dq * dq / (0.0058 * 0.0058)) + 0.22 * exp(-dq / 0.017)) * vis * flick;
      }
    }
    col += vec3(1.0, 0.93, 0.78) * qd * 0.9;
  }
  // its legend, bottom right
  {
    float u = 0.0025;
    vec2 lq = (p0 - vec2(0.34, -0.455)) / u;
    float lab = fText(lq, ${u(`SYNTHETIC`)}, u / px) + fText(lq - vec2(57.0, 0.0), ${u(`QUOTES`)}, u / px);
    col = mix(col, vec3(0.62, 0.55, 0.86), clamp(lab, 0.0, 1.0) * 0.8);
    col += vec3(1.0, 0.93, 0.78) * exp(-length(p0 - vec2(0.322, -0.4585)) / 0.0045) * 0.9;
  }

  // ---- the four research threads, bottom left ----
  {
    float u = 0.0027;
    float act = age < 1.4 ? 0.0 : (age < 3.0 ? 1.0 : (age < 5.0 ? 2.0 : 3.0));
    for (int j = 0; j < 4; j++) {
      float fj = float(j);
      float on = abs(fj - act) < 0.5 ? 1.0 : 0.0;
      vec2 q = (p0 - vec2(-0.70 + fj * 0.0, -0.44 + fj * 0.0));
      float x = -0.70 + (fj < 0.5 ? 0.0 : (fj < 1.5 ? 0.115 : (fj < 2.5 ? 0.30 : 0.44)));
      vec2 lq = (p0 - vec2(x, -0.455)) / u;
      float lab = fj < 0.5 ? fText(lq, ${u(`FLOWS`)}, u / px) : (fj < 1.5 ? fText(lq, ${u(`FAIR VALUE`)}, u / px) : (fj < 2.5 ? fText(lq, ${u(`SURFACE`)}, u / px) : fText(lq, ${u(`TEST`)}, u / px)));
      col = mix(col, mix(vec3(0.38, 0.34, 0.55), vec3(0.95, 0.90, 1.0), on), lab * (0.65 + 0.35 * on));
      col += vec3(0.7, 0.55, 1.0) * smoothstep(0.0012 + px, 0.0, abs(p0.y + 0.468) - 0.0006) * step(x, p0.x) * step(p0.x, x + (fj < 0.5 ? 0.09 : (fj < 1.5 ? 0.17 : (fj < 2.5 ? 0.115 : 0.065)))) * on * 0.9;
    }
  }

  // ---- stars of dust in the haze ----
  {
    vec2 g = p0 * 24.0 + vec2(0.0, -Tm * 0.15);
    vec2 id = floor(g), f = fract(g) - 0.5;
    float r = h21(id);
    vec2 off = (vec2(h21(id + 1.3), h21(id + 4.7)) - 0.5) * 0.6;
    col += vec3(0.7, 0.6, 1.0) * smoothstep(0.06, 0.0, length(f - off)) * step(0.90, r) * (0.5 + 0.5 * sin(Tm * (1.0 + r) + r * 30.0)) * 0.35 * (hit ? 0.2 : 1.0);
  }

  // ---- grade ----
  col = col / (1.0 + 0.22 * max(col - 0.9, 0.0));
  float vig = smoothstep(1.3, 0.25, length(p0 * vec2(0.8, 1.1)));
  col *= 0.35 + 0.65 * vig;
  col += (h21(gl_FragCoord.xy + fract(uTime * 9.7) * 191.0) - 0.5) * (0.018 + 0.018 * I);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`},y={w:96,h:60,perRow:12,data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1202688,0,0,0,0,53,0,0,0,0,0,0,22656,0,0,0,0,53,0,0,0,0,0,0,17472,0,0,0,3145728,41,0,0,0,0,0,0,313776,0,0,0,5505024,41,0,0,0,0,0,0,609200,0,0,0,2916352,36,0,0,0,0,0,0,11574684,4,0,0,9474048,9,0,0,0,0,0,0,11585637,212,0,0,2408448,1,0,0,0,0,0,0,11955366,1244,797184,0,9846784,0,0,0,0,0,0,10485760,9857805,2470612,111693,0,11943936,0,0,0,0,0,0,12282733,12239649,2996492,139917,0,11586432,0,0,0,0,0,10485760,9884516,8733924,9591588,7783625,9011211,1086114,0,0,0,0,0,4194304,7737930,9880235,11946835,14341453,11618379,148053,0,0,0,0,0,2621440,9476460,8833894,11983697,14080925,2509577,152676,0,0,0,0,0,2785285,2579308,9854308,3595052,11688780,4758156,116897,0,0,0,0,14380032,12021173,9853878,11692854,11184484,11670117,4770057,103058,0,0,0,0,14375056,14380470,14044086,5167724,9311597,9575340,4606218,70221,0,0,0,2097152,14361746,14380470,11704758,11984236,5285677,11933997,5687562,1713493,0,0,0,14155776,14380435,7560118,9915318,12208923,8694189,11965581,10790665,5968465,0,0,0,14376960,14380443,7166821,3591094,3197732,9587564,7488210,3546476,14379593,2,0,0,14375643,14378203,7265060,9776556,9487213,7494498,8788186,11442980,14343324,54,0,0,14371035,10183899,9624332,9489773,11944731,4868909,5462116,4593811,11954588,37,0,0,14193307,10186166,12283317,11065645,10797851,8804717,8704804,5326994,12282442,102,0,2097152,14193225,12283318,12250549,11389229,11618452,2415461,3197729,9869409,11981484,1637,0,4915200,14193226,12283318,12213685,8968997,11932449,3199700,9224780,10142505,12283317,10348,0,5459968,14225994,12283318,11385204,2550363,8702538,14379621,8833462,11944673,12250405,41773,0,12016128,13996621,12283318,11384396,9067163,11590218,12240101,4640182,9998994,14211500,313644,0,14375424,2996302,14380470,4794441,9214828,11360548,14380300,5365174,11932513,12114797,856849,0,12016128,7189357,5467574,11721298,2578796,11192621,14379812,3004342,8788321,14244650,103525,0,11988352,5093229,5088054,2402010,14113644,9589393,14375502,6862254,9881961,13949804,185262,0,14380416,2406061,7190116,10785554,12994933,14047500,14337764,5089014,11670860,9657196,14692,0,14281600,2438765,7190089,5294881,8950897,11683916,11965740,11852150,11578133,14080092,2661,0,9290496,5093165,2433609,4835620,2402011,9486921,14118241,9020590,3216021,11981452,167305,0,9001168,5093037,2410788,5065005,6861579,6853771,14380458,5649622,9736930,9591148,224673,0,11933400,9287413,11573540,11688822,4500333,8721555,14380468,7742062,2709733,12097837,158628,0,2417368,9516781,9278028,11585909,6867821,4798829,11572043,9287388,2413741,12282210,1628065,0,9890536,8688492,9554796,8702325,4494557,4534897,9574761,5084261,6923884,14380306,1417901,0,14342869,11572005,4905837,2411369,6862492,7419051,2509065,5060297,2503963,14363349,1396134,0,14379156,11833933,4676461,2513772,10827556,4535970,8804461,11581003,2747280,14328978,1088788,0,14357600,11932238,7002989,2513769,10794596,4798125,8702052,603945,898344,5715072,4873361,0,14369417,11965006,9591661,9586834,13772516,4761229,3349081,598625,7156584,9912320,3595565,9,14375049,2495078,9587561,9586770,13472996,4512038,9756085,870093,11081496,5636096,9872213,154,12020488,4793142,11684266,3295506,13441289,3304822,10182070,300325,2430048,9011200,11842197,3467,14380368,4794742,11969633,3588874,11051593,4509110,11955638,930594,3189e3,3833856,12206734,1844,14380304,2698102,8725665,2396754,13767817,2444214,9816950,1227618,43432,0,11978088,805,14380328,11610998,9872037,11833929,13781777,4790540,12179830,7494436,41744,0,12020072,284,14375784,10820470,5423717,2415397,11758875,6890277,3368246,9592236,149760,0,12020544,2916,14240576,11846438,4868397,2414765,4943265,2396745,5729070,13265772,2566,0,3366272,1354,13220160,11977580,4868196,2507949,4496308,11932258,8088462,13856169,27438,0,10935296,14765,12232192,3332533,3623058,2513677,3296113,14309666,7232438,1498117,3406,0,11796480,7094,9884160,8874089,10896017,11852373,7490981,11573347,2968501,151558,0,0,0,1495669,3330048,14117481,13818670,11950765,9587597,11847781,3042742,438,0,0,0,11977856,7266304,2546018,11983213,9886518,3332876,11977317,5205421,54,0,0,0,1528960,5656576,2693481,3577123,9886049,9619529,12882505,167350,0,0,0,0,185472,9830400,8690026,3631214,11966172,2434265,0,384,0,0,0,0,186688,7766016,9478939,12019821,173781,0,0,0,0,0,0,0,187200,5668864,8689947,12018284,0,0,0,0,0,0,0,0,20480,9568256,8800521,36,0,0,0,0,0,0,0,0,0,1474560,37449,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0]},b=e=>e.toFixed(1),x=y;function S(e,t,n){if(t-e===1){let t=x.data.slice(e*4,e*4+4);for(;t.length<4;)t.push(0);return`${n}return vec4(${t.map(b).join(`, `)});\n`}let r=e+t>>1;return`${n}if (i < ${b(r-.5)}) {\n${S(e,r,n+`  `)}${n}} else {\n${S(r,t,n+`  `)}${n}}\n`}var C=Math.ceil(x.data.length/4),w={id:`counties`,projectId:`wwii`,title:`County by county`,medium:`A relief of the paper's county figure: columns rise where the imbalance index is large`,colors:{bg:`#05070B`,ink:`#F0E6CF`,accent:`#E9A24A`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;
${f}
#define PI 3.14159265
#define GW ${b(x.w)}
#define GH ${b(x.h)}
#define CYC 18.0
#define GAP 0.10
#define KMAX 24

vec4 cChunk(float i) {
${S(0,C,`  `)}}

float h21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

// 0 off the map; 1..3 investment exceeds loss (low..high); 4..6 loss exceeds investment
float cellCode(float cx, float r) {
  if (cx < 0.0 || cx > GW - 0.5 || r < 0.0 || r > GH - 0.5) return 0.0;
  vec4 ch = cChunk(r * 3.0 + floor(cx / 32.0));
  float c32 = cx - 32.0 * floor(cx / 32.0);
  float k = floor(c32 / 8.0);
  float f = k < 0.5 ? ch.x : (k < 1.5 ? ch.y : (k < 2.5 ? ch.z : ch.w));
  float j = c32 - 8.0 * k;
  float inv = j < 0.5 ? 1.0 : (j < 1.5 ? 0.125 : (j < 2.5 ? 0.015625 : (j < 3.5 ? 0.001953125 : (j < 4.5 ? 0.000244140625 : (j < 5.5 ? 0.000030517578125 : (j < 6.5 ? 0.000003814697265625 : 0.000000476837158203125))))));
  float v = floor(f * inv);
  return v - 8.0 * floor(v * 0.125);
}

vec3 warm(float m) { return mix(vec3(1.0, 0.36, 0.08), vec3(1.0, 0.86, 0.46), m); }
vec3 cool(float m) { return mix(vec3(0.05, 0.30, 0.90), vec3(0.42, 0.88, 1.0), m); }

void main() {
  float I = clamp(uIntensity, 0.0, 1.0);
  float asp = uRes.x / uRes.y;
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float px = 1.0 / uRes.y;
  vec2 mo = uMouse - 0.5;
  float ph = mod(uTime + 9.0, CYC);   // opens on the held relief, so a still frame is already complete

  float cs = min(asp * 0.92, 1.45) / GW;
  float tilt = 0.58 - 0.10 * mo.y * I;
  float rowH = cs * tilt;
  float hmax = 7.0 * cs;
  float kr = ceil((hmax + rowH) / rowH);
  float Y0 = -0.5 * (GH * rowH + hmax) - 0.012;
  vec2 pan = vec2(0.014 * mo.x * I, 0.0);
  vec2 q = p - pan;

  float cxf = (q.x + 0.5 * GW * cs) / cs;
  float cx = floor(cxf);
  float u = cxf - cx;
  float yr = (q.y - Y0) / rowH;
  float r0 = floor(yr);

  // ambient: faint floor and graticule dots under everything
  vec3 col = vec3(0.012, 0.016, 0.024);
  col += vec3(0.012, 0.016, 0.026) * smoothstep(1.3, 0.0, length(p * vec2(0.8, 1.2)));
  {
    vec2 gp = vec2(cxf / 4.0 - 0.5, yr / 4.0 - 0.5);
    vec2 gd = (fract(gp) - 0.5) * vec2(4.0 * cs, 4.0 * rowH);
    float dd = length(gd);
    float inReg = step(-6.0, cxf) * step(cxf, GW + 6.0) * step(-6.0, yr) * step(yr, GH + 6.0);
    col += vec3(0.30, 0.38, 0.55) * smoothstep(px * 1.2, 0.0, dd - 0.0011) * 0.10 * inReg;
  }

  float sweepX = (ph - 3.0) / 12.0 * 1.5 - 0.25;
  vec3 hz = vec3(0.0);
  float hit = 0.0;

  if (cx > -1.0 && cx < GW && r0 > -2.0 && r0 - kr < GH) {
    for (int i = 0; i < KMAX; i++) {
      float fi = float(i);
      if (fi > kr) break;
      float r = r0 - kr + fi;
      if (r < 0.0 || r > GH - 0.5) continue;
      float code = cellCode(cx, r);
      if (code < 0.5) continue;
      float side = step(3.5, code);
      float lv = code - 3.0 * side;
      float hh = h21(vec2(cx * 1.31 + 3.7, r * 0.77 + 9.1));
      float mag = clamp((lv - 1.0 + hh * 0.96) / 3.0, 0.0, 1.0);
      float fx = cx / GW;
      // column rise (west to east) and settle
      float ign = 1.0;
      float t0 = 1.0 + fx * 3.4 + hh * 1.2;
      float x = clamp((ph - t0) / 2.4, 0.0, 1.0);
      float ez = 1.0 - pow(1.0 - x, 3.0);
      ez += 0.07 * sin(x * PI) * (1.0 - x);
      float tf = 15.0 + (1.0 - fx) * 0.8 + hh * 0.5;
      float fall = 1.0 - smoothstep(tf, tf + 1.8, ph);
      float grow = ez * fall;
      float breathe = 1.0 + 0.05 * sin(uTime * 0.8 + cx * 0.21 + r * 0.33) * grow;
      float ht = cs * (0.22 + 6.4 * pow(mag, 2.2) * grow * breathe) * ign;
      float yf = Y0 + (r + GAP) * rowH;
      float yt = Y0 + (r + 1.0 - GAP) * rowH + ht;
      float inX = step(GAP, u) * step(u, 1.0 - GAP);
      if (q.y < yf || q.y > yt) continue;
      if (inX < 0.5) { // gap between columns: spill a little of the neighbour's light
        float sp = 0.5 + 0.5 * mag;
        hz = (side > 0.5 ? warm(mag) : cool(mag)) * 0.10 * sp * smoothstep(yf, yf + ht + rowH, q.y);
        continue;
      }
      vec3 tint = side > 0.5 ? warm(mag) : cool(mag);
      float jit = 0.82 + 0.36 * h21(vec2(r * 3.1 + 1.0, cx * 2.3 + 7.0));
      float rise = grow * (1.0 - grow) * 4.0;
            float fog = mix(1.0, 0.80, r / GH);
      float scan = exp(-pow((fx + 0.10 * r / GH - sweepX) / 0.03, 2.0)) * smoothstep(1.5, 4.5, ph) * (1.0 - smoothstep(15.0, 16.5, ph));
      float blipT = floor(uTime * 1.6);
      float blip = step(0.9935, h21(vec2(cx, r) + blipT * 7.3 + uSeed * 31.0)) * (1.0 - fract(uTime * 1.6));
      float yFaceTop = yf + ht;
      float edgeX = min(u - GAP, 1.0 - GAP - u) / (1.0 - 2.0 * GAP);
      vec3 c;
      if (q.y < yFaceTop) {
        float v = (q.y - yf) / max(ht, 1e-4);
        float shade = mix(0.05, 0.46, pow(v, 1.6)) * (0.5 + 0.5 * mag) * mix(0.72, 1.0, smoothstep(0.0, 0.22, edgeX));
        c = tint * shade * jit * fog * (1.0 + 0.9 * scan + 0.5 * rise);
      } else {
        float tu = clamp((u - GAP) / (1.0 - 2.0 * GAP), 0.0, 1.0);
        float tv = clamp((q.y - yFaceTop) / ((1.0 - 2.0 * GAP) * rowH), 0.0, 1.0);
        float eb = min(min(tu, 1.0 - tu), min(tv, 1.0 - tv));
        float edge = 1.0 - smoothstep(0.0, 0.22, eb);
        float body = 0.55 + 1.05 * mag;
        c = tint * (body * (0.78 + 0.22 * (1.0 - edge)) + edge * (0.35 + 0.5 * mag)) * jit * fog;
        c *= 1.0 + 1.1 * scan + 0.9 * rise;
        c += mix(tint, vec3(1.0, 0.95, 0.85), 0.5) * blip * 1.2;
        c += vec3(1.0, 0.92, 0.75) * edge * mag * mag * 0.35 * grow;
      }
      col = c;
      hit = 1.0;
      break;
    }
  }
  if (hit < 0.5) {
    col += hz;
    // haze: columns glow into the air above them (coarse taps on the rows behind)
    if (cx > -9.0 && cx < GW + 9.0) {
      float hs = 0.0; vec3 hc = vec3(0.0);
      for (int j = 0; j < 4; j++) {
        float fj = float(j);
        float rr = r0 - 2.0 - fj * 3.0;
        float cc = cx + (mod(fj, 2.0) < 0.5 ? -2.0 : 2.0);
        float cd = cellCode(cc, rr);
        float on = step(0.5, cd);
        float sd = step(3.5, cd);
        hs += on * (0.3 + 0.2 * (cd - 3.0 * sd)) * (1.0 - fj * 0.2);
        hc += on * (sd > 0.5 ? vec3(1.0, 0.62, 0.26) : vec3(0.30, 0.62, 1.0));
      }
      col += hc / max(hs * 3.0, 1.0) * hs * 0.045 * smoothstep(0.0, 1.0, ph - 1.5) * (1.0 - smoothstep(15.0, 17.0, ph));
    }
  }

  // ---- HUD: title, legend ----
  vec3 inkC = vec3(0.94, 0.89, 0.76);
  {
    float ut = 0.0030;
    vec2 o1 = vec2(-0.5 * asp + 0.055, 0.5 - 0.075);
    col += inkC * fText((p - o1) / ut, ${u(`COUNTY INDEX`)}, ut / px) * 0.62;
    vec2 o2 = o1 - vec2(0.0, 0.026);
    col += inkC * fText((p - o2) / ut, ${u(`STD DEV`)}, ut / px) * 0.32;
    float lw = 0.42, lx0 = -0.5 * asp + 0.055, ly = -0.5 + 0.092;
    float tt = (p.x - lx0) / lw;
    float inB = step(0.0, tt) * step(tt, 1.0) * step(abs(p.y - ly), 0.0055);
    float s = tt * 2.0 - 1.0;
    float am = pow(abs(s), 0.85);
    vec3 lc = (s < 0.0 ? cool(am) : warm(am)) * (0.10 + 0.9 * am);
    col = mix(col, lc * 1.1, inB * 0.92);
    float tick = step(abs(p.x - (lx0 + lw * 0.5)), 0.0006) * step(abs(p.y - ly + 0.0055), 0.0085);
    col += inkC * tick * 0.55;
    float ul = 0.0022;
    col += cool(0.8) * fText((p - vec2(lx0, ly - 0.030)) / ul, ${u(`INVEST>LOSS`)}, ul / px) * 0.62;
    col += warm(0.7) * fText((p - vec2(lx0 + lw - ${b(l(`LOSS>INVEST`))} * ul, ly - 0.030)) / ul, ${u(`LOSS>INVEST`)}, ul / px) * 0.62;
  }

  col = 1.0 - exp(-col * 1.75);
  col = pow(col, vec3(0.94));
  float vig = smoothstep(1.3, 0.35, length(p * vec2(0.8, 1.15)));
  col *= mix(0.45, 1.0, vig);
  col += (h21(gl_FragCoord.xy + fract(uTime * 3.7) * 91.0) - 0.5) * mix(0.010, 0.026, I);
  gl_FragColor = vec4(max(col, 0.0), 1.0);
}`},re={id:`dyads`,projectId:`thrift`,title:`Together or apart`,medium:`A simulated pair design: shoppers browse the aisles together or apart and meet at the exit`,colors:{bg:`#07080B`,ink:`#EEE7D6`,accent:`#F4B04F`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;
${f}
#define PI 3.14159265
#define TAU 6.2831853
#define AS 0.145      // aisle spacing
#define YB -0.300     // bottom cross aisle
#define YT 0.300      // top cross aisle
#define YD -0.345     // door
#define CYC 24.0

float h1(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float h21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 wpt(float k, float xa, float xb) {
  if (k < 0.5) return vec2(0.0, YD);
  if (k < 1.5) return vec2(0.0, YB);
  if (k < 2.5) return vec2(xa, YB);
  if (k < 3.5) return vec2(xa, YT);
  if (k < 4.5) return vec2(xb, YT);
  if (k < 5.5) return vec2(xb, YB);
  if (k < 6.5) return vec2(0.0, YB);
  return vec2(0.0, YD);
}
float segD(vec2 p, vec2 a, vec2 b, out float t) {
  vec2 pa = p - a, ba = b - a;
  t = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
  return length(pa - ba * t);
}
float pathLen(float xa, float xb) { return (YB - YD) * 2.0 + abs(xa) + (YT - YB) * 2.0 + abs(xb - xa) + abs(xb); }
// one shopper: position at progress s, plus the comet trail intensity at pixel p
float shopper(vec2 p, float s, float xa, float xb, float px, out vec2 head) {
  float D = s * pathLen(xa, xb);
  float cum = 0.0, tr = 0.0;
  head = vec2(0.0, YD);
  for (int k = 0; k < 7; k++) {
    float fk = float(k);
    vec2 a = wpt(fk, xa, xb), b = wpt(fk + 1.0, xa, xb);
    vec2 ab = b - a;
    float len = max(length(ab), 1e-4);
    float t;
    float d = segD(p, a, b, t);
    float age = D - (cum + t * len);
    if (age > 0.0 && age < 0.42) {
      float line = smoothstep(px * 1.4, 0.0, d - 0.0011) + exp(-d / 0.0045) * 0.22;
      tr += line * exp(-age * 8.0);
    }
    if (D >= cum && D < cum + len) head = a + ab / len * (D - cum);
    cum += len;
  }
  return tr;
}
vec3 ribHue(float h) {
  if (h < 0.2) return vec3(0.85, 0.58, 0.26);
  if (h < 0.4) return vec3(0.22, 0.60, 0.60);
  if (h < 0.6) return vec3(0.76, 0.32, 0.42);
  if (h < 0.8) return vec3(0.42, 0.48, 0.70);
  return vec3(0.50, 0.66, 0.40);
}

void main() {
  float I = clamp(uIntensity, 0.0, 1.0);
  float asp = uRes.x / uRes.y;
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float S = min(1.0, asp / 1.5);
  vec2 mo = uMouse - 0.5;
  vec2 w = p / S - vec2(0.012 * mo.x * I, 0.008 * mo.y * I) + vec2(0.0, 0.02);
  float px = 1.0 / (uRes.y * S);
  vec3 GOLD = vec3(1.0, 0.70, 0.26), CYAN = vec3(0.30, 0.78, 1.0);

  // ---------------- pairs ----------------
  vec3 acc = vec3(0.0);   // additive light from shoppers
  vec3 near = vec3(0.0);  // light the racks receive
  for (int i = 0; i < 7; i++) {
    float fi = float(i);
    float tt = uTime + fi * (CYC / 7.0) + 2.9 * h1(fi * 5.1 + 0.3);
    float n = floor(tt / CYC);
    float sw = (tt / CYC - n) / 0.9;
    if (sw >= 1.0) continue;
    float hk = fi * 13.7 + n * 5.31 + 1.7;
    float apart = mod(fi + n, 2.0);
    float a1 = floor(h1(hk) * 7.0);
    float b1 = mod(a1 + 2.0 + floor(h1(hk + 3.3) * 4.0), 7.0);
    float a2 = apart > 0.5 ? mod(a1 + 2.0 + floor(h1(hk + 7.7) * 3.0), 7.0) : a1;
    float b2 = apart > 0.5 ? mod(b1 + 2.0 + floor(h1(hk + 9.1) * 3.0), 7.0) : b1;
    float xa1 = (a1 - 3.0) * AS, xb1 = (b1 - 3.0) * AS, xa2 = (a2 - 3.0) * AS, xb2 = (b2 - 3.0) * AS;
    float env = smoothstep(0.0, 0.025, sw) * (1.0 - smoothstep(0.985, 1.0, sw));
    float reveal = smoothstep(0.03, 0.09, sw);
    vec3 tint = mix(vec3(1.0, 0.97, 0.90), apart > 0.5 ? CYAN : GOLD, reveal);
    float ph2 = apart > 0.5 ? 1.7 : 0.0;
    float sA = clamp(sw + 0.008 * sin(sw * 70.0 + fi * 2.0), 0.0, 1.0);
    float sB = clamp(sw + 0.008 * sin(sw * 70.0 + fi * 2.0 + ph2), 0.0, 1.0);
    vec2 oA = apart > 0.5 ? vec2(0.0) : vec2(0.011, 0.007);
    vec2 oB = apart > 0.5 ? vec2(0.0) : vec2(-0.011, -0.007);
    vec2 hA, hB;
    float tA = shopper(w - oA, sA, xa1, xb1, px, hA);
    float tB = shopper(w - oB, sB, xa2, xb2, px, hB);
    hA += oA; hB += oB;
    float dA = length(w - hA), dB = length(w - hB);
    float trailK = apart > 0.5 ? 0.75 : 1.0;
    acc += tint * (tA + tB) * 0.55 * trailK * env;
    // heads
    float coreA = smoothstep(0.0068, 0.0040, dA), coreB = smoothstep(0.0068, 0.0040, dB);
    acc += (mix(tint, vec3(1.0), 0.65) * (coreA + coreB) + tint * (exp(-dA / 0.011) + exp(-dB / 0.011)) * 0.40 + tint * (exp(-dA / 0.04) + exp(-dB / 0.04)) * 0.07) * env;
    near += tint * (exp(-dA * dA / 0.0030) + exp(-dB * dB / 0.0030)) * env;
    // tether between the two members
    float tt2;
    float dl = segD(w, hA, hB, tt2);
    float sep = length(hA - hB);
    if (apart > 0.5) {
      float dash = step(0.5, fract(tt2 * sep * 38.0 - uTime * 1.5));
      acc += CYAN * smoothstep(px * 1.2, 0.0, dl - 0.0007) * dash * 0.30 * exp(-sep * 1.2) * env;
    } else {
      acc += tint * (smoothstep(px * 1.4, 0.0, dl - 0.0016) * 0.95 + exp(-dl / 0.006) * 0.30) * env;
      vec2 mid = 0.5 * (hA + hB);
      acc += GOLD * exp(-dot(w - mid, w - mid) / 0.0016) * 0.12 * env;
    }
    // assignment ring at the door; reunion ring at the exit
    float dd = length(w - vec2(0.0, YD));
    float rg = clamp(sw / 0.14, 0.0, 1.0);
    acc += tint * exp(-abs(dd - (0.012 + rg * 0.10)) / 0.0035) * (1.0 - rg) * (1.0 - rg) * 0.9 * step(sw, 0.14);
    float rx = clamp((sw - 0.955) / 0.045, 0.0, 1.0);
    acc += tint * exp(-abs(dd - (0.012 + rx * 0.09)) / 0.0035) * (1.0 - rx) * 0.6 * step(0.955, sw) * apart;
  }

  // ---------------- the store ----------------
  vec3 col = vec3(0.016, 0.017, 0.022);
  col += vec3(0.020, 0.022, 0.030) * smoothstep(1.2, 0.1, length(w * vec2(0.9, 1.3)));
  vec2 sb = abs(w) - vec2(0.62, 0.37);
  float inStore = step(max(sb.x, sb.y), 0.0);
  // floor tiles
  vec2 ft = abs(fract(w / 0.058 + 0.5) - 0.5) * 0.058;
  col += vec3(0.5, 0.58, 0.78) * smoothstep(px * 1.2, 0.0, min(ft.x, ft.y) - 0.0002) * 0.030 * inStore;
  // racks: ribbed rectangles between the aisles
  {
    float gx = w.x / AS;
    float m = floor(gx);
    float fx = gx - m - 0.5;
    float rackX = step(abs(fx), 0.225) * step(-4.5, m) * step(m, 3.5);
    float rackY = step(abs(w.y), 0.255);
    float inR = rackX * rackY;
    float ci = floor(w.y / 0.0068);
    float fy = fract(w.y / 0.0068);
    float rib = smoothstep(0.08, 0.24, fy) * smoothstep(0.92, 0.76, fy);
    float hh = h21(vec2(ci * 0.37 + 2.0, m * 3.1 + 5.0));
    vec3 hue = ribHue(hh);
    float pulse = 0.65 + 0.35 * sin(uTime * 3.0 + hh * 40.0);
    vec3 rc = hue * rib * (0.075 + 0.075 * h21(vec2(ci, m)) ) + hue * rib * near * 0.9 * pulse;
    col += rc * inR;
    // rack outline
    vec2 rd = abs(vec2(fx * AS, w.y)) - vec2(0.225 * AS, 0.255);
    float ro = abs(length(max(rd, 0.0)) + min(max(rd.x, rd.y), 0.0));
    col += vec3(0.55, 0.62, 0.8) * smoothstep(px * 1.3, 0.0, ro - 0.0004) * 0.10 * rackX * step(abs(w.y), 0.262);
  }
  // walls with a door gap, door ticks
  {
    float wd = abs(max(sb.x, sb.y));
    float gap = step(abs(w.x), 0.050) * step(w.y, -0.30);
    col += vec3(0.62, 0.68, 0.84) * smoothstep(px * 1.4, 0.0, wd - 0.0016) * 0.30 * (1.0 - gap);
    float tick = smoothstep(px * 1.3, 0.0, abs(abs(w.x) - 0.050) - 0.0012) * step(abs(w.y + 0.372), 0.012);
    col += vec3(0.95, 0.85, 0.62) * tick * 0.45;
    // corridor guide dots
    col += vec3(0.5, 0.6, 0.8) * smoothstep(px * 1.2, 0.0, abs(w.y - YB) - 0.0002) * 0.03 * inStore * step(abs(w.x), 0.5);
    col += vec3(0.5, 0.6, 0.8) * smoothstep(px * 1.2, 0.0, abs(w.y - YT) - 0.0002) * 0.03 * inStore * step(abs(w.x), 0.5);
  }
  col += near * 0.018 * inStore;
  col += acc;

  // ---------------- labels ----------------
  vec3 inkC = vec3(0.93, 0.89, 0.78);
  {
    float ut = 0.0026;
    col += inkC * fText((w - vec2(-${(e=>e.toFixed(1))(l(`ENTRY/EXIT`)*.5)} * ut, -0.408)) / ut, ${u(`ENTRY/EXIT`)}, ut / px) * 0.55;
    float u0 = 0.0030;
    vec2 o1 = vec2(-0.5 * asp / S + 0.05, 0.5 / S - 0.07);
    col += inkC * fText((w - o1) / u0, ${u(`PAIR DESIGN`)}, u0 / px) * 0.62;
    col += inkC * fText((w - o1 + vec2(0.0, 0.025)) / u0, ${u(`SIMULATED`)}, u0 / px) * 0.32;
    // legend: two little pairs
    float ul = 0.0024;
    vec2 L0 = vec2(-0.60, -0.452);
    vec2 g1 = L0, g2 = L0 + vec2(0.30, 0.0);
    float gA = length(w - g1 - vec2(-0.012, 0.0)), gB = length(w - g1 - vec2(0.012, 0.0));
    col += GOLD * (smoothstep(0.0055, 0.0035, gA) + smoothstep(0.0055, 0.0035, gB) + smoothstep(px * 1.3, 0.0, abs(w.y - g1.y) - 0.0011) * step(abs(w.x - g1.x), 0.012) * 0.9);
    float cA = length(w - g2 - vec2(-0.020, 0.0)), cB = length(w - g2 - vec2(0.020, 0.0));
    float cd = step(0.5, fract((w.x - g2.x) / 0.0105));
    col += CYAN * (smoothstep(0.0055, 0.0035, cA) + smoothstep(0.0055, 0.0035, cB) + smoothstep(px * 1.3, 0.0, abs(w.y - g2.y) - 0.0009) * step(abs(w.x - g2.x), 0.020) * cd * 0.6);
    col += GOLD * fText((w - g1 - vec2(0.028, -0.0085)) / ul, ${u(`TOGETHER`)}, ul / px) * 0.75;
    col += CYAN * fText((w - g2 - vec2(0.038, -0.0085)) / ul, ${u(`APART`)}, ul / px) * 0.75;
  }

  col = 1.0 - exp(-col * 1.6);
  float vig = smoothstep(1.3, 0.3, length(p * vec2(0.85, 1.15)));
  col *= mix(0.40, 1.0, vig);
  col += (h21(gl_FragCoord.xy + fract(uTime * 3.7) * 91.0) - 0.5) * mix(0.010, 0.026, I);
  gl_FragColor = vec4(max(col, 0.0), 1.0);
}`},T={id:`rings`,projectId:`metamorphoses`,title:`A Living Chronology`,medium:`Four turning rings, after the reading instrument’s compass`,colors:{bg:`#080706`,ink:`#F1E3C4`,accent:`#D9A852`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;

#define TAU 6.2831853
#define PI 3.14159265

float px;
vec2 LDIR;

float h21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), u.x),
             mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), u.x), u.y);
}
// escapement: move over the first 35% of the beat with a damped overshoot, then hold
float beat(float x) {
  float k = clamp(x / 0.35, 0.0, 1.0);
  return 1.0 - exp(-6.0 * k) * cos(9.0 * k);
}
float band(float r, float a, float b) { return smoothstep(a - px, a + px, r) * smoothstep(b + px, b - px, r); }
float groove(float r, float c, float w) { return 1.0 - smoothstep(w, w + 1.5 * px, abs(r - c)); }

// ---- engraving masks, in each ring's local frame ----
float maskA(vec2 lp, float rot) {
  float r = length(lp);
  float a = atan(lp.y, lp.x) - rot;
  float x = a / TAU * 185.0;
  float k = floor(x + 0.5);
  float dx = abs(x - k) * TAU * r / 185.0;
  float major = step(mod(k, 5.0), 0.5);
  float r0 = mix(0.4415, 0.432, major);
  float tw = mix(0.0009, 0.0014, major);
  float tick = (1.0 - smoothstep(tw, tw + 1.3 * px, dx)) * band(r, r0, 0.4575);
  float ch = groove(r, 0.4225, 0.0014) + groove(r, 0.4075, 0.0009);
  // a dot on every fifth tick between the channels
  float dotA = 1.0 - smoothstep(0.0021, 0.0021 + 1.3 * px, length(vec2(dx, r - 0.415)));
  return clamp(max(tick, ch) + dotA * major, 0.0, 1.0);
}
float keyBit(float c, float rw) {
  float m = 62.0;
  if (rw < 0.5) m = 63.0; else if (rw < 1.5) m = 2.0; else if (rw < 2.5) m = 58.0; else if (rw < 3.5) m = 42.0; else if (rw < 4.5) m = 34.0;
  return mod(floor(m / exp2(c)), 2.0);
}
float keyAt(vec2 c) {
  if (c.y < -0.5 || c.y > 5.5) return 0.0;
  return keyBit(mod(c.x, 6.0), c.y);
}
float maskB(vec2 lp, float rot) {
  float r = length(lp);
  float a = atan(lp.y, lp.x) - rot;
  float U = 0.0072;
  vec2 g = vec2(a / TAU * 300.0, (r - 0.3295) / U) - 0.5;
  vec2 c0 = floor(g);
  vec2 f = fract(g);
  float cp = U / px;
  vec2 w = clamp((f - 0.5) * cp + 0.5, 0.0, 1.0);
  float k = mix(mix(keyAt(c0), keyAt(c0 + vec2(1.0, 0.0)), w.x),
                mix(keyAt(c0 + vec2(0.0, 1.0)), keyAt(c0 + vec2(1.0, 1.0)), w.x), w.y);
  k = mix(0.42 * band(r, 0.3295, 0.3295 + 6.0 * U), k, smoothstep(1.6, 3.0, cp));
  float borders = groove(r, 0.3235, 0.0011) + groove(r, 0.3785, 0.0011);
  return clamp(k + borders, 0.0, 1.0);
}
float glyphBits(float k, float col) {
  // seal-like 3x5 glyphs: mirrored columns, so every glyph is symmetric
  float bits = floor(h21(vec2(k, col * 3.7 + 1.9)) * 32.0);
  if (col > 0.5) bits = max(bits, 4.0 + 17.0 * step(0.5, h21(vec2(k, 8.0))));
  return bits;
}
float maskC(vec2 lp, float rot, out float cellK) {
  float r = length(lp);
  float a = atan(lp.y, lp.x) - rot;
  float x = a / TAU * 24.0;
  float k = floor(x);
  cellK = mod(k, 24.0);
  float la = (fract(x) - 0.5) * TAU / 24.0 * r;       // arc offset from cell centre
  float div = 1.0 - smoothstep(0.0011, 0.0011 + 1.3 * px, abs(abs(la) - TAU / 48.0 * r));
  div *= band(r, 0.232, 0.292);
  float G = 0.0088;
  vec2 gp = vec2(la / G + 1.5, (r - 0.262) / G + 2.5);
  vec2 gi = floor(gp);
  vec2 gf = fract(gp) - 0.5;
  float pix = 0.0;
  if (gi.x >= 0.0 && gi.x <= 2.0 && gi.y >= 0.0 && gi.y <= 4.0) {
    float colI = gi.x > 1.5 ? 0.0 : gi.x;
    float bits = glyphBits(cellK, colI);
    float on = mod(floor(bits / exp2(gi.y)), 2.0);
    float sq = max(abs(gf.x), abs(gf.y));
    pix = on * (1.0 - smoothstep(0.36, 0.36 + 1.3 * px / G, sq));
  }
  // seal frame: rounded square around each glyph
  vec2 fq = abs(vec2(la, r - 0.262)) - vec2(0.0205, 0.0285);
  float fd = length(max(fq, 0.0)) + min(max(fq.x, fq.y), 0.0) - 0.004;
  float frameG = 1.0 - smoothstep(0.0009, 0.0009 + 1.3 * px, abs(fd));
  float rims = groove(r, 0.2265, 0.0011) + groove(r, 0.2975, 0.0011);
  return clamp(max(max(pix, frameG), max(div, rims)), 0.0, 1.0);
}
float maskD(vec2 lp, float rot) {
  float r = length(lp);
  float a = atan(lp.y, lp.x) - rot;
  float x = a / TAU * 40.0;
  float k = floor(x + 0.5);
  float dx = (x - k) * TAU * r / 40.0;
  float big = step(mod(k, 10.0), 0.5);
  vec2 q = vec2(dx, r - 0.1735);
  float dm = (abs(q.x) + abs(q.y)) - mix(0.0042, 0.0075, big);   // diamonds
  float mk = 1.0 - smoothstep(0.0, 1.3 * px, dm);
  float rims = groove(r, 0.1525, 0.001) + groove(r, 0.1945, 0.001);
  return clamp(mk + rims, 0.0, 1.0);
}
float maskHub(vec2 lp, float rot) {
  float r = length(lp);
  float a = atan(lp.y, lp.x) - rot;
  // eight-pointed rete star (straight-edged polygon), outline only, plus its inner octagon
  float seg = TAU / 16.0;
  float sa = mod(a, 2.0 * seg) - seg;                    // fold into one point
  vec2 q = r * vec2(cos(sa), abs(sin(sa)));
  vec2 tip = vec2(0.112, 0.0), notch = vec2(0.046 * cos(seg), 0.046 * sin(seg));
  vec2 e = notch - tip;
  float sd = length(q - tip - e * clamp(dot(q - tip, e) / dot(e, e), 0.0, 1.0));
  float sl = 1.0 - smoothstep(0.0011, 0.0011 + 1.4 * px, sd);
  float ray = 1.0 - smoothstep(0.0007, 0.0007 + 1.3 * px, abs(q.y)) ;
  sl = max(sl, ray * step(0.03, r) * step(r, 0.112) * 0.9);
  float rims = groove(r, 0.064, 0.0009) + groove(r, 0.118, 0.0011) + groove(r, 0.026, 0.0009);
  return clamp(sl + rims, 0.0, 1.0);
}

// brushed metal with bevelled edges and a fixed anisotropic highlight
vec3 metal(vec2 lp, float ri, float ro, float seed, float tone) {
  float r = length(lp);
  vec2 u = lp / max(r, 1e-4);
  float a = atan(lp.y, lp.x);
  float bw = 0.0065;
  float tOut = 1.0 - smoothstep(0.0, bw, ro - r);
  float tIn = 1.0 - smoothstep(0.0, bw, r - ri);
  float dif = dot(u, LDIR) * (tOut - tIn);
  float br = vnoise(vec2(r * 1700.0, a * 2.0 + seed)) * 0.6 + vnoise(vec2(r * 420.0, a * 1.3 + seed * 3.0)) * 0.4;
  float al = dot(u, LDIR);
  float spec = pow(max(al, 0.0), 10.0) * 0.95 + pow(max(-al, 0.0), 18.0) * 0.3;
  spec *= 0.55 + 0.9 * br;
  vec3 gold = vec3(0.80, 0.58, 0.30) * tone;
  vec3 c = gold * (0.26 + 0.24 * br) * (1.0 + 1.35 * dif);
  c += vec3(1.0, 0.84, 0.56) * spec * (0.7 + 0.5 * tone);
  c += vec3(1.0, 0.9, 0.7) * max(dif, 0.0) * 0.35 * (tOut + tIn);
  return c;
}
// recessed engraving lit from LDIR: dark floor, one bright wall, one dark wall
vec3 engrave(vec3 c, float e, float eToL, float eFromL, float specAt) {
  vec3 floorC = c * 0.22 + vec3(0.03, 0.018, 0.008);
  vec3 o = mix(c, floorC, e);
  float litWall = e * (1.0 - eFromL);
  float darkWall = e * (1.0 - eToL);
  o += vec3(1.0, 0.86, 0.6) * litWall * (0.35 + 1.6 * specAt);
  o *= 1.0 - 0.55 * darkWall;
  return o;
}

vec3 glint(vec2 d, float s) {
  float core = exp(-dot(d, d) / (0.0022 * 0.0022 + px * px * 2.0));
  float rays = exp(-abs(d.x) / (0.0007 + 0.6 * px)) * exp(-abs(d.y) / 0.028)
             + exp(-abs(d.y) / (0.0007 + 0.6 * px)) * exp(-abs(d.x) / 0.028);
  vec2 dr = vec2(d.x + d.y, d.x - d.y) * 0.7071;
  float rays2 = exp(-abs(dr.x) / (0.0006 + 0.5 * px)) * exp(-abs(dr.y) / 0.012)
              + exp(-abs(dr.y) / (0.0006 + 0.5 * px)) * exp(-abs(dr.x) / 0.012);
  return vec3(1.0, 0.92, 0.75) * (core * 1.4 + rays * 0.7 + rays2 * 0.3 + exp(-length(d) / 0.02) * 0.12) * s;
}

void main() {
  px = 1.0 / uRes.y;
  LDIR = normalize(vec2(-0.55, 0.835));
  float I = clamp(uIntensity, 0.0, 1.0);
  vec2 p0 = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float T = mod(uTime, 3600.0) + uSeed * 61.0;
  vec2 p = p0 / 1.02;

  // parallax: mouse plus a slow idle sway
  vec2 par = (uMouse - 0.5) * 2.0 + vec2(sin(T * 0.23), cos(T * 0.19)) * 0.22;
  vec2 cA = par * 0.004, cB = par * 0.008, cC = par * 0.012, cD = par * 0.016, cH = par * 0.020, cP = par * 0.028;

  // rotations
  float rotA = mod(T * 0.022, TAU);
  float rotB = mod(-T * 0.037, TAU);
  float bc = T / 3.0;
  float rotC = mod((floor(bc) + beat(fract(bc))) * TAU / 24.0, TAU);
  float velC = clamp(abs(beat(fract(bc) + 0.02) - beat(fract(bc))) / 0.02 * 0.35, 0.0, 1.0);
  float bd = (T + 0.75) / 1.5;
  float rotD = mod(-(floor(bd) + beat(fract(bd))) * TAU / 40.0, TAU);
  float velD = clamp(abs(beat(fract(bd) + 0.02) - beat(fract(bd))) / 0.02 * 0.35, 0.0, 1.0);
  float rotH = mod(T * 0.05, TAU);
  float pa = mod(T * 0.21 + 0.6, TAU);

  // ---- ground: black, faint sky arcs and stars ----
  vec3 col = vec3(0.022, 0.019, 0.016) + vec3(0.05, 0.035, 0.02) * exp(-length(p0) * 2.2);
  vec2 sp = (p0 - par * 0.006) * 70.0;
  vec2 sid = floor(sp);
  float sr = h21(sid + floor(uSeed * 9.0));
  vec2 so = vec2(h21(sid + 1.3), h21(sid + 4.7)) - 0.5;
  float star = step(0.93, sr) * (1.0 - smoothstep(0.03, 0.09, length(fract(sp) - 0.5 - so * 0.6)));
  col += vec3(0.85, 0.76, 0.6) * star * (0.12 + 0.18 * sin(T * (1.0 + sr * 3.0) + sr * 50.0)) * smoothstep(0.47, 0.6, length(p));
  float rr0 = length(p - cA * 0.5);
  col += vec3(0.5, 0.4, 0.26) * (groove(rr0, 0.585, 0.0006) * 0.12 + groove(rr0, 0.72, 0.0006) * 0.07);

  // mater (base plate) behind the rings
  float rM = length(p);
  float mater = band(rM, 0.0, 0.478);
  vec3 mcol = vec3(0.07, 0.048, 0.026) * (0.8 + 0.3 * vnoise(vec2(rM * 900.0, atan(p.y, p.x) * 2.0)));
  mcol *= 0.6 + 0.4 * smoothstep(0.478, 0.40, rM);
  col = mix(col, mcol, mater);
  // drop shadow of the rings onto the plate
  vec2 shOff = -LDIR * 0.006;
  float shadowR = length(p - cB + shOff);
  float sh = smoothstep(0.012, 0.0, abs(shadowR - 0.43)) * 0.0;
  col *= 1.0 - sh;

  // sweep: warmth trailing the alidade
  float angP = atan(p.y, p.x);
  float behind = mod(pa - angP, TAU);
  float sweep = exp(-behind * 1.8) * (0.55 + 0.45 * I);
  float specLine = 0.0;

  // ---- ring A: 185 ticks ----
  vec2 lA = p - cA;
  float rA = length(lA);
  if (rA > 0.392 && rA < 0.47) {
    float cov = band(rA, 0.395, 0.465);
    vec3 m = metal(lA, 0.395, 0.465, 1.0, 1.0);
    float sa = pow(max(dot(lA / rA, LDIR), 0.0), 14.0);
    float e = maskA(lA, rotA);
    vec3 c = engrave(m, e, maskA(lA + LDIR * 0.0016, rotA), maskA(lA - LDIR * 0.0016, rotA), sa);
    c += vec3(1.0, 0.6, 0.25) * sweep * 0.22 * (0.4 + e);
    col = mix(col, c, cov);
  }
  // ---- ring B: Greek key ----
  vec2 lB = p - cB;
  float rB = length(lB);
  if (rB > 0.312 && rB < 0.389) {
    float cov = band(rB, 0.315, 0.386);
    vec3 m = metal(lB, 0.315, 0.386, 7.0, 0.92);
    float sa = pow(max(dot(lB / rB, LDIR), 0.0), 14.0);
    float e = maskB(lB, rotB);
    vec3 c = engrave(m, e, maskB(lB + LDIR * 0.0016, rotB), maskB(lB - LDIR * 0.0016, rotB), sa);
    c += vec3(1.0, 0.6, 0.25) * sweep * 0.2 * (0.4 + e);
    col = mix(col, c, cov);
  }
  // ---- ring C: 24 seals, stepping ----
  vec2 lC = p - cC;
  float rC = length(lC);
  if (rC > 0.215 && rC < 0.309) {
    float cov = band(rC, 0.218, 0.306);
    vec3 m = metal(lC, 0.218, 0.306, 13.0, 1.05);
    float sa = pow(max(dot(lC / rC, LDIR), 0.0), 14.0);
    float kC, kd;
    float e = maskC(lC, rotC, kC);
    vec3 c = engrave(m, e, maskC(lC + LDIR * 0.0016, rotC, kd), maskC(lC - LDIR * 0.0016, rotC, kd), sa);
    // the cell under the alidade glows like lit enamel
    float pk = mod(floor((pa - rotC - cC.x * 0.0) / TAU * 24.0), 24.0);
    float onCell = step(abs(kC - pk), 0.1);
    c += vec3(1.0, 0.72, 0.36) * e * onCell * (0.75 + 0.25 * sin(T * 6.0)) * (0.6 + 0.4 * I);
    c += vec3(1.0, 0.6, 0.25) * sweep * 0.2 * (0.4 + e);
    col = mix(col, c, cov);
  }
  // ---- ring D: forty-day count, stepping the other way ----
  vec2 lD = p - cD;
  float rD = length(lD);
  if (rD > 0.136 && rD < 0.212) {
    float cov = band(rD, 0.139, 0.209);
    vec3 m = metal(lD, 0.139, 0.209, 19.0, 0.95);
    float sa = pow(max(dot(lD / rD, LDIR), 0.0), 14.0);
    float e = maskD(lD, rotD);
    vec3 c = engrave(m, e, maskD(lD + LDIR * 0.0016, rotD), maskD(lD - LDIR * 0.0016, rotD), sa);
    c += vec3(1.0, 0.6, 0.25) * sweep * 0.22 * (0.4 + e);
    col = mix(col, c, cov);
  }
  // ---- hub with turning rete ----
  vec2 lH = p - cH;
  float rH = length(lH);
  if (rH < 0.131) {
    float cov = band(rH, 0.0, 0.128);
    vec3 m = metal(lH, 0.0, 0.128, 23.0, 1.1);
    float sa = pow(max(dot(lH / max(rH, 1e-4), LDIR), 0.0), 14.0);
    float e = maskHub(lH, rotH);
    vec3 c = engrave(m, e, maskHub(lH + LDIR * 0.0016, rotH), maskHub(lH - LDIR * 0.0016, rotH), sa);
    col = mix(col, c, cov);
  }

  // broad spot from the upper left: the instrument falls into shadow toward the lower right
  float spot = 0.50 + 0.85 * smoothstep(-0.55, 0.45, dot(p, LDIR)) ;
  col *= mix(1.0, spot, mater);

  // ---- alidade: shadow, then the rule itself ----
  vec2 dir = vec2(cos(pa), sin(pa));
  vec2 nrm = vec2(-dir.y, dir.x);
  vec2 lP = p - cP;
  vec2 lS = lP + LDIR * 0.011;
  float alS = dot(lS, dir), acS = dot(lS, nrm);
  float hwS = alS > 0.0 ? mix(0.0062, 0.0008, smoothstep(0.03, 0.472, alS)) : mix(0.0062, 0.004, smoothstep(0.0, 0.2, -alS));
  float shP = smoothstep(hwS + 0.006, hwS - 0.002, abs(acS)) * step(-0.205, alS) * step(alS, 0.474);
  shP = max(shP, smoothstep(0.03, 0.012, length(lS + dir * 0.175)));
  col *= 1.0 - 0.6 * shP * band(rM, 0.0, 0.478);
  float al = dot(lP, dir), ac = dot(lP, nrm);
  float hw = al > 0.0 ? mix(0.0062, 0.0008, smoothstep(0.03, 0.472, al)) : mix(0.0062, 0.004, smoothstep(0.0, 0.2, -al));
  float rule = (1.0 - smoothstep(hw - px, hw + px, abs(ac))) * smoothstep(-0.205 - px, -0.205 + px, al) * smoothstep(0.474 + px, 0.474 - px, al);
  float cw = length(lP + dir * 0.175);
  float weight = 1.0 - smoothstep(0.0125 - px, 0.0125 + px, cw);
  float pin = 1.0 - smoothstep(0.0165 - px, 0.0165 + px, length(lP));
  float cover = max(max(rule, weight), pin);
  if (cover > 0.0) {
    float side = clamp(ac / max(hw, 1e-4), -1.0, 1.0);
    vec2 n2 = nrm * side;
    float dif = dot(n2, LDIR);
    float glintAlong = pow(max(dot(nrm, LDIR) * sign(ac), 0.0), 2.0);
    vec3 pc = vec3(0.86, 0.64, 0.34) * (0.42 + 0.9 * max(dif, 0.0) - 0.25 * max(-dif, 0.0));
    pc += vec3(1.0, 0.9, 0.7) * smoothstep(0.6, 1.0, abs(side)) * glintAlong * 0.6;
    pc += vec3(1.0, 0.95, 0.85) * (1.0 - smoothstep(0.0, 1.2 * px, abs(ac))) * 0.25 * step(0.02, al);
    // counterweight and centre pin: domed
    vec2 wn = (lP + dir * 0.175) / 0.0125;
    vec2 pn = lP / 0.0165;
    float domeW = clamp(dot(wn, LDIR) * 0.8 + 0.4, 0.0, 1.5);
    float domeP = clamp(dot(pn, LDIR) * 0.8 + 0.4, 0.0, 1.5);
    pc = mix(pc, vec3(0.86, 0.64, 0.34) * (0.3 + 0.7 * domeW) + vec3(1.0, 0.9, 0.7) * pow(max(1.0 - length(wn - LDIR * 0.45), 0.0), 6.0) * 1.2, weight * (1.0 - rule * 0.5));
    pc = mix(pc, vec3(0.9, 0.68, 0.36) * (0.3 + 0.7 * domeP) + vec3(1.0, 0.94, 0.8) * pow(max(1.0 - length(pn - LDIR * 0.45), 0.0), 6.0) * 1.4, pin);
    col = mix(col, pc, cover);
  }

  // ---- glints where the highlight crosses each rim; they flare as engraving passes ----
  float tickPass = pow(0.5 + 0.5 * cos(TAU * ((atan(LDIR.y, LDIR.x) - rotA) / TAU * 185.0)), 24.0);
  vec3 glt = vec3(0.0);
  glt += glint(p - (cA + LDIR * 0.4645), 0.25 + 0.75 * tickPass);
  glt += glint(p - (cB + LDIR * 0.3855), 0.18 + 0.3 * (0.5 + 0.5 * sin(T * 1.7)));
  glt += glint(p - (cC + LDIR * 0.3055), 0.12 + 1.1 * velC);
  glt += glint(p - (cD + LDIR * 0.2085), 0.10 + 1.0 * velD);
  glt += glint(p - (cP + LDIR * 0.0105), 0.35);
  col += glt * (0.45 + 0.55 * I);

  // ---- grade ----
  col = col / (1.0 + 0.3 * max(col - 0.85, 0.0));
  float vig = smoothstep(1.25, 0.25, length(p0 * vec2(0.82, 1.05)));
  col *= 0.38 + 0.62 * vig;
  float gr = h21(gl_FragCoord.xy + fract(T * 9.1) * 421.0) - 0.5;
  col += gr * (0.03 + 0.02 * I);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`},E={id:`deadlines`,projectId:`recruiting-os`,title:`447 deadlines`,medium:`Every tracked program as a point on the calendar`,colors:{bg:`#07080D`,ink:`#F4F1E8`,accent:`#F2C14E`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;

const float DL_W = 52.0;        // weeks in the (endless, periodic) calendar
const float DL_LW = 2.4;        // lane width, world z
const float DL_ZMAX = 16.8;     // 7 lanes
const float DL_ZW = 17.2;       // the bar wall behind the lanes
const float DL_VEL = 1.45;      // weeks per second, the pace of the now line
const float DL_TAU = 6.2831853;

float dh1(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float dh2(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float dss(float a, float b, float x) { float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }

// points per lane; sums to 447
float dN(float l) { return l < 0.5 ? 92.0 : (l < 1.5 ? 41.0 : (l < 2.5 ? 77.0 : (l < 3.5 ? 58.0 : (l < 4.5 ? 66.0 : (l < 5.5 ? 49.0 : 64.0))))); }
vec3 dLane(float l) {
  if (l < 0.5) return vec3(1.00, 0.30, 0.24);
  if (l < 1.5) return vec3(1.00, 0.55, 0.16);
  if (l < 2.5) return vec3(1.00, 0.80, 0.24);
  if (l < 3.5) return vec3(0.92, 0.94, 0.98);
  if (l < 4.5) return vec3(0.28, 0.90, 0.58);
  if (l < 5.5) return vec3(0.24, 0.72, 1.00);
  return vec3(0.62, 0.50, 1.00);
}
vec2 dPh(float l) { return vec2(dh1(l * 3.7 + 0.2), dh1(l * 5.1 + 0.9)); }
// monotone season warp, 0..1 -> 0..1, periodic (slope stays between 0.35 and 1.65)
float dWarp(float u, vec2 ph) {
  float x = u - 0.45 * sin(DL_TAU * (2.0 * u + ph.x)) / 12.566371 - 0.2 * sin(DL_TAU * (5.0 * u + ph.y)) / 31.415927;
  float x0 = -0.45 * sin(DL_TAU * ph.x) / 12.566371 - 0.2 * sin(DL_TAU * ph.y) / 31.415927;
  return x - x0;
}
float dWarpD(float u, vec2 ph) { return 1.0 - 0.45 * cos(DL_TAU * (2.0 * u + ph.x)) - 0.2 * cos(DL_TAU * (5.0 * u + ph.y)); }
float dInv(float x, vec2 ph) { float u = x; for (int it = 0; it < 4; it++) u = clamp(u - (dWarp(u, ph) - x) / dWarpD(u, ph), 0.0, 1.0); return u; }
float dLine(float d, float hw, float aa) { return (1.0 - dss(0.0, hw + aa, d)) * (hw / (hw + aa)); }
// point j of lane l: x in the 0..W calendar, z offset in the lane, weight
float dXj(float j, float l, float Nn, vec2 ph) { float hj = dh2(vec2(j, l) + 0.37); return dWarp((j + 0.5 + 0.36 * (hj - 0.5)) / Nn, ph) * DL_W; }

// the floor swells into a wake around the line (d = weeks ahead of it)
float dH(float d) { return 0.50 * (d > 0.0 ? exp(-d / 2.2) : exp(d / 3.2) * cos(d * 1.45)); }

// 3x5 pixel digits
float dGlyph(float d, vec2 g) {
  if (g.x < 0.0 || g.x >= 3.0 || g.y < 0.0 || g.y >= 5.0) return 0.0;
  float b = d < 0.5 ? 31599.0 : (d < 1.5 ? 11415.0 : (d < 2.5 ? 29671.0 : (d < 3.5 ? 29647.0 : (d < 4.5 ? 23497.0 :
            (d < 5.5 ? 31183.0 : (d < 6.5 ? 31215.0 : (d < 7.5 ? 29257.0 : (d < 8.5 ? 31727.0 : 31695.0))))))));
  float idx = 14.0 - (floor(g.y) * 3.0 + floor(g.x));
  return mod(floor(b / exp2(idx)), 2.0);
}
// g.x in cells from the left edge of the first digit, g.y in cells from the top; returns ink, z = leading-zero flag
vec2 dNum(float v, vec2 g, float nd) {
  float slot = floor(g.x / 4.0);
  if (slot < 0.0 || slot >= nd) return vec2(0.0);
  float place = nd - 1.0 - slot;
  float sc = place < 0.5 ? 1.0 : (place < 1.5 ? 10.0 : 100.0);
  float dig = mod(floor(v / sc + 0.001), 10.0);
  float lead = (v < sc - 0.5 && place > 0.5) ? 1.0 : 0.0;
  return vec2(dGlyph(dig, vec2(g.x - slot * 4.0, g.y)), lead);
}
// how many points of lane l the line has passed at wrapped position xn; .y = x of the last one
vec2 dTally(float l, float xn) {
  float Nn = dN(l); vec2 ph = dPh(l);
  float u = dInv(xn / DL_W, ph);
  float je = floor(u * Nn);
  float cnt = max(je - 2.0, 0.0), last = -9.0;
  for (int k = -2; k <= 2; k++) {
    float j = je + float(k);
    if (j < 0.0 || j > Nn - 0.5) continue;
    float Xj = dXj(j, l, Nn, ph);
    if (Xj < xn) { cnt = j + 1.0; last = Xj; }
  }
  return vec2(cnt, last);
}

// the wall of stacked bars: one stack per week, one segment per lane, height = that lane's density.
// Ahead of the line a stack is only a ghost outline; as the line passes it fills from the base.
vec3 dWall(float X, float Y, float now, float aa, float pulse) {
  float Xa = X + now;
  float wk = floor(Xa);
  float xc = wk + 0.5;
  float cyc = floor(xc / DL_W);
  float xw = xc - cyc * DL_W;
  float rel = xc - now;
  float age = -rel / DL_VEL;
  float fx = Xa - wk;
  float bx = 0.5 - abs(fx - 0.5);
  float covX = dss(0.055 - aa, 0.055 + aa, bx);
  float gf = rel > 0.0 ? 0.0 : 1.0 - exp(-age * 2.4) * cos(age * 6.0);
  float lit = rel > 0.0 ? 0.0 : exp(-age * 5.0);
  float afterglow = rel > 0.0 ? 0.0 : exp(-age * 0.22);
  float cum = 0.0;
  vec3 c = vec3(0.0);
  float ew = aa * 1.2 + 0.012;
  for (int l = 0; l < 7; l++) {
    float fl = float(l);
    float Nn = dN(fl); vec2 ph = dPh(fl);
    float u = dInv(xw / DL_W, ph);
    float seg = Nn / (DL_W * dWarpD(u, ph)) * 0.46;
    float y0 = cum, y1 = cum + seg, yf = y0 + seg * gf;
    vec3 lc = dLane(fl);
    float inFill = dss(y0 - aa, y0 + aa, Y) * (1.0 - dss(yf - aa, yf + aa, Y));
    float inGhost = dss(y0 - aa, y0 + aa, Y) * (1.0 - dss(y1 - aa, y1 + aa, Y));
    float edge = exp(-abs(Y - y1) / ew) + exp(-abs(Y - y0) / ew);
    float bright = 0.13 + 0.42 * afterglow + 1.5 * lit;
    c += lc * (inFill * bright + inGhost * 0.030 * (1.0 - gf * 0.6) + edge * (rel > 0.0 ? 0.075 : 0.20 + 0.7 * lit) * min(1.0, 0.04 / ew + 0.3));
    cum = y1;
  }
  c *= covX;
  c += vec3(1.0, 0.96, 0.9) * exp(-abs(Y - cum) / (aa * 1.4 + 0.012)) * (rel > 0.0 ? 0.10 : 0.30 + 1.3 * lit) * covX;
  c *= 1.0 + 1.6 * exp(-abs(rel) / 1.6) + 1.4 * pulse * exp(-abs(rel) * 0.12);
  return c;
}

void main() {
  float I = clamp(uIntensity, 0.0, 1.0);
  float S = min(uRes.y, uRes.x / 1.5);
  // tall canvases (phones, the case view): close in so the lanes fill the frame
  float tall = clamp((1.2 - uRes.x / uRes.y) * 1.6, 0.0, 1.0);
  S *= mix(1.0, 1.7, tall);
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / S;
  float px = 1.0 / S;
  vec2 mo = uMouse - 0.5;
  float T = uTime + uSeed * 40.0;
  float now = mod(T * DL_VEL, DL_W);
  // screens of 300..760 px are shown minified (the TV renders 960x720 into a ~300 px picture): bolder strokes there
  float mf = mix(clamp(uRes.y / 300.0, 1.0, 2.4), 1.0, dss(700.0, 800.0, uRes.y));
  float pscale = mix(1.5, 1.0, I) * (1.0 + 0.4 * (mf - 1.0));
  // quarter ends (every 13 weeks): the line flares, a shock runs out along the floor, the camera leans in
  float qa = mod(now, 13.0) / DL_VEL;
  float pulse = exp(-qa * 2.4) * (now < 13.0 ? 1.7 : 1.0);

  // camera rides the line (x = 0 is the line): low three-quarter view over the lanes
  float yaw = -0.36 + 0.05 * sin(T * 0.071) + mo.x * 0.14;
  float pit = 0.60 + 0.025 * sin(T * 0.053 + 1.0) + mo.y * 0.08;
  float cd = mix(21.0, 28.0, I) * (1.0 - 0.03 * pulse);
  vec3 tgt = vec3(mix(3.2, 5.6, I) * (1.0 - 0.8 * tall), 0.0, 8.6);
  vec3 ro = tgt + cd * vec3(sin(yaw) * cos(pit), sin(pit), -cos(yaw) * cos(pit));
  vec3 fw = normalize(tgt - ro);
  vec3 rt = normalize(cross(vec3(0.0, 1.0, 0.0), fw));
  vec3 up = cross(fw, rt);
  const float FOVK = 0.64;
  vec3 rd = normalize(fw + (p.x * rt + p.y * up) * FOVK);

  float tf = length(vec3(0.0, 0.0, 6.0) - ro);   // focus: the line, mid lanes
  float dofk = 0.0062 * mix(0.45, 1.0, I);

  vec3 col = mix(vec3(0.030, 0.026, 0.040), vec3(0.012, 0.012, 0.022), dss(-0.5, 0.55, p.y));
  float tFloor = 1e9;
  vec3 hp = vec3(0.0);
  if (rd.y < -0.0008) {
    float t = -ro.y / rd.y;
    for (int i = 0; i < 5; i++) { vec3 q = ro + rd * t; t = (ro.y - dH(q.x)) / (-rd.y); }
    tFloor = t; hp = ro + rd * t;
  }
  float tWall = rd.z > 1e-4 ? (DL_ZW - ro.z) / rd.z : 1e9;
  bool wallHit = tWall > 0.0 && tWall < tFloor;
  float tEnd = min(tFloor, tWall);

  if (wallHit) {
    vec3 wp = ro + rd * tWall;
    float blur = dofk * abs(tWall - tf);
    float aa = tWall * FOVK * px * 1.2 + blur;
    float fog = exp(-max(tWall - 26.0, 0.0) * 0.022);
    vec3 w = dWall(wp.x, wp.y, now, aa, pulse);
    // base line where the wall meets the ground
    w += vec3(0.8, 0.8, 0.9) * exp(-abs(wp.y) / (aa * 1.2 + 0.02)) * 0.12;
    col += w * fog;
  } else if (tFloor < 1e8 && hp.z < DL_ZW + 0.1) {
    float X = hp.x, Z = hp.z;
    float tp = tFloor;
    float Xa = X + now;
    float cyc = floor(Xa / DL_W);
    float fp = tp * FOVK * px;
    float fz = fp / max(-rd.y, 0.12);
    float blur = dofk * abs(tp - tf);
    float fog = exp(-max(tp - 24.0, 0.0) * 0.030);
    float inZ = dss(-0.3, 0.0, Z) * (1.0 - dss(DL_ZMAX, DL_ZMAX + 0.3, Z));
    vec3 pc = vec3(0.026, 0.028, 0.040) * inZ;
    float aaX = fp * 1.3 + blur, aaZ = fz * 1.3 + blur;

    // lanes: panel tint, rail, and the afterglow the line leaves behind
    float lane0 = floor(Z / DL_LW);
    float zc = Z - (lane0 + 0.5) * DL_LW;
    float lcl = clamp(lane0, 0.0, 6.0);
    vec3 lc0 = dLane(lcl);
    float behind = 1.0 - dss(-0.3, 0.3, X);
    float trail = exp(min(X, 0.0) * 0.26) * behind;
    pc += lc0 * 0.020 * inZ;
    pc += lc0 * dLine(abs(zc), 0.035 * mf, aaZ) * (0.16 + 1.1 * trail) * inZ;
    pc += lc0 * exp(-abs(zc) / 0.55) * 0.20 * trail * inZ;
    pc += lc0 * exp(-abs(zc) / 1.3) * 0.045 * trail * inZ;

    // calendar grid: weeks, months, quarters, lane borders, week ticks on the near edge
    float wk = abs(fract(Xa + 0.5) - 0.5);
    float mth = abs(fract(Xa / 4.3333333 + 0.5) - 0.5) * 4.3333333;
    float qtr = abs(fract(Xa / 13.0 + 0.5) - 0.5) * 13.0;
    float lz = abs(fract(Z / DL_LW + 0.5) - 0.5) * DL_LW;
    float dense = 1.0 - dss(0.10, 0.34, fp);
    vec3 gcol = vec3(0.80, 0.82, 0.92);
    pc += gcol * dLine(wk, 0.006, aaX) * 0.12 * dense * inZ;
    pc += gcol * dLine(mth, 0.012, aaX) * 0.24 * inZ;
    pc += gcol * dLine(qtr, 0.020, aaX) * 0.30 * inZ;
    pc += gcol * dLine(lz, 0.010, aaZ) * 0.20 * step(-0.01, Z) * step(Z, DL_ZMAX + 0.01);
    float tick = dLine(wk, 0.02, aaX) * step(-0.62, Z) * step(Z, -0.16) + dLine(mth, 0.035, aaX) * step(-1.1, Z) * step(Z, -0.16);
    pc += gcol * min(tick, 1.0) * 0.40;

    // the now line on the floor, its glow, warm spill ahead of it
    float zin = dss(-1.4, 0.0, Z) * (1.0 - dss(DL_ZMAX, DL_ZMAX + 1.4, Z));
    pc += vec3(1.0, 0.97, 0.92) * dLine(abs(X), 0.045 * mf, aaX) * 3.4 * (1.0 + 1.1 * pulse) * zin;
    pc += vec3(1.0, 0.84, 0.62) * (exp(-abs(X) / 0.45) * 0.30 + exp(-abs(X) / 2.2) * 0.09) * zin;
    pc += vec3(1.0, 0.80, 0.55) * (X > 0.0 ? exp(-X / 6.0) * 0.045 : 0.0) * inZ;
    pc += vec3(1.0, 0.88, 0.70) * exp(-abs(abs(X) - qa * 8.0) / (0.30 + qa * 0.5)) * exp(-qa * 1.2) * 0.55 * inZ;

    // points: this lane and the nearer neighbour lane
    float zl0 = Z - (lane0 + 0.5) * DL_LW;
    for (int li = 0; li < 2; li++) {
      float lane = lane0 + (li == 0 ? 0.0 : (zl0 > 0.0 ? 1.0 : -1.0));
      if (lane < -0.5 || lane > 6.5) continue;
      float Nn = dN(lane);
      vec2 ph = dPh(lane);
      vec3 lc = dLane(lane);
      float zl = Z - (lane + 0.5) * DL_LW;
      float Xw = Xa - cyc * DL_W;
      float u = dInv(Xw / DL_W, ph);
      float jc = floor(u * Nn);
      for (int k = -3; k <= 3; k++) {
        float j = jc + float(k);
        float jw = j, sh = 0.0;
        if (j < -0.5) { jw = j + Nn; sh = -DL_W; }
        else if (j > Nn - 0.5) { jw = j - Nn; sh = DL_W; }
        float Xrel = dXj(jw, lane, Nn, ph) + sh + cyc * DL_W - now;   // weeks ahead of the line
        float Zj = (dh2(vec2(lane, jw) * 1.31 + 4.1) - 0.5) * 0.7;
        float wj = 0.80 + 0.95 * pow(dh2(vec2(jw, lane) * 0.77 + 8.3), 2.0);
        vec2 dv = vec2(X - Xrel, zl - Zj);
        float dd = length(dv);
        if (dd > 2.1 + blur * 3.0) continue;
        float aaP = fp * 0.9 + blur;
        float R0 = 0.115 * wj * pscale;
        vec3 add = vec3(0.0);
        if (Xrel > 0.0) {
          float a = exp(-Xrel / 4.2);
          float R = R0 * (1.0 + 0.6 * a * a * a);
          float norm = min(1.0, (R * R) / ((R + aaP * 0.6) * (R + aaP * 0.6)));
          float disc = (1.0 - dss(max(R - aaP * 0.5, 0.0), R + aaP, dd)) * norm;
          float fill = a * a;
          float br = 0.50 + 0.7 * a + 2.0 * a * a * a;
          float rw = 0.016 * pscale + aaP * 0.7;
          float hollow = exp(-abs(dd - R * 1.5) / rw) * min(1.0, 0.03 / rw + 0.5) * norm;
          vec3 pcol = mix(lc, vec3(1.0, 0.97, 0.93), 0.5 * a * a * a);
          add += pcol * (disc * (0.30 + 0.9 * fill) * br + hollow * 0.55 * (1.0 - 0.7 * fill));
          add += lc * exp(-dd / (R * 2.2 + aaP + 0.02)) * br * 0.26 * norm;
          if (Xrel < 1.8) {
            float rr = R * 1.5 + 0.06 + Xrel * 0.34;
            add += lc * exp(-abs(dd - rr) / (0.010 + aaP * 0.6)) * (1.0 - Xrel / 1.8) * 0.9 * norm * mix(0.6, 1.0, I);
          }
        } else {
          float age = -Xrel / DL_VEL;
          float fl = exp(-age * 3.2);
          float R = R0 * (1.0 + 1.1 * fl);
          float norm = min(1.0, (R * R) / ((R + aaP * 0.6) * (R + aaP * 0.6)));
          float disc = (1.0 - dss(max(R - aaP * 0.5, 0.0), R + aaP, dd)) * norm;
          float br = 0.42 + 0.30 * exp(-age * 0.25) + 3.6 * fl;
          vec3 pcol = mix(lc, vec3(1.0, 0.98, 0.95), 0.75 * fl);
          add += pcol * disc * br;
          add += lc * exp(-dd / (R * 2.4 + aaP + 0.02)) * br * 0.30 * norm;
          // rings thrown across the floor
          float big = smoothstep(1.15, 1.7, wj);
          for (int ri = 0; ri < 3; ri++) {
            float fr = float(ri);
            if (ri == 2 && big < 0.01) continue;
            float ag = age - fr * 0.20;
            if (ag < 0.0 || ag > 2.8) continue;
            float gr = 1.0 - exp(-ag * (2.3 - 0.4 * fr));
            float rr = R0 + (0.62 + 0.55 * big + 0.12 * fr) * gr * (0.8 + 0.3 * wj);
            float rw = 0.012 + 0.04 * gr + aaP * 0.7;
            float ring = exp(-abs(dd - rr) / rw) * exp(-ag * (1.5 + 0.5 * fr)) * min(1.0, 0.035 / rw + 0.45);
            add += (lc * 1.6 + vec3(0.8) * exp(-ag * 5.0)) * ring * (0.95 - 0.18 * fr);
          }
          // flash disc
          add += lc * exp(-dd * dd / (0.18 * wj + aaP * aaP)) * exp(-age * 7.0) * 1.1;
        }
        pc += add * (1.0 - dss(1.3, 2.1 + blur * 3.0, dd));
      }
    }

    // running tally per lane, printed on the floor behind the line, a tabular 3x5 pixel face
    if (Z > 0.0 && Z < DL_ZMAX && X < -0.25 && X > -2.1 && fp < 0.12) {
      float cell = 0.13;
      float tl = lane0;
      float zt = Z - (tl + 0.5) * DL_LW;        // from lane centre
      vec2 g = vec2((X + 2.0) / cell, (0.5 * 5.0 * cell - zt - 0.0) / cell);
      g.y = (2.5 * cell - zt) / cell;           // top of glyph is the far side
      vec2 tally = dTally(clamp(tl, 0.0, 6.0), now);
      vec2 nm = dNum(tally.x, g, 3.0);
      float since = (now - tally.y) / DL_VEL;
      float pulse = exp(-since * 3.0);
      float vis = 1.0 - dss(0.06, 0.12, fp);
      vec3 lcT = dLane(clamp(tl, 0.0, 6.0));
      pc += lcT * nm.x * (nm.y > 0.5 ? 0.09 : 0.85 + 1.8 * pulse) * vis * 0.9;
    }
    col += pc * fog;
    col = mix(col, vec3(0.020, 0.022, 0.036), (1.0 - fog) * 0.8);
  }

  // light curtain standing on the line, and the sparks every deadline throws up through it
  if (abs(rd.x) > 1e-4) {
    float tX = -ro.x / rd.x;
    if (tX > 0.0 && tX < tEnd) {
      vec3 cp = ro + rd * tX;
      float h0 = dH(0.0);
      float y = cp.y - h0;
      if (y > 0.0 && cp.z > -1.5 && cp.z < DL_ZMAX + 1.5) {
        float zin = dss(-1.2, 0.5, cp.z) * (1.0 - dss(DL_ZMAX - 0.5, DL_ZMAX + 1.4, cp.z));
        float rays = 0.78 + 0.22 * sin(cp.z * 2.9 + T * 0.7) * sin(cp.z * 1.3 - T * 0.45);
        float fog = exp(-max(tX - 24.0, 0.0) * 0.030);
        float cl = dss(0.0, 0.25, y);
        col += vec3(1.0, 0.92, 0.82) * (exp(-y * 0.34) * 0.20 + exp(-y * 2.0) * 0.22) * zin * rays * fog * cl;
      }
    }
  }


  // sparks and light shafts thrown up by every deadline the line has just crossed (true 3D, so they
  // read from any angle): ray-to-point and ray-to-segment distances, only for rays through the zone
  vec3 ird = 1.0 / (rd + vec3(1e-5));
  vec3 bt0 = (vec3(-3.4, -0.8, -2.6) - ro) * ird, bt1 = (vec3(0.9, 5.2, 19.8) - ro) * ird;
  vec3 bmn = min(bt0, bt1), bmx = max(bt0, bt1);
  if (min(min(bmx.x, bmx.y), bmx.z) > max(max(max(bmn.x, bmn.y), bmn.z), 0.0)) {
    {
      vec3 sp = vec3(0.0);
      float fpx = FOVK * px;
      for (int l = 0; l < 7; l++) {
        float fl = float(l);
        float Nn = dN(fl); vec2 ph = dPh(fl);
        vec3 lcs = dLane(fl);
        float ju = floor(dInv(now / DL_W, ph) * Nn);
        for (int k = -3; k <= 1; k++) {
          float j = ju + float(k);
          float jw = j, sh = 0.0;
          if (j < -0.5) { jw = j + Nn; sh = -DL_W; }
          else if (j > Nn - 0.5) { jw = j - Nn; sh = DL_W; }
          float xr = dXj(jw, fl, Nn, ph) + sh - now;
          float age = -xr / DL_VEL;
          if (age < 0.0 || age > 1.8) continue;
          float zj = (fl + 0.5) * DL_LW + (dh2(vec2(fl, jw) * 1.31 + 4.1) - 0.5) * 0.7;
          float wj = 0.80 + 0.95 * pow(dh2(vec2(jw, fl) * 0.77 + 8.3), 2.0);
          vec3 S0 = vec3(xr, dH(xr), zj);
          // the shaft
          float hb = (1.2 + 2.2 * wj) * (1.0 - exp(-age * 14.0)) * pscale;
          float lifeB = exp(-age * 2.2);
          vec3 w0 = ro - S0;
          float b = rd.y, dq = dot(rd, w0), eq = w0.y;
          float den = max(1.0 - b * b, 1e-4);
          float tq = clamp((eq - b * dq) / den, 0.0, hb);
          float sq = b * tq - dq;
          vec3 cpq = ro + rd * sq - (S0 + vec3(0.0, tq, 0.0));
          float dB = length(cpq);
          float rB = (0.055 + 0.030 * wj) * pscale;
          float prof = 1.0 - 0.75 * tq / max(hb, 0.05);
          sp += mix(lcs, vec3(1.0), 0.55) * exp(-dB / (rB + sq * fpx * 0.9)) * lifeB * prof * 1.5 * step(0.0, sq);
          // the sparks
          for (int q = 0; q < 4; q++) {
            float rq = dh2(vec2(jw * 1.7 + float(q) * 3.1, fl + 0.5));
            float vz = (rq - 0.5) * 2.6, vx = (dh1(rq * 57.0 + float(q)) - 0.5) * 1.2;
            float vy = (1.8 + 2.8 * dh1(rq * 91.0 + float(q))) * (0.65 + 0.35 * wj);
            vec3 S = S0 + vec3(vx * age, vy * age - 1.5 * age * age, vz * age);
            if (S.y < S0.y) continue;
            vec3 r = S - ro;
            float ts = dot(r, rd);
            if (ts < 0.0 || ts > tEnd + 0.3) continue;
            float d = length(cross(r, rd));
            float life = 1.0 - age / 1.8;
            float rs = (0.045 + 0.04 * rq) * life * pscale + 0.006;
            sp += mix(lcs, vec3(1.0), 0.5 * life) * exp(-d / (rs + ts * fpx * 0.8)) * life * (0.7 + 0.6 * sin(age * 40.0 + rq * 20.0)) * 1.6;
          }
        }
      }
      col += sp;
    }
  }

  // air: a glow band above the wall, and two layers of slow bokeh dust for depth
  col += vec3(0.034, 0.024, 0.045) * exp(-pow((p.y - 0.26) / 0.20, 2.0)) * (1.0 - dss(0.2, 0.9, abs(p.x)));
  col += vec3(0.5, 0.36, 0.28) * exp(-length(p - vec2(-0.12, 0.26)) * 2.4) * 0.030;
  for (int dl = 0; dl < 2; dl++) {
    float fd = float(dl);
    vec2 dpp = p * (7.0 + 6.0 * fd) + vec2(T * (0.05 + 0.04 * fd), -T * (0.03 + 0.05 * fd));
    vec2 dc = floor(dpp);
    float hd = dh2(dc + 11.0 * fd);
    vec2 dj = vec2(dh2(dc + 3.7), dh2(dc + 9.1));
    float dr = (0.07 + 0.19 * hd * hd) * (1.0 + 0.25 * fd);
    float dd2 = length(fract(dpp) - (0.3 + 0.4 * dj));
    float tw = 0.5 + 0.5 * sin(T * (0.4 + 0.5 * hd) + hd * 40.0);
    float vis = step(0.55, hd) * (1.0 - dss(dr * 0.6, dr, dd2));
    col += mix(vec3(1.0, 0.82, 0.6), vec3(0.6, 0.75, 1.0), dh2(dc + 5.5)) * vis * tw * mix(0.022, 0.040, I) * (1.0 + 0.5 * pulse);
  }

  col = 1.0 - exp(-max(col, vec3(0.0)) * 1.35);
  col = pow(col, vec3(0.92));
  float vig = 1.0 - dss(0.45, 1.3, length(p * vec2(0.76, 1.0)));
  col *= mix(0.45, 1.0, vig);
  col += (dh2(gl_FragCoord.xy + fract(uTime * 7.31) * 157.0) - 0.5) * mix(0.010, 0.026, I);

  // total tally, top right: passed / 447, over a progress rule
  {
    float cell = 0.0068 * (1.0 + 0.3 * (mf - 1.0));
    vec2 o = vec2(min(0.385, 0.5 * uRes.x / S - 30.0 * cell - 0.015), 0.40);
    vec2 g = (p - o) / cell; g.y = -g.y;
    float tot = 0.0;
    if (g.x > -1.0 && g.x < 30.0 && g.y > -1.0 && g.y < 8.0) {
      for (int l = 0; l < 7; l++) tot += dTally(float(l), now).x;
      vec2 a = dNum(tot, g, 3.0);
      vec2 b = dNum(447.0, vec2(g.x - 16.0, g.y), 3.0);
      float sl = (g.x > 12.0 && g.x < 15.0 && g.y > 0.0 && g.y < 5.0) ? 1.0 : 0.0;
      float slash = (g.x > 12.0 && g.x < 15.0) ? step(abs((g.x - 12.0) - (4.5 - g.y) * 0.6), 0.55) * step(0.0, g.y) * step(g.y, 5.0) : 0.0;
      float bar = step(0.0, g.x) * step(g.x, 24.0) * step(6.2, g.y) * step(g.y, 7.0);
      float prog = step(g.x, 24.0 * tot / 447.0);
      col += vec3(1.0, 0.93, 0.80) * (a.x * (a.y > 0.5 ? 0.30 : 0.95) + slash * 0.45 + b.x * 0.30 + bar * (0.10 + 0.7 * prog)) * 0.9;
    }
  }
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`},D=e=>e-Math.floor(e);function O(e,t,n){let r=D(e*.1031),i=D(t*.1031),a=D(n*.1031),o=r*(i+33.33)+i*(a+33.33)+a*(r+33.33);return r+=o,i+=o,a+=o,D((r+i)*a)}var k=e=>e*e*(3-2*e),A=(e,t,n)=>e+(t-e)*n;function j(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=Math.floor(n),o=k(e-r),s=k(t-i),c=k(n-a),l=(e,t,n)=>O(r+e,i+t,a+n);return A(A(A(l(0,0,0),l(1,0,0),o),A(l(0,1,0),l(1,1,0),o),s),A(A(l(0,0,1),l(1,0,1),o),A(l(0,1,1),l(1,1,1),o),s),c)}var M=.515;function N(e,t,n){let r=e*1.6+3.1,i=t*1.6+1.7,a=n*1.6+5.3,o=.5,s=0;for(let e=0;e<4;e++)s+=o*j(r,i,a),r=r*2.03+1.7,i=i*2.03+9.2,a=a*2.03+3.1,o*=.5;return s/.9375}function P(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function F(e,t,n,r,i){let a=P(t),o=[];for(let t=0;o.length<e&&t<8e3;t++){let e=(a()*2-1)*i,t=a()*Math.PI*2,s=Math.sqrt(1-e*e),c=[s*Math.cos(t),e,s*Math.sin(t)];N(c[0],c[1],c[2])<M+n||o.some(e=>Math.hypot(e[0]-c[0],e[1]-c[1],e[2]-c[2])<r)||o.push(c)}return o}var I=F(26,7,.05,.2,.82),L=F(20,31,.03,.12,.8);function R(e,t){let n=(e,r,i)=>r-e===1?`${i}return vec3(${t[e].map(e=>e.toFixed(4)).join(`, `)});\n`:`${i}if (i < ${(e+r>>1)-.5}) {\n${n(e,e+r>>1,i+`  `)}${i}}\n${n(e+r>>1,r,i)}`;return`vec3 ${e}(float i) {\n${n(0,t.length,`  `)}}\n`}var z=I.length,B=L.length,V={id:`cloudflare`,projectId:`cloudflare`,title:`Edge`,medium:`An illustrative globe of edge locations, with requests arcing in from clients`,colors:{bg:`#0B0705`,ink:`#FBE9D3`,accent:`#F48120`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;
${f}
#define PI 3.14159265
#define GD 3.4
#define FOC 1.07
#define THR ${M.toFixed(3)}
#define NPF ${z}.0
#define NCF ${B}.0
#define NPI ${z}
#define DLAT 0.0524
const vec2 CEN = vec2(0.0, 0.035);
const vec3 ORG = vec3(0.957, 0.506, 0.125);

float Tm, SPIN, TILT, CS, SN, CT, ST, SPINR, SS;

float h11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float h21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float h31(vec3 p) { vec3 p3 = fract(p * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vn3(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h31(i), h31(i + vec3(1.0, 0.0, 0.0)), f.x), mix(h31(i + vec3(0.0, 1.0, 0.0)), h31(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(h31(i + vec3(0.0, 0.0, 1.0)), h31(i + vec3(1.0, 0.0, 1.0)), f.x), mix(h31(i + vec3(0.0, 1.0, 1.0)), h31(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
float land(vec3 n) {
  vec3 p = n * 1.6 + vec3(3.1, 1.7, 5.3);
  float a = 0.5, s = 0.0;
  for (int o = 0; o < 4; o++) { s += a * vn3(p); p = p * 2.03 + vec3(1.7, 9.2, 3.1); a *= 0.5; }
  return s / 0.9375;
}
${R(`pop`,I)}
${R(`client`,L)}

vec3 toView(vec3 l) {
  vec3 a = vec3(l.x * CS + l.z * SN, l.y, -l.x * SN + l.z * CS);
  return vec3(a.x, a.y * CT - a.z * ST, a.y * ST + a.z * CT);
}
vec3 toLocal(vec3 v) {
  vec3 a = vec3(v.x, v.y * CT + v.z * ST, -v.y * ST + v.z * CT);
  return vec3(a.x * CS - a.z * SN, a.y, a.x * SN + a.z * CS);
}
vec2 proj(vec3 V) { return FOC * V.xy / (GD - V.z) + CEN; }
float vis(vec3 V) { return smoothstep(1.0 / GD - 0.03, 1.0 / GD + 0.10, V.z); }
vec3 slr(vec3 a, vec3 b, float s, float om, float so) { return (sin((1.0 - s) * om) * a + sin(s * om) * b) / so; }

// one request: client, edge location, phase u in 0..1 of its flight, its period
void arcSetup(float i, out vec3 A, out vec3 B, out float u, out float per) {
  per = 3.3 + 0.41 * i;
  float ph = Tm / per + i * 0.37;
  float k = floor(ph);
  u = ph - k;
  float th = (k - i * 0.37 + 0.3) * per * SPINR - 0.6;
  vec3 face = normalize(vec3(-sin(th), 0.25, cos(th)));
  vec3 c0 = client(floor(h11(k * 7.13 + i * 13.7) * NCF)), c1 = client(floor(h11(k * 5.31 + i * 3.9 + 5.0) * NCF));
  A = dot(c0, face) > dot(c1, face) ? c0 : c1;
  vec3 d0 = pop(floor(h11(k * 3.77 + i * 5.31 + 11.0) * NPF)), d1 = pop(floor(h11(k * 9.31 + i * 2.7 + 17.0) * NPF));
  B = dot(d0, face) > dot(d1, face) ? d0 : d1;
}
float flight(float u) { float x = clamp(u / 0.5, 0.0, 1.0); return 1.0 - (1.0 - x) * (1.0 - x); }

// the glow of one arc at screen point p
vec3 arcCol(float i, vec2 p) {
  vec3 A, B; float u, per;
  arcSetup(i, A, B, u, per);
  float om = acos(clamp(dot(A, B), -0.97, 0.97)), so = sin(om);
  float lift = 0.05 + 0.15 * om / PI;
  vec2 sA = proj(toView(A)), sB = proj(toView(B));
  vec2 sM = proj(toView(slr(A, B, 0.5, om, so) * (1.0 + lift)));
  vec2 s1 = proj(toView(slr(A, B, 0.25, om, so) * (1.0 + lift * 0.7071)));
  vec2 s3 = proj(toView(slr(A, B, 0.75, om, so) * (1.0 + lift * 0.7071)));
  vec2 lo = min(min(sA, sB), min(sM, min(s1, s3))) - 0.05;
  vec2 hi = max(max(sA, sB), max(sM, max(s1, s3))) + 0.05;
  if (p.x < lo.x || p.x > hi.x || p.y < lo.y || p.y > hi.y) return vec3(0.0);
  float hd = flight(u);
  float fade = 1.0 - smoothstep(0.66, 0.98, u);
  vec2 prev = sA;
  vec3 vprev = toView(A);
  float best = 1e3, bt = 0.0, bv = 0.0;
  for (int j = 1; j <= 12; j++) {
    float s = float(j) / 12.0;
    vec3 V = toView(slr(A, B, s, om, so) * (1.0 + lift * sin(PI * s)));
    vec2 sp = proj(V);
    vec2 pa = p - prev, ba = sp - prev;
    float hh = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-8), 0.0, 1.0);
    float d = length(pa - ba * hh);
    if (d < best) { best = d; bt = (float(j - 1) + hh) / 12.0; bv = vis(mix(vprev, V, hh)); }
    prev = sp; vprev = V;
  }
  float tr = hd - bt;
  float on = step(0.0, tr) * fade * bv;
  float inten = (0.20 + 1.15 * exp(-tr * 5.5)) * on;
  vec3 c = mix(ORG, vec3(1.0, 0.88, 0.70), exp(-tr * 9.0)) * inten;
  float w = 0.0022;
  vec3 o = c * (exp(-best * best / (w * w)) * 1.15 + exp(-best * best / (w * w * 22.0)) * 0.30);
  // the head
  vec3 Vh = toView(slr(A, B, hd, om, so) * (1.0 + lift * sin(PI * hd)));
  float dh = length(p - proj(Vh));
  o += vec3(1.0, 0.92, 0.78) * exp(-dh * dh / 0.00005) * vis(Vh) * fade * step(hd, 0.999) * 1.1;
  // the client ping and the arrival burst
  vec3 VA = toView(A * 1.004);
  float ring = abs(length(p - sA) - 0.006 - 0.05 * clamp(u / 0.35, 0.0, 1.0));
  o += ORG * exp(-ring * ring / 0.000006) * vis(VA) * (1.0 - smoothstep(0.0, 0.35, u)) * 0.8;
  o += vec3(1.0, 0.9, 0.8) * exp(-dot(p - sA, p - sA) / 0.00004) * vis(VA) * fade * 0.7;
  float ab = max(u - 0.5, 0.0) * per;
  o += vec3(1.0, 0.85, 0.6) * exp(-dot(p - sB, p - sB) / 0.00012) * exp(-ab * 2.6) * vis(toView(B)) * step(0.5, u) * 1.1;
  return o;
}

void main() {
  float I = clamp(uIntensity, 0.0, 1.0);
  SS = min(uRes.y, uRes.x / 1.3);
  vec2 p0 = (gl_FragCoord.xy - 0.5 * uRes) / SS;
  float px = 1.0 / SS;
  vec2 mo = uMouse - 0.5;
  Tm = mod(uTime, 7200.0) + uSeed * 30.0;
  SPINR = 0.07 + 0.05 * I;
  SPIN = Tm * SPINR - 0.6 + mo.x * 0.9;
  TILT = 0.42 + mo.y * 0.25;
  CS = cos(SPIN); SN = sin(SPIN); CT = cos(TILT); ST = sin(TILT);
  float nA = I < 0.5 ? 4.0 : 6.0;

  vec2 pc = p0 - CEN;
  vec3 ro = vec3(0.0, 0.0, GD);
  vec3 rd = normalize(vec3(pc, -FOC));
  // night: warm black with a low glow behind the globe
  vec3 col = mix(vec3(0.030, 0.016, 0.010), vec3(0.006, 0.004, 0.004), smoothstep(-0.5, 0.55, p0.y));
  col += ORG * 0.050 * exp(-dot(pc, pc) * 3.2);
  {
    vec2 g = p0 * 22.0; vec2 id = floor(g), f = fract(g) - 0.5;
    float r = h21(id);
    col += vec3(1.0, 0.85, 0.7) * smoothstep(0.07, 0.0, length(f - (vec2(h21(id + 1.3), h21(id + 4.7)) - 0.5) * 0.6)) * step(0.93, r) * (0.5 + 0.5 * sin(Tm * (0.8 + r) + r * 40.0)) * 0.30;
  }

  float bb = dot(ro, rd), cc = dot(ro, ro) - 1.0, disc = bb * bb - cc;
  float tHit = 1e9;
  bool hit = false;
  if (disc > 0.0) { tHit = -bb - sqrt(disc); hit = tHit > 0.0; }
  float dmin = length(cross(ro, rd));

  // orbit: a tilted ring with a comet
  vec3 on = normalize(vec3(0.22, 0.93, 0.30));
  vec3 e1 = normalize(cross(on, vec3(0.0, 0.0, 1.0))), e2 = cross(on, e1);
  float tR = -dot(ro, on) / dot(rd, on);
  float ringV = 0.0;
  vec3 ringAdd = vec3(0.0);
  if (tR > 0.0 && tR < tHit) {
    vec3 Q = ro + rd * tR;
    float rl = length(Q);
    float pf = tR / (FOC * SS);
    float dd = abs(rl - 1.52);
    float phi = atan(dot(Q, e2), dot(Q, e1));
    float dl = mod(Tm * 0.34 - phi, 2.0 * PI);
    float tail = exp(-dl * 1.7) * step(dl, 4.5);
    ringV = smoothstep(pf * 1.4 + 0.0018, 0.0, dd) * (0.28 + 0.9 * tail);
    ringAdd += mix(ORG, vec3(1.0, 0.9, 0.75), tail * tail) * ringV;
    float dc = length(vec2(dd, min(dl, 2.0 * PI - dl) * rl));
    ringAdd += vec3(1.0, 0.92, 0.8) * exp(-dc * dc / (pf * pf * 14.0 + 1e-6)) * 0.9;
  }

  if (hit) {
    vec3 P = ro + rd * tHit;
    vec3 nl = toLocal(P);
    float pf = tHit / (FOC * SS);
    float cosv = max(dot(P, -rd), 0.18);
    float aa = pf / cosv;
    vec3 L = normalize(vec3(-0.55, 0.50, 0.68));
    float dif = max(dot(P, L), 0.0);
    // dot-matrix land
    float lat = asin(clamp(nl.y, -1.0, 1.0)), lon = atan(nl.x, nl.z);
    float row = floor(lat / DLAT + 0.5);
    float latc = row * DLAT;
    float cols = max(floor(2.0 * PI * cos(latc) / DLAT), 1.0);
    float dlon = 2.0 * PI / cols;
    float lonc = floor(lon / dlon + 0.5) * dlon;
    vec3 cdir = vec3(cos(latc) * sin(lonc), sin(latc), cos(latc) * cos(lonc));
    float ang = length(nl - cdir);
    float lv = land(cdir);
    float isLand = smoothstep(THR - 0.012, THR + 0.012, lv);
    float rad = DLAT * mix(0.20, 0.40, isLand);
    float dotm = smoothstep(rad + aa, rad - aa, ang);
    vec3 sph = vec3(0.020, 0.012, 0.010) + vec3(0.050, 0.022, 0.010) * dif;
    vec3 lc = mix(vec3(1.0, 0.86, 0.68), vec3(1.0, 0.70, 0.40), smoothstep(THR, 0.8, lv));
    vec3 dcol = mix(ORG * 0.34, lc * (0.30 + 0.85 * dif), isLand);
    vec3 c = mix(sph, dcol, dotm * mix(0.8, 1.0, isLand));
    // edge locations: bright nodes with a halo
    for (int i = 0; i < NPI; i++) {
      vec3 pp = pop(float(i));
      float a = length(nl - pp);
      if (a < 0.14) {
        float tw = 0.65 + 0.35 * sin(Tm * (1.1 + h11(float(i))) + float(i) * 2.3);
        float core = smoothstep(0.024 + aa, 0.024 - aa, a);
        c = mix(c, vec3(1.0, 0.86, 0.62), core * 0.95);
        c += ORG * exp(-a * a / 0.0016) * 0.65 * tw;
      }
    }
    // a ring runs across the surface from every landing
    for (int i = 0; i < 6; i++) {
      if (float(i) >= nA) break;
      vec3 A, B; float u, per;
      arcSetup(float(i), A, B, u, per);
      if (u > 0.5) {
        float ab = (u - 0.5) * per;
        float a = length(nl - B);
        float rr = abs(a - 0.06 - ab * 0.17);
        c += ORG * exp(-rr * rr / (0.0004 + aa * aa * 3.0)) * exp(-ab * 1.5) * 0.85;
      }
    }
    // the shaded limb: the night side falls away, a warm rim catches the edge
    float fres = pow(1.0 - max(dot(P, -rd), 0.0), 3.0);
    c *= 0.35 + 0.65 * smoothstep(-0.25, 0.55, dif + 0.25);
    c += ORG * fres * 0.55 + vec3(1.0, 0.8, 0.6) * fres * fres * 0.25;
    col = c;
  } else {
    // atmosphere
    float g = exp(-(dmin - 1.0) * 11.0) * smoothstep(0.7, 1.0, dmin);
    col += ORG * g * 0.55 + vec3(1.0, 0.7, 0.45) * g * g * 0.4;
  }
  col += ringAdd;

  // requests
  for (int i = 0; i < 6; i++) {
    if (float(i) >= nA) break;
    col += arcCol(float(i), p0);
  }

  // traffic: a scrolling trace that takes a bump at every arrival
  {
    vec2 q = vec2(p0.x - 0.17, p0.y + 0.470);
    float wx = 0.45, hy = 0.095;
    if (q.x > -0.01 && q.x < wx + 0.01 && q.y > -0.012 && q.y < hy + 0.012) {
      float xr = clamp(q.x / wx, 0.0, 1.0);
      float tau = Tm - (1.0 - xr) * 22.0;
      float v = 0.04 + 0.16 * xr + 0.05 * sin(tau * 1.7) * sin(tau * 0.53);
      for (int i = 0; i < 6; i++) {
        if (float(i) >= nA) break;
        float fi = float(i);
        float per = 3.3 + 0.41 * fi;
        float kk = tau / per + fi * 0.37 - 0.5;
        float dt = (kk - floor(kk + 0.5)) * per;
        v += 0.26 * exp(-dt * dt / 0.5) * (0.6 + 0.4 * xr);
      }
      float h = (v / (v + 0.2)) * 0.9 * hy;
      float inside = smoothstep(px * 1.2, 0.0, q.y - h) * step(0.0, q.y);
      float edge = smoothstep(px * 2.2 + 0.0012, 0.0, abs(q.y - h));
      col = mix(col, ORG * (0.12 + 0.55 * (1.0 - q.y / hy)), inside * 0.55);
      col += vec3(1.0, 0.72, 0.42) * edge * 0.95;
      col += vec3(1.0, 0.9, 0.8) * exp(-dot(q - vec2(wx, h), q - vec2(wx, h)) / 0.00005) * 0.9;
      col += ORG * smoothstep(px * 1.5, 0.0, abs(q.y)) * 0.4;
    }
  }

  // labels
  {
    float u = 0.0026;
    vec3 ink = vec3(1.0, 0.91, 0.80);
    col = mix(col, ORG, fText((p0 - vec2(-0.62, 0.445)) / u, ${u(`EDGE NETWORK`)}, u / px) * 0.95);
    col = mix(col, ink * 0.55, fText((p0 - vec2(0.62 - ${l(`ILLUSTRATIVE`)*.0026}, 0.445)) / u, ${u(`ILLUSTRATIVE`)}, u / px) * 0.85);
    col = mix(col, ink * 0.7, fText((p0 - vec2(-0.62, -0.395)) / u, ${u(`CHARGED FOR`)}, u / px) * 0.9);
    col = mix(col, ink, fText((p0 - vec2(-0.62, -0.428)) / u, ${u(`TRAFFIC,`)}, u / px) * 0.95);
    col = mix(col, ink, fText((p0 - vec2(-0.62, -0.461)) / u, ${u(`NOT SEATS`)}, u / px) * 0.95);
    col = mix(col, ORG, fText((p0 - vec2(0.17, -0.355)) / u, ${u(`TRAFFIC`)}, u / px) * 0.85);
  }

  // grade
  col = col / (1.0 + 0.25 * max(col - 0.9, 0.0));
  float vig = smoothstep(1.3, 0.25, length(p0 * vec2(0.8, 1.1)));
  col *= 0.30 + 0.70 * vig;
  col += (h21(gl_FragCoord.xy + fract(uTime * 9.7) * 191.0) - 0.5) * (0.016 + 0.018 * I);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`},H={id:`appfolio`,projectId:`appfolio`,title:`Second Act`,medium:`Apartment windows lighting up under a rising revenue-per-customer ribbon`,colors:{bg:`#070B1A`,ink:`#FFF1D6`,accent:`#FFC24B`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;
${f}
#define PI 3.14159265
#define GROUND -0.40
#define CYC 16.0
#define RX0 -0.56
#define RX1 0.58
#define RY0 0.0
#define RY1 0.35
#define GK 1.2897
const vec3 AMB = vec3(1.0, 0.76, 0.29);
float Tm, FR;

float h21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float topOf(float bi) { return bi < 0.5 ? -0.16 : (bi < 1.5 ? -0.05 : (bi < 2.5 ? -0.12 : (bi < 3.5 ? -0.02 : -0.14))); }

// the blocks: rgb + coverage at p (the street reflection calls this with the mirrored point)
vec4 city(vec2 p, float px) {
  float bx = (p.x + 0.60) / 0.245;
  float bi = floor(bx);
  float lx = (bx - bi) * 0.245;
  if (bi < 0.0 || bi > 4.0 || lx > 0.22) return vec4(0.0);
  float top = topOf(bi);
  float ry = p.y - GROUND;
  // a penthouse box and a mast
  float pent = step(top, p.y) * step(p.y, top + 0.028) * step(0.07, lx) * step(lx, 0.15) * step(0.5, mod(bi, 2.0) + 0.5 * step(2.5, bi));
  if (p.y > top && pent < 0.5) return vec4(0.0);
  if (p.y < GROUND) return vec4(0.0);
  vec3 wall = mix(vec3(0.030, 0.038, 0.085), vec3(0.060, 0.062, 0.120), smoothstep(0.0, top - GROUND, ry));
  if (pent > 0.5) return vec4(wall * 0.8, 1.0);
  float cx = floor(lx / 0.055), cy = floor(ry / 0.05);
  float fx = fract(lx / 0.055), fy = fract(ry / 0.05);
  float nf = floor((top - GROUND) / 0.05);
  vec2 q = vec2(fx - 0.5, fy - 0.5);
  float key = h21(vec2(bi * 7.0 + cx, cy + bi * 13.0));
  float elig = step(h21(vec2(bi * 5.0 + cx + 3.0, cy * 1.7 + bi)), 0.9);
  float order = key * 0.85 + (bi * 0.245 + cx * 0.055 + 0.6) / 1.2 * 0.15;
  float lit = smoothstep(0.0, 0.03, FR - order) * elig * step(cy, nf - 1.0);
  float flash = exp(-max(FR - order, 0.0) * 55.0) * lit;
  vec2 d = abs(q) - vec2(0.27, 0.27);
  float sd = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - 0.04;
  float win = smoothstep(px * 1.4, 0.0, sd) * step(cy, nf - 1.0);
  vec3 wc = AMB * (0.78 + 0.45 * h21(vec2(cx + 9.0, cy + bi * 3.0))) * (1.0 + 1.6 * flash);
  vec3 dark = vec3(0.020, 0.030, 0.070) + vec3(0.03, 0.02, 0.03) * (1.0 - fy);
  vec3 c = wall;
  // light spilling onto the wall around a lit window, plus a thin slab line per floor
  c += AMB * lit * exp(-dot(q, q) * 7.0) * 0.20;
  c *= 1.0 - 0.35 * smoothstep(0.06, 0.0, fy);
  c = mix(c, mix(dark, wc, lit), win);
  // a left-hand rim catches the last light
  c += vec3(0.30, 0.16, 0.20) * smoothstep(0.012, 0.0, lx) * 0.8;
  return vec4(c, 1.0);
}

void main() {
  float I = clamp(uIntensity, 0.0, 1.0);
  float S = min(uRes.y, uRes.x / 1.3);
  vec2 p0 = (gl_FragCoord.xy - 0.5 * uRes) / S;
  float px = 1.0 / S;
  vec2 mo = uMouse - 0.5;
  Tm = mod(uTime, 7200.0) + uSeed * CYC * 3.0;
  float Tc = mod(Tm, CYC);
  float pg = clamp((Tc - 1.2) / 9.5, 0.0, 1.0);
  float ease = pg * pg * (3.0 - 2.0 * pg);
  float out_ = smoothstep(14.0, 15.6, Tc);
  FR = (0.395 * smoothstep(0.0, 1.0, Tc) + 0.605 * ease) * (1.0 - out_);
  float xh = 1.0 - (1.0 - pg) * (1.0 - pg);
  vec2 par = mo * vec2(0.020, 0.012);
  vec2 p = p0 - par * 0.5;

  // dusk sky, a warm band at the roofline and a few stars
  vec3 col = mix(vec3(0.010, 0.016, 0.060), vec3(0.020, 0.030, 0.100), smoothstep(0.5, -0.1, p.y));
  col = mix(col, vec3(0.30, 0.15, 0.17), pow(smoothstep(0.25, -0.40, p.y), 2.2) * (0.85 + 0.15 * sin(p.x * 3.0 + 1.0)));
  col += AMB * 0.05 * exp(-dot(p - vec2(0.15, -0.22), p - vec2(0.15, -0.22)) * 4.0);
  {
    vec2 g = p * 30.0; vec2 id = floor(g), f = fract(g) - 0.5;
    float r = h21(id);
    col += vec3(0.8, 0.85, 1.0) * smoothstep(0.07, 0.0, length(f - (vec2(h21(id + 1.3), h21(id + 4.7)) - 0.5) * 0.6)) * step(0.94, r) * smoothstep(-0.12, 0.35, p.y) * (0.5 + 0.5 * sin(Tm * (0.7 + r) + r * 40.0)) * 0.55;
  }

  // the blocks, and their reflection in the wet street
  vec4 cty = city(p, px);
  col = mix(col, cty.rgb, cty.a);
  if (p.y < GROUND) {
    float dep = GROUND - p.y;
    col = mix(vec3(0.020, 0.024, 0.052), vec3(0.008, 0.010, 0.026), smoothstep(0.0, 0.10, dep));
    vec2 rp = vec2(p.x + 0.0035 * sin(p.y * 90.0 + Tm * 1.7) * (0.4 + dep * 6.0), GROUND + dep);
    vec4 r = city(rp, px * 2.5);
    col = mix(col, r.rgb * 0.62 + vec3(0.03, 0.02, 0.03), r.a * (1.0 - smoothstep(0.0, 0.10, dep)) * 0.9);
    col += AMB * 0.05 * smoothstep(0.02, 0.0, dep);
  }
  // a mast light on the fourth block
  {
    float tb = topOf(3.0);
    vec2 mp = vec2(-0.60 + 3.0 * 0.245 + 0.11, tb + 0.075);
    float mast = smoothstep(px * 1.2, 0.0, abs(p.x - mp.x) - 0.0008) * step(tb, p.y) * step(p.y, mp.y);
    col = mix(col, vec3(0.10, 0.10, 0.16), mast);
    col += vec3(1.0, 0.30, 0.20) * exp(-dot(p - mp, p - mp) / 0.00004) * (0.35 + 0.65 * step(0.0, sin(Tm * 3.0)));
  }

  // the ribbon: revenue per customer, drawn on left to right
  float xn = (p.x - RX0) / (RX1 - RX0);
  float rib = 1.0 - out_;
  vec2 hpos;
  {
    float eh = exp(GK * xh);
    hpos = vec2(RX0 + xh * (RX1 - RX0), RY0 + (RY1 - RY0) * (eh - 1.0) / (exp(GK) - 1.0));
  }
  if (xn > -0.05 && xn < xh + 0.04) {
    float e = exp(GK * xn);
    float yc = RY0 + (RY1 - RY0) * (e - 1.0) / (exp(GK) - 1.0);
    float m = (RY1 - RY0) * GK * e / (exp(GK) - 1.0) / (RX1 - RX0);
    float nrm = sqrt(1.0 + m * m);
    float ph = p.x * 11.0 - Tm * 1.2 * (0.5 + 0.5 * I);
    float cph = cos(ph);
    float taper = smoothstep(-0.02, 0.07, xn) * mix(1.0, 0.18, smoothstep(0.07, 0.0, xh - xn));
    float hw = 0.030 * nrm * max(abs(cph), 0.05) * max(taper, 0.02);
    float dy = p.y - yc;
    float v = dy / hw;
    float cover = clamp((hw - abs(dy)) / (px * 1.3) + 0.5, 0.0, 1.0) * smoothstep(xh, xh - 0.012, xn) * smoothstep(-0.02, 0.0, xn) * rib;
    float shade = 0.40 + 0.60 * abs(cph);
    vec3 face = cph > 0.0 ? vec3(1.0, 0.80, 0.38) : vec3(0.86, 0.46, 0.20);
    float sheen = pow(0.5 + 0.5 * sin(ph * 2.0 + v * 1.6), 5.0);
    vec3 rc = face * shade + vec3(1.0, 0.95, 0.80) * sheen * 0.35 * abs(cph);
    rc = mix(rc, vec3(1.0, 0.95, 0.82), smoothstep(0.80, 1.0, abs(v)) * 0.40);
    rc *= 0.75 + 0.25 * smoothstep(-0.4, 0.5, p.y - yc + 0.1 * v);
    col = mix(col, rc, cover);
    float dist = abs(dy) / nrm;
    col += AMB * exp(-dist * dist / 0.0011) * 0.32 * smoothstep(xh, xh - 0.05, xn) * smoothstep(-0.02, 0.02, xn) * rib;
  }
  // the head of the ribbon
  {
    vec2 d = p - hpos;
    float h = rib * step(0.001, xh);
    col += vec3(1.0, 0.93, 0.75) * exp(-dot(d, d) / 0.00006) * 1.3 * h;
    col += AMB * exp(-dot(d, d) / 0.0016) * 0.45 * h;
  }

  // the timeline: one tick a year, the marker rides the head
  {
    float ty = 0.468;
    float inx = step(RX0 - 0.002, p.x) * step(p.x, RX1 + 0.002);
    col += vec3(0.55, 0.55, 0.75) * smoothstep(px * 1.2, 0.0, abs(p.y - ty) - 0.0004) * inx * 0.35;
    float k = floor((xn * 8.0) + 0.5);
    float tx = RX0 + k / 8.0 * (RX1 - RX0);
    float on = step(k / 8.0, xh + 0.001) * rib;
    float tk = smoothstep(px * 1.5, 0.0, abs(p.x - tx) - 0.0006) * step(abs(p.y - ty), 0.008) * step(0.0, k) * step(k, 8.0);
    col = mix(col, mix(vec3(0.45, 0.45, 0.65), AMB, on), tk);
    col += AMB * exp(-dot(p - vec2(hpos.x, ty), p - vec2(hpos.x, ty)) / 0.00008) * 0.9 * rib * step(0.001, xh);
  }

  // labels
  col *= 1.0 - 0.75 * smoothstep(0.02, 0.0, max(abs(p0.x + 0.52) - 0.12, abs(p0.y + 0.452) - 0.036));
  {
    float u = 0.0026;
    vec3 ink = vec3(1.0, 0.94, 0.82);
    col = mix(col, ink * 0.75, fText((p0 - vec2(-0.62, 0.372)) / u, ${u(`REVENUE PER`)}, u / px) * 0.9);
    col = mix(col, ink * 0.75, fText((p0 - vec2(-0.62, 0.340)) / u, ${u(`CUSTOMER`)}, u / px) * 0.9);
    col = mix(col, AMB, fText((p0 - vec2(-0.62, 0.304)) / u, ${u(`17.5% CAGR`)}, u / px) * 0.95);
    col = mix(col, ink * 0.6, fText((p0 - vec2(RX0 - 0.02, 0.427)) / u, ${u(`2016`)}, u / px) * 0.9);
    col = mix(col, ink * 0.6 * (0.4 + 0.6 * smoothstep(0.9, 1.0, xh)), fText((p0 - vec2(RX1 - ${(l(`2024`)*.0026).toFixed(4)} + 0.02, 0.427)) / u, ${u(`2024`)}, u / px) * 0.9);
    col = mix(col, AMB, fText((p0 - vec2(-0.585, 0.058)) / u, ${u(`$10,520`)}, u / px) * 0.95 * rib * smoothstep(0.0, 0.05, xh));
    float endA = smoothstep(0.93, 1.0, xh) * rib;
    col = mix(col, vec3(1.0, 0.95, 0.80), fText((p0 - vec2(hpos.x - ${(l(`$38,210`)*.0026).toFixed(4)} + 0.02, hpos.y - 0.165)) / u, ${u(`$38,210`)}, u / px) * endA);
    col = mix(col, ink * 0.65, fText((p0 - vec2(-0.62, -0.428)) / u, ${u(`WINDOWS LIT:`)}, u / px) * 0.85);
    col = mix(col, AMB, fText((p0 - vec2(-0.62, -0.461)) / u, ${u(`CUSTOMERS`)}, u / px) * 0.95);
  }

  // grade
  col = col / (1.0 + 0.25 * max(col - 0.9, 0.0));
  float vig = smoothstep(1.3, 0.25, length(p0 * vec2(0.8, 1.1)));
  col *= 0.32 + 0.68 * vig;
  col += (h21(gl_FragCoord.xy + fract(uTime * 9.7) * 191.0) - 0.5) * (0.016 + 0.018 * I);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`},U={id:`chomchom`,projectId:`chomchom`,title:`Breathe`,medium:`A breathing bubble travelling a winding activity road, after the app's home-screen map`,colors:{bg:`#1E5C3A`,ink:`#F5FFF0`,accent:`#A78BFA`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;
${f}
#define PI 3.14159265
#define STOP 3.7
#define TRAV 1.3
#define CYC 18.5
#define RW 0.050
float Tm;

float h11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float h21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float roadY(float x) { return 0.20 * sin(5.2 * x + 0.35) - 0.02; }
float roadM(float x) { return 0.20 * 5.2 * cos(5.2 * x + 0.35); }
float stopX(float k) { return -0.52 + 0.26 * k; }
float box(vec2 q, vec2 c, vec2 h, float r) { vec2 d = abs(q - c) - h + r; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - r; }
float cir(vec2 q, vec2 c, float r) { return length(q - c) - r; }
float cov(float sd, float aa) { return clamp(0.5 - sd / aa, 0.0, 1.0); }

// pictograms in badge space (-1..1): rgb + alpha
vec4 icon(float k, vec2 q, float aa) {
  vec3 c = vec3(0.0); float a = 0.0;
  if (k < 0.5) {
    // daily check-in: three ticked rows
    c = vec3(0.42, 0.30, 0.88);
    float m = 0.0;
    for (int i = 0; i < 3; i++) {
      float y = 0.42 - float(i) * 0.42;
      m = max(m, cov(cir(q, vec2(-0.52, y), 0.11), aa));
      m = max(m, cov(box(q, vec2(0.22, y), vec2(0.46, 0.065), 0.06), aa));
    }
    a = m;
  } else if (k < 1.5) {
    // mindfulness: a soft cloud-brain
    float sd = min(min(cir(q, vec2(-0.28, -0.05), 0.40), cir(q, vec2(0.28, -0.05), 0.40)), min(cir(q, vec2(0.0, 0.26), 0.38), box(q, vec2(0.0, -0.18), vec2(0.58, 0.22), 0.2)));
    c = vec3(0.98, 0.58, 0.78);
    a = cov(sd, aa);
    float fold = cov(abs(q.x + 0.05 * sin(q.y * 9.0)) - 0.025, aa) * step(-0.25, q.y) * step(q.y, 0.52);
    c = mix(c, vec3(0.80, 0.30, 0.55), fold * 0.8);
  } else if (k < 2.5) {
    // story: an open book
    float sdl = box(q, vec2(-0.36, 0.0), vec2(0.34, 0.42), 0.06);
    float sdr = box(q, vec2(0.36, 0.0), vec2(0.34, 0.42), 0.06);
    c = vec3(0.20, 0.52, 0.95);
    a = cov(min(sdl, sdr), aa);
    float lines = cov(abs(fract(q.y * 3.2) - 0.5) - 0.16, aa) * step(abs(q.x), 0.66) * step(0.08, abs(q.x)) * step(abs(q.y), 0.28);
    c = mix(c, vec3(0.88, 0.95, 1.0), lines * 0.9);
  } else if (k < 3.5) {
    // games: a gamepad
    float sd = min(box(q, vec2(0.0, 0.0), vec2(0.70, 0.36), 0.28), min(cir(q, vec2(-0.5, -0.26), 0.28), cir(q, vec2(0.5, -0.26), 0.28)));
    c = vec3(0.36, 0.44, 0.72);
    a = cov(sd, aa);
    float crs = max(cov(box(q, vec2(-0.40, 0.04), vec2(0.20, 0.06), 0.02), aa), cov(box(q, vec2(-0.40, 0.04), vec2(0.06, 0.20), 0.02), aa));
    float dots = max(cov(cir(q, vec2(0.34, 0.12), 0.08), aa), cov(cir(q, vec2(0.52, -0.02), 0.08), aa));
    c = mix(c, vec3(1.0, 0.98, 0.95), max(crs, dots));
  } else {
    // journaling: a notebook with a pencil
    float sd = box(q, vec2(-0.08, 0.0), vec2(0.46, 0.58), 0.08);
    c = vec3(0.24, 0.50, 0.88);
    a = cov(sd, aa);
    float ln = cov(abs(fract((q.y + 0.1) * 3.4) - 0.5) - 0.12, aa) * step(abs(q.x + 0.08), 0.30) * step(abs(q.y + 0.1), 0.36);
    c = mix(c, vec3(0.86, 0.93, 1.0), ln * 0.9);
    vec2 r = vec2(q.x - 0.40 + q.y * 0.9, q.y);
    float pen = cov(abs(q.x - q.y * 0.70 - 0.34) - 0.07, aa) * step(abs(q.y - 0.05), 0.44);
    c = mix(c, vec3(1.0, 0.68, 0.18), pen);
    a = max(a, pen);
  }
  return vec4(c, a);
}

float lab(vec2 p, vec2 c, vec4 s, float n, float px, out float pill) {
  float u = 0.0023;
  float w = (n * 6.0 - 1.0) * u;
  vec2 q = p - c + vec2(w * 0.5, 0.0095);
  pill = cov(box(p, c, vec2(w * 0.5 + 0.014, 0.0145), 0.0145), px * 1.5);
  return fText(q / u, s, n, u / px);
}

void main() {
  float I = clamp(uIntensity, 0.0, 1.0);
  float S = min(uRes.y, uRes.x / 1.3);
  vec2 p0 = (gl_FragCoord.xy - 0.5 * uRes) / S;
  float px = 1.0 / S;
  vec2 mo = uMouse - 0.5;
  Tm = mod(uTime, 7200.0) + uSeed * CYC;
  vec2 p = p0 + mo * vec2(0.020, 0.014);   // a little parallax

  // ---- where the bubble is ----
  float tc = mod(Tm, CYC);
  float kk = floor(tc / STOP);
  float tl = tc - kk * STOP;
  float xPrev = kk < 0.5 ? -0.70 : stopX(kk - 1.0);
  float xNext = stopX(kk);
  float a = smoothstep(0.0, TRAV, tl);
  float bxp = mix(xPrev, xNext, a);
  float moving = 1.0 - smoothstep(TRAV - 0.1, TRAV + 0.2, tl);
  float breath = 0.5 - 0.5 * cos(2.0 * PI * Tm / 5.0);
  float inhale = step(0.0, sin(2.0 * PI * Tm / 5.0));
  float born = smoothstep(0.0, 0.6, tc) * (1.0 - smoothstep(CYC - 0.8, CYC - 0.1, tc));

  // ---- the map: mown stripes, soft light ----
  float stripe = smoothstep(-0.01, 0.01, sin((p.x + p.y * 0.6) * 15.0));
  vec3 col = mix(vec3(0.20, 0.58, 0.36), vec3(0.25, 0.65, 0.40), stripe);
  col *= 0.92 + 0.12 * h21(floor(p * 90.0));
  col = mix(col, vec3(0.30, 0.72, 0.46), 0.35 * exp(-dot(p - vec2(0.0, 0.0), p - vec2(0.0, 0.0)) * 1.6));

  // trees in the empty cells
  {
    vec2 g = p / 0.15;
    vec2 id = floor(g);
    float hh = h21(id + 3.7);
    vec2 tp = (id + 0.5 + (vec2(h21(id + 1.3), h21(id + 8.1)) - 0.5) * 0.5) * 0.15;
    float rd = abs(tp.y - roadY(tp.x)) / sqrt(1.0 + roadM(tp.x) * roadM(tp.x));
    float near = 1.0;
    for (int i = 0; i < 5; i++) { vec2 sp = vec2(stopX(float(i)), roadY(stopX(float(i)))); near = min(near, length(tp - sp)); }
    if (hh > 0.40 && rd > 0.13 && near > 0.17 && abs(tp.x) < 0.74) {
      float sway = 0.003 * sin(Tm * 1.4 + hh * 20.0);
      float r = 0.026 + 0.012 * h21(id + 9.1);
      vec2 d = p - tp - vec2(sway, 0.004);
      float shadow = cov(length((p - tp - vec2(0.012, -0.010)) * vec2(1.0, 1.5)) - r, px * 2.5);
      col = mix(col, col * 0.78, shadow * 0.55);
      float can = cov(length(d) - r, px * 1.5);
      vec3 tc2 = mix(vec3(0.10, 0.42, 0.24), vec3(0.18, 0.55, 0.30), smoothstep(-r, r, d.x + d.y));
      col = mix(col, tc2, can);
    }
  }

  // ---- the road ----
  float m = roadM(p.x);
  float dr = (p.y - roadY(p.x)) / sqrt(1.0 + m * m);
  float adr = abs(dr);
  float curb = cov(adr - (RW + 0.008), px * 1.5);
  col = mix(col, vec3(0.88, 0.92, 0.80), curb * 0.85);
  float rd2 = cov(adr - RW, px * 1.5);
  vec3 asphalt = mix(vec3(0.12, 0.13, 0.21), vec3(0.17, 0.18, 0.27), smoothstep(RW, 0.0, adr) * 0.5);
  col = mix(col, asphalt, rd2);
  float dash = step(0.5, fract(p.x * 17.0 * sqrt(1.0 + m * m) * 0.62)) * cov(adr - 0.003, px * 1.2);
  col = mix(col, vec3(0.96, 0.96, 0.92), dash * rd2 * 0.9);
  // the stretch the bubble has covered glows faintly
  float prog = (kk * STOP + (kk < 0.5 ? 0.0 : 0.0));
  float doneX = bxp;
  float covered = step(p.x, doneX) * step(-0.70, p.x) * rd2 * born;
  col = mix(col, col + vec3(0.30, 0.22, 0.55) * 0.5, covered * smoothstep(RW, 0.0, adr) * 0.5);

  // ---- clouds ----
  for (int i = 0; i < 3; i++) {
    if (float(i) > 1.0 + 2.0 * I) break;
    float fi = float(i);
    float cx = mod(Tm * (0.012 + 0.004 * fi) + fi * 0.55, 1.9) - 0.95;
    vec2 cp = vec2(cx, 0.34 - fi * 0.42 + 0.03 * sin(fi * 5.0));
    float sd = min(min(cir(p, cp, 0.040), cir(p, cp + vec2(0.045, -0.006), 0.032)), min(cir(p, cp + vec2(-0.045, -0.008), 0.030), box(p, cp + vec2(0.0, -0.018), vec2(0.07, 0.016), 0.016)));
    col = mix(col, vec3(0.97, 1.0, 0.97), cov(sd, px * 2.0) * 0.38);
  }

  // ---- the five stops ----
  float lit = 0.0;
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    vec2 c = vec2(stopX(fi), roadY(stopX(fi)));
    float arrive = fi * STOP + TRAV;
    float age = tc - arrive;
    float visited = step(0.0, age);
    // the hop and the ring when the bubble lands
    float hop = age > 0.0 ? exp(-age * 4.5) * sin(age * 13.0) * 0.35 : 0.0;
    float sc = 1.0 + hop + 0.06 * (1.0 - visited) * sin(Tm * 2.0 + fi);
    float rb = 0.054 * sc;
    vec2 q = (p - c - vec2(0.0, max(hop, 0.0) * 0.03)) / rb;
    float aa = px / rb * 1.5;
    float halo = exp(-dot(q, q) * 0.5) * 0.28 * (0.5 + 0.5 * visited);
    col += vec3(1.0, 1.0, 0.95) * halo * 0.5;
    float disc = cov(length(q) - 1.0, aa);
    float ring = cov(abs(length(q) - 1.05) - 0.10, aa);
    vec3 ringC = mix(vec3(0.92, 0.95, 0.90), mix(vec3(0.66, 0.55, 0.98), vec3(1.0, 0.86, 0.45), 0.35 * exp(-age * 0.4)), visited);
    col = mix(col, ringC, ring);
    col = mix(col, vec3(0.99, 0.99, 0.96), disc);
    vec4 ic = icon(fi, q * 1.18, aa * 1.18);
    col = mix(col, ic.rgb, ic.a * disc * (0.65 + 0.35 * visited));
    // confetti
    if (age > 0.0 && age < 1.6) {
      for (int j = 0; j < 12; j++) {
        float fj = float(j);
        float ang = fj * 0.5236 + h11(fi * 9.0 + fj) * 0.4;
        float sp = 0.10 + 0.10 * h11(fj + fi * 3.0);
        vec2 pp = c + vec2(cos(ang), sin(ang)) * sp * (1.0 - exp(-age * 3.0)) / 3.0 * 3.0 - vec2(0.0, 0.06 * age * age);
        float sz = 0.0045 * (1.0 - age / 1.6);
        vec3 cc = j - 3 * (j / 3) == 0 ? vec3(1.0, 0.85, 0.35) : (j - 3 * (j / 3) == 1 ? vec3(0.65, 0.55, 1.0) : vec3(1.0, 0.55, 0.75));
        col = mix(col, cc, cov(length(p - pp) - sz, px * 1.5) * (1.0 - age / 1.6));
      }
    }
    lit += halo;
  }
  // stop labels, on dark pills
  {
    float pl;
    float t0 = lab(p, vec2(stopX(0.0), roadY(stopX(0.0)) - 0.098), ${u(`CHECKIN`)}, px, pl);
    col = mix(col, vec3(0.04, 0.12, 0.10), pl * 0.55); col = mix(col, vec3(1.0), t0 * 0.95);
    float t1 = lab(p, vec2(stopX(1.0), roadY(stopX(1.0)) - 0.098), ${u(`MINDFULNESS`)}, px, pl);
    col = mix(col, vec3(0.04, 0.12, 0.10), pl * 0.55); col = mix(col, vec3(1.0), t1 * 0.95);
    float t2 = lab(p, vec2(stopX(2.0), roadY(stopX(2.0)) - 0.098), ${u(`STORY`)}, px, pl);
    col = mix(col, vec3(0.04, 0.12, 0.10), pl * 0.55); col = mix(col, vec3(1.0), t2 * 0.95);
    float t3 = lab(p, vec2(stopX(3.0), roadY(stopX(3.0)) - 0.098), ${u(`GAMES`)}, px, pl);
    col = mix(col, vec3(0.04, 0.12, 0.10), pl * 0.55); col = mix(col, vec3(1.0), t3 * 0.95);
    float t4 = lab(p, vec2(stopX(4.0), roadY(stopX(4.0)) - 0.098), ${u(`JOURNALING`)}, px, pl);
    col = mix(col, vec3(0.04, 0.12, 0.10), pl * 0.55); col = mix(col, vec3(1.0), t4 * 0.95);
  }

  // ---- the bubble ----
  {
    vec2 bc = vec2(bxp, roadY(bxp) + 0.115 + 0.010 * sin(Tm * 1.9));
    float rr = 0.066 * (1.0 + 0.30 * breath) * (0.6 + 0.4 * born) * (1.0 + 0.05 * moving * sin(Tm * 9.0));
    vec2 d = p - bc;
    // a soft shadow on the road
    vec2 sh = p - vec2(bc.x, roadY(bxp) - 0.012);
    col = mix(col, col * 0.55, exp(-dot(sh * vec2(1.0, 3.2), sh * vec2(1.0, 3.2)) / (rr * rr * 0.9)) * 0.55 * born);
    // breathing guide ring
    float gr = 0.095 + 0.055 * breath;
    float gd = abs(length(d) - gr);
    col += vec3(0.95, 0.92, 1.0) * smoothstep(px * 1.6, 0.0, gd - 0.0007) * 0.38 * born;
    col += vec3(0.75, 0.65, 1.0) * exp(-gd * gd / 0.00010) * 0.14 * born;
    float ang = atan(d.y, d.x);
    float wob = 1.0 + 0.028 * sin(ang * 3.0 + Tm * 2.1) + 0.018 * sin(ang * 5.0 - Tm * 1.6);
    float rw = rr * wob;
    float L = length(d);
    if (L < rw * 1.12) {
      float rn = L / rw;
      float z = sqrt(max(1.0 - rn * rn, 0.0));
      vec3 n = vec3(d / rw, z);
      float fres = pow(1.0 - z, 2.4);
      float film = 0.35 + 0.9 * (1.0 - z) + 0.25 * sin(n.x * 3.1 + n.y * 2.3 + Tm * 0.8) + 0.12 * sin(Tm * 0.5);
      vec3 irid = 0.55 + 0.45 * cos(6.2831 * (film * vec3(1.0, 1.0, 1.0) + vec3(0.0, 0.33, 0.66)));
      float al = clamp(0.10 + 0.70 * fres, 0.0, 0.85) * (1.0 - smoothstep(0.96, 1.08, rn));
      // what is behind it, bent a little
      col = mix(col, col * 1.08 + vec3(0.05, 0.05, 0.09), (1.0 - smoothstep(0.0, 1.0, rn)) * 0.45);
      col = mix(col, irid, al * born);
      // inner light that breathes
      col += vec3(0.85, 0.80, 1.0) * exp(-rn * rn * 3.2) * (0.14 + 0.18 * breath) * born;
      // a big window highlight, a small one opposite
      vec2 hq = (d / rw - vec2(-0.40, 0.46)) * vec2(1.0, 1.7);
      col += vec3(1.0) * cov(length(hq) - 0.20, 0.10) * 0.85 * born;
      vec2 hq2 = (d / rw - vec2(0.42, -0.42)) * vec2(1.3, 1.0);
      col += vec3(1.0) * cov(length(hq2) - 0.07, 0.08) * 0.5 * born;
      col += vec3(1.0, 0.95, 1.0) * smoothstep(0.035, 0.0, abs(rn - 0.98)) * 0.35 * born;
    }
    // a few motes rising off it while it rests
    for (int j = 0; j < 6; j++) {
      float fj = float(j);
      float life = fract(Tm * 0.25 + fj * 0.17);
      vec2 mp = bc + vec2((h11(fj + kk * 7.0) - 0.5) * 0.14, 0.06 + 0.16 * life);
      col += vec3(1.0, 0.96, 1.0) * exp(-dot(p - mp, p - mp) / 0.000012) * sin(life * PI) * (1.0 - moving) * 0.8 * born * step(0.5, h11(fj + 3.0 + kk));
    }
  }

  // ---- caption ----
  {
    float u = 0.0028;
    float w = 11.0 * 6.0 - 1.0;
    vec2 cq = (p0 - vec2(-w * 0.5 * u, 0.425)) / u;
    float tin = fText(cq, ${u(`BREATHE IN`)}, u / px) * inhale;
    float tout = fText(cq, ${u(`BREATHE OUT`)}, u / px) * (1.0 - inhale);
    float shd = fText(cq - vec2(-0.7, 0.7), ${u(`BREATHE IN`)}, u / px) * inhale + fText(cq - vec2(-0.7, 0.7), ${u(`BREATHE OUT`)}, u / px) * (1.0 - inhale);
    col = mix(col, vec3(0.03, 0.12, 0.08), shd * 0.5);
    col = mix(col, vec3(1.0, 0.99, 0.95), (tin + tout) * 0.95);
  }

  // ---- grade: a gentle vignette, warm film grain ----
  float vig = smoothstep(1.35, 0.30, length(p0 * vec2(0.8, 1.05)));
  col *= 0.55 + 0.45 * vig;
  col = col / (1.0 + 0.2 * max(col - 0.95, 0.0));
  col += (h21(gl_FragCoord.xy + fract(uTime * 9.7) * 191.0) - 0.5) * (0.014 + 0.016 * I);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`},W={id:`secretary`,projectId:`secretary`,title:`Four Inboxes`,medium:`Four message streams merging into one register, with tentative holds on a calendar`,colors:{bg:`#080C18`,ink:`#E8EEFF`,accent:`#7FB2FF`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;
${f}
#define PI 3.14159265
#define CYC 16.0
#define RX0 0.14
#define RCW 0.024
#define RY1 0.425
#define RRH 0.034
#define CX0 0.14
#define CDW 0.096
#define CY1 -0.095
#define CHR 0.052
#define YT 0.01
#define TX -0.035
const vec3 ACC = vec3(0.50, 0.70, 1.0);
float Tm, Tc, OUT;

float h11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float h21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float cov(float sd, float aa) { return clamp(0.5 - sd / aa, 0.0, 1.0); }
float box(vec2 q, vec2 c, vec2 h, float r) { vec2 d = abs(q - c) - h + r; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - r; }
float laneY(float j) { return 0.255 - j * 0.165; }
float laneP(float yj, float x) { return mix(yj, YT, smoothstep(-0.40, -0.12, x)); }
vec3 laneTint(float j) { return j < 0.5 ? vec3(0.96, 0.50, 0.45) : (j < 1.5 ? vec3(0.45, 0.66, 0.98) : (j < 2.5 ? vec3(0.45, 0.88, 0.58) : vec3(0.36, 0.82, 0.76))); }
vec3 tierC(float t) { return t < 0.5 ? vec3(0.09, 0.07, 0.14) : (t < 1.5 ? vec3(0.95, 0.30, 0.32) : (t < 2.5 ? vec3(0.98, 0.76, 0.25) : vec3(0.40, 0.85, 0.55))); }
float tierOf(float n) { return floor(h11(n * 3.3 + 1.7) * 4.0); }
float rowY(float n) { return RY1 - (n + 0.5) * RRH; }
float arrOf(float n) { return 1.5 + 0.8 * n; }
float hasDate(float n) { return step(0.5, h11(n * 5.7 + 2.9)); }

// envelopes (Gmail, Outlook) and bubbles (iMessage, WhatsApp) running along their lane
vec4 lanePk(float j, vec2 p, float px) {
  float yj = laneY(j);
  float v = 0.15, per = 0.86, off = j * 0.23 + 0.1, x0 = -0.64;
  float mc = (Tm - off - (p.x - x0) / v) / per;
  vec3 oc = vec3(0.0); float oa = 0.0;
  for (int s = 0; s < 2; s++) {
    float m = floor(mc) + float(s);
    float xp = x0 + v * (Tm - off - m * per);
    float act = step(0.42, h21(vec2(m, j * 3.1 + 1.0)));
    float drop = (1.0 - act) * smoothstep(-0.48, -0.28, xp);
    float merge = smoothstep(-0.12, -0.05, xp);
    float al = (1.0 - drop) * (1.0 - merge) * smoothstep(-0.66, -0.58, xp);
    float sc = 1.0 - 0.45 * merge - 0.5 * drop;
    float cy0 = laneP(yj, xp);
    float ang = atan((laneP(yj, xp + 0.01) - laneP(yj, xp - 0.01)) / 0.02) * 0.6;
    vec2 dq = p - vec2(xp, cy0);
    vec2 q = vec2(dq.x * cos(ang) + dq.y * sin(ang), -dq.x * sin(ang) + dq.y * cos(ang)) / sc;
    float sd, fl = 0.0;
    if (j < 1.5) {
      sd = box(q, vec2(0.0), vec2(0.028, 0.019), 0.004);
      fl = cov(abs(q.y - (0.019 - abs(q.x) * 0.75)) - 0.0016, px * 1.4) * step(-0.004, q.y);
    } else {
      sd = min(box(q, vec2(0.0, 0.004), vec2(0.028, 0.017), 0.011), length(q - vec2(-0.016, -0.016)) - 0.006);
      fl = cov(abs(q.y - 0.004) - 0.0016, px * 1.4) * step(abs(q.x), 0.016);
    }
    float mk = cov(sd * sc, px * 1.3) * al;
    vec3 tint = laneTint(j);
    vec3 c = mix(vec3(0.34, 0.37, 0.48), mix(tint, vec3(1.0), 0.20), act);
    c = mix(c, vec3(0.06, 0.07, 0.12), fl * 0.55);
    float ga = exp(-max(sd * sc, 0.0) / 0.011) * 0.45 * act * al * (1.0 - mk);
    float ta = mk + ga * (1.0 - mk);
    if (ta > oa) { oc = (c * mk + ACC * ga) / max(ta, 1e-4); oa = ta; }
  }
  return vec4(oc, oa);
}

// the register: 20 columns, 12 rows; each row is written as its chip arrives
vec4 reg(vec2 p, float px) {
  vec2 q = vec2(p.x - RX0, RY1 - p.y);
  float WD = 20.0 * RCW;
  if (q.x < -0.003 || q.x > WD + 0.003 || q.y < -0.003 || q.y > 12.0 * RRH + 0.003) return vec4(0.0);
  float r = clamp(floor(q.y / RRH), 0.0, 11.0);
  vec2 f = vec2(fract(q.x / RCW), fract(q.y / RRH));
  vec3 col = vec3(0.040, 0.050, 0.090) + vec3(0.012) * mod(r, 2.0);
  float gx = smoothstep(px * 1.2, 0.0, min(f.x, 1.0 - f.x) * RCW);
  float gy = smoothstep(px * 1.2, 0.0, min(f.y, 1.0 - f.y) * RRH);
  col += vec3(0.60, 0.68, 1.0) * (gx * 0.05 + gy * 0.07);
  float arr = arrOf(r);
  float rv = smoothstep(arr, arr + 0.55, Tc) * (1.0 - OUT);
  float lx = q.x, ly = q.y - (r + 0.5) * RRH;
  if (rv > 0.0 && lx < rv * WD) {
    float t = tierOf(r);
    float sdc = box(vec2(lx, ly), vec2(RCW, 0.0), vec2(RCW * 0.88, 0.0095), 0.005);
    vec3 cc = tierC(t);
    col = mix(col, cc, cov(sdc, px * 1.3));
    col = mix(col, vec3(0.9, 0.9, 1.0), cov(abs(sdc + 0.0012) - 0.0008, px * 1.3) * step(t, 0.5) * 0.7);
    float sg = floor((lx - 2.0 * RCW) / (4.0 * RCW));
    if (lx > 2.0 * RCW && sg < 4.5) {
      float hb = h21(vec2(r * 3.0 + sg, 7.7));
      float len = (0.45 + 0.5 * h21(vec2(r + sg * 5.0, 1.9))) * 4.0 * RCW - 0.004;
      float st = 2.0 * RCW + sg * 4.0 * RCW + 0.002;
      float sdb = box(vec2(lx, ly), vec2(st + len * 0.5, 0.0), vec2(len * 0.5, 0.0036), 0.0036);
      vec3 bc = (sg > 1.5 && sg < 2.5 && hasDate(r) > 0.5) ? ACC : vec3(0.62, 0.68, 0.84) * 0.7;
      col = mix(col, bc, cov(sdb, px * 1.3) * step(0.18, hb));
    }
    col += vec3(0.8, 0.88, 1.0) * exp(-(Tc - arr) * 3.5) * 0.25 * step(arr, Tc);
  }
  return vec4(col, 1.0);
}

vec3 evt(float k) {
  return k < 0.5 ? vec3(0.0, 0.7, 1.5) : (k < 1.5 ? vec3(1.0, 2.9, 1.0) : (k < 2.5 ? vec3(2.0, 0.4, 2.0) : (k < 3.5 ? vec3(3.0, 2.4, 1.5) : (k < 4.5 ? vec3(4.0, 4.3, 1.0) : vec3(2.0, 3.9, 1.5)))));
}

// the calendar week with tentative holds dropping in
vec4 cal(vec2 p, float px) {
  vec2 q = vec2(p.x - CX0, CY1 - p.y);
  float WD = 5.0 * CDW, H = 6.0 * CHR;
  if (q.x < -0.003 || q.x > WD + 0.003 || q.y < -0.030 || q.y > H + 0.003) return vec4(0.0);
  vec3 col = vec3(0.040, 0.050, 0.090);
  float dx = min(fract(q.x / CDW), 1.0 - fract(q.x / CDW)) * CDW;
  float dy = min(fract(q.y / CHR), 1.0 - fract(q.y / CHR)) * CHR;
  col += vec3(0.60, 0.68, 1.0) * (smoothstep(px * 1.2, 0.0, dx) * 0.07 + smoothstep(px * 1.2, 0.0, dy) * 0.045 * step(0.0, q.y));
  if (q.y < 0.0) col = vec3(0.060, 0.072, 0.125) + vec3(0.0, 0.0, 0.0);
  // the hold falling from the register, then the block
  for (int k = 0; k < 6; k++) {
    float fk = float(k);
    vec3 e = evt(fk);
    float tk = 11.0 + 0.5 * fk;
    float age = Tc - tk;
    if (age > 0.0) {
      float al = 1.0 - OUT;
      vec2 c = vec2((e.x + 0.5) * CDW, (e.y + e.z * 0.5) * CHR);
      vec2 hf = vec2(CDW * 0.5 - 0.006, e.z * CHR * 0.5 - 0.003);
      float pop = 1.0 - exp(-age * 7.0) * cos(age * 14.0);
      vec2 qc = vec2(q.x - c.x, q.y - c.y) / max(pop, 0.2);
      float sd = box(qc, vec2(0.0), hf, 0.006);
      float fill = cov(sd, px * 1.4);
      col = mix(col, ACC * 0.40, fill * 0.55 * al);
      float edge = cov(abs(sd) - 0.0014, px * 1.4);
      float dash = step(0.5, fract((q.x + q.y) * 60.0));
      col = mix(col, ACC, edge * dash * al);
      if (e.z > 1.2) {
        float u = 0.0016;
        float tx = fText((p - vec2(CX0 + c.x - 0.5 * ${(l(`MAYBE:`)*.0016).toFixed(4)}, CY1 - c.y - 0.0055)) / u, ${u(`MAYBE:`)}, u / px);
        col = mix(col, vec3(0.92, 0.96, 1.0), tx * al * smoothstep(0.2, 0.5, age));
      } else {
        col = mix(col, vec3(0.8, 0.88, 1.0), cov(box(qc, vec2(0.0), vec2(0.022, 0.0025), 0.0025), px * 1.3) * 0.7 * al);
      }
    }
  }
  return vec4(col, 1.0);
}

void main() {
  float I = clamp(uIntensity, 0.0, 1.0);
  float S = min(uRes.y, uRes.x / 1.3);
  vec2 p0 = (gl_FragCoord.xy - 0.5 * uRes) / S;
  float px = 1.0 / S;
  vec2 mo = uMouse - 0.5;
  Tm = mod(uTime, 7200.0) + uSeed * CYC * 2.0;
  Tc = mod(Tm, CYC);
  OUT = smoothstep(14.9, 15.9, Tc);
  float runIdx = mod(floor(Tm / CYC), 4.0);
  vec2 p = p0 + mo * vec2(0.012, 0.008);

  vec3 col = mix(vec3(0.020, 0.026, 0.052), vec3(0.036, 0.044, 0.080), smoothstep(-0.5, 0.5, p0.y));
  {
    vec2 g = p0 * 36.0; vec2 f = fract(g) - 0.5;
    col += vec3(0.5, 0.6, 1.0) * smoothstep(0.08, 0.0, length(f)) * 0.07;
  }

  // lane tracks and source names
  for (int i = 0; i < 4; i++) {
    float j = float(i);
    float yj = laneY(j);
    float dl = abs(p.y - laneP(yj, p.x)) * 0.92;
    float inl = step(-0.64, p.x) * step(p.x, TX - 0.02);
    float dsh = 0.5 + 0.5 * step(0.5, fract(p.x * 30.0 - Tm * 0.8));
    col += laneTint(j) * cov(dl - 0.0006, px * 1.4) * 0.22 * inl * dsh;
    vec4 pk = lanePk(j, p, px);
    col = mix(col, pk.rgb, pk.a);
  }
  {
    float u = 0.0022;
    col = mix(col, laneTint(0.0), fText((p0 - vec2(-0.64, laneY(0.0) + 0.034)) / u, ${u(`GMAIL`)}, u / px) * 0.95);
    col = mix(col, laneTint(1.0), fText((p0 - vec2(-0.64, laneY(1.0) + 0.034)) / u, ${u(`OUTLOOK`)}, u / px) * 0.95);
    col = mix(col, laneTint(2.0), fText((p0 - vec2(-0.64, laneY(2.0) + 0.034)) / u, ${u(`IMESSAGE`)}, u / px) * 0.95);
    col = mix(col, laneTint(3.0), fText((p0 - vec2(-0.64, laneY(3.0) + 0.034)) / u, ${u(`WHATSAPP`)}, u / px) * 0.95);
  }

  // triage node, the bus to the register, and the chips in flight
  {
    float chipBeat = Tc > 1.5 && Tc < 10.8 ? exp(-fract((Tc - 1.5) / 0.8) * 5.0) : 0.0;
    vec2 d = p0 - vec2(TX, YT);
    float L = length(d), a = atan(d.y, d.x);
    float hexr = 0.034 * (1.0 + 0.07 * cos(6.0 * a + Tm * 0.8));
    col += ACC * cov(abs(L - hexr) - 0.0016, px * 1.5) * (0.65 + 0.35 * chipBeat);
    col += ACC * exp(-L * L / 0.0012) * (0.14 + 0.28 * chipBeat);
    col = mix(col, vec3(0.92, 0.96, 1.0), cov(L - 0.007 * (1.0 + 0.5 * chipBeat), px * 1.5));
    float u = 0.0022;
    col = mix(col, vec3(0.85, 0.9, 1.0), fText((p0 - vec2(TX - ${(l(`TRIAGE`)*.0022*.5).toFixed(4)}, YT - 0.066)) / u, ${u(`TRIAGE`)}, u / px) * 0.9);
    for (int i = 0; i < 4; i++) {
      vec2 sq = p0 - vec2(TX - 0.0375 + float(i) * 0.025, YT - 0.098);
      float t = float(i);
      col = mix(col, tierC(t), cov(box(sq, vec2(0.0), vec2(0.009), 0.003), px * 1.3));
      col = mix(col, vec3(0.9, 0.9, 1.0), cov(abs(box(sq, vec2(0.0), vec2(0.0105), 0.003) ) - 0.0007, px * 1.3) * step(t, 0.5) * 0.7);
    }
    // the bus and its feeder
    float feed = cov(abs(p0.y - YT) - 0.0007, px * 1.4) * step(TX + 0.036, p0.x) * step(p0.x, 0.128);
    col += ACC * feed * 0.25;
    float bus = cov(abs(p0.x - 0.128) - 0.0008, px * 1.4) * step(0.017, p0.y) * step(p0.y, RY1);
    col += ACC * bus * 0.22;
    float n0 = floor((Tc - 1.5) / 0.8) + 1.0;
    for (int s = 0; s < 2; s++) {
      float n = n0 + float(s);
      float arr = arrOf(n);
      float F = 0.95;
      float a2 = 1.0 - (arr - Tc) / F;
      if (n >= 0.0 && n < 11.5 && a2 > 0.0 && a2 < 1.0) {
        float e = a2 * a2 * (3.0 - 2.0 * a2);
        vec2 cp = vec2(mix(TX + 0.036, 0.152, a2), mix(YT, rowY(n), e));
        float sd = box(p0 - cp, vec2(0.0), vec2(0.020, 0.0095), 0.005);
        col += ACC * exp(-max(sd, 0.0) / 0.012) * 0.45;
        col = mix(col, tierC(tierOf(n)), cov(sd, px * 1.3));
        col = mix(col, vec3(0.9, 0.9, 1.0), cov(abs(sd + 0.0012) - 0.0008, px * 1.3) * step(tierOf(n), 0.5) * 0.7);
        // the flare when it lands in its row
        col += ACC * exp(-dot(p0 - vec2(0.140, rowY(n)), p0 - vec2(0.140, rowY(n))) / 0.0004) * smoothstep(0.85, 1.0, a2) * 0.9;
      }
    }
  }

  // register and calendar
  vec4 rg = reg(p0, px);
  col = mix(col, rg.rgb, rg.a);
  vec4 cl = cal(p0, px);
  col = mix(col, cl.rgb, cl.a);
  for (int k = 0; k < 6; k++) {
    vec3 e = evt(float(k));
    float age = Tc - (11.0 + 0.5 * float(k) - 0.4);
    float da = clamp(age / 0.4, 0.0, 1.0);
    float xc = CX0 + (e.x + 0.5) * CDW;
    float ytop = CY1 - e.y * CHR;
    float hy = mix(0.017, ytop, da);
    float on = step(0.0, age) * (1.0 - step(1.0, da)) * (1.0 - OUT);
    float ln = cov(abs(p0.x - xc) - 0.0008, px * 1.4) * step(hy, p0.y) * step(p0.y, min(hy + 0.09, 0.017)) * smoothstep(hy + 0.09, hy, p0.y);
    col += ACC * ln * on * 0.9;
    col += vec3(0.95, 0.98, 1.0) * exp(-dot(p0 - vec2(xc, hy), p0 - vec2(xc, hy)) / 0.00005) * on;
  }
  {
    float u = 0.0022;
    col = mix(col, ACC, fText((p0 - vec2(RX0, RY1 + 0.014)) / u, ${u(`REGISTER`)}, u / px) * 0.95);
    col = mix(col, ACC, fText((p0 - vec2(CX0, CY1 + 0.058)) / u, ${u(`MAYBE: HOLDS`)}, u / px) * 0.95);
    col = mix(col, vec3(0.6, 0.66, 0.85), fText((p0 - vec2(0.62 - ${(l(`20 COLUMNS`)*.0016).toFixed(4)}, RY1 + 0.017)) / 0.0016, ${u(`20 COLUMNS`)}, 0.0016 / px) * 0.8);
  }

  // the clock: one quarter per run, four runs a day
  {
    vec2 c = vec2(-0.565, 0.410);
    vec2 d = p0 - c;
    float L = length(d);
    col += vec3(0.55, 0.65, 1.0) * cov(abs(L - 0.052) - 0.0010, px * 1.4) * 0.55;
    float ang = atan(d.x, d.y);
    float q4 = abs(fract(ang / (0.5 * PI) + 0.5) - 0.5) * (0.5 * PI) * L;
    col += ACC * smoothstep(px * 1.4, 0.0, q4 - 0.0008) * step(0.040, L) * step(L, 0.052) * 0.9;
    float ha = (runIdx + Tc / CYC) * 0.5 * PI;
    vec2 hv = vec2(sin(ha), cos(ha));
    float t = clamp(dot(d, hv), 0.0, 0.043);
    float hd = length(d - hv * t);
    col = mix(col, vec3(1.0), cov(hd - 0.0016, px * 1.4) * step(L, 0.046));
    col = mix(col, ACC, cov(L - 0.004, px * 1.4));
    float u = 0.0022;
    col = mix(col, vec3(0.85, 0.9, 1.0), fText((p0 - vec2(-0.495, 0.418)) / u, ${u(`4 RUNS`)}, u / px) * 0.9);
    col = mix(col, vec3(0.85, 0.9, 1.0), fText((p0 - vec2(-0.495, 0.388)) / u, ${u(`A DAY`)}, u / px) * 0.9);
  }

  // the run log: all four sources tick at the end of a run, even at zero
  {
    float u = 0.0022;
    col = mix(col, vec3(0.6, 0.66, 0.85), fText((p0 - vec2(-0.64, -0.335)) / u, ${u(`RUN LOG`)}, u / px) * 0.85);
    for (int i = 0; i < 4; i++) {
      float j = float(i);
      vec2 sq = p0 - vec2(-0.632 + j * 0.036, -0.383);
      float on = smoothstep(13.2 + 0.3 * j, 13.45 + 0.3 * j, Tc) * (1.0 - OUT);
      col = mix(col, mix(vec3(0.12, 0.14, 0.22), laneTint(j), on), cov(box(sq, vec2(0.0), vec2(0.013), 0.004), px * 1.3));
      col += laneTint(j) * exp(-dot(sq, sq) / 0.0006) * 0.25 * on * exp(-(Tc - 13.2 - 0.3 * j) * 1.5) ;
    }
  }

  // grade
  float vig = smoothstep(1.3, 0.25, length(p0 * vec2(0.8, 1.1)));
  col *= 0.35 + 0.65 * vig;
  col = col / (1.0 + 0.2 * max(col - 0.95, 0.0));
  col += (h21(gl_FragCoord.xy + fract(uTime * 9.7) * 191.0) - 0.5) * (0.016 + 0.016 * I);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`},G={id:`watchdog`,projectId:`watchdog`,title:`Sweep`,medium:`A radar sweep over one blip for each of 24 scheduled-job checks`,colors:{bg:`#050D0B`,ink:`#DFFBEF`,accent:`#5CF2B0`},frag:`precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uSeed;
uniform float uIntensity;
${f}
#define PI 3.14159265
#define TAU 6.2831853
#define RM 0.255
#define RS 0.415
#define SW 6.0
const vec2 CEN = vec2(0.0, -0.005);
const vec3 ACC = vec3(0.36, 0.95, 0.69);
const vec3 AMB = vec3(1.0, 0.72, 0.20);
const vec3 RED = vec3(1.0, 0.30, 0.30);
float Tm;

float h11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float h21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float cov(float sd, float aa) { return clamp(0.5 - sd / aa, 0.0, 1.0); }
float box(vec2 q, vec2 c, vec2 h, float r) { vec2 d = abs(q - c) - h + r; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - r; }

// one check: x = radius, y = state (0 ok, 1 stale, 2 missing, 3 paused, 4 credential), z = age / max age
vec3 chk(float i) {
  float h = h11(i * 1.7 + 0.3);
  if (i > 21.5) return vec3(0.07 + 0.11 * h11(i * 3.1), 3.0, 0.0);
  float P = i < 19.5 ? 7.0 + 6.0 * h : (i < 20.5 ? 64.0 : 86.0);
  float x = Tm / P + h11(i * 9.1 + 4.0) * 7.0;
  float k = floor(x), f = fract(x);
  float late = i < 19.5 ? step(0.80, h21(vec2(i, k))) : 0.0;
  float miss = step(0.55, h21(vec2(i + 31.0, k)));
  float ageN = f * (1.0 + 0.6 * late) * 0.97;
  float st = i > 19.5 ? 4.0 : (ageN > 1.0 ? (miss > 0.5 ? 2.0 : 1.0) : 0.0);
  return vec3(0.03 + ageN * (RM - 0.03), st, ageN);
}
vec3 stCol(float st) { return st < 0.5 ? ACC : (st < 1.5 ? AMB : (st < 2.5 ? RED : (st < 3.5 ? vec3(0.45, 0.60, 0.55) : vec3(0.70, 0.85, 1.0)))); }

void main() {
  float I = clamp(uIntensity, 0.0, 1.0);
  float S = min(uRes.y, uRes.x / 1.3);
  vec2 p0 = (gl_FragCoord.xy - 0.5 * uRes) / S;
  float px = 1.0 / S;
  vec2 mo = uMouse - 0.5;
  Tm = mod(uTime, 7200.0) + uSeed * 40.0;
  vec2 p = p0 + mo * vec2(0.010, 0.007);
  vec2 d = p - CEN;
  float r = length(d);
  float a = mod(atan(d.x, d.y), TAU);
  float sw = mod(Tm * TAU / SW, TAU);
  float beh = mod(sw - a, TAU);

  // the room: near-black green, a faint dot field
  vec3 col = mix(vec3(0.006, 0.020, 0.016), vec3(0.010, 0.032, 0.026), smoothstep(0.7, 0.0, length(p0)));
  col += ACC * smoothstep(0.07, 0.0, length(fract(p0 * 40.0) - 0.5)) * 0.025;

  // the scope
  float disc = smoothstep(RS + px, RS - px, r);
  col = mix(col, vec3(0.012, 0.050, 0.040) + ACC * 0.020 * (1.0 - r / RS), disc);
  // rings: faint thirds, the dashed maximum-age ring
  float ringF = cov(abs(r - 0.13) - 0.0005, px * 1.3) + cov(abs(r - 0.385) - 0.0005, px * 1.3);
  col += ACC * ringF * 0.10 * disc;
  float dash = step(0.5, fract(a * 26.0 / PI * 0.5));
  col += ACC * cov(abs(r - RM) - 0.0011, px * 1.3) * (0.30 + 0.45 * dash) * disc;
  col += ACC * exp(-pow(r - RM, 2.0) / 0.00015) * 0.05 * disc;
  float spokeA = abs(fract(a / (TAU / 24.0) + 0.5) - 0.5) * r * (TAU / 24.0);
  col += ACC * cov(spokeA - 0.0004, px * 1.3) * step(0.03, r) * step(r, RS) * 0.09;

  // the sweep: a fan trailing the arm, a bright leading edge
  float fan = exp(-beh * 2.3) * step(beh, 3.0);
  col += ACC * fan * 0.30 * disc * (0.8 + 0.2 * smoothstep(0.0, RS, r));
  col += vec3(0.85, 1.0, 0.93) * smoothstep(0.020, 0.0, beh) * smoothstep(0.0, 0.04, r) * disc * 0.55;

  // 24 spokes: an age bar and a blip each
  float i0 = floor(a / (TAU / 24.0) + 0.5);
  for (int jj = -1; jj <= 1; jj++) {
    float i = mod(i0 + float(jj) + 24.0, 24.0);
    vec3 c = chk(i);
    float th = i * (TAU / 24.0);
    float da = mod(a - th + PI, TAU) - PI;
    float along = r * cos(da), perp = r * sin(da);
    float since = mod(sw - th, TAU);
    float glow = exp(-since * 1.3);
    float st = c.y;
    vec3 sc = stCol(st);
    float stale = step(0.5, st) * step(st, 2.5);
    // the age bar, amber past the ring
    if (st < 3.5) {
      float barOn = step(0.03, along) * step(along, c.x) * step(0.0, cos(da));
      float inside = step(along, RM);
      vec3 bcol = mix(AMB * 0.9, sc * 0.55, inside);
      col += bcol * cov(abs(perp) - 0.0013, px * 1.4) * barOn * (0.40 + 0.80 * glow) * disc;
    }
    // the blip
    vec2 q = vec2(along - c.x, perp);
    float pulse = 1.0 + 0.25 * stale * sin(Tm * 6.0);
    float rad = 0.0105 * pulse;
    float sd;
    if (st > 3.5) sd = (abs(q.x) + abs(q.y)) * 0.72 - rad;
    else sd = length(q) - rad;
    if (st > 2.5 && st < 3.5) {
      col += vec3(0.45, 0.60, 0.55) * cov(abs(sd + 0.0016) - 0.0014, px * 1.3) * 0.7 * disc;
    } else {
      col += sc * cov(sd, px * 1.4) * (0.65 + 0.55 * glow) * disc;
      col += sc * exp(-max(sd, 0.0) / 0.012) * (0.12 + 0.55 * glow + 0.35 * stale) * disc;
    }
    // a stale or missing job rings out of its blip
    float rp = fract(Tm * 0.9 + i * 0.37);
    col += sc * cov(abs(length(q) - 0.012 - rp * 0.045) - 0.0009, px * 1.3) * (1.0 - rp) * stale * 0.9 * disc;
    // the tick on the bezel
    float tk = step(0.5, abs(float(jj)) * -1.0 + 1.0);
    float bez = cov(abs(perp) - 0.0016, px * 1.3) * step(RS - 0.014, along) * step(along, RS + 0.002) * step(0.0, cos(da));
    col += mix(ACC * 0.35, sc, stale) * bez * (0.55 + 0.9 * stale + 0.6 * glow) * tk;
  }
  // fine bezel marks and the rim
  float fine = cov(abs(fract(a / (TAU / 120.0) + 0.5) - 0.5) * r * (TAU / 120.0) - 0.0003, px * 1.2);
  col += ACC * fine * step(RS - 0.005, r) * step(r, RS) * 0.18;
  col += ACC * cov(abs(r - RS - 0.003) - 0.0013, px * 1.3) * 0.65;
  col += ACC * exp(-pow(r - RS - 0.003, 2.0) / 0.00012) * 0.07;

  // hub
  col += vec3(0.9, 1.0, 0.95) * cov(r - 0.006, px * 1.4);
  float hb = fract(Tm / SW);
  col += ACC * cov(abs(r - 0.012 - hb * 0.10) - 0.0007, px * 1.3) * (1.0 - hb) * 0.5 * disc;

  // labels
  {
    float u = 0.0022;
    vec3 ink = vec3(0.86, 0.98, 0.93);
    col = mix(col, ACC, fText((p0 - vec2(-0.64, 0.440)) / u, ${u(`HOURLY SWEEP`)}, u / px) * 0.95);
    col = mix(col, ink * 0.8, fText((p0 - vec2(0.64 - ${(l(`24 CHECKS`)*.0022).toFixed(4)}, 0.440)) / u, ${u(`24 CHECKS`)}, u / px) * 0.9);
    // the max-age label on a pill at the top of the ring
    float uu = 0.0017;
    float wm = ${(l(`MAX AGE`)*.0017).toFixed(4)};
    vec2 mc = CEN + vec2(0.0, RM);
    col = mix(col, vec3(0.012, 0.040, 0.034), cov(box(p0, mc, vec2(wm * 0.5 + 0.008, 0.0105), 0.0105), px * 1.4) * 0.92);
    col = mix(col, ACC, fText((p0 - mc + vec2(wm * 0.5, 0.0060)) / uu, ${u(`MAX AGE`)}, uu / px) * 0.95);
    // legend
    for (int k = 0; k < 5; k++) {
      float fk = float(k);
      vec2 lp = vec2(-0.625, 0.20 - fk * 0.045);
      vec2 q = p0 - lp;
      vec3 lc = stCol(fk < 0.5 ? 0.0 : (fk < 1.5 ? 1.0 : (fk < 2.5 ? 2.0 : (fk < 3.5 ? 3.0 : 4.0))));
      float sd = fk > 3.5 ? (abs(q.x) + abs(q.y)) * 0.72 - 0.0095 : length(q) - 0.0095;
      col += lc * (fk > 2.5 && fk < 3.5 ? cov(abs(sd + 0.0016) - 0.0014, px * 1.3) * 0.7 : cov(sd, px * 1.3)) ;
      vec2 tq = (p0 - lp - vec2(0.022, -0.0055)) / u;
      float tt = fk < 0.5 ? fText(tq, ${u(`OK`)}, u / px) : (fk < 1.5 ? fText(tq, ${u(`STALE`)}, u / px) : (fk < 2.5 ? fText(tq, ${u(`MISSING`)}, u / px) : (fk < 3.5 ? fText(tq, ${u(`PAUSED`)}, u / px) : fText(tq, ${u(`CREDENTIAL`)}, u / px))));
      col = mix(col, mix(ink * 0.75, lc, 0.35), tt * 0.9);
    }
    col = mix(col, ink * 0.55, fText((p0 - vec2(0.50, -0.385)) / u, ${u(`ONE ALERT`)}, u / px) * 0.9);
    col = mix(col, ink * 0.55, fText((p0 - vec2(0.50, -0.418)) / u, ${u(`PER JOB`)}, u / px) * 0.9);
    col = mix(col, ink * 0.55, fText((p0 - vec2(0.50, -0.451)) / u, ${u(`PER DAY`)}, u / px) * 0.9);
  }

  // the banner: ALL OK, or STALE while any job is past its ring
  {
    vec2 bc = vec2(0.545, 0.215);
    if (abs(p0.x - bc.x) < 0.10 && abs(p0.y - bc.y) < 0.03) {
      float anyS = 0.0;
      for (int i = 0; i < 20; i++) { float sti = chk(float(i)).y; anyS = max(anyS, step(0.5, sti) * step(sti, 2.5)); }
      vec3 bcol = mix(ACC, AMB, anyS);
      float pd = cov(box(p0, bc, vec2(0.082, 0.021), 0.021), px * 1.4);
      col = mix(col, vec3(0.012, 0.040, 0.034), pd * 0.9);
      col += bcol * cov(abs(box(p0, bc, vec2(0.082, 0.021), 0.021)) - 0.0010, px * 1.3) * 0.8;
      float u = 0.0022;
      float dotp = 0.5 + 0.5 * sin(Tm * 6.0);
      col += bcol * cov(length(p0 - bc - vec2(-0.058, 0.0)) - 0.0075, px * 1.4) * (1.0 - 0.4 * anyS * dotp);
      vec2 btq = (p0 - bc - vec2(-0.040, -0.0055)) / u;
      col = mix(col, bcol, (fText(btq, ${u(`STALE`)}, u / px) * anyS + fText(btq, ${u(`ALL OK`)}, u / px) * (1.0 - anyS)) * 0.95);
    }
  }

  // grade: scanlines, bloom of the bright, grain
  col *= 0.94 + 0.06 * sin(gl_FragCoord.y * 1.6);
  float vig = smoothstep(1.3, 0.25, length(p0 * vec2(0.8, 1.1)));
  col *= 0.35 + 0.65 * vig;
  col = col / (1.0 + 0.25 * max(col - 0.9, 0.0));
  col += (h21(gl_FragCoord.xy + fract(uTime * 9.7) * 191.0) - 0.5) * (0.018 + 0.016 * I);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`},ie=`precision highp float;
uniform float uTime; uniform vec2 uRes; uniform vec2 uMouse; uniform float uSeed; uniform float uIntensity;
#define TAU 6.2831853
#define PI 3.1415927
float h11(float n) { return fract(sin(n * 127.1) * 43758.5453); }
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
vec2 h22(vec2 p) { return vec2(h21(p), h21(p + vec2(17.3, 5.1))); }
float vn(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vn(p); p = p * 2.03 + vec2(7.1, 3.7); a *= 0.5; } return s; }
float ss(float a, float b, float x) { return smoothstep(a, b, x); }
float sdSeg(vec2 p, vec2 a, vec2 b) { vec2 pa = p - a, ba = b - a; return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0)); }
float sdBox(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
float sdEl(vec2 p, vec2 r) { return (length(p / r) - 1.0) * min(r.x, r.y); }
mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
float aa(float d, float px) { return smoothstep(px, -px, d); }
`;function K(e,t,n,r,i,a){return{id:e,projectId:t,title:n,medium:r,colors:i,frag:ie+a}}var q=K(`axeos`,`axe-os`,`AXE_OS`,`Generative gates and a depth dial, after the rules my agents follow`,{bg:`#07060F`,ink:`#E6E2FF`,accent:`#B7A6FF`},`
vec3 lc(float k) { return mix(mix(vec3(0.45, 0.78, 1.0), vec3(0.74, 0.64, 1.0), clamp(k / 2.0, 0.0, 1.0)), vec3(1.0, 0.56, 0.38), clamp(k / 2.0 - 1.0, 0.0, 1.0)); }
float gear(vec2 q, float R, float n, float ph, float px) {
  float a = atan(q.y, q.x);
  float rg = R + R * 0.06 * smoothstep(-0.25, 0.25, sin(n * a + ph));
  return aa(abs(length(q) - rg) - px * 0.8, px);
}
void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y; float px = 1.0 / uRes.y;
  float t = mod(uTime, 3600.0) + uSeed * 3.0;
  float bt = mod(t, 14.0);
  float L = ss(0.8, 1.4, bt) + ss(2.8, 3.4, bt) + ss(4.8, 5.4, bt) - 2.0 * ss(6.8, 7.4, bt) + 3.0 * ss(8.8, 9.4, bt);
  L *= 1.0 - ss(10.6, 10.9, bt);
  float trip = ss(10.6, 10.7, bt) * (1.0 - ss(12.6, 13.4, bt));
  float flash = step(10.6, bt) * exp(-(bt - 10.6) * 3.0);
  vec3 col = mix(vec3(0.018, 0.016, 0.04), vec3(0.05, 0.04, 0.1), 1.0 - ss(0.2, 0.95, length(p)));
  vec2 gp = fract(p * 22.0) - 0.5; col += vec3(0.5, 0.45, 0.8) * 0.05 * ss(0.07, 0.0, length(gp));

  // gears + dial
  vec2 dc = vec2(-0.5, 0.0), q = p - dc; float r = length(q);
  float g = gear(q, 0.29, 20.0, t * 0.4, px) * 0.5 + gear(p - dc - vec2(-0.17, -0.35), 0.1, 12.0, -t * 0.67 + 0.3, px) * 0.45;
  col += vec3(0.5, 0.46, 0.85) * g * 0.55;
  float an = atan(q.x, q.y);
  float arc = aa(abs(r - 0.19) - px * 0.8, px) * step(abs(an), 2.15);
  col += vec3(0.6, 0.55, 0.95) * arc * 0.5;
  float na = mix(-2.1, 2.1, L / 4.0);
  for (int k = 0; k < 5; k++) {
    float fk = float(k), ka = mix(-2.1, 2.1, fk / 4.0);
    vec2 dir = vec2(sin(ka), cos(ka));
    float d = sdSeg(q, dir * 0.205, dir * 0.255) - 0.006;
    float on = ss(fk - 0.1, fk + 0.05, L + 0.02);
    vec3 tc = lc(fk);
    col = mix(col, mix(vec3(0.13, 0.12, 0.2), tc, on), aa(d, px));
    col += tc * exp(-max(d, 0.0) * 55.0) * on * 0.45;
  }
  vec2 nd = vec2(sin(na), cos(na));
  float ndl = sdSeg(q, nd * 0.02, nd * 0.17) - 0.004;
  vec3 nc = lc(L);
  col = mix(col, nc * 1.2, aa(ndl, px)); col += nc * exp(-max(ndl, 0.0) * 40.0) * 0.4;
  col = mix(col, vec3(0.95), aa(r - 0.014, px));

  // lanes and gates
  float LY = 0.15, x0 = -0.18, x1 = 0.78, gx = 0.33, gS = (gx - x0) / (x1 - x0);
  float li = clamp(floor(p.y / LY + 2.5), 0.0, 4.0), yc = (li - 2.0) * LY, dy = p.y - yc;
  float inX = step(x0, p.x) * step(p.x, x1);
  vec3 lcol = lc(li);
  float open = ss(li - 0.55, li - 0.1, L) * (1.0 - trip * step(3.5, li));
  float tripL = trip * step(3.5, li);
  col += lcol * aa(abs(dy) - px * 0.7, px) * inX * 0.18;
  float gap = mix(0.0, 0.055, open);
  float cy = (gap + 0.07) * 0.5, hh = (0.07 - gap) * 0.5 + 0.0005;
  float gd = sdBox(vec2(p.x - gx, abs(dy) - cy), vec2(0.006, hh));
  vec3 gc = mix(mix(lcol, vec3(1.0), 0.35), vec3(1.0, 0.3, 0.25), max(tripL, trip * 0.7));
  col = mix(col, gc * (0.5 + 0.7 * open), aa(gd, px));
  col += gc * exp(-max(gd, 0.0) * 50.0) * (0.12 + 0.35 * open) * 0.6;
  float spd = 0.09 + 0.012 * li;
  for (int j = 0; j < 4; j++) {
    float fj = float(j);
    float s = fract(t * spd + fj * 0.25 + h11(li + 3.0) * 0.5);
    float qs = gS - 0.03 - 0.035 * fj;
    float sc = (s < gS) ? min(s, qs) : s;
    s = mix(sc, s, open);
    vec2 tp = vec2(mix(x0, x1, s), yc);
    float d = length(p - tp);
    float qd = (s < gS) ? 1.0 : 0.0;
    vec3 tc = mix(lcol, vec3(1.0), 0.5 * (1.0 - qd));
    col += tc * (aa(d - 0.0095, px) * 0.9 + exp(-d * 55.0) * 0.4);
    float tr = sdSeg(p, tp - vec2(0.05, 0.0), tp);
    col += tc * exp(-tr * 140.0) * 0.18 * (1.0 - qd);
  }

  // breaker trip
  vec2 bp = p - vec2(gx, 2.0 * LY);
  float rr = length(bp), bR = max(bt - 10.6, 0.0) * 0.55;
  col += vec3(1.0, 0.35, 0.25) * exp(-pow((rr - bR) * 22.0, 2.0)) * step(10.6, bt) * exp(-(bt - 10.6) * 1.4) * 0.9;
  col += vec3(1.0, 0.2, 0.2) * flash * 0.16 * (1.0 - length(p) * 0.6);
  col *= 1.0 - 0.55 * trip * (1.0 - flash);
  col *= (1.0 - 0.35 * dot(p, p) * 1.4) * 1.2;
  gl_FragColor = vec4(col, 1.0);
}`),J=K(`skills`,`skills`,`Skills`,`Generative constellation of skills with requests routing along lit paths`,{bg:`#050914`,ink:`#E8EEFF`,accent:`#8FB8FF`},`
const float S = 0.17;
vec2 np(vec2 c) { return (c + 0.5 + (h22(c) - 0.5) * 0.72) * S; }
void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y; float px = 1.0 / uRes.y;
  float t = mod(uTime, 3600.0) + uSeed * 2.0;
  float cyc = floor(t / 6.0), ph = fract(t / 6.0);
  vec2 sc = vec2(floor(h11(cyc * 3.1 + 1.0) * 7.0) - 3.0, floor(h11(cyc * 7.7 + 2.0) * 5.0) - 2.0);
  vec2 src = np(sc);
  float R = ph * 2.1 + 0.02;
  float live = ss(0.0, 0.03, ph) * (1.0 - ss(0.86, 1.0, ph));
  vec3 col = mix(vec3(0.012, 0.02, 0.045), vec3(0.03, 0.05, 0.1), 1.0 - ss(0.1, 1.0, length(p)));
  col += vec3(0.1, 0.12, 0.22) * 0.5 * fbm(p * 3.0 + t * 0.02) * 0.4;
  vec2 cc = floor(p / S);
  vec3 cool = vec3(0.56, 0.72, 1.0), hot = vec3(0.85, 0.95, 1.0), amb = vec3(1.0, 0.78, 0.4);
  for (int jy = -1; jy <= 1; jy++) {
    for (int jx = -1; jx <= 1; jx++) {
      vec2 c = cc + vec2(float(jx), float(jy));
      vec2 a = np(c);
      float hn = h21(c + 3.7), big = step(0.8, hn);
      float da = length(a - src);
      float tr = step(da, R) * exp(-(R - da) * 1.1) * live;
      float fr = exp(-pow((R - da) * 8.0, 2.0)) * live;
      float dn = length(p - a);
      float nr = mix(0.0055, 0.0115, big);
      col += cool * aa(dn - nr, px) * (0.35 + 0.65 * tr) + hot * aa(dn - nr * 0.6, px) * fr;
      col += cool * exp(-dn * 38.0) * (0.12 + 0.55 * tr + 0.9 * fr);
      col += cool * big * aa(abs(dn - nr * 2.3) - px * 0.7, px) * (0.18 + 0.6 * tr);
      for (int k = 0; k < 3; k++) {
        float fk = float(k);
        vec2 off = vec2(1.0, 0.0);
        if (k == 1) off = vec2(0.0, 1.0);
        if (k == 2) off = vec2(1.0, 1.0);
        if (h21(c * 1.7 + fk * 5.3 + 11.0) < 0.4) continue;
        vec2 b = np(c + off);
        vec2 ba = b - a;
        vec2 qq = a + ba * clamp(dot(p - a, ba) / dot(ba, ba), 0.0, 1.0);
        float dq = length(qq - src);
        float e = step(dq, R) * exp(-(R - dq) * 1.0) * live;
        float f = exp(-pow((R - dq) * 9.0, 2.0)) * live;
        float d = length(p - qq);
        col += cool * aa(d - px * 0.55, px) * (0.14 + 1.1 * e) + hot * aa(d - px * 0.9, px) * f * 1.3;
        col += cool * exp(-d * 90.0) * 0.5 * f;
      }
    }
  }
  float ds = length(p - src);
  col += amb * (aa(abs(ds - (0.02 + 0.012 * sin(t * 6.0))) - px * 0.9, px) * 0.8 + exp(-ds * 30.0) * 0.5) * live;
  col *= 1.0 - 0.5 * dot(p, p);
  gl_FragColor = vec4(col, 1.0);
}`),Y=K(`finder`,`finder-organizer`,`Finder Organizer`,`Generative files sorting themselves into folder columns`,{bg:`#0D0907`,ink:`#F4E6D6`,accent:`#F2884A`},`
vec3 cf(float c) {
  if (c < 0.5) return vec3(0.95, 0.53, 0.29);
  if (c < 1.5) return vec3(0.45, 0.66, 0.96);
  if (c < 2.5) return vec3(0.5, 0.82, 0.56);
  if (c < 3.5) return vec3(0.92, 0.45, 0.52);
  return vec3(0.72, 0.62, 0.96);
}
void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y; float px = 1.0 / uRes.y;
  float t = mod(uTime, 3600.0) + uSeed * 2.0;
  float ct = mod(t, 16.0);
  float y0 = -0.43, pitch = 0.036, cw = 0.27;
  vec3 col = mix(vec3(0.03, 0.02, 0.018), vec3(0.075, 0.05, 0.04), ss(-0.5, 0.5, p.y));
  float sweep = ss(13.4, 14.6, ct);
  float ci = clamp(floor(p.x / cw + 2.5), 0.0, 4.0), cx = (ci - 2.0) * cw, dx = p.x - cx;
  vec3 cc = cf(ci);
  // tray
  float trayTop = y0 + 9.0 * pitch;
  float inY = step(y0 - 0.012, p.y) * step(p.y, trayTop);
  float side = aa(abs(abs(dx) - 0.115) - px * 0.8, px) * inY;
  float bot = aa(abs(p.y - (y0 - 0.012)) - px * 0.8, px) * step(abs(dx), 0.117);
  float tab = aa(sdBox(vec2(dx + 0.07, p.y - trayTop - 0.004), vec2(0.05, 0.011)) - px * 0.2, px) * 0.0 + aa(abs(sdBox(vec2(dx + 0.07, p.y - trayTop - 0.004), vec2(0.05, 0.011))) - px * 0.8, px);
  col += cc * (side + bot + tab) * 0.5;
  col += cc * 0.035 * inY * step(abs(dx), 0.115);
  // stack
  float n = clamp(floor((ct - ci * 0.37) / 1.5), 0.0, 8.0);
  float ri = floor((p.y - y0) / pitch);
  if (ri >= 0.0 && ri < n) {
    float jx = (h21(vec2(ci, ri)) - 0.5) * 0.014;
    float d = sdBox(vec2(dx - jx, p.y - (y0 + (ri + 0.5) * pitch)), vec2(0.095, pitch * 0.4)) - 0.003;
    vec3 fc = cc * (0.65 + 0.35 * h21(vec2(ri, ci + 4.0)));
    col = mix(col, fc * (1.0 - 0.6 * sweep), aa(d, px));
    col += cc * 0.5 * aa(abs(p.y - (y0 + (ri + 0.5) * pitch)) - pitch * 0.4 + 0.01, px) * 0.0;
    col += vec3(1.0) * 0.12 * aa(abs(dx - jx + 0.06) - 0.012, px) * aa(d + 0.006, px) * (1.0 - sweep);
  }
  col += cc * exp(-abs(p.y - (y0 + 9.0 * pitch + 0.02)) * 40.0) * sweep * (1.0 - ss(14.4, 15.6, ct)) * 0.35 * step(abs(dx), 0.12);
  // sorter line
  col += vec3(1.0, 0.6, 0.3) * exp(-abs(p.y - 0.1) * 70.0) * 0.1;
  // falling files
  for (int c = 0; c < 5; c++) {
    float fc = float(c);
    float u = (ct - fc * 0.37) / 1.5, k = floor(u), f = fract(u);
    if (u < 0.0 || k >= 8.0) continue;
    float yt = y0 + (k + 0.5) * pitch;
    float e = f * f * 0.8 + f * 0.2;
    float y = mix(0.56, yt, e);
    float tx = (fc - 2.0) * cw;
    float hr = h21(vec2(fc, k) + 2.0);
    float xs = (hr - 0.5) * 1.3;
    float lat = ss(0.12, 0.62, f);
    float x = mix(xs, tx, lat);
    float ang = (h21(vec2(fc + 9.0, k)) - 0.5) * 3.0 * (1.0 - ss(0.25, 0.72, f)) + sin(t * 3.0 + fc) * 0.1 * (1.0 - lat);
    float scl = mix(0.55, 1.0, ss(0.2, 0.75, f));
    vec2 q = rot(ang) * (p - vec2(x, y));
    float d = sdBox(q, vec2(0.095, pitch * 0.4) * scl) - 0.003;
    vec3 fcol = mix(vec3(0.62, 0.6, 0.58), cf(fc), ss(0.28, 0.5, f));
    col = mix(col, fcol, aa(d, px));
    col += fcol * exp(-max(d, 0.0) * 40.0) * 0.22;
    float ring = exp(-pow((length(p - vec2(x, 0.1)) - (f - 0.3) * 0.5) * 30.0, 2.0)) * step(0.3, f) * (1.0 - ss(0.3, 0.55, f)) * 0.0;
    col += ring * fcol;
  }
  col *= (1.0 - 0.5 * dot(p, p)) * 1.35;
  gl_FragColor = vec4(col, 1.0);
}`),ae=K(`carta`,`carta`,`Carta del Cervello`,`Generative portolan chart: coasts, rhumb lines and ports inking in`,{bg:`#120F0A`,ink:`#EBDDB8`,accent:`#D9B779`},`
const float G = 0.3;
vec2 pt(vec2 c) { return (c + 0.15 + h22(c) * 0.7) * G; }
float rhumb(vec2 q, float px) {
  float a = atan(q.y, q.x), seg = TAU / 16.0;
  float da = (fract(a / seg + 0.5) - 0.5) * seg;
  return aa(abs(sin(da)) * length(q) - px * 0.5, px);
}
void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y; float px = 1.0 / uRes.y;
  float t = mod(uTime, 3600.0) + uSeed * 2.0;
  float ct = mod(t, 18.0);
  float grow = ss(0.0, 11.0, ct);
  float fade = 1.0 - ss(16.0, 17.8, ct);
  vec2 w = p + 0.035 * (vec2(fbm(p * 5.0 + 3.0), fbm(p * 5.0 + 9.0)) - 0.5);
  vec2 cc = floor(w / G);
  float f1 = 9.0; vec2 id = vec2(0.0), pn = vec2(0.0);
  for (int jy = -1; jy <= 1; jy++) for (int jx = -1; jx <= 1; jx++) {
    vec2 c = cc + vec2(float(jy), float(jx)).yx;
    vec2 q = pt(c); float d = length(w - q);
    if (d < f1) { f1 = d; id = c; pn = q; }
  }
  float hn = h21(id + 5.1), stale = h21(id + 17.7);
  float land = step(0.28, hn);
  float rad = G * (0.17 + 0.3 * hn);
  float reach = grow * 1.5 - length(p * vec2(0.8, 1.0)) + (fbm(p * 4.0) - 0.5) * 0.3;
  float vis = ss(0.0, 0.14, reach) * fade;
  vec3 paper = vec3(0.075, 0.06, 0.042) + 0.02 * fbm(p * 30.0);
  vec3 ink = vec3(0.86, 0.72, 0.46);
  vec3 col = paper * (1.0 - 0.35 * dot(p, p));
  float cd = f1 - rad;
  // wash + hatch on land
  vec3 wash = mix(vec3(0.16, 0.5, 0.5), vec3(0.8, 0.38, 0.2), stale);
  float inland = land * aa(cd, px);
  col = mix(col, col + wash * 0.3, inland * vis);
  float hatch = ss(0.35, 0.5, abs(fract((p.x + p.y) * 70.0) - 0.5) * 2.0) * 0.0 + ss(0.46, 0.5, abs(fract((p.x + p.y) * 60.0) - 0.5));
  col += ink * hatch * 0.1 * inland * vis * (0.5 + 0.5 * (1.0 - stale));
  // coast line + offshore water lines
  float coast = land * aa(abs(cd) - px * 0.9, px);
  col += ink * coast * vis * 0.95;
  float off = cd * 60.0;
  float wl = land * step(0.0, cd) * aa(abs(fract(off) - 0.5) - 0.5 + 0.06, px * 0.0 + 0.04) * exp(-cd * 14.0);
  col += ink * wl * vis * 0.22;
  // rhumb lines from two roses
  vec2 h0 = vec2(-0.25, 0.06), h1 = vec2(0.36, -0.1);
  float rl = rhumb(p - h0, px) * (1.0 - ss(0.2, 0.9, length(p - h0))) + rhumb(p - h1, px) * (1.0 - ss(0.2, 0.9, length(p - h1)));
  col += vec3(0.55, 0.62, 0.7) * rl * vis * 0.4 * (1.0 - 0.6 * inland);
  // rose
  vec2 q = p - h0; float rr = length(q), an = atan(q.y, q.x);
  float star = 0.075 * (0.3 + 0.7 * pow(abs(cos(4.0 * an)), 4.0));
  col += ink * (aa(abs(rr - star) - px * 0.9, px) * 0.9 + aa(abs(rr - 0.082) - px * 0.8, px) * 0.6 + aa(abs(rr - 0.095) - px * 0.6, px) * 0.4) * vis;
  col = mix(col, ink * 1.1, aa(rr - 0.012, px) * vis);
  // ports
  float pd = length(w - pn);
  float port = land * aa(pd - mix(0.0045, 0.0085, hn), px);
  col = mix(col, vec3(1.0, 0.9, 0.62), port * vis);
  float hubP = step(0.78, hn) * land;
  float pulse = 0.5 + 0.5 * sin(t * 2.0 + hn * 20.0);
  col += vec3(1.0, 0.82, 0.5) * hubP * (aa(abs(pd - 0.019 - 0.004 * pulse) - px * 0.8, px) * 0.8 + exp(-pd * 30.0) * 0.3) * vis;
  // drafting pen at the ink front
  float pen = exp(-pow(reach * 14.0, 2.0)) * (1.0 - fade * 0.0) * step(ct, 12.0);
  col += vec3(1.0, 0.85, 0.55) * pen * 0.18;
  gl_FragColor = vec4(col, 1.0);
}`),oe=K(`odyssey`,`odyssey`,`Odyssey`,`Generative wine-dark sea, a ship on the route and a four-ring reckoning wheel`,{bg:`#12060C`,ink:`#F2DDB0`,accent:`#D9A441`},`
vec2 P(float s) { return vec2(mix(-0.62, 0.62, s) + 0.05 * sin(s * 14.0), 0.125 + 0.035 * sin(s * 9.0 + 0.6) - 0.02 * s); }
void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y; float px = 1.0 / uRes.y;
  float t = mod(uTime, 3600.0) + uSeed * 2.0;
  float ct = mod(t, 20.0);
  float head = clamp(ct / 16.0, 0.0, 1.0);
  float fade = 1.0 - ss(18.0, 19.8, ct);
  float hz = 0.2;
  vec3 col;
  vec2 sun = vec2(0.3, hz + 0.045);
  if (p.y > hz) {
    float k = (p.y - hz) / 0.4;
    col = mix(vec3(0.62, 0.27, 0.17), vec3(0.06, 0.025, 0.06), ss(0.0, 1.0, k));
    float ds = length(p - sun);
    col = mix(col, vec3(1.0, 0.74, 0.4), aa(ds - 0.06, px) * 0.85);
    col += vec3(1.0, 0.6, 0.3) * exp(-ds * 6.0) * 0.4;
    col += vec3(0.9, 0.5, 0.3) * 0.12 * fbm(vec2(p.x * 3.0 + t * 0.01, p.y * 14.0)) * (1.0 - k);
  } else {
    float k = (hz - p.y) / 0.75;
    col = mix(vec3(0.2, 0.05, 0.1), vec3(0.06, 0.012, 0.035), ss(0.0, 1.0, k));
    float persp = 1.0 + k * 5.0;
    float wv = sin(p.y * 90.0 / (0.4 + k) + sin(p.x * 9.0 * persp * 0.3 + t * 0.7) * 1.6 - t * 0.9);
    col += vec3(0.28, 0.07, 0.14) * ss(0.55, 1.0, wv) * (0.4 + 0.3 * (1.0 - k));
    float sx = (p.x - sun.x) / (0.03 + 0.16 * (hz - p.y));
    float glit = exp(-sx * sx) * ss(0.5, 0.95, sin(p.y * 170.0 + sin(p.x * 22.0 + t) * 2.0 - t * 2.4)) * (1.0 - k);
    col += vec3(1.0, 0.7, 0.33) * glit * 0.85;
    col += vec3(1.0, 0.7, 0.4) * exp(-(hz - p.y) * 60.0) * 0.18;
  }
  // reckoning wheel
  vec2 wc = vec2(0.0, 0.17), q = p - wc; float r = length(q), a = atan(q.y, q.x);
  vec3 gold = vec3(0.95, 0.77, 0.4);
  float wheel = 0.0;
  for (int i = 0; i < 4; i++) {
    float fi = float(i), R = 0.13 + 0.07 * fi;
    float dirn = mod(fi, 2.0) < 0.5 ? 1.0 : -1.0;
    float n = 18.0 + 6.0 * fi;
    float tk = abs(fract(a / TAU * n + dirn * t * (0.012 + 0.006 * fi)) - 0.5) * TAU * R / n;
    wheel += aa(abs(r - R) - px * 0.7, px) * 0.5 + aa(tk - px * 0.8, px) * step(abs(r - R), 0.011) * 0.8;
  }
  wheel += aa(abs(r - 0.43) - px * 0.6, px) * 0.3 + aa(sdSeg(q, vec2(0.0, 0.405), vec2(0.0, 0.45)) - 0.004, px);
  col += gold * wheel * 0.3 * fade;
  // route
  float best = 9.0, bu = 0.0;
  for (int i = 0; i < 28; i++) {
    float s0 = float(i) / 28.0;
    vec2 a0 = P(s0), b0 = P(s0 + 1.0 / 28.0), ba = b0 - a0;
    float h = clamp(dot(p - a0, ba) / dot(ba, ba), 0.0, 1.0);
    float d = length(p - a0 - ba * h);
    if (d < best) { best = d; bu = s0 + h / 28.0; }
  }
  float dash = ss(0.55, 0.45, abs(fract(bu * 85.0) - 0.5) + 0.0);
  float on = step(bu, head) * fade;
  col += vec3(1.0, 0.86, 0.5) * (aa(best - px * 1.1, px) * dash * 0.85 + exp(-best * 90.0) * 0.12) * on;
  for (int i = 0; i < 5; i++) {
    float s = 0.14 + 0.18 * float(i);
    vec2 lp = P(s); float d = length(p - lp);
    float since = (head - s) * 16.0;
    float got = step(0.0, since) * fade;
    col += vec3(1.0, 0.82, 0.45) * got * (aa(d - 0.006, px) + aa(abs(d - 0.016 - 0.03 * clamp(since, 0.0, 1.6) * 0.0) - px * 0.8, px) * 0.8 + exp(-pow((d - since * 0.045) * 40.0, 2.0)) * exp(-since * 1.2) * 0.8);
  }
  // ship
  vec2 sp = P(head), tp = P(min(head + 0.01, 1.0)) - P(max(head - 0.01, 0.0));
  float bob = sin(t * 1.4) * 0.005;
  vec2 sq = rot(-sin(t * 1.4) * 0.07) * (p - sp - vec2(0.0, 0.016 + bob));
  float hull = sdBox(sq - vec2(0.0, 0.0), vec2(0.034, 0.006)) - 0.003;
  float sy = (sq.y - 0.012) / 0.05;
  float sail = max(abs(sq.x - 0.003 * sin(sy * 3.0 + t)) - 0.026 * (1.0 - 0.45 * sy), max(-sy, sy - 1.0) * 0.04);
  float mast = sdSeg(sq, vec2(0.0, 0.004), vec2(0.0, 0.068)) - 0.0013;
  float sd = min(min(hull, sail), mast);
  float vis = step(0.001, head) * fade;
  col = mix(col, vec3(0.1, 0.03, 0.05), aa(sd - 0.0025, px) * vis);
  col = mix(col, mix(vec3(1.0, 0.86, 0.55), vec3(1.0, 0.95, 0.8), sy), aa(sd, px) * vis);
  float wk = sdSeg(p, sp + vec2(-0.02, 0.0), sp + vec2(-0.11, 0.0));
  col += vec3(1.0, 0.7, 0.4) * exp(-wk * 160.0) * 0.4 * vis * ss(hz, hz - 0.01, p.y);
  col *= 1.0 - 0.4 * dot(p, p);
  gl_FragColor = vec4(col, 1.0);
}`),se=K(`liaozhai`,`liaozhai`,`Liaozhai`,`Generative ink-wash fox spirits and brush strokes on paper`,{bg:`#E6DCC4`,ink:`#17130F`,accent:`#C23B30`},`
float sdFox(vec2 p, float t) {
  float d = sdEl(rot(-0.12) * (p - vec2(-0.01, -0.03)), vec2(0.115, 0.062));
  d = min(d, sdEl(p - vec2(0.09, 0.035), vec2(0.045, 0.04)));
  d = min(d, sdSeg(p, vec2(0.115, 0.03), vec2(0.17, 0.012)) - 0.012);
  d = min(d, sdSeg(p, vec2(0.085, 0.065), vec2(0.074, 0.118)) - 0.008);
  d = min(d, sdSeg(p, vec2(0.106, 0.065), vec2(0.122, 0.114)) - 0.007);
  d = min(d, sdSeg(p, vec2(0.06, -0.04), vec2(0.07, -0.1)) - 0.011);
  d = min(d, sdSeg(p, vec2(-0.07, -0.05), vec2(-0.078, -0.1)) - 0.012);
  vec2 root = vec2(-0.1, -0.03);
  for (int j = 0; j < 3; j++) {
    float fj = float(j) - 1.0;
    mat2 R = rot(fj * 0.42);
    for (int i = 0; i < 16; i++) {
      float s = float(i) / 15.0;
      vec2 c = vec2(-0.15 * s - 0.01, 0.02 * s + 0.1 * sin(s * 2.2) + 0.012 * s * sin(t * 0.8 + s * 3.0 + fj));
      float rd = 0.008 + 0.021 * sin(s * 3.0 + 0.3);
      d = min(d, length(p - root - R * c) - rd * (1.0 - 0.18 * abs(fj)));
    }
  }
  return d;
}
float ink(float d, vec2 p, float a) {
  float n = fbm(p * 22.0);
  float body = (1.0 - ss(-0.002, 0.007, d)) * (0.62 + 0.5 * n);
  float halo = exp(-max(d, 0.0) * 70.0) * 0.2 * fbm(p * 9.0 + 4.0);
  float m = ss(0.0, 0.12, a + 0.55 - fbm(p * 5.0 + 11.0) * 1.1);
  return clamp((body + halo) * m, 0.0, 1.0);
}
void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y; float px = 1.0 / uRes.y;
  float t = mod(uTime, 3600.0) + uSeed * 2.0;
  float ct = mod(t, 18.0);
  float fade = 1.0 - ss(15.5, 17.6, ct);
  vec3 paper = vec3(0.9, 0.86, 0.76) - 0.07 * fbm(p * 8.0) - 0.04 * fbm(p * 60.0);
  paper *= 1.0 - 0.28 * smoothstep(0.35, 1.0, length(p * vec2(0.8, 1.1)));
  vec3 col = paper;
  vec3 inkc = vec3(0.075, 0.065, 0.06);
  // dial rings (reading paths), faint
  vec2 dq = p - vec2(-0.05, 0.02); float dr = length(dq);
  float dials = aa(abs(dr - 0.36) - px * 0.7, px) + aa(abs(dr - 0.3) - px * 0.6, px) * 0.6 + aa(abs(dr - 0.44) - px * 0.5, px) * 0.5;
  col = mix(col, inkc, dials * 0.13 * fade);
  // moon wash
  float mo = length(p - vec2(-0.02, 0.24));
  col = mix(col, vec3(0.5, 0.46, 0.42), (1.0 - ss(0.09, 0.115, mo)) * 0.18 * (0.6 + 0.8 * fbm(p * 14.0)) * fade);
  // foxes
  // the first fox's ink-wash phase is clamped: whatever the clock says (the cycle's first seconds, or the breath-out at its end), a silhouette layer is always there
  float a1 = max(ss(0.2, 3.2, ct), 0.82) * max(fade, 0.82), a2 = ss(4.0, 7.5, ct) * fade;
  vec2 f1 = vec2(-0.3 + 0.01 * sin(t * 0.3), -0.02);
  float s1 = 1.3;
  float d1 = sdFox((p - f1) / s1, t) * s1;
  col = mix(col, inkc, ink(d1, p, a1 * 1.1 - 0.3 * 0.0) * a1 * 0.92);
  vec2 f2 = vec2(0.1, 0.17); float s2 = 0.62;
  float d2 = sdFox(vec2(-(p.x - f2.x), p.y - f2.y) / s2, t + 2.0) * s2;
  col = mix(col, vec3(0.2, 0.18, 0.17), ink(d2, p + 3.0, a2) * a2 * 0.5);
  // mist band
  float mist = fbm(vec2(p.x * 2.0 + t * 0.03, p.y * 9.0)) * exp(-pow((p.y + 0.2) * 5.0, 2.0));
  col = mix(col, paper * 1.04, mist * 0.45);
  // calligraphy: two columns of five unreadable glyphs
  vec2 cell = vec2(floor((p.x - 0.44) / 0.12), floor((0.37 - p.y) / 0.125));
  if (cell.x >= 0.0 && cell.x < 2.0 && cell.y >= 0.0 && cell.y < 5.0) {
    vec2 cen = vec2(0.5 + 0.12 * cell.x, 0.3 - 0.125 * cell.y);
    vec2 l = (p - cen) / 0.05;
    float gi = cell.x * 5.0 + cell.y, ts = gi * 0.5 + 0.6, dm = 9.0;
    for (int k = 0; k < 4; k++) {
      float fk = float(k);
      float prog = clamp((ct - ts - fk * 0.32) / 0.4, 0.0, 1.0);
      vec2 ha = h22(vec2(gi * 3.1, fk * 1.7)), hb = h22(vec2(gi * 5.3 + 9.0, fk * 2.9));
      vec2 a = (ha - 0.5) * 1.5;
      vec2 b = a + (hb - 0.5) * 1.1 + (mod(fk, 2.0) < 0.5 ? vec2(0.8, 0.0) : vec2(0.0, -0.8));
      vec2 e = mix(a, b, prog);
      vec2 ba = e - a;
      float hh = clamp(dot(l - a, ba) / max(dot(ba, ba), 1e-4), 0.0, 1.0);
      float d = length(l - a - ba * hh) - (0.07 * (1.3 - 0.7 * hh)) * step(0.001, prog);
      dm = min(dm, d);
    }
    float st = (1.0 - ss(-0.006, 0.014, dm)) * (0.65 + 0.35 * vn(p * 300.0));
    col = mix(col, inkc, st * fade * 0.95);
  }
  // seal
  vec2 sq = p - vec2(0.62, -0.36);
  float seal = sdBox(sq, vec2(0.034)) - 0.004;
  float sa = ss(8.5, 9.2, ct) * fade;
  float notch = step(0.2, vn(sq * 140.0 + 4.0));
  col = mix(col, vec3(0.78, 0.2, 0.16) * (0.9 + 0.1 * vn(p * 90.0)), aa(seal, px) * sa * (0.55 + 0.45 * notch));
  col = mix(col, paper, aa(abs(sdBox(sq, vec2(0.02, 0.012))) - 0.003, px) * sa * 0.0);
  gl_FragColor = vec4(col, 1.0);
}`),ce=K(`studyloop`,`notebooklm-study-loop`,`Study Loop`,`Generative sources turning into cards on a spaced-review orbit`,{bg:`#0A0807`,ink:`#F4EBDD`,accent:`#F2B441`},`
float card(vec2 q, float s) { return sdBox(q, vec2(0.027, 0.018) * s) - 0.004 * s; }
void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y; float px = 1.0 / uRes.y;
  float t = mod(uTime, 3600.0) + uSeed * 2.0;
  vec3 amb = vec3(0.95, 0.72, 0.28), paperc = vec3(0.86, 0.9, 0.98);
  vec3 col = mix(vec3(0.02, 0.016, 0.014), vec3(0.075, 0.055, 0.04), 1.0 - ss(0.0, 0.9, length(p - vec2(0.14, 0.0))));
  vec2 C = vec2(0.14, 0.0), q = p - C;
  float r = length(q);
  float kf = clamp(floor((r - 0.115) / 0.085 + 0.5), 0.0, 3.0);
  float Rk = 0.115 + 0.085 * kf;
  float om = 1.1 / (1.0 + 1.5 * kf);
  col += amb * aa(abs(r - Rk) - px * 0.7, px) * 0.2;
  for (int i = 0; i < 4; i++) col += amb * aa(abs(r - (0.115 + 0.085 * float(i))) - px * 0.7, px) * 0.12;
  // ring cards
  for (int j = 0; j < 4; j++) {
    float a = om * t + float(j) * TAU / 4.0 + kf * 0.8;
    vec2 pos = Rk * vec2(cos(a), sin(a));
    vec2 l = rot(-(a + PI * 0.5)) * (q - pos);
    float d = card(l, 1.0);
    float k = kf / 3.0;
    vec3 cc = mix(vec3(1.0, 0.78, 0.3), vec3(0.72, 0.62, 0.55), k);
    col = mix(col, cc * (0.9 - 0.3 * k), aa(d, px));
    float ln = aa(abs(l.y) - 0.0016, px) * step(abs(l.x), 0.016) + aa(abs(l.y - 0.007) - 0.0014, px) * step(abs(l.x + 0.004), 0.012);
    col = mix(col, vec3(0.2, 0.12, 0.05), ln * aa(d + 0.004, px) * 0.6);
    col += cc * exp(-max(d, 0.0) * 40.0) * 0.12 * (1.0 - 0.5 * k);
  }
  // recalled card spiralling outward, with a trail
  float cyc = fract(t / 12.0);
  for (int i = 0; i < 12; i++) {
    float lag = float(i) * 0.12;
    float s = clamp(cyc - lag / 12.0, 0.0, 1.0);
    float rr = mix(0.115, 0.37, ss(0.0, 1.0, s));
    float a = PI - 4.0 * s * TAU * 0.5 - 0.4 * s * 6.0;
    vec2 pos = rr * vec2(cos(a), sin(a));
    float d = length(q - pos);
    float w = 1.0 - float(i) / 12.0;
    if (i == 0) {
      vec2 l = rot(-(a + PI * 0.5)) * (q - pos);
      float cd = card(l, 1.3);
      col = mix(col, vec3(1.0, 0.93, 0.7), aa(cd, px));
      col += amb * exp(-max(cd, 0.0) * 28.0) * 0.55;
    } else col += amb * aa(d - 0.0035 * w, px) * 0.5 * w;
  }
  // sources
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    vec2 sc = vec2(-0.66 + 0.012 * fi, (fi - 1.0) * 0.17);
    vec2 l = rot(0.05 * (fi - 1.0)) * (p - sc);
    float d = sdBox(l, vec2(0.05, 0.068)) - 0.004;
    col = mix(col, paperc * 0.78, aa(d, px));
    float lines = 0.0;
    for (int k = 0; k < 5; k++) lines += aa(abs(l.y - 0.045 + float(k) * 0.02) - 0.0017, px) * step(abs(l.x + 0.005 * float(k)), 0.034 - 0.003 * float(k));
    col = mix(col, vec3(0.2, 0.25, 0.35), lines * aa(d + 0.006, px) * 0.8);
    col += paperc * exp(-max(d, 0.0) * 30.0) * 0.07;
  }
  // stream: dots leave the sources and become cards at the first loop
  vec2 en = C + vec2(-0.115, 0.0);
  for (int i = 0; i < 9; i++) {
    float fi = float(i);
    float u = fract(t * 0.25 + fi / 9.0);
    vec2 a = vec2(-0.58, (mod(fi, 3.0) - 1.0) * 0.17);
    float bump = sin(u * PI) * (h11(fi + 1.0) - 0.5) * 0.1;
    vec2 pos = mix(a, en, ss(0.0, 1.0, u)) + vec2(0.0, bump);
    vec2 l = p - pos;
    float form = ss(0.55, 0.95, u);
    float d = mix(length(l) - 0.006, card(rot(0.0) * l, 0.85), form);
    vec3 cc = mix(paperc, vec3(1.0, 0.78, 0.3), form);
    col += cc * (aa(d, px) * 0.9 + exp(-max(d, 0.0) * 55.0) * 0.25) * ss(0.0, 0.06, u) * (1.0 - ss(0.96, 1.0, u));
  }
  col += amb * exp(-r * 22.0) * 0.1 * (0.7 + 0.3 * sin(t * 2.0));
  col *= 1.0 - 0.35 * dot(p, p);
  gl_FragColor = vec4(col, 1.0);
}`),X=e=>{let t=parseInt(e.replace(`#`,``),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255].map(e=>e.toFixed(4)).join(`, `)},le=e=>`precision highp float;
uniform float uTime; uniform vec2 uRes; uniform vec2 uMouse; uniform float uSeed; uniform float uIntensity;
const vec3 BG = vec3(${X(e.bg)});
const vec3 INK = vec3(${X(e.ink)});
const vec3 ACC = vec3(${X(e.accent)});
const float VAR = ${e.variant.toFixed(1)};
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * vn(p); p = p * 2.03 + vec2(7.1, 3.7); a *= 0.5; } return s; }
void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  vec2 m = (uMouse - 0.5) * vec2(uRes.x / uRes.y, 1.0);
  float t = uTime * 0.045 * (0.4 + 0.6 * uIntensity);
  vec2 q = p * 1.5 + uSeed * 9.0;
  float f = fbm(q + vec2(t, -0.7 * t) + 0.35 * fbm(q * 1.7 - t));
  float L;
  if (VAR < 0.5) L = f * 9.0;
  else if (VAR < 1.5) L = length(p - vec2(0.18 * sin(t * 3.0), 0.12 * cos(t * 2.3))) * 11.0 + f * 2.2;
  else if (VAR < 2.5) L = (p.y + (f - 0.5) * 0.9) * 12.0 + p.x * 1.2;
  else L = atan(p.y + 0.02, p.x - 0.1) * 5.0 + f * 3.0 + length(p) * 4.0;
  float d = abs(fract(L) - 0.5);
  float line = 1.0 - smoothstep(0.0, 0.07, d);
  float fine = 1.0 - smoothstep(0.0, 0.035, abs(fract(L * 4.0) - 0.5));
  float near = exp(-dot(p - m, p - m) * 5.0);
  vec3 c = BG + ACC * 0.05 * (1.0 - length(p) * 0.8);
  c = mix(c, ACC, line * (0.34 + 0.4 * near));
  c = mix(c, INK, fine * 0.05 + line * near * 0.26);
  c += ACC * near * 0.07;
  c *= 1.0 - smoothstep(0.55, 1.15, length(p * vec2(0.9, 1.1)));
  c += (h21(gl_FragCoord.xy + uTime) - 0.5) * 0.016;
  gl_FragColor = vec4(c, 1.0);
}`;function ue(e,t,n){let r={bg:`#07080A`,ink:`#F2EFE8`,variant:0,...n};return{id:`poster-${e}`,projectId:e,title:t,medium:`A quiet poster in the work's own colour: it has no generative reel`,colors:{bg:r.bg,ink:r.ink,accent:r.accent},frag:le(r)}}var de=t({CASE_REELS:()=>$,REELS:()=>Z,caseIndexFor:()=>he,reelFor:()=>fe}),Z=[r,i,te,ne,h,g,v,w,re,T,E,V,H,U,W,G].filter(Boolean);Z.length||Z.push(n);function fe(e){return Z.findIndex(t=>t.projectId===e)}var pe={skills:{accent:`#8FB8FF`,variant:0},"axe-os":{accent:`#B7A6FF`,variant:3},carta:{accent:`#D9B779`,variant:1},"finder-organizer":{accent:`#F2884A`,variant:2},"notebooklm-study-loop":{accent:`#F2B441`,variant:1},odyssey:{accent:`#D9A441`,variant:1},liaozhai:{accent:`#D2625A`,variant:3}},Q=[q,J,Y,ae,oe,se,ce],me=e.filter(e=>!Z.some(t=>t.projectId===e.id)&&!Q.some(t=>t.projectId===e.id)).map(e=>ue(e.id,e.name,pe[e.id]??{accent:`#EDE6D6`})),$=[...Z,...Q,...me];function he(e){return $.findIndex(t=>t.projectId===e)}export{Z as n,de as r,$ as t};