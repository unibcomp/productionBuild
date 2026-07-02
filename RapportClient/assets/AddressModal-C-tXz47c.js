import{D as e,G as t,H as n,U as r,V as i,W as a,Z as o,h as s,tt as c,w as l}from"./index-aRoud-J4.js";const u=()=>r({queryKey:[`address`],queryFn:async()=>{let t=e();return(await l.get(`/address`,{headers:{Authorization:`Bearer ${t}`}})).data.data},initialData:[]}),d=()=>{let t=a();return n({mutationFn:async t=>{let n=e();return(await l.post(`/address`,t,{headers:{Authorization:`Bearer ${n}`}})).data},onSuccess:()=>{t.invalidateQueries({queryKey:[`address`]})},onError:e=>{console.log(e.response),i.error(e.response?.data?.message||`Failed to add address`)}})},f=()=>{let t=a();return n({mutationFn:async({id:t,data:n})=>{let r=e();return(await l.patch(`/address/${t}`,n,{headers:{Authorization:`Bearer ${r}`}})).data},onSuccess:()=>{t.invalidateQueries({queryKey:[`address`]})},onError:e=>{console.log(e.response),i.error(e.response?.data?.message||`Failed to update address`)}})},p=()=>{let t=a();return n({mutationFn:async t=>{let n=e();return(await l.delete(`/address/${t}`,{headers:{Authorization:`Bearer ${n}`}})).data},onSuccess:()=>{t.invalidateQueries({queryKey:[`address`]})},onError:e=>{i.error(e.response?.data?.message||`Delete failed`)}})},m=()=>{let t=a();return n({mutationFn:async t=>{let n=e();return(await l.patch(`/address/${t}/default`,{},{headers:{Authorization:`Bearer ${n}`}})).data},onSuccess:()=>{t.invalidateQueries({queryKey:[`address`]})}})};function h(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`},child:[]}]})(e)}function g(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22 11.08V12a10 10 0 1 1-5.93-9.14`},child:[]},{tag:`polyline`,attr:{points:`22 4 12 14.01 9 11.01`},child:[]}]})(e)}function _(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7`},child:[]},{tag:`path`,attr:{d:`M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z`},child:[]}]})(e)}function v(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`},child:[]},{tag:`polyline`,attr:{points:`9 22 9 12 15 12 15 22`},child:[]}]})(e)}function y(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`11`,width:`18`,height:`11`,rx:`2`,ry:`2`},child:[]},{tag:`path`,attr:{d:`M7 11V7a5 5 0 0 1 10 0v4`},child:[]}]})(e)}function b(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`},child:[]},{tag:`polyline`,attr:{points:`16 17 21 12 16 7`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`12`,x2:`9`,y2:`12`},child:[]}]})(e)}function x(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`},child:[]},{tag:`polyline`,attr:{points:`22,6 12,13 2,6`},child:[]}]})(e)}function S(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`10`,r:`3`},child:[]}]})(e)}function C(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`},child:[]}]})(e)}function w(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`8`,x2:`12`,y2:`16`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`12`,x2:`16`,y2:`12`},child:[]}]})(e)}function T(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`12`,y1:`5`,x2:`12`,y2:`19`},child:[]},{tag:`line`,attr:{x1:`5`,y1:`12`,x2:`19`,y2:`12`},child:[]}]})(e)}function E(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`3 6 5 6 21 6`},child:[]},{tag:`path`,attr:{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`11`,x2:`10`,y2:`17`},child:[]},{tag:`line`,attr:{x1:`14`,y1:`11`,x2:`14`,y2:`17`},child:[]}]})(e)}function D(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`7`,r:`4`},child:[]}]})(e)}function O(e){return s({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`18`,y1:`6`,x2:`6`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`6`,x2:`18`,y2:`18`},child:[]}]})(e)}var k=c(o(),1),A=t(),j=async(e,t)=>{throw Error(`API Key missing`)},M=[{key:`Home`,icon:v},{key:`Work`,icon:h},{key:`Other`,icon:S}],N=({close:e,editingAddress:t,autoUseLocation:n=!1})=>{let r=a(),o=d(),s=f(),[c,l]=(0,k.useState)({houseNo:t?.houseNo||``,street:t?.street||``,landmark:t?.landmark||``,buildingBlock:t?.buildingBlock||``,addressLabel:t?.addressLabel||`Other`,receiverName:t?.receiverName||``,receiverPhone:t?.receiverPhone||``,city:t?.city||``,state:t?.state||``,pincode:t?.pincode||``}),[u,p]=(0,k.useState)(t?.latitude?{lat:t.latitude,lng:t.longitude}:null),[m,h]=(0,k.useState)(!1),[g,_]=(0,k.useState)(!1),v=(0,k.useRef)(!1),y=()=>{h(!0),navigator.geolocation.getCurrentPosition(async e=>{try{let{latitude:t,longitude:n}=e.coords,r=await j(t,n);p({lat:t,lng:n}),l(e=>({...e,...r})),i.success(`Location detected!`)}catch(e){console.error(`Geocode error:`,e),i.error(e?.message||`Failed to fetch address from location`)}finally{h(!1)}},()=>{h(!1),i.error(`Location permission denied`)})};return(0,k.useEffect)(()=>{n&&!v.current&&(v.current=!0,y())},[n]),(0,A.jsxs)(`div`,{className:`am-overlay`,onClick:e,children:[(0,A.jsx)(`style`,{children:P}),(0,A.jsxs)(`div`,{className:`am-modal`,onClick:e=>e.stopPropagation(),children:[(0,A.jsxs)(`div`,{className:`am-header`,children:[(0,A.jsx)(`h2`,{className:`am-title`,children:t?`Edit Address`:`Add Address Details`}),(0,A.jsx)(`button`,{className:`am-close-btn`,onClick:e,children:(0,A.jsx)(O,{size:18})})]}),(0,A.jsxs)(`div`,{className:`am-body`,children:[(0,A.jsxs)(`button`,{className:`am-loc-banner`,onClick:y,disabled:m,children:[(0,A.jsx)(`span`,{className:`am-loc-banner-icon`,children:(0,A.jsx)(S,{size:16})}),(0,A.jsxs)(`span`,{className:`am-loc-banner-text`,children:[(0,A.jsx)(`span`,{className:`am-loc-banner-title`,children:m?`Detecting your location...`:`Use my current location`}),(0,A.jsx)(`span`,{className:`am-loc-banner-sub`,children:`Auto-fill address from GPS`})]}),m&&(0,A.jsx)(`span`,{className:`am-loc-spinner`})]}),c.street&&(0,A.jsxs)(`div`,{className:`am-preview`,children:[(0,A.jsx)(S,{size:14,className:`am-preview-icon`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`am-preview-street`,children:c.street}),(c.city||c.state)&&(0,A.jsxs)(`div`,{className:`am-preview-city`,children:[c.city,c.city&&c.state?`, `:``,c.state]})]})]}),(0,A.jsxs)(`div`,{className:`am-section`,children:[(0,A.jsx)(`div`,{className:`am-section-title`,children:`Add address`}),(0,A.jsx)(`input`,{className:`am-input`,placeholder:`House No. & Floor`,value:c.houseNo,onChange:e=>l({...c,houseNo:e.target.value})}),(0,A.jsx)(`input`,{className:`am-input`,placeholder:`Building & Block No. (Optional)`,value:c.buildingBlock,onChange:e=>l({...c,buildingBlock:e.target.value})}),(0,A.jsx)(`input`,{className:`am-input`,placeholder:`Landmark & Area Name (Optional)`,value:c.landmark,onChange:e=>l({...c,landmark:e.target.value})}),(0,A.jsx)(`input`,{className:`am-input`,placeholder:`Street / Area`,value:c.street,onChange:e=>l({...c,street:e.target.value})}),(0,A.jsxs)(`div`,{className:`am-input-row`,children:[(0,A.jsx)(`input`,{className:`am-input`,placeholder:`City`,value:c.city,onChange:e=>l({...c,city:e.target.value})}),(0,A.jsx)(`input`,{className:`am-input`,placeholder:`State`,value:c.state,onChange:e=>l({...c,state:e.target.value})})]}),(0,A.jsx)(`input`,{className:`am-input`,placeholder:`Pincode`,value:c.pincode,maxLength:6,onChange:e=>l({...c,pincode:e.target.value.replace(/[^0-9]/g,``)})})]}),(0,A.jsxs)(`div`,{className:`am-section`,children:[(0,A.jsx)(`div`,{className:`am-section-title`,children:`Add address label`}),(0,A.jsx)(`div`,{className:`am-label-grid`,children:M.map(({key:e,icon:t})=>(0,A.jsxs)(`button`,{type:`button`,className:`am-label-btn${c.addressLabel===e?` am-label-active`:``}`,onClick:()=>l({...c,addressLabel:e}),children:[(0,A.jsx)(t,{size:14}),` `,e]},e))})]}),(0,A.jsxs)(`div`,{className:`am-section`,children:[(0,A.jsx)(`div`,{className:`am-section-title`,children:`Receiver details`}),(0,A.jsxs)(`div`,{className:`am-input-icon-wrap`,children:[(0,A.jsx)(D,{size:15,className:`am-input-icon`}),(0,A.jsx)(`input`,{className:`am-input am-input-icon-pad`,placeholder:`Receiver's Name`,value:c.receiverName,onChange:e=>l({...c,receiverName:e.target.value})})]}),(0,A.jsxs)(`div`,{className:`am-input-icon-wrap`,children:[(0,A.jsx)(C,{size:15,className:`am-input-icon`}),(0,A.jsx)(`span`,{className:`am-phone-prefix`,children:`+91`}),(0,A.jsx)(`input`,{className:`am-input am-input-phone-pad`,placeholder:`Receiver's Phone Number`,inputMode:`numeric`,value:c.receiverPhone,maxLength:10,onChange:e=>l({...c,receiverPhone:e.target.value.replace(/[^0-9]/g,``).slice(0,10)})})]})]})]}),(0,A.jsxs)(`div`,{className:`am-footer`,children:[(0,A.jsx)(`button`,{className:`am-cancel-btn`,onClick:e,children:`Cancel`}),(0,A.jsx)(`button`,{className:`am-save-btn`,onClick:async()=>{if(!c.houseNo.trim())return i.error(`House No. & Floor is required`);if(!c.street.trim())return i.error(`Street/Area is required`);if(c.pincode.length!==6)return i.error(`Pincode must be exactly 6 digits`);if(c.receiverPhone&&c.receiverPhone.length!==10)return i.error(`Receiver phone must be exactly 10 digits`);let n={...c,latitude:u?.lat||0,longitude:u?.lng||0};_(!0);try{t?._id?await s.mutateAsync({id:t._id,data:n}):await o.mutateAsync(n),r.invalidateQueries({queryKey:[`address`]}),i.success(`Address saved successfully!`),e()}catch(e){i.error(e.message||`Failed to save address`)}finally{_(!1)}},disabled:g,children:g?`Saving...`:`Save Address`})]})]})]})},P=`
  .am-overlay {
    position: fixed; inset: 0; z-index: 100;
    background: rgba(15, 23, 42, 0.5);
    display: flex; align-items: flex-end; justify-content: center;
    backdrop-filter: blur(3px);
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

  .am-body { overflow-y: auto; padding: 18px 20px 4px; flex: 1; }

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
`;export{b as a,C as c,E as d,u as f,y as i,T as l,m,g as n,x as o,p,_ as r,S as s,N as t,w as u};