(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{22:function(e,t,s){},23:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(17),n=s.n(a),i=(s(22),s(4)),l=(s(23),s(5)),r=s.n(l),d=s(3),o=s.n(d),j=s(0),u=function(e){var t=e.share,s=e.setToggleModal,c=t.created.split("T");return Object(j.jsxs)("div",{className:"card  col",style:{position:"fixed",width:"90%",minWidth:"280px",maxWidth:"870px",zIndex:2,top:"50%",left:"50%",transform:"translate(-50%,-50%)",padding:"25px",paddingTop:"25px",paddingBottom:"35px",borderRadius:"14px"},children:[Object(j.jsxs)("div",{className:"row  g-0",style:{overflow:"auto"},children:[Object(j.jsx)("div",{className:"col-md-12 d-flex justify-content-end ",children:Object(j.jsx)("button",{onClick:function(){return s(!1)},type:"button",className:"btn-close"})}),Object(j.jsxs)("div",{className:"col-sm-6 overflow-hidden",children:[Object(j.jsx)("img",{className:"w-100",src:t.image,alt:t.name}),Object(j.jsxs)("p",{className:"card-text",children:[Object(j.jsx)("small",{className:"text-muted",children:"created: "}),c[0].replace(/-/g,".")]})]}),Object(j.jsxs)("div",{className:"col-sm-6",style:{paddingLeft:"20",paddingRight:"20",paddingBottom:"20",fontSize:"1.2em"},children:[Object(j.jsx)("h2",{className:"card-title",children:t.name}),Object(j.jsxs)("ul",{className:"card-text list-group list-group-flush",children:[Object(j.jsxs)("li",{className:"list-group-item",children:[" status: ",Object(j.jsxs)("span",{className:o()({"badge bg-secondary":"unknown"===t.status,"badge bg-success":"Alive"===t.status,"badge bg-danger":"Dead"===t.status}),children:[" ",t.status]})," ",Object(j.jsx)("br",{})]}),Object(j.jsxs)("li",{className:"list-group-item",children:["species: ",t.species,Object(j.jsx)("br",{})]}),Object(j.jsxs)("li",{className:"list-group-item",children:["gender: ",t.gender,Object(j.jsx)("br",{})]}),Object(j.jsxs)("li",{className:"list-group-item",children:["type: ",t.type]}),Object(j.jsxs)("li",{className:"list-group-item",children:["location: ",Object(j.jsxs)("a",{className:"link-info",href:t.location.url,children:[" ",t.location.name," "]})]}),Object(j.jsxs)("li",{className:"list-group-item",children:["origin: ","unknown"===t.origin.name?Object(j.jsxs)("span",{children:[" ",t.origin.name]}):Object(j.jsxs)("a",{className:"link-info",href:t.origin.url,children:[" ",t.origin.name," "]})]})]})]})]}),Object(j.jsxs)("div",{className:"col-md-12 mt-3",children:[Object(j.jsx)("h3",{children:"Episodes"}),t.episode.map((function(e,t){return t<9?Object(j.jsxs)("span",{children:[Object(j.jsx)("a",{href:e,className:"link-info",children:e})," "]},t):""})),t.episode.length>=10?Object(j.jsx)("span",{className:"text-muted",children:"..."}):""]})]})},b=function(e){var t=e.data,s=e.shareChar;return Object(j.jsx)("main",{children:Object(j.jsx)("div",{className:"row row-cols-xl-4   row-cols-md-3  g-4 col-md-offset-2",children:t.map((function(e,t){return Object(j.jsx)("div",{style:{padding:10},children:Object(j.jsx)("div",{className:"card ",children:Object(j.jsxs)("div",{className:"row ",children:[Object(j.jsx)("img",{src:e.image,className:"img-fluid rounded-start",alt:e.name}),Object(j.jsxs)("div",{className:"card-body",style:{padding:"1rem 1.7rem"},children:[Object(j.jsx)("h5",{className:"card-title",children:e.name}),Object(j.jsxs)("p",{className:"card-text",children:["status: ",Object(j.jsxs)("span",{className:o()({"badge bg-secondary":"unknown"===e.status,"badge bg-success":"Alive"===e.status,"badge bg-danger":"Dead"===e.status}),children:[" ",e.status]})," ",Object(j.jsx)("br",{}),"species: ",e.species,Object(j.jsx)("br",{}),"gender: ",e.gender,Object(j.jsx)("br",{}),"type: ",e.type?"".concat(e.type," "):""]}),Object(j.jsx)("button",{onClick:function(){return s(t)},className:"btn btn-success",children:"Show more"})]})]})},e.id)})}))})})},m=function(e){var t=e.getter,s=e.setter,a=e.list,n=e.header,l=Object(c.useState)(!1),r=Object(i.a)(l,2),d=r[0],o=r[1];return Object(j.jsxs)("div",{className:"filtersDrop__wrap",children:[Object(j.jsxs)("button",{className:"btn btn-outline-success",onClick:function(){return o(!d)},children:[n,": ",t,Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-caret-down-fill",viewBox:"0 0 16 16",children:Object(j.jsx)("path",{d:"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"})})]}),d&&Object(j.jsx)("ul",{className:"list-group filtersDrop",children:a.map((function(e,t){return Object(j.jsx)("li",{className:"list-group-item",onClick:function(){return s(e)},children:e||"all"},t)}))})]})},h=function(e){for(var t=e.info,s=e.changePage,a=e.prevPage,n=e.currentPage,i=e.nextPage,l=e.status,r=e.setStatus,d=e.searchWithFilters,u=e.clearFilters,b=e.setGender,h=e.gender,p=e.type,g=e.setType,x=e.name,O=e.setName,f=e.species,N=e.setSpecies,v=Object(c.useRef)(null),y=[],w=1;w<=t.pages;w++)y.push(w);return Object(j.jsxs)("div",{className:"mt-3",children:[Object(j.jsx)("h3",{className:"text-success mt-5",children:"Filters"}),Object(j.jsxs)("div",{className:"filtersWrap flex-wrap",children:[Object(j.jsx)(m,{list:["","alive","dead","unknown"],getter:l,setter:r,header:"status"}),Object(j.jsx)(m,{list:["","male","female","genderless","unknown"],getter:h,setter:b,header:"gender"}),Object(j.jsx)(m,{list:["","Alien","Animal","Human","Humanoid","Poopybutthole","Mythological Creature","unknown"],getter:f,setter:N,header:"species"}),Object(j.jsx)(m,{list:["","Anime","Parasite","Monster","Conjoined twin","Turkey","Snake","Soulless Puppet","Sentient ant colony","Human Gazorpian","Boobie buyer reptilian","The Devil"," Superhuman"],getter:p,setter:g,header:"types"})]}),Object(j.jsxs)("div",{className:"  col-md-3",children:[Object(j.jsx)("label",{children:"Search by name"}),Object(j.jsx)("input",{onChange:function(){null!==v.current&&O(v.current.value)},ref:v,className:"form-control me-2",type:"text",value:x,placeholder:"Search by name"})]}),Object(j.jsxs)("div",{className:"mt-3",children:[Object(j.jsx)("button",{style:{marginRight:10},className:"btn btn-success ",onClick:d,children:"Search"}),Object(j.jsx)("button",{className:"btn btn-danger  ",onClick:u,children:"Clear"})]}),Object(j.jsx)("nav",{className:"mt-4  d-flex justify-content-center",children:Object(j.jsxs)("ul",{className:"d-flex pagination flex-wrap justify-content-center",children:[Object(j.jsx)("li",{onClick:a,className:o()({"page-item":!0,disabled:null===t.prev}),children:Object(j.jsx)("button",{className:"page-link ",children:Object(j.jsx)("span",{className:o()({"text-success":null!==t.prev}),children:"\xab"})})}),y.map((function(e){return e>=n&&e<n+10||e>t.pages-10&&e<=t.pages&&n>t.pages-10&&n<=t.pages?Object(j.jsx)("li",{onClick:function(){return s(e)},className:o()({"page-item":!0}),children:Object(j.jsx)("button",{className:o()({"page-link":!0,"bg-success":n===e,"text-white":n===e,"text-success":n!==e}),children:e})},e):void 0})),Object(j.jsx)("li",{onClick:i,className:o()({"page-item":!0,disabled:null===t.next}),children:Object(j.jsx)("button",{className:"page-link",children:Object(j.jsx)("span",{className:o()({"text-success":null!==t.next}),children:"\xbb"})})})]})}),Object(j.jsxs)("div",{children:["Characters: ",t.count]})]})},p=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)({count:0,next:"",prev:"",pages:0}),l=Object(i.a)(n,2),d=l[0],o=l[1],m=Object(c.useState)({created:"",episode:[],gender:"",id:0,image:"",location:{name:"",url:""},name:"",origin:{name:"",url:""},species:"",status:"",type:"",url:""}),p=Object(i.a)(m,2),g=p[0],x=p[1],O=Object(c.useState)(1),f=Object(i.a)(O,2),N=f[0],v=f[1],y=Object(c.useState)(!1),w=Object(i.a)(y,2),k=w[0],S=w[1],C=Object(c.useState)(""),P=Object(i.a)(C,2),A=P[0],F=P[1],T=Object(c.useState)(""),z=Object(i.a)(T,2),B=z[0],D=z[1],I=Object(c.useState)(""),J=Object(i.a)(I,2),L=J[0],G=J[1],H=Object(c.useState)(""),M=Object(i.a)(H,2),R=M[0],W=M[1],E=Object(c.useState)(""),_=Object(i.a)(E,2),K=_[0],U=_[1],X="https://rickandmortyapi.com/api/character/";return Object(c.useEffect)((function(){r.a.get(X).then((function(e){a(e.data.results),o(e.data.info),v(1)}))}),[]),console.log(d),Object(j.jsxs)("div",{className:"container-sm ",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)("img",{alt:"HeaderLogo",className:"headerLogo",src:"https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUmVLxeatH508rcDIJJz2cyvcGOzvAth5IzI5MrAJKYF_Od9t-t05i6neGRE8GUuTXqK_PwaWrp4PtcgHCq5FcrIJ32JKfRUPc4w.png?r=a66"})}),k&&Object(j.jsx)(u,{setToggleModal:S,share:g}),Object(j.jsx)(h,{clearFilters:function(){F(""),U(""),W(""),D(""),G("")},setName:F,name:A,setGender:U,gender:K,setType:W,type:R,setSpecies:G,species:L,searchWithFilters:function(){r.a.get(X+"?page=1&name=".concat(A,"&status=").concat(B,"&species=").concat(L,"&type=").concat(R,"&gender=").concat(K)).then((function(e){a(e.data.results),o(e.data.info),v(1)}))},status:B,setStatus:D,info:d,currentPage:N,prevPage:function(){null!==d.prev&&r.a.get(d.prev).then((function(e){a(e.data.results),o(e.data.info),v(N-1)}))},changePage:function(e){e!==N&&r.a.get("".concat(X,"?page=").concat(e,"&name=").concat(A,"&status=").concat(B,"&species=").concat(L,"&type").concat(R,"&gender=").concat(K)).then((function(t){a(t.data.results),o(t.data.info),v(e)}))},nextPage:function(){null!==d.next&&r.a.get(d.next).then((function(e){a(e.data.results),o(e.data.info),v(N+1)}))}}),Object(j.jsx)(b,{data:s,shareChar:function(e){x(s[e]),S(!0)}})]})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,45)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};s(43);n.a.render(Object(j.jsx)(p,{}),document.getElementById("root")),g()}},[[44,1,2]]]);
//# sourceMappingURL=main.8ccfc51a.chunk.js.map