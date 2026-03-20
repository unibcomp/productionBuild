import{r as h,j as e,z as E,a as _,i as z,b as k}from"./index.CVFAxwb2.js";import{C as A}from"./check.BsI6O-QR.js";import{c as f}from"./createLucideIcon.DBeTXtAt.js";import{C as $}from"./coins.DWHcpwB8.js";import{u as I}from"./useMutation.Dnt7Kvaw.js";import{P as B}from"./PaginationSelecctor.DoNREAVS.js";import{u as D,s as T}from"./unibcomplogo.BlO_bLTg.js";import{u as L}from"./usePagination.BukYGTd6.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],F=f("copy",R);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],S=f("eye-off",V);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],M=f("eye",q);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]],H=f("indian-rupee",U);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],W=f("info",O);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],K=f("printer",Y),Q=(t,s)=>t?s?t:"**** **** **** "+t.slice(-4):"**** **** **** ****",G=(t,s)=>t&&s?t:"***",X=({balance:t,uniqueCode:s,cvv:l,expMonth:d,expYear:p,name:o})=>{const[i,a]=h.useState(!1),[x,c]=h.useState(!1),[u,n]=h.useState(!1),[m,b]=h.useState(!1),j=(r,w)=>w?r:"••••",N=()=>{a(!i),c(!1)},v=async()=>{try{await navigator.clipboard.writeText(s),c(!0),E.success("Wallet code copied"),setTimeout(()=>c(!1),2e3)}catch{E.error("Copy failed")}},y={color:"#F6E27A",textShadow:"0 1px 0 #fff3, 0 2px 3px rgba(0,0,0,0.35)",fontWeight:700},g={color:"#C9A227",textShadow:"0 1px 0 #fff3, 0 1px 2px rgba(0,0,0,0.25)",fontWeight:600};return e.jsx("div",{className:"w-full perspective-[1200px]",children:e.jsxs("div",{className:"relative w-full transition-transform duration-700",style:{transformStyle:"preserve-3d",transform:u?"rotateY(180deg)":"rotateY(0deg)"},children:[e.jsx("div",{className:"backface-hidden",style:{backfaceVisibility:"hidden"},children:e.jsxs("div",{className:`\r
            relative overflow-hidden \r
            rounded-[clamp(14px,2vw,28px)]\r
            w-full aspect-[1.6/1] min-w-0\r
            shadow-2xl border flex flex-col justify-between\r
            p-[clamp(12px,2.2vw,28px)]\r
            `,style:{background:"#456453",borderColor:"rgba(120,120,120,0.6)"},children:[e.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-none",style:{background:"linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.7) 50%, transparent 75%)"}}),e.jsxs("div",{className:"flex justify-between items-start relative z-10 gap-2 min-w-0",children:[e.jsx("p",{className:"truncate min-w-0 tracking-[0.35em] text-[clamp(9px,1.1vw,13px)]",style:g,children:"ELITE COIN CARD"}),e.jsx("img",{src:"https://unibcompoldecom.s3.ap-south-1.amazonaws.com/1770274546546/1770274546546_ChatGPT%20Image%20Feb%205%2C%202026%2C%2012_18_04%20PM%20%281%29.png",alt:"Elite Logo",className:"h-[clamp(36px,6.5vw,90px)] w-auto object-contain drop-shadow-lg shrink-0 mt-[6px]"})]}),e.jsxs("div",{className:"flex items-center justify-between gap-3 relative z-10 min-w-0",children:[e.jsx("p",{className:"font-mono whitespace-nowrap overflow-hidden text-ellipsis",style:{...y,fontSize:"clamp(12px,2.2vw,20px)",letterSpacing:i?"0.12em":"0.25em",maxWidth:"65%"},children:Q(s,i)}),e.jsxs("div",{className:"flex items-center gap-2 text-[#E6C75A]",children:[i&&e.jsx("button",{onClick:r=>{r.stopPropagation(),v()},className:"p-2 rounded-lg hover:bg-white/20 transition",children:x?e.jsx(A,{size:18}):e.jsx(F,{size:18})}),e.jsx("button",{onClick:r=>{r.stopPropagation(),N()},className:"p-2 rounded-lg hover:bg-white/20 transition",children:i?e.jsx(S,{size:18}):e.jsx(M,{size:18})})]})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("p",{className:"tracking-widest text-[clamp(8px,1vw,11px)]",style:g,children:"CARD HOLDER"}),e.jsx("p",{className:"font-semibold uppercase tracking-wider text-[clamp(12px,1.8vw,18px)]",style:y,children:o||"ELITE MEMBER"})]}),e.jsxs("div",{className:"flex justify-between items-end relative z-10",children:[e.jsxs("div",{children:[e.jsx("p",{className:"tracking-widest text-[clamp(8px,1vw,11px)]",style:g,children:"VALID THRU"}),e.jsxs("p",{className:"font-mono text-[clamp(11px,1.6vw,16px)]",style:y,children:[d||"00","/",p||"00"]})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"tracking-widest text-[clamp(8px,1vw,11px)]",style:g,children:"CVV"}),e.jsx("p",{className:"font-mono text-[clamp(11px,1.6vw,16px)]",style:y,children:G(l,i)})]})]}),e.jsx("div",{className:"relative z-10 flex items-end justify-between",children:e.jsxs("div",{children:[e.jsxs("p",{className:"text-[clamp(10px,1.2vw,14px)]",style:g,children:["Available Coins",e.jsx("button",{onClick:r=>{r.stopPropagation(),b(!m)},className:"p-2 rounded-lg hover:bg-white/20 transition text-[#E6C75A]",children:m?e.jsx(S,{size:18}):e.jsx(M,{size:18})})]}),e.jsx("p",{className:"tracking-wide text-[clamp(18px,3.5vw,34px)]",style:y,children:j(t,m)})]})}),e.jsx("button",{onClick:r=>{r.stopPropagation(),n(!0)},className:"absolute bottom-3 right-3 text-[#E6C75A] hover:scale-110 transition",children:e.jsx(W,{size:18})})]})}),e.jsxs("div",{className:"absolute inset-0 rounded-[clamp(14px,2vw,28px)] shadow-2xl border p-6 flex flex-col justify-between",style:{background:"#2f3f35",borderColor:"rgba(120,120,120,0.6)",transform:"rotateY(180deg)",backfaceVisibility:"hidden",color:"#F6E27A"},children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold mb-4",children:"Terms & Conditions"}),e.jsxs("ul",{className:"space-y-2 list-disc pl-5 text-xs sm:text-sm",children:[e.jsx("li",{children:"Elite Coins are non-refundable."}),e.jsx("li",{children:"Coins usable only inside UniBcomp platform."}),e.jsx("li",{children:"Fraud usage suspends wallet."}),e.jsx("li",{children:"Promo coins may expire anytime."}),e.jsx("li",{children:"Policies may change without notice."})]})]}),e.jsx("button",{onClick:r=>{r.stopPropagation(),n(!1)},className:"self-end text-xs opacity-80 hover:opacity-100",children:"← Back to card"})]})]})})},J=[100,500,1e3],C=10,P=5e4,Z=({onSelectAmount:t})=>{const[s,l]=h.useState(""),[d,p]=h.useState(null),[o,i]=h.useState(""),a=n=>n?n<C?`Minimum ₹${C}`:n>P?`Maximum ₹${P}`:"":"Enter amount",x=n=>{p(n),l(String(n)),i("")},c=n=>{if(!/^\d*$/.test(n))return;p(null),l(n);const m=a(Number(n));i(m)},u=()=>{const n=Number(s),m=a(n);if(m)return i(m);t(n)};return e.jsxs("div",{className:`bg-white rounded-2xl shadow-md border px-4 py-3\r
flex flex-col justify-between w-full h-full aspect-[1.9/1]`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold",children:"Add Payment"}),e.jsx("p",{className:"text-[11px] text-gray-500",children:"UPI/Card/NetBanking "})]}),e.jsx("div",{className:"flex gap-2 shrink-0",children:J.map(n=>e.jsxs("button",{onClick:()=>x(n),className:`px-3 py-1 rounded-lg text-xs font-medium border transition
            ${d===n?"bg-pink-600 text-white border-pink-600":"hover:bg-pink-50"}`,children:["₹",n]},n))})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"flex items-center border rounded-lg px-2 py-1 flex-1 focus-within:ring-1 focus-within:ring-pink-500",children:[e.jsx(H,{size:14,className:"text-gray-400 mr-1"}),e.jsx("input",{type:"text",inputMode:"numeric",placeholder:"Amount",value:s,onChange:n=>c(n.target.value),className:"flex-1 outline-none text-sm"})]}),e.jsx("button",{onClick:u,disabled:!s||!!o,className:`bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium\r
        hover:bg-pink-700 transition disabled:opacity-40`,children:"Pay"})]}),e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsxs("span",{className:"text-gray-400",children:["Min ₹",C]}),s&&!o&&e.jsxs("span",{className:"text-pink-600 font-medium flex items-center gap-1",children:[e.jsx($,{size:12})," ",s," Coins"]})]})]})},ee=({open:t,amount:s,loading:l,onClose:d,onSubmit:p})=>{const[o,i]=h.useState("");if(!t)return null;const a=()=>{o&&p({amount:s,method:o})};return e.jsx("div",{className:"fixed inset-0 bg-black/40 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white rounded-xl w-[95%] sm:w-full max-w-md p-4 sm:p-6 space-y-4 sm:space-y-5",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Confirm Buy Coins"}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded text-center",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Amount"}),e.jsxs("p",{className:"text-2xl font-bold text-pink-600",children:["₹",s]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Payment Method"}),e.jsxs("select",{value:o,onChange:x=>i(x.target.value),className:"w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500",children:[e.jsx("option",{value:"",children:"Select payment mode"}),e.jsx("option",{value:"upi",children:"UPI"}),e.jsx("option",{value:"card",children:"Card"}),e.jsx("option",{value:"netbanking",children:"Net Banking"}),e.jsx("option",{value:"wallet",children:"Wallet"})]})]}),e.jsx("p",{className:"text-sm text-gray-600 text-center",children:"You will be redirected to the selected payment gateway."}),e.jsxs("div",{className:"flex justify-end gap-3 pt-2",children:[e.jsx("button",{onClick:d,className:"px-4 py-2 border rounded-lg",children:"Cancel"}),e.jsx("button",{disabled:l||!o,onClick:a,className:"px-4 py-2 bg-pink-600 text-white rounded-lg disabled:opacity-50",children:l?"Processing...":"Proceed to Pay"})]})]})})},te=async()=>(await k.get("/elite-coins")).data,se=async(t,s)=>(await k.get("/elite-coins-list",{params:{pageNumber:t,pageSize:s}})).data,ae=async t=>(await k.post("/add-elite-coins",t)).data,ne=()=>_({queryKey:["elite-coins"],queryFn:te}),ie=(t,s)=>_({queryKey:["elite-coins-history",t,s],queryFn:()=>se(t,s),placeholderData:l=>l}),re=()=>{const t=z();return I({mutationFn:ae,onSuccess:()=>{t.invalidateQueries({queryKey:["elite-coins"]}),t.invalidateQueries({queryKey:["elite-coins-history"]})}})},le=t=>{const s=window.open("","_blank");s&&(s.document.write(`
    <html>
      <head>
        <title>Elite Coin Receipt</title>
        <style>
          body {
            font-family: Arial;
            padding: 40px;
            color: #000;
          }
          .header {
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:30px;
          }
          .title {
            text-align:right;
          }
          table {
            width:100%;
            border-collapse:collapse;
            margin-top:20px;
          }
          td {
            padding:8px 0;
            border-bottom:1px solid #ddd;
            font-size:14px;
          }
          .sign {
            margin-top:80px;
            text-align:right;
          }
          @media print {
            button { display:none }
          }
        </style>
      </head>

      <body>

        <div class="header">
          <img src="${D}" height="70"/>
          <div class="title">
            <h2>Elite Coin Transaction Invoice</h2>
            <div>Transaction ID: ${t.transaction_id}</div>
          </div>
        </div>

        <table>
          <tr><td><b>Order ID</b></td><td>${t.order_id||"-"}</td></tr>
          <tr><td><b>Payment Method</b></td><td>${t.paymentMethod||"-"}</td></tr>
          <tr><td><b>Transaction Type</b></td><td>${t.type}</td></tr>
          <tr><td><b>Coins</b></td><td>${t.coins}</td></tr>
          <tr><td><b>Previous Balance</b></td><td>${t.previous_balance}</td></tr>
          <tr><td><b>Current Balance</b></td><td>${t.current_balance}</td></tr>
          <tr><td><b>Status</b></td><td>${t.status}</td></tr>
          <tr><td><b>Date</b></td><td>${new Date(t.createdAt).toLocaleString()}</td></tr>
        </table>

        <div style="margin-top:30px;">
          <b>Amount In Words:</b> ${t.coins} Coins
        </div>

        <div class="sign">
          <p><b>For Unibcomp Networks Pvt Ltd</b></p>
          <img src="${T}" height="60"/>
          <div>Authorized Signatory</div>
        </div>

        <script>
          window.onload = () => window.print();
        <\/script>

      </body>
    </html>
  `),s.document.close())},oe=({transactions:t=[],totalCount:s=0,pageNumber:l,pageSize:d,handlePageChange:p,handlePageSizeChange:o})=>{const i=a=>{le(a)};return e.jsx("div",{className:"w-full",children:t.length===0?e.jsx("p",{className:"text-sm text-gray-500 px-4 pb-4",children:"No coin transactions found"}):e.jsxs("div",{className:"w-full rounded-xl shadow-sm border bg-white",children:[e.jsx("div",{className:"p-4 sm:p-6 border-b",children:e.jsx("h3",{className:"font-semibold text-base sm:text-lg",children:"Elite Coin History"})}),e.jsx("div",{className:"w-full overflow-hidden",children:e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsx("div",{className:"min-w-max",children:e.jsxs("table",{className:"w-full text-xs sm:text-sm table-auto",children:[e.jsx("thead",{className:"bg-gray-100 text-gray-700",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 text-left whitespace-nowrap",children:"S.No"}),e.jsx("th",{className:"px-4 py-3 text-left whitespace-nowrap",children:"Txn ID"}),e.jsx("th",{className:"px-4 py-3 text-left whitespace-nowrap",children:"Order ID"}),e.jsx("th",{className:"px-4 py-3 text-left whitespace-nowrap",children:"Method"}),e.jsx("th",{className:"px-4 py-3 text-left whitespace-nowrap",children:"Type"}),e.jsx("th",{className:"px-4 py-3 text-left whitespace-nowrap",children:"Previous"}),e.jsx("th",{className:"px-4 py-3 text-left whitespace-nowrap",children:"Amount"}),e.jsx("th",{className:"px-4 py-3 text-left whitespace-nowrap",children:"Current"}),e.jsx("th",{className:"px-4 py-3 text-left whitespace-nowrap",children:"Status"}),e.jsx("th",{className:"px-4 py-3 text-left whitespace-nowrap",children:"Date"})]})}),e.jsx("tbody",{children:t.map((a,x)=>{const c=a?.type==="CREDIT";return e.jsxs("tr",{className:"border-t hover:bg-gray-50 transition-colors",children:[e.jsx("td",{className:"px-4 py-3 whitespace-nowrap",children:(l-1)*d+x+1}),e.jsx("td",{className:"px-4 py-3 whitespace-nowrap",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-medium",children:a?.transaction_id}),e.jsx("button",{onClick:()=>i(a),className:"text-gray-400 hover:text-blue-600 transition shrink-0",title:"Download Invoice",children:e.jsx(K,{size:15})})]})}),e.jsx("td",{className:"px-4 py-3 whitespace-nowrap",children:a?.order_id||"-"}),e.jsx("td",{className:"px-4 py-3 whitespace-nowrap",children:a?.paymentMethod||"-"}),e.jsx("td",{className:`px-4 py-3 font-semibold whitespace-nowrap ${c?"text-green-600":"text-red-600"}`,children:a?.type}),e.jsx("td",{className:"px-4 py-3 whitespace-nowrap",children:a?.previous_balance}),e.jsxs("td",{className:`px-4 py-3 font-semibold whitespace-nowrap ${c?"text-green-600":"text-red-600"}`,children:[c?"+":"-"," ",a?.coins]}),e.jsx("td",{className:"px-4 py-3 whitespace-nowrap",children:a?.current_balance}),e.jsx("td",{className:`px-4 py-3 font-semibold whitespace-nowrap ${a?.status==="SUCCESS"?"text-green-600":a?.status==="FAILED"?"text-red-500":"text-yellow-600"}`,children:a?.status}),e.jsx("td",{className:"px-4 py-3 whitespace-nowrap",children:new Date(a?.createdAt).toLocaleString()})]},a?._id)})})]})})})}),e.jsx("div",{className:"p-4 sm:p-6 border-t",children:e.jsx(B,{handlePageChange:p,handlePageSizeChange:o,currentPage:l,pageSize:d,totalCount:s})})]})})},ge=()=>{const{data:t,isLoading:s,isError:l}=ne(),{handlePageChange:d,handlePageSizeChange:p,pageNumber:o,pageSizeValue:i}=L(),{data:a}=ie(o,i),x=re(),[c,u]=h.useState(!1),[n,m]=h.useState(0),b=t?.elite_coins??0,j=t?.unique_code??"—",N=t?.cvv,v=t?.exp_month,y=t?.exp_year,g=t?.fullName??"ELITE MEMBER";return e.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 py-5 sm:py-6 md:py-8 space-y-5 sm:space-y-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"UniBcomp's Elite Coins"}),s&&e.jsx("p",{className:"text-sm text-gray-500",children:"Loading elite coins..."}),l&&e.jsx("p",{className:"text-sm text-red-500",children:"Failed to load coin balance."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch w-full [&>*]:min-w-0",children:[e.jsx(X,{balance:b,uniqueCode:j,cvv:N,expMonth:v,expYear:y,name:g}),e.jsx(Z,{onSelectAmount:r=>{m(r),u(!0)}})]}),e.jsx("div",{className:"gap-4 sm:gap-6",children:e.jsx(oe,{transactions:a?.results??[],totalCount:a?.pagination?.total??0,pageNumber:a?.pagination?.pageNumber??o,pageSize:a?.pagination?.pageSize??i,handlePageChange:r=>d(r,0),handlePageSizeChange:p})}),e.jsx(ee,{open:c,amount:n,loading:x.isPending,onClose:()=>u(!1),onSubmit:r=>x.mutate(r,{onSuccess:w=>{u(!1),setTimeout(()=>{w?.url&&(window.location.href=w.url)},400)}})})]})};export{ge as default};
