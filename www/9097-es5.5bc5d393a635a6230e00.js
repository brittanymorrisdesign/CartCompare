!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(self.webpackChunkcartCompare=self.webpackChunkcartCompare||[]).push([[9097],{9097:function(t,i,o){"use strict";o.r(i),o.d(i,{LoginPageModule:function(){return d}});var r,a,c=o(8583),u=o(665),s=o(8945),l=o(3550),f=o(7716),p=o(6847),g=[{path:"",component:(r=function(){function t(e,i){n(this,t),this.authService=e,this.router=i}var i,o,r;return i=t,(o=[{key:"ngOnInit",value:function(){}},{key:"logIn",value:function(n,e){var t=this;this.authService.SignIn(n.value,e.value).then(function(n){if(!t.authService.isLoggedIn)return window.alert("Email is not verified"),!1;t.router.navigate(["scan"])}).catch(function(n){window.alert(n.message)})}}])&&e(i.prototype,o),r&&e(i,r),t}(),r.\u0275fac=function(n){return new(n||r)(f.Y36(p.$),f.Y36(l.F0))},r.\u0275cmp=f.Xpm({type:r,selectors:[["app-login"]],decls:17,vars:0,consts:[["src","assets/logo_horizontal.png"],["lines","full"],["position","floating"],["type","text","required",""],["email",""],["type","password","required",""],["password",""],["type","submit","color","secondary","expand","block",3,"click"]],template:function(n,e){1&n&&(f.TgZ(0,"ion-content"),f._UZ(1,"img",0),f.TgZ(2,"form"),f.TgZ(3,"ion-item",1),f.TgZ(4,"ion-label",2),f._uU(5,"Email"),f.qZA(),f._UZ(6,"ion-input",3,4),f.qZA(),f.TgZ(8,"ion-item",1),f.TgZ(9,"ion-label",2),f._uU(10,"Password"),f.qZA(),f._UZ(11,"ion-input",5,6),f.qZA(),f.TgZ(13,"ion-row"),f.TgZ(14,"ion-col"),f.TgZ(15,"ion-button",7),f.NdJ("click",function(){return e.authService.GoogleAuth()}),f._uU(16," Login with Google "),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA())},directives:[s.W2,u._Y,u.JL,u.F,s.Ie,s.Q$,s.pK,s.j9,s.Nd,s.wI,s.YG],styles:[""]}),r)}],h=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[[l.Bz.forChild(g)],l.Bz]}),e}(),d=((a=function e(){n(this,e)}).\u0275fac=function(n){return new(n||a)},a.\u0275mod=f.oAB({type:a}),a.\u0275inj=f.cJS({imports:[[c.ez,u.u5,s.Pc,h]]}),a)}}])}();