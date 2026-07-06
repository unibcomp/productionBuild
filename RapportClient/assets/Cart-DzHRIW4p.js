import{t as e}from"./clock-CJQdqf_I.js";import{n as t,t as n}from"./plus-xuv7pJq_.js";import{t as r}from"./wifi-Bj1Pja2_.js";import{N as i,Q as a,U as o,V as s,W as c,Y as l,_ as u,at as d,b as f,tt as p,v as m,y as h}from"./index-BSDS6XOz.js";import{t as g}from"./proxy-BhQHYrPd.js";import{t as _}from"./AnimatePresence-CZze_To7.js";import{n as v}from"./useCheckout-AueM_KLC.js";var y=c(`shopping-bag`,[[`path`,{d:`M16 10a4 4 0 0 1-8 0`,key:`1ltviw`}],[`path`,{d:`M3.103 6.034h17.794`,key:`awc11p`}],[`path`,{d:`M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,key:`o988cm`}]]),b=c(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]);p();var x=l(),S=()=>{let c=a(),{mutate:l,isPending:d}=v(),{data:p,isLoading:S}=u(),{mutate:w}=f(),{mutate:T}=h(),{mutate:E}=m(),D=p?.cart?.items||[],O=e=>T(e),k=(e,t)=>{t<=0?T(e):w({planId:e,quantity:Math.min(10,t)})},A=p?.subTotal??0,j=p?.platformFee??0,M=p?.deliveryPrice??0,N=p?.totalOperatorFee??0,P=p?.totalPrice??0,F=D.reduce((e,t)=>e+(t.planId?.price??0)*(t.quantity??1),0)-A,I=D.reduce((e,t)=>e+(t.quantity??1),0);return S?(0,x.jsxs)(`div`,{className:`ct-root`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,minHeight:`100vh`},children:[(0,x.jsx)(`style`,{children:C}),(0,x.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,x.jsx)(`div`,{style:{width:36,height:36,borderRadius:`50%`,border:`3px solid #DBEAFE`,borderTopColor:`#3B82F6`,margin:`0 auto 12px`,animation:`ct-spin 0.75s linear infinite`}}),(0,x.jsx)(`p`,{style:{fontSize:13,color:`#6B7280`,fontWeight:600},children:`Loading cart…`})]})]}):(0,x.jsxs)(`div`,{className:`ct-root`,children:[(0,x.jsx)(`style`,{children:C}),(0,x.jsxs)(`nav`,{className:`ct-nav`,children:[(0,x.jsxs)(`button`,{className:`ct-back-btn`,onClick:()=>c(-1),children:[(0,x.jsx)(o,{size:14}),` Back`]}),(0,x.jsxs)(`div`,{className:`ct-nav-center`,children:[(0,x.jsx)(i,{size:15}),(0,x.jsx)(`span`,{className:`ct-nav-label`,children:`My Cart`}),I>0&&(0,x.jsx)(`span`,{className:`ct-nav-count`,children:I})]}),D.length>0&&(0,x.jsx)(`button`,{className:`ct-clear-btn`,onClick:()=>E(),children:`Clear All`})]}),D.length===0&&(0,x.jsxs)(g.div,{className:`ct-empty`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},children:[(0,x.jsx)(`div`,{className:`ct-empty-icon`,children:(0,x.jsx)(y,{size:40,strokeWidth:1.3})}),(0,x.jsx)(`h2`,{className:`ct-empty-title`,children:`Your cart is empty`}),(0,x.jsx)(`p`,{className:`ct-empty-sub`,children:`Add plans from the browse page to get started.`}),(0,x.jsx)(`button`,{className:`ct-empty-btn`,onClick:()=>c(-1),children:`Browse Plans →`})]}),D.length>0&&(0,x.jsxs)(`div`,{className:`ct-two-col`,children:[(0,x.jsxs)(`div`,{className:`ct-col-left`,children:[(0,x.jsxs)(`div`,{className:`ct-section-header`,children:[(0,x.jsxs)(`div`,{className:`ct-section-title`,children:[(0,x.jsx)(i,{size:15}),`Items in Cart`]}),(0,x.jsxs)(`span`,{className:`ct-section-badge`,children:[I,` item`,I===1?``:`s`]})]}),F>0&&(0,x.jsxs)(g.div,{className:`ct-savings-strip`,initial:{opacity:0,y:-6},animate:{opacity:1,y:0},children:[(0,x.jsx)(`span`,{className:`ct-savings-icon`,children:`🎉`}),(0,x.jsxs)(`span`,{children:[`You're saving `,(0,x.jsxs)(`strong`,{children:[`₹`,F]}),` on this order!`]})]}),(0,x.jsx)(`div`,{className:`ct-list`,children:(0,x.jsx)(_,{children:D.map((i,a)=>{let o=i.planId??{},l=o._id??i._id,u=o.salePrice??o.price??0,d=o.salePrice&&o.price?Math.round((o.price-o.salePrice)/o.price*100):null;return(0,x.jsxs)(g.div,{className:`ct-item-card`,initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0,x:40,scale:.96},transition:{duration:.25,delay:a*.04},layout:!0,children:[(0,x.jsxs)(`div`,{className:`ct-card-header`,children:[(0,x.jsxs)(`div`,{className:`ct-card-header-left`,children:[(0,x.jsx)(`div`,{className:`ct-item-avatar`,children:o.operatorId?.logo?(0,x.jsx)(`img`,{src:o.operatorId.logo,alt:``,style:{width:28,height:28,objectFit:`contain`}}):(0,x.jsx)(`span`,{style:{fontSize:18},children:`📶`})}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`ct-item-operator`,children:o.operatorId?.name||`Operator`}),(0,x.jsxs)(`div`,{className:`ct-item-type`,children:[o.planTypeId?.name||`Prepaid`,typeof o.serviceId==`object`&&o.serviceId?.name?` · ${o.serviceId.name}`:``]})]})]}),(0,x.jsxs)(`div`,{className:`ct-card-header-right`,children:[d!==null&&(0,x.jsxs)(`span`,{className:`ct-disc-badge`,children:[d,`% OFF`]}),(0,x.jsx)(`button`,{className:`ct-remove-btn`,onClick:()=>O(l),title:`Remove`,children:(0,x.jsx)(b,{size:13})})]})]}),(0,x.jsxs)(`div`,{className:`ct-card-body`,children:[(0,x.jsxs)(`div`,{className:`ct-chips`,children:[o.data&&(0,x.jsxs)(`span`,{className:`ct-chip`,children:[(0,x.jsx)(r,{size:11}),` `,o.data]}),o.validity&&(0,x.jsxs)(`span`,{className:`ct-chip`,children:[(0,x.jsx)(e,{size:11}),` `,o.validity,`d`]}),o.networkType&&(0,x.jsx)(`span`,{className:`ct-chip ct-chip-net`,children:o.networkType}),o.calls&&(0,x.jsxs)(`span`,{className:`ct-chip`,children:[`📞 `,o.calls]}),o.sms&&(0,x.jsxs)(`span`,{className:`ct-chip`,children:[`💬 `,o.sms]})]}),o.description&&(0,x.jsx)(`p`,{className:`ct-item-desc`,children:o.description})]}),(0,x.jsxs)(`div`,{className:`ct-card-footer`,children:[(0,x.jsxs)(`div`,{className:`ct-price-block`,children:[(0,x.jsxs)(`div`,{className:`ct-price-row`,children:[(0,x.jsxs)(`span`,{className:`ct-unit-price-big`,children:[`₹`,u]}),(0,x.jsx)(`span`,{className:`ct-per-plan`,children:`/ plan`}),o.salePrice&&o.price&&(0,x.jsxs)(`span`,{className:`ct-was-price`,children:[`₹`,o.price]})]}),(i.quantity??1)>1&&(0,x.jsxs)(`div`,{className:`ct-line-total-row`,children:[`= ₹`,u*(i.quantity??1),` total`]})]}),(0,x.jsxs)(`div`,{className:`ct-footer-right`,children:[(0,x.jsxs)(`div`,{className:`ct-stepper`,children:[(0,x.jsx)(`button`,{className:`ct-step-btn`,onClick:()=>k(l,(i.quantity??1)-1),disabled:(i.quantity??1)<=1,children:(0,x.jsx)(t,{size:12})}),(0,x.jsx)(`span`,{className:`ct-step-num`,children:i.quantity??1}),(0,x.jsx)(`button`,{className:`ct-step-btn`,onClick:()=>k(l,(i.quantity??1)+1),disabled:(i.quantity??1)>=10,children:(0,x.jsx)(n,{size:12})})]}),(0,x.jsxs)(`button`,{className:`ct-view-link`,onClick:()=>c(`/plan-details/${l}`,{state:o}),children:[`Details `,(0,x.jsx)(s,{size:11})]})]})]})]},i._id??l??a)})})})]}),(0,x.jsx)(`div`,{className:`ct-col-right`,children:(0,x.jsxs)(g.div,{className:`ct-summary-card`,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.15},children:[(0,x.jsx)(`div`,{className:`ct-section-header`,style:{marginBottom:18},children:(0,x.jsx)(`div`,{className:`ct-section-title`,style:{fontSize:13},children:`Order Summary`})}),(0,x.jsxs)(`div`,{className:`ct-fee-rows`,children:[(0,x.jsxs)(`div`,{className:`ct-fee-row`,children:[(0,x.jsxs)(`span`,{className:`ct-fee-label`,children:[`Subtotal`,(0,x.jsxs)(`span`,{className:`ct-fee-sub`,children:[` (`,I,` item`,I===1?``:`s`,`)`]})]}),(0,x.jsxs)(`span`,{className:`ct-fee-value`,children:[`₹`,A]})]}),F>0&&(0,x.jsxs)(`div`,{className:`ct-fee-row ct-fee-discount`,children:[(0,x.jsx)(`span`,{className:`ct-fee-label`,children:`Discount`}),(0,x.jsxs)(`span`,{className:`ct-fee-value`,children:[`−₹`,F]})]}),(0,x.jsxs)(`div`,{className:`ct-fee-row`,children:[(0,x.jsx)(`span`,{className:`ct-fee-label`,children:`Platform Fee`}),(0,x.jsx)(`span`,{className:`ct-fee-value ct-fee-muted`,children:j>0?`₹${j}`:`—`})]}),(0,x.jsxs)(`div`,{className:`ct-fee-row`,children:[(0,x.jsx)(`span`,{className:`ct-fee-label`,children:`Delivery Fee`}),M===0?(0,x.jsx)(`span`,{className:`ct-fee-free`,children:`Free`}):(0,x.jsxs)(`span`,{className:`ct-fee-value`,children:[`₹`,M]})]}),(0,x.jsxs)(`div`,{className:`ct-fee-row`,children:[(0,x.jsx)(`span`,{className:`ct-fee-label`,children:`Operator Fee`}),(0,x.jsx)(`span`,{className:`ct-fee-value ct-fee-muted`,children:N>0?`₹${N}`:`—`})]})]}),(0,x.jsx)(`div`,{className:`ct-summary-divider`}),(0,x.jsxs)(`div`,{className:`ct-total-row`,children:[(0,x.jsx)(`span`,{className:`ct-total-label`,children:`Total`}),(0,x.jsxs)(`span`,{className:`ct-total-amount`,children:[`₹`,P]})]}),F>0&&(0,x.jsxs)(`div`,{className:`ct-saved-pill`,children:[`🎉 You saved ₹`,F]}),(0,x.jsx)(`button`,{className:`ct-checkout-btn`,onClick:()=>{l({type:`THROUGHCART`},{onSuccess:e=>{c(`/buy-now/${e.sessionId}`)}})},disabled:d,children:d?`Processing...`:`Proceed to Checkout →`}),(0,x.jsx)(`p`,{className:`ct-trust-note`,children:`🔒 Secure & encrypted checkout`})]})})]}),(0,x.jsx)(`div`,{style:{height:32}})]})},C=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes ct-spin { to { transform: rotate(360deg); } }

 .ct-root {
  min-height: 100vh;
  background: #F0F4FF;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  overflow-y: auto;
  height: 100vh;
}

  /* ── NAV ── */
  .ct-nav {
    position: sticky; top: 0; z-index: 40;
    background: rgba(240,244,255,0.94);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid #DDE3F5;
    height: 58px;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 24px;
  }
  .ct-back-btn {
    display: flex; align-items: center; gap: 6px;
    background: #fff; border: 1px solid #DDE3F5; border-radius: 10px;
    padding: 7px 14px; font-size: 13px; font-weight: 600; color: #4B5563;
    cursor: pointer; font-family: inherit; transition: all 0.15s;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  }
  .ct-back-btn:hover { border-color: #3B82F6; color: #3B82F6; background: #EFF6FF; }
  .ct-nav-center { display: flex; align-items: center; gap: 7px; color: #374151; }
  .ct-nav-label { font-size: 14px; font-weight: 700; color: #111827; letter-spacing: 0.2px; }
  .ct-nav-count {
    background: #EF4444; color: #fff; font-size: 10px; font-weight: 800;
    border-radius: 20px; padding: 2px 7px; min-width: 20px; text-align: center;
  }
  .ct-clear-btn {
    font-size: 12px; font-weight: 600; color: #EF4444;
    background: #FEF2F2; border: 1px solid #FECACA;
    border-radius: 8px; padding: 6px 12px; cursor: pointer;
    font-family: inherit; transition: all 0.15s;
  }
  .ct-clear-btn:hover { background: #FEE2E2; }

  /* ── EMPTY ── */
  .ct-empty {
    display: flex; flex-direction: column; align-items: center;
    justify-content: center; padding: 80px 32px; text-align: center;
  }
  .ct-empty-icon {
    width: 88px; height: 88px; border-radius: 24px;
    background: #fff; border: 1px solid #DDE3F5;
    display: flex; align-items: center; justify-content: center;
    color: #9CA3AF; margin-bottom: 20px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.05);
  }
  .ct-empty-title { font-family: 'Sora', sans-serif; font-size: 22px; font-weight: 800; color: #111827; margin-bottom: 8px; }
  .ct-empty-sub { font-size: 14px; color: #9CA3AF; margin-bottom: 24px; }
  .ct-empty-btn {
    padding: 12px 28px; border-radius: 14px; border: none;
    background: linear-gradient(135deg, #2563EB, #6366F1);
    color: #fff; font-size: 14px; font-weight: 700;
    font-family: inherit; cursor: pointer;
    box-shadow: 0 4px 20px rgba(99,102,241,0.3); transition: opacity 0.15s;
  }
  .ct-empty-btn:hover { opacity: 0.9; }

  /* ── TWO-COLUMN LAYOUT ── */
 .ct-two-col {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 20px 40px;
  max-width: 1100px;
  margin: 0 auto;
  /* NO overflow, NO height constraint here */
}

  /* LEFT COLUMN */
 .ct-col-left {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

  /* RIGHT COLUMN */
.ct-col-right {
  width: 320px;
  flex-shrink: 0;
  position: sticky;
  top: 78px;
  align-self: flex-start;
  max-height: calc(100vh - 94px);
  overflow-y: auto;
}
  /* ── SECTION HEADERS ── */
  .ct-section-header {
    display: flex; align-items: center; justify-content: space-between;
  }
  .ct-section-title {
    display: flex; align-items: center; gap: 7px;
    font-size: 12px; font-weight: 800; color: #374151;
    text-transform: uppercase; letter-spacing: 0.8px;
  }
  .ct-section-badge {
    font-size: 11px; font-weight: 700; color: #2563EB;
    background: #EFF6FF; border: 1px solid #BFDBFE;
    border-radius: 20px; padding: 3px 10px;
  }

  /* ── SAVINGS STRIP ── */
  .ct-savings-strip {
    display: flex; align-items: center; gap: 8px;
    background: #F0FDF4; border: 1px solid #BBF7D0;
    border-radius: 12px; padding: 10px 14px;
    font-size: 13px; color: #15803D; font-weight: 500;
  }
  .ct-savings-icon { font-size: 15px; }

  /* ── ITEM LIST ── */
  .ct-list { display: flex; flex-direction: column; gap: 12px; }

  /* ── ITEM CARD ── */
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

  /* Card header */
  .ct-card-header {
    display: flex; align-items: center; justify-content: space-between;
    padding-bottom: 14px;
    border-bottom: 1px solid #F3F4F6;
    margin-bottom: 14px;
  }
  .ct-card-header-left { display: flex; align-items: center; gap: 10px; }
  .ct-card-header-right { display: flex; align-items: center; gap: 8px; }

  .ct-item-avatar {
    width: 44px; height: 44px; border-radius: 12px;
    background: linear-gradient(135deg, #EFF6FF, #DBEAFE);
    border: 1px solid #BFDBFE;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; overflow: hidden;
  }
  .ct-item-operator { font-size: 14px; font-weight: 700; color: #111827; }
  .ct-item-type { font-size: 12px; font-weight: 500; color: #9CA3AF; margin-top: 2px; }

  .ct-disc-badge {
    background: #DCFCE7; color: #14532D; border: 1px solid #BBF7D0;
    font-size: 10px; font-weight: 800; padding: 3px 9px; border-radius: 20px;
  }
  .ct-remove-btn {
    width: 30px; height: 30px; border-radius: 8px;
    border: 1px solid #FECACA; background: #FEF2F2; color: #EF4444;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: all 0.14s;
  }
  .ct-remove-btn:hover { background: #FEE2E2; }

  /* Card body */
  .ct-card-body { margin-bottom: 14px; }
  .ct-chips { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }
  .ct-chip {
    display: inline-flex; align-items: center; gap: 4px;
    background: #F3F4F6; color: #374151; border: 1px solid #E5E7EB;
    font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 20px;
  }
  .ct-chip-net { background: #EDE9FE; color: #5B21B6; border-color: #DDD6FE; }
  .ct-item-desc { font-size: 12.5px; color: #6B7280; line-height: 1.6; }

  /* Card footer */
  .ct-card-footer {
    display: flex; align-items: center; justify-content: space-between;
    gap: 12px;
    padding-top: 14px;
    border-top: 1px solid #F3F4F6;
  }
  .ct-price-block { display: flex; flex-direction: column; gap: 3px; }
  .ct-price-row { display: flex; align-items: baseline; gap: 7px; flex-wrap: wrap; }
  .ct-unit-price-big {
    font-family: 'Sora', sans-serif; font-size: 22px; font-weight: 800;
    color: #2563EB; letter-spacing: -0.8px;
  }
  .ct-per-plan { font-size: 12px; color: #9CA3AF; font-weight: 500; }
  .ct-was-price { font-size: 12px; color: #D1D5DB; text-decoration: line-through; font-weight: 500; }
  .ct-line-total-row { font-size: 12px; color: #6B7280; font-weight: 600; }

  .ct-footer-right {
    display: flex; flex-direction: column; align-items: flex-end; gap: 8px;
    flex-shrink: 0;
  }
  .ct-stepper {
    display: flex; align-items: center;
    background: #F3F4F6; border-radius: 12px; border: 1px solid #E5E7EB;
    overflow: hidden;
  }
  .ct-step-btn {
    width: 34px; height: 36px; background: transparent; border: none;
    cursor: pointer; color: #374151;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.12s; font-family: inherit;
  }
  .ct-step-btn:hover:not(:disabled) { background: #E5E7EB; }
  .ct-step-btn:disabled { opacity: 0.35; cursor: default; }
  .ct-step-num {
    min-width: 28px; text-align: center;
    font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 800; color: #111827;
  }
  .ct-view-link {
    display: flex; align-items: center; gap: 3px;
    font-size: 11px; font-weight: 700; color: #6366F1;
    background: none; border: none; cursor: pointer;
    font-family: inherit; padding: 0; transition: color 0.14s;
  }
  .ct-view-link:hover { color: #4F46E5; }

  /* ── RIGHT COLUMN: SUMMARY CARD ── */
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

  .ct-fee-rows { display: flex; flex-direction: column; }
  .ct-fee-row {
    display: flex; align-items: center; justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #F3F4F6;
    font-size: 13.5px; color: #374151; font-weight: 500;
  }
  .ct-fee-row:last-child { border-bottom: none; }
  .ct-fee-label { color: #6B7280; font-size: 13px; }
  .ct-fee-sub { font-size: 11px; color: #9CA3AF; font-weight: 400; }
  .ct-fee-value { font-weight: 600; color: #111827; }
  .ct-fee-muted { color: #9CA3AF; font-weight: 500; }
  .ct-fee-discount { }
  .ct-fee-discount .ct-fee-label { color: #16A34A; font-weight: 600; }
  .ct-fee-discount .ct-fee-value { color: #16A34A; }
  .ct-fee-free { color: #16A34A; font-weight: 700; font-size: 13px; }

  .ct-summary-divider { height: 1px; background: #E5E7EB; margin: 14px 0; }

  .ct-total-row {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 12px;
  }
  .ct-total-label { font-size: 14px; font-weight: 800; color: #111827; }
  .ct-total-amount {
    font-family: 'Sora', sans-serif; font-size: 26px; font-weight: 800;
    color: #2563EB; letter-spacing: -1px;
  }

  .ct-saved-pill {
    display: inline-block;
    background: #F0FDF4; border: 1px solid #BBF7D0;
    border-radius: 20px; padding: 5px 12px;
    font-size: 12px; font-weight: 700; color: #15803D;
    text-align: center; margin-bottom: 14px;
  }

  .ct-checkout-btn {
    width: 100%; padding: 14px;
    background: linear-gradient(135deg, #2563EB, #6366F1);
    border: none; border-radius: 14px;
    color: #fff; font-size: 14px; font-weight: 700;
    font-family: inherit; cursor: pointer;
    box-shadow: 0 4px 20px rgba(99,102,241,0.35);
    transition: opacity 0.15s, transform 0.12s;
    margin-bottom: 12px;
  }
  .ct-checkout-btn:hover { opacity: 0.92; }
  .ct-checkout-btn:active { transform: scale(0.98); }

  .ct-trust-note {
    text-align: center; font-size: 11px; color: #9CA3AF; font-weight: 500;
  }

  /* ── RESPONSIVE: stack on mobile ── */
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
  .ct-unit-price-big { font-size: 18px; }
  .ct-total-amount { font-size: 22px; }
}
`;export{S as default};