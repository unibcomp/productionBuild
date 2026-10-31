import{n as e,t}from"./signal-BF1jhflH.js";import{t as n}from"./clock-hhsnRVZU.js";import{t as ee}from"./message-square-D4P3b5fE.js";import{t as r}from"./minus-B72wjMmk.js";import{t as i}from"./plus-xSnt_oe-.js";import{t as te}from"./star-CCLomDwz.js";import{t as ne}from"./truck-Dh_SlJ8x.js";import{t as a}from"./wifi-Cg0Qf43_.js";import{At as o,Bt as s,It as c,Mt as re,Nt as ie,Ot as l,Pt as ae,St as u,Tt as d,b as f,ct as p,dt as m,gt as h,h as oe,nt as g,pt as se,wt as ce,x as le,xt as _}from"./index-vJa32OLj.js";import{i as v,n as y,r as b,t as x}from"./bsnllogo-BCTQstb9.js";import{t as S}from"./proxy-C5m7yHzU.js";import{t as ue}from"./AnimatePresence-B6z0mLkV.js";import{t as de}from"./usePlanTypes-jN_l_1hA.js";import{t as fe}from"./useServices-B20P0R2X.js";import{t as pe}from"./usePlans-DjelNmKK.js";import{t as me}from"./useUser-qw9MOG1S.js";import{n as he}from"./useCheckout-Cca-jb-5.js";import{t as ge}from"./usePlanTags-BapwkUtD.js";var _e=d(`qr-code`,[[`rect`,{width:`5`,height:`5`,x:`3`,y:`3`,rx:`1`,key:`1tu5fj`}],[`rect`,{width:`5`,height:`5`,x:`16`,y:`3`,rx:`1`,key:`1v8r4q`}],[`rect`,{width:`5`,height:`5`,x:`3`,y:`16`,rx:`1`,key:`1x03jg`}],[`path`,{d:`M21 16h-3a2 2 0 0 0-2 2v3`,key:`177gqh`}],[`path`,{d:`M21 21v.01`,key:`ents32`}],[`path`,{d:`M12 7v3a2 2 0 0 1-2 2H7`,key:`8crl2c`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M12 3h.01`,key:`n36tog`}],[`path`,{d:`M12 16v.01`,key:`133mhm`}],[`path`,{d:`M16 12h1`,key:`1slzba`}],[`path`,{d:`M21 12v.01`,key:`1lwtk9`}],[`path`,{d:`M12 21v-1`,key:`1880an`}]]),C=d(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),ve=d(`tag`,[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,key:`vktsd0`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`kqv944`}]]),w=s(c(),1);const ye=e=>l({queryKey:e?[`vipCategory`,e]:[`vipCategories`],queryFn:async()=>{try{let t=e?`/vip-category/${e}`:`/vip-category`,{data:n}=await g.get(t);return console.log(`VIP API RESPONSE:`,n),n.data}catch(e){let t=e;throw console.error(`Failed to fetch VIP category:`,e),Error(t.response?.data?.message||t.message||`Something went wrong`)}},enabled:!0,staleTime:300*1e3,retry:2});var T=o(),be=(e=``)=>{let t=e.trim().toLowerCase();if(t.includes(`airtel`))return v;if(t.includes(`bsnl`))return x;if(t.includes(`jio`))return y;if(t===`vi`||t.includes(`vodafone`)||t.includes(`idea`))return b},E={dark:`#0B1D3F`,primary:`#2563EB`,accent:`#93C5FD`,soft:`#EFF6FF`,border:`#BFDBFE`,glow:`rgba(37,99,235,0.35)`},xe=(e=``)=>{let t=e.trim().toLowerCase();return t.includes(`airtel`)?{dark:`#7F0D16`,primary:`#E40000`,accent:`#FCA5A5`,soft:`#FEF2F2`,border:`#FECACA`,glow:`rgba(228,0,0,0.35)`}:t.includes(`jio`)?{dark:`#0A2463`,primary:`#0F3CC9`,accent:`#93C5FD`,soft:`#EFF6FF`,border:`#BFDBFE`,glow:`rgba(15,60,201,0.35)`}:t===`vi`||t.includes(`vodafone`)||t.includes(`idea`)?{dark:`#6B0F2A`,primary:`#E60050`,accent:`#FDE047`,soft:`#FFF1F5`,border:`#FECDD3`,glow:`rgba(230,0,80,0.35)`}:t.includes(`bsnl`)?{dark:`#064E3B`,primary:`#059669`,accent:`#6EE7B7`,soft:`#ECFDF5`,border:`#A7F3D0`,glow:`rgba(5,150,105,0.35)`}:E},D=()=>{let{state:o}=re(),{id:s}=ae(),c=ie(),{data:l,isLoading:d}=pe((0,w.useMemo)(()=>s||o?._id,[s,o?._id])),{data:g}=me(),{data:v}=fe((0,w.useMemo)(()=>typeof l?.serviceId==`string`?l.serviceId:l?.serviceId?._id,[l])),{data:y}=ye(l?.vipCategoryId?._id),{data:b=[]}=ge(),{data:x=[]}=de(),{mutate:E,isPending:D}=oe(),{mutate:Se,isPending:k}=he(),[A,j]=(0,w.useState)(!1),[M,Ce]=(0,w.useState)(!1),[N,P]=(0,w.useState)(1),[F,I]=(0,w.useState)(!1),[L,R]=(0,w.useState)(`specs`),z=(0,w.useMemo)(()=>o?.orderType===`PORT`,[o?.orderType]),we=(0,w.useMemo)(()=>o?.orderType===`ESIM`,[o?.orderType]),B=z||we;if((0,w.useEffect)(()=>(document.body.style.overflow=A?`hidden`:``,()=>{document.body.style.overflow=``}),[A]),d)return(0,T.jsxs)(`div`,{className:`pd-center-screen`,children:[(0,T.jsx)(`style`,{children:O}),(0,T.jsxs)(`div`,{className:`pd-loading-card`,children:[(0,T.jsx)(`div`,{className:`pd-spinner`}),(0,T.jsx)(`p`,{className:`pd-loading-text`,children:`Fetching plan details…`})]})]});if(!l)return(0,T.jsxs)(`div`,{className:`pd-center-screen`,children:[(0,T.jsx)(`style`,{children:O}),(0,T.jsxs)(`div`,{className:`pd-notfound-card`,children:[(0,T.jsx)(`div`,{className:`pd-notfound-icon`,children:`🔍`}),(0,T.jsx)(`h2`,{className:`pd-notfound-title`,children:`Plan not found`}),(0,T.jsx)(`p`,{className:`pd-notfound-sub`,children:`This plan may no longer be available.`}),(0,T.jsx)(`button`,{onClick:()=>c(-1),className:`pd-notfound-btn`,children:`← Go Back`})]})]});let V=v?.[0],H=Array.isArray(y)?y[0]:y,Te=typeof l.planTypeId==`object`?l.planTypeId?._id:l.planTypeId,U=b.filter(e=>l.planTagsId?.includes(e._id)),W=x.find(e=>e._id===Te),G=typeof l.operatorId==`object`?l.operatorId?.name??`Operator`:`Operator`,K=be(G),q=xe(G),Ee={"--op-dark":q.dark,"--op-primary":q.primary,"--op-accent":q.accent,"--op-soft":q.soft,"--op-border":q.border,"--op-glow":q.glow},De=l.simTypes?.includes(`esim`),Oe=l.simTypes?.includes(`physical`),J=De&&!Oe?`esim`:`physical`,Y=((l.salePrice||l.price)+(l.simCost??0)+(l.deliveryCharges??0))*N,X=()=>{if(!g)return j(!0);let e=o?.orderType||`NORMAL`;Se({type:`DIRECT`,planId:l._id,quantity:N},{onSuccess:t=>{c(`/buy-now/${t.sessionId}`,{state:{orderType:e,quantity:N}})}})},Z=()=>{if(!g)return j(!0);E({planId:l._id,quantity:N},{onSuccess:()=>{I(!0),setTimeout(()=>I(!1),2e3)}})},ke=[{icon:(0,T.jsx)(a,{size:16}),num:l.data??`—`,lbl:`Data / Day`},{icon:(0,T.jsx)(n,{size:16}),num:l.validity?`${l.validity}d`:`—`,lbl:`Validity`},{icon:(0,T.jsx)(se,{size:16}),num:l.calls??`—`,lbl:`Calls`},{icon:(0,T.jsx)(ee,{size:16}),num:l.sms??`—`,lbl:`SMS / Day`},{icon:(0,T.jsx)(t,{size:16}),num:l.networkType??`—`,lbl:`Network`}],Q=[{key:`Data`,val:l.data},{key:`Validity`,val:l.validity?`${l.validity} Days`:null},{key:`Calls`,val:l.calls},{key:`SMS`,val:l.sms},{key:`Network`,val:l.networkType},{key:`SIM Type`,val:l.simTypes?.join(` / `)},{key:`Service`,val:V?.name||(typeof l.serviceId==`string`?l.serviceId:l.serviceId?.name)},{key:`Plan Type`,val:W?.name||`N/A`}].filter(e=>e.val),$=J===`esim`?[{t:`Buy & verify`,d:`Complete your purchase and finish KYC verification online.`},{t:`Get your QR`,d:`Your eSIM QR code and activation guide arrive by email.`},{t:`Scan to install`,d:`Scan the QR from your phone's eSIM settings — no physical swap.`},{t:`You're live`,d:`Network activates automatically, usually within minutes.`}]:[{t:`Buy & verify`,d:`Complete your purchase and finish KYC verification online.`},{t:`We ship it`,d:`Your SIM is dispatched to your address, tracked door to door.`},{t:`Install the SIM`,d:`Pop it into your device once it arrives.`},{t:`Activated`,d:`Network activates after verification — typically within a day.`}];return(0,T.jsxs)(`div`,{className:`pd-root`,style:Ee,children:[(0,T.jsx)(`style`,{children:O}),(0,T.jsxs)(`nav`,{className:`pd-nav`,children:[(0,T.jsxs)(`button`,{className:`pd-back-btn`,onClick:()=>c(-1),children:[(0,T.jsx)(ce,{size:14}),` Back`]}),(0,T.jsxs)(`div`,{className:`pd-crumb`,children:[(0,T.jsx)(`span`,{children:`Plans`}),(0,T.jsx)(_,{size:12}),(0,T.jsx)(`span`,{children:V?.name||`Service`}),(0,T.jsx)(_,{size:12}),(0,T.jsx)(`span`,{className:`pd-crumb-current`,children:G})]}),(0,T.jsx)(`div`,{style:{width:78}})]}),(0,T.jsxs)(S.section,{className:`pd-hero-band`,initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.4},children:[(0,T.jsxs)(`div`,{className:`pd-hero-inner`,children:[(0,T.jsxs)(`div`,{className:`pd-hero-identity`,children:[(0,T.jsx)(`div`,{className:`pd-op-avatar`,children:K?(0,T.jsx)(`img`,{src:K,alt:``,style:{width:30,height:30,objectFit:`contain`}}):(0,T.jsx)(`span`,{style:{fontSize:18},children:`📶`})}),(0,T.jsxs)(`div`,{className:`pd-hero-heading`,children:[(H||l.isBusinessSim)&&(0,T.jsx)(`div`,{className:`pd-op-line`,children:(0,T.jsxs)(`span`,{className:`pd-hero-badges`,children:[H&&(0,T.jsxs)(`span`,{className:`pd-badge pd-badge-vip`,children:[`👑 `,H.name]}),l.isBusinessSim&&(0,T.jsxs)(`span`,{className:`pd-badge pd-badge-biz`,children:[(0,T.jsx)(e,{size:11}),` Business`]})]})}),(0,T.jsxs)(`h1`,{className:`pd-plan-title`,children:[G,` `,(0,T.jsx)(`span`,{className:`pd-plan-title-accent`,children:W?.name||l.networkType||`Mobile`}),` Plan`,U.length>0&&(0,T.jsx)(`sup`,{className:`pd-plan-tm`,children:U.map(e=>(0,T.jsxs)(`span`,{className:`pd-tag-sm`,children:[(0,T.jsx)(ve,{size:8}),` `,e.name]},e._id))})]})]})]}),l.description&&(0,T.jsx)(`p`,{className:`pd-plan-desc`,children:l.description})]}),(0,T.jsx)(`div`,{className:`pd-stats-grid`,children:ke.map((e,t)=>(0,T.jsxs)(`div`,{className:`pd-stat-cell`,children:[(0,T.jsx)(`span`,{className:`pd-stat-icon`,children:e.icon}),(0,T.jsx)(`span`,{className:`pd-stat-num`,children:e.num}),(0,T.jsx)(`span`,{className:`pd-stat-lbl`,children:e.lbl})]},t))})]}),(0,T.jsxs)(`div`,{className:`pd-layout`,children:[(0,T.jsxs)(`div`,{className:`pd-main`,children:[(0,T.jsxs)(S.div,{className:`pd-panel`,initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.06,duration:.4},children:[(0,T.jsx)(`div`,{className:`pd-panel-head`,children:(0,T.jsxs)(`div`,{className:`pd-segctl`,role:`tablist`,children:[(0,T.jsxs)(`button`,{role:`tab`,"aria-selected":L===`specs`,className:`pd-seg-btn${L===`specs`?` pd-seg-btn-active`:``}`,onClick:()=>R(`specs`),children:[(0,T.jsx)(C,{size:13}),` Specifications`]}),(0,T.jsxs)(`button`,{role:`tab`,"aria-selected":L===`benefits`,className:`pd-seg-btn${L===`benefits`?` pd-seg-btn-active`:``}`,onClick:()=>R(`benefits`),children:[(0,T.jsx)(te,{size:13}),` Benefits`]}),(0,T.jsx)(`span`,{className:`pd-seg-thumb${L===`benefits`?` pd-seg-thumb-right`:``}`,"aria-hidden":`true`})]})}),L===`specs`?Q.length>0?(0,T.jsx)(`div`,{className:`pd-spec-grid`,children:Q.map((e,t)=>(0,T.jsxs)(`div`,{className:`pd-spec-cell`,children:[(0,T.jsx)(`span`,{className:`pd-spec-key`,children:e.key}),(0,T.jsx)(`span`,{className:`pd-spec-val`,children:e.val})]},t))}):(0,T.jsx)(`div`,{className:`pd-empty-state`,children:`No specifications available`}):l.benefits?.length?(0,T.jsx)(`div`,{className:`pd-benefit-list`,children:l.benefits.map((e,t)=>(0,T.jsxs)(`div`,{className:`pd-benefit-item`,children:[(0,T.jsx)(`div`,{className:`pd-benefit-dot`}),(0,T.jsx)(`span`,{children:e})]},t))}):(0,T.jsx)(`div`,{className:`pd-empty-state`,children:`No benefits listed for this plan`}),V?.description&&(0,T.jsxs)(`div`,{className:`pd-service-note`,children:[(0,T.jsx)(t,{size:14}),(0,T.jsxs)(`p`,{children:[(0,T.jsxs)(`strong`,{children:[V.name||`Service`,`:`]}),` `,V.description]})]})]}),(0,T.jsxs)(S.div,{className:`pd-panel pd-steps-panel`,initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.16,duration:.4},children:[(0,T.jsx)(`div`,{className:`pd-panel-title`,children:`How activation works`}),(0,T.jsx)(`div`,{className:`pd-steps-track`,children:$.map((e,t)=>(0,T.jsxs)(`div`,{className:`pd-step-node`,children:[(0,T.jsxs)(`div`,{className:`pd-step-marker`,children:[(0,T.jsx)(`span`,{className:`pd-step-num`,children:t+1}),t<$.length-1&&(0,T.jsx)(`span`,{className:`pd-step-connector`})]}),(0,T.jsxs)(`div`,{className:`pd-step-copy`,children:[(0,T.jsx)(`div`,{className:`pd-step-t`,children:e.t}),(0,T.jsx)(`div`,{className:`pd-step-d`,children:e.d})]})]},t))})]})]}),(0,T.jsx)(S.aside,{className:`pd-purchase`,initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.1,duration:.4},children:(0,T.jsxs)(`div`,{className:`pd-purchase-inner`,children:[(0,T.jsxs)(`div`,{className:`pd-purchase-head`,children:[(0,T.jsx)(`div`,{className:`pd-purchase-op-avatar`,children:K?(0,T.jsx)(`img`,{src:K,alt:``,style:{width:18,height:18,objectFit:`contain`}}):(0,T.jsx)(`span`,{style:{fontSize:12},children:`📶`})}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`pd-purchase-op-name`,children:G}),(0,T.jsxs)(`div`,{className:`pd-purchase-op-sub`,children:[W?.name||`Prepaid`,` · `,l.validity?`${l.validity} Days`:`—`]})]})]}),(0,T.jsx)(`div`,{className:`pd-price-row`,children:(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`pd-price-you-pay`,children:`Plan Price`}),(0,T.jsxs)(`div`,{className:`pd-price-amount`,children:[`₹`,l.salePrice||l.price]})]})}),(0,T.jsx)(`div`,{className:`pd-delivery-note`,children:J===`esim`?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(_e,{size:14}),` Instant eSIM — activate by QR code, no physical delivery`]}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(ne,{size:14}),` Physical SIM — delivered to your address`]})}),(0,T.jsxs)(`div`,{className:`pd-cost-breakup`,children:[(0,T.jsxs)(`div`,{className:`pd-cost-row`,children:[(0,T.jsx)(`span`,{children:`Recharge Plan Cost`}),(0,T.jsxs)(`span`,{children:[`₹`,l.salePrice||l.price||0]})]}),(0,T.jsxs)(`div`,{className:`pd-cost-row`,children:[(0,T.jsx)(`span`,{children:`SIM Cost`}),(0,T.jsxs)(`span`,{children:[`₹`,l.simCost??0]})]}),(0,T.jsxs)(`div`,{className:`pd-cost-row`,children:[(0,T.jsx)(`span`,{children:`Delivery Charges`}),(0,T.jsxs)(`span`,{children:[`₹`,l.deliveryCharges??0]})]})]}),!B&&(0,T.jsxs)(`div`,{className:`pd-qty-row`,children:[(0,T.jsx)(`span`,{className:`pd-qty-label`,children:`Quantity`}),(0,T.jsxs)(`div`,{className:`pd-qty-stepper`,children:[(0,T.jsx)(`button`,{className:`pd-qty-btn`,onClick:()=>P(e=>Math.max(1,e-1)),disabled:N<=1,children:(0,T.jsx)(r,{size:13})}),(0,T.jsx)(`span`,{className:`pd-qty-num`,children:N}),(0,T.jsx)(`button`,{className:`pd-qty-btn`,onClick:()=>P(e=>Math.min(10,e+1)),disabled:N>=10,children:(0,T.jsx)(i,{size:13})})]})]}),(0,T.jsxs)(`div`,{className:`pd-total-row`,children:[(0,T.jsx)(`span`,{children:`Total`}),(0,T.jsxs)(`span`,{className:`pd-total-amount`,children:[`₹`,Y]})]}),(0,T.jsx)(`button`,{className:`pd-buy-btn`,onClick:X,disabled:k,children:k?`Processing…`:z?`Port Now →`:`Buy Now →`}),!B&&(0,T.jsx)(`button`,{className:`pd-cart-btn${F?` pd-cart-btn-added`:``}`,onClick:Z,disabled:D,children:F?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(u,{size:15}),` Added to cart`]}):D?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(m,{size:15}),` Adding…`]}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(m,{size:15}),` Add to Cart`]})}),(0,T.jsxs)(`div`,{className:`pd-trust-row`,children:[(0,T.jsxs)(`span`,{className:`pd-trust-item`,children:[(0,T.jsx)(h,{size:12}),` Encrypted checkout`]}),(0,T.jsx)(`span`,{className:`pd-trust-sep`}),(0,T.jsxs)(`span`,{className:`pd-trust-item`,children:[(0,T.jsx)(C,{size:12}),` DoT & TRAI compliant`]})]})]})})]}),(0,T.jsxs)(`div`,{className:`pd-mobile-bar`,children:[(0,T.jsxs)(`div`,{className:`pd-bottom-price-group`,children:[(0,T.jsx)(`div`,{className:`pd-bottom-label`,children:`Total`}),(0,T.jsx)(`div`,{className:`pd-bottom-price-row`,children:(0,T.jsxs)(`span`,{className:`pd-bottom-price`,children:[`₹`,Y]})})]}),(0,T.jsxs)(`div`,{className:`pd-bottom-actions`,children:[!B&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(`div`,{className:`pd-qty-stepper`,children:[(0,T.jsx)(`button`,{className:`pd-qty-btn`,onClick:()=>P(e=>Math.max(1,e-1)),disabled:N<=1,children:(0,T.jsx)(r,{size:13})}),(0,T.jsx)(`span`,{className:`pd-qty-num`,children:N}),(0,T.jsx)(`button`,{className:`pd-qty-btn`,onClick:()=>P(e=>Math.min(10,e+1)),disabled:N>=10,children:(0,T.jsx)(i,{size:13})})]}),(0,T.jsx)(`button`,{className:`pd-cart-btn${F?` pd-cart-btn-added`:``}`,onClick:Z,disabled:D,children:F?(0,T.jsx)(u,{size:15}):(0,T.jsx)(m,{size:15})})]}),(0,T.jsx)(`button`,{className:`pd-buy-btn`,onClick:X,disabled:k,children:k?`Processing…`:z?`Port Now →`:`Buy Now →`})]})]}),(0,T.jsx)(ue,{children:A&&(0,T.jsx)(S.div,{className:`pd-overlay`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,T.jsxs)(S.div,{className:`pd-modal`,initial:{opacity:0,scale:.94,y:24},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.94,y:24},transition:{duration:.22},children:[(0,T.jsxs)(`div`,{className:`pd-modal-head`,children:[(0,T.jsx)(`button`,{className:`pd-modal-close`,onClick:()=>j(!1),children:(0,T.jsx)(p,{size:14})}),(0,T.jsx)(`h3`,{className:`pd-modal-title`,children:M?`Create Account`:`Welcome Back`}),(0,T.jsx)(`p`,{className:`pd-modal-sub`,children:M?`Sign up to complete your purchase`:`Log in to complete your purchase`})]}),(0,T.jsx)(`div`,{className:`pd-modal-tabs`,children:[`login`,`signup`].map(e=>(0,T.jsx)(`button`,{className:`pd-tab-modal${e===(M?`signup`:`login`)?` pd-tab-modal-active`:``}`,onClick:()=>Ce(e===`signup`),children:e===`login`?`Login`:`Sign Up`},e))}),(0,T.jsx)(`div`,{className:`pd-modal-body`,children:M?(0,T.jsx)(le,{onSuccess:()=>j(!1)}):(0,T.jsx)(f,{onSuccess:()=>j(!1),onSignupRedirect:()=>{},onForgotRedirect:()=>{}})})]})})})]})},O=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* Fallback theme (overridden inline on .pd-root per operator) */
  .pd-root { --op-dark: #0B1D3F; --op-primary: #2563EB; --op-accent: #93C5FD; --op-soft: #EFF6FF; --op-border: #BFDBFE; --op-glow: rgba(37,99,235,0.35); }

  .pd-root { min-height: 100vh; background: #F6F8FD; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; padding-bottom: 24px; overflow-x: hidden; }

  .pd-nav { position: sticky; top: 0; z-index: 40; background: rgba(246,248,253,0.92); backdrop-filter: blur(20px); border-bottom: 1px solid #E1E7F5; height: 58px; display: flex; align-items: center; justify-content: space-between; padding: 0 28px; }
  .pd-back-btn { display: flex; align-items: center; gap: 6px; background: #fff; border: 1px solid #E1E7F5; border-radius: 10px; padding: 7px 14px; font-size: 13px; font-weight: 600; color: #4B5563; cursor: pointer; font-family: inherit; transition: all 0.15s; box-shadow: 0 1px 4px rgba(11,29,63,0.05); }
  .pd-back-btn:hover { border-color: var(--op-primary); color: var(--op-primary); background: var(--op-soft); }
  .pd-crumb { display: flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 600; color: #9CA3AF; }
  .pd-crumb-current { color: var(--op-dark); font-weight: 700; }

  /* ── Hero band: full-width identity strip that hands off into the headline stats ── */
  .pd-hero-band { max-width: 1180px; margin: 20px auto 0; padding: 0 28px; }
  .pd-hero-inner { background: var(--op-dark); border-radius: 22px 22px 0 0; padding: 26px 28px 22px; color: #fff; position: relative; overflow: hidden; }
  .pd-hero-inner::after { content: ''; position: absolute; top: -60px; right: -60px; width: 220px; height: 220px; border-radius: 50%; background: radial-gradient(circle, var(--op-glow), transparent 70%); pointer-events: none; }
  .pd-hero-identity { display: flex; align-items: flex-start; gap: 14px; position: relative; z-index: 1; margin-bottom: 14px; }
  .pd-op-avatar { width: 46px; height: 46px; border-radius: 13px; background: #fff; display: flex; align-items: center; justify-content: center; flex-shrink: 0; overflow: hidden; }
  .pd-hero-heading { min-width: 0; flex: 1; }
  .pd-op-line { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 8px; }
  .pd-hero-badges { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
  .pd-badge { display: inline-flex; align-items: center; gap: 4px; padding: 3px 10px; border-radius: 20px; font-size: 10px; font-weight: 700; white-space: nowrap; }
  .pd-badge-vip { background: rgba(253,230,138,0.18); color: #FDE68A; border: 1px solid rgba(253,230,138,0.35); }
  .pd-badge-biz { background: rgba(191,219,254,0.18); color: #BFDBFE; border: 1px solid rgba(191,219,254,0.35); }

  .pd-plan-title { font-family: 'Sora', sans-serif; font-size: clamp(22px, 3.2vw, 30px); font-weight: 700; line-height: 1.18; letter-spacing: -0.4px; }
  .pd-plan-title-accent { color: var(--op-accent); text-transform: capitalize; }
  .pd-plan-desc { font-size: 13.5px; color: rgba(255,255,255,0.65); line-height: 1.7; max-width: 560px; margin-bottom: 12px; position: relative; z-index: 1; }
  .pd-plan-tm { display: inline-flex; gap: 4px; vertical-align: top; margin-left: 6px; top: -0.1em; }
  .pd-tag-sm { display: inline-flex; align-items: center; gap: 3px; background: rgba(255,255,255,0.1); color: var(--op-accent); border: 1px solid rgba(255,255,255,0.25); border-radius: 20px; padding: 3px 8px; font-size: 9.5px; font-weight: 800; text-transform: capitalize; white-space: nowrap; line-height: 1; }

  .pd-stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); background: var(--op-dark); border-radius: 0 0 22px 22px; padding: 18px 12px 20px; border-top: 1px solid rgba(255,255,255,0.08); margin-top: 4px; }
  .pd-stat-cell { display: flex; flex-direction: column; align-items: center; gap: 5px; text-align: center; padding: 6px 8px; border-right: 1px solid rgba(255,255,255,0.08); }
  .pd-stat-cell:last-child { border-right: none; }
  .pd-stat-icon { color: var(--op-accent); display: flex; }
  .pd-stat-num { font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 700; color: #fff; }
  .pd-stat-lbl { font-size: 10.5px; font-weight: 500; color: rgba(255,255,255,0.5); }

  /* ── Layout: content + sticky purchase sidebar ─────────────────────────── */
  .pd-layout { display: grid; grid-template-columns: 1fr 340px; gap: 20px; align-items: start; max-width: 1180px; margin: 16px auto 0; padding: 0 28px; }
  .pd-main { display: flex; flex-direction: column; gap: 16px; min-width: 0; }

  .pd-panel { background: #fff; border: 1px solid #E1E7F5; border-radius: 18px; overflow: hidden; box-shadow: 0 1px 8px rgba(11,29,63,0.04); }
  .pd-panel-title { padding: 16px 20px; font-size: 12px; font-weight: 700; color: var(--op-dark); text-transform: uppercase; letter-spacing: 0.8px; border-bottom: 1px solid #F1F4FA; }
  .pd-panel-head { padding: 14px; border-bottom: 1px solid #F1F4FA; }

  /* Segmented control replaces full-bleed tab bar — reads as one control, not two buttons */
  .pd-segctl { position: relative; display: grid; grid-template-columns: 1fr 1fr; background: #F1F4FA; border-radius: 12px; padding: 3px; gap: 2px; }
  .pd-seg-btn { position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; gap: 7px; padding: 10px; background: transparent; border: none; font-family: inherit; font-size: 12.5px; font-weight: 700; color: #6B7280; cursor: pointer; border-radius: 9px; transition: color 0.2s; }
  .pd-seg-btn-active { color: var(--op-primary); }
  .pd-seg-thumb { position: absolute; top: 3px; left: 3px; width: calc(50% - 4px); height: calc(100% - 6px); background: #fff; border: 1px solid #E9EDF7; border-radius: 9px; box-shadow: 0 1px 2px rgba(11,29,63,0.06); transition: transform 0.25s cubic-bezier(0.4,0,0.2,1); }
  .pd-seg-thumb-right { transform: translateX(calc(100% + 2px)); }

  /* Specs as a scannable two-column grid instead of a stacked list */
  .pd-spec-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #F1F4FA; }
  .pd-spec-cell { background: #fff; display: flex; flex-direction: column; gap: 4px; padding: 13px 20px; }
  .pd-spec-key { font-size: 11px; color: #9CA3AF; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
  .pd-spec-val { font-size: 14px; font-weight: 700; color: var(--op-dark); text-transform: capitalize; word-break: break-word; }
  .pd-empty-state { padding: 26px 20px; font-size: 13px; color: #9CA3AF; text-align: center; }

  .pd-benefit-list { padding: 8px 20px 16px; }
  .pd-benefit-item { display: flex; align-items: flex-start; gap: 10px; padding: 10px 0; border-bottom: 1px solid #F5F7FB; font-size: 13px; color: #374151; font-weight: 500; line-height: 1.55; }
  .pd-benefit-item:last-child { border-bottom: none; }
  .pd-benefit-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--op-primary); flex-shrink: 0; margin-top: 5px; box-shadow: 0 0 0 3px var(--op-border); }

  /* Service info folded into the panel as a quiet footnote instead of a separate floating card */
  .pd-service-note { display: flex; align-items: flex-start; gap: 9px; padding: 14px 20px; border-top: 1px solid #F1F4FA; background: #FAFBFF; color: #6B7280; }
  .pd-service-note svg { flex-shrink: 0; margin-top: 2px; color: var(--op-primary); }
  .pd-service-note p { font-size: 12.5px; line-height: 1.6; }
  .pd-service-note strong { color: var(--op-dark); font-weight: 700; }

  /* Activation as a connected sequence — order is real information here */
  .pd-steps-panel { padding-bottom: 6px; }
  .pd-steps-track { padding: 18px 20px 20px; }
  .pd-step-node { display: flex; gap: 14px; }
  .pd-step-marker { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
  .pd-step-num { width: 26px; height: 26px; border-radius: 50%; background: var(--op-soft); border: 1.5px solid var(--op-border); color: var(--op-primary); font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .pd-step-connector { width: 2px; flex: 1; min-height: 22px; background: #E1E7F5; margin: 3px 0; }
  .pd-step-copy { padding-bottom: 20px; }
  .pd-step-t { font-size: 13.5px; font-weight: 700; color: var(--op-dark); margin-bottom: 3px; }
  .pd-step-d { font-size: 12.5px; color: #6B7280; line-height: 1.55; max-width: 460px; }

  /* ── Purchase sidebar ───────────────────────────────────────────────────── */
  .pd-purchase { position: sticky; top: 78px; align-self: start; }
  .pd-purchase-inner { background: #fff; border: 1px solid #E1E7F5; border-radius: 18px; padding: 18px; box-shadow: 0 4px 24px rgba(11,29,63,0.08); }
  .pd-purchase-head { display: flex; align-items: center; gap: 10px; padding-bottom: 14px; margin-bottom: 14px; border-bottom: 1px solid #F1F4FA; }
  .pd-purchase-op-avatar { width: 30px; height: 30px; border-radius: 9px; background: #fff; border: 1.5px solid var(--op-border); display: flex; align-items: center; justify-content: center; flex-shrink: 0; overflow: hidden; }
  .pd-purchase-op-name { font-size: 13px; font-weight: 700; color: var(--op-dark); }
  .pd-purchase-op-sub { font-size: 11px; color: #9CA3AF; font-weight: 600; margin-top: 1px; }

  .pd-price-row { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 14px; }
  .pd-price-you-pay { font-size: 10px; font-weight: 800; color: #9CA3AF; text-transform: uppercase; letter-spacing: 1.1px; margin-bottom: 4px; }
  .pd-price-amount { font-family: 'Sora', sans-serif; font-size: 32px; font-weight: 800; color: var(--op-dark); letter-spacing: -1px; line-height: 1; }
  .pd-price-off-badge { display: inline-flex; align-items: center; vertical-align: top; margin-left: 6px; top: -0.2em; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10.5px; font-weight: 800; color: #16A34A; background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 20px; padding: 3px 8px; letter-spacing: 0; white-space: nowrap; }
  .pd-price-was-col { display: flex; flex-direction: column; align-items: flex-end; gap: 5px; padding-top: 3px; }
  .pd-price-strike { font-size: 13px; color: #9CA3AF; text-decoration: line-through; font-weight: 500; }
  .pd-price-save { font-size: 11px; font-weight: 700; color: #16A34A; background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 20px; padding: 2px 8px; white-space: nowrap; }

  .pd-delivery-note { display: flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 600; color: var(--op-primary); background: var(--op-soft); border: 1px solid var(--op-border); border-radius: 10px; padding: 9px 12px; margin-bottom: 16px; }

  .pd-cost-breakup { background: #FAFBFF; border: 1px solid #E1E7F5; border-radius: 12px; padding: 10px 12px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 6px; }
  .pd-cost-row { display: flex; align-items: center; justify-content: space-between; font-size: 11.5px; font-weight: 600; color: #6B7280; }
  .pd-cost-row span:last-child { color: var(--op-dark); font-weight: 700; }

  .pd-qty-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
  .pd-qty-label { font-size: 12.5px; font-weight: 600; color: #6B7280; }

  .pd-qty-stepper { display: flex; align-items: center; background: #F1F4FA; border-radius: 12px; border: 1px solid #E5E7EB; overflow: hidden; flex-shrink: 0; }
  .pd-qty-btn { width: 32px; height: 36px; background: transparent; border: none; cursor: pointer; color: #374151; display: flex; align-items: center; justify-content: center; transition: background 0.12s; font-family: inherit; }
  .pd-qty-btn:hover:not(:disabled) { background: #E5E7EB; }
  .pd-qty-btn:disabled { opacity: 0.35; cursor: default; }
  .pd-qty-num { min-width: 26px; text-align: center; font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 800; color: var(--op-dark); }

  .pd-total-row { display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-top: 1px dashed #E1E7F5; border-bottom: 1px dashed #E1E7F5; margin-bottom: 16px; font-size: 13px; font-weight: 600; color: #6B7280; }
  .pd-total-amount { font-family: 'Sora', sans-serif; font-size: 17px; font-weight: 800; color: var(--op-dark); }

  .pd-buy-btn { width: 100%; padding: 13px; background: var(--op-primary); border: none; border-radius: 13px; color: #fff; font-size: 14px; font-weight: 700; font-family: inherit; cursor: pointer; box-shadow: 0 4px 16px color-mix(in srgb, var(--op-primary) 30%, transparent); transition: opacity 0.15s, transform 0.12s; margin-bottom: 9px; }
  .pd-buy-btn:hover { opacity: 0.92; }
  .pd-buy-btn:active { transform: scale(0.98); }
  .pd-buy-btn:disabled { opacity: 0.65; cursor: not-allowed; }

  .pd-cart-btn { width: 100%; display: flex; align-items: center; justify-content: center; gap: 7px; padding: 12px; background: #fff; border: 1.5px solid var(--op-primary); border-radius: 13px; color: var(--op-primary); font-size: 13px; font-weight: 700; font-family: inherit; cursor: pointer; transition: all 0.18s; margin-bottom: 14px; }
  .pd-cart-btn:hover { background: var(--op-soft); }
  .pd-cart-btn:disabled { opacity: 0.65; cursor: not-allowed; }
  .pd-cart-btn-added { background: #F0FDF4 !important; border-color: #10B981 !important; color: #059669 !important; }

  /* Trust markers condensed to one row — supporting info, not a competing list */
  .pd-trust-row { display: flex; align-items: center; justify-content: center; gap: 8px; padding-top: 12px; border-top: 1px solid #F1F4FA; flex-wrap: wrap; }
  .pd-trust-item { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #9CA3AF; font-weight: 600; white-space: nowrap; }
  .pd-trust-sep { width: 3px; height: 3px; border-radius: 50%; background: #E1E7F5; }

  /* ── Mobile bottom bar (hidden on desktop; sidebar handles purchase there) ── */
  .pd-mobile-bar { display: none; }

  /* Loading / not-found screens render before the operator is known, so they stay neutral blue */
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
  .pd-modal-head { background: var(--op-dark); padding: 22px 22px 18px; position: relative; }
  .pd-modal-close { position: absolute; top: 14px; right: 14px; width: 28px; height: 28px; border-radius: 50%; background: rgba(255,255,255,0.15); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #fff; transition: background 0.15s; }
  .pd-modal-close:hover { background: rgba(255,255,255,0.28); }
  .pd-modal-title { font-family: 'Sora', sans-serif; font-size: 19px; font-weight: 700; color: #fff; margin-bottom: 4px; }
  .pd-modal-sub { font-size: 13px; color: rgba(255,255,255,0.65); }
  .pd-modal-tabs { display: flex; margin: 14px 18px 0; background: #F1F4FA; border-radius: 12px; padding: 3px; gap: 3px; }
  .pd-tab-modal { flex: 1; padding: 9px; border-radius: 9px; border: none; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.18s; font-family: inherit; background: transparent; color: #6B7280; }
  .pd-tab-modal-active { background: var(--op-primary); color: #fff; box-shadow: 0 2px 10px color-mix(in srgb, var(--op-primary) 30%, transparent); }
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
    .pd-bottom-price { font-family: 'Sora', sans-serif; font-size: 19px; font-weight: 800; color: var(--op-dark); }
    .pd-bottom-badge { background: #DCFCE7; color: #14532D; font-size: 10.5px; font-weight: 700; padding: 2px 7px; border-radius: 20px; }
    .pd-bottom-actions { display: flex; align-items: center; gap: 7px; }
    .pd-mobile-bar .pd-cart-btn { width: auto; padding: 10px 12px; margin-bottom: 0; }
    .pd-mobile-bar .pd-buy-btn { width: auto; padding: 10px 18px; margin-bottom: 0; white-space: nowrap; }
    .pd-modal { max-width: 94vw; border-radius: 18px; }
  }
`;export{D as default};