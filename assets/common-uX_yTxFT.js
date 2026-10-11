import{Hn as e,It as t,Rt as n,Yn as r,_ as i,br as a,bt as o,c as s,h as c,p as l,s as u,yr as d,yt as f}from"./three.core-rbApIkjy.js";import{m as p}from"./kit-CImi8KJv.js";var m=(e=[.012,.012,.018],t=11,n=27)=>({pres:{value:0},col:{value:new c(...e)},range:{value:new d(t,n)},time:{value:0},px:{value:1}});function h(e,t){return e.onBeforeCompile=e=>{e.uniforms.uSpPres=t.pres,e.uniforms.uSpFogC=t.col,e.uniforms.uSpFogR=t.range,e.fragmentShader=`uniform float uSpPres; uniform vec3 uSpFogC; uniform vec2 uSpFogR;
`+e.fragmentShader.replace(`#include <dithering_fragment>`,`gl_FragColor.rgb = mix(gl_FragColor.rgb, uSpFogC, smoothstep(uSpFogR.x, uSpFogR.y, length(vViewPosition))) * uSpPres;
#include <dithering_fragment>`)},e.customProgramCacheKey=()=>`sp-fog`,e}var g=`
float h11(float n) { return fract(sin(n * 127.1) * 43758.5453); }
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y); }
float fbm(vec2 p) { float a = 0.5, s = 0.0; mat2 m = mat2(1.6, 1.2, -1.2, 1.6); for (int i = 0; i < 5; i++) { s += a * vn(p); p = m * p; a *= 0.5; } return s; }
`;function _(t,n){let r=n.radius??t.def.radius,i=new e({transparent:!0,depthWrite:!0,uniforms:{uR:{value:r},uPres:t.fog.pres,uTime:t.fog.time,...n.uniforms??{}},vertexShader:`varying vec2 vP; void main() { vP = vec2(position.x, -position.y); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`precision highp float; varying vec2 vP; uniform float uR, uPres, uTime;\n${g}\n${n.frag}\nvoid main() { float r = length(vP) / uR; vec4 g = ground(vP, r); float edge = 1.0 - smoothstep(0.5, 1.0, r); gl_FragColor = vec4(g.rgb * uPres, g.a * edge * clamp(uPres * 2.5, 0.0, 1.0)); }`}),a=new f(new l(r,96),i);return a.rotation.x=-Math.PI/2,a.renderOrder=-10,a.position.y=-.02,a.name=`ground`,a}function v(e,n){let[r,i]=Array.isArray(n.size)?n.size:[n.size,n.size],a=new o({map:p(n.col[0],n.col[1],n.col[2]),transparent:!0,opacity:n.opacity??.5,blending:2,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new f(new t(r,i),a);return n.standing||(s.rotation.x=-Math.PI/2),s.renderOrder=3,s.userData.base=a.opacity,s}function y(t,i){let o=Math.round(i.n*(t.phone?.55:1)),l=new Float32Array(o*3),d=new Float32Array(o*4),f=(i.seed??7)>>>0,p=()=>(f=Math.imul(f,1664525)+1013904223>>>0,f/4294967296);for(let e=0;e<o;e++){l[e*3]=(i.at?.[0]??0)+(p()*2-1)*i.half[0],l[e*3+1]=p()*i.h,l[e*3+2]=(i.at?.[2]??0)+(p()*2-1)*i.half[1];for(let t=0;t<4;t++)d[e*4+t]=p()}let m=new s;m.setAttribute(`position`,new u(l,3)),m.setAttribute(`aR`,new u(d,4)),m.boundingSphere=new r(new a(i.at?.[0]??0,(i.at?.[1]??0)+i.h/2,i.at?.[2]??0),Math.max(i.half[0],i.half[1],i.h)*1.6);let h={uTime:t.fog.time,uPres:t.fog.pres,uPx:t.fog.px,uSize:{value:i.size},uH:{value:i.h},uSpeed:{value:i.speed},uSway:{value:i.sway??.35},uCol:{value:new c(...i.col)},uAlpha:{value:i.alpha??.8},uY0:{value:i.at?.[1]??0}},g=new e({transparent:!0,depthWrite:!1,blending:2,uniforms:h,vertexShader:`
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
      void main() { float d = length(gl_PointCoord - 0.5) * 2.0; float a = pow(1.0 - smoothstep(0.0, 1.0, d), 2.0); gl_FragColor = vec4(uCol, a * vA * uAlpha * uPres); }`}),_=new n(m,g);return _.frustumCulled=!1,_.renderOrder=6,_.name=`motes`,{points:_,set(e,t){h.uAlpha.value=(i.alpha??.8)*e,t!=null&&(h.uSpeed.value=i.speed*t)},dispose(){m.dispose(),g.dispose()}}}function b(t,n){let r=new i(n.r,n.h,64,1,!0);r.translate(0,-n.h/2,0);let a={uTime:t.fog.time,uPres:t.fog.pres,uI:{value:n.I},uCol:{value:new c(...n.col)},uH:{value:n.h},uSeed:{value:n.seed??1}},o=new e({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:a,vertexShader:`
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
      }`}),s=new f(r,o);return s.renderOrder=5,s.frustumCulled=!1,s.name=`cone`,{mesh:s,set(e,t){a.uI.value=e,t&&a.uCol.value.setRGB(...t)}}}function x(e){let t=e>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}export{x as a,y as c,_ as i,h as n,b as o,v as r,m as s,g as t};