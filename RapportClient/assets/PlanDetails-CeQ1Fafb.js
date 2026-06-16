import{t as e}from"./arrow-left-BmzUGWYv.js";import{t}from"./clock-Dk0bEBf5.js";import{t as n}from"./message-square-BInLBbPn.js";import{n as r,t as ee}from"./plus-P8AB5_ro.js";import{t as te}from"./phone-CSMzC8Wt.js";import{t as i}from"./wifi-DERkr7tz.js";import{t as a}from"./zap-mcDzZulZ.js";import{E as o,G as s,I as c,J as l,K as u,M as d,N as f,O as p,Q as m,T as ne,V as h,W as g,b as _,z as v}from"./index-Bl6eECK3.js";import{t as y}from"./proxy-Cl9JaOxs.js";import{t as b}from"./AnimatePresence-KoFkWR8B.js";import{t as x}from"./usePlans-CLaqMPXA.js";import{t as S}from"./useServices-CQZQFjxA.js";import{t as C}from"./usePlanTypes-HGVHqEM3.js";import{t as re}from"./useUser-B-rqvtUN.js";import{n as ie}from"./useCheckout-B-I34WyF.js";import{t as ae}from"./useOperators-C3T1bQ7Q.js";import{t as oe}from"./usePlanTags-Bm2ocr9X.js";var se=c(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),ce=c(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),w=c(`signal`,[[`path`,{d:`M2 20h.01`,key:`4haj6o`}],[`path`,{d:`M7 20v-4`,key:`j294jx`}],[`path`,{d:`M12 20v-8`,key:`i3yub9`}],[`path`,{d:`M17 20V8`,key:`1tkaf5`}],[`path`,{d:`M22 4v16`,key:`sih9yq`}]]),T=c(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),E=c(`tag`,[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,key:`vktsd0`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`kqv944`}]]),D=m(l(),1);const O=e=>v({queryKey:e?[`vipCategory`,e]:[`vipCategories`],queryFn:async()=>{try{let t=e?`/vip-category/${e}`:`/vip-category`,{data:n}=await p.get(t);return console.log(`VIP API RESPONSE:`,n),n.data}catch(e){throw console.error(`Failed to fetch VIP category:`,e),Error(e?.response?.data?.message||e.message||`Something went wrong`)}},enabled:!0,staleTime:300*1e3,retry:2});var k=h(),A=()=>{let{state:c}=g(),{id:l}=u(),p=s(),{data:m,isLoading:h}=x(l||c?._id),{data:v}=re(),{data:A}=S(m?.serviceId),{data:M}=O(m?.vipCategoryId?._id),{data:N}=ae(m?.operatorId?._id),{data:P=[]}=oe(),{data:F=[]}=C(),{mutate:I,isPending:L}=_(),{mutate:R,isPending:z}=ie(),[le,B]=(0,D.useState)(!1),[V,H]=(0,D.useState)(!1),[U,W]=(0,D.useState)(1),[G,K]=(0,D.useState)(!1),q=c?.orderType===`PORT`,ue=c?.orderType===`ESIM`,de=q||ue;if(h)return(0,k.jsxs)(`div`,{className:`pd-center-screen`,children:[(0,k.jsx)(`style`,{children:j}),(0,k.jsxs)(`div`,{className:`pd-loading-card`,children:[(0,k.jsx)(`div`,{className:`pd-spinner`}),(0,k.jsx)(`p`,{className:`pd-loading-text`,children:`Fetching plan details…`})]})]});if(!m)return(0,k.jsxs)(`div`,{className:`pd-center-screen`,children:[(0,k.jsx)(`style`,{children:j}),(0,k.jsxs)(`div`,{className:`pd-notfound-card`,children:[(0,k.jsx)(`div`,{className:`pd-notfound-icon`,children:`🔍`}),(0,k.jsx)(`h2`,{className:`pd-notfound-title`,children:`Plan not found`}),(0,k.jsx)(`p`,{className:`pd-notfound-sub`,children:`This plan may no longer be available.`}),(0,k.jsx)(`button`,{onClick:()=>p(-1),className:`pd-notfound-btn`,children:`← Go Back`})]})]});let J=P.filter(e=>m.planTagsId?.includes(e._id)),Y=F.find(e=>e._id===m.planTypeId),fe=()=>{if(!v)return B(!0);let e=c?.orderType||`NORMAL`;R({type:`DIRECT`,planId:m._id,quantity:U},{onSuccess:t=>{p(`/buy-now/${t.sessionId}`,{state:{orderType:e,quantity:U}})}})},pe=()=>{if(!v)return B(!0);I({planId:m._id,quantity:U},{onSuccess:()=>{K(!0),setTimeout(()=>K(!1),2e3)}})},X=m.salePrice&&m.price?Math.round((m.price-m.salePrice)/m.price*100):null,Z=N?.name||`Operator`,Q=N?.logo,me=[{icon:(0,k.jsx)(i,{size:16}),num:m.data??`—`,lbl:`Data / Day`,color:`#3B82F6`},{icon:(0,k.jsx)(t,{size:16}),num:m.validity?`${m.validity}d`:`—`,lbl:`Validity`,color:`#8B5CF6`},{icon:(0,k.jsx)(te,{size:16}),num:m.calls??`—`,lbl:`Calls`,color:`#10B981`},{icon:(0,k.jsx)(n,{size:16}),num:m.sms??`—`,lbl:`SMS / Day`,color:`#F59E0B`},{icon:(0,k.jsx)(w,{size:16}),num:m.networkType??`—`,lbl:`Network`,color:`#EF4444`}],$=[{key:`Data`,val:m.data},{key:`Validity`,val:m.validity?`${m.validity} Days`:null},{key:`Calls`,val:m.calls},{key:`SMS`,val:m.sms},{key:`Network`,val:m.networkType},{key:`Service`,val:A?.name||m.serviceId},{key:`Plan Type`,val:Y?.name||`N/A`}].filter(e=>e.val);return(0,k.jsxs)(`div`,{className:`pd-root`,children:[(0,k.jsx)(`style`,{children:j}),(0,k.jsxs)(`nav`,{className:`pd-nav`,children:[(0,k.jsxs)(`button`,{className:`pd-back-btn`,onClick:()=>p(-1),children:[(0,k.jsx)(e,{size:14}),` Back`]}),(0,k.jsx)(`div`,{className:`pd-nav-center`,children:(0,k.jsx)(`span`,{className:`pd-nav-label`,children:`Plan Details`})}),(0,k.jsx)(`div`,{style:{width:38}})]}),(0,k.jsxs)(y.div,{className:`pd-hero-card`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.42},children:[(0,k.jsxs)(`div`,{className:`pd-hero-top`,children:[(0,k.jsxs)(`div`,{className:`pd-op-group`,children:[(0,k.jsx)(`div`,{className:`pd-op-avatar`,children:Q?(0,k.jsx)(`img`,{src:Q,alt:``,style:{width:32,height:32,objectFit:`contain`}}):(0,k.jsx)(`span`,{style:{fontSize:20},children:`📶`})}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`div`,{className:`pd-op-name`,children:Z}),(0,k.jsx)(`div`,{className:`pd-op-sub`,children:Y?.name||A?.name||`Prepaid`})]})]}),(0,k.jsxs)(`div`,{className:`pd-hero-badges`,children:[M&&(0,k.jsxs)(`span`,{className:`pd-badge pd-badge-vip`,children:[`👑 `,M.name]}),X&&(0,k.jsxs)(`span`,{className:`pd-badge pd-badge-disc`,children:[X,`% OFF`]})]})]}),(0,k.jsxs)(`div`,{className:`pd-hero-body`,children:[(0,k.jsxs)(`div`,{className:`pd-hero-info`,children:[(0,k.jsxs)(`h1`,{className:`pd-plan-title`,children:[Z,(0,k.jsxs)(`span`,{className:`pd-plan-title-accent`,children:[` `,Y?.name||m.networkType||`Mobile`]}),(0,k.jsx)(`br`,{}),`Plan`]}),m.description&&(0,k.jsx)(`p`,{className:`pd-plan-desc`,children:m.description}),J.length>0&&(0,k.jsx)(`div`,{className:`pd-tags-row`,children:J.map(e=>(0,k.jsxs)(`span`,{className:`pd-tag`,children:[(0,k.jsx)(E,{size:10}),` `,e.name]},e._id))})]}),(0,k.jsxs)(`div`,{className:`pd-price-block`,children:[(0,k.jsx)(`div`,{className:`pd-price-you-pay`,children:`You Pay`}),(0,k.jsxs)(`div`,{className:`pd-price-amount`,children:[`₹`,m.salePrice||m.price]}),m.salePrice&&(0,k.jsxs)(`div`,{className:`pd-price-was`,children:[(0,k.jsxs)(`span`,{className:`pd-price-strike`,children:[`₹`,m.price]}),(0,k.jsxs)(`span`,{className:`pd-price-save`,children:[`Save ₹`,m.price-m.salePrice]})]})]})]})]}),(0,k.jsx)(y.div,{className:`pd-stats-row`,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.35},children:me.map((e,t)=>(0,k.jsxs)(`div`,{className:`pd-stat-card`,children:[(0,k.jsx)(`div`,{className:`pd-stat-icon`,style:{color:e.color,background:`${e.color}15`},children:e.icon}),(0,k.jsx)(`div`,{className:`pd-stat-num`,children:e.num}),(0,k.jsx)(`div`,{className:`pd-stat-lbl`,children:e.lbl})]},t))}),(0,k.jsxs)(y.div,{className:`pd-details-grid`,initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{delay:.18,duration:.36},children:[(0,k.jsxs)(`div`,{className:`pd-detail-card`,children:[(0,k.jsxs)(`div`,{className:`pd-detail-header`,children:[(0,k.jsx)(`div`,{className:`pd-detail-header-icon`,style:{background:`#EFF6FF`,color:`#3B82F6`},children:(0,k.jsx)(ce,{size:14})}),(0,k.jsx)(`span`,{children:`Plan Specifications`})]}),(0,k.jsx)(`div`,{className:`pd-spec-list`,children:$.length>0?$.map((e,t)=>(0,k.jsxs)(y.div,{className:`pd-spec-item`,initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.24+t*.04},children:[(0,k.jsx)(`span`,{className:`pd-spec-key`,children:e.key}),(0,k.jsx)(`span`,{className:`pd-spec-val`,children:e.val})]},t)):(0,k.jsx)(`div`,{className:`pd-empty-state`,children:`No specifications available`})})]}),(0,k.jsxs)(`div`,{className:`pd-detail-card`,children:[(0,k.jsxs)(`div`,{className:`pd-detail-header`,children:[(0,k.jsx)(`div`,{className:`pd-detail-header-icon`,style:{background:`#F0FDF4`,color:`#10B981`},children:(0,k.jsx)(T,{size:14})}),(0,k.jsx)(`span`,{children:`Benefits Included`})]}),(0,k.jsx)(`div`,{className:`pd-benefit-list`,children:m.benefits?.length?m.benefits.map((e,t)=>(0,k.jsxs)(y.div,{className:`pd-benefit-item`,initial:{opacity:0,x:10},animate:{opacity:1,x:0},transition:{delay:.24+t*.05},children:[(0,k.jsx)(`div`,{className:`pd-benefit-dot`}),(0,k.jsx)(`span`,{children:e})]},t)):(0,k.jsx)(`div`,{className:`pd-empty-state`,children:`No benefits listed for this plan`})})]})]}),A&&A.description&&(0,k.jsxs)(y.div,{className:`pd-service-banner`,initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:[(0,k.jsx)(`div`,{className:`pd-service-icon-box`,children:(0,k.jsx)(a,{size:16})}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`div`,{className:`pd-service-label`,children:`Service Info`}),(0,k.jsx)(`p`,{className:`pd-service-desc`,children:A.description})]})]}),(0,k.jsx)(`div`,{style:{height:110}}),(0,k.jsxs)(`div`,{className:`pd-bottom-bar`,children:[(0,k.jsxs)(`div`,{className:`pd-bottom-price-group`,children:[(0,k.jsx)(`div`,{className:`pd-bottom-label`,children:`Total`}),(0,k.jsxs)(`div`,{className:`pd-bottom-price-row`,children:[(0,k.jsxs)(`span`,{className:`pd-bottom-price`,children:[`₹`,(m.salePrice||m.price)*U]}),m.salePrice&&(0,k.jsxs)(`span`,{className:`pd-bottom-was`,children:[`₹`,m.price*U]}),X&&(0,k.jsxs)(`span`,{className:`pd-bottom-badge`,children:[X,`% off`]})]})]}),(0,k.jsxs)(`div`,{className:`pd-bottom-actions`,children:[!de&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(`div`,{className:`pd-qty-stepper`,children:[(0,k.jsx)(`button`,{className:`pd-qty-btn`,onClick:()=>W(e=>Math.max(1,e-1)),disabled:U<=1,children:(0,k.jsx)(r,{size:13})}),(0,k.jsx)(`span`,{className:`pd-qty-num`,children:U}),(0,k.jsx)(`button`,{className:`pd-qty-btn`,onClick:()=>W(e=>Math.min(10,e+1)),disabled:U>=10,children:(0,k.jsx)(ee,{size:13})})]}),(0,k.jsx)(`button`,{className:`pd-cart-btn${G?` pd-cart-btn-added`:``}`,onClick:pe,disabled:L,children:G?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(se,{size:15}),` Added!`]}):L?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f,{size:15}),` Adding…`]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f,{size:15}),` Add to Cart`]})})]}),(0,k.jsx)(`button`,{className:`pd-buy-btn`,onClick:fe,disabled:z,children:z?`Processing...`:q?`Port Now →`:`Buy Now →`})]})]}),(0,k.jsx)(b,{children:le&&(0,k.jsx)(y.div,{className:`pd-overlay`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,k.jsxs)(y.div,{className:`pd-modal`,initial:{opacity:0,scale:.94,y:24},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.94,y:24},transition:{duration:.22},children:[(0,k.jsxs)(`div`,{className:`pd-modal-head`,children:[(0,k.jsx)(`button`,{className:`pd-modal-close`,onClick:()=>B(!1),children:(0,k.jsx)(d,{size:14})}),(0,k.jsx)(`h3`,{className:`pd-modal-title`,children:V?`Create Account`:`Welcome Back`}),(0,k.jsx)(`p`,{className:`pd-modal-sub`,children:V?`Sign up to complete your purchase`:`Log in to complete your purchase`})]}),(0,k.jsx)(`div`,{className:`pd-modal-tabs`,children:[`login`,`signup`].map(e=>(0,k.jsx)(`button`,{className:`pd-tab${e===(V?`signup`:`login`)?` pd-tab-active`:``}`,onClick:()=>H(e===`signup`),children:e===`login`?`Login`:`Sign Up`},e))}),(0,k.jsx)(`div`,{className:`pd-modal-body`,children:V?(0,k.jsx)(o,{onSuccess:()=>B(!1)}):(0,k.jsx)(ne,{onSuccess:()=>B(!1)})})]})})})]})},j=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .pd-root { min-height: 100vh; background: #F0F4FF; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; padding-bottom: 32px; }

  .pd-nav { position: sticky; top: 0; z-index: 40; background: rgba(240,244,255,0.9); backdrop-filter: blur(20px); border-bottom: 1px solid #DDE3F5; height: 58px; display: flex; align-items: center; justify-content: space-between; padding: 0 24px; }
  .pd-back-btn { display: flex; align-items: center; gap: 6px; background: #fff; border: 1px solid #DDE3F5; border-radius: 10px; padding: 7px 14px; font-size: 13px; font-weight: 600; color: #4B5563; cursor: pointer; font-family: inherit; transition: all 0.15s; box-shadow: 0 1px 4px rgba(0,0,0,0.06); }
  .pd-back-btn:hover { border-color: #3B82F6; color: #3B82F6; background: #EFF6FF; }
  .pd-nav-center { display: flex; align-items: center; gap: 8px; }
  .pd-nav-label { font-size: 13px; font-weight: 700; color: #6B7280; letter-spacing: 0.4px; }

  .pd-hero-card { margin: 20px 20px 0; background: #fff; border-radius: 20px; border: 1px solid #DDE3F5; padding: 24px; box-shadow: 0 2px 16px rgba(59,130,246,0.07); }
  .pd-hero-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
  .pd-op-group { display: flex; align-items: center; gap: 12px; }
  .pd-op-avatar { width: 48px; height: 48px; border-radius: 14px; background: linear-gradient(135deg, #EFF6FF, #DBEAFE); border: 1px solid #BFDBFE; display: flex; align-items: center; justify-content: center; flex-shrink: 0; overflow: hidden; }
  .pd-op-name { font-size: 15px; font-weight: 700; color: #111827; }
  .pd-op-sub { font-size: 12px; font-weight: 500; color: #9CA3AF; margin-top: 2px; }
  .pd-hero-badges { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
  .pd-badge { padding: 5px 12px; border-radius: 20px; font-size: 11px; font-weight: 700; }
  .pd-badge-vip { background: #FEF3C7; color: #92400E; border: 1px solid #FDE68A; }
  .pd-badge-disc { background: #DCFCE7; color: #14532D; border: 1px solid #BBF7D0; }

  .pd-hero-body { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }
  .pd-hero-info { flex: 1; }
  .pd-plan-title { font-family: 'Sora', sans-serif; font-size: clamp(28px, 5vw, 44px); font-weight: 800; color: #111827; line-height: 1.05; letter-spacing: -1px; text-transform: uppercase; margin-bottom: 12px; }
  .pd-plan-title-accent { color: #3B82F6; }
  .pd-plan-desc { font-size: 13.5px; color: #6B7280; line-height: 1.7; max-width: 440px; margin-bottom: 14px; }
  .pd-tags-row { display: flex; gap: 6px; flex-wrap: wrap; }
  .pd-tag { display: inline-flex; align-items: center; gap: 4px; background: #EFF6FF; color: #2563EB; border: 1px solid #BFDBFE; border-radius: 20px; padding: 4px 11px; font-size: 11px; font-weight: 700; }

  .pd-price-block { text-align: right; flex-shrink: 0; background: linear-gradient(135deg, #EFF6FF, #F5F3FF); border: 1px solid #DBEAFE; border-radius: 16px; padding: 16px 20px; min-width: 140px; }
  .pd-price-you-pay { font-size: 10px; font-weight: 800; color: #9CA3AF; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 4px; }
  .pd-price-amount { font-family: 'Sora', sans-serif; font-size: clamp(36px, 6vw, 52px); font-weight: 800; color: #2563EB; letter-spacing: -2px; line-height: 1; }
  .pd-price-was { display: flex; align-items: center; gap: 6px; justify-content: flex-end; margin-top: 6px; }
  .pd-price-strike { font-size: 13px; color: #9CA3AF; text-decoration: line-through; font-weight: 500; }
  .pd-price-save { font-size: 11px; font-weight: 700; color: #16A34A; background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 20px; padding: 2px 8px; }

  .pd-stats-row { display: flex; gap: 12px; margin: 14px 20px 0; overflow-x: auto; padding-bottom: 2px; }
  .pd-stats-row::-webkit-scrollbar { display: none; }
  .pd-stat-card { flex: 1; min-width: 90px; background: #fff; border: 1px solid #DDE3F5; border-radius: 16px; padding: 16px 12px; text-align: center; box-shadow: 0 1px 8px rgba(0,0,0,0.04); transition: transform 0.14s; }
  .pd-stat-card:hover { transform: translateY(-2px); }
  .pd-stat-icon { width: 32px; height: 32px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin: 0 auto 8px; }
  .pd-stat-num { font-family: 'Sora', sans-serif; font-size: 18px; font-weight: 800; color: #111827; line-height: 1; letter-spacing: -0.5px; }
  .pd-stat-lbl { font-size: 10px; font-weight: 600; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.6px; margin-top: 3px; }

  .pd-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 14px 20px 0; }
  .pd-detail-card { background: #fff; border: 1px solid #DDE3F5; border-radius: 18px; overflow: hidden; box-shadow: 0 1px 8px rgba(0,0,0,0.04); }
  .pd-detail-header { display: flex; align-items: center; gap: 10px; padding: 16px 18px; background: #FAFBFF; border-bottom: 1px solid #DDE3F5; font-size: 12px; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.8px; }
  .pd-detail-header-icon { width: 26px; height: 26px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
  .pd-spec-list { padding: 6px 0; }
  .pd-spec-item { display: flex; align-items: center; justify-content: space-between; padding: 10px 18px; border-bottom: 1px solid #F3F4F6; transition: background 0.12s; }
  .pd-spec-item:last-child { border-bottom: none; }
  .pd-spec-item:hover { background: #F9FAFB; }
  .pd-spec-key { font-size: 13px; color: #6B7280; font-weight: 500; }
  .pd-spec-val { font-size: 13px; font-weight: 700; color: #111827; background: #F3F4F6; border-radius: 8px; padding: 3px 10px; }
  .pd-benefit-list { padding: 8px 18px 12px; }
  .pd-benefit-item { display: flex; align-items: flex-start; gap: 10px; padding: 9px 0; border-bottom: 1px solid #F3F4F6; font-size: 13px; color: #374151; font-weight: 500; line-height: 1.55; }
  .pd-benefit-item:last-child { border-bottom: none; }
  .pd-benefit-dot { width: 8px; height: 8px; border-radius: 50%; background: linear-gradient(135deg, #10B981, #34D399); flex-shrink: 0; margin-top: 5px; box-shadow: 0 0 0 3px #D1FAE5; }
  .pd-empty-state { padding: 24px 18px; font-size: 13px; color: #9CA3AF; text-align: center; }

  .pd-service-banner { display: flex; align-items: flex-start; gap: 12px; margin: 14px 20px 0; background: #FFFBEB; border: 1px solid #FDE68A; border-radius: 16px; padding: 16px 20px; }
  .pd-service-icon-box { width: 32px; height: 32px; border-radius: 10px; background: #FEF3C7; border: 1px solid #FDE68A; color: #D97706; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .pd-service-label { font-size: 10px; font-weight: 800; color: #B45309; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
  .pd-service-desc { font-size: 13px; color: #78350F; line-height: 1.65; }

  .pd-bottom-bar { position: fixed; bottom: 0; left: 0; right: 0; z-index: 50; background: rgba(255,255,255,0.97); backdrop-filter: blur(20px); border-top: 1px solid #DDE3F5; padding: 10px 20px; display: flex; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 -4px 20px rgba(0,0,0,0.07); }
  .pd-bottom-price-group { flex-shrink: 0; }
  .pd-bottom-label { font-size: 10px; font-weight: 700; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.9px; margin-bottom: 2px; }
  .pd-bottom-price-row { display: flex; align-items: baseline; gap: 6px; }
  .pd-bottom-price { font-family: 'Sora', sans-serif; font-size: 22px; font-weight: 800; color: #111827; letter-spacing: -1px; }
  .pd-bottom-was { font-size: 13px; color: #9CA3AF; text-decoration: line-through; font-weight: 500; }
  .pd-bottom-badge { background: #DCFCE7; color: #14532D; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 20px; border: 1px solid #BBF7D0; }
  .pd-bottom-actions { display: flex; align-items: center; gap: 8px; }

  .pd-qty-stepper { display: flex; align-items: center; background: #F3F4F6; border-radius: 12px; border: 1px solid #E5E7EB; overflow: hidden; flex-shrink: 0; }
  .pd-qty-btn { width: 34px; height: 40px; background: transparent; border: none; cursor: pointer; color: #374151; display: flex; align-items: center; justify-content: center; transition: background 0.12s; font-family: inherit; }
  .pd-qty-btn:hover:not(:disabled) { background: #E5E7EB; }
  .pd-qty-btn:disabled { opacity: 0.35; cursor: default; }
  .pd-qty-num { min-width: 28px; text-align: center; font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 800; color: #111827; }

  .pd-cart-btn { display: flex; align-items: center; gap: 7px; padding: 11px 18px; background: #fff; border: 1.5px solid #6366F1; border-radius: 14px; color: #6366F1; font-size: 13px; font-weight: 700; font-family: inherit; cursor: pointer; white-space: nowrap; transition: all 0.18s; box-shadow: 0 2px 10px rgba(99,102,241,0.12); }
  .pd-cart-btn:hover { background: #F5F3FF; }
  .pd-cart-btn:disabled { opacity: 0.65; cursor: not-allowed; }
  .pd-cart-btn-added { background: #F0FDF4 !important; border-color: #10B981 !important; color: #059669 !important; }

  .pd-buy-btn { padding: 11px 24px; background: linear-gradient(135deg, #2563EB, #6366F1); border: none; border-radius: 14px; color: #fff; font-size: 14px; font-weight: 700; font-family: inherit; cursor: pointer; white-space: nowrap; box-shadow: 0 4px 20px rgba(99,102,241,0.35); transition: opacity 0.15s, transform 0.12s; }
  .pd-buy-btn:hover { opacity: 0.92; }
  .pd-buy-btn:active { transform: scale(0.97); }

  .pd-center-screen { min-height: 100vh; background: #F0F4FF; display: flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
  .pd-loading-card { background: #fff; border-radius: 20px; border: 1px solid #DDE3F5; padding: 40px 48px; text-align: center; box-shadow: 0 4px 24px rgba(0,0,0,0.06); }
  .pd-spinner { width: 40px; height: 40px; border-radius: 50%; border: 3px solid #DBEAFE; border-top-color: #3B82F6; margin: 0 auto 16px; animation: pd-spin 0.75s linear infinite; }
  @keyframes pd-spin { to { transform: rotate(360deg); } }
  .pd-loading-text { font-size: 13px; font-weight: 600; color: #6B7280; }
  .pd-notfound-card { background: #fff; border-radius: 20px; padding: 40px 48px; text-align: center; box-shadow: 0 4px 24px rgba(0,0,0,0.06); }
  .pd-notfound-icon { font-size: 48px; margin-bottom: 14px; }
  .pd-notfound-title { font-size: 18px; font-weight: 700; color: #111827; margin-bottom: 6px; }
  .pd-notfound-sub { font-size: 13px; color: #9CA3AF; margin-bottom: 20px; }
  .pd-notfound-btn { padding: 10px 24px; border-radius: 12px; border: none; background: linear-gradient(135deg, #2563EB, #6366F1); color: #fff; font-weight: 700; font-size: 13px; cursor: pointer; font-family: inherit; }

  .pd-overlay { position: fixed; inset: 0; background: rgba(15,23,42,0.45); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 100; padding: 20px; }
  .pd-modal { background: #fff; border-radius: 22px; width: 100%; max-width: 420px; overflow: hidden; box-shadow: 0 24px 64px rgba(0,0,0,0.18); border: 1px solid #DDE3F5; }
  .pd-modal-head { background: linear-gradient(135deg, #2563EB, #6366F1); padding: 22px 22px 18px; position: relative; }
  .pd-modal-close { position: absolute; top: 14px; right: 14px; width: 28px; height: 28px; border-radius: 50%; background: rgba(255,255,255,0.2); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #fff; transition: background 0.15s; }
  .pd-modal-close:hover { background: rgba(255,255,255,0.3); }
  .pd-modal-title { font-family: 'Sora', sans-serif; font-size: 20px; font-weight: 800; color: #fff; text-transform: uppercase; margin-bottom: 4px; }
  .pd-modal-sub { font-size: 13px; color: rgba(255,255,255,0.7); }
  .pd-modal-tabs { display: flex; margin: 14px 18px 0; background: #F3F4F6; border-radius: 12px; padding: 3px; gap: 3px; }
  .pd-tab { flex: 1; padding: 9px; border-radius: 9px; border: none; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.18s; font-family: inherit; background: transparent; color: #6B7280; }
  .pd-tab-active { background: linear-gradient(135deg, #2563EB, #6366F1); color: #fff; box-shadow: 0 2px 10px rgba(99,102,241,0.3); }
  .pd-modal-body { padding: 14px 18px 22px; }

  @media (max-width: 700px) {
    .pd-hero-card { margin: 12px 12px 0; padding: 18px; }
    .pd-hero-body { flex-direction: column; }
    .pd-price-block { text-align: left; width: 100%; min-width: unset; }
    .pd-price-was { justify-content: flex-start; }
    .pd-stats-row { margin: 10px 12px 0; gap: 8px; }
    .pd-stat-card { min-width: 80px; padding: 12px 8px; }
    .pd-details-grid { grid-template-columns: 1fr; margin: 10px 12px 0; gap: 10px; }
    .pd-service-banner { margin: 10px 12px 0; }
    .pd-bottom-bar { padding: 8px 12px; flex-wrap: wrap; }
    .pd-bottom-price-group { width: 100%; }
    .pd-bottom-actions { width: 100%; justify-content: flex-end; }
    .pd-buy-btn { padding: 11px 16px; font-size: 13px; }
    .pd-cart-btn { padding: 11px 12px; font-size: 12px; }
  }
`;export{A as default};