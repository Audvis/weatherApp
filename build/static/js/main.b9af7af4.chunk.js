(this["webpackJsonp07-react-estilos"]=this["webpackJsonp07-react-estilos"]||[]).push([[0],{10:function(e,a,t){e.exports={card:"Card_card__1_6Bb",container:"Card_container__AlyDX",x:"Card_x__9zqpO",tituloCard:"Card_tituloCard__28zAq",subTitulosMin:"Card_subTitulosMin__2ORmP",subTitulosMax:"Card_subTitulosMax__1BF8r",min:"Card_min__1YUcF",max:"Card_max__Np2Ea",contImg:"Card_contImg__2Uilb",btn:"Card_btn__1z9tw"}},15:function(e,a,t){},2:function(e,a,t){e.exports={container:"Ciudad_container__3W48g",info:"Ciudad_info__32lDb",titulo:"Ciudad_titulo__2pNlH",subTitulo:"Ciudad_subTitulo__2sJYf",subTituloNew:"Ciudad_subTituloNew__17pWJ",texto:"Ciudad_texto__1X72R",textoNew:"Ciudad_textoNew__2XGJz",country:"Ciudad_country__hxPo8",flag:"Ciudad_flag__1uBr_",span:"Ciudad_span__1JdER",icon:"Ciudad_icon__DH3Kk"}},23:function(e,a,t){e.exports={container:"Intro_container__1L3zm",titulo:"Intro_titulo__2m0qu",img:"Intro_img__20Cnb"}},24:function(e,a,t){e.exports={form:"Search_form__2b8FL",agregar:"Search_agregar__xaiVt"}},25:function(e,a,t){e.exports={header:"Header_header__HmiSx",titulo:"Header_titulo__2dezl",link:"Header_link__37pBH"}},32:function(e,a,t){e.exports={ulCards:"Cards_ulCards__3FUDH"}},33:function(e,a,t){e.exports={nav:"Nav_nav__Bkkpc"}},40:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t(21),c=t.n(n),i=(t(40),t(34)),r=t(11),o=t(10),l=t.n(o),d=(t(15),t(12)),j=t(0);function u(e){var a=e.max,t=e.min,s=e.name,n=e.img,c=e.onClose,i=e.id;return Object(j.jsxs)("div",{className:l.a.card,children:[Object(j.jsx)("button",{className:l.a.x,onClick:function(){return c(i)},children:"X"}),Object(j.jsx)("h2",{className:l.a.tituloCard,children:s}),Object(j.jsxs)("div",{className:l.a.container,children:[Object(j.jsxs)("p",{className:l.a.subTitulosMin,children:["Min ",Object(j.jsxs)("span",{className:l.a.min,children:[t,"\xb0"]})," "]}),Object(j.jsxs)("p",{className:l.a.subTitulosMax,children:["Max ",Object(j.jsxs)("span",{className:l.a.max,children:[a,"\xb0"]})," "]})]}),Object(j.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(n,"@2x.png"),alt:"Imagen Clima",className:l.a.img}),Object(j.jsx)(d.b,{to:"/ciudad/".concat(i),children:Object(j.jsx)("button",{className:l.a.btn,children:"More Info"})})]})}var b=t(23),m=t.n(b),x=t.p+"static/media/weatherWorld.820b5a2a.jpg",h=function(){return Object(j.jsxs)("div",{className:m.a.container,children:[Object(j.jsx)("h1",{className:m.a.titulo,children:"Weather App"}),Object(j.jsx)("img",{src:x,alt:"",className:m.a.img})]})},p=t(32),_=t.n(p);function O(e){var a=e.cities,t=e.onClose;return Object(j.jsx)(j.Fragment,{children:0===a.length?Object(j.jsx)(h,{}):Object(j.jsx)("ul",{className:_.a.ulCards,children:null===a||void 0===a?void 0:a.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(u,{max:e.main.temp_max,min:e.main.temp_min,name:e.name,img:e.weather[0].icon,onClose:t,id:e.id},e.id)},e.id)}))})})}var N=t(24),f=t.n(N);function v(e){var a=e.onSearch,t=Object(s.useState)(""),n=Object(r.a)(t,2),c=n[0],i=n[1];return Object(j.jsxs)("form",{className:f.a.form,onSubmit:function(e){e.preventDefault(),a(c),i("")},children:[Object(j.jsx)("input",{type:"text",name:"busqueda",placeholder:"City...",className:f.a.entrada,onChange:function(e){return i(e.target.value)},value:c}),Object(j.jsx)("input",{type:"submit",className:f.a.agregar,value:"Add"})]})}var g=t(33),C=t.n(g);function w(e){var a=e.onSearch;return Object(j.jsx)("nav",{className:C.a.nav,children:Object(j.jsx)(v,{onSearch:a})})}var y=t(25),A=t.n(y);var T=function(){return Object(j.jsxs)("nav",{className:A.a.header,children:[Object(j.jsx)(d.b,{to:"/",children:Object(j.jsx)("span",{className:A.a.titulo,children:"Weather App"})}),Object(j.jsx)(d.b,{to:"/about",children:Object(j.jsx)("span",{className:A.a.link,children:"About"})})]})},S=t(3),I=t(9),M=t.n(I),W=t.p+"static/media/world.59527a83.png",k=t.p+"static/media/yo.7bdf23be.jpg";function H(e){e.onSearch;return Object(j.jsxs)("div",{className:M.a.container,children:[Object(j.jsx)("h2",{className:M.a.titulo,children:"About"}),Object(j.jsxs)("div",{className:M.a.subContainer,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:M.a.title,children:"Weather App"}),Object(j.jsxs)("p",{className:M.a.text,children:["This App was made with REACT and CSS MODULE ",Object(j.jsx)("br",{}),"and take the data of api weather, api flags and api maps."," "]}),Object(j.jsx)("p",{className:M.a.text,children:"The Weather App was created in the Henry's Bootcamp in July 2021."})]}),Object(j.jsx)("img",{src:W,alt:"",className:M.a.img})]}),Object(j.jsxs)("div",{className:M.a.subContainerTwo,children:[Object(j.jsx)("img",{src:k,alt:"",className:M.a.me}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:M.a.title,children:"Me"}),Object(j.jsxs)("p",{className:M.a.text,children:["Musician, audiovisual creater  and now web developer.",Object(j.jsx)("br",{}),"I love create things like a songs and short videos and troublesshot.",Object(j.jsx)("br",{}),"Currently  I use the next tecnologies:",Object(j.jsx)("br",{}),"posgres, sequelice, node, react, redux, react-native, html and css."]})]})]})]})}var z=t(2),B=t.n(z),D=t(53),E=t(56),J=t(54),L=t(55),q=function(e){var a=e.lat,t=e.lon,s=e.name;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(D.a,{center:[a,t],zoom:11,scrollWheelZoom:!1,children:[Object(j.jsx)(E.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(j.jsx)(J.a,{position:[a+.01,t],children:Object(j.jsxs)(L.a,{children:["City of ",s," ",Object(j.jsx)("br",{})," Weather App."]})})]})})};function F(e){var a=e.city;console.log(a);var t=a.sys.country.toLowerCase();"mexico"===a.name.toLowerCase()&&(t="mx");var s=a.coord.lat,n=a.coord.lon;return Object(j.jsxs)("div",{className:B.a.container,children:[Object(j.jsxs)("div",{className:B.a.flag,children:[Object(j.jsx)("img",{src:"https://flagcdn.com/".concat(144,"x").concat(108,"/").concat(t,".png"),width:"{wid}",height:"{hei}",alt:"Sud\xe1frica"}),Object(j.jsxs)("div",{className:B.a.country,children:[a.sys.country," "]})]}),Object(j.jsxs)("div",{className:B.a.info,children:[Object(j.jsx)("h2",{className:B.a.titulo,children:a.name}),Object(j.jsx)("h3",{className:B.a.subTitulo,children:"General Weather"}),Object(j.jsxs)("div",{className:B.a.texto,children:["Temp ",Object(j.jsx)("span",{className:B.a.span,children:":"})," ",a.main.temp," ",Object(j.jsx)("span",{className:B.a.span,children:"\xba"}),"C"]}),Object(j.jsxs)("div",{className:B.a.texto,children:["Weather ",Object(j.jsx)("span",{className:B.a.span,children:":"})," ",a.weather[0].main]}),Object(j.jsxs)("div",{className:B.a.texto,children:["Description ",Object(j.jsx)("span",{className:B.a.span,children:":"})," ",a.weather[0].description]}),Object(j.jsxs)("div",{className:B.a.texto,children:["Wind speed ",Object(j.jsx)("span",{className:B.a.span,children:":"})," ",a.wind.speed," ","km/h"]}),Object(j.jsxs)("div",{className:B.a.texto,children:["Clouds ",Object(j.jsx)("span",{className:B.a.span,children:":"})," ",a.clouds.all]}),Object(j.jsxs)("div",{className:B.a.texto,children:["Humidity ",Object(j.jsx)("span",{className:B.a.span,children:":"})," ",a.main.humidity]}),Object(j.jsxs)("div",{className:B.a.texto,children:["Pressure ",Object(j.jsx)("span",{className:B.a.span,children:":"})," ",a.main.pressure]}),Object(j.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(a.weather[0].icon,"@2x.png"),alt:"Imagen Clima",className:B.a.icon}),Object(j.jsxs)("div",{className:B.a.textoNew,children:[Object(j.jsxs)("div",{className:B.a.texto,children:["Latitude ",Object(j.jsx)("span",{className:B.a.span,children:":"})," ",a.coord.lat,Object(j.jsx)("span",{className:B.a.span,children:"\xba"})]}),Object(j.jsxs)("div",{className:B.a.texto,children:["longitude ",Object(j.jsx)("span",{className:B.a.span,children:":"})," ",a.coord.lon,Object(j.jsx)("span",{className:B.a.span,children:"\xba"})]})]})]}),Object(j.jsx)("h3",{className:B.a.subTituloNew,children:"Location"}),Object(j.jsx)(q,{lat:s,lon:n,name:a.name})]})}t(50);var P=function(){var e=Object(s.useState)([]),a=Object(r.a)(e,2),t=a[0],n=a[1];function c(e){fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("4ae2636d8dfbdc3044bede63951a019b")).then((function(e){return e.json()})).then((function(e){void 0!==e.main?n((function(a){return[].concat(Object(i.a)(a),[e])})):alert("Ciudad no encontrada")}))}function o(e){n((function(a){return a.filter((function(a){return a.id!==e}))}))}function l(e){var a=t.find((function(a){return a.id===parseInt(e)}));return a||null}return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(S.a,{path:"/",component:T}),Object(j.jsx)(S.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(O,{cities:t,onClose:o})}}),Object(j.jsx)(S.a,{path:"/about",component:H}),Object(j.jsx)(S.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(w,{onSearch:c})}}),Object(j.jsx)(S.a,{exact:!0,path:"/ciudad/:ciudadId",render:function(e){var a=e.match;return Object(j.jsx)(F,{city:l(a.params.ciudadId)})}})]})};c.a.render(Object(j.jsx)(d.a,{children:Object(j.jsx)(P,{})}),document.getElementById("root"))},9:function(e,a,t){e.exports={container:"About_container__2VD5t",titulo:"About_titulo__2argI",subContainer:"About_subContainer__2_yS3",subContainerTwo:"About_subContainerTwo__3sNwt",title:"About_title__2dE34",text:"About_text__PrPMG",img:"About_img__1E2Kx",me:"About_me__1WvBA"}}},[[51,1,2]]]);
//# sourceMappingURL=main.b9af7af4.chunk.js.map