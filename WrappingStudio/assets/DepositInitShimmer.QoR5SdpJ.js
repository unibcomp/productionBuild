import{b as p,l as x,r as l,j as e}from"./index.DCkkBiKm.js";import{u as r}from"./useMutation.rFaBnC6F.js";import{a as f}from"./queryToast.B3bOJDoo.js";import{e as m}from"./crypto.Bdh12hF-.js";import{c as n}from"./createLucideIcon.GX1If_bo.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],N=n("circle-check",g);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],j=n("loader-circle",w);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],b=n("lock",k);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],z=n("shield-check",v);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],C=n("timer",S);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],R=n("triangle-alert",_),I=async t=>(await x.post("https://api.unibcomp.co.in/api/v1/user/payment/pay",{payment_session_id:t})).data,M=async t=>(await p.post("/check/deposit",{payment_session_id:t})).data,P=async t=>(await x.put(`https://api.unibcomp.in/api/v1/user/deposit/update/${t}`)).data,U=async t=>(await p.post("/payment/update",t)).data,E=()=>{const t=r({mutationFn:I}),a=r({mutationFn:M}),c=r({mutationFn:P}),s=r({mutationFn:U});return{depositRequestMutation:t,depositProcessMutation:a,depositStatusUpdateMutation:c,depositUpdate2:s}},q=()=>{const{depositUpdate2:t}=E();return{openRazorpayCheckout:({key:c,order_id:s,amount:i,currency:y,customer:d})=>{if(!window.Razorpay){alert("Razorpay SDK not loaded properly.");return}const u={key:c,order_id:s,amount:i*100,currency:y||"INR",name:"UnibComp",description:"Order Payment",prefill:{name:d?.name||"",email:d?.email||"",contact:d?.contact||""},theme:{color:"#3399cc"},handler:function(o){t.mutate({order_id:s,status:"SUCCESS",payment_id:o.razorpay_payment_id,signature:o.razorpay_signature});const h=m({amount:i,orderId:s,status:"success"});window.location.replace(`/payment-status/${encodeURIComponent(h)}`)},modal:{ondismiss:function(){t.mutate({order_id:s,status:"FAILED"},f(()=>window.location.replace("/")));const o=m({amount:i,orderId:s,status:"failed"});window.location.replace(`/payment-status/${encodeURIComponent(o)}`)}}};new window.Razorpay(u).open()}}},G=()=>{const[t,a]=l.useState(20);return l.useEffect(()=>{const c=setInterval(()=>{a(s=>s===1?10:s>0?s-1:0)},1e3);return()=>clearInterval(c)},[]),e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-100 z-50 px-4",children:e.jsxs("div",{className:"w-full max-w-md bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200 overflow-hidden",children:[e.jsxs("div",{className:"bg-gradient-to-r from-red-600 to-red-500 text-white text-center py-3 px-4",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm font-semibold",children:[e.jsx(R,{className:"w-4 h-4"}),"DO NOT REFRESH THIS PAGE"]}),e.jsx("p",{className:"text-xs mt-1 opacity-90",children:"कृपया इस पेज को रिफ्रेश या बंद न करें"})]}),e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[e.jsx(C,{className:"text-blue-600 w-5 h-5"}),e.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Redirecting in"}),e.jsxs("span",{className:"text-lg font-bold text-blue-600",children:[t,"s"]})]}),e.jsxs("div",{className:"flex flex-col items-center text-center space-y-3",children:[e.jsx("div",{className:"bg-green-100 p-3 rounded-full",children:e.jsx(z,{className:"text-green-600 w-8 h-8"})}),e.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Secure Payment Processing"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Connecting to Payment Gateway..."}),e.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"आपको सुरक्षित रूप से पेमेंट गेटवे से जोड़ा जा रहा है।"})]}),e.jsxs("div",{className:"mt-8 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(N,{className:"text-green-500 w-5 h-5"}),e.jsx("span",{className:"text-sm text-gray-700",children:"Transaction Initialized"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(j,{className:"text-blue-500 w-5 h-5 animate-spin"}),e.jsx("span",{className:"text-sm text-gray-700",children:"Redirecting to Secure Gateway..."})]}),e.jsxs("div",{className:"flex items-center gap-3 opacity-50",children:[e.jsx(b,{className:"w-5 h-5"}),e.jsx("span",{className:"text-sm",children:"Awaiting Bank Confirmation"})]})]}),e.jsx("div",{className:"my-6 border-t border-gray-200"}),e.jsx("p",{className:"text-[11px] text-center text-gray-400",children:"🔒 256-bit SSL Secured Transaction"})]})]})})};export{G as D,q as r,E as u};
