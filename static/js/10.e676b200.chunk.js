(this["webpackJsonpbumper-web"]=this["webpackJsonpbumper-web"]||[]).push([[10],{778:function(A,e,a){},848:function(A,e,a){"use strict";a.r(e);var c=a(202),n=a(0),s=a(30),t=a(337),l=a(779),i=a.n(l),r=a(803),d=a.n(r),g=a(800),j=a.n(g),O=a(808),E=a.n(O),b=a(193),o=a(29),m=(a(778),a(2)),h=a(26),v={iconStyle:{fontSize:"15px",verticalAlign:"middle"},iconBigStyle:{fontSize:"32px",verticalAlign:"middle",color:"#fff"}},N=function(){var A=m.a.data.chainAccount;A?Object(b.b)({content:"Your wallet address is already connected:\n".concat(A)}):m.a.event.emit("connectWallet")},U=function(){return Object(h.jsxs)(i.a,{children:[Object(h.jsx)(i.a.Item,{children:Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:o.a.whitepaperLink,children:"whitepaper"})}),Object(h.jsx)(i.a.Item,{onClick:N,children:Object(h.jsx)("span",{children:"wallet"})})]})};e.default=function(){var A=Object(s.f)(),e=Object(n.useState)(""),a=Object(c.a)(e,2),l=a[0],i=a[1],r=Object(n.useState)(""),g=Object(c.a)(r,2),O=g[0],b=g[1],o=Object(n.useState)(0),u=Object(c.a)(o,2),B=u[0],x=u[1];return Object(n.useEffect)((function(){var e={};return Object(m.b)({chainAccount:function(e){console.log("chainAccount:",e),e?(i(e),A.replace("/markets")):A.replace("/")},theme:function(A){b(A)},bumperAmt:function(A){x(A)}},m.a,e),function(){Object(m.c)(e)}}),[A]),Object(h.jsx)("div",{className:"nav-header",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"logo-wrapper",children:Object(h.jsx)("div",{className:"logo logo-pc",children:Object(h.jsx)(t.b,{to:"/markets",children:Object(h.jsx)("img",{src:"dark"===O?"data:image/png;base64,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":"data:image/png;base64,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",alt:"logo"})})})}),Object(h.jsxs)("div",{className:"navigator",children:[Object(h.jsxs)("span",{className:"label theme pc",onClick:function(){!function(A){var e="dark"===A?"light":"dark";m.a.event.emit("changeTheme",e)}(O)},children:["dark"===O?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAEYUlEQVRoBe1ZvWsUQRSft3d7Z4r0ElREGzsFUTstBCUqik0stDAkURAR0iZ+nB/JXyCCJsFGC9OI4geKFtqIiqCdjSIqwT5FvNu7Hee3e3s7tzezu7PZNQpZCHk3M+/3fm/efL4hVtA3MdYcZLx1y4On0qnpmfLTIkyViwD1MEGes3U+vufI+iJsWUWA+g4E5MWvjiP5WyvOgfy5KhFXHVB2y18sjJ3EF087e1uuu9ti9OjqTOW9ES9iPztjH7Lhd2GsscNl/FDJsl5fuWm/1KlrhxDIN5vuC+6yiy2XvZkcrR/TgSjLxdLJQNz7E7LBB1uwCdvgAC46dW0E0POhEi9xTncFMJuard4Ly/VSe903XjpBHrbE0lUK0NtclFHQRgDDhjFqBSAABPCFsfpQWJavpCIPDj4XtS1SF/ulSkCipUrF3lS7Qb/idE3ramf42kbD+co47wt1qUXEj8dFXRsBgEARAF2REAacurMhNJKP5GEakofl2AgE1LxIMLrt9Q7Rq2377L1DQ/Lw8lvWRvm6JnOOcM4PcmKbidEAajjjC8TZFyJ6XGb2g9os9axK8/O89PG581LY2MNElEvET16dqc4HHHT/UzkAZYQYvbR1v/0hSr52lg84v53LnLNhefKpjWJYsNv2GvtS7TotyG3gxKdnzna7an9PO0RTOyAbkuXzY83DruveEcT75fJkmRYtyzpxbab8MLmtvkXsHNCr+TWTo41znLv3zclDn/dDFxhJduLqM0cAPQ8CYrwvqxPEvHCJrKNZI5HJAYz5xpLzOVvPq/qTFit99pbonFC1jJZl6j1M2PzIgxLv9zGj9JJ/G0cAS2WDO9+E0c5Wn2wmTQtqVcjeqFpi47SNI4B1Pn/yoMhLPnYc3d46YwewSfXC5FOSBbvcyR5E763tY3A0m4AdVmythXwedgQ5iZ/lpT6i5AGCsiAtIoEGxwOpKDdRid2V3ZBMtfkZDyEJ4p8QxVG7fXOK0tHcpHAwizbN67cSO4Gf8TI6OVJ/IqbAYF6kZRxB5unUXPWAXJYkGw8hHImTQLPWZ8E2dgDn+a4LTla2PXrU8rF7KmILjB3ATonzfCxqhkpgmu7CMGPsAJRwGRFRWIScz0eLPqY5WiYHcGrEZQRHYXOT3RrAAFaWkyiQMjkAxfb5fXw5TrR1x7PeBcDDeBmFkvyt9JUytQP/9aX+v06rqLJz4tC1a2qu8k4eSsuVJ0caO8VR4m2Ik5yVQ9vYSawij6QT8jahoXwkD1Ngh2idhHJsVlzrAPLz0SwxdmBkzNImnUIyyRIwifHh7l0+SCg3dugQtA7gcaH76uiHNE26T2csqVyZixVXTZ+LWlv7PoCXkaYb7FPpxqNsonOTQqHBOzGcEENXpEjDNwJwkbFlOXYZXc4T08Ro/Yf8xDQ9WzV67Ej7xBTrgOypqTwxUu+6OU/PVQuxpZ0DpoRXqv2qAyvV84Hd4iKApEDwyXJQltP/Ah3I/k5s4tsfK6wu7by+4bUAAAAASUVORK5CYII=",className:"icon"}),"light\xa0mode"]}):null,"light"===O?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAC0ElEQVRoBe1XTWsTURS9Z5LUhbUoYsEPKgrtqhvdJaTFNH6uKv0HXbooBQUXunEr4kppXfgTKrgQXBQ7adNYRXHlRl0IFSy4UREspibX+6ZpmHw0896bcSG+WWTevJx77j1n5n0Rucs54BxwDjgHnAPOAefA/+sAkpbOy+PDxLXLxHyOmIYIdJSIF1FYm0o6l+JLJ0XKy9lTVMcdqm0VWzhZnkAHWvoSfIgtgP0zaUL1LtV5Rlzf5Y16DxOsuYUqlgApfj9RdUGKb3U9nAK0RccGFsJdSbY9W7LAeVU89yhekTPWMfz0l22eqDhrAcFnE1W8yg76ElVEnP+tBPDK2GlxfkYvMR/Sw9mhrARQ7fdtmSJ3GbBthTBO8MviwbbexB6NBXA5PyLFn9WvgFO0uflX1gBVg7EAqvGkfvENZJ1u8odLe4zjNALMBXD9vAZvG4SP06fv822diTxaCMCQXWae5qXc3Pb0a8fQLcpcAOhINyK9Pr4iC98r9vMXmW915OZKbpD97CyXctN6fGqWNrzYz/2QKbTfMKwLHLI+8KpU8FnK6JeJ4SSBs3LPCPgnJtb2dgnq6DLfSrBKSCMdTMYdPCghU1KwXMFP8yaCNnTpOl5jZCB4PRITFwD+qEthLoCxqEtuj0NJN9ZcQMZ7rEtujctAe/dqLABjq+8JeGZdXGQgVpCvvIuENQDGAoK4VOq6zB6NkaebSgOnOIFrGsgmxEoAxstvZJ9/v8mSVIPxAIXKaxM6KwFBAvRdleluySRZTyzg08DobE9Mlz+NF7IwR3Ck5OojmcAnwv3GbaBMaW9SxtdX01j7NyCZUCh9I/RdkNY96zHhYY72jRZtildiY72BsFvBKW37oKN3VlCfDOGGfPMvwjym7cQE7CQODjzqzKC23Sw7V9Bh2Tt5ct9QB3zZ78hCiCcoPH+7E+PuzgHngHPAOeAccA78qw78AVI4vhRNPLRqAAAAAElFTkSuQmCC",className:"icon"}),"dark\xa0mode"]}):null]}),Object(h.jsx)(t.b,{className:"navtab",to:"/markets",children:"Markets"}),Object(h.jsx)(t.b,{className:"navtab",to:"/farms",children:"Farms"})]}),Object(h.jsxs)("span",{className:"label bp pc",children:["Bumper: ",B," "]}),Object(h.jsxs)("div",{className:"wallet-pc button",onClick:N,children:[Object(h.jsx)(j.a,{style:v.iconStyle}),Object(h.jsx)("span",{className:"label",children:l?l.slice(0,6)+"..."+l.slice(-4,l.length):"Connect Wallet"})]}),Object(h.jsx)(d.a,{overlay:U,className:"wallet-mobile",overlayClassName:"menu-dropdown",children:Object(h.jsx)(E.a,{style:v.iconBigStyle})})]})})}}}]);
//# sourceMappingURL=10.e676b200.chunk.js.map