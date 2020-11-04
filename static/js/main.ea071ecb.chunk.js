(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{57:function(e,t,a){e.exports=a(88)},62:function(e,t,a){},63:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(21),r=a.n(i),s=(a(62),a(7)),c=a(11),o=a(9),m=a(8),u=a(25),d=a(5),b=a(90),h=a(95),p=a(96),g=(a(63),a(91)),E=a(49);var f=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(b.a,{fluid:!0},l.a.createElement(g.a,{className:"border-top justify-content-between p-3"},l.a.createElement(E.a,{className:"p-0",md:3,sm:12}),l.a.createElement(E.a,{className:"p-0 d-flex justify-content-end",md:3},"This application was created by Allison Barnard."))))},v=a(20),S=a(38);var y=function(e){var t=Object(S.b)({opacity:1,from:{opacity:0}});return l.a.createElement(S.a.div,{className:"a-card-info",style:t},l.a.createElement("p",{className:"a-card-title"},e.title),l.a.createElement("p",{className:"a-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var k=function(e){return l.a.createElement("div",{className:"d-inline-block a-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"a-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(y,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},N=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(v.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return l.a.createElement(k,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Wood Door",subTitle:"Job search application.",imgSrc:"./assets/images/woodDoor.png",link:"https://allisonbarnard07.github.io/Job-Search/",selected:!1},{id:1,title:"Employee Management System",subTitle:"Employee Management System application.",imgSrc:"./assets/images/employeeManagementSystem.png",link:"https://github.com/allisonbarnard07/employeeManagementSystem",selected:!1},{id:2,title:"ReadMe Generator",subTitle:"ReadMe Generator application.",imgSrc:"./assets/images/readMe.png",link:"https://github.com/allisonbarnard07/ReadMeGenerator",selected:!1},{id:3,title:"Website Clean Up",subTitle:"A code clean up project.",imgSrc:"./assets/images/websiteCleanup.png",link:"https://allisonbarnard07.github.io/website_cleanup/",selected:!1},{id:4,title:"Build & Flex",subTitle:"A walking challenge application.",imgSrc:"./assets/images/buildAndFlex.png",link:"https://buildandflex.herokuapp.com/",selected:!1}]},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(b.a,{fluid:!0},l.a.createElement(g.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(l.a.Component),w=a(92);var C=function(e){return l.a.createElement(w.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(b.a,{fluid:!0},l.a.createElement(g.a,{className:"justify-content-center oy-5"},l.a.createElement(E.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"}," ",e.title," "),e.subTitle&&l.a.createElement("h2",{className:"display-4 font-weight-light"}," ",e.subTitle," "),e.subSubText&&l.a.createElement("h3",{className:"lead font-weight-light"}," ",e.subSubText," ")))))};var j=function(e){return l.a.createElement("div",null,l.a.createElement(C,{title:e.title,subTitle:e.subTitle,subSubText:e.subSubText}),l.a.createElement(N,null))};var T=function(e){return l.a.createElement(b.a,{fluid:!0},l.a.createElement(g.a,{className:"justify-content-center"},l.a.createElement(E.a,{md:8},e.children)))};var x=function(e){return l.a.createElement("div",null,l.a.createElement(C,{title:e.title}),l.a.createElement(T,null,l.a.createElement("p",null,"Hello, my name is Allison Barnard. I am a full stack web developer who just graduated from Case Western Reserve's Full Stack Coding Boot Camp."),l.a.createElement("p",null,"I have experience with ReactJS, mySQL, MongoDB, HTML, CSS, JS, JQuery, Express, Bootstrap, JSON, APIs, Handlebars and AJAX. "),l.a.createElement("p",null,"My dream is to one day start my own business building websites."),l.a.createElement("p",null,"When I'm not learning code or building applications, you can find me reading, traveling, hiking, or running."),l.a.createElement("a",{className:"LinkedIn",href:"https://www.linkedin.com/in/allison-barnard-bb44a7100/"}," LinkedIn "),l.a.createElement("a",{className:"Github ",href:"https://github.com/allisonbarnard07"}," Github "),l.a.createElement("a",{className:"Resume",href:"https://docs.google.com/document/d/11146FOBozArXkyonDy77DLRKj66uydntyl5UStvGXsE/edit"}," Resume ")))},O=a(19),M=a(94),A=a(93),B=a(50),G=a.n(B),I=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(O.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),console.log(e.target),n.setState({disabled:!0}),G.a.post("http://localhost:3000/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(C,{title:this.props.title}),l.a.createElement(T,null,l.a.createElement(M.a,{onSubmit:this.handleSubmit},l.a.createElement(M.a.Group,null,l.a.createElement(M.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(M.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(M.a.Group,null,l.a.createElement(M.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(M.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(M.a.Group,null,l.a.createElement(M.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(M.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(A.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component),J=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Portfolio",subTitle:"My Projects",subSubText:"Here is a list of my projects. Click on the project image to access a drop down that includes: a title, brief description, and a 'View' link to the project"},about:{title:"About Me"},contact:{title:"Contact Me"}},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(b.a,{className:"p-0",fluid:!0},l.a.createElement(h.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(h.a.Brand,null," Allison Barnard "),l.a.createElement(h.a.Toggle,{"aria-controls":"navbar-toggle"}),l.a.createElement(h.a.Collapse,{id:"navbar-toggler"},l.a.createElement(p.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(u.b,{className:"nav-link",to:"about"},"About"),l.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(j,{title:e.state.home.title,subTitle:e.state.home.subTitle,subSubText:e.state.home.subSubText})}}),l.a.createElement(d.a,{path:"/about",render:function(){return l.a.createElement(x,{title:e.state.about.title})}}),l.a.createElement(d.a,{path:"/contact",render:function(){return l.a.createElement(I,{title:e.state.contact.title})}}),l.a.createElement(f,null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(87);r.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.ea071ecb.chunk.js.map