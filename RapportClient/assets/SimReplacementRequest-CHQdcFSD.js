import{t as e}from"./clock-D85exMSg.js";import{t}from"./map-pin-B1xRNyVF.js";import{t as n}from"./package-CtSX8Qqe.js";import{t as r}from"./wifi-DpFrj5Xz.js";import{F as i,H as a,I as o,J as s,K as c,M as l,Q as u,T as d,Z as f,ct as p,et as ee,it as m,q as h,tt as te}from"./index-B91svnjI.js";import{a as ne,f as g,h as re,i as ie,l as _,m as ae,n as v,p as y,t as b}from"./AddressModal-D-1KNdBQ.js";import{t as x}from"./useUser-DdGDDVn2.js";var S=h(`navigation`,[[`polygon`,{points:`3 11 22 2 13 21 11 13 3 11`,key:`1ltx0t`}]]),C=p(m(),1),w=u(),T=50,E=()=>{let u=te(),p=ee().state?.operator,{data:m,isLoading:h}=x(),{data:E=[]}=ae(),O=re(),k=f(),[A,j]=(0,C.useState)(null),[oe,M]=(0,C.useState)(!1),[se,N]=(0,C.useState)(null),[P,F]=(0,C.useState)(!1),[I,L]=(0,C.useState)(!1),[R,z]=(0,C.useState)(``),[B,V]=(0,C.useState)(``),[H,U]=(0,C.useState)(``),W=[`SIM Damaged`,`Lost SIM`,`Network Upgrade (4G→5G)`,`Other`],G=e=>e===`Home`?(0,w.jsx)(ne,{size:10}):e===`Work`?(0,w.jsx)(v,{size:10}):(0,w.jsx)(_,{size:10});if((0,C.useEffect)(()=>{E.length>0&&!A&&j((E.find(e=>e.isDefault)||E[0])._id)},[E,A]),!p)return(0,w.jsxs)(`div`,{className:`sr-loading`,children:[(0,w.jsx)(`style`,{children:D}),(0,w.jsx)(`p`,{style:{color:`#4F46E5`,fontWeight:700},children:`No operator selected.`}),(0,w.jsx)(`button`,{className:`sr-back-btn`,onClick:()=>u(`/simreplacement`),children:`Go Back`})]});let K=p.id===`jio`,q=p.id===`bsnl`,J=p.buttonGradient,Y=p.tileGradient,X=E.find(e=>e._id===A),Z=R.length===10,Q=R.length>0&&R.length<10,$=`${p.id.slice(0,3).toUpperCase()}-${R?R.slice(-4):`····`}`,ce=()=>{if(!navigator.geolocation){s.error(`Location not supported on this device`);return}navigator.geolocation.getCurrentPosition(async e=>{let{latitude:t,longitude:n}=e.coords;try{let e=(await(await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${t}&lon=${n}&format=json`)).json()).address||{},r=`Current Location`,i=e.road||e.suburb||e.neighbourhood||``,a=e.city||e.town||e.village||`Gurugram`,o=e.state||`Haryana`,c=e.postcode||`000000`,l=E.find(e=>e.houseNo===`Current Location`),u;u=l?await d.put(`/address/${l._id}`,{houseNo:r,street:i,city:a,state:o,pincode:c,latitude:t,longitude:n}):await d.post(`/address`,{houseNo:r,street:i,city:a,state:o,pincode:c,latitude:t,longitude:n});let f=u.data.data;k.invalidateQueries({queryKey:[`address`]}),j(f._id),s.success(`Location fetched 📍`)}catch{s.error(`Failed to fetch address`)}},()=>s.error(`Location permission denied`))},le=async()=>{if(!X)return s.error(`Select a delivery address`);if(!Z)return s.error(`Enter a valid 10-digit existing number`);if(!H)return s.error(`Select a reason for replacement`);L(!0);try{await d.post(`/sim-replacement`,{addressId:X._id,operatorId:p.id,existingNumber:R,lastRechargeAmount:B,reason:H,paymentMethod:`COD`}),F(!0)}catch(e){s.error(e?.response?.data?.message||`Request failed ❌`)}finally{L(!1)}};return h?(0,w.jsxs)(`div`,{className:`sr-loading`,children:[(0,w.jsx)(`style`,{children:D}),(0,w.jsx)(`div`,{className:`sr-spinner`})]}):(0,w.jsxs)(`div`,{className:`sr-root`,style:{"--op-color":p.color},children:[(0,w.jsx)(`style`,{children:D}),(0,w.jsxs)(`nav`,{className:`sr-nav`,children:[(0,w.jsxs)(`button`,{className:`sr-back-btn`,onClick:()=>u(`/simreplacement`),children:[(0,w.jsx)(c,{size:14}),` Back`]}),(0,w.jsxs)(`div`,{className:`sr-nav-center`,children:[(0,w.jsx)(`span`,{className:`sr-nav-dot`}),(0,w.jsxs)(`span`,{className:`sr-nav-title`,children:[p.name,` · SIM Replacement`]})]}),(0,w.jsx)(`div`,{className:`sr-nav-ref`,children:!K&&!P?$:``})]}),(0,w.jsxs)(`div`,{className:`sr-hero`,children:[(0,w.jsx)(`div`,{className:`sr-hero-bg`}),(0,w.jsxs)(`div`,{className:`sr-hero-inner`,children:[(0,w.jsxs)(`div`,{className:`sr-hero-left`,children:[(0,w.jsx)(`div`,{className:`sr-hero-icon`,children:K?(0,w.jsx)(t,{size:20}):(0,w.jsx)(r,{size:20})}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{className:`sr-hero-eyebrow`,children:K?`In-store request`:`Doorstep request`}),(0,w.jsx)(`div`,{className:`sr-hero-title`,children:K?`Visit your nearest Jio store`:`Get a replacement SIM, same number`}),(0,w.jsx)(`div`,{className:`sr-hero-sub`,children:K?`Aadhaar e-KYC verification · in person only · same-day activation`:`Verify your last recharge · doorstep delivery · 24–48 hr dispatch`})]})]}),!K&&(0,w.jsx)(`ol`,{className:`sr-hero-steps`,children:[`Verify details`,`Confirm address`,`Pay fee`,`SIM dispatched`].map((e,t)=>(0,w.jsxs)(`li`,{className:`sr-hero-step`,children:[(0,w.jsx)(`span`,{className:`sr-hero-step-num`,children:t+1}),(0,w.jsx)(`span`,{className:`sr-hero-step-lbl`,children:e})]},e))})]})]}),K?(0,w.jsx)(`div`,{className:`sr-layout`,style:{gridTemplateColumns:`1fr`},children:(0,w.jsxs)(`div`,{className:`sr-left`,children:[(0,w.jsxs)(`div`,{className:`sr-card`,children:[(0,w.jsx)(`div`,{className:`sr-card-eyebrow`,children:`What to carry`}),(0,w.jsx)(`h2`,{className:`sr-card-title`,children:`Required for biometric e-KYC`}),(0,w.jsx)(`div`,{className:`sr-jio-grid`,children:[{icon:l,label:`Aadhaar card`,sub:`Original, for biometric e-KYC`},{icon:o,label:`Existing Jio number`,sub:`The one you're replacing`}].map(e=>(0,w.jsxs)(`div`,{className:`sr-jio-item`,children:[(0,w.jsx)(`div`,{className:`sr-jio-icon`,children:(0,w.jsx)(e.icon,{size:17})}),(0,w.jsx)(`p`,{className:`sr-jio-label`,children:e.label}),(0,w.jsx)(`p`,{className:`sr-jio-sub`,children:e.sub})]},e.label))})]}),(0,w.jsxs)(`div`,{className:`sr-card`,children:[(0,w.jsx)(`div`,{className:`sr-card-eyebrow`,children:`Store info`}),(0,w.jsx)(`h2`,{className:`sr-card-title`,children:`Find your nearest store`}),(0,w.jsxs)(`div`,{className:`sr-store-row`,children:[(0,w.jsxs)(`div`,{className:`sr-store-info`,children:[(0,w.jsx)(e,{size:17}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`sr-store-label`,children:`Store hours`}),(0,w.jsx)(`p`,{className:`sr-store-val`,children:`10:00 AM – 8:00 PM, all days`})]})]}),(0,w.jsxs)(`div`,{className:`sr-store-info`,children:[(0,w.jsx)(S,{size:17}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`p`,{className:`sr-store-label`,children:`Avg. wait time`}),(0,w.jsx)(`p`,{className:`sr-store-val`,children:`~15–20 minutes`})]})]})]}),(0,w.jsxs)(`a`,{href:`https://www.jio.com/store-locator`,target:`_blank`,rel:`noopener noreferrer`,className:`sr-store-cta`,children:[(0,w.jsx)(t,{size:18}),` Open store locator`]})]})]})}):P?(0,w.jsx)(`div`,{className:`sr-success-wrap`,children:(0,w.jsxs)(`div`,{className:`sr-success-card`,children:[(0,w.jsx)(`div`,{className:`sr-success-icon`,children:(0,w.jsx)(a,{size:28})}),(0,w.jsx)(`h3`,{className:`sr-success-title`,children:`Request submitted`}),(0,w.jsxs)(`p`,{className:`sr-success-sub`,children:[`Your `,p.name,` SIM replacement request has been received.`]}),(0,w.jsx)(`p`,{className:`sr-success-sub`,children:`A new SIM will be dispatched to your address within 24–48 hours.`}),(0,w.jsxs)(`div`,{className:`sr-success-ref`,children:[`Reference `,$]}),(0,w.jsx)(`button`,{className:`sr-pay-btn`,style:{maxWidth:220,margin:`22px auto 0`,...q&&J?{background:J}:{}},onClick:()=>u(`/simreplacement`),children:`Done`})]})}):(0,w.jsxs)(`div`,{className:`sr-layout`,children:[(0,w.jsxs)(`div`,{className:`sr-left`,children:[(0,w.jsxs)(`div`,{className:`sr-card`,children:[(0,w.jsx)(`div`,{className:`sr-card-eyebrow`,children:`Step 1 of 2`}),(0,w.jsx)(`h2`,{className:`sr-card-title`,children:m?`Hey ${m.fullName||m.name} 👋`:`Delivery address`}),(0,w.jsx)(`p`,{className:`sr-card-sub`,children:`Where should we deliver your new SIM?`}),(0,w.jsx)(`div`,{className:`sr-addr-grid`,children:E.map(e=>(0,w.jsxs)(`div`,{className:`sr-addr-item${A===e._id?` sr-addr-selected`:``}`,onClick:()=>j(e._id),children:[(0,w.jsxs)(`div`,{className:`sr-addr-top`,children:[(0,w.jsxs)(`div`,{children:[e.addressLabel&&(0,w.jsxs)(`span`,{className:`sr-addr-label-tag`,children:[G(e.addressLabel),` `,e.addressLabel]}),(0,w.jsxs)(`p`,{className:`sr-addr-line`,children:[e.houseNo,`, `,e.street]})]}),e.isDefault&&(0,w.jsx)(`span`,{className:`sr-default-badge`,children:`Default`})]}),(0,w.jsxs)(`p`,{className:`sr-addr-city`,children:[e.city,`, `,e.state,` — `,e.pincode]}),(0,w.jsxs)(`div`,{className:`sr-addr-actions`,children:[(0,w.jsxs)(`button`,{className:`sr-addr-edit`,onClick:t=>{t.stopPropagation(),N(e),M(!0)},children:[(0,w.jsx)(ie,{size:11}),` Edit`]}),(0,w.jsxs)(`button`,{className:`sr-addr-del`,onClick:t=>{t.stopPropagation(),O.mutate(e._id,{onSuccess:()=>k.invalidateQueries({queryKey:[`address`]})})},children:[(0,w.jsx)(y,{size:11}),` Remove`]})]})]},e._id))}),(0,w.jsxs)(`div`,{className:`sr-addr-btns`,children:[(0,w.jsxs)(`button`,{className:`sr-add-addr-btn`,onClick:()=>{N(null),M(!0)},children:[(0,w.jsx)(g,{size:14}),` Add address`]}),(0,w.jsxs)(`button`,{className:`sr-loc-btn`,onClick:ce,children:[(0,w.jsx)(_,{size:14}),` Use my location`]})]})]}),(0,w.jsxs)(`div`,{className:`sr-card sr-replace-card`,children:[(0,w.jsxs)(`div`,{className:`sr-replace-header`,children:[(0,w.jsx)(`div`,{className:`sr-replace-header-icon`,style:q&&Y?{background:Y,color:`#fff`}:{},children:(0,w.jsx)(i,{size:19})}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{className:`sr-card-eyebrow`,style:{marginBottom:2},children:`Step 2 of 2 — Verification`}),(0,w.jsx)(`h2`,{className:`sr-card-title`,style:{marginBottom:0},children:`Your current number & last recharge`})]})]}),(0,w.jsx)(`p`,{className:`sr-card-sub`,style:{marginTop:14},children:`This helps us confirm ownership before issuing your new SIM`}),(0,w.jsxs)(`div`,{className:`sr-replace-fields`,children:[(0,w.jsxs)(`div`,{className:`sr-field-group`,children:[(0,w.jsxs)(`label`,{className:`sr-field-label`,children:[`Existing `,p.name,` number`]}),(0,w.jsxs)(`div`,{className:`sr-number-wrap`,children:[(0,w.jsx)(`div`,{className:`sr-number-prefix`,children:`+91`}),(0,w.jsx)(`input`,{className:`sr-number-input${Z?` sr-input-ok`:Q?` sr-input-warn`:``}`,type:`tel`,inputMode:`numeric`,placeholder:`Enter 10-digit number`,value:R,onChange:e=>z(e.target.value.replace(/\D/g,``).slice(0,10)),maxLength:10}),Z&&(0,w.jsx)(`div`,{className:`sr-input-check`,children:`✓`})]}),(0,w.jsx)(`div`,{className:`sr-progress-track`,children:(0,w.jsx)(`div`,{className:`sr-progress-fill${Z?` sr-progress-ok`:``}`,style:{width:`${R.length/10*100}%`,...Z&&q&&J?{background:J}:{}}})}),(0,w.jsxs)(`div`,{className:`sr-number-meta`,children:[Z?(0,w.jsx)(`span`,{className:`sr-meta-ok`,children:`✓ Valid number — ready to verify`}):Q?(0,w.jsxs)(`span`,{className:`sr-meta-warn`,children:[10-R.length,` more digit`,10-R.length==1?``:`s`,` needed`]}):(0,w.jsx)(`span`,{className:`sr-meta-neutral`,children:`This number will receive the activation OTP`}),(0,w.jsxs)(`span`,{className:`sr-meta-count`,children:[R.length,`/10`]})]})]}),(0,w.jsx)(`div`,{className:`sr-divider`,children:(0,w.jsx)(`span`,{className:`sr-divider-label`,children:`Last recharge details`})}),(0,w.jsxs)(`div`,{className:`sr-field-group`,children:[(0,w.jsxs)(`label`,{className:`sr-field-label`,children:[`Last recharge amount (₹) `,(0,w.jsx)(`span`,{className:`sr-optional-tag`,children:`Optional`})]}),(0,w.jsx)(`input`,{className:`sr-text-input`,type:`number`,placeholder:`e.g. 299`,value:B,onChange:e=>V(e.target.value)})]}),(0,w.jsx)(`div`,{className:`sr-divider`,children:(0,w.jsx)(`span`,{className:`sr-divider-label`,children:`Reason for replacement`})}),(0,w.jsx)(`div`,{className:`sr-field-group`,children:(0,w.jsx)(`div`,{className:`sr-reason-grid`,children:W.map(e=>{let t=H===e;return(0,w.jsx)(`button`,{type:`button`,onClick:()=>U(e),className:`sr-reason-card${t?` sr-reason-active`:``}`,style:t&&q&&J?{background:J,borderColor:`transparent`,color:`#fff`}:{},children:e},e)})})}),(0,w.jsxs)(`div`,{className:`sr-timeline`,children:[(0,w.jsx)(`div`,{className:`sr-timeline-header`,children:`What happens next`}),(0,w.jsx)(`div`,{className:`sr-timeline-items`,children:[{title:`Identity verified`,desc:`We match your number and last recharge to confirm ownership`},{title:`SIM dispatched`,desc:`New SIM card delivered to your address within 24–48 hours`},{title:`Activated`,desc:`Insert the new SIM — your number stays exactly the same`}].map((e,t)=>(0,w.jsxs)(`div`,{className:`sr-timeline-item`,children:[(0,w.jsx)(`div`,{className:`sr-timeline-icon`,style:q&&J?{background:J,borderColor:`transparent`,color:`#fff`}:{},children:t+1}),(0,w.jsx)(`div`,{className:`sr-timeline-line`}),(0,w.jsxs)(`div`,{className:`sr-timeline-content`,children:[(0,w.jsx)(`div`,{className:`sr-timeline-title`,children:e.title}),(0,w.jsx)(`div`,{className:`sr-timeline-desc`,children:e.desc})]})]},t))})]})]})]})]}),(0,w.jsx)(`div`,{className:`sr-right`,children:(0,w.jsxs)(`div`,{className:`sr-ticket`,children:[(0,w.jsxs)(`div`,{className:`sr-ticket-top`,children:[(0,w.jsxs)(`div`,{className:`sr-summary-header`,children:[(0,w.jsx)(n,{size:14}),(0,w.jsx)(`span`,{children:`Replacement docket`})]}),(0,w.jsxs)(`div`,{className:`sr-op-row`,children:[(0,w.jsx)(`div`,{className:`sr-op-avatar`,style:q&&Y?{background:Y,color:`#fff`}:{},children:p.name[0]}),(0,w.jsxs)(`div`,{children:[(0,w.jsxs)(`span`,{className:`sr-op-name`,children:[p.name,` SIM replacement`]}),(0,w.jsx)(`div`,{className:`sr-op-sub`,children:`New SIM, same number`})]}),(0,w.jsx)(`div`,{className:`sr-ticket-id`,children:$})]}),(0,w.jsx)(`div`,{className:`sr-spec-box`,children:[{label:`Existing number`,val:R?`+91 ${R}`:`—`},{label:`Last recharge`,val:B?`₹${B}`:`Not provided`},{label:`Reason`,val:H||`—`}].map((e,t)=>(0,w.jsxs)(`div`,{className:`sr-spec-row`,children:[(0,w.jsx)(`span`,{className:`sr-spec-key`,children:e.label}),(0,w.jsx)(`span`,{className:`sr-spec-val`,children:e.val})]},t))})]}),(0,w.jsxs)(`div`,{className:`sr-perf`,children:[(0,w.jsx)(`span`,{className:`sr-perf-notch sr-perf-notch-l`}),(0,w.jsx)(`span`,{className:`sr-perf-line`}),(0,w.jsx)(`span`,{className:`sr-perf-notch sr-perf-notch-r`})]}),(0,w.jsxs)(`div`,{className:`sr-ticket-bottom`,children:[(0,w.jsxs)(`div`,{className:`sr-price-section`,children:[(0,w.jsxs)(`div`,{className:`sr-price-row`,children:[(0,w.jsx)(`span`,{children:`Replacement fee`}),(0,w.jsxs)(`span`,{children:[`₹`,T]})]}),(0,w.jsxs)(`div`,{className:`sr-price-row`,children:[(0,w.jsx)(`span`,{children:`Delivery`}),(0,w.jsx)(`span`,{className:`sr-free-tag`,children:`Free`})]}),(0,w.jsx)(`div`,{className:`sr-price-divider`}),(0,w.jsxs)(`div`,{className:`sr-price-total-row`,children:[(0,w.jsx)(`span`,{children:`Total`}),(0,w.jsxs)(`span`,{style:q&&Y?{backgroundImage:Y,WebkitBackgroundClip:`text`,backgroundClip:`text`,color:`transparent`}:{},children:[`₹`,T]})]})]}),(0,w.jsxs)(`div`,{className:`sr-info-section`,children:[(0,w.jsxs)(`div`,{className:`sr-info-row`,children:[(0,w.jsx)(`span`,{className:`sr-info-key`,children:`Deliver to`}),(0,w.jsx)(`span`,{className:`sr-info-val`,children:X?`${X.houseNo}, ${X.street}`:`—`})]}),(0,w.jsxs)(`div`,{className:`sr-info-row`,children:[(0,w.jsx)(`span`,{className:`sr-info-key`,children:`Payment`}),(0,w.jsx)(`span`,{className:`sr-info-val`,children:`Cash on delivery`})]})]}),(0,w.jsxs)(`div`,{className:`sr-readiness`,children:[(0,w.jsxs)(`div`,{className:`sr-ready-row`,children:[(0,w.jsx)(`span`,{className:`sr-ready-dot${A?` ok`:``}`}),(0,w.jsx)(`span`,{className:`sr-ready-txt${A?` ok`:``}`,children:`Delivery address`})]}),(0,w.jsxs)(`div`,{className:`sr-ready-row`,children:[(0,w.jsx)(`span`,{className:`sr-ready-dot${Z?` ok`:``}`}),(0,w.jsxs)(`span`,{className:`sr-ready-txt${Z?` ok`:``}`,children:[`Mobile number (`,R.length,`/10)`]})]}),(0,w.jsxs)(`div`,{className:`sr-ready-row`,children:[(0,w.jsx)(`span`,{className:`sr-ready-dot${H?` ok`:``}`}),(0,w.jsxs)(`span`,{className:`sr-ready-txt${H?` ok`:``}`,children:[`Reason `,H?`(${H})`:``]})]})]}),(0,w.jsx)(`button`,{className:`sr-pay-btn`,style:q&&J?{background:J}:{},onClick:le,disabled:I,children:I?`Submitting…`:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i,{size:16,style:{marginRight:6,verticalAlign:-2}}),`Confirm replacement — ₹`,T]})}),(0,w.jsx)(`button`,{className:`sr-cancel-btn`,onClick:()=>u(-1),children:`Cancel`})]})]})})]}),oe&&(0,w.jsx)(b,{close:()=>{M(!1),N(null)},editingAddress:se})]})},D=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@600;700;800&family=IBM+Plex+Mono:wght@500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .sr-root {
    --ink: #10172A;
    --muted: #667085;
    --faint: #98A2B3;
    --line: #E4E7EE;
    --paper: #F7F7F5;
    --card: #FFFFFF;
    --op: var(--op-color, #2563EB);
    min-height: 100vh;
    background: var(--paper);
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    color: var(--ink);
  }
  .sr-loading { min-height: 100vh; background: #F7F7F5; display: flex; flex-direction: column; gap: 14px; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans', sans-serif; }
  .sr-spinner { width: 38px; height: 38px; border-radius: 50%; border: 3px solid #E4E7EE; border-top-color: #4F46E5; animation: sr-spin 0.75s linear infinite; }
  @keyframes sr-spin { to { transform: rotate(360deg); } }

  /* ── NAV ───────────────────────────────────────────── */
  .sr-nav { position: sticky; top: 0; z-index: 40; background: rgba(247,247,245,0.9); backdrop-filter: blur(16px); border-bottom: 1px solid var(--line); height: 58px; display: flex; align-items: center; justify-content: space-between; padding: 0 24px; }
  .sr-back-btn { display: flex; align-items: center; gap: 6px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 7px 14px; font-size: 13px; font-weight: 600; color: var(--muted); cursor: pointer; font-family: inherit; transition: all 0.15s; }
  .sr-back-btn:hover { border-color: var(--op); color: var(--op); }
  .sr-nav-center { display: flex; align-items: center; gap: 9px; }
  .sr-nav-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--op); box-shadow: 0 0 0 3px color-mix(in srgb, var(--op) 18%, transparent); }
  .sr-nav-title { font-family: 'Sora', sans-serif; font-size: 14.5px; font-weight: 700; color: var(--ink); letter-spacing: -0.2px; }
  .sr-nav-ref { font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; font-weight: 600; color: var(--faint); letter-spacing: 0.5px; }

  /* ── HERO ──────────────────────────────────────────── */
  .sr-hero { position: relative; overflow: hidden; background: var(--ink); }
  .sr-hero-bg { position: absolute; inset: 0; background: radial-gradient(120% 140% at 0% 0%, color-mix(in srgb, var(--op) 55%, #10172A) 0%, #10172A 62%); }
  .sr-hero-inner { position: relative; z-index: 1; padding: 30px 24px; display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; max-width: 1100px; margin: 0 auto; }
  .sr-hero-left { display: flex; align-items: center; gap: 16px; }
  .sr-hero-icon { width: 46px; height: 46px; border-radius: 13px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #fff; }
  .sr-hero-eyebrow { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; font-weight: 600; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 1.4px; margin-bottom: 6px; }
  .sr-hero-title { font-family: 'Sora', sans-serif; font-size: 21px; font-weight: 700; color: #fff; margin-bottom: 5px; letter-spacing: -0.3px; line-height: 1.25; }
  .sr-hero-sub { font-size: 12.5px; color: rgba(255,255,255,0.65); }
  .sr-hero-steps { display: flex; align-items: center; gap: 22px; list-style: none; }
  .sr-hero-step { display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .sr-hero-step-num { width: 22px; height: 22px; border-radius: 50%; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25); color: #fff; font-size: 10px; font-weight: 700; font-family: 'IBM Plex Mono', monospace; display: flex; align-items: center; justify-content: center; }
  .sr-hero-step-lbl { font-size: 10px; color: rgba(255,255,255,0.6); font-weight: 600; white-space: nowrap; }

  /* ── LAYOUT ────────────────────────────────────────── */
  .sr-layout { display: grid; grid-template-columns: 1fr 380px; gap: 20px; padding: 22px 24px 60px; max-width: 1100px; margin: 0 auto; }
  .sr-left { display: flex; flex-direction: column; gap: 16px; }

  .sr-card { background: var(--card); border-radius: 18px; border: 1px solid var(--line); padding: 24px; }
  .sr-card-eyebrow { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; font-weight: 600; color: var(--op); text-transform: uppercase; letter-spacing: 1.4px; margin-bottom: 8px; }
  .sr-card-title { font-family: 'Sora', sans-serif; font-size: 19px; font-weight: 700; color: var(--ink); margin-bottom: 4px; letter-spacing: -0.2px; }
  .sr-card-sub { font-size: 13px; color: var(--muted); margin-bottom: 18px; }

  .sr-jio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; }
  .sr-jio-item { background: var(--paper); border: 1px solid var(--line); border-radius: 14px; padding: 16px; }
  .sr-jio-icon { width: 36px; height: 36px; border-radius: 10px; background: color-mix(in srgb, var(--op) 12%, white); color: var(--op); display: flex; align-items: center; justify-content: center; margin-bottom: 10px; }
  .sr-jio-label { font-weight: 700; font-size: 13.5px; color: var(--ink); margin-bottom: 3px; }
  .sr-jio-sub { font-size: 12px; color: var(--muted); }

  .sr-store-row { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 16px; }
  .sr-store-info { flex: 1 1 220px; display: flex; align-items: center; gap: 12px; background: var(--paper); border: 1px solid var(--line); border-radius: 14px; padding: 14px 16px; color: var(--op); }
  .sr-store-label { font-weight: 700; font-size: 13px; color: var(--ink); }
  .sr-store-val { font-size: 12px; color: var(--muted); }
  .sr-store-cta { display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 14px; border-radius: 13px; color: #fff; font-size: 14px; font-weight: 700; text-decoration: none; background: var(--op); }

  .sr-success-wrap { display: flex; justify-content: center; padding: 60px 24px; }
  .sr-success-card { background: var(--card); border-radius: 20px; border: 1px solid var(--line); padding: 42px 32px; text-align: center; max-width: 420px; }
  .sr-success-icon { width: 60px; height: 60px; border-radius: 50%; background: #ECFDF3; color: #16A34A; display: flex; align-items: center; justify-content: center; margin: 0 auto 18px; }
  .sr-success-title { font-family: 'Sora', sans-serif; font-size: 19px; font-weight: 700; color: var(--ink); margin-bottom: 8px; }
  .sr-success-sub { font-size: 13.5px; color: var(--muted); margin-bottom: 4px; }
  .sr-success-ref { margin-top: 16px; display: inline-block; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 600; color: var(--op); background: color-mix(in srgb, var(--op) 8%, white); padding: 6px 14px; border-radius: 8px; }

  .sr-addr-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px; }
  .sr-addr-item { padding: 14px; border-radius: 14px; border: 1.5px solid var(--line); cursor: pointer; transition: all 0.15s; background: var(--paper); }
  .sr-addr-item:hover { border-color: color-mix(in srgb, var(--op) 50%, var(--line)); }
  .sr-addr-selected { border-color: var(--op) !important; background: color-mix(in srgb, var(--op) 6%, white) !important; }
  .sr-addr-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 6px; margin-bottom: 4px; }
  .sr-addr-line { font-size: 13px; font-weight: 700; color: var(--ink); }
  .sr-default-badge { background: #fff; color: var(--op); font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 20px; border: 1px solid color-mix(in srgb, var(--op) 35%, transparent); white-space: nowrap; flex-shrink: 0; }
  .sr-addr-city { font-size: 12px; color: var(--muted); margin-bottom: 10px; }
  .sr-addr-actions { display: flex; gap: 6px; }
  .sr-addr-edit { display: flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; color: var(--op); background: #fff; border: 1px solid var(--line); border-radius: 8px; padding: 5px 10px; cursor: pointer; font-family: inherit; }
  .sr-addr-del { display: flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; color: #DC2626; background: #fff; border: 1px solid var(--line); border-radius: 8px; padding: 5px 10px; cursor: pointer; font-family: inherit; }
  .sr-addr-btns { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .sr-add-addr-btn { display: flex; align-items: center; justify-content: center; gap: 7px; border: 1.5px dashed var(--line); background: transparent; color: var(--op); font-size: 13px; font-weight: 600; padding: 12px; border-radius: 14px; cursor: pointer; font-family: inherit; }
  .sr-loc-btn { display: flex; align-items: center; justify-content: center; gap: 7px; background: var(--paper); border: 1px solid var(--line); color: var(--ink); font-size: 13px; font-weight: 600; padding: 12px; border-radius: 14px; cursor: pointer; font-family: inherit; }

  .sr-replace-card { border-color: var(--line); }
  .sr-replace-header { display: flex; align-items: center; gap: 14px; padding-bottom: 4px; }
  .sr-replace-header-icon { width: 42px; height: 42px; border-radius: 12px; background: color-mix(in srgb, var(--op) 10%, white); color: var(--op); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

  .sr-replace-fields { display: flex; flex-direction: column; gap: 22px; }
  .sr-field-group { display: flex; flex-direction: column; gap: 10px; }
  .sr-field-label { font-size: 11.5px; font-weight: 700; color: var(--ink); text-transform: uppercase; letter-spacing: 0.6px; display: flex; align-items: center; gap: 8px; }
  .sr-optional-tag { font-size: 9.5px; font-weight: 700; color: var(--faint); text-transform: none; letter-spacing: 0; background: var(--paper); border: 1px solid var(--line); border-radius: 20px; padding: 2px 8px; }

  .sr-number-wrap { display: flex; align-items: center; border: 1.5px solid var(--line); border-radius: 14px; overflow: hidden; background: var(--paper); transition: border-color 0.15s; }
  .sr-number-wrap:focus-within { border-color: var(--op); background: #fff; box-shadow: 0 0 0 3px color-mix(in srgb, var(--op) 12%, transparent); }
  .sr-number-prefix { padding: 0 14px; font-size: 14px; font-weight: 700; color: var(--op); background: color-mix(in srgb, var(--op) 8%, white); border-right: 1.5px solid var(--line); height: 48px; display: flex; align-items: center; flex-shrink: 0; font-family: 'IBM Plex Mono', monospace; }
  .sr-number-input { flex: 1; border: none; outline: none; padding: 0 14px; font-size: 16px; font-family: 'IBM Plex Mono', monospace; font-weight: 600; color: var(--ink); background: transparent; letter-spacing: 1px; height: 48px; }
  .sr-number-input::placeholder { font-size: 13px; font-weight: 400; letter-spacing: 0; color: var(--faint); font-family: 'Plus Jakarta Sans', sans-serif; }
  .sr-input-check { width: 26px; height: 26px; border-radius: 50%; background: #16A34A; color: #fff; font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0; }

  .sr-progress-track { height: 4px; background: var(--line); border-radius: 99px; overflow: hidden; }
  .sr-progress-fill { height: 100%; background: linear-gradient(90deg, #F59E0B, #EF4444); border-radius: 99px; transition: width 0.2s, background 0.3s; }
  .sr-progress-fill.sr-progress-ok { background: #16A34A; }
  .sr-number-meta { display: flex; align-items: center; justify-content: space-between; }
  .sr-meta-ok { font-size: 11px; font-weight: 700; color: #16A34A; }
  .sr-meta-warn { font-size: 11px; font-weight: 700; color: #D97706; }
  .sr-meta-neutral { font-size: 11px; color: var(--faint); font-weight: 500; }
  .sr-meta-count { font-size: 11px; font-weight: 600; color: var(--faint); font-family: 'IBM Plex Mono', monospace; }

  .sr-divider { display: flex; align-items: center; gap: 10px; }
  .sr-divider::before, .sr-divider::after { content: ""; flex: 1; height: 1px; background: var(--line); }
  .sr-divider-label { font-size: 11px; color: var(--faint); font-weight: 600; white-space: nowrap; text-transform: uppercase; letter-spacing: 0.6px; }

  .sr-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .sr-text-input { border: 1.5px solid var(--line); border-radius: 12px; padding: 12px 14px; font-size: 13.5px; color: var(--ink); outline: none; font-family: inherit; background: var(--paper); transition: border-color 0.2s; }
  .sr-text-input:focus { border-color: var(--op); background: #fff; }

  .sr-reason-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  .sr-reason-card { padding: 12px 8px; border-radius: 12px; border: 1.5px solid var(--line); background: var(--paper); color: var(--muted); cursor: pointer; font-family: inherit; font-size: 12px; font-weight: 700; transition: all 0.15s; text-align: center; }
  .sr-reason-card.sr-reason-active { border-color: var(--op); background: color-mix(in srgb, var(--op) 8%, white); color: var(--op); }

  .sr-timeline { background: var(--paper); border: 1px solid var(--line); border-radius: 14px; padding: 16px 18px; }
  .sr-timeline-header { font-size: 11.5px; font-weight: 700; color: var(--ink); margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.6px; }
  .sr-timeline-items { display: flex; flex-direction: column; gap: 0; }
  .sr-timeline-item { display: flex; align-items: flex-start; gap: 12px; position: relative; padding-bottom: 14px; }
  .sr-timeline-item:last-child { padding-bottom: 0; }
  .sr-timeline-icon { width: 26px; height: 26px; border-radius: 50%; background: #fff; border: 1.5px solid var(--op); color: var(--op); display: flex; align-items: center; justify-content: center; font-size: 11.5px; font-weight: 700; font-family: 'IBM Plex Mono', monospace; flex-shrink: 0; position: relative; z-index: 1; }
  .sr-timeline-line { position: absolute; left: 13px; top: 26px; bottom: 0; width: 1.5px; background: var(--line); }
  .sr-timeline-item:last-child .sr-timeline-line { display: none; }
  .sr-timeline-content { flex: 1; padding-top: 3px; }
  .sr-timeline-title { font-size: 13px; font-weight: 700; color: var(--ink); margin-bottom: 2px; }
  .sr-timeline-desc { font-size: 11.5px; color: var(--muted); line-height: 1.6; }

  /* ── RIGHT: TICKET STUB ────────────────────────────── */
  .sr-right { position: sticky; top: 78px; height: fit-content; }
  .sr-ticket { background: var(--card); border-radius: 20px; border: 1px solid var(--line); overflow: hidden; box-shadow: 0 18px 40px -16px rgba(16,23,42,0.12); }
  .sr-ticket-top { padding: 22px 22px 20px; }
  .sr-ticket-bottom { padding: 20px 22px 24px; }

  .sr-summary-header { display: flex; align-items: center; gap: 8px; font-size: 10.5px; font-weight: 700; color: var(--faint); text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 16px; }
  .sr-op-row { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
  .sr-op-avatar { width: 38px; height: 38px; border-radius: 11px; background: color-mix(in srgb, var(--op) 14%, white); color: var(--op); display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 800; flex-shrink: 0; }
  .sr-op-name { font-size: 14.5px; font-weight: 700; color: var(--ink); display: block; }
  .sr-op-sub { font-size: 11px; color: var(--muted); margin-top: 2px; }
  .sr-ticket-id { margin-left: auto; font-family: 'IBM Plex Mono', monospace; font-size: 11px; font-weight: 600; color: var(--faint); }

  .sr-spec-box { background: var(--paper); border: 1px solid var(--line); border-radius: 14px; padding: 14px; }
  .sr-spec-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 12.5px; border-bottom: 1px solid var(--line); gap: 10px; }
  .sr-spec-row:last-child { border-bottom: none; }
  .sr-spec-key { color: var(--muted); font-weight: 500; flex-shrink: 0; }
  .sr-spec-val { color: var(--ink); font-weight: 700; text-align: right; font-family: 'IBM Plex Mono', monospace; font-size: 12px; }

  /* perforation seam — the signature element: a torn ticket-stub edge between request details and the payable amount */
  .sr-perf { position: relative; height: 1px; }
  .sr-perf-line { position: absolute; inset: 0; left: 16px; right: 16px; background: repeating-linear-gradient(to right, var(--line) 0, var(--line) 6px, transparent 6px, transparent 12px); }
  .sr-perf-notch { position: absolute; top: -8px; width: 16px; height: 16px; border-radius: 50%; background: var(--paper); }
  .sr-perf-notch-l { left: -8px; }
  .sr-perf-notch-r { right: -8px; }

  .sr-price-section { margin-top: 2px; }
  .sr-price-row { display: flex; justify-content: space-between; font-size: 13px; color: var(--muted); font-weight: 500; padding: 5px 0; }
  .sr-free-tag { color: #16A34A; font-weight: 700; font-size: 12.5px; }
  .sr-price-divider { height: 1px; background: var(--line); margin: 12px 0; }
  .sr-price-total-row { display: flex; justify-content: space-between; font-size: 18px; font-weight: 800; color: var(--ink); font-family: 'Sora', sans-serif; }
  .sr-price-total-row span:last-child { color: var(--op); }

  .sr-info-section { margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--line); display: flex; flex-direction: column; gap: 8px; }
  .sr-info-row { display: flex; justify-content: space-between; font-size: 12px; gap: 10px; }
  .sr-info-key { color: var(--faint); flex-shrink: 0; }
  .sr-info-val { color: var(--ink); font-weight: 600; max-width: 60%; text-align: right; }

  .sr-readiness { margin-top: 14px; background: var(--paper); border: 1px solid var(--line); border-radius: 12px; padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; }
  .sr-ready-row { display: flex; align-items: center; gap: 8px; }
  .sr-ready-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--line); border: 2px solid var(--line); transition: all 0.2s; flex-shrink: 0; }
  .sr-ready-dot.ok { background: #16A34A; border-color: #16A34A; box-shadow: 0 0 0 3px #DCFCE7; }
  .sr-ready-txt { font-size: 12px; color: var(--faint); font-weight: 500; }
  .sr-ready-txt.ok { color: #15803D; font-weight: 700; }

  .sr-pay-btn { width: 100%; margin-top: 18px; padding: 14px; background: var(--op); border: none; border-radius: 13px; color: #fff; font-size: 14.5px; font-weight: 700; font-family: inherit; cursor: pointer; box-shadow: 0 10px 24px -8px color-mix(in srgb, var(--op) 65%, transparent); transition: transform 0.15s; }
  .sr-pay-btn:hover:not(:disabled) { transform: translateY(-1px); }
  .sr-pay-btn:disabled { opacity: 0.6; cursor: not-allowed; }
  .sr-cancel-btn { width: 100%; margin-top: 8px; padding: 10px; background: none; border: none; color: var(--faint); font-size: 13px; font-weight: 600; cursor: pointer; font-family: inherit; }

  @media (max-width: 860px) {
    .sr-layout { grid-template-columns: 1fr; padding: 16px 14px 50px; gap: 14px; }
    .sr-right { position: static; }
    .sr-addr-grid { grid-template-columns: 1fr; }
    .sr-grid-2 { grid-template-columns: 1fr; }
    .sr-reason-grid { grid-template-columns: repeat(2, 1fr); }
    .sr-hero-inner { padding: 22px 16px; }
    .sr-hero-steps { display: none; }
    .sr-nav-ref { display: none; }
  }
    .sr-addr-label-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 800;
  color: var(--op);
  background: color-mix(in srgb, var(--op) 8%, white);
  border: 1px solid color-mix(in srgb, var(--op) 30%, transparent);
  padding: 2px 8px;
  border-radius: 20px;
  margin-bottom: 4px;
}
  
`;export{E as default};