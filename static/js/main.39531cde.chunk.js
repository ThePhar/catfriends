(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),i=a(3),s=a(4),l=a(6),u=a(5),h=a(7),m=function(e){var t=e.id,a=e.name,n=e.email;return r.a.createElement("div",{className:"bg-white dib br3 tc pa3 ma2 grow bw2 shadow-5"},r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)),r.a.createElement("img",{alt:"cats",src:"https://robohash.org/".concat(t,"?set=set4&size=200x200")}))},d=function(e){var t=e.cats;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,email:e.email})}))},p=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",placeholder:"Search Cats",className:"pa3 ba b--green bg-lightest-blue",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSearchChange=function(e){a.setState({searchField:e.target.value})},a.state={cats:[],searchField:""},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({cats:t})})}},{key:"render",value:function(){var e=this,t=this.state.cats.filter(function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"~ CatFriends ~"),r.a.createElement(p,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(d,{cats:t})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14),a(15);o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.39531cde.chunk.js.map