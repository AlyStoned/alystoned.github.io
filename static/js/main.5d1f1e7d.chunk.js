(this["webpackJsonpmarch-madness"]=this["webpackJsonpmarch-madness"]||[]).push([[0],{104:function(e,t,n){e.exports=n(122)},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return b}));var r=n(105),a=n.n(r),c=n(23),s=n.n(c),i=new s.a.Renderer;i.link=function(e,t,n){return'<a class="link" href='.concat(e,' target="_blank" rel="noreferrer" title=').concat(t||"",">").concat(n,"</a>")};var o=i;s.a.use({renderer:o});var l="https://api.airtable.com/v0/".concat("appEhFhZN0JNjcDgv","/"),d=a.a.create({baseURL:l,timeout:5e3,headers:{Authorization:"Bearer keyMZ0LJwZkwSeJuQ","Content-Type":"application/json",accept:"application/json"}}),u={content:"Content",players:"Players",users:"Users"},j=function(e){var t=e.records;if(t.length){var n=t[0].fields;return{enable_selection:n.enable_selection,login_label:n.login_label,login_text:n.login_text,login_consent:s()(n.login_consent),main_selection_rules:s()(n.main_selection_rules),main_selected_players:s()(n.main_selected_players),main_empty:s()(n.main_empty),leaderboard_label:n.leaderboard_label,leaderboard_empty:s()(n.leaderboard_empty)}}},b=function(e){return e.records.map((function(e){var t=e.fields,n=t.Card[0];return{id:e.id,name:t.Name,tier:t.Tier,image_url:n.thumbnails.large.url}}))}},122:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n(48),c=n(9),s=n(51),i=Object(r.e)(s.a,Object(r.a)(c.b,a.a));t.default=i},140:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n(48),c=n(9),s=n(51),i=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):r.d,o=Object(r.e)(s.a,i(Object(r.a)(c.b,a.a)));t.default=o},15:function(e,t,n){"use strict";var r=n(81);n.d(t,"selectAppIsInitialized",(function(){return r.a}));var a=n(82);n.o(a,"selectEnableSelection")&&n.d(t,"selectEnableSelection",(function(){return a.selectEnableSelection})),n.o(a,"selectIsPlayersLoading")&&n.d(t,"selectIsPlayersLoading",(function(){return a.selectIsPlayersLoading})),n.o(a,"selectIsUsersLoading")&&n.d(t,"selectIsUsersLoading",(function(){return a.selectIsUsersLoading})),n.o(a,"selectPlayers")&&n.d(t,"selectPlayers",(function(){return a.selectPlayers})),n.o(a,"selectUser")&&n.d(t,"selectUser",(function(){return a.selectUser})),n.o(a,"selectUserSelection")&&n.d(t,"selectUserSelection",(function(){return a.selectUserSelection})),n.o(a,"selectUsers")&&n.d(t,"selectUsers",(function(){return a.selectUsers}));var c=n(47);n.d(t,"selectUser",(function(){return c.a})),n.d(t,"selectUserSelection",(function(){return c.b}));var s=n(83);n.d(t,"selectIsUsersLoading",(function(){return s.a})),n.d(t,"selectUsers",(function(){return s.b}));var i=n(84);n.d(t,"selectEnableSelection",(function(){return i.a}));var o=n(85);n.d(t,"selectIsPlayersLoading",(function(){return o.a})),n.d(t,"selectPlayers",(function(){return o.b}))},254:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(46),s=n.n(c),i=n(4),o=n(8),l=n(22),d=n(11),u=n(104),j=n.n(u),b=n(1),p="#393939",m=function(e){return Object(o.c)((function(e){return e.preloader})).show&&Object(b.jsx)("div",{className:"preloader__wrapper",children:Object(b.jsx)("div",{className:"preloader",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"preloader-ball",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(b.jsx)("circle",{cx:"50",cy:"50",r:"50.25",fill:"#f47436",stroke:p,strokeWidth:"4.5"}),Object(b.jsx)("path",{d:"M50 0L50 100",stroke:p,strokeWidth:"4"}),Object(b.jsx)("path",{d:"M14.644660940672622 14.644660940672622 A50 50 0 0 1 14.644660940672622 85.35533905932738",fill:"none",stroke:p,strokeWidth:"4"}),Object(b.jsx)("path",{d:"M85.35533905932738 14.644660940672622 A50 50 0 0 0 85.35533905932738 85.35533905932738",fill:"none",stroke:p,strokeWidth:"4"}),Object(b.jsxs)("g",{transform:"translate(0 50)",children:[Object(b.jsx)("path",{d:"M0 0A50 50 0 0 1 100 0",fill:"none",stroke:p,strokeWidth:"4",children:Object(b.jsx)("animate",{attributeName:"d",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.499999;0.5;1",keySplines:"0.1 0 1 0.9;0.5 0.5 0.5 0.5;0 0.1 0.9 1",values:"M0 0A50 50 0 0 1 100 0;M0 0A50 0 0 0 1 100 0;M0 0A50 0 0 0 0 100 0;M0 0A50 50 0 0 0 100 0",begin:"0"})}),Object(b.jsx)("path",{d:"M0 0A50 50 0 0 1 100 0",fill:"none",stroke:p,strokeWidth:"4",children:Object(b.jsx)("animate",{attributeName:"d",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.499999;0.5;1",keySplines:"0.1 0 1 0.9;0.5 0.5 0.5 0.5;0 0.1 0.9 1",values:"M0 0A50 50 0 0 1 100 0;M0 0A50 0 0 0 1 100 0;M0 0A50 0 0 0 0 100 0;M0 0A50 50 0 0 0 100 0",begin:"-0.5"})})]})]})})})},f=n(113),O="user_id",h=function(){return localStorage.getItem(O)},g=function(){return!!h()},v={home:"/",login:"/login",leaderboard:"/leaderboard"},x=function(e){var t=e.component,n=Object(f.a)(e,["component"]),r=g();return Object(b.jsx)(d.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return r?Object(b.jsx)(t,Object(i.a)({},e)):Object(b.jsx)(d.a,{to:{pathname:v.login,state:{from:e.location}}})}}))},y=n(28),_=n.n(y),N=n(49),L=n(5),w=function(){return function(e,t){return t().preloader.show?null:e({type:L.x})}},S=function(){return function(e,t){return t().preloader.show?e({type:L.e}):null}},E=n(12),A=function(e){return function(t,n){var r=n().user.response;return r?Promise.resolve(r):t({type:L.o,payload:E.a.get("".concat(E.d.users,"/").concat(e))})}},P=function(e,t){return function(n){var r=h();return r?Promise.resolve(r):n({type:L.a,payload:E.a.post(E.d.users,{fields:{Email:e,Instagram:t}})})}},R=function(){return function(e){return localStorage.removeItem(O),e({type:L.w})}},U=n(108),k=n.n(U),I=function(){return function(e,t){return t().content.isFetching?Promise.reject(null):e({type:L.g,payload:E.a.get(E.d.content,{maxRecords:1})})}},T=n(15),D=function(e){var t=e.isAuthenticated;switch(e.pathname){case v.login:return Object(b.jsx)(l.b,{to:v.leaderboard,children:"Leaderboard"});case v.home:return t?Object(b.jsx)(l.b,{to:v.leaderboard,children:"Leaderboard"}):null;case v.leaderboard:return t?Object(b.jsx)(l.b,{to:v.home,children:"Home"}):Object(b.jsx)(l.b,{to:v.login,children:"Login"});default:return null}},M=n(37),C=n(110),F=function(e){var t=e.children,n=Object(r.useState)(!0),a=Object(M.a)(n,2),c=a[0],s=a[1];return Object(C.useScrollPosition)((function(e){var t=e.prevPos,n=e.currPos.y>t.y;n!==c&&s(n)}),[c]),Object(b.jsx)("div",{className:c?"menu show":"menu",children:t})},B=function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.content})),a=Object(o.c)(T.selectAppIsInitialized),c=Object(o.c)((function(e){return e.user})).isLoading,s=g(),i=n.isLoading||c;Object(r.useEffect)((function(){function r(){return(r=Object(N.a)(_.a.mark((function e(){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],n.response||(t(w()),r.push(t(I()))),s&&r.push(t(A(h())).catch((function(e){t(R())}))),e.next=5,Promise.all(r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a||function(){return r.apply(this,arguments)}().then((function(n){t((function(e,t){return e({type:L.f})})),e.isPageLoaded&&t(S())}))}),[a]);var l=Object(b.jsx)(D,{isAuthenticated:s,pathname:e.pathname});return Object(b.jsx)("div",{id:"app-page",children:Object(b.jsxs)("main",{id:"app-main",className:e.className,children:[i||!n.response?null:e.children,l&&Object(b.jsx)(F,{children:l})]})})};B.defaultProps={isPageLoaded:!0};var z=n(2),H=n(13),W=function(e){var t=e.text,n=e.duration,r=e.stagger,a=e.from;return Object(b.jsx)("div",{className:"letters",children:Object(b.jsx)(H.b,{from:a,duration:n,stagger:r,children:Object(b.jsx)(H.a,{wrapper:Object(b.jsx)("div",{className:"letter"}),children:t})})})},Y=function(){var e=Object(o.c)((function(e){return e.content}));return Object(b.jsx)("div",{className:"head-label-wrapper",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"head-label center-text",children:Object(b.jsx)(W,{text:e.login_label,duration:.65,stagger:.05,from:{x:function(e,t,n){return-1*t.offsetLeft},opacity:0,ease:z.d.easeOut}})})})})},Z=n.p+"static/media/preview.3649143e.png",X=function(){var e=Object(o.c)((function(e){return e.content}));return Object(b.jsxs)("div",{className:"login-preview-wrapper",children:[Object(b.jsx)(H.b,{from:{opacity:0,delay:.7,easing:z.a.easeOut},duration:1.2,children:Object(b.jsx)("div",{className:"login-preview",children:Object(b.jsx)("img",{className:"login-preview-img",src:Z,alt:"preview"})})}),Object(b.jsx)(H.b,{from:{opacity:0,delay:.7+.2},duration:1.2,children:Object(b.jsx)("div",{className:"login-preview-label center-text",children:e.login_text})})]})},q=n(53),J=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t||n(e)}),void 0)}},$=function(e){return e?void 0:"Required"},V=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim,G=function(e){return e.match(V)?void 0:'Email does not match validation scheme "my@mail.com"'},Q=/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim,K=function(e){return e.match(Q)?void 0:"Your name Instagram is incorrect"},ee=function(e){var t=e.input,n=e.meta,r=e.placeholder,a=e.animationDelay,c=t.name,s=n.touched,o=n.error,l=o&&s,d="field field-".concat(c);return l&&(d+=" invalid"),Object(b.jsx)(H.b,{from:{opacity:0,x:-270,delay:1.2+a},duration:.8,ease:"elastic.out(0.2, 0.1)",children:Object(b.jsx)("div",{className:d,children:Object(b.jsxs)("div",{className:"control",children:[Object(b.jsx)("input",Object(i.a)(Object(i.a)({},t),{},{type:"text",placeholder:r})),l&&Object(b.jsx)("div",{className:"error",children:Object(b.jsx)("span",{children:o})})]})})})},te=function(e){var t=e.next,n=Object(o.b)(),r=Object(d.h)(),a=function(){var e=Object(N.a)(_.a.mark((function e(a){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(w()),e.abrupt("return",n(P(a.email,a.instagram)).then((function(e){var a,c=e.value,s=e.action;s&&s.type===L.b&&(a=c.data.id,localStorage.setItem(O,a),n(S()),r.push(t))}),(function(e){})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(q.b,{onSubmit:a,render:function(e){var t=e.handleSubmit,n=e.submitting;e.values;return Object(b.jsxs)("form",{className:"login-form",onSubmit:t,children:[Object(b.jsxs)("div",{className:"form-fields",children:[Object(b.jsx)(q.a,{name:"email",placeholder:"Email",animationDelay:0,component:ee,validate:J($,G)}),Object(b.jsx)(q.a,{name:"instagram",placeholder:"Instagram",animationDelay:.1,component:ee,validate:J($,K)})]}),Object(b.jsx)("div",{className:"form-btn-wrap center-text",children:Object(b.jsx)(H.b,{from:{opacity:0,x:270,rotationX:-180,rotationY:-210,rotationZ:-90,delay:1.3},duration:.8,ease:"elastic.out(0.2, 0.1)",children:Object(b.jsx)("button",{type:"submit",disabled:n,className:"btn btn-green",children:Object(b.jsx)("span",{className:"btn-text",children:"play"})})})})]})}})};function ne(e){return{__html:e.trim()}}var re=function(){var e=Object(o.c)((function(e){return e.content}));return Object(b.jsx)("div",{className:"login-bottom-wrapper",children:Object(b.jsx)(H.b,{from:{opacity:0,delay:1.4,easing:z.a.easeOut},duration:.8,children:Object(b.jsx)("div",{className:"login-consent center-text",dangerouslySetInnerHTML:ne(e.login_consent)})})})},ae=function(e){var t=(e.location.state||{}).from,n=(t=void 0===t?{}:t).pathname,r=void 0===n?v.home:n;return g()?Object(b.jsx)(d.a,{to:r}):Object(b.jsx)(B,{pathname:e.location.pathname,className:"login-page",children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Y,{}),Object(b.jsx)("div",{className:"login-form-wrapper",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(X,{}),Object(b.jsx)(te,{next:r}),Object(b.jsx)(re,{})]})})]})})},ce=n(50),se=n.n(ce),ie=n(35),oe=n(111),le=n.n(oe),de=n(112),ue=n.n(de),je=n(263),be=n(258),pe=n(259),me=n(260),fe=n(261),Oe=n(264),he=n(262);je.a.use([be.a,pe.a,me.a,fe.a]);var ge=function(e){var t=e.players,n=Object(o.b)(),a=Object(o.c)((function(e){return e.content})),c=ue()(t,"tier"),s=Object(r.useState)({}),l=Object(M.a)(s,2),d=l[0],u=l[1],j=Object.keys(c).sort();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"top text-block",children:Object(b.jsx)(H.b,{from:{opacity:0},duration:1.2,children:Object(b.jsx)("div",{className:"top-label text-markdown",dangerouslySetInnerHTML:ne(a.main_selection_rules)})})}),Object(b.jsx)(Oe.a,{spaceBetween:40,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",renderBullet:function(e,t){return'<div class="'.concat(t,'">\n                                  ').concat(e+1,"\n                                </div>")},clickable:!0},lazy:!0,children:se()(Object.entries(c),[function(e){return e[0]}]).map((function(e,t){var n=Object(M.a)(e,2),r=n[0],a=n[1];return Object(b.jsxs)(he.a,{children:[Object(b.jsx)("div",{className:"tier"}),Object(b.jsx)("div",{className:"list",children:a.map((function(e,t){var n="card";return d[r]===e.id?n+=" selected":d[r]&&(n+=" skipped"),Object(b.jsx)("div",{className:"list-item",children:Object(b.jsx)("div",{className:n,onClick:function(){return function(e,t){d[e]!==t?u(Object(i.a)(Object(i.a)({},d),{},Object(ie.a)({},e,t))):u(Object(i.a)(Object(i.a)({},d),{},Object(ie.a)({},e,void 0)))}(r,e.id)},children:Object(b.jsx)("div",{className:"card-image-wrapper",children:Object(b.jsx)("img",{className:"card-image swiper-lazy","data-src":e.image_url,alt:e.name})})})},e.id)}))})]},r)}))}),Object(b.jsxs)("div",{className:"swiper-ui",children:[Object(b.jsxs)("div",{className:"swiper-navigation",children:[Object(b.jsx)("div",{className:"swiper-button-prev"}),Object(b.jsx)("div",{className:"swiper-button-next"})]}),Object(b.jsx)("div",{className:"swiper-pagination"})]}),Object(b.jsxs)("div",{className:"bottom text-block",children:[Object(b.jsx)("div",{className:"list list-thumbs",children:j.map((function(e,t){var n=d[e],r=le()(c[e],{id:n});return Object(b.jsxs)("div",{className:"thumb-list-item",children:[Object(b.jsx)("div",{className:"thumb-list-item-tier",children:t+1}),r?Object(b.jsx)("div",{className:"card thumb-list-item-card",children:Object(b.jsx)("div",{className:"card-image-wrapper",children:Object(b.jsx)("img",{className:"card-image",src:r.image_url,alt:r.name})})}):Object(b.jsx)("div",{className:"thumb-list-item-placeholder"})]},e)}))}),Object(b.jsx)(H.b,{from:{opacity:0,x:270,rotationX:-180,rotationY:-210,rotationZ:-90,delay:.4},duration:.8,ease:"elastic.out(0.2, 0.1)",children:Object(b.jsx)("button",{type:"button",className:"btn btn-green",onClick:function(e){n(w());var t,r=j.map((function(e){return d[e]}));n((t={"Selected Players":r},function(e,n){if(n().user.isLoading)return Promise.reject(null);var r=h();return r?e({type:L.y,payload:E.a.patch("".concat(E.d.users,"/").concat(r),{fields:t})}):Promise.reject(null)})).then((function(e){e.value;var t=e.action;t&&t.type===L.z&&n(S())}),(function(e){}))},disabled:!(j.filter((function(e){return d[e]})).length===j.length),children:Object(b.jsx)("span",{className:"btn-text",children:"submit"})})})]})]})},ve=function(e){var t=e.players,n=Object(o.c)((function(e){return e.content}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"top text-block",children:Object(b.jsx)(H.b,{from:{opacity:0},duration:1.2,children:Object(b.jsx)("div",{className:"top-label text-markdown",dangerouslySetInnerHTML:ne(n.main_selected_players)})})}),Object(b.jsx)("div",{className:"list selected-list",children:Object(b.jsx)(H.b,{from:{opacity:0},stagger:.2,children:t.map((function(e,t){return Object(b.jsxs)("div",{className:"list-item selected-list-item",children:[Object(b.jsx)("div",{className:"selected-list-item-tier",children:e.tier}),Object(b.jsx)("div",{className:"card selected-list-item-card",children:Object(b.jsx)("div",{className:"card-image-wrapper",children:Object(b.jsx)("img",{className:"card-image",src:e.image_url,alt:e.name})})})]},e.id)}))})})]})},xe=function(e){var t=e.text;return Object(b.jsx)(H.b,{from:{opacity:0,y:220,easing:z.e.easeOut},duration:.8,children:Object(b.jsx)("div",{className:"empty-label text-markdown",dangerouslySetInnerHTML:ne(t)})})},ye=function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.content})),a=Object(o.c)(T.selectEnableSelection),c=Object(o.c)(T.selectAppIsInitialized),s=Object(o.c)(T.selectPlayers),i=Boolean(s.length),l=Object(o.c)(T.selectIsPlayersLoading).isPlayersLoading,d=Object(o.c)(T.selectUserSelection),u=d&&Boolean(d.length);return Object(r.useEffect)((function(){var e;c&&(u||a)&&(i||(t(w()),t((e=d,function(t,n){if(n().players.isLoading)return Promise.reject(null);var r={};if(e&&e.length){var a=e.map((function(e){return"RECORD_ID()='".concat(e,"'")}));r.filterByFormula="OR(".concat(a.join(","),")"),r.maxRecords=e.length}return t({type:L.k,payload:E.a.get(E.d.players,{params:r})})})).then((function(e){e.value;var n=e.action;n&&n.type===L.l&&t(S())}),(function(e){}))))}),[c]),Object(b.jsx)(B,{pathname:e.location.pathname,className:"main-page",isPageLoaded:i||!a,children:Object(b.jsx)("div",{className:"container",children:a||u?i&&!l&&(u?Object(b.jsx)(ve,{players:se()(s.filter((function(e){return d.includes(e.id)})),"tier")}):Object(b.jsx)(ge,{players:s})):Object(b.jsx)(xe,{text:n.main_empty})})})},_e=function(e){var t=e.label;return Object(b.jsx)("div",{className:"leaderboard-label",children:Object(b.jsx)(W,{text:t,duration:.65,stagger:.05,from:{x:function(e,t,n){return-1*t.offsetLeft},opacity:0,ease:z.d.easeOut}})})};var Ne=function(e){var t,n=e.user,r=e.className,a=n.fields,c=a.Place,s=a.Instagram,i=a["Summary Score"];return Object(b.jsxs)("div",{className:"leaderboard-row ".concat(r),children:[Object(b.jsx)("div",{className:c.length>2?"leaderboard-place leaderboard-place-big":"leaderboard-place","data-place":(t=c,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}),Object(b.jsx)("div",{className:"leaderboard-instagram",children:Object(b.jsxs)("a",{target:"_blank",rel:"noreferrer",title:"@".concat(s.toLowerCase()),href:"https://www.instagram.com/".concat(s.toLowerCase(),"/"),children:["@",s]})}),Object(b.jsx)("div",{className:"leaderboard-score",children:i.toFixed(1)})]})},Le=function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.content})),a=Object(o.c)(T.selectAppIsInitialized),c=Object(o.c)(T.selectUser),s=Object(o.c)(T.selectUsers),i=Boolean(s.length),l=Object(o.c)(T.selectIsUsersLoading).isUsersLoading,d=Object(o.c)(T.selectUserSelection),u=d&&Boolean(d.length);Object(r.useEffect)((function(){var e;a&&!l&&(t(w()),t((e={filterByFormula:"NOT(OR(_has_place=''))",sort:[{field:"Place",direction:"asc"}],maxRecords:10},function(t,n){return n().users.isLoading?Promise.reject(null):t({type:L.p,payload:E.a.get(E.d.users,{params:e,paramsSerializer:function(e){return k.a.stringify(e)}})})})).then((function(e){e.value;var n=e.action;n&&n.type===L.q&&t(S())}),(function(e){})))}),[a]);var j=Boolean(c)&&s.map((function(e){return e.id})).includes(c.id);return Object(b.jsx)(B,{pathname:e.location.pathname,className:"leaderboard-page",isPageLoaded:!1,children:Object(b.jsx)("div",{className:"container",children:i?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(_e,{label:n.leaderboard_label}),Object(b.jsxs)("div",{className:"leaderboard-table",children:[u&&!j&&Object(b.jsx)(Ne,{className:"single current",user:c},c.id),s.map((function(e,t){return Object(b.jsx)(Ne,{className:j&&c.id===e.id?"current":"",user:e},e.id)}))]})]}):l?null:Object(b.jsx)(xe,{text:n.leaderboard_empty})})})};var we=function(){return Object(b.jsx)(r.Suspense,{fallback:Object(b.jsx)(m,{}),children:Object(b.jsxs)(o.a,{store:j.a,children:[Object(b.jsx)(l.a,{children:Object(b.jsxs)(d.d,{children:[Object(b.jsx)(x,{exact:!0,path:v.home,component:ye}),Object(b.jsx)(d.b,{exact:!0,path:v.login,render:ae}),Object(b.jsx)(d.b,{exact:!0,path:v.leaderboard,render:function(e){return Object(b.jsx)(Le,Object(i.a)({},e))}}),Object(b.jsx)(d.b,{path:"*",children:Object(b.jsx)(d.a,{to:v.home})})]})}),Object(b.jsx)(m,{})]})})},Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,265)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(254),n(255);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(we,{})}),document.getElementById("root")),Se()},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(e){return e.user.response},a=function(e){return e.user.response&&e.user.response.fields["Selected Players"]}},5:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"x",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"o",(function(){return i})),n.d(t,"u",(function(){return o})),n.d(t,"t",(function(){return l})),n.d(t,"v",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return p})),n.d(t,"y",(function(){return m})),n.d(t,"A",(function(){return f})),n.d(t,"z",(function(){return O})),n.d(t,"B",(function(){return h})),n.d(t,"w",(function(){return g})),n.d(t,"p",(function(){return v})),n.d(t,"r",(function(){return x})),n.d(t,"q",(function(){return y})),n.d(t,"s",(function(){return _})),n.d(t,"g",(function(){return N})),n.d(t,"i",(function(){return L})),n.d(t,"h",(function(){return w})),n.d(t,"j",(function(){return S})),n.d(t,"k",(function(){return E})),n.d(t,"m",(function(){return A})),n.d(t,"l",(function(){return P})),n.d(t,"n",(function(){return R}));var r="INIT_APP_SUCCESS",a="SHOW_PRELOADER",c="HIDE_PRELOADER",s=n(9),i="LOAD_USER",o="LOAD_USER_".concat(s.a.Pending),l="LOAD_USER_".concat(s.a.Fulfilled),d="LOAD_USER_".concat(s.a.Rejected),u="CREATE_USER",j="CREATE_USER_".concat(s.a.Pending),b="CREATE_USER_".concat(s.a.Fulfilled),p="CREATE_USER_".concat(s.a.Rejected),m="UPDATE_USER",f="UPDATE_USER_".concat(s.a.Pending),O="UPDATE_USER_".concat(s.a.Fulfilled),h="UPDATE_USER_".concat(s.a.Rejected),g="LOGOUT",v="LOAD_USERS",x="LOAD_USERS_".concat(s.a.Pending),y="LOAD_USERS_".concat(s.a.Fulfilled),_="LOAD_USERS_".concat(s.a.Rejected),N="LOAD_CONTENT",L="LOAD_CONTENT_".concat(s.a.Pending),w="LOAD_CONTENT_".concat(s.a.Fulfilled),S="LOAD_CONTENT_".concat(s.a.Rejected),E="LOAD_PLAYERS",A="LOAD_PLAYERS_".concat(s.a.Pending),P="LOAD_PLAYERS_".concat(s.a.Fulfilled),R="LOAD_PLAYERS_".concat(s.a.Rejected)},51:function(e,t,n){"use strict";var r=n(20),a=n(5),c={isInitialized:!1},s={show:!1},i=n(4),o=n(12),l={players:[],isLoading:!1,response:null,error:!1},d={enable_selection:!1,login_label:"frank michael smith's",login_text:"Choose 1 player from each tier. The team with the most total points scored through the whole tournament wins!",login_consent:"By participating, you consent to receive recurring autodialed SMS/MMS promotional messages. No purchase required. Msg&data rates may apply. Reply HELP for help, or STOP to end.",main_selection_rules:"Choose 1 player from each tier. The team with the most total points scored through the whole tournament wins!",main_selected_players:"Thanks for entering.",main_empty:"Contest 38 is closed! Must be following Frank & SBD",leaderboard_label:"leaderboard",leaderboard_empty:'"March Madness" else didn\'t start',isLoading:!1,response:null,error:!1},u={isLoading:!1,response:[],error:!1},j={isLoading:!1,response:null,error:!1},b=Object(r.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.f:return{isInitialized:!0};default:return e}},preloader:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.x:return{show:!0};case a.e:return{show:!1};default:return e}},players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.m:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!0});case a.n:var n=t.payload.response||{},r=n.data;return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,response:r,error:!0});case a.l:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,players:Object(o.c)(t.payload.data),response:t.payload.data,error:!1});default:return e}},content:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.i:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!0});case a.j:var n=t.payload.response||{},r=n.data;return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,response:r,error:!0});case a.h:var c=t.payload.data,s=Object(o.b)(c);return Object(i.a)(Object(i.a)({},s),{},{response:c,isLoading:!1,error:!1});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.r:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!0});case a.s:var n=t.payload.response||{},r=n.data;return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,response:r,error:!0});case a.q:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,response:t.payload.data.records,error:!1});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.u:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!0});case a.v:var n=t.payload.response||{};n.data;return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,response:null,error:!0});case a.t:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,response:t.payload.data,error:!1});case a.c:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!0});case a.d:var r=t.payload.response||{};r.data;return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,response:null,error:!0});case a.b:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,response:t.payload.data,error:!1});case a.A:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!0});case a.B:var c=t.payload.response||{};c.data;return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,response:null,error:!0});case a.z:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,response:t.payload.data,error:!1});case a.w:return{isLoading:!1,response:null,error:!1};default:return e}}});t.a=b},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return e.app.isInitialized}},82:function(e,t){},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(e){return e.users.isLoading},a=function(e){return e.users.response}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return e.content.enable_selection}},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));n(47);var r=function(e){return e.players.isLoading},a=function(e){return e.players.players}}},[[256,1,2]]]);
//# sourceMappingURL=main.5d1f1e7d.chunk.js.map