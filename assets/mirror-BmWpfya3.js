import{Dr as e,Er as t,Jn as n,Or as r,St as i,Tt as a,Vt as o,Wt as s,_r as c,d as l,g as u,ht as d,jr as f,mt as p,q as m,u as h,v as g,wt as _}from"./three.core-CUlgq_p4.js";import{T as v,c as y,d as b,f as x,g as S,j as C,k as w,l as T,u as E}from"./main-BNUvMtJi.js";import{n as D,t as O}from"./occlusion-mTVxCfut.js";import{n as k,r as A}from"./lane-D-cP0gdQ.js";var j=class t extends a{constructor(i,a={}){super(i),this.isReflector=!0,this.type=`Reflector`,this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let s=this,l=a.color===void 0?new g(8355711):new g(a.color),u=a.textureWidth||512,d=a.textureHeight||512,p=a.clipBias||0,h=a.shader||t.ReflectorShader,v=a.multisample===void 0?4:a.multisample,y=new o,b=new e,x=new e,S=new e,C=new _,w=new e(0,0,-1),T=new r,E=new e,D=new e,O=new r,k=new _,A=new f(u,d,{samples:v,type:m}),j=new n({name:h.name===void 0?`unspecified`:h.name,uniforms:c.clone(h.uniforms),fragmentShader:h.fragmentShader,vertexShader:h.vertexShader});j.uniforms.tDiffuse.value=A.texture,j.uniforms.color.value=l,j.uniforms.textureMatrix.value=k,this.material=j,this.onBeforeRender=function(e,t,n){let r=this.getReflectionCamera(n);if(x.setFromMatrixPosition(s.matrixWorld),S.setFromMatrixPosition(n.matrixWorld),C.extractRotation(s.matrixWorld),b.set(0,0,1),b.applyMatrix4(C),E.subVectors(x,S),E.dot(b)>0&&this.forceUpdate===!1)return;E.reflect(b).negate(),E.add(x),C.extractRotation(n.matrixWorld),w.set(0,0,-1),w.applyMatrix4(C),w.add(S),D.subVectors(x,w),D.reflect(b).negate(),D.add(x),r.position.copy(E),r.up.set(0,1,0),r.up.applyMatrix4(C),r.up.reflect(b),r.lookAt(D),r.far=n.far,r.updateMatrixWorld(),r.projectionMatrix.copy(n.projectionMatrix),k.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),k.multiply(r.projectionMatrix),k.multiply(r.matrixWorldInverse),k.multiply(s.matrixWorld),y.setFromNormalAndCoplanarPoint(b,x),y.applyMatrix4(r.matrixWorldInverse),T.set(y.normal.x,y.normal.y,y.normal.z,y.constant);let i=r.projectionMatrix;r.isOrthographicCamera?(O.x=(Math.sign(T.x)+i.elements[8])/i.elements[0],O.y=(Math.sign(T.y)+i.elements[9])/i.elements[5],O.z=-n.far,O.w=1):(O.x=(Math.sign(T.x)+i.elements[8])/i.elements[0],O.y=(Math.sign(T.y)+i.elements[9])/i.elements[5],O.z=-1,O.w=(1+i.elements[10])/i.elements[14]),T.multiplyScalar(2/T.dot(O)),i.elements[2]=T.x,i.elements[6]=T.y,r.isOrthographicCamera?(i.elements[10]=T.z-p,i.elements[14]=T.w-1):(i.elements[10]=T.z+1-p,i.elements[14]=T.w),s.visible=!1;let a=e.getRenderTarget(),o=e.xr.enabled,c=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(A),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(t,r),e.xr.enabled=o,e.shadowMap.autoUpdate=c,e.setRenderTarget(a);let l=n.viewport;l!==void 0&&e.state.viewport(l),s.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),s.material.dispose()},this.getReflectionCamera=function(e){let t=this._reflectionCameras.get(e);return t===void 0&&(t=e.clone(),this._reflectionCameras.set(e,t)),t}}};j.ReflectorShader={name:`ReflectorShader`,uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var M=-6.6,N=96,P=new Set((typeof location<`u`?new URLSearchParams(location.search).get(`mirror`)??``:``).split(`,`).filter(Boolean)),F=(e,t)=>Number([...P].find(t=>t.startsWith(e+`=`))?.slice(e.length+1)??0)||t,ee=F(`res`,.5),I={clouds:[0,0],name:[0,0],world:[1,1],epilogue:[.55,.6]},L=[.35,.9],R=e=>I[C[Math.max(0,Math.min(C.length-1,e))].id]??L,te=`
uniform mat4 textureMatrix;
varying vec4 vUv; varying vec3 vW;
void main() {
  vUv = textureMatrix * vec4(position, 1.0);
  vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,ne=`
precision highp float;
uniform sampler2D tDiffuse; uniform vec3 color;
uniform float uTime, uRefl, uMark, uGain, uHubOn;
uniform vec2 uRes; uniform vec4 uLane;
${D}
uniform vec4 uPad[6]; uniform vec3 uPadCol[6]; uniform float uPadOn[6];
varying vec4 vUv; varying vec3 vW;
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y); }
void main() {
  vec3 Vv = cameraPosition - vW; float dist = length(Vv); vec3 V = Vv / dist;
  float ndv = clamp(V.y, 0.0, 1.0);
  float fres = 0.05 + 0.95 * pow(1.0 - ndv, 3.6);
  // roughness: slow warped noise nudges the lookup, blur grows with distance (a wet, dark stone floor)
  vec2 n1 = vec2(vn(vW.xz * 0.21 + uTime * 0.02), vn(vW.xz * 0.21 + 17.3 - uTime * 0.017)) - 0.5;
  float jit = h21(gl_FragCoord.xy) * 6.2831853;
  // roughness varies across the floor: polished patches (sharp, bright) beside matte, dusty ones; the blur grows with distance and
  // stretches vertically (a wet floor smears a reflection along the view direction)
  float polish = smoothstep(0.25, 0.75, vn(vW.xz * 0.065 + 3.1)) * 0.6 + 0.4 * vn(vW.xz * 0.45);
  float rough = (0.45 + 0.85 * smoothstep(8.0, 70.0, dist)) * mix(0.55, 1.45, polish);
  vec2 uv = vUv.xy / vUv.w + n1 * 0.05 * rough;
  float lod = 0.6 + 1.9 * rough;
  vec2 px = 1.0 / vec2(textureSize(tDiffuse, 0));
  vec3 acc = vec3(0.0);
  float stretch = 1.0 + 2.4 * (1.0 - ndv);
  for (int i = 0; i < 8; i++) {
    float a = float(i) * 2.39996 + jit, rr = sqrt((float(i) + 0.5) / 8.0);
    acc += textureLod(tDiffuse, uv + vec2(cos(a), sin(a) * stretch) * rr * px * (1.5 + 5.0 * rough), lod).rgb;
  }
  vec3 refl = acc / 8.0;
  float rad = length(vW.xz);
  float fade = 1.0 - smoothstep(36.0, 92.0, rad);
  vec3 c = refl * fres * uGain * fade * uRefl;
  // ---- markings: the ring the areas hang on (with a tick every 2.5 deg), and a pad under each area
  float aa = max(fwidth(rad), 1e-3), aaFade = 1.0 - smoothstep(0.25, 0.9, aa);
  float ang = atan(vW.z, vW.x);
  float ringLine = (1.0 - smoothstep(0.0, aa * 1.5, abs(rad - ${24 .toFixed(1)}) - 0.035));
  float tick = (1.0 - smoothstep(0.0, aa * 1.5, abs(fract(ang / 6.2831853 * 144.0 + 0.5) - 0.5) * 6.2831853 / 144.0 * rad - 0.018)) * step(abs(rad - ${24 .toFixed(1)}), 0.42);
  vec3 mk = vec3(0.95, 0.88, 0.76) * (ringLine * 0.2 + tick * 0.16) * aaFade;
  for (int i = 0; i < 6; i++) {
    vec2 d = vW.xz - uPad[i].xy; float r2 = dot(d, d), pr = uPad[i].z;
    if (r2 > pr * pr * 16.0) continue;
    float r = sqrt(r2), w = aa * 1.4 + 0.02;
    float line = 1.0 - smoothstep(0.0, w, abs(r - uPad[i].z));
    float line2 = 1.0 - smoothstep(0.0, w, abs(r - uPad[i].z * 0.62));
    float glow = exp(-r * r / (uPad[i].z * uPad[i].z * 0.7));
    mk += uPadCol[i] * ((line * 0.34 + line2 * 0.14) * (0.35 + 0.9 * uPadOn[i]) + glow * (0.05 + 0.24 * uPadOn[i])) * aaFade;
  }
  // the pool of light under the hub screen
  mk += vec3(1.0, 0.66, 0.42) * exp(-dot(vW.xz, vW.xz) / 52.0) * 0.07 * uHubOn;
  c += mk * uMark;
  // the copy lane stays clean: calmer, never washing
  vec2 nd = gl_FragCoord.xy / uRes * 2.0 - 1.0;
  float lane = 1.0;
  if (uLane.w > 0.5) lane = smoothstep(-0.34, -0.04, nd.y);
  else if (abs(uLane.x) > 0.001) { float u = nd.x * -sign(uLane.x); lane = mix(1.0, smoothstep(uLane.y, uLane.y + uLane.z, u), abs(uLane.x)); }
  c *= mix(0.16, 1.0, lane);
  c *= mix(0.22, 1.0, holeMask(gl_FragCoord.xy / uRes));   // v11: calm under the subject and the copy
  c = c / (1.0 + c * 1.1);              // soft ceiling: a reflection can glow, never blow out
  c = min(c, vec3(0.42));
  gl_FragColor = vec4(c, 1.0);
}`;function z(n){if(!T(`mirror`)||!n.field?.scene||b())return;let a=n.field,o=a.scene,c=a.renderer,f=a.camera,m=o.children.find(e=>e.isPoints),_=new A,D=new t,I=()=>{c.getDrawingBufferSize(D);let e=Math.min(ee,1100/Math.max(1,D.x));return[Math.max(64,Math.round(D.x*e)),Math.max(64,Math.round(D.y*e))]},[L,z]=I(),B=Array.from({length:6},()=>new r),V=Array.from({length:6},()=>new g);v.slice(0,6).forEach((e,t)=>{B[t].set(e.center[0],e.center[2],5.2,0),V[t].set(e.accent).multiplyScalar(.9)});let re={name:`AtmosMirror`,uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0},uRefl:{value:0},uMark:{value:0},uGain:{value:6.5},uHubOn:{value:0},uRes:{value:new t(1440,900)},uLane:{value:_.u},uHole:O,uPad:{value:B},uPadCol:{value:V},uPadOn:{value:new Float32Array(6)}},vertexShader:te,fragmentShader:P.has(`flat`)?`void main() { gl_FragColor = vec4(0.0); }`:ne},H=new j(new u(N,160),{textureWidth:L,textureHeight:z,clipBias:.003,multisample:0,shader:re,color:0});H.rotation.x=-Math.PI/2,H.position.set(w[0],M,w[2]),H.name=`atmos-mirror`,H.renderOrder=-1;let U=H.material;U.transparent=!0,U.depthWrite=!1,U.depthTest=!0,U.blending=2;let W=H.getRenderTarget();P.has(`nomips`)?(W.texture.generateMipmaps=!1,W.texture.minFilter=p):(W.texture.generateMipmaps=!0,W.texture.minFilter=d),W.texture.magFilter=p;let G=U.uniforms;G.uHole=O,a.addObject(H);let K=null,ie=F(`stride`,36),ae=F(`size`,.7),oe=F(`pgain`,10);if(m){let e=m.geometry,t=e.getAttribute(`position`).count,n=new l;for(let t of[`position`,`ref`,`rnd`]){let r=e.getAttribute(t);r&&n.setAttribute(t,r)}let r=new Uint32Array(Math.floor(t/ie));for(let e=0;e<r.length;e++)r[e]=e*ie;n.setIndex(new h(r,1)),K=new s(n,m.material),K.frustumCulled=!1,K.visible=!1,K.name=`atmos-mirror-proxy`,o.add(K)}let q=!1,se=!1,ce=!1,J=0,Y=1,X=0,Z=0,Q=0,le=0,$=0,ue=H.onBeforeRender;H.onBeforeRender=()=>{};let de=()=>{let e=[];for(let t of o.children)t!==H&&t.visible&&(t===m||t.userData.noReflect)&&(t.visible=!1,e.push(t));let t=m?m.material.uniforms:null,r=t?.uDpr.value,i=t?.uGainX.value??0;P.has(`noworld`)&&n.world?.root&&(n.world.root.visible=!1,e.push(n.world.root)),K&&t&&!P.has(`noproxy`)&&(K.visible=!0,t.uDpr.value=r*(L/Math.max(1,D.x))*ae,t.uGainX.value=(1+i)*oe-1),k.value=0;try{ue.call(H,c,o,f)}finally{k.value=1,K&&(K.visible=!1),t&&(t.uDpr.value=r,t.uGainX.value=i);for(let t of e)t.visible=!0}},fe=new e,pe=S(`mirror`,(e,t,r)=>{{J++,f.getWorldDirection(fe);let o=f.position.y-M,s=Math.asin(Math.max(-1,Math.min(1,fe.y))),l=i.degToRad(f.fov*.5),u=Math.atan(o/(N*.95)),d=s-l*1.15,p=o>.3&&d<-u;if(Q=o>.3?Math.max(0,Math.min(1,(u-(s-l))/(2*l))):0,$=p?14:Math.max(0,$-1),q=p||$>0,H.visible=q,!q){ce=!1;return}if(ce||=!0,J%30==0){let[e,t]=I();(e!==L||t!==z)&&(L=e,z=t,W.setSize(L,z))}c.getDrawingBufferSize(D),G.uRes.value.copy(D);let m=r.dwelling?0:r.t,h=R(r.wp),g=R(r.next);X=y(X,x(h[0],g[0],m),.4,t),Z=y(Z,x(h[1],g[1],m),.4,t),se=Q>.06,J%3==0&&n.world?.stats&&(le=n.world.stats().hubOn??0);let b=Math.min(1,Math.max(0,(Q-.06)/.14));G.uRefl.value=X*b*b*(3-2*b),G.uMark.value=Z,G.uHubOn.value=Math.min(1,le),G.uTime.value=e;let S=v.findIndex(e=>e.id===r.area),w=C[Math.max(0,Math.min(C.length-1,r.next))].area,T=v.findIndex(e=>e.id===w),E=G.uPadOn.value;for(let e=0;e<6;e++)E[e]=y(E[e],(e===S?1-m:0)+(e===T?m:0),.3,t);G.uLane.value.copy(_.update(r,t));let O=a.stats?.medianMs??0;Y=!P.has(`nostride`)&&(r.dwelling||O>17.5)?2:1,se&&!P.has(`norefl`)&&(Y===1||J%Y===0)&&de()}});return{update(e,t,n){E(`mirror`)?pe(e,t,n):(q=!1,H.visible=!1)}}}export{z as install};