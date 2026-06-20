import{V as e,W as t,Z as n,q as r}from"./index-DQ2UkbOl.js";var i=`/assets/airtel2-QZJg5jez.png`,a=`/assets/bsnl-CD0vG6wt.png`,o=`/assets/vi2-BMu4Fguv.png`,s=`/assets/jio3-B5YR3UPH.png`,c=n(r(),1),l=e(),u=[{name:`Jio`,desc:`India's Largest 5G Network`,tag:`5G Ready`,sub:`#1 Network`,data:`2 GB/day`,color:`#0F3CC9`,accentColor:`#3B82F6`,bgTop:`linear-gradient(135deg, #0F3CC9 0%, #062B80 100%)`,bgBottom:`#020F2B`,textPrimary:`#FFFFFF`,textSecondary:`#94A3B8`,logoSrc:s},{name:`Airtel`,desc:`India's Fastest Network`,tag:`Fastest`,sub:`5G+`,data:`2.5 GB/day`,color:`#E40000`,accentColor:`#FF4D4D`,bgTop:`linear-gradient(135deg, #E40000 0%, #8B0000 100%)`,bgBottom:`#1E0003`,textPrimary:`#FFFFFF`,textSecondary:`#FDA4AF`,logoSrc:i},{name:`Vi`,desc:`Now Stronger Together`,tag:`Value`,sub:`4G+`,data:`1.5 GB/day`,color:`#C8102E`,accentColor:`#FFD400`,bgTop:`linear-gradient(135deg, #C8102E 0%, #7A0019 100%)`,bgBottom:`#140002`,textPrimary:`#FFFFFF`,textSecondary:`#FCA5A5`,logoSrc:o},{name:`BSNL`,desc:`Connecting India Smoothly`,tag:`Budget`,sub:`4G/5G`,data:`Unlimited`,color:`#004A99`,accentColor:`#F58220`,bgTop:`linear-gradient(135deg, #004A99 0%, #002D62 100%)`,bgBottom:`#000817`,textPrimary:`#FFFFFF`,textSecondary:`#93C5FD`,logoSrc:a}],d=`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  .store-container {
    background-color: #FAFAFA;
    min-height: 100vh;
    font-family: 'Plus Jakarta Sans', sans-serif;
    padding-bottom: 100px;
  }

  /* Grid Area Styling - Adjusted padding since steps section is removed */
  .grid-header {
    text-align: center;
    padding: 80px 24px 30px;
  }
  .grid-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 700;
    color: #0F172A;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }
  .grid-title span {
    background: linear-gradient(90deg, #0F3CC9 0%, #E40000 35%, #C8102E 65%, #004A99 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .grid-subtitle {
    font-size: 14.5px;
    color: #64748B;
    max-width: 520px;
    margin: 0 auto;
  }

  /* Real Dark Dynamic SIM Cards layout */
  .cards-layout-box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }
  @media (max-width: 1024px) { .cards-layout-box { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 560px) { .cards-layout-box { grid-template-columns: 1fr; } }

  .sim-card {
    border-radius: 24px;
    overflow: hidden;
    cursor: pointer;
    background: #FFFFFF;
    border: 2px solid rgba(0, 0, 0, 0.04);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, box-shadow 0.3s;
    position: relative;
  }
  .sim-card:hover {
    transform: translateY(-8px);
  }
  .sim-card.selected-active {
    border-color: var(--brand-base-clr) !important;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }

  /* Top Operator Core Block */
  .card-top-panel {
    padding: 26px 22px 20px;
    position: relative;
    min-height: 146px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .mesh-waves {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.15;
    pointer-events: none;
  }

  /* Logo box: fixed square, image scales to fit without distortion */
 .logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  padding: 6px;
  border-radius: 14px;

   background: #ffffff;
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255,255,255,0.22);
  overflow: hidden;
  flex-shrink: 0;
}

.logo-wrapper img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

  .network-bars-ui {
    display: flex;
    align-items: flex-end;
    gap: 3px;
    height: 16px;
  }
  .network-bars-ui span {
    width: 3.5px;
    border-radius: 2px;
    background: #FFFFFF;
  }
  .network-bars-ui span:nth-child(1) { height: 5px; opacity: 0.4; }
  .network-bars-ui span:nth-child(2) { height: 9px; opacity: 0.6; }
  .network-bars-ui span:nth-child(3) { height: 13px; opacity: 0.8; }
  .network-bars-ui span:nth-child(4) { height: 16px; opacity: 1; }

  .sim-card:hover .network-bars-ui span {
    background: var(--brand-accent-clr) !important;
  }

  .op-title-text {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 6px;
  }
  .pill-group-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .pill-tag-main {
    font-size: 10px;
    font-weight: 700;
    border-radius: 999px;
    padding: 2px 10px;
    border: 1px solid rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.16);
  }
  .pill-tag-sub {
    font-size: 10px;
    font-weight: 500;
    border-radius: 999px;
    padding: 2px 10px;
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.7);
  }

  /* Real Dark Base Panel */
  .card-bottom-panel {
    padding: 22px 22px 20px;
    transition: background-color 0.25s;
  }
  .metric-specs-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .metric-label {
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .metric-value {
    font-size: 13.5px;
    font-weight: 700;
  }
  .plans-action-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }
  .action-label-txt {
    font-size: 13px;
    font-weight: 700;
  }
  .arrow-circle-icon {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    background: rgba(255, 255, 255, 0.04);
    transition: all 0.25s ease;
  }
  .sim-card:hover .arrow-circle-icon {
    transform: scale(1.08) translateX(2px);
    background: var(--brand-base-clr) !important;
    color: #FFFFFF !important;
  }

  /* Active Bottom Sheet Drawer Trigger */
  .docked-sticky-footer {
    position: fixed;
    bottom: 24px;
    left: 24px;
    right: 24px;
    z-index: 100;
    max-width: 1200px;
    margin: 0 auto;
    animation: slideUpDock 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  @keyframes slideUpDock {
    from { transform: translateY(40px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  .docked-card-inner {
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 18px;
    padding: 14px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
  }
  .status-circle-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
  }

  /* Small logo chip used in the docked footer */
 .dock-logo-chip {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #ffffff;
  padding: 3px;
  overflow: hidden;
}

.dock-logo-chip img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

  .dock-info-label {
    font-size: 14.5px;
    font-weight: 700;
    color: #0F172A;
  }
  .dock-proceed-btn {
    border: none;
    border-radius: 999px;
    padding: 10px 24px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    color: #FFFFFF;
    transition: opacity 0.2s;
  }
  .dock-proceed-btn:hover { opacity: 0.9; }
  @media (max-width: 640px) { .responsive-hide { display: none !important; } }
`,f=()=>{let e=t(),[n,r]=(0,c.useState)(null),i=t=>{e(`/simstore`,{state:{operatorName:t}})},a=u.find(e=>e.name===n);return(0,l.jsxs)(`div`,{className:`store-container`,children:[(0,l.jsx)(`style`,{children:d}),(0,l.jsxs)(`div`,{className:`grid-header`,children:[(0,l.jsxs)(`h1`,{className:`grid-title`,children:[`Select Your `,(0,l.jsx)(`span`,{children:`Preferred Network`})]}),(0,l.jsx)(`p`,{className:`grid-subtitle`,children:`Choose an operator below to discover premium configurations and activate instantly.`})]}),(0,l.jsx)(`div`,{className:`cards-layout-box`,children:u.map(e=>(0,l.jsxs)(`div`,{className:`sim-card ${n===e.name?`selected-active`:``}`,style:{"--brand-base-clr":e.color},onClick:()=>r(e.name),children:[(0,l.jsxs)(`div`,{className:`card-top-panel`,style:{background:e.bgTop},children:[(0,l.jsxs)(`svg`,{className:`mesh-waves`,viewBox:`0 0 200 150`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,l.jsx)(`circle`,{cx:`180`,cy:`20`,r:`70`,fill:`rgba(255,255,255,0.12)`}),(0,l.jsx)(`circle`,{cx:`20`,cy:`130`,r:`50`,fill:`rgba(0,0,0,0.15)`})]}),(0,l.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,position:`relative`,zIndex:2},children:[(0,l.jsx)(`div`,{className:`logo-wrapper`,children:(0,l.jsx)(`img`,{src:e.logoSrc,alt:`${e.name} logo`})}),(0,l.jsxs)(`div`,{className:`network-bars-ui`,children:[(0,l.jsx)(`span`,{}),(0,l.jsx)(`span`,{}),(0,l.jsx)(`span`,{}),(0,l.jsx)(`span`,{})]})]}),(0,l.jsxs)(`div`,{style:{position:`relative`,zIndex:2},children:[(0,l.jsx)(`div`,{className:`op-title-text`,style:{color:e.textPrimary},children:e.name}),(0,l.jsxs)(`div`,{className:`pill-group-row`,children:[(0,l.jsx)(`span`,{className:`pill-tag-main`,style:{color:e.textPrimary},children:e.tag}),(0,l.jsx)(`span`,{className:`pill-tag-sub`,children:e.sub})]})]})]}),(0,l.jsxs)(`div`,{className:`card-bottom-panel`,style:{background:e.bgBottom},children:[(0,l.jsxs)(`div`,{className:`metric-specs-row`,children:[(0,l.jsxs)(`span`,{className:`metric-label`,style:{color:e.textSecondary},children:[(0,l.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:[(0,l.jsx)(`path`,{d:`M5 12.55a11 11 0 0 1 14.08 0`}),(0,l.jsx)(`path`,{d:`M1.42 9a16 16 0 0 1 21.16 0`}),(0,l.jsx)(`circle`,{cx:`12`,cy:`20`,r:`1`})]}),`Data`]}),(0,l.jsx)(`span`,{className:`metric-value`,style:{color:e.textPrimary},children:e.data})]}),(0,l.jsxs)(`div`,{className:`metric-specs-row`,children:[(0,l.jsxs)(`span`,{className:`metric-label`,style:{color:e.textSecondary},children:[(0,l.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,l.jsx)(`path`,{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.13h3a2 2 0 0 1 2 1.72z`})}),`Calls`]}),(0,l.jsx)(`span`,{className:`metric-value`,style:{color:e.textPrimary},children:`Unlimited`})]}),(0,l.jsxs)(`div`,{className:`plans-action-btn`,onClick:t=>{t.stopPropagation(),i(e.name)},children:[(0,l.jsx)(`span`,{className:`action-label-txt`,style:{color:e.accentColor},children:`View Plans`}),(0,l.jsx)(`div`,{className:`arrow-circle-icon`,style:{color:e.accentColor},children:`→`})]})]})]},e.name))}),a&&(0,l.jsx)(`div`,{className:`docked-sticky-footer`,children:(0,l.jsxs)(`div`,{className:`docked-card-inner`,children:[(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,l.jsx)(`span`,{className:`status-circle-dot`,style:{background:a.color,boxShadow:`0 0 14px ${a.color}`}}),(0,l.jsx)(`div`,{className:`dock-logo-chip`,children:(0,l.jsx)(`img`,{src:a.logoSrc,alt:`${a.name} logo`})}),(0,l.jsxs)(`span`,{className:`dock-info-label`,children:[a.name,` Selected`]}),(0,l.jsxs)(`span`,{style:{fontSize:13,color:`#64748B`},className:`responsive-hide`,children:[`| `,a.desc]})]}),(0,l.jsx)(`button`,{className:`dock-proceed-btn`,style:{background:a.color,boxShadow:`0 6px 20px ${a.color}40`},onClick:()=>i(a.name),children:`View Plans →`})]})})]})};export{f as default};