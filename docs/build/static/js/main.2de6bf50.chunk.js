(this["webpackJsonpsheduler-hospital"]=this["webpackJsonpsheduler-hospital"]||[]).push([[0],{43:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),c=n.n(r),o=n(12),s=n.n(o),i=(n(43),n(16)),l=n(72),d=n(82),u=n(80),b=n(75),p=n(79),g=n(78),j=n(74),f=n(76),h=n(77),m=n(34),x=n.n(m),y=n(33),v=n.n(y),O=n(31),w=n.n(O),C=["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"],S=["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"],k=Object(l.a)({root:{width:"100%"},container:{maxHeight:540},stickyCell:{position:"sticky",background:"#fff",left:0,zIndex:10,borderRight:"1px solid rgba(224, 224, 224, 1)",borderLeft:"1px solid rgba(224, 224, 224, 1)"},stickyColumn:{position:"sticky",background:"rgba(224, 224, 224, 1)",left:0,zIndex:11,borderRight:"1px solid rgba(224, 224, 224, 1)",borderLeft:"1px solid rgba(224, 224, 224, 1)",borderTop:"1px solid rgba(224, 224, 224, 1)"},sheduledIcon:{color:"white",backgroundColor:"#c4c4c4",padding:"4px 8px",marginLeft:"2px",borderRadius:"4px",fontSize:14},cellColumn:{borderRight:"1px solid rgba(224, 224, 224, 1)",borderTop:"1px solid rgba(224, 224, 224, 1)"},todayColumn:{border:"1px solid rgba(224, 224, 224, 1)",borderTop:"5px solid #1a75ff"},cell:{borderRight:"1px solid rgba(224, 224, 224, 1)"},nowrap:{whiteSpace:"nowrap"}});function D(e){var t=k(),n=e.usl,r=c.a.useState(e.dt?e.dt:new Date),o=Object(i.a)(r,1)[0],s=c.a.useState({cols:[],rows:[]}),l=Object(i.a)(s,2),d=l[0],u=l[1],m=function(e){var n=e.usl,r=e.dt;return n.isAborted?Object(a.jsx)(w.a,{style:{backgroundColor:"#ff704d"},className:t.sheduledIcon}):!n.isAborted&&n.dt<r?Object(a.jsx)(v.a,{style:{backgroundColor:"rgb(54, 187, 106)"},className:t.sheduledIcon}):!n.isAborted&&n.dt>r?Object(a.jsx)(x.a,{className:t.sheduledIcon}):Object(a.jsx)(a.Fragment,{children:"1"})},y=function(e){var n=e.usls,r=e.dt;return Object(a.jsx)("div",{className:t.nowrap,children:n.sort((function(e,t){return e.dt>t.dt?1:-1})).map((function(e,t){var n="rd-".concat(e.dt,"-").concat(t);return Object(a.jsx)(m,{usl:e,dt:r},n)}))})},O=function(e,t){return"label"===e.ctype?"uslCategory"===t.ctype?Object(a.jsx)("strong",{children:t.value}):t.value:"data"===e.ctype&&"uslCategory"===t.ctype?"":"data"===e.ctype&&"usl"===t.ctype?Object(a.jsx)(y,{usls:n.filter((function(t){return t.tday===e.label})).filter((function(e){return e.name===t.value})),dt:o}):Object(a.jsx)(a.Fragment,{children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435"})};c.a.useEffect((function(){var e=Array.from(new Set(n.map((function(e){return e.ctype})))).sort(),t=[];e.forEach((function(e){t.push({value:e,ctype:"uslCategory",rowname:"names"}),Array.from(new Set(n.filter((function(t){return t.ctype===e})).map((function(e){return e.name})))).sort().forEach((function(e){t.push({value:e,ctype:"usl",rowname:"names"})}))}));var a=[];a.push({id:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",label:"",ctype:"label"});for(var r=-3;r<4;r++){var c=new Date(o.getTime());c.setDate(c.getDate()+r);var s=c.toISOString().substring(0,10);a.push({id:s,label:s,ctype:"data"})}u({rows:t,cols:a})}),[n,o]),c.a.useEffect((function(){console.log("Table: ",d),console.log("Usl:",n)}),[d]);var D=function(e){if("data"===e.ctype){var t=new Date(e.label);return Object(a.jsxs)("span",{children:["".concat(t.getDate()," ").concat(S[t.getMonth()]),Object(a.jsx)("br",{}),C[t.getDay()]]})}return e.label};return Object(a.jsx)(j.a,{className:t.container,children:Object(a.jsxs)(b.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(a.jsx)(f.a,{children:Object(a.jsx)(h.a,{children:d.cols.map((function(e,n){return Object(a.jsx)(g.a,{align:e.align,style:{minWidth:e.minWidth},className:e.label===o.toISOString().substring(0,10)?t.todayColumn:0===n?t.stickyColumn:t.cellColumn,children:D(e)},e.id)}))})}),Object(a.jsx)(p.a,{children:d.rows.map((function(e){return Object(a.jsx)(h.a,{hover:!0,role:"checkbox",tabIndex:-1,children:d.cols.map((function(n,r){return Object(a.jsx)(g.a,{align:n.align,className:0===r?t.stickyCell:t.cell,children:O(n,e)},n.id)}))},e.value)}))})]})})}var I=[{ctype:"H\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",variants:["\u0410\u043a\u043a\u0443\u0437\u0438\u0434","\u0410\u0441\u043f\u0438\u0440\u0438\u043d-\u0421","\u0414\u0438\u0440\u043e\u043d\u0435\u0442 \u0430\u043d\u0442\u0438\u0433\u0435\u043b\u044c\u043c\u0438\u043d\u0442\u0438\u043a","\u0411\u0438\u0441\u043e\u043f\u0440\u043e\u043b\u043e\u043b"]},{ctype:"\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438",variants:["\u0425\u0438\u0440\u0443\u0440\u0433","\u041e\u0444\u0442\u0430\u043b\u044c\u043c\u043e\u043b\u043e\u0433","\u041e\u0442\u043e\u043b\u0430\u0440\u0438\u043d\u0433\u043e\u043b\u043e\u0433"]},{ctype:"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f",variants:["\u041e\u0431\u0449\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437 \u043a\u0440\u043e\u0432\u0438","\u0410\u043d\u0430\u043b\u0438\u0437 \u043c\u043e\u0447\u0438","\u0411\u0438\u043e\u043f\u0441\u0438\u044f \u0441\u043f\u0438\u043d\u043d\u043e\u0433\u043e \u043c\u043e\u0437\u0433\u0430"]}],T=function(e){return e[Math.floor(Math.random()*e.length)]},N=function(){var e=new Date;e.setDate(e.getDate()-3);var t=new Date;t.setDate(t.getDate()+3);var n,a,r=(n=e,a=t,new Date(n.getTime()+Math.random()*(a.getTime()-n.getTime()))),c=T(I),o=T(c.variants);return{dt:r,tday:r.toISOString().substring(0,10),ttime:r.toISOString().substring(11,16),name:o,ctype:c.ctype,isAborted:Math.random()>.9}},A=function(e){for(var t=e||100,n=[],a=0;a<t;a++)n.push(N());return n},E=n(81),F=Object(l.a)((function(e){return Object(d.a)({root:{padding:0,width:"100%",height:"100%"},paper:{padding:e.spacing(2)}})}));var M=function(){var e=F(),t=c.a.useState(100),n=Object(i.a)(t,2),r=n[0],o=n[1],s=c.a.useState(A(r)),l=Object(i.a)(s,2),d=l[0],b=l[1];return c.a.useEffect((function(){console.log("Usl: ",d)}),[d]),Object(a.jsx)("div",{className:e.root,children:Object(a.jsxs)(u.a,{elevation:3,className:e.paper,children:[Object(a.jsx)("h3",{children:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439"}),Object(a.jsx)("input",{type:"range",id:"vol",name:"vol",min:"20",max:"200",value:r,onChange:function(e){return o(parseInt(e.target.value))}}),Object(a.jsxs)(E.a,{variant:"contained",color:"primary",onClick:function(){return b(A(r))},children:["\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c (",r,")"]}),Object(a.jsx)("div",{style:{paddingTop:16},children:Object(a.jsx)(D,{usl:d})})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root")),L()}},[[50,1,2]]]);
//# sourceMappingURL=main.2de6bf50.chunk.js.map