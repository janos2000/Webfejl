"use strict";(self.webpackChunkwebfejlesztes_projekt=self.webpackChunkwebfejlesztes_projekt||[]).push([[742],{7742:(P,p,n)=>{n.r(p),n.d(p,{LoginModule:()=>O});var a=n(6895),m=n(1779),_=n(5861),s=n(4006),r=n(4650),v=n(629),l=n(9549),g=n(4144),u=n(9101),f=n(3238),d=n(1281);const y=["determinateSpinner"];function b(i,o){if(1&i&&(r.O4$(),r.TgZ(0,"svg",11),r._UZ(1,"circle",12),r.qZA()),2&i){const e=r.oxw();r.uIk("viewBox",e._viewBox()),r.xp6(1),r.Udp("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),r.uIk("r",e._circleRadius())}}const k=(0,f.pj)(class{constructor(i){this._elementRef=i}},"primary"),w=new r.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function M(){return{diameter:h}}}),h=100;let T=(()=>{class i extends k{constructor(e,t,c){super(e),this.mode="mat-spinner"===this._elementRef.nativeElement.nodeName.toLowerCase()?"indeterminate":"determinate",this._value=0,this._diameter=h,this._noopAnimations="NoopAnimations"===t&&!!c&&!c._forceAnimations,c&&(c.color&&(this.color=this.defaultColor=c.color),c.diameter&&(this.diameter=c.diameter),c.strokeWidth&&(this.strokeWidth=c.strokeWidth))}get value(){return"determinate"===this.mode?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,(0,d.su)(e)))}get diameter(){return this._diameter}set diameter(e){this._diameter=(0,d.su)(e)}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=(0,d.su)(e)}_circleRadius(){return(this.diameter-10)/2}_viewBox(){const e=2*this._circleRadius()+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}}return i.\u0275fac=function(e){return new(e||i)(r.Y36(r.SBq),r.Y36(r.QbO,8),r.Y36(w))},i.\u0275cmp=r.Xpm({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(e,t){if(1&e&&r.Gf(y,5),2&e){let c;r.iGM(c=r.CRH())&&(t._determinateCircle=c.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:12,hostBindings:function(e,t){2&e&&(r.uIk("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),r.Udp("width",t.diameter,"px")("height",t.diameter,"px"),r.ekj("_mat-animation-noopable",t._noopAnimations)("mdc-circular-progress--indeterminate","indeterminate"===t.mode))},inputs:{color:"color",mode:"mode",value:"value",diameter:"diameter",strokeWidth:"strokeWidth"},exportAs:["matProgressSpinner"],features:[r.qOj],decls:14,vars:11,consts:[["circle",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["determinateSpinner",""],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(e,t){if(1&e&&(r.YNc(0,b,2,8,"ng-template",null,0,r.W1O),r.TgZ(2,"div",1,2),r.O4$(),r.TgZ(4,"svg",3),r._UZ(5,"circle",4),r.qZA()(),r.kcU(),r.TgZ(6,"div",5)(7,"div",6)(8,"div",7),r.GkF(9,8),r.qZA(),r.TgZ(10,"div",9),r.GkF(11,8),r.qZA(),r.TgZ(12,"div",10),r.GkF(13,8),r.qZA()()()),2&e){const c=r.MAs(1);r.xp6(4),r.uIk("viewBox",t._viewBox()),r.xp6(1),r.Udp("stroke-dasharray",t._strokeCircumference(),"px")("stroke-dashoffset",t._strokeDashOffset(),"px")("stroke-width",t._circleStrokeWidth(),"%"),r.uIk("r",t._circleRadius()),r.xp6(4),r.Q6J("ngTemplateOutlet",c),r.xp6(2),r.Q6J("ngTemplateOutlet",c),r.xp6(2),r.Q6J("ngTemplateOutlet",c)}},dependencies:[a.tP],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, transparent)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0}),i})(),C=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[a.ez,f.BQ]}),i})();function x(i,o){1&i&&(r.TgZ(0,"span",8),r._UZ(1,"mat-spinner"),r.qZA())}const Z=[{path:"",component:(()=>{class i{constructor(e,t){this.router=e,this.authService=t,this.email=new s.NI(""),this.password=new s.NI(""),this.loading=!1}ngOnInit(){}login(){var e=this;return(0,_.Z)(function*(){e.loading=!0,null!=e.email.value&&null!=e.password.value&&e.authService.login(e.email.value,e.password.value).then(t=>{e.router.navigateByUrl("/main"),e.loading=!1}).catch(t=>{console.log(t),e.loading=!1})})()}ngOnDestroy(){this.loadingSubscription?.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(r.Y36(m.F0),r.Y36(v.e))},i.\u0275cmp=r.Xpm({type:i,selectors:[["app-login"]],decls:19,vars:3,consts:[["class","loading",4,"ngIf"],[1,"main_component"],["for","email"],["matInput","","type","text",3,"formControl"],["for","password"],["matInput","","type","password","id","password",3,"formControl"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","primary","routerLink","/signup"],[1,"loading"]],template:function(e,t){1&e&&(r.YNc(0,x,2,0,"span",0),r.TgZ(1,"div",1)(2,"h1"),r._uU(3,"Bejelentkez\xe9s"),r.qZA(),r.TgZ(4,"mat-form-field")(5,"mat-label",2),r._uU(6,"Email: "),r.qZA(),r._UZ(7,"input",3),r.qZA(),r.TgZ(8,"mat-form-field")(9,"mat-label",4),r._uU(10,"Jelsz\xf3: "),r.qZA(),r._UZ(11,"input",5),r.qZA(),r.TgZ(12,"span")(13,"span")(14,"button",6),r.NdJ("click",function(){return t.login()}),r._uU(15,"Bejelentkez\xe9s"),r.qZA()(),r.TgZ(16,"span")(17,"button",7),r._uU(18,"Regisztr\xe1ci\xf3"),r.qZA()()()()),2&e&&(r.Q6J("ngIf",t.loading),r.xp6(7),r.Q6J("formControl",t.email),r.xp6(4),r.Q6J("formControl",t.password))},dependencies:[a.O5,m.rH,s.Fj,s.JJ,s.oH,l.KE,l.hX,g.Nt,u.lW,T],styles:["div[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:center;height:100%}.main_component[_ngcontent-%COMP%]{height:90vh;align-items:center}span[_ngcontent-%COMP%]{padding:5px}mat-form-field[_ngcontent-%COMP%]{width:30%}"]}),i})()}];let A=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[m.Bz.forChild(Z),m.Bz]}),i})(),O=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[a.ez,A,s.UX,l.lN,g.c,u.ot,C]}),i})()}}]);