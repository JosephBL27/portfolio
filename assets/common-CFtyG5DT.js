import{Dr as e,Er as t,Et as n,Ht as r,Jn as i,Tt as a,Wt as o,b as s,d as c,g as l,nr as u,u as d,v as f}from"./three.core-CUlgq_p4.js";import{m as p}from"./kit-lXBMxeGZ.js";var m=(e=[.012,.012,.018],n=11,r=27)=>({pres:{value:0},col:{value:new f(...e)},range:{value:new t(n,r)},time:{value:0},px:{value:1}});function h(e,t){return e.onBeforeCompile=e=>{e.uniforms.uSpPres=t.pres,e.uniforms.uSpFogC=t.col,e.uniforms.uSpFogR=t.range,e.fragmentShader=`uniform float uSpPres; uniform vec3 uSpFogC; uniform vec2 uSpFogR;
`+e.fragmentShader.replace(`#include <dithering_fragment>`,`gl_FragColor.rgb = mix(gl_FragColor.rgb, uSpFogC, smoothstep(uSpFogR.x, uSpFogR.y, length(vViewPosition))) * uSpPres;
#include <dithering_fragment>`)},e.customProgramCacheKey=()=>`sp-fog`,e}var g=`
float h11(float n) { return fract(sin(n * 127.1) * 43758.5453); }
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y); }
float fbm(vec2 p) { float a = 0.5, s = 0.0; mat2 m = mat2(1.6, 1.2, -1.2, 1.6); for (int i = 0; i < 5; i++) { s += a * vn(p); p = m * p; a *= 0.5; } return s; }
`;function _(e,t){let n=t.radius??e.def.radius,r=new i({transparent:!0,depthWrite:!0,uniforms:{uR:{value:n},uPres:e.fog.pres,uTime:e.fog.time,...t.uniforms??{}},vertexShader:`varying vec2 vP; void main() { vP = vec2(position.x, -position.y); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`precision highp float; varying vec2 vP; uniform float uR, uPres, uTime;\n${g}\n${t.frag}\nvoid main() { float r = length(vP) / uR; vec4 g = ground(vP, r); float edge = 1.0 - smoothstep(0.5, 1.0, r); gl_FragColor = vec4(g.rgb * uPres, g.a * edge * clamp(uPres * 2.5, 0.0, 1.0)); }`}),o=new a(new l(n,96),r);return o.rotation.x=-Math.PI/2,o.renderOrder=-10,o.position.y=-.02,o.name=`ground`,o}function v(e,t){let[i,o]=Array.isArray(t.size)?t.size:[t.size,t.size],s=new n({map:p(t.col[0],t.col[1],t.col[2]),transparent:!0,opacity:t.opacity??.5,blending:2,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),c=new a(new r(i,o),s);return t.standing||(c.rotation.x=-Math.PI/2),c.renderOrder=3,c.userData.base=s.opacity,c}function y(t,n){let r=Math.round(n.n*(t.phone?.55:1)),a=new Float32Array(r*3),s=new Float32Array(r*4),l=(n.seed??7)>>>0,p=()=>(l=Math.imul(l,1664525)+1013904223>>>0,l/4294967296);for(let e=0;e<r;e++){a[e*3]=(n.at?.[0]??0)+(p()*2-1)*n.half[0],a[e*3+1]=p()*n.h,a[e*3+2]=(n.at?.[2]??0)+(p()*2-1)*n.half[1];for(let t=0;t<4;t++)s[e*4+t]=p()}let m=new c;m.setAttribute(`position`,new d(a,3)),m.setAttribute(`aR`,new d(s,4)),m.boundingSphere=new u(new e(n.at?.[0]??0,(n.at?.[1]??0)+n.h/2,n.at?.[2]??0),Math.max(n.half[0],n.half[1],n.h)*1.6);let h={uTime:t.fog.time,uPres:t.fog.pres,uPx:t.fog.px,uSize:{value:n.size},uH:{value:n.h},uSpeed:{value:n.speed},uSway:{value:n.sway??.35},uCol:{value:new f(...n.col)},uAlpha:{value:n.alpha??.8},uY0:{value:n.at?.[1]??0}},g=new i({transparent:!0,depthWrite:!1,blending:2,uniforms:h,vertexShader:`
      attribute vec4 aR; uniform float uTime, uPx, uSize, uH, uSpeed, uSway, uY0; varying float vA;
      void main() {
        vec3 p = position;
        p.y = mod(position.y + uTime * uSpeed * (0.55 + 0.9 * aR.y), uH);
        p.x += sin(uTime * 0.23 * (0.5 + aR.x) + aR.x * 40.0) * uSway; p.z += cos(uTime * 0.19 * (0.5 + aR.y) + aR.y * 31.0) * uSway;
        p.y += uY0;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float ph = (p.y - uY0) / uH;
        vA = smoothstep(0.0, 0.14, ph) * (1.0 - smoothstep(0.7, 1.0, ph)) * (0.5 + 0.5 * sin(uTime * (0.7 + aR.w * 1.8) + aR.x * 20.0));
        gl_PointSize = clamp(uSize * uPx * (0.5 + aR.z) * (9.0 / max(1.0, -mv.z)), 1.0, 24.0);
      }`,fragmentShader:`
      precision highp float; uniform vec3 uCol; uniform float uPres, uAlpha; varying float vA;
      void main() { float d = length(gl_PointCoord - 0.5) * 2.0; float a = pow(1.0 - smoothstep(0.0, 1.0, d), 2.0); gl_FragColor = vec4(uCol, a * vA * uAlpha * uPres); }`}),_=new o(m,g);return _.frustumCulled=!1,_.renderOrder=6,_.name=`motes`,{points:_,set(e,t){h.uAlpha.value=(n.alpha??.8)*e,t!=null&&(h.uSpeed.value=n.speed*t)},dispose(){m.dispose(),g.dispose()}}}function b(e,t){let n=new s(t.r,t.h,64,1,!0);n.translate(0,-t.h/2,0);let r={uTime:e.fog.time,uPres:e.fog.pres,uI:{value:t.I},uCol:{value:new f(...t.col)},uH:{value:t.h},uSeed:{value:t.seed??1}},o=new i({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:r,vertexShader:`
      uniform float uH; varying vec3 vN, vV; varying float vH; varying vec3 vL;
      void main() { vH = -position.y / uH; vL = position; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = -mv.xyz; gl_Position = projectionMatrix * mv; }`,fragmentShader:`
      precision highp float; uniform vec3 uCol; uniform float uI, uPres, uTime, uSeed; varying vec3 vN, vV, vL; varying float vH;
      float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
      float vn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y); }
      void main() {
        float e = pow(abs(dot(normalize(vN), normalize(vV))), 1.5);
        float along = (1.0 - 0.72 * vH) * smoothstep(0.0, 0.05, vH) * (1.0 - smoothstep(0.82, 1.0, vH));
        float ang = atan(vL.z, vL.x);
        float dust = 0.78 + 0.22 * vn(vec2(ang * 3.0 + uSeed, vH * 5.0 - uTime * 0.12));
        float a = e * along * dust * uI * uPres;
        gl_FragColor = vec4(uCol, a);
      }`}),c=new a(n,o);return c.renderOrder=5,c.frustumCulled=!1,c.name=`cone`,{mesh:c,set(e,t){r.uI.value=e,t&&r.uCol.value.setRGB(...t)}}}function x(e){let t=e>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}export{x as a,y as c,_ as i,h as n,b as o,v as r,m as s,g as t};