import{t as e}from"./briefcase-HKH-oqkI.js";import{t}from"./clock-DX9Fwoed.js";import{t as n}from"./message-square-kruERuDk.js";import{n as r,t as i}from"./plus-_4FUlFxW.js";import{t as ee}from"./truck-CO33mLFY.js";import{t as te}from"./wifi-B53HIquH.js";import{I as ne,K as a,P as o,Q as s,S as c,T as l,U as u,W as d,X as f,ct as p,et as m,g as h,it as g,j as re,nt as _,q as v,tt as ie,x as ae,z as oe}from"./index-RL4Y9baa.js";import{t as y}from"./proxy-PQTCNBfK.js";import{t as se}from"./AnimatePresence-B8h3CK5Z.js";import{t as ce}from"./usePlanTypes-BhzZyO8i.js";import{t as le}from"./useServices-BsDbcw-g.js";import{t as ue}from"./usePlans-DerXvf0X.js";import{t as de}from"./useUser-DAlvH1eQ.js";import{n as fe}from"./useCheckout-DNbZl0G0.js";import{t as b}from"./usePlanTags-CwEmlIWL.js";var pe=v(`qr-code`,[[`rect`,{width:`5`,height:`5`,x:`3`,y:`3`,rx:`1`,key:`1tu5fj`}],[`rect`,{width:`5`,height:`5`,x:`16`,y:`3`,rx:`1`,key:`1v8r4q`}],[`rect`,{width:`5`,height:`5`,x:`3`,y:`16`,rx:`1`,key:`1x03jg`}],[`path`,{d:`M21 16h-3a2 2 0 0 0-2 2v3`,key:`177gqh`}],[`path`,{d:`M21 21v.01`,key:`ents32`}],[`path`,{d:`M12 7v3a2 2 0 0 1-2 2H7`,key:`8crl2c`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M12 3h.01`,key:`n36tog`}],[`path`,{d:`M12 16v.01`,key:`133mhm`}],[`path`,{d:`M16 12h1`,key:`1slzba`}],[`path`,{d:`M21 12v.01`,key:`1lwtk9`}],[`path`,{d:`M12 21v-1`,key:`1880an`}]]),x=v(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),S=v(`signal`,[[`path`,{d:`M2 20h.01`,key:`4haj6o`}],[`path`,{d:`M7 20v-4`,key:`j294jx`}],[`path`,{d:`M12 20v-8`,key:`i3yub9`}],[`path`,{d:`M17 20V8`,key:`1tkaf5`}],[`path`,{d:`M22 4v16`,key:`sih9yq`}]]),me=v(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),he=v(`tag`,[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,key:`vktsd0`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`kqv944`}]]),C=p(g(),1);const ge=e=>f({queryKey:e?[`vipCategory`,e]:[`vipCategories`],queryFn:async()=>{try{let t=e?`/vip-category/${e}`:`/vip-category`,{data:n}=await l.get(t);return console.log(`VIP API RESPONSE:`,n),n.data}catch(e){let t=e;throw console.error(`Failed to fetch VIP category:`,e),Error(t.response?.data?.message||t.message||`Something went wrong`)}},enabled:!0,staleTime:300*1e3,retry:2});var w=s(),T=()=>{let{state:s}=m(),{id:l}=_(),f=ie(),{data:p,isLoading:g}=ue((0,C.useMemo)(()=>l||s?._id,[l,s?._id])),{data:v}=de(),{data:T}=le((0,C.useMemo)(()=>typeof p?.serviceId==`string`?p.serviceId:p?.serviceId?._id,[p])),{data:D}=ge(p?.vipCategoryId?._id),{data:_e=[]}=b(),{data:ve=[]}=ce(),{mutate:ye,isPending:O}=h(),{mutate:k,isPending:A}=fe(),[j,M]=(0,C.useState)(!1),[N,be]=(0,C.useState)(!1),[P,F]=(0,C.useState)(1),[I,L]=(0,C.useState)(!1),[R,z]=(0,C.useState)(`specs`),B=(0,C.useMemo)(()=>s?.orderType===`PORT`,[s?.orderType]),xe=(0,C.useMemo)(()=>s?.orderType===`ESIM`,[s?.orderType]),V=B||xe;if((0,C.useEffect)(()=>(document.body.style.overflow=j?`hidden`:``,()=>{document.body.style.overflow=``}),[j]),g)return(0,w.jsxs)(`div`,{className:`pd-center-screen`,children:[(0,w.jsx)(`style`,{children:E}),(0,w.jsxs)(`div`,{className:`pd-loading-card`,children:[(0,w.jsx)(`div`,{className:`pd-spinner`}),(0,w.jsx)(`p`,{className:`pd-loading-text`,children:`Fetching plan details…`})]})]});if(!p)return(0,w.jsxs)(`div`,{className:`pd-center-screen`,children:[(0,w.jsx)(`style`,{children:E}),(0,w.jsxs)(`div`,{className:`pd-notfound-card`,children:[(0,w.jsx)(`div`,{className:`pd-notfound-icon`,children:`🔍`}),(0,w.jsx)(`h2`,{className:`pd-notfound-title`,children:`Plan not found`}),(0,w.jsx)(`p`,{className:`pd-notfound-sub`,children:`This plan may no longer be available.`}),(0,w.jsx)(`button`,{onClick:()=>f(-1),className:`pd-notfound-btn`,children:`← Go Back`})]})]});let H=T?.[0],U=Array.isArray(D)?D[0]:D,Se=typeof p.planTypeId==`object`?p.planTypeId?._id:p.planTypeId,W=_e.filter(e=>p.planTagsId?.includes(e._id)),G=ve.find(e=>e._id===Se),K=typeof p.operatorId==`object`?p.operatorId?.name:`Operator`,q=typeof p.operatorId==`object`?p.operatorId?.logo:``,Ce=p.simTypes?.includes(`esim`),we=p.simTypes?.includes(`physical`),J=Ce&&!we?`esim`:`physical`,Y=p.salePrice&&p.price?Math.round((p.price-p.salePrice)/p.price*100):null,X=()=>{if(!v)return M(!0);let e=s?.orderType||`NORMAL`;k({type:`DIRECT`,planId:p._id,quantity:P},{onSuccess:t=>{f(`/buy-now/${t.sessionId}`,{state:{orderType:e,quantity:P}})}})},Z=()=>{if(!v)return M(!0);ye({planId:p._id,quantity:P},{onSuccess:()=>{L(!0),setTimeout(()=>L(!1),2e3)}})},Te=[{icon:(0,w.jsx)(te,{size:16}),num:p.data??`—`,lbl:`Data / Day`},{icon:(0,w.jsx)(t,{size:16}),num:p.validity?`${p.validity}d`:`—`,lbl:`Validity`},{icon:(0,w.jsx)(ne,{size:16}),num:p.calls??`—`,lbl:`Calls`},{icon:(0,w.jsx)(n,{size:16}),num:p.sms??`—`,lbl:`SMS / Day`},{icon:(0,w.jsx)(S,{size:16}),num:p.networkType??`—`,lbl:`Network`}],Q=[{key:`Data`,val:p.data},{key:`Validity`,val:p.validity?`${p.validity} Days`:null},{key:`Calls`,val:p.calls},{key:`SMS`,val:p.sms},{key:`Network`,val:p.networkType},{key:`SIM Type`,val:p.simTypes?.join(` / `)},{key:`Service`,val:H?.name||(typeof p.serviceId==`string`?p.serviceId:p.serviceId?.name)},{key:`Plan Type`,val:G?.name||`N/A`}].filter(e=>e.val),$=J===`esim`?[{t:`Buy & verify`,d:`Complete your purchase and finish KYC verification online.`},{t:`Get your QR`,d:`Your eSIM QR code and activation guide arrive by email.`},{t:`Scan to install`,d:`Scan the QR from your phone's eSIM settings — no physical swap.`},{t:`You're live`,d:`Network activates automatically, usually within minutes.`}]:[{t:`Buy & verify`,d:`Complete your purchase and finish KYC verification online.`},{t:`We ship it`,d:`Your SIM is dispatched to your address, tracked door to door.`},{t:`Install the SIM`,d:`Pop it into your device once it arrives.`},{t:`Activated`,d:`Network activates after verification — typically within a day.`}];return(0,w.jsxs)(`div`,{className:`pd-root`,children:[(0,w.jsx)(`style`,{children:E}),(0,w.jsxs)(`nav`,{className:`pd-nav`,children:[(0,w.jsxs)(`button`,{className:`pd-back-btn`,onClick:()=>f(-1),children:[(0,w.jsx)(a,{size:14}),` Back`]}),(0,w.jsxs)(`div`,{className:`pd-crumb`,children:[(0,w.jsx)(`span`,{children:`Plans`}),(0,w.jsx)(u,{size:12}),(0,w.jsx)(`span`,{children:H?.name||`Service`}),(0,w.jsx)(u,{size:12}),(0,w.jsx)(`span`,{className:`pd-crumb-current`,children:K})]}),(0,w.jsx)(`div`,{style:{width:78}})]}),(0,w.jsxs)(y.section,{className:`pd-hero-band`,initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.4},children:[(0,w.jsxs)(`div`,{className:`pd-hero-inner`,children:[(0,w.jsxs)(`div`,{className:`pd-hero-identity`,children:[(0,w.jsx)(`div`,{className:`pd-op-avatar`,children:q?(0,w.jsx)(`img`,{src:q,alt:``,style:{width:30,height:30,objectFit:`contain`}}):(0,w.jsx)(`span`,{style:{fontSize:18},children:`📶`})}),(0,w.jsxs)(`div`,{className:`pd-hero-heading`,children:[(U||p.isBusinessSim)&&(0,w.jsx)(`div`,{className:`pd-op-line`,children:(0,w.jsxs)(`span`,{className:`pd-hero-badges`,children:[U&&(0,w.jsxs)(`span`,{className:`pd-badge pd-badge-vip`,children:[`👑 `,U.name]}),p.isBusinessSim&&(0,w.jsxs)(`span`,{className:`pd-badge pd-badge-biz`,children:[(0,w.jsx)(e,{size:11}),` Business`]})]})}),(0,w.jsxs)(`h1`,{className:`pd-plan-title`,children:[K,` `,(0,w.jsx)(`span`,{className:`pd-plan-title-accent`,children:G?.name||p.networkType||`Mobile`}),` Plan`,W.length>0&&(0,w.jsx)(`sup`,{className:`pd-plan-tm`,children:W.map(e=>(0,w.jsxs)(`span`,{className:`pd-tag-sm`,children:[(0,w.jsx)(he,{size:8}),` `,e.name]},e._id))})]})]})]}),p.description&&(0,w.jsx)(`p`,{className:`pd-plan-desc`,children:p.description})]}),(0,w.jsx)(`div`,{className:`pd-stats-grid`,children:Te.map((e,t)=>(0,w.jsxs)(`div`,{className:`pd-stat-cell`,children:[(0,w.jsx)(`span`,{className:`pd-stat-icon`,children:e.icon}),(0,w.jsx)(`span`,{className:`pd-stat-num`,children:e.num}),(0,w.jsx)(`span`,{className:`pd-stat-lbl`,children:e.lbl})]},t))})]}),(0,w.jsxs)(`div`,{className:`pd-layout`,children:[(0,w.jsxs)(`div`,{className:`pd-main`,children:[(0,w.jsxs)(y.div,{className:`pd-panel`,initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.06,duration:.4},children:[(0,w.jsx)(`div`,{className:`pd-panel-head`,children:(0,w.jsxs)(`div`,{className:`pd-segctl`,role:`tablist`,children:[(0,w.jsxs)(`button`,{role:`tab`,"aria-selected":R===`specs`,className:`pd-seg-btn${R===`specs`?` pd-seg-btn-active`:``}`,onClick:()=>z(`specs`),children:[(0,w.jsx)(x,{size:13}),` Specifications`]}),(0,w.jsxs)(`button`,{role:`tab`,"aria-selected":R===`benefits`,className:`pd-seg-btn${R===`benefits`?` pd-seg-btn-active`:``}`,onClick:()=>z(`benefits`),children:[(0,w.jsx)(me,{size:13}),` Benefits`]}),(0,w.jsx)(`span`,{className:`pd-seg-thumb${R===`benefits`?` pd-seg-thumb-right`:``}`,"aria-hidden":`true`})]})}),R===`specs`?Q.length>0?(0,w.jsx)(`div`,{className:`pd-spec-grid`,children:Q.map((e,t)=>(0,w.jsxs)(`div`,{className:`pd-spec-cell`,children:[(0,w.jsx)(`span`,{className:`pd-spec-key`,children:e.key}),(0,w.jsx)(`span`,{className:`pd-spec-val`,children:e.val})]},t))}):(0,w.jsx)(`div`,{className:`pd-empty-state`,children:`No specifications available`}):p.benefits?.length?(0,w.jsx)(`div`,{className:`pd-benefit-list`,children:p.benefits.map((e,t)=>(0,w.jsxs)(`div`,{className:`pd-benefit-item`,children:[(0,w.jsx)(`div`,{className:`pd-benefit-dot`}),(0,w.jsx)(`span`,{children:e})]},t))}):(0,w.jsx)(`div`,{className:`pd-empty-state`,children:`No benefits listed for this plan`}),H?.description&&(0,w.jsxs)(`div`,{className:`pd-service-note`,children:[(0,w.jsx)(S,{size:14}),(0,w.jsxs)(`p`,{children:[(0,w.jsxs)(`strong`,{children:[H.name||`Service`,`:`]}),` `,H.description]})]})]}),(0,w.jsxs)(y.div,{className:`pd-panel pd-steps-panel`,initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.16,duration:.4},children:[(0,w.jsx)(`div`,{className:`pd-panel-title`,children:`How activation works`}),(0,w.jsx)(`div`,{className:`pd-steps-track`,children:$.map((e,t)=>(0,w.jsxs)(`div`,{className:`pd-step-node`,children:[(0,w.jsxs)(`div`,{className:`pd-step-marker`,children:[(0,w.jsx)(`span`,{className:`pd-step-num`,children:t+1}),t<$.length-1&&(0,w.jsx)(`span`,{className:`pd-step-connector`})]}),(0,w.jsxs)(`div`,{className:`pd-step-copy`,children:[(0,w.jsx)(`div`,{className:`pd-step-t`,children:e.t}),(0,w.jsx)(`div`,{className:`pd-step-d`,children:e.d})]})]},t))})]})]}),(0,w.jsx)(y.aside,{className:`pd-purchase`,initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.1,duration:.4},children:(0,w.jsxs)(`div`,{className:`pd-purchase-inner`,children:[(0,w.jsxs)(`div`,{className:`pd-purchase-head`,children:[(0,w.jsx)(`div`,{className:`pd-purchase-op-avatar`,children:q?(0,w.jsx)(`img`,{src:q,alt:``,style:{width:18,height:18,objectFit:`contain`}}):(0,w.jsx)(`span`,{style:{fontSize:12},children:`📶`})}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{className:`pd-purchase-op-name`,children:K}),(0,w.jsxs)(`div`,{className:`pd-purchase-op-sub`,children:[G?.name||`Prepaid`,` · `,p.validity?`${p.validity} Days`:`—`]})]})]}),(0,w.jsxs)(`div`,{className:`pd-price-row`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{className:`pd-price-you-pay`,children:`You Pay`}),(0,w.jsxs)(`div`,{className:`pd-price-amount`,children:[`₹`,p.salePrice||p.price,Y?(0,w.jsxs)(`sup`,{className:`pd-price-off-badge`,children:[Y,`% OFF`]}):null]})]}),p.salePrice&&(0,w.jsxs)(`div`,{className:`pd-price-was-col`,children:[(0,w.jsxs)(`span`,{className:`pd-price-strike`,children:[`₹`,p.price]}),(0,w.jsxs)(`span`,{className:`pd-price-save`,children:[`Save ₹`,p.price-p.salePrice]})]})]}),(0,w.jsx)(`div`,{className:`pd-delivery-note`,children:J===`esim`?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(pe,{size:14}),` Instant eSIM — activate by QR code, no physical delivery`]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(ee,{size:14}),` Physical SIM — delivered to your address`]})}),((p.simCost??0)>0||(p.deliveryCharges??0)>0||(p.cashHandlingCharges??0)>0)&&(0,w.jsxs)(`div`,{className:`pd-cost-breakup`,children:[(0,w.jsxs)(`div`,{className:`pd-cost-row`,children:[(0,w.jsx)(`span`,{children:`Recharge Plan Cost`}),(0,w.jsxs)(`span`,{children:[`₹`,p.salePrice||p.price]})]}),(p.simCost??0)>0&&(0,w.jsxs)(`div`,{className:`pd-cost-row`,children:[(0,w.jsx)(`span`,{children:`SIM Cost`}),(0,w.jsxs)(`span`,{children:[`₹`,p.simCost]})]}),(p.deliveryCharges??0)>0&&(0,w.jsxs)(`div`,{className:`pd-cost-row`,children:[(0,w.jsx)(`span`,{children:`Delivery Charges`}),(0,w.jsxs)(`span`,{children:[`₹`,p.deliveryCharges]})]}),(p.cashHandlingCharges??0)>0&&(0,w.jsxs)(`div`,{className:`pd-cost-row`,children:[(0,w.jsx)(`span`,{children:`Cash Handling Charges`}),(0,w.jsxs)(`span`,{children:[`₹`,p.cashHandlingCharges]})]})]}),!V&&(0,w.jsxs)(`div`,{className:`pd-qty-row`,children:[(0,w.jsx)(`span`,{className:`pd-qty-label`,children:`Quantity`}),(0,w.jsxs)(`div`,{className:`pd-qty-stepper`,children:[(0,w.jsx)(`button`,{className:`pd-qty-btn`,onClick:()=>F(e=>Math.max(1,e-1)),disabled:P<=1,children:(0,w.jsx)(r,{size:13})}),(0,w.jsx)(`span`,{className:`pd-qty-num`,children:P}),(0,w.jsx)(`button`,{className:`pd-qty-btn`,onClick:()=>F(e=>Math.min(10,e+1)),disabled:P>=10,children:(0,w.jsx)(i,{size:13})})]})]}),(0,w.jsxs)(`div`,{className:`pd-total-row`,children:[(0,w.jsx)(`span`,{children:`Total`}),(0,w.jsxs)(`span`,{className:`pd-total-amount`,children:[`₹`,(p.salePrice||p.price)*P]})]}),(0,w.jsx)(`button`,{className:`pd-buy-btn`,onClick:X,disabled:A,children:A?`Processing…`:B?`Port Now →`:`Buy Now →`}),!V&&(0,w.jsx)(`button`,{className:`pd-cart-btn${I?` pd-cart-btn-added`:``}`,onClick:Z,disabled:O,children:I?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{size:15}),` Added to cart`]}):O?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(o,{size:15}),` Adding…`]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(o,{size:15}),` Add to Cart`]})}),(0,w.jsxs)(`div`,{className:`pd-trust-row`,children:[(0,w.jsxs)(`span`,{className:`pd-trust-item`,children:[(0,w.jsx)(oe,{size:12}),` Encrypted checkout`]}),(0,w.jsx)(`span`,{className:`pd-trust-sep`}),(0,w.jsxs)(`span`,{className:`pd-trust-item`,children:[(0,w.jsx)(x,{size:12}),` DoT & TRAI compliant`]})]})]})})]}),(0,w.jsxs)(`div`,{className:`pd-mobile-bar`,children:[(0,w.jsxs)(`div`,{className:`pd-bottom-price-group`,children:[(0,w.jsx)(`div`,{className:`pd-bottom-label`,children:`Total`}),(0,w.jsxs)(`div`,{className:`pd-bottom-price-row`,children:[(0,w.jsxs)(`span`,{className:`pd-bottom-price`,children:[`₹`,(p.salePrice||p.price)*P]}),Y?(0,w.jsxs)(`span`,{className:`pd-bottom-badge`,children:[Y,`% off`]}):null]})]}),(0,w.jsxs)(`div`,{className:`pd-bottom-actions`,children:[!V&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`div`,{className:`pd-qty-stepper`,children:[(0,w.jsx)(`button`,{className:`pd-qty-btn`,onClick:()=>F(e=>Math.max(1,e-1)),disabled:P<=1,children:(0,w.jsx)(r,{size:13})}),(0,w.jsx)(`span`,{className:`pd-qty-num`,children:P}),(0,w.jsx)(`button`,{className:`pd-qty-btn`,onClick:()=>F(e=>Math.min(10,e+1)),disabled:P>=10,children:(0,w.jsx)(i,{size:13})})]}),(0,w.jsx)(`button`,{className:`pd-cart-btn${I?` pd-cart-btn-added`:``}`,onClick:Z,disabled:O,children:I?(0,w.jsx)(d,{size:15}):(0,w.jsx)(o,{size:15})})]}),(0,w.jsx)(`button`,{className:`pd-buy-btn`,onClick:X,disabled:A,children:A?`Processing…`:B?`Port Now →`:`Buy Now →`})]})]}),(0,w.jsx)(se,{children:j&&(0,w.jsx)(y.div,{className:`pd-overlay`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,w.jsxs)(y.div,{className:`pd-modal`,initial:{opacity:0,scale:.94,y:24},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.94,y:24},transition:{duration:.22},children:[(0,w.jsxs)(`div`,{className:`pd-modal-head`,children:[(0,w.jsx)(`button`,{className:`pd-modal-close`,onClick:()=>M(!1),children:(0,w.jsx)(re,{size:14})}),(0,w.jsx)(`h3`,{className:`pd-modal-title`,children:N?`Create Account`:`Welcome Back`}),(0,w.jsx)(`p`,{className:`pd-modal-sub`,children:N?`Sign up to complete your purchase`:`Log in to complete your purchase`})]}),(0,w.jsx)(`div`,{className:`pd-modal-tabs`,children:[`login`,`signup`].map(e=>(0,w.jsx)(`button`,{className:`pd-tab-modal${e===(N?`signup`:`login`)?` pd-tab-modal-active`:``}`,onClick:()=>be(e===`signup`),children:e===`login`?`Login`:`Sign Up`},e))}),(0,w.jsx)(`div`,{className:`pd-modal-body`,children:N?(0,w.jsx)(c,{onSuccess:()=>M(!1)}):(0,w.jsx)(ae,{onSuccess:()=>M(!1),onSignupRedirect:()=>{},onForgotRedirect:()=>{}})})]})})})]})},E=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .pd-root { min-height: 100vh; background: #F6F8FD; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; padding-bottom: 24px; overflow-x: hidden; }

  .pd-nav { position: sticky; top: 0; z-index: 40; background: rgba(246,248,253,0.92); backdrop-filter: blur(20px); border-bottom: 1px solid #E1E7F5; height: 58px; display: flex; align-items: center; justify-content: space-between; padding: 0 28px; }
  .pd-back-btn { display: flex; align-items: center; gap: 6px; background: #fff; border: 1px solid #E1E7F5; border-radius: 10px; padding: 7px 14px; font-size: 13px; font-weight: 600; color: #4B5563; cursor: pointer; font-family: inherit; transition: all 0.15s; box-shadow: 0 1px 4px rgba(11,29,63,0.05); }
  .pd-back-btn:hover { border-color: #2563EB; color: #2563EB; background: #EFF6FF; }
  .pd-crumb { display: flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 600; color: #9CA3AF; }
  .pd-crumb-current { color: #0B1D3F; font-weight: 700; }

  /* ── Hero band: full-width identity strip that hands off into the headline stats ── */
  .pd-hero-band { max-width: 1180px; margin: 20px auto 0; padding: 0 28px; }
  .pd-hero-inner { background: #0B1D3F; border-radius: 22px 22px 0 0; padding: 26px 28px 22px; color: #fff; position: relative; overflow: hidden; }
  .pd-hero-inner::after { content: ''; position: absolute; top: -60px; right: -60px; width: 220px; height: 220px; border-radius: 50%; background: radial-gradient(circle, rgba(37,99,235,0.35), transparent 70%); pointer-events: none; }
  .pd-hero-identity { display: flex; align-items: flex-start; gap: 14px; position: relative; z-index: 1; margin-bottom: 14px; }
  .pd-op-avatar { width: 46px; height: 46px; border-radius: 13px; background: #fff; display: flex; align-items: center; justify-content: center; flex-shrink: 0; overflow: hidden; }
  .pd-hero-heading { min-width: 0; flex: 1; }
  .pd-op-line { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 8px; }
  .pd-hero-badges { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
  .pd-badge { display: inline-flex; align-items: center; gap: 4px; padding: 3px 10px; border-radius: 20px; font-size: 10px; font-weight: 700; white-space: nowrap; }
  .pd-badge-vip { background: rgba(253,230,138,0.18); color: #FDE68A; border: 1px solid rgba(253,230,138,0.35); }
  .pd-badge-biz { background: rgba(191,219,254,0.18); color: #BFDBFE; border: 1px solid rgba(191,219,254,0.35); }

  .pd-plan-title { font-family: 'Sora', sans-serif; font-size: clamp(22px, 3.2vw, 30px); font-weight: 700; line-height: 1.18; letter-spacing: -0.4px; }
  .pd-plan-title-accent { color: #93C5FD; text-transform: capitalize; }
  .pd-plan-desc { font-size: 13.5px; color: rgba(255,255,255,0.65); line-height: 1.7; max-width: 560px; margin-bottom: 12px; position: relative; z-index: 1; }
  .pd-plan-tm { display: inline-flex; gap: 4px; vertical-align: top; margin-left: 6px; top: -0.1em; }
  .pd-tag-sm { display: inline-flex; align-items: center; gap: 3px; background: rgba(255,255,255,0.1); color: #93C5FD; border: 1px solid rgba(147,197,253,0.3); border-radius: 20px; padding: 3px 8px; font-size: 9.5px; font-weight: 800; text-transform: capitalize; white-space: nowrap; line-height: 1; }

  .pd-stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); background: #0B1D3F; border-radius: 0 0 22px 22px; padding: 18px 12px 20px; border-top: 1px solid rgba(255,255,255,0.08); margin-top: 4px; }
  .pd-stat-cell { display: flex; flex-direction: column; align-items: center; gap: 5px; text-align: center; padding: 6px 8px; border-right: 1px solid rgba(255,255,255,0.08); }
  .pd-stat-cell:last-child { border-right: none; }
  .pd-stat-icon { color: #93C5FD; display: flex; }
  .pd-stat-num { font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 700; color: #fff; }
  .pd-stat-lbl { font-size: 10.5px; font-weight: 500; color: rgba(255,255,255,0.5); }

  /* ── Layout: content + sticky purchase sidebar ─────────────────────────── */
  .pd-layout { display: grid; grid-template-columns: 1fr 340px; gap: 20px; align-items: start; max-width: 1180px; margin: 16px auto 0; padding: 0 28px; }
  .pd-main { display: flex; flex-direction: column; gap: 16px; min-width: 0; }

  .pd-panel { background: #fff; border: 1px solid #E1E7F5; border-radius: 18px; overflow: hidden; box-shadow: 0 1px 8px rgba(11,29,63,0.04); }
  .pd-panel-title { padding: 16px 20px; font-size: 12px; font-weight: 700; color: #0B1D3F; text-transform: uppercase; letter-spacing: 0.8px; border-bottom: 1px solid #F1F4FA; }
  .pd-panel-head { padding: 14px; border-bottom: 1px solid #F1F4FA; }

  /* Segmented control replaces full-bleed tab bar — reads as one control, not two buttons */
  .pd-segctl { position: relative; display: grid; grid-template-columns: 1fr 1fr; background: #F1F4FA; border-radius: 12px; padding: 3px; gap: 2px; }
  .pd-seg-btn { position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; gap: 7px; padding: 10px; background: transparent; border: none; font-family: inherit; font-size: 12.5px; font-weight: 700; color: #6B7280; cursor: pointer; border-radius: 9px; transition: color 0.2s; }
  .pd-seg-btn-active { color: #0B1D3F; }
  .pd-seg-thumb { position: absolute; top: 3px; left: 3px; width: calc(50% - 4px); height: calc(100% - 6px); background: #fff; border: 1px solid #E9EDF7; border-radius: 9px; box-shadow: 0 1px 2px rgba(11,29,63,0.06); transition: transform 0.25s cubic-bezier(0.4,0,0.2,1); }
  .pd-seg-thumb-right { transform: translateX(calc(100% + 2px)); }

  /* Specs as a scannable two-column grid instead of a stacked list */
  .pd-spec-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #F1F4FA; }
  .pd-spec-cell { background: #fff; display: flex; flex-direction: column; gap: 4px; padding: 13px 20px; }
  .pd-spec-key { font-size: 11px; color: #9CA3AF; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
  .pd-spec-val { font-size: 14px; font-weight: 700; color: #0B1D3F; text-transform: capitalize; word-break: break-word; }
  .pd-empty-state { padding: 26px 20px; font-size: 13px; color: #9CA3AF; text-align: center; }

  .pd-benefit-list { padding: 8px 20px 16px; }
  .pd-benefit-item { display: flex; align-items: flex-start; gap: 10px; padding: 10px 0; border-bottom: 1px solid #F5F7FB; font-size: 13px; color: #374151; font-weight: 500; line-height: 1.55; }
  .pd-benefit-item:last-child { border-bottom: none; }
  .pd-benefit-dot { width: 8px; height: 8px; border-radius: 50%; background: #2563EB; flex-shrink: 0; margin-top: 5px; box-shadow: 0 0 0 3px #DBEAFE; }

  /* Service info folded into the panel as a quiet footnote instead of a separate floating card */
  .pd-service-note { display: flex; align-items: flex-start; gap: 9px; padding: 14px 20px; border-top: 1px solid #F1F4FA; background: #FAFBFF; color: #6B7280; }
  .pd-service-note svg { flex-shrink: 0; margin-top: 2px; color: #2563EB; }
  .pd-service-note p { font-size: 12.5px; line-height: 1.6; }
  .pd-service-note strong { color: #0B1D3F; font-weight: 700; }

  /* Activation as a connected sequence — order is real information here */
  .pd-steps-panel { padding-bottom: 6px; }
  .pd-steps-track { padding: 18px 20px 20px; }
  .pd-step-node { display: flex; gap: 14px; }
  .pd-step-marker { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
  .pd-step-num { width: 26px; height: 26px; border-radius: 50%; background: #EFF6FF; border: 1.5px solid #BFDBFE; color: #2563EB; font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .pd-step-connector { width: 2px; flex: 1; min-height: 22px; background: #E1E7F5; margin: 3px 0; }
  .pd-step-copy { padding-bottom: 20px; }
  .pd-step-t { font-size: 13.5px; font-weight: 700; color: #0B1D3F; margin-bottom: 3px; }
  .pd-step-d { font-size: 12.5px; color: #6B7280; line-height: 1.55; max-width: 460px; }

  /* ── Purchase sidebar ───────────────────────────────────────────────────── */
  .pd-purchase { position: sticky; top: 78px; align-self: start; }
  .pd-purchase-inner { background: #fff; border: 1px solid #E1E7F5; border-radius: 18px; padding: 18px; box-shadow: 0 4px 24px rgba(11,29,63,0.08); }
  .pd-purchase-head { display: flex; align-items: center; gap: 10px; padding-bottom: 14px; margin-bottom: 14px; border-bottom: 1px solid #F1F4FA; }
  .pd-purchase-op-avatar { width: 30px; height: 30px; border-radius: 9px; background: #fff; border: 1.5px solid #E1E7F5; display: flex; align-items: center; justify-content: center; flex-shrink: 0; overflow: hidden; }
  .pd-purchase-op-name { font-size: 13px; font-weight: 700; color: #0B1D3F; }
  .pd-purchase-op-sub { font-size: 11px; color: #9CA3AF; font-weight: 600; margin-top: 1px; }

  .pd-price-row { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 14px; }
  .pd-price-you-pay { font-size: 10px; font-weight: 800; color: #9CA3AF; text-transform: uppercase; letter-spacing: 1.1px; margin-bottom: 4px; }
  .pd-price-amount { font-family: 'Sora', sans-serif; font-size: 32px; font-weight: 800; color: #0B1D3F; letter-spacing: -1px; line-height: 1; }
  .pd-price-off-badge { display: inline-flex; align-items: center; vertical-align: top; margin-left: 6px; top: -0.2em; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10.5px; font-weight: 800; color: #16A34A; background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 20px; padding: 3px 8px; letter-spacing: 0; white-space: nowrap; }
  .pd-price-was-col { display: flex; flex-direction: column; align-items: flex-end; gap: 5px; padding-top: 3px; }
  .pd-price-strike { font-size: 13px; color: #9CA3AF; text-decoration: line-through; font-weight: 500; }
  .pd-price-save { font-size: 11px; font-weight: 700; color: #16A34A; background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 20px; padding: 2px 8px; white-space: nowrap; }

  .pd-delivery-note { display: flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 600; color: #2563EB; background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 10px; padding: 9px 12px; margin-bottom: 16px; }

    .pd-cost-breakup { background: #FAFBFF; border: 1px solid #E1E7F5; border-radius: 12px; padding: 10px 12px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 6px; }
  .pd-cost-row { display: flex; align-items: center; justify-content: space-between; font-size: 11.5px; font-weight: 600; color: #6B7280; }
  .pd-cost-row span:last-child { color: #0B1D3F; font-weight: 700; }

  .pd-qty-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
  .pd-qty-label { font-size: 12.5px; font-weight: 600; color: #6B7280; }

  .pd-qty-stepper { display: flex; align-items: center; background: #F1F4FA; border-radius: 12px; border: 1px solid #E5E7EB; overflow: hidden; flex-shrink: 0; }
  .pd-qty-btn { width: 32px; height: 36px; background: transparent; border: none; cursor: pointer; color: #374151; display: flex; align-items: center; justify-content: center; transition: background 0.12s; font-family: inherit; }
  .pd-qty-btn:hover:not(:disabled) { background: #E5E7EB; }
  .pd-qty-btn:disabled { opacity: 0.35; cursor: default; }
  .pd-qty-num { min-width: 26px; text-align: center; font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 800; color: #0B1D3F; }

  .pd-total-row { display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-top: 1px dashed #E1E7F5; border-bottom: 1px dashed #E1E7F5; margin-bottom: 16px; font-size: 13px; font-weight: 600; color: #6B7280; }
  .pd-total-amount { font-family: 'Sora', sans-serif; font-size: 17px; font-weight: 800; color: #0B1D3F; }

  .pd-buy-btn { width: 100%; padding: 13px; background: #2563EB; border: none; border-radius: 13px; color: #fff; font-size: 14px; font-weight: 700; font-family: inherit; cursor: pointer; box-shadow: 0 4px 16px rgba(37,99,235,0.28); transition: opacity 0.15s, transform 0.12s; margin-bottom: 9px; }
  .pd-buy-btn:hover { opacity: 0.92; }
  .pd-buy-btn:active { transform: scale(0.98); }

  .pd-cart-btn { width: 100%; display: flex; align-items: center; justify-content: center; gap: 7px; padding: 12px; background: #fff; border: 1.5px solid #2563EB; border-radius: 13px; color: #2563EB; font-size: 13px; font-weight: 700; font-family: inherit; cursor: pointer; transition: all 0.18s; margin-bottom: 14px; }
  .pd-cart-btn:hover { background: #EFF6FF; }
  .pd-cart-btn:disabled { opacity: 0.65; cursor: not-allowed; }
  .pd-cart-btn-added { background: #F0FDF4 !important; border-color: #10B981 !important; color: #059669 !important; }

  /* Trust markers condensed to one row — supporting info, not a competing list */
  .pd-trust-row { display: flex; align-items: center; justify-content: center; gap: 8px; padding-top: 12px; border-top: 1px solid #F1F4FA; flex-wrap: wrap; }
  .pd-trust-item { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #9CA3AF; font-weight: 600; white-space: nowrap; }
  .pd-trust-sep { width: 3px; height: 3px; border-radius: 50%; background: #E1E7F5; }

  /* ── Mobile bottom bar (hidden on desktop; sidebar handles purchase there) ── */
  .pd-mobile-bar { display: none; }

  .pd-center-screen { min-height: 100vh; background: #F6F8FD; display: flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; padding: 16px; }
  .pd-loading-card { background: #fff; border-radius: 20px; border: 1px solid #E1E7F5; padding: 40px 48px; text-align: center; box-shadow: 0 4px 24px rgba(0,0,0,0.06); max-width: 92vw; }
  .pd-spinner { width: 40px; height: 40px; border-radius: 50%; border: 3px solid #DBEAFE; border-top-color: #2563EB; margin: 0 auto 16px; animation: pd-spin 0.75s linear infinite; }
  @keyframes pd-spin { to { transform: rotate(360deg); } }
  .pd-loading-text { font-size: 13px; font-weight: 600; color: #6B7280; }
  .pd-notfound-card { background: #fff; border-radius: 20px; padding: 40px 48px; text-align: center; box-shadow: 0 4px 24px rgba(0,0,0,0.06); max-width: 92vw; }
  .pd-notfound-icon { font-size: 48px; margin-bottom: 14px; }
  .pd-notfound-title { font-size: 18px; font-weight: 700; color: #0B1D3F; margin-bottom: 6px; }
  .pd-notfound-sub { font-size: 13px; color: #9CA3AF; margin-bottom: 20px; }
  .pd-notfound-btn { padding: 10px 24px; border-radius: 12px; border: none; background: #2563EB; color: #fff; font-weight: 700; font-size: 13px; cursor: pointer; font-family: inherit; }

  .pd-overlay { position: fixed; inset: 0; background: rgba(11,29,63,0.55); backdrop-filter: blur(8px); display: flex; align-items: flex-start; justify-content: center; z-index: 1000; padding: 40px 20px; overflow-y: auto; }
  .pd-modal { background: #fff; border-radius: 22px; width: 100%; max-width: 420px; overflow: hidden; box-shadow: 0 24px 64px rgba(0,0,0,0.25); margin: auto 0; }
  .pd-modal-head { background: #0B1D3F; padding: 22px 22px 18px; position: relative; }
  .pd-modal-close { position: absolute; top: 14px; right: 14px; width: 28px; height: 28px; border-radius: 50%; background: rgba(255,255,255,0.15); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #fff; transition: background 0.15s; }
  .pd-modal-close:hover { background: rgba(255,255,255,0.28); }
  .pd-modal-title { font-family: 'Sora', sans-serif; font-size: 19px; font-weight: 700; color: #fff; margin-bottom: 4px; }
  .pd-modal-sub { font-size: 13px; color: rgba(255,255,255,0.65); }
  .pd-modal-tabs { display: flex; margin: 14px 18px 0; background: #F1F4FA; border-radius: 12px; padding: 3px; gap: 3px; }
  .pd-tab-modal { flex: 1; padding: 9px; border-radius: 9px; border: none; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.18s; font-family: inherit; background: transparent; color: #6B7280; }
  .pd-tab-modal-active { background: #2563EB; color: #fff; box-shadow: 0 2px 10px rgba(37,99,235,0.3); }
  .pd-modal-body { padding: 14px 18px 22px; }

  @media (max-width: 900px) {
    .pd-hero-band { padding: 0 16px; }
    .pd-layout { grid-template-columns: 1fr; padding: 0 16px; }
    .pd-purchase { position: static; order: 3; display: none; } /* purchase actions live in the mobile bottom bar instead */
    .pd-mobile-bar { display: flex; position: fixed; bottom: 0; left: 0; right: 0; z-index: 50; background: rgba(255,255,255,0.97); backdrop-filter: blur(20px); border-top: 1px solid #E1E7F5; padding: 10px 14px; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 -4px 20px rgba(0,0,0,0.07); }
    .pd-root { padding-bottom: 90px; }
    .pd-stats-grid { grid-template-columns: repeat(3, 1fr); row-gap: 14px; }
    .pd-stat-cell:nth-child(3) { border-right: none; }
    .pd-spec-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 640px) {
    .pd-nav { padding: 0 14px; height: 52px; }
    .pd-crumb span:not(.pd-crumb-current) { display: none; }
    .pd-crumb svg { display: none; }
    .pd-hero-inner { padding: 20px 18px; border-radius: 18px 18px 0 0; }
    .pd-stats-grid { padding: 16px 8px 18px; border-radius: 0 0 18px 18px; }
    .pd-plan-title { font-size: 21px; }
    .pd-bottom-price-group { flex-shrink: 0; }
    .pd-bottom-label { font-size: 9px; font-weight: 700; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.9px; margin-bottom: 2px; }
    .pd-bottom-price-row { display: flex; align-items: baseline; gap: 6px; flex-wrap: wrap; }
    .pd-bottom-price { font-family: 'Sora', sans-serif; font-size: 19px; font-weight: 800; color: #0B1D3F; }
    .pd-bottom-badge { background: #DCFCE7; color: #14532D; font-size: 10.5px; font-weight: 700; padding: 2px 7px; border-radius: 20px; }
    .pd-bottom-actions { display: flex; align-items: center; gap: 7px; }
    .pd-mobile-bar .pd-cart-btn { width: auto; padding: 10px 12px; margin-bottom: 0; }
    .pd-mobile-bar .pd-buy-btn { width: auto; padding: 10px 18px; margin-bottom: 0; white-space: nowrap; }
    .pd-modal { max-width: 94vw; border-radius: 18px; }
  }
`;export{T as default};