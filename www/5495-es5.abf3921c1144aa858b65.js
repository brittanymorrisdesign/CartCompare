!function(){function n(n,e,t,r,o,i,c){try{var u=n[i](c),a=u.value}catch(s){return void t(s)}u.done?e(a):Promise.resolve(a).then(r,o)}function e(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var c=e.apply(t,r);function u(e){n(c,o,i,u,a,"next",e)}function a(e){n(c,o,i,u,a,"throw",e)}u(void 0)})}}(self.webpackChunkcartCompare=self.webpackChunkcartCompare||[]).push([[5495],{5495:function(n,t,r){"use strict";r.r(t),r.d(t,{startStatusTap:function(){return c}});var o=r(3150),i=r(2377),c=function(){var n=window;n.addEventListener("statusTap",function(){(0,o.f)(function(){var t=document.elementFromPoint(n.innerWidth/2,n.innerHeight/2);if(t){var r=t.closest("ion-content");r&&new Promise(function(n){return(0,i.c)(r,n)}).then(function(){(0,o.c)(e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r.style.setProperty("--overflow","hidden"),n.next=3,r.scrollToTop(300);case 3:r.style.removeProperty("--overflow");case 4:case"end":return n.stop()}},n)})))})}})})}}}])}();