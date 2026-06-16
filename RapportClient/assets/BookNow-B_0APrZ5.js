import{t as e}from"./arrow-left-BmzUGWYv.js";import{t}from"./package-Bk_PQSDD.js";import{B as n,G as r,J as i,K as a,L as o,O as s,Q as c,V as l}from"./index-Bl6eECK3.js";import{t as u}from"./proxy-Cl9JaOxs.js";import{t as d}from"./useFancyNumbers-W0hoCyBd.js";import{d as f,f as p,g as m,l as h,n as g,o as _,p as v,u as y}from"./fi-C32R2ITJ.js";import{t as b}from"./useUser-B-rqvtUN.js";var x=c(i(),1),S=l(),C=()=>{let i=r(),{id:c}=a(),{mutate:l,isLoading:C}=m(),{data:T,isLoading:E}=d(c),{data:D}=b(),{data:O}=p(),k=v(),A=n(),[j,M]=(0,x.useState)(null),[N,P]=(0,x.useState)(!1),[F,I]=(0,x.useState)(null),[L,R]=(0,x.useState)(!1);(0,x.useEffect)(()=>{O?.length>0&&M((O.find(e=>e.isDefault)||O[0])._id)},[O]);let z=e=>e?.replace(/(\d{5})(\d{5})/,`$1 $2`),B=()=>{navigator.geolocation.getCurrentPosition(async({coords:{latitude:e,longitude:t}})=>{R(!0);try{let n=(await(await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${e}&lon=${t}&format=json`)).json()).address||{},r=`Current Location`,i=n.road||n.suburb||n.neighbourhood||``,a=n.city||n.town||n.village||`Gurugram`,c=n.state||`Haryana`,l=n.postcode||`000000`,u=O?.find(e=>e.houseNo===`Current Location`),d;d=u?await s.put(`/address/${u._id}`,{houseNo:r,street:i,city:a,state:c,pincode:l,latitude:e,longitude:t}):await s.post(`/address`,{houseNo:r,street:i,city:a,state:c,pincode:l,latitude:e,longitude:t});let f=d.data?.data||d.data;A.invalidateQueries({queryKey:[`address`]}),M(f._id),o.success(`Location fetched 📍`)}catch{o.error(`Failed to fetch address`)}finally{R(!1)}},()=>o.error(`Location permission denied`))},V=()=>{if(!D)return o.error(`Please login first`);if(!j)return o.error(`Select a delivery address`);l({fancyNumberId:c,addressId:j,paymentMethod:`COD`,orderType:`FANCY_NUMBER`},{onSuccess:()=>{o.success(`Booking Confirmed 🎉`),A.invalidateQueries({queryKey:[`orders`]}),i(`/profile?tab=orders`)},onError:e=>{o.error(e?.response?.data?.message||`Order failed`)}})};if(E)return(0,S.jsxs)(`div`,{className:`bn-loading`,children:[(0,S.jsx)(`style`,{children:w}),(0,S.jsx)(`div`,{className:`bn-spinner`})]});if(!T)return(0,S.jsxs)(`div`,{className:`bn-loading`,children:[(0,S.jsx)(`style`,{children:w}),(0,S.jsx)(`p`,{style:{color:`#B45309`,fontWeight:700},children:`No fancy number found`})]});let H=T.salePrice??T.price,U=T.salePrice&&T.price&&T.salePrice<T.price,W=U?Math.round((T.price-T.salePrice)/T.price*100):0,G=O?.find(e=>e._id===j);return(0,S.jsxs)(`div`,{className:`bn-root`,children:[(0,S.jsx)(`style`,{children:w}),(0,S.jsxs)(`nav`,{className:`bn-nav`,children:[(0,S.jsxs)(`button`,{className:`bn-back-btn`,onClick:()=>i(-1),children:[(0,S.jsx)(e,{size:14}),` Back`]}),(0,S.jsxs)(`div`,{className:`bn-nav-center`,children:[(0,S.jsx)(`span`,{className:`bn-nav-dot`,children:`⭐`}),(0,S.jsx)(`span`,{className:`bn-nav-title`,children:`Book Fancy Number`})]}),(0,S.jsx)(`div`,{style:{width:90}})]}),(0,S.jsxs)(`div`,{className:`bn-fancy-hero`,children:[(0,S.jsxs)(`div`,{className:`bn-fancy-hero-left`,children:[(0,S.jsx)(`div`,{className:`bn-fancy-hero-icon`,children:`⭐`}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`div`,{className:`bn-fancy-hero-title`,children:`VIP Number Booking`}),(0,S.jsx)(`div`,{className:`bn-fancy-hero-sub`,children:`Premium number · Doorstep SIM delivery · Lifetime ownership`})]})]}),(0,S.jsx)(`div`,{className:`bn-fancy-hero-steps`,children:[`Pick Number`,`Add Address`,`Confirm`,`Delivered`].map((e,t)=>(0,S.jsxs)(`div`,{className:`bn-fancy-hero-step`,children:[(0,S.jsx)(`div`,{className:`bn-fancy-hero-step-num`,children:t+1}),(0,S.jsx)(`div`,{className:`bn-fancy-hero-step-lbl`,children:e})]},e))})]}),(0,S.jsxs)(`div`,{className:`bn-layout`,children:[(0,S.jsxs)(`div`,{className:`bn-left`,children:[(0,S.jsxs)(u.div,{className:`bn-number-showcase`,initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.4},children:[(0,S.jsx)(`div`,{className:`bn-showcase-bg-circle`}),(0,S.jsx)(`div`,{className:`bn-showcase-bg-circle2`}),(0,S.jsxs)(`div`,{className:`bn-showcase-top`,children:[(0,S.jsxs)(`span`,{className:`bn-vip-badge`,children:[`👑 `,T.vipCategoryId?.name||`Premium VIP`]}),(0,S.jsxs)(`div`,{className:`bn-showcase-op`,children:[T.operatorId?.logo?(0,S.jsx)(`img`,{src:T.operatorId.logo,alt:``,className:`bn-showcase-op-logo`}):(0,S.jsx)(`span`,{style:{fontSize:20},children:`📶`}),(0,S.jsx)(`span`,{className:`bn-showcase-op-name`,children:T.operatorId?.name||`Operator`})]})]}),(0,S.jsx)(`div`,{className:`bn-number-display`,children:z(T.number)}),(0,S.jsxs)(`div`,{className:`bn-showcase-price-row`,children:[(0,S.jsxs)(`div`,{className:`bn-showcase-price-left`,children:[(0,S.jsx)(`div`,{className:`bn-you-pay-label`,children:`You Pay`}),(0,S.jsxs)(`div`,{className:`bn-showcase-price`,children:[`₹`,H.toLocaleString(`en-IN`)]}),U&&(0,S.jsxs)(`div`,{className:`bn-showcase-was`,children:[(0,S.jsxs)(`span`,{className:`bn-showcase-strike`,children:[`₹`,T.price.toLocaleString(`en-IN`)]}),(0,S.jsxs)(`span`,{className:`bn-showcase-save-pill`,children:[`Save `,W,`%`]})]})]}),(0,S.jsx)(`div`,{className:`bn-showcase-feats`,children:[`Lifetime validity`,`Instant activation`,`Free delivery`].map(e=>(0,S.jsxs)(`div`,{className:`bn-feat-chip`,children:[(0,S.jsx)(`span`,{className:`bn-feat-check`,children:`✓`}),` `,e]},e))})]})]}),(0,S.jsxs)(u.div,{className:`bn-card`,initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.1,duration:.4},children:[(0,S.jsx)(`div`,{className:`bn-card-step`,children:`Step 1`}),(0,S.jsx)(`h2`,{className:`bn-card-title`,children:D?`Hey ${D.fullName} 👋`:`Delivery Address`}),(0,S.jsx)(`p`,{className:`bn-card-sub`,children:`Select or add a delivery address for your SIM`}),(0,S.jsx)(`div`,{className:`bn-addr-grid`,children:O?.map(e=>(0,S.jsxs)(`div`,{className:`bn-addr-item${j===e._id?` bn-addr-selected`:``}`,onClick:()=>M(e._id),children:[(0,S.jsxs)(`div`,{className:`bn-addr-top`,children:[(0,S.jsxs)(`p`,{className:`bn-addr-line`,children:[e.houseNo,`, `,e.street]}),e.isDefault&&(0,S.jsx)(`span`,{className:`bn-default-badge`,children:`Default`})]}),(0,S.jsxs)(`p`,{className:`bn-addr-city`,children:[e.city,`, `,e.state,` — `,e.pincode]}),(0,S.jsxs)(`div`,{className:`bn-addr-actions`,children:[(0,S.jsxs)(`button`,{className:`bn-addr-edit`,onClick:t=>{t.stopPropagation(),I(e),P(!0)},children:[(0,S.jsx)(g,{size:11}),` Edit`]}),(0,S.jsxs)(`button`,{className:`bn-addr-del`,onClick:t=>{t.stopPropagation(),k.mutate(e._id,{onSuccess:()=>A.invalidateQueries({queryKey:[`address`]})})},children:[(0,S.jsx)(y,{size:11}),` Remove`]})]})]},e._id))}),(0,S.jsxs)(`div`,{className:`bn-addr-btns`,children:[(0,S.jsxs)(`button`,{className:`bn-add-addr-btn`,onClick:()=>{I(null),P(!0)},children:[(0,S.jsx)(h,{size:14}),` Add Address`]}),(0,S.jsxs)(`button`,{className:`bn-loc-btn`,onClick:B,disabled:L,style:{opacity:L?.6:1},children:[(0,S.jsx)(_,{size:14}),L?`Fetching...`:`Use My Location`]})]})]}),(0,S.jsxs)(u.div,{className:`bn-card`,initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.2,duration:.4},children:[(0,S.jsx)(`div`,{className:`bn-card-step`,children:`Step 2`}),(0,S.jsx)(`h2`,{className:`bn-card-title`,children:`Payment Method`}),(0,S.jsx)(`p`,{className:`bn-card-sub`,children:`How would you like to pay?`}),(0,S.jsx)(`div`,{className:`bn-pay-grid`,children:[`UPI`,`Card`,`Net Banking`,`COD`].map(e=>{let t=e===`COD`;return(0,S.jsxs)(`div`,{className:`bn-pay-item${t?` bn-pay-selected`:` bn-pay-disabled`}`,children:[e,!t&&(0,S.jsx)(`span`,{className:`bn-coming-soon`,children:`Soon`})]},e)})}),(0,S.jsx)(`p`,{className:`bn-pay-note`,children:`Only Cash on Delivery is available right now.`})]})]}),(0,S.jsx)(`div`,{className:`bn-right`,children:(0,S.jsxs)(u.div,{className:`bn-summary-card`,initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.15,duration:.4},children:[(0,S.jsxs)(`div`,{className:`bn-summary-header`,children:[(0,S.jsx)(t,{size:15}),(0,S.jsx)(`span`,{children:`Order Summary`}),(0,S.jsx)(`span`,{className:`bn-fancy-badge`,children:`⭐ VIP`})]}),(0,S.jsxs)(`div`,{className:`bn-summary-number-card`,children:[(0,S.jsxs)(`div`,{className:`bn-summary-number-top`,children:[(0,S.jsxs)(`div`,{className:`bn-summary-op-row`,children:[T.operatorId?.logo?(0,S.jsx)(`img`,{src:T.operatorId.logo,alt:``,className:`bn-op-logo`}):(0,S.jsx)(`div`,{className:`bn-op-avatar`,children:`📶`}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`div`,{className:`bn-op-name`,children:T.operatorId?.name||`Operator`}),(0,S.jsx)(`div`,{className:`bn-op-sub`,children:`Fancy Number · VIP`})]})]}),(0,S.jsx)(`div`,{className:`bn-summary-number-display`,children:z(T.number)})]}),T.vipCategoryId?.name&&(0,S.jsxs)(`div`,{className:`bn-summary-category`,children:[`👑 `,T.vipCategoryId.name]})]}),(0,S.jsxs)(`div`,{className:`bn-price-section`,children:[(0,S.jsxs)(`div`,{className:`bn-price-row`,children:[(0,S.jsx)(`span`,{children:`MRP`}),(0,S.jsxs)(`span`,{children:[`₹`,(T.price||H).toLocaleString(`en-IN`)]})]}),U&&(0,S.jsxs)(`div`,{className:`bn-price-row bn-price-savings`,children:[(0,S.jsxs)(`span`,{children:[`Discount (`,W,`% off)`]}),(0,S.jsxs)(`span`,{children:[`−₹`,(T.price-T.salePrice).toLocaleString(`en-IN`)]})]}),(0,S.jsxs)(`div`,{className:`bn-price-row`,children:[(0,S.jsx)(`span`,{children:`Delivery`}),(0,S.jsx)(`span`,{className:`bn-free-tag`,children:`FREE`})]}),(0,S.jsx)(`div`,{className:`bn-price-divider`}),(0,S.jsxs)(`div`,{className:`bn-price-total-row`,children:[(0,S.jsx)(`span`,{children:`Total`}),(0,S.jsxs)(`span`,{children:[`₹`,H.toLocaleString(`en-IN`)]})]})]}),(0,S.jsxs)(`div`,{className:`bn-info-section`,children:[(0,S.jsxs)(`div`,{className:`bn-info-row`,children:[(0,S.jsx)(`span`,{className:`bn-info-key`,children:`Deliver to`}),(0,S.jsx)(`span`,{className:`bn-info-val`,children:G?`${G.houseNo}, ${G.street}`:`—`})]}),(0,S.jsxs)(`div`,{className:`bn-info-row`,children:[(0,S.jsx)(`span`,{className:`bn-info-key`,children:`Payment`}),(0,S.jsx)(`span`,{className:`bn-info-val`,children:`Cash on Delivery`})]}),(0,S.jsxs)(`div`,{className:`bn-info-row`,children:[(0,S.jsx)(`span`,{className:`bn-info-key`,children:`Delivery`}),(0,S.jsx)(`span`,{className:`bn-info-val`,children:`2–3 business days`})]}),(0,S.jsxs)(`div`,{className:`bn-info-row`,children:[(0,S.jsx)(`span`,{className:`bn-info-key`,children:`Order Type`}),(0,S.jsx)(`span`,{className:`bn-info-val`,style:{color:`#B45309`},children:`Fancy Number`})]})]}),(0,S.jsxs)(`div`,{className:`bn-readiness`,children:[(0,S.jsxs)(`div`,{className:`bn-ready-row`,children:[(0,S.jsx)(`span`,{className:`bn-ready-dot${j?` ok`:``}`}),(0,S.jsx)(`span`,{className:`bn-ready-txt${j?` ok`:``}`,children:`Delivery address`})]}),(0,S.jsxs)(`div`,{className:`bn-ready-row`,children:[(0,S.jsx)(`span`,{className:`bn-ready-dot ok`}),(0,S.jsx)(`span`,{className:`bn-ready-txt ok`,children:`Number selected ✓`})]}),(0,S.jsxs)(`div`,{className:`bn-ready-row`,children:[(0,S.jsx)(`span`,{className:`bn-ready-dot ok`}),(0,S.jsx)(`span`,{className:`bn-ready-txt ok`,children:`Payment — COD`})]})]}),(0,S.jsx)(`button`,{className:`bn-pay-btn`,onClick:V,disabled:!j||C,style:{background:!j||C?`linear-gradient(135deg, #FCD34D, #FBBF24)`:`linear-gradient(135deg, #B45309, #F59E0B)`,opacity:!j||C?.7:1,cursor:!j||C?`not-allowed`:`pointer`},children:C?`Confirming Booking...`:`Confirm Booking — ₹${H.toLocaleString(`en-IN`)} →`}),(0,S.jsx)(`button`,{className:`bn-cancel-btn`,onClick:()=>i(-1),children:`Cancel`}),(0,S.jsx)(`div`,{className:`bn-trust-strip`,children:[{icon:`🔒`,label:`Secure`},{icon:`✅`,label:`100% Safe`},{icon:`🚚`,label:`Free Delivery`}].map(e=>(0,S.jsxs)(`div`,{className:`bn-trust-item`,children:[(0,S.jsx)(`span`,{children:e.icon}),(0,S.jsx)(`span`,{children:e.label})]},e.label))})]})})]}),N&&(0,S.jsx)(f,{close:()=>{P(!1),I(null)},editingAddress:F})]})},w=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .bn-root { min-height: 100vh; background: #F0F4FF; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
  .bn-loading { min-height: 100vh; background: #F0F4FF; display: flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans', sans-serif; }
  .bn-spinner { width: 40px; height: 40px; border-radius: 50%; border: 3px solid #FDE68A; border-top-color: #B45309; animation: bn-spin 0.75s linear infinite; }
  @keyframes bn-spin { to { transform: rotate(360deg); } }

  /* NAV */
  .bn-nav { position: sticky; top: 0; z-index: 40; background: rgba(240,244,255,0.92); backdrop-filter: blur(20px); border-bottom: 1px solid #DDE3F5; height: 58px; display: flex; align-items: center; justify-content: space-between; padding: 0 24px; }
  .bn-back-btn { display: flex; align-items: center; gap: 6px; background: #fff; border: 1px solid #DDE3F5; border-radius: 10px; padding: 7px 14px; font-size: 13px; font-weight: 600; color: #4B5563; cursor: pointer; font-family: inherit; transition: all 0.15s; }
  .bn-back-btn:hover { border-color: #B45309; color: #B45309; background: #FFFBEB; }
  .bn-nav-center { display: flex; align-items: center; gap: 8px; }
  .bn-nav-dot { font-size: 18px; }
  .bn-nav-title { font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 800; color: #111827; letter-spacing: -0.3px; }

  /* FANCY HERO BANNER */
  .bn-fancy-hero { background: linear-gradient(135deg, #78350F 0%, #B45309 55%, #F59E0B 100%); padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
  .bn-fancy-hero-left { display: flex; align-items: center; gap: 14px; }
  .bn-fancy-hero-icon { width: 48px; height: 48px; border-radius: 14px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }
  .bn-fancy-hero-title { font-family: 'Sora', sans-serif; font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 4px; }
  .bn-fancy-hero-sub { font-size: 12px; color: rgba(255,255,255,0.8); }
  .bn-fancy-hero-steps { display: flex; align-items: center; gap: 6px; }
  .bn-fancy-hero-step { display: flex; flex-direction: column; align-items: center; gap: 4px; }
  .bn-fancy-hero-step-num { width: 22px; height: 22px; border-radius: 50%; background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.35); color: #fff; font-size: 10px; font-weight: 800; display: flex; align-items: center; justify-content: center; }
  .bn-fancy-hero-step-lbl { font-size: 10px; color: rgba(255,255,255,0.75); font-weight: 600; white-space: nowrap; }

  /* LAYOUT */
  .bn-layout { display: grid; grid-template-columns: 1fr 380px; gap: 20px; padding: 20px 24px; max-width: 1100px; margin: 0 auto; }
  .bn-left { display: flex; flex-direction: column; gap: 16px; }

  /* NUMBER SHOWCASE */
  .bn-number-showcase { background: linear-gradient(135deg, #78350F 0%, #92400E 40%, #B45309 100%); border-radius: 22px; padding: 28px; position: relative; overflow: hidden; box-shadow: 0 8px 32px rgba(180,83,9,0.3); }
  .bn-showcase-bg-circle { position: absolute; top: -40px; right: 60px; width: 160px; height: 160px; border-radius: 50%; background: rgba(255,255,255,0.06); }
  .bn-showcase-bg-circle2 { position: absolute; bottom: -50px; right: -20px; width: 200px; height: 200px; border-radius: 50%; background: rgba(255,255,255,0.04); }

  .bn-showcase-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; position: relative; z-index: 1; }
  .bn-vip-badge { background: rgba(255,255,255,0.15); color: #FEF3C7; border: 1px solid rgba(255,255,255,0.25); border-radius: 20px; padding: 5px 14px; font-size: 12px; font-weight: 700; backdrop-filter: blur(4px); }
  .bn-showcase-op { display: flex; align-items: center; gap: 8px; }
  .bn-showcase-op-logo { width: 32px; height: 32px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.3); object-fit: contain; background: rgba(255,255,255,0.1); }
  .bn-showcase-op-name { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.9); }

  .bn-number-display { font-family: 'Sora', sans-serif; font-size: clamp(32px, 5vw, 48px); font-weight: 800; color: #fff; letter-spacing: 3px; margin-bottom: 24px; position: relative; z-index: 1; text-shadow: 0 2px 12px rgba(0,0,0,0.2); }

  .bn-showcase-price-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; position: relative; z-index: 1; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.15); }
  .bn-showcase-price-left {}
  .bn-you-pay-label { font-size: 10px; font-weight: 800; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 4px; }
  .bn-showcase-price { font-family: 'Sora', sans-serif; font-size: 38px; font-weight: 800; color: #fff; letter-spacing: -1.5px; line-height: 1; }
  .bn-showcase-was { display: flex; align-items: center; gap: 8px; margin-top: 6px; }
  .bn-showcase-strike { font-size: 14px; color: rgba(255,255,255,0.5); text-decoration: line-through; }
  .bn-showcase-save-pill { background: rgba(255,255,255,0.15); color: #FEF3C7; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.25); }
  .bn-showcase-feats { display: flex; flex-direction: column; gap: 8px; }
  .bn-feat-chip { display: flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.85); }
  .bn-feat-check { width: 18px; height: 18px; border-radius: 50%; background: rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; font-size: 9px; color: #FEF3C7; font-weight: 900; flex-shrink: 0; }

  /* CARDS */
  .bn-card { background: #fff; border-radius: 22px; border: 1px solid #DDE3F5; padding: 22px; box-shadow: 0 2px 14px rgba(59,130,246,0.06); }
  .bn-card-step { font-size: 10px; font-weight: 800; color: #B45309; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 6px; }
  .bn-card-title { font-family: 'Sora', sans-serif; font-size: 20px; font-weight: 800; color: #111827; margin-bottom: 4px; }
  .bn-card-sub { font-size: 13px; color: #9CA3AF; margin-bottom: 18px; }

  /* ADDRESS */
  .bn-addr-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px; }
  .bn-addr-item { padding: 14px; border-radius: 14px; border: 2px solid #DDE3F5; cursor: pointer; transition: all 0.15s; }
  .bn-addr-item:hover { border-color: #FDE68A; background: #FFFBEB; }
  .bn-addr-selected { border-color: #B45309 !important; background: #FFFBEB !important; }
  .bn-addr-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 6px; margin-bottom: 4px; }
  .bn-addr-line { font-size: 13px; font-weight: 700; color: #111827; }
  .bn-default-badge { background: #FFFBEB; color: #B45309; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 20px; border: 1px solid #FDE68A; white-space: nowrap; flex-shrink: 0; }
  .bn-addr-city { font-size: 12px; color: #6B7280; margin-bottom: 10px; }
  .bn-addr-actions { display: flex; gap: 6px; }
  .bn-addr-edit { display: flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; color: #3B82F6; background: #EFF6FF; border: none; border-radius: 8px; padding: 5px 10px; cursor: pointer; font-family: inherit; transition: background 0.13s; }
  .bn-addr-edit:hover { background: #DBEAFE; }
  .bn-addr-del { display: flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; color: #EF4444; background: #FEF2F2; border: none; border-radius: 8px; padding: 5px 10px; cursor: pointer; font-family: inherit; transition: background 0.13s; }
  .bn-addr-del:hover { background: #FEE2E2; }
  .bn-addr-btns { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .bn-add-addr-btn { display: flex; align-items: center; justify-content: center; gap: 7px; border: 2px dashed #FDE68A; background: transparent; color: #B45309; font-size: 13px; font-weight: 600; padding: 12px; border-radius: 14px; cursor: pointer; font-family: inherit; transition: background 0.15s; }
  .bn-add-addr-btn:hover { background: #FFFBEB; }
  .bn-loc-btn { display: flex; align-items: center; justify-content: center; gap: 7px; background: #F5F3FF; border: 1px solid #DDD6FE; color: #6D28D9; font-size: 13px; font-weight: 600; padding: 12px; border-radius: 14px; cursor: pointer; font-family: inherit; transition: background 0.15s; }
  .bn-loc-btn:hover { background: #EDE9FE; }

  /* PAYMENT */
  .bn-pay-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px; }
  .bn-pay-item { padding: 13px; text-align: center; border-radius: 12px; border: 2px solid #DDE3F5; font-size: 13px; font-weight: 600; color: #6B7280; cursor: pointer; transition: all 0.15s; position: relative; }
  .bn-pay-selected { border-color: #B45309 !important; background: #FFFBEB !important; color: #B45309 !important; }
  .bn-pay-disabled { opacity: 0.45; cursor: not-allowed; }
  .bn-coming-soon { display: block; font-size: 10px; font-weight: 700; color: #9CA3AF; margin-top: 2px; }
  .bn-pay-note { font-size: 12px; color: #9CA3AF; }

  /* RIGHT SUMMARY */
  .bn-right { position: sticky; top: 78px; height: fit-content; }
  .bn-summary-card { background: #fff; border-radius: 22px; border: 1px solid #DDE3F5; padding: 22px; box-shadow: 0 2px 14px rgba(59,130,246,0.06); }
  .bn-summary-header { display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 800; color: #6B7280; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }
  .bn-fancy-badge { background: #FFFBEB; color: #B45309; font-size: 10px; font-weight: 700; padding: 3px 10px; border-radius: 20px; border: 1px solid #FDE68A; margin-left: auto; }

  /* Number preview in summary */
  .bn-summary-number-card { background: linear-gradient(135deg, #78350F, #B45309); border-radius: 16px; padding: 18px; margin-bottom: 16px; position: relative; overflow: hidden; }
  .bn-summary-number-top { margin-bottom: 12px; }
  .bn-summary-op-row { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
  .bn-op-logo { width: 28px; height: 28px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.3); object-fit: contain; }
  .bn-op-avatar { width: 28px; height: 28px; border-radius: 50%; background: rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; font-size: 14px; }
  .bn-op-name { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.9); }
  .bn-op-sub { font-size: 10px; color: rgba(255,255,255,0.6); font-weight: 600; margin-top: 1px; }
  .bn-summary-number-display { font-family: 'Sora', sans-serif; font-size: 22px; font-weight: 800; color: #fff; letter-spacing: 2px; }
  .bn-summary-category { display: inline-flex; align-items: center; gap: 4px; background: rgba(255,255,255,0.15); color: #FEF3C7; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2); }

  /* Price section */
  .bn-price-section { margin-bottom: 4px; }
  .bn-price-row { display: flex; justify-content: space-between; font-size: 13.5px; color: #374151; font-weight: 500; padding: 5px 0; }
  .bn-price-savings { color: #16A34A; font-weight: 700; }
  .bn-free-tag { color: #16A34A; font-weight: 700; font-size: 13px; }
  .bn-price-divider { height: 1px; background: #F3F4F6; margin: 10px 0; }
  .bn-price-total-row { display: flex; justify-content: space-between; font-size: 18px; font-weight: 800; color: #111827; }

  /* Info section */
  .bn-info-section { margin-top: 14px; padding-top: 14px; border-top: 1px solid #F3F4F6; display: flex; flex-direction: column; gap: 8px; }
  .bn-info-row { display: flex; justify-content: space-between; font-size: 12px; }
  .bn-info-key { color: #9CA3AF; }
  .bn-info-val { color: #B45309; font-weight: 600; max-width: 55%; text-align: right; }

  /* Readiness */
  .bn-readiness { margin-top: 14px; background: #FFFBEB; border: 1px solid #FDE68A; border-radius: 12px; padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; }
  .bn-ready-row { display: flex; align-items: center; gap: 8px; }
  .bn-ready-dot { width: 8px; height: 8px; border-radius: 50%; background: #E5E7EB; border: 2px solid #D1D5DB; transition: all 0.2s; flex-shrink: 0; }
  .bn-ready-dot.ok { background: #10B981; border-color: #10B981; box-shadow: 0 0 0 3px #D1FAE5; }
  .bn-ready-txt { font-size: 12px; color: #9CA3AF; font-weight: 500; transition: color 0.2s; }
  .bn-ready-txt.ok { color: #059669; font-weight: 700; }

  /* Buttons */
  .bn-pay-btn { width: 100%; margin-top: 18px; padding: 14px; border: none; border-radius: 14px; color: #fff; font-size: 15px; font-weight: 700; font-family: inherit; cursor: pointer; box-shadow: 0 4px 20px rgba(180,83,9,0.35); transition: opacity 0.15s, transform 0.12s; }
  .bn-pay-btn:hover { opacity: 0.92; }
  .bn-pay-btn:active { transform: scale(0.97); }
  .bn-cancel-btn { width: 100%; margin-top: 8px; padding: 10px; background: none; border: none; color: #9CA3AF; font-size: 13px; font-weight: 600; cursor: pointer; font-family: inherit; transition: color 0.15s; }
  .bn-cancel-btn:hover { color: #4B5563; }

  /* Trust strip */
  .bn-trust-strip { display: flex; justify-content: space-around; margin-top: 16px; padding-top: 14px; border-top: 1px solid #F3F4F6; }
  .bn-trust-item { display: flex; flex-direction: column; align-items: center; gap: 4px; font-size: 11px; color: #9CA3AF; font-weight: 600; }
  .bn-trust-item span:first-child { font-size: 18px; }

  @media (max-width: 860px) {
    .bn-layout { grid-template-columns: 1fr; padding: 14px 12px; gap: 14px; }
    .bn-right { position: static; }
    .bn-addr-grid { grid-template-columns: 1fr; }
    .bn-fancy-hero { padding: 16px; }
    .bn-fancy-hero-steps { display: none; }
    .bn-showcase-price-row { flex-direction: column; gap: 14px; }
    .bn-showcase-feats { flex-direction: row; flex-wrap: wrap; gap: 8px; }
    .bn-number-display { font-size: 28px; letter-spacing: 2px; }
  }
`;export{C as default};