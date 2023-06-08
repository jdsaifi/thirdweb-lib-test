"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4552],{80450:function(t,r,e){e.d(r,{S:function(){return n}});var a=e(17249),i=e(11190);class n{get chainId(){return this._chainId}constructor(t,r,e){(0,a._)(this,"contractWrapper",void 0),(0,a._)(this,"storage",void 0),(0,a._)(this,"erc721",void 0),(0,a._)(this,"_chainId",void 0),(0,a._)(this,"transfer",(0,i.dq)(async(t,r)=>this.erc721.transfer.prepare(t,r))),(0,a._)(this,"setApprovalForAll",(0,i.dq)(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r))),(0,a._)(this,"setApprovalForToken",(0,i.dq)(async(t,r)=>i.aS.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await (0,i.cF)(t),r]}))),this.contractWrapper=t,this.storage=r,this.erc721=new i.ar(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t){return t&&(t=await (0,i.cF)(t)),this.erc721.getOwned(t)}async getOwnedTokenIds(t){return t&&(t=await (0,i.cF)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}}},94552:function(t,r,e){e.r(r),e.d(r,{SignatureDrop:function(){return h}});var a=e(17249),i=e(11190),n=e(80450),s=e(24486),c=e(2593),o=e(9279);e(13550),e(71770),e(54098),e(2162),e(64063),e(62822);class h extends n.S{constructor(t,r,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.dx(t,r,c,n);super(p,e,o),(0,a._)(this,"abi",void 0),(0,a._)(this,"owner",void 0),(0,a._)(this,"encoder",void 0),(0,a._)(this,"estimator",void 0),(0,a._)(this,"metadata",void 0),(0,a._)(this,"app",void 0),(0,a._)(this,"sales",void 0),(0,a._)(this,"platformFees",void 0),(0,a._)(this,"events",void 0),(0,a._)(this,"roles",void 0),(0,a._)(this,"interceptor",void 0),(0,a._)(this,"royalties",void 0),(0,a._)(this,"claimConditions",void 0),(0,a._)(this,"revealer",void 0),(0,a._)(this,"signature",void 0),(0,a._)(this,"checkout",void 0),(0,a._)(this,"createBatch",(0,i.dq)(async(t,r)=>this.erc721.lazyMint.prepare(t,r))),(0,a._)(this,"claimTo",(0,i.dq)(async(t,r,e)=>this.erc721.claimTo.prepare(t,r,e))),(0,a._)(this,"claim",(0,i.dq)(async(t,r)=>this.erc721.claim.prepare(t,r))),(0,a._)(this,"burn",(0,i.dq)(async t=>this.erc721.burn.prepare(t))),this.abi=i.e.parse(c||[]),this.metadata=new i.ad(this.contractWrapper,i.dK,this.storage),this.app=new i.aY(this.contractWrapper,this.metadata,this.storage),this.roles=new i.ae(this.contractWrapper,h.contractRoles),this.royalties=new i.af(this.contractWrapper,this.metadata),this.sales=new i.ag(this.contractWrapper),this.encoder=new i.ac(this.contractWrapper),this.estimator=new i.aM(this.contractWrapper),this.events=new i.aN(this.contractWrapper),this.platformFees=new i.aP(this.contractWrapper),this.interceptor=new i.aO(this.contractWrapper),this.claimConditions=new i.ai(this.contractWrapper,this.metadata,this.storage),this.signature=new i.aA(this.contractWrapper,this.storage),this.revealer=new i.ah(this.contractWrapper,this.storage,i.dL.name,()=>this.erc721.nextTokenIdToMint()),this.signature=new i.aA(this.contractWrapper,this.storage),this.owner=new i.aR(this.contractWrapper),this.checkout=new s.a(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async totalSupply(){let t=await this.totalClaimedSupply(),r=await this.totalUnclaimedSupply();return t.add(r)}async getAllClaimed(t){let r=c.O$.from(t?.start||0).toNumber(),e=c.O$.from(t?.count||a.c).toNumber(),i=Math.min((await this.totalClaimedSupply()).toNumber(),r+e);return await Promise.all(Array.from(Array(i).keys()).map(t=>this.get(t.toString())))}async getAllUnclaimed(t){let r=c.O$.from(t?.start||0).toNumber(),e=c.O$.from(t?.count||a.c).toNumber(),i=c.O$.from(Math.max((await this.totalClaimedSupply()).toNumber(),r)),n=c.O$.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(),i.toNumber()+e));return await Promise.all(Array.from(Array(n.sub(i).toNumber()).keys()).map(t=>this.erc721.getTokenMetadata(i.add(t).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){let t=await this.contractWrapper.readContract.hasRole((0,i.bB)("transfer"),o.d);return!t}async getClaimTransaction(t,r,e){return this.erc721.getClaimTransaction(t,r,e)}async prepare(t,r,e){return i.aS.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}(0,a._)(h,"contractRoles",["admin","minter","transfer"])},24486:function(t,r,e){e.d(r,{a:function(){return d}});var a=e(17249),i=e(11190),n=e(38776);let s="https://paper.xyz/api/2022-08-12/platform/thirdweb",c={[i.cR.Mainnet]:"Ethereum",[i.cR.Goerli]:"Goerli",[i.cR.Polygon]:"Polygon",[i.cR.Mumbai]:"Mumbai",[i.cR.Avalanche]:"Avalanche"};async function o(t,r){let e=((0,n.Z)(r in c,`chainId not supported by paper: ${r}`),c[r]),a=await fetch(`${s}/register-contract?contractAddress=${t}&chain=${e}`),i=await a.json();return(0,n.Z)(i.result.id,"Contract is not registered with paper"),i.result.id}let h={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};async function p(t,r){let e=await fetch(`${s}/checkout-link-intent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:t,...h,...r,metadata:{...r.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!r.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})}),a=await e.json();return(0,n.Z)(a.checkoutLinkIntentUrl,"Failed to create checkout link intent"),a.checkoutLinkIntentUrl}class d{constructor(t){(0,a._)(this,"contractWrapper",void 0),this.contractWrapper=t}async getCheckoutId(){return o(this.contractWrapper.readContract.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!await this.getCheckoutId()}catch(t){return!1}}async createLinkIntent(t){return await p(await this.getCheckoutId(),t)}}}}]);