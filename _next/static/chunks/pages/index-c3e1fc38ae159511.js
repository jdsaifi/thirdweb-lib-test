(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(42603)}])},42603:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return r}});var l=t(85893),i=t(40454),s=t(67294);t(70794);var u=t(55678);t(71399);var r=!0;e.default=n=>{let e=[1,56,5],t=(0,i.eC)(),{data:r,isLoading:a}=(0,i.KQd)(),c=(0,i.AbE)(),[o,d]=s.useState(0),h=async()=>{try{let e=await (null==t?void 0:t.wallet.transfer(n.toWalletAddress,o.toString()));(null==e?void 0:e.receipt.status)==1?u.Am.success("Payment success"):u.Am.error("Payment failed")}catch(n){console.log(n),u.Am.error(null==n?void 0:n.message)}finally{d(0)}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.RZ8,{}),e.includes((null==c?void 0:c.chainId)||0)?null:(0,l.jsx)("div",{style:{marginTop:"10px",fontWeight:"700"},children:"Invalid Chain"}),!a&&e.includes((null==c?void 0:c.chainId)||0)?(0,l.jsxs)("div",{style:{marginTop:"20px"},children:[(0,l.jsx)("div",{children:(0,l.jsxs)("strong",{children:["Enter ",null==c?void 0:c.nativeCurrency.symbol," Amount"]})}),(0,l.jsx)("input",{type:"number",value:o,onChange:n=>{d(n.target.value)},className:"amount",min:0}),(null==c?void 0:c.chainId)===56?(0,l.jsx)("div",{children:(0,l.jsx)("button",{onClick:h,className:"button-83",children:"Buy with BNB"})}):(0,l.jsx)("div",{children:(0,l.jsx)("button",{onClick:h,className:"button-83",children:"Buy with ETH"})})]}):null,(0,l.jsx)(u.Ix,{})]})}}},function(n){n.O(0,[9007,9774,2888,179],function(){return n(n.s=48312)}),_N_E=n.O()}]);