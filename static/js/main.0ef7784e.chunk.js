(window.webpackJsonpproapp=window.webpackJsonpproapp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/bg-shape.9b44a343.svg"},function(e,t,a){e.exports=a.p+"static/media/pic-1.412dea68.jpg"},function(e,t,a){e.exports=a.p+"static/media/sun-icon.ee97e668.svg"},function(e,t,a){e.exports=a.p+"static/media/pic-2.236ccd82.jpg"},function(e,t,a){e.exports=a.p+"static/media/snow-icon.916aea4e.svg"},function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(4),l=a.n(i),r=(a(16),a(17),a(1)),m=a.n(r),s=a(5),o=a(2),u=(a(19),a(6)),p=a.n(u),E=function(e){return c.a.createElement("section",null,c.a.createElement("img",{src:p.a,alt:"Background shape",id:"bg"}),c.a.createElement("h1",null,"WEATHER",c.a.createElement("br",null),"ME",c.a.createElement("span",null,"NOW")),c.a.createElement("hr",null),c.a.createElement("p",null,"A minimal weather app design to brighten up your day.",c.a.createElement("br",null),"Coded by Syed Simanta @ Design Coder."),c.a.createElement("div",{className:"bottom"},c.a.createElement("p",null,"Your weather is currently showing in:"),c.a.createElement("div",{className:"buttons"},c.a.createElement("div",{className:"btn"},"C"===e.tempSymbol?c.a.createElement("button",{className:"clicked"},"C"):c.a.createElement("button",{onClick:e.setTempSymbol},"C"),c.a.createElement("p",null,"Celsius")),c.a.createElement("div",{className:"btn"},"F"===e.tempSymbol?c.a.createElement("button",{className:"clicked"},"F"):c.a.createElement("button",{onClick:e.setTempSymbol},"F"),c.a.createElement("p",null,"Fahrenheit")))))},d=(a(20),a(7)),b=a.n(d),f=a(8),g=a.n(f),v=a(9),y=a.n(v),h=a(10),w=a.n(h),S=function(e){var t=0;if(e.cities){var a=parseInt(e.cities.main.temp),n=parseInt(5/9*(a-32));t="F"===e.tempSymbol?a:n}return c.a.createElement("section",{className:"item"},c.a.createElement("div",{className:"floater"},c.a.createElement("div",{className:"icon-temp"},e.cities&&"Tangail"===e.cities.name?c.a.createElement("img",{src:g.a,alt:"Icon"}):c.a.createElement("img",{src:w.a,alt:"Icon"}),c.a.createElement("p",{id:"temp"},e.cities?t:"","\xb0")),c.a.createElement("p",null,e.cities?e.cities.weather[0].main.toUpperCase():"")),e.cities&&"Tangail"===e.cities.name?c.a.createElement("img",{src:b.a,alt:"Tangail",id:"country-img"}):c.a.createElement("img",{src:y.a,alt:"Moscow",id:"country-img"}),c.a.createElement("div",{className:"country"},e.cities&&"Tangail"===e.cities.name?c.a.createElement("div",null,c.a.createElement("p",null,e.cities.name),c.a.createElement("p",null,"BANGLADESH")):c.a.createElement("div",null,c.a.createElement("p",null,"Moscow"),c.a.createElement("p",null,"RUSSIA"))))},N=(a(21),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)("C"),r=Object(o.a)(l,2),u=r[0],p=r[1];return Object(n.useEffect)((function(){!function(){var e=Object(s.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.openweathermap.org/data/2.5/group?id=1336144,524901&units=imperial&appid=40af4c7a896866ecce136a32e66d7f74");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a.list);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),c.a.createElement("main",null,c.a.createElement(E,{tempSymbol:u,setTempSymbol:function(){return p("F"===u?"C":"F")}}),c.a.createElement(S,{cities:a[0],tempSymbol:u}),c.a.createElement(S,{cities:a[1],tempSymbol:u}))});l.a.render(c.a.createElement(N,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.0ef7784e.chunk.js.map