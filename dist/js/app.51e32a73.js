(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["weathertest22"]=t():e["weathertest22"]=t()})(self,(function(){return function(){var e={6700:function(e,t,n){var s={"./af":3906,"./af.js":3906,"./ar":902,"./ar-dz":3853,"./ar-dz.js":3853,"./ar-kw":299,"./ar-kw.js":299,"./ar-ly":6825,"./ar-ly.js":6825,"./ar-ma":6379,"./ar-ma.js":6379,"./ar-sa":7700,"./ar-sa.js":7700,"./ar-tn":2059,"./ar-tn.js":2059,"./ar.js":902,"./az":6043,"./az.js":6043,"./be":7936,"./be.js":7936,"./bg":4078,"./bg.js":4078,"./bm":4014,"./bm.js":4014,"./bn":9554,"./bn-bd":7114,"./bn-bd.js":7114,"./bn.js":9554,"./bo":6529,"./bo.js":6529,"./br":5437,"./br.js":5437,"./bs":9647,"./bs.js":9647,"./ca":9951,"./ca.js":9951,"./cs":6113,"./cs.js":6113,"./cv":7965,"./cv.js":7965,"./cy":5858,"./cy.js":5858,"./da":3515,"./da.js":3515,"./de":2831,"./de-at":6263,"./de-at.js":6263,"./de-ch":1127,"./de-ch.js":1127,"./de.js":2831,"./dv":4510,"./dv.js":4510,"./el":8616,"./el.js":8616,"./en-au":4595,"./en-au.js":4595,"./en-ca":3545,"./en-ca.js":3545,"./en-gb":9609,"./en-gb.js":9609,"./en-ie":3727,"./en-ie.js":3727,"./en-il":3302,"./en-il.js":3302,"./en-in":6305,"./en-in.js":6305,"./en-nz":9128,"./en-nz.js":9128,"./en-sg":4569,"./en-sg.js":4569,"./eo":650,"./eo.js":650,"./es":6358,"./es-do":4214,"./es-do.js":4214,"./es-mx":8639,"./es-mx.js":8639,"./es-us":232,"./es-us.js":232,"./es.js":6358,"./et":7279,"./et.js":7279,"./eu":5515,"./eu.js":5515,"./fa":7981,"./fa.js":7981,"./fi":7090,"./fi.js":7090,"./fil":9208,"./fil.js":9208,"./fo":2799,"./fo.js":2799,"./fr":3463,"./fr-ca":2213,"./fr-ca.js":2213,"./fr-ch":2848,"./fr-ch.js":2848,"./fr.js":3463,"./fy":1468,"./fy.js":1468,"./ga":8163,"./ga.js":8163,"./gd":2898,"./gd.js":2898,"./gl":6312,"./gl.js":6312,"./gom-deva":682,"./gom-deva.js":682,"./gom-latn":9178,"./gom-latn.js":9178,"./gu":5009,"./gu.js":5009,"./he":2795,"./he.js":2795,"./hi":7009,"./hi.js":7009,"./hr":6506,"./hr.js":6506,"./hu":9565,"./hu.js":9565,"./hy-am":3864,"./hy-am.js":3864,"./id":5626,"./id.js":5626,"./is":6649,"./is.js":6649,"./it":151,"./it-ch":5348,"./it-ch.js":5348,"./it.js":151,"./ja":9830,"./ja.js":9830,"./jv":3751,"./jv.js":3751,"./ka":3365,"./ka.js":3365,"./kk":5980,"./kk.js":5980,"./km":9571,"./km.js":9571,"./kn":5880,"./kn.js":5880,"./ko":6809,"./ko.js":6809,"./ku":6773,"./ku.js":6773,"./ky":5505,"./ky.js":5505,"./lb":553,"./lb.js":553,"./lo":1237,"./lo.js":1237,"./lt":1563,"./lt.js":1563,"./lv":1057,"./lv.js":1057,"./me":6495,"./me.js":6495,"./mi":3096,"./mi.js":3096,"./mk":3874,"./mk.js":3874,"./ml":6055,"./ml.js":6055,"./mn":7747,"./mn.js":7747,"./mr":7113,"./mr.js":7113,"./ms":8687,"./ms-my":7948,"./ms-my.js":7948,"./ms.js":8687,"./mt":4532,"./mt.js":4532,"./my":4655,"./my.js":4655,"./nb":6961,"./nb.js":6961,"./ne":2512,"./ne.js":2512,"./nl":8448,"./nl-be":2936,"./nl-be.js":2936,"./nl.js":8448,"./nn":9031,"./nn.js":9031,"./oc-lnc":5174,"./oc-lnc.js":5174,"./pa-in":118,"./pa-in.js":118,"./pl":3448,"./pl.js":3448,"./pt":3518,"./pt-br":2447,"./pt-br.js":2447,"./pt.js":3518,"./ro":817,"./ro.js":817,"./ru":262,"./ru.js":262,"./sd":8990,"./sd.js":8990,"./se":3842,"./se.js":3842,"./si":7711,"./si.js":7711,"./sk":756,"./sk.js":756,"./sl":3772,"./sl.js":3772,"./sq":6187,"./sq.js":6187,"./sr":732,"./sr-cyrl":5713,"./sr-cyrl.js":5713,"./sr.js":732,"./ss":9455,"./ss.js":9455,"./sv":9770,"./sv.js":9770,"./sw":959,"./sw.js":959,"./ta":6459,"./ta.js":6459,"./te":5302,"./te.js":5302,"./tet":7975,"./tet.js":7975,"./tg":1294,"./tg.js":1294,"./th":2385,"./th.js":2385,"./tk":4613,"./tk.js":4613,"./tl-ph":8668,"./tl-ph.js":8668,"./tlh":8190,"./tlh.js":8190,"./tr":4506,"./tr.js":4506,"./tzl":3440,"./tzl.js":3440,"./tzm":9852,"./tzm-latn":2350,"./tzm-latn.js":2350,"./tzm.js":9852,"./ug-cn":730,"./ug-cn.js":730,"./uk":99,"./uk.js":99,"./ur":2100,"./ur.js":2100,"./uz":6002,"./uz-latn":6322,"./uz-latn.js":6322,"./uz.js":6002,"./vi":4207,"./vi.js":4207,"./x-pseudo":4674,"./x-pseudo.js":4674,"./yo":570,"./yo.js":570,"./zh-cn":3644,"./zh-cn.js":3644,"./zh-hk":2591,"./zh-hk.js":2591,"./zh-mo":9503,"./zh-mo.js":9503,"./zh-tw":8080,"./zh-tw.js":8080};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id=6700},1027:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var s=n(5431);(0,s.z)("/test22/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var r=n(9242),o=n(1020),a=(n(7658),n(3396)),i=n(4870),l=n(6797),c=n.n(l);const u=(0,o.Q_)("pinia",{state:()=>({placesArr:[],req:"https://api.weatherapi.com/v1/forecast.json?key=37d63f8db6f547a8a92100230231402&q="}),actions:{}});var d=(0,a.aZ)({__name:"WeatherModule",setup(e){const t=u(),n=(0,i.iH)("London, UK"),s=((0,i.iH)(!1),(0,i.iH)(!1)),r=(0,i.iH)(null),o=(0,i.iH)(!0),l=(0,i.iH)(),d=async(e,r,a)=>{try{let i=a||e+","+r;const c=await fetch(`${t.$state.req}${i}`,{method:"POST",headers:{"Content-Type":"application/json"},body:""}),u=await c.json();if(u.error)s.value=!0;else{n.value=`${u.location.name}, ${u.location.country}`,a||t.$state.placesArr.includes(u.location.name)||t.$state.placesArr.push(u.location.name);const e=u.current.wind_kph;l.value={currentIMG:u.current.condition.icon,currentTempC:u.current.temp_c,feelsLikeC:u.current.feelslike_c,conditionText:u.current.condition.text,currentWind:void 0!==e?Math.round(1e3*e/3600):"N/A",currentWind_dir:u.current.wind_dir,current_hPa:u.current.pressure_in?Math.round(33.8639*u.current.pressure_in):"N/A",current_humidity:u.current.humidity,current_vis:u.current.vis_km},s.value=!1,u&&setTimeout((()=>{o.value=!1}),1e3)}}catch(i){s.value=!0}},j=async e=>{const t=e.coords.latitude,n=e.coords.longitude;await d(t,n,null)},p=async()=>{await d(51.5072,.1276,null)};return(0,a.bv)((()=>{navigator.geolocation.getCurrentPosition(j,p),r.value=c()().format("dddd")})),(e,t)=>null}}),j=n(89);const p=(0,j.Z)(d,[["__scopeId","data-v-3c4b2c37"]]);var f=p,m=n(3852),v=n(4868),h=n(606),g=n(7267),y=n(6709),b=n(7139);const k=e=>((0,a.dD)("data-v-444b584f"),e=e(),(0,a.Cn)(),e),w=k((()=>(0,a._)("span",null,[(0,a._)("b",null,"Settings")],-1))),_={class:"pick-box-wrapper"},z=["onDragstart","onDrop"],x=k((()=>(0,a._)("i",{class:"pi pi-bars",style:{"font-size":"1.2em",cursor:"grab"}},null,-1))),A=["onClick"],$={class:"p-float-label p-input-icon-right"},O={key:0,class:"pi pi-spin pi-spinner"},I="location";var S=(0,a.aZ)({__name:"SettingsModule",setup(e,{emit:t}){const n=u(),s=(0,i.iH)(""),o=(0,i.iH)(n.$state.placesArr),l=(0,i.iH)("Add your location:"),c=(0,i.iH)(!1),d=e=>{l.value=e?"Press ENTER to add...":"Add your location:"},j=async()=>{const e=s.value.trim();if(""===e)return l.value="Invalid input",void document.getElementById("location")?.classList.add("p-invalid");if(/\d/.test(e))return l.value="Invalid input",void document.getElementById("location")?.classList.add("p-invalid");try{c.value=!0;const t=`${n.$state.req}${e}`,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:""}),o=await r.json();if(o.error)return l.value="no such place",void document.getElementById("location")?.classList.add("p-invalid");if(n.$state.placesArr.includes(e))return l.value="already exists",void document.getElementById("location")?.classList.add("p-invalid");n.$state.placesArr.push(e),localStorage.setItem("places",n.$state.placesArr),s.value=""}catch{l.value="something went wrong =(",document.getElementById("location")?.classList.add("p-invalid")}finally{c.value=!1}},p=()=>{t("toggleClose")},f=e=>{n.$state.placesArr.splice(e,1),localStorage.setItem("places",n.$state.placesArr.join(","))},m=(e,t)=>{t.dataTransfer?.setData("text/plain",e.toString())},v=e=>{e.preventDefault()},h=(e,s)=>{const r=s.dataTransfer?.getData("text/plain");if(void 0!==r){const s=parseInt(r),o=n.$state.placesArr[s];n.$state.placesArr.splice(s,1),n.$state.placesArr.splice(e,0,o),t("chanchePlace",n.$state.placesArr[0])}};return(0,a.bv)((()=>{let e=localStorage.getItem("places"),t=e?e.split(","):[];const s=[...new Set([...n.placesArr,...t])];n.$state.placesArr.splice(0,n.$state.placesArr.length,...s)})),(e,t)=>{const n=(0,a.up)("InputText"),i=(0,a.up)("Card");return(0,a.wg)(),(0,a.iD)("main",null,[(0,a.Wm)(i,{style:{width:"20em",padding:"1em"},class:"animate__animated animate__fadeIn"},{header:(0,a.w5)((()=>[(0,a._)("div",{class:"setts-header"},[w,(0,a._)("i",{class:"pi pi-times",onClick:p,style:{"font-size":"1.5em",position:"absolute",right:"0",cursor:"pointer"}})])])),content:(0,a.w5)((()=>[(0,a._)("div",_,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.value,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n,class:"pick-box",draggable:"true",onDragstart:e=>m(n,e),onDragover:t[0]||(t[0]=e=>v(e)),onDrop:e=>h(n,e)},[x,(0,a._)("p",null,(0,b.zw)(e[0].toUpperCase()+e.slice(1)),1),(0,a._)("i",{class:"pi pi-trash",style:{"font-size":"1.2em",cursor:"pointer"},onClick:e=>f(n)},null,8,A)],40,z)))),128))])])),footer:(0,a.w5)((()=>[(0,a._)("span",$,[(0,a.Wm)(n,{id:"location",modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),onFocus:t[2]||(t[2]=e=>d(!0)),onBlur:t[3]||(t[3]=e=>d(!1)),onKeyup:(0,r.D2)(j,["enter"])},null,8,["modelValue","onKeyup"]),c.value?((0,a.wg)(),(0,a.iD)("i",O)):(0,a.kq)("",!0),(0,a._)("label",{for:I},(0,b.zw)(l.value),1)])])),_:1})])}}});const C=(0,j.Z)(S,[["__scopeId","data-v-444b584f"]]);var T=C;const D=(0,r.ri)(f);D.use(m.ZP,{ripple:!0,inputStyle:"filled",zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100}}),D.use((0,o.WB)()),D.component("Button",v.Z),D.component("Card",h.Z),D.component("ProgressSpinner",g.Z),D.component("InputText",y.Z),D.component("SettingsModule",T),D.component("WeatherModuleVue",f),D.mount("#weathertest22");var P=D}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){var e=[];n.O=function(t,s,r,o){if(!s){var a=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[s,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,o,a=s[0],i=s[1],l=s[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var u=l(n)}for(t&&t(s);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},s=self["webpackChunkweathertest22"]=self["webpackChunkweathertest22"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(1027)}));return s=n.O(s),s}()}));
//# sourceMappingURL=app.51e32a73.js.map