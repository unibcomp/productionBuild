import{t as e}from"./clock-Cqm2Emlx.js";import{n as t,t as n}from"./plus-BUGpoNEr.js";import{t as r}from"./wifi-CqF96owT.js";import{Et as i,It as a,Mt as o,_ as s,_t as c,bt as l,g as u,kt as d,lt as f,v as p,xt as m,y as h}from"./index-CHkaNcrL.js";import{t as g}from"./proxy-Dm3rE-Ia.js";import{t as _}from"./AnimatePresence-Via3uvAI.js";import{t as v}from"./operatorLogos-DDdWNvoQ.js";import{n as y}from"./useCheckout-D2DhzWPa.js";var b=m(`shopping-bag`,[[`path`,{d:`M16 10a4 4 0 0 1-8 0`,key:`1ltviw`}],[`path`,{d:`M3.103 6.034h17.794`,key:`awc11p`}],[`path`,{d:`M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,key:`o988cm`}]]),x=m(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]);o();var S=i(),C=()=>{let i=d(),{mutate:a,isPending:o}=y(),{data:m,isLoading:C}=u(),{mutate:T}=h(),{mutate:E}=p(),{mutate:D}=s(),O=m?.cart?.items||[],k=e=>{E(e)},A=(e,t)=>{t<=0?E(e):T({planId:e,quantity:Math.min(10,t)})},j=O.reduce((e,t)=>{let n=t.planId;return e+(n?.salePrice??n?.price??0)*(t.quantity??1)},0),M=m?.platformFee??0,N=m?.totalSimCost??0,P=m?.deliveryPrice??0,F=m?.totalOperatorFee??0,I=m?.totalPrice??0,L=O.reduce((e,t)=>e+(t.quantity??1),0);return C?(0,S.jsxs)(`div`,{className:`ct-root`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,minHeight:`100vh`},children:[(0,S.jsx)(`style`,{children:w}),(0,S.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,S.jsx)(`div`,{style:{width:36,height:36,borderRadius:`50%`,border:`3px solid #DBEAFE`,borderTopColor:`#3B82F6`,margin:`0 auto 12px`,animation:`ct-spin 0.75s linear infinite`}}),(0,S.jsx)(`p`,{style:{fontSize:13,color:`#6B7280`,fontWeight:600},children:`Loading cart…`})]})]}):(0,S.jsxs)(`div`,{className:`ct-root`,children:[(0,S.jsx)(`style`,{children:w}),(0,S.jsxs)(`nav`,{className:`ct-nav`,children:[(0,S.jsxs)(`button`,{className:`ct-back-btn`,onClick:()=>i(-1),children:[(0,S.jsx)(l,{size:14}),`Back`]}),(0,S.jsxs)(`div`,{className:`ct-nav-center`,children:[(0,S.jsx)(f,{size:15}),(0,S.jsx)(`span`,{className:`ct-nav-label`,children:`My Cart`}),L>0&&(0,S.jsx)(`span`,{className:`ct-nav-count`,children:L})]}),O.length>0&&(0,S.jsx)(`button`,{className:`ct-clear-btn`,onClick:()=>D(),children:`Clear All`})]}),O.length===0&&(0,S.jsxs)(g.div,{className:`ct-empty`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},children:[(0,S.jsx)(`div`,{className:`ct-empty-icon`,children:(0,S.jsx)(b,{size:40,strokeWidth:1.3})}),(0,S.jsx)(`h2`,{className:`ct-empty-title`,children:`Your cart is empty`}),(0,S.jsx)(`p`,{className:`ct-empty-sub`,children:`Add plans from the browse page to get started.`}),(0,S.jsx)(`button`,{className:`ct-empty-btn`,onClick:()=>i(-1),children:`Browse Plans →`})]}),O.length>0&&(0,S.jsxs)(`div`,{className:`ct-two-col`,children:[(0,S.jsxs)(`div`,{className:`ct-col-left`,children:[(0,S.jsxs)(`div`,{className:`ct-section-header`,children:[(0,S.jsxs)(`div`,{className:`ct-section-title`,children:[(0,S.jsx)(f,{size:15}),`Items in Cart`]}),(0,S.jsxs)(`span`,{className:`ct-section-badge`,children:[L,` item`,L===1?``:`s`]})]}),(0,S.jsx)(`div`,{className:`ct-list`,children:(0,S.jsx)(_,{children:O.map((a,o)=>{let s=a.planId??{},l=s._id??a._id,u=s.salePrice??s.price??0,d=a.quantity??1;return(0,S.jsxs)(g.div,{className:`ct-item-card`,initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0,x:40,scale:.96},transition:{duration:.25,delay:o*.04},layout:!0,children:[(0,S.jsxs)(`div`,{className:`ct-card-header`,children:[(0,S.jsxs)(`div`,{className:`ct-card-header-left`,children:[(0,S.jsx)(`div`,{className:`ct-item-avatar`,children:(()=>{let e=s.operatorId?.name||`Operator`,t=v(e)||s.operatorId?.logo;return t?(0,S.jsx)(`img`,{src:t,alt:`${e} logo`,style:{width:32,height:32,objectFit:`contain`,padding:2}}):(0,S.jsx)(`span`,{style:{fontSize:18},children:`📶`})})()}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`div`,{className:`ct-item-operator`,children:s.operatorId?.name||`Operator`}),(0,S.jsxs)(`div`,{className:`ct-item-type`,children:[s.planTypeId?.name||`Prepaid`,typeof s.serviceId==`object`&&s.serviceId?.name?` · ${s.serviceId.name}`:``]})]})]}),(0,S.jsx)(`div`,{className:`ct-card-header-right`,children:(0,S.jsx)(`button`,{className:`ct-remove-btn`,onClick:()=>k(l),title:`Remove`,"aria-label":`Remove item`,children:(0,S.jsx)(x,{size:13})})})]}),(0,S.jsxs)(`div`,{className:`ct-card-body`,children:[(0,S.jsxs)(`div`,{className:`ct-chips`,children:[s.data&&(0,S.jsxs)(`span`,{className:`ct-chip`,children:[(0,S.jsx)(r,{size:11}),s.data]}),s.validity&&(0,S.jsxs)(`span`,{className:`ct-chip`,children:[(0,S.jsx)(e,{size:11}),s.validity,`d`]}),s.networkType&&(0,S.jsx)(`span`,{className:`ct-chip ct-chip-net`,children:s.networkType}),s.calls&&(0,S.jsxs)(`span`,{className:`ct-chip`,children:[`📞 `,s.calls]}),s.sms&&(0,S.jsxs)(`span`,{className:`ct-chip`,children:[`💬 `,s.sms]})]}),s.description&&(0,S.jsx)(`p`,{className:`ct-item-desc`,children:s.description})]}),(0,S.jsxs)(`div`,{className:`ct-card-footer`,children:[(0,S.jsxs)(`div`,{className:`ct-price-block`,children:[(0,S.jsxs)(`div`,{className:`ct-price-row`,children:[(0,S.jsxs)(`span`,{className:`ct-unit-price-big`,children:[`₹`,u]}),(0,S.jsx)(`span`,{className:`ct-per-plan`,children:`/ plan`})]}),d>1&&(0,S.jsxs)(`div`,{className:`ct-line-total-row`,children:[`= ₹`,u*d,` total`]})]}),(0,S.jsxs)(`div`,{className:`ct-footer-right`,children:[(0,S.jsxs)(`div`,{className:`ct-stepper`,children:[(0,S.jsx)(`button`,{className:`ct-step-btn`,onClick:()=>A(l,d-1),disabled:d<=1,"aria-label":`Decrease quantity`,children:(0,S.jsx)(t,{size:12})}),(0,S.jsx)(`span`,{className:`ct-step-num`,children:d}),(0,S.jsx)(`button`,{className:`ct-step-btn`,onClick:()=>A(l,d+1),disabled:d>=10,"aria-label":`Increase quantity`,children:(0,S.jsx)(n,{size:12})})]}),(0,S.jsxs)(`button`,{className:`ct-view-link`,onClick:()=>i(`/plan-details/${l}`,{state:s}),children:[`Details `,(0,S.jsx)(c,{size:11})]})]})]})]},a._id??l??o)})})})]}),(0,S.jsx)(`div`,{className:`ct-col-right`,children:(0,S.jsxs)(g.div,{className:`ct-summary-card`,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.15},children:[(0,S.jsx)(`div`,{className:`ct-section-header`,style:{marginBottom:18},children:(0,S.jsx)(`div`,{className:`ct-section-title`,style:{fontSize:13},children:`Order Summary`})}),(0,S.jsxs)(`div`,{className:`ct-fee-rows`,children:[(0,S.jsxs)(`div`,{className:`ct-fee-row`,children:[(0,S.jsxs)(`span`,{className:`ct-fee-label`,children:[`Subtotal`,(0,S.jsxs)(`span`,{className:`ct-fee-sub`,children:[` `,`(`,L,` item`,L===1?``:`s`,`)`]})]}),(0,S.jsxs)(`span`,{className:`ct-fee-value`,children:[`₹`,j]})]}),(0,S.jsxs)(`div`,{className:`ct-fee-row`,children:[(0,S.jsx)(`span`,{className:`ct-fee-label`,children:`Platform Fee`}),(0,S.jsx)(`span`,{className:`ct-fee-value ct-fee-muted`,children:M>0?`₹${M}`:`—`})]}),(0,S.jsxs)(`div`,{className:`ct-fee-row`,children:[(0,S.jsx)(`span`,{className:`ct-fee-label`,children:`SIM Cost`}),(0,S.jsx)(`span`,{className:`ct-fee-value`,children:N>0?`₹${N}`:`—`})]}),(0,S.jsxs)(`div`,{className:`ct-fee-row`,children:[(0,S.jsx)(`span`,{className:`ct-fee-label`,children:`Delivery`}),P===0?(0,S.jsx)(`span`,{className:`ct-fee-free`,children:`Free`}):(0,S.jsxs)(`span`,{className:`ct-fee-value`,children:[`₹`,P]})]}),(0,S.jsxs)(`div`,{className:`ct-fee-row`,children:[(0,S.jsx)(`span`,{className:`ct-fee-label`,children:`Operator Fee`}),(0,S.jsx)(`span`,{className:`ct-fee-value ct-fee-muted`,children:F>0?`₹${F}`:`—`})]})]}),(0,S.jsx)(`div`,{className:`ct-summary-divider`}),(0,S.jsxs)(`div`,{className:`ct-total-row`,children:[(0,S.jsx)(`span`,{className:`ct-total-label`,children:`Total`}),(0,S.jsxs)(`span`,{className:`ct-total-amount`,children:[`₹`,I]})]}),(0,S.jsx)(`button`,{className:`ct-checkout-btn`,onClick:()=>{a({type:`THROUGHCART`},{onSuccess:e=>{i(`/buy-now/${e.sessionId}`)}})},disabled:o,children:o?`Processing...`:`Proceed to Checkout →`}),(0,S.jsx)(`p`,{className:`ct-trust-note`,children:`🔒 Secure & encrypted checkout`})]})})]}),(0,S.jsx)(`div`,{style:{height:32}})]})},w=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@700;800&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @keyframes ct-spin {
    to { transform: rotate(360deg); }
  }

  .ct-root {
    min-height: 100vh;
    background: #F0F4FF;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    overflow-y: auto;
    height: 100vh;
  }

  /* Navigation */
  .ct-nav {
    position: sticky;
    top: 0;
    z-index: 40;
    background: rgba(240,244,255,0.94);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid #DDE3F5;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
  }

  .ct-back-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #fff;
    border: 1px solid #DDE3F5;
    border-radius: 10px;
    padding: 7px 14px;
    font-size: 13px;
    font-weight: 600;
    color: #4B5563;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.15s;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  }

  .ct-back-btn:hover {
    border-color: #3B82F6;
    color: #3B82F6;
    background: #EFF6FF;
  }

  .ct-nav-center {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #374151;
  }

  .ct-nav-label {
    font-size: 14px;
    font-weight: 700;
    color: #111827;
    letter-spacing: 0.2px;
  }

  .ct-nav-count {
    background: #EF4444;
    color: #fff;
    font-size: 10px;
    font-weight: 800;
    border-radius: 20px;
    padding: 2px 7px;
    min-width: 20px;
    text-align: center;
  }

  .ct-clear-btn {
    font-size: 12px;
    font-weight: 600;
    color: #EF4444;
    background: #FEF2F2;
    border: 1px solid #FECACA;
    border-radius: 8px;
    padding: 6px 12px;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.15s;
  }

  .ct-clear-btn:hover {
    background: #FEE2E2;
  }

  /* Empty State */
  .ct-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 32px;
    text-align: center;
  }

  .ct-empty-icon {
    width: 88px;
    height: 88px;
    border-radius: 24px;
    background: #fff;
    border: 1px solid #DDE3F5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9CA3AF;
    margin-bottom: 20px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.05);
  }

  .ct-empty-title {
    font-family: 'Sora', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: #111827;
    margin-bottom: 8px;
  }

  .ct-empty-sub {
    font-size: 14px;
    color: #9CA3AF;
    margin-bottom: 24px;
  }

  .ct-empty-btn {
    padding: 12px 28px;
    border-radius: 14px;
    border: none;
    background: linear-gradient(135deg, #2563EB, #6366F1);
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(99,102,241,0.3);
    transition: opacity 0.15s;
  }

  .ct-empty-btn:hover {
    opacity: 0.9;
  }

  /* Two-column Layout */
  .ct-two-col {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 20px 20px 40px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .ct-col-left {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .ct-col-right {
    width: 320px;
    flex-shrink: 0;
    position: sticky;
    top: 78px;
    align-self: flex-start;
    max-height: calc(100vh - 94px);
    overflow-y: auto;
  }

  /* Section Headers */
  .ct-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ct-section-title {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 12px;
    font-weight: 800;
    color: #374151;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }

  .ct-section-badge {
    font-size: 11px;
    font-weight: 700;
    color: #2563EB;
    background: #EFF6FF;
    border: 1px solid #BFDBFE;
    border-radius: 20px;
    padding: 3px 10px;
  }

  /* Item List */
  .ct-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .ct-item-card {
    background: #fff;
    border-radius: 20px;
    border: 1px solid #DDE3F5;
    padding: 18px;
    box-shadow: 0 2px 12px rgba(59,130,246,0.05);
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .ct-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 14px;
    border-bottom: 1px solid #F3F4F6;
    margin-bottom: 14px;
  }

  .ct-card-header-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .ct-card-header-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .ct-item-avatar {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: linear-gradient(135deg, #EFF6FF, #DBEAFE);
    border: 1px solid #BFDBFE;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
  }

  .ct-item-operator {
    font-size: 14px;
    font-weight: 700;
    color: #111827;
  }

  .ct-item-type {
    font-size: 12px;
    font-weight: 500;
    color: #9CA3AF;
    margin-top: 2px;
  }

  .ct-remove-btn {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid #FECACA;
    background: #FEF2F2;
    color: #EF4444;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.14s;
  }

  .ct-remove-btn:hover {
    background: #FEE2E2;
  }

  /* Card Body */
  .ct-card-body {
    margin-bottom: 14px;
  }

  .ct-chips {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .ct-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: #F3F4F6;
    color: #374151;
    border: 1px solid #E5E7EB;
    font-size: 11px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 20px;
  }

  .ct-chip-net {
    background: #EDE9FE;
    color: #5B21B6;
    border-color: #DDD6FE;
  }

  .ct-item-desc {
    font-size: 12.5px;
    color: #6B7280;
    line-height: 1.6;
  }

  /* Card Footer */
  .ct-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-top: 14px;
    border-top: 1px solid #F3F4F6;
  }

  .ct-price-block {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .ct-price-row {
    display: flex;
    align-items: baseline;
    gap: 7px;
    flex-wrap: wrap;
  }

  .ct-unit-price-big {
    font-family: 'Sora', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: #2563EB;
    letter-spacing: -0.8px;
  }

  .ct-per-plan {
    font-size: 12px;
    color: #9CA3AF;
    font-weight: 500;
  }

  .ct-line-total-row {
    font-size: 12px;
    color: #6B7280;
    font-weight: 600;
  }

  .ct-footer-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    flex-shrink: 0;
  }

  .ct-stepper {
    display: flex;
    align-items: center;
    background: #F3F4F6;
    border-radius: 12px;
    border: 1px solid #E5E7EB;
    overflow: hidden;
  }

  .ct-step-btn {
    width: 34px;
    height: 36px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #374151;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.12s;
    font-family: inherit;
  }

  .ct-step-btn:hover:not(:disabled) {
    background: #E5E7EB;
  }

  .ct-step-btn:disabled {
    opacity: 0.35;
    cursor: default;
  }

  .ct-step-num {
    min-width: 28px;
    text-align: center;
    font-family: 'Sora', sans-serif;
    font-size: 15px;
    font-weight: 800;
    color: #111827;
  }

  .ct-view-link {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 11px;
    font-weight: 700;
    color: #6366F1;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    padding: 0;
    transition: color 0.14s;
  }

  .ct-view-link:hover {
    color: #4F46E5;
  }

  /* Order Summary */
  .ct-summary-card {
    background: #fff;
    border: 1px solid #DDE3F5;
    border-radius: 20px;
    padding: 22px;
    box-shadow: 0 2px 16px rgba(59,130,246,0.07);
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .ct-fee-rows {
    display: flex;
    flex-direction: column;
  }

  .ct-fee-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #F3F4F6;
    font-size: 13.5px;
    color: #374151;
    font-weight: 500;
  }

  .ct-fee-row:last-child {
    border-bottom: none;
  }

  .ct-fee-label {
    color: #6B7280;
    font-size: 13px;
  }

  .ct-fee-sub {
    font-size: 11px;
    color: #9CA3AF;
    font-weight: 400;
  }

  .ct-fee-value {
    font-weight: 600;
    color: #111827;
  }

  .ct-fee-muted {
    color: #9CA3AF;
    font-weight: 500;
  }

  .ct-fee-free {
    color: #16A34A;
    font-weight: 700;
    font-size: 13px;
  }

  .ct-summary-divider {
    height: 1px;
    background: #E5E7EB;
    margin: 14px 0;
  }

  .ct-total-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .ct-total-label {
    font-size: 14px;
    font-weight: 800;
    color: #111827;
  }

  .ct-total-amount {
    font-family: 'Sora', sans-serif;
    font-size: 26px;
    font-weight: 800;
    color: #2563EB;
    letter-spacing: -1px;
  }

  .ct-checkout-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #2563EB, #6366F1);
    border: none;
    border-radius: 14px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(99,102,241,0.35);
    transition: opacity 0.15s, transform 0.12s;
    margin-bottom: 12px;
  }

  .ct-checkout-btn:hover {
    opacity: 0.92;
  }

  .ct-checkout-btn:active {
    transform: scale(0.98);
  }

  .ct-checkout-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .ct-trust-note {
    text-align: center;
    font-size: 11px;
    color: #9CA3AF;
    font-weight: 500;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .ct-two-col {
      flex-direction: column;
      padding: 14px 12px 40px;
      gap: 16px;
    }

    .ct-col-right {
      width: 100%;
      position: static;
      max-height: none;
      overflow-y: visible;
    }

    .ct-unit-price-big {
      font-size: 18px;
    }

    .ct-total-amount {
      font-size: 22px;
    }
  }
`;export{C as default};