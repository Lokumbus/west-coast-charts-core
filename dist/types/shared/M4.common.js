/*!
 * West Coast Charts chart types v1.1.1-rc.7
 * Plugin for West Coast Charts: WestCoastCharts.use(types)
 * (c) 2026 West Coast Software - Released under the MIT License.
 */
"use strict";exports.installDecimation=function(t){t.on("decimate",(t,n,o,e,r,i)=>n||function(t,n,o,e=1){if(t<4)return null;const r=new Uint8Array(t);let i=NaN,l=0,c=0,s=0,u=0,a=1/0,f=-1/0,m=0;const N=()=>{r[l]||(r[l]=1,m++),r[s]||(r[s]=1,m++),r[u]||(r[u]=1,m++),r[c]||(r[c]=1,m++)};for(let r=0;r<t;r++){const t=Math.floor(n(r)/e),m=o(r);t!==i?(r>0&&N(),i=t,l=c=s=u=r,a=f=m):(c=r,m<a&&(a=m,s=r),m>f&&(f=m,u=r))}return N(),m<.8*t?r:null}(o,e,r,i))};
