/*!
 * West Coast Charts chart types v1.1.4
 * Plugin for West Coast Charts: WestCoastCharts.use(types)
 * (c) 2026 West Coast Software - Released under the MIT License.
 */
function n(n){n.on("decimate",(n,t,o,r,e,l)=>t||function(n,t,o,r=1){if(n<4)return null;const e=new Uint8Array(n);let l=NaN,c=0,i=0,u=0,a=0,f=1/0,s=-1/0,N=0;const d=()=>{e[c]||(e[c]=1,N++),e[u]||(e[u]=1,N++),e[a]||(e[a]=1,N++),e[i]||(e[i]=1,N++)};for(let e=0;e<n;e++){const n=Math.floor(t(e)/r),N=o(e);n!==l?(e>0&&d(),l=n,c=i=u=a=e,f=s=N):(i=e,N<f&&(f=N,u=e),N>s&&(s=N,a=e))}return d(),N<.8*n?e:null}(o,r,e,l))}export{n as i};
