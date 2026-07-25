import{Q as e,ct as t,it as n,tt as r}from"./index-B91svnjI.js";import{i,n as a,r as o,t as s}from"./bsnllogo-vR5V8h7Y.js";import{t as c}from"./Annotate-XlQCoGij.js";var l=`/assets/india2-DNf2GbG4.png`,u=t(n(),1),d=e(),f=[{name:`Jio`,desc:`India's Largest 5G Network`,tag:`5G Ready`,networkTypes:[`4G`,`5G`],color:`#0F3CC9`,accentColor:`#3B82F6`,bgTop:`linear-gradient(135deg, #0F3CC9 0%, #062B80 100%)`,bgBottom:`#020F2B`,textPrimary:`#FFFFFF`,textSecondary:`#94A3B8`,logoSrc:a},{name:`Airtel`,desc:`India's Fastest Network`,tag:`Fastest`,networkTypes:[`2G`,`3G`,`4G`,`5G`],color:`#E40000`,accentColor:`#FF4D4D`,bgTop:`linear-gradient(135deg, #E40000 0%, #8B0000 100%)`,bgBottom:`#1E0003`,textPrimary:`#FFFFFF`,textSecondary:`#FDA4AF`,logoSrc:i},{name:`BSNL`,desc:`Connecting India Smoothly`,tag:`Budget`,networkTypes:[`2G`,`3G`,`4G`,`5G Ready`],color:`#997800`,accentColor:`#F58220`,bgTop:`linear-gradient(135deg, #fe7b00 0%, #93b607 100%)`,bgBottom:`#000817`,textPrimary:`#FFFFFF`,textSecondary:`#93C5FD`,logoSrc:s},{name:`Vi`,desc:`Now Stronger Together`,tag:`Value`,networkTypes:[`2G`,`3G`,`4G`,`5G`],color:`#C8102E`,accentColor:`#FFD400`,bgTop:`linear-gradient(135deg, #C8102E 0%, #7A0019 100%)`,bgBottom:`#140002`,textPrimary:`#FFFFFF`,textSecondary:`#FCA5A5`,logoSrc:o}],p=`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
  
  .store-container { min-height: 720px; font-family: 'Plus Jakarta Sans', sans-serif; padding-bottom: 160px; box-sizing: border-box; background-color: #FBF7F0; }
  .grid-header { text-align: center; padding: 50px 24px 30px; }
  .grid-title { font-family: 'Space Grotesk', sans-serif; font-size: 2.6rem; font-weight: 700; color: #0F172A; }

  .cards-layout-box { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; max-width: 1500px; margin: 0 auto; padding: 0 24px; }
  
  .sim-card { border-radius: 26px; overflow: hidden; cursor: pointer; border: 2px solid rgba(0,0,0,0.04); transition: transform 0.4s, box-shadow 0.4s; position: relative; }
  .sim-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); }
  .selected-active { border-color: var(--brand-base-clr) !important; box-shadow: 0 15px 35px rgba(0,0,0,0.15); }
  
  .card-top-panel { padding: 28px; position: relative; }
  
  .logo-wrapper { width: 64px; height: 64px; background: #fff; border-radius: 16px; display: flex; align-items: center; justify-content: center; padding: 5px; }
  .logo-wrapper img { max-width: 100%; max-height: 100%; object-fit: contain; }
  
  .network-pills-row { display: flex; gap: 6px; margin-top: 14px; flex-wrap: wrap; padding-right: 36px; }
  .net-pill { font-size: 9px; font-weight: 800; background: rgba(255,255,255,0.25); padding: 4px 8px; border-radius: 6px; color: white; text-transform: uppercase; }
  
  .arrow-btn { position: absolute; top: 28px; right: 28px; width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.18); display: flex; align-items: center; justify-content: center; transition: background 0.25s, transform 0.25s; border: none; }
  .arrow-btn:hover { background: rgba(255,255,255,0.32); transform: translate(2px, -2px); }
  .arrow-icon { display: inline-block; color: #fff; font-weight: 700; }
  
  .docked-sticky-footer { position: fixed; bottom: 30px; left: 24px; right: 24px; z-index: 100; max-width: 1200px; margin: 0 auto; background: #fff; border-radius: 20px; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }

  /* Tablet */
  @media (max-width: 1024px) {
    .cards-layout-box { grid-template-columns: repeat(2, 1fr); gap: 18px; }
    .grid-title { font-size: 2.1rem; }
  }

  /* Mobile */
  @media (max-width: 640px) {
    .store-container { min-height: 560px; padding-bottom: 110px; }
    .grid-header { padding: 32px 20px 18px; }
    .grid-title { font-size: 1.6rem; }

    .cards-layout-box { grid-template-columns: 1fr; gap: 16px; padding: 0 16px; }
    .sim-card:hover { transform: none; }
    .sim-card:active { transform: scale(0.98); }

    .card-top-panel { padding: 20px; }
    .logo-wrapper { width: 52px; height: 52px; }

    .arrow-btn { top: 20px; right: 20px; width: 30px; height: 30px; }
    .network-pills-row { padding-right: 30px; }

    .docked-sticky-footer {
      bottom: 14px; left: 14px; right: 14px;
      padding: 14px 18px;
      border-radius: 16px;
      flex-wrap: wrap;
      gap: 10px;
    }
    .docked-sticky-footer span { font-size: 14px !important; }
    .docked-sticky-footer button { padding: 11px 22px !important; font-size: 13px !important; }
  }

  @media (max-width: 380px) {
    .grid-title { font-size: 1.4rem; }
    .docked-sticky-footer { flex-direction: column; align-items: stretch; }
    .docked-sticky-footer button { width: 100%; }
  }
`,m=()=>{let e=r(),[t,n]=(0,u.useState)(null),i=t=>e(`/simstore`,{state:{operatorName:t}}),a=f.find(e=>e.name===t);return(0,d.jsxs)(`div`,{className:`store-container`,style:{backgroundImage:`url(${l})`,backgroundSize:`100% auto`,backgroundPosition:`bottom center`,backgroundRepeat:`no-repeat`},children:[(0,d.jsx)(`style`,{children:p}),(0,d.jsx)(`div`,{className:`grid-header`,children:(0,d.jsxs)(`h1`,{className:`grid-title`,children:[`Select Your `,(0,d.jsx)(c,{type:`underline`,color:`#2563EB`,strokeWidth:2,children:`Network`})]})}),(0,d.jsx)(`div`,{className:`cards-layout-box`,children:f.map(e=>(0,d.jsx)(`div`,{className:`sim-card ${t===e.name?`selected-active`:``}`,style:{"--brand-base-clr":e.color,background:e.bgTop},onClick:()=>n(e.name),children:(0,d.jsxs)(`div`,{className:`card-top-panel`,children:[(0,d.jsx)(`div`,{className:`logo-wrapper`,children:(0,d.jsx)(`img`,{src:e.logoSrc,alt:e.name})}),(0,d.jsx)(`button`,{className:`arrow-btn`,onClick:t=>{t.stopPropagation(),i(e.name)},"aria-label":`View ${e.name} plans`,children:(0,d.jsx)(`span`,{className:`arrow-icon`,children:`→`})}),(0,d.jsx)(`h3`,{style:{color:`white`,fontSize:`24px`,fontWeight:700,margin:`16px 0 0`},children:e.name}),(0,d.jsx)(`div`,{className:`network-pills-row`,children:e.networkTypes.map(e=>(0,d.jsx)(`span`,{className:`net-pill`,children:e},e))})]})},e.name))}),a&&(0,d.jsxs)(`div`,{className:`docked-sticky-footer`,children:[(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`16px`},children:[(0,d.jsx)(`img`,{src:a.logoSrc,width:`40`,alt:``,style:{borderRadius:`10px`}}),(0,d.jsxs)(`span`,{style:{fontWeight:700,fontSize:`16px`},children:[a.name,` Selected`]})]}),(0,d.jsx)(`button`,{style:{background:a.color,color:`white`,padding:`14px 32px`,borderRadius:`99px`,border:`none`,fontWeight:700,cursor:`pointer`,fontSize:`14px`},onClick:()=>i(a.name),children:`View Plans →`})]})]})};export{m as default};