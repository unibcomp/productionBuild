import{Q as e,S as t,ct as n,it as r,j as i,nt as a,tt as o,x as ee}from"./index-DCNKaN2n.js";import{t as s}from"./proxy-DpOpWxjr.js";import{t as c}from"./AnimatePresence-DNST-Ca9.js";import{t as l}from"./useUser-DsjkJYAH.js";import{n as u}from"./useEsim-NOa-6PGL.js";var d=n(r(),1),f=e(),p={bg:`#F0F4FF`,surface:`#FFFFFF`,sidebar:`#FAFBFF`,card:`#FFFFFF`,cardHov:`#F5F8FF`,border:`#E4EAF4`,borderHi:`#3B82F6`,blue:`#2563EB`,blueSoft:`rgba(37,99,235,0.08)`,blueGlow:`rgba(37,99,235,0.12)`,cyan:`#0891B2`,cyanSoft:`rgba(8,145,178,0.08)`,green:`#059669`,greenSoft:`rgba(5,150,105,0.08)`,red:`#DC2626`,redSoft:`rgba(220,38,38,0.07)`,muted:`#94A3B8`,sub:`#64748B`,text:`#0F172A`,textSoft:`#334155`,white:`#FFFFFF`},te=[{label:`Any`,value:``},{label:`< ₹300`,value:300},{label:`< ₹500`,value:500},{label:`< ₹999`,value:999}],ne=[{label:`Any`,value:``},{label:`1 day`,value:1},{label:`7 days`,value:7},{label:`15 days`,value:15},{label:`30 days`,value:30}],re=[{label:`Any`,value:``},{label:`4G`,value:`4G`},{label:`5G`,value:`5G`}],m=`
 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { height: 100%; background: ${p.bg}; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: ${p.bg}; }
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
    background: ${p.bg};
    color: ${p.text};
  }

  /* ── Sidebar ── */
  .sidebar {
    width: 272px;
    min-width: 272px;
    height: 100vh;
    overflow-y: auto;
    background: ${p.sidebar};
    border-right: 1.5px solid ${p.border};
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
    background: ${p.bg};
  }

  /* ── Top bar ── */
  .topbar {
    position: sticky;
    top: 0;
    z-index: 40;
    background: rgba(240,244,255,0.88);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1.5px solid ${p.border};
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
    background: ${p.card};
    border: 1.5px solid ${p.border};
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
    background: linear-gradient(135deg, ${p.blueGlow} 0%, transparent 55%);
    opacity: 0;
    transition: opacity .22s;
    pointer-events: none;
    border-radius: 16px;
  }
  .plan-card:hover {
    border-color: ${p.borderHi};
    background: ${p.cardHov};
   
    box-shadow: 0 8px 32px rgba(37,99,235,.12), 0 0 0 1px rgba(37,99,235,.1);
  }
  .plan-card:hover::after { opacity: 1; }
  .plan-card:hover .card-arrow {
    background: ${p.blue} !important;
    border-color: ${p.blue} !important;
    color: #fff !important;
  }

  /* ── Filter pill ── */
  .fpill {
    border: 1.5px solid ${p.border};
    border-radius: 9px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
   font-family: 'Inter', sans-serif;
    transition: all .13s;
    white-space: nowrap;
    background: ${p.white};
    color: ${p.sub};
  }
  .fpill:hover { border-color: #93C5FD; color: ${p.blue}; background: #EFF6FF; }
  .fpill-on {
    background: ${p.blue} !important;
    border-color: ${p.blue} !important;
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
  .toggle-track.on { background: ${p.blue}; border-color: ${p.blue}; }
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
    border: 1.5px solid ${p.border};
  }

  /* ── Pagination ── */
  .pg-btn {
    display: flex; align-items: center; justify-content: center;
    width: 36px; height: 36px;
    border-radius: 10px;
    border: 1.5px solid ${p.border};
    background: ${p.white};
    color: ${p.sub};
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: all .14s;
   font-family: 'Inter', sans-serif;
    box-shadow: 0 1px 3px rgba(0,0,0,.06);
  }
  .pg-btn:hover:not(:disabled) {
    border-color: ${p.blue};
    color: ${p.blue};
    background: #EFF6FF;
    box-shadow: 0 2px 8px rgba(37,99,235,.12);
  }
  .pg-btn.pg-active {
    background: ${p.blue};
    border-color: ${p.blue};
    color: #fff;
    box-shadow: 0 4px 14px rgba(37,99,235,.3);
  }
  .pg-btn:disabled { opacity: .35; cursor: not-allowed; }

  /* ── Misc ── */
  .back-btn {
    display: flex; align-items: center; justify-content: center;
    width: 36px; height: 36px;
    border-radius: 10px;
    border: 1.5px solid ${p.border};
    background: ${p.white};
    color: ${p.sub};
    font-size: 16px;
    cursor: pointer;
    transition: all .14s;
    flex-shrink: 0;
    box-shadow: 0 1px 4px rgba(0,0,0,.06);
  }
  .back-btn:hover { border-color: ${p.blue}; color: ${p.blue}; background: #EFF6FF; }

  .sort-sel {
    background: ${p.white};
    border: 1.5px solid ${p.border};
    border-radius: 10px;
    color: ${p.text};
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
  .sort-sel:focus { outline: none; border-color: ${p.blue}; }

  .spinner {
    width: 15px; height: 15px;
    border: 2px solid ${p.border};
    border-top-color: ${p.blue};
    border-radius: 50%;
    animation: spin .7s linear infinite;
    flex-shrink: 0;
  }

  /* ── Sidebar section label ── */
  .sec-label {
    font-size: 10px;
    font-weight: 700;
    color: ${p.muted};
    letter-spacing: .1em;
    text-transform: uppercase;
    margin-bottom: 9px;
    display: block;
  }

  /* ── Clear btn ── */
  .clear-btn {
    width: 100%;
    background: ${p.redSoft};
    border: 1.5px solid rgba(220,38,38,.18);
    border-radius: 10px;
    padding: 9px;
    font-size: 12px;
    font-weight: 700;
    color: ${p.red};
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
`,h=500,g=({on:e,onToggle:t})=>(0,f.jsx)(`div`,{className:`toggle-track${e?` on`:``}`,onClick:t,children:(0,f.jsx)(`div`,{className:`toggle-thumb`})}),_=({label:e,opts:t,value:n,onChange:r})=>(0,f.jsxs)(`div`,{style:{marginBottom:20},children:[(0,f.jsx)(`span`,{className:`sec-label`,children:e}),(0,f.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:6},children:t.map(e=>(0,f.jsxs)(`button`,{className:`fpill${n===e.value?` fpill-on`:``}`,onClick:()=>r(e.value),children:[n===e.value&&e.value!==``?`✓ `:``,e.label]},e.label))})]}),v=({i:e})=>(0,f.jsx)(`div`,{className:`skel`,style:{animationDelay:`${e*80}ms`}}),y=({plan:e,index:t,onClick:n})=>(0,f.jsxs)(`div`,{className:`plan-card`,onClick:n,style:{animationDelay:`${t*40}ms`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,marginBottom:18,gap:12},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h3`,{style:{fontSize:16,fontWeight:600,color:p.text,lineHeight:1.4,marginBottom:5},children:e.name}),(0,f.jsx)(`p`,{style:{fontSize:13,color:p.sub,fontWeight:400},children:e.network})]}),(0,f.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,f.jsxs)(`p`,{style:{fontSize:24,fontWeight:700,color:p.blue,lineHeight:1},children:[`₹`,e.price]}),(0,f.jsx)(`p`,{style:{fontSize:11,color:p.muted,marginTop:4},children:e.currency})]})]}),(0,f.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:10,marginBottom:18},children:[(0,f.jsxs)(`div`,{className:`detail-box`,children:[(0,f.jsx)(`span`,{children:`Data`}),(0,f.jsx)(`strong`,{children:e.dataLimit})]}),(0,f.jsxs)(`div`,{className:`detail-box`,children:[(0,f.jsx)(`span`,{children:`Validity`}),(0,f.jsxs)(`strong`,{children:[e.validityDays,` Days`]})]}),(0,f.jsxs)(`div`,{className:`detail-box`,children:[(0,f.jsx)(`span`,{children:`Coverage`}),(0,f.jsx)(`strong`,{children:e.coverage})]}),(0,f.jsxs)(`div`,{className:`detail-box`,children:[(0,f.jsx)(`span`,{children:`Type`}),(0,f.jsx)(`strong`,{children:e.isUnlimited?`Unlimited`:`Limited`})]})]}),(0,f.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:6,marginBottom:14},children:e.countries?.map(e=>(0,f.jsx)(`div`,{style:{background:`#EFF6FF`,color:p.blue,border:`1px solid #BFDBFE`,padding:`5px 10px`,borderRadius:999,fontSize:11,fontWeight:500},children:e.name},e._id))}),e.fupPolicy&&(0,f.jsx)(`div`,{style:{background:`#FEFCE8`,border:`1px solid #FDE68A`,borderRadius:10,padding:10,marginBottom:16},children:(0,f.jsx)(`p`,{style:{fontSize:11,lineHeight:1.5,color:`#854D0E`},children:e.fupPolicy})}),(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,borderTop:`1px solid ${p.border}`,paddingTop:14},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,gap:10,fontSize:12,color:p.sub},children:[(0,f.jsxs)(`span`,{children:[`SMS: `,e.sms]}),(0,f.jsxs)(`span`,{children:[`Calls: `,e.callInSeconds,`s`]})]}),(0,f.jsx)(`button`,{onClick:e=>{e.stopPropagation(),n()},style:{border:`none`,background:p.blue,color:`#fff`,padding:`8px 14px`,borderRadius:10,fontSize:12,fontWeight:600,cursor:`pointer`},children:`View Plan`})]})]}),ie=({currentPage:e,totalPages:t,onPage:n,isLoading:r})=>{if(t<=1)return null;let i=[],a=e=>{i.includes(e)||i.push(e)};a(1),e>3&&i.push(`…`);for(let n=Math.max(2,e-1);n<=Math.min(t-1,e+1);n++)a(n);return e<t-2&&i.push(`…`),t>1&&a(t),(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:5,padding:`28px 0 44px`},children:[(0,f.jsx)(`button`,{className:`pg-btn`,disabled:e===1||r,onClick:()=>n(e-1),children:`‹`}),i.map((t,i)=>t===`…`?(0,f.jsx)(`span`,{style:{color:p.muted,fontSize:14,padding:`0 3px`},children:`…`},`ell-${i}`):(0,f.jsx)(`button`,{className:`pg-btn${e===t?` pg-active`:``}`,disabled:r,onClick:()=>n(t),children:t},t)),(0,f.jsx)(`button`,{className:`pg-btn`,disabled:e===t||r,onClick:()=>n(e+1),children:`›`})]})},b=()=>{let e=o(),{countryCode:n}=a(),[r,b]=(0,d.useState)(``),[x,S]=(0,d.useState)(!1),[C,w]=(0,d.useState)(``),[T,E]=(0,d.useState)(``),[D,O]=(0,d.useState)(`price_asc`),[k,A]=(0,d.useState)(1),j=(0,d.useRef)(null),{data:ae}=l(),[M,N]=(0,d.useState)(!1),[P,F]=(0,d.useState)(!1),[I,L]=(0,d.useState)(null);(0,d.useEffect)(()=>{let e=j.current,t=document.querySelector(`.sidebar`);return M?(e&&(e.style.overflowY=`hidden`),t&&(t.style.overflowY=`hidden`),document.body.style.overflow=`hidden`):(e&&(e.style.overflowY=`auto`),t&&(t.style.overflowY=`auto`),document.body.style.overflow=``),()=>{e&&(e.style.overflowY=`auto`),t&&(t.style.overflowY=`auto`),document.body.style.overflow=``}},[M]);let R=t=>{if(!ae){L(t),N(!0);return}e(`/plan/${t}`)},z=()=>{N(!1),I&&(e(`/plan/${I}`),L(null))},B=()=>A(1),V=e=>{b(e===``?``:Number(e)),B()},H=e=>{w(e===``?``:Number(e)),B()},U=e=>{E(String(e)),B()},W=()=>{S(e=>!e),B()},G=e=>{O(e),B()},K=(0,d.useCallback)(()=>{b(``),S(!1),w(``),E(``),O(`price_asc`),A(1)},[]),q=r!==``||x||C!==``||T!==``,{data:J,isLoading:Y,isFetching:X}=u({country:n,sortBy:D,limit:h,page:k,...r!==``&&{maxPrice:r},...x&&{isUnlimited:!0},...C!==``&&{validity:C},...T!==``&&{coverage:T}}),Z=Array.isArray(J)?J:J?.results??[],Q=J?.total??Z.length,oe=Math.max(1,Math.ceil(Q/h));(0,d.useEffect)(()=>{j.current?.scrollTo({top:0,behavior:`smooth`})},[k]);let $=n?`https://flagcdn.com/w80/${n.toLowerCase()}.png`:null;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`style`,{children:m}),(0,f.jsxs)(`div`,{className:`esim-root`,children:[(0,f.jsxs)(`aside`,{className:`sidebar`,children:[(0,f.jsxs)(`div`,{style:{padding:`22px 20px 18px`,borderBottom:`1.5px solid ${p.border}`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,marginBottom:16},children:[(0,f.jsx)(`button`,{className:`back-btn`,onClick:()=>e(-1),style:{width:32,height:32,fontSize:14},children:`←`}),$&&(0,f.jsx)(`div`,{style:{width:38,height:27,borderRadius:6,overflow:`hidden`,boxShadow:`0 2px 8px rgba(0,0,0,.14)`,flexShrink:0},children:(0,f.jsx)(`img`,{src:$,alt:``,style:{width:`100%`,height:`100%`,objectFit:`cover`}})}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{style:{fontSize:16,fontWeight:800,color:p.text,fontFamily:`'Syne', sans-serif`,lineHeight:1},children:n}),(0,f.jsx)(`p`,{style:{fontSize:11,color:p.muted,fontWeight:500,marginTop:2},children:`eSIM Plans`})]})]}),(0,f.jsxs)(`div`,{style:{background:p.blueSoft,border:`1.5px solid rgba(37,99,235,.15)`,borderRadius:12,padding:`12px 14px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{style:{fontSize:10,fontWeight:700,color:p.blue,textTransform:`uppercase`,letterSpacing:`.07em`},children:`Total plans`}),(0,f.jsx)(`p`,{style:{fontSize:24,fontWeight:800,color:p.blue,fontFamily:`'Syne', sans-serif`,lineHeight:1.1,marginTop:2},children:Y?`—`:Q})]}),(0,f.jsx)(`div`,{style:{fontSize:28,filter:`drop-shadow(0 2px 6px rgba(37,99,235,.2))`},children:`📶`})]})]}),(0,f.jsxs)(`div`,{style:{padding:`20px 20px 0`,flex:1},children:[(0,f.jsxs)(`div`,{style:{marginBottom:22},children:[(0,f.jsx)(`span`,{className:`sec-label`,children:`Sort by`}),(0,f.jsxs)(`select`,{className:`sort-sel`,style:{width:`100%`},value:D,onChange:e=>G(e.target.value),children:[(0,f.jsx)(`option`,{value:`price_asc`,children:`Price — Low to High`}),(0,f.jsx)(`option`,{value:`price_desc`,children:`Price — High to Low`})]})]}),(0,f.jsx)(_,{label:`Price`,opts:te,value:r,onChange:V}),(0,f.jsx)(_,{label:`Validity`,opts:ne,value:C,onChange:H}),(0,f.jsx)(_,{label:`Network`,opts:re,value:T,onChange:U}),(0,f.jsxs)(`div`,{style:{marginBottom:22},children:[(0,f.jsx)(`span`,{className:`sec-label`,children:`Data type`}),(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,background:x?p.blueSoft:p.white,border:`1.5px solid ${x?`rgba(37,99,235,.25)`:p.border}`,borderRadius:11,padding:`11px 13px`,transition:`all .15s`},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{style:{fontSize:13,fontWeight:700,color:p.text},children:`Unlimited Data`}),(0,f.jsx)(`p`,{style:{fontSize:11,color:p.muted,marginTop:1},children:`High-speed + throttled`})]}),(0,f.jsx)(g,{on:x,onToggle:W})]})]}),q&&(0,f.jsx)(`button`,{className:`clear-btn`,onClick:K,children:`✕ Clear all filters`})]})]}),(0,f.jsxs)(`div`,{className:`main-col`,ref:j,children:[(0,f.jsxs)(`div`,{className:`topbar`,children:[(0,f.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,f.jsxs)(`h1`,{style:{fontSize:16,fontWeight:800,color:p.text,fontFamily:`'Syne', sans-serif`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:[n,` eSIM Plans`]}),(0,f.jsx)(`p`,{style:{fontSize:11,color:p.muted,fontWeight:500,marginTop:1},children:Y?`Loading…`:`${Q} plan${Q===1?``:`s`}`})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:5,flexWrap:`wrap`,justifyContent:`flex-end`},children:[r!==``&&(0,f.jsxs)(`span`,{style:{fontSize:11,fontWeight:700,color:p.blue,background:p.blueSoft,border:`1.5px solid rgba(37,99,235,.18)`,padding:`4px 9px`,borderRadius:7},children:[`<₹`,r]}),x&&(0,f.jsx)(`span`,{style:{fontSize:11,fontWeight:700,color:p.cyan,background:p.cyanSoft,border:`1.5px solid rgba(8,145,178,.18)`,padding:`4px 9px`,borderRadius:7},children:`Unlimited`}),C!==``&&(0,f.jsxs)(`span`,{style:{fontSize:11,fontWeight:700,color:p.green,background:p.greenSoft,border:`1.5px solid rgba(5,150,105,.18)`,padding:`4px 9px`,borderRadius:7},children:[C,`d`]}),T!==``&&(0,f.jsx)(`span`,{style:{fontSize:11,fontWeight:700,color:`#7C3AED`,background:`rgba(124,58,237,.08)`,border:`1.5px solid rgba(124,58,237,.18)`,padding:`4px 9px`,borderRadius:7},children:T})]}),X&&!Y&&(0,f.jsx)(`div`,{className:`spinner`})]}),Y?(0,f.jsx)(`div`,{className:`plans-grid`,style:{paddingBottom:40},children:[...Array(9)].map((e,t)=>(0,f.jsx)(v,{i:t},t))}):Z.length>0?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{className:`plans-grid`,children:Z.map((e,t)=>(0,f.jsx)(y,{plan:e,index:t,onClick:()=>R(e._id)},e._id))}),(0,f.jsx)(ie,{currentPage:k,totalPages:oe,onPage:A,isLoading:X})]}):(0,f.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,padding:40,textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:54,marginBottom:16,opacity:.35},children:`📶`}),(0,f.jsx)(`h3`,{style:{fontSize:20,fontWeight:800,color:p.text,fontFamily:`'Syne', sans-serif`,marginBottom:8},children:`No plans match`}),(0,f.jsx)(`p`,{style:{fontSize:13,color:p.muted,marginBottom:24,lineHeight:1.65},children:`Try adjusting the filters in the sidebar.`}),(0,f.jsx)(`button`,{onClick:K,style:{background:p.blue,color:`#fff`,border:`none`,borderRadius:12,padding:`11px 24px`,fontSize:13,fontWeight:700,cursor:`pointer`,fontFamily:`'Outfit', sans-serif`,boxShadow:`0 4px 16px rgba(37,99,235,.28)`},children:`Reset all filters`})]})]})]}),(0,f.jsx)(c,{children:M&&(0,f.jsx)(s.div,{className:`pd-overlay`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>{N(!1),L(null)},children:(0,f.jsxs)(s.div,{className:`pd-modal`,initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},onClick:e=>e.stopPropagation(),children:[(0,f.jsxs)(`div`,{className:`pd-modal-head`,children:[(0,f.jsx)(`button`,{className:`pd-modal-close`,onClick:()=>{N(!1),L(null)},children:(0,f.jsx)(i,{size:16})}),(0,f.jsx)(`h3`,{className:`pd-modal-title`,children:P?`Create Account`:`Welcome Back`}),(0,f.jsx)(`p`,{className:`pd-modal-sub`,children:P?`Sign up to view this plan`:`Login to view this plan`})]}),(0,f.jsxs)(`div`,{className:`pd-modal-tabs`,children:[(0,f.jsx)(`button`,{className:`pd-tab ${P?``:`pd-tab-active`}`,onClick:()=>F(!1),children:`Login`}),(0,f.jsx)(`button`,{className:`pd-tab ${P?`pd-tab-active`:``}`,onClick:()=>F(!0),children:`Sign Up`})]}),(0,f.jsx)(`div`,{className:`pd-modal-body`,children:P?(0,f.jsx)(t,{onSuccess:z}):(0,f.jsx)(ee,{onSuccess:z,onSignupRedirect:()=>{},onForgotRedirect:()=>{}})})]})})})]})};export{b as default};