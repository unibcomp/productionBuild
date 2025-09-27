import{i as a,r,j as e}from"./index.CcjL_5p2.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],d=a("bell",n);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],x=a("credit-card",o);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],m=a("lock",h);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],p=a("mail",b);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],g=a("map-pin",u);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],j=a("phone",y);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],v=a("shield",N);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],k=a("user",f),w=[{key:"profile",label:"Profile",icon:k},{key:"addresses",label:"Addresses",icon:g},{key:"payments",label:"Payment Methods",icon:x},{key:"notifications",label:"Notifications",icon:d},{key:"security",label:"Security",icon:m}],M=()=>{const[l,i]=r.useState("profile");return e.jsx("div",{className:"min-h-screen bg-gray-100 p-6",children:e.jsxs("div",{className:"max-w-6xl mx-auto bg-white shadow-lg rounded-2xl flex flex-col md:flex-row overflow-hidden",children:[e.jsx("div",{className:"w-full md:w-1/4 border-b md:border-b-0 md:border-r bg-gray-50",children:w.map(({key:s,label:t,icon:c})=>e.jsxs("button",{onClick:()=>i(s),className:`w-full flex items-center gap-3 px-5 py-3 text-left text-sm font-medium transition ${l===s?"bg-blue-100 text-blue-600 border-r-4 border-blue-600":"hover:bg-gray-100"}`,children:[e.jsx(c,{size:18}),t]},s))}),e.jsxs("div",{className:"flex-1 p-6",children:[l==="profile"&&e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Profile Information"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("img",{src:"https://via.placeholder.com/80",alt:"Profile",className:"w-20 h-20 rounded-full border"}),e.jsx("button",{className:"px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300",children:"Change Photo"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600",children:"Full Name"}),e.jsx("input",{type:"text",defaultValue:"John Doe",className:"mt-1 w-full border rounded-lg px-3 py-2"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600",children:"Email"}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsx(p,{size:18,className:"text-gray-500"}),e.jsx("span",{children:"john.doe@example.com"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600",children:"Phone"}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsx(j,{size:18,className:"text-gray-500"}),e.jsx("span",{children:"+91 9876543210"})]})]})]}),e.jsx("button",{className:"mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Save Changes"})]}),l==="addresses"&&e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Saved Addresses"}),e.jsx("div",{className:"space-y-4",children:["Home","Office"].map(s=>e.jsxs("div",{className:"p-4 border rounded-lg shadow-sm bg-gray-50",children:[e.jsx("p",{className:"font-medium",children:s}),e.jsx("p",{children:"123 Main Street, Delhi, India"}),e.jsxs("div",{className:"mt-2 flex gap-3",children:[e.jsx("button",{className:"text-blue-600 hover:underline",children:"Edit"}),e.jsx("button",{className:"text-red-600 hover:underline",children:"Remove"})]})]},s))}),e.jsx("button",{className:"mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition",children:"Add New Address"})]}),l==="payments"&&e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Payment Methods"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[e.jsx("p",{className:"font-medium",children:"Visa **** 1234"}),e.jsx("p",{children:"Expires 12/26"}),e.jsx("button",{className:"text-red-600 hover:underline mt-2",children:"Remove"})]}),e.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[e.jsx("p",{className:"font-medium",children:"UPI: johndoe@upi"}),e.jsx("button",{className:"text-red-600 hover:underline mt-2",children:"Remove"})]})]}),e.jsx("button",{className:"mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition",children:"Add Payment Method"})]}),l==="notifications"&&e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Notifications"}),e.jsx("div",{className:"space-y-4",children:[{label:"Email Alerts",checked:!0},{label:"SMS Alerts",checked:!1},{label:"App Push Notifications",checked:!0},{label:"Promotional Emails",checked:!1}].map(({label:s,checked:t})=>e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx("input",{type:"checkbox",defaultChecked:t,className:"w-4 h-4"}),s]},s))})]}),l==="security"&&e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Security"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("button",{className:"px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:"Change Password"}),e.jsx("button",{className:"px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition",children:"Change MPIN"}),e.jsxs("div",{className:"flex items-center gap-3 mt-4",children:[e.jsx(v,{className:"text-gray-600"}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",className:"w-4 h-4"}),"Enable Two-Factor Authentication"]})]})]})]})]})]})})};export{M as default};
