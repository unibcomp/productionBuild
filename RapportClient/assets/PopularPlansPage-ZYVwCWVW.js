import{G as e,J as t,Q as n,V as r}from"./index-Bl6eECK3.js";import{n as i}from"./usePlans-CLaqMPXA.js";import{t as a}from"./useServices-CQZQFjxA.js";t();var o=r(),s=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(18px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .plan-card {
    display: flex; flex-direction: column;
    border-radius: 20px; overflow: hidden;
    border: 1.5px solid #DBEAFE;
    box-shadow: 0 2px 16px rgba(37,99,235,0.07);
    background: #fff;
    animation: fadeUp 0.45s ease both;
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.2s;
  }
  .plan-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 48px rgba(37,99,235,0.14) !important;
    border-color: #BFDBFE;
  }
  .plan-card:hover .select-btn {
    background: #1D4ED8 !important;
    box-shadow: 0 6px 20px rgba(37,99,235,0.38) !important;
  }
  .select-btn { transition: all 0.18s ease; }

  .view-all-btn { transition: all 0.18s; }
  .view-all-btn:hover {
    background: #EFF6FF !important;
    border-color: #2563EB !important;
  }

  .detail-row {
    display: flex; align-items: center; gap: 10px;
    font-size: 13.5px; font-weight: 600; color: #1E40AF;
  }
  .detail-icon {
    width: 30px; height: 30px; border-radius: 8px;
    background: #DBEAFE;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; flex-shrink: 0;
  }
  .benefit-chip {
    font-size: 11px; font-weight: 700;
    background: #DBEAFE; color: #1D4ED8;
    padding: 4px 11px; border-radius: 99px;
    border: 1px solid #BFDBFE;
  }
`,c=`#2563EB`,l=`#0F172A`,u=`#FFFFFF`,d=()=>{let t=e(),{data:n=[],isLoading:r}=i(),{data:d=[],isLoading:f}=a();if(r||f)return(0,o.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,padding:80},children:(0,o.jsx)(`div`,{style:{width:36,height:36,border:`3px solid #DBEAFE`,borderTop:`3px solid ${c}`,borderRadius:`50%`,animation:`spin 0.8s linear infinite`}})});let p=Array.isArray(d)?d:[],m={};return p.forEach(e=>{m[e._id]=e}),(0,o.jsxs)(`section`,{style:{background:`#F0F6FF`,fontFamily:`'Plus Jakarta Sans', sans-serif`,width:`100%`},children:[(0,o.jsx)(`style`,{children:s}),(0,o.jsxs)(`div`,{style:{background:`#EFF6FF`,borderBottom:`1.5px solid #DBEAFE`,padding:`48px 48px 44px`,width:`100%`,position:`relative`,overflow:`hidden`},children:[(0,o.jsx)(`div`,{style:{position:`absolute`,top:-50,right:60,width:220,height:220,borderRadius:`50%`,background:`rgba(37,99,235,0.06)`,pointerEvents:`none`}}),(0,o.jsx)(`div`,{style:{position:`absolute`,bottom:-70,left:`35%`,width:280,height:280,borderRadius:`50%`,background:`rgba(37,99,235,0.04)`,pointerEvents:`none`}}),(0,o.jsxs)(`div`,{style:{maxWidth:`100%`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,flexWrap:`wrap`,gap:20,position:`relative`,zIndex:1},children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,background:`#DBEAFE`,border:`1px solid #BFDBFE`,borderRadius:99,padding:`4px 14px`,marginBottom:14},children:(0,o.jsx)(`span`,{style:{fontSize:11,fontWeight:800,color:c,letterSpacing:`0.1em`,textTransform:`uppercase`},children:`✦ Curated For You`})}),(0,o.jsxs)(`h2`,{style:{fontSize:`clamp(1.7rem, 2.8vw, 2.5rem)`,fontWeight:900,color:l,letterSpacing:`-0.03em`,lineHeight:1.12,marginBottom:8},children:[`Rapport's`,` `,(0,o.jsx)(`span`,{style:{color:c},children:`Popular Plans`})]}),(0,o.jsx)(`p`,{style:{fontSize:14,color:`#64748B`,fontWeight:500},children:`Handpicked recharge plans with the best value for money`})]}),(0,o.jsx)(`button`,{className:`view-all-btn`,onClick:()=>t(`/simstore`),style:{background:u,border:`1.5px solid ${c}`,color:c,padding:`11px 26px`,borderRadius:12,fontSize:13,fontWeight:800,cursor:`pointer`,boxShadow:`0 2px 10px rgba(37,99,235,0.10)`},children:`View All Plans →`})]})]}),(0,o.jsx)(`div`,{style:{padding:`44px 48px 64px`,width:`100%`},children:(0,o.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(300px, 1fr))`,gap:24},children:n.slice(0,8).map((e,n)=>{let r=typeof e.operatorId==`object`?e.operatorId:m[e.operatorId]||{};return(0,o.jsxs)(`div`,{className:`plan-card`,style:{animationDelay:`${n*90}ms`},children:[(0,o.jsxs)(`div`,{style:{background:`linear-gradient(145deg, #EFF6FF 0%, #DBEAFE 100%)`,padding:`20px 22px 18px`,position:`relative`,overflow:`hidden`,borderBottom:`1.5px solid #BFDBFE`},children:[(0,o.jsx)(`div`,{style:{position:`absolute`,top:-28,right:-28,width:100,height:100,borderRadius:`50%`,background:`rgba(37,99,235,0.07)`,pointerEvents:`none`}}),(0,o.jsx)(`div`,{style:{position:`absolute`,top:16,right:18},children:r?.logo?(0,o.jsx)(`img`,{src:r.logo,alt:``,style:{width:44,height:44,borderRadius:`50%`,objectFit:`cover`,border:`2.5px solid #fff`,boxShadow:`0 2px 10px rgba(37,99,235,0.18)`}}):(0,o.jsx)(`div`,{style:{width:44,height:44,borderRadius:`50%`,background:`#BFDBFE`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:20,border:`2px solid #fff`,boxShadow:`0 2px 10px rgba(37,99,235,0.15)`},children:`📶`})}),(0,o.jsx)(`p`,{style:{fontSize:12,fontWeight:800,color:`#1D4ED8`,letterSpacing:`0.07em`,textTransform:`uppercase`,marginBottom:14},children:`Plan Details`}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:9,paddingRight:56},children:[(0,o.jsxs)(`div`,{className:`detail-row`,children:[(0,o.jsx)(`div`,{className:`detail-icon`,children:`📅`}),`Validity: `,(0,o.jsxs)(`strong`,{children:[e.validity,` Days`]})]}),(0,o.jsxs)(`div`,{className:`detail-row`,children:[(0,o.jsx)(`div`,{className:`detail-icon`,children:`🔄`}),`Data: `,(0,o.jsx)(`strong`,{children:e.data})]}),(0,o.jsxs)(`div`,{className:`detail-row`,children:[(0,o.jsx)(`div`,{className:`detail-icon`,children:`📞`}),`Calling: `,(0,o.jsx)(`strong`,{children:e.calling||`Unlimited`})]}),e.sms&&(0,o.jsxs)(`div`,{className:`detail-row`,children:[(0,o.jsx)(`div`,{className:`detail-icon`,children:`💬`}),`SMS: `,(0,o.jsx)(`strong`,{children:e.sms})]})]}),e.benefits?.length>0&&(0,o.jsx)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,marginTop:14},children:e.benefits.slice(0,3).map((e,t)=>(0,o.jsx)(`span`,{className:`benefit-chip`,children:e},t))})]}),(0,o.jsxs)(`div`,{style:{background:u,padding:`15px 22px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:1},children:[(0,o.jsx)(`span`,{style:{fontSize:16,fontWeight:800,color:c,marginTop:5,lineHeight:1},children:`₹`}),(0,o.jsx)(`span`,{style:{fontSize:38,fontWeight:900,color:l,lineHeight:1},children:e.salePrice||e.price})]}),(0,o.jsx)(`button`,{className:`select-btn`,onClick:()=>t(`/plan-details/${e._id}`,{state:e}),style:{background:c,color:u,border:`none`,borderRadius:10,padding:`10px 20px`,fontSize:13,fontWeight:800,cursor:`pointer`,boxShadow:`0 4px 14px rgba(37,99,235,0.28)`},children:`Select Plan ›`})]})]},e._id)})})})]})};export{d as default};