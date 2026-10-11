import{t as e}from"./projects-CnSkbXN_.js";import{B as t,Ft as n,Hn as r,I as i,It as a,Pt as o,V as s,Vt as c,Yn as l,br as u,c as d,ct as f,h as p,lt as m,or as h,rt as g,s as _,u as v,vt as y,wr as b,yr as x,yt as S}from"./three.core-rbApIkjy.js";import{A as C,d as w,g as T,i as E,j as D,l as O,p as ee,r as te,t as ne,u as re}from"./main-BfTGMAJq.js";import{t as ie}from"./media--ltg8lOJ.js";import{n as k,r as ae,t as A}from"./lane-BoByweoM.js";import{a as j,c as oe,d as M,f as se,l as N,n as ce,o as le,p as P,r as F,s as ue,u as I}from"./rig-DsyhDOfr.js";var de=class{scale;maxW;rt=null;cam=new o(35,1.6,.1,400);constructor(e=.7,t=1280){this.scale=e,this.maxW=t}get texture(){return this.rt?.texture??null}size(e){let t=Math.max(64,Math.round(Math.min(e.res.x*this.scale,this.maxW))),n=Math.max(64,Math.round(e.res.y*(t/Math.max(1,e.res.x))));if(this.rt)(this.rt.width!==t||this.rt.height!==n)&&this.rt.setSize(t,n);else{this.rt=new b(t,n,{type:s,depthBuffer:!0,samples:0});let e=this.rt.texture;e.minFilter=f,e.magFilter=f,e.generateMipmaps=!1}}render(e,t,n={}){this.size(e);let r=this.rt,i=this.cam,a=e.renderer,o=e.scene;i.position.set(...t.pos),i.up.set(0,1,0),i.lookAt(t.target[0],t.target[1],t.target[2]),i.fov=t.fov,i.aspect=e.res.x/Math.max(1,e.res.y),i.near=e.camera.near,i.far=e.camera.far,i.updateProjectionMatrix(),i.updateMatrixWorld(!0);let s=[],c=e=>{e&&e.visible&&!s.includes(e)&&(e.visible=!1,s.push(e))};for(let e of n.hide??[])c(e);c(o.getObjectByName(`atmos-mirror`));for(let e of o.children)e.userData.noReflect&&c(e);let l=e.field.points?.material?.uniforms,u=l?.uDpr?.value,d=l?.uFieldHide?.value,f=l?.uMix?.value;l?.uDpr&&u!=null&&(l.uDpr.value=u*(r.width/Math.max(1,e.res.x))),l?.uFieldHide&&d!=null&&(l.uFieldHide.value=0),n.mix!=null&&l?.uMix&&f!=null&&(l.uMix.value=n.mix);let p=k.value;k.value=0;let m=a.getRenderTarget();try{a.setRenderTarget(r),a.clear(),a.render(o,i)}finally{a.setRenderTarget(m),k.value=p,l?.uDpr&&u!=null&&(l.uDpr.value=u),l?.uFieldHide&&d!=null&&(l.uFieldHide.value=d),l?.uMix&&f!=null&&(l.uMix.value=f);for(let e of s)e.visible=!0}}dispose(){this.rt?.dispose(),this.rt=null}},fe=`vec3 softClip(vec3 c) { return 1.0 - exp(-max(c, 0.0) * 2.1); }`;function L(e,t=!1){e.transparent=!0,e.depthWrite=!1,e.depthTest=t,e.blending=5,e.blendSrc=201,e.blendDst=205,e.blendSrcAlpha=201,e.blendDstAlpha=205}function pe(e,t,n){let r=Math.min(1,t/n);return e.flightCam(r)}var me=3.6,R=N([[0,-1.3],[.06,-1.3],[.2,-.45],[.42,1.25],[.58,2.1],[.76,3.55],[.92,4.95],[1,4.95]]),he=`
varying vec2 vN;
void main() { vN = position.xy; gl_Position = vec4(position.xy, 0.0, 1.0); }`,ge=`
precision highp float;
uniform float uU, uYT, uYB, uSpd, uCopy;
varying vec2 vN;
${A}
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
}`;function _e(e){let t=!1,n=null,i=null,o={uU:{value:0},uYT:{value:-2},uYB:{value:-5},uSpd:{value:0},uCopy:{value:0},uLane:{value:null},uRes:{value:null},uLaneOn:k};return{leg:e,cues:[{at:.18,name:`tr:curtain`}],build(e){if(t)return;o.uLane.value=e.lane.u,o.uRes.value=e.res;let s=new a(2,2),c=new r({vertexShader:he,fragmentShader:ge,uniforms:o});L(c,!1),n=new S(s,c),n.frustumCulled=!1,n.renderOrder=100,n.visible=!1,n.name=`tr-curtain`,n.userData.noReflect=!0,e.scene.add(n),M(e,n),i=document.createElement(`div`),i.id=`tr-ink`,i.setAttribute(`aria-hidden`,`true`),i.setAttribute(`data-proof`,`skip`);let l=`linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 16%, rgba(0,0,0,0.2) 48%, transparent 100%)`;Object.assign(i.style,{position:`fixed`,left:`0`,top:`0`,width:`100vw`,height:`28vh`,pointerEvents:`none`,zIndex:`70`,mixBlendMode:`difference`,background:`#fff`,display:`none`,willChange:`transform`,maskImage:l,webkitMaskImage:l}),document.body.appendChild(i),t=!0},setVisible(e){e||(n&&(n.visible=!1),i&&(i.style.display=`none`))},frame(e,r,a){if(!t||!n)return;let{u:s}=e;a.renderer.getDrawingBufferSize(a.res);let c=R(s),l=c-me,u=Math.min(1,Math.abs(R(Math.min(1,s+.01))-R(Math.max(0,s-.01)))/.02/12);if(o.uU.value=s,o.uYT.value=c,o.uYB.value=l,o.uSpd.value=u,o.uCopy.value=e.copy,n.visible=c>-1.45&&l<1.2,r.field=1-P(0,.12,c-1.32)*P(0,.12,-1.32-l),r.flash=0,i){let e=(1-l)/2*innerHeight,t=l>-1&&l<1.35&&s<.96;i.style.display=t?`block`:`none`,t&&(i.style.transform=`translate3d(0, ${e.toFixed(1)}px, 0)`,i.style.opacity=(P(-1,-.78,l)*(1-P(1.05,1.35,l))).toFixed(3))}},camera(){return null},dispose(){n?.removeFromParent(),n?.geometry.dispose(),i?.remove()}}}var ve=new y;function ye(e){let t=ce(),n=(e,n=new u)=>n.set(e[0],e[1],e[2]).applyMatrix4(ve.copy(t.root.matrixWorld).invert()),r=null,i=new u(0,3.3,14),a=e=>{t.root.updateMatrixWorld(!0);let i=e.flightCam(0),a=e.flightCam(1),o=n(i.pos),s=n(i.target),c=n(a.pos),l=n(a.target),u=Math.min(o.z,-9);r={px:N([[0,o.x],[.12,o.x*.86],[.45,o.x*.1],[.56,0],[.76,c.x*.5],[1,c.x]]),py:N([[0,o.y],[.12,o.y],[.45,I(o.y,3.1,.75)],[.6,2.9],[.8,I(2.9,c.y,.65)],[1,c.y]]),pz:N([[0,o.z],[.12,o.z+.05*-u],[.45,-5.2],[.6,3],[.8,I(3,c.z,.62)],[1,c.z]]),fov:N([[0,i.fov],[.3,I(i.fov,40,.5)],[.5,44],[.62,50],[.82,49],[1,a.fov]]),t0:s,end:c.clone(),endT:l.clone()}};return{leg:e,cues:[{at:.18,name:`tr:doors`},{at:.52,name:`tr:flood`}],build(e){t.build(e)},setVisible(e){e||(t.flood.uA.value=0)},frame(e,n){let r=e.u,i=P(.45,.53,r)*(1-P(.56,.68,r));t.flood.uA.value=.5*i,n.field=I(1,.36,P(.12,.4,r)),n.flash=0,n.flashCol=[1,.74,.42]},camera(e,n,o){if(!t.built)return null;r||a(o);let s=r,c=new u(s.px(e),s.py(e),s.pz(e)),l=P(0,.3,e),d=P(.5,1,e),f=new u().lerpVectors(s.t0,i,l).lerp(s.endT,d),p=t.root.matrixWorld;return c.applyMatrix4(p),f.applyMatrix4(p),{pos:[c.x,c.y,c.z],target:[f.x,f.y,f.z],fov:s.fov(e)}},dispose(){t.dispose()}}}var be=new y,z=new u(0,2.9,F+12);function xe(e){let t=ce(),n=(e,n=new u)=>n.set(e[0],e[1],e[2]).applyMatrix4(be.copy(t.root.matrixWorld).invert()),r=null,i=.65,a=e=>{t.root.updateMatrixWorld(!0);let a=e.flightCam(0),o=e.flightCam(1),s=n(a.pos),c=n(a.target),l=N([[0,s.x],[.4,0],[1,0]]),d=N([[0,s.y],[.4,3.1],[.5,2.8],[i,2.4],[1,2.4]]),f=N([[0,s.z],[.3,F-10.5],[.4,F-5.8],[.5,F-2.4],[.56,F+.2],[i,F+4.6],[1,F+12]]),p=N([[0,a.fov],[.4,52],[.6,54],[1,54]]),m=t.root.matrixWorld,h=new u(l(i),d(i),f(i)).applyMatrix4(m);r={px:l,py:d,pz:f,fov:p,t0:c,QW:h,mW:new u(l(.66),d(.66),f(.66)).applyMatrix4(m).sub(h).multiplyScalar(35),HW:new u(...o.pos),htW:new u(...o.target),fovEnd:o.fov}},o={leg:e,visible:!1,cues:[{at:.18,name:`tr:exit`}],build(e){t.build(e)},setVisible(e){o.visible=e},frame(e,t){t.field=I(.4,1,P(.62,.95,e.u)),t.flash=0,t.flashCol=[1,.74,.42]},camera(e,n,o){if(!t.built)return null;r||a(o);let s=r,c=t.root.matrixWorld,l=new u,d=new u,f=z.clone().applyMatrix4(c);if(e<=i)l.set(s.px(e),s.py(e),s.pz(e)).applyMatrix4(c),d.copy(s.t0).lerp(z,P(0,.38,e)).applyMatrix4(c);else{let t=(e-i)/.35,n=t*t,r=n*t,a=2*r-3*n+1,o=r-2*n+t,c=-2*r+3*n;l.copy(s.QW).multiplyScalar(a).addScaledVector(s.mW,o).addScaledVector(s.HW,c),d.copy(f).lerp(s.htW,P(0,1,t))}let p=e<=i?s.fov(e):I(s.fov(i),s.fovEnd,P(0,1,(e-i)/.35));return{pos:[l.x,l.y,l.z],target:[d.x,d.y,d.z],fov:p}},dispose(){}};return o}var B=0,Se=1,Ce=new u,V=new g,H=new n,we=new u,U=new h,Te=class{constructor(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new De,this.unassigned=new De,this.vertices=[]}setFromPoints(e){if(e.length>=4){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.vertices.push(new Ee(e[t]));this._compute()}return this}setFromObject(e){let t=[];return e.updateMatrixWorld(!0),e.traverse(function(e){let n=e.geometry;if(n!==void 0){let r=n.attributes.position;if(r!==void 0)for(let n=0,i=r.count;n<i;n++){let i=new u;i.fromBufferAttribute(r,n).applyMatrix4(e.matrixWorld),t.push(i)}}}),this.setFromPoints(t)}containsPoint(e){let t=this.faces;for(let n=0,r=t.length;n<r;n++)if(t[n].distanceToPoint(e)>this.tolerance)return!1;return!0}intersectRay(e,t){let n=this.faces,r=-1/0,i=1/0;for(let t=0,a=n.length;t<a;t++){let a=n[t],o=a.distanceToPoint(e.origin),s=a.normal.dot(e.direction);if(o>0&&s>=0)return null;let c=s===0?0:-o/s;if(!(c<=0)&&(s>0?i=Math.min(c,i):r=Math.max(c,r),r>i))return null}return r===-1/0?e.at(i,t):e.at(r,t),t}intersectsRay(e){return this.intersectRay(e,Ce)!==null}makeEmpty(){return this.faces=[],this.vertices=[],this}_addVertexToFace(e,t){return e.face=t,t.outside===null?this.assigned.append(e):this.assigned.insertBefore(t.outside,e),t.outside=e,this}_removeVertexFromFace(e,t){return e===t.outside&&(t.outside=e.next!==null&&e.next.face===t?e.next:null),this.assigned.remove(e),this}_removeAllVerticesFromFace(e){if(e.outside!==null){let t=e.outside,n=e.outside;for(;n.next!==null&&n.next.face===e;)n=n.next;return this.assigned.removeSubList(t,n),t.prev=n.next=null,e.outside=null,t}}_deleteFaceVertices(e,t){let n=this._removeAllVerticesFromFace(e);if(n!==void 0){if(t===void 0)this.unassigned.appendChain(n);else{let e=n;do{let n=e.next;t.distanceToPoint(e.point)>this.tolerance?this._addVertexToFace(e,t):this.unassigned.append(e),e=n}while(e!==null)}}return this}_resolveUnassignedPoints(e){if(this.unassigned.isEmpty()===!1){let t=this.unassigned.first();do{let n=t.next,r=this.tolerance,i=null;for(let n=0;n<e.length;n++){let a=e[n];if(a.mark===B){let e=a.distanceToPoint(t.point);if(e>r&&(r=e,i=a),r>1e3*this.tolerance)break}}i!==null&&this._addVertexToFace(t,i),t=n}while(t!==null)}return this}_computeExtremes(){let e=new u,t=new u,n=[],r=[];for(let e=0;e<3;e++)n[e]=r[e]=this.vertices[0];e.copy(this.vertices[0].point),t.copy(this.vertices[0].point);for(let i=0,a=this.vertices.length;i<a;i++){let a=this.vertices[i],o=a.point;for(let t=0;t<3;t++)o.getComponent(t)<e.getComponent(t)&&(e.setComponent(t,o.getComponent(t)),n[t]=a);for(let e=0;e<3;e++)o.getComponent(e)>t.getComponent(e)&&(t.setComponent(e,o.getComponent(e)),r[e]=a)}return this.tolerance=3*2**-52*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:n,max:r}}_computeInitialHull(){let e=this.vertices,t=this._computeExtremes(),n=t.min,r=t.max,i=0,a=0;for(let e=0;e<3;e++){let t=r[e].point.getComponent(e)-n[e].point.getComponent(e);t>i&&(i=t,a=e)}let o=n[a],s=r[a],c,l;i=0,V.set(o.point,s.point);for(let t=0,n=this.vertices.length;t<n;t++){let n=e[t];if(n!==o&&n!==s){V.closestPointToPoint(n.point,!0,we);let e=we.distanceToSquared(n.point);e>i&&(i=e,c=n)}}i=-1,H.setFromCoplanarPoints(o.point,s.point,c.point);for(let t=0,n=this.vertices.length;t<n;t++){let n=e[t];if(n!==o&&n!==s&&n!==c){let e=Math.abs(H.distanceToPoint(n.point));e>i&&(i=e,l=n)}}let u=[];if(H.distanceToPoint(l.point)<0){u.push(W.create(o,s,c),W.create(l,s,o),W.create(l,c,s),W.create(l,o,c));for(let e=0;e<3;e++){let t=(e+1)%3;u[e+1].getEdge(2).setTwin(u[0].getEdge(t)),u[e+1].getEdge(1).setTwin(u[t+1].getEdge(0))}}else{u.push(W.create(o,c,s),W.create(l,o,s),W.create(l,s,c),W.create(l,c,o));for(let e=0;e<3;e++){let t=(e+1)%3;u[e+1].getEdge(2).setTwin(u[0].getEdge((3-e)%3)),u[e+1].getEdge(0).setTwin(u[t+1].getEdge(1))}}for(let e=0;e<4;e++)this.faces.push(u[e]);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n!==o&&n!==s&&n!==c&&n!==l){i=this.tolerance;let e=null;for(let t=0;t<4;t++){let r=this.faces[t].distanceToPoint(n.point);r>i&&(i=r,e=this.faces[t])}e!==null&&this._addVertexToFace(n,e)}}return this}_reindexFaces(){let e=[];for(let t=0;t<this.faces.length;t++){let n=this.faces[t];n.mark===B&&e.push(n)}return this.faces=e,this}_nextVertexToAdd(){if(this.assigned.isEmpty()===!1){let e,t=0,n=this.assigned.first().face,r=n.outside;do{let i=n.distanceToPoint(r.point);i>t&&(t=i,e=r),r=r.next}while(r!==null&&r.face===n);return e}}_computeHorizon(e,t,n,r){this._deleteFaceVertices(n),n.mark=Se;let i;i=t===null?t=n.getEdge(0):t.next;do{let t=i.twin,n=t.face;n.mark===B&&(n.distanceToPoint(e)>this.tolerance?this._computeHorizon(e,t,n,r):r.push(i)),i=i.next}while(i!==t);return this}_addAdjoiningFace(e,t){let n=W.create(e,t.tail(),t.head());return this.faces.push(n),n.getEdge(-1).setTwin(t.twin),n.getEdge(0)}_addNewFaces(e,t){this.newFaces=[];let n=null,r=null;for(let i=0;i<t.length;i++){let a=t[i],o=this._addAdjoiningFace(e,a);n===null?n=o:o.next.setTwin(r),this.newFaces.push(o.face),r=o}return n.next.setTwin(r),this}_addVertexToHull(e){let t=[];return this.unassigned.clear(),this._removeVertexFromFace(e,e.face),this._computeHorizon(e.point,null,e.face,t),this._addNewFaces(e,t),this._resolveUnassignedPoints(this.newFaces),this}_cleanup(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this}_compute(){let e;for(this._computeInitialHull();(e=this._nextVertexToAdd())!==void 0;)this._addVertexToHull(e);return this._reindexFaces(),this._cleanup(),this}},W=class e{constructor(){this.normal=new u,this.midpoint=new u,this.area=0,this.constant=0,this.outside=null,this.mark=B,this.edge=null}static create(t,n,r){let i=new e,a=new G(t,i),o=new G(n,i),s=new G(r,i);return a.next=s.prev=o,o.next=a.prev=s,s.next=o.prev=a,i.edge=a,i.compute()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}compute(){let e=this.edge.tail(),t=this.edge.head(),n=this.edge.next.head();return U.set(e.point,t.point,n.point),U.getNormal(this.normal),U.getMidpoint(this.midpoint),this.area=U.getArea(),this.constant=this.normal.dot(this.midpoint),this}distanceToPoint(e){return this.normal.dot(e)-this.constant}},G=class{constructor(e,t){this.vertex=e,this.prev=null,this.next=null,this.twin=null,this.face=t}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){let e=this.head(),t=this.tail();return t===null?-1:t.point.distanceTo(e.point)}lengthSquared(){let e=this.head(),t=this.tail();return t===null?-1:t.point.distanceToSquared(e.point)}setTwin(e){return this.twin=e,e.twin=this,this}},Ee=class{constructor(e){this.point=e,this.prev=null,this.next=null,this.face=null}},De=class{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertBefore(e,t){return t.prev=e.prev,t.next=e,t.prev===null?this.head=t:t.prev.next=t,e.prev=t,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next===null?this.tail=t:t.next.prev=t,e.next=t,this}append(e){return this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(this.head===null?this.head=e:this.tail.next=e,e.prev=this.tail;e.next!==null;)e=e.next;return this.tail=e,this}remove(e){return e.prev===null?this.head=e.next:e.prev.next=e.next,e.next===null?this.tail=e.prev:e.next.prev=e.prev,this}removeSubList(e,t){return e.prev===null?this.head=t.next:e.prev.next=t.next,t.next===null?this.tail=e.prev:t.next.prev=e.prev,this}isEmpty(){return this.head===null}},Oe=class extends d{constructor(e=[]){super();let t=[],n=[],r=new Te().setFromPoints(e).faces;for(let e=0;e<r.length;e++){let i=r[e],a=i.edge;do{let e=a.head().point;t.push(e.x,e.y,e.z),n.push(i.normal.x,i.normal.y,i.normal.z),a=a.next}while(a!==i.edge)}this.setAttribute(`position`,new i(t,3)),this.setAttribute(`normal`,new i(n,3))}},K=80,ke=.055,Ae=-6.6,je=`
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
}`;function Ne(e,t){let n=[];for(let t=0;t<K;t++){let r=1-2*(t+.5)/K,i=Math.sqrt(1-r*r),a=t*2.399963,o=new u(Math.cos(a)*i,r,Math.sin(a)*i);o.add(new u(e()-.5,e()-.5,e()-.5).multiplyScalar(.2)).normalize(),n.push(o)}let r=new Oe(n).getAttribute(`position`),a=(e,t,n)=>`${Math.round(e*1e4)}_${Math.round(t*1e4)}_${Math.round(n*1e4)}`,o=new Map;n.forEach((e,t)=>o.set(a(e.x,e.y,e.z),t));let s=Array.from({length:K},()=>[]);for(let e=0;e<r.count;e+=3){let t=[0,1,2].map(t=>new u(r.getX(e+t),r.getY(e+t),r.getZ(e+t))),n=t[1].clone().sub(t[0]).cross(t[2].clone().sub(t[0])).normalize();n.dot(t[0].clone().add(t[1]).add(t[2]))<0&&n.negate();for(let e of t){let t=o.get(a(e.x,e.y,e.z));t!=null&&s[t].push(n)}}let c={p:[],n:[],c:[],r:[],a:[],e:[]},f=(e,t,n,r,i,a)=>{c.p.push(e.x-n.x,e.y-n.y,e.z-n.z),c.n.push(t.x,t.y,t.z),c.c.push(n.x,n.y,n.z),c.r.push(r[0],r[1],r[2],r[3]),c.a.push(i.x,i.y,i.z),c.e.push(a)},p=.945,m=new u;for(let r=0;r<K;r++){let i=n[r],a=s[r];if(a.length<3)continue;let o=new u(0,1,0);Math.abs(i.y)>.9&&o.set(1,0,0),o.sub(i.clone().multiplyScalar(o.dot(i))).normalize();let c=i.clone().cross(o);a.sort((e,t)=>Math.atan2(e.dot(c),e.dot(o))-Math.atan2(t.dot(c),t.dot(o)));let l=i.clone().multiplyScalar(1-ke/2),d=Math.acos(Math.max(-1,Math.min(1,i.dot(t)))),h=[j(d/Math.PI)*.34+e()*.03,e(),e(),e()],g=new u(e()-.5,e()-.5,e()-.5).normalize(),_=a.length,v=(e,t,n)=>{let r=[];for(let i=0;i<=3;i++){let a=[];for(let r=0;r<=3-i;r++){let o=(3-i-r)/3,s=i/3,c=r/3;a.push({p:e.clone().multiplyScalar(o).addScaledVector(t,s).addScaledVector(n,c).normalize(),e:o})}r.push(a)}return r};for(let e=0;e<_;e++){let t=a[e],n=a[(e+1)%_],r=v(i,t,n),o=(e,t,n)=>{for(let[r,i,a]of[[[e,t,n],1,!1],[[e,n,t],p,!0]])for(let e of r)m.copy(e.p),a&&m.negate(),f(e.p.clone().multiplyScalar(i),m.clone(),l,h,g,e.e)};for(let e=0;e<3;e++)for(let t=0;t<3-e;t++)o(r[e][t],r[e+1][t],r[e][t+1]),t<3-e-1&&o(r[e+1][t],r[e+1][t+1],r[e][t+1]);for(let e=0;e<3;e++){let t=r[3-e][e].p,n=r[3-e-1][e+1].p,i=t.clone().multiplyScalar(p),a=n.clone().multiplyScalar(p);m.copy(n).sub(t).cross(i.clone().sub(t)).normalize();let o=t.clone().add(n).multiplyScalar(.5).sub(l);m.dot(o)<0&&m.negate();for(let e of[t,n,a,t,a,i])f(e,m.clone(),l,h,g,0)}}}let h=new d;return h.setAttribute(`position`,new i(c.p,3)),h.setAttribute(`normal`,new i(c.n,3)),h.setAttribute(`aCent`,new i(c.c,3)),h.setAttribute(`aRnd`,new i(c.r,4)),h.setAttribute(`aAx`,new i(c.a,3)),h.setAttribute(`aEdge`,new i(c.e,1)),h.boundingSphere=new l(new u,30),{geo:h,seeds:n}}function Pe(e){let n=!1,i=new t;i.name=`tr-glass`;let a=null,o={uSeed:{value:[]},uImp:{value:new u(0,0,1)},uCrack:{value:0},uShow:{value:0},uFlash:{value:0},uFade:{value:0},uTime:{value:0},uCrackFade:{value:1},uTau:{value:0},uR:{value:2.7},uG:{value:3.4},uFloor:{value:-3},uTint:{value:new p(.55,.78,1)}},s=[],c=new u,l=2.7,d=.3,f=e=>Math.max(0,e-d)*3;return{leg:e,cues:[{at:.1,name:`tr:crack`},{at:d,name:`tr:shatter`}],build(e){if(n)return;n=!0;let t=e.world?.brain;if(!t)return;c.copy(t.group.position),l=t.radius;let d=e.flightCam(0),f=new u(d.pos[0]-c.x,d.pos[1]-c.y,d.pos[2]-c.z).normalize(),p=new u(0,1,0).cross(f).normalize(),m=f.clone().add(p.multiplyScalar(.34)).add(new u(0,.5,0)).normalize();o.uImp.value.copy(m);let{geo:h,seeds:g}=Ne(se(2718),m);o.uSeed.value=g;let _=new r({vertexShader:je,fragmentShader:Me,uniforms:o,transparent:!0,depthWrite:!1,depthTest:!0,blending:5,blendEquation:100,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205,side:2});a=new S(h,_),a.frustumCulled=!1,a.renderOrder=45,i.add(a),i.visible=!1,e.q.reflect||(i.userData.noReflect=!0),e.scene.add(i),t.group.traverse(e=>{(e.name===`brain-glass-back`||e.name===`brain-glass-front`)&&s.push(e)}),M(e,i)},setVisible(e,t){if(i.visible=e&&!!a,!e)for(let e of s)e.visible=!0},frame(e,t,n){let{u:r,t:u}=e,p=n.world?.brain;if(t.field=1,!a||!p)return;c.copy(p.group.position),l=p.radius*p.group.scale.x*1.008,i.position.copy(c),o.uR.value=l,o.uTime.value=u,o.uFloor.value=(Ae-c.y)/l,o.uG.value=3.1;let m=P(.02,d,r);o.uCrack.value=m,o.uTau.value=f(r);let h=r>=d;o.uShow.value=+!!h,o.uFlash.value=Math.exp(-f(r)/.1)*(h?.5:0),o.uCrackFade.value=1-P(d,.42,r),o.uFade.value=P(.8,.98,r);for(let e of s)e.visible=!h;i.visible=r>.02&&r<.99},camera(e,t,n){if(!a)return null;let r=n.flightCam(0),i=1-P(.34,.72,e),o=.1*P(0,.3,e),s=f(e),l=Math.exp(-s/.16)*.06*(e>=d),u=c.x-r.pos[0],p=c.y-r.pos[1],m=c.z-r.pos[2],h={pos:[r.pos[0]+u*o+Math.sin(s*71)*l,r.pos[1]+p*o+Math.cos(s*83)*l,r.pos[2]+m*o],target:[r.target[0],r.target[1],r.target[2]],fov:r.fov-1.5*Math.exp(-s/.2)*(e>=d)};return{pos:[I(t.pos[0],h.pos[0],i),I(t.pos[1],h.pos[1],i),I(t.pos[2],h.pos[2],i)],target:[I(t.target[0],h.target[0],i),I(t.target[1],h.target[1],i),I(t.target[2],h.target[2],i)],fov:I(t.fov,h.fov,i)}},dispose(){i.removeFromParent()}}}var Fe=.8,Ie=.1,Le=.46,Re=.34,ze=[.05,.11],Be=[.84,.93],Ve=`
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
${A}
${fe}
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
}`;function Ue(e){let t=!1,n=new de(.7),i=new de(.7),a=null,o=0,s=0,c=new p(D(e.B.area)?.accent??`#FF6A8A`),l={uTexA:{value:null},uTexB:{value:null},uGrid:{value:new x(8,5)},uU:{value:0},uFront:{value:0},uBack:{value:1},uCopy:{value:0},uTint:{value:0},uAccent:{value:new u(c.r,c.g,c.b)},uLane:{value:null},uRes:{value:null},uLaneOn:k},f=e=>{let t=e.res.x,n=e.res.y,r=Math.max(150,Math.min(t,n)/5);return{c:Math.max(3,Math.min(14,Math.round(t/r))),r:Math.max(3,Math.min(10,Math.round(n/r)))}},m=(e,t)=>{let n=e*t,r=new Float32Array(n*12),i=new Float32Array(n*8),a=new Float32Array(n*8),o=[],s=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let n=0;n<t;n++)for(let t=0;t<e;t++){let c=n*e+t;for(let e=0;e<4;e++){let o=c*4+e;i[o*2]=t,i[o*2+1]=n,a[o*2]=s[e][0],a[o*2+1]=s[e][1],r[o*3]=s[e][0],r[o*3+1]=s[e][1]}o.push(c*4,c*4+1,c*4+2,c*4,c*4+2,c*4+3)}let c=new d;return c.setAttribute(`position`,new _(r,3)),c.setAttribute(`aCell`,new _(i,2)),c.setAttribute(`aCorner`,new _(a,2)),c.setIndex(o),c};return{leg:e,cues:[{at:.16,name:`tr:mosaic`}],build(e){if(t)return;l.uLane.value=e.lane.u,l.uRes.value=e.res;let c=new r({vertexShader:Ve,fragmentShader:He,uniforms:l,side:2});L(c,!0),c.depthWrite=!0;let u=f(e);o=u.c,s=u.r,a=new S(m(o,s),c),a.frustumCulled=!1,a.renderOrder=100,a.visible=!1,a.name=`tr-mosaic`,a.userData.noReflect=!0,l.uGrid.value.set(o,s),e.scene.add(a),n.size(e),i.size(e),M(e,a),t=!0},setVisible(e){!e&&a&&(a.visible=!1)},frame(e,r,c){if(!t||!a)return;let{u}=e;c.renderer.getDrawingBufferSize(c.res);let d=f(c);(d.c!==o||d.r!==s)&&(o=d.c,s=d.r,a.geometry.dispose(),a.geometry=m(o,s),l.uGrid.value.set(o,s));let p=P(ze[0],ze[1],u),h=1-P(Be[0],Be[1],u);l.uU.value=u,l.uFront.value=p,l.uBack.value=h,l.uCopy.value=e.copy,l.uTint.value=P(.1,.26,u)*(1-P(.62,.84,u)),a.visible=u>.045&&u<.935,a.visible&&(u<.83&&n.render(c,We(c),{hide:[a]}),u>.09&&i.render(c,c.flightCam(1),{hide:[a],mix:1}),l.uTexA.value=n.texture,l.uTexB.value=i.texture),r.field=1-1*P(.07,.14,u)*h,r.flash=0},camera(e,t,n){return pe(n,e,Fe)},dispose(){a?.removeFromParent(),a?.geometry.dispose(),n.dispose(),i.dispose()}}}function We(e){let t=e.camera,n=new u(0,0,-10).applyQuaternion(t.quaternion).add(t.position);return{pos:[t.position.x,t.position.y,t.position.z],target:[n.x,n.y,n.z],fov:t.fov}}var q=Math.PI/180,Ge=22*q,Ke=7.2,qe=2.8,Je=6.4,Ye=.04,Xe=.6,Ze=[{slot:-2,id:`recruiting-os`,accent:`#FF4A2B`,img:`jobs-mobile`},{slot:-1,id:`cloudflare`,accent:`#8FB8FF`,img:`page-1-title`},{slot:0,id:`qvr`,accent:`#B48CFF`},{slot:1,id:`appfolio`,accent:`#D9A441`,img:`page-1-title`},{slot:2,id:`chomchom`,accent:`#FF6A8A`,img:`story-details`}],Qe=t=>e.find(e=>e.id===t),$e=e=>e.replace(/\s*\(.*?\)/g,``).replace(/:.*$/,``).replace(/\s+Pitch$/,``).trim();function J(e,t,n){let r=[],i=``;for(let a of t.split(/\s+/)){let t=i?i+` `+a:a;e.measureText(t).width>n&&i?(r.push(i),i=a):i=t}return i&&r.push(i),r}function et(e,t,n,r){let i=e.width,a=e.height,o=e.getContext(`2d`),s=new p(n),c=e=>`rgb(${Math.round((s.r*e+.03*(1-e))*255)},${Math.round((s.g*e+.03*(1-e))*255)},${Math.round((s.b*e+.04*(1-e))*255)})`,l=o.createLinearGradient(0,0,0,a);l.addColorStop(0,c(.2)),l.addColorStop(.55,`#0b0b11`),l.addColorStop(1,`#060609`),o.fillStyle=l,o.fillRect(0,0,i,a),o.strokeStyle=`rgba(237,230,214,0.05)`,o.lineWidth=1;for(let e=64;e<i;e+=64)o.beginPath(),o.moveTo(e+.5,0),o.lineTo(e+.5,a),o.stroke();let u=o.createRadialGradient(i*.5,a*.36,10,i*.5,a*.36,i*.8);u.addColorStop(0,c(.34).replace(`rgb`,`rgba`).replace(`)`,`,0.5)`)),u.addColorStop(1,`rgba(0,0,0,0)`),o.fillStyle=u,o.fillRect(0,0,i,a),o.font=`500 21px 'IBM Plex Mono', ui-monospace, monospace`,o.textBaseline=`alphabetic`,o.fillStyle=n,o.textAlign=`left`,o.fillText(t.type.toUpperCase(),40,172),o.fillStyle=`rgba(237,230,214,0.7)`,o.textAlign=`right`,o.fillText(t.year,i-40,172),o.strokeStyle=n,o.globalAlpha=.5,o.beginPath(),o.moveTo(40,190.5),o.lineTo(i-40,190.5),o.stroke(),o.globalAlpha=1;let d=i-80;if(r&&r.naturalWidth){let e=r.naturalHeight/r.naturalWidth,t=d,n=t*e;n>520&&(n=520,t=n/e);let i=40+(d-t)/2,a=222+(520-n)/2;o.save(),o.shadowColor=`rgba(0,0,0,0.6)`,o.shadowBlur=36,o.shadowOffsetY=14,o.fillStyle=`#000`,o.fillRect(i,a,t,n),o.restore(),o.drawImage(r,i,a,t,n),o.fillStyle=`rgba(0,0,0,0.2)`,o.fillRect(i,a,t,n),o.strokeStyle=`rgba(237,230,214,0.42)`,o.lineWidth=2,o.strokeRect(i-1,a-1,t+2,n+2)}else if(t.id===`qvr`){o.strokeStyle=n,o.lineWidth=1.6;let e=i/2,t=(t,n)=>{let r=(t/18-.5)*2,i=(n/18-.5)*2,a=.42*(1-.8*Math.exp(-3.2*(r*r+.6*i*i)))+r*r*.28-.18*i*.6+.09*Math.sin(3.4*i+1.2)*(1-Math.abs(r)*.5);return[e+(r-i*.52)*(d*.38),508+(r*.12+i*.36)*(d*.42)-d*.4*a]};for(let e=0;e<=18;e++){o.globalAlpha=.3+e/18*.7,o.beginPath();for(let n=0;n<=18;n++){let[r,i]=t(n,e);n?o.lineTo(r,i):o.moveTo(r,i)}o.stroke()}for(let e=0;e<=18;e++){o.globalAlpha=.25+e/18*.55,o.beginPath();for(let n=0;n<=18;n++){let[r,i]=t(e,n);n?o.lineTo(r,i):o.moveTo(r,i)}o.stroke()}o.globalAlpha=1}o.strokeStyle=`rgba(237,230,214,0.5)`,o.lineWidth=1.5;for(let[e,t]of[[26,140],[i-26,140],[26,a-140],[i-26,a-140]])o.beginPath(),o.moveTo(e-7,t),o.lineTo(e+7,t),o.moveTo(e,t-7),o.lineTo(e,t+7),o.stroke();o.fillStyle=`#EDE6D6`,o.textAlign=`left`;let f=72;o.font=`600 ${f}px 'Bodoni Moda Variable', 'Bodoni Moda', Didot, serif`;let m=$e(t.name),h=J(o,m,i-96);for(;h.length>2&&f>52;)f-=6,o.font=`600 ${f}px 'Bodoni Moda Variable', 'Bodoni Moda', Didot, serif`,h=J(o,m,i-96);let g=834+(h.length>1?0:34);h.forEach((e,t)=>o.fillText(e,40,g+t*f*.98)),o.font=`400 22px 'IBM Plex Mono', ui-monospace, monospace`,o.fillStyle=`rgba(237,230,214,0.78)`,J(o,t.role,i-80).slice(0,2).forEach((e,t)=>o.fillText(e,40,g+h.length*f*.98+18+t*30))}var tt=`
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
${A}
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
}`;function rt(e){let n=!1,i=new t;i.name=`tr-panels`,i.userData.noReflect=!0,i.frustumCulled=!1;let a=[],o=e=>{et(e.cv,e.p,e.accent,e.img),e.tex.needsUpdate=!0};return{leg:e,cues:[{at:.14,name:`tr:panels`}],build(e){if(n)return;let t=new Float32Array(174),s=new Float32Array(116),c=[];for(let e=0;e<=28;e++)for(let t=0;t<2;t++){let n=e*2+t;s[n*2]=e/28*2-1,s[n*2+1]=t*2-1}for(let e=0;e<28;e++){let t=e*2,n=t+1,r=t+2,i=t+3;c.push(t,r,n,n,r,i)}let l=new d;l.setAttribute(`position`,new _(t,3)),l.setAttribute(`aP`,new _(s,2)),l.setIndex(c);for(let t of Ze){let n=Qe(t.id);if(!n)continue;let s=document.createElement(`canvas`);s.width=512,s.height=1150;let c=new v(s);c.colorSpace=``,c.anisotropy=4,c.minFilter=m,c.generateMipmaps=!0;let d=new r({vertexShader:tt,fragmentShader:nt,side:2,uniforms:{uC:{value:new u},uT:{value:new u(1,0,0)},uO:{value:new u(0,0,-1)},uRb:{value:5},uW:{value:qe},uH:{value:Je},uLift:{value:0},uTex:{value:c},uAccent:{value:new p(t.accent)},uSpeed:{value:0},uCopy:{value:0},uGlint:{value:1},uLane:{value:e.lane.u},uRes:{value:e.res},uLaneOn:k}});L(d,!1);let f=new S(l,d);f.frustumCulled=!1,f.visible=!1,f.renderOrder=100,i.add(f);let h={mesh:f,mat:d,slot:t.slot,cv:s,tex:c,p:n,accent:t.accent,img:null};a.push(h),o(h);let g=t.img?ie[t.id]?.find(e=>e.slug===t.img):void 0;if(g){let e=new Image;e.onload=()=>{h.img=e,o(h)},e.src=`/portfolio/`+g.sm}}Promise.all([document.fonts.load(`600 80px 'Bodoni Moda Variable'`),document.fonts.load(`500 20px 'IBM Plex Mono'`)]).then(()=>a.forEach(o)).catch(()=>{}),i.visible=!1,e.scene.add(i),M(e,i),n=!0},setVisible(e){e||(i.visible=!1)},frame(e,t){if(!n)return;let{u:r}=e,o=j((r-Ye)/.5),s=135*q*(1-o)**2.2,c=r>Ye&&r<.56?(1-o)**1.2:0,l=le(j((r-Xe)/.24)),u=ue(j((r-.66)/.26)),d=!1;for(let t of a){let n=t.slot,i=n*Ge+s+(n===0?0:Math.sign(n)*62*q*l),a=Math.abs(i),o=Ke-2.6*P(8*q,36*q,a)*(1-P(70*q,110*q,a)),f=Math.cos(i)>-.12&&r>.02&&r<.94&&!(n===0&&u>=1);if(t.mesh.visible=f,!f)continue;d=!0;let p=Math.sin(i),m=Math.cos(i),h=t.mat.uniforms;h.uC.value.set(o*p,0,-o*m),h.uO.value.set(p,0,-m),h.uT.value.set(m,0,p),h.uRb.value=6.2-3*c,h.uLift.value=n===0?Je*1.02*u:0,h.uSpeed.value=c,h.uCopy.value=e.copy,h.uGlint.value=.7+.5*Math.sin(i*1.3+1),t.mesh.renderOrder=100+Math.round((12-o)*100)}i.visible=d,t.field=1-.9*P(.3,.5,r)*(1-P(.66,.86,r)),t.flash=0},camera(){return null},dispose(){i.removeFromParent();for(let e of a)e.mat.dispose(),e.tex.dispose()}}}var Y=.5,it=`
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
}`;function st(e){let n=!1,i=!1,l=null,d=null,p=null,m=new t;m.name=`tr-portal`,m.userData.noReflect=!0;let h=null,g=new o(35,1.6,.1,400),_={tRT:{value:null},uRes:{value:new x(1440,900)},uTime:{value:0},uA:{value:0},uMix:{value:0},uScan:{value:1},uGlitch:{value:0},uBoost:{value:0},uAdd:{value:.55}},v={..._,uA:{value:0},uAdd:{value:0}},y=new u,C=new u,w=new c,T=new u,E=[],D=(e,t)=>{let n=e.flightCam(1),r=n.pos[0]-n.target[0],i=n.pos[1]-n.target[1],a=n.pos[2]-n.target[2],o=Math.hypot(r,i,a)||1,s=15*(1-oe((t-Y)/.5));return{pos:[n.pos[0]-r/o*s,n.pos[1]-i/o*s,n.pos[2]-a/o*s],target:[...n.target],fov:n.fov}},O=e=>{let t=Math.max(64,Math.round(Math.min(e.res.x*.5,1e3))),n=Math.max(64,Math.round(e.res.y*(t/Math.max(1,e.res.x))));h?(h.width!==t||h.height!==n)&&h.setSize(t,n):(h=new b(t,n,{type:s,depthBuffer:!0,samples:0}),h.texture.minFilter=f,h.texture.magFilter=f,h.texture.generateMipmaps=!1,_.tRT.value=h.texture)};return{leg:e,cues:[{at:.42,name:`tr:portal`}],build(e){if(n||(n=!0,(e.world?.root)?.traverse(e=>{!l&&e.isMesh&&e.userData.part===`screen`&&(l=e)}),!l||!l.parent))return;let t=new r({vertexShader:it,fragmentShader:ot,uniforms:_,transparent:!0,depthWrite:!1,depthTest:!0,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205});d=new S(l.geometry,t),d.position.copy(l.position),d.quaternion.copy(l.quaternion),d.scale.copy(l.scale),d.translateZ(.004),d.renderOrder=20,d.visible=!1,l.parent.add(d);let o=new r({vertexShader:at,fragmentShader:ot,uniforms:v,transparent:!0,depthWrite:!1,depthTest:!1,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205});p=new S(new a(2,2),o),p.frustumCulled=!1,p.renderOrder=100,p.visible=!1,m.add(p),e.scene.add(m),O(e),M(e,m,d),i=!0},setVisible(e){e||(d&&(d.visible=!1),p&&(p.visible=!1))},frame(e,t,n){if(!i||!d||!p||!l)return;let{u:r,t:a}=e,o=r<Y;_.uTime.value=a,v.uTime.value=a,n.renderer.getDrawingBufferSize(n.res),_.uRes.value.copy(n.res),v.uRes.value.copy(n.res);let s=Math.exp(-(((r-Y)/.045)**2))*.9+.35*P(.22,.36,r)*(1-P(.4,.5,r)),c=Math.exp(-(((r-Y)/.02)**2))*.32;if(_.uGlitch.value=v.uGlitch.value=s,_.uBoost.value=v.uBoost.value=c,_.uMix.value=v.uMix.value=o?P(.26,.44,r):1,_.uScan.value=v.uScan.value=o?1:1-P(.58,.78,r),_.uA.value=P(.4,.48,r),_.uAdd.value=.7*P(.12,.34,r),v.uA.value=o?0:1-P(.6,.78,r),d.visible=o&&(_.uA.value>.002||_.uAdd.value>.002),p.visible=!o&&v.uA.value>.002,r>.14&&r<.8){O(n);let e=D(n,Math.max(r,Y));g.position.set(...e.pos),g.up.set(0,1,0),g.lookAt(e.target[0],e.target[1],e.target[2]),g.fov=e.fov,g.aspect=n.res.x/Math.max(1,n.res.y),g.near=n.camera.near,g.far=n.camera.far,g.updateProjectionMatrix(),g.updateMatrixWorld(!0);let t=n.renderer,i=t.getRenderTarget();E=[];for(let e of[d,p,m,n.scene.getObjectByName(`atmos-mirror`)])e&&e.visible&&(e.visible=!1,E.push(e));for(let e of n.scene.children)e.userData.noReflect&&e.visible&&!E.includes(e)&&(e.visible=!1,E.push(e));let a=n.field.points?.material?.uniforms,s=a?.uDpr?.value;a?.uDpr&&s!=null&&(a.uDpr.value=s*(h.width/Math.max(1,n.res.x))),n.field.setFieldAlpha?.(1);let c=k.value;k.value=0;try{t.setRenderTarget(h),t.clear(),t.render(n.scene,g)}finally{t.setRenderTarget(i),k.value=c,a?.uDpr&&s!=null&&(a.uDpr.value=s);for(let e of E)e.visible=!0;d.visible=o&&(_.uA.value>.002||_.uAdd.value>.002),p.visible=!o&&v.uA.value>.002}}t.field=r<Y?1-.93*P(.3,.46,r):.07+.93*P(.54,.86,r),t.flash=0},camera(e,t,n){if(!i||!l)return null;let r=n.flightCam(0);if(e>=Y)return D(n,e);l.updateWorldMatrix(!0,!1),l.matrixWorld.decompose(y,w,T),C.set(0,0,1).applyQuaternion(w);let a=Math.hypot(r.pos[0]-y.x,r.pos[1]-y.y,r.pos[2]-y.z),o=N([[0,a],[.1,a*.88],[.25,a*.5],[.38,3.2],[.46,.95],[Y,.32]])(e),s=new u(r.pos[0]-y.x,r.pos[1]-y.y,r.pos[2]-y.z).normalize().lerp(C,P(.22,.44,e)).normalize(),c=P(0,.3,e);return{pos:[y.x+s.x*o,y.y+s.y*o,y.z+s.z*o],target:[I(r.target[0],y.x,c),I(r.target[1],y.y,c),I(r.target[2],y.z,c)],fov:I(r.fov,52,P(.2,.5,e))}},dispose(){m.removeFromParent(),d?.removeFromParent(),h?.dispose()}}}var X=C.some(e=>e.id===`gate`)?`gate`:`instrument`,Z={[`${X}>hall`]:{warp:[[0,0],[.12,.1],[.44,.45],[.62,.6],[1,1]]}},Q=new Map;for(let[e,t]of Object.entries(Z))t.warp&&Q.set(e,E(t.warp.map(e=>e[0]),t.warp.map(e=>e[1])));var ct={[`${X}>hall`]:ye,"hall>hold":xe,"mind>school":Pe,"name>world":st,"table>market":Ue,"chomchom>secretary":_e,"world>surface":rt},$=new Set((typeof location<`u`?new URLSearchParams(location.search).get(`tr`)??``:``).split(`,`).filter(Boolean));function lt(e){if(!O(`transitions`)||!e.field?.scene||$.has(`0`)||w())return;let t=e.field,n=t.scene,r=t.renderer,i=t.camera,a=new ae,o=new x(1440,900),s=new Map;for(let e of Object.keys(ct)){let[t,n]=e.split(`>`),r=C.findIndex(e=>e.id===t),i=C.findIndex(e=>e.id===n);if(r<0||i!==r+1){console.warn(`[transitions] not a leg:`,e);continue}let a=te(i);a&&s.set(e,{key:e,i0:r,i1:i,A:C[r],B:C[i],p0:a[0],p1:a[1]})}let c={ctx:e,field:t,scene:n,renderer:r,camera:i,world:e.world,lane:a,res:o,q:{shadows:!$.has(`noshadow`),dust:!$.has(`nodust`),reflect:!$.has(`noreflect`)}},l=new Map;for(let[e,t]of s){let n={...c,flightCam:e=>{let n=ne(t.p0+j(e)*(t.p1-t.p0)).cam;return{pos:[...n.pos],target:[...n.target],fov:n.fov}},stateAt:e=>ne(t.p0+j(e)*(t.p1-t.p0))};l.set(e,{piece:ct[e](t),leg:t,built:!1,envp:n})}let u={};for(let[e,t]of l)u[e]=t;let d={get:e=>l.get(e),has:e=>l.has(e),keys:()=>l.keys(),values:()=>l.values(),entries:()=>l.entries(),forEach:e=>l.forEach(e),[Symbol.iterator]:()=>l[Symbol.iterator]()};for(let[e,t]of Object.entries(d))Object.defineProperty(u,e,{value:t,enumerable:!1});Object.defineProperty(u,"size",{get:()=>l.size,enumerable:!1}),window.__tr={pieces:u,legs:s,TIMING:Z,warp:(e,t)=>(Q.get(e)??(e=>e))(t)};let f=C.findIndex(e=>e.id===X),p=!1,m=null,h=-1,g=0,_=0,v=!1,y={field:1,flash:0,flashCol:[1,1,1]},b=()=>!!window.__v3?.follower?.jump,S=e=>e.dwelling?null:`${C[e.wp]?.id}>${C[e.next]?.id}`,E=e=>{if(!e.built){e.built=!0;try{e.piece.build(e.envp)}catch(e){console.warn(`[transitions] build failed`,e)}}},D=()=>{if(m){let e=l.get(m);e?.piece.setVisible(!1,e.envp)}v&&=(t.setFieldAlpha?.(1),!1),m=null,h=-1},ie=T(`transitions`,(s,c,u)=>{for(let e of l.values())!e.built&&u.p>e.leg.p0-.05&&u.p<e.leg.p1+.01&&E(e);let d=u.dwelling?u.wp:u.wp+u.t;if(!p&&d>f-3.2&&d<f+3.5){let e=l.get(`${X}>hall`),t=l.get(`hall>hold`);for(let n of[e,t])n&&E(n);(!e||e.built)&&(!t||t.built)&&(p=!0,r.compileAsync(n,i).catch(()=>{}))}let x=S(u),C=x?l.get(x):void 0;if(!C||ee()||b()||!C.built){m&&D();return}m!==x&&(m&&D(),m=x);let w=j(Q.get(x)?.(u.raw)??u.raw);if(h>=0)for(let t of C.piece.cues)h<t.at!=w<t.at&&Math.abs(w-h)<.5&&e.emit(t.name,{dir:w>h?1:-1,u:w});g+=((h>=0&&s>_?(w-h)/Math.max(.001,Math.min(.1,s-_)):0)-g)*(1-Math.exp(-c/.05)),h=w,_=s;let T=u.t<.5?u.overlayOut:u.overlayIn;a.update(u,c),r.getDrawingBufferSize(o),y.field=1,y.flash=0,C.piece.setVisible(!0,C.envp),C.piece.frame({u:w,t:s,dt:c,st:u,copy:T,dir:g>=0?1:-1},y,C.envp),t.setFieldAlpha?.(y.field),v=!0});return{update(e,t,n){re(`transitions`)?ie(e,t,n):m&&D()},adjustCam(e,t,n){if(!m||!re(`transitions`))return;let r=l.get(m);if(!r||!r.built)return;let i=j(j(Q.get(m)?.(n.raw)??n.raw)+g*.115),a=r.piece.camera(i,e,r.envp);if(!a)return;let o=P(0,.05,i)*(1-P(.95,1,i)),s=(e,t)=>[I(e[0],t[0],o),I(e[1],t[1],o),I(e[2],t[2],o)];return{pos:s(e.pos,a.pos),target:s(e.target,a.target),fov:I(e.fov,a.fov,o)}}}}export{Z as TIMING,lt as install};