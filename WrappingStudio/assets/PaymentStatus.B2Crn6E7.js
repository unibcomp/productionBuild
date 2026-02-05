import{k as r,j as e}from"./index.DtIBEexY.js";import{d}from"./crypto.DSj7Oa7V.js";import{c as a}from"./createLucideIcon.BCX05kV3.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],m=a("circle-check-big",i);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],x=a("circle-x",o);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],p=a("clock",h),f=()=>{const{paymentid:c}=r();if(!c)return null;const{status:n,orderId:s,amount:t}=d(c);console.log(n,s,t);const l=()=>{switch(n){case"success":return e.jsxs("div",{className:"text-center p-5 animate-fadeIn",children:[e.jsx(m,{className:"mx-auto w-20 h-20"}),e.jsx("h2",{className:"text-3xl font-extrabold mt-4",children:"Payment Successful"}),e.jsx("p",{className:"text-lg mt-2 text-gray-600",children:"Your payment has been received."}),e.jsxs("div",{className:"mt-6 bg-green-50 p-4 rounded-xl",children:[e.jsxs("p",{children:["Order ID: ",e.jsx("span",{className:"font-semibold",children:s})]}),e.jsxs("p",{children:["Amount: ",e.jsxs("span",{className:"font-semibold",children:["₹",t]})]})]})]});case"pending":return e.jsxs("div",{className:"text-center p-5 animate-fadeIn",children:[e.jsx(p,{className:"mx-auto w-20 h-20"}),e.jsx("h2",{className:"text-3xl font-extrabold mt-4",children:"Payment Pending"}),e.jsx("p",{className:"text-lg mt-2 text-gray-600",children:"We are verifying your payment..."}),e.jsxs("div",{className:"mt-6 bg-yellow-50 p-4 rounded-xl",children:[e.jsxs("p",{children:["Order ID: ",e.jsx("span",{className:"font-semibold",children:s})]}),e.jsxs("p",{children:["Amount: ",e.jsxs("span",{className:"font-semibold",children:["₹",t]})]})]})]});case"failed":return e.jsxs("div",{className:"text-center p-5 animate-fadeIn",children:[e.jsx(x,{className:"mx-auto w-20 h-20 text-red-500"}),e.jsx("h2",{className:"text-3xl font-extrabold mt-4 text-red-500",children:"Payment Failed"}),e.jsx("p",{className:"text-lg mt-2 text-gray-600",children:"Please try again."}),e.jsxs("div",{className:"mt-6 bg-red-50 p-4 rounded-xl",children:[e.jsxs("p",{children:["Order ID: ",e.jsx("span",{className:"font-semibold",children:s})]}),e.jsxs("p",{children:["Amount: ",e.jsxs("span",{className:"font-semibold",children:["₹",t]})]})]})]});default:return null}};return e.jsx("div",{className:"min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100",children:e.jsx("div",{className:"w-full max-w-lg bg-white shadow-lg rounded-2xl p-6",children:l()})})};export{f as default};
