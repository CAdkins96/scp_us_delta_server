(this.webpackJsonpscp_us_delta=this.webpackJsonpscp_us_delta||[]).push([[0],{17:function(e,a,t){e.exports=t(29)},22:function(e,a,t){},23:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(14),s=t.n(c),r=(t(22),t(16)),m=t(3),i=t(1);t(23);var u=function(e){return l.a.createElement("div",{className:"dataText"},l.a.createElement("text",{className:"firstAgent"},"Name: ",e.name),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("text",{className:"data"},"Task Force: ",e.taskforce),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("text",{className:"data"},"Supervisor: ",e.supervisor),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("text",{className:"data"},"Position: ",e.classification),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("text",{className:"data"},"Clearance: ",e.clearance),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("text",{className:"data"},"Species: ",e.species),l.a.createElement("br",null),l.a.createElement("br",null))};var o=function(e){var a=e.agents;return e.changeClass("App Base"),l.a.createElement("div",null,l.a.createElement(m.a,{basename:"/Agents"},l.a.createElement("ol",{className:"dataNav"},a.map((function(e){return l.a.createElement(m.b,{to:e.path,key:e.id,className:e.navPlacement},e.fullName)}))),l.a.createElement("ol",{className:"dataNavMobile"},a.map((function(e){var a="mobileNav "+e.navPlacement;return l.a.createElement(m.b,{to:e.path,key:e.id,className:a},e.abvName)}))),l.a.createElement(i.c,null,a.map((function(e){return l.a.createElement(i.a,{path:e.path,key:e.id},l.a.createElement(u,{name:e.fullName,taskforce:e.taskforce,supervisor:e.supervisor,classification:e.classification,clearance:e.clearance,species:e.species}))})))))},p=[{id:"001",fullName:"Agent Leeds",abvName:"Leeds",supervisor:"REDACTED",classification:"REDACTED",clearance:"REDACTED",species:"REDACTED",taskforce:"Cryptid Rogue",path:"/AgentLeeds",navPlacement:"notLast"},{id:"033",fullName:"Alexander Grant",abvName:"Alex",supervisor:"Agent Leeds",classification:"Expert",clearance:"Cryptid",species:"Human",taskforce:"Cryptid Rogue",path:"/AgentAlexander",navPlacement:"notLast"},{id:"034",fullName:"Axel Rose",abvName:"Axel",supervisor:"Agent Leeds",classification:"Wronged",clearance:"Cryptid",species:"Human",taskforce:"Cryptid Rogue",path:"/AgentRose",navPlacement:"notLast"},{id:"035",fullName:"Eugene Fletcher",abvName:"Eugene",supervisor:"Agent Leeds",classification:"Flake",clearance:"Cryptid",species:"Human",taskforce:"Cryptid Rogue",path:"/AgentFletcher",navPlacement:"notLast"},{id:"036",fullName:"Peter",abvName:"Peter",supervisor:"Agent Leeds",classification:"Mundane",clearance:"Cryptid",species:"Human",taskforce:"Cryptid Rogue",path:"/AgentPeter",navPlacement:"last"}],E=[{id:"0",idNum:"001",name:"3",class:"Safe",path:"/001"},{id:"1",idNum:"002",name:"3",class:"Safe",path:"/002"},{id:"2",idNum:"003",name:"3",class:"Keter",path:"/003"},{id:"3",idNum:"004",name:"3",class:"Euclid",path:"/004"}],d=[{id:"0",class:"Safe",path:"/Safe",newClass:"App Safe",navPlacement:"notLast"},{id:"1",class:"Euclid",path:"/Euclid",newClass:"App Euclid",navPlacement:"notLast"},{id:"2",class:"Keter",path:"/Keter",newClass:"App Keter",navPlacement:"notLast"},{id:"3",class:"Thaumiel",path:"/Thaumiel",newClass:"App Thaumiel",navPlacement:"notLast"},{id:"4",class:"Apollyon",path:"/Apollyon",newClass:"App Apollyon",navPlacement:"last"}];var v=function(e){return l.a.createElement("div",{className:"dataText"},l.a.createElement("text",{className:"firstAgent"},"Name: ",e.name),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("text",{className:"data"},"ID: ",e.idNum),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("text",{className:"data"},"Class: ",e.class),l.a.createElement("br",null),l.a.createElement("br",null))};var h=function(e){var a=e.scps,t="App "+e.class;return e.changeClass(t),l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement("ol",null,a.map((function(a){if(a.class===e.class)return l.a.createElement(m.b,{to:a.path,key:a.id},a.idNum,": ",a.name)}))),l.a.createElement(i.c,null,a.map((function(e){return l.a.createElement(i.a,{path:e.path,key:e.id},l.a.createElement(v,{name:e.name,idNum:e.idNum,class:e.class}))})))))};var f=function(e){var a=e.classes;return e.changeClass("App Base"),l.a.createElement("div",null,l.a.createElement(m.a,{basename:"/SCPs"},l.a.createElement("ol",null,a.map((function(e){var a="mobileNav "+e.navPlacement;return l.a.createElement(m.b,{to:e.path,key:e.id,className:a},e.class)}))),l.a.createElement(i.c,null,a.map((function(a){return l.a.createElement(i.a,{path:a.path,key:a.id},l.a.createElement(h,{scps:E,class:a.class,changeClass:e.changeClass}))})))))};function N(){return l.a.createElement("text",null,"Cryptids")}var b=function(){var e=Object(n.useState)("App Base"),a=Object(r.a)(e,2),t=a[0],c=a[1];function s(e){c(e)}return l.a.createElement(m.a,null,l.a.createElement("div",{className:t},l.a.createElement("header",null,l.a.createElement("h1",{className:"heading"},"Secure Contain Protect"),l.a.createElement("h3",{className:"headingMobile"},"Secure Contain Protect"),l.a.createElement("h6",null,"US - DELTA ")),l.a.createElement("div",{className:"navBar"},l.a.createElement(m.b,{to:"/Cryptids",activeClassName:"activeLink"},"Cryptids"),l.a.createElement(m.b,{to:"/SCPs",activeClassName:"activeLink"},"SCPs"),l.a.createElement(m.b,{to:"/Agents",activeClassName:"activeLink"},"Agents")),l.a.createElement(i.c,{className:"subNav"},l.a.createElement(i.a,{path:"/Cryptids"},l.a.createElement(N,null)),l.a.createElement(i.a,{path:"/SCPs"},l.a.createElement(f,{classes:d,changeClass:s})),l.a.createElement(i.a,{path:"/Agents"},l.a.createElement(o,{agents:p,changeClass:s})),l.a.createElement(i.a,{path:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.c5d1332f.chunk.js.map