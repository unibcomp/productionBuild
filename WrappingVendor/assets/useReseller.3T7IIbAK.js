import{u as s,a as t}from"./index.saRe6un4.js";const l=(e,r)=>s({queryKey:["reseller",e,r],queryFn:async()=>(await t.get(`/sellerList?pageNumber=${e}&pageSize=${r}`)).data});export{l as u};
