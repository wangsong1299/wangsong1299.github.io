(this["webpackJsonpbumper-web"]=this["webpackJsonpbumper-web"]||[]).push([[0],{1:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return d}));var a=n(191),r=n(4),c=n(6),s=function(){function t(){Object(r.a)(this,t),this._eventMap=void 0,this._id=void 0,this._eventMap=new Map,this._id=0}return Object(c.a)(t,[{key:"listen",value:function(t,e,n){return this.createEvent({name:t,callback:e,once:!1},n)}},{key:"remove",value:function(t,e){if(e){var n=this._eventMap.get(t);n&&this._removeEventByFn(n,e)}else this._eventMap.delete(t)}},{key:"once",value:function(t,e,n){return this.createEvent({name:t,callback:e,once:!0},n)}},{key:"emit",value:function(t){for(var e=this,n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];var c=this._eventMap.get(t);return c?(c.forEach((function(t){var n=t.id,r=t.callback,s=t.once,u=t.ctx;r&&r.apply(u,a),s&&e._removeEventById(c,n)})),this):this}},{key:"createEvent",value:function(t,e){var n=this,a=t.name,r=t.callback,c=t.once,s=this._eventMap.get(a)||[],u=++this._id;return s.push({id:u,once:c,callback:r,ctx:e}),this._eventMap.set(a,s),function(){s&&n._removeEventById(s,u)}}},{key:"_removeEventById",value:function(t,e){for(var n=0;n<t.length;n++){if(t[n].id===e){t.splice(n,1);break}}}},{key:"_removeEventByFn",value:function(t,e){for(var n=0;n<t.length;n++){if(t[n].callback===e){t.splice(n,1);break}}}}]),t}(),u=n(334),o=new(function(){function t(){Object(r.a)(this,t)}return Object(c.a)(t,[{key:"info",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.callNative("info",e)}},{key:"warn",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.callNative("warn",e)}},{key:"error",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.callNative("error",e)}},{key:"assert",value:function(t,e){t&&this.error(e)}},{key:"callNative",value:function(t){for(var e,n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];(e=console)[t].apply(e,a)}}]),t}()),i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(this,t),this._options=void 0,this.processors=void 0,this._processArgsQueue=void 0,this.processors=new Map,this._options=e,this._processArgsQueue={}}return Object(c.a)(t,[{key:"define",value:function(t,e){if(t&&e&&e.apply){if(this.processors.get(t))this._options.debug&&o.info("ranta-adapter: process: ".concat(t," \u5df2\u7ecf\u88ab\u5b9a\u4e49\uff0c\u8bf7\u52ff\u91cd\u590d\u5b9a\u4e49"));else if(this.processors.set(t,{key:t,handler:e}),this._processArgsQueue[t]){for(;this._processArgsQueue[t].length>0;){var n=this._processArgsQueue[t].pop();n&&this.invoke.apply(this,[t].concat(Object(u.a)(n.args)))}delete this._processArgsQueue[t]}}else this._options.debug&&o.info("ranta-adapter: process: \u7f3a\u5c11 key \u6216\u8005 handler")}},{key:"invoke",value:function(t){for(var e=this.processors.get(t),n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return e?e.handler.apply(null,a):(this._processArgsQueue[t]||(this._processArgsQueue[t]=[]),void this._processArgsQueue[t].push({args:a}))}}]),t}(),p=function(){function t(){Object(r.a)(this,t),this.watchers=void 0,this.__notifyTimes=void 0,this._id=void 0,this.watchers=new Map,this.__notifyTimes={},this._id=0}return Object(c.a)(t,[{key:"watch",value:function(t,e,n){var a=this;if(t&&e){this.__notifyTimes[t]>0&&e.call(n,n.data[t]);var r=++this._id,c=this.watchers.get(t)||{key:t,unWatch:function(){a._unWatchAll(t)},noticeHandler:new Map};return c.noticeHandler.set(r,{id:r,handler:e}),this.watchers.set(t,c),this._unWatch(t,r)}o.info("ranta-adapter: watch: \u7f3a\u5c11 watch name \u6216\u8005 \u56de\u8c03\u51fd\u6570 callback")}},{key:"unWatch",value:function(t){this._unWatchAll(t)}},{key:"_unWatch",value:function(t,e){var n=this;return function(){var a=n.watchers.get(t);a&&a.noticeHandler.delete(e)}}},{key:"_unWatchAll",value:function(t){var e=this.watchers.get(t);e&&(e.noticeHandler.clear(),e.unWatch=function(){},this.watchers.set(t,e)),this.watchers.delete(t)}},{key:"notify",value:function(t,e,n){void 0===this.__notifyTimes[t]?this.__notifyTimes[t]=1:this.__notifyTimes[t]+=1;var a=this.watchers.get(t);a&&a.noticeHandler.forEach((function(t){t.handler.apply(n,e)}))}}]),t}(),f=function(t,e,n){return t?(n._$unmapFns||(n._$unmapFns=[]),Array.isArray(t)?t.forEach((function(t){n._$unmapFns.push(e.watch(t,(function(e){n[t]=e})))})):Object.keys(t).forEach((function(a){n._$unmapFns.push(e.watch(a,(function(e){n[a]=t[a](e)})))})),n._$unmapFns):[]},d=function(t){if(t&&t._$unmapFns)for(;t._$unmapFns.length>0;){var e=t._$unmapFns.pop();e&&e()}},l=new(function(){function t(e){Object(r.a)(this,t),this._options=void 0,this._extensionData=void 0,this._watchers=void 0,this.ctx=void 0,this.ctx={data:{},event:new s,process:new i(e),watch:function(){},query:{}},this.init(e)}return Object(c.a)(t,[{key:"init",value:function(t){this._initOptions(t),this._initWatchData(),this._initProxyData()}},{key:"getCtx",value:function(){return this.ctx}},{key:"bindCtx",value:function(t,e){this.ctx.query=Object(a.a)(Object(a.a)({},this.ctx.query),e),t.ctx=this.ctx}},{key:"_initOptions",value:function(t){var e=t.extensions.reduce((function(t,e){return t[e.name]=e,t}),{});this._options={extensions:e,debug:t.debug},this._extensionData=Object.values(e).reduce((function(t,e){return e.data?(Object.keys(e.data).forEach((function(e){t[e]=void 0})),t):t}),{})}},{key:"_initProxyData",value:function(){var t=this.ctx,e=this._watchers;this.ctx.data=new Proxy(this._extensionData,{set:function(n,a,r,c){var s=n[a];return e.notify(a,[r,s],t),Reflect.set(n,a,r,c)},get:function(t,e,n){return Reflect.get(t,e,n)}})}},{key:"_initWatchData",value:function(){var t=this,e=new p;this._watchers=e,this.ctx.watch=function(n,a){return n in t._extensionData?e.watch(n,a,t.ctx):(t._options.debug&&o.warn("ranta-adapter: watch-data ".concat(n," not in extensions ...")),function(){})}}}]),t}())({debug:!0,extensions:[{name:"default",data:{web3:1,chainProvider:1,chainAccount:1,chainBalance:1,showLoading:1,loadingMessage:1}},{name:"contract",data:{GofContract:1,GofPoolContract:1,BumperZapContract:1,BTokenContract:1,LpContract:1,stakeStatus:1,claimStatus:1,withdrawStatus:1,ANOPrice:1,ANOTotalStake:1,approveStatus:1}},{name:"assets",data:{BtcbAmt:1,WbnbAmt:1,brAmt:1,bcAmt:1,BumperAmt:1,lpAmt:1,stakeLp:1,reward:1,reservePaired:0,ANOBalance:1,ANOStaked:1,ANOEarned:1,ANOProfit:1,ANOtotalSupply:1,stakeStatus:1,approveStatus:1,approveWbnbStatus:1,pool1APY:0}},{name:"prices",data:{btcbPrice:1,bcPrice:1,bumperPrice:1}},{name:"apy",data:{btcbApy:1}}]});e.a=l.getCtx()},187:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var a=n(188),r=n.n(a),c=n(120),s=n.n(c),u=n(26),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,n=void 0===e?"":e,a=t.content,c=void 0===a?"":a,o=t.onOk,i=void 0===o?function(){}:o;r.a.confirm({title:n,icon:Object(u.jsx)(s.a,{}),content:c,onOk:i,onCancel:function(){console.log("Cancel")},getContainer:document.getElementById("modal")})},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,n=void 0===e?"":e,a=t.content,c=void 0===a?"":a;r.a.confirm({title:n,icon:Object(u.jsx)(s.a,{}),content:c,getContainer:document.getElementById("modal")})}},23:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return u}));var a=window.BigInt(Math.pow(10,18)),r=(window.BigInt(Math.pow(10,8)),function(t){var e=window.BigInt(t);return window.Number(100000n*e/a)/1e5}),c=function(t){return window.BigInt(t*Math.pow(10,18))},s=n(1),u=function(t){return s.a.data.chainAccount?!(t<=0)||(alert("num must more than 0"),!1):(alert("please connect the wallet"),!1)}},32:function(t,e,n){"use strict";e.a={BaseApi:"",scanUrl:"https://testnet.bscscan.com/",whitepaperLink:"http://www.anobor.com/",githubLink:"",twitterLink:"https://twitter.com/Anobor_Anobor",mediumLink:"",telegramLink:"https://t.me/AnoborFans",docLink:"",suchiSwapPairUrl:"https://trade.bscswap.com/#/swap",CONTRACT_ADDRESS:{BTCB:"0x6ce8dA28E2f864420840cF74474eFf5fD80E65B8",WBNB:"0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",BUMPER:"0xCce7696a73f0463BDC6f438bEB2721Be28CAd1Df",BRTOKEN:"0x51496869b8ca5d2e1f841982afbe9a48145f5e46",BCTOKEN:"0x8a8dc833563ca757c13e51c284bb7aebc79a21c8",LP:"0x92b8c83bEEAD3925f10901E5dED741Df243706f0",BumperCore:"0x5B3c58529393B398FCE090E637c31fCD392d8306",BumperZap:"0xa2045390EB731d1c9a4010F08B3e6c0c94d396ca",SwapRouter:"0xd954551853f55deb4ae31407c423e67b1621424a",BumperFarm:"0x3a75BcC6B2c330B91e478C7AA4e3D0b199d04155"},PRICE_ADDRESS:{BTCB2WBNB:"0xce4c703611e906156d16363c533e7f38191466f2",BCTOKEN2WBNB:"0x92b8c83beead3925f10901e5ded741df243706f0",WBNB2BUMPER:"0x134a2a92f6611cefb68a39dfb13e0b5a88150535"},REWARD_PER_DAY:500}},347:function(t,e,n){},358:function(t,e){},378:function(t,e){},380:function(t,e){},507:function(t,e){},509:function(t,e){},541:function(t,e){},546:function(t,e){},548:function(t,e){},555:function(t,e){},568:function(t,e){},733:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(40),s=n.n(c),u=(n(347),n(326)),o=n(28),i=n(1),p=n(3),f=n.n(p),d=n(13),l=n(330),h=n.n(l),v={1:"Ethereum Mainnet",2:"Morden Testnet (deprecated)",3:"Ropsten Testnet",4:"Rinkeby Testnet",42:"Kovan Testnet"},b=n(187),m=n(32),x=n(23),w=Math.floor(new Date("2022-01-01").getTime()/1e3),k="1000000000000000000",g=m.a.CONTRACT_ADDRESS,O=g.BTCB,j=g.WBNB,y=g.BumperCore,A=g.BumperZap,B=g.SwapRouter,C=g.BRTOKEN,_=g.BCTOKEN,P=function(){var t=Object(d.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m.a.BaseApi,"/ERC20.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(){var t=Object(d.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m.a.BaseApi,"/BumperCore.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(){var t=Object(d.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m.a.BaseApi,"/BumperZap.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(d.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m.a.BaseApi,"/bToken.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=function(){var t=Object(d.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m.a.BaseApi,"/BonusRewards.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=Object(d.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m.a.BaseApi,"/IRouter.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),T=function(){var t=Object(d.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m.a.BaseApi,"/lp.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=Object(d.a)(f.a.mark((function t(){var e,n,a,r,c,s,u,o,p,d,l,h,v,b,m,x;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=i.a.data.chainProvider){t.next=4;break}return console.error("chainProvider not inited"),t.abrupt("return");case 4:return n=window.TruffleContract,t.next=7,P();case 7:return a=t.sent,(r=n(a)).setProvider(e),i.a.data.Erc20Contract=r,t.next=13,S();case 13:return c=t.sent,(s=n(c)).setProvider(e),i.a.data.BTokenContract=s,t.next=19,E();case 19:return u=t.sent,(o=n(u)).setProvider(e),i.a.data.BumperCoreContract=o,t.next=25,L();case 25:return p=t.sent,(d=n(p)).setProvider(e),i.a.data.BumperZapContract=d,t.next=31,I();case 31:return l=t.sent,(h=n(l)).setProvider(e),i.a.data.BumperFarmContract=h,t.next=37,N();case 37:return v=t.sent,(b=n(v)).setProvider(e),i.a.data.SwapRouterContract=b,t.next=43,T();case 43:m=t.sent,(x=n(m)).setProvider(e),i.a.data.LpContract=x;case 47:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.a.data.Erc20Contract,t.next=3,n.at(O);case 3:return a=t.sent,t.next=6,a.balanceOf(e);case 6:return r=t.sent,c=Object(x.c)(r),console.log("btcb",c),i.a.data.BtcbAmt=c,t.abrupt("return",c);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.a.data.Erc20Contract,t.next=3,n.at(j);case 3:return a=t.sent,t.next=6,a.balanceOf(e);case 6:return r=t.sent,c=Object(x.c)(r),console.log("wbnb",c),i.a.data.WbnbAmt=c,t.abrupt("return",c);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r,c,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.a.data.BTokenContract,t.next=3,n.at(C);case 3:return c=t.sent,t.next=6,c.balanceOf(e);case 6:return a=t.sent,r=Object(x.c)(a),i.a.data.brAmt=r,t.next=11,n.at(_);case 11:return s=t.sent,t.next=14,s.balanceOf(e);case 14:return a=t.sent,r=Object(x.c)(a),i.a.data.bcAmt=r,console.log("brtoken",i.a.data.brAmt,"bctoken",i.a.data.bcAmt),t.abrupt("return");case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=function(){var t=Object(d.a)(f.a.mark((function t(){var e,n,a,r,c,s,u,o,p=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=p.length>0&&void 0!==p[0]?p[0]:O,n=i.a.data,a=n.Erc20Contract,r=n.chainAccount,t.next=4,a.at(e);case 4:return c=t.sent,s={},t.next=8,c.allowance(r,A);case 8:return u=t.sent,o=Object(x.c)(u),i.a.data.approveBtcbInZapStatus=o>0,s.approveBtcbInZap={num:o},t.next=14,c.allowance(r,y);case 14:u=t.sent,o=Object(x.c)(u),i.a.data.approveBtcbInCoreStatus=o>0,s.approveBtcbInCore={num:o},console.log("approveBtcb:","core",s.approveBtcbInCore.num,"zap",s.approveBtcbInZap.num);case 19:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=function(){var t=Object(d.a)(f.a.mark((function t(){var e,n,a,r,c,s,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.data,n=e.Erc20Contract,a=e.chainAccount,t.next=3,n.at(j);case 3:return r=t.sent,c={},t.next=7,r.allowance(a,y);case 7:return s=t.sent,u=Object(x.c)(s),i.a.data.approveWbnbStatus=u>0,c.approveWbnbInCore={num:u},t.next=13,r.allowance(a,B);case 13:s=t.sent,u=Object(x.c)(s),i.a.data.approveWbnbInSwapStatus=u>0,c.approveWbnbInSwap={num:u},console.log("approveWbnb:","core",c.approveWbnbInSwap.num,"swap",c.approveWbnbInSwap.num);case 18:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Z=function(){var t=Object(d.a)(f.a.mark((function t(e,n){var a,r,c,s,u,o,p=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=p.length>2&&void 0!==p[2]?p[2]:O,r=i.a.data,c=r.Erc20Contract,s=r.chainAccount,t.next=4,c.at(a);case 4:return u=t.sent,t.prev=5,t.next=8,u.approve(n,Object(x.b)(e),{from:s});case 8:return o=t.sent,t.abrupt("return",o);case 12:t.prev=12,t.t0=t.catch(5),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}(),K=function(){var t=Object(d.a)(f.a.mark((function t(e,n){var a,r,c,s,u,o,p=arguments;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=p.length>2&&void 0!==p[2]?p[2]:j,r=i.a.data,c=r.Erc20Contract,s=r.chainAccount,t.next=4,c.at(a);case 4:return u=t.sent,t.prev=5,t.next=8,u.approve(n,Object(x.b)(e),{from:s});case 8:return o=t.sent,t.abrupt("return",o);case 12:t.prev=12,t.t0=t.catch(5),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}(),Q=function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r,c,s,u,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(x.b)(e),a=i.a.data,r=a.BumperZapContract,c=a.chainAccount,t.next=4,r.at(A);case 4:return s=t.sent,t.prev=5,u=[O,j,w,k,n,"0",[_,j],w],t.next=9,s.depositAndSwapToPaired.apply(s,u.concat([{from:c}]));case 9:return o=t.sent,t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(5),i.a.event.emit("hideLoading");case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e){return t.apply(this,arguments)}}(),$=function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r,c,s,u,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(x.b)(e),a=i.a.data,r=a.SwapRouterContract,c=a.chainAccount,t.next=4,r.at(B);case 4:return s=t.sent,t.prev=5,u=[n,0,[j,_],c,w],t.next=9,s.swapExactTokensForTokens.apply(s,u.concat([{from:c}]));case 9:return o=t.sent,t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(5),i.a.event.emit("hideLoading");case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e){return t.apply(this,arguments)}}(),q=function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r,c,s,u,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(x.b)(e),a=i.a.data,r=a.BumperCoreContract,c=a.chainAccount,t.next=4,r.at(y);case 4:return s=t.sent,t.prev=5,u=[O,j,w,k,n],t.next=9,s.deposit.apply(s,u.concat([{from:c}]));case 9:return o=t.sent,t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(5),i.a.event.emit("hideLoading");case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e){return t.apply(this,arguments)}}(),z=function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r,c,s,u,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(x.b)(e),a=i.a.data,r=a.BumperCoreContract,c=a.chainAccount,t.next=4,r.at(y);case 4:return s=t.sent,t.prev=5,u=[O,j,w,k,n],t.next=9,s.mmDeposit.apply(s,u.concat([{from:c}]));case 9:return o=t.sent,t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(5),i.a.event.emit("hideLoading");case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r,c,s,u,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(x.b)(e),a=i.a.data,r=a.BumperCoreContract,c=a.chainAccount,t.next=4,r.at(y);case 4:return s=t.sent,t.prev=5,u=[O,j,w,k,n],t.next=9,s.repay.apply(s,u.concat([{from:c}]));case 9:return o=t.sent,t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(5),i.a.event.emit("hideLoading");case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r,c,s,u,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(x.b)(e),a=i.a.data,r=a.BumperCoreContract,c=a.chainAccount,t.next=4,r.at(y);case 4:return s=t.sent,t.prev=5,u=[O,j,w,k,n],t.next=9,s.redeem.apply(s,u.concat([{from:c}]));case 9:return o=t.sent,t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(5),i.a.event.emit("hideLoading");case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e){return t.apply(this,arguments)}}(),V=m.a.CONTRACT_ADDRESS,Y=V.LP,J=V.BumperFarm,X=V.BUMPER,tt=function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.a.data.Erc20Contract,t.next=3,n.at(X);case 3:return a=t.sent,t.next=6,a.balanceOf(e);case 6:return r=t.sent,c=Object(x.c)(r),console.log("bumper",c),i.a.data.BumperAmt=c,t.abrupt("return");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),et=function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.a.data.Erc20Contract,t.next=3,n.at(Y);case 3:return a=t.sent,t.next=6,a.balanceOf(e);case 6:return r=t.sent,c=Object(x.c)(r),console.log("lp",c),i.a.data.lpAmt=c,t.abrupt("return");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),nt=function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r,c,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.a.data.BumperFarmContract,t.next=3,n.at(J);case 3:return a=t.sent,t.next=6,a.getUser(Y,e);case 6:return r=t.sent,c=r[0][0],s=r[1].length?r[1][0]:"0",i.a.data.stakeLp=Object(x.c)(c),i.a.data.reward=Object(x.c)(s),console.log("stakeLp",i.a.data.stakeLp,"reward",i.a.data.reward),t.abrupt("return");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),at=function(){var t=Object(d.a)(f.a.mark((function t(){var e,n,a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.data.Erc20Contract,t.next=3,e.at(Y);case 3:return n=t.sent,t.next=6,n.totalSupply();case 6:return a=t.sent,r=Object(x.c)(a),console.log("lp totalSupply",r),i.a.data.lpTotalSupply=r,t.abrupt("return");case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),rt=function(){var t=Object(d.a)(f.a.mark((function t(){var e,n,a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.data.LpContract,t.next=3,e.at(Y);case 3:return n=t.sent,t.next=6,n.getReserves();case 6:return a=t.sent,r=Object(x.c)(a._reserve1),i.a.data.reservePaired=.1*r,t.abrupt("return");case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ct=function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r,c,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.a.data,a=n.Erc20Contract,r=n.chainAccount,t.next=3,a.at(Y);case 3:return c=t.sent,t.prev=4,t.next=7,c.approve(J,Object(x.b)(e),{from:r});case 7:return s=t.sent,t.abrupt("return",s);case 11:t.prev=11,t.t0=t.catch(4),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e){return t.apply(this,arguments)}}(),st=function(){var t=Object(d.a)(f.a.mark((function t(){var e,n,a,r,c,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.data,n=e.Erc20Contract,a=e.chainAccount,t.next=3,n.at(Y);case 3:return r=t.sent,t.next=6,r.allowance(a,J);case 6:c=t.sent,s=Object(x.c)(c),console.log(s,"approveLpNum"),i.a.data.stakeStatus=s>0;case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ut=function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r,c,s,u,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(x.b)(e),a=i.a.data,r=a.BumperFarmContract,c=a.chainAccount,t.next=4,r.at(J);case 4:return s=t.sent,t.prev=5,u=[Y,n],t.next=9,s.deposit.apply(s,u.concat([{from:c}]));case 9:return o=t.sent,t.next=12,et(c);case 12:return t.next=14,nt(c);case 14:return t.abrupt("return",o);case 17:t.prev=17,t.t0=t.catch(5);case 19:case"end":return t.stop()}}),t,null,[[5,17]])})));return function(e){return t.apply(this,arguments)}}(),ot=function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r,c,s,u,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(x.b)(e),a=i.a.data,r=a.BumperFarmContract,c=a.chainAccount,t.next=4,r.at(J);case 4:return s=t.sent,t.prev=5,u=[Y,n],t.next=9,s.withdraw.apply(s,u.concat([{from:c}]));case 9:return o=t.sent,t.next=12,et(c);case 12:return t.next=14,nt(c);case 14:return t.abrupt("return",o);case 17:t.prev=17,t.t0=t.catch(5);case 19:case"end":return t.stop()}}),t,null,[[5,17]])})));return function(e){return t.apply(this,arguments)}}(),it=function(){var t=Object(d.a)(f.a.mark((function t(){var e,n,a,r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.data,n=e.BumperFarmContract,a=e.chainAccount,t.next=3,n.at(J);case 3:return r=t.sent,t.prev=4,t.next=7,r.claimRewardsForPools([Y],{from:a});case 7:return c=t.sent,console.log(1),t.next=11,nt(a);case 11:return console.log(2),t.abrupt("return",c);case 15:t.prev=15,t.t0=t.catch(4);case 17:case"end":return t.stop()}}),t,null,[[4,15]])})));return function(){return t.apply(this,arguments)}}(),pt=m.a.PRICE_ADDRESS,ft=pt.BTCB2WBNB,dt=pt.BCTOKEN2WBNB,lt=pt.WBNB2BUMPER,ht=function(){var t=Object(d.a)(f.a.mark((function t(){var e,n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.data.LpContract,t.next=3,e.at(ft);case 3:return n=t.sent,t.next=6,n.getReserves();case 6:return a=t.sent,i.a.data.btcbPrice=Math.round(100*a._reserve1/a._reserve0)/100,console.log("btcbPrice",i.a.data.btcbPrice),t.abrupt("return");case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),vt=function(){var t=Object(d.a)(f.a.mark((function t(){var e,n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.data.LpContract,t.next=3,e.at(dt);case 3:return n=t.sent,t.next=6,n.getReserves();case 6:return a=t.sent,i.a.data.bcPrice=Math.round(100*a._reserve1/a._reserve0)/100,console.log("bcPrice",i.a.data.bcPrice),t.abrupt("return");case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),bt=function(){var t=Object(d.a)(f.a.mark((function t(){var e,n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.data.LpContract,t.next=3,e.at(lt);case 3:return n=t.sent,t.next=6,n.getReserves();case 6:return a=t.sent,i.a.data.bumperPrice=Math.round(100*a._reserve0/a._reserve1)/100,console.log("bumperPrice",i.a.data.bumperPrice),t.abrupt("return");case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),mt=m.a.REWARD_PER_DAY,xt=function(){var t=Object(d.a)(f.a.mark((function t(){var e,n,a,r,c,s,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.data,n=e.stakeLp,a=e.lpTotalSupply,r=e.bcPrice,c=e.bumperPrice,s=Math.round(100*mt*n/a)/100,u=s*c/((r+1)*n)*365,i.a.data.btcbApy=Math.round(100*u)/100,t.abrupt("return");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),wt=function(){var t=Object(d.a)(f.a.mark((function t(){var e,a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(1).then(n.t.bind(null,846,7)).then((function(t){return t.default}));case 2:return e=t.sent,t.next=5,e();case 5:if(!(a=t.sent)){t.next=19;break}if(a!==window.ethereum){t.next=16;break}return i.a.data.chainProvider=a,t.next=11,a.request({method:"net_version",params:[]});case 11:r=t.sent,console.log("current network is:",v[r]),i.a.data.web3=new h.a(a),t.next=17;break;case 16:Object(b.a)({title:"Please only use MetaMask!",content:"Do you have multiple wallets installed?",onOk:function(){window.location.href="https://metamask.io/download.html"}});case 17:t.next=20;break;case 19:Object(b.a)({title:"Please install MetaMask!",content:"You have not install MetaMask, jump link to install?",onOk:function(){window.location.href="https://metamask.io/download.html"}});case 20:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),kt=function(){var t=Object(d.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("updateAccount ......"),!e||!e.length){t.next=24;break}return n=e[0],i.a.data.chainAccount=n,t.next=6,D(n);case 6:return t.next=8,W(n);case 8:return t.next=10,M(n);case 10:return t.next=12,tt(n);case 12:return t.next=14,et(n);case 14:return t.next=16,nt(n);case 16:return t.next=18,F();case 18:return t.next=20,G();case 20:return t.next=22,st();case 22:t.next=25;break;case 24:i.a.data.chainAccount=0;case 25:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),gt=function(){var t=Object(d.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("updateSupply ......"),t.next=3,at();case 3:return t.next=5,rt();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Ot=function(){var t=Object(d.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("updatePrice ......"),t.next=3,ht();case 3:return t.next=5,vt();case 5:return t.next=7,bt();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),jt=function(){var t=Object(d.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("updateApy ......"),t.next=3,xt();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),yt=m.a.CONTRACT_ADDRESS,At=yt.BumperCore,Bt=yt.BumperZap,Ct=yt.SwapRouter;i.a.event.listen("showLoading",(function(t){i.a.data.showLoading=!0,i.a.data.loadingMessage=t})),i.a.event.listen("hideLoading",(function(t){i.a.data.showLoading=!1,i.a.data.loadingMessage=""})),i.a.event.listen("initEthereum",Object(d.a)(f.a.mark((function t(){var e,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.a.event.emit("showLoading","LOADING"),t.next=3,wt();case 3:return t.next=5,R();case 5:return t.next=7,gt();case 7:return t.next=9,Ot();case 9:if(!(e=i.a.data.chainProvider)){t.next=18;break}return t.next=13,e.request({method:"eth_accounts"});case 13:return n=t.sent,console.log(n,"account"),t.next=17,kt(n);case 17:i.a.event.emit("hideLoading");case 18:return t.next=20,jt();case 20:case"end":return t.stop()}}),t)})))),i.a.event.listen("connectWallet",Object(d.a)(f.a.mark((function t(){var e,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=i.a.data.chainProvider)){t.next=16;break}return n="",t.prev=3,t.next=6,e.request({method:"eth_requestAccounts"});case 6:return n=t.sent,i.a.event.emit("showLoading","LOADING"),t.next=10,kt(n);case 10:i.a.event.emit("hideLoading"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),4001===t.t0.code?console.log("Please connect to MetaMask."):console.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[3,13]])})))),i.a.event.listen("depositAndSwapToPaired",function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.num,e.token,!0===i.a.data.approveBtcbInZapStatus){t.next=12;break}return i.a.event.emit("showLoading","APPROVING"),t.next=5,Z(n,Bt);case 5:if(a=t.sent,i.a.data.approveBtcbInZapStatus=!0,a&&a.receipt.status){t.next=9;break}return t.abrupt("return");case 9:i.a.event.emit("hideLoading"),t.next=18;break;case 12:return i.a.event.emit("showLoading","DEPOSITING"),t.next=15,Q(n);case 15:r=t.sent,console.log("depositAndSwapToPaired",r),i.a.event.emit("hideLoading");case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i.a.event.listen("lend",function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.num,!0===i.a.data.approveWbnbInSwapStatus){t.next=12;break}return i.a.event.emit("showLoading","APPROVING"),t.next=5,K(n,Ct);case 5:if(a=t.sent,i.a.data.approveWbnbInSwapStatus=!0,a&&a.receipt.status){t.next=9;break}return t.abrupt("return");case 9:i.a.event.emit("hideLoading"),t.next=18;break;case 12:return i.a.event.emit("showLoading","LENDING"),t.next=15,$(n);case 15:t.sent,console.log("lend","result"),i.a.event.emit("hideLoading");case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i.a.event.listen("deposit",function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.num,e.token,!0===i.a.data.approveBtcbInCoreStatus){t.next=12;break}return i.a.event.emit("showLoading","APPROVING"),t.next=5,Z(n,At);case 5:if(a=t.sent,i.a.data.approveBtcbInCoreStatus=!0,a&&a.receipt.status){t.next=9;break}return t.abrupt("return");case 9:i.a.event.emit("hideLoading"),t.next=18;break;case 12:return i.a.event.emit("showLoading","DEPOSITING"),t.next=15,q(n);case 15:r=t.sent,console.log("deposit",r),i.a.event.emit("hideLoading");case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i.a.event.listen("mmDeposit",function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.num,e.token,!0===i.a.data.approveWbnbStatus){t.next=12;break}return i.a.event.emit("showLoading","APPROVING"),t.next=5,K(n,At);case 5:if(a=t.sent,i.a.data.approveWbnbStatus=!0,a&&a.receipt.status){t.next=9;break}return t.abrupt("return");case 9:i.a.event.emit("hideLoading"),t.next=18;break;case 12:return i.a.event.emit("showLoading","DEPOSITING"),t.next=15,z(n);case 15:r=t.sent,console.log("mmDeposit",r),i.a.event.emit("hideLoading");case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i.a.event.listen("repay",function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.num,e.token,!0===i.a.data.approveWbnbStatus){t.next=12;break}return i.a.event.emit("showLoading","APPROVING"),t.next=5,K(n,At);case 5:if(a=t.sent,i.a.data.approveWbnbStatus=!0,a&&a.receipt.status){t.next=9;break}return t.abrupt("return");case 9:i.a.event.emit("hideLoading"),t.next=18;break;case 12:return i.a.event.emit("showLoading","REPAYING"),t.next=15,U(n);case 15:r=t.sent,console.log("repay",r),i.a.event.emit("hideLoading");case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i.a.event.listen("redeem",function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.num,e.token,i.a.event.emit("showLoading","DEPOSITING"),t.next=4,H(n);case 4:a=t.sent,console.log("redeem",a),i.a.event.emit("hideLoading");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i.a.event.listen("stake",function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.num,!0===i.a.data.stakeStatus){t.next=12;break}return i.a.event.emit("showLoading","APPROVING ON STAKING"),t.next=5,ct(n);case 5:if(a=t.sent,i.a.data.stakeStatus=!0,a&&a.receipt.status){t.next=9;break}return t.abrupt("return");case 9:i.a.event.emit("hideLoading"),t.next=18;break;case 12:return i.a.event.emit("showLoading","STAKEING"),t.next=15,ut(n);case 15:r=t.sent,console.log("stake",r),i.a.event.emit("hideLoading");case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i.a.event.listen("withdraw",function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.num,i.a.event.emit("showLoading","WITHDRAWING"),t.next=4,ot(n);case 4:a=t.sent,console.log("withdraw",a),i.a.event.emit("hideLoading");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i.a.event.listen("claim",function(){var t=Object(d.a)(f.a.mark((function t(e){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.num,i.a.event.emit("showLoading","CLAIMING"),t.next=4,it(n);case 4:a=t.sent,console.log("claim",a),i.a.event.emit("hideLoading");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var _t=n(26),Pt=r.a.lazy((function(){return Promise.all([n.e(4),n.e(10)]).then(n.bind(null,849))})),Et=r.a.lazy((function(){return n.e(6).then(n.bind(null,842))})),Lt=r.a.lazy((function(){return Promise.all([n.e(5),n.e(8)]).then(n.bind(null,843))})),St=r.a.lazy((function(){return n.e(7).then(n.bind(null,844))})),It=r.a.lazy((function(){return n.e(11).then(n.bind(null,850))})),Nt=r.a.lazy((function(){return n.e(9).then(n.bind(null,845))})),Tt=function(){return Object(a.useEffect)((function(){i.a.event.emit("initEthereum")}),[]),Object(_t.jsxs)(u.a,{children:[Object(_t.jsx)(Pt,{}),Object(_t.jsx)("div",{className:"page-body",children:Object(_t.jsxs)(o.c,{children:[Object(_t.jsx)(o.a,{exact:!0,path:"/",children:Object(_t.jsx)(It,{})}),Object(_t.jsx)(o.a,{path:"/markets",children:Object(_t.jsx)(Lt,{})}),Object(_t.jsx)(o.a,{path:"/farms",children:Object(_t.jsx)(St,{})})]})}),Object(_t.jsx)(Et,{}),Object(_t.jsx)(Nt,{})]})},Rt=function(){return Object(_t.jsx)(_t.Fragment,{})},Dt=function(){return Object(_t.jsx)(a.Suspense,{fallback:Object(_t.jsx)(Rt,{}),children:Object(_t.jsx)(Tt,{})})},Wt=function(t){t&&t instanceof Function&&n.e(12).then(n.bind(null,847)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),c(t),s(t)}))};s.a.render(Object(_t.jsx)(Dt,{}),document.getElementById("root")),Wt()}},[[733,2,3]]]);
//# sourceMappingURL=main.88617151.chunk.js.map