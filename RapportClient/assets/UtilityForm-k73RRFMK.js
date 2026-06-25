import{B as e,H as t,K as n,X as r}from"./index-DqlNmK75.js";import{i,n as a,r as o,t as s}from"./bsnllogo-D1OEI75a.js";import{n as c}from"./usePlans-Bl0gBzym.js";var l=r(n(),1),u=e(),d=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght=400;500;600;700;800;900&family=IBM+Plex+Mono:wght=500;600;700&display=swap');
  * { box-sizing: border-box; font-family: 'Plus Jakarta Sans', sans-serif; }
  @keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes pop { from { opacity:0; transform:scale(0.96); } to { opacity:1; transform:scale(1); } }
  @keyframes spin { to { transform: rotate(360deg); } }

  .uf-grid { display: grid; grid-template-columns: 360px 1fr; gap: 40px; align-items: start; }
  @media (max-width: 960px) { .uf-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }

  .uf-card { animation: fadeUp 0.45s ease both; background: #FFFFFF; border-radius: 24px; padding: 36px; border: 1px solid #E4E8F0; }
  .uf-input { width: 100%; padding: 14px 16px; borderRadius: 12px; border: 1px solid #E4E8F0; fontSize: 16px; background: #F5F6FA; fontWeight: 600; transition: all 0.15s; }
  .uf-input:focus { border-color: var(--accent) !important; box-shadow: 0 0 0 4px var(--accent-soft); background: #FFFFFF !important; outline: none; }
  
  .uf-pay-btn { width: 100%; padding: 16px; borderRadius: 12px; border: none; fontWeight: 800; fontSize: 16px; cursor: pointer; transition: all 0.15s; }
  .uf-pay-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  /* Premium Manual Operator Grid Style with Logos */
  .manual-header { display: flex; justify-content: space-between; align-items: center; margin-top: 14px; padding: 0 2px; }
  .change-op-btn { background: none; border: none; color: #2563EB; font-size: 13px; font-weight: 700; cursor: pointer; text-decoration: none; padding: 4px 8px; border-radius: 6px; background: rgba(37,99,235,0.06); transition: all 0.2s; }
  .change-op-btn:hover { background: rgba(37,99,235,0.12); }
  
  .op-select-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 14px; animation: pop 0.25s ease; }
  
  /* Brand-specific Card Blueprints */
  .op-select-card { 
    border: 1px solid #E4E8F0; border-radius: 16px; padding: 16px 12px; text-align: center; 
    cursor: pointer; transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); background: #FFFFFF;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
  }
  .op-select-card:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.04); }
  
  /* Logo avatar wrapper replacing the letter-color box */
  .op-avatar { 
    width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; 
    justify-content: center; background: #FFFFFF; border: 1px solid #E4E8F0; padding: 6px;
  }
  .op-avatar img { width: 100%; height: 100%; object-fit: contain; }
  .op-name-lbl { font-size: 13px; font-weight: 700; color: #334155; }

  /* Operator Selections Overrides */
  .op-select-card.active-JIO { border-color: #0F3CC9; background: #EEF2FF; }
  .op-select-card.active-JIO .op-name-lbl { color: #0F3CC9; }
  
  .op-select-card.active-AIRTEL { border-color: #E11D48; background: #FFF1F2; }
  .op-select-card.active-AIRTEL .op-name-lbl { color: #E11D48; }
  
  .op-select-card.active-VI { border-color: #C026D3; background: #FDF4FF; }
  .op-select-card.active-VI .op-name-lbl { color: #C026D3; }
  
  .op-select-card.active-BSNL { border-color: #EA580C; background: #FFF7ED; }
  .op-select-card.active-BSNL .op-name-lbl { color: #EA580C; }

  /* Summary panel logo + network row */
  .summary-network-row { display: flex; align-items: center; gap: 8px; }
  .summary-op-logo { width: 22px; height: 22px; border-radius: 6px; object-fit: contain; background: #FFFFFF; border: 1px solid #E4E8F0; padding: 3px; }

  /* Plans Layout */
  .plans-container { margin-top: 28px; animation: pop 0.3s ease both; }
  .plans-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; margin-top: 12px; }
  .plan-card { border: 2px solid #E4E8F0; border-radius: 16px; padding: 16px; cursor: pointer; transition: all 0.2s ease; background: #FFFFFF; position: relative; }
  .plan-card:hover { border-color: var(--accent); transform: translateY(-2px); }
  .plan-card.selected { border-color: var(--accent); background: var(--accent-soft); }
  .plan-price { font-size: 22px; font-weight: 800; color: #0B1220; }
  
  /* Plan Explorer Panel */
  .plan-explorer-panel { background: #F8FAFC; border: 1px dashed #CBD5E1; border-radius: 16px; padding: 20px; margin-top: 20px; animation: pop 0.25s ease; }
  .explorer-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 12px; }
  .explorer-meta-box { background: #FFFFFF; border: 1px solid #E2E8F0; padding: 10px 14px; border-radius: 10px; }
  .explorer-meta-title { font-size: 11px; color: #64748B; text-transform: uppercase; font-weight: 700; }
  .explorer-meta-value { font-size: 14px; color: #0B1220; font-weight: 700; margin-top: 2px; }
`,f=`#0B1220`,p=`#FFFFFF`,m=`#F5F6FA`,h=`#2563EB`,g=`#E4E8F0`,_=`#64748B`,v=`'IBM Plex Mono', monospace`,y=[{code:`JIO`,name:`Jio`,color:`#0F3CC9`,logo:a},{code:`AIRTEL`,name:`Airtel`,color:`#E11D48`,logo:i},{code:`VI`,name:`Vi (Vodafone Idea)`,color:`#C026D3`,logo:o},{code:`BSNL`,name:`BSNL`,color:`#EA580C`,logo:s}],b={8809:{code:`AIRTEL`,name:`Airtel`},8901:{code:`AIRTEL`,name:`Airtel`},9810:{code:`AIRTEL`,name:`Airtel`},8074:{code:`JIO`,name:`Jio`}},x=async e=>{if(!/^\d{10}$/.test(e))return null;let t=e.substring(0,4);if(b[t])return b[t];let n=e[0];return{9:{code:`AIRTEL`,name:`Airtel`},8:{code:`JIO`,name:`Jio`},7:{code:`VI`,name:`Vi (Vodafone Idea)`},6:{code:`BSNL`,name:`BSNL`}}[n]||null},S=()=>{let e=t().pathname.replace(`/`,``).toUpperCase()||`MOBILE`,[n,r]=(0,l.useState)(``),[i,a]=(0,l.useState)(``),[o,s]=(0,l.useState)(``),[g,b]=(0,l.useState)(null),[S,w]=(0,l.useState)(!1),[T,E]=(0,l.useState)(!1),[D,O]=(0,l.useState)(``),k=e===`MOBILE`,A=/^\d{10}$/.test(n);(0,l.useEffect)(()=>{if(k){if(!A){a(``),O(``),b(null),E(!1);return}w(!0),x(n).then(e=>{w(!1),e&&!T&&(a(e.code),O(e.name))})}},[n,k,A]);let{data:j,isLoading:M}=c(k&&A&&i?{operator:i}:void 0),N={JIO:[{id:`j1`,price:799,validity:`84 Days`,data:`2 GB/Day`,calls:`Unlimited`,description:`Includes JioTV, JioCinema, & Premium Access`},{id:`j2`,price:599,validity:`56 Days`,data:`2 GB/Day`,calls:`Unlimited`,description:`All India high speed coverage layout`}],AIRTEL:[{id:`a1`,price:859,validity:`84 Days`,data:`2 GB/Day`,calls:`Unlimited`,description:`Airtel Thanks Rewards & Wynk Premium Music included`},{id:`a2`,price:399,validity:`28 Days`,data:`3 GB/Day`,calls:`Unlimited`,description:`High Data consumption pack`}],VI:[{id:`v1`,price:719,validity:`84 Days`,data:`1.5 GB/Day`,calls:`Unlimited`,description:`Binge All Night data streaming completely free`}],BSNL:[{id:`b1`,price:397,validity:`150 Days`,data:`2 GB/Day`,calls:`Unlimited`,description:`Long term budget reliability architecture`}]},P=j&&j.length>0?j:N[i]||N.JIO,F=(e,t)=>{a(e),O(t),E(!0),b(null),s(``)},I=y.find(e=>e.code===i);return(0,u.jsxs)(`div`,{style:{...C.root,"--page-bg":m},children:[(0,u.jsx)(`style`,{children:d}),(0,u.jsx)(`div`,{className:`uf-texture`}),(0,u.jsxs)(`div`,{style:C.inner,children:[(0,u.jsxs)(`div`,{style:C.heroBand,children:[(0,u.jsx)(`h2`,{style:C.heroHeading,children:`📱 Online Mobile Recharge`}),(0,u.jsx)(`p`,{style:C.heroSub,children:`Dynamic auto-sync with full MNP brand portability support.`})]}),(0,u.jsxs)(`div`,{className:`uf-grid`,children:[(0,u.jsx)(`div`,{children:(0,u.jsxs)(`div`,{style:C.summaryCard,children:[(0,u.jsx)(`p`,{style:C.summaryTitle,children:`Payment summary`}),(0,u.jsxs)(`div`,{style:C.summaryRow,children:[(0,u.jsx)(`span`,{style:C.summaryLabel,children:`Mobile Number`}),(0,u.jsx)(`span`,{style:{...C.summaryValue,fontFamily:v},children:n||`—`})]}),(0,u.jsxs)(`div`,{style:C.summaryRow,children:[(0,u.jsx)(`span`,{style:C.summaryLabel,children:`Current Network`}),(0,u.jsxs)(`span`,{className:`summary-network-row`,style:{...C.summaryValue,color:I?I.color:h},children:[I&&(0,u.jsx)(`img`,{src:I.logo,alt:I.name,className:`summary-op-logo`}),S?`Detecting...`:D||`Detecting...`]})]}),(0,u.jsxs)(`div`,{style:C.summaryRow,children:[(0,u.jsx)(`span`,{style:C.summaryLabel,children:`Final Payout`}),(0,u.jsx)(`span`,{style:{...C.summaryValue,fontFamily:v,color:f,fontSize:18,fontWeight:800},children:o?`₹${o}`:`—`})]})]})}),(0,u.jsx)(`div`,{className:`uf-form-col`,children:(0,u.jsxs)(`div`,{className:`uf-card`,style:{"--accent":h,"--accent-soft":`rgba(37,99,235,0.06)`},children:[(0,u.jsxs)(`div`,{style:{marginBottom:18},children:[(0,u.jsx)(`label`,{style:C.inputLabel,children:`Mobile Number`}),(0,u.jsx)(`input`,{type:`text`,maxLength:10,value:n,onChange:e=>r(e.target.value.replace(/\D/g,``)),placeholder:`Enter 10-digit mobile number`,className:`uf-input`}),A&&(0,u.jsxs)(`div`,{className:`manual-header`,children:[(0,u.jsx)(`span`,{style:{fontSize:13,color:T?`#2563EB`:`#16A34A`,fontWeight:700},children:T?`⚡ Operator modified by customer`:`✨ Automatically mapped: ${D}`}),(0,u.jsx)(`button`,{type:`button`,className:`change-op-btn`,onClick:()=>E(!T),children:T?`Hide Options`:`Wrong Operator? Change Here`})]}),A&&T&&(0,u.jsx)(`div`,{className:`op-select-grid`,children:y.map(e=>(0,u.jsxs)(`div`,{className:`op-select-card ${i===e.code?`active-${e.code}`:``}`,onClick:()=>F(e.code,e.name),children:[(0,u.jsx)(`div`,{className:`op-avatar`,children:(0,u.jsx)(`img`,{src:e.logo,alt:e.name})}),(0,u.jsx)(`span`,{className:`op-name-lbl`,children:e.name})]},e.code))})]}),k&&A&&i&&(0,u.jsxs)(`div`,{className:`plans-container`,children:[(0,u.jsxs)(`h3`,{style:{fontSize:15,fontWeight:700,color:f,margin:`24px 0 12px 0`},children:[`Select Pack from Available `,D,` Plans`]}),(0,u.jsx)(`div`,{className:`plans-grid`,children:M?(0,u.jsx)(`div`,{style:{fontSize:13,fontWeight:700,color:_},children:`Loading plans...`}):P.map(e=>{let t=e._id??e.id,n=e.salePrice??e.price;return(0,u.jsxs)(`div`,{className:`plan-card ${g&&(g._id??g.id)===t?`selected`:``}`,onClick:()=>{b(e),s(String(n))},children:[(0,u.jsxs)(`div`,{className:`plan-price`,children:[`₹`,n,e.salePrice&&e.salePrice!==e.price&&(0,u.jsxs)(`span`,{style:{fontSize:12,color:_,textDecoration:`line-through`,marginLeft:6,fontWeight:500},children:[`₹`,e.price]})]}),(0,u.jsxs)(`div`,{style:{fontSize:12,color:_,marginTop:4},children:[`⏳ `,typeof e.validity==`number`?`${e.validity} Days`:e.validity]}),(0,u.jsxs)(`div`,{style:{fontSize:13,fontWeight:700,color:f,marginTop:6},children:[`🚀 `,e.data]})]},t)})}),g&&(0,u.jsxs)(`div`,{className:`plan-explorer-panel`,children:[(0,u.jsx)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`baseline`},children:(0,u.jsx)(`h4`,{style:{margin:0,fontSize:15,fontWeight:800,color:f},children:`Plan Breakdown Details`})}),(0,u.jsx)(`p`,{style:{fontSize:13,color:_,margin:`8px 0 14px 0`,lineHeight:1.4},children:g.description}),(0,u.jsxs)(`div`,{className:`explorer-grid`,children:[(0,u.jsxs)(`div`,{className:`explorer-meta-box`,children:[(0,u.jsx)(`div`,{className:`explorer-meta-title`,children:`Validity`}),(0,u.jsx)(`div`,{className:`explorer-meta-value`,children:typeof g.validity==`number`?`${g.validity} Days`:g.validity})]}),(0,u.jsxs)(`div`,{className:`explorer-meta-box`,children:[(0,u.jsx)(`div`,{className:`explorer-meta-title`,children:`Data Allocation`}),(0,u.jsx)(`div`,{className:`explorer-meta-value`,children:g.data})]}),(0,u.jsxs)(`div`,{className:`explorer-meta-box`,children:[(0,u.jsx)(`div`,{className:`explorer-meta-title`,children:`Calls`}),(0,u.jsx)(`div`,{className:`explorer-meta-value`,children:g.calls||`Unlimited`})]})]})]})]}),(0,u.jsx)(`button`,{type:`button`,disabled:!o,className:`uf-pay-btn`,style:{background:h,color:p,marginTop:24},children:`Proceed to Secure Payment`})]})})]})]})]})},C={root:{position:`relative`,minHeight:`100vh`,paddingBottom:80,background:`#F5F6FA`},inner:{maxWidth:1200,margin:`0 auto`,padding:`0 24px`},heroBand:{padding:`32px 0`,color:f},heroHeading:{fontSize:26,fontWeight:800,margin:0},heroSub:{color:_,fontSize:15,margin:`6px 0 0 0`},inputLabel:{display:`block`,fontSize:14,fontWeight:700,marginBottom:8},summaryCard:{background:p,borderRadius:20,padding:24,border:`1px solid ${g}`},summaryTitle:{fontSize:16,fontWeight:800,margin:`0 0 16px 0`},summaryRow:{display:`flex`,justifyContent:`space-between`,padding:`12px 0`,fontSize:14,borderBottom:`1px solid ${m}`},summaryLabel:{color:_,fontWeight:500},summaryValue:{fontWeight:600}};export{S as default};