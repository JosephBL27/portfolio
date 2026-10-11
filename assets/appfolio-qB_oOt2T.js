import{c as e}from"./stagger-B0LDEwmR.js";/* empty css                   */import{c as t,f as n,s as r}from"./kit-CbslsCzS.js";var i={2015:8218,2024:20784,2030:24204},a={2016:10520,2024:38210},o={2019:60.2,2024:76.2},s={2022:-15.3,2024:17.1},c={rpc:17.5,cust:9.5},l=e=>Math.round(e).toLocaleString(`en-US`),u=e=>`$`+l(e);function d(){let e=1/i[2015],t=1/i[2024],n=1/i[2030],r=(e-t)/(t-n),a=1e-6,o=.999999;for(let e=0;e<120;e++){let e=(a+o)/2;(1-e**9)/(e**9*(1-e**6))-r>0?a=e:o=e}let s=a,c=(e-t)/(1-s**9),l=e-c;return e=>1/(l+c*s**(e-2015))}var f=360,p=210,m=44,h=16,g=e=>m+(e-2015)/15*302,_=e=>180-e/27e3*164;function v(v,y){let b=y.reduced,x=r(y.emit,70);v.innerHTML=``;let S=document.createElement(`div`);S.className=`ml af`+(b?` is-reduced`:``),S.setAttribute(`data-proof`,`skip`);let C=d(),w=(e,t)=>{let n=``;for(let r=e;r<=t+1e-9;r+=.25)n+=`${n?`L`:`M`}${g(r).toFixed(1)} ${_(C(r)).toFixed(1)}`;return n},T=w(2015,2024),E=w(2024,2030),D=[0,1e4,2e4].map(e=>`<line class="af-grid" x1="${m}" x2="346" y1="${_(e).toFixed(1)}" y2="${_(e).toFixed(1)}"/><text x="38" y="${(_(e)+4).toFixed(1)}" text-anchor="end">${e===0?`0`:e/1e3+`k`}</text>`).join(``),O=[2015,2020,2025,2030].map(e=>`<text x="${g(e).toFixed(1)}" y="202" text-anchor="middle">${e}</text>`).join(``),k=[2025,2026,2027,2028,2029,2030].map(e=>{let t=g(e),n=_(C(e));return`<path class="af-tri" d="M${t.toFixed(1)} ${(n-5).toFixed(1)} L${(t+4.5).toFixed(1)} ${(n+3.5).toFixed(1)} L${(t-4.5).toFixed(1)} ${(n+3.5).toFixed(1)} Z"/>`}).join(``);S.innerHTML=`
  <header class="ml-head">
    <div><span class="ml-kicker">Interactive model <span class="ml-sim" style="margin-left:8px">From the 10-Ks</span></span><h3 class="ml-title">Where the growth came from</h3></div>
    <p class="ml-note" role="note">Revenue is customers times units per customer times revenue per unit. Pick a stop on the curve, or play the years, and see which factor did the work.</p>
  </header>
  <div class="af-eq" role="group" aria-label="Revenue equals customers times units per customer times revenue per unit">
    <span class="af-term af-term--r"><i>Revenue</i></span><b aria-hidden="true">=</b>
    <button type="button" class="af-term" data-f="cust"><i>Customers</i><small>slowing: ${c.cust}% a year</small></button><b aria-hidden="true">&times;</b>
    <button type="button" class="af-term" data-f="rpc"><i>Units per customer</i><small>&times; revenue per unit</small></button><b aria-hidden="true">&times;</b>
    <button type="button" class="af-term" data-f="rpc"><i>Revenue per unit</i><small>together: ${c.rpc}% a year</small></button>
  </div>
  <div class="ml-row af-tool"><button type="button" class="ml-btn ml-btn--acc af-play" data-act="play">Play the years</button><span class="ml-small">Runs each figure from its first stated year to its last.</span></div>
  <div class="ml-cols af-cols">
    <section class="ml-p af-p af-p--cust" data-f="cust" aria-label="Customers, with the logistic fit">
      <span class="ml-lab">Customers: the curve flattens</span>
      <div class="af-big"><b class="af-cv">${l(i[2024])}</b><span class="af-cy ml-mono">2024</span></div>
      <svg class="af-svg" viewBox="0 0 ${f} ${p}" role="img" aria-label="Customers rise from 8,218 in 2015 to 20,784 in 2024, and a logistic curve flattens to 24,204 in 2030">
        ${D}${O}
        <line class="af-split" x1="${g(2024).toFixed(1)}" x2="${g(2024).toFixed(1)}" y1="${h}" y2="180"/>
        <text class="af-fc" x="${(g(2024)+6).toFixed(1)}" y="172">Fit, projected</text>
        <path class="af-curve af-curve--f" d="${E}"/><path class="af-curve" d="${T}"/>${k}
        <circle class="af-dot" r="6.5" cx="${g(2024)}" cy="${_(i[2024])}"/>
        <text class="af-pt" x="${g(2024)}" y="${_(i[2024])-12}" text-anchor="middle"></text>
      </svg>
      <div class="ml-row af-stops" role="group" aria-label="Pick a year"><button class="ml-chip" type="button" data-yr="2015" aria-pressed="false">2015</button><button class="ml-chip" type="button" data-yr="2024" aria-pressed="true">2024</button><button class="ml-chip" type="button" data-yr="2030" aria-pressed="false">2030, fitted</button></div>
      <p class="ml-small af-fn">The curve is drawn through the three stated counts. Each year's gain is smaller than the last, which is the pitch's point.</p>
    </section>
    <section class="ml-p af-p af-p--rpc" data-f="rpc" aria-label="Revenue per customer">
      <span class="ml-lab">Revenue per customer, 2016 to 2024</span>
      <div class="af-bars">
        <div class="af-bar"><div class="af-col"><i class="af-b af-b--0" style="height:${a[2016]/a[2024]*100}%"></i></div><b>${u(a[2016])}</b><span class="ml-mono">2016</span></div>
        <div class="af-bar"><div class="af-col"><i class="af-b af-b--1" style="height:100%"></i></div><b class="af-rv">${u(a[2024])}</b><span class="ml-mono">2024</span></div>
      </div>
      <span class="ml-lab" style="margin-top:14px">Growth a year, 2016 to 2024</span>
      <div class="af-cg">
        <div class="af-row"><span>Revenue per customer</span><div class="af-tr"><i class="af-g af-g--r" style="width:${c.rpc/20*100}%"></i></div><b>${c.rpc}%</b></div>
        <div class="af-row"><span>Customers</span><div class="af-tr"><i class="af-g af-g--c" style="width:${c.cust/20*100}%"></i></div><b>${c.cust}%</b></div>
      </div>
      <p class="ml-small af-fn">Bars are drawn to the two rates. Revenue per customer grew almost twice as fast, so most of the pitch's growth is each customer paying more.</p>
    </section>
  </div>
  <section class="ml-p af-vas" data-f="rpc" aria-label="Value-added services share and operating margin">
    <div class="af-ring"><svg viewBox="0 0 120 120" aria-hidden="true"><circle class="af-rt" cx="60" cy="60" r="48" pathLength="100"/><circle class="af-rf" cx="60" cy="60" r="48" pathLength="100" stroke-dasharray="${o[2024]} 100" transform="rotate(-90 60 60)"/></svg><b class="af-vv">${o[2024]}%</b></div>
    <div class="af-vt"><span class="ml-lab">Value-added services, share of revenue</span>
      <p class="ml-small">The add-ons that ride on top of the core software climbed from <b>${o[2019]}%</b> in 2019 to <b>${o[2024]}%</b> in 2024. That is the revenue-per-customer story in one dial.</p>
      <p class="ml-small">GAAP operating margin: <b>&minus;${Math.abs(s[2022])}%</b> in 2022 to <b>${s[2024]}%</b> in 2024.</p></div>
  </section>`,v.appendChild(S);let A=e=>S.querySelector(e),j=A(`.af-dot`),M=A(`.af-pt`),N=A(`.af-cv`),P=A(`.af-cy`),F=[...S.querySelectorAll(`.af-stops .ml-chip`)],I=A(`.af-b--1`),L=A(`.af-rv`),R=A(`.af-rf`),z=A(`.af-vv`),B=A(`.af-g--r`),V=A(`.af-g--c`),H=null,U=null,W=0,G=(e,t)=>{j.setAttribute(`cx`,String(g(e))),j.setAttribute(`cy`,String(_(C(e)))),M.setAttribute(`x`,String(Math.min(g(e),330))),M.setAttribute(`y`,String(_(C(e))-13)),M.textContent=t},K=(r,a)=>{F.forEach(e=>e.setAttribute(`aria-pressed`,String(+e.dataset.yr===r))),P.textContent=r===2030?`2030, fitted`:String(r);let o=i[r],s=parseInt(N.textContent.replace(/,/g,``),10)||o,c=+j.getAttribute(`cx`),u=l(o);if(!a||b){N.textContent=u,G(r,u);return}U?.pause();let d={u:0};U=e(d,{u:1,duration:520,ease:`inOut(3)`,onUpdate:()=>{let e=t(c,g(r),d.u),i=2015+(e-m)/302*15;j.setAttribute(`cx`,e.toFixed(1)),j.setAttribute(`cy`,_(C(i)).toFixed(1)),N.textContent=l(t(s,o,n(d.u))),M.textContent=``},onComplete:()=>{N.textContent=u,G(r,u)}})},q=()=>{K(2024,!1),L.textContent=u(a[2024]),I.style.height=`100%`,z.textContent=o[2024]+`%`,R.style.strokeDasharray=`${o[2024]} 100`,B.style.width=`${c.rpc/20*100}%`,V.style.width=`${c.cust/20*100}%`};function J(){if(b){q();return}H?.pause(),U?.pause(),clearTimeout(W),S.classList.add(`is-playing`),F.forEach(e=>e.setAttribute(`aria-pressed`,String(+e.dataset.yr==2015))),P.textContent=`2015 to 2024`,M.textContent=``;let n={t:0},r=0;H=e(n,{t:1,duration:3200,ease:`inOut(2)`,onUpdate:()=>{let e=n.t,s=2015+e*9;j.setAttribute(`cx`,g(s).toFixed(1)),j.setAttribute(`cy`,_(C(s)).toFixed(1)),N.textContent=l(t(i[2015],i[2024],e));let d=Math.min(1,Math.max(0,(e-.1)/.9));L.textContent=u(t(a[2016],a[2024],d)),I.style.height=`${t(a[2016]/a[2024],1,d)*100}%`,z.textContent=t(o[2019],o[2024],e).toFixed(1)+`%`,R.style.strokeDasharray=`${t(o[2019],o[2024],e)} 100`,B.style.width=`${t(0,c.rpc/20,e)*100}%`,V.style.width=`${t(0,c.cust/20,e)*100}%`;let f=performance.now();f-r>160&&(r=f,x(`count:tick`))},onComplete:()=>{S.classList.remove(`is-playing`),q(),x(`hub:detent`,{ch:4})}})}return S.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`.af-stops .ml-chip`);if(n){H?.pause(),S.classList.remove(`is-playing`),K(+n.dataset.yr,!0),x(`hub:detent`,{ch:4});return}if(t.closest(`[data-act="play"]`)){J();return}let r=t.closest(`.af-term[data-f]`);if(r){let e=r.dataset.f;S.querySelectorAll(`.af-p, .af-vas`).forEach(t=>t.classList.toggle(`is-hot`,t.dataset.f===e)),clearTimeout(W),W=window.setTimeout(()=>S.querySelectorAll(`.is-hot`).forEach(e=>e.classList.remove(`is-hot`)),2200),x(`lab:click`)}}),q(),{dispose(){H?.pause(),U?.pause(),clearTimeout(W),v.innerHTML=``}}}export{v as mount};