import{o as e,u as t}from"./projects-CnSkbXN_.js";import{B as n,G as r,Hn as i,I as a,It as o,Rt as s,Xn as c,br as l,c as u,h as d,jt as ee,q as te,s as ne,st as f,xr as p,yr as m,yt as h}from"./three.core-rbApIkjy.js";import{a as g,c as re,d as ie,f as ae,i as oe,l as se,s as ce,t as _,u as le}from"./brainColor-BA1k28w3.js";import{t as v}from"./data-B3Y__3jV.js";import{n as ue,t as y}from"./theme-B6hjuvG9.js";var b=`
varying vec3 vWorldPos;
varying vec3 vWorldNormal;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  #ifdef USE_INSTANCING
    wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
    vWorldNormal = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
  #else
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
  #endif
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,x=`
#ifdef HAS_ENV
  #define ENVMAP_TYPE_CUBE_UV
  #include <cube_uv_reflection_fragment>
  uniform sampler2D uEnv;
#endif
uniform vec3 uTint;
uniform vec3 uRim;
uniform vec3 uRimNight;
uniform vec3 uGlowColor;
uniform vec3 uLightDir;
uniform float uRimPower;
uniform float uBodyAlpha;
uniform float uRimAlpha;
uniform float uNight;
uniform float uLine;
uniform float uInner;
uniform float uHatch;
uniform float uCaustic;
uniform float uDpr;
uniform float uOpacity;
uniform vec4 uCaps[24];
// optional inner core (globe variant)
uniform vec3 uCoreCenter;
uniform float uCoreRadius;
uniform vec3 uCoreColor;
uniform float uCoreStrength;
varying vec3 vWorldPos;
varying vec3 vWorldNormal;

float aaLine(float v, float at, float widthPx) {
  float w = max(fwidth(v), 1e-5);
  return 1.0 - smoothstep(widthPx * 0.5 * w, (widthPx * 0.5 + 1.0) * w, abs(v - at));
}

void main() {
  // facing from geometry, not gl_FrontFacing: three flips the winding for BackSide materials
  vec3 Ng = normalize(vWorldNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);
  bool front = dot(Ng, V) >= 0.0;
  vec3 N = front ? Ng : -Ng;
  vec3 L = normalize(uLightDir);
  float ndv = clamp(dot(N, V), 0.0, 1.0);
  float f = 1.0 - ndv;
  float rim = pow(f, uRimPower);
  float night = uNight;

  // ---- capsule glow (both faces)
  float glow = 0.0;
  for (int i = 0; i < 24; i++) {
    vec4 c = uCaps[i];
    if (c.w <= 0.0) break;
    vec3 d = vWorldPos - c.xyz;
    glow += c.w * exp(-dot(d, d) / 0.018);
  }
  glow *= mix(1.0, 2.0, night);

  vec3 rimCol = mix(uRim, uRimNight, night);
  vec3 col;
  float a;
  float add; // 0 = ink over paper, 1 = pure light

  if (front) {
    // body + soft fresnel shading. The body thickens toward the rim (you look through more glass)
    col = uTint;
    a = uBodyAlpha * mix(1.0, 0.7, night) * (0.75 + 0.5 * smoothstep(0.0, 0.9, f));
    float soft = rim * uRimAlpha * mix(0.42, 0.35, night);
    col = mix(col, rimCol, clamp(soft / max(a + soft, 1e-4), 0.0, 1.0));
    a += soft;

    // hairline contour at the silhouette, inner wall contour
    float px = uLine * uDpr;
    float contour = aaLine(ndv, 0.0, px * 1.6) * mix(0.92, 0.55, night);
    float inner = uInner > 0.0 ? aaLine(ndv, uInner, px * 0.75) * mix(0.30, 0.22, night) : 0.0;

    // engraver's hatching on the shadow side, 45 deg in screen space
    float hatch = 0.0;
    if (uHatch > 0.0) {
      float shadow = smoothstep(-0.05, -0.8, dot(N, L));
      float m = shadow * smoothstep(0.25, 0.85, f) * uHatch * (1.0 - night * 0.6);
      float cell = 5.0 * uDpr;
      float u = (gl_FragCoord.x + gl_FragCoord.y) / cell;
      float dist = abs(fract(u) - 0.5) * cell;          // px from the stroke centre
      float halfW = m * 0.5 * cell * 0.62;
      float fw = 0.75;
      hatch = (1.0 - smoothstep(halfW - fw, halfW + fw, dist)) * smoothstep(0.02, 0.3, m) * 0.55;
    }
    float ink = max(max(contour, inner), hatch);
    col = mix(col, rimCol, ink);
    a = max(a, ink);

    // reflections: a hard key highlight plus a softbox window
    vec3 R = reflect(-V, N);
    float key = max(dot(reflect(-L, N), V), 0.0);
    float spec = smoothstep(0.9955, 0.9975, key) + pow(key, 260.0) * 0.35;
    vec3 wdir = normalize(vec3(-0.78, 0.55, 0.22));
    vec3 wx = normalize(cross(vec3(0.0, 1.0, 0.0), wdir));
    vec3 wy = cross(wdir, wx);
    float rd = dot(R, wdir);
    vec2 wp = vec2(dot(R, wx), dot(R, wy)) / max(rd, 1e-3);
    vec2 box = abs(wp) - vec2(0.36, 0.2);
    float wd = max(box.x, box.y);
    float windowHi = (1.0 - smoothstep(-0.012, 0.012, wd)) * step(0.0, rd) * (1.0 - smoothstep(0.94, 0.995, f));
    // two upright mullions: three tall panes of a studio window, drawn by hand
    float bar = 1.0 - smoothstep(0.016, 0.03, abs(abs(wp.x) - 0.12));
    windowHi *= 1.0 - bar * 0.92;
    // reflected light: a thin bright arc just inside the contour on the shadow side
    float shadowSide = smoothstep(0.1, -0.6, dot(Ng, L));
    float bounce = aaLine(ndv, 0.075, uLine * uDpr * 2.2) * shadowSide * 0.85;
    float hi = clamp(spec + windowHi * mix(0.9, 0.75, night) + bounce, 0.0, 1.0);

    #ifdef HAS_ENV
      // studio env only brightens the fresnel band: glass on paper must stay clear
      vec3 env = min(textureCubeUV(uEnv, R, 0.12).rgb, vec3(1.6));
      float envL = dot(env, vec3(0.2126, 0.7152, 0.0722));
      float envAmt = rim * mix(0.22, 0.5, night) * smoothstep(0.35, 1.2, envL);
      col = mix(col, vec3(1.0), clamp(envAmt, 0.0, 1.0));
      a = max(a, envAmt * 0.6);
    #endif

    col = mix(col, vec3(1.0), hi);
    a = max(a, hi);

    // optional vermilion core seen through the wall
    if (uCoreStrength > 0.0) {
      vec3 rdv = -V;
      vec3 oc = uCoreCenter - cameraPosition;
      float tca = dot(oc, rdv);
      float d2 = max(dot(oc, oc) - tca * tca, 0.0);
      float core = smoothstep(uCoreRadius, 0.0, sqrt(d2));
      core = core * core * uCoreStrength;
      col = mix(col, uCoreColor * mix(1.0, 1.6, night), clamp(core * (1.0 - hi), 0.0, 1.0) * mix(0.5, 0.8, night));
      a = max(a, core * mix(0.18, 0.2, night));
    }
    add = mix(0.0, 0.55, night);
  } else {
    // far wall: almost nothing, plus the caustic crescent opposite the light
    col = uTint;
    a = uBodyAlpha * 0.35;
    float cz = pow(max(dot(Ng, -L), 0.0), 2.5) * smoothstep(0.25, 0.85, f);
    float caus = cz * uCaustic;
    col = mix(col, vec3(1.0), clamp(caus * 1.4, 0.0, 1.0));
    a = max(a, caus * 0.85);
    float back = pow(f, 4.0) * uRimAlpha * 0.25;
    col = mix(col, rimCol, back / max(a + back, 1e-4));
    a += back;
    add = mix(0.0, 0.8, night);
  }

  col += glow * uGlowColor;
  a += glow * 0.6;
  a = clamp(a * uOpacity, 0.0, 1.0);
  vec3 enc = linearToOutputTexel(vec4(max(col, 0.0), 1.0)).rgb;
  gl_FragColor = vec4(enc * a, a * (1.0 - add));
}`;function S(e){let t=e.image?.height;if(!t)return null;let n=Math.log2(t)-2;return{HAS_ENV:``,CUBEUV_TEXEL_WIDTH:String(1/(3*Math.max(2**n,112))),CUBEUV_TEXEL_HEIGHT:String(1/t),CUBEUV_MAX_MIP:n.toFixed(1)}}function de(e){let t=Array.from({length:24},()=>new p(0,0,0,0)),n=new d(e.rim),r=e.envMap??null,a=r?S(r)??{}:{},o=new i({name:`TechnicalGlass`,defines:a,uniforms:{uTint:{value:new d(e.tint)},uRim:{value:n},uRimNight:{value:new d(`#ECEAE3`)},uGlowColor:{value:new d(e.glowColor??`#FFF4E0`)},uLightDir:{value:new l(-3,4,5).normalize()},uRimPower:{value:e.rimPower??3},uBodyAlpha:{value:e.bodyAlpha??.1},uRimAlpha:{value:e.rimAlpha??.55},uNight:{value:0},uLine:{value:e.line??1},uInner:{value:e.innerLine??.22},uHatch:{value:e.hatch??0},uCaustic:{value:e.caustic??0},uDpr:{value:e.dpr??Math.min(window.devicePixelRatio||1,2)},uOpacity:{value:1},uCaps:{value:t},uEnv:{value:r},uCoreCenter:{value:new l},uCoreRadius:{value:.3},uCoreColor:{value:new d(`#E0442B`)},uCoreStrength:{value:0}},vertexShader:b,fragmentShader:x,transparent:!0,depthWrite:!1,side:e.side??0,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205,toneMapped:!1});return o.setNight=e=>{o.uniforms.uNight.value=+!!e},o.setGlow=e=>{for(let n=0;n<24;n++){let r=n*4;r+3<e.length?t[n].set(e[r],e[r+1],e[r+2],e[r+3]):t[n].set(0,0,0,0)}},o}var C=`

uniform vec4 uPulseT;
uniform vec4 uPulseA;
float pulseAt(vec4 hop) {
  float p = 0.0;
  for (int k = 0; k < 4; k++) {
    float h = hop[k];
    float t = uPulseT[k];
    float front = exp(-pow(h - t, 2.0) * 2.0);
    float tail = h < t ? exp(-(t - h) * 0.75) * 0.42 : 0.0;
    p = max(p, (front + tail) * uPulseA[k]);
  }
  return clamp(p, 0.0, 1.0);
}
${_}
uniform float uGroupAlpha[10];
uniform vec3 uGroupColor[10];
uniform vec2 uMode;
uniform float uSweep;
uniform float uTime;
uniform float uCenterZ;
uniform float uFocus;
uniform float uK;
attribute vec4 aHop;
attribute float aGroup;
attribute float aHeat;
attribute float aZn;
attribute float aPh;
float isFocus() { return uFocus >= 0.0 && abs(aGroup - uFocus) < 0.5 ? 1.0 : 0.0; }
float depthFade(vec4 mv) { return mix(0.45, 1.0, smoothstep(-0.55, 0.45, (mv.z - uCenterZ) / uK)); }
`,fe={transparent:!0,depthWrite:!1,depthTest:!0,toneMapped:!1,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205},pe=e=>({uPulseT:{value:new p},uPulseA:{value:new p},uGroupAlpha:{value:Array(10).fill(1)},uGroupColor:{value:Array.from({length:10},()=>new d(`#9aa3a8`))},uMode:{value:new m(0,0)},uSweep:{value:2},uTime:{value:0},uCenterZ:{value:-3},uFocus:{value:-1},uK:{value:1},uDpr:{value:e},uScale:{value:4.4},uPulseCol:{value:new d(1,.94,.84)}}),me=`
vec4 premul(vec3 lin, float a, float add) {
  vec3 enc = linearToOutputTexel(vec4(max(lin, 0.0), 1.0)).rgb;
  return vec4(enc * a, a * (1.0 - add));
}`;function he(e){return new i({name:`BrainEtchNodes`,uniforms:pe(e),...fe,vertexShader:`
      ${C}
      uniform float uDpr; uniform float uScale;
      attribute float aDegree;
      varying float vP; varying float vA; varying float vHub; varying float vSize; varying vec3 vC;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        float p = pulseAt(aHop);
        vP = p;
        float g = uGroupAlpha[int(aGroup + 0.5)];
        vec3 fc = uGroupColor[int(aGroup + 0.5)];
        float wave = 0.5 + 0.5 * sin(uTime * 1.3 + aPh * 40.0);
        vC = bc(uMode, uSweep, fc, aHeat, aZn, aPh, pow(wave, 6.0) * 0.6, uTime);
        vA = g * depthFade(mv);
        vHub = smoothstep(14.0, 30.0, aDegree);
        float s = (1.5 + 1.1 * sqrt(aDegree)) * uDpr * uScale / -mv.z;
        s *= (1.0 + p * 0.55) * (1.0 + 0.35 * isFocus());
        vA *= 1.0 + 0.25 * isFocus();
        vSize = s;
        gl_PointSize = clamp(s, 1.0, 64.0);
      }`,fragmentShader:`
      ${me}
      uniform vec3 uPulseCol;
      varying float vP; varying float vA; varying float vHub; varying float vSize; varying vec3 vC;
      void main() {
        vec2 q = gl_PointCoord - 0.5;
        float r = length(q);
        float aa = 1.2 / max(vSize, 1.0);
        float disc = 1.0 - smoothstep(0.42 - aa, 0.42 + aa * 0.5, r);
        float ring = (1.0 - smoothstep(0.46 - aa, 0.46, r)) * smoothstep(0.30, 0.30 + aa * 1.5, r);
        float dot_ = 1.0 - smoothstep(0.17, 0.17 + aa * 1.5, r);
        float shape = mix(disc, max(ring, dot_), vHub);
        if (shape < 0.01) discard;
        vec3 col = mix(vC, uPulseCol, vP * 0.85) * 1.2;
        float a = shape * vA * mix(0.78, 1.0, vP);
        gl_FragColor = premul(col, a, 0.7);
      }`})}function ge(e){return new i({name:`BrainEtchLinks`,uniforms:pe(e),...fe,vertexShader:`
      ${C}
      attribute float aGroupB;
      attribute float aS;
      varying float vA; varying vec3 vC; varying float vP;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        vP = pulseAt(aHop);
        vec3 fc = mix(uGroupColor[int(aGroup + 0.5)], uGroupColor[int(aGroupB + 0.5)], aS);
        float ga = mix(uGroupAlpha[int(aGroup + 0.5)], uGroupAlpha[int(aGroupB + 0.5)], aS);
        float w = bc_wave(aS, aPh, uTime);
        vC = bc(uMode, uSweep, fc, aHeat, aZn, aPh, w, uTime);
        vA = ga * depthFade(mv) * (0.5 + 1.3 * w);
      }`,fragmentShader:`
      ${me}
      uniform vec3 uPulseCol;
      varying float vA; varying vec3 vC; varying float vP;
      void main() {
        vec3 col = mix(vC, uPulseCol, vP * 0.85);
        float a = vA * (0.15 + 0.7 * vP);
        gl_FragColor = premul(col, a, 0.85);
      }`})}function _e(e){let t=e.image?.height;if(!t)return null;let n=Math.log2(t)-2;return{HAS_ENV:``,CUBEUV_TEXEL_WIDTH:String(1/(3*Math.max(2**n,112))),CUBEUV_TEXEL_HEIGHT:String(1/t),CUBEUV_MAX_MIP:n.toFixed(1)}}function ve(e,t,n){let r=n?_e(n):null,a=new i({name:e===1?`BrainShellBack`:`BrainShellFront`,defines:r??{},uniforms:{uMode:{value:new m(0,0)},uSweep:{value:2},uTime:{value:0},uRegionCol:{value:Array.from({length:9},()=>new d(`#9aa3a8`))},uRegionHeat:{value:Array(9).fill(.5)},uOpacity:{value:1},uDpr:{value:t},uEnv:{value:n},uLightDir:{value:new l(-.45,.7,.55).normalize()},uPulse:{value:0},uCenter:{value:new l}},vertexShader:`
      attribute float aFold; attribute float aRegion; attribute float aZn;
      varying vec3 vWorldPos; varying vec3 vWorldNormal; varying float vFold; varying float vRegion; varying float vZn;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz; vWorldNormal = normalize(mat3(modelMatrix) * normal);
        vFold = aFold; vRegion = aRegion; vZn = aZn;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,fragmentShader:`
      #ifdef HAS_ENV
        #define ENVMAP_TYPE_CUBE_UV
        #include <cube_uv_reflection_fragment>
        uniform sampler2D uEnv;
      #endif
      ${_}
      ${me}
      uniform vec2 uMode; uniform float uSweep; uniform float uTime;
      uniform vec3 uRegionCol[9]; uniform float uRegionHeat[9];
      uniform float uOpacity; uniform float uPulse;
      uniform vec3 uLightDir; uniform vec3 uCenter;
      varying vec3 vWorldPos; varying vec3 vWorldNormal; varying float vFold; varying float vRegion; varying float vZn;
      void main() {
        vec3 Ng = normalize(vWorldNormal);
        vec3 V = normalize(cameraPosition - vWorldPos);
        bool front = dot(Ng, V) >= 0.0;
        vec3 N = front ? Ng : -Ng;
        float ndv = clamp(dot(N, V), 0.0, 1.0);
        float f = 1.0 - ndv;
        int ri = int(vRegion + 0.5);
        vec3 rc = uRegionCol[ri]; float rh = uRegionHeat[ri];
        vec3 mc = bc(uMode, uSweep, rc, rh, vZn, 0.0, 0.0, uTime);
        float fold = vFold;
        vec3 col; float a; float add;
        if (front) {
          float fres = pow(f, 2.3);
          vec3 film = 0.5 + 0.5 * cos(6.28318 * (ndv * 1.5 + vec3(0.0, 0.33, 0.67) + vZn * 0.35 + uTime * 0.015));
          col = mix(mc * 0.55, film, 0.18 + 0.4 * fres);
          a = 0.035 + 0.55 * fres;
          // the folds catch light: bright creases, strongest toward the rim
          float crease = fold * (0.35 + 0.65 * smoothstep(0.0, 0.8, f));
          col = mix(col, mc * 1.5 + 0.12, crease * 0.75);
          a += 0.3 * crease + 0.05 * fold;
          // key light and a soft window highlight
          vec3 L = normalize(uLightDir);
          vec3 R = reflect(-V, N);
          float spec = pow(max(dot(reflect(-L, N), V), 0.0), 60.0);
          col += vec3(1.0, 0.97, 0.92) * spec * 0.9 * (1.0 - 0.6 * fold);
          a += spec * 0.5;
          #ifdef HAS_ENV
            vec3 env = min(textureCubeUV(uEnv, R, 0.2).rgb, vec3(1.6));
            float envL = dot(env, vec3(0.2126, 0.7152, 0.0722));
            float envAmt = fres * 0.55 * smoothstep(0.25, 1.1, envL);
            col = mix(col, vec3(1.0), clamp(envAmt, 0.0, 1.0));
            a = max(a, envAmt * 0.5);
          #endif
          col += mc * uPulse * 0.5; a += uPulse * 0.1;
          add = 0.72;
        } else {
          // far wall seen through the glass: just the creases, faint
          col = mc * 0.7;
          a = 0.012 + 0.09 * fold + 0.03 * pow(f, 3.0);
          add = 0.85;
        }
        a = clamp(a * uOpacity, 0.0, 1.0);
        gl_FragColor = premul(col, a, add);
      }`,...fe});return a.side=e,a.setRegionColors=(e,t)=>{a.uniforms.uRegionCol.value=e,a.uniforms.uRegionHeat.value=t},a}var w=t({createBrain:()=>k}),ye=4,T=10,be=e=>{let t=Math.sin(e*127.1+311.7)*43758.5453;return t-Math.floor(t)},E=e=>new d(e),D=`
uniform vec4 uPulseT;
uniform vec4 uPulseA;
uniform float uGroupAlpha[${T}];
uniform float uSpread;
uniform float uNight;
uniform float uCenterZ;
uniform float uFocus;
uniform float uK;
uniform vec3 uGroupColor[${T}];
attribute vec4 aHop;
attribute float aGroup;
float pulseAt(vec4 hop) {
  float p = 0.0;
  for (int k = 0; k < ${ye}; k++) {
    float h = hop[k];
    float t = uPulseT[k];
    float front = exp(-pow(h - t, 2.0) * 2.0);
    float tail = h < t ? exp(-(t - h) * 0.75) * 0.42 : 0.0;
    p = max(p, (front + tail) * uPulseA[k]);
  }
  return clamp(p, 0.0, 1.0);
}
vec3 strata(vec3 p) { return vec3(p.xy, p.z * uSpread); }
float isFocus() { return uFocus >= 0.0 && abs(aGroup - uFocus) < 0.5 ? 1.0 : 0.0; }
float depthFade(vec4 mv) { return mix(0.5, 1.0, smoothstep(-0.42, 0.36, (mv.z - uCenterZ) / uK)); }
`,O=`
uniform float uFolderK;
varying vec3 vGC;
uniform vec3 uEtch;
uniform vec3 uEtchNight;
uniform vec3 uBrain;
uniform float uNight;
vec4 premul(vec3 lin, float a, float add) {
  vec3 enc = linearToOutputTexel(vec4(max(lin, 0.0), 1.0)).rgb;
  return vec4(enc * a, a * (1.0 - add));
}
`;function xe(e,t){let n={uPulseT:{value:new p},uPulseA:{value:new p},uGroupAlpha:{value:Array(T).fill(1)},uSpread:{value:1},uNight:{value:0},uCenterZ:{value:-3},uEtch:{value:E(y.ink)},uEtchNight:{value:E(`#FFFFFF`)},uBrain:{value:E(y.brain)},uDpr:{value:t},uScale:{value:4.4},uRing:{value:.2},uFocus:{value:-1},uK:{value:1},uFolderK:{value:0},uGroupColor:{value:Array.from({length:T},()=>new d(`#9aa3a8`))}},r=e===`points`?`
    ${D}
    uniform float uDpr;
    uniform float uScale;
    attribute float aDegree;
    varying float vP;
    varying float vA;
    varying float vHub;
    varying float vSize;
    varying vec3 vGC;
    void main() {
      vec4 mv = modelViewMatrix * vec4(strata(position), 1.0);
      gl_Position = projectionMatrix * mv;
      float p = pulseAt(aHop);
      vP = p;
      vGC = uGroupColor[int(aGroup + 0.5)];
      float g = uGroupAlpha[int(aGroup + 0.5)];
      vA = g * depthFade(mv);
      vHub = smoothstep(14.0, 30.0, aDegree);
      float s = (1.5 + 1.1 * sqrt(aDegree)) * uDpr * uScale / -mv.z;
      s *= (1.0 + p * 0.55) * (1.0 + 0.35 * isFocus());
      vA *= 1.0 + 0.25 * isFocus();
      vSize = s;
      gl_PointSize = clamp(s, 1.0, 64.0);
    }`:`
    ${D}
    uniform float uRing;
    attribute float aKind;
    varying float vP;
    varying float vA;
    varying vec3 vGC;
    void main() {
      vec4 mv = modelViewMatrix * vec4(strata(position), 1.0);
      gl_Position = projectionMatrix * mv;
      vP = pulseAt(aHop);
      vGC = uGroupColor[int(aGroup + 0.5)];
      vA = uGroupAlpha[int(aGroup + 0.5)] * depthFade(mv) * mix(1.0 + 1.6 * isFocus(), uRing, aKind);
    }`,a=e===`points`?`
    ${O}
    varying float vP;
    varying float vA;
    varying float vHub;
    varying float vSize;
    void main() {
      vec2 q = gl_PointCoord - 0.5;
      float r = length(q);
      float aa = 1.2 / max(vSize, 1.0);
      float disc = 1.0 - smoothstep(0.42 - aa, 0.42 + aa * 0.5, r);
      // hubs are drawn as a technical node symbol: open ring with a centre dot
      float ring = (1.0 - smoothstep(0.46 - aa, 0.46, r)) * smoothstep(0.30, 0.30 + aa * 1.5, r);
      float dot_ = 1.0 - smoothstep(0.17, 0.17 + aa * 1.5, r);
      float shape = mix(disc, max(ring, dot_), vHub);
      if (shape < 0.01) discard;
      vec3 base = mix(mix(uEtch, uEtchNight, uNight), vGC, uFolderK);
      vec3 col = mix(base, uBrain, vP);
      float a = shape * vA * mix(mix(0.92, 0.7, uNight), 1.0, vP);
      // night: the etch is light in the crystal
      gl_FragColor = premul(col * mix(1.0, 1.25, uNight), a, uNight);
    }`:`
    ${O}
    varying float vP;
    varying float vA;
    void main() {
      vec3 base = mix(mix(uEtch, uEtchNight, uNight), vGC, uFolderK);
      vec3 col = mix(base, uBrain, vP);
      float a = vA * (mix(0.13, 0.10, uNight) + 0.55 * vP);
      gl_FragColor = premul(col, a, uNight);
    }`;return new i({name:e===`points`?`EtchPoints`:`EtchLines`,uniforms:n,vertexShader:r,fragmentShader:a,transparent:!0,depthWrite:!1,depthTest:!0,toneMapped:!1,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205})}function Se(e){return new i({name:`BrainHalos`,uniforms:{uNight:{value:0},uDpr:{value:e},uBrain:{value:E(y.brain)},uBrainNight:{value:E(ue.brain)},uHot:{value:E(`#FFE3C8`)},uCore:{value:1},uRings:{value:[0,0,0,0]},uTime:{value:0}},vertexShader:`
      attribute float aKind;
      attribute float aSize;
      varying vec2 vUv;
      varying float vKind;
      void main() {
        vUv = position.xy * 2.0;             // -1..1
        vKind = aKind;
        vec4 c = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        c.xy += position.xy * aSize;
        c.z += 0.02;                         // keep the heart in front of the etch plane
        gl_Position = projectionMatrix * c;
      }`,fragmentShader:`
      uniform float uNight;
      uniform float uDpr;
      uniform vec3 uBrain;
      uniform vec3 uBrainNight;
      uniform vec3 uHot;
      uniform float uCore;
      uniform float uRings[4];
      uniform float uTime;
      varying vec2 vUv;
      varying float vKind;
      vec4 premul(vec3 lin, float a, float add) {
        vec3 enc = linearToOutputTexel(vec4(max(lin, 0.0), 1.0)).rgb;
        return vec4(enc * a, a * (1.0 - add));
      }
      // 45 deg halftone screen in device px, dot radius from coverage
      float screen(float cov, float cellPx) {
        float cell = cellPx * uDpr;
        vec2 p = gl_FragCoord.xy;
        vec2 r = vec2(p.x + p.y, p.x - p.y) * 0.70710678 / cell;
        vec2 g = (fract(r) - 0.5) * cell;
        float d = length(g);
        float rad = sqrt(clamp(cov, 0.0, 1.0)) * 0.62 * cell;
        return (1.0 - smoothstep(rad - 0.7, rad + 0.7, d)) * smoothstep(0.0, 0.06, cov);
      }
      void main() {
        float r = length(vUv);
        if (r > 1.0) discard;
        vec3 brain = mix(uBrain, uBrainNight, uNight);
        int k = int(vKind + 0.5);
        if (k == 0) {
          // the heart: a small vermilion sphere drawn like a technical illustration (flat shade,
          // crisp edge, one highlight), with a print-dot corona by day and real light by night
          float R0 = 0.2;
          float edge = fwidth(r) * 1.2;
          float heart = 1.0 - smoothstep(R0 - edge, R0, r);
          vec2 q = vUv / R0;
          float z = sqrt(max(1.0 - dot(q, q), 0.0));
          vec3 n = vec3(q, z);
          float lam = clamp(dot(n, normalize(vec3(-0.45, 0.55, 0.7))), 0.0, 1.0);
          float spot = smoothstep(0.93, 0.97, dot(n, normalize(vec3(-0.5, 0.55, 0.67))));
          vec3 deep = brain * vec3(0.55, 0.42, 0.40);
          vec3 shaded = mix(deep, brain, smoothstep(0.05, 0.75, lam));
          shaded = mix(shaded, vec3(1.0), spot * 0.9);
          float corona = 1.0 - smoothstep(R0 * 1.05, 0.62, r);
          corona = corona * corona * (0.5 + 0.5 * uCore);
          float dots = screen(corona * 0.85, 3.6) * step(R0 + edge, r);
          vec3 dayCol = mix(brain, shaded, heart);
          float dayA = max(heart, dots * 0.95);
          float hot = exp(-r * r * 60.0);
          vec3 nightCol = mix(brain, uHot, clamp(hot * 1.6, 0.0, 1.0));
          float glowS = exp(-r * r * 10.0) * uCore;
          float nightA = clamp(heart + glowS * 0.85, 0.0, 1.0);
          vec3 col = mix(dayCol, nightCol, uNight);
          float a = mix(dayA, nightA, uNight);
          gl_FragColor = premul(col, a, uNight * 0.85 * (1.0 - heart * 0.4));
        } else if (k == 1) {
          // wide soft glow, mostly a night thing; by day a whisper of warm dots
          float g = exp(-r * r * 4.0) * (0.35 + 0.65 * uCore);
          float dayA = screen(g * 0.13 * smoothstep(0.3, 0.55, r), 4.5) * 0.45;
          float nightA = g * 0.32;
          float a = mix(dayA, nightA, uNight);
          gl_FragColor = premul(brain, a, uNight);
        } else {
          float ph = uRings[k - 2];
          if (ph <= 0.0) discard;
          float rr = ph;                      // ring radius in billboard units
          float w = 0.035 + 0.06 * ph;
          float ring = exp(-pow((r - rr) / w, 2.0)) * (1.0 - ph) * 1.2;
          float fill = (1.0 - smoothstep(0.0, 0.18, r)) * (1.0 - ph);
          float a = clamp(ring + fill * 0.8, 0.0, 1.0);
          gl_FragColor = premul(brain, a * mix(0.9, 1.0, uNight), uNight);
        }
      }`,transparent:!0,depthWrite:!1,depthTest:!0,toneMapped:!1,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205})}function k(t={}){let i=t.radius??.62,p=!!t.anatomical,m=i/.62,_=Math.min(window.devicePixelRatio||1,2),b=new n;b.name=`brain`;let x=new n;x.name=`brain-turn`,b.add(x);let S=v.nodes,C=S.length,fe=S.map(e=>Math.hypot(e[0],e[1])).sort((e,t)=>e-t),pe=fe[Math.floor(fe.length*.9)]||1,me=.5*m,_e=e=>{let t=e/pe;return t<=.82?t*.78:.6396+(1-.6396)*Math.tanh((t-.82)*.78/(1-.6396))},w=new Float32Array(C*3),D=new Float32Array(C),O=new Float32Array(C);for(let e=0;e<C;e++){let[t,n,r,i]=S[e],a=Math.hypot(t,n),o=a>1e-6?_e(a)*me/a:0;w[e*3]=t*o,w[e*3+1]=n*o,w[e*3+2]=((r-4.5)*.06+(be(e)-.5)*.015)*m,D[e]=i,O[e]=r}let k=i*1.06,A=new Float32Array;if(p){A=se(S,v.groups);let e=[0,0,0];for(let t=0;t<C;t++)ae(A[t*3],A[t*3+1],A[t*3+2],e),w[t*3]=e[0]*k,w[t*3+1]=e[1]*k,w[t*3+2]=e[2]*k}let j=2.2,Ce=.575*m;for(let e=0;e<C;e++){let t=w[e*3]**2+w[e*3+1]**2,n=Math.abs(w[e*3+2]);if(n<1e-4)continue;let r=Math.sqrt(Math.max(Ce*Ce-t,0))/n;j=Math.min(j,r)}j=p?1:Math.max(1,j);let we=Array.from({length:C},()=>[]);for(let[e,t]of v.links)we[e].push(t),we[t].push(e);let Te=0;for(let e=1;e<C;e++)D[e]>D[Te]&&(Te=e);let Ee=Array(T).fill(-1);for(let e=0;e<C;e++){let t=O[e];(Ee[t]<0||D[e]>D[Ee[t]])&&(Ee[t]=e)}let De=v.stats?.folders??{},Oe=v.groups.map(e=>({name:e===`other`?`Root`:e,count:Number(De[e]??0)})),M=p?new u:new c(i,96,64),ke={tint:y.glassTint,rim:y.ink,rimPower:2.2,bodyAlpha:.42,rimAlpha:.55,envMap:t.envMap??null,glowColor:`#FFF1E6`,innerLine:.16,hatch:1,caustic:1,dpr:_},N=p?ve(1,_,t.envMap??null):de({...ke,side:1}),P=p?ve(0,_,t.envMap??null):de({...ke,side:0});if(!p)for(let e of[P])e.uniforms.uCoreStrength.value=1,e.uniforms.uCoreRadius.value=.26*m,e.uniforms.uCoreColor.value=E(y.brain);let Ae=new h(M,N);Ae.renderOrder=10,Ae.name=`brain-glass-back`;let je=new h(M,P);je.renderOrder=40,je.name=`brain-glass-front`,b.add(Ae,je);let Me=!1,Ne=Math.max(...Array.from(D),1),Pe=e=>(e/Ne)**.42;if(p){let e=t.folderColors??oe,n=re.map(()=>new d(`#9aa3a8`)),r=re.map(()=>.4),i=Array(re.length).fill(-1);v.groups.forEach((t,a)=>{let o=ce[t],s=Oe[a]?.count??0;if(o==null||s<=i[o])return;i[o]=s,n[o]=new d(e[t]??e.other??`#9aa3a8`);let c=0,l=0;for(let e=0;e<C;e++)O[e]===a&&(c+=Pe(D[e]),l++);r[o]=l?Math.min(1,c/l*1.5):.3}),P.setRegionColors(n,r),N.setRegionColors(n,r),ie().then(e=>{if(Me)return;let t=e.pos.length/3,n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t),o=[0,0,0];for(let a=0;a<t;a++)ae(e.pos[a*3],e.pos[a*3+1],e.pos[a*3+2],o),n[a*3]=o[0]*k,n[a*3+1]=o[1]*k,n[a*3+2]=o[2]*k,ae(e.nrm[a*3],e.nrm[a*3+1],e.nrm[a*3+2],o),r[a*3]=o[0],r[a*3+1]=o[1],r[a*3+2]=o[2],i[a]=e.pos[a*3+2]*.5+.5;M.setAttribute(`position`,new a(n,3)),M.setAttribute(`normal`,new a(r,3)),M.setAttribute(`aFold`,new a(e.fold,1)),M.setAttribute(`aRegion`,new a(Float32Array.from(e.region),1)),M.setAttribute(`aZn`,new a(i,1)),M.setIndex(new ne(e.idx,1)),M.computeBoundingSphere()})}let Fe=new Float32Array(C*4).fill(1e3),F=new u;F.setAttribute(`position`,new a(w,3)),F.setAttribute(`aDegree`,new a(D,1)),F.setAttribute(`aGroup`,new a(O,1));let Ie=new ne(Fe,4);F.setAttribute(`aHop`,Ie),p?(F.setAttribute(`aHeat`,new a(Float32Array.from(D,Pe),1)),F.setAttribute(`aZn`,new a(Float32Array.from({length:C},(e,t)=>A[t*3+2]*.5+.5),1)),F.setAttribute(`aPh`,new a(Float32Array.from({length:C},(e,t)=>be(t+.5)),1))):F.boundingSphere=M.boundingSphere?.clone()??null;let I=p?he(_):xe(`points`,_),L=new s(F,I);L.renderOrder=30,L.name=`brain-etch-nodes`,L.frustumCulled=!1;let Le=v.links.length,Re=p?[]:Oe.map((e,t)=>e.count>0?t:-1).filter(e=>e>=0),ze=Re.length*120*2,R=p?Le*8*2:Le*2+ze,z=new Float32Array(R*3),B=new Float32Array(R),Be=new Float32Array(p?0:R),Ve=new Float32Array(R*4).fill(1e3),V=new u;if(p){let e=new Float32Array(R),t=new Float32Array(R),n=new Float32Array(R),r=new Float32Array(R),i=new Float32Array(R),o=[0,0,0];v.links.forEach(([a,s],c)=>{let l=[A[a*3],A[a*3+1],A[a*3+2]],u=[A[s*3],A[s*3+1],A[s*3+2]],d=le(l,u,O[a]!==O[s],be(c*1.7+.2)),ee=be(c+.31),te=Pe(D[a]),ne=Pe(D[s]);for(let f=0;f<8;f++)for(let p=0;p<2;p++){let m=(f+p)/8,h=1-m,g=(c*8+f)*2+p,re=h*h*l[0]+2*h*m*d[0]+m*m*u[0],ie=h*h*l[1]+2*h*m*d[1]+m*m*u[1],oe=h*h*l[2]+2*h*m*d[2]+m*m*u[2];ae(re,ie,oe,o),z[g*3]=o[0]*k,z[g*3+1]=o[1]*k,z[g*3+2]=o[2]*k,B[g]=O[a],e[g]=O[s],t[g]=m,n[g]=te+(ne-te)*m,r[g]=oe*.5+.5,i[g]=ee}}),V.setAttribute(`position`,new a(z,3)),V.setAttribute(`aGroup`,new a(B,1)),V.setAttribute(`aGroupB`,new a(e,1)),V.setAttribute(`aS`,new a(t,1)),V.setAttribute(`aHeat`,new a(n,1)),V.setAttribute(`aZn`,new a(r,1)),V.setAttribute(`aPh`,new a(i,1))}else{v.links.forEach(([e,t],n)=>{z.set(w.subarray(e*3,e*3+3),n*6),z.set(w.subarray(t*3,t*3+3),n*6+3),B[n*2]=O[e],B[n*2+1]=O[t]});let e=me*1.04,t=Le*2;for(let n of Re){let r=(n-4.5)*.06*m;for(let i=0;i<120;i++)for(let a of[i,i+1]){let i=a/120*Math.PI*2;z[t*3]=Math.cos(i)*e,z[t*3+1]=Math.sin(i)*e,z[t*3+2]=r,B[t]=n,Be[t]=1,t++}}V.setAttribute(`position`,new a(z,3)),V.setAttribute(`aGroup`,new a(B,1)),V.setAttribute(`aKind`,new a(Be,1))}let He=new ne(Ve,4);V.setAttribute(`aHop`,He);let H=p?ge(_):xe(`lines`,_);if(t.worldScale||p){for(let e of[I,H])e.uniforms.uK.value=m;I.uniforms.uScale.value=4.4*m}if(t.folderColors){let e=t.folderColors,n=v.groups.map(t=>new d(e[t]??e.other??`#9aa3a8`));for(let e of[I,H])e.uniforms.uGroupColor.value=n,p||(e.uniforms.uFolderK.value=1)}let U=new f(V,H);U.renderOrder=20,U.name=`brain-etch-links`,U.frustumCulled=!1,x.add(U,L);let Ue=new o(1,1),We=new Float32Array(6),Ge=new Float32Array(6);We[0]=0,Ge[0]=.5*m,We[1]=1,Ge[1]=1.5*m;for(let e=0;e<ye;e++)We[2+e]=2+e,Ge[2+e]=.34*m;Ue.setAttribute(`aKind`,new r(We,1)),Ue.setAttribute(`aSize`,new r(Ge,1));let W=Se(_),G=new te(Ue,W,6);G.renderOrder=35,G.name=`brain-halos`,G.frustumCulled=!1;let K=new ee;for(let e=0;e<6;e++)K.position.set(0,0,0),K.updateMatrix(),G.setMatrixAt(e,K.matrix);let Ke=G;x.add(Ke);let qe=[0,0,0,0],Je=[0,0,0,0],Ye=[-1,-1,-1,-1],Xe=[8,8,8,8],q=[0,0,0,0],Ze=0,J=0,Qe=Array(T).fill(1),$e=Array(T).fill(1),Y=0,X=0,et=0,tt=0,nt=0,rt=0,it=0,at=0,ot=0,st=0,ct=0,Z=1,lt=1,Q=null,ut=e=>{let t=new Int32Array(C).fill(-1),n=new Int32Array(C),r=0,i=0;t[e]=0,n[i++]=e;let a=0;for(;r<i;){let e=n[r++];for(let r of we[e])t[r]<0&&(t[r]=t[e]+1,a=Math.max(a,t[r]),n[i++]=r)}return{hop:t,max:a}};function dt(t){let n=t!=null&&t>=0&&t<C?t:Te,{hop:r,max:i}=ut(n),a=Ze;Ze=(Ze+1)%ye;for(let e=0;e<C;e++)Fe[e*4+a]=r[e]<0?1e3:r[e];p?v.links.forEach(([e,t],n)=>{let i=r[e]>=0&&r[t]>=0;for(let o=0;o<8;o++)for(let s=0;s<2;s++){let c=(o+s)/8;Ve[((n*8+o)*2+s)*4+a]=i?r[e]+(r[t]-r[e])*c:1e3}}):v.links.forEach(([e,t],n)=>{Ve[n*8+a]=r[e]<0?1e3:r[e],Ve[n*8+4+a]=r[t]<0?1e3:r[t]}),Ie.needsUpdate=!0,He.needsUpdate=!0,Ye[a]=n,Xe[a]=i,Je[a]=1,qe[a]=e.reduced?i+.5:-.5,q[a]=e.reduced?0:.001,K.position.set(w[n*3],w[n*3+1],w[n*3+2]*Z),K.updateMatrix(),G.setMatrixAt(2+a,K.matrix),G.instanceMatrix.needsUpdate=!0,J=1}function ft(e){Q=e!=null&&e>=0&&e<T?e:null,I.uniforms.uFocus.value=H.uniforms.uFocus.value=Q??-1;for(let e=0;e<T;e++)$e[e]=Q==null||e===Q?1:.15;Q==null?(ot=0,st=0,lt=1):(p||(ot=(Q-4.5)*.06>=0?-.55:.55,st=-.22,lt=j),Ee[Q]>=0&&dt(Ee[Q]))}function pt(t){X=+!!t,e.reduced&&(Y=X),mt()}function mt(){if(W.uniforms.uNight.value=Y,p)return;for(let e of[P,N])e.uniforms.uNight.value=Y;I.uniforms.uNight.value=Y,H.uniforms.uNight.value=Y;let e=E(y.brain).lerp(E(ue.brain),Y);I.uniforms.uBrain.value.copy(e),H.uniforms.uBrain.value.copy(e),P.uniforms.uCoreColor.value.copy(e);let t=E(y.glassTint).lerp(E(y.paperRaised),.4).lerp(E(ue.glassTint),Y);for(let e of[P,N])e.uniforms.uTint.value.copy(t)}function ht(e,t){et=e,tt=t}let $=new l;function gt(t,n){t=Math.min(Math.max(t,0),.1);let r=e.reduced,i=e.paused;!i&&!r&&(ct+=t);let a=i?0:t;if(Y!==X){let e=t/.6;Y=X>Y?Math.min(X,Y+e):Math.max(X,Y-e),mt()}let o=r?0:Math.sin(ct*.16)*.38+Math.sin(ct*.051)*.12,s=r?0:Math.sin(ct*.11+1.3)*.08,c=et+o*(Q==null?1:.25)+ot,l=tt+s+st;if(r)nt=c,rt=l,it=at=0;else{let e=7.5,n=e*e*(c-nt)-2*e*it,r=e*e*(l-rt)-2*e*at;it+=n*t,at+=r*t,nt+=it*t,rt+=at*t}x.rotation.set(rt,nt,0,`YXZ`);let u=Math.min(1,Math.hypot(nt,rt*1.4)/.7),d=1+(j-1)*u*u;Z+=(Math.max(lt,d)-Z)*(r?1:1-Math.exp(-t*5)),p||(I.uniforms.uSpread.value=Z,H.uniforms.uSpread.value=Z,H.uniforms.uRing.value=.12+1.9*Math.min(1,u*1.3));for(let e=0;e<T;e++)Qe[e]+=($e[e]-Qe[e])*(r?1:1-Math.exp(-t*8));I.uniforms.uGroupAlpha.value=Qe,H.uniforms.uGroupAlpha.value=Qe;for(let e=0;e<ye;e++)Je[e]<=0||(r||(qe[e]+=a*8.88888888888889),(qe[e]>Xe[e]+1.5||r)&&(Je[e]=Math.max(0,Je[e]-a/(r?1.4:.9))),q[e]>0&&(q[e]+=a/.75,q[e]>=1&&(q[e]=0)));for(let e of[I,H])e.uniforms.uPulseT.value.fromArray(qe),e.uniforms.uPulseA.value.fromArray(Je);W.uniforms.uRings.value=q,J=Math.max(0,J-a/1.1);let ee=(.82+(r?0:.08*Math.sin(ct*1.7))+J*.6)*(p?.42:1);if(W.uniforms.uCore.value=ee,p){let t=e.reduced?2:g.sweep();for(let e of[I,H,P,N])e.uniforms.uMode.value.set(g.cur,g.prev),e.uniforms.uSweep.value=t,e.uniforms.uTime.value=n;P.uniforms.uPulse.value=J*.6}else P.uniforms.uCoreStrength.value=.65+J*.8;b.updateWorldMatrix(!0,!1),$.setFromMatrixPosition(b.matrixWorld),p||P.uniforms.uCoreCenter.value.copy($)}L.onBeforeRender=(e,t,n)=>{$.setFromMatrixPosition(b.matrixWorld).applyMatrix4(n.matrixWorldInverse),I.uniforms.uCenterZ.value=$.z,H.uniforms.uCenterZ.value=$.z},U.onBeforeRender=L.onBeforeRender;function _t(){return b.updateWorldMatrix(!0,!1),new l().setFromMatrixPosition(b.matrixWorld)}let vt=new l;function yt(e,t,n=10,r=window.innerHeight){x.updateWorldMatrix(!0,!1);let i=-1,a=1/0,o=n/r*2;for(let n=0;n<C;n++){if(Qe[O[n]]<.5)continue;vt.set(w[n*3],w[n*3+1],w[n*3+2]*Z).applyMatrix4(x.matrixWorld).project(t);let r=Math.hypot(vt.x-e.x,vt.y-e.y);r<o&&r<a&&(a=r,i=n)}if(i<0)return null;let s=new l(w[i*3],w[i*3+1],w[i*3+2]*Z).applyMatrix4(x.matrixWorld);return{index:i,folder:Oe[O[i]].name,degree:D[i],world:s}}let bt=new l;function xt(e){x.updateWorldMatrix(!0,!1),bt.copy(e).applyMatrix4(x.matrixWorld.clone().invert());let t=Te,n=1/0;for(let e=0;e<C;e++){if(we[e].length===0)continue;let r=w[e*3]-bt.x,i=w[e*3+1]-bt.y,a=w[e*3+2]*Z-bt.z,o=r*r+i*i+a*a;o<n&&(n=o,t=e)}dt(t)}function St(e){p||(P.setGlow(e),N.setGlow(e))}function Ct(){Me=!0,M.dispose(),F.dispose(),V.dispose(),Ue.dispose(),P.dispose(),N.dispose(),I.dispose(),H.dispose(),W.dispose(),G.dispose(),b.removeFromParent()}return pt(e.night),Y=X,mt(),{group:b,update:gt,pulse:dt,focusFolder:ft,setNight:pt,setTurn:ht,corePoint:_t,dispose:Ct,pick:yt,pulseAt:xt,folders:Oe,setGlow:St,anatomical:p,get mode(){return g.cur},setMode(t,n=!1){g.set(t,n||e.reduced)},nextMode(){g.next(e.reduced)}}}export{k as n,w as t};