import{V as e}from"./index-Bl6eECK3.js";const t=new Set([`IN`,`US`,`AE`,`DE`,`FR`,`JP`,`SG`,`AU`,`GB`,`CA`,`TH`,`KR`,`IT`,`ES`,`NL`,`MY`,`ID`,`PH`,`MX`,`BR`]),n=[{name:`India`,code:`IN`,price:`₹199`,flag:`https://flagcdn.com/in.svg`,hasPlans:!0},{name:`United States`,code:`US`,price:`₹540`,flag:`https://flagcdn.com/us.svg`,hasPlans:!0},{name:`United Arab Emirates`,code:`AE`,price:`₹400`,flag:`https://flagcdn.com/ae.svg`,hasPlans:!0},{name:`Germany`,code:`DE`,price:`₹420`,flag:`https://flagcdn.com/de.svg`,hasPlans:!0},{name:`France`,code:`FR`,price:`₹410`,flag:`https://flagcdn.com/fr.svg`,hasPlans:!0},{name:`Japan`,code:`JP`,price:`₹450`,flag:`https://flagcdn.com/jp.svg`,hasPlans:!0},{name:`Singapore`,code:`SG`,price:`₹350`,flag:`https://flagcdn.com/sg.svg`,hasPlans:!0},{name:`Australia`,code:`AU`,price:`₹500`,flag:`https://flagcdn.com/au.svg`,hasPlans:!0},{name:`United Kingdom`,code:`GB`,price:`₹480`,flag:`https://flagcdn.com/gb.svg`,hasPlans:!0},{name:`Canada`,code:`CA`,price:`₹430`,flag:`https://flagcdn.com/ca.svg`,hasPlans:!0},{name:`Thailand`,code:`TH`,price:`₹280`,flag:`https://flagcdn.com/th.svg`,hasPlans:!0},{name:`South Korea`,code:`KR`,price:`₹390`,flag:`https://flagcdn.com/kr.svg`,hasPlans:!0},{name:`Italy`,code:`IT`,price:`₹320`,flag:`https://flagcdn.com/it.svg`,hasPlans:!0},{name:`Spain`,code:`ES`,price:`₹410`,flag:`https://flagcdn.com/es.svg`,hasPlans:!0},{name:`Netherlands`,code:`NL`,price:`₹430`,flag:`https://flagcdn.com/nl.svg`,hasPlans:!0},{name:`Malaysia`,code:`MY`,price:`₹260`,flag:`https://flagcdn.com/my.svg`,hasPlans:!0},{name:`Indonesia`,code:`ID`,price:`₹240`,flag:`https://flagcdn.com/id.svg`,hasPlans:!0},{name:`Philippines`,code:`PH`,price:`₹250`,flag:`https://flagcdn.com/ph.svg`,hasPlans:!0},{name:`Mexico`,code:`MX`,price:`₹360`,flag:`https://flagcdn.com/mx.svg`,hasPlans:!0},{name:`Brazil`,code:`BR`,price:`₹380`,flag:`https://flagcdn.com/br.svg`,hasPlans:!0},{name:`South Africa`,code:`ZA`,price:`—`,flag:`https://flagcdn.com/za.svg`,hasPlans:!1},{name:`Nigeria`,code:`NG`,price:`—`,flag:`https://flagcdn.com/ng.svg`,hasPlans:!1},{name:`Kenya`,code:`KE`,price:`—`,flag:`https://flagcdn.com/ke.svg`,hasPlans:!1},{name:`Egypt`,code:`EG`,price:`—`,flag:`https://flagcdn.com/eg.svg`,hasPlans:!1},{name:`New Zealand`,code:`NZ`,price:`—`,flag:`https://flagcdn.com/nz.svg`,hasPlans:!1},{name:`Portugal`,code:`PT`,price:`—`,flag:`https://flagcdn.com/pt.svg`,hasPlans:!1},{name:`Saudi Arabia`,code:`SA`,price:`—`,flag:`https://flagcdn.com/sa.svg`,hasPlans:!1},{name:`Qatar`,code:`QA`,price:`—`,flag:`https://flagcdn.com/qa.svg`,hasPlans:!1},{name:`Kuwait`,code:`KW`,price:`—`,flag:`https://flagcdn.com/kw.svg`,hasPlans:!1},{name:`Bahrain`,code:`BH`,price:`—`,flag:`https://flagcdn.com/bh.svg`,hasPlans:!1}],r=[{name:`Asia`,price:`₹999`,emoji:`🌏`,codes:[`IN`,`AE`,`JP`,`SG`,`TH`,`MY`,`ID`,`PH`,`KR`]},{name:`Europe`,price:`₹1499`,emoji:`🌍`,codes:[`GB`,`FR`,`DE`,`IT`,`ES`,`PT`,`NL`]},{name:`Americas`,price:`₹1699`,emoji:`🗽`,codes:[`US`,`CA`,`MX`,`BR`]},{name:`Africa`,price:`₹1299`,emoji:`🌍`,codes:[`ZA`,`NG`,`KE`,`EG`]},{name:`Oceania`,price:`₹1899`,emoji:`🌊`,codes:[`AU`,`NZ`]},{name:`Middle East`,price:`₹1199`,emoji:`🏜️`,codes:[`AE`,`SA`,`QA`,`KW`,`BH`]}];function i(e){let r=(e.code||e.isoCode||e.countryCode||``).toUpperCase(),i=typeof e.hasPlans==`boolean`?e.hasPlans:typeof e.planCount==`number`?e.planCount>0:t.has(r),a=i?e.price?`₹${e.price}`:e.basePrice?`₹${e.basePrice}`:n.find(e=>e.code===r)?.price??`View Plans`:`—`;return{name:e.name,code:r,price:a,flag:e.flag||`https://flagcdn.com/${r.toLowerCase()}.svg`,hasPlans:i}}var a=e(),o=`#2563EB`,s=`#0F172A`,c=`#64748B`,l=`#FFFFFF`,u=[{step:`01`,emoji:`🌍`,title:`Choose a Plan`,desc:`Browse countries or regional plans and pick the data package that suits your trip.`},{step:`02`,emoji:`💳`,title:`Purchase Instantly`,desc:`Pay securely online in seconds. No queues, no store visits, no paperwork needed.`},{step:`03`,emoji:`📲`,title:`Scan & Install`,desc:`Receive a QR code by email. Scan it to install your eSIM before you even board.`},{step:`04`,emoji:`✈️`,title:`Travel & Connect`,desc:`Land at your destination and connect instantly — full-speed data, zero roaming fees.`}],d=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

  @keyframes hiwFadeUp {
    from { opacity:0; transform:translateY(18px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }

  /* ── Section — full bleed, zero side padding ── */
  .hiw-section {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: #F0F5FF;
    padding: 0;
    border-top: 1.5px solid #E2E8F0;
    overflow: hidden;
    width: 100%;
  }

  /* ── Top banner strip ── */
  .hiw-banner {
    width: 100%;
    background: linear-gradient(100deg, #0F172A 0%, #1E3A8A 55%, #1D4ED8 100%);
    padding: 52px 32px 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
  }
  .hiw-banner::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 120% at 80% 50%, rgba(99,102,241,0.22) 0%, transparent 70%);
    pointer-events: none;
  }
  .hiw-banner-dots {
    position: absolute; inset: 0; pointer-events: none;
    background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
    background-size: 28px 28px;
  }
  .hiw-banner-left { position: relative; z-index: 1; max-width: 540px; }
  .hiw-eyebrow {
    font-size: 11px; font-weight: 800; letter-spacing: 0.18em;
    text-transform: uppercase; color: #93C5FD;
    margin-bottom: 14px; display: block;
  }
  .hiw-heading {
    font-size: clamp(1.7rem, 3.2vw, 2.4rem); font-weight: 900;
    color: #FFFFFF; letter-spacing: -0.03em; line-height: 1.15;
    margin-bottom: 12px;
  }
  .hiw-subheading {
    font-size: 14px; color: rgba(255,255,255,0.62); font-weight: 500; line-height: 1.7;
  }

  /* ── Steps row inside banner ── */
  .hiw-steps-row {
    display: flex; gap: 10px; flex-wrap: wrap;
    position: relative; z-index: 1;
    flex-shrink: 0;
  }
  .hiw-step-pill {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 14px;
    padding: 14px 16px;
    display: flex; flex-direction: column; align-items: center;
    gap: 5px; min-width: 90px; text-align: center;
    animation: hiwFadeUp .4s ease both;
    transition: background .2s, border-color .2s;
  }
  .hiw-step-pill:hover {
    background: rgba(255,255,255,0.15);
    border-color: rgba(255,255,255,0.3);
  }
  .hiw-step-pill-emoji { font-size: 24px; line-height: 1; }
  .hiw-step-pill-title { font-size: 11px; font-weight: 700; color: #fff; line-height: 1.3; }
  .hiw-step-pill-num   { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.4); letter-spacing: 0.1em; }

  /* ── Body area ── */
  .hiw-body {
    padding: 0 0 64px;
  }

  /* ── Main video ── */
  .hiw-main-video-wrap {
    width: 100%;
    padding: 0;
    margin-bottom: 0;
  }
  .hiw-main-video-card {
    width: 100%;
    background: ${s};
    position: relative;
    overflow: hidden;
  }
  .hiw-main-video-thumb {
    position: relative;
    width: 100%;
    aspect-ratio: 21/8;
    background: linear-gradient(120deg, #0F172A 0%, #1E3A8A 50%, #2563EB 100%);
    overflow: hidden;
  }
  .hiw-main-video-thumb::after {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 50% 90% at 50% 50%, rgba(37,99,235,0.35) 0%, transparent 70%);
  }
  .hiw-main-video-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
  }
  .hiw-main-video-label {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 18px 32px;
    background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%);
    display: flex; align-items: flex-end; justify-content: space-between; gap: 16px;
  }
  .hiw-main-video-label-text {
    font-size: 15px; font-weight: 800; color: #fff; line-height: 1.3;
  }
  .hiw-main-video-label-sub {
    font-size: 12px; color: rgba(255,255,255,0.65); font-weight: 500; margin-top: 3px;
  }
  .hiw-duration-badge {
    background: rgba(0,0,0,0.55); color: #fff; font-size: 11px; font-weight: 700;
    padding: 4px 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.18);
    white-space: nowrap; flex-shrink: 0; align-self: flex-end;
  }

  /* ── Play button ── */
  .hiw-play-btn {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 68px; height: 68px; border-radius: 50%;
    background: rgba(255,255,255,0.95);
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 8px 32px rgba(0,0,0,.4);
    cursor: pointer; border: none; z-index: 2;
    transition: transform .2s, background .2s;
  }
  .hiw-play-btn:hover { transform: translate(-50%, -50%) scale(1.1); background: ${l}; }
  .hiw-play-btn.small {
    width: 44px; height: 44px;
    background: rgba(255,255,255,0.90);
    box-shadow: 0 4px 18px rgba(0,0,0,.3);
  }
  .hiw-play-arrow {
    width: 0; height: 0;
    border-top: 11px solid transparent;
    border-bottom: 11px solid transparent;
    border-left: 18px solid ${o};
    margin-left: 4px;
  }
  .hiw-play-btn.small .hiw-play-arrow {
    border-top-width: 8px; border-bottom-width: 8px; border-left-width: 13px;
    margin-left: 2px;
  }

  /* ── Small videos grid ── */
  .hiw-small-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    width: 100%;
    border-top: 1.5px solid #E2E8F0;
    background: ${l};
  }
  .hiw-small-card {
    background: ${l};
    display: flex; flex-direction: column;
    border-right: 1.5px solid #E2E8F0;
    animation: hiwFadeUp .35s ease both;
    transition: background .2s;
    cursor: pointer;
  }
  .hiw-small-card:last-child { border-right: none; }
  .hiw-small-card:hover { background: #F8FAFF; }
  .hiw-small-thumb {
    position: relative;
    aspect-ratio: 16/9;
    background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
    overflow: hidden;
    flex-shrink: 0;
  }
  .hiw-small-thumb-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.15);
  }
  .hiw-small-info {
    padding: 13px 14px 15px;
    border-top: 1px solid #F0F4FF;
    flex: 1;
  }
  .hiw-small-title {
    font-size: 12px; font-weight: 800; color: ${s}; line-height: 1.4;
    margin-bottom: 4px;
  }
  .hiw-small-dur {
    font-size: 11px; color: ${c}; font-weight: 600;
  }

  /* ── Step cards row ── */
  .hiw-steps-section {
    padding: 40px 32px 0;
  }
  .hiw-steps-label {
    font-size: 11px; font-weight: 800; color: ${o}; letter-spacing: 0.16em;
    text-transform: uppercase; margin-bottom: 18px; display: block;
  }
  .hiw-steps-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }
  .hiw-step-card {
    background: ${l};
    border-radius: 18px;
    padding: 22px 16px 20px;
    border: 1.5px solid rgba(37,99,235,.10);
    box-shadow: 0 3px 12px rgba(37,99,235,.06);
    text-align: center;
    position: relative;
    overflow: hidden;
    animation: hiwFadeUp .38s ease both;
    transition: transform .22s ease, box-shadow .22s ease, border-color .2s;
  }
  .hiw-step-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, ${o} 0%, #818CF8 100%);
  }
  .hiw-step-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(37,99,235,.14);
    border-color: rgba(37,99,235,.22);
  }
  .hiw-step-num   { font-size: 10px; font-weight: 800; letter-spacing: 0.14em; color: ${o}; opacity: 0.45; text-transform: uppercase; margin-bottom: 9px; }
  .hiw-step-emoji { font-size: 30px; display: block; margin-bottom: 9px; line-height: 1; }
  .hiw-step-title { font-size: 13px; font-weight: 800; color: ${s}; margin-bottom: 7px; line-height: 1.25; }
  .hiw-step-desc  { font-size: 11.5px; color: ${c}; font-weight: 500; line-height: 1.65; }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .hiw-banner { padding: 40px 24px; }
    .hiw-steps-row { display: none; }
    .hiw-small-grid { grid-template-columns: repeat(2, 1fr); }
    .hiw-small-card:nth-child(2) { border-right: none; }
    .hiw-small-card:nth-child(3) { border-right: 1.5px solid #E2E8F0; }
    .hiw-small-card:nth-child(3),
    .hiw-small-card:nth-child(4) { border-top: 1.5px solid #E2E8F0; }
    .hiw-steps-cards { grid-template-columns: repeat(2, 1fr); }
    .hiw-steps-section { padding: 32px 20px 0; }
    .hiw-main-video-thumb { aspect-ratio: 16/7; }
  }
  @media (max-width: 560px) {
    .hiw-small-grid  { grid-template-columns: 1fr; }
    .hiw-small-card  { border-right: none !important; border-top: 1.5px solid #E2E8F0; }
    .hiw-steps-cards { grid-template-columns: 1fr; }
    .hiw-main-video-thumb { aspect-ratio: 16/9; }
    .hiw-main-video-label { padding: 14px 16px; }
    .hiw-body { padding-bottom: 44px; }
  }
`,f=[{title:`Buy & Activate eSIM`,dur:`2:14`},{title:`Scan QR Installation`,dur:`1:48`},{title:`Travel Without Roaming`,dur:`3:02`},{title:`Global Network Coverage`,dur:`2:37`}];function p(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`style`,{children:d}),(0,a.jsxs)(`section`,{className:`hiw-section`,children:[(0,a.jsxs)(`div`,{className:`hiw-banner`,children:[(0,a.jsx)(`div`,{className:`hiw-banner-dots`}),(0,a.jsxs)(`div`,{className:`hiw-banner-left`,children:[(0,a.jsx)(`span`,{className:`hiw-eyebrow`,children:`Simple Process`}),(0,a.jsxs)(`h2`,{className:`hiw-heading`,children:[`Get Connected`,(0,a.jsx)(`br`,{}),`in Minutes`]}),(0,a.jsx)(`p`,{className:`hiw-subheading`,children:`From choosing a plan to landing abroad — everything happens on your phone, in seconds.`})]}),(0,a.jsx)(`div`,{className:`hiw-steps-row`,children:u.map((e,t)=>(0,a.jsxs)(`div`,{className:`hiw-step-pill`,style:{animationDelay:`${t*80}ms`},children:[(0,a.jsx)(`span`,{className:`hiw-step-pill-emoji`,children:e.emoji}),(0,a.jsx)(`span`,{className:`hiw-step-pill-title`,children:e.title}),(0,a.jsx)(`span`,{className:`hiw-step-pill-num`,children:e.step})]},e.step))})]}),(0,a.jsxs)(`div`,{className:`hiw-body`,children:[(0,a.jsx)(`div`,{className:`hiw-main-video-wrap`,children:(0,a.jsx)(`div`,{className:`hiw-main-video-card`,children:(0,a.jsxs)(`div`,{className:`hiw-main-video-thumb`,children:[(0,a.jsx)(`div`,{className:`hiw-main-video-grid`}),(0,a.jsx)(`button`,{className:`hiw-play-btn`,"aria-label":`Play main video`,children:(0,a.jsx)(`span`,{className:`hiw-play-arrow`})}),(0,a.jsxs)(`div`,{className:`hiw-main-video-label`,children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{className:`hiw-main-video-label-text`,children:`How Rapport eSIM Works — Complete Setup Guide`}),(0,a.jsx)(`p`,{className:`hiw-main-video-label-sub`,children:`Purchase, activate and start using your eSIM within minutes.`})]}),(0,a.jsx)(`span`,{className:`hiw-duration-badge`,children:`▶ 4:32`})]})]})})}),(0,a.jsx)(`div`,{className:`hiw-small-grid`,children:f.map((e,t)=>(0,a.jsxs)(`div`,{className:`hiw-small-card`,style:{animationDelay:`${t*70}ms`},children:[(0,a.jsxs)(`div`,{className:`hiw-small-thumb`,children:[(0,a.jsx)(`div`,{className:`hiw-small-thumb-overlay`}),(0,a.jsx)(`button`,{className:`hiw-play-btn small`,"aria-label":`Play: ${e.title}`,children:(0,a.jsx)(`span`,{className:`hiw-play-arrow`})})]}),(0,a.jsxs)(`div`,{className:`hiw-small-info`,children:[(0,a.jsx)(`p`,{className:`hiw-small-title`,children:e.title}),(0,a.jsxs)(`p`,{className:`hiw-small-dur`,children:[`▶ `,e.dur]})]})]},e.title))}),(0,a.jsxs)(`div`,{className:`hiw-steps-section`,children:[(0,a.jsx)(`span`,{className:`hiw-steps-label`,children:`Step by step`}),(0,a.jsx)(`div`,{className:`hiw-steps-cards`,children:u.map((e,t)=>(0,a.jsxs)(`div`,{className:`hiw-step-card`,style:{animationDelay:`${t*80}ms`},children:[(0,a.jsxs)(`p`,{className:`hiw-step-num`,children:[`Step `,e.step]}),(0,a.jsx)(`span`,{className:`hiw-step-emoji`,children:e.emoji}),(0,a.jsx)(`p`,{className:`hiw-step-title`,children:e.title}),(0,a.jsx)(`p`,{className:`hiw-step-desc`,children:e.desc})]},e.step))})]})]})]})]})}export{i,r as n,n as r,p as t};