import{m as e,n as t,p as n,s as r}from"./kit-CbslsCzS.js";import{n as i,t as a}from"./prod-kit-CPyR8h_g.js";var o=5,s=.18,c=100,l=155,u={x:40,y:165},d={x:250,y:165},f=216.5,p=107.5,m=62;function h(e){let n={x:u.x+Math.sqrt(f*f-e*e),y:u.y-e},r=d.x-n.x,i=d.y-n.y,a=Math.min(Math.hypot(r,i),109.99),o=r/Math.hypot(r,i),s=i/Math.hypot(r,i),c=Math.sqrt(3025-(a/2)**2),l={x:n.x+r/2-s*c,y:n.y+i/2+o*c},p=Math.acos(t((6050-a*a)/6050,-1,1))*180/Math.PI,m=(n.x-u.x)/f,h=(n.y-u.y)/f,g=e=>({x:u.x+(n.x-u.x)*e,y:u.y+(n.y-u.y)*e});return{S:n,E:l,ang:p,hip:g(.55),knee:g(.27),head:{x:n.x+m*30,y:n.y+h*30},neck:{x:n.x+m*12,y:n.y+h*12}}}var g=e=>e?m:p;function _(t,f){let m=f.reduced,_=r(f.emit,60),v=a(),y=i(t,`pl-sf`,{acc:`#ff7a3d`,acc2:`#ffc9a8`,glow:`255, 122, 61`},`Interactive model, Simulation`,`The alarm that will not stop`,`Simulation: the target is ${o} reps here. In the app the count is set per alarm, and the camera does the counting. This demo uses no camera.`,`Hold the pad (or Space) to lower yourself, release to push back up. A rep only counts after a full up, down, up cycle, each phase held at least 0.18 s.`);y.body.innerHTML=`
  <div class="sf-grid">
    <div class="sf-phone" role="img" aria-label="An iPhone alarm screen, ringing">
      <div class="sf-notch"></div>
      <div class="sf-screen is-ring">
        <span class="sf-alarmlab pl-lab">Alarm &middot; pushups</span>
        <b class="sf-time">06:30</b>
        <div class="sf-ember"><i class="sf-ring"></i><i class="sf-ring r2"></i><i class="sf-ring r3"></i>
          <svg viewBox="0 0 60 80" aria-hidden="true"><path class="sf-flame" d="M30 4c4 14 20 22 20 44a20 20 0 0 1-40 0c0-10 6-14 8-22 4 4 6 8 8 10 0-12-2-20 4-32z"/><path class="sf-core" d="M30 36c2 8 10 12 10 22a10 10 0 0 1-20 0c0-6 4-8 5-14 3 2 4 4 5 6z"/></svg>
        </div>
        <div class="sf-bars" aria-hidden="true">${`<i></i>`.repeat(9)}</div>
        <p class="sf-state" aria-live="polite">RINGING</p>
        <div class="sf-prog" aria-hidden="true">${Array.from({length:o},()=>`<i></i>`).join(``)}</div>
        <p class="sf-sub">Siren runs until the missions are done</p>
      </div>
    </div>
    <div class="sf-side pl-panel">
      <div class="sf-readouts">
        <div><span class="pl-lab">Reps</span><b class="sf-reps"><span class="sf-n">0</span><span class="sf-of"> / ${o}</span></b></div>
        <div><span class="pl-lab">Elbow</span><b class="sf-deg">180&deg;</b></div>
        <div><span class="pl-lab">Phase</span><b class="sf-phase">UP</b></div>
      </div>
      <svg class="sf-fig" viewBox="0 0 320 200" aria-hidden="true">
        <line class="sf-ground" x1="10" y1="168" x2="310" y2="168"/>
        <g class="sf-limbs"><polyline class="sf-bone b-leg"/><polyline class="sf-bone b-body"/><polyline class="sf-bone b-arm"/></g>
        <circle class="sf-head" r="11"/>
        <g class="sf-joints"><circle class="j j-hip" r="3.5"/><circle class="j j-knee" r="3.5"/><circle class="j j-sh" r="4.5"/><circle class="j j-el" r="6.5"/><circle class="j j-wr" r="4.5"/><circle class="j j-an" r="4.5"/></g>
        <path class="sf-arc"/><text class="sf-arclab" text-anchor="end"></text>
      </svg>
      <p class="sf-toast" aria-live="polite">&nbsp;</p>
      <div class="sf-ctl">
        <button class="pl-btn sf-pad" type="button" aria-label="Hold to lower yourself, release to push up. Space works too.">HOLD to go down &middot; RELEASE to push up</button>
        <button class="pl-btn sf-again" type="button" hidden>Ring it again</button>
      </div>
    </div>
  </div>`;let b=e=>y.root.querySelector(e),x=b(`.sf-screen`),S=b(`.sf-n`),C=b(`.sf-deg`),w=b(`.sf-phase`),T=b(`.sf-state`),E=b(`.sf-toast`),D=b(`.sf-pad`),O=b(`.sf-again`),k=[...y.root.querySelectorAll(`.sf-prog i`)],A=(...e)=>e.map(e=>`${e.x.toFixed(1)},${e.y.toFixed(1)}`).join(` `),j=(e,t)=>{let n=b(e);n.setAttribute(`cx`,t.x.toFixed(1)),n.setAttribute(`cy`,t.y.toFixed(1))},M=!1,N=0,P=`up`,F=0,I=!1,L=0,R=0,z=0,B=n(p,m?4e3:150,m?120:17),V=p,H=e=>{E.textContent=e,clearTimeout(L),L=window.setTimeout(()=>{E.innerHTML=`&nbsp;`},1800)},U=()=>{let e=h(V);b(`.b-leg`).setAttribute(`points`,A(u,e.knee,e.hip)),b(`.b-body`).setAttribute(`points`,A(e.hip,e.S,e.neck)),b(`.b-arm`).setAttribute(`points`,A(e.S,e.E,d));let t=b(`.sf-head`);t.setAttribute(`cx`,e.head.x.toFixed(1)),t.setAttribute(`cy`,e.head.y.toFixed(1)),j(`.j-hip`,e.hip),j(`.j-knee`,e.knee),j(`.j-sh`,e.S),j(`.j-el`,e.E),j(`.j-wr`,d),j(`.j-an`,u);let n=Math.atan2(e.S.y-e.E.y,e.S.x-e.E.x),r=Math.atan2(d.y-e.E.y,d.x-e.E.x),i=e.E.x+Math.cos(n)*16,a=e.E.y+Math.sin(n)*16,o=e.E.x+Math.cos(r)*16,s=e.E.y+Math.sin(r)*16;b(`.sf-arc`).setAttribute(`d`,`M${i.toFixed(1)} ${a.toFixed(1)} A16 16 0 0 ${+(Math.sin(r-n)>0||Math.sin(r-n)===0)} ${o.toFixed(1)} ${s.toFixed(1)}`);let c=b(`.sf-arclab`);return c.setAttribute(`x`,(e.E.x-12).toFixed(1)),c.setAttribute(`y`,(e.E.y+4).toFixed(1)),c.textContent=`${Math.round(e.ang)}°`,C.textContent=`${Math.round(e.ang)}°`,e.ang},W=e=>{P=e,F=0,w.textContent=e.toUpperCase(),y.root.dataset.phase=e},G=()=>{I=!0,x.classList.remove(`is-ring`),x.classList.add(`is-off`),T.textContent=`ALARM OFF`,O.hidden=!1,D.disabled=!0,_(`hub:poweroff`);try{f.emit(`selforge:siren`,{on:!1})}catch{}H(`Siren stopped after ${o} reps`)},K=t=>{R=0;let n=Math.min(1/24,z?t-z:1/60);z=t,B.k=m?4e3:150,V=e(B,g(M),n);let r=U(),i=g(M);I||(P===`up`?r<c?(F+=n,F>=s&&W(`down`)):F=0:r>l?(F+=n,F>=s&&(W(`up`),J())):F=0),Math.abs(B.v)>.05||Math.abs(B.x-i)>.05||F>0?R=requestAnimationFrame(K):z=0},q=()=>{R||=requestAnimationFrame(K)};function J(){N++,S.textContent=String(N),k[N-1]?.classList.add(`on`),S.classList.remove(`bump`),S.offsetWidth,S.classList.add(`bump`),_(`count:tick`,{rep:N}),H(`Rep ${N} counted`),N>=o&&G()}let Y=e=>{I||M===e||(M=e,D.classList.toggle(`is-held`,e),!e&&P===`up`&&B.x>80&&H(`Go all the way down and hold it`),q())};v.on(D,`pointerdown`,e=>{e.preventDefault(),D.setPointerCapture?.(e.pointerId),Y(!0)}),v.on(D,`pointerup`,()=>Y(!1)),v.on(D,`pointercancel`,()=>Y(!1)),v.on(D,`lostpointercapture`,()=>Y(!1)),v.on(D,`keydown`,e=>{(e.code===`Space`||e.key===` `)&&(e.preventDefault(),e.repeat||Y(!0))}),v.on(D,`keyup`,e=>{(e.code===`Space`||e.key===` `)&&(e.preventDefault(),Y(!1))}),v.on(D,`blur`,()=>Y(!1)),v.on(D,`contextmenu`,e=>e.preventDefault()),v.on(O,`click`,()=>{N=0,I=!1,M=!1,S.textContent=`0`,k.forEach(e=>e.classList.remove(`on`)),x.classList.add(`is-ring`),x.classList.remove(`is-off`),T.textContent=`RINGING`,O.hidden=!0,D.disabled=!1,W(`up`),H(`The alarm is ringing again`),_(`hub:button`);try{f.emit(`selforge:siren`,{on:!0})}catch{}q(),D.focus({preventScroll:!0})}),W(`up`),U(),m&&x.classList.add(`is-still`);let X=new IntersectionObserver(e=>{if(e[0]?.isIntersecting){q();try{f.emit(`selforge:siren`,{on:!I})}catch{}}else try{f.emit(`selforge:siren`,{on:!1})}catch{}},{threshold:.2});return X.observe(y.root),{dispose(){X.disconnect(),cancelAnimationFrame(R),clearTimeout(L),v.dispose();try{f.emit(`selforge:siren`,{on:!1})}catch{}t.innerHTML=``}}}export{_ as mount};