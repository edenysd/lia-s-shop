import{B as O,o as a,c as d,a as r,r as b,m as c,s as P,Z as k,D as v,R as U,b as z,d as N,e as Z,f as S,g as m,w as f,h as p,T as j,i as $,F as C,j as y,n as I,k as _,_ as R,t as g,u as l,l as w,p as A,q as x,v as K,x as E,y as M,z as q,A as X}from"./index-9b3e8e2e.js";import{F as Y,s as H,a as G,u as J}from"./inputnumber.esm-58d7d183.js";import{s as Q}from"./inputtext.esm-8466072b.js";var W=`
@layer primevue {
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .p-toolbar-group-start,
    .p-toolbar-group-center,
    .p-toolbar-group-end {
        display: flex;
        align-items: center;
    }

    .p-toolbar-group-left,
    .p-toolbar-group-right {
        display: flex;
        align-items: center;
    }
}
`,ee={root:"p-toolbar p-component",start:"p-toolbar-group-start p-toolbar-group-left",center:"p-toolbar-group-center",end:"p-toolbar-group-end p-toolbar-group-right"},te=O.extend({name:"toolbar",css:W,classes:ee}),ne={name:"BaseToolbar",extends:P,props:{"aria-labelledby":{type:String,default:null}},style:te,provide:function(){return{$parentInstance:this}}},D={name:"Toolbar",extends:ne},ie=["aria-labelledby"];function se(e,t,n,s,o,i){return a(),d("div",c({class:e.cx("root"),role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptm("root"),{"data-pc-name":"toolbar"}),[r("div",c({class:e.cx("start")},e.ptm("start")),[b(e.$slots,"start")],16),r("div",c({class:e.cx("center")},e.ptm("center")),[b(e.$slots,"center")],16),r("div",c({class:e.cx("end")},e.ptm("end")),[b(e.$slots,"end")],16)],16,ie)}D.render=se;var oe=`
@layer primevue {
    .p-sidebar-mask {
        display: none;
        pointer-events: none;
        background-color: transparent;
        transition-property: background-color;
    }

    .p-sidebar-mask.p-component-overlay {
        pointer-events: auto;
    }

    .p-sidebar-visible {
        display: flex;
    }

    .p-sidebar {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
    }

    .p-sidebar-content {
        overflow-y: auto;
        flex-grow: 1;
    }

    .p-sidebar-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-shrink: 0;
    }

    .p-sidebar-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    .p-sidebar-full .p-sidebar {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
    }

    /* Animation */
    /* Center */
    .p-sidebar-left .p-sidebar-enter-from,
    .p-sidebar-left .p-sidebar-leave-to {
        transform: translateX(-100%);
    }
    .p-sidebar-right .p-sidebar-enter-from,
    .p-sidebar-right .p-sidebar-leave-to {
        transform: translateX(100%);
    }
    .p-sidebar-top .p-sidebar-enter-from,
    .p-sidebar-top .p-sidebar-leave-to {
        transform: translateY(-100%);
    }
    .p-sidebar-bottom .p-sidebar-enter-from,
    .p-sidebar-bottom .p-sidebar-leave-to {
        transform: translateY(100%);
    }
    .p-sidebar-full .p-sidebar-enter-from,
    .p-sidebar-full .p-sidebar-leave-to {
        opacity: 0;
    }
    .p-sidebar-full .p-sidebar-enter-active,
    .p-sidebar-full .p-sidebar-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    /* Size */
    .p-sidebar-left .p-sidebar {
        width: 20rem;
        height: 100%;
    }

    .p-sidebar-right .p-sidebar {
        width: 20rem;
        height: 100%;
    }

    .p-sidebar-top .p-sidebar {
        height: 10rem;
        width: 100%;
    }

    .p-sidebar-bottom .p-sidebar {
        height: 10rem;
        width: 100%;
    }

    .p-sidebar-left .p-sidebar-sm,
    .p-sidebar-right .p-sidebar-sm {
        width: 20rem;
    }

    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-md {
        width: 40rem;
    }

    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-lg {
        width: 60rem;
    }

    .p-sidebar-top .p-sidebar-sm,
    .p-sidebar-bottom .p-sidebar-sm {
        height: 10rem;
    }

    .p-sidebar-top .p-sidebar-md,
    .p-sidebar-bottom .p-sidebar-md {
        height: 20rem;
    }

    .p-sidebar-top .p-sidebar-lg,
    .p-sidebar-bottom .p-sidebar-lg {
        height: 30rem;
    }

    .p-sidebar-left .p-sidebar-content,
    .p-sidebar-right .p-sidebar-content,
    .p-sidebar-top .p-sidebar-content,
    .p-sidebar-bottom .p-sidebar-content {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 64em) {
        .p-sidebar-left .p-sidebar-lg,
        .p-sidebar-left .p-sidebar-md,
        .p-sidebar-right .p-sidebar-lg,
        .p-sidebar-right .p-sidebar-md {
            width: 20rem;
        }
    }
}
`,re={mask:function(t){var n=t.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center"}}},ae={mask:function(t){var n=t.instance,s=t.props,o=["left","right","top","bottom"],i=o.find(function(u){return u===s.position});return["p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":s.modal,"p-sidebar-mask-scrollblocker":s.blockScroll,"p-sidebar-visible":n.containerVisible,"p-sidebar-full":n.fullScreen},i?"p-sidebar-".concat(i):""]},root:function(t){var n=t.instance;return["p-sidebar p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1,"p-sidebar-full":n.fullScreen}]},header:"p-sidebar-header",headerContent:"p-sidebar-header-content",closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",content:"p-sidebar-content"},le=O.extend({name:"sidebar",css:oe,classes:ae,inlineStyles:re}),de={name:"BaseSidebar",extends:P,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:le,provide:function(){return{$parentInstance:this}}},V={name:"Sidebar",extends:de,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&k.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.autoZIndex&&k.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&v.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&k.clear(this.mask),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(o){return o&&o.querySelector("[autofocus]")},n=this.$slots.header&&t(this.headerContainer);n||(n=this.$slots.default&&t(this.container),n||(n=this.closeButton)),n&&v.focus(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&v.blockBodyScroll()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&v.unblockBodyScroll()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},closeButtonRef:function(t){this.closeButton=t},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:Y,ripple:U},components:{Portal:z,TimesIcon:N}};function h(e){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(e)}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,s)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?L(Object(n),!0).forEach(function(s){ce(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function ce(e,t,n){return t=pe(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pe(e){var t=ue(e,"string");return h(t)==="symbol"?t:String(t)}function ue(e,t){if(h(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t||"default");if(h(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var fe=["aria-modal"],me=["aria-label"];function be(e,t,n,s,o,i){var u=Z("Portal"),F=S("ripple"),T=S("focustrap");return a(),m(u,null,{default:f(function(){return[o.containerVisible?(a(),d("div",c({key:0,ref:i.maskRef,onMousedown:t[2]||(t[2]=function(){return i.onMaskClick&&i.onMaskClick.apply(i,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[p(j,c({name:"p-sidebar",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},e.ptm("transition")),{default:f(function(){return[e.visible?$((a(),d("div",c({key:0,ref:i.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal,onKeydown:t[1]||(t[1]=function(){return i.onKeydown&&i.onKeydown.apply(i,arguments)})},B(B({},e.$attrs),e.ptm("root"))),[e.$slots.container?b(e.$slots,"container",{key:0,onClose:i.hide,closeCallback:i.hide}):(a(),d(C,{key:1},[r("div",c({ref:i.headerContainerRef,class:e.cx("header")},e.ptm("header")),[e.$slots.header?(a(),d("div",c({key:0,class:e.cx("headerContent")},e.ptm("headerContent")),[b(e.$slots,"header")],16)):y("",!0),e.showCloseIcon?$((a(),d("button",c({key:1,ref:i.closeButtonRef,type:"button",class:e.cx("closeButton"),"aria-label":i.closeAriaLabel,onClick:t[0]||(t[0]=function(){return i.hide&&i.hide.apply(i,arguments)})},e.ptm("closeButton"),{"data-pc-group-section":"iconcontainer"}),[b(e.$slots,"closeicon",{class:I(e.cx("closeIcon"))},function(){return[(a(),m(_(e.closeIcon?"span":"TimesIcon"),c({class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,me)),[[F]]):y("",!0)],16),r("div",c({ref:i.contentRef,class:e.cx("content")},e.ptm("content")),[b(e.$slots,"default")],16)],64))],16,fe)),[[T]]):y("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):y("",!0)]}),_:3})}V.render=be;const he={class:"flex w-full"},ve={class:"flex align-items-center justify-content-center mr-3",style:{width:"60px"}},ye=["src"],ge={class:"flex w-full overflow-clip"},ke={class:"w-full text-xs text-bold overflow"},_e={class:"single-line font-semibold"},Ce={class:"flex align-items-center justify-content-between"},we={class:"text-2xl font-semibold text-color-secondary"},xe={class:"flex align-items-center"},Se={__name:"ProductInCartCardComponent",props:["id","title","price","description","category","image","amount"],setup(e){const t=e;return(n,s)=>(a(),d("div",null,[p(l(G),{class:"w-full h-full flex flex-column"},{content:f(()=>[r("div",he,[r("div",ve,[r("img",{class:"overflow",src:t.image,alt:"Image",style:{width:"60px",height:"60px","object-fit":"contain"}},null,8,ye)]),r("div",ge,[r("div",ke,[r("div",_e,g(t.title),1),r("div",Ce,[r("div",we,"$"+g(t.price),1),r("div",xe,[p(l(H),{"input-class":"w-5rem","model-value":e.amount,"onUpdate:modelValue":s[0]||(s[0]=o=>n.$emit("update-cart-amount",o)),inputId:"minmax-buttons",mode:"decimal",showButtons:"",min:0,max:1e4},null,8,["model-value"]),p(l(w),{class:"opacity-40 hover-opacity-100 hover-scale-110 transition-all transition-duration-100",icon:"pi pi-trash",severity:"danger",text:"",rounded:"","aria-label":"Remove",onClick:s[1]||(s[1]=()=>n.$emit("remove-product"))})])])])])])]),_:1})]))}},$e=R(Se,[["__scopeId","data-v-ce1ccfcd"]]),Le=r("h2",null,[r("i",{class:"pi pi-shopping-cart font-bold text-blue-500",style:{"font-size":"1.3rem"}}),x(" Shopping Cart ")],-1),Be={class:"relative h-full"},Oe={class:"pb-8 grid"},Pe={class:"fixed w-full flex align-items-center p-4 justify-content-between",style:{bottom:"0px",left:"0px",height:"80px","backdrop-filter":"blur(10px)"}},je=r("span",{class:"text-2xl font-medium"}," Total: ",-1),Ie={class:"text-2xl font-medium text-color-secondary"},Re={__name:"ShoppingCartComponent",props:["visible"],setup(e){const t=e,n=J();return(s,o)=>(a(),m(l(V),{visible:t.visible,class:"w-full md:w-30rem","onUpdate:visible":o[0]||(o[0]=i=>s.$emit("update:visible",i)),position:"right",pt:{header:{style:"justify-content: space-between"}}},{header:f(()=>[Le]),default:f(()=>[r("div",Be,[r("div",Oe,[(a(!0),d(C,null,A(l(n).cart,i=>(a(),m($e,{class:"col-12",key:i.id,id:i.id,amount:i.amount,title:i.snapshot.title,image:i.snapshot.image,category:i.snapshot.category,price:i.snapshot.price,onUpdateCartAmount:u=>l(n).setProduct(i.productId,u,i.snapshot),onRemoveProduct:()=>l(n).removeProduct(i.productId)},null,8,["id","amount","title","image","category","price","onUpdateCartAmount","onRemoveProduct"]))),128))]),r("div",Pe,[je,r("span",Ie," $"+g(l(n).totalValue.toFixed(2)),1)])])]),_:1},8,["visible"]))}},Ae={__name:"CategorySimpleItemComponent",props:["name","filled"],setup(e){const t=e;return(n,s)=>(a(),d("div",null,[p(l(w),{outlined:!e.filled,class:"w-full h-full flex align-items-center justify-content-center text-lg"},{default:f(()=>[x(g(t.name),1)]),_:1},8,["outlined"])]))}};const Ee={class:"flex flex-column justify-content-center align-items-center w-full p-2"},De={key:1,class:"grid w-full"},Ve={__name:"CategoryListComponent",setup(e){const t=K(),n=E(),s=o=>{n.selectedCategoryFilter=n.selectedCategoryFilter==o?null:o};return t.fetchAllCategories(),(o,i)=>(a(),d("div",Ee,[l(t).loadingCategories?(a(),m(l(M),{key:0,mode:"indeterminate",class:"w-25rem",style:{height:"6px"}})):(a(),d("div",De,[(a(!0),d(C,null,A(l(t).allCategories,u=>(a(),m(Ae,{class:I(["col-6 lg:col-3 transition-transform transition-duration-300 hover-scale",l(n).selectedCategoryFilter==u?"selected-scale":""]),filled:l(n).selectedCategoryFilter==u,key:u,name:u.toUpperCase(),onClick:()=>s(u)},null,8,["class","filled","name","onClick"]))),128))]))]))}},Fe=R(Ve,[["__scopeId","data-v-6fffd5e8"]]),Te={class:"p-input-icon-left"},Ue=r("i",{class:"pi pi-search"},null,-1),ze={__name:"SearchBarProductComponent",setup(e){const t=E();return(n,s)=>(a(),d("span",Te,[Ue,p(l(Q),{placeholder:"Search",modelValue:l(t).selectedNameFilter,"onUpdate:modelValue":s[0]||(s[0]=o=>l(t).selectedNameFilter=o)},null,8,["modelValue"])]))}},Ne={class:"w-full h-auto"},Ze={class:"fixed w-full pt-0 bg-white",style:{top:"0px","z-index":"1"}},Ke={class:"text-2xl"},Me={class:"w-full md:w-8 m-auto"},qe={class:"w-full h-auto",style:{"margin-top":"200px"}},Ge={__name:"ShopLayout",setup(e){const t=q(!1);return(n,s)=>(a(),d("div",Ne,[r("div",Ze,[p(l(D),null,{start:f(()=>[r("span",Ke,[r("i",{class:"pi pi-gift text-blue-500 cursor-pointer",style:{"font-size":"1.3rem"},onClick:s[0]||(s[0]=o=>n.$router.push({name:"home"}))}),x(" Lia's Shop ")])]),center:f(()=>[p(ze)]),end:f(()=>[p(l(w),{icon:"pi pi-shopping-cart",onClick:s[1]||(s[1]=o=>t.value=!t.value)})]),_:1}),p(Re,{visible:t.value,"onUpdate:visible":s[2]||(s[2]=o=>t.value=o)},null,8,["visible"]),r("div",Me,[p(Fe)])]),r("div",qe,[p(l(X),null,{default:f(({Component:o,route:i})=>[i.meta.transition?(a(),m(j,{key:0,name:i.meta.transition},{default:f(()=>[(a(),m(_(o)))]),_:2},1032,["name"])):(a(),m(_(o),{key:1}))]),_:1})])]))}};export{Ge as default};
