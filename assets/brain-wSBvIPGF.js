import{o as e,u as t}from"./projects-CpGhKs7q.js";import{$ as n,Dr as r,Er as i,H as a,Ht as o,Jn as s,K as c,Lt as l,Or as u,Tt as d,Wt as ee,Z as f,d as te,pt as p,rr as m,u as h,v as g}from"./three.core-CUlgq_p4.js";import{a as _,c as ne,d as re,f as ie,i as ae,l as oe,s as se,t as v,u as ce}from"./brainColor-CMa6dT39.js";import{t as y}from"./data-Qm_oDXgK.js";import{n as le,t as b}from"./theme-B6hjuvG9.js";var x=`
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
}`,S=`
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
}`;function C(e){let t=e.image?.height;if(!t)return null;let n=Math.log2(t)-2;return{HAS_ENV:``,CUBEUV_TEXEL_WIDTH:String(1/(3*Math.max(2**n,112))),CUBEUV_TEXEL_HEIGHT:String(1/t),CUBEUV_MAX_MIP:n.toFixed(1)}}function ue(e){let t=Array.from({length:24},()=>new u(0,0,0,0)),n=new g(e.rim),i=e.envMap??null,a=i?C(i)??{}:{},o=new s({name:`TechnicalGlass`,defines:a,uniforms:{uTint:{value:new g(e.tint)},uRim:{value:n},uRimNight:{value:new g(`#ECEAE3`)},uGlowColor:{value:new g(e.glowColor??`#FFF4E0`)},uLightDir:{value:new r(-3,4,5).normalize()},uRimPower:{value:e.rimPower??3},uBodyAlpha:{value:e.bodyAlpha??.1},uRimAlpha:{value:e.rimAlpha??.55},uNight:{value:0},uLine:{value:e.line??1},uInner:{value:e.innerLine??.22},uHatch:{value:e.hatch??0},uCaustic:{value:e.caustic??0},uDpr:{value:e.dpr??Math.min(window.devicePixelRatio||1,2)},uOpacity:{value:1},uCaps:{value:t},uEnv:{value:i},uCoreCenter:{value:new r},uCoreRadius:{value:.3},uCoreColor:{value:new g(`#E0442B`)},uCoreStrength:{value:0}},vertexShader:x,fragmentShader:S,transparent:!0,depthWrite:!1,side:e.side??0,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205,toneMapped:!1});return o.setNight=e=>{o.uniforms.uNight.value=+!!e},o.setGlow=e=>{for(let n=0;n<24;n++){let r=n*4;r+3<e.length?t[n].set(e[r],e[r+1],e[r+2],e[r+3]):t[n].set(0,0,0,0)}},o}var w=`

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
${v}
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
`,T={transparent:!0,depthWrite:!1,depthTest:!0,toneMapped:!1,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205},de=e=>({uPulseT:{value:new u},uPulseA:{value:new u},uGroupAlpha:{value:Array(10).fill(1)},uGroupColor:{value:Array.from({length:10},()=>new g(`#9aa3a8`))},uMode:{value:new i(0,0)},uSweep:{value:2},uTime:{value:0},uCenterZ:{value:-3},uFocus:{value:-1},uK:{value:1},uDpr:{value:e},uScale:{value:4.4},uPulseCol:{value:new g(1,.94,.84)}}),E=`
vec4 premul(vec3 lin, float a, float add) {
  vec3 enc = linearToOutputTexel(vec4(max(lin, 0.0), 1.0)).rgb;
  return vec4(enc * a, a * (1.0 - add));
}`;function fe(e){return new s({name:`BrainEtchNodes`,uniforms:de(e),...T,vertexShader:`
      ${w}
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
      ${E}
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
      }`})}function pe(e){return new s({name:`BrainEtchLinks`,uniforms:de(e),...T,vertexShader:`
      ${w}
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
      ${E}
      uniform vec3 uPulseCol;
      varying float vA; varying vec3 vC; varying float vP;
      void main() {
        vec3 col = mix(vC, uPulseCol, vP * 0.85);
        float a = vA * (0.15 + 0.7 * vP);
        gl_FragColor = premul(col, a, 0.85);
      }`})}function me(e){let t=e.image?.height;if(!t)return null;let n=Math.log2(t)-2;return{HAS_ENV:``,CUBEUV_TEXEL_WIDTH:String(1/(3*Math.max(2**n,112))),CUBEUV_TEXEL_HEIGHT:String(1/t),CUBEUV_MAX_MIP:n.toFixed(1)}}function he(e,t,n){let a=n?me(n):null,o=new s({name:e===1?`BrainShellBack`:`BrainShellFront`,defines:a??{},uniforms:{uMode:{value:new i(0,0)},uSweep:{value:2},uTime:{value:0},uRegionCol:{value:Array.from({length:9},()=>new g(`#9aa3a8`))},uRegionHeat:{value:Array(9).fill(.5)},uOpacity:{value:1},uDpr:{value:t},uEnv:{value:n},uLightDir:{value:new r(-.45,.7,.55).normalize()},uPulse:{value:0},uCenter:{value:new r}},vertexShader:`
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
      ${v}
      ${E}
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
      }`,...T});return o.side=e,o.setRegionColors=(e,t)=>{o.uniforms.uRegionCol.value=e,o.uniforms.uRegionHeat.value=t},o}var D=t({createBrain:()=>M}),ge=4,O=10,_e=e=>{let t=Math.sin(e*127.1+311.7)*43758.5453;return t-Math.floor(t)},k=e=>new g(e),A=`
uniform vec4 uPulseT;
uniform vec4 uPulseA;
uniform float uGroupAlpha[${O}];
uniform float uSpread;
uniform float uNight;
uniform float uCenterZ;
uniform float uFocus;
uniform float uK;
uniform vec3 uGroupColor[${O}];
attribute vec4 aHop;
attribute float aGroup;
float pulseAt(vec4 hop) {
  float p = 0.0;
  for (int k = 0; k < ${ge}; k++) {
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
`,j=`
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
`;function ve(e,t){let n={uPulseT:{value:new u},uPulseA:{value:new u},uGroupAlpha:{value:Array(O).fill(1)},uSpread:{value:1},uNight:{value:0},uCenterZ:{value:-3},uEtch:{value:k(b.ink)},uEtchNight:{value:k(`#FFFFFF`)},uBrain:{value:k(b.brain)},uDpr:{value:t},uScale:{value:4.4},uRing:{value:.2},uFocus:{value:-1},uK:{value:1},uFolderK:{value:0},uGroupColor:{value:Array.from({length:O},()=>new g(`#9aa3a8`))}},r=e===`points`?`
    ${A}
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
    ${A}
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
    }`,i=e===`points`?`
    ${j}
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
    ${j}
    varying float vP;
    varying float vA;
    void main() {
      vec3 base = mix(mix(uEtch, uEtchNight, uNight), vGC, uFolderK);
      vec3 col = mix(base, uBrain, vP);
      float a = vA * (mix(0.13, 0.10, uNight) + 0.55 * vP);
      gl_FragColor = premul(col, a, uNight);
    }`;return new s({name:e===`points`?`EtchPoints`:`EtchLines`,uniforms:n,vertexShader:r,fragmentShader:i,transparent:!0,depthWrite:!1,depthTest:!0,toneMapped:!1,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205})}function ye(e){return new s({name:`BrainHalos`,uniforms:{uNight:{value:0},uDpr:{value:e},uBrain:{value:k(b.brain)},uBrainNight:{value:k(le.brain)},uHot:{value:k(`#FFE3C8`)},uCore:{value:1},uRings:{value:[0,0,0,0]},uTime:{value:0}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1,depthTest:!0,toneMapped:!1,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205})}function M(t={}){let i=t.radius??.62,s=!!t.anatomical,u=i/.62,v=Math.min(window.devicePixelRatio||1,2),x=new c;x.name=`brain`;let S=new c;S.name=`brain-turn`,x.add(S);let C=y.nodes,w=C.length,T=C.map(e=>Math.hypot(e[0],e[1])).sort((e,t)=>e-t),de=T[Math.floor(T.length*.9)]||1,E=.5*u,me=e=>{let t=e/de;return t<=.82?t*.78:.6396+(1-.6396)*Math.tanh((t-.82)*.78/(1-.6396))},D=new Float32Array(w*3),A=new Float32Array(w),j=new Float32Array(w);for(let e=0;e<w;e++){let[t,n,r,i]=C[e],a=Math.hypot(t,n),o=a>1e-6?me(a)*E/a:0;D[e*3]=t*o,D[e*3+1]=n*o,D[e*3+2]=((r-4.5)*.06+(_e(e)-.5)*.015)*u,A[e]=i,j[e]=r}let M=i*1.06,N=new Float32Array;if(s){N=oe(C,y.groups);let e=[0,0,0];for(let t=0;t<w;t++)ie(N[t*3],N[t*3+1],N[t*3+2],e),D[t*3]=e[0]*M,D[t*3+1]=e[1]*M,D[t*3+2]=e[2]*M}let P=2.2,be=.575*u;for(let e=0;e<w;e++){let t=D[e*3]**2+D[e*3+1]**2,n=Math.abs(D[e*3+2]);if(n<1e-4)continue;let r=Math.sqrt(Math.max(be*be-t,0))/n;P=Math.min(P,r)}P=s?1:Math.max(1,P);let xe=Array.from({length:w},()=>[]);for(let[e,t]of y.links)xe[e].push(t),xe[t].push(e);let Se=0;for(let e=1;e<w;e++)A[e]>A[Se]&&(Se=e);let Ce=Array(O).fill(-1);for(let e=0;e<w;e++){let t=j[e];(Ce[t]<0||A[e]>A[Ce[t]])&&(Ce[t]=e)}let we=y.stats?.folders??{},Te=y.groups.map(e=>({name:e===`other`?`Root`:e,count:Number(we[e]??0)})),F=s?new te:new m(i,96,64),Ee={tint:b.glassTint,rim:b.ink,rimPower:2.2,bodyAlpha:.42,rimAlpha:.55,envMap:t.envMap??null,glowColor:`#FFF1E6`,innerLine:.16,hatch:1,caustic:1,dpr:v},I=s?he(1,v,t.envMap??null):ue({...Ee,side:1}),L=s?he(0,v,t.envMap??null):ue({...Ee,side:0});if(!s)for(let e of[L])e.uniforms.uCoreStrength.value=1,e.uniforms.uCoreRadius.value=.26*u,e.uniforms.uCoreColor.value=k(b.brain);let De=new d(F,I);De.renderOrder=10,De.name=`brain-glass-back`;let Oe=new d(F,L);Oe.renderOrder=40,Oe.name=`brain-glass-front`,x.add(De,Oe);let ke=!1,Ae=Math.max(...Array.from(A),1),je=e=>(e/Ae)**.42;if(s){let e=t.folderColors??ae,n=ne.map(()=>new g(`#9aa3a8`)),r=ne.map(()=>.4),i=Array(ne.length).fill(-1);y.groups.forEach((t,a)=>{let o=se[t],s=Te[a]?.count??0;if(o==null||s<=i[o])return;i[o]=s,n[o]=new g(e[t]??e.other??`#9aa3a8`);let c=0,l=0;for(let e=0;e<w;e++)j[e]===a&&(c+=je(A[e]),l++);r[o]=l?Math.min(1,c/l*1.5):.3}),L.setRegionColors(n,r),I.setRegionColors(n,r),re().then(e=>{if(ke)return;let t=e.pos.length/3,n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t),o=[0,0,0];for(let a=0;a<t;a++)ie(e.pos[a*3],e.pos[a*3+1],e.pos[a*3+2],o),n[a*3]=o[0]*M,n[a*3+1]=o[1]*M,n[a*3+2]=o[2]*M,ie(e.nrm[a*3],e.nrm[a*3+1],e.nrm[a*3+2],o),r[a*3]=o[0],r[a*3+1]=o[1],r[a*3+2]=o[2],i[a]=e.pos[a*3+2]*.5+.5;F.setAttribute(`position`,new a(n,3)),F.setAttribute(`normal`,new a(r,3)),F.setAttribute(`aFold`,new a(e.fold,1)),F.setAttribute(`aRegion`,new a(Float32Array.from(e.region),1)),F.setAttribute(`aZn`,new a(i,1)),F.setIndex(new h(e.idx,1)),F.computeBoundingSphere()})}let Me=new Float32Array(w*4).fill(1e3),R=new te;R.setAttribute(`position`,new a(D,3)),R.setAttribute(`aDegree`,new a(A,1)),R.setAttribute(`aGroup`,new a(j,1));let Ne=new h(Me,4);R.setAttribute(`aHop`,Ne),s?(R.setAttribute(`aHeat`,new a(Float32Array.from(A,je),1)),R.setAttribute(`aZn`,new a(Float32Array.from({length:w},(e,t)=>N[t*3+2]*.5+.5),1)),R.setAttribute(`aPh`,new a(Float32Array.from({length:w},(e,t)=>_e(t+.5)),1))):R.boundingSphere=F.boundingSphere?.clone()??null;let z=s?fe(v):ve(`points`,v),B=new ee(R,z);B.renderOrder=30,B.name=`brain-etch-nodes`,B.frustumCulled=!1;let Pe=y.links.length,Fe=s?[]:Te.map((e,t)=>e.count>0?t:-1).filter(e=>e>=0),Ie=Fe.length*120*2,V=s?Pe*8*2:Pe*2+Ie,H=new Float32Array(V*3),U=new Float32Array(V),Le=new Float32Array(s?0:V),Re=new Float32Array(V*4).fill(1e3),W=new te;if(s){let e=new Float32Array(V),t=new Float32Array(V),n=new Float32Array(V),r=new Float32Array(V),i=new Float32Array(V),o=[0,0,0];y.links.forEach(([a,s],c)=>{let l=[N[a*3],N[a*3+1],N[a*3+2]],u=[N[s*3],N[s*3+1],N[s*3+2]],d=ce(l,u,j[a]!==j[s],_e(c*1.7+.2)),ee=_e(c+.31),f=je(A[a]),te=je(A[s]);for(let p=0;p<8;p++)for(let m=0;m<2;m++){let h=(p+m)/8,g=1-h,_=(c*8+p)*2+m,ne=g*g*l[0]+2*g*h*d[0]+h*h*u[0],re=g*g*l[1]+2*g*h*d[1]+h*h*u[1],ae=g*g*l[2]+2*g*h*d[2]+h*h*u[2];ie(ne,re,ae,o),H[_*3]=o[0]*M,H[_*3+1]=o[1]*M,H[_*3+2]=o[2]*M,U[_]=j[a],e[_]=j[s],t[_]=h,n[_]=f+(te-f)*h,r[_]=ae*.5+.5,i[_]=ee}}),W.setAttribute(`position`,new a(H,3)),W.setAttribute(`aGroup`,new a(U,1)),W.setAttribute(`aGroupB`,new a(e,1)),W.setAttribute(`aS`,new a(t,1)),W.setAttribute(`aHeat`,new a(n,1)),W.setAttribute(`aZn`,new a(r,1)),W.setAttribute(`aPh`,new a(i,1))}else{y.links.forEach(([e,t],n)=>{H.set(D.subarray(e*3,e*3+3),n*6),H.set(D.subarray(t*3,t*3+3),n*6+3),U[n*2]=j[e],U[n*2+1]=j[t]});let e=E*1.04,t=Pe*2;for(let n of Fe){let r=(n-4.5)*.06*u;for(let i=0;i<120;i++)for(let a of[i,i+1]){let i=a/120*Math.PI*2;H[t*3]=Math.cos(i)*e,H[t*3+1]=Math.sin(i)*e,H[t*3+2]=r,U[t]=n,Le[t]=1,t++}}W.setAttribute(`position`,new a(H,3)),W.setAttribute(`aGroup`,new a(U,1)),W.setAttribute(`aKind`,new a(Le,1))}let ze=new h(Re,4);W.setAttribute(`aHop`,ze);let G=s?pe(v):ve(`lines`,v);if(t.worldScale||s){for(let e of[z,G])e.uniforms.uK.value=u;z.uniforms.uScale.value=4.4*u}if(t.folderColors){let e=t.folderColors,n=y.groups.map(t=>new g(e[t]??e.other??`#9aa3a8`));for(let e of[z,G])e.uniforms.uGroupColor.value=n,s||(e.uniforms.uFolderK.value=1)}let Be=new p(W,G);Be.renderOrder=20,Be.name=`brain-etch-links`,Be.frustumCulled=!1,S.add(Be,B);let Ve=new o(1,1),He=new Float32Array(6),Ue=new Float32Array(6);He[0]=0,Ue[0]=.5*u,He[1]=1,Ue[1]=1.5*u;for(let e=0;e<ge;e++)He[2+e]=2+e,Ue[2+e]=.34*u;Ve.setAttribute(`aKind`,new f(He,1)),Ve.setAttribute(`aSize`,new f(Ue,1));let We=ye(v),K=new n(Ve,We,6);K.renderOrder=35,K.name=`brain-halos`,K.frustumCulled=!1;let q=new l;for(let e=0;e<6;e++)q.position.set(0,0,0),q.updateMatrix(),K.setMatrixAt(e,q.matrix);let Ge=K;S.add(Ge);let Ke=[0,0,0,0],qe=[0,0,0,0],Je=[-1,-1,-1,-1],Ye=[8,8,8,8],J=[0,0,0,0],Xe=0,Y=0,Ze=Array(O).fill(1),Qe=Array(O).fill(1),X=0,Z=0,$e=0,et=0,tt=0,nt=0,rt=0,it=0,at=0,ot=0,st=0,Q=1,ct=1,$=null,lt=e=>{let t=new Int32Array(w).fill(-1),n=new Int32Array(w),r=0,i=0;t[e]=0,n[i++]=e;let a=0;for(;r<i;){let e=n[r++];for(let r of xe[e])t[r]<0&&(t[r]=t[e]+1,a=Math.max(a,t[r]),n[i++]=r)}return{hop:t,max:a}};function ut(t){let n=t!=null&&t>=0&&t<w?t:Se,{hop:r,max:i}=lt(n),a=Xe;Xe=(Xe+1)%ge;for(let e=0;e<w;e++)Me[e*4+a]=r[e]<0?1e3:r[e];s?y.links.forEach(([e,t],n)=>{let i=r[e]>=0&&r[t]>=0;for(let o=0;o<8;o++)for(let s=0;s<2;s++){let c=(o+s)/8;Re[((n*8+o)*2+s)*4+a]=i?r[e]+(r[t]-r[e])*c:1e3}}):y.links.forEach(([e,t],n)=>{Re[n*8+a]=r[e]<0?1e3:r[e],Re[n*8+4+a]=r[t]<0?1e3:r[t]}),Ne.needsUpdate=!0,ze.needsUpdate=!0,Je[a]=n,Ye[a]=i,qe[a]=1,Ke[a]=e.reduced?i+.5:-.5,J[a]=e.reduced?0:.001,q.position.set(D[n*3],D[n*3+1],D[n*3+2]*Q),q.updateMatrix(),K.setMatrixAt(2+a,q.matrix),K.instanceMatrix.needsUpdate=!0,Y=1}function dt(e){$=e!=null&&e>=0&&e<O?e:null,z.uniforms.uFocus.value=G.uniforms.uFocus.value=$??-1;for(let e=0;e<O;e++)Qe[e]=$==null||e===$?1:.15;$==null?(at=0,ot=0,ct=1):(s||(at=($-4.5)*.06>=0?-.55:.55,ot=-.22,ct=P),Ce[$]>=0&&ut(Ce[$]))}function ft(t){Z=+!!t,e.reduced&&(X=Z),pt()}function pt(){if(We.uniforms.uNight.value=X,s)return;for(let e of[L,I])e.uniforms.uNight.value=X;z.uniforms.uNight.value=X,G.uniforms.uNight.value=X;let e=k(b.brain).lerp(k(le.brain),X);z.uniforms.uBrain.value.copy(e),G.uniforms.uBrain.value.copy(e),L.uniforms.uCoreColor.value.copy(e);let t=k(b.glassTint).lerp(k(b.paperRaised),.4).lerp(k(le.glassTint),X);for(let e of[L,I])e.uniforms.uTint.value.copy(t)}function mt(e,t){$e=e,et=t}let ht=new r;function gt(t,n){t=Math.min(Math.max(t,0),.1);let r=e.reduced,i=e.paused;!i&&!r&&(st+=t);let a=i?0:t;if(X!==Z){let e=t/.6;X=Z>X?Math.min(Z,X+e):Math.max(Z,X-e),pt()}let o=r?0:Math.sin(st*.16)*.38+Math.sin(st*.051)*.12,c=r?0:Math.sin(st*.11+1.3)*.08,l=$e+o*($==null?1:.25)+at,u=et+c+ot;if(r)tt=l,nt=u,rt=it=0;else{let e=7.5,n=e*e*(l-tt)-2*e*rt,r=e*e*(u-nt)-2*e*it;rt+=n*t,it+=r*t,tt+=rt*t,nt+=it*t}S.rotation.set(nt,tt,0,`YXZ`);let d=Math.min(1,Math.hypot(tt,nt*1.4)/.7),ee=1+(P-1)*d*d;Q+=(Math.max(ct,ee)-Q)*(r?1:1-Math.exp(-t*5)),s||(z.uniforms.uSpread.value=Q,G.uniforms.uSpread.value=Q,G.uniforms.uRing.value=.12+1.9*Math.min(1,d*1.3));for(let e=0;e<O;e++)Ze[e]+=(Qe[e]-Ze[e])*(r?1:1-Math.exp(-t*8));z.uniforms.uGroupAlpha.value=Ze,G.uniforms.uGroupAlpha.value=Ze;for(let e=0;e<ge;e++)qe[e]<=0||(r||(Ke[e]+=a*8.88888888888889),(Ke[e]>Ye[e]+1.5||r)&&(qe[e]=Math.max(0,qe[e]-a/(r?1.4:.9))),J[e]>0&&(J[e]+=a/.75,J[e]>=1&&(J[e]=0)));for(let e of[z,G])e.uniforms.uPulseT.value.fromArray(Ke),e.uniforms.uPulseA.value.fromArray(qe);We.uniforms.uRings.value=J,Y=Math.max(0,Y-a/1.1);let f=(.82+(r?0:.08*Math.sin(st*1.7))+Y*.6)*(s?.42:1);if(We.uniforms.uCore.value=f,s){let t=e.reduced?2:_.sweep();for(let e of[z,G,L,I])e.uniforms.uMode.value.set(_.cur,_.prev),e.uniforms.uSweep.value=t,e.uniforms.uTime.value=n;L.uniforms.uPulse.value=Y*.6}else L.uniforms.uCoreStrength.value=.65+Y*.8;x.updateWorldMatrix(!0,!1),ht.setFromMatrixPosition(x.matrixWorld),s||L.uniforms.uCoreCenter.value.copy(ht)}B.onBeforeRender=(e,t,n)=>{ht.setFromMatrixPosition(x.matrixWorld).applyMatrix4(n.matrixWorldInverse),z.uniforms.uCenterZ.value=ht.z,G.uniforms.uCenterZ.value=ht.z},Be.onBeforeRender=B.onBeforeRender;function _t(){return x.updateWorldMatrix(!0,!1),new r().setFromMatrixPosition(x.matrixWorld)}let vt=new r;function yt(e,t,n=10,i=window.innerHeight){S.updateWorldMatrix(!0,!1);let a=-1,o=1/0,s=n/i*2;for(let n=0;n<w;n++){if(Ze[j[n]]<.5)continue;vt.set(D[n*3],D[n*3+1],D[n*3+2]*Q).applyMatrix4(S.matrixWorld).project(t);let r=Math.hypot(vt.x-e.x,vt.y-e.y);r<s&&r<o&&(o=r,a=n)}if(a<0)return null;let c=new r(D[a*3],D[a*3+1],D[a*3+2]*Q).applyMatrix4(S.matrixWorld);return{index:a,folder:Te[j[a]].name,degree:A[a],world:c}}let bt=new r;function xt(e){S.updateWorldMatrix(!0,!1),bt.copy(e).applyMatrix4(S.matrixWorld.clone().invert());let t=Se,n=1/0;for(let e=0;e<w;e++){if(xe[e].length===0)continue;let r=D[e*3]-bt.x,i=D[e*3+1]-bt.y,a=D[e*3+2]*Q-bt.z,o=r*r+i*i+a*a;o<n&&(n=o,t=e)}ut(t)}function St(e){s||(L.setGlow(e),I.setGlow(e))}function Ct(){ke=!0,F.dispose(),R.dispose(),W.dispose(),Ve.dispose(),L.dispose(),I.dispose(),z.dispose(),G.dispose(),We.dispose(),K.dispose(),x.removeFromParent()}return ft(e.night),X=Z,pt(),{group:x,update:gt,pulse:ut,focusFolder:dt,setNight:ft,setTurn:mt,corePoint:_t,dispose:Ct,pick:yt,pulseAt:xt,folders:Te,setGlow:St,anatomical:s,get mode(){return _.cur},setMode(t,n=!1){_.set(t,n||e.reduced)},nextMode(){_.next(e.reduced)}}}export{M as n,D as t};