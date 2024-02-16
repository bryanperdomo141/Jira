"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[50],{7288:(e,t,s)=>{s.d(t,{A:()=>p});var i=s(9950),a=s(4190),n=s(2813),o=s(8662),r=s(9786),l=s(4414);const d=!1!==r.A.modules.contactUs,c=!1!==r.A.features.header.youtubeHelp,h=d||c;class u extends i.PureComponent{constructor(...e){super(...e),this.year=(new Date).getFullYear(),this.siteUrl=h?n.Jb:void 0}render(){return(0,l.jsxs)("div",{className:"card-footer p-4",children:[(0,l.jsx)("div",{className:"float-start",children:(0,l.jsxs)("span",{children:["\xa9 2016-",this.year," ",(0,l.jsx)(o.A,{href:this.siteUrl,children:"Jira Assistant"})," v",a.z2]})}),h&&(0,l.jsxs)("div",{className:"float-end",style:{textAlign:"right"},children:[(0,l.jsxs)("span",{children:[(0,l.jsx)("i",{className:"fa-brands fa-youtube"}),(0,l.jsx)(o.A,{href:"https://www.youtube.com/embed/HsWq7cT3Qq0?rel=0&autoplay=1&showinfo=0&cc_load_policy=1",title:"Click to open YouTube video guiding you to setup Jira Assistant",children:" Help setup"})]})," |",(0,l.jsxs)("span",{children:[(0,l.jsx)("i",{className:"fa fa-phone margin-l-5"}),(0,l.jsx)(o.A,{href:`${n.KS}?entry.1426640786=${a.z2}&entry.972533768=${navigator.userAgent}`,title:"Click to report about any issues or ask a question",children:" Contact us"})]})]})]})}}const p=u},8050:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var i=s(8738),a=s.n(i),n=s(9950),o=s(8615),r=s(5654),l=s(2813),d=s(1328),c=s(5620),h=s(7288),u=s(3837),p=s(4414);class x extends n.PureComponent{constructor(e){super(e),this.navigateToStore=()=>window.open(this.storeUrl),this.extnSelected=()=>{this.props.needIntegration?this.props.navigate("/integrate/extn"):this.props.onAuthTypeChosen("1")},this.basicAuthSelected=()=>this.props.navigate("/integrate/basic"),this.oAuthSelected=()=>{o.A.yesNo((0,p.jsxs)("span",{children:["You will be redirected to Jira Cloud where you can Authorize Jira Assistant to access Jira API's.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"This is a one time activity and the authorization code would be stored in your browser cache which would be used in future for accessing Jira."]}),"Jira Cloud - OAuth2 Integration").then((()=>{document.location.href=(0,d.Ds)({initSource:c.yQ,authType:"2"})}))},this.storeUrl=l.Ad[r.l]||l.Jb}getExtensionMessage(){const{isExtnValid:e,extnUnavailable:t,needIntegration:s}=this.props;return t?(0,p.jsx)("div",{className:"auth-type-desc",children:"Please install Jira Assistant extension and ensure it is enabled. If you believe latest version is already installed and enabled, then please ensure service worker is running in the extension."}):e?s?(0,p.jsx)("div",{className:"auth-type-desc",children:"Required version of extension is already installed but you haven't yet integrated with Jira. Select this option to connect and integrate extension with Jira. Or, click JA icon in your browser to integrate with Jira first and then refresh this page again."}):(0,p.jsx)("div",{className:"auth-type-desc",children:"Required version of extension is already installed and ready to use. Select this option to connect with Jira Assistant extension and use latest features and bug fixes not yet available in the extension."}):(0,p.jsx)("div",{className:"auth-type-desc",children:"You are using old version of Jira Assistant extension. Some of the features are not supported until you update your extension to latest version. Please update the extension and refresh this page."})}getExtensionItem(){const{props:{extnUnavailable:e,isExtnValid:t}}=this,s=!e&&t;return(0,p.jsxs)(p.Fragment,{children:[e&&(0,p.jsx)("span",{className:"badge bg-success",onClick:this.navigateToStore,title:"Click to visit webstore and install the extension",children:"Install Extension"}),!e&&!t&&!s&&(0,p.jsx)("span",{className:"badge bg-success",onClick:this.navigateToStore,title:"Click to visit webstore and update the extension",children:"Update Extension"}),(0,p.jsxs)("div",{className:a()("auth-type",!s&&"disabled"),onClick:s?this.extnSelected:void 0,"data-test-id":"extn-auth",children:[(0,p.jsx)("div",{className:"auth-type-title",children:"Use Jira Assistant Extension"}),this.getExtensionMessage()]})]})}render(){return(0,p.jsx)("div",{className:"app auth-page flex-row align-items-center",children:(0,p.jsx)("div",{className:"container",children:(0,p.jsx)("div",{className:"row justify-content-center",children:(0,p.jsx)("div",{className:"col-md-6 no-padding no-margin",style:{maxWidth:480,minWidth:460},children:(0,p.jsxs)("div",{className:"card mx-4 no-padding no-margin",children:[(0,p.jsxs)("div",{className:"card-body p-4",children:[(0,p.jsx)("h1",{children:"Jira Assistant"}),(0,p.jsxs)("p",{className:"text-muted",children:["Choose the way you would like to ",(0,p.jsx)("strong",{children:"Integrate"})," with your Jira"]}),!c.A$&&this.getExtensionItem(),(0,p.jsxs)("div",{className:"auth-type",onClick:this.oAuthSelected,"data-test-id":"o-auth",children:[(0,p.jsx)("div",{className:"auth-type-title",children:"Use OAuth2 (Jira Cloud only)"}),(0,p.jsx)("div",{className:"auth-type-desc",children:"Using OAuth option will let authorize this tool to Integrate with Jira without need to store login credentials in this tool. This is more secured than using userid and password"})]}),(0,p.jsxs)("div",{className:"auth-type",onClick:this.basicAuthSelected,"data-test-id":"basic-auth",children:[(0,p.jsx)("div",{className:"auth-type-title",children:"Use User id and Password"}),(0,p.jsx)("div",{className:"auth-type-desc",children:"You can use your user id and password / api token to authenticate with Jira. On some cases this option may not work if you use single sign-on for logging in to Jira."})]})]}),(0,p.jsx)(h.A,{})]})})})})})}}const g=(0,u.y)(x)}}]);