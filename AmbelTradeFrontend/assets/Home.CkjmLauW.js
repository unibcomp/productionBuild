const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Banner.BPYpjpBn.js","assets/index.C59IacS8.js","assets/index.CXqc9nQ8.css","assets/index.CXzdxYIc.js","assets/proxy.csWhzIO4.js","assets/chevron-right.BrIdNKKk.js","assets/createLucideIcon.D5ycbaIH.js","assets/Product.BiTTAHm0.js","assets/ProductCardShimmer.ndxqA7D8.js","assets/WishlistButton.D1J2RJqs.js","assets/useMutation.BMW4_Aqz.js","assets/dialog.BAZ-gKHK.js","assets/PaginationSelecctor.yMgUvyU9.js","assets/usePagination.pZv4zmWx.js","assets/NotDataFound.wcga_Xnd.js","assets/PageHeadline.YN-6J_5o.js","assets/useModal.DzFjI7ii.js","assets/ButtonBar.B1q3VllN.js","assets/Testimonimal.Bb83lV2m.js"])))=>i.map(i=>d[i]);
import{r as s,j as e,L as x,_ as o}from"./index.C59IacS8.js";import p from"./InfiniteProductPage.DENYYl76.js";import{P as l}from"./ProductCardShimmer.ndxqA7D8.js";import{u as h}from"./useNavbar.CIiwg2Q0.js";import"./usePagination.pZv4zmWx.js";import"./NotDataFound.wcga_Xnd.js";import"./proxy.csWhzIO4.js";import"./PageHeadline.YN-6J_5o.js";import"./useModal.DzFjI7ii.js";import"./ButtonBar.B1q3VllN.js";import"./WishlistButton.D1J2RJqs.js";import"./useMutation.BMW4_Aqz.js";import"./dialog.BAZ-gKHK.js";const f=()=>{const{data:n,isLoading:t}=h(),[i,d]=s.useState(!1),a=n?.results?.find(r=>r.name==="Electronics")?.children||[],c=i?a:a.slice(0,5);return t?e.jsx("section",{className:"px-4 md:px-8 py-10 bg-[#f8fbff]",children:e.jsx("div",{className:"max-w-7xl mx-auto",children:e.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4",children:Array.from({length:5}).map((r,m)=>e.jsx("div",{className:"h-28 rounded-2xl bg-gray-100 animate-pulse"},m))})})}):e.jsx("section",{className:"px-4 md:px-8 py-10 bg-gradient-to-b from-[#eef6ff] to-[#f8fbff]",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsx("div",{className:"flex items-end justify-between mb-8",children:e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-[#1e73bc] tracking-widest uppercase mb-1",children:"Categories"}),e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold text-gray-900",children:"Shop by Category"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Explore products by curated categories"})]})}),e.jsxs("div",{className:"bg-white rounded-3xl border border-[#e6eef7] shadow-[0_20px_60px_rgba(30,115,188,0.08)] p-5 md:p-8",children:[e.jsx("div",{className:`\r
            grid \r
            grid-cols-2 \r
            sm:grid-cols-3 \r
            md:grid-cols-4 \r
            lg:grid-cols-5 \r
            gap-4 md:gap-6\r
          `,children:c.map(r=>e.jsxs(x,{to:r.path||"#",className:`\r
                  group\r
                  relative\r
                  flex flex-col items-center justify-center\r
                  p-4 md:p-5\r
                  rounded-2xl\r
                  bg-gradient-to-b from-white to-[#f4f9ff]\r
                  border border-[#e6eef7]\r
                  transition-all duration-300\r
                  hover:-translate-y-1\r
                  hover:shadow-[0_15px_40px_rgba(30,115,188,0.15)]\r
                `,children:[e.jsxs("div",{className:"relative mb-3",children:[e.jsx("div",{className:"absolute inset-0 rounded-full bg-[#1e73bc]/20 blur-xl opacity-0 group-hover:opacity-100 transition"}),e.jsx("div",{className:`\r
                    relative\r
                    w-14 h-14 md:w-16 md:h-16\r
                    rounded-full\r
                    bg-gradient-to-br from-[#1e73bc] to-[#155a96]\r
                    flex items-center justify-center\r
                    shadow-md\r
                    group-hover:scale-110\r
                    transition\r
                  `,children:r.image?e.jsx("img",{src:r.image,alt:r.name,className:"w-7 h-7 md:w-8 md:h-8 object-contain"}):e.jsx("span",{className:"text-white font-bold",children:r.name[0]})})]}),e.jsx("p",{className:`\r
                  text-xs md:text-sm\r
                  font-medium\r
                  text-gray-800\r
                  text-center\r
                  group-hover:text-[#1e73bc]\r
                  transition\r
                `,children:r.name}),e.jsx("div",{className:`\r
                  absolute bottom-0 left-0 right-0 h-[2px]\r
                  bg-[#1e73bc]\r
                  scale-x-0 group-hover:scale-x-100\r
                  transition-transform duration-300 origin-left\r
                `})]},r.name))}),a.length>5&&e.jsx("div",{className:"flex justify-center mt-6",children:e.jsx("button",{onClick:()=>d(!i),className:`\r
                  px-5 py-2\r
                  rounded-full\r
                  border border-[#1e73bc]\r
                  text-[#1e73bc]\r
                  text-sm font-medium\r
                  hover:bg-[#1e73bc]\r
                  hover:text-white\r
                  transition\r
                `,children:i?"Show Less ↑":"See More ↓"})})]})]})})},g=s.lazy(()=>o(()=>import("./Banner.BPYpjpBn.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),b=s.lazy(()=>o(()=>import("./Product.BiTTAHm0.js"),__vite__mapDeps([7,1,2,8,9,10,11,12,13,14,4,15,16,17]))),u=s.lazy(()=>o(()=>import("./Testimonimal.Bb83lV2m.js"),__vite__mapDeps([18,1,2]))),R=()=>e.jsxs("div",{className:"flex flex-col w-full min-h-screen bg-white gap-2",children:[e.jsx(s.Suspense,{fallback:e.jsx("div",{className:"h-[280px] bg-gray-100 shimmer rounded-md mx-8"}),children:e.jsx("div",{className:"mx-auto sm:px-8 w-full",children:e.jsx(g,{})})}),e.jsx(s.Suspense,{fallback:e.jsx("div",{className:"flex space-x-4 px-8",children:Array.from({length:4}).map((n,t)=>e.jsx("div",{className:"w-[300px]",children:e.jsx(l,{})},t))}),children:e.jsx(f,{})}),e.jsx(s.Suspense,{fallback:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8",children:Array.from({length:8}).map((n,t)=>e.jsx(l,{},t))}),children:e.jsx(p,{})}),e.jsx(s.Suspense,{fallback:e.jsx("div",{className:"flex space-x-4 px-8",children:Array.from({length:4}).map((n,t)=>e.jsx("div",{className:"w-[300px]",children:e.jsx(l,{})},t))}),children:e.jsx("section",{className:"px-4 md:px-8",children:e.jsxs("div",{className:"relative rounded-2xl bg-[#f1f6fb] border border-[#e0ecf7] overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 opacity-30 pointer-events-none",children:e.jsx("div",{className:"w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(30,115,188,0.08),transparent_40%)]"})}),e.jsxs("div",{className:"flex flex-col lg:flex-row",children:[e.jsxs("div",{className:"lg:w-[25%] p-6 md:p-8 flex flex-col justify-center relative z-10",children:[e.jsx("p",{className:"text-xs text-[#1e73bc] font-semibold uppercase tracking-wider mb-2",children:"Continue Shopping"}),e.jsx("h2",{className:"text-xl md:text-2xl font-semibold text-gray-800 leading-snug",children:"Recently Viewed"}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Pick up where you left off and explore more."}),e.jsx("button",{className:"mt-5 w-fit px-4 py-2 rounded-lg border border-[#1e73bc] text-[#1e73bc] text-sm font-medium hover:bg-[#1e73bc] hover:text-white transition",children:"View History →"})]}),e.jsx("div",{className:"lg:w-[75%] p-4 md:p-6",children:e.jsx(b,{horizontal:!0,title:"",productType:"recent_look"})})]})]})})}),e.jsx(s.Suspense,{fallback:e.jsx("div",{className:"h-[200px] bg-gray-100 shimmer rounded-md mx-8"}),children:e.jsx(u,{})})]});export{R as default};
