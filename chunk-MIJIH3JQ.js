import{$ as E,Ba as w,J as W,Ja as U,Ka as R,La as y,Ma as h,N as k,Na as X,P as f,Qa as Y,Ra as $,V as c,W as p,_ as T,ba as I,ca as a,da as v,ha as x,ia as l,ja as S,ka as V,la as o,ma as r,na as C,oa as D,pa as O,qa as P,ra as b,sa as m,ta as d,ua as j,va as H,wa as F,xa as u,ya as _,za as L}from"./chunk-RUAD63IT.js";function A(n,g){if(n&1&&(o(0,"a",8),C(1,"i"),r()),n&2){let e=g.$implicit;l("href",e.link,E),a(),V(e.icon+" text-2xl animate__animated animate__fadeIn")}}var N=(()=>{class n{constructor(){this.title="",this.subtitle="",this.logoUrl="",this.socials=[]}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=f({type:n,selectors:[["app-header"]],inputs:{title:"title",subtitle:"subtitle",logoUrl:"logoUrl",socials:"socials"},standalone:!0,features:[w],decls:10,vars:4,consts:[[1,"flex","items-center","justify-between","py-8","px-4","space-x-4"],[1,"flex","px-4","space-x-4"],["alt","Logo",1,"w-16","h-16","animate__animated","animate__fadeIn",3,"src"],[1,"animate__animated","animate__fadeIn"],[1,"text-5xl","font-bold","text-green-400"],[1,"text-xl","text-green-300"],[1,"flex","justify-start","px-4","space-x-4","pb-4"],["class","text-green-300 hover:text-green-500","target","_blank",3,"href",4,"ngFor","ngForOf"],["target","_blank",1,"text-green-300","hover:text-green-500",3,"href"]],template:function(t,i){t&1&&(o(0,"header",0)(1,"div",1),C(2,"img",2),o(3,"div",3)(4,"h1",4),u(5),r(),o(6,"p",5),u(7),r()()(),o(8,"div",6),x(9,A,2,3,"a",7),r()()),t&2&&(a(2),l("src",i.logoUrl,E),a(3),_(i.title),a(2),_(i.subtitle),a(2),l("ngForOf",i.socials))},dependencies:[h,R]})}}return n})();var J=["windowElement"];function K(n,g){n&1&&P(0)}function Z(n,g){if(n&1&&(D(0),x(1,K,1,0,"ng-container",17),O()),n&2){let e=d(2);a(),l("ngComponentOutlet",e.dynamicComponent)("ngComponentOutletInjector",e.dynamicComponentInjector)}}function ee(n,g){if(n&1){let e=b();o(0,"div",3,0)(2,"div",4),m("mousedown",function(i){c(e);let s=d();return p(s.onMouseDown(i))}),o(3,"h1",5),u(4),r(),o(5,"div",6)(6,"div",7),m("click",function(){c(e);let i=d();return p(i.close())}),r(),o(7,"div",8),m("click",function(){c(e);let i=d();return p(i.minimize())}),r(),o(8,"div",9),m("click",function(){c(e);let i=d();return p(i.isMaximized?i.restore():i.maximize())}),r()()(),o(9,"div",10)(10,"p",11),u(11),r(),x(12,Z,2,2,"ng-container",12),r(),o(13,"div",13),m("mousedown",function(i){c(e);let s=d();return p(s.initResize(i,"top"))}),r(),o(14,"div",14),m("mousedown",function(i){c(e);let s=d();return p(s.initResize(i,"bottom"))}),r(),o(15,"div",15),m("mousedown",function(i){c(e);let s=d();return p(s.initResize(i,"left"))}),r(),o(16,"div",16),m("mousedown",function(i){c(e);let s=d();return p(s.initResize(i,"right"))}),r()()}if(n&2){let e=d();l("id",e.index),a(4),_(e.windowTitle),a(7),_(e.contentText),a(),l("ngIf",e.dynamicComponent)}}function te(n,g){if(n&1){let e=b();o(0,"button",18),m("click",function(){c(e);let i=d();return p(i.restore())}),u(1),r()}if(n&2){let e=d();S("left",e.index*220,"px"),a(),L(" ",e.windowTitle," ")}}var Q=(()=>{class n{constructor(){this.windowTitle="",this.contentText="",this.contentList=[],this.dynamicComponent=null,this.closeWindow=new T,this.maximizeWindow=new T,this.isDragging=!1,this.offsetX=0,this.offsetY=0,this.resizing=!1,this.resizeDirection=""}onMouseDown(e){this.isMaximized&&(this.isDragging=!0,this.offsetX=e.clientX-this.windowElement.nativeElement.offsetLeft,this.offsetY=e.clientY-this.windowElement.nativeElement.offsetTop)}onMouseMove(e){this.isDragging&&this.isMaximized&&(this.windowElement.nativeElement.style.left=`${e.clientX-this.offsetX}px`,this.windowElement.nativeElement.style.top=`${e.clientY-this.offsetY}px`),this.resizing&&this.performResize(e)}onMouseUp(){this.isDragging=!1,this.stopResize()}minimize(){this.isMaximized=!1}restore(){this.isMaximized=!0,this.maximizeWindow.emit(this.index)}maximize(){this.isMaximized=!0,this.maximizeWindow.emit(this.index);let e=this.windowElement.nativeElement;e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100vh"}close(){this.closeWindow.emit()}initResize(e,t){e.stopPropagation(),e.preventDefault(),this.resizing=!0,this.resizeDirection=t}performResize(e){let t=this.windowElement.nativeElement,i=t.getBoundingClientRect();switch(this.resizeDirection){case"right":t.style.width=e.clientX-i.left+"px";break;case"left":let s=i.right-e.clientX;t.style.width=s+"px",t.style.left=e.clientX+"px";break;case"bottom":t.style.height=e.clientY-i.top+"px";break;case"top":let M=i.bottom-e.clientY;t.style.height=M+"px",t.style.top=e.clientY+"px";break}}stopResize(){this.resizing=!1,this.resizeDirection=""}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=f({type:n,selectors:[["app-window-custom"]],viewQuery:function(t,i){if(t&1&&j(J,5),t&2){let s;H(s=F())&&(i.windowElement=s.first)}},hostBindings:function(t,i){t&1&&m("mousemove",function(M){return i.onMouseMove(M)},!1,I)("mouseup",function(){return i.onMouseUp()},!1,I)},inputs:{isMaximized:"isMaximized",index:"index",windowTitle:"windowTitle",contentText:"contentText",contentList:"contentList",dynamicComponent:"dynamicComponent"},outputs:{closeWindow:"closeWindow",maximizeWindow:"maximizeWindow"},standalone:!0,features:[w],decls:2,vars:2,consts:[["windowElement",""],["class","select-none absolute top-1/5 left-1/2 transform -translate-x-1/2 bg-green-800 bg-opacity-80 text-white border-4 border-green-600 rounded-lg cursor-grab transition-all duration-300 ease-in-out w-11/12 h-3/5 overflow-hidden",3,"id",4,"ngIf"],["class","restore-btn fixed bottom-28 transform -translate-x-1/2 bg-green-700 text-white p-2 rounded-md cursor-pointer font-bold transition-colors duration-300 hover:bg-green-500 w-[200px]",3,"left","click",4,"ngIf"],[1,"select-none","absolute","top-1/5","left-1/2","transform","-translate-x-1/2","bg-green-800","bg-opacity-80","text-white","border-4","border-green-600","rounded-lg","cursor-grab","transition-all","duration-300","ease-in-out","w-11/12","h-3/5","overflow-hidden",3,"id"],[1,"window-header","bg-green-700","p-2","flex","justify-between","items-center","rounded-t-lg","cursor-grab",3,"mousedown"],[1,"text-2xl","font-extrabold"],[1,"flex","gap-2"],[1,"bg-red-800","w-6","h-6","rounded-full","cursor-pointer","border-white","border-2",3,"click"],[1,"bg-yellow-800","w-6","h-6","rounded-full","cursor-pointer","border-white","border-2",3,"click"],[1,"bg-green-800","w-6","h-6","rounded-full","cursor-pointer","border-white","border-2",3,"click"],[1,"p-10","space-y-6"],[1,"text-green-300"],[4,"ngIf"],[1,"absolute","top-0","left-0","w-full","h-1","cursor-n-resize",3,"mousedown"],[1,"absolute","bottom-0","left-0","w-full","h-1","cursor-s-resize",3,"mousedown"],[1,"absolute","top-0","left-0","h-full","w-1","cursor-w-resize",3,"mousedown"],[1,"absolute","top-0","right-0","h-full","w-1","cursor-e-resize",3,"mousedown"],[4,"ngComponentOutlet","ngComponentOutletInjector"],[1,"restore-btn","fixed","bottom-28","transform","-translate-x-1/2","bg-green-700","text-white","p-2","rounded-md","cursor-pointer","font-bold","transition-colors","duration-300","hover:bg-green-500","w-[200px]",3,"click"]],template:function(t,i){t&1&&x(0,ee,17,4,"div",1)(1,te,2,3,"button",2),t&2&&(l("ngIf",i.isMaximized),a(),l("ngIf",!i.isMaximized))},dependencies:[h,U,y],encapsulation:2})}}return n})();var G=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=f({type:n,selectors:[["app-contact"]],standalone:!0,features:[w],decls:2,vars:0,template:function(t,i){t&1&&(o(0,"p"),u(1,"contact works!"),r())}})}}return n})();var q=(()=>{class n{constructor(e){this.http=e,this.dataUrl="data.json"}getPageData(){return this.http.get(this.dataUrl)}static{this.\u0275fac=function(t){return new(t||n)(k(X))}}static{this.\u0275prov=W({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function ne(n,g){if(n&1){let e=b();o(0,"div",1),C(1,"app-header",2),o(2,"div",3)(3,"app-window-custom",4),m("maximizeWindow",function(i){c(e);let s=d();return p(s.maximizedIndex=i)}),r(),o(4,"app-window-custom",4),m("maximizeWindow",function(i){c(e);let s=d();return p(s.maximizedIndex=i)}),r(),o(5,"app-window-custom",4),m("maximizeWindow",function(i){c(e);let s=d();return p(s.maximizedIndex=i)}),r()(),o(6,"footer",5)(7,"p",6),u(8,"\xA9 2025 Geronimo Montes - Todos los derechos reservados"),r()()()}if(n&2){let e=d();a(),l("title",e.data.info.title)("subtitle",e.data.info.subtitle)("logoUrl",e.data.info.logoUrl)("socials",e.data.info.socials),a(2),l("windowTitle","Experiencia")("contentText","Descripci\xF3n de mi experiencia como desarrollador.")("contentList",e.data.info.experience)("index",1)("isMaximized",e.maximizedIndex===1),a(),l("windowTitle","Proyectos")("contentText","Descripci\xF3n de los proyectos en los que he trabajado.")("contentList",e.data.info.projects)("index",2)("isMaximized",e.maximizedIndex===2),a(),l("windowTitle","Educaci\xF3n")("contentText","Mi formaci\xF3n acad\xE9mica.")("contentList",e.data.info.education)("index",3)("isMaximized",e.maximizedIndex===3)}}var be=(()=>{class n{constructor(e,t,i){this.dataService=e,this.meta=t,this.title=i,this.data=[],this.isLoading=!0,this.maximizedIndex=1,this.component=G}ngOnInit(){this.title.setTitle("Inicio - Geronimo Montes Portfolio"),this.meta.updateTag({name:"description",content:"Portafolio de Geronimo Montes, desarrollador fullstack con experiencia en Angular, Django y m\xE1s."}),this.dataService.getPageData().subscribe(e=>{this.data=e,this.isLoading=!1})}get listWindows(){return this.data?[{id:"window-0",windowTitle:"Resumen",contentText:this.data.info.description,contentList:[]},...this.data.experience.map((e,t)=>({id:`window-${t+1}`,windowTitle:"Experiencia",contentText:"",contentList:[e]})),...this.data.projects.map((e,t)=>({id:`window-${t+this.data.experience.length+1}`,windowTitle:"Proyectos",contentText:"",contentList:[e]})),...this.data.education.map((e,t)=>({id:`window-${t+this.data.experience.length+this.data.projects.length+1}`,windowTitle:"Educaci\xF3n",contentText:"Mi formaci\xF3n acad\xE9mica.",contentList:[{title:e.degree,company:e.university,duration:e.year,description:e.description}]}))]:[]}onMaximize(e){this.maximizedIndex=e}static{this.\u0275fac=function(t){return new(t||n)(v(q),v(Y),v($))}}static{this.\u0275cmp=f({type:n,selectors:[["app-home"]],standalone:!0,features:[w],decls:1,vars:1,consts:[["class","bg-green-900 bg-opacity-40 text-white font-mono h-screen flex flex-col",4,"ngIf"],[1,"bg-green-900","bg-opacity-40","text-white","font-mono","h-screen","flex","flex-col"],[3,"title","subtitle","logoUrl","socials"],[1,"flex-1","w-full","overflow-auto"],[3,"maximizeWindow","windowTitle","contentText","contentList","index","isMaximized"],[1,"py-8","bg-green-800","text-center"],[1,"text-green-300"]],template:function(t,i){t&1&&x(0,ne,9,19,"div",0),t&2&&l("ngIf",i.data==null?null:i.data.info)},dependencies:[h,y,N,Q],styles:[".resume-container[_ngcontent-%COMP%]{border:4px solid #22c55e;border-radius:10px;background:#166534cc;color:#fff;font-family:monospace;max-width:600px;padding-bottom:10px;position:absolute;left:50%;top:200px;transform:translate(-50%);cursor:grab}.window-header[_ngcontent-%COMP%]{background:#166534;padding:10px;display:flex;justify-content:space-between;align-items:center;border-top-left-radius:10px;border-top-right-radius:10px;cursor:grab}.window-header[_ngcontent-%COMP%]:active{cursor:grabbing}.buttons[_ngcontent-%COMP%]{display:flex;gap:5px}.close[_ngcontent-%COMP%], .minimize[_ngcontent-%COMP%], .maximize[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;cursor:pointer}.close[_ngcontent-%COMP%]{background:red}.minimize[_ngcontent-%COMP%]{background:#ff0}.maximize[_ngcontent-%COMP%]{background:green}.content[_ngcontent-%COMP%]{padding:20px}.restore-btn[_ngcontent-%COMP%]{position:fixed;bottom:20px;left:50%;transform:translate(-50%);background:#166534;color:#fff;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;font-weight:700;transition:.3s}.restore-btn[_ngcontent-%COMP%]:hover{background:#22c55e}"]})}}return n})();export{be as HomeComponent};
