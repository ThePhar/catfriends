(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=a(8),s=a(4);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(5),u=a(6),h=a(9),d=a(7),m=a(10),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={hasError:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops. That is not good."):this.props.children}}]),t}(r.a.Component),f=function(e){var t=e.id,a=e.name,n=e.email;return r.a.createElement("div",{className:"bg-white dib br3 tc pa3 ma2 grow bw2 shadow-5"},r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)),r.a.createElement("img",{alt:"cats",src:"https://robohash.org/".concat(t,"?set=set4&size=200x200")}))},E=function(e){var t=e.cats;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(f,{key:e.id,id:e.id,name:e.name,email:e.email})}))},b=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",placeholder:"Search Cats",className:"pa3 ba b--green bg-lightest-blue",onChange:t}))},v=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={cats:[]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({cats:t})})}},{key:"render",value:function(){var e=this.state.cats,t=this.props,a=t.searchField,n=t.onSearchChange,c=e.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"~ CatFriends ~"),r.a.createElement(b,{searchChange:n}),r.a.createElement(v,null,r.a.createElement(p,null,r.a.createElement(E,{cats:c}))))}}]),t}(r.a.Component),w=Object(i.b)(function(e){return{searchField:e.searchField}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}})(g),C={searchField:""},j=(a(26),a(27),Object(s.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}));o.a.render(r.a.createElement(i.a,{store:j},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.ffbe07c2.chunk.js.map