import{t as e}from"./clock-CO5s5RRy.js";import{t}from"./message-square-Bwh6MDbV.js";import{t as n}from"./package-MBaNwQKS.js";import{t as r}from"./wifi-ULqxXNrs.js";import{t as i}from"./zap-DIZRb2RC.js";import{B as a,I as o,K as s,L as c,M as l,O as u,P as d,U as f,W as p,X as m,b as h,k as g,z as _}from"./index-y8NNiLhI.js";import{t as v}from"./useUser-B02eLKm_.js";import{t as y}from"./useEsim-JUlAwHBm.js";var b=m(s(),1);const x=()=>c({mutationFn:async e=>{let t=localStorage.getItem(`token`),n={};return t&&(n.Authorization=`Bearer ${t}`),(await h.post(`/esim/order`,e,{headers:n})).data.data}});var S=a(),C=`
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.eb-root { min-height: 100vh; background: #F0F4FF; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; color: #111827; }

/* ── Loading ── */
.eb-loading { min-height: 100vh; background: #F0F4FF; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 12px; }
.eb-spinner { width: 40px; height: 40px; border-radius: 50%; border: 3px solid #DBEAFE; border-top-color: #2563EB; animation: eb-spin 0.75s linear infinite; }
@keyframes eb-spin { to { transform: rotate(360deg); } }
@keyframes eb-fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
@keyframes eb-overlayIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes eb-modalSlide { from { opacity: 0; transform: translateY(28px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }

/* ── Nav ── */
.eb-nav {
  position: sticky; top: 0; z-index: 40;
  background: rgba(240,244,255,0.92); backdrop-filter: blur(20px);
  border-bottom: 1px solid #DDE3F5;
  height: 58px; display: flex; align-items: center; justify-content: space-between;
  padding: 0 24px;
}
.eb-back-btn {
  display: flex; align-items: center; gap: 6px;
  background: #fff; border: 1px solid #DDE3F5; border-radius: 10px;
  padding: 7px 14px; font-size: 13px; font-weight: 600; color: #4B5563;
  cursor: pointer; font-family: inherit; transition: all 0.15s;
}
.eb-back-btn:hover { border-color: #2563EB; color: #2563EB; background: #EFF6FF; }
.eb-nav-center { display: flex; align-items: center; gap: 8px; }
.eb-nav-icon { font-size: 18px; }
.eb-nav-title { font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 800; color: #111827; letter-spacing: -0.3px; }

/* ── eSIM Hero Banner ── */
.eb-hero {
  background: linear-gradient(135deg, #0F172A 0%, #2563EB 55%, #6366F1 100%);
  padding: 20px 24px;
  display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap;
}
.eb-hero-left { display: flex; align-items: center; gap: 14px; }
.eb-hero-icon {
  width: 48px; height: 48px; border-radius: 14px;
  background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2);
  display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0;
}
.eb-hero-title { font-family: 'Sora', sans-serif; font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 4px; }
.eb-hero-sub { font-size: 12px; color: rgba(255,255,255,0.75); }
.eb-hero-steps { display: flex; align-items: center; gap: 6px; }
.eb-hero-step { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.eb-hero-step-num {
  width: 22px; height: 22px; border-radius: 50%;
  background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.35);
  color: #fff; font-size: 10px; font-weight: 800;
  display: flex; align-items: center; justify-content: center;
}
.eb-hero-step-lbl { font-size: 10px; color: rgba(255,255,255,0.7); font-weight: 600; white-space: nowrap; }

/* ── Layout ── */
.eb-layout {
  display: grid; grid-template-columns: 1fr 380px; gap: 20px;
  padding: 20px 24px; max-width: 1100px; margin: 0 auto;
}
.eb-left { display: flex; flex-direction: column; gap: 16px; animation: eb-fadeUp 0.3s ease both; }

/* ── Card ── */
.eb-card {
  background: #fff; border-radius: 22px; border: 1px solid #DDE3F5;
  padding: 22px; box-shadow: 0 2px 14px rgba(59,130,246,0.06);
}
.eb-card-step { font-size: 10px; font-weight: 800; color: #2563EB; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 6px; }
.eb-card-title { font-family: 'Sora', sans-serif; font-size: 20px; font-weight: 800; color: #111827; margin-bottom: 4px; }
.eb-card-sub { font-size: 13px; color: #9CA3AF; margin-bottom: 18px; }

/* ── Auto-fill badge ── */
.eb-autofill-badge {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 12px; border-radius: 8px;
  background: #ECFDF5; border: 1px solid #A7F3D0;
  color: #059669; font-size: 12px; font-weight: 700;
  margin-bottom: 16px;
}

/* ── Fields grid ── */
.eb-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.eb-field-full { grid-column: 1 / -1; }
.eb-phone-wrap { display: grid; grid-template-columns: 160px 1fr; gap: 10px; }
.eb-select {
  width: 100%; height: 48px;
  background: #FAFBFF; border: 1.5px solid #DDE3F5; border-radius: 12px;
  padding: 0 14px; font-size: 13px; font-weight: 600; color: #111827;
  font-family: 'Plus Jakarta Sans', sans-serif; outline: none;
  cursor: pointer; appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 12px center;
  padding-right: 32px;
  transition: border-color 0.15s, background-color 0.15s, box-shadow 0.15s;
}
.eb-select:focus {
  border-color: #6366F1; background-color: #fff;
  box-shadow: 0 0 0 3px rgba(99,102,241,0.08);
}
.eb-select-autofilled { border-color: #6EE7B7 !important; background-color: #F0FDF4 !important; }

.eb-label {
  display: block; font-size: 11px; font-weight: 800;
  color: #374151; text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 7px;
}
.eb-input {
  width: 100%; height: 48px;
  background: #FAFBFF; border: 1.5px solid #DDE3F5; border-radius: 12px;
  padding: 0 14px; font-size: 14px; font-weight: 500; color: #111827;
  font-family: 'Plus Jakarta Sans', sans-serif; outline: none;
  transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;
}
.eb-input::placeholder { color: #C4C9D4; }
.eb-input:focus {
  border-color: #6366F1; background: #fff;
  box-shadow: 0 0 0 3px rgba(99,102,241,0.08);
}
.eb-input-autofilled {
  border-color: #6EE7B7 !important;
  background: #F0FDF4 !important;
}

/* ── Payment section ── */
.eb-pay-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px; }
.eb-pay-item {
  padding: 13px; text-align: center; border-radius: 12px;
  border: 2px solid #DDE3F5; font-size: 13px; font-weight: 600;
  color: #6B7280; cursor: pointer; transition: all 0.15s; position: relative;
}
.eb-pay-selected { border-color: #2563EB !important; background: #EFF6FF !important; color: #2563EB !important; }
.eb-pay-disabled { opacity: 0.45; cursor: not-allowed; }
.eb-coming-soon { display: block; font-size: 10px; font-weight: 700; color: #9CA3AF; margin-top: 2px; }
.eb-pay-note { font-size: 12px; color: #9CA3AF; }

/* ── Right: Summary card ── */
.eb-right { position: sticky; top: 78px; height: fit-content; animation: eb-fadeUp 0.35s ease both; }
.eb-summary-card {
  background: #fff; border-radius: 22px; border: 1px solid #DDE3F5;
  padding: 22px; box-shadow: 0 2px 14px rgba(59,130,246,0.06);
}
.eb-summary-header {
  display: flex; align-items: center; gap: 8px;
  font-size: 11px; font-weight: 800; color: #6B7280;
  text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;
}
.eb-esim-badge {
  background: #EFF6FF; color: #1D4ED8; font-size: 10px; font-weight: 700;
  padding: 3px 10px; border-radius: 20px; border: 1px solid #BFDBFE; margin-left: auto;
}

/* ── Plan info in summary ── */
.eb-plan-name-block { margin-bottom: 14px; }
.eb-plan-name { font-family: 'Sora', sans-serif; font-size: 18px; font-weight: 800; color: #111827; margin-bottom: 4px; line-height: 1.2; }
.eb-plan-network { font-size: 12px; color: #9CA3AF; font-weight: 500; }

.eb-spec-box {
  background: #F8FAFF; border: 1px solid #DDE3F5;
  border-radius: 14px; padding: 14px; margin-bottom: 16px;
}
.eb-spec-row {
  display: flex; justify-content: space-between;
  padding: 7px 0; font-size: 13px;
  border-bottom: 1px solid #F3F4F6;
}
.eb-spec-row:last-child { border-bottom: none; }
.eb-spec-key { color: #6B7280; font-weight: 500; display: flex; align-items: center; gap: 6px; }
.eb-spec-val { color: #111827; font-weight: 700; }
.eb-spec-val-green { color: #059669 !important; }

/* ── Price breakdown ── */
.eb-price-section { margin-top: 4px; }
.eb-price-row { display: flex; justify-content: space-between; font-size: 13.5px; color: #374151; font-weight: 500; padding: 5px 0; }
.eb-price-divider { height: 1px; background: #F3F4F6; margin: 12px 0; }
.eb-price-total-row { display: flex; justify-content: space-between; font-size: 18px; font-weight: 800; color: #111827; }

/* ── Info rows ── */
.eb-info-section { margin-top: 16px; padding-top: 14px; border-top: 1px solid #F3F4F6; display: flex; flex-direction: column; gap: 8px; }
.eb-info-row { display: flex; justify-content: space-between; font-size: 12px; }
.eb-info-key { color: #9CA3AF; }
.eb-info-val { color: #2563EB; font-weight: 600; }

/* ── Countries ── */
.eb-countries-head {
  font-size: 10px; font-weight: 800; color: #9CA3AF;
  text-transform: uppercase; letter-spacing: 0.07em;
  margin-bottom: 8px; margin-top: 14px;
}
.eb-countries-wrap { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 14px; }
.eb-ctry {
  padding: 4px 10px; border-radius: 8px;
  background: #F0F4FF; border: 1px solid #DDE3F5;
  font-size: 11.5px; font-weight: 600; color: #4B5563;
}

/* ── FUP note ── */
.eb-fup {
  background: #FFFBEB; border: 1px solid #FDE68A;
  border-radius: 12px; padding: 10px 12px;
  font-size: 12px; color: #92400E; font-weight: 500;
  display: flex; gap: 8px; align-items: flex-start;
  margin-bottom: 14px; line-height: 1.5;
}

/* ── CTA Button ── */
.eb-pay-btn {
  width: 100%; margin-top: 18px; padding: 14px;
  background: linear-gradient(135deg, #2563EB, #6366F1);
  border: none; border-radius: 14px; color: #fff;
  font-size: 15px; font-weight: 700; font-family: inherit;
  cursor: pointer; box-shadow: 0 4px 20px rgba(99,102,241,0.35);
  transition: opacity 0.15s, transform 0.12s;
  display: flex; align-items: center; justify-content: center; gap: 8px;
}
.eb-pay-btn:hover:not(:disabled) { opacity: 0.92; transform: translateY(-1px); }
.eb-pay-btn:active:not(:disabled) { transform: scale(0.97); }
.eb-pay-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.eb-pay-spinner {
  width: 16px; height: 16px; border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff;
  animation: eb-spin 0.7s linear infinite;
}
.eb-cancel-btn {
  width: 100%; margin-top: 8px; padding: 10px;
  background: none; border: none; color: #9CA3AF;
  font-size: 13px; font-weight: 600; cursor: pointer;
  font-family: inherit; transition: color 0.15s;
}
.eb-cancel-btn:hover { color: #4B5563; }
.eb-secure-note {
  text-align: center; margin-top: 6px;
  font-size: 11px; color: #9CA3AF; font-weight: 500;
  display: flex; align-items: center; justify-content: center; gap: 4px;
}

/* ── Login Modal ── */
.eb-overlay {
  position: fixed; inset: 0; z-index: 100;
  background: rgba(0,0,0,0.5); backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center;
  animation: eb-overlayIn 0.2s ease; padding: 20px;
}
.eb-modal {
  background: #fff; border: 1px solid #DDE3F5;
  border-radius: 24px; padding: 36px 32px;
  max-width: 400px; width: 100%; text-align: center;
  animation: eb-modalSlide 0.25s ease;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}
.eb-modal-emoji { font-size: 48px; margin-bottom: 16px; }
.eb-modal-title { font-family: 'Sora', sans-serif; font-size: 22px; font-weight: 800; color: #111827; margin-bottom: 8px; }
.eb-modal-sub { font-size: 14px; color: #6B7280; line-height: 1.6; margin-bottom: 28px; }
.eb-modal-btn {
  width: 100%; height: 52px; border: none; border-radius: 14px;
  background: linear-gradient(135deg, #2563EB, #6366F1);
  color: #fff; font-size: 15px; font-weight: 700;
  font-family: inherit; cursor: pointer; margin-bottom: 10px; transition: opacity 0.15s;
}
.eb-modal-btn:hover { opacity: 0.9; }
.eb-modal-dismiss {
  background: none; border: none; font-size: 13px; color: #9CA3AF;
  cursor: pointer; font-family: inherit; font-weight: 600; padding: 6px;
  transition: color 0.15s;
}
.eb-modal-dismiss:hover { color: #6B7280; }

/* ── Responsive ── */
@media (max-width: 860px) {
  .eb-layout { grid-template-columns: 1fr; padding: 14px 12px; gap: 14px; }
  .eb-right { position: static; }
  .eb-fields { grid-template-columns: 1fr; }
  .eb-field-full { grid-column: 1; }
  .eb-phone-wrap { grid-template-columns: 1fr; }
  .eb-pay-grid { grid-template-columns: 1fr 1fr; }
  .eb-hero { padding: 16px; }
  .eb-hero-steps { display: none; }
  .eb-nav { padding: 0 14px; }
}
`,w=[{code:`IN`,dialCode:`+91`,label:`🇮🇳 India`},{code:`AE`,dialCode:`+971`,label:`🇦🇪 UAE`},{code:`US`,dialCode:`+1`,label:`🇺🇸 USA`},{code:`GB`,dialCode:`+44`,label:`🇬🇧 UK`},{code:`TH`,dialCode:`+66`,label:`🇹🇭 Thailand`},{code:`SG`,dialCode:`+65`,label:`🇸🇬 Singapore`},{code:`JP`,dialCode:`+81`,label:`🇯🇵 Japan`},{code:`AU`,dialCode:`+61`,label:`🇦🇺 Australia`},{code:`DE`,dialCode:`+49`,label:`🇩🇪 Germany`},{code:`FR`,dialCode:`+33`,label:`🇫🇷 France`},{code:`IT`,dialCode:`+39`,label:`🇮🇹 Italy`},{code:`MY`,dialCode:`+60`,label:`🇲🇾 Malaysia`},{code:`ID`,dialCode:`+62`,label:`🇮🇩 Indonesia`}],T=({label:e,name:t,value:n,onChange:r,placeholder:i=``,autoFilled:a=!1,type:o=`text`,fullWidth:s=!1})=>(0,S.jsxs)(`div`,{className:s?`eb-field-full`:``,children:[(0,S.jsx)(`label`,{className:`eb-label`,children:e}),(0,S.jsx)(`input`,{type:o,name:t,value:n,onChange:r,placeholder:i,className:`eb-input${a?` eb-input-autofilled`:``}`})]});function E(){let a=f(),{planId:s}=p(),c=_(),{data:m,isLoading:h}=v(),{data:E,isLoading:D}=y(s),{mutate:O,isPending:k}=x(),[A,j]=(0,b.useState)(!1),[M,N]=(0,b.useState)([]),[P]=(0,b.useState)(`COD`),[F,I]=(0,b.useState)({firstName:``,lastName:``,email:``,address:``,state:``,city:``,pincode:``,countryCode:`IN`,phoneNumber:``});(0,b.useEffect)(()=>{!h&&!m&&j(!0)},[m,h]),(0,b.useEffect)(()=>{if(!m)return;let e=[],t={},n=(m.fullName||``).trim().split(` `);if(n[0]&&(t.firstName=n[0],e.push(`firstName`)),n[1]&&(t.lastName=n.slice(1).join(` `),e.push(`lastName`)),m.email&&(t.email=m.email,e.push(`email`)),m.phone&&(t.phoneNumber=m.phone,e.push(`phoneNumber`)),m.countryCode){let n=w.find(e=>e.code===m.countryCode||e.dialCode===m.countryCode);t.countryCode=n?n.code:`IN`,e.push(`countryCode`)}m.countryCode&&(t.countryCode=m.countryCode,e.push(`countryCode`)),I(e=>({...e,...t})),N(e)},[m]);let L=e=>{let{name:t,value:n}=e.target;I(e=>({...e,[t]:n})),N(e=>e.filter(e=>e!==t))},R=()=>{if(!m){j(!0);return}if(s){if(!F.firstName.trim())return o.error(`Enter your first name`);if(!F.lastName.trim())return o.error(`Enter your last name`);if(!F.email.trim())return o.error(`Enter your email address`);if(!F.address.trim())return o.error(`Enter your address`);if(!F.city.trim())return o.error(`Enter your city`);if(!F.state.trim())return o.error(`Enter your state`);if(!F.pincode.trim())return o.error(`Enter your pincode`);O({planId:s,...F,paymentMethod:`COD`},{onSuccess:e=>{e?.isKycRequired?(o.success(`KYC required — redirecting…`),window.open(e.ekycLink,`_blank`)):o.success(`eSIM order placed 📱`),c.invalidateQueries({queryKey:[`orders`]}),a(`/profile?tab=orders`)},onError:e=>{o.error(e?.response?.data?.message||`Order failed ❌`)}})}},z=E?.network?.includes(`5G`)?`5G`:E?.network?.includes(`4G`)?`4G LTE`:E?.network,B=E?.countries??[];return h||D?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`style`,{children:C}),(0,S.jsxs)(`div`,{className:`eb-loading`,children:[(0,S.jsx)(`div`,{className:`eb-spinner`}),(0,S.jsxs)(`p`,{style:{fontSize:13,fontWeight:600,color:`#9CA3AF`},children:[`Loading`,D?` plan`:``,`…`]})]})]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`style`,{children:C}),(0,S.jsxs)(`div`,{className:`eb-root`,children:[A&&(0,S.jsx)(`div`,{className:`eb-overlay`,children:(0,S.jsxs)(`div`,{className:`eb-modal`,children:[(0,S.jsx)(`div`,{className:`eb-modal-emoji`,children:`🔐`}),(0,S.jsx)(`div`,{className:`eb-modal-title`,children:`Login Required`}),(0,S.jsx)(`div`,{className:`eb-modal-sub`,children:`You need to be logged in to purchase an eSIM plan. Login to continue and your details will be auto-filled.`}),(0,S.jsx)(`button`,{className:`eb-modal-btn`,onClick:()=>{window.dispatchEvent(new CustomEvent(`open-login-modal`)),j(!1)},children:`Login to Continue`}),(0,S.jsx)(`button`,{className:`eb-modal-dismiss`,onClick:()=>j(!1),children:`Browse as guest`})]})}),(0,S.jsxs)(`nav`,{className:`eb-nav`,children:[(0,S.jsxs)(`button`,{className:`eb-back-btn`,onClick:()=>a(-1),children:[(0,S.jsx)(d,{size:14}),` Back`]}),(0,S.jsxs)(`div`,{className:`eb-nav-center`,children:[(0,S.jsx)(`span`,{className:`eb-nav-icon`,children:`📱`}),(0,S.jsx)(`span`,{className:`eb-nav-title`,children:`Get eSIM`})]}),(0,S.jsx)(`div`,{style:{width:72}})]}),(0,S.jsxs)(`div`,{className:`eb-hero`,children:[(0,S.jsxs)(`div`,{className:`eb-hero-left`,children:[(0,S.jsx)(`div`,{className:`eb-hero-icon`,children:`📱`}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`div`,{className:`eb-hero-title`,children:`eSIM Activation`}),(0,S.jsx)(`div`,{className:`eb-hero-sub`,children:`No physical SIM · Instant digital activation · Works on any eSIM device`})]})]}),(0,S.jsx)(`div`,{className:`eb-hero-steps`,children:[`Place Order`,`Get QR Code`,`Scan & Install`,`Active`].map((e,t)=>(0,S.jsxs)(`div`,{className:`eb-hero-step`,children:[(0,S.jsx)(`div`,{className:`eb-hero-step-num`,children:t+1}),(0,S.jsx)(`div`,{className:`eb-hero-step-lbl`,children:e})]},e))})]}),(0,S.jsxs)(`div`,{className:`eb-layout`,children:[(0,S.jsxs)(`div`,{className:`eb-left`,children:[(0,S.jsxs)(`div`,{className:`eb-card`,children:[(0,S.jsx)(`div`,{className:`eb-card-step`,children:`Step 1`}),(0,S.jsx)(`h2`,{className:`eb-card-title`,children:m?`Hey ${m.fullName?.split(` `)[0]||`there`} 👋`:`Personal Information`}),(0,S.jsx)(`p`,{className:`eb-card-sub`,children:`Your name and contact details for the eSIM`}),M.length>0&&(0,S.jsx)(`div`,{className:`eb-autofill-badge`,children:`✓ Details auto-filled from your account`}),(0,S.jsxs)(`div`,{className:`eb-fields`,children:[(0,S.jsx)(T,{label:`First Name`,name:`firstName`,value:F.firstName,onChange:L,placeholder:`John`,autoFilled:M.includes(`firstName`)}),(0,S.jsx)(T,{label:`Last Name`,name:`lastName`,value:F.lastName,onChange:L,placeholder:`Doe`,autoFilled:M.includes(`lastName`)}),(0,S.jsx)(`div`,{className:`eb-field-full`,children:(0,S.jsx)(T,{label:`Email Address`,name:`email`,value:F.email,onChange:L,placeholder:`john@example.com`,type:`email`,fullWidth:!0,autoFilled:M.includes(`email`)})}),(0,S.jsxs)(`div`,{className:`eb-field-full`,children:[(0,S.jsx)(`label`,{className:`eb-label`,children:`Phone Number`}),(0,S.jsxs)(`div`,{className:`eb-phone-wrap`,children:[(0,S.jsx)(`select`,{name:`countryCode`,value:F.countryCode,onChange:e=>{I(t=>({...t,countryCode:e.target.value})),N(e=>e.filter(e=>e!==`countryCode`))},className:`eb-select${M.includes(`countryCode`)?` eb-select-autofilled`:``}`,children:w.map(e=>(0,S.jsxs)(`option`,{value:e.code,children:[e.label,` (`,e.dialCode,`)`]},e.code))}),(0,S.jsx)(`input`,{type:`tel`,name:`phoneNumber`,value:F.phoneNumber,onChange:L,className:`eb-input${M.includes(`phoneNumber`)?` eb-input-autofilled`:``}`,placeholder:`9876543210`})]})]})]})]}),(0,S.jsxs)(`div`,{className:`eb-card`,children:[(0,S.jsx)(`div`,{className:`eb-card-step`,children:`Step 2`}),(0,S.jsx)(`h2`,{className:`eb-card-title`,children:`Billing Address`}),(0,S.jsx)(`p`,{className:`eb-card-sub`,children:`Where should we send the invoice?`}),(0,S.jsxs)(`div`,{className:`eb-fields`,children:[(0,S.jsx)(`div`,{className:`eb-field-full`,children:(0,S.jsx)(T,{label:`Address`,name:`address`,value:F.address,onChange:L,placeholder:`Street, Area, Landmark`,fullWidth:!0})}),(0,S.jsx)(T,{label:`City`,name:`city`,value:F.city,onChange:L,placeholder:`Mumbai`}),(0,S.jsx)(T,{label:`State`,name:`state`,value:F.state,onChange:L,placeholder:`Maharashtra`}),(0,S.jsx)(T,{label:`Pincode`,name:`pincode`,value:F.pincode,onChange:L,placeholder:`400001`})]})]}),(0,S.jsxs)(`div`,{className:`eb-card`,children:[(0,S.jsx)(`div`,{className:`eb-card-step`,children:`Step 3`}),(0,S.jsx)(`h2`,{className:`eb-card-title`,children:`Payment Method`}),(0,S.jsx)(`p`,{className:`eb-card-sub`,children:`How would you like to pay?`}),(0,S.jsx)(`div`,{className:`eb-pay-grid`,children:[`UPI`,`Card`,`Net Banking`,`COD`].map(e=>{let t=e===`COD`;return(0,S.jsxs)(`div`,{className:`eb-pay-item${t&&P===e?` eb-pay-selected`:``}${t?``:` eb-pay-disabled`}`,children:[e,!t&&(0,S.jsx)(`span`,{className:`eb-coming-soon`,children:`Soon`})]},e)})}),(0,S.jsx)(`p`,{className:`eb-pay-note`,children:`Only Cash on Delivery is available right now.`})]})]}),(0,S.jsx)(`div`,{className:`eb-right`,children:(0,S.jsxs)(`div`,{className:`eb-summary-card`,children:[(0,S.jsxs)(`div`,{className:`eb-summary-header`,children:[(0,S.jsx)(n,{size:15}),(0,S.jsx)(`span`,{children:`Order Summary`}),(0,S.jsx)(`span`,{className:`eb-esim-badge`,children:`📱 eSIM`})]}),E&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(`div`,{className:`eb-plan-name-block`,children:[(0,S.jsx)(`div`,{className:`eb-plan-name`,children:E.name}),(0,S.jsx)(`div`,{className:`eb-plan-network`,children:E.network})]}),(0,S.jsx)(`div`,{className:`eb-spec-box`,children:[{icon:(0,S.jsx)(r,{size:11}),label:`Data`,val:E.isUnlimited?`Unlimited`:E.dataLimit,green:E.isUnlimited},{icon:(0,S.jsx)(e,{size:11}),label:`Validity`,val:E.validityDays?`${E.validityDays} Days`:null},{icon:(0,S.jsx)(g,{size:11}),label:`Calls`,val:E.callInSeconds==null?null:`${E.callInSeconds}s`},{icon:(0,S.jsx)(t,{size:11}),label:`SMS / Day`,val:E.sms==null?null:`${E.sms}`},{icon:(0,S.jsx)(i,{size:11}),label:`Network`,val:z},{icon:(0,S.jsx)(l,{size:11}),label:`Coverage`,val:E.coverage}].filter(e=>e.val).map((e,t)=>(0,S.jsxs)(`div`,{className:`eb-spec-row`,children:[(0,S.jsxs)(`span`,{className:`eb-spec-key`,children:[e.icon,` `,e.label]}),(0,S.jsx)(`span`,{className:`eb-spec-val${e.green?` eb-spec-val-green`:``}`,children:e.val})]},t))}),(0,S.jsxs)(`div`,{className:`eb-price-section`,children:[(0,S.jsxs)(`div`,{className:`eb-price-row`,children:[(0,S.jsx)(`span`,{children:`Plan Price`}),(0,S.jsxs)(`span`,{children:[`₹`,E.price]})]}),(0,S.jsxs)(`div`,{className:`eb-price-row`,children:[(0,S.jsx)(`span`,{children:`Delivery`}),(0,S.jsx)(`span`,{style:{color:`#16A34A`,fontWeight:700},children:`FREE`})]}),(0,S.jsx)(`div`,{className:`eb-price-divider`}),(0,S.jsxs)(`div`,{className:`eb-price-total-row`,children:[(0,S.jsx)(`span`,{children:`Total`}),(0,S.jsxs)(`span`,{children:[`₹`,E.price]})]})]}),E.fupPolicy&&(0,S.jsxs)(`div`,{className:`eb-fup`,style:{marginTop:14},children:[(0,S.jsx)(`span`,{children:`⚡`}),(0,S.jsx)(`span`,{children:E.fupPolicy})]}),B.length>0&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(`div`,{className:`eb-countries-head`,children:[B.length,` Countr`,B.length===1?`y`:`ies`,` Covered`]}),(0,S.jsxs)(`div`,{className:`eb-countries-wrap`,children:[B.slice(0,10).map(e=>(0,S.jsxs)(`div`,{className:`eb-ctry`,children:[`🏳️ `,e.name]},e._id)),B.length>10&&(0,S.jsxs)(`div`,{className:`eb-ctry`,children:[`+`,B.length-10,` more`]})]})]}),(0,S.jsxs)(`div`,{className:`eb-info-section`,children:[(0,S.jsxs)(`div`,{className:`eb-info-row`,children:[(0,S.jsx)(`span`,{className:`eb-info-key`,children:`Order Type`}),(0,S.jsx)(`span`,{className:`eb-info-val`,children:`eSIM — Digital`})]}),(0,S.jsxs)(`div`,{className:`eb-info-row`,children:[(0,S.jsx)(`span`,{className:`eb-info-key`,children:`Payment`}),(0,S.jsx)(`span`,{className:`eb-info-val`,children:`Cash on Delivery`})]}),(0,S.jsxs)(`div`,{className:`eb-info-row`,children:[(0,S.jsx)(`span`,{className:`eb-info-key`,children:`Delivery`}),(0,S.jsx)(`span`,{className:`eb-info-val`,children:`QR Code via Email`})]})]})]}),(0,S.jsx)(`button`,{className:`eb-pay-btn`,onClick:R,disabled:k,children:k?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`div`,{className:`eb-pay-spinner`}),` Placing Order…`]}):(0,S.jsxs)(S.Fragment,{children:[`Activate eSIM — ₹`,E?.price??`—`,` →`]})}),(0,S.jsx)(`button`,{className:`eb-cancel-btn`,onClick:()=>a(-1),children:`Cancel`}),(0,S.jsxs)(`div`,{className:`eb-secure-note`,children:[(0,S.jsx)(u,{size:12}),` Secure checkout · Instant eSIM activation`]})]})})]})]})]})}export{E as default};