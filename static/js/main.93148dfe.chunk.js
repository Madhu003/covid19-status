(this["webpackJsonpconvid19-status"]=this["webpackJsonpconvid19-status"]||[]).push([[0],{206:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(77),c=a.n(r),s=(a(88),a(89),a(23)),m=(a(90),a(80)),o=a(17),u=a(19),i=a(20),d=a(34),E=a(33),h=a(91).default,p=function(){function e(){Object(u.a)(this,e)}return Object(i.a)(e,null,[{key:"getSummary",value:function(){return h({method:"get",url:"https://covid19.mathdro.id/api/",responseType:"stream"})}},{key:"getDailyReport",value:function(){return h({method:"get",url:"https://covid19.mathdro.id/api/daily",responseType:"stream"})}},{key:"getSummaryOfIndia",value:function(){return h({method:"get",url:"https://covid19.mathdro.id/api/countries/in",responseType:"stream"})}},{key:"getStateWiseSummary",value:function(){return h({method:"get",url:"https://coronavirus-tracker-india-covid-19.p.rapidapi.com/api/getStatewise",headers:{"x-rapidapi-host":"coronavirus-tracker-india-covid-19.p.rapidapi.com","x-rapidapi-key":"4a2e3811aamsh7f7033a3e894965p1627e0jsn07536ca30718",useQueryString:!0}})}}]),e}(),y=a(13),g=a(14),v=a(5),f=a(3),x=a(12),b=a(45),S=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={countryCases:[],globalCases:{}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.getSummary().then((function(t){console.log(t),e.setState({summary:t.data})})),p.getDailyReport().then((function(t){e.setState({dailyReport:t.data}),console.log(t)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y.a,{style:{marginTop:"10px"}},l.a.createElement("br",null),l.a.createElement(g.a,{style:{textAlign:"left"}},l.a.createElement(v.a,{xs:!0,lg:"2"},"\xa0"),l.a.createElement(v.a,{xs:"8"},l.a.createElement("h2",null,"Status of World")))),l.a.createElement(y.a,null,l.a.createElement("br",null),l.a.createElement(g.a,{className:"justify-content-md-center"},l.a.createElement(v.a,{xs:!0,lg:"2"},"\xa0"),l.a.createElement(v.a,{md:"8"},this.state.summary&&l.a.createElement(y.a,null,l.a.createElement(g.a,{className:"justify-content-md-center"},l.a.createElement(v.a,{xs:!0,lg:"4",sm:"12"},l.a.createElement(f.a,{className:"text-center",bg:"warning",text:"white"},l.a.createElement(f.a.Header,null,"Confirmed"),l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Title,null,l.a.createElement(x.a,{value:this.state.summary.confirmed.value||0,displayType:"text",thousandSeparator:!0})),l.a.createElement(f.a.Text,null,"Cases")))),l.a.createElement(v.a,{xs:!0,lg:"4",sm:"12"},l.a.createElement(f.a,{className:"text-center",bg:"success",text:"white"},l.a.createElement(f.a.Header,null,"Recovered"),l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Title,null,l.a.createElement(x.a,{value:this.state.summary.recovered.value||0,displayType:"text",thousandSeparator:!0})),l.a.createElement(f.a.Text,null,"Cases")))),l.a.createElement(v.a,{xs:!0,lg:"4",sm:"12"},l.a.createElement(f.a,{className:"text-center",bg:"danger",text:"white"},l.a.createElement(f.a.Header,null,"Deaths"),l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Title,null,l.a.createElement(x.a,{value:this.state.summary.deaths.value||0,displayType:"text",thousandSeparator:!0})),l.a.createElement(f.a.Text,null,"Cases"))))))),l.a.createElement(v.a,{xs:!0,lg:"2"},"\xa0"))),this.state.dailyReport&&l.a.createElement(y.a,null,l.a.createElement("br",null),l.a.createElement(g.a,null,l.a.createElement(v.a,{lg:2},"\xa0"),l.a.createElement(v.a,{lg:8},l.a.createElement(b.a,{data:{labels:this.state.dailyReport.map((function(e){return e.reportDate})),datasets:[{data:this.state.dailyReport.map((function(e){return e.totalConfirmed})),label:"Confirmed",borderColor:"rgb(251, 194, 55)",backgroundColor:"#fbc23785",fill:!0},{data:this.state.dailyReport.map((function(e){return e.totalRecovered})),label:"Recovered",borderColor:"#47a442",backgroundColor:"#47a442",fill:!0},{data:this.state.dailyReport.map((function(e){return e.deaths.total})),label:"Deaths",borderColor:"red",backgroundColor:"red",fill:!0}]}})))))}}]),a}(l.a.Component),T=a(46),C=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={countryCases:[],globalCases:{}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.getSummaryOfIndia().then((function(t){console.log(t),e.setState({summary:t.data})})),p.getStateWiseSummary().then((function(t){e.setState({stateWiseSummary:t.data}),console.log(t)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y.a,{style:{marginTop:"10px"}},l.a.createElement("br",null),l.a.createElement(g.a,{style:{textAlign:"left"}},l.a.createElement(v.a,{xs:!0,lg:"2"},"\xa0"),l.a.createElement(v.a,{xs:"8"},l.a.createElement("h2",null,"Status of India")))),l.a.createElement(y.a,{style:{marginTop:"10px"}},l.a.createElement("br",null),l.a.createElement(g.a,{className:"justify-content-md-center"},l.a.createElement(v.a,{xs:!0,lg:"2"},"\xa0"),l.a.createElement(v.a,{md:"8"},this.state.summary&&l.a.createElement(y.a,null,l.a.createElement(g.a,{className:"justify-content-md-center"},l.a.createElement(v.a,{xs:!0,lg:"4",sm:"12"},l.a.createElement(f.a,{className:"text-center",bg:"warning",text:"white"},l.a.createElement(f.a.Header,null,"Confirmed"),l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Title,null,l.a.createElement(x.a,{value:this.state.summary.confirmed.value||0,displayType:"text",thousandSeparator:!0})),l.a.createElement(f.a.Text,null,"Cases")))),l.a.createElement(v.a,{xs:!0,lg:"4",sm:"12"},l.a.createElement(f.a,{className:"text-center",bg:"success",text:"white"},l.a.createElement(f.a.Header,null,"Recovered"),l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Title,null,l.a.createElement(x.a,{value:this.state.summary.recovered.value||0,displayType:"text",thousandSeparator:!0})),l.a.createElement(f.a.Text,null,"Cases")))),l.a.createElement(v.a,{xs:!0,lg:"4",sm:"12"},l.a.createElement(f.a,{className:"text-center",bg:"danger",text:"white"},l.a.createElement(f.a.Header,null,"Deaths"),l.a.createElement(f.a.Body,null,l.a.createElement(f.a.Title,null,l.a.createElement(x.a,{value:this.state.summary.deaths.value||0,displayType:"text",thousandSeparator:!0})),l.a.createElement(f.a.Text,null,"Cases"))))))),l.a.createElement(v.a,{xs:!0,lg:"2"},"\xa0"))),this.state.stateWiseSummary&&l.a.createElement(y.a,null,l.a.createElement("br",null),l.a.createElement(g.a,null,l.a.createElement(v.a,{lg:2},"\xa0"),l.a.createElement(v.a,{lg:8},l.a.createElement(T.a,{bordered:!0,striped:!0,hover:!0,responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",{style:{textAlign:"left"}},"States"),l.a.createElement("th",null,"Confirmed"),l.a.createElement("th",null,"Recovered"),l.a.createElement("th",null,"Deaths"))),l.a.createElement("tbody",null,this.state.stateWiseSummary.map((function(e,t){return e.name?l.a.createElement("tr",null,l.a.createElement("td",null,t+1),l.a.createElement("td",{style:{textAlign:"left"}},e.name),l.a.createElement("td",{style:{textAlign:"right"}},l.a.createElement(x.a,{value:e.cases,displayType:"text",thousandSeparator:!0})),l.a.createElement("td",{style:{textAlign:"right"}},l.a.createElement(x.a,{value:e.recovered,displayType:"text",thousandSeparator:!0})),l.a.createElement("td",{style:{textAlign:"right"}},l.a.createElement(x.a,{value:e.deaths,displayType:"text",thousandSeparator:!0}))):null}))))),l.a.createElement(v.a,{lg:2},"\xa0"))))}}]),a}(l.a.Component);var k=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{class:"navbar-brand",href:"#"},"COVID19 Status"),l.a.createElement(s.a,{activeKey:"/active"},l.a.createElement(s.a.Item,null,l.a.createElement(s.a.Link,{href:"/home"},"Home")),l.a.createElement(s.a.Item,null,l.a.createElement(s.a.Link,{href:"/india"},"India")))),l.a.createElement(m.a,null,l.a.createElement(o.b,{exact:!0,path:"/",render:function(){return l.a.createElement(o.a,{to:"home"})}}),l.a.createElement(o.b,{path:"/home",exact:!0,component:S}),l.a.createElement(o.b,{path:"/india",exact:!0,component:C})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){e.exports=a(206)},88:function(e,t,a){},90:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.93148dfe.chunk.js.map