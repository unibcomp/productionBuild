import{t as e}from"./clock-DgibqfaE.js";import{t}from"./message-square-BwNaZJdP.js";import{t as n}from"./package-Bi0IZQkX.js";import{t as r}from"./shield-alert-B06WPy2V.js";import{t as i}from"./wifi-CbsttUf4.js";import{I as a,J as o,K as s,P as c,Q as l,T as u,U as d,Z as f,ct as p,et as m,it as h,nt as ee,tt as te}from"./index-CCQscGVF.js";import{t as ne}from"./usePlans-DiIAYM8N.js";import{n as re}from"./useOrders-BYLpy3Td.js";import{a as ie,f as ae,h as oe,i as se,l as ce,m as le,n as ue,p as de,t as fe}from"./AddressModal-jKMaXGln.js";import{t as pe}from"./useUser-0PyzP1l3.js";import{t as me}from"./useCheckout-Dg33xIDD.js";var g=p(h(),1),_=l(),v=()=>{let l=m(),p=te(),{id:h}=ee(),v=l.state?.orderType||`NORMAL`,b=v===`PORT`,x=l.state?.isFromCart===!0,S=l.state?.cartItems||[],C=l.state?.subtotal||0,{data:w,isLoading:he}=me(h),ge=w?.processedItems?.[0],{data:T}=ne(ge?.planId),E=v===`ESIM`,{data:D,isLoading:_e}=pe(),{data:O}=le(),ve=oe(),k=f(),A=re(),[j,ye]=(0,g.useState)(`COD`),[be,M]=(0,g.useState)(!1),[xe,N]=(0,g.useState)(null),[P,F]=(0,g.useState)(null),[I,Se]=(0,g.useState)(``),[L,R]=(0,g.useState)(``),[z,B]=(0,g.useState)(!1),[V,H]=(0,g.useState)(null),[Ce,we]=(0,g.useState)(!1);(0,g.useEffect)(()=>{O?.length>0&&F((O.find(e=>e.isDefault)||O[0])._id)},[O]);let Te=()=>{if(!navigator.geolocation){o.error(`Geolocation is not supported by your browser`);return}B(!0),navigator.geolocation.getCurrentPosition(async e=>{let{latitude:t,longitude:n}=e.coords;try{let e=(await u.get(`/address/geocode/reverse`,{params:{lat:t,lng:n}})).data.data;if(e.status!==`OK`||!e.results?.length)throw Error(e.error_message||`Geocoding failed`);let r=e.results[0].address_components,i=e=>r.find(t=>t.types.includes(e))?.long_name||``,a=`Current Location`,s=e.results[0].formatted_address,c=i(`locality`)||i(`sublocality`)||`Gurugram`,l=i(`administrative_area_level_1`)||`Haryana`,d=i(`postal_code`)||`000000`,f=O.find(e=>e.houseNo===`Current Location`),p;p=f?await u.patch(`/address/${f._id}`,{houseNo:a,street:s,city:c,state:l,pincode:d,latitude:t,longitude:n}):await u.post(`/address`,{houseNo:a,street:s,city:c,state:l,pincode:d,latitude:t,longitude:n});let m=p.data.data;k.invalidateQueries({queryKey:[`address`]}),F(m._id),o.success(`Location fetched 📍`)}catch(e){console.error(`Location fetch error:`,e),o.error(`Failed to fetch address from location`)}finally{B(!1)}},e=>{console.error(`Geolocation error:`,e),o.error(`Location permission denied`),B(!1)})},U=e=>{let t=(e.response?.data?.message||e.response?.data?.error||e.message||``).toLowerCase();if(t.includes(`kyc`)||t.includes(`aadhaar`)||t.includes(`pan`)||t.includes(`verification`)){we(!0);return}t.includes(`pincode`)||t.includes(`deliver`)||t.includes(`serviceable`)||t.includes(`not available`)?H(O.find(e=>e._id===P)?.pincode||`this pincode`):o.error(`Order failed ❌`)},Ee=()=>{if(!D)return o.error(`Please login first`);if(!P)return o.error(`Select an address`);if(j!==`COD`)return o.error(`Only COD available`);if(b&&!I.trim())return o.error(`Enter your existing mobile number`);if(b&&I.trim().length!==10)return o.error(`Enter a valid 10-digit mobile number`);if(b&&!L.trim())return o.error(`Enter your current operator name`);let e={sessionId:h,addressId:P,paymentMethod:`COD`,orderType:v};b&&(e.existingNumber=I.trim(),e.previousOperator=L.trim()),x?Promise.all([A.mutateAsync(e)]).then(()=>{o.success(`${S.length} order${S.length>1?`s`:``} placed 🚚`),k.invalidateQueries({queryKey:[`orders`]}),p(`/profile?tab=orders`)}).catch(U):A.mutate(e,{onSuccess:()=>{o.success(`Order placed 🚚`),k.invalidateQueries({queryKey:[`orders`]}),p(`/profile?tab=orders`)},onError:U})},W=O.find(e=>e._id===P),G=ge?.quantity||1,K=w?.discount||0,q=w?.totalAmount||0,De=w?.subTotal||0,Oe=w?.platformFee||0,J=w?.totalOperatorFee||0,ke=w?.deliveryPrice||0,Ae=S.reduce((e,t)=>e+t.plan.price*t.quantity,0),Y=Ae-C,X=S.reduce((e,t)=>e+t.quantity,0),Z=I.length===10,Q=I.length>0&&I.length<10,$=[{name:`Jio`,color:`#2563EB`,bg:`#EFF6FF`,border:`#BFDBFE`,emoji:`🔵`},{name:`Airtel`,color:`#DC2626`,bg:`#FEF2F2`,border:`#FECACA`,emoji:`🔴`},{name:`Vi`,color:`#7C3AED`,bg:`#F5F3FF`,border:`#DDD6FE`,emoji:`🟣`},{name:`BSNL`,color:`#16A34A`,bg:`#F0FDF4`,border:`#BBF7D0`,emoji:`🟢`}];if(_e)return(0,_.jsxs)(`div`,{className:`bn-loading`,children:[(0,_.jsx)(`style`,{children:y}),(0,_.jsx)(`div`,{className:`bn-spinner`})]});if(!x&&!T)return(0,_.jsxs)(`div`,{className:`bn-loading`,children:[(0,_.jsx)(`style`,{children:y}),(0,_.jsx)(`p`,{style:{color:`#2563EB`,fontWeight:700},children:`No Plan Selected`})]});let je=e=>e===`Home`?(0,_.jsx)(ie,{size:10}):e===`Work`?(0,_.jsx)(ue,{size:10}):(0,_.jsx)(ce,{size:10});return(0,_.jsxs)(`div`,{className:`bn-root`,children:[(0,_.jsx)(`style`,{children:y}),(0,_.jsxs)(`nav`,{className:`bn-nav`,children:[(0,_.jsxs)(`button`,{className:`bn-back-btn`,onClick:()=>p(-1),children:[(0,_.jsx)(s,{size:14}),` Back`]}),(0,_.jsxs)(`div`,{className:`bn-nav-center`,children:[b&&(0,_.jsx)(`span`,{className:`bn-nav-port-dot`,children:`🔄`}),E&&(0,_.jsx)(`span`,{className:`bn-nav-port-dot`,children:`📱`}),(0,_.jsx)(`span`,{className:`bn-nav-title`,children:b?`Port Your Number`:E?`Get eSIM`:x?`Checkout`:`Buy Now`})]}),(0,_.jsx)(`div`,{style:{width:72}})]}),b&&(0,_.jsxs)(`div`,{className:`bn-port-hero`,children:[(0,_.jsxs)(`div`,{className:`bn-port-hero-left`,children:[(0,_.jsx)(`div`,{className:`bn-port-hero-icon`,children:`🔄`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`bn-port-hero-title`,children:`Number Porting Request`}),(0,_.jsx)(`div`,{className:`bn-port-hero-sub`,children:`Keep your number · Switch your operator · Doorstep SIM delivery`})]})]}),(0,_.jsx)(`div`,{className:`bn-port-hero-steps`,children:[`Fill Details`,`Get UPC`,`Delivery`,`Active`].map((e,t)=>(0,_.jsxs)(`div`,{className:`bn-port-hero-step`,children:[(0,_.jsx)(`div`,{className:`bn-port-hero-step-num`,children:t+1}),(0,_.jsx)(`div`,{className:`bn-port-hero-step-lbl`,children:e})]},e))})]}),E&&(0,_.jsxs)(`div`,{className:`bn-port-hero`,style:{background:`linear-gradient(135deg, #0F172A 0%, #2563EB 55%, #6366F1 100%)`},children:[(0,_.jsxs)(`div`,{className:`bn-port-hero-left`,children:[(0,_.jsx)(`div`,{className:`bn-port-hero-icon`,children:`📱`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`bn-port-hero-title`,children:`SIM Activation`}),(0,_.jsx)(`div`,{className:`bn-port-hero-sub`,children:`No physical SIM · Instant digital activation · Works on any eSIM device`})]})]}),(0,_.jsx)(`div`,{className:`bn-port-hero-steps`,children:[`Place Order`,`Get QR Code`,`Scan & Install`,`Active`].map((e,t)=>(0,_.jsxs)(`div`,{className:`bn-port-hero-step`,children:[(0,_.jsx)(`div`,{className:`bn-port-hero-step-num`,children:t+1}),(0,_.jsx)(`div`,{className:`bn-port-hero-step-lbl`,children:e})]},e))})]}),(0,_.jsxs)(`div`,{className:`bn-layout`,children:[(0,_.jsxs)(`div`,{className:`bn-left`,children:[(0,_.jsxs)(`div`,{className:`bn-card`,children:[(0,_.jsx)(`div`,{className:`bn-card-step`,children:`Step 1`}),(0,_.jsx)(`h2`,{className:`bn-card-title`,children:D?`Hey ${D.fullName} 👋`:`Delivery Address`}),(0,_.jsx)(`p`,{className:`bn-card-sub`,children:`Select or add a delivery address`}),(0,_.jsx)(`div`,{className:`bn-addr-grid`,children:O.map(e=>(0,_.jsxs)(`div`,{className:`bn-addr-item${P===e._id?` bn-addr-selected`:``}`,onClick:()=>F(e._id),children:[(0,_.jsxs)(`div`,{className:`bn-addr-top`,children:[(0,_.jsxs)(`div`,{children:[e.addressLabel&&(0,_.jsxs)(`span`,{className:`bn-addr-label-tag`,children:[je(e.addressLabel),` `,e.addressLabel]}),(0,_.jsxs)(`p`,{className:`bn-addr-line`,children:[e.houseNo,`, `,e.street]})]}),e.isDefault&&(0,_.jsx)(`span`,{className:`bn-default-badge`,children:`Default`})]}),e.landmark&&(0,_.jsxs)(`p`,{className:`bn-addr-landmark`,children:[`Near `,e.landmark]}),(0,_.jsxs)(`p`,{className:`bn-addr-city`,children:[e.city,`, `,e.state,` — `,e.pincode]}),(0,_.jsxs)(`div`,{className:`bn-addr-actions`,children:[(0,_.jsxs)(`button`,{className:`bn-addr-edit`,onClick:t=>{t.stopPropagation(),N(e),M(!0)},children:[(0,_.jsx)(se,{size:11}),` Edit`]}),(0,_.jsxs)(`button`,{className:`bn-addr-del`,onClick:t=>{t.stopPropagation(),ve.mutate(e._id,{onSuccess:()=>k.invalidateQueries({queryKey:[`address`]})})},children:[(0,_.jsx)(de,{size:11}),` Remove`]})]})]},e._id))}),(0,_.jsxs)(`div`,{className:`bn-addr-btns`,children:[(0,_.jsxs)(`button`,{className:`bn-add-addr-btn`,onClick:()=>{N(null),M(!0)},children:[(0,_.jsx)(ae,{size:14}),` Add Address`]}),(0,_.jsxs)(`button`,{className:`bn-loc-btn`,onClick:Te,disabled:z,children:[(0,_.jsx)(ce,{size:14}),` `,z?`Locating...`:`Use My Location`]})]})]}),b&&(0,_.jsxs)(`div`,{className:`bn-card bn-port-card`,children:[(0,_.jsxs)(`div`,{className:`bn-port-card-header`,children:[(0,_.jsx)(`div`,{className:`bn-port-card-header-icon`,children:`📱`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`bn-card-step`,style:{marginBottom:2},children:`Step 2 — Port Details`}),(0,_.jsx)(`h2`,{className:`bn-card-title`,style:{marginBottom:0},children:`Your Current Number`})]})]}),(0,_.jsx)(`p`,{className:`bn-card-sub`,style:{marginTop:14},children:`We need your existing number and operator to initiate porting`}),(0,_.jsxs)(`div`,{className:`bn-port-fields`,children:[(0,_.jsxs)(`div`,{className:`bn-port-field-group`,children:[(0,_.jsxs)(`label`,{className:`bn-port-label`,children:[(0,_.jsx)(`span`,{className:`bn-port-label-num`,children:`01`}),`Existing Mobile Number`]}),(0,_.jsxs)(`div`,{className:`bn-port-number-wrap`,children:[(0,_.jsx)(`div`,{className:`bn-port-number-prefix`,children:`+91`}),(0,_.jsx)(`input`,{className:`bn-port-number-input${Z?` bn-port-input-ok`:Q?` bn-port-input-warn`:``}`,type:`tel`,inputMode:`numeric`,placeholder:`Enter 10-digit number`,value:I,onChange:e=>Se(e.target.value.replace(/\D/g,``).slice(0,10)),maxLength:10}),Z&&(0,_.jsx)(`div`,{className:`bn-port-input-check`,children:`✓`})]}),(0,_.jsx)(`div`,{className:`bn-port-progress-track`,children:(0,_.jsx)(`div`,{className:`bn-port-progress-fill${Z?` bn-port-progress-ok`:``}`,style:{width:`${I.length/10*100}%`}})}),(0,_.jsxs)(`div`,{className:`bn-port-number-meta`,children:[Z?(0,_.jsx)(`span`,{className:`bn-port-meta-ok`,children:`✓ Valid number — ready to port`}):Q?(0,_.jsxs)(`span`,{className:`bn-port-meta-warn`,children:[10-I.length,` more digit`,10-I.length==1?``:`s`,` needed`]}):(0,_.jsx)(`span`,{className:`bn-port-meta-neutral`,children:`This number will be ported to your new operator`}),(0,_.jsxs)(`span`,{className:`bn-port-meta-count`,children:[I.length,`/10`]})]})]}),(0,_.jsx)(`div`,{className:`bn-port-divider`,children:(0,_.jsx)(`span`,{className:`bn-port-divider-label`,children:`Then choose your current operator`})}),(0,_.jsxs)(`div`,{className:`bn-port-field-group`,children:[(0,_.jsxs)(`label`,{className:`bn-port-label`,children:[(0,_.jsx)(`span`,{className:`bn-port-label-num`,children:`02`}),`Current Operator`]}),(0,_.jsx)(`div`,{className:`bn-port-op-grid`,children:$.map(e=>{let t=L===e.name;return(0,_.jsxs)(`button`,{type:`button`,onClick:()=>R(e.name),className:`bn-port-op-card`,style:{borderColor:t?e.color:`#DDE3F5`,background:t?e.bg:`#FAFBFF`,boxShadow:t?`0 4px 16px ${e.color}25`:`none`,transform:t?`scale(1.04)`:`scale(1)`},children:[(0,_.jsx)(`div`,{className:`bn-port-op-emoji`,children:e.emoji}),(0,_.jsx)(`div`,{className:`bn-port-op-name`,style:{color:t?e.color:`#374151`},children:e.name}),t&&(0,_.jsx)(`div`,{className:`bn-port-op-check`,style:{background:e.color},children:`✓`})]},e.name)})}),(0,_.jsxs)(`div`,{className:`bn-port-other-wrap`,children:[(0,_.jsx)(`span`,{className:`bn-port-other-label`,children:`Other operator?`}),(0,_.jsx)(`input`,{className:`bn-port-other-input`,type:`text`,placeholder:`Type operator name...`,value:$.find(e=>e.name===L)?``:L,onChange:e=>R(e.target.value),onFocus:()=>{$.find(e=>e.name===L)&&R(``)}})]}),L&&(0,_.jsxs)(`div`,{className:`bn-port-selected-op`,children:[(0,_.jsx)(`span`,{children:`Current operator selected:`}),(0,_.jsx)(`strong`,{children:L}),(0,_.jsx)(`button`,{onClick:()=>R(``),className:`bn-port-op-clear`,children:`✕`})]})]}),(0,_.jsxs)(`div`,{className:`bn-port-timeline`,children:[(0,_.jsxs)(`div`,{className:`bn-port-timeline-header`,children:[(0,_.jsx)(`span`,{children:`📋`}),` What happens next?`]}),(0,_.jsx)(`div`,{className:`bn-port-timeline-items`,children:[{icon:`📩`,title:`UPC Code via SMS`,desc:`You'll receive a Unique Porting Code on your existing number within minutes`},{icon:`🚚`,title:`SIM Delivered`,desc:`New SIM card delivered to your door within 2–3 business days`},{icon:`✅`,title:`Number Goes Live`,desc:`Your number ports to the new operator within 3–7 working days`}].map((e,t)=>(0,_.jsxs)(`div`,{className:`bn-port-timeline-item`,children:[(0,_.jsx)(`div`,{className:`bn-port-timeline-icon`,children:e.icon}),(0,_.jsx)(`div`,{className:`bn-port-timeline-line`}),(0,_.jsxs)(`div`,{className:`bn-port-timeline-content`,children:[(0,_.jsx)(`div`,{className:`bn-port-timeline-title`,children:e.title}),(0,_.jsx)(`div`,{className:`bn-port-timeline-desc`,children:e.desc})]})]},t))})]})]})]}),(0,_.jsxs)(`div`,{className:`bn-card`,children:[(0,_.jsxs)(`div`,{className:`bn-card-step`,children:[`Step `,b?`3`:`2`]}),(0,_.jsx)(`h2`,{className:`bn-card-title`,children:`Payment Method`}),(0,_.jsx)(`p`,{className:`bn-card-sub`,children:`How would you like to pay?`}),(0,_.jsx)(`div`,{className:`bn-pay-grid`,children:[`UPI`,`Card`,`Net Banking`,`COD`].map(e=>{let t=e===`COD`;return(0,_.jsxs)(`div`,{className:`bn-pay-item${t&&j===e?` bn-pay-selected`:``}${t?``:` bn-pay-disabled`}`,onClick:()=>t&&ye(e),children:[e,!t&&(0,_.jsx)(`span`,{className:`bn-coming-soon`,children:`Soon`})]},e)})}),(0,_.jsx)(`p`,{className:`bn-pay-note`,children:`Only Cash on Delivery is available right now.`})]}),x&&(0,_.jsxs)(`div`,{className:`bn-card`,children:[(0,_.jsx)(`div`,{className:`bn-card-step`,children:`Your Items`}),(0,_.jsxs)(`h2`,{className:`bn-card-title`,children:[(0,_.jsx)(c,{size:16,style:{display:`inline`,marginRight:6}}),X,` Item`,X===1?``:`s`,` in Order`]}),(0,_.jsx)(`div`,{className:`bn-cart-items`,children:S.map((n,r)=>{let o=(n.plan.salePrice||n.plan.price)*n.quantity,s=n.plan.salePrice&&n.plan.price?Math.round((n.plan.price-n.plan.salePrice)/n.plan.price*100):null;return(0,_.jsxs)(`div`,{className:`bn-ci-row`,children:[(0,_.jsx)(`div`,{className:`bn-ci-avatar`,children:`📶`}),(0,_.jsxs)(`div`,{className:`bn-ci-info`,children:[(0,_.jsxs)(`div`,{className:`bn-ci-name`,children:[n.plan.operatorId?.name||`Operator`,` Plan`]}),(0,_.jsxs)(`div`,{className:`bn-ci-chips`,children:[n.plan.data&&(0,_.jsxs)(`span`,{className:`bn-ci-chip bn-chip-blue`,children:[(0,_.jsx)(i,{size:10}),` `,n.plan.data]}),n.plan.validity&&(0,_.jsxs)(`span`,{className:`bn-ci-chip bn-chip-purple`,children:[(0,_.jsx)(e,{size:10}),` `,n.plan.validity,`d`]}),n.plan.calls&&(0,_.jsxs)(`span`,{className:`bn-ci-chip bn-chip-green`,children:[(0,_.jsx)(a,{size:10}),` `,n.plan.calls]}),n.plan.sms&&(0,_.jsxs)(`span`,{className:`bn-ci-chip bn-chip-yellow`,children:[(0,_.jsx)(t,{size:10}),` `,n.plan.sms]}),s&&(0,_.jsxs)(`span`,{className:`bn-ci-chip bn-chip-green`,children:[s,`% OFF`]})]})]}),(0,_.jsxs)(`div`,{className:`bn-ci-right`,children:[(0,_.jsxs)(`div`,{className:`bn-ci-qty`,children:[`× `,n.quantity]}),(0,_.jsxs)(`div`,{className:`bn-ci-price`,children:[`₹`,o.toLocaleString()]}),n.plan.salePrice&&(0,_.jsxs)(`div`,{className:`bn-ci-was`,children:[`₹`,n.plan.price*n.quantity]})]})]},n.plan._id+r)})})]})]}),(0,_.jsx)(`div`,{className:`bn-right`,children:(0,_.jsxs)(`div`,{className:`bn-summary-card`,children:[(0,_.jsxs)(`div`,{className:`bn-summary-header`,children:[(0,_.jsx)(n,{size:15}),(0,_.jsx)(`span`,{children:`Order Summary`}),b&&(0,_.jsx)(`span`,{className:`bn-port-badge`,children:`🔄 PORT`}),E&&(0,_.jsx)(`span`,{className:`bn-port-badge`,style:{background:`#EFF6FF`,color:`#1D4ED8`,borderColor:`#BFDBFE`},children:`📱 eSIM`})]}),!x&&T&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`div`,{className:`bn-op-row`,children:[T.operatorId?.logo?(0,_.jsx)(`img`,{src:T.operatorId.logo,alt:``,className:`bn-op-logo`}):(0,_.jsx)(`div`,{className:`bn-op-avatar`,children:T.operatorId?.name?.[0]||`O`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`span`,{className:`bn-op-name`,children:T.operatorId?.name}),b&&(0,_.jsx)(`div`,{className:`bn-op-port-sub`,children:`Porting to this operator`}),E&&(0,_.jsx)(`div`,{className:`bn-op-port-sub`,style:{color:`#2563EB`},children:`eSIM — digital delivery`})]})]}),(0,_.jsx)(`div`,{className:`bn-spec-box`,children:[{label:`Data`,val:T.data},{label:`Validity`,val:T.validity?`${T.validity} Days`:null},{label:`Calls`,val:T.calls},{label:`SMS`,val:T.sms},{label:`Network`,val:T.networkType},{label:`Qty`,val:G>1?`× ${G}`:null},...b?[{label:`Port From`,val:L||`—`},{label:`Number`,val:I?`+91 ${I}`:`—`}]:[]].filter(e=>e.val).map((e,t)=>(0,_.jsxs)(`div`,{className:`bn-spec-row`,children:[(0,_.jsx)(`span`,{className:`bn-spec-key`,children:e.label}),(0,_.jsx)(`span`,{className:`bn-spec-val`,children:e.val})]},t))}),(0,_.jsxs)(`div`,{className:`bn-price-section`,children:[(0,_.jsxs)(`div`,{className:`bn-price-row`,children:[(0,_.jsx)(`span`,{children:`MRP`}),(0,_.jsxs)(`span`,{children:[`₹`,De]})]}),K>0&&(0,_.jsxs)(`div`,{className:`bn-price-row bn-price-savings`,children:[(0,_.jsx)(`span`,{children:`Discount`}),(0,_.jsxs)(`span`,{children:[`−₹`,K]})]}),Oe>0&&(0,_.jsxs)(`div`,{className:`bn-price-row`,children:[(0,_.jsx)(`span`,{children:`Platform Fee`}),(0,_.jsxs)(`span`,{children:[`₹`,Oe]})]}),J>0&&(0,_.jsxs)(`div`,{className:`bn-price-row`,children:[(0,_.jsx)(`span`,{children:`Operator Fee`}),(0,_.jsxs)(`span`,{children:[`₹`,J]})]}),(0,_.jsxs)(`div`,{className:`bn-price-row`,children:[(0,_.jsx)(`span`,{children:`Delivery`}),(0,_.jsx)(`span`,{children:ke===0?`FREE`:`₹${ke}`})]}),(0,_.jsx)(`div`,{className:`bn-price-divider`}),(0,_.jsxs)(`div`,{className:`bn-price-total-row`,children:[(0,_.jsx)(`span`,{children:`Total`}),(0,_.jsxs)(`span`,{children:[`₹`,q.toLocaleString()]})]})]})]}),x&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`div`,{className:`bn-cart-summary-rows`,children:[(0,_.jsxs)(`div`,{className:`bn-price-row`,children:[(0,_.jsxs)(`span`,{children:[X,` item`,X===1?``:`s`,` (MRP)`]}),(0,_.jsxs)(`span`,{children:[`₹`,Ae.toLocaleString()]})]}),Y>0&&(0,_.jsxs)(`div`,{className:`bn-price-row bn-price-savings`,children:[(0,_.jsx)(`span`,{children:`Total Discount`}),(0,_.jsxs)(`span`,{children:[`−₹`,Y.toLocaleString()]})]}),(0,_.jsxs)(`div`,{className:`bn-price-row`,children:[(0,_.jsx)(`span`,{children:`Taxes & Charges`}),(0,_.jsx)(`span`,{className:`bn-free-tag`,children:`FREE`})]})]}),(0,_.jsx)(`div`,{className:`bn-price-divider`}),(0,_.jsxs)(`div`,{className:`bn-price-total-row`,children:[(0,_.jsx)(`span`,{children:`Grand Total`}),(0,_.jsxs)(`span`,{children:[`₹`,C.toLocaleString()]})]}),Y>0&&(0,_.jsxs)(`div`,{className:`bn-savings-pill`,children:[`🎉 You're saving ₹`,Y.toLocaleString(),` on this order!`]})]}),(0,_.jsxs)(`div`,{className:`bn-info-section`,children:[(0,_.jsxs)(`div`,{className:`bn-info-row`,children:[(0,_.jsx)(`span`,{className:`bn-info-key`,children:`Deliver to`}),(0,_.jsx)(`span`,{className:`bn-info-val`,children:W?`${W.houseNo}, ${W.street}`:`—`})]}),(0,_.jsxs)(`div`,{className:`bn-info-row`,children:[(0,_.jsx)(`span`,{className:`bn-info-key`,children:`Payment`}),(0,_.jsx)(`span`,{className:`bn-info-val`,children:`Cash on Delivery`})]}),b&&(0,_.jsxs)(`div`,{className:`bn-info-row`,children:[(0,_.jsx)(`span`,{className:`bn-info-key`,children:`Order Type`}),(0,_.jsx)(`span`,{className:`bn-info-val`,style:{color:`#7C3AED`},children:`Port Request`})]}),E&&(0,_.jsxs)(`div`,{className:`bn-info-row`,children:[(0,_.jsx)(`span`,{className:`bn-info-key`,children:`Order Type`}),(0,_.jsx)(`span`,{className:`bn-info-val`,style:{color:`#2563EB`},children:`eSIM — Digital`})]})]}),b&&(0,_.jsxs)(`div`,{className:`bn-port-readiness`,children:[(0,_.jsxs)(`div`,{className:`bn-port-ready-row`,children:[(0,_.jsx)(`span`,{className:`bn-port-ready-dot${P?` ok`:``}`}),(0,_.jsx)(`span`,{className:`bn-port-ready-txt${P?` ok`:``}`,children:`Delivery address`})]}),(0,_.jsxs)(`div`,{className:`bn-port-ready-row`,children:[(0,_.jsx)(`span`,{className:`bn-port-ready-dot${Z?` ok`:``}`}),(0,_.jsxs)(`span`,{className:`bn-port-ready-txt${Z?` ok`:``}`,children:[`Mobile number (`,I.length,`/10)`]})]}),(0,_.jsxs)(`div`,{className:`bn-port-ready-row`,children:[(0,_.jsx)(`span`,{className:`bn-port-ready-dot${L?` ok`:``}`}),(0,_.jsxs)(`span`,{className:`bn-port-ready-txt${L?` ok`:``}`,children:[`Current operator `,L?`(${L})`:``]})]})]}),Ce&&(0,_.jsxs)(`div`,{className:`bn-kyc-banner`,onClick:()=>p(`/profile?tab=kyc`),children:[(0,_.jsx)(`div`,{className:`bn-kyc-banner-icon`,children:(0,_.jsx)(r,{size:18})}),(0,_.jsxs)(`div`,{className:`bn-kyc-banner-text`,children:[(0,_.jsx)(`div`,{className:`bn-kyc-banner-title`,children:`Complete Aadhaar & PAN Verification`}),(0,_.jsx)(`div`,{className:`bn-kyc-banner-sub`,children:`Required before placing this order`})]}),(0,_.jsx)(d,{size:18,className:`bn-kyc-banner-arrow`})]}),(0,_.jsx)(`button`,{className:`bn-pay-btn`,onClick:Ee,disabled:A.isPending||he,children:he?`Loading Checkout...`:A.isPending?`Placing Order...`:b?`Confirm Port — ₹${q.toLocaleString()} →`:E?`Activate eSIM — ₹${q.toLocaleString()} →`:`Pay ₹${x?C.toLocaleString():q.toLocaleString()} →`}),(0,_.jsx)(`button`,{className:`bn-cancel-btn`,onClick:()=>p(-1),children:`Cancel`})]})})]}),V&&(0,_.jsx)(`div`,{className:`bn-overlay`,onClick:()=>H(null),children:(0,_.jsxs)(`div`,{className:`bn-pincode-modal`,onClick:e=>e.stopPropagation(),children:[(0,_.jsxs)(`div`,{className:`bn-pm-top`,children:[(0,_.jsx)(`div`,{className:`bn-pm-icon-ring`,children:`🚫`}),(0,_.jsx)(`h2`,{className:`bn-pm-headline`,children:`We can't deliver here yet`}),(0,_.jsxs)(`p`,{className:`bn-pm-sub`,children:[`Sorry, we don't deliver to pincode `,(0,_.jsx)(`strong`,{children:V}),` right now. We're expanding fast!`]})]}),(0,_.jsxs)(`div`,{className:`bn-pm-body`,children:[(0,_.jsxs)(`div`,{className:`bn-pm-tips`,children:[(0,_.jsx)(`div`,{className:`bn-pm-tip`,children:`📍 Try a different address — a nearby pincode may work.`}),(0,_.jsx)(`div`,{className:`bn-pm-tip`,children:`🕐 We add new pincodes every week. Check back soon!`}),(0,_.jsx)(`div`,{className:`bn-pm-tip`,children:`💬 Contact support if you need help finding an alternative.`})]}),(0,_.jsx)(`button`,{className:`bn-pm-change-btn`,onClick:()=>{H(null),N(null),M(!0)},children:`📍 Change delivery address`}),(0,_.jsx)(`button`,{className:`bn-pm-close-btn`,onClick:()=>H(null),children:`Go back`})]})]})}),be&&(0,_.jsx)(fe,{close:()=>{M(!1),N(null)},editingAddress:xe})]})},y=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .bn-root { min-height: 100vh; background: #F0F4FF; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
  .bn-loading { min-height: 100vh; background: #F0F4FF; display: flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans', sans-serif; }
  .bn-spinner { width: 40px; height: 40px; border-radius: 50%; border: 3px solid #DBEAFE; border-top-color: #3B82F6; animation: bn-spin 0.75s linear infinite; }
  @keyframes bn-spin { to { transform: rotate(360deg); } }

  .bn-nav { position: sticky; top: 0; z-index: 40; background: rgba(240,244,255,0.92); backdrop-filter: blur(20px); border-bottom: 1px solid #DDE3F5; height: 58px; display: flex; align-items: center; justify-content: space-between; padding: 0 24px; }
  .bn-back-btn { display: flex; align-items: center; gap: 6px; background: #fff; border: 1px solid #DDE3F5; border-radius: 10px; padding: 7px 14px; font-size: 13px; font-weight: 600; color: #4B5563; cursor: pointer; font-family: inherit; transition: all 0.15s; }
  .bn-back-btn:hover { border-color: #3B82F6; color: #3B82F6; background: #EFF6FF; }
  .bn-nav-center { display: flex; align-items: center; gap: 8px; }
  .bn-nav-port-dot { font-size: 18px; }
  .bn-nav-title { font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 800; color: #111827; letter-spacing: -0.3px; }

  .bn-port-hero { background: linear-gradient(135deg, #1E3A8A 0%, #2563EB 55%, #6366F1 100%); padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
  .bn-port-hero-left { display: flex; align-items: center; gap: 14px; }
  .bn-port-hero-icon { width: 48px; height: 48px; border-radius: 14px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }
  .bn-port-hero-title { font-family: 'Sora', sans-serif; font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 4px; }
  .bn-port-hero-sub { font-size: 12px; color: rgba(255,255,255,0.75); }
  .bn-port-hero-steps { display: flex; align-items: center; gap: 6px; }
  .bn-port-hero-step { display: flex; flex-direction: column; align-items: center; gap: 4px; }
  .bn-port-hero-step-num { width: 22px; height: 22px; border-radius: 50%; background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.35); color: #fff; font-size: 10px; font-weight: 800; display: flex; align-items: center; justify-content: center; }
  .bn-port-hero-step-lbl { font-size: 10px; color: rgba(255,255,255,0.7); font-weight: 600; white-space: nowrap; }

  .bn-layout { display: grid; grid-template-columns: 1fr 380px; gap: 20px; padding: 20px 24px; max-width: 1100px; margin: 0 auto; }
  .bn-left { display: flex; flex-direction: column; gap: 16px; }

  .bn-card { background: #fff; border-radius: 22px; border: 1px solid #DDE3F5; padding: 22px; box-shadow: 0 2px 14px rgba(59,130,246,0.06); }
  .bn-card-step { font-size: 10px; font-weight: 800; color: #3B82F6; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 6px; }
  .bn-card-title { font-family: 'Sora', sans-serif; font-size: 20px; font-weight: 800; color: #111827; margin-bottom: 4px; }
  .bn-card-sub { font-size: 13px; color: #9CA3AF; margin-bottom: 18px; }

  .bn-port-card { border-color: #C7D2FE; background: linear-gradient(180deg, #FAFBFF 0%, #fff 100%); }
  .bn-port-card-header { display: flex; align-items: center; gap: 14px; padding-bottom: 4px; }
  .bn-port-card-header-icon { width: 44px; height: 44px; border-radius: 13px; background: linear-gradient(135deg, #EEF2FF, #E0E7FF); border: 1px solid #C7D2FE; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }

  .bn-addr-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px; }
  .bn-addr-item { padding: 14px; border-radius: 14px; border: 2px solid #DDE3F5; cursor: pointer; transition: all 0.15s; }
  .bn-addr-item:hover { border-color: #93C5FD; background: #F8FAFF; }
  .bn-addr-selected { border-color: #2563EB !important; background: #EFF6FF !important; }
  .bn-addr-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 6px; margin-bottom: 4px; }
  .bn-addr-label-tag { display: inline-block; font-size: 10px; font-weight: 800; color: #6D28D9; background: #F5F3FF; border: 1px solid #DDD6FE; padding: 2px 8px; border-radius: 20px; margin-bottom: 4px; }
  .bn-addr-line { font-size: 13px; font-weight: 700; color: #111827; }
  .bn-addr-landmark { font-size: 11.5px; color: #9CA3AF; margin-bottom: 4px; }
  .bn-default-badge { background: #EFF6FF; color: #1D4ED8; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 20px; border: 1px solid #BFDBFE; white-space: nowrap; flex-shrink: 0; }
  .bn-addr-city { font-size: 12px; color: #6B7280; margin-bottom: 10px; }
  .bn-addr-actions { display: flex; gap: 6px; }
  .bn-addr-edit { display: flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; color: #3B82F6; background: #EFF6FF; border: none; border-radius: 8px; padding: 5px 10px; cursor: pointer; font-family: inherit; transition: background 0.13s; }
  .bn-addr-edit:hover { background: #DBEAFE; }
  .bn-addr-del { display: flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; color: #EF4444; background: #FEF2F2; border: none; border-radius: 8px; padding: 5px 10px; cursor: pointer; font-family: inherit; transition: background 0.13s; }
  .bn-addr-del:hover { background: #FEE2E2; }
  .bn-addr-btns { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .bn-add-addr-btn { display: flex; align-items: center; justify-content: center; gap: 7px; border: 2px dashed #BFDBFE; background: transparent; color: #2563EB; font-size: 13px; font-weight: 600; padding: 12px; border-radius: 14px; cursor: pointer; font-family: inherit; transition: background 0.15s; }
  .bn-add-addr-btn:hover { background: #EFF6FF; }
  .bn-loc-btn { display: flex; align-items: center; justify-content: center; gap: 7px; background: #F5F3FF; border: 1px solid #DDD6FE; color: #6D28D9; font-size: 13px; font-weight: 600; padding: 12px; border-radius: 14px; cursor: pointer; font-family: inherit; transition: background 0.15s; }
  .bn-loc-btn:hover { background: #EDE9FE; }
  .bn-loc-btn:disabled { opacity: 0.6; cursor: not-allowed; }

  .bn-kyc-banner { margin-top: 14px; display: flex; align-items: center; gap: 12px; background: linear-gradient(135deg, #FFFBEB, #FEF3C7); border: 1.5px solid #FDE68A; border-radius: 14px; padding: 13px 14px; cursor: pointer; transition: all 0.15s; }
  .bn-kyc-banner:hover { border-color: #F59E0B; box-shadow: 0 4px 14px rgba(245,158,11,0.18); transform: translateY(-1px); }
  .bn-kyc-banner-icon { width: 34px; height: 34px; border-radius: 10px; background: #fff; border: 1px solid #FDE68A; color: #B45309; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .bn-kyc-banner-text { flex: 1; }
  .bn-kyc-banner-title { font-size: 13px; font-weight: 800; color: #92400E; }
  .bn-kyc-banner-sub { font-size: 11px; color: #B45309; margin-top: 1px; }
  .bn-kyc-banner-arrow { color: #B45309; flex-shrink: 0; }

  .bn-port-fields { display: flex; flex-direction: column; gap: 22px; }
  .bn-port-field-group { display: flex; flex-direction: column; gap: 10px; }
  .bn-port-label { font-size: 11px; font-weight: 800; color: #374151; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 8px; }
  .bn-port-label-num { width: 20px; height: 20px; border-radius: 50%; background: linear-gradient(135deg, #2563EB, #6366F1); color: #fff; font-size: 10px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

  .bn-port-number-wrap { display: flex; align-items: center; border: 1.5px solid #DDE3F5; border-radius: 14px; overflow: hidden; background: #FAFBFF; transition: border-color 0.15s; }
  .bn-port-number-wrap:focus-within { border-color: #6366F1; background: #fff; box-shadow: 0 0 0 3px rgba(99,102,241,0.08); }
  .bn-port-number-prefix { padding: 0 14px; font-size: 14px; font-weight: 700; color: #6366F1; background: #EEF2FF; border-right: 1.5px solid #DDE3F5; height: 48px; display: flex; align-items: center; flex-shrink: 0; }
  .bn-port-number-input { flex: 1; border: none; outline: none; padding: 0 14px; font-size: 16px; font-family: 'Sora', sans-serif; font-weight: 700; color: #111827; background: transparent; letter-spacing: 1px; height: 48px; }
  .bn-port-number-input::placeholder { font-size: 13px; font-weight: 400; letter-spacing: 0; color: #9CA3AF; font-family: 'Plus Jakarta Sans', sans-serif; }
  .bn-port-input-check { width: 28px; height: 28px; border-radius: 50%; background: #10B981; color: #fff; font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin-right: 10px; flex-shrink: 0; }

  .bn-port-progress-track { height: 4px; background: #E5E7EB; border-radius: 99px; overflow: hidden; }
  .bn-port-progress-fill { height: 100%; background: linear-gradient(90deg, #F59E0B, #EF4444); border-radius: 99px; transition: width 0.2s, background 0.3s; }
  .bn-port-progress-fill.bn-port-progress-ok { background: linear-gradient(90deg, #10B981, #34D399); }

  .bn-port-number-meta { display: flex; align-items: center; justify-content: space-between; }
  .bn-port-meta-ok { font-size: 11px; font-weight: 700; color: #10B981; }
  .bn-port-meta-warn { font-size: 11px; font-weight: 700; color: #F59E0B; }
  .bn-port-meta-neutral { font-size: 11px; color: #9CA3AF; font-weight: 500; }
  .bn-port-meta-count { font-size: 11px; font-weight: 700; color: #9CA3AF; font-family: 'Sora', sans-serif; }

  .bn-port-divider { display: flex; align-items: center; gap: 10px; }
  .bn-port-divider::before, .bn-port-divider::after { content: ""; flex: 1; height: 1px; background: #E5E7EB; }
  .bn-port-divider-label { font-size: 11px; color: #9CA3AF; font-weight: 600; white-space: nowrap; }

  .bn-port-op-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  .bn-port-op-card { position: relative; padding: 14px 8px 12px; border-radius: 14px; border: 2px solid; cursor: pointer; font-family: inherit; transition: all 0.18s; display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .bn-port-op-emoji { font-size: 22px; line-height: 1; }
  .bn-port-op-name { font-size: 12px; font-weight: 800; }
  .bn-port-op-check { position: absolute; top: -6px; right: -6px; width: 18px; height: 18px; border-radius: 50%; color: #fff; font-size: 9px; font-weight: 800; display: flex; align-items: center; justify-content: center; border: 2px solid #fff; }

  .bn-port-other-wrap { display: flex; align-items: center; gap: 10px; background: #F8FAFF; border: 1.5px dashed #DDE3F5; border-radius: 12px; padding: 4px 4px 4px 14px; }
  .bn-port-other-label { font-size: 12px; color: #9CA3AF; font-weight: 600; white-space: nowrap; }
  .bn-port-other-input { flex: 1; border: none; outline: none; background: transparent; font-size: 13px; font-family: inherit; color: #111827; padding: 8px 0; }
  .bn-port-other-input::placeholder { color: #C4C9D4; }

  .bn-port-selected-op { display: flex; align-items: center; gap: 8px; background: #EEF2FF; border: 1px solid #C7D2FE; border-radius: 10px; padding: 8px 12px; font-size: 12px; color: #4338CA; }
  .bn-port-selected-op strong { font-weight: 800; }
  .bn-port-op-clear { margin-left: auto; background: none; border: none; cursor: pointer; color: #6366F1; font-size: 13px; font-weight: 700; padding: 0 4px; }

  .bn-port-timeline { background: linear-gradient(135deg, #F8FAFF, #EEF2FF); border: 1px solid #C7D2FE; border-radius: 16px; padding: 16px 18px; }
  .bn-port-timeline-header { font-size: 12px; font-weight: 800; color: #4338CA; margin-bottom: 14px; display: flex; align-items: center; gap: 6px; }
  .bn-port-timeline-items { display: flex; flex-direction: column; gap: 0; }
  .bn-port-timeline-item { display: flex; align-items: flex-start; gap: 12px; position: relative; padding-bottom: 14px; }
  .bn-port-timeline-item:last-child { padding-bottom: 0; }
  .bn-port-timeline-icon { width: 32px; height: 32px; border-radius: 10px; background: #fff; border: 1px solid #C7D2FE; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; position: relative; z-index: 1; }
  .bn-port-timeline-line { position: absolute; left: 15px; top: 32px; bottom: 0; width: 2px; background: linear-gradient(180deg, #C7D2FE, transparent); }
  .bn-port-timeline-item:last-child .bn-port-timeline-line { display: none; }
  .bn-port-timeline-content { flex: 1; padding-top: 4px; }
  .bn-port-timeline-title { font-size: 13px; font-weight: 700; color: #1E40AF; margin-bottom: 2px; }
  .bn-port-timeline-desc { font-size: 11.5px; color: #4B5563; line-height: 1.6; }

  .bn-pay-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px; }
  .bn-pay-item { padding: 13px; text-align: center; border-radius: 12px; border: 2px solid #DDE3F5; font-size: 13px; font-weight: 600; color: #6B7280; cursor: pointer; transition: all 0.15s; position: relative; }
  .bn-pay-selected { border-color: #2563EB !important; background: #EFF6FF !important; color: #2563EB !important; }
  .bn-pay-disabled { opacity: 0.45; cursor: not-allowed; }
  .bn-coming-soon { display: block; font-size: 10px; font-weight: 700; color: #9CA3AF; margin-top: 2px; }
  .bn-pay-note { font-size: 12px; color: #9CA3AF; }

  .bn-cart-items { display: flex; flex-direction: column; gap: 10px; margin-top: 6px; }
  .bn-ci-row { display: flex; align-items: flex-start; gap: 10px; padding: 12px; background: #F9FAFB; border-radius: 14px; border: 1px solid #F3F4F6; }
  .bn-ci-avatar { width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, #EFF6FF, #DBEAFE); border: 1px solid #BFDBFE; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
  .bn-ci-info { flex: 1; }
  .bn-ci-name { font-size: 13px; font-weight: 700; color: #111827; margin-bottom: 5px; }
  .bn-ci-chips { display: flex; gap: 4px; flex-wrap: wrap; }
  .bn-ci-chip { display: inline-flex; align-items: center; gap: 3px; padding: 3px 8px; border-radius: 20px; font-size: 10px; font-weight: 700; }
  .bn-chip-blue { background: #EFF6FF; color: #1D4ED8; border: 1px solid #BFDBFE; }
  .bn-chip-purple { background: #F5F3FF; color: #6D28D9; border: 1px solid #DDD6FE; }
  .bn-chip-green { background: #DCFCE7; color: #14532D; border: 1px solid #BBF7D0; }
  .bn-chip-yellow { background: #FFFBEB; color: #92400E; border: 1px solid #FDE68A; }
  .bn-ci-right { text-align: right; flex-shrink: 0; }
  .bn-ci-qty { font-size: 11px; font-weight: 600; color: #9CA3AF; margin-bottom: 2px; }
  .bn-ci-price { font-family: 'Sora', sans-serif; font-size: 16px; font-weight: 800; color: #2563EB; }
  .bn-ci-was { font-size: 11px; color: #D1D5DB; text-decoration: line-through; }

  .bn-right { position: sticky; top: 78px; height: fit-content; }
  .bn-summary-card { background: #fff; border-radius: 22px; border: 1px solid #DDE3F5; padding: 22px; box-shadow: 0 2px 14px rgba(59,130,246,0.06); }
  .bn-summary-header { display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 800; color: #6B7280; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }
  .bn-port-badge { background: #F5F3FF; color: #6D28D9; font-size: 10px; font-weight: 700; padding: 3px 10px; border-radius: 20px; border: 1px solid #DDD6FE; margin-left: auto; }
  .bn-op-row { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
  .bn-op-logo { width: 36px; height: 36px; border-radius: 50%; border: 1px solid #DDE3F5; object-fit: contain; }
  .bn-op-avatar { width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #DBEAFE, #EDE9FE); display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 800; color: #2563EB; }
  .bn-op-name { font-size: 15px; font-weight: 700; color: #111827; }
  .bn-op-port-sub { font-size: 11px; color: #7C3AED; font-weight: 600; margin-top: 2px; }
  .bn-spec-box { background: #F8FAFF; border: 1px solid #DDE3F5; border-radius: 14px; padding: 14px; margin-bottom: 16px; }
  .bn-spec-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 13px; border-bottom: 1px solid #F3F4F6; }
  .bn-spec-row:last-child { border-bottom: none; }
  .bn-spec-key { color: #6B7280; font-weight: 500; }
  .bn-spec-val { color: #111827; font-weight: 700; }
  .bn-price-section { margin-top: 4px; }
  .bn-cart-summary-rows { display: flex; flex-direction: column; gap: 6px; }
  .bn-price-row { display: flex; justify-content: space-between; font-size: 13.5px; color: #374151; font-weight: 500; padding: 5px 0; }
  .bn-price-savings { color: #16A34A; font-weight: 700; }
  .bn-free-tag { color: #16A34A; font-weight: 700; font-size: 13px; }
  .bn-price-divider { height: 1px; background: #F3F4F6; margin: 12px 0; }
  .bn-price-total-row { display: flex; justify-content: space-between; font-size: 18px; font-weight: 800; color: #111827; }
  .bn-savings-pill { margin-top: 10px; background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 12px; padding: 9px 14px; font-size: 12px; font-weight: 600; color: #15803D; text-align: center; }
  .bn-info-section { margin-top: 16px; padding-top: 14px; border-top: 1px solid #F3F4F6; display: flex; flex-direction: column; gap: 8px; }
  .bn-info-row { display: flex; justify-content: space-between; font-size: 12px; }
  .bn-info-key { color: #9CA3AF; }
  .bn-info-val { color: #2563EB; font-weight: 600; max-width: 55%; text-align: right; }

  .bn-port-readiness { margin-top: 14px; background: #F8FAFF; border: 1px solid #E0E7FF; border-radius: 12px; padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; }
  .bn-port-ready-row { display: flex; align-items: center; gap: 8px; }
  .bn-port-ready-dot { width: 8px; height: 8px; border-radius: 50%; background: #E5E7EB; border: 2px solid #D1D5DB; transition: all 0.2s; flex-shrink: 0; }
  .bn-port-ready-dot.ok { background: #10B981; border-color: #10B981; box-shadow: 0 0 0 3px #D1FAE5; }
  .bn-port-ready-txt { font-size: 12px; color: #9CA3AF; font-weight: 500; transition: color 0.2s; }
  .bn-port-ready-txt.ok { color: #059669; font-weight: 700; }

  .bn-pay-btn { width: 100%; margin-top: 18px; padding: 14px; background: linear-gradient(135deg, #2563EB, #6366F1); border: none; border-radius: 14px; color: #fff; font-size: 15px; font-weight: 700; font-family: inherit; cursor: pointer; box-shadow: 0 4px 20px rgba(99,102,241,0.35); transition: opacity 0.15s, transform 0.12s; }
  .bn-pay-btn:hover { opacity: 0.92; }
  .bn-pay-btn:active { transform: scale(0.97); }
  .bn-pay-btn:disabled { opacity: 0.6; cursor: not-allowed; }
  .bn-cancel-btn { width: 100%; margin-top: 8px; padding: 10px; background: none; border: none; color: #9CA3AF; font-size: 13px; font-weight: 600; cursor: pointer; font-family: inherit; transition: color 0.15s; }
  .bn-cancel-btn:hover { color: #4B5563; }

  .bn-overlay { position: fixed; inset: 0; z-index: 100; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(4px); }
  .bn-pincode-modal { background: #fff; border-radius: 24px; max-width: 400px; width: 100%; overflow: hidden; box-shadow: 0 24px 64px rgba(0,0,0,0.22); animation: bn-modal-in 0.22s cubic-bezier(0.34,1.56,0.64,1); }
  @keyframes bn-modal-in { from { opacity: 0; transform: scale(0.88) translateY(16px); } to { opacity: 1; transform: scale(1) translateY(0); } }
  .bn-pm-top { background: #FEF2F2; border-bottom: 1px solid #FECACA; padding: 28px 28px 22px; text-align: center; }
  .bn-pm-icon-ring { width: 68px; height: 68px; border-radius: 50%; background: #fff; border: 2px solid #FCA5A5; display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 auto 14px; }
  .bn-pm-headline { font-family: 'Sora', sans-serif; font-size: 19px; font-weight: 800; color: #7F1D1D; margin: 0 0 8px; }
  .bn-pm-sub { font-size: 13.5px; color: #991B1B; line-height: 1.6; margin: 0; }
  .bn-pm-sub strong { font-weight: 800; background: #FEE2E2; padding: 1px 6px; border-radius: 6px; }
  .bn-pm-body { padding: 20px 24px 26px; }
  .bn-pm-tips { background: #F9FAFB; border: 1px solid #F3F4F6; border-radius: 14px; padding: 14px 16px; margin-bottom: 18px; display: flex; flex-direction: column; gap: 10px; }
  .bn-pm-tip { font-size: 13px; color: #4B5563; line-height: 1.55; }
  .bn-pm-change-btn { width: 100%; padding: 13px; background: linear-gradient(135deg, #2563EB, #6366F1); color: #fff; border: none; border-radius: 13px; font-size: 14px; font-weight: 700; font-family: inherit; cursor: pointer; margin-bottom: 8px; transition: opacity 0.15s; }
  .bn-pm-change-btn:hover { opacity: 0.9; }
  .bn-pm-close-btn { width: 100%; padding: 10px; background: none; border: none; color: #9CA3AF; font-size: 13px; font-weight: 600; font-family: inherit; cursor: pointer; transition: color 0.15s; }
  .bn-pm-close-btn:hover { color: #4B5563; }

  @media (max-width: 860px) {
    .bn-layout { grid-template-columns: 1fr; padding: 14px 12px; gap: 14px; }
    .bn-right { position: static; }
    .bn-addr-grid { grid-template-columns: 1fr; }
    .bn-pay-grid { grid-template-columns: 1fr 1fr; }
    .bn-port-op-grid { grid-template-columns: repeat(2, 1fr); }
    .bn-port-hero { padding: 16px; }
    .bn-port-hero-steps { display: none; }
  }

  .bn-addr-label-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 800;
  color: #6D28D9;
  background: #F5F3FF;
  border: 1px solid #DDD6FE;
  padding: 2px 8px;
  border-radius: 20px;
  margin-bottom: 4px;
}
  
`;export{v as default};