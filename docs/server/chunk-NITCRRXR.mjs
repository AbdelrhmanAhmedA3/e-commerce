import './polyfills.server.mjs';
import{c as E}from"./chunk-LFHH2R7P.mjs";import{a as V}from"./chunk-C4RYJP7S.mjs";import{e as A,f as L,g as _,i as F,j as I,k as j,l as D}from"./chunk-TYGUNX5N.mjs";import{a as R,b as z}from"./chunk-B5QCGC4N.mjs";import{a as H,b as G}from"./chunk-MOSTUY5M.mjs";import{Ab as k,Da as x,Ja as f,Na as u,R as C,Sa as o,Ta as i,Ua as a,Ub as w,V as g,Va as y,Vb as T,Wa as v,Xa as h,ab as b,bb as c,ca as O,da as P,db as S,fb as s,wa as m,xa as d}from"./chunk-SBNCQXMG.mjs";var Y=(()=>{let t=class t{constructor(){this.title="e-commerce"}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=g({type:t,selectors:[["app-root"]],standalone:!0,features:[s],decls:1,vars:0,template:function(n,p){n&1&&a(0,"router-outlet")},dependencies:[_]});let e=t;return e})();var N=(e,t)=>{let l=C(F);return localStorage.getItem("authToken")?!0:(l.navigate(["login"]),!1)};var $=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=g({type:t,selectors:[["app-footer"]],standalone:!0,features:[s],decls:8,vars:0,consts:[[1,"logo"],[1,"figure-logo"],["src","assets/Images/Logomark.png","alt","LOGO",1,"img-logo"],[1,"figcaption"],[1,"copy-right"]],template:function(n,p){n&1&&(o(0,"section",0)(1,"figure",1),a(2,"img",2),o(3,"figcaption",3),c(4," ClickTik "),i()(),o(5,"article")(6,"span",4),c(7," \xA9 2022 ClickTik "),i()()())},styles:[".input-error[_ngcontent-%COMP%]{font-size:12px;padding:0 6px;animation:_ngcontent-%COMP%_input-message .3s ease-in-out;color:red;transition:.3s}@keyframes _ngcontent-%COMP%_input-message{0%{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}.logo[_ngcontent-%COMP%]{bottom:0;left:0;display:flex;align-items:center;gap:0;flex-wrap:wrap;justify-content:space-between;padding:48px 60px;background-color:#1d2939}.logo[_ngcontent-%COMP%]   .figure-logo[_ngcontent-%COMP%]{margin:0;display:flex;align-items:center;gap:5px}.logo[_ngcontent-%COMP%]   .figure-logo[_ngcontent-%COMP%]   .img-logo[_ngcontent-%COMP%]{width:32px;height:32px}.logo[_ngcontent-%COMP%]   .figure-logo[_ngcontent-%COMP%]   .figcaption[_ngcontent-%COMP%]{color:#fff}.logo[_ngcontent-%COMP%]   .copy-right[_ngcontent-%COMP%]{color:#98a2b3}"]});let e=t;return e})();function U(e,t){e&1&&(o(0,"button",10),c(1,"Log in"),i())}function W(e,t){if(e&1&&(o(0,"span",20),c(1),i()),e&2){let l=h(2);m(),S(" ",l.addToCart.totalNumber," ")}}function X(e,t){if(e&1){let l=y();o(0,"article",11)(1,"label",12)(2,"figure",13),a(3,"img",14),i()(),o(4,"input",15,0),v("input",function(){O(l);let n=b(5),p=h();return P(p.searchService.searchTerm$.next(n.value))}),i()(),o(6,"article",16)(7,"button",17)(8,"figure",18),a(9,"img",19),f(10,W,2,1,"span",20),i()()(),o(11,"article",21)(12,"strong"),c(13,"Account"),i()()}if(e&2){let l=h();m(10),u(10,l.addToCart.totalNumber!=0?10:-1)}}var q=(()=>{let t=class t{constructor(r,n){this.auth=r,this.addToCart=n,this.search=x(!1),this.searchService=C(R)}ngOnInit(){this.auth.token.next(localStorage.getItem("authToken"))}};t.\u0275fac=function(n){return new(n||t)(d(V),d(z))},t.\u0275cmp=g({type:t,selectors:[["app-header"]],outputs:{search:"search"},standalone:!0,features:[s],decls:15,vars:2,consts:[["searchField",""],[1,"layout"],[1,"logo"],[1,"figure-logo"],["src","assets/Images/Logomark.png","alt","LOGO",1,"logo"],[1,"figcaption"],[1,"group-right-side"],[1,"un-o-l"],["routerLink","products","routerLinkActive","selected",1,"link"],[1,"group-search-cart-account"],["type","button",1,"btn-login"],[1,"search"],["for","search"],[1,"figure-search"],["src","assets/Images/Shape.png","alt","shape"],["id","search","type","search","placeholder","Search",1,"input-search",3,"input"],[1,"cart"],["type","button",1,"btn-basic"],[1,"figure-cart"],["src","assets/Images/Cart.png","alt","shape"],[1,"badge"],[1,""]],template:function(n,p){n&1&&(o(0,"header")(1,"nav",1)(2,"section",2)(3,"figure",3),a(4,"img",4),o(5,"figcaption",5),c(6," ClickTik "),i()()(),o(7,"section",6)(8,"ul",7)(9,"li")(10,"a",8),c(11,"Home"),i()()(),o(12,"section",9),f(13,U,2,0,"button",10)(14,X,14,1),i()()()()),n&2&&(m(13),u(13,p.auth.token.getValue()==null?13:-1),m(),u(14,p.auth.token.getValue()!=null?14:-1))},dependencies:[I,j],styles:[".input-error[_ngcontent-%COMP%]{font-size:12px;padding:0 6px;animation:_ngcontent-%COMP%_input-message .3s ease-in-out;color:red;transition:.3s}@keyframes _ngcontent-%COMP%_input-message{0%{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}.figure-m-none[_ngcontent-%COMP%], .layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .group-search-cart-account[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .figure-cart[_ngcontent-%COMP%], .layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .group-search-cart-account[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .figure-search[_ngcontent-%COMP%], .layout[_ngcontent-%COMP%]   .figure-logo[_ngcontent-%COMP%]{margin:0}.layout[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.523);display:flex;flex-wrap:wrap;gap:40px;padding:15px 60px}.layout[_ngcontent-%COMP%]   .figure-logo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px}.layout[_ngcontent-%COMP%]   .figure-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:32px;height:32px}.layout[_ngcontent-%COMP%]   .figure-logo[_ngcontent-%COMP%]   .figcaption[_ngcontent-%COMP%]{font-weight:600}.layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:space-between;flex-grow:1}.layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .un-o-l[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .un-o-l[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{padding:5px 10px;transition:.3s;text-decoration:none;color:#000}.layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .un-o-l[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover{background:#f0f0f0}.layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .un-o-l[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{background-color:#8080803d}.layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%]{position:relative;cursor:pointer;background:transparent;outline:unset;border:none;padding:9px 10px 5px;transition:.3s}.layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%]:hover{background:#f0f0f0}.layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .group-search-cart-account[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex;align-items:center;gap:15px}.layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .group-search-cart-account[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{width:350px;padding:8px 10px 3px;border:1px solid rgb(66,66,66);border-radius:8px;display:flex;align-items:center;gap:5px}.layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .group-search-cart-account[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{width:100%;font-size:17px;letter-spacing:1px;border:unset;outline:unset}.layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .group-search-cart-account[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]::placeholder{transition:.3s;opacity:1}.layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .group-search-cart-account[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]:focus::placeholder{opacity:0}.layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .group-search-cart-account[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .figure-cart[_ngcontent-%COMP%]{position:relative}.layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .group-search-cart-account[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .figure-cart[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{position:absolute;width:25px;height:24px;font-size:12px;left:47%;border:3px solid white;bottom:65%;background-color:#41cccc;border-radius:50%;display:flex;align-items:center;gap:0;justify-content:center}.layout[_ngcontent-%COMP%]   .group-right-side[_ngcontent-%COMP%]   .group-search-cart-account[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]   .btn-basic[_ngcontent-%COMP%]{padding:0;background-color:transparent;border:none;cursor:pointer}@media only screen and (max-width: 428px){.search[_ngcontent-%COMP%]{width:100%!important}}"]});let e=t;return e})();function Z(e,t){e&1&&a(0,"app-loading-spinner")}var B=(()=>{let t=class t{constructor(r){this.loadingSpiner=r}ngOnInit(){}};t.\u0275fac=function(n){return new(n||t)(d(G))},t.\u0275cmp=g({type:t,selectors:[["app-main"]],standalone:!0,features:[s],decls:5,vars:1,consts:[["id","main"]],template:function(n,p){n&1&&(f(0,Z,1,0,"app-loading-spinner"),a(1,"app-header"),o(2,"main",0),a(3,"router-outlet"),i(),a(4,"app-footer")),n&2&&u(0,p.loadingSpiner.isLoading()?0:-1)},dependencies:[_,$,H,q],styles:["#main[_ngcontent-%COMP%]{min-height:calc(100vh - 8rem)}"]});let e=t;return e})();var J=[{path:"",pathMatch:"full",redirectTo:"login"},{path:"",title:"home",component:B,children:[{path:"login",loadComponent:()=>import("./chunk-VU7KSWH5.mjs").then(e=>e.AuthComponent)},{path:"products",loadComponent:()=>import("./chunk-UMFZ6MFK.mjs").then(e=>e.ProductsComponent),canActivate:[N]},{path:"**",redirectTo:"login"}]},{path:"**",redirectTo:"login"}];var K={providers:[D(J),L(),w(T())]};var tt={providers:[E()]},Q=k(K,tt);var et=()=>A(Y,Q),Vt=et;export{Vt as a};
