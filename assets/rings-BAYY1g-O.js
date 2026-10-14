import{t as e}from"./projects-CpGhKs7q.js";import{Bn as t,E as n,Er as r,In as i,Jn as a,K as o,Rn as s,Tt as c,_ as l,ht as u,k as d,mt as f,v as p,vr as m}from"./three.core-CUlgq_p4.js";import{c as h,f as g,g as _,j as v,k as y,l as b,p as x,u as S}from"./main-BNUvMtJi.js";import{t as C}from"./occlusion-mTVxCfut.js";import{n as w}from"./signals-BTnaWWQ9.js";import{n as T,r as E,t as D}from"./lane-D-cP0gdQ.js";import{n as O,r as k}from"./atlas-_gu6i2G5.js";var A=`JOSEPH BLUMBERG · UNIVERSITY OF CHICAGO · ECONOMICS · COMPUTATIONAL AND APPLIED MATHEMATICS · `,j=`Crescat scientia · vita excolatur · In nova fert animus mutatas dicere formas corpora · `,M=[`qvr`,`cloudflare`,`appfolio`,`recruiting-os`,`chomchom`,`secretary`,`watchdog`,`selforge`,`zeta`,`table-model`,`hand-compass`,`love-island`,`wwii`,`thrift`,`second-brain`,`metamorphoses`,`odyssey`,`liaozhai`],N=()=>{let t=new Map(e.map(e=>[e.id,e.name]));return M.map(e=>(t.get(e)??e).split(`:`)[0].toUpperCase()).join(` · `)+` · `},P={clouds:[0,2.1],name:[0,1],world:[.82,1.8],epilogue:[.8,.92]},F=[.07,1.6],I=e=>P[v[Math.max(0,Math.min(v.length-1,e))].id]??F,L=()=>[{text:A,kind:`mono`,px:50,R:5.8,tilt:[.36,0,.2],spin:.2,col:[.93,.9,.84],h0:1.15},{text:N(),kind:`mono`,px:40,R:7.5,tilt:[-.22,0,1.02],spin:-.15,col:[.62,.74,1],h0:1},{text:j,kind:`serif`,px:84,R:9.3,tilt:[.52,0,-.62],spin:.1,col:[1,.72,.5],h0:1.25}];function R(e,t,n,r,a){let o=document.createElement(`canvas`),c=o.getContext(`2d`,{willReadFrequently:!0});for(c.font=O(t,n);Math.ceil(c.measureText(e).width)>a&&n>18;)n-=2,c.font=O(t,n);let p=Math.ceil(c.measureText(e).width),h=Math.ceil(n*2.1);o.width=p,o.height=h,c.font=O(t,n),c.fillStyle=`#fff`,c.textBaseline=`middle`,c.textAlign=`left`,c.fillText(e,0,h/2+n*.04);let g=Math.max(2,Math.round(n*.05));c.fillRect(0,3,p,g),c.fillRect(0,h-3-g,p,g);let _=c.getImageData(0,0,p,h).data,v=new Uint8Array(p*h);for(let e=0,t=3;e<v.length;e++,t+=4)v[e]=_[t];let y=new d(v,p,h,i,m);return y.wrapS=s,y.wrapT=l,y.minFilter=u,y.magFilter=f,y.generateMipmaps=!0,y.anisotropy=r,y.unpackAlignment=1,y.flipY=!1,y.needsUpdate=!0,{tex:y,aspect:p/h}}var z=`
float copyThird() {
  if (uLaneOn < 0.5 || uLane.w > 0.5 || abs(uLane.x) < 0.001) return 1.0;
  vec2 nd = gl_FragCoord.xy / uRes * 2.0 - 1.0;
  float u = nd.x * -sign(uLane.x);                // < 0 on the copy side
  return mix(1.0, mix(0.15, 1.0, smoothstep(-0.36, -0.30, u)), abs(uLane.x));
}`,B=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,V=`
precision highp float;
uniform sampler2D tTex; uniform vec3 uCol; uniform float uReps, uAlpha, uSweep, uKick, uCap;
varying vec2 vUv;
${D}
${z}
void main() {
  float cov = texture2D(tTex, vec2(vUv.x * uReps, vUv.y)).r;
  float ang = vUv.x * 6.2831853;
  float sw = 0.5 + 0.5 * cos(ang - uSweep);
  float glow = 0.5 + 0.5 * pow(sw, 3.0) + uKick;
  float face = gl_FrontFacing ? 1.0 : 0.3;
  float a = min(cov * uAlpha * glow * face * laneMask() * copyThird(), uCap);   // uCap: the dim while the 3D name owns the frame
  gl_FragColor = vec4(uCol * (0.85 + 0.9 * pow(sw, 5.0)), a);
}`,H=`
varying vec2 vP;
void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,U=`
precision highp float;
uniform float uR0, uR1, uAlpha, uRot, uSweep, uKick, uCap;
varying vec2 vP;
${D}
${z}
void main() {
  float rad = length(vP);
  float t = (rad - uR0) / (uR1 - uR0);
  float wu = max(max(fwidth(vP.x), fwidth(vP.y)), 1e-5);
  float degPx = degrees(wu / max(rad, 1e-3));
  float a = atan(vP.y, vP.x);
  float deg = degrees(a) - degrees(uRot);
  float d2 = abs(fract(deg / 2.0 + 0.5) - 0.5) * 2.0 / degPx;
  float d10 = abs(fract(deg / 10.0 + 0.5) - 0.5) * 10.0 / degPx;
  float d30 = abs(fract(deg / 30.0 + 0.5) - 0.5) * 30.0 / degPx;
  float minor = (1.0 - smoothstep(0.35, 1.2, d2)) * step(0.66, t);
  float mid = (1.0 - smoothstep(0.45, 1.4, d10)) * step(0.4, t);
  float major = (1.0 - smoothstep(0.55, 1.7, d30)) * step(0.06, t);
  float edge = 1.0 - smoothstep(0.0, 1.6, min(abs(rad - uR0), abs(rad - uR1)) / wu);
  float da = mod(a - uSweep + 3.14159265, 6.2831853) - 3.14159265;
  float tail = step(da, 0.0) * exp(da * 1.7);
  float head = exp(-da * da * 700.0);
  float onEdge = 1.0 - smoothstep(0.0, 2.4, abs(rad - uR0) / wu);
  float base = 0.5 * (minor * 0.5 + mid * 0.8 + major) + edge * 0.45;
  vec3 col = vec3(0.93, 0.9, 0.84) * (base * (0.55 + uKick)) + vec3(1.0, 0.55, 0.3) * (onEdge * (tail * 0.9 + head * 3.0) + major * head * 2.0);
  float a2 = clamp(max(max(col.r, col.g), col.b), 0.0, 1.0);
  if (a2 < 0.003) discard;
  gl_FragColor = vec4(col, min(uAlpha * laneMask() * copyThird(), uCap));
}`;function W(e){if(!b(`rings`)||!e.field?.scene)return;let i=e.field.renderer,s=new o;s.name=`atmos-rings`,s.position.set(...y),s.visible=!1;let l=new o;s.add(l);let u=[],d=null,f=null,m=!1,v=0,D=0,O=0,A=0,j=0,M=0,N=0,P=0,F=0,z=1,W=0,G=1,K=0,q=0,J=e.field.camera,Y=new E,X=new r(1440,900),Z={value:1},Q={value:1},$=0;e.on((e,t)=>{switch(e){case`hub:detent`:N+=1,P=Math.max(P,.5);break;case`hub:channel`:P=Math.max(P,.8);break;case`hub:poweron`:O=1;break;case`pov:grab`:D=Math.max(D,.3);break;case`pov:drag`:D=Math.max(D,Math.min(1,t?.speed??.5));break;case`pov:release`:D=Math.max(D,Math.min(1,t?.speed??.4));break;case`tv:spin`:D=Math.max(D,.35*Math.min(1,t?.speed??.5));break;case`tv:grab`:P=Math.max(P,.3)}}),(async()=>{await k();let r=Math.min(8,i.capabilities.getMaxAnisotropy()),h=Math.min(4096,i.capabilities.maxTextureSize||4096);for(let e of L()){let{tex:t,aspect:i}=R(e.text,e.kind,e.px,r,h),s=2*Math.PI*e.R,d=Math.max(1,Math.round(s/(i*e.h0))),f=s/(d*i),m=new n(e.R,e.R,f,192,1,!0),g=new a({vertexShader:B,fragmentShader:V,transparent:!0,depthWrite:!1,depthTest:!0,side:2,blending:2,uniforms:{tTex:{value:t},uCol:{value:new p(...e.col)},uReps:{value:d},uAlpha:{value:0},uSweep:{value:0},uKick:{value:0},uCap:Z,uLane:{value:Y.u},uRes:{value:X},uLaneOn:T,uHole:C}}),_=new c(m,g);_.frustumCulled=!1,_.renderOrder=1;let v=new o;v.rotation.set(e.tilt[0],e.tilt[1],e.tilt[2]),v.add(_),l.add(v),u.push({tilt:v,mesh:_,mat:g,def:e,spin:e.spin,angle:Math.random()*6.28})}f=new a({vertexShader:H,fragmentShader:U,transparent:!0,depthWrite:!1,depthTest:!0,side:2,blending:2,uniforms:{uR0:{value:4.35},uR1:{value:4.85},uAlpha:{value:0},uRot:{value:0},uSweep:{value:0},uKick:{value:0},uCap:Q,uLane:{value:Y.u},uRes:{value:X},uLaneOn:T,uHole:C}}),d=new c(new t(4.29,4.909999999999999,256,1),f),d.frustumCulled=!1,d.renderOrder=1,s.add(d),e.field.addObject(s),m=!0})().catch(e=>console.warn(`[rings] build failed`,e));let ee=_(`rings`,(t,n,r)=>{{if(!m||!d||!f)return;let t=x(),a=I(r.wp),o=I(r.next),c=r.dwelling?0:r.t,p=g(a[0],o[0],c),_=g(a[1],o[1],c);if(++q%3==0&&e.world?.stats){let t=e.world.stats();W=t.hubOn??0,G=t.hubShow??1,K=t.hubOff??0}F=h(F,p,.35,n),z=h(z,_,.5,n);let y=.28+.72*Math.min(1,W),b=(1-K)*(1-K),S=F*y*b*G;if(s.visible=S>.004,!s.visible)return;Y.update(r,n),i.getDrawingBufferSize(X),$=h($,+!!document.documentElement.dataset.hero3d,.3,n),Z.value=g(1,.25,$),Q.value=g(1,.3,$),s.scale.setScalar(Math.max(.02,z*(1-.9*K))),D*=Math.exp(-n/.7),O*=Math.exp(-n/1.1),P*=Math.exp(-n/.35);let C=w.uSgMus.value,T=t?0:1+5*r.speed+8*D+7*O+6*K+2.5*C.w;v=h(v,T,T>v?.25:.7,n);for(let e of u)e.angle+=e.spin*v*n,e.mesh.rotation.y=e.angle;l.rotation.y+=n*(t?0:.05+.04*v),M+=n*(t?.4:.7+.5*v),j+=15*Math.PI/180*N*7.5,N=0,j*=Math.exp(-n*7.5),A+=j*n+n*.03*!t;for(let e of u){let t=e.mat.uniforms;t.uAlpha.value=S*.78,t.uSweep.value=M*(e.spin>0?1:-1),t.uKick.value=P*.5+.45*C.x+.5*w.uSgRip.value.y}let E=f.uniforms;E.uAlpha.value=Math.min(1,S*1.1),E.uRot.value=A,E.uSweep.value=M*1.3,E.uKick.value=P+.5*C.x+.6*w.uSgRip.value.y,d.lookAt(J.position)}});return{update(e,t,n){S(`rings`)?ee(e,t,n):s.visible=!1}}}export{W as install};