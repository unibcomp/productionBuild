import{At as e,Bt as t,It as n,Mt as r,Nt as i,Ot as a,rt as o}from"./index-vJa32OLj.js";import{t as s}from"./proxy-C5m7yHzU.js";import{t as ee}from"./animate-D6_LGNSh.js";import{i as te,n as c,r as l,t as u}from"./use-spring-D3adwQVp.js";import{t as d}from"./AnimatePresence-B6z0mLkV.js";import{t as ne}from"./use-reduced-motion-CyrxbyT1.js";import{t as re}from"./usePlanTypes-jN_l_1hA.js";import{n as ie}from"./useFancyNumbers-DdjqQmx4.js";import{t as ae}from"./useOperators-4qztPqzo.js";import{t as f}from"./operatorLogos-HbU1wfx_.js";var p=t(n(),1),m=e(),h=()=>(0,m.jsx)(`svg`,{width:`16`,height:`16`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,m.jsx)(`path`,{d:`M10.707 2.293a1 1 0 00-1.414 0l-7 7A1 1 0 003 11h1v6a1 1 0 001 1h4v-4h2v4h4a1 1 0 001-1v-6h1a1 1 0 00.707-1.707l-7-7z`})}),g=()=>(0,m.jsx)(`svg`,{width:`16`,height:`16`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,m.jsx)(`path`,{fillRule:`evenodd`,d:`M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-14a2 2 0 10 0 4 2 2 0 000-4zm.707 5.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 11.586V7a1 1 0 10-2 0v4.586l-1.293-1.293z`,clipRule:`evenodd`})}),_=()=>(0,m.jsxs)(`svg`,{width:`16`,height:`16`,fill:`currentColor`,viewBox:`0 0 20 20`,children:[(0,m.jsx)(`path`,{fillRule:`evenodd`,d:`M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z`,clipRule:`evenodd`}),(0,m.jsx)(`path`,{d:`M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z`})]}),v=()=>(0,m.jsx)(`svg`,{width:`16`,height:`16`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,m.jsx)(`path`,{d:`M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z`})}),y=()=>(0,m.jsxs)(`svg`,{width:`16`,height:`16`,fill:`currentColor`,viewBox:`0 0 20 20`,children:[(0,m.jsx)(`path`,{d:`M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z`}),(0,m.jsx)(`path`,{d:`M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z`})]}),b=({color:e=`#2F55F4`,size:t=14,animated:n=!0})=>(0,m.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`flex-end`,gap:Math.max(2,t*.12),height:t},"aria-hidden":`true`,children:[.4,.62,.82,1].map((r,i)=>(0,m.jsx)(`span`,{className:n?`signal-bar signal-bar-animated`:`signal-bar`,style:{width:Math.max(2,t*.18),height:t*r,background:e,borderRadius:2,animationDelay:n?`${i*.12}s`:void 0}},i))}),x=async({planTypeId:e=``,operatorId:t=``,serviceId:n=``,cursor:r=``}={})=>{let i=new URLSearchParams;return e&&i.append(`planTypeId`,e),t&&i.append(`operatorId`,t),n&&i.append(`serviceId`,n),r&&i.append(`cursor`,r),(await(await fetch(o(`/user/plans?${i.toString()}`))).json())?.data},oe=`6a3cd24299875e0e6631cbd2`,se=async()=>(await(await fetch(o(`/user/esims`))).json())?.data??[],S={primary:`#2F55F4`,primaryDeep:`#1F3AC4`,plans:`#14226B`,fancy:{dark:`#5C2E0B`,accent:`#B45309`,soft:`#FFF4E0`},esim:{dark:`#33196B`,accent:`#6D28D9`,soft:`#F3EEFF`}},C=`radial-gradient(120% 90% at 0% 0%, rgba(255,255,255,.16), transparent 55%)`,w=(e,t)=>`${C}, linear-gradient(145deg, ${e}, ${t})`,T={jio:{color:`#0A3AC2`,soft:`#EAF1FF`,pill:{bg:`#EFF6FF`,border:`#3B82F6`,text:`#2563EB`},theme:{bg:w(`#0A3AC2`,`#1D5BE0`),shadow:`#0A3AC2`,btn:`#FFFFFF`,btnText:`#0A3AC2`}},airtel:{color:`#B50F28`,soft:`#FEEFF0`,pill:{bg:`#FEF2F2`,border:`#FF4D4D`,text:`#FF4D4D`},theme:{bg:w(`#B50F28`,`#E5233B`),shadow:`#B50F28`,btn:`#FFFFFF`,btnText:`#B50F28`}},vi:{color:`#9E1259`,soft:`#FDEFF7`,pill:{bg:`#F5F3FF`,border:`#F0526B`,text:`#F0526B`},theme:{bg:w(`#9E1259`,`#D4144F`),shadow:`#9E1259`,btn:`#FFD21F`,btnText:`#4A0A2A`}},bsnl:{color:`#0B0A6E`,soft:`#EEF0FF`,pill:{bg:`linear-gradient(160deg, #D9A26E 0%, #8AC79B 70%, #7F9AD0 100%)`,border:`#FF9D4D`,text:`#07038d`},theme:{bg:w(`#0B0A6E`,`#2A2AB5`),shadow:`#0B0A6E`,btn:`#FF9D4D`,btnText:`#1F1200`}},other:{color:`#2F55F4`,soft:`#EEF2FF`,pill:{bg:`#EEF2FF`,border:`#6366F1`,text:`#2563EB`},theme:{bg:w(`#1F3AC4`,`#2F55F4`),shadow:`#1F3AC4`,btn:`#FFFFFF`,btnText:`#1F3AC4`}}},ce={bg:w(`#33196B`,`#6D28D9`),shadow:`#33196B`,btn:`#FFFFFF`,btnText:`#4C1D95`},le={bg:w(`#5C2E0B`,`#B45309`),shadow:`#5C2E0B`,btn:`#FDE68A`,btnText:`#4A2208`},E=(e=``)=>{let t=e.trim().toLowerCase();return t.includes(`airtel`)?T.airtel:t.includes(`bsnl`)?T.bsnl:t.includes(`jio`)?T.jio:t===`vi`||t.includes(`vodafone`)||t.includes(`idea`)?T.vi:T.other},ue=(e,t)=>{if(!e)return null;let n=typeof e==`object`?e._id:e;return t.find(e=>e._id===n)||(typeof e==`object`?e:null)},de=e=>{let t=(e??``).replace(/\D/g,``);return t.length===10?`${t.slice(0,5)} ${t.slice(5)}`:e||`—`},fe=[{slug:`new-connection`,name:`New Connection`,icon:(0,m.jsx)(h,{}),color:`#93C5FD`,isExternal:!1,isFilter:!1},{slug:`port-number`,name:`Port Number`,icon:(0,m.jsx)(g,{}),color:`#FCA5A5`,isExternal:!0,externalPath:`/portnumber`,isFilter:!1},{slug:`fancy-number`,name:`Fancy Number`,icon:(0,m.jsx)(v,{}),color:`#FCD34D`,isExternal:!0,externalPath:`/fancynumber`,isFilter:!1},{slug:`business-sim`,name:`Business SIM`,icon:(0,m.jsx)(_,{}),color:`#5EEAD4`,isExternal:!0,externalPath:`/businesssim`,isFilter:!1},{slug:`e-sim`,name:`eSIM`,icon:(0,m.jsx)(y,{}),color:`#C4B5FD`,isExternal:!0,externalPath:`/esim`,isFilter:!1},{slug:`sim-replacement`,name:`SIM Replacement`,icon:(0,m.jsx)(h,{}),color:`#6EE7B7`,isExternal:!0,externalPath:`/simreplacement`,isFilter:!1}],D=({value:e})=>{let t=ne(),n=Number(e),r=e!==``&&e!=null&&!isNaN(n),[i,a]=(0,p.useState)(r&&!t?0:e);return(0,p.useEffect)(()=>{if(!r||t){a(e);return}let i=ee(0,n,{duration:.8,ease:`easeOut`,onUpdate:e=>a(Math.round(e))});return()=>i.stop()},[n,r,t,e]),(0,m.jsx)(m.Fragment,{children:i})},O={hidden:{},show:{transition:{staggerChildren:.05}}},k={hidden:{opacity:0,y:18,scale:.97},show:{opacity:1,y:0,scale:1,transition:{type:`spring`,stiffness:260,damping:24}}},pe=({theme:e,operator:t,logo:n,fallbackIcon:r,tag:i,headline:a,headlineNote:o,chips:ee=[],price:te,priceNote:d,cta:re,onClick:ie,mono:ae})=>{let f=ne(),p=l(0),h=l(0),g=u(c(h,[-.5,.5],[8,-8]),{stiffness:200,damping:20}),_=u(c(p,[-.5,.5],[-8,8]),{stiffness:200,damping:20}),v=e=>{if(f)return;let t=e.currentTarget.getBoundingClientRect(),n=(e.clientX-t.left)/t.width,r=(e.clientY-t.top)/t.height;p.set(n-.5),h.set(r-.5),e.currentTarget.style.setProperty(`--mx`,`${n*100}%`),e.currentTarget.style.setProperty(`--my`,`${r*100}%`)},y=()=>{p.set(0),h.set(0)},x={stiffness:150,damping:18},oe=u(c(p,[-.5,.5],[-6,6]),x),se=u(c(h,[-.5,.5],[-4,4]),x),S=u(c(p,[-.5,.5],[5,-5]),x),C=u(c(h,[-.5,.5],[3,-3]),x),w=e=>{let t=e.currentTarget,n=t.getBoundingClientRect(),r=Math.max(n.width,n.height),i=document.createElement(`span`);i.className=`ripple`,i.style.cssText=`width:${r}px;height:${r}px;left:${e.clientX-n.left-r/2}px;top:${e.clientY-n.top-r/2}px`,t.appendChild(i),setTimeout(()=>i.remove(),650),setTimeout(ie,f?0:160)};return(0,m.jsxs)(s.article,{variants:k,whileHover:f?void 0:{y:-6},whileTap:f?void 0:{scale:.98},onMouseMove:v,onMouseLeave:y,className:`card`,style:{rotateX:f?0:g,rotateY:f?0:_,transformPerspective:800,"--card-bg":e.bg,"--shadow":e.shadow,"--btn":e.btn,"--btn-text":e.btnText},children:[(0,m.jsxs)(`header`,{className:`card-top`,children:[(0,m.jsx)(`span`,{className:`logo`,children:n?(0,m.jsx)(`img`,{src:n,alt:`${t} logo`}):r??(0,m.jsx)(`b`,{children:t.charAt(0)||`S`})}),(0,m.jsxs)(`div`,{className:`card-who`,children:[(0,m.jsx)(`p`,{className:`card-op`,children:t}),(0,m.jsx)(`p`,{className:`card-tag`,children:i})]}),(0,m.jsx)(s.span,{className:`sim-chip`,"aria-hidden":`true`,style:{x:f?0:S,y:f?0:C}}),(0,m.jsx)(`span`,{className:`card-signal`,children:(0,m.jsx)(b,{color:`#fff`,size:14})})]}),(0,m.jsxs)(s.div,{className:`card-main`,style:{x:f?0:oe,y:f?0:se},children:[(0,m.jsx)(`p`,{className:`card-big${ae?` card-big-mono`:``}`,title:a,children:a}),(0,m.jsx)(`p`,{className:`card-note`,title:o,children:o}),(0,m.jsx)(`ul`,{className:`pills`,children:ee.map(e=>(0,m.jsx)(`li`,{className:`pill`,title:e,children:e},e))})]}),(0,m.jsx)(`div`,{className:`tear`,"aria-hidden":`true`}),(0,m.jsxs)(`footer`,{className:`card-foot`,children:[(0,m.jsxs)(`div`,{className:`card-price`,children:[(0,m.jsx)(`span`,{className:`rs`,children:`₹`}),(0,m.jsx)(`span`,{className:`amt`,children:(0,m.jsx)(D,{value:te})}),d&&(0,m.jsx)(`span`,{className:`price-note`,children:d})]}),(0,m.jsxs)(`button`,{className:`btn`,onClick:w,children:[re,` `,(0,m.jsx)(`span`,{className:`arrow`,"aria-hidden":`true`,children:`→`})]})]})]})},A=({k:e,children:t})=>(0,m.jsx)(s.div,{className:`grid`,variants:O,initial:`hidden`,animate:`show`,children:t},e),me=e=>{let t=(e??``).trim(),n=t.match(/^(.*?)\s*[(\[](.+?)[)\]]\s*$/);return n&&n[1]?{main:n[1].trim(),extra:n[2].trim()}:{main:t,extra:``}},he=e=>e.extra?`Data + ${e.extra}`:`Data`,ge=({count:e})=>(0,m.jsx)(`div`,{className:`grid`,children:Array.from({length:e}).map((e,t)=>(0,m.jsx)(`div`,{className:`skeleton`},t))}),j=({title:e,text:t,color:n,action:r,actionLabel:i})=>(0,m.jsxs)(`div`,{className:`empty`,children:[(0,m.jsx)(b,{color:n,size:28,animated:!1}),(0,m.jsx)(`p`,{className:`empty-title`,children:e}),(0,m.jsx)(`p`,{className:`empty-text`,children:t}),r&&(0,m.jsx)(`button`,{className:`btn btn-solid`,onClick:r,children:i})]}),M=()=>{let e=r(),t=i(),{scrollYProgress:n}=te(),o=u(n,{stiffness:120,damping:25,restDelta:.001}),[ee,c]=(0,p.useState)(null),[l,ne]=(0,p.useState)(!1);(0,p.useEffect)(()=>{let e=()=>ne(window.innerWidth<=768);return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let h=e.state||{},g=h.serviceFilter,_=h.planTypeName,y=h.operatorName,[C,w]=(0,p.useState)(!1),[T,O]=(0,p.useState)(null),[k,M]=(0,p.useState)(null),[N,P]=(0,p.useState)(null),[_e,ve]=(0,p.useState)([]),[F,ye]=(0,p.useState)([]),[I,be]=(0,p.useState)([]),[L,R]=(0,p.useState)(1),[z,xe]=(0,p.useState)(`price-asc`),{data:B=[]}=re(),{data:V=[]}=ae(),{data:H=[]}=ie(),U=Array.isArray(V)?V:[V],{data:W,isLoading:Se}=a({queryKey:[`esims`],queryFn:se,enabled:N===`e-sim`}),{data:G,isLoading:Ce,isFetching:we}=a({queryKey:[`plans`,T?._id,k?._id,oe],queryFn:()=>x({planTypeId:T?._id??``,operatorId:k?._id??``,serviceId:oe}),placeholderData:e=>e,enabled:N===null});(0,p.useEffect)(()=>{if(g===`fancy-number`||g===`e-sim`)P(g),O(null),M(null);else if(_&&B.length>0){let e=B.find(e=>e.name.toLowerCase()===_.toLowerCase());e&&(O(e),P(null))}},[g,_,B]),(0,p.useEffect)(()=>{if(y&&U.length>0){let e=U.find(e=>e.name.toLowerCase()===y.toLowerCase());e&&(M(e),P(null))}},[y,U]),(0,p.useEffect)(()=>{ve([]),R(1)},[T,k]),(0,p.useEffect)(()=>{Array.isArray(H)&&be(H)},[H]),(0,p.useEffect)(()=>{Array.isArray(W)&&ye(W)},[W]),(0,p.useEffect)(()=>{G?.results&&ve(G.results)},[G]);let K=e=>Number(e.salePrice??e.price??0),q=[..._e].sort((e,t)=>z===`price-desc`?K(t)-K(e):z===`validity-desc`?Number(t.validity??0)-Number(e.validity??0):K(e)-K(t)),Te=e=>{R(e),window.scrollTo({top:0,behavior:`smooth`})},Ee=e=>{O(e),M(null),P(null)},J=()=>{O(null),M(null),P(null),R(1)},De=e=>{if(e.isExternal)return t(e.externalPath);J()},Oe=t=>t.isFilter?`filterKey`in t&&N===t.filterKey:t.slug===`new-connection`&&N===null&&e.pathname===`/simstore`,Y=N===`fancy-number`,X=N===`e-sim`,Z=!Y&&!X,Q=(Ce||we)&&N===null,ke=Math.ceil(q.length/12),Ae=q.slice((L-1)*12,L*12),$=Y?{bg:S.fancy.dark,badge:`Fancy numbers`,title:`Fancy Number Store`,sub:`Pick a VIP mobile number that’s yours.`,label:`Numbers`,count:I.length}:X?{bg:S.esim.dark,badge:`eSIM plans`,title:`eSIM Store`,sub:`Activate instantly. No physical card needed.`,label:`eSIMs`,count:F.length}:{bg:S.plans,badge:`All plans`,title:`SIM Store`,sub:`Prepaid, postpaid and business plans, delivered to your door.`,label:`Plans`,count:q.length},je=Z?T?`${T.name} plans${k?` for ${k.name}`:``}`:k?`${k.name} plans`:`All plans`:Y?`Fancy numbers`:`eSIM plans`;return(0,m.jsxs)(`div`,{className:`store`,children:[(0,m.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        .store {
          --page:#F5F7FC; --surface:#fff; --ink:#0E1B4D; --muted:#66728F; --line:#E3E8F4;
          --primary:${S.primary}; --primary-deep:${S.primaryDeep};
          display:flex; min-height:100vh; background:var(--page); color:var(--ink);
          font-family:'Manrope','Segoe UI',system-ui,sans-serif;
        }
        .store * { box-sizing:border-box; }
        .store button { font-family:inherit; }
        .store :focus-visible { outline:2px solid var(--primary); outline-offset:2px; }

        @keyframes spin { to { transform:rotate(360deg); } }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        @keyframes signalPulse { 0%,100%{opacity:.35;transform:scaleY(.7)} 50%{opacity:1;transform:scaleY(1)} }
        .signal-bar { transform-origin:bottom; }
        .signal-bar-animated { animation:signalPulse 1s ease-in-out infinite; }

        /* ── sidebar ── */
        .sb { width:240px; min-height:100vh; position:sticky; top:0; z-index:20; display:flex; flex-direction:column;
          background:${S.plans}; padding:24px 0; transition:width .25s ease; overflow:hidden; }
        .sb.collapsed { width:72px; }
        .sb-brand { display:flex; align-items:center; gap:10px; padding:0 22px 22px; margin-bottom:10px;
          border-bottom:1px solid rgba(255,255,255,.12); white-space:nowrap; }
        .sb.collapsed .sb-brand { padding:0 19px 22px; }
        .sb-mark { width:36px; height:36px; border-radius:11px; flex-shrink:0; display:flex; align-items:center; justify-content:center;
          background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.18); }
        .sb-name { font-weight:800; font-size:17px; color:#fff; letter-spacing:-.3px; }
        .sb-nav { flex:1; padding:0 10px; display:flex; flex-direction:column; }
        .sb-label { font-size:12px; color:rgba(255,255,255,.55); padding:10px 12px 6px; margin:0; }
        .sb-item { position:relative; display:flex; align-items:center; gap:12px; padding:11px 12px; margin-bottom:3px; border-radius:12px;
          cursor:pointer; color:rgba(255,255,255,.68); font-weight:600; font-size:14px; white-space:nowrap; user-select:none;
          border-left:3px solid transparent; transition:background .16s ease,color .16s ease; }
        .sb-item:hover { background:rgba(255,255,255,.09); }
        .sb-item.active { background:rgba(255,255,255,.18); color:#fff; border-left-color:var(--c); }
        .sb-item.active .sb-ico { color:var(--c); }
        .sb-ico { display:flex; flex-shrink:0; }
        .sb-ext { margin-left:auto; font-size:10px; font-weight:700; color:rgba(255,255,255,.45); background:rgba(255,255,255,.1); border-radius:4px; padding:2px 5px; }
        .sb.collapsed .sb-text, .sb.collapsed .sb-ext, .sb.collapsed .sb-name, .sb.collapsed .sb-label { display:none; }
        .sb-toggle { margin:10px 10px 0; padding:10px; border-radius:10px; cursor:pointer; font-size:15px;
          border:1px solid rgba(255,255,255,.2); background:rgba(255,255,255,.1); color:rgba(255,255,255,.75); }
        .sb-toggle:hover { background:rgba(255,255,255,.18); }

        /* ── main ── */
        .main { flex:1; min-width:0; padding:28px 26px; display:flex; flex-direction:column; gap:22px; }
        .hero { position:relative; overflow:hidden; isolation:isolate; background:var(--hero); color:#fff; border-radius:22px; padding:28px 32px; display:flex; justify-content:space-between; align-items:center; gap:18px; }
        .hero-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,.14); border:1px solid rgba(255,255,255,.2);
          border-radius:20px; padding:5px 14px; font-size:12px; font-weight:700; margin-bottom:12px; }
        .hero h1 { margin:0; font-size:30px; font-weight:800; letter-spacing:-.7px; line-height:1.15; }
        .hero p { margin:8px 0 0; font-size:14px; opacity:.85; font-weight:500; max-width:46ch; }
        .stats { display:flex; gap:10px; }
        .stat { background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); border-radius:14px; padding:12px 20px; text-align:center; min-width:84px; }
        .stat b { display:block; font-size:24px; font-weight:800; line-height:1; font-variant-numeric:tabular-nums; }
        .stat span { display:block; font-size:12px; opacity:.8; margin-top:5px; font-weight:600; }

        /* ── filters ── */
        .panel { background:var(--surface); border:1px solid var(--line); border-radius:20px; padding:22px 24px; }
        .panel-head { display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap; margin-bottom:16px; }
        .panel-title { margin:0; font-size:15px; font-weight:800; letter-spacing:-.01em; }
        .sub-title { margin:0 0 10px; font-size:13px; font-weight:700; color:var(--ink); }
        .sub-title i { font-style:normal; font-weight:500; color:var(--muted); }
        .chips { display:flex; flex-wrap:wrap; gap:8px; }
        .chip { padding:9px 20px; border-radius:50px; font-size:13px; font-weight:700; cursor:pointer;
          border:1.5px solid var(--line); background:#fff; color:var(--ink); transition:border-color .15s ease,background .15s ease; }
        .chip:hover { border-color:var(--primary); }
        .chip { position:relative; }
        .chip.on { background:transparent; border-color:var(--primary); color:#fff; }
        .chip-bg { position:absolute; inset:-1.5px; border-radius:50px; background:var(--primary); z-index:0; }
        .chip-label { position:relative; z-index:1; }
        .op-chip { display:flex; align-items:center; gap:10px; padding:6px 16px 6px 6px; border-radius:50px; cursor:pointer;
          border:1.5px solid var(--line); background:#fff; font-size:13px; font-weight:700; color:var(--ink); transition:border-color .15s ease,background .15s ease; }
        .op-chip:hover { border-color:var(--c); }
        .op-chip.on { border-color:var(--c); background:var(--soft); color:var(--c); }
        .op-chip .logo-sm { width:36px; height:36px; border-radius:50%; background:#fff; border:1px solid var(--line); display:flex; align-items:center; justify-content:center; overflow:hidden; }
        .op-chip .logo-sm img { width:80%; height:80%; object-fit:contain; }
        .divider { border-top:1px solid var(--line); margin-top:18px; padding-top:16px; }
        .showing { margin-top:14px; padding:10px 14px; background:#F8FAFF; border:1px solid var(--line); border-radius:10px;
          display:flex; align-items:center; gap:8px; flex-wrap:wrap; font-size:12px; color:var(--muted); font-weight:600; }
        .tagpill { border-radius:20px; padding:3px 12px; font-size:12px; font-weight:700; background:#EEF2FF; color:var(--primary-deep); }
        .link-btn { background:none; border:1px solid var(--line); color:var(--primary-deep); border-radius:20px; padding:5px 14px; font-size:12px; font-weight:700; cursor:pointer; }
        .link-btn:hover { background:#F1F5FF; }

        /* ── section heading ── */
        .sec-head { display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap; margin-bottom:16px; }
        .sec-head h2 { margin:0; font-size:17px; font-weight:800; letter-spacing:-.02em; }
        .sec-head small { font-size:13px; font-weight:600; color:var(--muted); margin-left:8px; }
        .fetching { display:flex; align-items:center; gap:7px; font-size:12px; font-weight:700; color:var(--primary-deep); }

        /* ── cards ── */
        .grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:20px; }
        .card { position:relative; overflow:hidden; display:flex; flex-direction:column; color:#fff; background:var(--card-bg);
          height:100%; min-height:310px; border-radius:20px 0 20px 20px; padding:20px; will-change:transform;
          box-shadow:0 14px 26px -18px var(--shadow); transition:box-shadow .25s ease; }
        .card:hover { box-shadow:0 26px 40px -16px var(--shadow); }
        /* the cut corner of a SIM card */
        .card::before { content:""; position:absolute; top:0; right:0; width:28px; height:28px; pointer-events:none; z-index:2;
          background:linear-gradient(to bottom left,var(--page) 0 calc(50% - .5px),rgba(255,255,255,.4) calc(50% - .5px) calc(50% + .5px),transparent calc(50% + .5px)); }
        /* glare that follows the cursor */
        .card::after { content:""; position:absolute; inset:0; pointer-events:none; opacity:0; transition:opacity .25s ease;
          background:radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,.28), transparent 45%); }
        .card:hover::after { opacity:1; }

      .card-top { display:flex; align-items:center; gap:8px; padding-right:20px; }
.sim-chip { display:block; width:34px; height:24px; border-radius:5px; margin:0; position:relative; overflow:hidden; flex-shrink:0;
  background:linear-gradient(135deg,#F6D27A,#C9962B); box-shadow:inset 0 0 0 1px rgba(0,0,0,.18); }
.card-main { margin:18px 0 4px; }
.pills { list-style:none; margin:10px 0 0; padding:0; display:flex; flex-wrap:wrap; align-content:flex-start; gap:6px; min-height:58px; overflow:hidden; }
        .logo { width:42px; height:42px; border-radius:12px; flex-shrink:0; display:flex; align-items:center; justify-content:center; background:#fff; overflow:hidden; color:var(--ink); }
        .logo img { width:100%; height:100%; object-fit:contain; padding:5px; display:block; }
        .logo b { font-size:16px; font-weight:800; }
        .card-who { min-width:0; flex:1; }
        .card-op { margin:0; font-size:14px; font-weight:800; color:#fff; letter-spacing:-.01em; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
        .card-tag { margin:2px 0 0; font-size:11.5px; font-weight:700; color:#fff; background:rgba(255,255,255,.2); display:inline-block; border-radius:20px; padding:1px 9px; }

        /* signal bars wake up on hover */
        .card-signal { flex-shrink:0; opacity:.85; }
        .card .signal-bar-animated { animation-play-state:paused; }
        .card:hover .signal-bar-animated { animation-play-state:running; }

        /* gold SIM chip */
        .sim-chip { width:38px; height:28px; border-radius:6px; margin:14px 0 0; position:relative; overflow:hidden; flex-shrink:0;
          background:linear-gradient(135deg,#F6D27A,#C9962B); box-shadow:inset 0 0 0 1px rgba(0,0,0,.18); }
        .sim-chip::before { content:""; position:absolute; inset:0;
          background:
            linear-gradient(90deg,transparent 33%,rgba(0,0,0,.16) 33% 34%,transparent 34% 66%,rgba(0,0,0,.16) 66% 67%,transparent 67%),
            linear-gradient(0deg,transparent 48%,rgba(0,0,0,.16) 48% 52%,transparent 52%); }
        .sim-chip::after { content:""; position:absolute; inset:0; transform:translateX(-120%);
          background:linear-gradient(110deg,transparent 40%,rgba(255,255,255,.6) 50%,transparent 60%); }
        .card:hover .sim-chip::after { transform:translateX(120%); transition:transform .8s ease; }

        .card-main { margin:12px 0 4px; }
        .card-big { margin:0; font-size:30px; font-weight:800; line-height:1.15; letter-spacing:-.7px; color:#fff; font-variant-numeric:tabular-nums; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .card-big-mono { font-size:25px; letter-spacing:1px; }
        .card-note { margin:4px 0 0; min-height:18px; font-size:12.5px; font-weight:600; color:rgba(255,255,255,.85); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .pills { list-style:none; margin:10px 0 0; padding:0; display:flex; flex-wrap:nowrap; gap:6px; min-height:26px; overflow:hidden; }
        .pill { font-size:11.5px; font-weight:700; background:rgba(255,255,255,.18); border-radius:20px; padding:3px 10px; white-space:nowrap; min-width:0; overflow:hidden; text-overflow:ellipsis; }

        .tear { margin:12px -20px; border-top:2px dashed rgba(255,255,255,.38); }
        .card-foot { display:flex; flex-direction:column; gap:12px; margin-top:auto; }
        .card-price { display:flex; align-items:baseline; gap:2px; flex-wrap:wrap; }
        .rs { font-size:14px; font-weight:700; color:rgba(255,255,255,.85); }
        .amt { font-size:28px; font-weight:800; letter-spacing:-.02em; line-height:1; color:#fff; font-variant-numeric:tabular-nums; }
        .price-note { margin-left:8px; font-size:11.5px; color:rgba(255,255,255,.78); font-weight:600; }

        .btn { position:relative; overflow:hidden; width:100%; height:44px; display:inline-flex; align-items:center; justify-content:center; gap:6px; padding:0 8px; border-radius:12px; border:none; background:var(--btn); color:var(--btn-text);
          font-size:13.5px; font-weight:800; cursor:pointer; white-space:nowrap; transition:filter .15s ease,transform .1s ease,background .15s ease; }
        .btn:hover { filter:brightness(.95); }
        .btn:active { transform:scale(.96); }
        .btn:focus-visible { outline:2px solid #fff; outline-offset:2px; }
        .btn .arrow { display:inline-block; transition:transform .2s ease; }
        .btn:hover .arrow { transform:translateX(4px); }
        .btn-solid { background:var(--primary); color:#fff; margin-top:16px; padding:0 20px; width:auto; }

        .sort { display:flex; align-items:center; gap:8px; font-size:12.5px; font-weight:700; color:var(--muted); }
        .sort select { padding:8px 12px; border-radius:10px; border:1px solid var(--line); background:#fff; color:var(--ink); font:inherit; font-weight:700; cursor:pointer; }

        .skeleton { height:310px; border-radius:20px; background:linear-gradient(90deg,#F0F4FF 25%,#E8EEFF 50%,#F0F4FF 75%); background-size:200% 100%; animation:shimmer 1.4s infinite; }
        .empty { background:var(--surface); border:1px solid var(--line); border-radius:20px; padding:56px 24px; text-align:center; display:flex; flex-direction:column; align-items:center; gap:6px; }
        .empty-title { margin:10px 0 0; font-size:16px; font-weight:800; }
        .empty-text { margin:0; font-size:13px; color:var(--muted); }

        /* ── pagination ── */
        .pager { display:flex; justify-content:center; align-items:center; gap:8px; flex-wrap:wrap; margin-top:8px; }
        .pg { min-width:40px; height:40px; padding:0 14px; border-radius:10px; border:1px solid var(--line); background:#fff; color:var(--ink); font-size:13px; font-weight:700; cursor:pointer; transition:background .15s ease; }
        .pg:hover:not(:disabled) { background:#E9EDFF; }
        .pg:disabled { opacity:.45; cursor:not-allowed; }
        .pg { position:relative; }
        .pg.on { background:transparent; border-color:var(--primary); color:#fff; }
        .pg-bg { position:absolute; inset:-1px; border-radius:10px; background:var(--primary); z-index:0; }
        .pg-label { position:relative; z-index:1; }

        /* ── extra motion ── */
        .progress { position:fixed; top:0; left:0; right:0; height:3px; transform-origin:0 50%; z-index:60;
          background:linear-gradient(90deg,#2F55F4,#8B5CF6,#F59E0B); }
        .hero-text, .stats { position:relative; z-index:1; }
        .orb { position:absolute; border-radius:50%; filter:blur(40px); opacity:.5; pointer-events:none; z-index:0; }
        .orb-a { width:260px; height:260px; right:-60px; top:-90px; background:radial-gradient(circle,rgba(147,197,253,.9),transparent 70%); animation:floatA 9s ease-in-out infinite; }
        .orb-b { width:220px; height:220px; left:34%; bottom:-120px; background:radial-gradient(circle,rgba(196,181,253,.8),transparent 70%); animation:floatB 11s ease-in-out infinite; }
        @keyframes floatA { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-40px,30px)} }
        @keyframes floatB { 0%,100%{transform:translate(0,0)} 50%{transform:translate(50px,-24px)} }
        .sb-pill { position:absolute; inset:0; border-radius:12px; background:rgba(255,255,255,.12); z-index:0; }
        .sb-ico, .sb-text, .sb-ext { position:relative; z-index:1; }
        .sb-ico { transition:transform .2s ease; }
        .sb-item:hover .sb-ico { transform:scale(1.18) rotate(-6deg); }
        .ripple { position:absolute; border-radius:50%; background:currentColor; pointer-events:none; transform:scale(0); animation:ripple .65s ease-out forwards; }
        @keyframes ripple { from{transform:scale(0);opacity:.28} to{transform:scale(2.6);opacity:0} }

        /* ── tablet ── */
        @media (max-width:1100px) {
          .grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
        }

        /* ── mobile ── */
        @media (max-width:768px) {
          .store { flex-direction:column; }
          .sb, .sb.collapsed { width:100%; min-height:auto; flex-direction:row; align-items:center; gap:10px; padding:10px 12px; overflow:visible; }
          .sb-brand { display:none; }
          .sb-nav { flex-direction:row; padding:0; overflow-x:auto; gap:6px; -webkit-overflow-scrolling:touch; }
          .sb-label, .sb-ext, .sb-toggle { display:none; }
          .sb-item { padding:8px 12px; margin:0; font-size:12px; flex-shrink:0; border-left:none; border-bottom:2px solid transparent; gap:6px; }
          .sb-item.active { border-bottom-color:var(--c); }
          .sb.collapsed .sb-text { display:inline; }
          .main { padding:16px 14px; gap:16px; }
          .hero { flex-direction:column; align-items:flex-start; padding:22px 18px; border-radius:18px; }
          .hero h1 { font-size:23px; }
          .stats { width:100%; } .stat { flex:1; padding:10px 14px; min-width:0; }
          .panel { padding:18px 16px; border-radius:18px; }
          .grid { grid-template-columns:1fr; gap:14px; }
          .card { min-height:0; }
          .sb-pill { display:none; }
        }
        @media (prefers-reduced-motion:reduce) {
          .signal-bar-animated, .skeleton { animation:none; }
          .card { transform:none !important; }
          .card::after, .sim-chip::after { display:none; }
          .orb { animation:none; }
          .ripple { display:none; }
          .btn .arrow { transition:none; }
        }
      `}),(0,m.jsx)(s.div,{className:`progress`,style:{scaleX:o},"aria-hidden":`true`}),(0,m.jsxs)(`aside`,{className:`sb${C?` collapsed`:``}`,children:[(0,m.jsxs)(`div`,{className:`sb-brand`,children:[(0,m.jsx)(`div`,{className:`sb-mark`,children:(0,m.jsx)(b,{color:`#93C5FD`,size:15,animated:!1})}),(0,m.jsx)(`span`,{className:`sb-name`,children:`SimConnect`})]}),(0,m.jsxs)(`nav`,{className:`sb-nav`,onMouseLeave:()=>c(null),children:[(0,m.jsx)(`p`,{className:`sb-label`,children:`Services`}),fe.map(e=>(0,m.jsxs)(`div`,{role:`button`,tabIndex:0,title:e.name,onClick:()=>De(e),onMouseEnter:()=>c(e.slug),onKeyDown:t=>{t.key===`Enter`&&De(e)},className:`sb-item${Oe(e)?` active`:``}`,style:{"--c":e.color},children:[ee===e.slug&&(0,m.jsx)(s.span,{layoutId:`sb-hover`,className:`sb-pill`,transition:{type:`spring`,stiffness:380,damping:32}}),(0,m.jsx)(`span`,{className:`sb-ico`,children:e.icon}),(0,m.jsx)(`span`,{className:`sb-text`,children:e.name}),e.isExternal&&(0,m.jsx)(`span`,{className:`sb-ext`,children:`↗`})]},e.slug))]}),(0,m.jsx)(`button`,{className:`sb-toggle`,onClick:()=>w(!C),"aria-label":`Toggle sidebar`,children:C?`→`:`←`})]}),(0,m.jsxs)(`main`,{className:`main`,children:[(0,m.jsxs)(`section`,{className:`hero`,style:{"--hero":$.bg},children:[(0,m.jsx)(`span`,{className:`orb orb-a`,"aria-hidden":`true`}),(0,m.jsx)(`span`,{className:`orb orb-b`,"aria-hidden":`true`}),(0,m.jsx)(`div`,{className:`hero-text`,children:(0,m.jsx)(d,{mode:`wait`,children:(0,m.jsxs)(s.div,{initial:{opacity:0,y:16,filter:`blur(6px)`},animate:{opacity:1,y:0,filter:`blur(0px)`},exit:{opacity:0,y:-12,filter:`blur(4px)`},transition:{duration:.35},children:[(0,m.jsxs)(`div`,{className:`hero-badge`,children:[(0,m.jsx)(b,{color:`#fff`,size:11,animated:Q}),$.badge]}),(0,m.jsx)(`h1`,{children:$.title}),(0,m.jsx)(`p`,{children:$.sub})]},$.title)})}),(0,m.jsxs)(`div`,{className:`stats`,children:[(0,m.jsxs)(`div`,{className:`stat`,children:[(0,m.jsx)(`b`,{children:(0,m.jsx)(D,{value:$.count||`–`})}),(0,m.jsx)(`span`,{children:$.label})]}),(0,m.jsxs)(`div`,{className:`stat`,children:[(0,m.jsx)(`b`,{children:(0,m.jsx)(D,{value:U.length||`–`})}),(0,m.jsx)(`span`,{children:`Operators`})]})]})]}),Z&&(0,m.jsxs)(s.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.15,duration:.4},style:{background:`#fff`,borderRadius:l?18:22,padding:l?`18px 16px`:`24px 26px`,border:`1px solid #E0E7FF`,boxShadow:`0 3px 16px rgba(37,99,235,0.07)`},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:18,flexWrap:`wrap`,gap:8},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,m.jsx)(`div`,{style:{width:4,height:18,borderRadius:4,background:`linear-gradient(180deg, #2563EB, #6366F1)`}}),(0,m.jsx)(`h3`,{style:{fontSize:15,fontWeight:700,color:`#0F172A`,margin:0},children:`Filter Plans`})]}),(T||k)&&(0,m.jsx)(`button`,{onClick:J,style:{background:`#F1F5FF`,border:`1px solid #C7D2FE`,color:`#4F46E5`,borderRadius:20,padding:`5px 14px`,fontSize:12,fontWeight:700,cursor:`pointer`},children:`✕ Clear All`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{style:{fontSize:11,fontWeight:700,color:`#6366F1`,letterSpacing:1,textTransform:`uppercase`,margin:`0 0 10px`},children:`Step 1 — Choose Plan Type`}),(0,m.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:B.map(e=>{let t=T?._id===e._id;return(0,m.jsx)(`button`,{onClick:()=>Ee(e),style:{padding:l?`8px 16px`:`9px 22px`,borderRadius:50,fontSize:13,fontWeight:700,cursor:`pointer`,transition:`all 0.2s`,border:t?`none`:`1.5px solid #C7D2FE`,background:t?`linear-gradient(135deg,#2563EB,#6366F1)`:`#F8FAFF`,color:t?`#fff`:`#4F46E5`,boxShadow:t?`0 4px 14px rgba(99,102,241,0.35)`:`none`},children:e.name},e._id)})})]}),(0,m.jsx)(d,{children:(T||k)&&(0,m.jsx)(s.div,{initial:{opacity:0,height:0,marginTop:0},animate:{opacity:1,height:`auto`,marginTop:18},exit:{opacity:0,height:0,marginTop:0},transition:{duration:.25},style:{overflow:`hidden`},children:(0,m.jsxs)(`div`,{style:{borderTop:`1px solid #E0E7FF`,paddingTop:16},children:[(0,m.jsxs)(`p`,{style:{fontSize:11,fontWeight:700,color:`#6366F1`,letterSpacing:1,textTransform:`uppercase`,margin:`0 0 10px`},children:[`Step 2 — Choose Operator`,` `,(0,m.jsx)(`span`,{style:{color:`#94A3B8`,fontWeight:500,textTransform:`none`,letterSpacing:0},children:`(optional)`})]}),(0,m.jsx)(`div`,{style:{display:`flex`,columnGap:l?14:8,rowGap:l?12:8,flexWrap:`wrap`,justifyContent:l?`center`:`flex-start`},children:U.map(e=>{let t=E(e.name),n=k?._id===e._id,r=f(e.name);return(0,m.jsx)(`button`,{"aria-label":`Choose ${e.name}`,onClick:()=>M(e),style:{position:`relative`,overflow:`hidden`,minWidth:l?116:148,minHeight:l?46:56,padding:l?`10px 18px`:`12px 24px`,borderRadius:50,fontSize:13,fontWeight:700,cursor:`pointer`,transition:`all 0.2s`,display:`flex`,alignItems:`center`,justifyContent:`center`,border:n?`2px solid ${t.pill.border}`:`1.5px solid ${t.pill.border}50`,background:t.pill.bg,color:t.pill.text,boxShadow:n?`0 8px 20px ${t.pill.border}30`:`none`,transform:n?`translateY(-1px)`:`translateY(0)`},children:r?(0,m.jsx)(`img`,{src:r,alt:e.name,style:{position:`absolute`,top:`50%`,left:`50%`,width:l?`76%`:`78%`,height:`74%`,transform:`translate(-50%, -50%)`,objectFit:`contain`,pointerEvents:`none`}}):(0,m.jsx)(`span`,{style:{position:`relative`,zIndex:1,width:`100%`,textAlign:`center`,letterSpacing:.2},children:e.name?.toUpperCase()})},e._id)})})]})},`operator-filter`)}),(T||k)&&(0,m.jsx)(s.div,{initial:{opacity:0},animate:{opacity:1},style:{marginTop:14,padding:`10px 14px`,background:`#F8FAFF`,borderRadius:10,border:`1px solid #E0E7FF`},children:(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,flexWrap:`wrap`},children:[(0,m.jsx)(`span`,{style:{fontSize:12,color:`#94A3B8`,fontWeight:500},children:`Showing:`}),T&&(0,m.jsx)(`span`,{style:{background:`#EEF2FF`,color:`#4F46E5`,borderRadius:20,padding:`3px 12px`,fontSize:12,fontWeight:600},children:T.name}),k&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`span`,{style:{color:`#CBD5E1`,fontSize:12},children:`›`}),(0,m.jsx)(`span`,{style:{background:E(k.name).pill.bg,color:E(k.name).pill.text,borderRadius:20,padding:`3px 12px`,fontSize:12,fontWeight:600},children:k.name})]}),(0,m.jsxs)(`span`,{style:{fontSize:12,color:`#94A3B8`},children:[`— `,Q?`fetching plans…`:`${q.length} plan${q.length===1?``:`s`} found`]})]})})]}),(0,m.jsx)(d,{mode:`wait`,children:(0,m.jsxs)(s.section,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.28},children:[(0,m.jsxs)(`div`,{className:`sec-head`,children:[(0,m.jsx)(`h2`,{children:je}),Z&&(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:14,flexWrap:`wrap`},children:[Q&&(0,m.jsxs)(`div`,{className:`fetching`,children:[(0,m.jsx)(b,{color:S.primary,size:13}),`Fetching`]}),(0,m.jsxs)(`label`,{className:`sort`,children:[`Sort by`,(0,m.jsxs)(`select`,{value:z,onChange:e=>{xe(e.target.value),R(1)},children:[(0,m.jsx)(`option`,{value:`price-asc`,children:`Price: low to high`}),(0,m.jsx)(`option`,{value:`price-desc`,children:`Price: high to low`}),(0,m.jsx)(`option`,{value:`validity-desc`,children:`Longest validity`})]})]})]}),!Z&&(0,m.jsx)(`button`,{className:`link-btn`,onClick:J,children:`Back to all plans`})]}),Y&&(I.length===0?(0,m.jsx)(j,{color:S.fancy.accent,title:`No fancy numbers right now`,text:`New VIP numbers are added regularly. Check back soon.`}):(0,m.jsx)(A,{k:`fancy`,children:I.map(e=>{let n=ue(e.operatorId,U),r=E(n?.name),i=de(e.number||e.phoneNumber||e.value);return(0,m.jsx)(pe,{theme:n?r.theme:le,operator:n?.name||`VIP number`,logo:n?f(n.name):null,fallbackIcon:(0,m.jsx)(v,{}),tag:`Fancy number`,headline:i,headlineNote:n?.name?`${n.name} number`:`VIP number`,chips:[`VIP number`],price:e.salePrice||e.price||`—`,cta:`Book number`,mono:!0,onClick:()=>t(`/fancy-number/${e._id}`,{state:{...e,orderType:`FANCY`}})},e._id)})})),X&&(Se?(0,m.jsx)(ge,{count:4}):F.length===0?(0,m.jsx)(j,{color:S.esim.accent,title:`No eSIM plans right now`,text:`Check back soon for eSIM availability.`}):(0,m.jsx)(A,{k:`esim`,children:F.map(e=>{let n=ue(e.operatorId,U),r=n?.name??``,i=me(e.data);return(0,m.jsx)(pe,{theme:n?E(r).theme:ce,operator:r||`eSIM`,logo:f(r),tag:`eSIM`,headline:i.main||(e.validity?`${e.validity} days`:`eSIM`),headlineNote:i.main?he(i):`Validity`,chips:[...e.validity?[`${e.validity} days`]:[],`Instant activation`],price:e.salePrice||e.price,cta:`Activate eSIM`,onClick:()=>t(`/plan-details/${e._id}`,{state:{...e,orderType:`ESIM`}})},e._id)})})),Z&&(Q&&q.length===0?(0,m.jsx)(ge,{count:6}):q.length===0?(0,m.jsx)(j,{color:S.primary,title:`No plans match this filter`,text:`Try a different plan type or operator.`,action:J,actionLabel:`Clear filters`}):(0,m.jsx)(A,{k:`${T?._id}-${k?._id}-${L}-${z}`,children:Ae.map(e=>{let n=ue(e.operatorId,U)?.name??``,r=E(n),i=e.planTypeId?.name||T?.name||`Plan`,a=e.validity?`${e.validity} days`:``,o=me(e.data);return(0,m.jsx)(pe,{theme:r.theme,operator:n||`Operator`,logo:f(n),tag:i,headline:o.main||a||`Plan`,headlineNote:o.main?he(o):`Validity`,chips:[...a&&o.main?[a]:[],...e.calls?[`Calls: ${e.calls}`]:[]],price:e.salePrice??e.price,priceNote:a?`for ${a}`:void 0,cta:`Choose plan`,onClick:()=>t(`/plan-details/${e._id}`,{state:{...e,orderType:`NORMAL`}})},e._id)})}))]},Y?`fancy`:X?`esim`:`plans`)}),Z&&ke>1&&(0,m.jsxs)(`nav`,{className:`pager`,"aria-label":`Pagination`,children:[(0,m.jsx)(`button`,{className:`pg`,disabled:L===1,onClick:()=>Te(L-1),children:`Previous`}),Array.from({length:ke},(e,t)=>(0,m.jsxs)(`button`,{className:`pg${L===t+1?` on`:``}`,onClick:()=>Te(t+1),"aria-current":L===t+1?`page`:void 0,children:[L===t+1&&(0,m.jsx)(s.span,{layoutId:`pg-bg`,className:`pg-bg`,transition:{type:`spring`,stiffness:420,damping:32}}),(0,m.jsx)(`span`,{className:`pg-label`,children:t+1})]},t+1)),(0,m.jsx)(`button`,{className:`pg`,disabled:L===ke,onClick:()=>Te(L+1),children:`Next`})]})]})]})};export{M as default};