(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n.n(a),i=n(165),l=n.n(i),o=n(0),c=n.n(o),s=n(157),d=n(153),u=n(6),m=n.n(u),h=n(167),p=n.n(h),f=n(174),g=(n(33),function(e){var t=e.editContentURL,n=e.issuesURL,a=e.slug;return c.a.createElement("footer",{className:"clay-site-container container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("p",{className:"legal"},"Except as otherwise noted, the content of this site is licensed under ",c.a.createElement("a",{href:"https://creativecommons.org/licenses/by-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},"CC BY-SA")," 4.0 license.")),c.a.createElement("div",{className:"col-6 p-md-0"},c.a.createElement("ul",{className:"social-icons"},c.a.createElement("li",{className:"mr-2"},c.a.createElement("a",{className:"rounded-circle sticker sticker-secondary",href:n,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("svg",{"aria-hidden":"true",className:"lexicon-icon lexicon-icon-bars"},c.a.createElement("use",{xlinkHref:"/images/icons/icons.svg#comments"})))),c.a.createElement("li",null,c.a.createElement("a",{className:"rounded-circle sticker sticker-secondary",href:t+"/"+a.replace("html","md"),target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"lexicon-icon",src:"/images/home/GitHub-Mark-64px.svg",alt:"Github Logo"})))))))}),v=(n(204),n(73),n(183),n(255)),b=n(146),E=(n(74),n(75),n(161)),y=n.n(E),N=function(e){function t(){return e.apply(this,arguments)||this}m()(t,e);var n=t.prototype;return n._handleOnClick=function(e,t,n,a){a.stopPropagation();var r=this.refs["navItem"+e+t];r.classList.contains("active")&&!n.items||r.classList.toggle("active")},n._isActive=function(e){if(e.alwaysActive)return!0;var t=this.props.location.pathname.split("/"),n=t[t.length-1].split(".");return e.items?t.includes(e.id):n[0]===e.id},n.renderNavigationItems=function(){var e=this,n=this.props,a=n.sectionList,r=n.location,i=n.depth,l=void 0===i?0:i;return a.map(function(n,a){var i=y()({active:!0===e._isActive(n),"nav-heading":n.items});return c.a.createElement("li",{key:a,ref:"navItem"+a+l,className:i,onClick:e._handleOnClick.bind(e,a,l,n)},c.a.createElement(w,{page:n}),n.items&&c.a.createElement(t,{sectionList:n.items,location:r,depth:l+1}))})},n.render=function(){return c.a.createElement("ul",{className:"nav nav-nested nav-pills nav-stacked"},this.renderNavigationItems())},t}(o.Component),w=function(e){var t=e.page;return t.items?c.a.createElement("a",{className:"align-middle",href:"#no"},c.a.createElement("span",null,t.title),c.a.createElement("svg",{className:"collapse-toggle clay-icon icon-monospaced"},c.a.createElement("use",{xlinkHref:"/images/icons/icons.svg#caret-bottom"}))):c.a.createElement(b.Link,{to:t.link+".html",className:"align-middle"},c.a.createElement("span",null,t.title))},S=N,k=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={disabled:!1},t}m()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.docsearch,this.setState({disabled:!0})},n.render=function(){var e=this.props.placeholder;return!this.state.disabled&&c.a.createElement("div",{className:"sidebar-search"},c.a.createElement("div",{className:"page-autocomplete"},c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{disabled:this.state.disabled,className:"form-control",id:"algolia-doc-search",name:"q",placeholder:e,required:!0,type:"text"}),c.a.createElement("span",{className:"input-group-addon"},c.a.createElement("svg",{className:"lexicon-icon"},c.a.createElement("use",{xlinkHref:"/images/icons/icons.svg#search"})))))))},t}(o.Component),x=c.a.createRef(),_=function(e){var t=e.allMdx.edges.map(function(e){var t=e.node.fields,n=t.slug,a=t.title,r=t.alwaysActive,i=t.order;return A(n.replace(".html",""),a,i,r)});return t.filter(function(e){return e.isRoot}).map(function(e){return T(e,t)}).sort(function(e,t){return e.order-t.order})},A=function(e,t,n,a){var r=e.split("/"),i=r[r.length-1],l=r[r.length-2],o="index"===i;return{id:"index"===i?l:i,link:"/"+e,title:t,parentLink:"/"+e.substring(0,e.lastIndexOf("/")+1),isFolder:o,isRoot:3===r.length&&o||2===r.length&&!o,order:n,alwaysActive:a}},T=function e(t,n){return t.isFolder&&(t.items=n.filter(function(e){return e.link!==t.link}).filter(function(e){return e.link===t.parentLink+e.id+(e.isFolder?"/index":"")}).map(function(t){return e(t,n)}).sort(function(e,t){return e.order-t.order})),t},C=0,L=function(e){function t(){return e.apply(this,arguments)||this}m()(t,e);var n=t.prototype;return n.onScroll=function(e){C=e.currentTarget.scrollTop},n.componentDidMount=function(){x.current.scrollTop=C},n.render=function(){return c.a.createElement("div",{ref:x,onScroll:this.onScroll.bind(this),className:"sidebar sidebar-clay-site sidenav-menu d-flex flex-column"},this.props.children)},t}(o.Component),G=function(e){return c.a.createElement(b.StaticQuery,{query:"1331955355",render:function(t){var n="sidebar-toggler-content sidenav-fixed sidenav-menu-slider mt-5";return e.navbarToggled&&(n+=" toggler-expanded"),c.a.createElement("nav",{className:n,id:"clay-sidebar"},c.a.createElement(L,null,c.a.createElement("div",{className:"sidebar-body mb-auto mt-5"},c.a.createElement(k,{placeholder:"Search"}),c.a.createElement(S,{sectionList:_(t),location:e.location}))))},data:v})},I=n(151),U=n(162),q=n(163),P=n(164),R=n(155),H=n(147),D=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={navbarToggled:!1},n}m()(t,e);var n=t.prototype;return n.componentDidMount=function(){this._codeTabs=new U.a,this._codeClipboard=new q.a},n.componentWillUnmount=function(){this._codeTabs=null,this._codeClipboard.dispose()},n._handleLogout=function(){var e=this;Object(H.d)().then(function(){e.forceUpdate()})},n.docsNavbarToggleClick=function(){this.setState(function(e){return{navbarToggled:!e.navbarToggled}})},n.render=function(){var e=this.props,t=e.data,n=e.location,a=t.mdx,r=a.code,i=a.frontmatter,l=i.title,o=i.needsAuth,s=a.excerpt,d=a.timeToRead;return c.a.createElement(R.a,{needsAuth:o},c.a.createElement("div",{className:"docs"},c.a.createElement(p.a,null,c.a.createElement("title",null,l),c.a.createElement("meta",{name:"description",content:s}),c.a.createElement("meta",{name:"og:description",content:s}),c.a.createElement("meta",{name:"twitter:description",content:s}),c.a.createElement("meta",{name:"og:title",content:l}),c.a.createElement("meta",{name:"og:type",content:"article"}),c.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),c.a.createElement("meta",{name:"twitter:data1",content:d+" min read"})),c.a.createElement("header",null,c.a.createElement(I.a,{effect:!0,static:!0,sidebarHamburguerIcon:!0,onNavbarToggleClick:this.docsNavbarToggleClick.bind(this)})),c.a.createElement("main",{className:"content"},c.a.createElement(G,{location:n,navbarToggled:this.state.navbarToggled}),c.a.createElement("div",{className:"sidebar-offset"},c.a.createElement("header",null,c.a.createElement("div",{className:"clay-site-container container-fluid"},c.a.createElement("h1",null,l))),c.a.createElement("div",{className:"clay-site-container container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("article",null,c.a.createElement(f.a,{components:{h1:P.a.H1,h2:P.a.H2,h3:P.a.H3,h4:P.a.H4,p:P.a.P}},r.body))))),c.a.createElement(g,{editContentURL:"https://github.com/StarterInc/StackGen/edit/master/content",issuesURL:"https://github.com/StarterInc/StackGen/issues",slug:this.props["*"]})))))},t}(o.Component);n.d(t,"pageQuery",function(){return F});var F="2130842373";t.default=function(e){var t=e.children,n=l()(e,["children"]);return c.a.createElement(s.MDXScopeProvider,{__mdxScope:r()({},d.a)},c.a.createElement(D,n,t))}},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(144),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var s=n(148),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var u=n(29);n.d(t,"parsePath",function(){return u.a});var m=r.a.createContext({}),h=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},147:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return s});n(30),n(172);var a=n(160),r=function(e){return window.localStorage.setItem("gatsbyUser",JSON.stringify(e))},i=a.Nothing,l=function(e){var t=e.email,n=e.password;if(!c())return new Promise(function(e,a){i.signInWithEmailAndPassword(t,n).then(function(t){var n=t.data_,a=n.createdAt,i=n.email,l=n.id,o=n.token;r({createdAt:a,email:i,id:l,token:o}),e()}).catch(function(e){a(alert(e.error_description))})})},o=function(e){var t=e.email,n=e.password;if(!c())return new Promise(function(e,a){i.createUser({email:t,password:n}).then(function(t){e()}).catch(function(e){a(alert(e))})})},c=function(){return!!i.currentUser},s=function(){return r({}),i.signOut()}},148:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},150:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n.n(a),i=n(0),l=n.n(i),o=n(4),c=n.n(o),s=n(49),d=n(2),u=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return l.a.createElement(s.a,r()({location:t,pageResources:n},n.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},151:function(e,t,n){"use strict";n(170);var a=n(6),r=n.n(a),i=n(48),l=n.n(i),o=n(171),c=n(0),s=n.n(c),d=n(146),u=n(161),m=n.n(u),h=n(147),p=function(e){function t(){var t;return(t=e.call(this)||this).expandToggler=function(){t.props.onNavbarToggleClick()},t._rootNode=o.window||o.document,t._addScroll=t._addScroll.bind(l()(l()(t))),t}r()(t,e);var n=t.prototype;return n._getScrollTop=function(){return this._rootNode===o.window?this._rootNode.pageYOffset:this._rootNode===o.document?this._rootNode.defaultView.pageYOffset:void 0},n._addScroll=function(){this._getScrollTop()>=50?this.refs.navElement.classList.add("scroll"):this.refs.navElement.classList.remove("scroll")},n._handleLogout=function(){var e=this;Object(h.d)().then(function(){e.forceUpdate()}).catch(function(e){alert(e),o.window.location.reload()})},n.componentDidMount=function(){this.props.static||this._rootNode.addEventListener("scroll",this._addScroll,!1)},n.componentWillUnmount=function(){this.props.static||this._rootNode.removeEventListener("scroll",this._addScroll,!1)},n.render=function(){var e=this.props,t=e.fixed,n=void 0===t||t,a=e.opaque,r=void 0!==a&&a,i=e.effect,l=void 0!==i&&i,o=e.sidebarHamburguerIcon,c=void 0!==o&&o,u=m()("navbar navbar-clay-site navbar-expand-lg navbar-dark",{"fixed-top":n,scroll:l,"bg-primary":r});return s.a.createElement("nav",{ref:"navElement",className:u},s.a.createElement("div",{className:"container-fluid"},s.a.createElement(d.Link,{to:"/",className:"navbar-brand"},s.a.createElement("img",{className:"logo mr-2",alt:"Starter Logo",src:"/logos/starter_logo_vertical_color@x2.png"}),s.a.createElement("span",{className:"title align-middle"},"Starter StackGen")),c&&s.a.createElement("button",{onClick:this.expandToggler,className:"navbar-toggler p-2 order-md-1",type:"button","data-toggle":"collapse","data-target":"#claySidebar","aria-controls":"claySidebar","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("svg",{"aria-hidden":"true",className:"lexicon-icon lexicon-icon-bars"},s.a.createElement("use",{xlinkHref:"/images/icons/icons.svg#bars"}))),s.a.createElement("ul",{className:"navbar-nav ml-md-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(d.Link,{className:"nav-link ml-lg-3",to:"/docs/"},"Docs")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link ml-lg-3",href:"http://stackgen.io/"},"Blog")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(d.Link,{className:"nav-link ml-lg-3",to:"/onboarding/"},"Onboarding")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(d.Link,{className:"nav-link ml-lg-3",to:"/updates/"},"Updates")),Object(h.c)()?s.a.createElement("li",{className:"nav-item"},s.a.createElement(d.Link,{className:"nav-link ml-lg-3",to:"#",onClick:this._handleLogout.bind(this)},"Logout")):"",s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"mx-3 mr-lg-0",href:"https://github.com/StarterInc/StackGen",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:"/images/home/GitHub-Mark-64px.svg",alt:""}))))))},t}(c.Component);t.a=p},153:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(166);t.a={React:r.a,MDXTag:i.MDXTag}},155:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),l=n.n(i),o=n(147),c=(n(173),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={email:"",password:""},t.handleUpdate=function(e){var n;t.setState(((n={})[e.target.name]=e.target.value,n))},t._handleSignUp=function(e){e.preventDefault(),Object(o.b)(t.state).then(function(){t.props.changeLoginState(!0)}).catch(function(){t.props.changeLoginState(!1)})},t._handleSubmit=function(e){e.preventDefault(),Object(o.a)(t.state).then(function(){t.props.changeLoginState(!0)}).catch(function(){t.props.changeLoginState(!1)})},t}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"clay-site-container container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"sheet"},l.a.createElement("div",{className:"sheet-header"},l.a.createElement("h2",{className:"sheet-title"},"Login")),l.a.createElement("form",{method:"post",onSubmit:function(t){e._handleSubmit(t)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"basicInputTypeEmail"},"Email"),l.a.createElement("input",{className:"form-control",autoComplete:"email",type:"email",name:"email",onChange:this.handleUpdate,id:"basicInputTypeEmail"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"basicInputTypePassword"},"Password"),l.a.createElement("input",{className:"form-control",autoComplete:"current-password",id:"basicInputTypePassword",onChange:this.handleUpdate,placeholder:"Enter password",name:"password",type:"password"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"btn-group"},l.a.createElement("div",{className:"btn-group-item"},l.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")),l.a.createElement("div",{className:"btn-group-item"},l.a.createElement("a",{className:"btn btn-secondary",onClick:function(t){e._handleSignUp(t)},href:"#no"},"Sign Up")))))))))))},t}(i.Component)),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={login:!1},n}r()(t,e);var n=t.prototype;return n.changeLoginState=function(e){this.setState(function(){return{login:e}})},n.componentDidMount=function(){this.setState({login:!!Object(o.c)()})},n.render=function(){return this.props.needsAuth&&!this.state.login?l.a.createElement(c,{changeLoginState:this.changeLoginState.bind(this)}):this.props.children},t}(i.Component);t.a=s},162:function(e,t,n){"use strict";n(70);var a=n(149),r=n.n(a),i=n(179),l=n.n(i),o=function(){function e(){var e=this,t=[];Array.prototype.slice.call(document.querySelectorAll(".code-container")).forEach(function(n){t.push({label:e._getTabLabelFromElement(n),element:n}),n.nextElementSibling&&r.a.hasClass(n.nextElementSibling,"code-container")||(t.length>1&&e._renderTabs(t),t=[])})}var t=e.prototype;return t._getTabLabelFromElement=function(e){return e.getAttribute("data-label")},t._hide=function(e){r.a.addClasses(e,"hide")},t._hideAll=function(e){var t=this;e.forEach(function(e){t._hide(e.element)})},t._renderTabs=function(e){var t=this,n=r.a.buildFragment('<div class="tabContainer"></div>'),a=new l.a({elementClasses:"nav-code-tabs",tabs:e},n);a.on("changeRequest",function(e){var n=e.state.tab;t._hideAll(a.tabs),t._show(a.tabs[n].element)}),this._hideAll(a.tabs),this._show(a.tabs[0].element),e[0].element.parentNode.insertBefore(n,e[0].element)},t._show=function(e){r.a.removeClasses(e,"hide")},e}();t.a=o},163:function(e,t,n){"use strict";var a=n(181),r=n.n(a),i=n(182),l=n.n(i),o=function(){},c=function(){function e(){this.clayTooltip=new r.a(new o),this.clayClipboard=new l.a({selector:".code-container .btn-copy",text:function(e){return e.setAttribute("title","Copied"),setTimeout(function(){e.setAttribute("title","Copy")},2e3),e.parentNode.querySelector("pre code").innerText}})}return e.prototype.dispose=function(){this.clayTooltip.dispose(),this.clayClipboard.dispose()},e}();t.a=c},164:function(e,t,n){"use strict";var a={};n.r(a),n.d(a,"H1",function(){return l}),n.d(a,"H2",function(){return o}),n.d(a,"H3",function(){return c}),n.d(a,"H4",function(){return s}),n.d(a,"P",function(){return d});var r=n(0),i=n.n(r),l=function(e){return i.a.createElement("h1",{className:"clay-h1"},e.children)},o=function(e){return i.a.createElement("h2",{className:"clay-h2"},e.children)},c=function(e){return i.a.createElement("h3",{className:"clay-h3"},e.children)},s=function(e){return i.a.createElement("h4",{className:"clay-h4"},e.children)},d=function(e){return i.a.createElement("p",{className:"clay-p"},e.children)};t.a=a},183:function(e,t,n){"use strict";var a=n(14),r=n(26),i=n(32),l=n(24),o=[].sort,c=[1,2,3];a(a.P+a.F*(l(function(){c.sort(void 0)})||!l(function(){c.sort(null)})||!n(184)(o)),"Array",{sort:function(e){return void 0===e?o.call(i(this)):o.call(i(this),r(e))}})},184:function(e,t,n){"use strict";var a=n(24);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},204:function(e,t,n){"use strict";n(203)("link",function(e){return function(t){return e(this,"a","href",t)}})},255:function(e){e.exports={data:{allMdx:{edges:[{node:{fields:{alwaysActive:!1,redirect:null,slug:"docs/index.html",title:"Getting Started",order:null}}},{node:{fields:{alwaysActive:!0,redirect:null,slug:"docs/api-design/index.html",title:"API Design",order:2}}},{node:{fields:{alwaysActive:!0,redirect:"/docs/migration-from-electric/first-considerations/what-is.html",slug:"docs/architecture/index.html",title:"StackGen Architecture",order:3}}},{node:{fields:{alwaysActive:!0,redirect:"/docs/migration-from-electric/first-considerations/what-is.html",slug:"docs/support/index.html",title:"Support and Troubleshooting",order:5}}},{node:{fields:{alwaysActive:!0,redirect:"/docs/migration-from-electric/first-considerations/what-is.html",slug:"docs/security/index.html",title:"StackGen Security",order:4}}},{node:{fields:{alwaysActive:!0,redirect:"/docs/migration-from-electric/first-considerations/what-is.html",slug:"docs/getting-started/index.html",title:"Getting Started with Starter StackGen",order:1}}},{node:{fields:{alwaysActive:!1,redirect:null,slug:"docs/security/security.html",title:"StackGen Service Security",order:null}}},{node:{fields:{alwaysActive:!1,redirect:null,slug:"docs/introducing.html",title:"Introducing StackGen",order:0}}},{node:{fields:{alwaysActive:!1,redirect:null,slug:"docs/faq.html",title:"FAQ",order:7}}},{node:{fields:{alwaysActive:!1,redirect:null,slug:"docs/api-design/api-design.html",title:"Designing StackGen Services with Swagger",order:null}}},{node:{fields:{alwaysActive:!1,redirect:null,slug:"docs/getting-started/next-steps.html",title:"Next Steps",order:null}}},{node:{fields:{alwaysActive:!1,redirect:null,slug:"docs/architecture/auto-gen-fields.html",title:"Auto-Generated StackGen Fields",order:null}}},{node:{fields:{alwaysActive:!1,redirect:null,slug:"docs/architecture/json-data-objects.html",title:"StackGen Generated Code",order:null}}},{node:{fields:{alwaysActive:!1,redirect:null,slug:"docs/api-design/api-domains.html",title:"Mastering API Domains and Achieving Max Interop",order:null}}},{node:{fields:{alwaysActive:!1,redirect:null,slug:"docs/support/troubleshooting.html",title:"Troubleshooting",order:null}}},{node:{fields:{alwaysActive:!1,redirect:null,slug:"docs/security/secure-field.html",title:"Field-Level Encryption",order:null}}},{node:{fields:{alwaysActive:!1,redirect:null,slug:"docs/getting-started/getting-started.html",title:"Getting Started",order:null}}}]}}}}}]);
//# sourceMappingURL=component---gatsby-cache-gatsby-mdx-mdx-wrappers-dir-cc-5-ab-3250-c-2-e-67-fb-771106-aad-5-fccbfa-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-ab05376ec88badaa572e.js.map