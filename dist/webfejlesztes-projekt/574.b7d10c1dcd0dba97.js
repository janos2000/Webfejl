"use strict";(self.webpackChunkwebfejlesztes_projekt=self.webpackChunkwebfejlesztes_projekt||[]).push([[574],{7574:(P,l,i)=>{i.r(l),i.d(l,{ProfileModule:()=>_});var s=i(6895),c=i(1779),t=i(4650),p=i(8613),d=i(4314),f=i(9101),a=i(5829);function m(e,r){if(1&e&&(t.TgZ(0,"div")(1,"h1"),t._uU(2),t.qZA()()),2&e){const o=t.oxw();t.xp6(2),t.hij("\xdcdv\xf6zl\xfcnk, ",o.user.name.firstName,"!")}}const g=function(e){return{"background-color":e}};function h(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"tr",3)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",4)(10,"button",5),t.NdJ("click",function(){t.CHM(o);const u=t.oxw(2);return t.KtG(u.modify)}),t._uU(11,"M\xf3dos\xedt\xe1s"),t.qZA(),t.TgZ(12,"button",5),t.NdJ("click",function(){const C=t.CHM(o).$implicit,x=t.oxw(2);return t.KtG(x.delete(C.id))}),t._uU(13,"T\xf6rl\xe9s"),t.qZA()()()}if(2&e){const o=r.$implicit;t.Q6J("ngStyle",t.VKq(5,g,r.index%2==0?"darkcyan":"cyan")),t.xp6(2),t.Oqu(o.city),t.xp6(2),t.Oqu(o.address.street),t.xp6(2),t.hij("",o.address.number,"."),t.xp6(2),t.hij("",o.size," m3")}}function y(e,r){if(1&e&&(t.TgZ(0,"div")(1,"table")(2,"tr")(3,"th"),t._uU(4,"V\xe1ros"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Utca"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"H\xe1zsz\xe1m"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Ter\xfclet"),t.qZA()(),t.YNc(11,h,14,7,"tr",2),t.qZA()()),2&e){const o=t.oxw();t.xp6(11),t.Q6J("ngForOf",o.properties)}}const v=[{path:"",component:(()=>{class e{constructor(o,n){this.userService=o,this.propertyService=n,this.properties=[]}ngOnInit(){console.log(typeof(new Date).getTime());const o=JSON.parse(localStorage.getItem("user"));this.userService.getUserById(o.uid).subscribe(n=>{this.user=n},n=>{console.error(n)}),this.propertyService.getPropertiesByUser(o.uid).subscribe(n=>{this.properties=n})}modify(o){}delete(o){this.propertyService.delete(o).then(n=>{console.log("siker")}).catch(n=>{console.log(n)})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(p.K),t.Y36(d.b))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile"]],decls:5,vars:2,consts:[[4,"ngIf"],["mat-raised-button","","color","accent","routerLink","/create-property"],[3,"ngStyle",4,"ngFor","ngForOf"],[3,"ngStyle"],[2,"width","0.2em"],["mat-raised-button","","color","primary",3,"click"]],template:function(o,n){1&o&&(t.YNc(0,m,3,1,"div",0),t.TgZ(1,"span")(2,"button",1),t._uU(3,"Ingatlan hozz\xe1ad\xe1sa"),t.qZA()(),t.YNc(4,y,12,1,"div",0)),2&o&&(t.Q6J("ngIf",n.user),t.xp6(4),t.Q6J("ngIf",n.properties.length))},dependencies:[s.sg,s.O5,s.PC,c.rH,f.lW,a.Zl],styles:["div[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:center;height:100%}.main_component[_ngcontent-%COMP%]{height:90vh}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(v),c.Bz]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,Z]}),e})()}}]);