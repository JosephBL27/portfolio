import{xr as e}from"./three.core-rbApIkjy.js";import{A as t}from"./main-BfTGMAJq.js";import{n}from"./occlusion-B0JHOc5W.js";var r=e=>{let n=t[Math.max(0,Math.min(t.length-1,e))];return n.frame&&Math.abs(n.frame[0])>.05?n.frame[0]>0?-1:1:n.id===`epilogue`?-1:0},i=class{u=new e(0,-.3,.34,0);off=!1;side=0;update(e,t){let n=innerWidth,i=innerHeight,a=n/Math.max(1,i),o=e.dwelling||e.t<.5?e.wp:e.next;this.side+=(r(o)-this.side)*(1-Math.exp(-t/.2));let s=Math.min(Math.max(n*.31,380),560)+Math.max(24,n*.03)+70,c=a<.9&&!this.off;return this.u.set(this.off?0:this.side,Math.min(.1,-1+2*s/n),.34,+!!c),this.u}},a={value:1},o=`
uniform vec4 uLane; uniform vec2 uRes; uniform float uLaneOn;
${n}
float laneMask() {
  vec2 nd = gl_FragCoord.xy / uRes * 2.0 - 1.0;
  float m = 1.0;
  if (uLane.w > 0.5) m = smoothstep(-0.34, -0.04, nd.y) * (1.0 - smoothstep(0.5, 0.76, nd.y));
  else if (abs(uLane.x) > 0.001) { float u = nd.x * -sign(uLane.x); m = mix(1.0, smoothstep(uLane.y, uLane.y + uLane.z, u), abs(uLane.x)); }
  // v11: and nothing glows inside the subject's bounds or a copy box (occlusion.ts zones); off with the lane in the reflection pass
  return mix(1.0, m * holeMask(gl_FragCoord.xy / uRes), uLaneOn);
}`;export{a as n,i as r,o as t};