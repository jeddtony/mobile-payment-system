(this["webpackJsonpantd-components"]=this["webpackJsonpantd-components"]||[]).push([[12],{378:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(0),r=a.n(n),c=a(84),u=a(97),s=a(70),i=a(384),o=a(267),l=a(269),d=a(26);function m(){var e=Object(u.h)(),t=(e.status,e.data),a=(e.error,e.isFetching,t?t.data:[]),m=Object(n.useMemo)((function(){return[{id:"date",Header:"Date Added",accessor:function(e){return Object(d.a)(e.createdAt)},Cell:function(e){return r.a.createElement("span",null,e.value)}},{Header:"Name",accessor:"name"},{Header:"Email",accessor:"email"},{Header:"Phone Number",accessor:"phoneNumber"},{id:"contacts",Header:"No. of Contacts",accessor:function(e){return e.user_contacts[0]?e.user_contacts[0].count:0},Cell:function(e){return r.a.createElement("span",null,e.value)}},{Header:"Action",accessor:"_id",Cell:function(e){return r.a.createElement(c.a,{to:"/users/"+e.value,label:"View",size:"small",type:"primary"})}}]}),a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.c,{selectedKey:"02"},r.a.createElement(i.a,null,r.a.createElement(o.a,{gutter:24},r.a.createElement(l.a,{span:20},r.a.createElement(c.h,{title:"Users"})),r.a.createElement(l.a,{span:4,style:{padding:"10px"}},r.a.createElement(c.a,{style:{borderRadius:"5px"},type:"primary",to:"/users/create",label:"New User"}))),r.a.createElement(c.i,{columns:m,data:a,filterable:!0}))),r.a.createElement(s.ReactQueryDevtools,{initialIsOpen:!0}))}},70:function(e,t,a){e.exports={ReactQueryDevtools:function(){return null},ReactQueryDevtoolsPanel:function(){return null}}},84:function(e,t,a){"use strict";a.d(t,"c",(function(){return k})),a.d(t,"b",(function(){return C})),a.d(t,"h",(function(){return N})),a.d(t,"i",(function(){return S})),a.d(t,"a",(function(){return D})),a.d(t,"d",(function(){return P})),a.d(t,"e",(function(){return q})),a.d(t,"g",(function(){return L})),a.d(t,"f",(function(){return U}));var n=a(8),r=a(0),c=a.n(r),u=(a(13),a(83),a(92),a(377)),s=a(369),i=a(373),o=a(392),l=a(393),d=a(394),m=a(395),f=a(396),b=a(397),p=a(24),E=a(17),v=u.a.Header,g=u.a.Sider,h=u.a.Content,y=s.a.SubMenu;function k(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),k=a[0],x=a[1],w=Object(E.d)(),O=w.isPageLoading,j=(w.isPageError,w.isPageSuccess),C=w.messageContent;w.setMessage,w.setPageSuccess,w.setPageError;return c.a.createElement(u.a,{style:{height:"inherit"}},O&&c.a.createElement(q,null),j&&i.b.success({content:C,key:"success",duration:2}),c.a.createElement(g,{trigger:null,collapsible:!0,collapsed:k},c.a.createElement("div",{className:"logo"}),c.a.createElement(s.a,{theme:"dark",mode:"inline",defaultSelectedKeys:e.selectedKey},c.a.createElement(s.a.Item,{key:"01",icon:c.a.createElement(o.a,null)},c.a.createElement(p.c,{to:"/dashboard"},"Dashboard")),c.a.createElement(s.a.Item,{key:"02",icon:c.a.createElement(o.a,null)},c.a.createElement(p.c,{to:"/users"},"Users")),c.a.createElement(s.a.Item,{key:"03",icon:c.a.createElement(l.a,null)},c.a.createElement(p.c,{to:"/contacts/"},"Contacts")),c.a.createElement(y,{key:"sub2",icon:c.a.createElement(d.a,null),title:"Transactions"},c.a.createElement(s.a.Item,{key:"20"}," ",c.a.createElement(p.c,{to:"/transactions/debit"},"Debit Transactions")),c.a.createElement(s.a.Item,{key:"21"}," ",c.a.createElement(p.c,{to:"/transactions/credit"},"Credit Transactions"))),c.a.createElement(y,{key:"sub3",icon:c.a.createElement(m.a,null),title:"Data Bundles"},c.a.createElement(s.a.Item,{key:"4"},c.a.createElement(p.c,{to:"/networks/MTN"}," MTN")),c.a.createElement(s.a.Item,{key:"5"}," ",c.a.createElement(p.c,{to:"/networks/Airtel"}," Airtel")," "),c.a.createElement(s.a.Item,{key:"6"},c.a.createElement(p.c,{to:"/networks/Glo"},"Glo ")," "),c.a.createElement(s.a.Item,{key:"7"},c.a.createElement(p.c,{to:"/networks/9Mobile"},"9Mobile"))))),c.a.createElement(u.a,{className:"site-layout"},c.a.createElement(v,{className:"site-layout-background",style:{padding:0}},c.a.createElement(k?f.a:b.a,{className:"trigger",onClick:function(){x(!k)}})),c.a.createElement(h,{className:"",style:{margin:"24px 16px",padding:24}},e.children)))}var x=a(387),w=a(384),O=x.a.Title,j=x.a.Text;function C(e){var t=e.width,a=e.label,n=e.value;return c.a.createElement(w.a,{style:{width:t}},c.a.createElement(O,{level:4},n),c.a.createElement(j,null,a))}var I=a(389);function N(e){var t=e.title;return c.a.createElement("div",null,c.a.createElement(I.a,{title:t}))}var T=a(116);a(114);function S(e){var t=Object.assign({},e);return c.a.createElement("div",null,c.a.createElement(T.a,Object.assign({},t,{defaultFilterMethod:function(e,t,a){var n=e.pivotId||e.id;return void 0===t[n]||String(t[n]).toLowerCase().includes(String(e.value).toLowerCase())}})))}var F=a(80),M=a(123);function D(e){var t=e.to,a=e.label,n=Object(F.a)(e,["to","label"]);return c.a.createElement(p.b,{to:t},c.a.createElement(M.a,n,a))}var H=a(385);function P(e){var t=e.name,a=e.label,n=e.required,r=Object(F.a)(e,["name","label","required"]);return c.a.createElement(H.a.Item,{name:t,label:c.a.createElement(c.a.Fragment,null," ",a,"  "),rules:n?[{required:{required:n},message:"This field is required"}]:[],initialValue:r.initialValue},r.children)}var R=a(398);function q(){return c.a.createElement("div",{style:{zIndex:"99",width:"150px",position:"fixed",borderRadius:"5px",backgroundColor:"#FFF",padding:"10px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",marginLeft:"40%",marginTop:"20px"}},c.a.createElement("div",null," ",c.a.createElement(R.a,null)," Loading"))}var A=a(115);function L(e){var t=e.value,a=Object(F.a)(e,["value"]);return c.a.createElement(A.a,Object.assign({value:Number(t||0).toFixed(2),displayType:"text",thousandSeparator:!0,prefix:"\u20a6"},a))}var K=a(25),Q=a(388);var U=function(e){var t=e.visible,a=e.title,n=e.formId,r=e.onCancel,u=e.hideFooter,s=Object(F.a)(e,["visible","title","formId","onCancel","hideFooter"]);return c.a.createElement(Q.a,{visible:t,title:a,onCancel:function(){return r(!t)},footer:u?"":[c.a.createElement(M.a,{key:"back",onClick:function(){return r(!t)}},"Return"),c.a.createElement(M.a,Object(K.a)({key:"submit",type:"primary",form:"".concat(n),htmlType:"submit"},"key","submit"),"Submit")]},s.children)}},92:function(e,t,a){},97:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"h",(function(){return o})),a.d(t,"g",(function(){return l})),a.d(t,"b",(function(){return d})),a.d(t,"f",(function(){return m})),a.d(t,"a",(function(){return f})),a.d(t,"e",(function(){return b})),a.d(t,"c",(function(){return p}));var n=a(10),r=a.n(n),c=a(14),u=(a(0),a(15)),s=a(16);function i(){return console.log("calling use dashboard"),Object(u.c)("dashboard",Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.instance.get("dashboard");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))))}function o(){return console.log("calling use users"),Object(u.c)("users",Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.instance.get("users");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))))}function l(e,t){return console.log("calling one users"),Object(u.c)("user"+e+t,Object(c.a)(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.instance.get("users/".concat(e));case 2:return a=t.sent,n=a.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))))}function d(){return Object(u.c)("contacts",Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.instance.get("contacts");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))))}function m(){return Object(u.c)("networks",Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.instance.get("networks");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))))}function f(e){return Object(u.c)(e,Object(c.a)(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.instance.get("bundles/network/"+e);case 2:return a=t.sent,n=a.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))))}function b(){return Object(u.c)("debitTransactions",Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.instance.get("transactions/debit");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))))}function p(){return Object(u.c)("creditTransactions",Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.instance.get("transactions/credit");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))))}}}]);
//# sourceMappingURL=12.e832e4ed.chunk.js.map