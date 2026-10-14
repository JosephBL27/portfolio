import{t as e}from"./projects-CpGhKs7q.js";import{Bt as t,Dr as n,Er as r,H as i,Ht as a,Jn as o,K as s,Tt as c,Vt as l,d as u,ht as d,jr as f,lt as p,mt as m,nr as h,p as g,pr as _,q as v,qt as y,u as b,v as x,wt as S}from"./three.core-CUlgq_p4.js";import{M as C,d as w,g as T,i as E,j as D,l as O,p as ee,r as te,t as k,u as ne}from"./main-BNUvMtJi.js";import{t as re}from"./media--ltg8lOJ.js";import{n as A,r as ie,t as j}from"./lane-D-cP0gdQ.js";import{a as M,c as ae,d as N,f as P,h as F,l as oe,m as se,n as ce,p as I,s as L,u as le}from"./rig-C97awxlt.js";var ue=class{scale;maxW;rt=null;cam=new t(35,1.6,.1,400);constructor(e=.7,t=1280){this.scale=e,this.maxW=t}get texture(){return this.rt?.texture??null}size(e){let t=Math.max(64,Math.round(Math.min(e.res.x*this.scale,this.maxW))),n=Math.max(64,Math.round(e.res.y*(t/Math.max(1,e.res.x))));if(this.rt)(this.rt.width!==t||this.rt.height!==n)&&this.rt.setSize(t,n);else{this.rt=new f(t,n,{type:v,depthBuffer:!0,samples:0});let e=this.rt.texture;e.minFilter=m,e.magFilter=m,e.generateMipmaps=!1}}render(e,t,n={}){this.size(e);let r=this.rt,i=this.cam,a=e.renderer,o=e.scene;i.position.set(...t.pos),i.up.set(0,1,0),i.lookAt(t.target[0],t.target[1],t.target[2]),i.fov=t.fov,i.aspect=e.res.x/Math.max(1,e.res.y),i.near=e.camera.near,i.far=e.camera.far,i.updateProjectionMatrix(),i.updateMatrixWorld(!0);let s=[],c=e=>{e&&e.visible&&!s.includes(e)&&(e.visible=!1,s.push(e))};for(let e of n.hide??[])c(e);c(o.getObjectByName(`atmos-mirror`));for(let e of o.children)e.userData.noReflect&&c(e);let l=e.field.points?.material?.uniforms,u=l?.uDpr?.value,d=l?.uFieldHide?.value,f=l?.uMix?.value;l?.uDpr&&u!=null&&(l.uDpr.value=u*(r.width/Math.max(1,e.res.x))),l?.uFieldHide&&d!=null&&(l.uFieldHide.value=0),n.mix!=null&&l?.uMix&&f!=null&&(l.uMix.value=n.mix);let p=A.value;A.value=0;let m=a.getRenderTarget();try{a.setRenderTarget(r),a.clear(),a.render(o,i)}finally{a.setRenderTarget(m),A.value=p,l?.uDpr&&u!=null&&(l.uDpr.value=u),l?.uFieldHide&&d!=null&&(l.uFieldHide.value=d),l?.uMix&&f!=null&&(l.uMix.value=f);for(let e of s)e.visible=!0}}dispose(){this.rt?.dispose(),this.rt=null}},de=`vec3 softClip(vec3 c) { return 1.0 - exp(-max(c, 0.0) * 2.1); }`;function R(e,t=!1){e.transparent=!0,e.depthWrite=!1,e.depthTest=t,e.blending=5,e.blendSrc=201,e.blendDst=205,e.blendSrcAlpha=201,e.blendDstAlpha=205}function fe(e,t,n){let r=Math.min(1,t/n);return e.flightCam(r)}var pe=3.6,z=N([[0,-1.3],[.06,-1.3],[.2,-.45],[.42,1.25],[.58,2.1],[.76,3.55],[.92,4.95],[1,4.95]]),me=`
varying vec2 vN;
void main() { vN = position.xy; gl_Position = vec4(position.xy, 0.0, 1.0); }`,he=`
precision highp float;
uniform float uU, uYT, uYB, uSpd, uCopy;
varying vec2 vN;
${j}
const float PI = 3.14159265;
float h11(float n) { return fract(sin(n * 127.1 + 31.7) * 43758.5453); }
void main() {
  float asp = uRes.x / uRes.y, px = 2.0 / uRes.y;
  vec2 q = vN;
  float x = q.x + 0.04 * uSpd * sin(q.y * 1.7 - uU * 9.0);                    // the cloth lags sideways as it climbs
  // silhouette: a valance of five scallops on top, a wavering hem below
  float ph = fract((x * 0.5 + 0.5) * 5.0), sw = sin(PI * ph);
  float top = uYT - 0.17 * pow(sw, 0.85);
  float bot = uYB + 0.055 * uSpd * sin(x * 6.0 + uU * 11.0) + 0.016 * sin(x * 21.0 + 1.3);
  float inside = smoothstep(0.0, px * 1.5, top - q.y) * smoothstep(0.0, px * 1.5, q.y - bot);
  float v = clamp((top - q.y) / max(0.2, top - bot), 0.0, 1.0);                // 0 at the valance .. 1 at the hem
  // folds: deeper toward the hem, a ripple that travels up the cloth while it moves
  float A = 0.03 + 0.07 * v;
  float fph = 2.0 * PI * (4.2 * (x + 1.0) + 0.5 * sin(q.y * 1.9 + uU * 6.0) * (0.4 + uSpd) + 0.16 * sin(q.y * 5.0 - uU * 14.0) * uSpd + 0.22 * sin(x * 3.1 + q.y * 0.8));
  float sl = A * cos(fph) * 2.0 * PI * 4.2;
  vec3 n = normalize(vec3(-sl * 0.5, -0.12 * sin(fph * 0.5 + q.y * 3.0) * (0.5 + uSpd), 1.0));
  float crest = 0.5 + 0.5 * sin(fph);
  vec3 L = normalize(vec3(-0.45, 0.5, 0.75));
  float diff = max(dot(n, L), 0.0), graze = pow(1.0 - max(n.z, 0.0), 2.2);
  vec3 base = mix(vec3(0.15, 0.010, 0.026), vec3(0.34, 0.032, 0.058), crest);
  vec3 col = base * (0.30 + 1.0 * diff) * (0.58 + 0.42 * crest);
  col += vec3(0.95, 0.30, 0.34) * graze * 0.34;                                // velvet: the fibres catch light edge-on
  col += vec3(1.0, 0.7, 0.6) * pow(max(dot(reflect(-L, n), vec3(0.0, 0.0, 1.0)), 0.0), 28.0) * 0.16;
  col *= 1.0 - 0.45 * pow(1.0 - v, 5.0);                                       // the cloth is gathered, darker, under the valance
  float a = inside;
  // gold: a cord along the valance, rosettes at the cusps, a braid above the hem, a fringe below it
  vec3 gold = vec3(0.86, 0.62, 0.22) * (0.55 + 0.7 * max(n.x * 0.3 + n.y * 0.4 + 0.7, 0.0));
  float cord = (1.0 - smoothstep(0.0, 0.007, abs(q.y - (top - 0.022)))) * step(q.y, top + 0.002);
  float rx = (floor((x * 0.5 + 0.5) * 5.0 + 0.5) / 5.0) * 2.0 - 1.0;
  float ros = 1.0 - smoothstep(0.02, 0.032, length((vec2(x, q.y) - vec2(rx, uYT - 0.003)) * vec2(asp, 1.0)));
  float braidB = smoothstep(0.0, px, q.y - bot) * (1.0 - smoothstep(0.034, 0.034 + px, q.y - bot));
  float braid = braidB * (0.65 + 0.35 * sin(x * asp * 95.0 + q.y * 80.0));
  col = mix(col, gold * 1.05, clamp(cord * 0.9 + ros + braid, 0.0, 1.0));
  // the fringe: strands of different lengths hanging from the hem
  float sid = floor(x * asp * 46.0), sf = fract(x * asp * 46.0);
  float len = 0.045 + 0.04 * h11(sid);
  float strand = (1.0 - smoothstep(0.1, 0.2, abs(sf - 0.5))) * smoothstep(0.0, px, bot - q.y) * (1.0 - smoothstep(len - px, len, bot - q.y));
  vec3 fcol = gold * (0.6 + 0.5 * h11(sid + 3.0));
  // the hem's shadow on the page below it
  float shade = 0.5 * exp(-max(bot - q.y, 0.0) * 8.0) * step(q.y, bot) * (1.0 - strand);
  float lm = 1.0 - uCopy * (1.0 - laneMask()) * 0.94;                          // the copy lane stays clear while copy is on screen
  float aa = a, ca = clamp(strand * 0.95, 0.0, 1.0);
  vec3 outc = col * aa + fcol * ca * (1.0 - aa);
  float outa = clamp(aa + ca * (1.0 - aa) + shade * (1.0 - aa) * (1.0 - ca), 0.0, 1.0);
  gl_FragColor = vec4(outc * lm, outa * lm);
}`;function ge(e){let t=!1,n=null,r=null,i={uU:{value:0},uYT:{value:-2},uYB:{value:-5},uSpd:{value:0},uCopy:{value:0},uLane:{value:null},uRes:{value:null},uLaneOn:A};return{leg:e,cues:[{at:.18,name:`tr:curtain`}],build(e){if(t)return;i.uLane.value=e.lane.u,i.uRes.value=e.res;let s=new a(2,2),l=new o({vertexShader:me,fragmentShader:he,uniforms:i});R(l,!1),n=new c(s,l),n.frustumCulled=!1,n.renderOrder=100,n.visible=!1,n.name=`tr-curtain`,n.userData.noReflect=!0,e.scene.add(n),I(e,n),r=document.createElement(`div`),r.id=`tr-ink`,r.setAttribute(`aria-hidden`,`true`),r.setAttribute(`data-proof`,`skip`);let u=`linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 16%, rgba(0,0,0,0.2) 48%, transparent 100%)`;Object.assign(r.style,{position:`fixed`,left:`0`,top:`0`,width:`100vw`,height:`28vh`,pointerEvents:`none`,zIndex:`70`,mixBlendMode:`difference`,background:`#fff`,display:`none`,willChange:`transform`,maskImage:u,webkitMaskImage:u}),document.body.appendChild(r),t=!0},setVisible(e){e||(n&&(n.visible=!1),r&&(r.style.display=`none`))},frame(e,a,o){if(!t||!n)return;let{u:s}=e;o.renderer.getDrawingBufferSize(o.res);let c=z(s),l=c-pe,u=Math.min(1,Math.abs(z(Math.min(1,s+.01))-z(Math.max(0,s-.01)))/.02/12);if(i.uU.value=s,i.uYT.value=c,i.uYB.value=l,i.uSpd.value=u,i.uCopy.value=e.copy,n.visible=c>-1.45&&l<1.2,a.field=1-F(0,.12,c-1.32)*F(0,.12,-1.32-l),a.flash=0,r){let e=(1-l)/2*innerHeight,t=l>-1&&l<1.35&&s<.96;r.style.display=t?`block`:`none`,t&&(r.style.transform=`translate3d(0, ${e.toFixed(1)}px, 0)`,r.style.opacity=(F(-1,-.78,l)*(1-F(1.05,1.35,l))).toFixed(3))}},camera(){return null},dispose(){n?.removeFromParent(),n?.geometry.dispose(),r?.remove()}}}var _e=new S;function ve(e){let t=ce(),r=(e,r=new n)=>r.set(e[0],e[1],e[2]).applyMatrix4(_e.copy(t.root.matrixWorld).invert()),i=null,a=new n(0,3.3,14),o=e=>{t.root.updateMatrixWorld(!0);let n=e.flightCam(0),a=e.flightCam(1),o=r(n.pos),s=r(n.target),c=r(a.pos),l=r(a.target),u=Math.min(o.z,-9);i={px:N([[0,o.x],[.12,o.x*.86],[.45,o.x*.1],[.56,0],[.76,c.x*.5],[1,c.x]]),py:N([[0,o.y],[.12,o.y],[.45,P(o.y,3.1,.75)],[.6,2.9],[.8,P(2.9,c.y,.65)],[1,c.y]]),pz:N([[0,o.z],[.12,o.z+.05*-u],[.45,-5.2],[.6,3],[.8,P(3,c.z,.62)],[1,c.z]]),fov:N([[0,n.fov],[.3,P(n.fov,40,.5)],[.5,44],[.62,50],[.82,49],[1,a.fov]]),t0:s,end:c.clone(),endT:l.clone()}};return{leg:e,cues:[{at:.18,name:`tr:doors`},{at:.52,name:`tr:flood`}],build(e){t.build(e)},setVisible(e){e||(t.flood.uA.value=0)},frame(e,n){let r=e.u,i=F(.45,.53,r)*(1-F(.56,.68,r));t.flood.uA.value=.5*i,n.field=P(1,.36,F(.12,.4,r)),n.flash=0,n.flashCol=[1,.74,.42]},camera(e,r,s){if(!t.built)return null;i||o(s);let c=i,l=new n(c.px(e),c.py(e),c.pz(e)),u=F(0,.3,e),d=F(.5,1,e),f=new n().lerpVectors(c.t0,a,u).lerp(c.endT,d),p=t.root.matrixWorld;return l.applyMatrix4(p),f.applyMatrix4(p),{pos:[l.x,l.y,l.z],target:[f.x,f.y,f.z],fov:c.fov(e)}},dispose(){t.dispose()}}}var ye=new S,be=new n(0,2.9,M+12);function xe(e){let t=ce(),r=(e,r=new n)=>r.set(e[0],e[1],e[2]).applyMatrix4(ye.copy(t.root.matrixWorld).invert()),i=null,a=.65,o=e=>{t.root.updateMatrixWorld(!0);let o=e.flightCam(0),s=e.flightCam(1),c=r(o.pos),l=r(o.target),u=N([[0,c.x],[.4,0],[1,0]]),d=N([[0,c.y],[.4,3.1],[.5,2.8],[a,2.4],[1,2.4]]),f=N([[0,c.z],[.3,M-10.5],[.4,M-5.8],[.5,M-2.4],[.56,M+.2],[a,M+4.6],[1,M+12]]),p=N([[0,o.fov],[.4,52],[.6,54],[1,54]]),m=t.root.matrixWorld,h=new n(u(a),d(a),f(a)).applyMatrix4(m);i={px:u,py:d,pz:f,fov:p,t0:l,QW:h,mW:new n(u(.66),d(.66),f(.66)).applyMatrix4(m).sub(h).multiplyScalar(35),HW:new n(...s.pos),htW:new n(...s.target),fovEnd:s.fov}},s={leg:e,visible:!1,cues:[{at:.18,name:`tr:exit`}],build(e){t.build(e)},setVisible(e){s.visible=e},frame(e,t){t.field=P(.4,1,F(.62,.95,e.u)),t.flash=0,t.flashCol=[1,.74,.42]},camera(e,r,s){if(!t.built)return null;i||o(s);let c=i,l=t.root.matrixWorld,u=new n,d=new n,f=be.clone().applyMatrix4(l);if(e<=a)u.set(c.px(e),c.py(e),c.pz(e)).applyMatrix4(l),d.copy(c.t0).lerp(be,F(0,.38,e)).applyMatrix4(l);else{let t=(e-a)/.35,n=t*t,r=n*t,i=2*r-3*n+1,o=r-2*n+t,s=-2*r+3*n;u.copy(c.QW).multiplyScalar(i).addScaledVector(c.mW,o).addScaledVector(c.HW,s),d.copy(f).lerp(c.htW,F(0,1,t))}let p=e<=a?c.fov(e):P(c.fov(a),c.fovEnd,F(0,1,(e-a)/.35));return{pos:[u.x,u.y,u.z],target:[d.x,d.y,d.z],fov:p}},dispose(){}};return s}var B=0,Se=1,Ce=new n,V=new p,H=new l,we=new n,U=new _,Te=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new De,this.unassigned=new De,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new Ee(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(e){let r=e.geometry;if(r!==void 0){let i=r.attributes.position;if(i!==void 0)for(let r=0,a=i.count;r<a;r++){let a=new n;a.fromBufferAttribute(i,r).applyMatrix4(e.matrixWorld),t.push(a)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let n=0,r=t.length;n<r;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let n=this.faces,r=-1/0,i=1/0;for(let t=0,a=n.length;t<a;t++){let a=n[t],o=a.distanceToPoint(e.origin),s=a.normal.dot(e.direction);if(o>0&&s>=0)return null;let c=s===0?0:-o/s;if(!(c<=0)&&(s>0?i=Math.min(c,i):r=Math.max(c,r),r>i))return null}return r===-1/0?e.at(i,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,Ce)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(t.outside=e.next!==null&&e.next.face===t?e.next:null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let n=this._removeAllVerticesFromFace(e);if(n!==void 0){if(t===void 0)this.unassigned.appendChain(n);else{let e=n;do{let n=e.next;t.distanceToPoint(e.point)>this.tolerance?this._addVertexToFace(e,t):this.unassigned.append(e),e=n}while(e!==null)}}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let n=t.next,r=this.tolerance,i=null;for(let n=0;n<e.length;n++){let a=e[n];if(a.mark===B){let e=a.distanceToPoint(t.point);if(e>r&&(r=e,i=a),r>1e3*this.tolerance)break}}i!==null&&this._addVertexToFace(t,i),t=n}while(t!==null)}return this}_computeExtremes(){let e=new n,t=new n,r=[],i=[];for(let e=0;e<3;e++)r[e]=i[e]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let n=0,a=this.vertices.length;n<a;n++){let a=this.vertices[n],o=a.point;for(let t=0;t<3;t++)o.getComponent(t)<e.getComponent(t)&&(e.setComponent(t,o.getComponent(t)),r[t]=a);for(let e=0;e<3;e++)o.getComponent(e)>t.getComponent(e)&&(t.setComponent(e,o.getComponent(e)),i[e]=a)}return this.tolerance=3*2**-52*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:r,max:i}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),n=t.min,r=t.max,i=0,a=0;for(let e=0;e<3;e++){let t=r[e].point.getComponent(e)-n[e].point.getComponent(e);t>i&&(i=t,a=e)}let o=n[a],s=r[a],c,l;i=0,V.set(o.point,s.point);for(let t=0,n=this.vertices.length;t<n;t++){let n=e[t];if(n!==o&&n!==s){V.closestPointToPoint(n.point,!0,we);let e=we.distanceToSquared(n.point);e>i&&(i=e,c=n)}}i=-1,H.setFromCoplanarPoints(o.point,s.point,c.point);for(let t=0,n=this.vertices.length;t<n;t++){let n=e[t];if(n!==o&&n!==s&&n!==c){let e=Math.abs(H.distanceToPoint(n.point));e>i&&(i=e,l=n)}}let u=[];if(H.distanceToPoint(l.point)<0){u.push(W.create(o,s,c),W.create(l,s,o),W.create(l,c,s),W.create(l,o,c));for(let e=0;e<3;e++){let t=(e+1)%3;u[e+1].getEdge(2).setTwin(u[0].getEdge(t)),u[e+1].getEdge(1).setTwin(u[t+1].getEdge(0))}}else{u.push(W.create(o,c,s),W.create(l,o,s),W.create(l,s,c),W.create(l,c,o));for(let e=0;e<3;e++){let t=(e+1)%3;u[e+1].getEdge(2).setTwin(u[0].getEdge((3-e)%3)),u[e+1].getEdge(0).setTwin(u[t+1].getEdge(1))}}for(let e=0;e<4;e++)this.faces.push(u[e]);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n!==o&&n!==s&&n!==c&&n!==l){i=this.tolerance;let e=null;for(let t=0;t<4;t++){let r=this.faces[t].distanceToPoint(n.point);r>i&&(i=r,e=this.faces[t])}e!==null&&this._addVertexToFace(n,e)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let n=this.faces[t];n.mark===B&&e.push(n)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,n=this.assigned.first().face,r=n.outside;do{let i=n.distanceToPoint(r.point);i>t&&(t=i,e=r),r=r.next}while(r!==null&&r.face===n);return e}}_computeHorizon(e,t,n,r){this._deleteFaceVertices(n),n.mark=Se;let i;i=t===null?t=n.getEdge(0):t.next;do{let t=i.twin,n=t.face;n.mark===B&&(n.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,t,n,r):r.push(i)),i=i.next}while(i!==t);return this}_addAdjoiningFace(e,t){let n=W.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let n=null,r=null;for(let i=0;i<t.length;i++){let a=t[i],o=this._addAdjoiningFace(e,a);n===null?n=o:o.next.setTwin(r),this.newFaces.push(o.face),r=o}return n.next.setTwin(r),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},W=class e{constructor(){this.normal=new n,this.midpoint=new n,this.area=0,this.constant=0,this.outside=null,this.mark=B,this.edge=null}static create(t,n,r){let i=new e,a=new G(t,i),o=new G(n,i),s=new G(r,i);return a.next=s.prev=o,o.next=a.prev=s,s.next=o.prev=a,i.edge=a,i.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return U.set(e.point,t.point,n.point),U.getNormal(this.normal),U.getMidpoint(this.midpoint),this.area=U.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},G=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t===null?-1:t.point.distanceTo(e.point)}lengthSquared(){let e=this.head(),t=this.tail();return t===null?-1:t.point.distanceToSquared(e.point)}setTwin(e){return this.twin=e,e.twin=this,this}},Ee=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},De=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}},Oe=class extends u{constructor(e=[]){super();let t=[],n=[],r=new Te().setFromPoints(e).faces;for(let e=0;e<r.length;e++){let i=r[e],a=i.edge;do{let e=a.head().point;t.push(e.x,e.y,e.z),n.push(i.normal.x,i.normal.y,i.normal.z),a=a.next}while(a!==i.edge)}this.setAttribute(`position`,new i(t,3)),this.setAttribute(`normal`,new i(n,3))}},K=80,ke=.055,Ae=-6.6,je=`
attribute vec3 aCent; attribute vec4 aRnd; attribute vec3 aAx; attribute float aEdge;
uniform float uTau, uR, uG, uFloor; uniform vec3 uImp;
varying vec3 vRest; varying vec3 vWN; varying vec3 vWP; varying float vEdge; varying vec4 vRnd; varying float vMoved; varying float vOuter;
mat3 rotAxis(vec3 a, float t) {
  float s = sin(t), c = cos(t), k = 1.0 - c;
  return mat3(c + a.x * a.x * k, a.x * a.y * k + a.z * s, a.x * a.z * k - a.y * s,
              a.x * a.y * k - a.z * s, c + a.y * a.y * k, a.y * a.z * k + a.x * s,
              a.x * a.z * k + a.y * s, a.y * a.z * k - a.x * s, c + a.z * a.z * k);
}
void main() {
  vec3 c = aCent; vec3 dir = normalize(c + vec3(1e-5));
  float tau = max(0.0, uTau - aRnd.x);
  vec3 away = normalize(c - uImp * 0.96 + vec3(1e-4));
  vec3 v = dir * (0.8 + 1.7 * aRnd.y) + away * (0.6 + 0.7 * aRnd.z) + vec3(0.0, 0.8 + 1.0 * aRnd.z, 0.0) + aAx * 0.3;
  vec3 d = v * tau;
  float y0 = c.y, y = y0 + v.y * tau - 0.5 * uG * tau * tau;
  if (y < uFloor && tau > 0.0) {
    float t1 = (v.y + sqrt(max(v.y * v.y + 2.0 * uG * (y0 - uFloor), 0.0))) / uG;
    float vy1 = -0.3 * (v.y - uG * t1), t2 = max(0.0, tau - t1);
    y = max(uFloor + vy1 * t2 - 0.5 * uG * t2 * t2, uFloor);
    d.xz *= 1.0 - 0.45 * smoothstep(t1, t1 + 0.6, tau);
  }
  d.y = y - y0;
  float ang = (2.5 + 8.0 * aRnd.w) * 0.8 * (1.0 - exp(-tau / 0.8)) * 1.2;
  mat3 R = rotAxis(normalize(aAx), ang);
  vec3 local = R * position;
  vec3 p = (c + d + local) * uR;
  vec4 w = modelMatrix * vec4(p, 1.0);
  vWP = w.xyz; vWN = normalize(mat3(modelMatrix) * (R * normal)); vRest = c + position; vEdge = aEdge; vRnd = aRnd; vMoved = smoothstep(0.0, 0.05, tau);
  float od = dot(normal, normalize(c + position)); vOuter = od > 0.5 ? 1.0 : 0.0;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Me=`
precision highp float;
uniform vec3 uSeed[${K}]; uniform vec3 uImp; uniform float uCrack, uShow, uFlash, uFade, uTime, uCrackFade; uniform vec3 uTint;
varying vec3 vRest; varying vec3 vWN; varying vec3 vWP; varying float vEdge; varying vec4 vRnd; varying float vMoved; varying float vOuter;
float h(float x) { return fract(sin(x * 91.3) * 43758.5); }
vec3 studio(vec3 R, float seed) {
  vec3 col = mix(vec3(0.01, 0.014, 0.03), vec3(0.08, 0.12, 0.22), clamp(R.y * 0.5 + 0.5, 0.0, 1.0));
  vec3 k1 = normalize(vec3(-0.5, 0.75, 0.45)), k2 = normalize(vec3(0.8, 0.25, -0.5)), k3 = normalize(vec3(0.0, -0.5, 0.85));
  col += vec3(0.9, 0.95, 1.0) * pow(max(dot(R, k1), 0.0), 18.0) * 2.4;
  col += vec3(1.0, 0.72, 0.45) * pow(max(dot(R, k2), 0.0), 10.0) * 1.2;
  col += vec3(0.4, 0.7, 1.0) * pow(max(dot(R, k3), 0.0), 6.0) * 0.5;
  col += vec3(1.0) * smoothstep(0.93, 0.99, sin(R.x * 7.0 + seed * 20.0) * sin(R.y * 5.0 + seed * 11.0)) * 0.6;   // window-pane sweeps
  return col;
}
void main() {
  vec3 V = normalize(cameraPosition - vWP);
  vec3 N0 = normalize(vWN), N = dot(N0, V) < 0.0 ? -N0 : N0;
  float ndv = max(dot(N, V), 0.0), fres = pow(1.0 - ndv, 3.0);
  vec3 R = reflect(-V, N);
  vec3 rest = normalize(vRest);
  // ---- cracks: thin lines on the borders of the Voronoi cells (nearest vs second nearest seed), growing out of the impact point
  float d1 = 9.0, d2 = 9.0;
  if (uCrackFade > 0.001) for (int i = 0; i < ${K}; i++) { float d = distance(rest, uSeed[i]); if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d; }
  float edgeD = (d2 - d1) * 0.5;
  float ang = acos(clamp(dot(rest, uImp), -1.0, 1.0));
  float front = uCrack * 3.6;
  float inside = smoothstep(front, front - 0.35, ang);
  float hot0 = exp(-max(front - ang, 0.0) * 3.2);
  float lineW = 0.0026 + 0.0016 * hot0;
  float line = (1.0 - smoothstep(lineW, lineW * 2.6, edgeD)) * inside * vOuter * step(0.12, dot(N0, V));
  float hot = exp(-max(front - ang, 0.0) * 3.2);                      // the crack tip burns brightest
  vec3 crackC = mix(vec3(0.45, 0.72, 1.0), vec3(1.0, 0.95, 0.85), hot) * (0.5 + 1.5 * hot) * line * uCrackFade;
  // ---- the glass of the shards (only once they have left: before that the original globe is still drawn): clear body, bright rims, studio glints
  float rim = (1.0 - smoothstep(0.0, 0.2, vEdge));
  vec3 env = studio(R, vRnd.z);
  float glint = clamp(dot(env, vec3(0.33)) - 0.12, 0.0, 3.0);
  vec3 glassE = env * (0.05 + 0.8 * fres) * uTint * 0.45 + uTint * rim * (0.12 + 0.3 * fres) + vec3(0.8, 0.95, 1.0) * glint * 0.3;
  glassE += vec3(1.0, 0.95, 0.85) * uFlash * (0.15 + rim) * (1.0 - vMoved * 0.6);
  float glassA = clamp(0.05 + 0.3 * fres + rim * 0.22 + glint * 0.3, 0.0, 0.9);
  float calm = mix(0.3, 1.0, vMoved);
  vec3 col = crackC + glassE * uShow * calm;
  float a = clamp(max(glassA * uShow * calm, line * 0.8 * uCrackFade), 0.0, 1.0);
  col *= 1.0 - uFade; a *= 1.0 - uFade;
  gl_FragColor = vec4(col, a);
}`;function Ne(e,t){let r=[];for(let t=0;t<K;t++){let i=1-2*(t+.5)/K,a=Math.sqrt(1-i*i),o=t*2.399963,s=new n(Math.cos(o)*a,i,Math.sin(o)*a);s.add(new n(e()-.5,e()-.5,e()-.5).multiplyScalar(.2)).normalize(),r.push(s)}let a=new Oe(r).getAttribute(`position`),o=(e,t,n)=>`${Math.round(e*1e4)}_${Math.round(t*1e4)}_${Math.round(n*1e4)}`,s=new Map;r.forEach((e,t)=>s.set(o(e.x,e.y,e.z),t));let c=Array.from({length:K},()=>[]);for(let e=0;e<a.count;e+=3){let t=[0,1,2].map(t=>new n(a.getX(e+t),a.getY(e+t),a.getZ(e+t))),r=t[1].clone().sub(t[0]).cross(t[2].clone().sub(t[0])).normalize();r.dot(t[0].clone().add(t[1]).add(t[2]))<0&&r.negate();for(let e of t){let t=s.get(o(e.x,e.y,e.z));t!=null&&c[t].push(r)}}let l={p:[],n:[],c:[],r:[],a:[],e:[]},d=(e,t,n,r,i,a)=>{l.p.push(e.x-n.x,e.y-n.y,e.z-n.z),l.n.push(t.x,t.y,t.z),l.c.push(n.x,n.y,n.z),l.r.push(r[0],r[1],r[2],r[3]),l.a.push(i.x,i.y,i.z),l.e.push(a)},f=.945,p=new n;for(let i=0;i<K;i++){let a=r[i],o=c[i];if(o.length<3)continue;let s=new n(0,1,0);Math.abs(a.y)>.9&&s.set(1,0,0),s.sub(a.clone().multiplyScalar(s.dot(a))).normalize();let l=a.clone().cross(s);o.sort((e,t)=>Math.atan2(e.dot(l),e.dot(s))-Math.atan2(t.dot(l),t.dot(s)));let u=a.clone().multiplyScalar(1-ke/2),m=Math.acos(Math.max(-1,Math.min(1,a.dot(t)))),h=[L(m/Math.PI)*.34+e()*.03,e(),e(),e()],g=new n(e()-.5,e()-.5,e()-.5).normalize(),_=o.length,v=(e,t,n)=>{let r=[];for(let i=0;i<=3;i++){let a=[];for(let r=0;r<=3-i;r++){let o=(3-i-r)/3,s=i/3,c=r/3;a.push({p:e.clone().multiplyScalar(o).addScaledVector(t,s).addScaledVector(n,c).normalize(),e:o})}r.push(a)}return r};for(let e=0;e<_;e++){let t=o[e],n=o[(e+1)%_],r=v(a,t,n),i=(e,t,n)=>{for(let[r,i,a]of[[[e,t,n],1,!1],[[e,n,t],f,!0]])for(let e of r)p.copy(e.p),a&&p.negate(),d(e.p.clone().multiplyScalar(i),p.clone(),u,h,g,e.e)};for(let e=0;e<3;e++)for(let t=0;t<3-e;t++)i(r[e][t],r[e+1][t],r[e][t+1]),t<3-e-1&&i(r[e+1][t],r[e+1][t+1],r[e][t+1]);for(let e=0;e<3;e++){let t=r[3-e][e].p,n=r[3-e-1][e+1].p,i=t.clone().multiplyScalar(f),a=n.clone().multiplyScalar(f);p.copy(n).sub(t).cross(i.clone().sub(t)).normalize();let o=t.clone().add(n).multiplyScalar(.5).sub(u);p.dot(o)<0&&p.negate();for(let e of[t,n,a,t,a,i])d(e,p.clone(),u,h,g,0)}}}let m=new u;return m.setAttribute(`position`,new i(l.p,3)),m.setAttribute(`normal`,new i(l.n,3)),m.setAttribute(`aCent`,new i(l.c,3)),m.setAttribute(`aRnd`,new i(l.r,4)),m.setAttribute(`aAx`,new i(l.a,3)),m.setAttribute(`aEdge`,new i(l.e,1)),m.boundingSphere=new h(new n,30),{geo:m,seeds:r}}function Pe(e){let t=!1,r=new s;r.name=`tr-glass`;let i=null,a={uSeed:{value:[]},uImp:{value:new n(0,0,1)},uCrack:{value:0},uShow:{value:0},uFlash:{value:0},uFade:{value:0},uTime:{value:0},uCrackFade:{value:1},uTau:{value:0},uR:{value:2.7},uG:{value:3.4},uFloor:{value:-3},uTint:{value:new x(.55,.78,1)}},l=[],u=new n,d=2.7,f=.3,p=e=>Math.max(0,e-f)*3;return{leg:e,cues:[{at:.1,name:`tr:crack`},{at:f,name:`tr:shatter`}],build(e){if(t)return;t=!0;let s=e.world?.brain;if(!s)return;u.copy(s.group.position),d=s.radius;let f=e.flightCam(0),p=new n(f.pos[0]-u.x,f.pos[1]-u.y,f.pos[2]-u.z).normalize(),m=new n(0,1,0).cross(p).normalize(),h=p.clone().add(m.multiplyScalar(.34)).add(new n(0,.5,0)).normalize();a.uImp.value.copy(h);let{geo:g,seeds:_}=Ne(se(2718),h);a.uSeed.value=_;let v=new o({vertexShader:je,fragmentShader:Me,uniforms:a,transparent:!0,depthWrite:!1,depthTest:!0,blending:5,blendEquation:100,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205,side:2});i=new c(g,v),i.frustumCulled=!1,i.renderOrder=45,r.add(i),r.visible=!1,e.q.reflect||(r.userData.noReflect=!0),e.scene.add(r),s.group.traverse(e=>{(e.name===`brain-glass-back`||e.name===`brain-glass-front`)&&l.push(e)}),I(e,r)},setVisible(e,t){if(r.visible=e&&!!i,!e)for(let e of l)e.visible=!0},frame(e,t,n){let{u:o,t:s}=e,c=n.world?.brain;if(t.field=1,!i||!c)return;u.copy(c.group.position),d=c.radius*c.group.scale.x*1.008,r.position.copy(u),a.uR.value=d,a.uTime.value=s,a.uFloor.value=(Ae-u.y)/d,a.uG.value=3.1;let m=F(.02,f,o);a.uCrack.value=m,a.uTau.value=p(o);let h=o>=f;a.uShow.value=+!!h,a.uFlash.value=Math.exp(-p(o)/.1)*(h?.5:0),a.uCrackFade.value=1-F(f,.42,o),a.uFade.value=F(.8,.98,o);for(let e of l)e.visible=!h;r.visible=o>.02&&o<.99},camera(e,t,n){if(!i)return null;let r=n.flightCam(0),a=1-F(.34,.72,e),o=.1*F(0,.3,e),s=p(e),c=Math.exp(-s/.16)*.06*(e>=f),l=u.x-r.pos[0],d=u.y-r.pos[1],m=u.z-r.pos[2],h={pos:[r.pos[0]+l*o+Math.sin(s*71)*c,r.pos[1]+d*o+Math.cos(s*83)*c,r.pos[2]+m*o],target:[r.target[0],r.target[1],r.target[2]],fov:r.fov-1.5*Math.exp(-s/.2)*(e>=f)};return{pos:[P(t.pos[0],h.pos[0],a),P(t.pos[1],h.pos[1],a),P(t.pos[2],h.pos[2],a)],target:[P(t.target[0],h.target[0],a),P(t.target[1],h.target[1],a),P(t.target[2],h.target[2],a)],fov:P(t.fov,h.fov,a)}},dispose(){r.removeFromParent()}}}var Fe=.8,Ie=.1,Le=.46,Re=.34,ze=[.05,.11],Be=[.84,.93],Ve=`
precision highp float;
attribute vec2 aCell; attribute vec2 aCorner;
uniform float uU; uniform vec2 uGrid;
varying vec2 vCenterUv; varying vec2 vLocal; varying float vAng; varying float vT; varying vec2 vCell;
const float PI = 3.14159265;
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float outBack(float x) { x = clamp(x, 0.0, 1.0) - 1.0; return 1.0 + 2.0 * x * x * x + 1.0 * x * x; }
void main() {
  float cols = uGrid.x, rows = uGrid.y;
  float dx = aCell.x / max(1.0, cols - 1.0), dy = (rows - 1.0 - aCell.y) / max(1.0, rows - 1.0);   // row 0 is the bottom row: the top row ranks first
  float d = clamp(0.5 * dx + 0.5 * dy + (h21(aCell) - 0.5) * 0.07, 0.0, 1.0);
  float t = clamp((uU - mix(${Ie.toFixed(3)}, ${Le.toFixed(3)}, d)) / ${Re.toFixed(3)}, 0.0, 1.0);
  float s = t * t * (3.0 - 2.0 * t);
  float ang = PI * outBack(s);
  vec2 hf = 1.0 / uGrid;                                     // half a tile, in NDC
  vec2 c = (aCell + 0.5) / uGrid * 2.0 - 1.0;
  vec2 l = aCorner * hf * 0.985;                           // the grout
  float sn = sin(ang), cs = cos(ang);
  float z = l.y * sn;                                        // the top edge swings toward the viewer first
  float w = max(0.25, 1.0 - z * 1.25);
  vec2 ndc = c + vec2(l.x, l.y * cs) / w;
  gl_Position = vec4(vec3(ndc, -0.9 - z * 0.05) * w, w);
  vCenterUv = c * 0.5 + 0.5; vLocal = aCorner * 0.985; vAng = ang; vT = t; vCell = aCell;
}`,He=`
precision highp float;
uniform sampler2D uTexA, uTexB;
uniform vec2 uGrid; uniform float uU, uFront, uBack, uCopy, uTint;
uniform vec3 uAccent;
varying vec2 vCenterUv; varying vec2 vLocal; varying float vAng; varying float vT; varying vec2 vCell;
${j}
${de}
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main() {
  vec2 halfUv = 0.5 / uGrid;
  bool front = gl_FrontFacing;
  vec2 uv = vCenterUv + (front ? vLocal : vec2(vLocal.x, -vLocal.y)) * halfUv;   // the back is printed upright for the viewer: mirrored in the card's own y
  vec3 col = softClip(front ? texture2D(uTexA, uv).rgb : texture2D(uTexB, uv).rgb);
  float s = abs(sin(vAng));
  // stepped brightness per tile, a cast of the destination accent, a lit edge and a darkening as the card turns edge-on
  float step4 = floor(h21(vCell + 3.7) * 4.0) / 4.0;
  float flick = h21(vCell + floor(uU * 26.0));
  col *= 1.0 + (step4 - 0.4) * 0.34 * uTint;
  col = mix(col, col * (0.55 + 1.1 * uAccent), 0.22 * uTint * step4);
  // a key light high and in front: a card lifting its top edge turns away from it (dark), and flares as its back swings round into the light and lands
  float sa = sin(vAng), ca = cos(vAng);
  float lit = max(front ? (-0.55 * sa + 0.83 * ca) : (0.55 * sa - 0.83 * ca), 0.0);
  col *= mix(0.3, 1.0, min(lit / 0.83, 1.0));
  col += vec3(1.0, 0.93, 0.86) * 0.24 * pow(clamp(lit / 0.83, 0.0, 1.2), 9.0) * s;
  col += uAccent * 0.22 * pow(s, 3.0) * (0.5 + flick);
  float edge = smoothstep(0.86, 1.0, abs(vLocal.y) / 0.985) * (0.1 + 0.5 * s);
  col += vec3(1.0, 0.94, 0.88) * edge * 0.4;
  float a = front ? uFront : uBack;
  a *= 1.0 - uCopy * (1.0 - laneMask()) * 0.94;               // the copy lane stays the dark ground while copy is on screen
  gl_FragColor = vec4(col * a, a);
}`;function Ue(e){let t=!1,i=new ue(.7),a=new ue(.7),s=null,l=0,d=0,f=new x(C(e.B.area)?.accent??`#FF6A8A`),p={uTexA:{value:null},uTexB:{value:null},uGrid:{value:new r(8,5)},uU:{value:0},uFront:{value:0},uBack:{value:1},uCopy:{value:0},uTint:{value:0},uAccent:{value:new n(f.r,f.g,f.b)},uLane:{value:null},uRes:{value:null},uLaneOn:A},m=e=>{let t=e.res.x,n=e.res.y,r=Math.max(150,Math.min(t,n)/5);return{c:Math.max(3,Math.min(14,Math.round(t/r))),r:Math.max(3,Math.min(10,Math.round(n/r)))}},h=(e,t)=>{let n=e*t,r=new Float32Array(n*12),i=new Float32Array(n*8),a=new Float32Array(n*8),o=[],s=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let n=0;n<t;n++)for(let t=0;t<e;t++){let c=n*e+t;for(let e=0;e<4;e++){let o=c*4+e;i[o*2]=t,i[o*2+1]=n,a[o*2]=s[e][0],a[o*2+1]=s[e][1],r[o*3]=s[e][0],r[o*3+1]=s[e][1]}o.push(c*4,c*4+1,c*4+2,c*4,c*4+2,c*4+3)}let c=new u;return c.setAttribute(`position`,new b(r,3)),c.setAttribute(`aCell`,new b(i,2)),c.setAttribute(`aCorner`,new b(a,2)),c.setIndex(o),c};return{leg:e,cues:[{at:.16,name:`tr:mosaic`}],build(e){if(t)return;p.uLane.value=e.lane.u,p.uRes.value=e.res;let n=new o({vertexShader:Ve,fragmentShader:He,uniforms:p,side:2});R(n,!0),n.depthWrite=!0;let r=m(e);l=r.c,d=r.r,s=new c(h(l,d),n),s.frustumCulled=!1,s.renderOrder=100,s.visible=!1,s.name=`tr-mosaic`,s.userData.noReflect=!0,p.uGrid.value.set(l,d),e.scene.add(s),i.size(e),a.size(e),I(e,s),t=!0},setVisible(e){!e&&s&&(s.visible=!1)},frame(e,n,r){if(!t||!s)return;let{u:o}=e;r.renderer.getDrawingBufferSize(r.res);let c=m(r);(c.c!==l||c.r!==d)&&(l=c.c,d=c.r,s.geometry.dispose(),s.geometry=h(l,d),p.uGrid.value.set(l,d));let u=F(ze[0],ze[1],o),f=1-F(Be[0],Be[1],o);p.uU.value=o,p.uFront.value=u,p.uBack.value=f,p.uCopy.value=e.copy,p.uTint.value=F(.1,.26,o)*(1-F(.62,.84,o)),s.visible=o>.045&&o<.935,s.visible&&(o<.83&&i.render(r,We(r),{hide:[s]}),o>.09&&a.render(r,r.flightCam(1),{hide:[s],mix:1}),p.uTexA.value=i.texture,p.uTexB.value=a.texture),n.field=1-1*F(.07,.14,o)*f,n.flash=0},camera(e,t,n){return fe(n,e,Fe)},dispose(){s?.removeFromParent(),s?.geometry.dispose(),i.dispose(),a.dispose()}}}function We(e){let t=e.camera,r=new n(0,0,-10).applyQuaternion(t.quaternion).add(t.position);return{pos:[t.position.x,t.position.y,t.position.z],target:[r.x,r.y,r.z],fov:t.fov}}var q=Math.PI/180,Ge=22*q,Ke=7.2,qe=2.8,Je=6.4,Ye=.04,Xe=.6,Ze=[{slot:-2,id:`recruiting-os`,accent:`#FF4A2B`,img:`jobs-mobile`},{slot:-1,id:`cloudflare`,accent:`#8FB8FF`,img:`page-1-title`},{slot:0,id:`qvr`,accent:`#B48CFF`},{slot:1,id:`appfolio`,accent:`#D9A441`,img:`page-1-title`},{slot:2,id:`chomchom`,accent:`#FF6A8A`,img:`story-details`}],Qe=t=>e.find(e=>e.id===t),$e=e=>e.replace(/\s*\(.*?\)/g,``).replace(/:.*$/,``).replace(/\s+Pitch$/,``).trim();function J(e,t,n){let r=[],i=``;for(let a of t.split(/\s+/)){let t=i?i+` `+a:a;e.measureText(t).width>n&&i?(r.push(i),i=a):i=t}return i&&r.push(i),r}function et(e,t,n,r){let i=e.width,a=e.height,o=e.getContext(`2d`),s=new x(n),c=e=>`rgb(${Math.round((s.r*e+.03*(1-e))*255)},${Math.round((s.g*e+.03*(1-e))*255)},${Math.round((s.b*e+.04*(1-e))*255)})`,l=o.createLinearGradient(0,0,0,a);l.addColorStop(0,c(.2)),l.addColorStop(.55,`#0b0b11`),l.addColorStop(1,`#060609`),o.fillStyle=l,o.fillRect(0,0,i,a),o.strokeStyle=`rgba(237,230,214,0.05)`,o.lineWidth=1;for(let e=64;e<i;e+=64)o.beginPath(),o.moveTo(e+.5,0),o.lineTo(e+.5,a),o.stroke();let u=o.createRadialGradient(i*.5,a*.36,10,i*.5,a*.36,i*.8);u.addColorStop(0,c(.34).replace(`rgb`,`rgba`).replace(`)`,`,0.5)`)),u.addColorStop(1,`rgba(0,0,0,0)`),o.fillStyle=u,o.fillRect(0,0,i,a),o.font=`500 21px 'IBM Plex Mono', ui-monospace, monospace`,o.textBaseline=`alphabetic`,o.fillStyle=n,o.textAlign=`left`,o.fillText(t.type.toUpperCase(),40,172),o.fillStyle=`rgba(237,230,214,0.7)`,o.textAlign=`right`,o.fillText(t.year,i-40,172),o.strokeStyle=n,o.globalAlpha=.5,o.beginPath(),o.moveTo(40,190.5),o.lineTo(i-40,190.5),o.stroke(),o.globalAlpha=1;let d=i-80;if(r&&r.naturalWidth){let e=r.naturalHeight/r.naturalWidth,t=d,n=t*e;n>520&&(n=520,t=n/e);let i=40+(d-t)/2,a=222+(520-n)/2;o.save(),o.shadowColor=`rgba(0,0,0,0.6)`,o.shadowBlur=36,o.shadowOffsetY=14,o.fillStyle=`#000`,o.fillRect(i,a,t,n),o.restore(),o.drawImage(r,i,a,t,n),o.fillStyle=`rgba(0,0,0,0.2)`,o.fillRect(i,a,t,n),o.strokeStyle=`rgba(237,230,214,0.42)`,o.lineWidth=2,o.strokeRect(i-1,a-1,t+2,n+2)}else if(t.id===`qvr`){o.strokeStyle=n,o.lineWidth=1.6;let e=i/2,t=(t,n)=>{let r=(t/18-.5)*2,i=(n/18-.5)*2,a=.42*(1-.8*Math.exp(-3.2*(r*r+.6*i*i)))+r*r*.28-.18*i*.6+.09*Math.sin(3.4*i+1.2)*(1-Math.abs(r)*.5);return[e+(r-i*.52)*(d*.38),508+(r*.12+i*.36)*(d*.42)-d*.4*a]};for(let e=0;e<=18;e++){o.globalAlpha=.3+e/18*.7,o.beginPath();for(let n=0;n<=18;n++){let[r,i]=t(n,e);n?o.lineTo(r,i):o.moveTo(r,i)}o.stroke()}for(let e=0;e<=18;e++){o.globalAlpha=.25+e/18*.55,o.beginPath();for(let n=0;n<=18;n++){let[r,i]=t(e,n);n?o.lineTo(r,i):o.moveTo(r,i)}o.stroke()}o.globalAlpha=1}o.strokeStyle=`rgba(237,230,214,0.5)`,o.lineWidth=1.5;for(let[e,t]of[[26,140],[i-26,140],[26,a-140],[i-26,a-140]])o.beginPath(),o.moveTo(e-7,t),o.lineTo(e+7,t),o.moveTo(e,t-7),o.lineTo(e,t+7),o.stroke();o.fillStyle=`#EDE6D6`,o.textAlign=`left`;let f=72;o.font=`600 ${f}px 'Bodoni Moda Variable', 'Bodoni Moda', Didot, serif`;let p=$e(t.name),m=J(o,p,i-96);for(;m.length>2&&f>52;)f-=6,o.font=`600 ${f}px 'Bodoni Moda Variable', 'Bodoni Moda', Didot, serif`,m=J(o,p,i-96);let h=834+(m.length>1?0:34);m.forEach((e,t)=>o.fillText(e,40,h+t*f*.98)),o.font=`400 22px 'IBM Plex Mono', ui-monospace, monospace`,o.fillStyle=`rgba(237,230,214,0.78)`,J(o,t.role,i-80).slice(0,2).forEach((e,t)=>o.fillText(e,40,h+m.length*f*.98+18+t*30))}var tt=`
uniform vec3 uC, uT, uO; uniform float uRb, uW, uH, uLift;
attribute vec2 aP;
varying vec3 vP; varying vec3 vN; varying vec2 vUv;
void main() {
  float x = aP.x * uW * 0.5, a = x / uRb;
  vec3 P = uC + uT * (uRb * sin(a)) + uO * (uRb * (1.0 - cos(a)));
  P.y += aP.y * uH * 0.5 + uLift;
  vP = P; vN = normalize(-uO * cos(a) + uT * sin(a)); vUv = aP * 0.5 + 0.5;
  gl_Position = projectionMatrix * vec4(P, 1.0);
}`,nt=`
precision highp float;
uniform sampler2D uTex; uniform vec3 uAccent; uniform float uSpeed, uCopy, uGlint;
varying vec3 vP; varying vec3 vN; varying vec2 vUv;
${j}
// a dark studio behind the camera (a panel that faces the lens reflects what stands behind it): tall softboxes at fixed azimuths, a wide overhead, a warm kicker;
// the reflection slides across a panel as it swings and fans across it where it curves
vec3 studio(vec3 R) {
  float az = atan(R.x, R.z), el = R.y;
  vec3 c = vec3(0.012, 0.013, 0.02) + vec3(0.04, 0.05, 0.08) * smoothstep(-0.2, 0.9, el);
  c += vec3(1.0, 0.97, 0.92) * 2.6 * smoothstep(0.12, 0.0, abs(az - 0.34)) * smoothstep(-0.7, 0.1, el);
  c += vec3(0.78, 0.88, 1.0) * 2.0 * smoothstep(0.2, 0.0, abs(az + 0.62));
  c += vec3(1.0, 0.8, 0.6) * 1.7 * smoothstep(0.12, 0.0, abs(az - 1.05));
  c += vec3(0.9, 0.95, 1.0) * 1.2 * smoothstep(0.09, 0.0, abs(abs(az) - 2.1));
  c += vec3(1.0, 0.98, 0.95) * 1.4 * smoothstep(0.35, 0.95, el);
  return c;
}
void main() {
  vec3 V = normalize(-vP), N = normalize(vN);
  bool back = dot(N, V) < 0.0; if (back) N = -N;
  float fr = pow(1.0 - max(dot(N, V), 0.0), 5.0);
  // the picture, with a chromatic fringe along the sweep (zero at rest)
  float k = 0.010 * uSpeed;
  vec3 tex = vec3(texture2D(uTex, vUv + vec2(k, 0.0)).r, texture2D(uTex, vUv).g, texture2D(uTex, vUv - vec2(k, 0.0)).b);
  vec3 col = tex * (0.74 + 0.26 * max(dot(N, V), 0.0));
  vec3 R = reflect(-V, N);
  col += studio(R) * (0.10 + 1.0 * (0.04 + 0.96 * fr)) * (0.6 + 0.4 * uGlint);   // the glossy coat: faint head-on, strong at the grazing edges
  float e = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
  col += vec3(1.0, 0.96, 0.9) * (1.0 - smoothstep(0.0, 0.008, e)) * 0.55;               // lit glass edge
  col *= mix(1.0, 0.55, float(back));
  float a = 1.0 - uCopy * (1.0 - laneMask()) * 0.95;                                       // the copy lane stays clear while copy is on screen
  gl_FragColor = vec4(col * a, a);
}`;function rt(e){let t=!1,r=new s;r.name=`tr-panels`,r.userData.noReflect=!0,r.frustumCulled=!1;let i=[],a=e=>{et(e.cv,e.p,e.accent,e.img),e.tex.needsUpdate=!0};return{leg:e,cues:[{at:.14,name:`tr:panels`}],build(e){if(t)return;let s=new Float32Array(174),l=new Float32Array(116),f=[];for(let e=0;e<=28;e++)for(let t=0;t<2;t++){let n=e*2+t;l[n*2]=e/28*2-1,l[n*2+1]=t*2-1}for(let e=0;e<28;e++){let t=e*2,n=t+1,r=t+2,i=t+3;f.push(t,r,n,n,r,i)}let p=new u;p.setAttribute(`position`,new b(s,3)),p.setAttribute(`aP`,new b(l,2)),p.setIndex(f);for(let t of Ze){let s=Qe(t.id);if(!s)continue;let l=document.createElement(`canvas`);l.width=512,l.height=1150;let u=new g(l);u.colorSpace=``,u.anisotropy=4,u.minFilter=d,u.generateMipmaps=!0;let f=new o({vertexShader:tt,fragmentShader:nt,side:2,uniforms:{uC:{value:new n},uT:{value:new n(1,0,0)},uO:{value:new n(0,0,-1)},uRb:{value:5},uW:{value:qe},uH:{value:Je},uLift:{value:0},uTex:{value:u},uAccent:{value:new x(t.accent)},uSpeed:{value:0},uCopy:{value:0},uGlint:{value:1},uLane:{value:e.lane.u},uRes:{value:e.res},uLaneOn:A}});R(f,!1);let m=new c(p,f);m.frustumCulled=!1,m.visible=!1,m.renderOrder=100,r.add(m);let h={mesh:m,mat:f,slot:t.slot,cv:l,tex:u,p:s,accent:t.accent,img:null};i.push(h),a(h);let _=t.img?re[t.id]?.find(e=>e.slug===t.img):void 0;if(_){let e=new Image;e.onload=()=>{h.img=e,a(h)},e.src=`/portfolio/`+_.sm}}Promise.all([document.fonts.load(`600 80px 'Bodoni Moda Variable'`),document.fonts.load(`500 20px 'IBM Plex Mono'`)]).then(()=>i.forEach(a)).catch(()=>{}),r.visible=!1,e.scene.add(r),I(e,r),t=!0},setVisible(e){e||(r.visible=!1)},frame(e,n){if(!t)return;let{u:a}=e,o=L((a-Ye)/.5),s=135*q*(1-o)**2.2,c=a>Ye&&a<.56?(1-o)**1.2:0,l=ae(L((a-Xe)/.24)),u=oe(L((a-.66)/.26)),d=!1;for(let t of i){let n=t.slot,r=n*Ge+s+(n===0?0:Math.sign(n)*62*q*l),i=Math.abs(r),o=Ke-2.6*F(8*q,36*q,i)*(1-F(70*q,110*q,i)),f=Math.cos(r)>-.12&&a>.02&&a<.94&&!(n===0&&u>=1);if(t.mesh.visible=f,!f)continue;d=!0;let p=Math.sin(r),m=Math.cos(r),h=t.mat.uniforms;h.uC.value.set(o*p,0,-o*m),h.uO.value.set(p,0,-m),h.uT.value.set(m,0,p),h.uRb.value=6.2-3*c,h.uLift.value=n===0?Je*1.02*u:0,h.uSpeed.value=c,h.uCopy.value=e.copy,h.uGlint.value=.7+.5*Math.sin(r*1.3+1),t.mesh.renderOrder=100+Math.round((12-o)*100)}r.visible=d,n.field=1-.9*F(.3,.5,a)*(1-F(.66,.86,a)),n.flash=0},camera(){return null},dispose(){r.removeFromParent();for(let e of i)e.mat.dispose(),e.tex.dispose()}}}var Y=.5,it=`
varying vec2 vSurf;
void main() { vSurf = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,at=`
varying vec2 vSurf;
void main() { vSurf = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,ot=`
precision highp float;
uniform sampler2D tRT; uniform vec2 uRes; uniform float uTime, uA, uMix, uScan, uGlitch, uBoost, uAdd;
varying vec2 vSurf;
float h12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main() {
  vec2 sc = gl_FragCoord.xy / uRes;
  vec2 q = mix(vSurf, sc, uMix);
  // a rolling tear: a band that slides down and shoves the picture sideways
  float bandY = fract(uTime * 0.37 + 0.2), by = abs(sc.y - bandY);
  float tear = smoothstep(0.06, 0.0, by) * (h12(vec2(floor(sc.y * 90.0), floor(uTime * 12.0))) - 0.5) * (0.02 + 0.08 * uGlitch);
  q.x += tear + uGlitch * (h12(vec2(floor(sc.y * 40.0), floor(uTime * 20.0))) - 0.5) * 0.03;
  vec2 d = q - 0.5;
  float ca = (0.0015 + 0.007 * uGlitch) * (0.35 + 2.0 * length(d));
  vec3 col;
  col.r = texture2D(tRT, q + vec2(ca, 0.0)).r; col.g = texture2D(tRT, q).g; col.b = texture2D(tRT, q - vec2(ca, 0.0)).b;
  col = 1.0 - exp(-col * 2.1);                                  // the render target is raw HDR: soft-clip it like the post stack does
  float scan = 1.0 - uScan * 0.38 * pow(0.5 + 0.5 * sin(gl_FragCoord.y * 2.0944), 1.4);
  float m = mod(gl_FragCoord.x, 3.0);
  vec3 mask = mix(vec3(1.0), vec3(m < 1.0 ? 1.0 : 0.8, m >= 1.0 && m < 2.0 ? 1.0 : 0.8, m >= 2.0 ? 1.0 : 0.8), uScan * 0.7);
  float rr = length(vSurf - 0.5) * 2.0;
  float vig = 1.0 - (1.0 - uMix) * smoothstep(0.65, 1.05, rr) * 0.9;
  float n = h12(gl_FragCoord.xy + floor(uTime * 30.0) * 17.0) - 0.5;
  col = col * scan * mask * vig + n * 0.06 * (uScan + uGlitch) + vec3(0.7, 0.85, 1.0) * uBoost;
  col += vec3(0.15, 0.4, 0.5) * uScan * 0.06;
  gl_FragColor = vec4(col * mix(uAdd, 1.0, uA), uA);   // premultiplied: uA = 0 adds the picture over the screen's own, uA = 1 replaces it
}`;function st(e){let i=!1,l=!1,u=null,d=null,p=null,h=new s;h.name=`tr-portal`,h.userData.noReflect=!0;let g=null,_=new t(35,1.6,.1,400),b={tRT:{value:null},uRes:{value:new r(1440,900)},uTime:{value:0},uA:{value:0},uMix:{value:0},uScan:{value:1},uGlitch:{value:0},uBoost:{value:0},uAdd:{value:.55}},x={...b,uA:{value:0},uAdd:{value:0}},S=new n,C=new n,w=new y,T=new n,E=[],D=(e,t)=>{let n=e.flightCam(1),r=n.pos[0]-n.target[0],i=n.pos[1]-n.target[1],a=n.pos[2]-n.target[2],o=Math.hypot(r,i,a)||1,s=15*(1-le((t-Y)/.5));return{pos:[n.pos[0]-r/o*s,n.pos[1]-i/o*s,n.pos[2]-a/o*s],target:[...n.target],fov:n.fov}},O=e=>{let t=Math.max(64,Math.round(Math.min(e.res.x*.5,1e3))),n=Math.max(64,Math.round(e.res.y*(t/Math.max(1,e.res.x))));g?(g.width!==t||g.height!==n)&&g.setSize(t,n):(g=new f(t,n,{type:v,depthBuffer:!0,samples:0}),g.texture.minFilter=m,g.texture.magFilter=m,g.texture.generateMipmaps=!1,b.tRT.value=g.texture)};return{leg:e,cues:[{at:.42,name:`tr:portal`}],build(e){if(i||(i=!0,(e.world?.root)?.traverse(e=>{!u&&e.isMesh&&e.userData.part===`screen`&&(u=e)}),!u||!u.parent))return;let t=new o({vertexShader:it,fragmentShader:ot,uniforms:b,transparent:!0,depthWrite:!1,depthTest:!0,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205});d=new c(u.geometry,t),d.position.copy(u.position),d.quaternion.copy(u.quaternion),d.scale.copy(u.scale),d.translateZ(.004),d.renderOrder=20,d.visible=!1,u.parent.add(d);let n=new o({vertexShader:at,fragmentShader:ot,uniforms:x,transparent:!0,depthWrite:!1,depthTest:!1,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205});p=new c(new a(2,2),n),p.frustumCulled=!1,p.renderOrder=100,p.visible=!1,h.add(p),e.scene.add(h),O(e),I(e,h,d),l=!0},setVisible(e){e||(d&&(d.visible=!1),p&&(p.visible=!1))},frame(e,t,n){if(!l||!d||!p||!u)return;let{u:r,t:i}=e,a=r<Y;b.uTime.value=i,x.uTime.value=i,n.renderer.getDrawingBufferSize(n.res),b.uRes.value.copy(n.res),x.uRes.value.copy(n.res);let o=Math.exp(-(((r-Y)/.045)**2))*.9+.35*F(.22,.36,r)*(1-F(.4,.5,r)),s=Math.exp(-(((r-Y)/.02)**2))*.32;if(b.uGlitch.value=x.uGlitch.value=o,b.uBoost.value=x.uBoost.value=s,b.uMix.value=x.uMix.value=a?F(.26,.44,r):1,b.uScan.value=x.uScan.value=a?1:1-F(.58,.78,r),b.uA.value=F(.4,.48,r),b.uAdd.value=.7*F(.12,.34,r),x.uA.value=a?0:1-F(.6,.78,r),d.visible=a&&(b.uA.value>.002||b.uAdd.value>.002),p.visible=!a&&x.uA.value>.002,r>.14&&r<.8){O(n);let e=D(n,Math.max(r,Y));_.position.set(...e.pos),_.up.set(0,1,0),_.lookAt(e.target[0],e.target[1],e.target[2]),_.fov=e.fov,_.aspect=n.res.x/Math.max(1,n.res.y),_.near=n.camera.near,_.far=n.camera.far,_.updateProjectionMatrix(),_.updateMatrixWorld(!0);let t=n.renderer,i=t.getRenderTarget();E=[];for(let e of[d,p,h,n.scene.getObjectByName(`atmos-mirror`)])e&&e.visible&&(e.visible=!1,E.push(e));for(let e of n.scene.children)e.userData.noReflect&&e.visible&&!E.includes(e)&&(e.visible=!1,E.push(e));let o=n.field.points?.material?.uniforms,s=o?.uDpr?.value;o?.uDpr&&s!=null&&(o.uDpr.value=s*(g.width/Math.max(1,n.res.x))),n.field.setFieldAlpha?.(1);let c=A.value;A.value=0;try{t.setRenderTarget(g),t.clear(),t.render(n.scene,_)}finally{t.setRenderTarget(i),A.value=c,o?.uDpr&&s!=null&&(o.uDpr.value=s);for(let e of E)e.visible=!0;d.visible=a&&(b.uA.value>.002||b.uAdd.value>.002),p.visible=!a&&x.uA.value>.002}}t.field=r<Y?1-.93*F(.3,.46,r):.07+.93*F(.54,.86,r),t.flash=0},camera(e,t,r){if(!l||!u)return null;let i=r.flightCam(0);if(e>=Y)return D(r,e);u.updateWorldMatrix(!0,!1),u.matrixWorld.decompose(S,w,T),C.set(0,0,1).applyQuaternion(w);let a=Math.hypot(i.pos[0]-S.x,i.pos[1]-S.y,i.pos[2]-S.z),o=N([[0,a],[.1,a*.88],[.25,a*.5],[.38,3.2],[.46,.95],[Y,.32]])(e),s=new n(i.pos[0]-S.x,i.pos[1]-S.y,i.pos[2]-S.z).normalize().lerp(C,F(.22,.44,e)).normalize(),c=F(0,.3,e);return{pos:[S.x+s.x*o,S.y+s.y*o,S.z+s.z*o],target:[P(i.target[0],S.x,c),P(i.target[1],S.y,c),P(i.target[2],S.z,c)],fov:P(i.fov,52,F(.2,.5,e))}},dispose(){h.removeFromParent(),d?.removeFromParent(),g?.dispose()}}}var X=D.some(e=>e.id===`gate`)?`gate`:`instrument`,Z={[`${X}>hall`]:{warp:[[0,0],[.12,.1],[.44,.45],[.62,.6],[1,1]]}},Q=new Map;for(let[e,t]of Object.entries(Z))t.warp&&Q.set(e,E(t.warp.map(e=>e[0]),t.warp.map(e=>e[1])));var ct={[`${X}>hall`]:ve,"hall>hold":xe,"mind>school":Pe,"name>world":st,"table>market":Ue,"chomchom>secretary":ge,"world>surface":rt},$=new Set((typeof location<`u`?new URLSearchParams(location.search).get(`tr`)??``:``).split(`,`).filter(Boolean));function lt(e){if(!O(`transitions`)||!e.field?.scene||$.has(`0`)||w())return;let t=e.field,n=t.scene,i=t.renderer,a=t.camera,o=new ie,s=new r(1440,900),c=new Map;for(let e of Object.keys(ct)){let[t,n]=e.split(`>`),r=D.findIndex(e=>e.id===t),i=D.findIndex(e=>e.id===n);if(r<0||i!==r+1){console.warn(`[transitions] not a leg:`,e);continue}let a=te(i);a&&c.set(e,{key:e,i0:r,i1:i,A:D[r],B:D[i],p0:a[0],p1:a[1]})}let l={ctx:e,field:t,scene:n,renderer:i,camera:a,world:e.world,lane:o,res:s,q:{shadows:!$.has(`noshadow`),dust:!$.has(`nodust`),reflect:!$.has(`noreflect`)}},u=new Map;for(let[e,t]of c){let n={...l,flightCam:e=>{let n=k(t.p0+L(e)*(t.p1-t.p0)).cam;return{pos:[...n.pos],target:[...n.target],fov:n.fov}},stateAt:e=>k(t.p0+L(e)*(t.p1-t.p0))};u.set(e,{piece:ct[e](t),leg:t,built:!1,envp:n})}let d={};for(let[e,t]of u)d[e]=t;let f={get:e=>u.get(e),has:e=>u.has(e),keys:()=>u.keys(),values:()=>u.values(),entries:()=>u.entries(),forEach:e=>u.forEach(e),[Symbol.iterator]:()=>u[Symbol.iterator]()};for(let[e,t]of Object.entries(f))Object.defineProperty(d,e,{value:t,enumerable:!1});Object.defineProperty(d,"size",{get:()=>u.size,enumerable:!1}),window.__tr={pieces:d,legs:c,TIMING:Z,warp:(e,t)=>(Q.get(e)??(e=>e))(t)};let p=D.findIndex(e=>e.id===X),m=!1,h=null,g=-1,_=0,v=0,y=!1,b={field:1,flash:0,flashCol:[1,1,1]},x=()=>!!window.__v3?.follower?.jump,S=e=>e.dwelling?null:`${D[e.wp]?.id}>${D[e.next]?.id}`,C=e=>{if(!e.built){e.built=!0;try{e.piece.build(e.envp)}catch(e){console.warn(`[transitions] build failed`,e)}}},E=()=>{if(h){let e=u.get(h);e?.piece.setVisible(!1,e.envp)}y&&=(t.setFieldAlpha?.(1),!1),h=null,g=-1},re=T(`transitions`,(r,c,l)=>{for(let e of u.values())!e.built&&l.p>e.leg.p0-.05&&l.p<e.leg.p1+.01&&C(e);let d=l.dwelling?l.wp:l.wp+l.t;if(!m&&d>p-3.2&&d<p+3.5){let e=u.get(`${X}>hall`),t=u.get(`hall>hold`);for(let n of[e,t])n&&C(n);(!e||e.built)&&(!t||t.built)&&(m=!0,i.compileAsync(n,a).catch(()=>{}))}let f=S(l),w=f?u.get(f):void 0;if(!w||ee()||x()||!w.built){h&&E();return}h!==f&&(h&&E(),h=f);let T=L(Q.get(f)?.(l.raw)??l.raw);if(g>=0)for(let t of w.piece.cues)g<t.at!=T<t.at&&Math.abs(T-g)<.5&&e.emit(t.name,{dir:T>g?1:-1,u:T});_+=((g>=0&&r>v?(T-g)/Math.max(.001,Math.min(.1,r-v)):0)-_)*(1-Math.exp(-c/.05)),g=T,v=r;let D=l.t<.5?l.overlayOut:l.overlayIn;o.update(l,c),i.getDrawingBufferSize(s),b.field=1,b.flash=0,w.piece.setVisible(!0,w.envp),w.piece.frame({u:T,t:r,dt:c,st:l,copy:D,dir:_>=0?1:-1},b,w.envp),t.setFieldAlpha?.(b.field),y=!0});return{update(e,t,n){ne(`transitions`)?re(e,t,n):h&&E()},adjustCam(e,t,n){if(!h||!ne(`transitions`))return;let r=u.get(h);if(!r||!r.built)return;let i=L(L(Q.get(h)?.(n.raw)??n.raw)+_*.115),a=r.piece.camera(i,e,r.envp);if(!a)return;let o=F(0,.05,i)*(1-F(.95,1,i)),s=(e,t)=>[P(e[0],t[0],o),P(e[1],t[1],o),P(e[2],t[2],o)];return{pos:s(e.pos,a.pos),target:s(e.target,a.target),fov:P(e.fov,a.fov,o)}}}}export{Z as TIMING,lt as install};