(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{151:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(161),c=n.n(s),l=n(233),u=n(156),p=n.n(u),m=n(180),h=n(182),f=n(184),d=n(186),E=n(172),y=n(190),v=n(176),g=n(208),b=n(195),N=n(194),C=n(196),x=(n(315),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("footer",{className:"post-footer"},e)},t}(i.a.Component)),k=n(253),S=(n(158),n(36)),w=(n(316),n(255)),O=n(257),T=n(258),P=n(193),I=function(e){var t=e.bio,n=e.morePostsUrl;return t?i.a.createElement("p",null,t):i.a.createElement("p",null,"Read ",i.a.createElement(S.Link,{to:n},"more posts")," by this author.")},L=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.prefix,t=this.props.author,n=t.uid,a=t.name,r=t.image,o=t.bio,s=t.url,c=t.location,l=e?e+"/"+n:n;return r?i.a.createElement("section",{className:"author"},i.a.createElement("h4",null,i.a.createElement(P.a,{url:l,name:a})),i.a.createElement(I,{bio:o,morePostsUrl:l}),i.a.createElement(w.a,null,i.a.createElement(O.a,{location:c}),i.a.createElement(T.a,{url:s}))):null},t}(i.a.Component),A=n(317),B=(n(367),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=this.props,a=n.postNode,r=n.postPath,o=n.config,s=a.frontmatter,c=(e=o.siteUrl,t=o.pathPrefix,e+("/"===t?"":t)+r),l=A.ShareButtons.FacebookShareButton,u=A.ShareButtons.GooglePlusShareButton,p=A.ShareButtons.TwitterShareButton;return i.a.createElement("section",{className:"share"},i.a.createElement("h4",null,"Share this post"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(p,{url:c,title:s.title},i.a.createElement("a",{className:"icon-twitter",style:{fontSize:"1.4em"}},i.a.createElement("span",{className:"hidden"},"Twitter"))),i.a.createElement(l,{url:c,quote:s.title},i.a.createElement("a",{className:"icon-facebook",style:{fontSize:"1.4em"}},i.a.createElement("span",{className:"hidden"},"Facebook"))),i.a.createElement(u,{url:c},i.a.createElement("a",{className:"icon-google-plus",style:{fontSize:"1.4em"}},i.a.createElement("span",{className:"hidden"},"Google+")))))},t}(i.a.Component)),_=(n(368),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.subscribers,n=e.blog;return t&&n?i.a.createElement("section",{className:"gh-subscribe"},i.a.createElement("h3",{className:"gh-subscribe-title"},"Subscribe to ",n.title),i.a.createElement("p",null,"Get the latest posts delivered right to your inbox."),i.a.createElement("span",{className:"gh-subscribe-rss"},"or subscribe"," ",i.a.createElement("a",{href:"http://cloud.feedly.com/#subscription/feed/{blog.url}/rss/"},"via RSS")," ","with Feedly!")):null},t}(i.a.Component)),D=n(155),j=n.n(D),F=(n(369),function(e){var t=e.post;if(t){var n=t.path,a=t.cover,r=t.title,o=t.excerpt,s=a?{backgroundImage:"url("+a}:null,c=j()("read-next-story",e.className,{"no-cover":!a});return i.a.createElement(S.Link,{className:c,style:s,to:n},i.a.createElement("section",{className:"post"},i.a.createElement("h2",null,r),i.a.createElement("p",null,o,"…")))}return null}),M=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.next,n=e.prev;return i.a.createElement("aside",{className:"read-next"},i.a.createElement(F,{post:t}),i.a.createElement(F,{className:"prev",post:n}))},t}(o.Component),G=n(192),U=n(178),R=n(197),z=n(39),q=n.n(z),J=n(370),H=n.n(J),Q=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(q()(q()(n))),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(q()(q()(n))),n}r()(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},n.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},n.render=function(){var e=this.props.postNode;if(!p.a.disqusShortname)return null;var t=e.frontmatter,n=p.a.siteUrl+p.a.pathPrefix+e.fields.slug;return i.a.createElement(H.a,{shortname:p.a.disqusShortname,identifier:t.title,title:t.title,url:n,category_id:t.category_id,onNewComment:this.notifyAboutComment})},t}(o.Component),V=n(205);n.d(t,"pageQuery",function(){return K});var W=function(e){return{path:e.fields.slug,title:e.frontmatter.title,cover:e.frontmatter.cover,excerpt:e.excerpt}},Y=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.data,a=this.props.pageContext,r=a.slug,o=a.next,s=a.prev,u=this.props.data.markdownRemark,S=function(e,t){var n=e;return n.id||(n.id=t),n.id||(n.category_id=p.a.postDefaultCategoryID),n}(u.frontmatter,r),w=S.cover,O=S.title,T=S.date,P=S.author,I=S.tags,A=S.post_class?S.post_class:"post",D=R.a.getAuthor(this.props.data.authors.edges,P,p.a.blogAuthorId);return i.a.createElement(V.a,{location:this.props.location},i.a.createElement(E.a,{className:"post-template",isOpen:this.state.menuOpen},i.a.createElement(c.a,null,i.a.createElement("title",null,S.title+" | "+p.a.siteTitle)),i.a.createElement(l.a,{postPath:r,postNode:u,postSEO:!0}),i.a.createElement(y.a,{config:p.a,onClose:this.handleOnClose}),i.a.createElement(v.a,null,i.a.createElement(m.a,{className:"post-head",cover:w},i.a.createElement(h.a,null,i.a.createElement(f.a,{logo:p.a.siteLogo,title:p.a.siteTitle}),i.a.createElement(d.a,{navigation:p.a.siteNavigation,onClick:this.handleOnClick})),i.a.createElement("h1",{className:"post-title"},O)),i.a.createElement(g.a,null,i.a.createElement(N.a,{className:A},i.a.createElement(b.a,null,i.a.createElement("section",{className:"post-meta"},i.a.createElement(C.a,{date:T}),i.a.createElement(G.a,{prefix:" on ",tags:I}))),i.a.createElement("section",{className:"post-content",dangerouslySetInnerHTML:{__html:u.html}}),i.a.createElement(x,null,i.a.createElement(k.a,{author:D}),i.a.createElement(L,{prefix:"/author",author:D}),i.a.createElement(B,{postNode:u,postPath:t.pathname,config:p.a}),i.a.createElement(_,null),i.a.createElement(Q,{postNode:u})))),i.a.createElement(M,{next:o?W(n.next):null,prev:s?W(n.prev):null}),i.a.createElement(U.a,{copyright:p.a.copyright,promoteGatsby:p.a.promoteGatsby}))))},t}(i.a.Component),K="1770909871";t.default=Y},172:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(173),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.isOpen,a=e.className,r=c()(a,n?"nav-opened":"nav-closed");return i.a.createElement("div",{className:r},t)},t}(i.a.Component));t.a=l},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(177),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"site-wrapper"},e)},t}(i.a.Component));t.a=s},177:function(e,t,n){},178:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(179),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.promoteGatsby,t=this.props.copyright,n=t.label,a=t.url,r=t.year;return i.a.createElement("footer",{className:"site-footer clearfix"},i.a.createElement("section",{className:"copyright"},i.a.createElement("a",{href:a||"/"},n)," ©"," ",r||(new Date).getFullYear()),i.a.createElement(function(e){return e.show?i.a.createElement("section",{className:"poweredby"},"Proudly published with ",i.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")):null},{show:e}))},t}(o.Component));t.a=s},179:function(e,t,n){},180:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(181),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.cover,a=c()("main-header",this.props.className,{"no-cover":!n});return i.a.createElement("header",{className:a,style:n?{backgroundImage:'url("'+n+'")'}:null},t)},t}(i.a.Component));t.a=l},181:function(e,t,n){},182:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(183),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=c()("main-nav",["overlay","clearfix"],n);return i.a.createElement("nav",{className:a},t)},t}(i.a.Component));t.a=l},183:function(e,t,n){},184:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(36),c=(n(185),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?i.a.createElement(s.Link,{className:"blog-logo",to:n||"/"},i.a.createElement("img",{src:t,alt:a})):null},t}(o.Component));t.a=c},185:function(e,t,n){},186:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(187),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.navigation,n=e.onClick;return t&&n?i.a.createElement("a",{className:"menu-button icon-menu",href:"#menu",onClick:n},i.a.createElement("span",{className:"word"},"Menu")):null},t}(o.Component));t.a=s},187:function(e,t,n){},190:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=(n(25),n(76)),i=n.n(o),s=n(0),c=n.n(s),l=(n(77),n(36));var u=function(e){var t=[{primaryText:"Home",component:l.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,LeftIcon:React.createElement(FontIcon,{forceSize:!0,iconClassName:e.iconClassName}),component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",LeftIcon:React.createElement(FontIcon,null,"person"),component:l.Link,to:"/about/"}),t},p=(n(174),n(175),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url;return e?c.a.createElement("a",{className:"subscribe-button icon-feed",href:e},"Subscribe"):null},t}(c.a.Component)),m=function(){return null},h=function(e){var t=e.primaryText;return c.a.createElement("h3",null,t)},f=function(e){var t=e.primaryText,n=e.component,a=i()(e,["primaryText","component"]);return c.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(s.createElement)(n,a,t))},d=function e(t,n){if("string"==typeof t||"number"==typeof t)return Object(s.createElement)(f,{key:t,primaryText:t});if(Object(s.isValidElement)(t))return t;var a,r=t.divider,o=t.subheader,c=t.nestedItems,l=i()(t,["divider","subheader","nestedItems"]);a=r?m:o?h:f;var u=Object.assign({},l,{key:t.key||n});return c&&(u.nestedItems=c.map(e)),Object(s.createElement)(a,u)},E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.config,n=e.onClose,a=u(t);return c.a.createElement("div",null,c.a.createElement("div",{className:"nav"},c.a.createElement("h3",{className:"nav-title"},"Menu"),c.a.createElement("a",{href:"#close",className:"nav-close",onClick:n},c.a.createElement("span",{className:"hidden"},"Close")),c.a.createElement("ul",null,a.map(d)),c.a.createElement(p,{url:t.siteRss})),c.a.createElement("span",{className:"nav-cover"}))},t}(s.Component);t.a=E},208:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(209),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=c()("content",this.props.className);return i.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(i.a.Component));t.a=l},209:function(e,t,n){},233:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(161),c=n.n(s),l=n(156),u=n.n(l),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,o=r.postNode,s=r.postPath,l=r.postSEO;if(l){var p=o.frontmatter;e=p.title,t=p.description?p.description:o.excerpt,n=p.cover,a=u.a.siteUrl+u.a.pathPrefix+s}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;var m="/"===u.a.pathPrefix?"":u.a.pathPrefix;n=u.a.siteUrl+m+n;var h=u.a.siteUrl+u.a.pathPrefix,f=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return l&&f.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),i.a.createElement(c.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:n}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),i.a.createElement("meta",{property:"og:url",content:l?a:h}),l?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:n}),i.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:n}))},t}(o.Component);t.a=p},253:function(e,t,n){"use strict";n(158);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=(n(254),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.author,t=e.name,n=e.image,a=e.url;return n?i.a.createElement("figure",{className:"author-image"},i.a.createElement("a",{className:"img",href:a,style:{backgroundImage:'url("'+n+'")'}},i.a.createElement("span",{className:"hidden"},t+"'s Picture"))):null},t}(i.a.Component));t.a=s},254:function(e,t,n){},255:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(256),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=c()("author-meta",n);return i.a.createElement("div",{className:a},t)},t}(i.a.Component));t.a=l},256:function(e,t,n){},257:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location;return e?i.a.createElement("span",{className:"author-location icon-location"},e):null},t}(i.a.Component);t.a=s},258:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url;return e?i.a.createElement("span",{className:"author-link icon-link"},i.a.createElement("a",{href:e},e)):null},t}(i.a.Component);t.a=s},315:function(e,t,n){},316:function(e,t,n){},367:function(e,t,n){},368:function(e,t,n){},369:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-jsx-c5cfb4f97f4eb5565594.js.map