(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["weathertest22"]=t():e["weathertest22"]=t()})(self,(function(){return function(){var e={6700:function(e,t,n){var s={"./af":3906,"./af.js":3906,"./ar":902,"./ar-dz":3853,"./ar-dz.js":3853,"./ar-kw":299,"./ar-kw.js":299,"./ar-ly":6825,"./ar-ly.js":6825,"./ar-ma":6379,"./ar-ma.js":6379,"./ar-sa":7700,"./ar-sa.js":7700,"./ar-tn":2059,"./ar-tn.js":2059,"./ar.js":902,"./az":6043,"./az.js":6043,"./be":7936,"./be.js":7936,"./bg":4078,"./bg.js":4078,"./bm":4014,"./bm.js":4014,"./bn":9554,"./bn-bd":7114,"./bn-bd.js":7114,"./bn.js":9554,"./bo":6529,"./bo.js":6529,"./br":5437,"./br.js":5437,"./bs":9647,"./bs.js":9647,"./ca":9951,"./ca.js":9951,"./cs":6113,"./cs.js":6113,"./cv":7965,"./cv.js":7965,"./cy":5858,"./cy.js":5858,"./da":3515,"./da.js":3515,"./de":2831,"./de-at":6263,"./de-at.js":6263,"./de-ch":1127,"./de-ch.js":1127,"./de.js":2831,"./dv":4510,"./dv.js":4510,"./el":8616,"./el.js":8616,"./en-au":4595,"./en-au.js":4595,"./en-ca":3545,"./en-ca.js":3545,"./en-gb":9609,"./en-gb.js":9609,"./en-ie":3727,"./en-ie.js":3727,"./en-il":3302,"./en-il.js":3302,"./en-in":6305,"./en-in.js":6305,"./en-nz":9128,"./en-nz.js":9128,"./en-sg":4569,"./en-sg.js":4569,"./eo":650,"./eo.js":650,"./es":6358,"./es-do":4214,"./es-do.js":4214,"./es-mx":8639,"./es-mx.js":8639,"./es-us":232,"./es-us.js":232,"./es.js":6358,"./et":7279,"./et.js":7279,"./eu":5515,"./eu.js":5515,"./fa":7981,"./fa.js":7981,"./fi":7090,"./fi.js":7090,"./fil":9208,"./fil.js":9208,"./fo":2799,"./fo.js":2799,"./fr":3463,"./fr-ca":2213,"./fr-ca.js":2213,"./fr-ch":2848,"./fr-ch.js":2848,"./fr.js":3463,"./fy":1468,"./fy.js":1468,"./ga":8163,"./ga.js":8163,"./gd":2898,"./gd.js":2898,"./gl":6312,"./gl.js":6312,"./gom-deva":682,"./gom-deva.js":682,"./gom-latn":9178,"./gom-latn.js":9178,"./gu":5009,"./gu.js":5009,"./he":2795,"./he.js":2795,"./hi":7009,"./hi.js":7009,"./hr":6506,"./hr.js":6506,"./hu":9565,"./hu.js":9565,"./hy-am":3864,"./hy-am.js":3864,"./id":5626,"./id.js":5626,"./is":6649,"./is.js":6649,"./it":151,"./it-ch":5348,"./it-ch.js":5348,"./it.js":151,"./ja":9830,"./ja.js":9830,"./jv":3751,"./jv.js":3751,"./ka":3365,"./ka.js":3365,"./kk":5980,"./kk.js":5980,"./km":9571,"./km.js":9571,"./kn":5880,"./kn.js":5880,"./ko":6809,"./ko.js":6809,"./ku":6773,"./ku.js":6773,"./ky":5505,"./ky.js":5505,"./lb":553,"./lb.js":553,"./lo":1237,"./lo.js":1237,"./lt":1563,"./lt.js":1563,"./lv":1057,"./lv.js":1057,"./me":6495,"./me.js":6495,"./mi":3096,"./mi.js":3096,"./mk":3874,"./mk.js":3874,"./ml":6055,"./ml.js":6055,"./mn":7747,"./mn.js":7747,"./mr":7113,"./mr.js":7113,"./ms":8687,"./ms-my":7948,"./ms-my.js":7948,"./ms.js":8687,"./mt":4532,"./mt.js":4532,"./my":4655,"./my.js":4655,"./nb":6961,"./nb.js":6961,"./ne":2512,"./ne.js":2512,"./nl":8448,"./nl-be":2936,"./nl-be.js":2936,"./nl.js":8448,"./nn":9031,"./nn.js":9031,"./oc-lnc":5174,"./oc-lnc.js":5174,"./pa-in":118,"./pa-in.js":118,"./pl":3448,"./pl.js":3448,"./pt":3518,"./pt-br":2447,"./pt-br.js":2447,"./pt.js":3518,"./ro":817,"./ro.js":817,"./ru":262,"./ru.js":262,"./sd":8990,"./sd.js":8990,"./se":3842,"./se.js":3842,"./si":7711,"./si.js":7711,"./sk":756,"./sk.js":756,"./sl":3772,"./sl.js":3772,"./sq":6187,"./sq.js":6187,"./sr":732,"./sr-cyrl":5713,"./sr-cyrl.js":5713,"./sr.js":732,"./ss":9455,"./ss.js":9455,"./sv":9770,"./sv.js":9770,"./sw":959,"./sw.js":959,"./ta":6459,"./ta.js":6459,"./te":5302,"./te.js":5302,"./tet":7975,"./tet.js":7975,"./tg":1294,"./tg.js":1294,"./th":2385,"./th.js":2385,"./tk":4613,"./tk.js":4613,"./tl-ph":8668,"./tl-ph.js":8668,"./tlh":8190,"./tlh.js":8190,"./tr":4506,"./tr.js":4506,"./tzl":3440,"./tzl.js":3440,"./tzm":9852,"./tzm-latn":2350,"./tzm-latn.js":2350,"./tzm.js":9852,"./ug-cn":730,"./ug-cn.js":730,"./uk":99,"./uk.js":99,"./ur":2100,"./ur.js":2100,"./uz":6002,"./uz-latn":6322,"./uz-latn.js":6322,"./uz.js":6002,"./vi":4207,"./vi.js":4207,"./x-pseudo":4674,"./x-pseudo.js":4674,"./yo":570,"./yo.js":570,"./zh-cn":3644,"./zh-cn.js":3644,"./zh-hk":2591,"./zh-hk.js":2591,"./zh-mo":9503,"./zh-mo.js":9503,"./zh-tw":8080,"./zh-tw.js":8080};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=a,e.exports=r,r.id=6700},2618:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var s=n(5431);(0,s.z)("/test22/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var r=n(9242),a=n(1020),o=(n(7658),n(3396)),i=n(7139),l=n(4870),c=n(6797),u=n.n(c);const d=(0,a.Q_)("pinia",{state:()=>({placesArr:[],req:"https://api.weatherapi.com/v1/forecast.json?key=37d63f8db6f547a8a92100230231402&q="}),actions:{}}),p=e=>((0,o.dD)("data-v-b830c29e"),e=e(),(0,o.Cn)(),e),j={key:0,style:{width:"20em",padding:"1em"}},m={key:0,class:"major-box"},f={class:"title-header"},v={class:"currentT_box"},h=["src"],g={class:"currentWind_box"},y={class:"dir"},b=p((()=>(0,o._)("i",{style:{"font-size":"1em",color:"rgb(173, 173, 173)"},class:"pi pi-compass"},null,-1))),_={class:"ph"},w=p((()=>(0,o._)("i",{style:{"font-size":"1em",color:"rgb(173, 173, 173)"},class:"pi pi-exclamation-circle"},null,-1))),k={class:"rest_currentInfo"},z=p((()=>(0,o._)("b",null,"Humidity: ",-1))),x=p((()=>(0,o._)("b",null,"Visibility: ",-1))),$={class:"setts-box"};var A=(0,o.aZ)({__name:"WeatherModule",setup(e){const t=d(),n=(0,l.iH)("London, UK"),s=(0,l.iH)(!1),r=(0,l.iH)(!1),a=(0,l.iH)(null),c=(0,l.iH)(!0),p=(0,l.iH)(),A=async(e,s,a)=>{try{let o=a||e+","+s;const i=await fetch(`${t.$state.req}${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:""}),l=await i.json();if(l.error)r.value=!0;else{n.value=`${l.location.name}, ${l.location.country}`,a||t.$state.placesArr.includes(l.location.name)||t.$state.placesArr.push(l.location.name);const e=l.current.wind_kph;p.value={currentIMG:l.current.condition.icon,currentTempC:l.current.temp_c,feelsLikeC:l.current.feelslike_c,conditionText:l.current.condition.text,currentWind:void 0!==e?Math.round(1e3*e/3600):"N/A",currentWind_dir:l.current.wind_dir,current_hPa:l.current.pressure_in?Math.round(33.8639*l.current.pressure_in):"N/A",current_humidity:l.current.humidity,current_vis:l.current.vis_km},r.value=!1,l&&setTimeout((()=>{c.value=!1}),1e3)}}catch(o){r.value=!0}},C=async e=>{const t=e.coords.latitude,n=e.coords.longitude;await A(t,n,null)},I=async()=>{await A(51.5072,.1276,null)},T=()=>{s.value=!s.value};return(0,o.bv)((()=>{navigator.geolocation.getCurrentPosition(C,I),a.value=u()().format("dddd")})),(e,t)=>{const l=(0,o.up)("ProgressSpinner"),u=(0,o.up)("Card"),d=(0,o.up)("SettingsModule");return(0,o.wg)(),(0,o.iD)(o.HY,null,[c.value||r.value?((0,o.wg)(),(0,o.iD)("div",j,[(0,o.Wm)(l,{style:{display:"grid","align-items":"center","justify-items":"center"}})])):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[s.value?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(u,{style:{width:"20em",padding:"1em"},class:"animate__animated animate__fadeIn"},{header:(0,o.w5)((()=>[(0,o._)("div",f,[(0,o._)("span",null,[(0,o._)("b",null,(0,i.zw)(n.value),1)]),(0,o._)("i",{class:"pi pi-cog",onClick:t[0]||(t[0]=e=>T()),style:{"font-size":"1.5em",position:"absolute",right:"0",cursor:"pointer"}})]),(0,o._)("section",v,[(0,o._)("img",{style:{height:"8em",width:"8em"},src:p.value?.currentIMG,alt:"weatherIMG"},null,8,h),(0,o._)("span",null,[(0,o._)("b",null,(0,i.zw)(p.value?.currentTempC)+" °C",1)])])])),subtitle:(0,o.w5)((()=>[(0,o._)("p",null,[(0,o._)("b",null,"Today is "+(0,i.zw)(a.value),1)]),(0,o._)("p",null," Feels like "+(0,i.zw)(`${p.value?.feelsLikeC??"N/A"} °C. ${p.value?.conditionText??"N/A"}`),1)])),content:(0,o.w5)((()=>[(0,o._)("section",g,[(0,o._)("div",y,[b,(0,o._)("span",null,(0,i.zw)(`${p.value?.currentWind} m/s ${p.value?.currentWind_dir}`),1)]),(0,o._)("div",_,[w,(0,o._)("span",null,(0,i.zw)(`${p.value?.current_hPa} hPa`),1)])]),(0,o._)("section",k,[(0,o._)("span",null,[z,(0,o.Uk)((0,i.zw)(`${p.value?.current_humidity??"N/A"}%`),1)]),(0,o._)("span",null,[x,(0,o.Uk)((0,i.zw)(`${p.value?.current_vis??"N/A"} km`),1)])])])),_:1})]))],64)),(0,o._)("div",$,[s.value?((0,o.wg)(),(0,o.j4)(d,{key:0,onChanchePlace:t[1]||(t[1]=e=>A(0,0,e)),onToggleClose:t[2]||(t[2]=e=>T())})):(0,o.kq)("",!0)])],64)}}}),C=n(89);const I=(0,C.Z)(A,[["__scopeId","data-v-b830c29e"]]);var T=I,D=n(3852),S=n(4868),O=n(606),P=n(7267),H=n(6709);const M=e=>((0,o.dD)("data-v-33b2810e"),e=e(),(0,o.Cn)(),e),N=M((()=>(0,o._)("span",null,[(0,o._)("b",null,"Settings")],-1))),E={class:"pick-box-wrapper"},W=["onDragstart","onDrop"],q=M((()=>(0,o._)("i",{class:"pi pi-bars",style:{"font-size":"1.2em",cursor:"grab"}},null,-1))),B=["onClick"],L={class:"p-float-label p-input-icon-right"},Z={key:0,class:"pi pi-spin pi-spinner"},U="location";var F=(0,o.aZ)({__name:"SettingsModule",setup(e,{emit:t}){const n=d(),s=(0,l.iH)(""),a=(0,l.iH)(n.$state.placesArr),c=(0,l.iH)("Add your location:"),u=(0,l.iH)(!1),p=e=>{c.value=e?"Press ENTER to add...":"Add your location:"},j=async()=>{const e=s.value.trim();if(""===e)return c.value="Invalid input",void document.getElementById("location")?.classList.add("p-invalid");if(/\d/.test(e))return c.value="Invalid input",void document.getElementById("location")?.classList.add("p-invalid");try{u.value=!0;const t=`${n.$state.req}${e}`,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:""}),a=await r.json();if(a.error)return c.value="no such place",void document.getElementById("location")?.classList.add("p-invalid");if(n.$state.placesArr.includes(e))return c.value="already exists",void document.getElementById("location")?.classList.add("p-invalid");n.$state.placesArr.push(e),localStorage.setItem("places",n.$state.placesArr),s.value=""}catch{c.value="something went wrong =(",document.getElementById("location")?.classList.add("p-invalid")}finally{u.value=!1}},m=()=>{t("toggleClose")},f=e=>{n.$state.placesArr.splice(e,1),localStorage.setItem("places",n.$state.placesArr.join(","))},v=(e,t)=>{t.dataTransfer?.setData("text/plain",e.toString())},h=e=>{e.preventDefault()},g=(e,s)=>{const r=s.dataTransfer?.getData("text/plain");if(void 0!==r){const s=parseInt(r),a=n.$state.placesArr[s];n.$state.placesArr.splice(s,1),n.$state.placesArr.splice(e,0,a),t("chanchePlace",n.$state.placesArr[0])}};return(0,o.bv)((()=>{let e=localStorage.getItem("places"),t=e?e.split(","):[];const s=[...new Set([...n.placesArr,...t])];n.$state.placesArr.splice(0,n.$state.placesArr.length,...s)})),(e,t)=>{const n=(0,o.up)("InputText"),l=(0,o.up)("Card");return(0,o.wg)(),(0,o.j4)(l,{style:{width:"20em",padding:"1em"},class:"animate__animated animate__fadeIn"},{header:(0,o.w5)((()=>[(0,o._)("div",{class:"setts-header"},[N,(0,o._)("i",{class:"pi pi-times",onClick:m,style:{"font-size":"1.5em",position:"absolute",right:"0",cursor:"pointer"}})])])),content:(0,o.w5)((()=>[(0,o._)("div",E,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.value,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n,class:"pick-box",draggable:"true",onDragstart:e=>v(n,e),onDragover:t[0]||(t[0]=e=>h(e)),onDrop:e=>g(n,e)},[q,(0,o._)("p",null,(0,i.zw)(e[0].toUpperCase()+e.slice(1)),1),(0,o._)("i",{class:"pi pi-trash",style:{"font-size":"1.2em",cursor:"pointer"},onClick:e=>f(n)},null,8,B)],40,W)))),128))])])),footer:(0,o.w5)((()=>[(0,o._)("span",L,[(0,o.Wm)(n,{id:"location",modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),onFocus:t[2]||(t[2]=e=>p(!0)),onBlur:t[3]||(t[3]=e=>p(!1)),onKeyup:(0,r.D2)(j,["enter"])},null,8,["modelValue","onKeyup"]),u.value?((0,o.wg)(),(0,o.iD)("i",Z)):(0,o.kq)("",!0),(0,o._)("label",{for:U},(0,i.zw)(c.value),1)])])),_:1})}}});const V=(0,C.Z)(F,[["__scopeId","data-v-33b2810e"]]);var K=V;const G=(0,r.ri)(T);G.use(D.ZP,{ripple:!0,inputStyle:"filled",zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100}}),G.use((0,a.WB)()),G.component("Button",S.Z),G.component("Card",O.Z),G.component("ProgressSpinner",P.Z),G.component("InputText",H.Z),G.component("SettingsModule",K),G.component("WeatherModuleVue",T),G.mount("#weathertest22");var Y=G}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var a=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,s,r,a){if(!s){var o=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],a=e[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(i=!1,a<o&&(o=a));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[s,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,a,o=s[0],i=s[1],l=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var u=l(n)}for(t&&t(s);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},s=self["webpackChunkweathertest22"]=self["webpackChunkweathertest22"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(2618)}));return s=n.O(s),s}()}));
//# sourceMappingURL=app.45088d49.js.map