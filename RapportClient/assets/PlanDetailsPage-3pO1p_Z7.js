import{A as e,F as t,Q as n,S as r,ct as i,it as a,j as o,nt as s,q as c,tt as l,x as u}from"./index-CCQscGVF.js";import{t as d}from"./proxy-JIEtGwCP.js";import{t as f}from"./AnimatePresence-gKYvXCaS.js";import{t as p}from"./useUser-0PyzP1l3.js";import{t as m}from"./useEsim-C-t5rEoR.js";var h=c(`earth`,[[`path`,{d:`M21.54 15H17a2 2 0 0 0-2 2v4.54`,key:`1djwo0`}],[`path`,{d:`M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17`,key:`1tzkfa`}],[`path`,{d:`M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05`,key:`14pb5j`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),g=i(a(),1),_=n(),v=`
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html, body, #root {
  min-height: 100%;
  background: #F5F6FA;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #0B1220;
  -webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-thumb { background: #D1D5DB; border-radius: 4px; }

.mono { font-family: 'IBM Plex Mono', monospace; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes ringPulse {
  0%   { opacity: 0.5; transform: scale(0.85); }
  70%  { opacity: 0; transform: scale(1.4); }
  100% { opacity: 0; transform: scale(1.4); }
}

@media (prefers-reduced-motion: reduce) {
  .pd-ring { animation: none !important; opacity: 0.15 !important; }
  .pd-hero, .pd-card, .pd-side-card { animation: none !important; }
}

.pd-root { min-height: 100vh; background: #F5F6FA; padding-bottom: 60px; }

/* ─── Nav ─── */
.pd-nav {
  position: sticky; top: 0; z-index: 40;
  height: 60px; padding: 0 40px;
  display: flex; align-items: center; justify-content: space-between;
  background: rgba(245,246,250,0.95);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid #E5E7EB;
}
.pd-back {
  display: flex; align-items: center; gap: 6px;
  padding: 7px 14px; border-radius: 8px;
  border: 1px solid #E5E7EB; background: #fff;
  font-size: 13px; font-weight: 600; color: #4B5563;
  cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif;
  transition: all 0.14s;
}
.pd-back:hover { color: #0B1D3F; border-color: #BFDBFE; background: #EFF6FF; }
.pd-back:focus-visible { outline: 2px solid #2563EB; outline-offset: 2px; }
.pd-nav-pill {
  padding: 5px 12px; border-radius: 20px;
  background: #0B1D3F; border: 1px solid #0B1D3F;
  font-size: 11px; font-weight: 700; color: #22D3EE;
  letter-spacing: 0.04em; font-family: 'IBM Plex Mono', monospace;
}

/* ─── HERO (full-bleed) ─── */
.pd-hero {
  position: relative;
  background:
    radial-gradient(circle at 18px 18px, rgba(255,255,255,0.06) 1.5px, transparent 1.5px),
    linear-gradient(120deg,#0B1D3F 0%, #122B57 65%, #0E2349 100%);
  background-size: 22px 22px, 100% 100%;
  overflow: hidden;
  isolation: isolate;
}

.pd-hero-glow {
  position: absolute;
  top: -120px; right: -80px;
  width: 420px; height: 420px;
  background: radial-gradient(circle, rgba(34,211,238,0.26), transparent 70%);
  filter: blur(20px);
  pointer-events: none;
}

.pd-hero-rings {
  position: absolute;
  top: 10%; right: 6%;
  width: 220px; height: 220px;
  pointer-events: none;
}
.pd-ring { fill: none; stroke: #22D3EE; stroke-width: 1.4; transform-origin: center; animation: ringPulse 3.4s ease-out infinite; }
.pd-ring:nth-child(2) { animation-delay: 0.8s; }
.pd-ring:nth-child(3) { animation-delay: 1.6s; }

.pd-hero-inner {
  position: relative; z-index: 1;
  max-width: 1240px; margin: 0 auto;
  padding: 44px 40px 0;
}

.pd-hero-top {
  display: flex; align-items: flex-start; justify-content: space-between;
  gap: 24px; padding-bottom: 30px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.pd-plan-label {
  font-size: 11px; font-weight: 600; color: #7C93C2;
  letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 9px;
  font-family: 'IBM Plex Mono', monospace;
}
.pd-plan-name { font-size: 32px; font-weight: 800; color: #fff; line-height: 1.18; margin-bottom: 7px; max-width: 560px; }
.pd-plan-network { font-size: 14px; font-weight: 500; color: #9DB2D9; }

.pd-price-right { text-align: right; flex-shrink: 0; }
.pd-price-label {
  font-size: 11px; font-weight: 600; color: #7C93C2;
  letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 6px;
  font-family: 'IBM Plex Mono', monospace;
}
.pd-price { font-size: 42px; font-weight: 700; color: #22D3EE; line-height: 1; font-family: 'IBM Plex Mono', monospace; }
.pd-price-sym { font-size: 22px; font-weight: 600; }
.pd-currency { font-size: 11px; font-weight: 500; color: #7C93C2; margin-top: 5px; }

.pd-stats {
  display: grid; grid-template-columns: repeat(4, 1fr);
  max-width: 1240px; margin: 0 auto;
  padding: 0 40px;
}
.pd-stat { padding: 22px 18px 30px; border-right: 1px solid rgba(255,255,255,0.08); }
.pd-stat:last-child { border-right: none; }
.pd-stat-icon {
  width: 28px; height: 28px; border-radius: 7px;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; margin-bottom: 10px; background: rgba(255,255,255,0.08);
}
.pd-stat-lbl { font-size: 10.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #7C93C2; margin-bottom: 5px; }
.pd-stat-val { font-size: 16px; font-weight: 600; font-family: 'IBM Plex Mono', monospace; }
.pd-stat-unit { font-size: 10.5px; color: #5E76A3; font-weight: 500; margin-top: 2px; }

/* ─── Content grid ─── */
.pd-content {
  max-width: 1240px; margin: 0 auto;
  padding: 28px 40px 0;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 22px;
  align-items: start;
}
.pd-main { display: flex; flex-direction: column; gap: 16px; min-width: 0; }

/* ─── Card ─── */
.pd-card {
  background: #fff; border: 1px solid #E5E7EB; border-radius: 16px; overflow: hidden;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04); animation: fadeUp 0.35s ease both;
}
.pd-card-head { padding: 16px 22px; border-bottom: 1px solid #F3F4F6; display: flex; align-items: center; gap: 10px; }
.pd-card-icon { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; }
.pd-card-title { font-size: 14px; font-weight: 700; color: #0B1220; }
.pd-card-sub { font-size: 11.5px; color: #9CA3AF; font-weight: 500; margin-top: 1px; }

.pd-rows { padding: 4px 0; }
.pd-row { display: flex; align-items: center; justify-content: space-between; padding: 13px 22px; border-bottom: 1px solid #F9FAFB; transition: background 0.1s; }
.pd-row:last-child { border-bottom: none; }
.pd-row:hover { background: #FAFAFA; }
.pd-row-key { font-size: 13.5px; font-weight: 500; color: #6B7280; }
.pd-row-val { font-size: 12.5px; font-weight: 600; color: #0B1220; font-family: 'IBM Plex Mono', monospace; background: #F3F4F6; border: 1px solid #E5E7EB; border-radius: 6px; padding: 3px 10px; }
.pd-row-val-green { background: #ECFDF5; border-color: #A7F3D0; color: #059669; }
.pd-row-val-blue  { background: #EFF6FF; border-color: #BFDBFE; color: #2563EB; }

.pd-countries { padding: 18px 22px; display: flex; flex-wrap: wrap; gap: 8px; }
.pd-country {
  display: flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 8px;
  background: #F9FAFB; border: 1px solid #E5E7EB; font-size: 12.5px; font-weight: 600;
  color: #374151; transition: all 0.12s; cursor: default;
}
.pd-country:hover { border-color: #BFDBFE; background: #EFF6FF; color: #2563EB; }

.pd-comm-grid { display: grid; grid-template-columns: 1fr 1fr; }
.pd-comm { padding: 22px; text-align: center; border-right: 1px solid #F3F4F6; }
.pd-comm:last-child { border-right: none; }
.pd-comm-num { font-size: 30px; font-weight: 700; color: #0B1220; line-height: 1; font-family: 'IBM Plex Mono', monospace; }
.pd-comm-lbl { font-size: 10.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.07em; color: #9CA3AF; margin-top: 6px; }
.pd-comm-unit { font-size: 11px; color: #D1D5DB; font-weight: 500; margin-top: 2px; }

.pd-fup { margin: 16px 22px; padding: 13px 15px; border-radius: 10px; background: #FFFBEB; border: 1px solid #FDE68A; display: flex; gap: 10px; align-items: flex-start; }
.pd-fup-badge { padding: 2px 7px; border-radius: 5px; background: #FEF3C7; border: 1px solid #FDE68A; color: #92400E; font-size: 10px; font-weight: 700; letter-spacing: 0.05em; flex-shrink: 0; margin-top: 1px; font-family: 'IBM Plex Mono', monospace; }
.pd-fup p { font-size: 12.5px; line-height: 1.6; color: #78350F; font-weight: 500; }

.pd-tags { padding: 16px 22px; display: flex; flex-wrap: wrap; gap: 7px; }
.pd-tag { padding: 5px 12px; border-radius: 7px; font-size: 12.5px; font-weight: 600; cursor: default; }
.pd-tag-blue   { background: #EFF6FF; border: 1px solid #BFDBFE; color: #2563EB; }
.pd-tag-violet { background: #F5F3FF; border: 1px solid #DDD6FE; color: #7C3AED; }
.pd-tag-amber  { background: #FFFBEB; border: 1px solid #FDE68A; color: #B45309; }
.pd-tag-green  { background: #ECFDF5; border: 1px solid #A7F3D0; color: #059669; }
.pd-tag-slate  { background: #F3F4F6; border: 1px solid #E5E7EB; color: #4B5563; }

/* ─── Sticky purchase sidebar ─── */
.pd-side { position: sticky; top: 84px; display: flex; flex-direction: column; gap: 14px; }
.pd-side-card {
  background: #fff; border: 1px solid #E5E7EB; border-radius: 16px;
  box-shadow: 0 4px 18px rgba(11,29,63,0.07); animation: fadeUp 0.35s ease both; overflow: hidden;
}
.pd-side-top { padding: 22px 22px 18px; border-bottom: 1px solid #F3F4F6; }
.pd-side-lbl { font-size: 10.5px; font-weight: 600; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; }
.pd-side-price { font-size: 32px; font-weight: 800; color: #0B1220; line-height: 1; font-family: 'IBM Plex Mono', monospace; }
.pd-side-price-sym { font-size: 18px; font-weight: 700; color: #6B7280; }
.pd-side-sub { font-size: 12px; font-weight: 500; color: #9CA3AF; margin-top: 6px; }

.pd-side-rows { padding: 6px 0; }
.pd-side-row { display: flex; align-items: center; justify-content: space-between; padding: 10px 22px; font-size: 12.5px; }
.pd-side-row span:first-child { color: #6B7280; font-weight: 500; }
.pd-side-row span:last-child { color: #0B1220; font-weight: 600; font-family: 'IBM Plex Mono', monospace; }

.pd-buy-btn {
  width: calc(100% - 36px); margin: 6px 18px 18px;
  padding: 13px 0; border: none; border-radius: 10px;
  background: #0B1D3F; color: #fff; font-size: 14.5px; font-weight: 700;
  font-family: 'Plus Jakarta Sans', sans-serif; cursor: pointer; transition: all 0.15s;
  box-shadow: 0 2px 10px rgba(11,29,63,0.30);
}
.pd-buy-btn:hover { background: #16356B; box-shadow: 0 4px 16px rgba(11,29,63,0.40); transform: translateY(-1px); }
.pd-buy-btn:active { transform: scale(0.98); }
.pd-buy-btn:focus-visible { outline: 2px solid #22D3EE; outline-offset: 2px; }

.pd-trust { padding: 16px 22px; display: flex; flex-direction: column; gap: 11px; }
.pd-trust-item { display: flex; align-items: center; gap: 9px; font-size: 12px; font-weight: 600; color: #4B5563; }
.pd-trust-item svg { color: #22D3EE; flex-shrink: 0; }

/* ─── Mobile sticky buy bar ─── */
.pd-mobile-bar {
  display: none;
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 50;
  background: #fff; border-top: 1px solid #E5E7EB;
  padding: 12px 16px; align-items: center; justify-content: space-between; gap: 14px;
  box-shadow: 0 -6px 18px rgba(0,0,0,0.06);
}
.pd-mobile-bar-price { font-size: 19px; font-weight: 800; color: #0B1220; font-family: 'IBM Plex Mono', monospace; }
.pd-mobile-bar-sub { font-size: 10.5px; color: #9CA3AF; font-weight: 500; margin-top: 1px; }
.pd-mobile-bar .pd-buy-btn { width: auto; margin: 0; padding: 11px 24px; flex-shrink: 0; }

/* ─── Modal (unchanged) ─── */
.pd-overlay { position: fixed; inset: 0; background: rgba(8,14,30,0.55); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 100; padding: 20px; }
.pd-modal { background: white; border-radius: 20px; width: 100%; max-width: 420px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 24px 64px rgba(11,29,63,0.28); }
.pd-modal-head { background: linear-gradient(135deg,#0B1D3F,#16356B); padding: 22px; position: relative; }
.pd-modal-title { color: white; font-size: 19px; font-weight: 700; }
.pd-modal-sub { color: rgba(255,255,255,.72); font-size: 13px; margin-top: 4px; }
.pd-modal-close { position: absolute; top: 12px; right: 12px; width: 30px; height: 30px; border: none; border-radius: 50%; cursor: pointer; background: rgba(255,255,255,.16); color: white; display: flex; align-items: center; justify-content: center; }
.pd-modal-close:hover { background: rgba(255,255,255,.26); }
.pd-modal-close:focus-visible { outline: 2px solid #22D3EE; outline-offset: 2px; }
.pd-modal-tabs { display: flex; gap: 4px; margin: 14px; padding: 4px; border-radius: 12px; background: #f3f4f6; }
.pd-tab { flex: 1; border: none; background: transparent; padding: 10px; border-radius: 8px; cursor: pointer; font-weight: 600; font-family: 'Plus Jakarta Sans', sans-serif; color: #4B5563; }
.pd-tab:focus-visible { outline: 2px solid #2563EB; outline-offset: 2px; }
.pd-tab-active { background: linear-gradient(135deg,#0B1D3F,#16356B); color: white; }
.pd-modal-body { padding: 16px; }

/* ─── Loading / Error ─── */
.pd-center { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #F5F6FA; font-family: 'Plus Jakarta Sans', sans-serif; }
.pd-spinner { width: 36px; height: 36px; border-radius: 50%; border: 3px solid #E5E7EB; border-top-color: #0B1D3F; animation: spin 0.8s linear infinite; margin: 0 auto 12px; }
.pd-err { text-align: center; max-width: 320px; background: #fff; border: 1px solid #E5E7EB; border-radius: 16px; padding: 36px 28px; }
.pd-err h2 { font-size: 17px; font-weight: 700; margin: 10px 0 6px; }
.pd-err p  { font-size: 13px; color: #9CA3AF; margin-bottom: 18px; }
.pd-err-btn { padding: 10px 22px; border-radius: 8px; border: none; background: #0B1D3F; color: #fff; font-size: 13px; font-weight: 700; cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif; }
.pd-err-btn:focus-visible { outline: 2px solid #2563EB; outline-offset: 2px; }

/* ─── Responsive ─── */
@media (max-width: 980px) {
  .pd-content { grid-template-columns: 1fr; }
  .pd-side { position: static; }
  .pd-side { display: none; }
  .pd-mobile-bar { display: flex; }
  .pd-root { padding-bottom: 90px; }
}
@media (max-width: 600px) {
  .pd-nav { padding: 0 16px; }
  .pd-hero-inner { padding: 30px 18px 0; }
  .pd-stats { padding: 0 18px; grid-template-columns: repeat(2, 1fr); }
  .pd-content { padding: 20px 16px 0; }
  .pd-hero-rings { display: none; }
  .pd-hero-top { flex-direction: column; gap: 18px; }
  .pd-price-right { text-align: left; }
  .pd-plan-name { font-size: 24px; max-width: 100%; }
  .pd-stat:nth-child(odd)  { border-right: 1px solid rgba(255,255,255,0.08); }
  .pd-stat:nth-child(even) { border-right: none; }
}
`,y=({icon:e,label:t,value:n,unit:r,accent:i})=>n==null||n===``?null:(0,_.jsxs)(`div`,{className:`pd-stat`,children:[(0,_.jsx)(`div`,{className:`pd-stat-icon`,children:e}),(0,_.jsx)(`div`,{className:`pd-stat-lbl`,children:t}),(0,_.jsx)(`div`,{className:`pd-stat-val`,style:{color:i},children:n}),r&&(0,_.jsx)(`div`,{className:`pd-stat-unit`,children:r})]}),b=({label:e,value:t,variant:n=`normal`})=>t==null||t===``?null:(0,_.jsxs)(`div`,{className:`pd-row`,children:[(0,_.jsx)(`span`,{className:`pd-row-key`,children:e}),(0,_.jsx)(`span`,{className:n===`green`?`pd-row-val pd-row-val-green`:n===`blue`?`pd-row-val pd-row-val-blue`:`pd-row-val`,children:t})]}),x=()=>(0,_.jsxs)(`svg`,{className:`pd-hero-rings`,viewBox:`0 0 220 220`,"aria-hidden":`true`,children:[(0,_.jsx)(`circle`,{className:`pd-ring`,cx:`110`,cy:`110`,r:`36`}),(0,_.jsx)(`circle`,{className:`pd-ring`,cx:`110`,cy:`110`,r:`36`}),(0,_.jsx)(`circle`,{className:`pd-ring`,cx:`110`,cy:`110`,r:`36`})]}),S=()=>{let n=l(),{id:i}=s(),{data:a,isLoading:c}=m(i),{data:S}=p(),[C,w]=(0,g.useState)(!1),[T,E]=(0,g.useState)(!1),D=()=>{if(a){if(!S){w(!0);return}n(`/esim-buy-now/${a._id}`)}};if(c)return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`style`,{children:v}),(0,_.jsx)(`div`,{className:`pd-center`,children:(0,_.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,_.jsx)(`div`,{className:`pd-spinner`}),(0,_.jsx)(`p`,{style:{fontSize:13,fontWeight:600,color:`#9CA3AF`},children:`Loading plan…`})]})})]});if(!a)return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`style`,{children:v}),(0,_.jsx)(`div`,{className:`pd-center`,children:(0,_.jsxs)(`div`,{className:`pd-err`,children:[(0,_.jsx)(`div`,{style:{fontSize:38},children:`🔍`}),(0,_.jsx)(`h2`,{children:`Plan not found`}),(0,_.jsx)(`p`,{children:`This plan may no longer be available.`}),(0,_.jsx)(`button`,{className:`pd-err-btn`,onClick:()=>n(-1),children:`← Go back`})]})})]});let O=a.network?.includes(`5G`)?`5G Network`:a.network?.includes(`4G`)?`4G LTE`:null,k=a.countries??[];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`style`,{children:v}),(0,_.jsxs)(`div`,{className:`pd-root`,children:[(0,_.jsxs)(`nav`,{className:`pd-nav`,children:[(0,_.jsx)(`button`,{className:`pd-back`,onClick:()=>n(-1),children:`← Back to plans`}),(0,_.jsx)(`span`,{className:`pd-nav-pill`,children:`eSIM PLAN`})]}),(0,_.jsxs)(`div`,{className:`pd-hero`,children:[(0,_.jsx)(`div`,{className:`pd-hero-glow`}),(0,_.jsx)(x,{}),(0,_.jsx)(`div`,{className:`pd-hero-inner`,children:(0,_.jsxs)(`div`,{className:`pd-hero-top`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`pd-plan-label`,children:`Plan name`}),(0,_.jsx)(`div`,{className:`pd-plan-name`,children:a.name}),(0,_.jsx)(`div`,{className:`pd-plan-network`,children:a.network})]}),(0,_.jsxs)(`div`,{className:`pd-price-right`,children:[(0,_.jsx)(`div`,{className:`pd-price-label`,children:`Price`}),(0,_.jsxs)(`div`,{className:`pd-price`,children:[(0,_.jsx)(`span`,{className:`pd-price-sym`,children:`₹`}),a.price]}),a.currency&&(0,_.jsx)(`div`,{className:`pd-currency`,children:a.currency})]})]})}),(0,_.jsxs)(`div`,{className:`pd-stats`,children:[(0,_.jsx)(y,{icon:`📦`,accent:`#60A5FA`,label:`Data`,value:a.isUnlimited?`Unlimited`:a.dataLimit}),(0,_.jsx)(y,{icon:`📅`,accent:`#C084FC`,label:`Validity`,value:a.validityDays,unit:`days`}),(0,_.jsx)(y,{icon:`📞`,accent:`#FCD34D`,label:`Calls`,value:a.callInSeconds,unit:`sec`}),(0,_.jsx)(y,{icon:`💬`,accent:`#34D399`,label:`SMS`,value:a.sms,unit:`/ day`})]})]}),(0,_.jsxs)(`div`,{className:`pd-content`,children:[(0,_.jsxs)(`div`,{className:`pd-main`,children:[k.length>0&&(0,_.jsxs)(`div`,{className:`pd-card`,style:{animationDelay:`50ms`},children:[(0,_.jsxs)(`div`,{className:`pd-card-head`,children:[(0,_.jsx)(`div`,{className:`pd-card-icon`,style:{background:`#EFF6FF`},children:`🌍`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`pd-card-title`,children:`Coverage Countries`}),(0,_.jsxs)(`div`,{className:`pd-card-sub`,children:[k.length,` countr`,k.length===1?`y`:`ies`,` supported`]})]})]}),(0,_.jsx)(`div`,{className:`pd-countries`,children:k.map(e=>(0,_.jsxs)(`div`,{className:`pd-country`,children:[`🏳️ `,e.name]},e._id))})]}),(0,_.jsxs)(`div`,{className:`pd-card`,style:{animationDelay:`80ms`},children:[(0,_.jsxs)(`div`,{className:`pd-card-head`,children:[(0,_.jsx)(`div`,{className:`pd-card-icon`,style:{background:`#F0FDF4`},children:`📋`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`pd-card-title`,children:`Plan Details`}),(0,_.jsx)(`div`,{className:`pd-card-sub`,children:`Full breakdown`})]})]}),(0,_.jsxs)(`div`,{className:`pd-rows`,children:[(0,_.jsx)(b,{label:`Data`,value:a.isUnlimited?`Unlimited`:a.dataLimit,variant:a.isUnlimited?`green`:`blue`}),(0,_.jsx)(b,{label:`Validity`,value:a.validityDays==null?null:`${a.validityDays} days`}),(0,_.jsx)(b,{label:`Network`,value:a.network}),(0,_.jsx)(b,{label:`Coverage`,value:a.coverage}),(0,_.jsx)(b,{label:`Data Type`,value:a.isUnlimited?`Unlimited`:`Fixed`,variant:a.isUnlimited?`green`:`normal`}),a.dataInMb!=null&&(0,_.jsx)(b,{label:`Data in MB`,value:`${a.dataInMb} MB`})]})]}),(a.callInSeconds!=null||a.sms!=null)&&(0,_.jsxs)(`div`,{className:`pd-card`,style:{animationDelay:`110ms`},children:[(0,_.jsxs)(`div`,{className:`pd-card-head`,children:[(0,_.jsx)(`div`,{className:`pd-card-icon`,style:{background:`#FFFBEB`},children:`📞`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`pd-card-title`,children:`Calls & SMS`}),(0,_.jsx)(`div`,{className:`pd-card-sub`,children:`Included in this plan`})]})]}),(0,_.jsxs)(`div`,{className:`pd-comm-grid`,children:[a.callInSeconds!=null&&(0,_.jsxs)(`div`,{className:`pd-comm`,children:[(0,_.jsx)(`div`,{className:`pd-comm-num`,children:a.callInSeconds}),(0,_.jsx)(`div`,{className:`pd-comm-lbl`,children:`Call Quota`}),(0,_.jsx)(`div`,{className:`pd-comm-unit`,children:`seconds`})]}),a.sms!=null&&(0,_.jsxs)(`div`,{className:`pd-comm`,children:[(0,_.jsx)(`div`,{className:`pd-comm-num`,children:a.sms}),(0,_.jsx)(`div`,{className:`pd-comm-lbl`,children:`SMS / Day`}),(0,_.jsx)(`div`,{className:`pd-comm-unit`,children:`messages`})]})]})]}),a.fupPolicy&&(0,_.jsxs)(`div`,{className:`pd-card`,style:{animationDelay:`135ms`},children:[(0,_.jsxs)(`div`,{className:`pd-card-head`,children:[(0,_.jsx)(`div`,{className:`pd-card-icon`,style:{background:`#FFFBEB`},children:`⚡`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`pd-card-title`,children:`Fair Usage Policy`}),(0,_.jsx)(`div`,{className:`pd-card-sub`,children:`Speed limits after threshold`})]})]}),(0,_.jsxs)(`div`,{className:`pd-fup`,children:[(0,_.jsx)(`span`,{className:`pd-fup-badge`,children:`FUP`}),(0,_.jsx)(`p`,{children:a.fupPolicy})]})]}),(0,_.jsxs)(`div`,{className:`pd-card`,style:{animationDelay:`160ms`},children:[(0,_.jsxs)(`div`,{className:`pd-card-head`,children:[(0,_.jsx)(`div`,{className:`pd-card-icon`,style:{background:`#F5F3FF`},children:`✨`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`pd-card-title`,children:`Highlights`}),(0,_.jsx)(`div`,{className:`pd-card-sub`,children:`Key features at a glance`})]})]}),(0,_.jsxs)(`div`,{className:`pd-tags`,children:[a.isUnlimited&&(0,_.jsx)(`span`,{className:`pd-tag pd-tag-green`,children:`♾️ Unlimited Data`}),O&&(0,_.jsxs)(`span`,{className:`pd-tag pd-tag-blue`,children:[`🚀 `,O]}),a.coverage&&(0,_.jsxs)(`span`,{className:`pd-tag pd-tag-slate`,children:[`🌍 `,a.coverage]}),a.validityDays!=null&&(0,_.jsxs)(`span`,{className:`pd-tag pd-tag-violet`,children:[`📅 `,a.validityDays,` Day Validity`]}),k.length>0&&(0,_.jsxs)(`span`,{className:`pd-tag pd-tag-blue`,children:[`🗺️ `,k.length,` Countr`,k.length===1?`y`:`ies`]}),(0,_.jsx)(`span`,{className:`pd-tag pd-tag-amber`,children:`📱 eSIM Ready`}),(0,_.jsx)(`span`,{className:`pd-tag pd-tag-slate`,children:`⚡ Instant Activation`})]})]})]}),(0,_.jsxs)(`div`,{className:`pd-side`,children:[(0,_.jsxs)(`div`,{className:`pd-side-card`,children:[(0,_.jsxs)(`div`,{className:`pd-side-top`,children:[(0,_.jsx)(`div`,{className:`pd-side-lbl`,children:`Total`}),(0,_.jsxs)(`div`,{className:`pd-side-price`,children:[(0,_.jsx)(`span`,{className:`pd-side-price-sym`,children:`₹`}),a.price]}),a.currency&&(0,_.jsx)(`div`,{className:`pd-side-sub`,children:a.currency})]}),(0,_.jsxs)(`div`,{className:`pd-side-rows`,children:[(0,_.jsxs)(`div`,{className:`pd-side-row`,children:[(0,_.jsx)(`span`,{children:`Data`}),(0,_.jsx)(`span`,{children:a.isUnlimited?`Unlimited`:a.dataLimit??`—`})]}),(0,_.jsxs)(`div`,{className:`pd-side-row`,children:[(0,_.jsx)(`span`,{children:`Validity`}),(0,_.jsx)(`span`,{children:a.validityDays==null?`—`:`${a.validityDays} days`})]}),(0,_.jsxs)(`div`,{className:`pd-side-row`,children:[(0,_.jsx)(`span`,{children:`Network`}),(0,_.jsx)(`span`,{children:a.network??`—`})]})]}),(0,_.jsx)(`button`,{className:`pd-buy-btn`,onClick:D,children:`Buy Now`})]}),(0,_.jsx)(`div`,{className:`pd-side-card`,children:(0,_.jsxs)(`div`,{className:`pd-trust`,children:[(0,_.jsxs)(`div`,{className:`pd-trust-item`,children:[(0,_.jsx)(e,{size:15}),` Instant eSIM activation`]}),(0,_.jsxs)(`div`,{className:`pd-trust-item`,children:[(0,_.jsx)(h,{size:15}),` `,k.length>0?`${k.length} countries covered`:`Wide network coverage`]}),(0,_.jsxs)(`div`,{className:`pd-trust-item`,children:[(0,_.jsx)(t,{size:15}),` Secure checkout`]})]})})]})]}),(0,_.jsxs)(`div`,{className:`pd-mobile-bar`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`div`,{className:`pd-mobile-bar-price`,children:[`₹`,a.price]}),(0,_.jsxs)(`div`,{className:`pd-mobile-bar-sub`,children:[a.isUnlimited?`Unlimited data`:a.dataLimit??``,a.validityDays==null?``:` · ${a.validityDays}d`]})]}),(0,_.jsx)(`button`,{className:`pd-buy-btn`,onClick:D,children:`Buy Now`})]}),(0,_.jsx)(f,{children:C&&(0,_.jsx)(d.div,{className:`pd-overlay`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,_.jsxs)(d.div,{className:`pd-modal`,initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},children:[(0,_.jsxs)(`div`,{className:`pd-modal-head`,children:[(0,_.jsx)(`button`,{className:`pd-modal-close`,onClick:()=>w(!1),children:(0,_.jsx)(o,{size:16})}),(0,_.jsx)(`h3`,{className:`pd-modal-title`,children:T?`Create Account`:`Welcome Back`}),(0,_.jsx)(`p`,{className:`pd-modal-sub`,children:T?`Sign up to purchase this eSIM`:`Login to purchase this eSIM`})]}),(0,_.jsxs)(`div`,{className:`pd-modal-tabs`,children:[(0,_.jsx)(`button`,{className:`pd-tab ${T?``:`pd-tab-active`}`,onClick:()=>E(!1),children:`Login`}),(0,_.jsx)(`button`,{className:`pd-tab ${T?`pd-tab-active`:``}`,onClick:()=>E(!0),children:`Sign Up`})]}),(0,_.jsx)(`div`,{className:`pd-modal-body`,children:T?(0,_.jsx)(r,{onSuccess:()=>w(!1)}):(0,_.jsx)(u,{onSuccess:()=>w(!1),onSignupRedirect:()=>{},onForgotRedirect:()=>{}})})]})})})]})]})};export{S as default};