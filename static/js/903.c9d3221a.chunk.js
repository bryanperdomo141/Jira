"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[903],{9943:(e,s,t)=>{t.r(s),t.d(s,{default:()=>ie});var i=t(7313),a=t(2135),n=t(6698),o=t(232),r=t(3682),l=t(4616),c=t(3840),d=t(6444),h=t(6848),u=t(6417);const p=[{videoId:"xNYNXWUgCeA",module:"Dashboard",route:"dashboard"},{videoId:"Ihz4Dm5oiRk",module:"Worklog Timer",route:"~"},{videoId:"hJBM5X24sPQ",module:"Worklog Calendar",route:"calendar"},{videoId:"WQOHrPBZZiI",module:"Worklog report - Sprint wise",route:"reports/worklog"},{videoId:"TxNH1HQtiX0",module:"Worklog report",route:"userdaywise"},{videoId:"6hAOtUm1lUk",module:"Worklog import",route:"import/worklog"},{videoId:"EFgXFqrGuTI",module:"Issue import",route:"import/issue"},{videoId:"HMyBkaZ09Xw",module:"Report builder",route:"advanced"}],m=[{startAt:713,videoId:"f2aBSXzbYuA",module:"Custom report",route:"customgrouped"},{startAt:1069,videoId:"f2aBSXzbYuA",module:"Settings",route:"settings"},{startAt:1147,videoId:"f2aBSXzbYuA",module:"Feedback",route:"feedback"}];class x extends c.Z{constructor(e){super(e),this.playPrev=()=>{let{index:e}=this.state;e-=1;const s=this.getVideoUrl(this.videoList[e],"Video view previous");this.setState({url:s,index:e})},this.playNext=()=>{let{index:e}=this.state;e+=1;const s=this.getVideoUrl(this.videoList[e],"Video view next");this.setState({url:s,index:e})},this.style={width:"87vw",height:"95vh"},this.className="video-help",this.videoList=[...p],this.setVideoUrl()}setVideoUrl(){const e=this.props.location.pathname.substring(2);let s=p.first((s=>~e.indexOf(s.route)));s||(s=m.first((s=>~e.indexOf(s.route))),s||(s=m[0]),this.videoList.push(s)),this.state.url=this.getVideoUrl(s),this.state.index=this.videoList.indexOf(s)}getVideoUrl(e,s){return this.$analytics.trackEvent(s||"Video help viewed",d.Jk.HeaderActions,`Video Help: ${e.module}`),`https://www.youtube.com/embed/${e.videoId}?rel=0&autoplay=1&showinfo=0&cc_load_policy=1&start=${e.startAt||0}`}render(){const{url:e,index:s}=this.state;return super.renderBase((0,u.jsxs)("div",{className:"video-help",children:[s>0&&(0,u.jsx)("div",{className:"nav-icon left",onClick:this.playPrev,children:(0,u.jsx)("span",{className:"fa fa-angle-left",title:"Play previous video"})}),(0,u.jsx)("iframe",{src:e,id:"ifVideoHelp",title:"Video Help",style:{width:"87vw",height:"95vh"},frameBorder:0,allowFullScreen:!0}),s+1<this.videoList.length&&(0,u.jsx)("div",{className:"nav-icon right",onClick:this.playNext,children:(0,u.jsx)("span",{className:"fa fa-angle-right",title:"Play next video"})})]}))}}const k=(0,h.E)(x);class g extends i.PureComponent{constructor(e){super(e),this.skinSelected=e=>{const s=e.currentTarget,t=s.attributes.skin.value;this.setSkin(t),document.body.querySelector("#divSkins .selected").classList.remove("selected"),s.classList.add("selected")},(0,l.f3)(this,"SettingsService","AnalyticsService")}async componentDidMount(){var e,s;this.selectedSkin=await this.$settings.get("skin")||"skin-blue",null===(e=document.body.querySelector(`#divSkins [skin="${this.selectedSkin}"]`))||void 0===e||null===(s=e.classList)||void 0===s||s.add("selected")}setSkin(e){const s=e;if(this.selectedSkin===e)return;const t=document.body.classList;t.remove(this.selectedSkin),this.skinClass=s,this.selectedSkin=e,this.$settings.set("skin",e),t.add(this.selectedSkin),this.$analytics.trackEvent("Skin changed",d.Jk.HeaderActions,e)}render(){return(0,u.jsxs)("div",{className:"skin-items",id:"divSkins",children:[(0,u.jsx)("div",{title:"blue",skin:"skin-blue",onClick:this.skinSelected,style:{borderColor:"#367fa9",backgroundColor:"#3c8dbc"},children:"B"}),(0,u.jsx)("div",{title:"purple",skin:"skin-purple",onClick:this.skinSelected,style:{borderColor:"#555299",backgroundColor:"#605ca8"},children:"P"}),(0,u.jsx)("div",{title:"violet",skin:"skin-violet",onClick:this.skinSelected,style:{borderColor:"#7a4889",backgroundColor:"#9055A2"},children:"V"}),(0,u.jsx)("div",{title:"sea",skin:"skin-sea",onClick:this.skinSelected,style:{borderColor:"#2d7776",backgroundColor:"#379392"},children:"S"}),(0,u.jsx)("div",{title:"green",skin:"skin-green",onClick:this.skinSelected,style:{borderColor:"#008d4c",backgroundColor:"#00a65a"},children:"G"}),(0,u.jsx)("div",{title:"red",skin:"skin-red",onClick:this.skinSelected,style:{borderColor:"#d73925",backgroundColor:"#dd4b39"},children:"R"}),(0,u.jsx)("div",{title:"yellow",skin:"skin-yellow",onClick:this.skinSelected,style:{borderColor:"#e08e0b",backgroundColor:"#f39c12"},children:"Y"}),(0,u.jsx)("div",{title:"pink",skin:"skin-pink",onClick:this.skinSelected,style:{borderColor:"#ec2f6c",backgroundColor:"#ef5285"},children:"P"}),(0,u.jsx)("div",{title:"meadow",skin:"skin-meadow",onClick:this.skinSelected,style:{borderColor:"#1caf9a",backgroundColor:"#8cc1a2"},children:"M"}),(0,u.jsx)("div",{skin:"skin-blue2",onClick:this.skinSelected,style:{borderColor:"#557a95",backgroundColor:"#7395ae"},children:"B"}),(0,u.jsx)("div",{skin:"skin-cust8",onClick:this.skinSelected,style:{borderColor:"#64485c",backgroundColor:"#83677b"},children:"M"}),(0,u.jsx)("div",{skin:"skin-green3",onClick:this.skinSelected,style:{borderColor:"#40561a",backgroundColor:"#729a2e"},children:"B"}),(0,u.jsx)("div",{skin:"skin-cust2",onClick:this.skinSelected,style:{borderColor:"#5d5c61",backgroundColor:"#379683"},children:"G"}),(0,u.jsx)("div",{skin:"skin-cust5",onClick:this.skinSelected,style:{borderColor:"#7e685a",backgroundColor:"#afd275"},children:"G"}),(0,u.jsx)("div",{skin:"skin-cust3",onClick:this.skinSelected,style:{borderColor:"#ffe400",backgroundColor:"#747474"},children:"G"}),(0,u.jsx)("div",{title:"dark",skin:"skin-dark",onClick:this.skinSelected,style:{borderColor:"rgba(0,0,0,0.2)",backgroundColor:"#2f353a"},children:"D"})]})}}const v=g;var f=t(7544),b=t(4711),j=t(4916),w=t(6552),C=t(794);class y extends i.PureComponent{constructor(e){super(e),(0,l.f3)(this,"UserUtilsService")}getDescription(e,s){let t,i=e;return"object"===typeof e&&(t=e.id,i=e.text),(0,u.jsxs)("li",{children:[!!t&&(0,u.jsxs)(C.Z,{href:`https://github.com/shridhar-tl/jira-assistant/issues/${t}`,children:["#",t," - "]}),i]},s)}render(){const{updates:e}=this.props;return(0,u.jsx)("div",{className:"release-history",children:e.map(((e,s)=>(0,u.jsxs)("div",{className:"release",children:[(0,u.jsx)("span",{className:"version-no",children:e.version}),e.publishDate&&(0,u.jsxs)("span",{children:[" (published: ",(0,u.jsx)("b",{children:this.$userutils.formatDate(e.publishDate)}),")"]}),!e.publishDate&&e.expectedOn&&(0,u.jsxs)("span",{children:[" (expected: ",(0,u.jsx)("b",{children:this.$userutils.formatDate(e.expectedOn)}),")"]}),e.availableNow&&(0,u.jsx)("span",{className:"badge badge-"+(e.isBeta?"warning":"success"),title:"Download this version from web store",children:"now available"}),(0,u.jsx)("span",{className:"changelog-header",children:"Changelog:"}),(0,u.jsx)("ul",{className:"changelogs",children:e.whatsnew.map(this.getDescription)}),e.bugs&&e.bugs.length>0&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:"changelog-header",children:"Bugs:"}),(0,u.jsx)("ul",{className:"changelogs",children:e.bugs.map(this.getDescription)})]})]},s)))})}}const N=y;var S=t(714);class $ extends i.PureComponent{render(){return function(e){if(!e||"string"!==typeof e)return e;const s=[];let t=null,i=0;for(;t=T.exec(e);){const a=t[0],n=t.index;s.push(e.substring(i,n));const o=a.startsWith("#")?(0,S.BZ)(a):a;s.push((0,u.jsx)(C.Z,{href:o,children:a})),i=n+a.length}i<e.length&&s.push(e.substring(i));return s.length?s:e}(this.props.message)}}const U=$,T=/#\d+|(https?):\/\/(www\.)?[a-z0-9.:].*?(?<!\.\.?)(?=\s|[.]$|$)/g;class I extends i.PureComponent{constructor(e){super(e),this.readMessage=e=>{let s=e.message,t=null;"versionInfo"===e.type?(t={width:"600px"},s=(0,u.jsx)(N,{updates:this.state.updates_info})):s=(0,u.jsx)(U,{message:s});const i=()=>this.markRead(e,!0);w.Z.alert(s,e.title,t).then(i,i)},this.markRead=(e,s)=>{if(!e.read){e.read=!0,this.$noti.markRead(e);const t=s?"Viewed":"Mark as read";this.trackAnalytics(e,t),this.setState((e=>({unread:(e.unread||1)-1})))}},this.trackViewList=()=>{const{total:e,unread:s}=this.state;this.$analytics.trackEvent("Messages: List viewed","Messages",`Messages: Total: ${e}, Unread: ${s}`)},(0,j.f3)(this,"NotificationService","AnalyticsService","UserUtilsService","UtilsService");const{updates_info:s,list:t,total:i,unread:a}=e.notifications;this.state={updates_info:s,list:t,total:i,unread:a}}trackAnalytics(e,s){this.$analytics.trackEvent(("versionInfo"===e.type?"Update Info: ":"Message: ")+s,"Messages",`Message Id: ${e.id}`)}render(){const{list:e,total:s,unread:t}=this.state;return e&&e.length?(0,u.jsxs)(n.OB,{nav:!0,direction:"down",children:[(0,u.jsxs)(n.Z_,{nav:!0,onClick:this.trackViewList,children:[(0,u.jsx)("i",{className:"fa fa-bell"}),t>0&&(0,u.jsx)("span",{className:"badge badge-danger",children:t})]}),(0,u.jsxs)(n.h_,{end:!0,className:"messages",children:[(0,u.jsx)(n.hP,{header:!0,tag:"div",children:(0,u.jsx)("div",{className:"text-center",children:(0,u.jsxs)("strong",{children:["You have ",t||s," ",t?"unread":""," messages"]})})}),e.map(((e,s)=>(0,u.jsx)(L,{message:e,onOpen:this.readMessage,onRead:this.markRead,cut:this.$utils.cut},s)))]})]}):null}}const A=I;class L extends i.PureComponent{constructor(){super(...arguments),this.readMessage=()=>this.props.onOpen(this.props.message),this.markRead=()=>this.props.onRead(this.props.message)}render(){const{message:e,cut:s}=this.props;return(0,u.jsxs)(n.hP,{tag:"div",title:"Click to view this message",children:[!e.read&&(0,u.jsx)("small",{className:"float-right mt-0",onClick:this.markRead,title:"Click to mark this message as read",children:(0,u.jsx)("span",{className:"fa fa-eye mark-read"})}),(0,u.jsxs)("div",{className:"text-truncate"+(e.read?"":" font-weight-bold"),onClick:this.readMessage,children:[e.important&&(0,u.jsx)("span",{className:"fa fa-exclamation text-danger"})," ",e.title]}),(0,u.jsx)("div",{className:"small text-muted message",onClick:this.readMessage,children:(0,u.jsx)(U,{message:s(e.message,175,!0)})})]})}}var P=t(2251);class Z extends i.PureComponent{constructor(e){super(e),this.trackViewList=()=>{const{total:e}=this.state;this.$analytics.trackEvent("Jira Updates: List viewed","Updates",`Updates: Total: ${e}`)},(0,j.f3)(this,"JiraUpdatesService","AnalyticsService","UtilsService"),this.state={}}componentDidMount(){this.$jupdates.getRescentUpdates().then((e=>{this.setState(e)}))}trackAnalytics(e,s){this.$analytics.trackEvent(("versionInfo"===e.type?"Update Info: ":"Message: ")+s,"Messages",`Message Id: ${e.id}`)}render(){const{list:e,total:s,ticketCount:t}=this.state;return e&&e.length?(0,u.jsxs)(n.OB,{nav:!0,direction:"down",children:[(0,u.jsxs)(n.Z_,{nav:!0,onClick:this.trackViewList,children:[(0,u.jsx)("i",{className:"fa fa-comments"}),s>0&&(0,u.jsx)("span",{className:"badge badge-warning",children:s})]}),(0,u.jsxs)(n.h_,{right:!0,className:"jira-notifications",children:[(0,u.jsx)(n.hP,{header:!0,tag:"div",children:(0,u.jsx)("div",{className:"text-center",children:(0,u.jsxs)("strong",{children:["You have ",s," updates on ",t," issues"]})})}),(0,u.jsx)("div",{className:"noti-messages",children:e.map(((e,s)=>(0,u.jsx)(E,{message:e,cut:this.$utils.cut},s)))})]})]}):null}}const D=Z;class E extends i.PureComponent{render(){const{message:e,cut:s}=this.props;return(0,u.jsxs)(n.hP,{tag:"a",title:"Click to view this ticket in jira",href:e.href,target:"_blank",children:[(0,u.jsxs)("div",{className:"text-truncate font-weight-bold",title:e.summary,children:[e.key," - ",s(e.summary,100,!0)]}),e.updates.map(((e,s)=>{let{date:t,author:i,field:a,fromString:n,toString:o}=e;return(0,u.jsxs)("div",{className:"small text-muted message",children:[(0,u.jsx)(P.H,{tag:"span",className:"user-display",user:i}),(0,u.jsxs)("span",{children:[" updated ",a," from ",n," to ",o," "]}),(0,u.jsx)(P.qm,{tag:"span",className:"date-display",date:t,quick:!0})]},s)}))]})}}var M=t(9149);const B=M.xn?{btnText:"Extn",btnTooltip:"Go back to extension",launchText:"Launch Extension",switchText:"Switch back",launchTooltip:"Launch Jira Assistant extension once",switchTooltip:"Switch back to Jira Assistant extension"}:{btnText:"Web",btnTooltip:"Checkout Jira Assistant Web",launchText:"Launch JA Web",switchText:"Switch to JA Web",launchTooltip:"Launch latest Jira Assistant Web version once",switchTooltip:"Switch to Web version. You can come back later any time."};class V extends i.PureComponent{constructor(e){super(e),this.switchToWeb=async()=>{await this.$settings.set("useWebVersion",!M.xn||null),window.location.href=this.getLaunchPath()},this.state={switched:!1},(0,l.f3)(this,"SettingsService","AppBrowserService")}async componentDidMount(){if(this.usingExtn=M.xn&&"1"===localStorage.getItem("authType"),M.xn){const e=await this.$jaBrowserExtn.getLaunchUrl("index.html");this.setState({launchUrl:e})}else this.setState({launchUrl:r.fL});const e=await this.$settings.get("useWebVersion");this.setState({switched:e})}getLaunchPath(){const e=this.props.location.pathname;return`${this.state.launchUrl}#${e}`}showOptions(){const{switched:e,launchUrl:s}=this.state;return!!s&&(M.RX||this.usingExtn&&e)}render(){if(!this.showOptions())return null;const e=this.getLaunchPath();return(0,u.jsx)(n.JL,{className:"d-md-down-none margin-r-5",navbar:!0,children:(0,u.jsxs)(n.OB,{nav:!0,direction:"down",children:[(0,u.jsx)(n.Z_,{nav:!0,children:(0,u.jsxs)("span",{className:"btn btn-success web-try",title:B.btnTooltip,children:[" ",(0,u.jsx)("i",{className:"fa fa-external-link"})," ",(0,u.jsx)("strong",{children:B.btnText})]})}),(0,u.jsxs)(n.h_,{left:!0,children:[(0,u.jsx)(n.hP,{header:!0,tag:"div",className:"text-center",children:(0,u.jsx)("strong",{children:"Jira Assistant Web"})}),(0,u.jsxs)(n.hP,{tag:"a",href:e,target:"_blank",title:B.launchTooltip,children:[(0,u.jsx)("i",{className:"fa fa-external-link"})," ",B.launchText]}),(0,u.jsxs)(n.hP,{tag:"button",title:B.switchTooltip,onClick:this.switchToWeb,children:[(0,u.jsx)("i",{className:"fa fa-plug"})," ",B.switchText]})]})]})})}}const J=(0,h.E)(V);var R=t(5863),W=t(4074),_=t(3972);class O extends i.PureComponent{constructor(e){super(e),this.showEditor=()=>this.setState({showEditor:!0}),this.hideDialog=()=>this.setState({showEditor:!1}),this.trackerUpdated=e=>{this.context.setUpdates(e),this.hideDialog()},(0,l.f3)(this,"UserUtilsService"),this.state={showEditor:!1}}render(){const e=this.context.getElapsedTimeInSecs();return e?(0,u.jsxs)("div",{className:"timer-ctl",children:[(0,u.jsx)(C.Z,{className:"ticket-no link",href:this.$userutils.getTicketUrl(e.key),children:e.key}),(0,u.jsx)(Y,{isRunning:e.isRunning,lapse:e.lapse,title:e.description},`${e.key}_${e.isRunning?"R":"S"}`),!e.isRunning&&(0,u.jsx)("span",{className:"fa fa-play",title:"Resume time tracking",onClick:this.context.resumeTimer}),e.isRunning&&(0,u.jsx)("span",{className:"fa fa-pause",title:"Pause time tracking",onClick:this.context.pauseTimer}),(0,u.jsx)("span",{className:"fa fa-stop",title:"Stop time tracking and create worklog entry",onClick:this.context.stopTimer}),(0,u.jsx)("span",{className:"fa fa-edit",title:"Edit working comment",onClick:this.showEditor}),this.state.showEditor&&(0,u.jsx)(_.Z,{editTracker:!0,onDone:this.trackerUpdated,onHide:this.hideDialog})]}):null}}O.contextType=W.a2;const H=O;class Y extends i.PureComponent{constructor(e){super(e),this.state=this.getDisplayTime(e)}componentDidMount(){this.props.isRunning&&(this.token=setInterval((()=>this.setState(this.getDisplayTime)),1e3))}getDisplayTime(e){let{lapse:s}=e;s+=1;const t=Math.floor(s/3600),i=Math.floor(s%3600/60),a=Math.floor(s%60);let n;return n=t?`${t.pad(2)}:${i.pad(2)}:${a.pad(2)}`:i?`${i.pad(2)}:${a.pad(2)}`:`${a.pad(2)}s`,{lapse:s,display:n}}componentWillUnmount(){this.token&&clearInterval(this.token)}render(){return(0,u.jsx)("span",{className:"time-lapsed",title:this.props.title,children:this.state.display})}}var q=t(3860);function X(){const{$jaBrowserExtn:e,$analytics:s}=(0,l.f3)("AppBrowserService","AnalyticsService"),t=e.getStoreUrl(!0),i=e.getStoreUrl(),a=encodeURIComponent('Check out "Jira Assistant" in web store'),o=encodeURIComponent(`Check out "Jira Assistant", a open source extension / add-on for your browser from below url:\n\nChrome users: ${r.Fq}?utm_source%3Dgmail#\n\nFirefox users: ${r.Z_}\n\nEdge users: ${r.oP}\n\nOpera users: ${r.El}\n\nFor source code or to know more about the extension visit: ${r.ov}\n\n\nThis would help you to track your worklog and generate reports from Jira easily with lots of customizations. Also has lot more features like Calendar integration, Jira comment & meeting + worklog notifications, Worklog, Sprint and custom report generations, etc..`),c=encodeURIComponent(i),h=`https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&su=${a}&body=${o}`,p=`https://www.linkedin.com/shareArticle?mini=true&url=${c}&title=${a}&summary=${o}&source=`,m=`https://www.facebook.com/sharer/sharer.php?u=${c}&title=${a}&description=${o}`,x=`https://twitter.com/intent/tweet?text=${o}`;return(0,u.jsxs)(n.OB,{nav:!0,direction:"down",onClick:()=>s.trackEvent("Share option viewed",d.Jk.HeaderActions),children:[(0,u.jsx)(n.Z_,{nav:!0,children:(0,u.jsx)("i",{className:"fa fa-share-alt"})}),(0,u.jsxs)(n.h_,{end:!0,children:[(0,u.jsx)(n.hP,{header:!0,tag:"div",className:"text-center",children:(0,u.jsx)("strong",{className:"share-header-text",children:"Share or rate this tool"})}),(0,u.jsxs)("div",{className:"share-items",children:[(0,u.jsx)(C.Z,{href:t,title:"Click to rate this tool or add a comment in chrome web store",children:(0,u.jsx)("i",{className:"fa fa-star pull-left"})}),(0,u.jsx)(C.Z,{href:h,title:"Share with Gmail",children:(0,u.jsx)("i",{className:"fa fa-envelope pull-left"})}),(0,u.jsx)(C.Z,{href:p,title:"Share with Linked in",children:(0,u.jsx)("i",{className:"fa fa-linkedin-square pull-left"})}),(0,u.jsx)(C.Z,{href:m,title:"Share with Facebook",children:(0,u.jsx)("i",{className:"fa fa-facebook-square pull-left"})}),(0,u.jsx)(C.Z,{href:x,title:"Share with Twitter",children:(0,u.jsx)("i",{className:"fa fa-twitter-square pull-left"})})]})]})]})}const F=i.memo(X),G=!1!==q.Z.features.common.allowWebVersion,z=!1!==q.Z.features.header.shareWithOthers,Q=!1!==q.Z.features.header.youtubeHelp,K=!!q.Z.modules.contribute,ee=!1!==q.Z.modules.contactUs,se=z?r.ov:void 0;class te extends i.PureComponent{constructor(e){var s,t,i,a;super(e),this.showYoutubeHelp=()=>this.setState({showYoutubeVideo:!0}),this.hideYoutube=()=>this.setState({showYoutubeVideo:!1}),this.showVersionInfo=e=>{var s;e.preventDefault();const t=null===(s=this.state.notifications)||void 0===s?void 0:s.updates_info;t&&w.Z.alert((0,u.jsx)(N,{updates:t}),"Updates info",{width:"600px"}).then()},(0,l.f3)(this,"AppBrowserService","SessionService","NotificationService","AnalyticsService");const n=this.$session.CurrentUser;this.disableNotification=!(null!==(s=q.Z.features)&&void 0!==s&&null!==(t=s.header)&&void 0!==t&&t.devUpdates)||n.disableDevNotification,this.disableJiraUpdates=!1===(null===(i=q.Z.features)||void 0===i||null===(a=i.header)||void 0===a?void 0:a.jiraUpdates)||n.disableJiraUpdates,this.userId=n.userId,this.currentJiraInstance=(0,b._P)(n.jiraUrl),this.state={},this.versionNumber=M.xn?"WEB":`v ${o.Hm}`}componentDidMount(){this.disableNotification||this.$noti.getNotifications().then((e=>this.setState({notifications:e})),(e=>{console.error("Error fetching notifications: ",e)})),this.$session.CurrentUser.hideDonateMenu&&document.body.classList.add("no-donation")}render(){const{state:{showYoutubeVideo:e,notifications:s}}=this,{version:t,isBeta:i}=(null===s||void 0===s?void 0:s.updatesAvailable)||{};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(ae,{className:"d-lg-none quick-view-hide",display:"md",mobile:!0,children:(0,u.jsx)("span",{className:"fa fa-bars"})}),(0,u.jsx)(C.Z,{href:se,className:"navbar-brand",children:(0,u.jsxs)("span",{className:"navbar-brand-full",children:["Jira Assistant ",(0,u.jsx)("span",{className:"v-info badge badge-success",onClick:this.showVersionInfo,children:this.versionNumber})]})}),(0,u.jsx)(ae,{className:"d-md-down-none quick-view-hide",display:"lg",children:(0,u.jsx)("span",{className:"fa fa-bars"})}),(0,u.jsx)("button",{className:"navbar-toggler quick-view-show",children:(0,u.jsx)(C.Z,{href:M.xn?"/":"/index.html",title:"Open in new tab",children:(0,u.jsx)("span",{className:"fa fa-external-link"})})}),K&&(0,u.jsx)(a.OL,{to:`/${this.userId}/contribute`,className:"btn-donate",title:"Would you like to contribute / compensate us for the effort we put in development of this tool? Click to know more",children:(0,u.jsx)("img",{src:"/assets/donate.png",width:"145",className:"margin-r-5",alt:"Donate us"})}),(0,u.jsx)(H,{}),(0,u.jsxs)(n.JL,{className:"ml-auto",navbar:!0,children:[!M.KX&&(0,u.jsx)(R.Z,{children:e=>(0,u.jsx)(f.Z,{instance:this.currentJiraInstance,onLogout:this.props.onLogout,onImport:e})}),G&&!M.yX&&(0,u.jsx)(J,{}),!!t&&(0,u.jsxs)("span",{className:"update-available badge badge-"+(i?"warning":"success"),title:`Jira Assist ${i?"BETA ":""}v${t} is now available. Click to know more.`,onClick:this.showVersionInfo,children:[(0,u.jsx)("i",{className:"fa fa-download"})," Updates available"]}),!this.disableJiraUpdates&&(0,u.jsx)(D,{}),!this.disableNotification&&s&&(0,u.jsx)(A,{notifications:s}),Q&&(0,u.jsx)(n.LY,{className:"d-md-down-none",children:(0,u.jsx)("span",{className:"nav-link",onClick:this.showYoutubeHelp,children:(0,u.jsx)("i",{className:"fa fa-youtube-play"})})}),(0,u.jsxs)(n.OB,{nav:!0,direction:"down",children:[(0,u.jsx)(n.Z_,{nav:!0,children:(0,u.jsx)("i",{className:"fa fa-adjust"})}),(0,u.jsx)(n.h_,{end:!0,children:(0,u.jsx)(v,{})})]}),z&&(0,u.jsx)(F,{}),ee&&(0,u.jsx)(n.LY,{className:"d-md-down-none",children:(0,u.jsx)(a.OL,{to:`/${this.userId}/contactus`,className:"nav-link",children:(0,u.jsx)("i",{className:"fa fa-phone",title:"Contact us"})})})]}),Q&&e&&(0,u.jsx)(k,{onHide:this.hideYoutube})]})}}const ie=te;function ae(e){let{className:s,display:t}=e;const a=(0,i.useCallback)((()=>{document.body.classList.toggle(`sidebar-${t}-show`)}),[t]);return(0,u.jsx)("span",{className:s,style:{marginLeft:17,marginRight:17,paddingTop:2,cursor:"pointer"},onClick:a,children:(0,u.jsx)("span",{className:"fa fa-bars"})})}}}]);