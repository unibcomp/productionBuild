import{A as e,G as t,J as n,S as r,Y as i,Z as a,tt as o,x as s}from"./index-D-zxq-Ip.js";import{t as c}from"./proxy-B9Sxw88z.js";import{t as l}from"./AnimatePresence-Cz3GYKPu.js";import{t as u}from"./useUser-CrptMCwB.js";import{t as d}from"./useEsim-DR4ZUhFl.js";var f=o(a(),1),p=t(),m=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html, body, #root {
  min-height: 100%;
  background: #F5F7FA;
  font-family: 'Inter', sans-serif;
  color: #111827;
  -webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-thumb { background: #D1D5DB; border-radius: 4px; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ─── Root ─── */
.pd-root {
  min-height: 100vh;
  background: #F5F7FA;
  padding-bottom: 60px;
}


.pd-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15,23,42,0.45);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 20px;
}

.pd-modal {
  background: white;
  border-radius: 22px;
  width: 100%;
  max-width: 420px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow: 0 24px 64px rgba(134, 134, 134, 0.18);
}

.pd-modal-head {
  background: linear-gradient(135deg,#2563eb,#6366f1);
  padding: 22px;
  position: relative;
}

.pd-modal-title {
  color: white;
  font-size: 20px;
  font-weight: 700;
}

.pd-modal-sub {
  color: rgba(255,255,255,.75);
  font-size: 13px;
  margin-top: 4px;
}

.pd-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(255,255,255,.2);
  color: white;
}

.pd-modal-tabs {
  display: flex;
  gap: 4px;
  margin: 14px;
  padding: 4px;
  border-radius: 12px;
  background: #f3f4f6;
}

.pd-tab {
  flex: 1;
  border: none;
  background: transparent;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.pd-tab-active {
  background: linear-gradient(135deg,#2563eb,#6366f1);
  color: white;
}

.pd-modal-body {
  padding: 16px;
}

/* ─── Nav ─── */
.pd-nav {
  position: sticky; top: 0; z-index: 40;
  height: 56px; padding: 0 24px;
  display: flex; align-items: center; justify-content: space-between;
  background: rgba(245,247,250,0.95);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid #E5E7EB;
}
.pd-back {
  display: flex; align-items: center; gap: 6px;
  padding: 7px 14px; border-radius: 8px;
  border: 1px solid #E5E7EB; background: #fff;
  font-size: 13px; font-weight: 600; color: #6B7280;
  cursor: pointer; font-family: 'Inter', sans-serif;
  transition: all 0.14s;
}
.pd-back:hover { color: #2563EB; border-color: #BFDBFE; background: #EFF6FF; }
.pd-nav-pill {
  padding: 5px 12px; border-radius: 20px;
  background: #EFF6FF; border: 1px solid #BFDBFE;
  font-size: 11px; font-weight: 700; color: #2563EB;
  letter-spacing: 0.03em;
}

/* ─── Page wrapper — NOT full width ─── */
.pd-page {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* ─── HERO ─── */
.pd-hero {
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 6px rgba(0,0,0,0.05);
  animation: fadeUp 0.35s ease both;
}

.pd-hero-top {
  padding: 22px 22px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid #F3F4F6;
}

.pd-plan-label {
  font-size: 11px; font-weight: 600;
  color: #9CA3AF; letter-spacing: 0.05em;
  text-transform: uppercase; margin-bottom: 6px;
}
.pd-plan-name {
  font-size: 22px; font-weight: 800;
  color: #111827; line-height: 1.2; margin-bottom: 4px;
}
.pd-plan-network {
  font-size: 13px; font-weight: 500; color: #6B7280;
}

.pd-price-right { text-align: right; flex-shrink: 0; }
.pd-price-label {
  font-size: 11px; font-weight: 600;
  color: #9CA3AF; letter-spacing: 0.05em;
  text-transform: uppercase; margin-bottom: 4px;
}
.pd-price {
  font-size: 36px; font-weight: 800;
  color: #2563EB; line-height: 1;
}
.pd-price-sym { font-size: 20px; font-weight: 700; }
.pd-currency {
  font-size: 11px; font-weight: 500;
  color: #9CA3AF; margin-top: 3px;
}

/* ─── Stats strip ─── */
.pd-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.pd-stat {
  padding: 16px 18px;
  border-right: 1px solid #F3F4F6;
}
.pd-stat:last-child { border-right: none; }
.pd-stat-icon {
  width: 28px; height: 28px; border-radius: 7px;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; margin-bottom: 8px;
}
.pd-stat-lbl {
  font-size: 10px; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.07em;
  color: #9CA3AF; margin-bottom: 3px;
}
.pd-stat-val { font-size: 15px; font-weight: 700; color: #111827; }
.pd-stat-unit { font-size: 10px; color: #D1D5DB; font-weight: 500; margin-top: 1px; }

/* ─── Card ─── */
.pd-card {
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 16px; overflow: hidden;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
  animation: fadeUp 0.35s ease both;
}
.pd-card-head {
  padding: 14px 20px;
  border-bottom: 1px solid #F3F4F6;
  display: flex; align-items: center; gap: 9px;
}
.pd-card-icon {
  width: 30px; height: 30px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; flex-shrink: 0;
}
.pd-card-title { font-size: 13px; font-weight: 700; color: #111827; }
.pd-card-sub { font-size: 11px; color: #9CA3AF; font-weight: 500; margin-top: 1px; }

/* ─── Rows ─── */
.pd-rows { padding: 4px 0; }
.pd-row {
  display: flex; align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-bottom: 1px solid #F9FAFB;
  transition: background 0.1s;
}
.pd-row:last-child { border-bottom: none; }
.pd-row:hover { background: #FAFAFA; }
.pd-row-key {
  font-size: 13px; font-weight: 500; color: #6B7280;
}
.pd-row-val {
  font-size: 13px; font-weight: 600; color: #111827;
  background: #F3F4F6; border: 1px solid #E5E7EB;
  border-radius: 6px; padding: 3px 10px;
}
.pd-row-val-green { background: #ECFDF5; border-color: #A7F3D0; color: #059669; }
.pd-row-val-blue  { background: #EFF6FF; border-color: #BFDBFE; color: #2563EB; }

/* ─── Countries ─── */
.pd-countries {
  padding: 16px 20px;
  display: flex; flex-wrap: wrap; gap: 7px;
}
.pd-country {
  display: flex; align-items: center; gap: 6px;
  padding: 6px 12px; border-radius: 8px;
  background: #F9FAFB; border: 1px solid #E5E7EB;
  font-size: 12.5px; font-weight: 600; color: #374151;
  transition: all 0.12s; cursor: default;
}
.pd-country:hover {
  border-color: #BFDBFE; background: #EFF6FF; color: #2563EB;
}

/* ─── Comms ─── */
.pd-comm-grid { display: grid; grid-template-columns: 1fr 1fr; }
.pd-comm {
  padding: 20px 22px; text-align: center;
  border-right: 1px solid #F3F4F6;
}
.pd-comm:last-child { border-right: none; }
.pd-comm-num { font-size: 32px; font-weight: 800; color: #111827; line-height: 1; }
.pd-comm-lbl {
  font-size: 10px; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.07em;
  color: #9CA3AF; margin-top: 5px;
}
.pd-comm-unit { font-size: 11px; color: #D1D5DB; font-weight: 500; margin-top: 2px; }

/* ─── FUP ─── */
.pd-fup {
  margin: 14px 20px 16px;
  padding: 12px 14px; border-radius: 10px;
  background: #FFFBEB; border: 1px solid #FDE68A;
  display: flex; gap: 10px; align-items: flex-start;
}
.pd-fup-badge {
  padding: 2px 7px; border-radius: 5px;
  background: #FEF3C7; border: 1px solid #FDE68A;
  color: #92400E; font-size: 10px; font-weight: 700;
  letter-spacing: 0.05em; flex-shrink: 0; margin-top: 1px;
}
.pd-fup p { font-size: 12.5px; line-height: 1.6; color: #78350F; font-weight: 500; }

/* ─── Tags ─── */
.pd-tags { padding: 14px 20px; display: flex; flex-wrap: wrap; gap: 6px; }
.pd-tag {
  padding: 5px 11px; border-radius: 7px;
  font-size: 12px; font-weight: 600; cursor: default;
}
.pd-tag-blue  { background: #EFF6FF; border: 1px solid #BFDBFE; color: #2563EB; }
.pd-tag-green { background: #ECFDF5; border: 1px solid #A7F3D0; color: #059669; }
.pd-tag-slate { background: #F3F4F6; border: 1px solid #E5E7EB; color: #4B5563; }

/* ─── BUY BUTTON SECTION ─── */
.pd-buy-section {
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 16px;
  padding: 20px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
  animation: fadeUp 0.35s ease both;
}
.pd-buy-info {}
.pd-buy-total-lbl {
  font-size: 11px; font-weight: 600;
  color: #9CA3AF; text-transform: uppercase;
  letter-spacing: 0.05em; margin-bottom: 3px;
}
.pd-buy-total-price {
  font-size: 26px; font-weight: 800;
  color: #111827; line-height: 1;
}
.pd-buy-total-sym { font-size: 16px; font-weight: 700; color: #6B7280; }
.pd-buy-sub {
  font-size: 11.5px; font-weight: 500;
  color: #9CA3AF; margin-top: 3px;
}
.pd-buy-btn {
  flex-shrink: 0;
  padding: 12px 28px;
  border: none; border-radius: 10px;
  background: #2563EB; color: #fff;
  font-size: 14px; font-weight: 700;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.15s;
  box-shadow: 0 2px 10px rgba(37,99,235,0.25);
  white-space: nowrap;
}
.pd-buy-btn:hover {
  background: #1D4ED8;
  box-shadow: 0 4px 16px rgba(37,99,235,0.35);
  transform: translateY(-1px);
}
.pd-buy-btn:active { transform: scale(0.98); }

/* ─── Loading / Error ─── */
.pd-center {
  min-height: 100vh; display: flex;
  align-items: center; justify-content: center;
  background: #F5F7FA; font-family: 'Inter', sans-serif;
}
.pd-spinner {
  width: 36px; height: 36px; border-radius: 50%;
  border: 3px solid #E5E7EB; border-top-color: #2563EB;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 12px;
}
.pd-err {
  text-align: center; max-width: 320px;
  background: #fff; border: 1px solid #E5E7EB;
  border-radius: 16px; padding: 36px 28px;
}
.pd-err h2 { font-size: 17px; font-weight: 700; margin: 10px 0 6px; }
.pd-err p  { font-size: 13px; color: #9CA3AF; margin-bottom: 18px; }
.pd-err-btn {
  padding: 10px 22px; border-radius: 8px; border: none;
  background: #2563EB; color: #fff;
  font-size: 13px; font-weight: 700; cursor: pointer;
  font-family: 'Inter', sans-serif;
}

/* ─── Responsive ─── */
@media (max-width: 600px) {
  .pd-nav { padding: 0 14px; }
  .pd-page { padding: 16px 12px 40px; }
  .pd-hero-top { flex-direction: column; }
  .pd-price-right { text-align: left; }
  .pd-stats { grid-template-columns: repeat(2, 1fr); }
  .pd-stat:nth-child(odd)  { border-right: 1px solid #F3F4F6; }
  .pd-stat:nth-child(even) { border-right: none; }
  .pd-stat { border-bottom: 1px solid #F3F4F6; }
  .pd-stat:nth-last-child(-n+2) { border-bottom: none; }
  .pd-buy-section { flex-direction: column; align-items: stretch; }
  .pd-buy-btn { text-align: center; }
}
`,h=({icon:e,bg:t,label:n,value:r,unit:i})=>r==null||r===``?null:(0,p.jsxs)(`div`,{className:`pd-stat`,children:[(0,p.jsx)(`div`,{className:`pd-stat-icon`,style:{background:t},children:e}),(0,p.jsx)(`div`,{className:`pd-stat-lbl`,children:n}),(0,p.jsx)(`div`,{className:`pd-stat-val`,children:r}),i&&(0,p.jsx)(`div`,{className:`pd-stat-unit`,children:i})]}),g=({label:e,value:t,variant:n=`normal`})=>t==null||t===``?null:(0,p.jsxs)(`div`,{className:`pd-row`,children:[(0,p.jsx)(`span`,{className:`pd-row-key`,children:e}),(0,p.jsx)(`span`,{className:n===`green`?`pd-row-val pd-row-val-green`:n===`blue`?`pd-row-val pd-row-val-blue`:`pd-row-val`,children:t})]}),_=()=>{let t=n(),{id:a}=i(),{data:o,isLoading:_}=d(a),{data:v}=u(),[y,b]=(0,f.useState)(!1),[x,S]=(0,f.useState)(!1);if(_)return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`style`,{children:m}),(0,p.jsx)(`div`,{className:`pd-center`,children:(0,p.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,p.jsx)(`div`,{className:`pd-spinner`}),(0,p.jsx)(`p`,{style:{fontSize:13,fontWeight:600,color:`#9CA3AF`},children:`Loading plan…`})]})})]});if(!o)return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`style`,{children:m}),(0,p.jsx)(`div`,{className:`pd-center`,children:(0,p.jsxs)(`div`,{className:`pd-err`,children:[(0,p.jsx)(`div`,{style:{fontSize:38},children:`🔍`}),(0,p.jsx)(`h2`,{children:`Plan not found`}),(0,p.jsx)(`p`,{children:`This plan may no longer be available.`}),(0,p.jsx)(`button`,{className:`pd-err-btn`,onClick:()=>t(-1),children:`← Go back`})]})})]});let C=o.network?.includes(`5G`)?`5G Network`:o.network?.includes(`4G`)?`4G LTE`:null,w=o.countries??[];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`style`,{children:m}),(0,p.jsxs)(`div`,{className:`pd-root`,children:[(0,p.jsxs)(`nav`,{className:`pd-nav`,children:[(0,p.jsx)(`button`,{className:`pd-back`,onClick:()=>t(-1),children:`← Back to plans`}),(0,p.jsx)(`span`,{className:`pd-nav-pill`,children:`eSIM Plan`})]}),(0,p.jsxs)(`div`,{className:`pd-page`,children:[(0,p.jsxs)(`div`,{className:`pd-hero`,children:[(0,p.jsxs)(`div`,{className:`pd-hero-top`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`pd-plan-label`,children:`Plan name`}),(0,p.jsx)(`div`,{className:`pd-plan-name`,children:o.name}),(0,p.jsx)(`div`,{className:`pd-plan-network`,children:o.network})]}),(0,p.jsxs)(`div`,{className:`pd-price-right`,children:[(0,p.jsx)(`div`,{className:`pd-price-label`,children:`Price`}),(0,p.jsxs)(`div`,{className:`pd-price`,children:[(0,p.jsx)(`span`,{className:`pd-price-sym`,children:`₹`}),o.price]}),o.currency&&(0,p.jsx)(`div`,{className:`pd-currency`,children:o.currency})]})]}),(0,p.jsxs)(`div`,{className:`pd-stats`,children:[(0,p.jsx)(h,{icon:`📦`,bg:`#EFF6FF`,label:`Data`,value:o.isUnlimited?`Unlimited`:o.dataLimit}),(0,p.jsx)(h,{icon:`📅`,bg:`#F0FDF4`,label:`Validity`,value:o.validityDays,unit:`days`}),(0,p.jsx)(h,{icon:`📞`,bg:`#FFFBEB`,label:`Calls`,value:o.callInSeconds,unit:`sec`}),(0,p.jsx)(h,{icon:`💬`,bg:`#FAF5FF`,label:`SMS`,value:o.sms,unit:`/ day`})]})]}),w.length>0&&(0,p.jsxs)(`div`,{className:`pd-card`,style:{animationDelay:`50ms`},children:[(0,p.jsxs)(`div`,{className:`pd-card-head`,children:[(0,p.jsx)(`div`,{className:`pd-card-icon`,style:{background:`#EFF6FF`},children:`🌍`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`pd-card-title`,children:`Coverage Countries`}),(0,p.jsxs)(`div`,{className:`pd-card-sub`,children:[w.length,` countr`,w.length===1?`y`:`ies`,` supported`]})]})]}),(0,p.jsx)(`div`,{className:`pd-countries`,children:w.map(e=>(0,p.jsxs)(`div`,{className:`pd-country`,children:[`🏳️ `,e.name]},e._id))})]}),(0,p.jsxs)(`div`,{className:`pd-card`,style:{animationDelay:`80ms`},children:[(0,p.jsxs)(`div`,{className:`pd-card-head`,children:[(0,p.jsx)(`div`,{className:`pd-card-icon`,style:{background:`#F0FDF4`},children:`📋`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`pd-card-title`,children:`Plan Details`}),(0,p.jsx)(`div`,{className:`pd-card-sub`,children:`Full breakdown`})]})]}),(0,p.jsxs)(`div`,{className:`pd-rows`,children:[(0,p.jsx)(g,{label:`Data`,value:o.isUnlimited?`Unlimited`:o.dataLimit,variant:o.isUnlimited?`green`:`blue`}),(0,p.jsx)(g,{label:`Validity`,value:o.validityDays==null?null:`${o.validityDays} days`}),(0,p.jsx)(g,{label:`Network`,value:o.network}),(0,p.jsx)(g,{label:`Coverage`,value:o.coverage}),(0,p.jsx)(g,{label:`Data Type`,value:o.isUnlimited?`Unlimited`:`Fixed`,variant:o.isUnlimited?`green`:`normal`}),o.dataInMb!=null&&(0,p.jsx)(g,{label:`Data in MB`,value:`${o.dataInMb} MB`})]})]}),(o.callInSeconds!=null||o.sms!=null)&&(0,p.jsxs)(`div`,{className:`pd-card`,style:{animationDelay:`110ms`},children:[(0,p.jsxs)(`div`,{className:`pd-card-head`,children:[(0,p.jsx)(`div`,{className:`pd-card-icon`,style:{background:`#FFFBEB`},children:`📞`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`pd-card-title`,children:`Calls & SMS`}),(0,p.jsx)(`div`,{className:`pd-card-sub`,children:`Included in this plan`})]})]}),(0,p.jsxs)(`div`,{className:`pd-comm-grid`,children:[o.callInSeconds!=null&&(0,p.jsxs)(`div`,{className:`pd-comm`,children:[(0,p.jsx)(`div`,{className:`pd-comm-num`,children:o.callInSeconds}),(0,p.jsx)(`div`,{className:`pd-comm-lbl`,children:`Call Quota`}),(0,p.jsx)(`div`,{className:`pd-comm-unit`,children:`seconds`})]}),o.sms!=null&&(0,p.jsxs)(`div`,{className:`pd-comm`,children:[(0,p.jsx)(`div`,{className:`pd-comm-num`,children:o.sms}),(0,p.jsx)(`div`,{className:`pd-comm-lbl`,children:`SMS / Day`}),(0,p.jsx)(`div`,{className:`pd-comm-unit`,children:`messages`})]})]})]}),o.fupPolicy&&(0,p.jsxs)(`div`,{className:`pd-card`,style:{animationDelay:`135ms`},children:[(0,p.jsxs)(`div`,{className:`pd-card-head`,children:[(0,p.jsx)(`div`,{className:`pd-card-icon`,style:{background:`#FFFBEB`},children:`⚡`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`pd-card-title`,children:`Fair Usage Policy`}),(0,p.jsx)(`div`,{className:`pd-card-sub`,children:`Speed limits after threshold`})]})]}),(0,p.jsxs)(`div`,{className:`pd-fup`,children:[(0,p.jsx)(`span`,{className:`pd-fup-badge`,children:`FUP`}),(0,p.jsx)(`p`,{children:o.fupPolicy})]})]}),(0,p.jsxs)(`div`,{className:`pd-card`,style:{animationDelay:`160ms`},children:[(0,p.jsxs)(`div`,{className:`pd-card-head`,children:[(0,p.jsx)(`div`,{className:`pd-card-icon`,style:{background:`#F5F3FF`},children:`✨`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:`pd-card-title`,children:`Highlights`}),(0,p.jsx)(`div`,{className:`pd-card-sub`,children:`Key features at a glance`})]})]}),(0,p.jsxs)(`div`,{className:`pd-tags`,children:[o.isUnlimited&&(0,p.jsx)(`span`,{className:`pd-tag pd-tag-green`,children:`♾️ Unlimited Data`}),C&&(0,p.jsxs)(`span`,{className:`pd-tag pd-tag-blue`,children:[`🚀 `,C]}),o.coverage&&(0,p.jsxs)(`span`,{className:`pd-tag pd-tag-slate`,children:[`🌍 `,o.coverage]}),o.validityDays!=null&&(0,p.jsxs)(`span`,{className:`pd-tag pd-tag-slate`,children:[`📅 `,o.validityDays,` Day Validity`]}),w.length>0&&(0,p.jsxs)(`span`,{className:`pd-tag pd-tag-blue`,children:[`🗺️ `,w.length,` Countr`,w.length===1?`y`:`ies`]}),(0,p.jsx)(`span`,{className:`pd-tag pd-tag-slate`,children:`📱 eSIM Ready`}),(0,p.jsx)(`span`,{className:`pd-tag pd-tag-slate`,children:`⚡ Instant Activation`})]})]}),(0,p.jsxs)(`div`,{className:`pd-buy-section`,style:{animationDelay:`185ms`},children:[(0,p.jsxs)(`div`,{className:`pd-buy-info`,children:[(0,p.jsx)(`div`,{className:`pd-buy-total-lbl`,children:`Total`}),(0,p.jsxs)(`div`,{className:`pd-buy-total-price`,children:[(0,p.jsx)(`span`,{className:`pd-buy-total-sym`,children:`₹`}),o.price]}),(0,p.jsxs)(`div`,{className:`pd-buy-sub`,children:[o.isUnlimited?`Unlimited data`:o.dataLimit?o.dataLimit:``,o.validityDays==null?``:` · ${o.validityDays} day validity`]})]}),(0,p.jsx)(`button`,{className:`pd-buy-btn`,onClick:()=>{if(!v){b(!0);return}t(`/esim-buy-now/${o._id}`)},children:`Buy Now`})]})]}),(0,p.jsx)(l,{children:y&&(0,p.jsx)(c.div,{className:`pd-overlay`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,p.jsxs)(c.div,{className:`pd-modal`,initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},children:[(0,p.jsxs)(`div`,{className:`pd-modal-head`,children:[(0,p.jsx)(`button`,{className:`pd-modal-close`,onClick:()=>b(!1),children:(0,p.jsx)(e,{size:16})}),(0,p.jsx)(`h3`,{className:`pd-modal-title`,children:x?`Create Account`:`Welcome Back`}),(0,p.jsx)(`p`,{className:`pd-modal-sub`,children:x?`Sign up to purchase this eSIM`:`Login to purchase this eSIM`})]}),(0,p.jsxs)(`div`,{className:`pd-modal-tabs`,children:[(0,p.jsx)(`button`,{className:`pd-tab ${x?``:`pd-tab-active`}`,onClick:()=>S(!1),children:`Login`}),(0,p.jsx)(`button`,{className:`pd-tab ${x?`pd-tab-active`:``}`,onClick:()=>S(!0),children:`Sign Up`})]}),(0,p.jsx)(`div`,{className:`pd-modal-body`,children:x?(0,p.jsx)(r,{onSuccess:()=>b(!1)}):(0,p.jsx)(s,{onSuccess:()=>b(!1),onSignupRedirect:()=>{},onForgotRedirect:()=>{}})})]})})})]})]})};export{_ as default};