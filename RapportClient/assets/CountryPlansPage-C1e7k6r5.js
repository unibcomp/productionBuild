import{B as e,E as t,K as n,U as r,W as i,X as a,_ as o,v as ee}from"./index-CjoqAJHd.js";import{t as s}from"./proxy-DU3V10Wa.js";import{t as c}from"./AnimatePresence-D-JMqrNR.js";import{t as l}from"./useUser-CWYOcdtt.js";import{n as te}from"./useEsim-D3cK4Ob8.js";var u=a(n(),1),d=e(),f={bg:`#F0F4FF`,surface:`#FFFFFF`,sidebar:`#FAFBFF`,card:`#FFFFFF`,cardHov:`#F5F8FF`,border:`#E4EAF4`,borderHi:`#3B82F6`,blue:`#2563EB`,blueSoft:`rgba(37,99,235,0.08)`,blueGlow:`rgba(37,99,235,0.12)`,cyan:`#0891B2`,cyanSoft:`rgba(8,145,178,0.08)`,green:`#059669`,greenSoft:`rgba(5,150,105,0.08)`,red:`#DC2626`,redSoft:`rgba(220,38,38,0.07)`,muted:`#94A3B8`,sub:`#64748B`,text:`#0F172A`,textSoft:`#334155`,white:`#FFFFFF`},ne=[{label:`Any`,value:``},{label:`< ₹300`,value:300},{label:`< ₹500`,value:500},{label:`< ₹999`,value:999}],re=[{label:`Any`,value:``},{label:`1 day`,value:1},{label:`7 days`,value:7},{label:`15 days`,value:15},{label:`30 days`,value:30}],ie=[{label:`Any`,value:``},{label:`4G`,value:`4G`},{label:`5G`,value:`5G`}],ae=`
 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { height: 100%; background: ${f.bg}; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: ${f.bg}; }
  ::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 2px; }
  ::-webkit-scrollbar-thumb:hover { background: #94A3B8; }

  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -700px 0; }
    100% { background-position:  700px 0; }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* ── Root layout ── */
  .esim-root {
    display: flex;
    height: 100vh;
    overflow: hidden;
   font-family: 'Inter', sans-serif;
    background: ${f.bg};
    color: ${f.text};
  }

  /* ── Sidebar ── */
  .sidebar {
    width: 272px;
    min-width: 272px;
    height: 100vh;
    overflow-y: auto;
    background: ${f.sidebar};
    border-right: 1.5px solid ${f.border};
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }

  /* ── Main column ── */
  .main-col {
    flex: 1;
    height: 100vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background: ${f.bg};
  }

  /* ── Top bar ── */
  .topbar {
    position: sticky;
    top: 0;
    z-index: 40;
    background: rgba(240,244,255,0.88);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1.5px solid ${f.border};
    padding: 13px 26px;
    display: flex;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
  }

  /* ── Plans grid ── */
  .plans-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    padding: 22px 26px 0;
  }

  /* ── Plan card ── */
  .plan-card {
    background: ${f.card};
    border: 1.5px solid ${f.border};
   border-radius: 16px;
    padding: 20px;
    cursor: pointer;
    transition: border-color .18s, box-shadow .18s, transform .18s, background .18s;
    position: relative;
    overflow: hidden;
    animation: fadeSlideUp .38s ease both;
  }

  .detail-box {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 12px;
}

.detail-box span {
  display: block;
  font-size: 11px;
  color: #64748B;
  margin-bottom: 4px;
  font-weight: 500;
}

.detail-box strong {
  font-size: 14px;
  color: #0F172A;
  font-weight: 600;
}
  .plan-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${f.blueGlow} 0%, transparent 55%);
    opacity: 0;
    transition: opacity .22s;
    pointer-events: none;
    border-radius: 16px;
  }
  .plan-card:hover {
    border-color: ${f.borderHi};
    background: ${f.cardHov};
   
    box-shadow: 0 8px 32px rgba(37,99,235,.12), 0 0 0 1px rgba(37,99,235,.1);
  }
  .plan-card:hover::after { opacity: 1; }
  .plan-card:hover .card-arrow {
    background: ${f.blue} !important;
    border-color: ${f.blue} !important;
    color: #fff !important;
  }

  /* ── Filter pill ── */
  .fpill {
    border: 1.5px solid ${f.border};
    border-radius: 9px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
   font-family: 'Inter', sans-serif;
    transition: all .13s;
    white-space: nowrap;
    background: ${f.white};
    color: ${f.sub};
  }
  .fpill:hover { border-color: #93C5FD; color: ${f.blue}; background: #EFF6FF; }
  .fpill-on {
    background: ${f.blue} !important;
    border-color: ${f.blue} !important;
    color: #fff !important;
    box-shadow: 0 2px 10px rgba(37,99,235,.22);
  }

  /* ── Toggle ── */
  .toggle-track {
    width: 42px; height: 24px; border-radius: 12px;
    background: #E2E8F0;
    border: 1.5px solid #CBD5E1;
    position: relative; cursor: pointer;
    transition: background .18s, border-color .18s;
    flex-shrink: 0;
  }
  .toggle-track.on { background: ${f.blue}; border-color: ${f.blue}; }
  .toggle-thumb {
    position: absolute;
    top: 3px; left: 3px;
    width: 14px; height: 14px;
    border-radius: 50%;
    background: #fff;
    transition: transform .18s;
    box-shadow: 0 1px 4px rgba(0,0,0,.18);
  }
  .toggle-track.on .toggle-thumb { transform: translateX(18px); }

  /* ── Skeleton ── */
  .skel {
    background: linear-gradient(90deg, #E8EFF8 25%, #F5F8FF 50%, #E8EFF8 75%);
    background-size: 700px 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 16px;
    height: 200px;
    border: 1.5px solid ${f.border};
  }

  /* ── Pagination ── */
  .pg-btn {
    display: flex; align-items: center; justify-content: center;
    width: 36px; height: 36px;
    border-radius: 10px;
    border: 1.5px solid ${f.border};
    background: ${f.white};
    color: ${f.sub};
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: all .14s;
   font-family: 'Inter', sans-serif;
    box-shadow: 0 1px 3px rgba(0,0,0,.06);
  }
  .pg-btn:hover:not(:disabled) {
    border-color: ${f.blue};
    color: ${f.blue};
    background: #EFF6FF;
    box-shadow: 0 2px 8px rgba(37,99,235,.12);
  }
  .pg-btn.pg-active {
    background: ${f.blue};
    border-color: ${f.blue};
    color: #fff;
    box-shadow: 0 4px 14px rgba(37,99,235,.3);
  }
  .pg-btn:disabled { opacity: .35; cursor: not-allowed; }

  /* ── Misc ── */
  .back-btn {
    display: flex; align-items: center; justify-content: center;
    width: 36px; height: 36px;
    border-radius: 10px;
    border: 1.5px solid ${f.border};
    background: ${f.white};
    color: ${f.sub};
    font-size: 16px;
    cursor: pointer;
    transition: all .14s;
    flex-shrink: 0;
    box-shadow: 0 1px 4px rgba(0,0,0,.06);
  }
  .back-btn:hover { border-color: ${f.blue}; color: ${f.blue}; background: #EFF6FF; }

  .sort-sel {
    background: ${f.white};
    border: 1.5px solid ${f.border};
    border-radius: 10px;
    color: ${f.text};
    font-size: 12px;
    font-weight: 600;
   font-family: 'Inter', sans-serif;
    padding: 7px 30px 7px 11px;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    transition: border-color .14s;
    box-shadow: 0 1px 3px rgba(0,0,0,.06);
  }
  .sort-sel:focus { outline: none; border-color: ${f.blue}; }

  .spinner {
    width: 15px; height: 15px;
    border: 2px solid ${f.border};
    border-top-color: ${f.blue};
    border-radius: 50%;
    animation: spin .7s linear infinite;
    flex-shrink: 0;
  }

  /* ── Sidebar section label ── */
  .sec-label {
    font-size: 10px;
    font-weight: 700;
    color: ${f.muted};
    letter-spacing: .1em;
    text-transform: uppercase;
    margin-bottom: 9px;
    display: block;
  }

  /* ── Clear btn ── */
  .clear-btn {
    width: 100%;
    background: ${f.redSoft};
    border: 1.5px solid rgba(220,38,38,.18);
    border-radius: 10px;
    padding: 9px;
    font-size: 12px;
    font-weight: 700;
    color: ${f.red};
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: all .14s;
  }
  .clear-btn:hover { background: rgba(220,38,38,.13); }

  @media (max-width: 840px) {
    .sidebar { display: none; }
    .plans-grid { grid-template-columns: 1fr; padding: 14px 14px 0; }
    .topbar { padding: 11px 14px; }
  }
    .pd-overlay {
  position: fixed; inset: 0;
  background: rgba(15,23,42,0.45);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: flex-start;      /* was: center */
  justify-content: center;
  z-index: 1000;                 /* was: 100 — must beat .topbar's 40 */
  padding: 40px 20px;
  overflow-y: auto;              /* lets you scroll to the full modal if it's tall */
}
.pd-modal {
  background:  #16165e; border-radius: 22px; width: 100%; max-width: 420px;
  overflow: hidden; border: 1px solid #e5e7eb;
  box-shadow: 0 24px 64px rgba(0,0,0,.18);
  margin: auto 0;                 /* keeps it vertically centered when it fits, scrollable when it doesn't */
}
.pd-modal-head { background: linear-gradient(135deg,#041e57, #101148); padding: 22px; position: relative; }
.pd-modal-title { color: #fff; font-size: 20px; font-weight: 700; }
.pd-modal-sub { color: rgba(255,255,255,.75); font-size: 13px; margin-top: 4px; }
.pd-modal-close {
  position: absolute; top: 12px; right: 12px; width: 30px; height: 30px;
  border: none; border-radius: 50%; cursor: pointer;
  background: rgba(255,255,255,.2); color: #fff;
}
.pd-modal-tabs { display: flex; gap: 4px; margin: 14px; padding: 4px; border-radius: 12px; background: #f3f4f6; }
.pd-tab { flex: 1; border: none; background: transparent; padding: 10px; border-radius: 8px; cursor: pointer; font-weight: 600; }
.pd-tab-active { background: linear-gradient(135deg,#2563eb,#6366f1); color: #fff; }
.pd-modal-body { padding: 16px; }
`,p=10,m=({on:e,onToggle:t})=>(0,d.jsx)(`div`,{className:`toggle-track${e?` on`:``}`,onClick:t,children:(0,d.jsx)(`div`,{className:`toggle-thumb`})}),h=({label:e,opts:t,value:n,onChange:r})=>(0,d.jsxs)(`div`,{style:{marginBottom:20},children:[(0,d.jsx)(`span`,{className:`sec-label`,children:e}),(0,d.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:6},children:t.map(e=>(0,d.jsxs)(`button`,{className:`fpill${n===e.value?` fpill-on`:``}`,onClick:()=>r(e.value),children:[n===e.value&&e.value!==``?`✓ `:``,e.label]},e.label))})]}),g=({i:e})=>(0,d.jsx)(`div`,{className:`skel`,style:{animationDelay:`${e*80}ms`}}),_=({plan:e,index:t,onClick:n})=>(0,d.jsxs)(`div`,{className:`plan-card`,onClick:n,style:{animationDelay:`${t*40}ms`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,marginBottom:18,gap:12},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h3`,{style:{fontSize:16,fontWeight:600,color:f.text,lineHeight:1.4,marginBottom:5},children:e.name}),(0,d.jsx)(`p`,{style:{fontSize:13,color:f.sub,fontWeight:400},children:e.network})]}),(0,d.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,d.jsxs)(`p`,{style:{fontSize:24,fontWeight:700,color:f.blue,lineHeight:1},children:[`₹`,e.price]}),(0,d.jsx)(`p`,{style:{fontSize:11,color:f.muted,marginTop:4},children:e.currency})]})]}),(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:10,marginBottom:18},children:[(0,d.jsxs)(`div`,{className:`detail-box`,children:[(0,d.jsx)(`span`,{children:`Data`}),(0,d.jsx)(`strong`,{children:e.dataLimit})]}),(0,d.jsxs)(`div`,{className:`detail-box`,children:[(0,d.jsx)(`span`,{children:`Validity`}),(0,d.jsxs)(`strong`,{children:[e.validityDays,` Days`]})]}),(0,d.jsxs)(`div`,{className:`detail-box`,children:[(0,d.jsx)(`span`,{children:`Coverage`}),(0,d.jsx)(`strong`,{children:e.coverage})]}),(0,d.jsxs)(`div`,{className:`detail-box`,children:[(0,d.jsx)(`span`,{children:`Type`}),(0,d.jsx)(`strong`,{children:e.isUnlimited?`Unlimited`:`Limited`})]})]}),(0,d.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:6,marginBottom:14},children:e.countries?.map(e=>(0,d.jsx)(`div`,{style:{background:`#EFF6FF`,color:f.blue,border:`1px solid #BFDBFE`,padding:`5px 10px`,borderRadius:999,fontSize:11,fontWeight:500},children:e.name},e._id))}),e.fupPolicy&&(0,d.jsx)(`div`,{style:{background:`#FEFCE8`,border:`1px solid #FDE68A`,borderRadius:10,padding:10,marginBottom:16},children:(0,d.jsx)(`p`,{style:{fontSize:11,lineHeight:1.5,color:`#854D0E`},children:e.fupPolicy})}),(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,borderTop:`1px solid ${f.border}`,paddingTop:14},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,gap:10,fontSize:12,color:f.sub},children:[(0,d.jsxs)(`span`,{children:[`SMS: `,e.sms]}),(0,d.jsxs)(`span`,{children:[`Calls: `,e.callInSeconds,`s`]})]}),(0,d.jsx)(`button`,{onClick:e=>{e.stopPropagation(),n()},style:{border:`none`,background:f.blue,color:`#fff`,padding:`8px 14px`,borderRadius:10,fontSize:12,fontWeight:600,cursor:`pointer`},children:`View Plan`})]})]}),v=({currentPage:e,totalPages:t,onPage:n,isLoading:r})=>{if(t<=1)return null;let i=[],a=e=>{i.includes(e)||i.push(e)};a(1),e>3&&i.push(`…`);for(let n=Math.max(2,e-1);n<=Math.min(t-1,e+1);n++)a(n);return e<t-2&&i.push(`…`),t>1&&a(t),(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:5,padding:`28px 0 44px`},children:[(0,d.jsx)(`button`,{className:`pg-btn`,disabled:e===1||r,onClick:()=>n(e-1),children:`‹`}),i.map((t,i)=>t===`…`?(0,d.jsx)(`span`,{style:{color:f.muted,fontSize:14,padding:`0 3px`},children:`…`},`ell-${i}`):(0,d.jsx)(`button`,{className:`pg-btn${e===t?` pg-active`:``}`,disabled:r,onClick:()=>n(t),children:t},t)),(0,d.jsx)(`button`,{className:`pg-btn`,disabled:e===t||r,onClick:()=>n(e+1),children:`›`})]})},y=()=>{let e=r(),{countryCode:n}=i(),[a,y]=(0,u.useState)(``),[b,x]=(0,u.useState)(!1),[S,C]=(0,u.useState)(``),[w,T]=(0,u.useState)(``),[E,D]=(0,u.useState)(`price_asc`),[O,k]=(0,u.useState)(1),A=(0,u.useRef)(null),{data:oe}=l(),[j,M]=(0,u.useState)(!1),[N,P]=(0,u.useState)(!1),[F,I]=(0,u.useState)(null);(0,u.useEffect)(()=>{let e=A.current,t=document.querySelector(`.sidebar`);return j?(e&&(e.style.overflowY=`hidden`),t&&(t.style.overflowY=`hidden`),document.body.style.overflow=`hidden`):(e&&(e.style.overflowY=`auto`),t&&(t.style.overflowY=`auto`),document.body.style.overflow=``),()=>{e&&(e.style.overflowY=`auto`),t&&(t.style.overflowY=`auto`),document.body.style.overflow=``}},[j]);let L=t=>{if(!oe){I(t),M(!0);return}e(`/plan/${t}`)},R=()=>{M(!1),F&&(e(`/plan/${F}`),I(null))},z=()=>k(1),B=e=>{y(e===``?``:Number(e)),z()},V=e=>{C(e===``?``:Number(e)),z()},H=e=>{T(String(e)),z()},U=()=>{x(e=>!e),z()},W=e=>{D(e),z()},G=(0,u.useCallback)(()=>{y(``),x(!1),C(``),T(``),D(`price_asc`),k(1)},[]),K=a!==``||b||S!==``||w!==``,{data:q,isLoading:J,isFetching:Y}=te({country:n,sortBy:E,limit:p,page:O,...a!==``&&{maxPrice:a},...b&&{isUnlimited:!0},...S!==``&&{validity:S},...w!==``&&{network:w}}),X=Array.isArray(q)?q:q?.results??[],Z=q?.total??X.length,Q=Math.max(1,Math.ceil(Z/p));(0,u.useEffect)(()=>{A.current?.scrollTo({top:0,behavior:`smooth`})},[O]);let $=n?`https://flagcdn.com/w80/${n.toLowerCase()}.png`:null;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`style`,{children:ae}),(0,d.jsxs)(`div`,{className:`esim-root`,children:[(0,d.jsxs)(`aside`,{className:`sidebar`,children:[(0,d.jsxs)(`div`,{style:{padding:`22px 20px 18px`,borderBottom:`1.5px solid ${f.border}`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,marginBottom:16},children:[(0,d.jsx)(`button`,{className:`back-btn`,onClick:()=>e(-1),style:{width:32,height:32,fontSize:14},children:`←`}),$&&(0,d.jsx)(`div`,{style:{width:38,height:27,borderRadius:6,overflow:`hidden`,boxShadow:`0 2px 8px rgba(0,0,0,.14)`,flexShrink:0},children:(0,d.jsx)(`img`,{src:$,alt:``,style:{width:`100%`,height:`100%`,objectFit:`cover`}})}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{style:{fontSize:16,fontWeight:800,color:f.text,fontFamily:`'Syne', sans-serif`,lineHeight:1},children:n}),(0,d.jsx)(`p`,{style:{fontSize:11,color:f.muted,fontWeight:500,marginTop:2},children:`eSIM Plans`})]})]}),(0,d.jsxs)(`div`,{style:{background:f.blueSoft,border:`1.5px solid rgba(37,99,235,.15)`,borderRadius:12,padding:`12px 14px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{style:{fontSize:10,fontWeight:700,color:f.blue,textTransform:`uppercase`,letterSpacing:`.07em`},children:`Total plans`}),(0,d.jsx)(`p`,{style:{fontSize:24,fontWeight:800,color:f.blue,fontFamily:`'Syne', sans-serif`,lineHeight:1.1,marginTop:2},children:J?`—`:Z})]}),(0,d.jsx)(`div`,{style:{fontSize:28,filter:`drop-shadow(0 2px 6px rgba(37,99,235,.2))`},children:`📶`})]})]}),(0,d.jsxs)(`div`,{style:{padding:`20px 20px 0`,flex:1},children:[(0,d.jsxs)(`div`,{style:{marginBottom:22},children:[(0,d.jsx)(`span`,{className:`sec-label`,children:`Sort by`}),(0,d.jsxs)(`select`,{className:`sort-sel`,style:{width:`100%`},value:E,onChange:e=>W(e.target.value),children:[(0,d.jsx)(`option`,{value:`price_asc`,children:`Price — Low to High`}),(0,d.jsx)(`option`,{value:`price_desc`,children:`Price — High to Low`})]})]}),(0,d.jsx)(h,{label:`Price`,opts:ne,value:a,onChange:B}),(0,d.jsx)(h,{label:`Validity`,opts:re,value:S,onChange:V}),(0,d.jsx)(h,{label:`Network`,opts:ie,value:w,onChange:H}),(0,d.jsxs)(`div`,{style:{marginBottom:22},children:[(0,d.jsx)(`span`,{className:`sec-label`,children:`Data type`}),(0,d.jsxs)(`div`,{onClick:U,style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,background:b?f.blueSoft:f.white,border:`1.5px solid ${b?`rgba(37,99,235,.25)`:f.border}`,borderRadius:11,padding:`11px 13px`,cursor:`pointer`,transition:`all .15s`},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{style:{fontSize:13,fontWeight:700,color:f.text},children:`Unlimited Data`}),(0,d.jsx)(`p`,{style:{fontSize:11,color:f.muted,marginTop:1},children:`High-speed + throttled`})]}),(0,d.jsx)(m,{on:b,onToggle:U})]})]}),K&&(0,d.jsx)(`button`,{className:`clear-btn`,onClick:G,children:`✕ Clear all filters`})]})]}),(0,d.jsxs)(`div`,{className:`main-col`,ref:A,children:[(0,d.jsxs)(`div`,{className:`topbar`,children:[(0,d.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,d.jsxs)(`h1`,{style:{fontSize:16,fontWeight:800,color:f.text,fontFamily:`'Syne', sans-serif`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:[n,` eSIM Plans`]}),(0,d.jsx)(`p`,{style:{fontSize:11,color:f.muted,fontWeight:500,marginTop:1},children:J?`Loading…`:`${Z} plan${Z===1?``:`s`} · Page ${O} of ${Q}`})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,gap:5,flexWrap:`wrap`,justifyContent:`flex-end`},children:[a!==``&&(0,d.jsxs)(`span`,{style:{fontSize:11,fontWeight:700,color:f.blue,background:f.blueSoft,border:`1.5px solid rgba(37,99,235,.18)`,padding:`4px 9px`,borderRadius:7},children:[`<₹`,a]}),b&&(0,d.jsx)(`span`,{style:{fontSize:11,fontWeight:700,color:f.cyan,background:f.cyanSoft,border:`1.5px solid rgba(8,145,178,.18)`,padding:`4px 9px`,borderRadius:7},children:`Unlimited`}),S!==``&&(0,d.jsxs)(`span`,{style:{fontSize:11,fontWeight:700,color:f.green,background:f.greenSoft,border:`1.5px solid rgba(5,150,105,.18)`,padding:`4px 9px`,borderRadius:7},children:[S,`d`]}),w!==``&&(0,d.jsx)(`span`,{style:{fontSize:11,fontWeight:700,color:`#7C3AED`,background:`rgba(124,58,237,.08)`,border:`1.5px solid rgba(124,58,237,.18)`,padding:`4px 9px`,borderRadius:7},children:w})]}),Y&&!J&&(0,d.jsx)(`div`,{className:`spinner`})]}),J?(0,d.jsx)(`div`,{className:`plans-grid`,style:{paddingBottom:40},children:[...Array(9)].map((e,t)=>(0,d.jsx)(g,{i:t},t))}):X.length>0?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{className:`plans-grid`,children:X.map((e,t)=>(0,d.jsx)(_,{plan:e,index:t,onClick:()=>L(e._id)},e._id))}),(0,d.jsx)(v,{currentPage:O,totalPages:Q,onPage:k,isLoading:Y})]}):(0,d.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,padding:40,textAlign:`center`},children:[(0,d.jsx)(`div`,{style:{fontSize:54,marginBottom:16,opacity:.35},children:`📶`}),(0,d.jsx)(`h3`,{style:{fontSize:20,fontWeight:800,color:f.text,fontFamily:`'Syne', sans-serif`,marginBottom:8},children:`No plans match`}),(0,d.jsx)(`p`,{style:{fontSize:13,color:f.muted,marginBottom:24,lineHeight:1.65},children:`Try adjusting the filters in the sidebar.`}),(0,d.jsx)(`button`,{onClick:G,style:{background:f.blue,color:`#fff`,border:`none`,borderRadius:12,padding:`11px 24px`,fontSize:13,fontWeight:700,cursor:`pointer`,fontFamily:`'Outfit', sans-serif`,boxShadow:`0 4px 16px rgba(37,99,235,.28)`},children:`Reset all filters`})]})]})]}),(0,d.jsx)(c,{children:j&&(0,d.jsx)(s.div,{className:`pd-overlay`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>{M(!1),I(null)},children:(0,d.jsxs)(s.div,{className:`pd-modal`,initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},onClick:e=>e.stopPropagation(),children:[(0,d.jsxs)(`div`,{className:`pd-modal-head`,children:[(0,d.jsx)(`button`,{className:`pd-modal-close`,onClick:()=>{M(!1),I(null)},children:(0,d.jsx)(t,{size:16})}),(0,d.jsx)(`h3`,{className:`pd-modal-title`,children:N?`Create Account`:`Welcome Back`}),(0,d.jsx)(`p`,{className:`pd-modal-sub`,children:N?`Sign up to view this plan`:`Login to view this plan`})]}),(0,d.jsxs)(`div`,{className:`pd-modal-tabs`,children:[(0,d.jsx)(`button`,{className:`pd-tab ${N?``:`pd-tab-active`}`,onClick:()=>P(!1),children:`Login`}),(0,d.jsx)(`button`,{className:`pd-tab ${N?`pd-tab-active`:``}`,onClick:()=>P(!0),children:`Sign Up`})]}),(0,d.jsx)(`div`,{className:`pd-modal-body`,children:N?(0,d.jsx)(ee,{onSuccess:R}):(0,d.jsx)(o,{onSuccess:R,onSignupRedirect:()=>{},onForgotRedirect:()=>{}})})]})})})]})};export{y as default};