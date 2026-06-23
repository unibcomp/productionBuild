import{t as e}from"./check-CJkIrtBD.js";import{t}from"./clock-y3c5V5Fu.js";import{t as n}from"./message-square-B3QXiWkc.js";import{n as r,t as i}from"./plus-CwwGU6rp.js";import{t as a}from"./wifi--Nt-cfUw.js";import{t as o}from"./zap-CEEzkOgj.js";import{B as s,D as c,E as l,F as u,H as d,K as f,P as p,R as m,U as h,W as g,X as _,_ as v,b as y,f as b,k as ee,v as x}from"./index-1P5gsGLx.js";import{t as S}from"./proxy-DbkyDk_Y.js";import{t as C}from"./AnimatePresence-BkzioZeX.js";import{t as te}from"./usePlanTypes-C83hfpPw.js";import{t as ne}from"./useServices-DJV7Nl43.js";import{t as re}from"./usePlans-ggh2ceA7.js";import{t as ie}from"./useUser-DiOLSqLF.js";import{n as ae}from"./useCheckout-ByuM1pQp.js";import{t as oe}from"./usePlanTags-DVzDyMFN.js";var se=u(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),ce=u(`signal`,[[`path`,{d:`M2 20h.01`,key:`4haj6o`}],[`path`,{d:`M7 20v-4`,key:`j294jx`}],[`path`,{d:`M12 20v-8`,key:`i3yub9`}],[`path`,{d:`M17 20V8`,key:`1tkaf5`}],[`path`,{d:`M22 4v16`,key:`sih9yq`}]]),le=u(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),ue=u(`tag`,[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,key:`vktsd0`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`kqv944`}]]),w=_(f(),1);const T=e=>m({queryKey:e?[`vipCategory`,e]:[`vipCategories`],queryFn:async()=>{try{let t=e?`/vip-category/${e}`:`/vip-category`,{data:n}=await y.get(t);return console.log(`VIP API RESPONSE:`,n),n.data}catch(e){let t=e;throw console.error(`Failed to fetch VIP category:`,e),Error(t.response?.data?.message||t.message||`Something went wrong`)}},enabled:!0,staleTime:300*1e3,retry:2});var E=s(),D=()=>{let{state:s}=d();console.log(`Location State:`,s),console.log(`Order Type:`,s?.orderType);let{id:u}=g(),f=h(),{data:m,isLoading:_}=re(u||s?._id),{data:y}=ie(),{data:D}=ne(typeof m?.serviceId==`string`?m.serviceId:m?.serviceId?._id),{data:k}=T(m?.vipCategoryId?._id),{data:A=[]}=oe(),{data:j=[]}=te(),{mutate:M,isPending:N}=b(),{mutate:P,isPending:F}=ae(),[I,L]=(0,w.useState)(!1),[R,z]=(0,w.useState)(!1),[B,V]=(0,w.useState)(1),[H,U]=(0,w.useState)(!1),W=s?.orderType===`PORT`,de=s?.orderType===`ESIM`,fe=W||de;if((0,w.useEffect)(()=>(I?document.body.style.overflow=`hidden`:document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[I]),_)return(0,E.jsxs)(`div`,{className:`pd-center-screen`,children:[(0,E.jsx)(`style`,{children:O}),(0,E.jsxs)(`div`,{className:`pd-loading-card`,children:[(0,E.jsx)(`div`,{className:`pd-spinner`}),(0,E.jsx)(`p`,{className:`pd-loading-text`,children:`Fetching plan details…`})]})]});if(!m)return(0,E.jsxs)(`div`,{className:`pd-center-screen`,children:[(0,E.jsx)(`style`,{children:O}),(0,E.jsxs)(`div`,{className:`pd-notfound-card`,children:[(0,E.jsx)(`div`,{className:`pd-notfound-icon`,children:`🔍`}),(0,E.jsx)(`h2`,{className:`pd-notfound-title`,children:`Plan not found`}),(0,E.jsx)(`p`,{className:`pd-notfound-sub`,children:`This plan may no longer be available.`}),(0,E.jsx)(`button`,{onClick:()=>f(-1),className:`pd-notfound-btn`,children:`← Go Back`})]})]});let G=D?.[0],K=Array.isArray(k)?k[0]:k,q=typeof m.planTypeId==`object`?m.planTypeId?._id:m.planTypeId,J=A.filter(e=>m.planTagsId?.includes(e._id)),Y=j.find(e=>e._id===q),pe=()=>{if(!y)return L(!0);let e=s?.orderType||`NORMAL`;P({type:`DIRECT`,planId:m._id,quantity:B},{onSuccess:t=>{f(`/buy-now/${t.sessionId}`,{state:{orderType:e,quantity:B}})}})},me=()=>{if(!y)return L(!0);M({planId:m._id,quantity:B},{onSuccess:()=>{U(!0),setTimeout(()=>U(!1),2e3)}})},X=m.salePrice&&m.price?Math.round((m.price-m.salePrice)/m.price*100):null,Z=typeof m.operatorId==`object`?m.operatorId?.name:`Operator`,Q=typeof m.operatorId==`object`?m.operatorId?.logo:``,he=[{icon:(0,E.jsx)(a,{size:16}),num:m.data??`—`,lbl:`Data / Day`,color:`#3B82F6`},{icon:(0,E.jsx)(t,{size:16}),num:m.validity?`${m.validity}d`:`—`,lbl:`Validity`,color:`#8B5CF6`},{icon:(0,E.jsx)(ee,{size:16}),num:m.calls??`—`,lbl:`Calls`,color:`#10B981`},{icon:(0,E.jsx)(n,{size:16}),num:m.sms??`—`,lbl:`SMS / Day`,color:`#F59E0B`},{icon:(0,E.jsx)(ce,{size:16}),num:m.networkType??`—`,lbl:`Network`,color:`#EF4444`}],$=[{key:`Data`,val:m.data},{key:`Validity`,val:m.validity?`${m.validity} Days`:null},{key:`Calls`,val:m.calls},{key:`SMS`,val:m.sms},{key:`Network`,val:m.networkType},{key:`Service`,val:G?.name||(typeof m.serviceId==`string`?m.serviceId:m.serviceId?.name)},{key:`Plan Type`,val:Y?.name||`N/A`}].filter(e=>e.val);return(0,E.jsxs)(`div`,{className:`pd-root`,children:[(0,E.jsx)(`style`,{children:O}),(0,E.jsxs)(`nav`,{className:`pd-nav`,children:[(0,E.jsxs)(`button`,{className:`pd-back-btn`,onClick:()=>f(-1),children:[(0,E.jsx)(p,{size:14}),` Back`]}),(0,E.jsx)(`div`,{className:`pd-nav-center`,children:(0,E.jsx)(`span`,{className:`pd-nav-label`,children:`Plan Details`})}),(0,E.jsx)(`div`,{style:{width:38}})]}),(0,E.jsxs)(S.div,{className:`pd-hero-card`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.42},children:[(0,E.jsxs)(`div`,{className:`pd-hero-top`,children:[(0,E.jsxs)(`div`,{className:`pd-op-group`,children:[(0,E.jsx)(`div`,{className:`pd-op-avatar`,children:Q?(0,E.jsx)(`img`,{src:Q,alt:``,style:{width:32,height:32,objectFit:`contain`}}):(0,E.jsx)(`span`,{style:{fontSize:20},children:`📶`})}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`pd-op-name`,children:Z}),(0,E.jsx)(`div`,{className:`pd-op-sub`,children:Y?.name||G?.name||`Prepaid`})]})]}),(0,E.jsxs)(`div`,{className:`pd-hero-badges`,children:[K&&(0,E.jsxs)(`span`,{className:`pd-badge pd-badge-vip`,children:[`👑 `,K.name]}),X&&(0,E.jsxs)(`span`,{className:`pd-badge pd-badge-disc`,children:[X,`% OFF`]})]})]}),(0,E.jsxs)(`div`,{className:`pd-hero-body`,children:[(0,E.jsxs)(`div`,{className:`pd-hero-info`,children:[(0,E.jsxs)(`h1`,{className:`pd-plan-title`,children:[Z,(0,E.jsxs)(`span`,{className:`pd-plan-title-accent`,children:[` `,Y?.name||m.networkType||`Mobile`]}),(0,E.jsx)(`br`,{}),`Plan`]}),m.description&&(0,E.jsx)(`p`,{className:`pd-plan-desc`,children:m.description}),J.length>0&&(0,E.jsx)(`div`,{className:`pd-tags-row`,children:J.map(e=>(0,E.jsxs)(`span`,{className:`pd-tag`,children:[(0,E.jsx)(ue,{size:10}),` `,e.name]},e._id))})]}),(0,E.jsxs)(`div`,{className:`pd-price-block`,children:[(0,E.jsx)(`div`,{className:`pd-price-you-pay`,children:`You Pay`}),(0,E.jsxs)(`div`,{className:`pd-price-amount`,children:[`₹`,m.salePrice||m.price]}),m.salePrice&&(0,E.jsxs)(`div`,{className:`pd-price-was`,children:[(0,E.jsxs)(`span`,{className:`pd-price-strike`,children:[`₹`,m.price]}),(0,E.jsxs)(`span`,{className:`pd-price-save`,children:[`Save ₹`,m.price-m.salePrice]})]})]})]})]}),(0,E.jsx)(S.div,{className:`pd-stats-row`,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.35},children:he.map((e,t)=>(0,E.jsxs)(`div`,{className:`pd-stat-card`,children:[(0,E.jsx)(`div`,{className:`pd-stat-icon`,style:{color:e.color,background:`${e.color}15`},children:e.icon}),(0,E.jsx)(`div`,{className:`pd-stat-num`,children:e.num}),(0,E.jsx)(`div`,{className:`pd-stat-lbl`,children:e.lbl})]},t))}),(0,E.jsxs)(S.div,{className:`pd-details-grid`,initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{delay:.18,duration:.36},children:[(0,E.jsxs)(`div`,{className:`pd-detail-card`,children:[(0,E.jsxs)(`div`,{className:`pd-detail-header`,children:[(0,E.jsx)(`div`,{className:`pd-detail-header-icon`,style:{background:`#EFF6FF`,color:`#3B82F6`},children:(0,E.jsx)(se,{size:14})}),(0,E.jsx)(`span`,{children:`Plan Specifications`})]}),(0,E.jsx)(`div`,{className:`pd-spec-list`,children:$.length>0?$.map((e,t)=>(0,E.jsxs)(S.div,{className:`pd-spec-item`,initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.24+t*.04},children:[(0,E.jsx)(`span`,{className:`pd-spec-key`,children:e.key}),(0,E.jsx)(`span`,{className:`pd-spec-val`,children:e.val})]},t)):(0,E.jsx)(`div`,{className:`pd-empty-state`,children:`No specifications available`})})]}),(0,E.jsxs)(`div`,{className:`pd-detail-card`,children:[(0,E.jsxs)(`div`,{className:`pd-detail-header`,children:[(0,E.jsx)(`div`,{className:`pd-detail-header-icon`,style:{background:`#F0FDF4`,color:`#10B981`},children:(0,E.jsx)(le,{size:14})}),(0,E.jsx)(`span`,{children:`Benefits Included`})]}),(0,E.jsx)(`div`,{className:`pd-benefit-list`,children:m.benefits?.length?m.benefits.map((e,t)=>(0,E.jsxs)(S.div,{className:`pd-benefit-item`,initial:{opacity:0,x:10},animate:{opacity:1,x:0},transition:{delay:.24+t*.05},children:[(0,E.jsx)(`div`,{className:`pd-benefit-dot`}),(0,E.jsx)(`span`,{children:e})]},t)):(0,E.jsx)(`div`,{className:`pd-empty-state`,children:`No benefits listed for this plan`})})]})]}),G?.description&&(0,E.jsxs)(S.div,{className:`pd-service-banner`,initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:[(0,E.jsx)(`div`,{className:`pd-service-icon-box`,children:(0,E.jsx)(o,{size:16})}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`pd-service-label`,children:`Service Info`}),(0,E.jsx)(`p`,{className:`pd-service-desc`,children:G.description})]})]}),(0,E.jsx)(`div`,{style:{height:110}}),(0,E.jsxs)(`div`,{className:`pd-bottom-bar`,children:[(0,E.jsxs)(`div`,{className:`pd-bottom-price-group`,children:[(0,E.jsx)(`div`,{className:`pd-bottom-label`,children:`Total`}),(0,E.jsxs)(`div`,{className:`pd-bottom-price-row`,children:[(0,E.jsxs)(`span`,{className:`pd-bottom-price`,children:[`₹`,(m.salePrice||m.price)*B]}),m.salePrice&&(0,E.jsxs)(`span`,{className:`pd-bottom-was`,children:[`₹`,m.price*B]}),X&&(0,E.jsxs)(`span`,{className:`pd-bottom-badge`,children:[X,`% off`]})]})]}),(0,E.jsxs)(`div`,{className:`pd-bottom-actions`,children:[!fe&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(`div`,{className:`pd-qty-stepper`,children:[(0,E.jsx)(`button`,{className:`pd-qty-btn`,onClick:()=>V(e=>Math.max(1,e-1)),disabled:B<=1,children:(0,E.jsx)(r,{size:13})}),(0,E.jsx)(`span`,{className:`pd-qty-num`,children:B}),(0,E.jsx)(`button`,{className:`pd-qty-btn`,onClick:()=>V(e=>Math.min(10,e+1)),disabled:B>=10,children:(0,E.jsx)(i,{size:13})})]}),(0,E.jsx)(`button`,{className:`pd-cart-btn${H?` pd-cart-btn-added`:``}`,onClick:me,disabled:N,children:H?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(e,{size:15}),` Added!`]}):N?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(c,{size:15}),` Adding…`]}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(c,{size:15}),` Add to Cart`]})})]}),(0,E.jsx)(`button`,{className:`pd-buy-btn`,onClick:pe,disabled:F,children:F?`Processing...`:W?`Port Now →`:`Buy Now →`})]})]}),(0,E.jsx)(C,{children:I&&(0,E.jsx)(S.div,{className:`pd-overlay`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,E.jsxs)(S.div,{className:`pd-modal`,initial:{opacity:0,scale:.94,y:24},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.94,y:24},transition:{duration:.22},children:[(0,E.jsxs)(`div`,{className:`pd-modal-head`,children:[(0,E.jsx)(`button`,{className:`pd-modal-close`,onClick:()=>L(!1),children:(0,E.jsx)(l,{size:14})}),(0,E.jsx)(`h3`,{className:`pd-modal-title`,children:R?`Create Account`:`Welcome Back`}),(0,E.jsx)(`p`,{className:`pd-modal-sub`,children:R?`Sign up to complete your purchase`:`Log in to complete your purchase`})]}),(0,E.jsx)(`div`,{className:`pd-modal-tabs`,children:[`login`,`signup`].map(e=>(0,E.jsx)(`button`,{className:`pd-tab${e===(R?`signup`:`login`)?` pd-tab-active`:``}`,onClick:()=>z(e===`signup`),children:e===`login`?`Login`:`Sign Up`},e))}),(0,E.jsx)(`div`,{className:`pd-modal-body`,children:R?(0,E.jsx)(x,{onSuccess:()=>L(!1)}):(0,E.jsx)(v,{onSuccess:()=>L(!1),onSignupRedirect:()=>{},onForgotRedirect:()=>{}})})]})})})]})},O=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .pd-root { min-height: 100vh; background: #F0F4FF; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; padding-bottom: 32px; overflow-x: hidden; }

  .pd-nav { position: sticky; top: 0; z-index: 40; background: rgba(240,244,255,0.9); backdrop-filter: blur(20px); border-bottom: 1px solid #DDE3F5; height: 58px; display: flex; align-items: center; justify-content: space-between; padding: 0 24px; }
  .pd-back-btn { display: flex; align-items: center; gap: 6px; background: #fff; border: 1px solid #DDE3F5; border-radius: 10px; padding: 7px 14px; font-size: 13px; font-weight: 600; color: #4B5563; cursor: pointer; font-family: inherit; transition: all 0.15s; box-shadow: 0 1px 4px rgba(0,0,0,0.06); }
  .pd-back-btn:hover { border-color: #3B82F6; color: #3B82F6; background: #EFF6FF; }
  .pd-nav-center { display: flex; align-items: center; gap: 8px; }
  .pd-nav-label { font-size: 13px; font-weight: 700; color: #6B7280; letter-spacing: 0.4px; }

  .pd-hero-card { margin: 20px 20px 0; background: #fff; border-radius: 20px; border: 1px solid #DDE3F5; padding: 24px; box-shadow: 0 2px 16px rgba(59,130,246,0.07); }
  .pd-hero-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; gap: 10px; flex-wrap: wrap; }
  .pd-op-group { display: flex; align-items: center; gap: 12px; min-width: 0; }
  .pd-op-avatar { width: 48px; height: 48px; border-radius: 14px; background: linear-gradient(135deg, #EFF6FF, #DBEAFE); border: 1px solid #BFDBFE; display: flex; align-items: center; justify-content: center; flex-shrink: 0; overflow: hidden; }
  .pd-op-name { font-size: 15px; font-weight: 700; color: #111827; }
  .pd-op-sub { font-size: 12px; font-weight: 500; color: #9CA3AF; margin-top: 2px; }
  .pd-hero-badges { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
  .pd-badge { padding: 5px 12px; border-radius: 20px; font-size: 11px; font-weight: 700; white-space: nowrap; }
  .pd-badge-vip { background: #FEF3C7; color: #92400E; border: 1px solid #FDE68A; }
  .pd-badge-disc { background: #DCFCE7; color: #14532D; border: 1px solid #BBF7D0; }

  .pd-hero-body { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }
  .pd-hero-info { flex: 1; min-width: 0; }
  .pd-plan-title { font-family: 'Sora', sans-serif; font-size: clamp(26px, 5vw, 44px); font-weight: 800; color: #111827; line-height: 1.05; letter-spacing: -1px; text-transform: uppercase; margin-bottom: 12px; word-break: break-word; }
  .pd-plan-title-accent { color: #3B82F6; }
  .pd-plan-desc { font-size: 13.5px; color: #6B7280; line-height: 1.7; max-width: 440px; margin-bottom: 14px; }
  .pd-tags-row { display: flex; gap: 6px; flex-wrap: wrap; }
  .pd-tag { display: inline-flex; align-items: center; gap: 4px; background: #EFF6FF; color: #2563EB; border: 1px solid #BFDBFE; border-radius: 20px; padding: 4px 11px; font-size: 11px; font-weight: 700; }

  .pd-price-block { text-align: right; flex-shrink: 0; background: linear-gradient(135deg, #EFF6FF, #F5F3FF); border: 1px solid #DBEAFE; border-radius: 16px; padding: 16px 20px; min-width: 140px; }
  .pd-price-you-pay { font-size: 10px; font-weight: 800; color: #9CA3AF; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 4px; }
  .pd-price-amount { font-family: 'Sora', sans-serif; font-size: clamp(32px, 6vw, 52px); font-weight: 800; color: #2563EB; letter-spacing: -2px; line-height: 1; }
  .pd-price-was { display: flex; align-items: center; gap: 6px; justify-content: flex-end; margin-top: 6px; flex-wrap: wrap; }
  .pd-price-strike { font-size: 13px; color: #9CA3AF; text-decoration: line-through; font-weight: 500; }
  .pd-price-save { font-size: 11px; font-weight: 700; color: #16A34A; background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 20px; padding: 2px 8px; white-space: nowrap; }

  .pd-stats-row { display: flex; gap: 12px; margin: 14px 20px 0; overflow-x: auto; padding-bottom: 2px; -webkit-overflow-scrolling: touch; }
  .pd-stats-row::-webkit-scrollbar { display: none; }
  .pd-stat-card { flex: 1; min-width: 90px; background: #fff; border: 1px solid #DDE3F5; border-radius: 16px; padding: 16px 12px; text-align: center; box-shadow: 0 1px 8px rgba(0,0,0,0.04); transition: transform 0.14s; }
  .pd-stat-card:hover { transform: translateY(-2px); }
  .pd-stat-icon { width: 32px; height: 32px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin: 0 auto 8px; }
  .pd-stat-num { font-family: 'Sora', sans-serif; font-size: 18px; font-weight: 800; color: #111827; line-height: 1; letter-spacing: -0.5px; }
  .pd-stat-lbl { font-size: 10px; font-weight: 600; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.6px; margin-top: 3px; white-space: nowrap; }

  .pd-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 14px 20px 0; }
  .pd-detail-card { background: #fff; border: 1px solid #DDE3F5; border-radius: 18px; overflow: hidden; box-shadow: 0 1px 8px rgba(0,0,0,0.04); }
  .pd-detail-header { display: flex; align-items: center; gap: 10px; padding: 16px 18px; background: #FAFBFF; border-bottom: 1px solid #DDE3F5; font-size: 12px; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.8px; }
  .pd-detail-header-icon { width: 26px; height: 26px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .pd-spec-list { padding: 6px 0; }
  .pd-spec-item { display: flex; align-items: center; justify-content: space-between; padding: 10px 18px; border-bottom: 1px solid #F3F4F6; transition: background 0.12s; gap: 10px; }
  .pd-spec-item:last-child { border-bottom: none; }
  .pd-spec-item:hover { background: #F9FAFB; }
  .pd-spec-key { font-size: 13px; color: #6B7280; font-weight: 500; }
  .pd-spec-val { font-size: 13px; font-weight: 700; color: #111827; background: #F3F4F6; border-radius: 8px; padding: 3px 10px; text-align: right; word-break: break-word; }
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
  .pd-bottom-price-row { display: flex; align-items: baseline; gap: 6px; flex-wrap: wrap; }
  .pd-bottom-price { font-family: 'Sora', sans-serif; font-size: 22px; font-weight: 800; color: #111827; letter-spacing: -1px; }
  .pd-bottom-was { font-size: 13px; color: #9CA3AF; text-decoration: line-through; font-weight: 500; }
  .pd-bottom-badge { background: #DCFCE7; color: #14532D; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 20px; border: 1px solid #BBF7D0; white-space: nowrap; }
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

  .pd-center-screen { min-height: 100vh; background: #F0F4FF; display: flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; padding: 16px; }
  .pd-loading-card { background: #fff; border-radius: 20px; border: 1px solid #DDE3F5; padding: 40px 48px; text-align: center; box-shadow: 0 4px 24px rgba(0,0,0,0.06); max-width: 92vw; }
  .pd-spinner { width: 40px; height: 40px; border-radius: 50%; border: 3px solid #DBEAFE; border-top-color: #3B82F6; margin: 0 auto 16px; animation: pd-spin 0.75s linear infinite; }
  @keyframes pd-spin { to { transform: rotate(360deg); } }
  .pd-loading-text { font-size: 13px; font-weight: 600; color: #6B7280; }
  .pd-notfound-card { background: #fff; border-radius: 20px; padding: 40px 48px; text-align: center; box-shadow: 0 4px 24px rgba(0,0,0,0.06); max-width: 92vw; }
  .pd-notfound-icon { font-size: 48px; margin-bottom: 14px; }
  .pd-notfound-title { font-size: 18px; font-weight: 700; color: #111827; margin-bottom: 6px; }
  .pd-notfound-sub { font-size: 13px; color: #9CA3AF; margin-bottom: 20px; }
  .pd-notfound-btn { padding: 10px 24px; border-radius: 12px; border: none; background: linear-gradient(135deg, #2563EB, #6366F1); color: #fff; font-weight: 700; font-size: 13px; cursor: pointer; font-family: inherit; }

 .pd-overlay { position: fixed; inset: 0; background: rgba(15,23,42,0.45); backdrop-filter: blur(8px); display: flex; align-items: flex-start; justify-content: center; z-index: 1000; padding: 40px 20px; overflow-y: auto; }
.pd-modal { background: #fff; border-radius: 22px; width: 100%; max-width: 420px; overflow: hidden; box-shadow: 0 24px 64px rgba(0,0,0,0.18); border: 1px solid #DDE3F5; margin: auto 0; }
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
    .pd-nav { padding: 0 14px; height: 52px; }
    .pd-nav-label { font-size: 12px; }
    .pd-back-btn { padding: 6px 10px; font-size: 12px; }
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

  @media (max-width: 480px) {
    .pd-nav { padding: 0 12px; height: 48px; }
    .pd-nav-label { display: none; }
    .pd-hero-card { margin: 10px 10px 0; padding: 14px; border-radius: 16px; }
    .pd-op-avatar { width: 38px; height: 38px; border-radius: 11px; }
    .pd-op-name { font-size: 13px; }
    .pd-hero-badges { justify-content: flex-start; }
    .pd-plan-title { font-size: 24px; letter-spacing: -0.5px; }
    .pd-plan-desc { font-size: 12.5px; max-width: 100%; }
    .pd-price-block { padding: 12px 14px; border-radius: 12px; }
    .pd-price-amount { font-size: 30px; }
    .pd-stats-row { margin: 8px 10px 0; gap: 6px; }
    .pd-stat-card { min-width: 72px; padding: 10px 6px; flex: 1 1 30%; }
    .pd-stat-icon { width: 26px; height: 26px; margin-bottom: 5px; }
    .pd-stat-num { font-size: 14px; }
    .pd-stat-lbl { font-size: 9px; }
    .pd-details-grid { margin: 8px 10px 0; gap: 8px; }
    .pd-detail-header { padding: 12px 14px; font-size: 11px; }
    .pd-spec-item, .pd-benefit-item { padding: 8px 14px; }
    .pd-benefit-list { padding: 6px 14px 10px; }
    .pd-service-banner { margin: 8px 10px 0; padding: 12px 14px; }
    .pd-bottom-bar { gap: 8px; }
    .pd-bottom-price { font-size: 18px; }
    .pd-bottom-label { font-size: 9px; }
    .pd-bottom-actions { gap: 6px; flex-wrap: wrap; }
    .pd-qty-stepper { flex: 0 0 auto; }
    .pd-qty-btn { width: 30px; height: 36px; }
    .pd-cart-btn { flex: 1; justify-content: center; padding: 10px 8px; font-size: 11.5px; }
    .pd-buy-btn { flex: 1; padding: 10px 10px; font-size: 12.5px; text-align: center; }
    .pd-modal { max-width: 94vw; border-radius: 18px; }
    .pd-modal-head { padding: 18px 16px 14px; }
    .pd-modal-title { font-size: 17px; }
    .pd-modal-tabs { margin: 12px 14px 0; }
    .pd-modal-body { padding: 12px 14px 18px; }
  }
`;export{D as default};