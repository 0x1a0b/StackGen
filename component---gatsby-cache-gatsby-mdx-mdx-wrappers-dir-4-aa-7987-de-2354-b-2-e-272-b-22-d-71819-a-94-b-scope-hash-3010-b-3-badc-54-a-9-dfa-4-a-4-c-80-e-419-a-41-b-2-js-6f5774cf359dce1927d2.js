(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{153:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n.n(a),o=n(76),c=n.n(o),l=n(0),i=n.n(l),s=n(166),u=n(162),m=n(7),d=n.n(m),p=n(175),f=n.n(p),v=n(165),h=n(160),g=n(164),E=(n(191),function(e){function t(){return e.apply(this,arguments)||this}d()(t,e);var n=t.prototype;return n._compareVersions=function(e,t){return e.version<t.version?1:e.version>t.version?-1:0},n.render=function(){var e=this.props.data;return e.sort(this._compareVersions),i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{className:"timeline timeline-center"},e.map(function(e,t){var n=e.version,a=e.major,r=e.features;return i.a.createElement("li",{key:t,className:"timeline-item"},r.map(function(e,t){return i.a.createElement("div",{key:t,className:"panel panel-secondary"},i.a.createElement("a",{"aria-expanded":"true",className:"panel-header panel-header-link","data-toggle":"collapse",href:e.url,id:"headingTimelineCenter0",role:"tab"},i.a.createElement("span",{className:"panel-title"},e.title),i.a.createElement("div",{className:"timeline-increment"},i.a.createElement("svg",{"aria-hidden":"true",className:"lexicon-icon lexicon-icon-"+e.icon},i.a.createElement("use",{xlinkHref:"/images/icons/icons.svg#"+e.icon}))),i.a.createElement("div",{className:"timeline-item-label"},t>0?"":a?i.a.createElement("h2",null," ",n," "):i.a.createElement("p",null,n))),i.a.createElement("div",{"aria-labelledby":"headingTimelineCenter0",className:"panel-collapse collapse show",role:"tabpanel"},i.a.createElement("div",{className:"panel-body"},e.description)))}))})))},t}(l.Component)),b=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){var e=this.props.data.mdx,t=e.frontmatter,n=t.title,a=t.needsAuth,r=t.updates,o=e.excerpt,c=e.timeToRead;return i.a.createElement(g.a,{needsAuth:a},i.a.createElement("div",{className:"updates"},i.a.createElement(f.a,null,i.a.createElement("title",null,"Updates"),i.a.createElement("meta",{name:"description",content:o}),i.a.createElement("meta",{name:"og:description",content:o}),i.a.createElement("meta",{name:"twitter:description",content:o}),i.a.createElement("meta",{name:"og:title",content:n}),i.a.createElement("meta",{name:"og:type",content:"article"}),i.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),i.a.createElement("meta",{name:"twitter:data1",content:c+" min read"})),i.a.createElement("main",{className:"content"},i.a.createElement("header",{className:"header"},i.a.createElement(h.a,null),i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"intro blog-intro text-center col"},i.a.createElement("div",{className:"container-fluid container-fluid-max-lg"},i.a.createElement("h1",{className:"h1"},"Updates"),i.a.createElement("h2",{className:"h3"},"Check out what's new")))))),i.a.createElement("div",{className:"clay-site-container container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement(E,{data:r}))))),i.a.createElement(v.a,null)))},t}(l.Component);n.d(t,"pageQuery",function(){return y});var y="1368650560";t.default=function(e){var t=e.children,n=c()(e,["children"]);return i.a.createElement(s.MDXScopeProvider,{__mdxScope:r()({},u.a)},i.a.createElement(b,n,t))}},155:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return s});n(36),n(37),n(180);var a=n(169),r=function(e){return window.localStorage.setItem("gatsbyUser",JSON.stringify(e))},o=a.Nothing,c=function(e){var t=e.email,n=e.password;if(!i())return new Promise(function(e,a){o.signInWithEmailAndPassword(t,n).then(function(t){var n=t.data_,a=n.createdAt,o=n.email,c=n.id,l=n.token;r({createdAt:a,email:o,id:c,token:l}),e()}).catch(function(e){a(alert(e.error_description))})})},l=function(e){var t=e.email,n=e.password;if(!i())return new Promise(function(e,a){o.createUser({email:t,password:n}).then(function(t){e()}).catch(function(e){a(alert(e))})})},i=function(){return!!o.currentUser},s=function(){return r({}),o.signOut()}},156:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=n(35),i=n.n(l);n.d(t,"a",function(){return i.a});n(157);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},157:function(e,t,n){var a;e.exports=(a=n(159))&&a.default||a},159:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n.n(a),o=n(0),c=n.n(o),l=n(4),i=n.n(l),s=n(54),u=n(2),m=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return n?c.a.createElement(s.a,r()({location:t,pageResources:n},n.json)):null};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},160:function(e,t,n){"use strict";n(178);var a=n(38),r=n.n(a),o=n(7),c=n.n(o),l=n(179),i=n(0),s=n.n(i),u=n(156),m=n(170),d=n.n(m),p=n(155),f=function(e){function t(){var t;return(t=e.call(this)||this).expandToggler=function(){t.props.onNavbarToggleClick()},t._rootNode=l.window||l.document,t._addScroll=t._addScroll.bind(r()(t)),t}c()(t,e);var n=t.prototype;return n._getScrollTop=function(){return this._rootNode===l.window?this._rootNode.pageYOffset:this._rootNode===l.document?this._rootNode.defaultView.pageYOffset:void 0},n._addScroll=function(){this._getScrollTop()>=50?this.refs.navElement.classList.add("scroll"):this.refs.navElement.classList.remove("scroll")},n._handleLogout=function(){var e=this;Object(p.d)().then(function(){e.forceUpdate()}).catch(function(e){alert(e),l.window.location.reload()})},n.componentDidMount=function(){this.props.static||this._rootNode.addEventListener("scroll",this._addScroll,!1)},n.componentWillUnmount=function(){this.props.static||this._rootNode.removeEventListener("scroll",this._addScroll,!1)},n.render=function(){var e=this.props,t=e.fixed,n=void 0===t||t,a=e.opaque,r=void 0!==a&&a,o=e.effect,c=void 0!==o&&o,l=e.sidebarHamburguerIcon,i=void 0!==l&&l,m=d()("navbar navbar-clay-site navbar-expand-lg navbar-dark",{"fixed-top":n,scroll:c,"bg-primary":r});return s.a.createElement("nav",{ref:"navElement",className:m},s.a.createElement("div",{className:"container-fluid"},s.a.createElement(u.a,{to:"/",className:"navbar-brand"},s.a.createElement("img",{className:"logo mr-2",alt:"Starter StackGen Logo",src:"/logos/StackGenLogo-2019.png"})),i&&s.a.createElement("button",{onClick:this.expandToggler,className:"navbar-toggler p-2 order-md-1",type:"button","data-toggle":"collapse","data-target":"#claySidebar","aria-controls":"claySidebar","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("svg",{"aria-hidden":"true",className:"lexicon-icon lexicon-icon-bars"},s.a.createElement("use",{xlinkHref:"/images/icons/icons.svg#bars"}))),s.a.createElement("ul",{className:"navbar-nav ml-md-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.a,{className:"nav-link ml-lg-3",to:"/docs/"},"Docs")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link ml-lg-3",href:"http://stackgen.io/"},"Blog")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.a,{className:"nav-link ml-lg-3",to:"/updates/"},"Updates")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"mx-3 mr-lg-0",href:"https://github.com/StarterInc/StackGen",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:"/images/home/GitHub-Mark-64px.svg",alt:""}))))))},t}(i.Component);t.a=f},162:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(174);t.a={React:r.a,MDXTag:o.MDXTag}},164:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),c=n.n(o),l=n(155),i=(n(181),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={email:"",password:""},t.handleUpdate=function(e){var n;t.setState(((n={})[e.target.name]=e.target.value,n))},t._handleSignUp=function(e){e.preventDefault(),Object(l.b)(t.state).then(function(){t.props.changeLoginState(!0)}).catch(function(){t.props.changeLoginState(!1)})},t._handleSubmit=function(e){e.preventDefault(),Object(l.a)(t.state).then(function(){t.props.changeLoginState(!0)}).catch(function(){t.props.changeLoginState(!1)})},t}return r()(t,e),t.prototype.render=function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"clay-site-container container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"sheet"},c.a.createElement("div",{className:"sheet-header"},c.a.createElement("h2",{className:"sheet-title"},"Login")),c.a.createElement("form",{method:"post",onSubmit:function(t){e._handleSubmit(t)}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"basicInputTypeEmail"},"Email"),c.a.createElement("input",{className:"form-control",autoComplete:"email",type:"email",name:"email",onChange:this.handleUpdate,id:"basicInputTypeEmail"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"basicInputTypePassword"},"Password"),c.a.createElement("input",{className:"form-control",autoComplete:"current-password",id:"basicInputTypePassword",onChange:this.handleUpdate,placeholder:"Enter password",name:"password",type:"password"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"btn-group"},c.a.createElement("div",{className:"btn-group-item"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")),c.a.createElement("div",{className:"btn-group-item"},c.a.createElement("a",{className:"btn btn-secondary",onClick:function(t){e._handleSignUp(t)},href:"#no"},"Sign Up")))))))))))},t}(o.Component)),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={login:!1},n}r()(t,e);var n=t.prototype;return n.changeLoginState=function(e){this.setState(function(){return{login:e}})},n.componentDidMount=function(){this.setState({login:!!Object(l.c)()})},n.render=function(){return this.props.needsAuth&&!this.state.login?c.a.createElement(i,{changeLoginState:this.changeLoginState.bind(this)}):this.props.children},t}(o.Component);t.a=s},165:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container-fluid container-fluid-max-lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg text-center text-sm-left mb-4 mb-lg-0"}),r.a.createElement("div",{className:"col-lg text-center text-sm-right"},r.a.createElement("div",null,r.a.createElement("br",null),"Powered by ",r.a.createElement("a",{href:"http://docs.stackgen.io/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"title align-middle"},"StackGen"))),"Built with ❤️ in San Francisco by ",r.a.createElement("a",{href:"http://www.starter.io",className:"font-weight-bold",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"logo",alt:"starter logo",src:"/logos/starter_logo_vertical_color@x2.png"}))))))};t.a=o},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MDXScopeProvider=t.withMDXScope=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}var c=(0,o(n(56)).default)({}),l=c.Provider,i=c.Consumer;t.withMDXScope=function(e){return function(t){var n=t.scope,o=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scope"]);return r.default.createElement(i,null,function(t){return r.default.createElement(e,a({scope:n||t},o))})}};t.MDXScopeProvider=function(e){var t=e.__mdxScope,n=e.children;return r.default.createElement(l,{value:t},n)}},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(0),c=(a=o)&&a.__esModule?a:{default:a};var l=c.default.createContext({}),i=l.Provider,s=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return c.default.createElement(s,null,function(t){return c.default.createElement(e,r({components:n||t},a))})}};t.default=function(e){var t=e.components,n=e.children;return c.default.createElement(i,{value:t},n)}},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(184);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=n(167);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},181:function(e,t,n){var a=n(26).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(20)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),l=(a=c)&&a.__esModule?a:{default:a},i=n(167);var s={inlineCode:"code",wrapper:"div"},u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,o=void 0===a?{}:a,c=e.children,i=e.components,u=void 0===i?{}:i,m=e.Layout,d=e.layoutProps,p=u[n+"."+t]||u[t]||s[t]||t;return m?l.default.createElement(m,r({components:u},d),l.default.createElement(p,o,c)):l.default.createElement(p,o,c)}}]),t}();t.default=(0,i.withMDXComponents)(u)},191:function(e,t,n){"use strict";var a=n(11),r=n(27),o=n(28),c=n(19),l=[].sort,i=[1,2,3];a(a.P+a.F*(c(function(){i.sort(void 0)})||!c(function(){i.sort(null)})||!n(192)(l)),"Array",{sort:function(e){return void 0===e?l.call(o(this)):l.call(o(this),r(e))}})},192:function(e,t,n){"use strict";var a=n(19);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}}}]);
//# sourceMappingURL=component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-4-aa-7987-de-2354-b-2-e-272-b-22-d-71819-a-94-b-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-6f5774cf359dce1927d2.js.map