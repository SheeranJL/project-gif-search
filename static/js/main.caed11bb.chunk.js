(this["webpackJsonpgif-search-app"]=this["webpackJsonpgif-search-app"]||[]).push([[0],{58:function(e,t,n){},60:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(12),c=n.n(a),r=n(49),s=n.n(r),i=(n(58),n(0)),o=n.n(i),u=n(16),l=n(36),d=n(3),j=(n(60),n(31)),b=(n(83),n(61),n(82),n(63),function(){var e=Object(d.a)(o.a.mark((function e(t,n){var a,c,r,s,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=m.doc("users/".concat(t.uid)),c=m.collection("users"),e.next=6,a.get();case 6:return r=e.sent,e.next=9,c.get();case 9:if(e.sent,r.exists){e.next=21;break}return s=t.displayName,i=t.email,u=new Date,e.prev=13,e.next=16,a.set({user:Object(l.a)({displayName:s,email:i,createdAt:u},n),data:{additionalData:n}});case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(13),console.log("error creating account",e.t0);case 21:return e.abrupt("return",a);case 22:case"end":return e.stop()}}),e,null,[[13,18]])})));return function(t,n){return e.apply(this,arguments)}}()),f=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("users").doc(t);case 2:return n=e.sent,e.next=5,n.get();case 5:if((a=e.sent).exists){e.next=10;break}console.log("no data for user"),e.next=12;break;case 10:return console.log(a.data()),e.abrupt("return",a.data());case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.doc("users/".concat(t)),m.collection("users/".concat(t,"/data")),a=m.collection("users").doc(t),e.prev=3,e.next=6,a.update({data:n});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.log("Error saving data",e.t0);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t,n){return e.apply(this,arguments)}}();j.a.initializeApp({apiKey:"AIzaSyAlx7NLSfWvOYIUsT1YSIICW3s17BS3oZI",authDomain:"gif-search-app-39faa.firebaseapp.com",projectId:"gif-search-app-39faa",storageBucket:"gif-search-app-39faa.appspot.com",messagingSenderId:"954418677105",appId:"1:954418677105:web:cf01c1c71cb877e04662d0",measurementId:"G-75Y0HLMX40"});var h=j.a.auth(),m=j.a.firestore(),O=(j.a.analytics(),new j.a.auth.GoogleAuthProvider);O.setCustomParameters({prompt:"select_account"});j.a;var g=n(14),v=n(9),x=Object(a.createContext)(),N=function(e){var t=Object(a.useState)("cats"),n=Object(g.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)([]),i=Object(g.a)(s,2),l=i[0],j=i[1],b=Object(a.useState)(!0),f=Object(g.a)(b,2),h=f[0],m=f[1],O=Object(g.a)("",2),N=(O[0],O[1]),w=Object(a.useState)([]),S=Object(g.a)(w,2),k=S[0],y=S[1],C=Object(a.useState)("/"),I=Object(g.a)(C,2),P=I[0],M=I[1],D=Object(a.useState)(null),E=Object(g.a)(D,2),F=E[0],A=E[1],U=Object(a.useState)(!0),L=Object(g.a)(U,2),B=L[0],G=L[1];Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.giphy.com/v1/gifs/search?api_key=".concat("ukcN2yaE6mkO1qiWkaf9DlobDlAguWh9","&q=").concat(c,"&limit=24&offset=0&rating=g&lang=en"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,console.log(n),!n.data.length){e.next=15;break}return e.next=10,j(n.data);case 10:return e.next=12,m(!1);case 12:G(!1),e.next=18;break;case 15:return j([]),e.next=18,m(!0);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();F&&p(F.id,k),e(c)}),[c,k]);return Object(v.jsx)(x.Provider,{value:{data:{gifs:l,search:c,loading:h,saved:k,location:P,currentUser:F,isFirstRender:B},actions:{updateSearch:function(e){r(e)},setTest:N,setSaved:y,setLocation:M,setCurrentUser:A,removeItemFromSaved:function(e){console.log(e);var t=k.filter((function(t){return t.id!==e}));y(Object(u.a)(t))},setIsFirstRender:G,setSearch:r}},children:e.children})},w=n(27),S=n(19),k=(n(65),n(66),n(53)),y=(n(67),["children","isGoogleButton","onClick"]),C=function(e){var t=e.children,n=e.isGoogleButton,a=e.onClick;Object(k.a)(e,y);return Object(v.jsx)("button",{onClick:a,type:n?"button":"",className:"".concat(n?"custom-button google":""," custom-button"),children:t})},I=function(e){var t=Object(a.useContext)(x),n=t.actions,c=t.data;return Object(v.jsxs)("div",{className:"image",children:[Object(v.jsx)("img",{className:"gif",src:e.data.images.fixed_width.webp}),c.currentUser?Object(v.jsx)("button",{onClick:function(){c.saved.find((function(t){return t.id===e.data.id}))||n.setSaved([].concat(Object(u.a)(c.saved),[e.data]))},className:"save-image-button",children:"Save"}):null]})},P=(n(68),function(e){var t=e.message;return Object(v.jsx)("div",{className:"no-gifs-container",children:Object(v.jsx)("h2",{className:"no-gifs-desc",children:t})})}),M=(n(69),function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1],r=Object(a.useContext)(x),s=(r.data,r.actions),i=["cats","dogs","trees","pizza","space","computers","crystals","colors","rainbow","coffee","food","beaches","funny","weird","funny","famous","interesting","memes","cute","scary","movies","robots","cars","sports","disco","fractals","pigs"],o=Object(a.useState)(i[Math.floor(Math.random()*(i.length-1)+1)]),u=Object(g.a)(o,2),l=u[0],d=u[1];Object(a.useEffect)((function(){j()}),[]);var j=function(){setInterval((function(){var e=Math.floor(Math.random()*(i.length-1)+1);d(i[e])}),3e3)};return Object(v.jsx)("div",{className:"search-bar",children:Object(v.jsx)("form",{onSubmit:function(e){e.preventDefault(),s.updateSearch(n),c("")},children:Object(v.jsx)("div",{className:"input-field-container",children:Object(v.jsx)("input",{className:"input-field",onChange:function(e){c(e.target.value)},type:"text",placeholder:"Search for ".concat(l),value:n})})})})}),D=function(){var e=Object(a.useContext)(x),t=e.data;e.loading;return Object(v.jsxs)("div",{className:"image-page-container",children:[Object(v.jsx)("div",{className:"search-bar-comtainer",children:Object(v.jsx)(M,{})}),t.loading?Object(v.jsx)(P,{message:t.isFirstRender?"Loading..":"No images found for ".concat(t.search||null,", search again.")}):Object(v.jsx)("div",{className:"image-container",children:t.gifs.map((function(e){return Object(v.jsx)(I,{data:e})}))})]})},E=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(D,{})})},F=(n(70),n(71),function(e){var t=e.data,n=Object(a.useContext)(x).actions;return Object(v.jsxs)("div",{className:"saved-image-container",children:[Object(v.jsxs)("div",{className:"image-saved",children:[Object(v.jsx)("img",{className:"actual-saved-image",src:t.images.downsized_medium.url}),Object(v.jsx)("button",{className:"remove-button",onClick:function(){n.removeItemFromSaved(t.id)},children:"Remove"})]}),Object(v.jsx)("div",{className:"title-info",children:Object(v.jsx)("h3",{children:t.title})})]})}),A=(n(72),function(){var e=Object(a.useContext)(x).data;return Object(v.jsx)("div",{className:"no-images-container",children:0===e.saved.length&&null!==e.currentUser?Object(v.jsx)("h2",{className:"no-images-desc",children:"Images you save will show here"}):Object(v.jsxs)("h2",{className:"no-images-desc",children:["Please ",Object(v.jsx)(w.b,{className:"direct-to-login",to:"/login",children:"Login"})," to save images"]})})}),U=function(){var e=Object(a.useContext)(x),t=e.data;e.actions;return Object(v.jsx)("div",{className:"saved-page-container",children:t.saved.length?t.saved.map((function(e,t){return Object(v.jsx)(F,{data:e},e.id)})):Object(v.jsx)(A,{})})},L=(n(77),function(){var e=Object(a.useContext)(x),t=e.data,n=(t.search,t.location,t.saved,t.currentUser),c=e.actions,r=(Object(S.g)(),Object(S.f)()),s=function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.signOut();case 2:return e.next=4,c.setSaved([]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"nav-bar-container",children:[Object(v.jsx)("div",{onClick:function(){r.push("/"),c.setSearch("cats")},className:"title",children:Object(v.jsx)("span",{children:"Gif Search"})}),Object(v.jsx)("div",{className:"login-out-buttons"}),Object(v.jsxs)("div",{className:"login-out-buttons",children:[Object(v.jsx)(w.b,{className:"saved",to:"/",onClick:function(){return c.setSearch("cats")},children:"Home"}),Object(v.jsx)(w.b,{className:"saved",to:"/saved",children:"Saved"}),n?Object(v.jsx)("span",{className:"logout",onClick:s,children:"Signout"}):Object(v.jsx)(w.b,{className:"saved",to:"/login",children:"Login"})]})]})}),B=(n(78),n(79),function(e){var t=e.toggleMethod,n=e.currentMethod,c=Object(a.useState)(""),r=Object(g.a)(c,2),s=r[0],i=r[1],u=Object(a.useState)(""),l=Object(g.a)(u,2),j=l[0],b=l[1],f=Object(S.f)(),p=Object(a.useState)(!1),m=Object(g.a)(p,2),x=m[0],N=m[1],w=function(e){"email"===e.target.name?i(e.target.value):b(e.target.value)},k=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.signInWithEmailAndPassword(s,j);case 4:i(""),b(""),N(!1),f.push("/"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("error signing in w/ u/p",e.t0),N(!0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.signInWithPopup(O);case 3:f.push("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("error signing in with google");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"login-container",children:[Object(v.jsx)("h3",{children:"Log in with existing account"}),Object(v.jsxs)("form",{className:"login-form",onSubmit:k,children:[Object(v.jsx)("label",{for:"email",children:"Email"}),Object(v.jsx)("input",{type:"email",name:"email",value:s,onChange:w}),Object(v.jsx)("label",{for:"password",children:"Password"}),Object(v.jsx)("input",{type:"password",name:"password",value:j,onChange:w}),Object(v.jsxs)("div",{className:"sign-in-buttons",children:[Object(v.jsx)(C,{children:"Sign in"}),Object(v.jsx)(C,{isGoogleButton:!0,onClick:y,children:"Google"})]}),Object(v.jsx)("p",{className:x?"incorrect-login":"hidden",children:"Incorrect login"}),Object(v.jsx)("span",{className:"toggle-method",onClick:function(){return t(!n)},children:" Don't have an account? Create one! "})]})]})}),G=(n(80),function(e){var t=e.toggleMethod,n=e.currentMethod,c=Object(a.useState)(""),r=Object(g.a)(c,2),s=r[0],i=r[1],u=Object(a.useState)(""),l=Object(g.a)(u,2),j=l[0],f=l[1],p=Object(a.useState)(""),m=Object(g.a)(p,2),O=m[0],x=m[1],N=Object(a.useState)(""),w=Object(g.a)(N,2),k=w[0],y=w[1],I=Object(a.useState)(!0),P=Object(g.a)(I,2),M=P[0],D=P[1],E=Object(S.f)(),F=function(e){"displayName"===e.target.name?i(e.target.value):"email"===e.target.name?f(e.target.value):"password"===e.target.name?x(e.target.value):"confirmedPassword"===e.target.name&&y(e.target.value)},A=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(j,O),t.preventDefault(),O===k){e.next=5;break}return D(!1),e.abrupt("return");case 5:return e.prev=5,e.next=8,h.createUserWithEmailAndPassword(j,O);case 8:return n=e.sent,a=n.user,e.next=12,b(a,{displayName:s});case 12:i(""),f(""),x(""),y(""),D(!0),E.push("/"),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),console.log("Error during signup",e.t0);case 23:case"end":return e.stop()}}),e,null,[[5,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"signup-container",children:[Object(v.jsx)("h3",{children:"Create a new account"}),Object(v.jsxs)("form",{className:"login-form",onSubmit:A,children:[Object(v.jsx)("label",{for:"displayName",children:"Username"}),Object(v.jsx)("input",{type:"displayName",name:"displayName",onChange:F,value:s}),Object(v.jsx)("label",{for:"email",children:"Email"}),Object(v.jsx)("input",{type:"email",name:"email",onChange:F,value:j}),Object(v.jsx)("label",{className:M?"":"no-match",for:"password",children:"Password"}),Object(v.jsx)("input",{type:"password",name:"password",onChange:F,value:O}),Object(v.jsx)("label",{className:M?"":"no-match",for:"confirmedPassword",children:"Confirm Password"}),Object(v.jsx)("input",{type:"password",name:"confirmedPassword",onChange:F,value:k}),Object(v.jsx)(C,{type:"submit",children:"Sign up!"}),Object(v.jsx)("span",{className:"toggle-method",onClick:function(){return t(!n)},children:" Already have an account? Sign in! "})]})]})}),W=function(){var e=Object(a.useState)(!0),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(v.jsx)("div",{className:"sign-in-and-up-container",children:n?Object(v.jsx)(B,{toggleMethod:c,currentMethod:n}):Object(v.jsx)(G,{toggleMethod:c,currentMethod:n})})};var R=function(){var e=Object(a.useContext)(x),t=e.data,n=e.actions;return Object(a.useEffect)((function(){h.onAuthStateChanged(function(){var e=Object(d.a)(o.a.mark((function e(a){var c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=7;break}return e.next=3,b(a,t.saved);case 3:c=e.sent,t.isFirstRender&&c.onSnapshot((function(e){n.setCurrentUser(Object(l.a)(Object(l.a)({id:e.id},e.data),{},{userData:{displayName:a.displayName,email:a.email}}))})),r=function(){var e=Object(d.a)(o.a.mark((function e(){var t,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(a.uid);case 2:return t=e.sent,e.next=5,t;case 5:if(c=e.sent,console.log(c),!c.data.length){e.next=15;break}return e.next=10,c.data.map((function(e){return e}));case 10:return r=e.sent,e.next=13,n.setSaved(Object(u.a)(r));case 13:e.next=16;break;case 15:return e.abrupt("return");case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r();case 7:n.setCurrentUser(a),n.setIsFirstRender(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(v.jsx)("div",{className:"app-container",children:Object(v.jsxs)(w.a,{basename:"/project-gif-search",children:[Object(v.jsx)(L,{}),Object(v.jsxs)(S.c,{children:[Object(v.jsx)(S.a,{exact:!0,path:"/",component:E}),Object(v.jsx)(S.a,{path:"/saved",component:U}),Object(v.jsx)(S.a,{path:"/login",component:W})]})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(v.jsx)(N,{children:Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)("div",{className:"main-app-container",children:Object(v.jsx)(R,{})})})}),document.getElementById("root")),z()}},[[81,1,2]]]);
//# sourceMappingURL=main.caed11bb.chunk.js.map