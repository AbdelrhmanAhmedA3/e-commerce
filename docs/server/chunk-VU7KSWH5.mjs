import './polyfills.server.mjs';
import{a as F}from"./chunk-C4RYJP7S.mjs";import{i as b}from"./chunk-TYGUNX5N.mjs";import{a as I,b as P,c as E,d as k,e as D,f as _,g as j,h as N,i as T}from"./chunk-2YFNFPTU.mjs";import{b as w}from"./chunk-MOSTUY5M.mjs";import{Ja as u,La as d,Na as g,Sa as i,Ta as a,Ua as f,V as l,Wa as x,Xa as h,Y as v,bb as s,db as M,fb as C,hb as y,jb as S,wa as p,xa as c}from"./chunk-SBNCQXMG.mjs";import"./chunk-VVCT4QZE.mjs";var q=(()=>{let e=class e{transform(r,n){return r[Object.keys(n)[0]]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=v({name:"validation",type:e,pure:!0,standalone:!0});let t=e;return t})();function L(t,e){if(t&1&&(i(0,"span",0),s(1),y(2,"validation"),a()),t&2){let m=h();p(),M(" ",S(2,1,m.errorMessages,m.control.errors),`
`)}}var G=(()=>{let e=class e{constructor(r){this.formDirective=r}ngOnInit(){}};e.\u0275fac=function(n){return new(n||e)(c(_))},e.\u0275cmp=l({type:e,selectors:[["app-error-field"]],inputs:{control:"control",errorMessages:"errorMessages"},standalone:!0,features:[C],decls:1,vars:1,consts:[[1,"input-error"]],template:function(n,o){n&1&&u(0,L,3,4,"span",0),n&2&&g(0,o.control.errors&&(o.control.touched||o.formDirective.submitted)?0:-1)},dependencies:[q],styles:[".input-error[_ngcontent-%COMP%]{font-size:12px;padding:0 6px;animation:_ngcontent-%COMP%_input-message .3s ease-in-out;color:red;transition:.3s}@keyframes _ngcontent-%COMP%_input-message{0%{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}"]});let t=e;return t})();function z(t,e){if(t&1&&(i(0,"span",12),s(1),a()),t&2){let m=h();p(),M(" ",m.errorMessage," ")}}var Z=(()=>{let e=class e{constructor(r,n,o,O){this.fb=r,this.auth=n,this.router=o,this.loadingSpiner=O,this.errorMessage="",this.validationMessages={email:{required:"user name is required"},password:{required:"password is required"}},this.authForm=this.fb.nonNullable.group({username:["emilys",[P.required]],password:["emilyspass",[P.required]]})}ngOnInit(){}onSubmit(){if(this.loadingSpiner.start(),!this.authForm.value){this.authForm.markAllAsTouched();return}this.auth.auth(this.authForm.controls.username.value,this.authForm.controls.password.value,30).subscribe({next:r=>{localStorage.setItem("authToken",r.token),this.router.navigate(["products"]),this.auth.token.next(localStorage.getItem("authToken"))},error:r=>{this.errorMessage=r?.error?.message||"An error occurred during login.",this.loadingSpiner.stop()}})}};e.\u0275fac=function(n){return new(n||e)(c(N),c(F),c(b),c(w))},e.\u0275cmp=l({type:e,selectors:[["app-auth"]],standalone:!0,features:[C],decls:21,vars:6,consts:[[1,"container"],[1,"figure"],["src","assets/Images/Logomark.png","alt","LOGO",1,"img"],[1,"title"],[1,"paragraph"],[1,"form",3,"ngSubmit","formGroup"],["for","username"],["formControlName","username","type","email","id","username","placeholder","Enter Your Email",1,"input"],[3,"control","errorMessages"],["for","password"],["formControlName","password","type","password","id","password","placeholder","Enter Your Password",1,"input"],[3,"errorMessages","control"],[1,"input-error"],["type","submit",1,"btn"]],template:function(n,o){n&1&&(i(0,"section",0)(1,"article")(2,"figure",1),f(3,"img",2),i(4,"figcaption")(5,"h1",3),s(6," Log in to your account "),a(),i(7,"p",4),s(8," Welcome back! Please enter your details. "),a()()(),i(9,"form",5),x("ngSubmit",function(){return o.onSubmit()}),i(10,"label",6),s(11,"username"),a(),f(12,"input",7)(13,"app-error-field",8),i(14,"label",9),s(15,"Password"),a(),f(16,"input",10)(17,"app-error-field",11),u(18,z,2,1,"span",12),i(19,"button",13),s(20,"Sign In "),a()()()()),n&2&&(p(9),d("formGroup",o.authForm),p(4),d("control",o.authForm.controls.username)("errorMessages",o.validationMessages.email),p(4),d("errorMessages",o.validationMessages.password)("control",o.authForm.controls.password),p(),g(18,o.errorMessage?18:-1))},dependencies:[T,D,I,E,k,_,j,G],styles:[".input-error[_ngcontent-%COMP%]{font-size:12px;padding:0 6px;animation:_ngcontent-%COMP%_input-message .3s ease-in-out;color:red;transition:.3s}@keyframes _ngcontent-%COMP%_input-message{0%{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}.container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:0;height:70vh;justify-content:center}.container[_ngcontent-%COMP%]   .figure[_ngcontent-%COMP%]{display:grid;justify-content:center}.container[_ngcontent-%COMP%]   .figure[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{margin:auto}.container[_ngcontent-%COMP%]   .figure[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:30px;margin:15px 0}.container[_ngcontent-%COMP%]   .figure[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%]{text-align:center;color:#667085}.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{display:grid;gap:5px}.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border-radius:8px;padding:10px 14px;width:100%;font-size:17px;letter-spacing:1px;border:1px solid rgb(208,213,221);outline:unset}.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]::placeholder{transition:.3s;opacity:1}.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus::placeholder{opacity:0}.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:flex;padding:10px 18px;background-color:#41cccc;border-radius:8px;border:unset;outline:unset;cursor:pointer}"]});let t=e;return t})();export{Z as AuthComponent};
