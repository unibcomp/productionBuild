import{c as s}from"./createLucideIcon.BjASjyrV.js";import{b as d,l as u}from"./index.Dtf-RLvG.js";import{u as n}from"./useMutation.DNEYeBfg.js";import{a as h}from"./queryToast.CPiKzk0a.js";import{e as i}from"./crypto.DrRzkqCY.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],A=s("check",w);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],F=s("credit-card",k);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],N=s("loader-circle",z);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],P=s("triangle-alert",f),C=async t=>(await u.post("https://api.unibcomp.co.in/api/v1/user/payment/pay",{payment_session_id:t})).data,_=async t=>(await d.post("/check/deposit",{payment_session_id:t})).data,R=async t=>(await u.put(`https://api.ambeltrade.com/api/v1/user/deposit/update/${t}`)).data,I=async t=>(await d.post("/payment/update",t)).data,g=()=>{const t=n({mutationFn:C}),e=n({mutationFn:_}),p=n({mutationFn:R}),a=n({mutationFn:I});return{depositRequestMutation:t,depositProcessMutation:e,depositStatusUpdateMutation:p,depositUpdate2:a}},v=()=>{const{depositUpdate2:t}=g();return{openRazorpayCheckout:({key:p,order_id:a,amount:c,currency:m,customer:r})=>{if(!window.Razorpay){alert("Razorpay SDK not loaded properly.");return}const y={key:p,order_id:a,amount:c*100,currency:m||"INR",name:"AmbelTrading",description:"Order Payment",prefill:{name:r?.name||"",email:r?.email||"",contact:r?.contact||""},theme:{color:"#3399cc"},handler:function(o){t.mutate({order_id:a,status:"SUCCESS",payment_id:o.razorpay_payment_id,signature:o.razorpay_signature});const l=i({amount:c,orderId:a,status:"success"});window.location.replace(`/payment-status/${encodeURIComponent(l)}`)},modal:{ondismiss:function(){t.mutate({order_id:a,status:"FAILED"},h(()=>window.location.replace("/")));const o=i({amount:c,orderId:a,status:"failed"});window.location.replace(`/payment-status/${encodeURIComponent(o)}`)}}};new window.Razorpay(y).open()}}};export{F as C,N as L,P as T,A as a,v as r,g as u};
