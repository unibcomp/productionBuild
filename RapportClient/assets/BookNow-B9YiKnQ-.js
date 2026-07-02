import{t as e}from"./chevron-right-BFXeumHk.js";import{t}from"./package-ByEkPCbQ.js";import{t as n}from"./shield-alert-CKBpIV85.js";import{G as r,J as i,V as a,W as o,Y as s,Z as c,tt as l,w as u,z as d}from"./index-CRTiBSYq.js";import{t as f}from"./proxy-D2RvQ3Zh.js";import{t as p}from"./useFancyNumbers-koYHEw-S.js";import{n as m}from"./useOrders-BhaA2Tx7.js";import{d as h,f as g,p as _,r as v,s as y,t as b,u as x}from"./AddressModal-Q_o6NiZJ.js";import{t as S}from"./useUser-DDtnkwke.js";var C=l(c(),1),w=r(),T=()=>{let r=i(),{id:c}=s(),{mutate:l,isPending:T}=m(),{data:D,isLoading:O}=p(c),{data:k}=S(),{data:A}=g(),j=_(),M=o(),[N,P]=(0,C.useState)(null),[F,I]=(0,C.useState)(!1),[L,R]=(0,C.useState)(null),[z,B]=(0,C.useState)(!1),[V,H]=(0,C.useState)(!1);(0,C.useEffect)(()=>{A?.length>0&&P((A.find(e=>e.isDefault)||A[0])._id)},[A]);let U=e=>e?.replace(/(\d{5})(\d{5})/,`$1 $2`),W=()=>{navigator.geolocation.getCurrentPosition(async({coords:{latitude:e,longitude:t}})=>{B(!0);try{let n=(await(await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${e}&lon=${t}&format=json`)).json()).address||{},r=`Current Location`,i=n.road||n.suburb||n.neighbourhood||``,o=n.city||n.town||n.village||`Gurugram`,s=n.state||`Haryana`,c=n.postcode||`000000`,l=A.find(e=>e.houseNo===`Current Location`),d;d=l?await u.put(`/address/${l._id}`,{houseNo:r,street:i,city:o,state:s,pincode:c,latitude:e,longitude:t}):await u.post(`/address`,{houseNo:r,street:i,city:o,state:s,pincode:c,latitude:e,longitude:t});let f=d.data.data;M.invalidateQueries({queryKey:[`address`]}),P(f._id),a.success(`Location fetched 📍`)}catch{a.error(`Failed to fetch address`)}finally{B(!1)}},()=>a.error(`Location permission denied`))},G=()=>{if(!k)return a.error(`Please login first`);if(!N)return a.error(`Select a delivery address`);l({fancyNumberId:c,addressId:N,paymentMethod:`COD`,orderType:`FANCY_NUMBER`},{onSuccess:()=>{a.success(`Booking Confirmed 🎉`),M.invalidateQueries({queryKey:[`orders`]}),r(`/profile?tab=orders`)},onError:e=>{let t=e.response?.data?.message||``,n=t.toLowerCase();if(n.includes(`kyc`)||n.includes(`aadhaar`)||n.includes(`pan`)||n.includes(`verification`)){H(!0);return}a.error(t||`Order failed`)}})};if(O)return(0,w.jsxs)(`div`,{className:`bn-loading`,children:[(0,w.jsx)(`style`,{children:E}),(0,w.jsx)(`div`,{className:`bn-spinner`})]});if(!D)return(0,w.jsxs)(`div`,{className:`bn-loading`,children:[(0,w.jsx)(`style`,{children:E}),(0,w.jsx)(`p`,{style:{color:`#B45309`,fontWeight:700},children:`No fancy number found`})]});let K=D.salePrice??D.price,q=D.salePrice&&D.price&&D.salePrice<D.price,J=q?Math.round((D.price-D.salePrice)/D.price*100):0,Y=A.find(e=>e._id===N);return(0,w.jsxs)(`div`,{className:`bn-root`,children:[(0,w.jsx)(`style`,{children:E}),(0,w.jsxs)(`nav`,{className:`bn-nav`,children:[(0,w.jsxs)(`button`,{className:`bn-back-btn`,onClick:()=>r(-1),children:[(0,w.jsx)(d,{size:14}),` Back`]}),(0,w.jsxs)(`div`,{className:`bn-nav-center`,children:[(0,w.jsx)(`span`,{className:`bn-nav-dot`,children:`⭐`}),(0,w.jsx)(`span`,{className:`bn-nav-title`,children:`Book Fancy Number`})]}),(0,w.jsx)(`div`,{style:{width:90}})]}),(0,w.jsxs)(`div`,{className:`bn-fancy-hero`,children:[(0,w.jsxs)(`div`,{className:`bn-fancy-hero-left`,children:[(0,w.jsx)(`div`,{className:`bn-fancy-hero-icon`,children:`⭐`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{className:`bn-fancy-hero-title`,children:`VIP Number Booking`}),(0,w.jsx)(`div`,{className:`bn-fancy-hero-sub`,children:`Premium number · Doorstep SIM delivery · Lifetime ownership`})]})]}),(0,w.jsx)(`div`,{className:`bn-fancy-hero-steps`,children:[`Pick Number`,`Add Address`,`Confirm`,`Delivered`].map((e,t)=>(0,w.jsxs)(`div`,{className:`bn-fancy-hero-step`,children:[(0,w.jsx)(`div`,{className:`bn-fancy-hero-step-num`,children:t+1}),(0,w.jsx)(`div`,{className:`bn-fancy-hero-step-lbl`,children:e})]},e))})]}),(0,w.jsxs)(`div`,{className:`bn-layout`,children:[(0,w.jsxs)(`div`,{className:`bn-left`,children:[(0,w.jsxs)(f.div,{className:`bn-number-showcase`,initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.4},children:[(0,w.jsx)(`div`,{className:`bn-showcase-bg-circle`}),(0,w.jsx)(`div`,{className:`bn-showcase-bg-circle2`}),(0,w.jsxs)(`div`,{className:`bn-showcase-top`,children:[(0,w.jsxs)(`span`,{className:`bn-vip-badge`,children:[`👑 `,D.vipCategoryId?.name||`Premium VIP`]}),(0,w.jsxs)(`div`,{className:`bn-showcase-op`,children:[D.operatorId?.logo?(0,w.jsx)(`img`,{src:D.operatorId.logo,alt:``,className:`bn-showcase-op-logo`}):(0,w.jsx)(`span`,{style:{fontSize:20},children:`📶`}),(0,w.jsx)(`span`,{className:`bn-showcase-op-name`,children:D.operatorId?.name||`Operator`})]})]}),(0,w.jsx)(`div`,{className:`bn-number-display`,children:U(D.number)}),(0,w.jsxs)(`div`,{className:`bn-showcase-price-row`,children:[(0,w.jsxs)(`div`,{className:`bn-showcase-price-left`,children:[(0,w.jsx)(`div`,{className:`bn-you-pay-label`,children:`You Pay`}),(0,w.jsxs)(`div`,{className:`bn-showcase-price`,children:[`₹`,K.toLocaleString(`en-IN`)]}),q&&(0,w.jsxs)(`div`,{className:`bn-showcase-was`,children:[(0,w.jsxs)(`span`,{className:`bn-showcase-strike`,children:[`₹`,D.price.toLocaleString(`en-IN`)]}),(0,w.jsxs)(`span`,{className:`bn-showcase-save-pill`,children:[`Save `,J,`%`]})]})]}),(0,w.jsx)(`div`,{className:`bn-showcase-feats`,children:[`Lifetime validity`,`Instant activation`,`Free delivery`].map(e=>(0,w.jsxs)(`div`,{className:`bn-feat-chip`,children:[(0,w.jsx)(`span`,{className:`bn-feat-check`,children:`✓`}),` `,e]},e))})]})]}),(0,w.jsxs)(f.div,{className:`bn-card`,initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.1,duration:.4},children:[(0,w.jsx)(`div`,{className:`bn-card-step`,children:`Step 1`}),(0,w.jsx)(`h2`,{className:`bn-card-title`,children:k?`Hey ${k.fullName??k.name??`User`} 👋`:`Delivery Address`}),(0,w.jsx)(`p`,{className:`bn-card-sub`,children:`Select or add a delivery address for your SIM`}),(0,w.jsx)(`div`,{className:`bn-addr-grid`,children:A.map(e=>(0,w.jsxs)(`div`,{className:`bn-addr-item${N===e._id?` bn-addr-selected`:``}`,onClick:()=>P(e._id),children:[(0,w.jsxs)(`div`,{className:`bn-addr-top`,children:[(0,w.jsxs)(`p`,{className:`bn-addr-line`,children:[e.houseNo,`, `,e.street]}),e.isDefault&&(0,w.jsx)(`span`,{className:`bn-default-badge`,children:`Default`})]}),(0,w.jsxs)(`p`,{className:`bn-addr-city`,children:[e.city,`, `,e.state,` — `,e.pincode]}),(0,w.jsxs)(`div`,{className:`bn-addr-actions`,children:[(0,w.jsxs)(`button`,{className:`bn-addr-edit`,onClick:t=>{t.stopPropagation(),R(e),I(!0)},children:[(0,w.jsx)(v,{size:11}),` Edit`]}),(0,w.jsxs)(`button`,{className:`bn-addr-del`,onClick:t=>{t.stopPropagation(),j.mutate(e._id,{onSuccess:()=>M.invalidateQueries({queryKey:[`address`]})})},children:[(0,w.jsx)(h,{size:11}),` Remove`]})]})]},e._id))}),(0,w.jsxs)(`div`,{className:`bn-addr-btns`,children:[(0,w.jsxs)(`button`,{className:`bn-add-addr-btn`,onClick:()=>{R(null),I(!0)},children:[(0,w.jsx)(x,{size:14}),` Add Address`]}),(0,w.jsxs)(`button`,{className:`bn-loc-btn`,onClick:W,disabled:z,style:{opacity:z?.6:1},children:[(0,w.jsx)(y,{size:14}),z?`Fetching...`:`Use My Location`]})]})]}),(0,w.jsxs)(f.div,{className:`bn-card`,initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.2,duration:.4},children:[(0,w.jsx)(`div`,{className:`bn-card-step`,children:`Step 2`}),(0,w.jsx)(`h2`,{className:`bn-card-title`,children:`Payment Method`}),(0,w.jsx)(`p`,{className:`bn-card-sub`,children:`How would you like to pay?`}),(0,w.jsx)(`div`,{className:`bn-pay-grid`,children:[`UPI`,`Card`,`Net Banking`,`COD`].map(e=>{let t=e===`COD`;return(0,w.jsxs)(`div`,{className:`bn-pay-item${t?` bn-pay-selected`:` bn-pay-disabled`}`,children:[e,!t&&(0,w.jsx)(`span`,{className:`bn-coming-soon`,children:`Soon`})]},e)})}),(0,w.jsx)(`p`,{className:`bn-pay-note`,children:`Only Cash on Delivery is available right now.`})]})]}),(0,w.jsx)(`div`,{className:`bn-right`,children:(0,w.jsxs)(f.div,{className:`bn-summary-card`,initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.15,duration:.4},children:[(0,w.jsxs)(`div`,{className:`bn-summary-header`,children:[(0,w.jsx)(t,{size:15}),(0,w.jsx)(`span`,{children:`Order Summary`}),(0,w.jsx)(`span`,{className:`bn-fancy-badge`,children:`⭐ VIP`})]}),(0,w.jsxs)(`div`,{className:`bn-summary-number-card`,children:[(0,w.jsxs)(`div`,{className:`bn-summary-number-top`,children:[(0,w.jsxs)(`div`,{className:`bn-summary-op-row`,children:[D.operatorId?.logo?(0,w.jsx)(`img`,{src:D.operatorId.logo,alt:``,className:`bn-op-logo`}):(0,w.jsx)(`div`,{className:`bn-op-avatar`,children:`📶`}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`div`,{className:`bn-op-name`,children:D.operatorId?.name||`Operator`}),(0,w.jsx)(`div`,{className:`bn-op-sub`,children:`Fancy Number · VIP`})]})]}),(0,w.jsx)(`div`,{className:`bn-summary-number-display`,children:U(D.number)})]}),D.vipCategoryId?.name&&(0,w.jsxs)(`div`,{className:`bn-summary-category`,children:[`👑 `,D.vipCategoryId.name]})]}),(0,w.jsxs)(`div`,{className:`bn-price-section`,children:[(0,w.jsxs)(`div`,{className:`bn-price-row`,children:[(0,w.jsx)(`span`,{children:`MRP`}),(0,w.jsxs)(`span`,{children:[`₹`,(D.price||K).toLocaleString(`en-IN`)]})]}),q&&(0,w.jsxs)(`div`,{className:`bn-price-row bn-price-savings`,children:[(0,w.jsxs)(`span`,{children:[`Discount (`,J,`% off)`]}),(0,w.jsxs)(`span`,{children:[`−₹`,(D.price-D.salePrice).toLocaleString(`en-IN`)]})]}),(0,w.jsxs)(`div`,{className:`bn-price-row`,children:[(0,w.jsx)(`span`,{children:`Delivery`}),(0,w.jsx)(`span`,{className:`bn-free-tag`,children:`FREE`})]}),(0,w.jsx)(`div`,{className:`bn-price-divider`}),(0,w.jsxs)(`div`,{className:`bn-price-total-row`,children:[(0,w.jsx)(`span`,{children:`Total`}),(0,w.jsxs)(`span`,{children:[`₹`,K.toLocaleString(`en-IN`)]})]})]}),(0,w.jsxs)(`div`,{className:`bn-info-section`,children:[(0,w.jsxs)(`div`,{className:`bn-info-row`,children:[(0,w.jsx)(`span`,{className:`bn-info-key`,children:`Deliver to`}),(0,w.jsx)(`span`,{className:`bn-info-val`,children:Y?`${Y.houseNo}, ${Y.street}`:`—`})]}),(0,w.jsxs)(`div`,{className:`bn-info-row`,children:[(0,w.jsx)(`span`,{className:`bn-info-key`,children:`Payment`}),(0,w.jsx)(`span`,{className:`bn-info-val`,children:`Cash on Delivery`})]}),(0,w.jsxs)(`div`,{className:`bn-info-row`,children:[(0,w.jsx)(`span`,{className:`bn-info-key`,children:`Delivery`}),(0,w.jsx)(`span`,{className:`bn-info-val`,children:`2–3 business days`})]}),(0,w.jsxs)(`div`,{className:`bn-info-row`,children:[(0,w.jsx)(`span`,{className:`bn-info-key`,children:`Order Type`}),(0,w.jsx)(`span`,{className:`bn-info-val`,style:{color:`#B45309`},children:`Fancy Number`})]})]}),(0,w.jsxs)(`div`,{className:`bn-readiness`,children:[(0,w.jsxs)(`div`,{className:`bn-ready-row`,children:[(0,w.jsx)(`span`,{className:`bn-ready-dot${N?` ok`:``}`}),(0,w.jsx)(`span`,{className:`bn-ready-txt${N?` ok`:``}`,children:`Delivery address`})]}),(0,w.jsxs)(`div`,{className:`bn-ready-row`,children:[(0,w.jsx)(`span`,{className:`bn-ready-dot ok`}),(0,w.jsx)(`span`,{className:`bn-ready-txt ok`,children:`Number selected ✓`})]}),(0,w.jsxs)(`div`,{className:`bn-ready-row`,children:[(0,w.jsx)(`span`,{className:`bn-ready-dot ok`}),(0,w.jsx)(`span`,{className:`bn-ready-txt ok`,children:`Payment — COD`})]})]}),V&&(0,w.jsxs)(`div`,{className:`bn-kyc-banner`,onClick:()=>r(`/profile?tab=kyc`),children:[(0,w.jsx)(`div`,{className:`bn-kyc-banner-icon`,children:(0,w.jsx)(n,{size:18})}),(0,w.jsxs)(`div`,{className:`bn-kyc-banner-text`,children:[(0,w.jsx)(`div`,{className:`bn-kyc-banner-title`,children:`Complete Aadhaar & PAN Verification`}),(0,w.jsx)(`div`,{className:`bn-kyc-banner-sub`,children:`Required before placing this order`})]}),(0,w.jsx)(e,{size:18,className:`bn-kyc-banner-arrow`})]}),(0,w.jsx)(`button`,{className:`bn-pay-btn`,onClick:G,disabled:!N||T,style:{background:!N||T?`linear-gradient(135deg, #FCD34D, #FBBF24)`:`linear-gradient(135deg, #B45309, #F59E0B)`,opacity:!N||T?.7:1,cursor:!N||T?`not-allowed`:`pointer`},children:T?`Confirming Booking...`:`Confirm Booking — ₹${K.toLocaleString(`en-IN`)} →`}),(0,w.jsx)(`button`,{className:`bn-cancel-btn`,onClick:()=>r(-1),children:`Cancel`}),(0,w.jsx)(`div`,{className:`bn-trust-strip`,children:[{icon:`🔒`,label:`Secure`},{icon:`✅`,label:`100% Safe`},{icon:`🚚`,label:`Free Delivery`}].map(e=>(0,w.jsxs)(`div`,{className:`bn-trust-item`,children:[(0,w.jsx)(`span`,{children:e.icon}),(0,w.jsx)(`span`,{children:e.label})]},e.label))})]})})]}),F&&(0,w.jsx)(b,{close:()=>{I(!1),R(null)},editingAddress:L})]})},E=`
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


.bn-kyc-banner { margin-top: 14px; display: flex; align-items: center; gap: 12px; background: linear-gradient(135deg, #FFFBEB, #FEF3C7); border: 1.5px solid #FDE68A; border-radius: 14px; padding: 13px 14px; cursor: pointer; transition: all 0.15s; }
  .bn-kyc-banner:hover { border-color: #F59E0B; box-shadow: 0 4px 14px rgba(245,158,11,0.18); transform: translateY(-1px); }
  .bn-kyc-banner-icon { width: 34px; height: 34px; border-radius: 10px; background: #fff; border: 1px solid #FDE68A; color: #B45309; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .bn-kyc-banner-text { flex: 1; }
  .bn-kyc-banner-title { font-size: 13px; font-weight: 800; color: #92400E; }
  .bn-kyc-banner-sub { font-size: 11px; color: #B45309; margin-top: 1px; }
  .bn-kyc-banner-arrow { color: #B45309; flex-shrink: 0; }

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
`;export{T as default};