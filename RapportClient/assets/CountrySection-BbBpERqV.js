import{Q as e,ct as t,it as n,tt as r}from"./index-Wodc2p-u.js";var i=t(n(),1),a=e(),o=[{name:`India`,code:`IN`,price:`₹199`,flag:`https://flagcdn.com/in.svg`},{name:`United Arab Emirates`,code:`AE`,price:`₹400`,flag:`https://flagcdn.com/ae.svg`},{name:`United States of America`,code:`US`,price:`₹540`,flag:`https://flagcdn.com/us.svg`},{name:`Germany`,code:`DE`,price:`₹420`,flag:`https://flagcdn.com/de.svg`},{name:`France`,code:`FR`,price:`₹410`,flag:`https://flagcdn.com/fr.svg`},{name:`Afghanistan`,code:`AF`,price:`₹180`,flag:`https://flagcdn.com/af.svg`},{name:`Canada`,code:`CA`,price:`₹430`,flag:`https://flagcdn.com/ca.svg`},{name:`China`,code:`CN`,price:`₹360`,flag:`https://flagcdn.com/cn.svg`},{name:`Russia`,code:`RU`,price:`₹370`,flag:`https://flagcdn.com/ru.svg`}],s=[`AE`,`US`,`DE`,`FR`,`AF`,`CA`,`CN`,`IN`,`RU`],c=[{name:`Asia`,price:`₹999`,emoji:`🌏`,countries:`3 countries`,codes:[`AE`,`CN`,`IN`]},{name:`Europe`,price:`₹1499`,emoji:`🌍`,countries:`2 countries`,codes:[`DE`,`FR`]},{name:`Americas`,price:`₹1699`,emoji:`🗽`,countries:`2 countries`,codes:[`CA`,`US`]}],l={IN:`https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&q=75`,AE:`https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=75`,US:`https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&q=75`,DE:`https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&q=75`,FR:`https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&q=75`,AF:`https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=500&q=75`,CA:`https://images.unsplash.com/photo-1517935706615-2717063c2225?w=500&q=75`,CN:`https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=500&q=75`,RU:`https://images.unsplash.com/photo-1513326738677-b964603b136d?w=500&q=75`},u={Asia:`https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=75`,Europe:`https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=75`,Americas:`https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=75`},d=`#2563EB`,f=`#0F172A`,p=`#64748B`,m=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(20px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }

  /* ── Country Card ── */
  .c-card {
    border-radius: 22px;
    overflow: hidden;
    border: 1.5px solid rgba(37,99,235,0.10);
    box-shadow: 0 4px 18px rgba(37,99,235,0.07);
    cursor: pointer;
    background: #fff;
    display: flex;
    flex-direction: column;
    animation: fadeUp 0.35s ease both;
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.2s;
  }
  .c-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 22px 50px rgba(37,99,235,0.17);
    border-color: rgba(37,99,235,0.28);
  }

  .c-img-wrap {
    position: relative; width: 100%; padding-top: 62%; overflow: hidden; flex-shrink: 0;
  }
  .c-photo {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; transition: transform 0.32s ease;
  }
  .c-card:hover .c-photo { transform: scale(1.08); }
  .c-photo-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.46) 100%);
  }

  .c-flag-badge {
    position: absolute; bottom: 11px; left: 50%; transform: translateX(-50%);
    width: 48px; height: 33px; border-radius: 8px; overflow: hidden;
    border: 2.5px solid rgba(255,255,255,0.95);
    box-shadow: 0 3px 14px rgba(0,0,0,0.32);
  }
  .c-flag-badge img { width: 100%; height: 100%; object-fit: cover; display: block; }

  .c-flag-fallback {
    display: flex; align-items: center; justify-content: center;
    padding: 22px 0 16px;
    background: linear-gradient(135deg, #EFF6FF, #EEF2FF);
  }
  .c-flag-fallback-inner {
    width: 60px; height: 42px; border-radius: 9px; overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.13);
  }
  .c-flag-fallback-inner img { width: 100%; height: 100%; object-fit: cover; display: block; }

  .c-body {
    padding: 14px 14px 17px;
    display: flex; flex-direction: column; align-items: center; gap: 6px;
    background: #fff;
  }
  .c-name  { font-size: 14px; font-weight: 800; color: #0F172A; text-align: center; line-height: 1.25; }
  .c-price { font-size: 13px; font-weight: 700; color: #2563EB; }
  .sim-btn {
    margin-top: 4px; background: none;
    border: 1.5px solid #2563EB; color: #2563EB; border-radius: 9px;
    padding: 7px 16px; font-size: 12px; font-weight: 700; cursor: pointer;
    font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.15s;
  }
  .c-card:hover .sim-btn { background: #2563EB !important; color: #fff !important; }

  /* ── Explore More Card (country) ── */
  .c-explore-card {
    border-radius: 22px;
    overflow: hidden;
    border: 1.5px solid rgba(37,99,235,0.18);
    box-shadow: 0 4px 18px rgba(37,99,235,0.07);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    animation: fadeUp 0.35s ease both;
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.2s;
  }
  .c-explore-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 22px 50px rgba(37,99,235,0.22);
    border-color: rgba(37,99,235,0.45);
  }
  .c-explore-card:hover .explore-sim-btn {
    background: #1D4ED8 !important;
    box-shadow: 0 6px 20px rgba(37,99,235,0.38) !important;
  }
  .explore-sim-btn { transition: all 0.18s ease; }

  /* ── Region Card ── */
  .r-card {
    border-radius: 22px; overflow: hidden;
    border: 1.5px solid rgba(37,99,235,0.10);
    box-shadow: 0 4px 18px rgba(37,99,235,0.07);
    cursor: pointer; background: #fff;
    display: flex; flex-direction: column;
    animation: fadeUp 0.35s ease both;
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.2s;
  }
  .r-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 22px 50px rgba(37,99,235,0.17);
    border-color: rgba(37,99,235,0.28);
  }

  .r-img-wrap {
    position: relative; width: 100%; padding-top: 55%; overflow: hidden; flex-shrink: 0;
  }
  .r-photo {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; transition: transform 0.32s ease;
  }
  .r-card:hover .r-photo { transform: scale(1.08); }
  .r-photo-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(0,0,0,0.52) 100%);
  }

  .r-emoji-badge {
    position: absolute; bottom: 11px; left: 50%; transform: translateX(-50%);
    font-size: 26px; line-height: 1;
    background: rgba(255,255,255,0.93); border-radius: 50%;
    width: 52px; height: 52px;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 3px 16px rgba(0,0,0,0.22);
    border: 2.5px solid rgba(255,255,255,0.95);
  }

  .r-body {
    padding: 14px 14px 17px;
    display: flex; flex-direction: column; align-items: center; gap: 5px;
    background: #fff;
  }
  .r-name    { font-size: 15px; font-weight: 800; color: #0F172A; text-align: center; }
  .r-count   { font-size: 12px; font-weight: 600; color: #64748B; }
  .r-price   { font-size: 14px; font-weight: 800; color: #2563EB; }
  .r-sel-btn {
    margin-top: 4px; background: none;
    border: 1.5px solid #2563EB; color: #2563EB; border-radius: 9px;
    padding: 7px 16px; font-size: 12px; font-weight: 700; cursor: pointer;
    font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.15s;
  }
  .r-card:hover .r-sel-btn { background: #2563EB !important; color: #fff !important; }

  /* ── Explore More Card (region) ── */
  .r-explore-card {
    border-radius: 22px;
    overflow: hidden;
    border: 1.5px solid rgba(37,99,235,0.18);
    box-shadow: 0 4px 18px rgba(37,99,235,0.07);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    animation: fadeUp 0.35s ease both;
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.2s;
  }
  .r-explore-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 22px 50px rgba(37,99,235,0.22);
    border-color: rgba(37,99,235,0.45);
  }
  .r-explore-card:hover .explore-r-btn {
    background: #1D4ED8 !important;
    box-shadow: 0 6px 20px rgba(37,99,235,0.38) !important;
  }
  .explore-r-btn { transition: all 0.18s ease; }

  /* tabs */
  .tab-btn { transition: all 0.18s; }
  .search-input:focus { outline: none; border-color: #2563EB !important; box-shadow: 0 0 0 3px rgba(37,99,235,0.12) !important; }

  /* view more */
  .view-more-btn {
    background: none; border: 1.5px solid rgba(37,99,235,0.22);
    color: #2563EB; padding: 11px 32px; border-radius: 30px;
    font-size: 13px; font-weight: 700; cursor: pointer;
    font-family: 'Plus Jakarta Sans', sans-serif; transition: background 0.15s, border-color 0.15s;
  }
  .view-more-btn:hover { background: #EFF6FF; border-color: #2563EB; }
`,h=({c:e,index:t,onClick:n})=>{let r=l[e.code];return(0,a.jsxs)(`div`,{className:`c-card`,onClick:n,style:{animationDelay:`${t*45}ms`},children:[r?(0,a.jsxs)(`div`,{className:`c-img-wrap`,children:[(0,a.jsx)(`img`,{className:`c-photo`,src:r,alt:e.name}),(0,a.jsx)(`div`,{className:`c-photo-overlay`}),(0,a.jsx)(`div`,{className:`c-flag-badge`,children:(0,a.jsx)(`img`,{src:e.flag,alt:e.name,onError:t=>{t.currentTarget.src=`https://flagcdn.com/w80/${e.code.toLowerCase()}.png`}})})]}):(0,a.jsx)(`div`,{className:`c-flag-fallback`,children:(0,a.jsx)(`div`,{className:`c-flag-fallback-inner`,children:(0,a.jsx)(`img`,{src:e.flag,alt:e.name,onError:t=>{t.currentTarget.src=`https://flagcdn.com/w80/${e.code.toLowerCase()}.png`}})})}),(0,a.jsxs)(`div`,{className:`c-body`,children:[(0,a.jsx)(`p`,{className:`c-name`,children:e.name}),(0,a.jsxs)(`p`,{className:`c-price`,children:[`From `,e.price]}),(0,a.jsx)(`button`,{className:`sim-btn`,children:`Get SIM →`})]})]})},g=({index:e,onClick:t})=>(0,a.jsxs)(`div`,{className:`c-explore-card`,onClick:t,style:{animationDelay:`${e*45}ms`},children:[(0,a.jsxs)(`div`,{style:{position:`relative`,width:`100%`,paddingTop:`62%`,overflow:`hidden`,flexShrink:0},children:[(0,a.jsxs)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(155deg, #0F2460 0%, #1E3A8A 38%, #2563EB 70%, #3B82F6 100%)`},children:[(0,a.jsx)(`div`,{style:{position:`absolute`,top:`30%`,left:`50%`,transform:`translate(-50%,-50%)`,width:180,height:180,borderRadius:`50%`,background:`radial-gradient(circle, rgba(99,139,255,0.35) 0%, transparent 70%)`}}),(0,a.jsx)(`div`,{style:{position:`absolute`,top:-24,right:-24,width:110,height:110,borderRadius:`50%`,background:`rgba(255,255,255,0.06)`}}),(0,a.jsx)(`div`,{style:{position:`absolute`,bottom:-16,left:-16,width:80,height:80,borderRadius:`50%`,background:`rgba(255,255,255,0.04)`}}),(0,a.jsxs)(`div`,{style:{position:`absolute`,inset:0,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:10,padding:`0 16px`},children:[(0,a.jsx)(`div`,{style:{fontSize:42,fontWeight:900,color:`#fff`,lineHeight:1,letterSpacing:`-2px`,textShadow:`0 2px 16px rgba(0,0,0,0.3)`},children:`190+`}),(0,a.jsx)(`div`,{style:{fontSize:11,fontWeight:800,color:`rgba(255,255,255,0.75)`,letterSpacing:`0.14em`,textTransform:`uppercase`},children:`Countries Available`}),(0,a.jsxs)(`div`,{style:{display:`flex`,gap:5,marginTop:4,background:`rgba(255,255,255,0.1)`,borderRadius:30,padding:`6px 12px`,border:`1px solid rgba(255,255,255,0.15)`},children:[[`🇺🇸`,`🇬🇧`,`🇯🇵`,`🇦🇺`,`🇸🇬`,`🇩🇪`,`🇦🇪`].map((e,t)=>(0,a.jsx)(`span`,{style:{fontSize:16,lineHeight:1},children:e},t)),(0,a.jsx)(`span`,{style:{fontSize:11,fontWeight:700,color:`rgba(255,255,255,0.7)`,alignSelf:`center`,marginLeft:2},children:`+183`})]})]})]}),(0,a.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.42) 100%)`}}),(0,a.jsx)(`div`,{style:{position:`absolute`,bottom:11,left:`50%`,transform:`translateX(-50%)`,width:48,height:33,borderRadius:8,border:`2.5px solid rgba(255,255,255,0.95)`,boxShadow:`0 3px 14px rgba(0,0,0,0.32)`,background:`linear-gradient(135deg, #1E40AF, #2563EB)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:17,zIndex:2},children:`🌍`})]}),(0,a.jsxs)(`div`,{style:{padding:`14px 14px 17px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:5,background:`#fff`},children:[(0,a.jsx)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:4,background:`#EFF6FF`,border:`1px solid #BFDBFE`,borderRadius:99,padding:`3px 10px`,marginBottom:1},children:(0,a.jsx)(`span`,{style:{fontSize:9,fontWeight:800,color:d,letterSpacing:`0.1em`,textTransform:`uppercase`},children:`✦ All Destinations`})}),(0,a.jsx)(`p`,{style:{fontSize:14,fontWeight:800,color:f,textAlign:`center`,lineHeight:1.2},children:`Explore More Plans`}),(0,a.jsx)(`p`,{style:{fontSize:12,fontWeight:600,color:p},children:`Prepaid · eSIM · Regional`}),(0,a.jsx)(`button`,{className:`explore-sim-btn`,style:{marginTop:4,background:d,color:`#fff`,border:`none`,borderRadius:9,padding:`7px 20px`,fontSize:12,fontWeight:700,cursor:`pointer`,fontFamily:`'Plus Jakarta Sans', sans-serif`,boxShadow:`0 4px 14px rgba(37,99,235,0.3)`,letterSpacing:`0.02em`},children:`View All →`})]})]}),_=({r:e,index:t,onClick:n})=>{let r=u[e.name];return(0,a.jsxs)(`div`,{className:`r-card`,onClick:n,style:{animationDelay:`${t*60}ms`},children:[(0,a.jsxs)(`div`,{className:`r-img-wrap`,children:[r?(0,a.jsx)(`img`,{className:`r-photo`,src:r,alt:e.name}):(0,a.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(135deg,#EFF6FF,#EEF2FF)`}}),(0,a.jsx)(`div`,{className:`r-photo-overlay`}),(0,a.jsx)(`div`,{className:`r-emoji-badge`,children:e.emoji})]}),(0,a.jsxs)(`div`,{className:`r-body`,children:[(0,a.jsx)(`p`,{className:`r-name`,children:e.name}),(0,a.jsx)(`p`,{className:`r-count`,children:e.countries}),(0,a.jsxs)(`p`,{className:`r-price`,children:[`From `,e.price]}),(0,a.jsx)(`button`,{className:`r-sel-btn`,children:`Select →`})]})]})},v=({index:e,onClick:t})=>(0,a.jsxs)(`div`,{className:`r-explore-card`,onClick:t,style:{animationDelay:`${e*60}ms`},children:[(0,a.jsxs)(`div`,{style:{position:`relative`,width:`100%`,paddingTop:`55%`,overflow:`hidden`,flexShrink:0},children:[(0,a.jsxs)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(155deg, #0F2460 0%, #1E3A8A 38%, #2563EB 70%, #6366F1 100%)`},children:[(0,a.jsx)(`div`,{style:{position:`absolute`,top:`35%`,left:`50%`,transform:`translate(-50%,-50%)`,width:200,height:200,borderRadius:`50%`,background:`radial-gradient(circle, rgba(120,100,255,0.3) 0%, transparent 70%)`}}),(0,a.jsx)(`div`,{style:{position:`absolute`,top:-24,right:-24,width:120,height:120,borderRadius:`50%`,background:`rgba(255,255,255,0.06)`}}),(0,a.jsx)(`div`,{style:{position:`absolute`,bottom:-16,left:-16,width:90,height:90,borderRadius:`50%`,background:`rgba(255,255,255,0.04)`}}),(0,a.jsxs)(`div`,{style:{position:`absolute`,inset:0,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:10,padding:`0 16px`},children:[(0,a.jsx)(`div`,{style:{fontSize:42,fontWeight:900,color:`#fff`,lineHeight:1,letterSpacing:`-2px`,textShadow:`0 2px 16px rgba(0,0,0,0.3)`},children:`11+`}),(0,a.jsx)(`div`,{style:{fontSize:11,fontWeight:800,color:`rgba(255,255,255,0.75)`,letterSpacing:`0.14em`,textTransform:`uppercase`},children:`Regions Covered`}),(0,a.jsx)(`div`,{style:{display:`flex`,gap:6,marginTop:4,background:`rgba(255,255,255,0.1)`,borderRadius:30,padding:`6px 14px`,border:`1px solid rgba(255,255,255,0.15)`},children:[`🌍`,`🌏`,`🌎`,`🗺️`,`✈️`].map((e,t)=>(0,a.jsx)(`span`,{style:{fontSize:16,lineHeight:1},children:e},t))})]})]}),(0,a.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.44) 100%)`}}),(0,a.jsx)(`div`,{style:{position:`absolute`,bottom:11,left:`50%`,transform:`translateX(-50%)`,fontSize:26,lineHeight:1,background:`rgba(255,255,255,0.93)`,borderRadius:`50%`,width:52,height:52,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 3px 16px rgba(0,0,0,0.22)`,border:`2.5px solid rgba(255,255,255,0.95)`,zIndex:2},children:`🗺️`})]}),(0,a.jsxs)(`div`,{style:{padding:`14px 14px 17px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:5,background:`#fff`},children:[(0,a.jsx)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:4,background:`#EFF6FF`,border:`1px solid #BFDBFE`,borderRadius:99,padding:`3px 10px`,marginBottom:1},children:(0,a.jsx)(`span`,{style:{fontSize:9,fontWeight:800,color:d,letterSpacing:`0.1em`,textTransform:`uppercase`},children:`✦ All Regions`})}),(0,a.jsx)(`p`,{style:{fontSize:15,fontWeight:800,color:f,textAlign:`center`},children:`Explore More Plans`}),(0,a.jsx)(`p`,{style:{fontSize:12,fontWeight:600,color:p},children:`Multi-country · Best Value`}),(0,a.jsx)(`button`,{className:`explore-r-btn`,style:{marginTop:4,background:d,color:`#fff`,border:`none`,borderRadius:9,padding:`7px 20px`,fontSize:12,fontWeight:700,cursor:`pointer`,fontFamily:`'Plus Jakarta Sans', sans-serif`,boxShadow:`0 4px 14px rgba(37,99,235,0.3)`,letterSpacing:`0.02em`},children:`View All →`})]})]}),y=()=>{let e=r(),[t,n]=(0,i.useState)(`countries`),[l,u]=(0,i.useState)(!1),y=o.filter(e=>s.includes(e.code)),b=o.filter(e=>!s.includes(e.code)),x=l?[...y,...b]:y.slice(0,7),S=c.slice(0,3);(0,i.useEffect)(()=>u(!1),[t]);let C=t=>e(`/country/${t}`),w=t=>e(`/region/${encodeURIComponent(t)}`),T=()=>e(`/esimapp`);return(0,a.jsxs)(`section`,{style:{background:`#F0F4FF`,padding:`80px 0`,fontFamily:`'Plus Jakarta Sans', sans-serif`,overflow:`hidden`},children:[(0,a.jsx)(`style`,{children:m}),(0,a.jsxs)(`div`,{style:{width:`100%`,padding:`0 32px`},children:[(0,a.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:44},children:[(0,a.jsxs)(`h2`,{style:{fontSize:`clamp(1.75rem,3vw,2.5rem)`,fontWeight:900,color:f,letterSpacing:`-0.03em`,marginBottom:12},children:[`Choose Your `,(0,a.jsx)(`span`,{style:{color:d},children:`Destination`})]}),(0,a.jsx)(`p`,{style:{fontSize:15,color:p,fontWeight:500},children:`Instant prepaid eSIM plans — no store visit, no SIM swap.`})]}),(0,a.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:10,marginBottom:36},children:[`countries`,`regions`].map(e=>(0,a.jsx)(`button`,{className:`tab-btn`,onClick:()=>n(e),style:{padding:`10px 24px`,borderRadius:30,fontSize:13,fontWeight:700,border:`1.5px solid #2563EB`,background:t===e?d:`none`,color:t===e?`#fff`:d,cursor:`pointer`,fontFamily:`'Plus Jakarta Sans', sans-serif`,boxShadow:t===e?`0 4px 18px rgba(37,99,235,0.22)`:`none`},children:e===`countries`?`🌍  Popular Countries`:`🗺️  Regional Plans`},e))}),t===`countries`&&(0,a.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(280px, 1fr))`,gap:28},children:[x.map((e,t)=>(0,a.jsx)(h,{c:e,index:t,onClick:()=>C(e.code)},e.code)),(0,a.jsx)(g,{index:x.length,onClick:T})]}),t===`regions`&&(0,a.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(300px, 1fr))`,gap:28},children:[S.map((e,t)=>(0,a.jsx)(_,{r:e,index:t,onClick:()=>w(e.name)},e.name)),(0,a.jsx)(v,{index:S.length,onClick:T})]})]})]})};export{y as default};