import{c as r}from"./createLucideIcon.DJwWCtTC.js";import{b as d,l as u}from"./index.CjjZS2gL.js";import{u as n}from"./useMutation.BROjYG3p.js";import{a as h}from"./queryToast.Bm20Z4wy.js";import{e as c}from"./crypto.D8ADFU3M.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],F=r("credit-card",w);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],P=r("loader-circle",z);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],$=r("triangle-alert",C),f=async t=>(await u.post("https://api.unibcomp.co.in/api/v1/user/payment/pay",{payment_session_id:t})).data,k=async t=>(await d.post("/check/deposit",{payment_session_id:t})).data,R=async t=>(await u.put(`https://api.unibcomp.in/api/v1/user/deposit/update/${t}`)).data,_=async t=>(await d.post("/payment/update",t)).data,I=()=>{const t=n({mutationFn:f}),e=n({mutationFn:k}),s=n({mutationFn:R}),a=n({mutationFn:_});return{depositRequestMutation:t,depositProcessMutation:e,depositStatusUpdateMutation:s,depositUpdate2:a}},v=()=>{const{depositUpdate2:t}=I();return{openRazorpayCheckout:({key:s,order_id:a,amount:p,currency:m,customer:i})=>{if(!window.Razorpay){alert("Razorpay SDK not loaded properly.");return}const y={key:s,order_id:a,amount:p*100,currency:m||"INR",name:"UnibComp",description:"Order Payment",prefill:{name:i?.name||"",email:i?.email||"",contact:i?.contact||""},theme:{color:"#3399cc"},handler:function(o){t.mutate({order_id:a,status:"SUCCESS",payment_id:o.razorpay_payment_id,signature:o.razorpay_signature});const l=c({amount:p,orderId:a,status:"success"});window.location.replace(`/payment-status/${encodeURIComponent(l)}`)},modal:{ondismiss:function(){t.mutate({order_id:a,status:"FAILED"},h(()=>window.location.replace("/")));const o=c({amount:p,orderId:a,status:"failed"});window.location.replace(`/payment-status/${encodeURIComponent(o)}`)}}};new window.Razorpay(y).open()}}};export{F as C,P as L,$ as T,v as r,I as u};
