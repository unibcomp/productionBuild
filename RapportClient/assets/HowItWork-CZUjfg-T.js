import{Q as e,ct as t,it as n}from"./index-Dt_sfBle.js";n();var r=e(),i=[{no:`01`,icon:`📱`,title:`Choose Operator & Plan`,desc:`Tap a card to see live premium plans and personalized pricing tailored for that specific network operator.`,badge:`Instant View`,accentColor:`#3B6EFF`,glowColor:`rgba(59, 110, 255, 0.35)`,meshBg:`radial-gradient(120% 120% at 0% 0%, #FFFFFF 0%, #F8FAFC 50%, #EEF4FF 100%)`,cardBorder:`linear-gradient(135deg, rgba(59, 110, 255, 0.25) 0%, rgba(255,255,255,0.9) 100%)`},{no:`02`,icon:`📍`,title:`Enter Your Address`,desc:`Provide your delivery address or secure upload documents. Our verified agent arrives at your preferred time slot.`,badge:`Doorstep / Online`,accentColor:`#7C3AED`,glowColor:`rgba(124, 58, 237, 0.35)`,meshBg:`radial-gradient(120% 120% at 0% 0%, #FFFFFF 0%, #F8FAFC 50%, #FAF3FF 100%)`,cardBorder:`linear-gradient(135deg, rgba(124, 58, 237, 0.25) 0%, rgba(255,255,255,0.9) 100%)`},{no:`03`,icon:`🚀`,title:`Get Delivered in 2 Hours`,desc:`Experience lightning-fast activation. Instant doorstep documentation ensures you are connected immediately.`,badge:`2-Hr Delivery`,accentColor:`#10B981`,glowColor:`rgba(16, 185, 129, 0.35)`,meshBg:`radial-gradient(120% 120% at 0% 0%, #FFFFFF 0%, #F8FAFC 50%, #E6FFF2 100%)`,cardBorder:`linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(255,255,255,0.9) 100%)`}],a=()=>(0,r.jsx)(`div`,{style:o.pageWrap,children:(0,r.jsxs)(`div`,{style:o.container,children:[(0,r.jsxs)(`div`,{style:o.deliverBadge,children:[(0,r.jsx)(`div`,{className:`deliver-dot`,style:o.deliverDot}),(0,r.jsx)(`span`,{style:o.deliverText,children:`⚡ FAST & SECURE ACTIVATION PROCESS`})]}),(0,r.jsx)(`p`,{style:o.subtitle,children:`EASY WORKFLOW`}),(0,r.jsxs)(`h2`,{style:o.title,children:[`Get Your New SIM in `,(0,r.jsx)(`span`,{style:o.titleSpan,children:`3 Easy Steps`})]}),(0,r.jsx)(`div`,{style:o.grid,children:i.map((e,t)=>(0,r.jsxs)(`div`,{className:`premium-step-card`,style:{...o.card,background:e.meshBg,animationDelay:`${t*.15}s`,"--accent-color":e.accentColor,"--hover-glow":e.glowColor,"--border-gradient":e.cardBorder},children:[(0,r.jsx)(`div`,{style:{...o.topGlowLine,background:e.accentColor}}),(0,r.jsxs)(`div`,{style:o.cardHeader,children:[(0,r.jsx)(`div`,{style:{...o.iconContainer,background:`${e.accentColor}12`},children:(0,r.jsx)(`span`,{style:o.iconStyle,children:e.icon})}),(0,r.jsx)(`span`,{style:{...o.badge,background:`${e.accentColor}0A`,color:e.accentColor,border:`1px solid ${e.accentColor}1A`},children:e.badge})]}),(0,r.jsx)(`div`,{style:{...o.stepNumberText,color:`${e.accentColor}15`},children:e.no}),(0,r.jsxs)(`h3`,{style:o.cardTitle,children:[(0,r.jsxs)(`span`,{style:{...o.titleNumberIndicator,color:e.accentColor},children:[e.no,`.`]}),` `,e.title]}),(0,r.jsx)(`p`,{style:o.desc,children:e.desc}),(0,r.jsx)(`div`,{className:`action-indicator-line`,style:{...o.actionLine,background:e.accentColor}})]},e.no))}),(0,r.jsx)(`style`,{children:`
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Space+Grotesk:wght@700&display=swap');

            .premium-step-card {
              position: relative;
              overflow: hidden;
              z-index: 1;
              /* Multi-layered box shadow: Clean shadow + Soft Inner Ambient Light */
              box-shadow: 
                0 4px 6px -1px rgba(15, 23, 42, 0.02),
                0 10px 30px -10px rgba(15, 23, 42, 0.05),
                inset 0 1px 0 rgba(255, 255, 255, 0.9),
                inset 0 -8px 32px rgba(255, 255, 255, 0.4);
              transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
            }

            /* 🔥 BACKGROUND ENGINE: Premium Subtle Organic Noise Texture overlay */
            .premium-step-card::after {
              content: '';
              position: absolute;
              inset: 0;
              z-index: -1;
              opacity: 0.015;
              pointer-events: none;
              background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            }

            /* Custom Dynamic Gradient Border Simulation */
            .premium-step-card::before {
              content: '';
              position: absolute;
              inset: 0;
              border-radius: 24px; 
              padding: 1.5px; 
              background: var(--border-gradient);
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              pointer-events: none;
              transition: background 0.4s ease;
            }

            /* Ultra Premium Luxury Hover States */
            .premium-step-card:hover {
              transform: translateY(-12px) scale(1.015);
              /* Intense Soft Glow: Aisa lagega ki card table se upar uth gya hai */
              box-shadow: 
                0 40px 80px -15px var(--hover-glow), 
                0 15px 30px -10px rgba(15, 23, 42, 0.06),
                inset 0 1px 0 rgba(255, 255, 255, 1) !important;
            }

            .premium-step-card:hover::before {
              background: linear-gradient(135deg, var(--accent-color) 0%, rgba(255,255,255,0.2) 100%);
            }

            /* Expanding Action Line Effect on Card Hover */
            .premium-step-card:hover .action-indicator-line {
              width: 100% !important;
              opacity: 0.8 !important;
            }

            @keyframes fadeUpIn {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes beaconPulse {
              0%, 100 { transform: scale(1); opacity: 1; }
              50% { transform: scale(1.4); opacity: 0.4; }
            }

            .deliver-dot {
              position: relative;
            }
            .deliver-dot::after {
              content: '';
              position: absolute;
              inset: -4px;
              border-radius: 50%;
              background: inherit;
              animation: beaconPulse 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
            }
          `})]})}),o={pageWrap:{background:`#F8FAFC`,width:`100%`,fontFamily:`'Plus Jakarta Sans', sans-serif`},container:{textAlign:`center`,maxWidth:1240,margin:`0 auto`,padding:`37px 24px 65px`},deliverBadge:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:10,background:`#FFFFFF`,border:`1px solid #E2E8F0`,borderRadius:999,padding:`10px 24px`,marginBottom:24,boxShadow:`0 4px 12px rgba(0, 0, 0, 0.03)`},deliverDot:{width:8,height:8,borderRadius:`50%`,background:`#3B6EFF`},deliverText:{fontSize:11,fontWeight:800,color:`#475569`,letterSpacing:`0.08em`},subtitle:{fontSize:12,fontWeight:800,letterSpacing:`0.15em`,textTransform:`uppercase`,color:`#3B6EFF`,marginBottom:16},title:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:`clamp(2.2rem, 4.5vw, 3rem)`,fontWeight:700,letterSpacing:`-0.03em`,marginBottom:72,color:`#0F172A`,lineHeight:1.15},titleSpan:{background:`linear-gradient(90deg, #3B6EFF 0%, #7C3AED 100%)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,fontWeight:800},grid:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(320px, 1fr))`,gap:32},card:{borderRadius:24,padding:`48px 38px`,animation:`fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both`,textAlign:`left`,cursor:`pointer`},topGlowLine:{position:`absolute`,top:0,left:0,right:0,height:3,opacity:.6},cardHeader:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,width:`100%`,marginBottom:36,position:`relative`,zIndex:3},iconContainer:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:48,height:48,borderRadius:16,boxShadow:`inset 0 1px 1px rgba(255,255,255,0.4)`},iconStyle:{fontSize:22},badge:{fontSize:11,fontWeight:700,padding:`6px 14px`,borderRadius:999,letterSpacing:`0.02em`},stepNumberText:{fontFamily:`'Space Grotesk', sans-serif`,fontSize:90,fontWeight:700,position:`absolute`,right:20,top:60,userSelect:`none`,zIndex:0},cardTitle:{fontSize:22,fontWeight:700,color:`#0F172A`,letterSpacing:`-0.02em`,marginBottom:16,position:`relative`,zIndex:3},titleNumberIndicator:{marginRight:6,fontFamily:`'Space Grotesk', sans-serif`},desc:{color:`#475569`,fontSize:14.5,lineHeight:1.7,fontWeight:500,margin:0,position:`relative`,zIndex:3},actionLine:{position:`absolute`,bottom:0,left:0,width:`0%`,height:4,opacity:0,transition:`all 0.4s cubic-bezier(0.16, 1, 0.3, 1)`}};export{a as default};