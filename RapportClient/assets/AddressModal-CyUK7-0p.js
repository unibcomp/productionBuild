import{D as e,J as t,Q as n,T as r,X as i,Y as a,Z as o,ct as s,h as c,it as l}from"./index-Wodc2p-u.js";const u=()=>i({queryKey:[`address`],queryFn:async()=>{let t=e();return(await r.get(`/address`,{headers:{Authorization:`Bearer ${t}`}})).data.data},initialData:[]}),d=()=>{let n=o();return a({mutationFn:async t=>{let n=e();return(await r.post(`/address`,t,{headers:{Authorization:`Bearer ${n}`}})).data},onSuccess:()=>{n.invalidateQueries({queryKey:[`address`]})},onError:e=>{console.log(e.response),t.error(e.response?.data?.message||`Failed to add address`)}})},f=()=>{let n=o();return a({mutationFn:async({id:t,data:n})=>{let i=e();return(await r.patch(`/address/${t}`,n,{headers:{Authorization:`Bearer ${i}`}})).data},onSuccess:()=>{n.invalidateQueries({queryKey:[`address`]})},onError:e=>{console.log(e.response),t.error(e.response?.data?.message||`Failed to update address`)}})},p=()=>{let n=o();return a({mutationFn:async t=>{let n=e();return(await r.delete(`/address/${t}`,{headers:{Authorization:`Bearer ${n}`}})).data},onSuccess:()=>{n.invalidateQueries({queryKey:[`address`]})},onError:e=>{t.error(e.response?.data?.message||`Delete failed`)}})},m=()=>{let t=o();return a({mutationFn:async t=>{let n=e();return(await r.patch(`/address/${t}/default`,{},{headers:{Authorization:`Bearer ${n}`}})).data},onSuccess:()=>{t.invalidateQueries({queryKey:[`address`]})}})};function h(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`},child:[]}]})(e)}function g(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22 11.08V12a10 10 0 1 1-5.93-9.14`},child:[]},{tag:`polyline`,attr:{points:`22 4 12 14.01 9 11.01`},child:[]}]})(e)}function _(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7`},child:[]},{tag:`path`,attr:{d:`M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z`},child:[]}]})(e)}function v(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`},child:[]},{tag:`polyline`,attr:{points:`9 22 9 12 15 12 15 22`},child:[]}]})(e)}function y(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`11`,width:`18`,height:`11`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M7 11V7a5 5 0 0 1 10 0v4`},child:[]}]})(e)}function b(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`},child:[]},{tag:`polyline`,attr:{points:`16 17 21 12 16 7`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`12`,x2:`9`,y2:`12`},child:[]}]})(e)}function x(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`},child:[]},{tag:`polyline`,attr:{points:`22,6 12,13 2,6`},child:[]}]})(e)}function S(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`10`,r:`3`},child:[]}]})(e)}function C(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`},child:[]}]})(e)}function w(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`8`,x2:`12`,y2:`16`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`12`,x2:`16`,y2:`12`},child:[]}]})(e)}function T(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`12`,y1:`5`,x2:`12`,y2:`19`},child:[]},{tag:`line`,attr:{x1:`5`,y1:`12`,x2:`19`,y2:`12`},child:[]}]})(e)}function E(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`3 6 5 6 21 6`},child:[]},{tag:`path`,attr:{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`11`,x2:`10`,y2:`17`},child:[]},{tag:`line`,attr:{x1:`14`,y1:`11`,x2:`14`,y2:`17`},child:[]}]})(e)}function D(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`7`,r:`4`},child:[]}]})(e)}function O(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`18`,y1:`6`,x2:`6`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`6`,x2:`18`,y2:`18`},child:[]}]})(e)}var k=s(l(),1),A=n(),j=async(e,t)=>{let n=(await r.get(`/address/geocode/reverse`,{params:{lat:e,lng:t}})).data.data;if(n.status!==`OK`)throw Error(n.error_message||`Geocoding failed: ${n.status}`);let i=n.results[0],a=i.address_components,o=e=>a.find(t=>t.types.includes(e))?.long_name||``;return{street:i.formatted_address,city:o(`locality`)||o(`sublocality`)||``,state:o(`administrative_area_level_1`)||``,pincode:o(`postal_code`)||``}},M=[{key:`Home`,icon:v},{key:`Work`,icon:h},{key:`Other`,icon:S}],N=({close:e,editingAddress:n,autoUseLocation:r=!1})=>{let i=o(),a=d(),s=f(),c=(0,k.useRef)(null),l=(0,k.useRef)(null),[u,p]=(0,k.useState)({houseNo:n?.houseNo||``,street:n?.street||``,landmark:n?.landmark||``,buildingBlock:n?.buildingBlock||``,addressLabel:n?.addressLabel||`Other`,receiverName:n?.receiverName||``,receiverPhone:n?.receiverPhone||``,city:n?.city||``,state:n?.state||``,pincode:n?.pincode||``}),[m,h]=(0,k.useState)(n?.latitude?{lat:n.latitude,lng:n.longitude}:null),[g,_]=(0,k.useState)(!1),[v,y]=(0,k.useState)(!1),b=(0,k.useRef)(!1),[x,w]=(0,k.useState)(!1),[T,E]=(0,k.useState)(``);(0,k.useEffect)(()=>{let e=window.scrollY,t=document.body,n=document.documentElement,r={bodyPosition:t.style.position,bodyTop:t.style.top,bodyLeft:t.style.left,bodyRight:t.style.right,bodyWidth:t.style.width,bodyOverflow:t.style.overflow,htmlOverflow:n.style.overflow,htmlOverscroll:n.style.overscrollBehavior,bodyOverscroll:t.style.overscrollBehavior};t.style.position=`fixed`,t.style.top=`-${e}px`,t.style.left=`0`,t.style.right=`0`,t.style.width=`100%`,t.style.overflow=`hidden`,n.style.overflow=`hidden`,n.style.overscrollBehavior=`none`,t.style.overscrollBehavior=`none`;let i=e=>{let t=e.target;l.current&&l.current.contains(t)||e.preventDefault()},a=c.current;return a?.addEventListener(`touchmove`,i,{passive:!1}),()=>{t.style.position=r.bodyPosition,t.style.top=r.bodyTop,t.style.left=r.bodyLeft,t.style.right=r.bodyRight,t.style.width=r.bodyWidth,t.style.overflow=r.bodyOverflow,n.style.overflow=r.htmlOverflow,n.style.overscrollBehavior=r.htmlOverscroll,t.style.overscrollBehavior=r.bodyOverscroll,a?.removeEventListener(`touchmove`,i),window.scrollTo(0,e)}},[]);let N=()=>{_(!0),navigator.geolocation.getCurrentPosition(async e=>{try{let{latitude:n,longitude:r}=e.coords,i=await j(n,r);h({lat:n,lng:r}),p(e=>({...e,...i})),t.success(`Location detected!`)}catch(e){console.error(`Geocode error:`,e),t.error(e?.message||`Failed to fetch address from location`)}finally{_(!1)}},()=>{_(!1),t.error(`Location permission denied`)})};return(0,k.useEffect)(()=>{r&&!b.current&&(b.current=!0,N())},[r]),(0,A.jsxs)(`div`,{className:`am-overlay`,ref:c,onClick:e,children:[(0,A.jsx)(`style`,{children:P}),(0,A.jsxs)(`div`,{className:`am-modal`,onClick:e=>e.stopPropagation(),children:[(0,A.jsxs)(`div`,{className:`am-header`,children:[(0,A.jsx)(`h2`,{className:`am-title`,children:n?`Edit Address`:`Add Address Details`}),(0,A.jsx)(`button`,{className:`am-close-btn`,onClick:e,children:(0,A.jsx)(O,{size:18})})]}),(0,A.jsxs)(`div`,{className:`am-body`,ref:l,children:[(0,A.jsxs)(`button`,{className:`am-loc-banner`,onClick:N,disabled:g,children:[(0,A.jsx)(`span`,{className:`am-loc-banner-icon`,children:(0,A.jsx)(S,{size:16})}),(0,A.jsxs)(`span`,{className:`am-loc-banner-text`,children:[(0,A.jsx)(`span`,{className:`am-loc-banner-title`,children:g?`Detecting your location...`:`Use my current location`}),(0,A.jsx)(`span`,{className:`am-loc-banner-sub`,children:`Auto-fill address from GPS`})]}),g&&(0,A.jsx)(`span`,{className:`am-loc-spinner`})]}),u.street&&(0,A.jsxs)(`div`,{className:`am-preview`,children:[(0,A.jsx)(S,{size:14,className:`am-preview-icon`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`am-preview-street`,children:u.street}),(u.city||u.state)&&(0,A.jsxs)(`div`,{className:`am-preview-city`,children:[u.city,u.city&&u.state?`, `:``,u.state]})]})]}),(0,A.jsxs)(`div`,{className:`am-section`,children:[(0,A.jsx)(`div`,{className:`am-section-title`,children:`Add address`}),(0,A.jsx)(`input`,{className:`am-input`,placeholder:`House No. & Floor`,value:u.houseNo,onChange:e=>p({...u,houseNo:e.target.value})}),(0,A.jsx)(`input`,{className:`am-input`,placeholder:`Building & Block No. (Optional)`,value:u.buildingBlock,onChange:e=>p({...u,buildingBlock:e.target.value})}),(0,A.jsx)(`input`,{className:`am-input`,placeholder:`Landmark & Area Name (Optional)`,value:u.landmark,onChange:e=>p({...u,landmark:e.target.value})}),(0,A.jsx)(`input`,{className:`am-input`,placeholder:`Street / Area`,value:u.street,onChange:e=>p({...u,street:e.target.value})}),(0,A.jsxs)(`div`,{className:`am-input-row`,children:[(0,A.jsx)(`input`,{className:`am-input`,placeholder:`City`,value:u.city,onChange:e=>p({...u,city:e.target.value})}),(0,A.jsx)(`input`,{className:`am-input`,placeholder:`State`,value:u.state,onChange:e=>p({...u,state:e.target.value})})]}),(0,A.jsx)(`input`,{className:`am-input`,placeholder:`Pincode`,value:u.pincode,maxLength:6,onChange:e=>p({...u,pincode:e.target.value.replace(/[^0-9]/g,``)})})]}),(0,A.jsxs)(`div`,{className:`am-section`,children:[(0,A.jsx)(`div`,{className:`am-section-title`,children:`Add address label`}),(0,A.jsx)(`div`,{className:`am-label-grid`,children:M.map(({key:e,icon:t})=>{let n=e===`Other`?![`Home`,`Work`].includes(u.addressLabel):u.addressLabel===e,r=e===`Other`&&n?u.addressLabel:e;return(0,A.jsxs)(`button`,{type:`button`,className:`am-label-btn${n?` am-label-active`:``}`,onClick:()=>{e===`Other`?(E(n?u.addressLabel:``),w(!0)):p({...u,addressLabel:e})},children:[(0,A.jsx)(t,{size:14}),` `,r]},e)})})]}),(0,A.jsxs)(`div`,{className:`am-section`,children:[(0,A.jsx)(`div`,{className:`am-section-title`,children:`Receiver details`}),(0,A.jsxs)(`div`,{className:`am-input-icon-wrap`,children:[(0,A.jsx)(D,{size:15,className:`am-input-icon`}),(0,A.jsx)(`input`,{className:`am-input am-input-icon-pad`,placeholder:`Receiver's Name`,value:u.receiverName,onChange:e=>p({...u,receiverName:e.target.value})})]}),(0,A.jsxs)(`div`,{className:`am-input-icon-wrap`,children:[(0,A.jsx)(C,{size:15,className:`am-input-icon`}),(0,A.jsx)(`span`,{className:`am-phone-prefix`,children:`+91`}),(0,A.jsx)(`input`,{className:`am-input am-input-phone-pad`,placeholder:`Receiver's Phone Number`,inputMode:`numeric`,value:u.receiverPhone,maxLength:10,onChange:e=>p({...u,receiverPhone:e.target.value.replace(/[^0-9]/g,``).slice(0,10)})})]})]})]}),(0,A.jsxs)(`div`,{className:`am-footer`,children:[(0,A.jsx)(`button`,{className:`am-cancel-btn`,onClick:e,children:`Cancel`}),(0,A.jsx)(`button`,{className:`am-save-btn`,onClick:async()=>{if(!u.houseNo.trim())return t.error(`House No. & Floor is required`);if(!u.street.trim())return t.error(`Street/Area is required`);if(u.pincode.length!==6)return t.error(`Pincode must be exactly 6 digits`);if(u.receiverPhone&&u.receiverPhone.length!==10)return t.error(`Receiver phone must be exactly 10 digits`);let r={...u,latitude:m?.lat||0,longitude:m?.lng||0};y(!0);try{n?._id?await s.mutateAsync({id:n._id,data:r}):await a.mutateAsync(r),i.invalidateQueries({queryKey:[`address`]}),t.success(`Address saved successfully!`),e()}catch(e){t.error(e.message||`Failed to save address`)}finally{y(!1)}},disabled:v,children:v?`Saving...`:`Save Address`})]})]}),x&&(0,A.jsx)(`div`,{className:`am-sub-overlay`,onClick:()=>w(!1),children:(0,A.jsxs)(`div`,{className:`am-sub-modal`,onClick:e=>e.stopPropagation(),children:[(0,A.jsx)(`div`,{className:`am-sub-title`,children:`Name this address`}),(0,A.jsx)(`p`,{className:`am-sub-sub`,children:`e.g. Gym, In-laws, Office 2...`}),(0,A.jsx)(`input`,{className:`am-input am-sub-input`,placeholder:`Enter a label`,value:T,onChange:e=>E(e.target.value),autoFocus:!0}),(0,A.jsxs)(`div`,{className:`am-sub-btns`,children:[(0,A.jsx)(`button`,{className:`am-cancel-btn`,onClick:()=>w(!1),children:`Cancel`}),(0,A.jsx)(`button`,{className:`am-save-btn`,onClick:()=>{if(!T.trim()){t.error(`Please enter a label`);return}p({...u,addressLabel:T.trim()}),w(!1)},children:`Confirm`})]})]})})]})},P=`
  .am-overlay {
    position: fixed; inset: 0; z-index: 100;
    background: rgba(15, 23, 42, 0.5);
    display: flex; align-items: flex-end; justify-content: center;
    backdrop-filter: blur(3px);
    overscroll-behavior: none;
    touch-action: none;
  }
  @media (min-width: 640px) {
    .am-overlay { align-items: center; padding: 20px; }
  }

  .am-modal {
    background: #fff;
    width: 100%; max-width: 440px;
    max-height: 92vh;
    border-radius: 24px 24px 0 0;
    display: flex; flex-direction: column;
    box-shadow: 0 -8px 40px rgba(0,0,0,0.2);
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    animation: am-slide-up 0.25s cubic-bezier(0.32, 0.72, 0, 1);
    touch-action: auto;
  }
  @media (min-width: 640px) {
    .am-modal { border-radius: 22px; max-height: 88vh; animation: am-fade-in 0.2s ease; }
  }
  @keyframes am-slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }
  @keyframes am-fade-in { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }

  .am-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 20px; border-bottom: 1px solid #F1F3F9; flex-shrink: 0;
  }
  .am-title { font-family: 'Sora', sans-serif; font-size: 17px; font-weight: 800; color: #111827; }
  .am-close-btn {
    width: 32px; height: 32px; border-radius: 50%; border: none;
    background: #F3F4F6; color: #6B7280; display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: background 0.15s;
  }
  .am-close-btn:hover { background: #E5E7EB; }

  .am-body {
    overflow-y: auto; padding: 18px 20px 4px; flex: 1;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }

  .am-loc-banner {
    width: 100%; display: flex; align-items: center; gap: 12px;
    background: linear-gradient(135deg, #EFF6FF, #F5F3FF);
    border: 1.5px solid #DBEAFE; border-radius: 16px; padding: 13px 14px;
    cursor: pointer; font-family: inherit; margin-bottom: 16px; transition: all 0.15s;
  }
  .am-loc-banner:hover { border-color: #93C5FD; }
  .am-loc-banner:disabled { opacity: 0.75; cursor: wait; }
  .am-loc-banner-icon {
    width: 34px; height: 34px; border-radius: 10px; background: #fff;
    border: 1px solid #BFDBFE; color: #2563EB;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .am-loc-banner-text { flex: 1; text-align: left; display: flex; flex-direction: column; gap: 1px; }
  .am-loc-banner-title { font-size: 13.5px; font-weight: 700; color: #1E3A8A; }
  .am-loc-banner-sub { font-size: 11px; color: #6D7CA6; }
  .am-loc-spinner {
    width: 16px; height: 16px; border-radius: 50%;
    border: 2px solid #BFDBFE; border-top-color: #2563EB;
    animation: am-spin 0.7s linear infinite; flex-shrink: 0;
  }
  @keyframes am-spin { to { transform: rotate(360deg); } }

  .am-preview {
    display: flex; gap: 8px; align-items: flex-start;
    background: #F8FAFF; border: 1px solid #E0E7FF; border-radius: 12px;
    padding: 11px 13px; margin-bottom: 18px;
  }
  .am-preview-icon { color: #6366F1; margin-top: 2px; flex-shrink: 0; }
  .am-preview-street { font-size: 12.5px; font-weight: 700; color: #1E1B4B; line-height: 1.4; }
  .am-preview-city { font-size: 11.5px; color: #6B7280; margin-top: 2px; }

  .am-section { margin-bottom: 20px; }
  .am-section-title {
    font-size: 11px; font-weight: 800; color: #9CA3AF;
    text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 10px;
  }

  .am-input {
    width: 100%; border: 1.5px solid #E5E7EB; border-radius: 12px;
    padding: 12px 14px; font-size: 13.5px; font-family: inherit; color: #111827;
    background: #FAFBFC; margin-bottom: 10px; transition: border-color 0.15s, background 0.15s;
  }
  .am-input:last-child { margin-bottom: 0; }
  .am-input:focus { outline: none; border-color: #6366F1; background: #fff; }
  .am-input::placeholder { color: #9CA3AF; }

  .am-input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px; }
  .am-input-row .am-input { margin-bottom: 0; }

  .am-label-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .am-label-btn {
    display: flex; align-items: center; justify-content: center; gap: 6px;
    padding: 11px 8px; border-radius: 12px; border: 1.5px solid #E5E7EB;
    background: #FAFBFC; color: #6B7280; font-size: 12.5px; font-weight: 700;
    cursor: pointer; font-family: inherit; transition: all 0.15s;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .am-label-active {
    border-color: #2563EB !important; background: #EFF6FF !important; color: #2563EB !important;
  }

  .am-input-icon-wrap { position: relative; margin-bottom: 10px; }
  .am-input-icon-wrap:last-child { margin-bottom: 0; }
  .am-input-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: #9CA3AF; }
  .am-input-icon-pad { padding-left: 38px; }
  .am-phone-prefix {
    position: absolute; left: 36px; top: 50%; transform: translateY(-50%);
    font-size: 13.5px; font-weight: 700; color: #374151;
  }
  .am-input-phone-pad { padding-left: 68px; }

  .am-footer {
    display: flex; gap: 10px; padding: 16px 20px;
    border-top: 1px solid #F1F3F9; flex-shrink: 0;
  }
  .am-cancel-btn {
    flex: 1; padding: 13px; border-radius: 13px; border: 1.5px solid #E5E7EB;
    background: #fff; color: #6B7280; font-size: 14px; font-weight: 700;
    cursor: pointer; font-family: inherit; transition: background 0.15s;
  }
  .am-cancel-btn:hover { background: #F9FAFB; }
  .am-save-btn {
    flex: 2; padding: 13px; border-radius: 13px; border: none;
    background: linear-gradient(135deg, #2563EB, #6366F1); color: #fff;
    font-size: 14px; font-weight: 700; cursor: pointer; font-family: inherit;
    box-shadow: 0 4px 16px rgba(99,102,241,0.3); transition: opacity 0.15s;
  }
  .am-save-btn:hover { opacity: 0.92; }
  .am-save-btn:disabled { opacity: 0.6; cursor: not-allowed; }

  .am-sub-overlay {
    position: fixed; inset: 0; z-index: 200;
    background: rgba(15, 23, 42, 0.55);
    display: flex; align-items: center; justify-content: center;
    padding: 20px; backdrop-filter: blur(3px);
  }
  .am-sub-modal {
    background: #fff; width: 100%; max-width: 340px;
    border-radius: 20px; padding: 22px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.25);
    animation: am-fade-in 0.18s ease;
  }
  .am-sub-title { font-family: 'Sora', sans-serif; font-size: 16px; font-weight: 800; color: #111827; margin-bottom: 4px; }
  .am-sub-sub { font-size: 12px; color: #9CA3AF; margin-bottom: 14px; }
  .am-sub-input { margin-bottom: 0; }
  .am-sub-btns { display: flex; gap: 10px; margin-top: 16px; }
`;export{v as a,x as c,T as d,w as f,m as g,p as h,_ as i,S as l,u as m,h as n,y as o,E as p,g as r,b as s,N as t,C as u};