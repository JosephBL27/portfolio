import{Hn as e,Rt as t,Yn as n,br as r,c as i,h as a,s as o}from"./three.core-rbApIkjy.js";import{n as s,t as c}from"./glbmodel-OszHnxV2.js";var l={rollAt:-1e9,moveAt:-1e9,hoverAt:-1e9,pressAt:-1e9},u=()=>performance.now()/1e3,d=e=>{l[e]=u()},f=(e,t)=>Math.max(0,1-(u()-l[e])/t),p=null,m=()=>p??=c(`games-props`).then(e=>e?s(e):null);function h(a,s){let c=Math.round(s.n*(a.phone?.6:1)),l=new Float32Array(c*3),u=new Float32Array(c*4),d=new Float32Array(c*3),f=(s.seed??3)>>>0,p=()=>(f=Math.imul(f,1664525)+1013904223>>>0,f/4294967296),[m,h]=s.arc??[0,Math.PI*2];for(let e=0;e<c;e++){let t=m+p()*(h-m),n=s.rMin+p()*(s.rMax-s.rMin);l[e*3]=Math.sin(t)*n,l[e*3+1]=s.yMin+p()*(s.yMax-s.yMin),l[e*3+2]=-Math.cos(t)*n;for(let t=0;t<4;t++)u[e*4+t]=p();let r=s.cols[Math.floor(p()*s.cols.length)];d.set(r,e*3)}let g=new i;g.setAttribute(`position`,new o(l,3)),g.setAttribute(`aR`,new o(u,4)),g.setAttribute(`aC`,new o(d,3)),g.boundingSphere=new n(new r,s.rMax*2);let _={uTime:a.fog.time,uPres:a.fog.pres,uPx:a.fog.px,uSize:{value:s.size},uA:{value:1},uPulse:{value:0}},v=new e({transparent:!0,depthWrite:!1,blending:2,uniforms:_,vertexShader:`
      attribute vec4 aR; attribute vec3 aC; uniform float uTime, uPx, uSize, uPulse; varying vec3 vC; varying float vB;
      void main() {
        vec3 p = position; p.y += sin(uTime * 0.12 * (0.4 + aR.x) + aR.y * 30.0) * 0.35; p.x += cos(uTime * 0.09 + aR.z * 20.0) * 0.4;
        vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
        float br = 0.55 + 0.45 * sin(uTime * (0.25 + aR.w * 0.7) + aR.x * 50.0);
        vB = br * (0.6 + 0.8 * aR.z) * (1.0 + uPulse * (0.8 + aR.y));
        vC = aC;
        gl_PointSize = clamp(uSize * uPx * (0.45 + aR.y * 1.1) * (1.0 + 0.25 * uPulse) * (26.0 / max(1.0, -mv.z)), 3.0, 190.0);
      }`,fragmentShader:`
      precision highp float; uniform float uPres, uA; varying vec3 vC; varying float vB;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float disc = smoothstep(1.0, 0.86, d);                            // a lens aperture: a flat disc with a brighter rim
        float rim = smoothstep(0.55, 0.95, d) * disc * 0.55;
        gl_FragColor = vec4(vC * (0.5 + rim) * disc * vB * uA * uPres * 0.2, 1.0);
      }`}),y=new t(g,v);return y.frustumCulled=!1,y.renderOrder=2,y.name=`bokeh`,{points:y,set(e,t){_.uA.value=e,_.uPulse.value=t},dispose(){g.dispose(),v.dispose()}}}function g(s,c){let l=Math.round(c.n*(s.phone?.6:1)),d=new Float32Array(l*3),f=new Float32Array(l*3),p=new Float32Array(l*3),m=(c.seed??11)>>>0,h=()=>(m=Math.imul(m,1664525)+1013904223>>>0,m/4294967296);for(let e=0;e<l;e++){let t=h()*Math.PI*2,n=Math.sqrt(h())*c.speed;d[e*3]=Math.cos(t)*n,d[e*3+1]=c.up*(.4+h()*.9),d[e*3+2]=Math.sin(t)*n;for(let t=0;t<3;t++)f[e*3+t]=h()}let g=new i;g.setAttribute(`position`,new o(p,3)),g.setAttribute(`aV`,new o(d,3)),g.setAttribute(`aR`,new o(f,3)),g.boundingSphere=new n(new r,1e4);let _={uAge:{value:99},uO:{value:new r},uG:{value:c.g},uLife:{value:c.life},uSize:{value:c.size},uGrow:{value:c.grow??0},uCol:{value:new a(...c.col)},uAlpha:{value:c.alpha},uPx:s.fog.px,uPres:s.fog.pres},v=new e({transparent:!0,depthWrite:!1,blending:2,uniforms:_,vertexShader:`
      attribute vec3 aV; attribute vec3 aR; uniform float uAge, uG, uLife, uSize, uGrow, uPx; uniform vec3 uO; varying float vA;
      void main() {
        float a = uAge * (0.75 + 0.5 * aR.x);
        vec3 p = uO + aV * (1.0 - exp(-a * 2.2)) / 2.2 * 2.0; p.y -= 0.5 * uG * a * a;
        vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
        float f = clamp(a / uLife, 0.0, 1.0); vA = (1.0 - f) * (1.0 - f) * smoothstep(0.0, 0.04, a) * step(a, uLife) * (0.6 + 0.4 * sin(a * 30.0 + aR.y * 40.0));
        gl_PointSize = clamp(uSize * uPx * (0.5 + aR.z) * (1.0 + uGrow * a) * (9.0 / max(1.0, -mv.z)), 1.0, 70.0);
      }`,fragmentShader:`
      precision highp float; uniform vec3 uCol; uniform float uAlpha, uPres; varying float vA;
      void main() { float d = length(gl_PointCoord - 0.5) * 2.0; float a = pow(1.0 - smoothstep(0.0, 1.0, d), 2.0); gl_FragColor = vec4(uCol, a * vA * uAlpha * uPres); }`}),y=new t(g,v);y.frustumCulled=!1,y.renderOrder=7,y.visible=!1,y.name=`burst`;let b=-1e9;return{points:y,fire(e){_.uO.value.set(...e),b=u(),_.uAge.value=0,y.visible=!0},update(){let e=u()-b;e>c.life*1.5?y.visible=!1:_.uAge.value=e},dispose(){g.dispose(),v.dispose()}}}export{d as a,f as i,g as n,m as r,h as t};