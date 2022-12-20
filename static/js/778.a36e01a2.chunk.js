"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[778],{5912:(e,s,t)=>{t.r(s),t.d(s,{default:()=>b});var i=t(7313),l=t(6123),a=t.n(l),n=t(3860),d=t(6614),r=t(5991),o=t(4711),c=t(8933),h=t(6444),g=t(232),u=t(6552),j=t(6417);const x=!1!==n.Z.features.header.devUpdates,p=!1!==n.Z.features.common.analytics,m=!1!==n.Z.features.common.allowWebVersion;class f extends i.PureComponent{constructor(e){super(e),this.setValue=(e,s,t)=>{let{users:i,intgUsers:l}=this.state;i=[...i];const a=i.indexOf(t);t={...t},i[a]=t,a>0&&(l=[...l],l[a-1]=t),"string"===typeof e&&(e="jiraUrl"===s?e.trim().clearEnd("/"):e.trim()||void 0),t[s]=e,void 0===t[s]&&delete t[s],this.setState({users:i,intgUsers:l})},this.saveSettings=()=>{const{users:e}=this.state;this.$user.saveGlobalSettings(e).then((()=>{this.loadSettings(),this.$message.success("Settings saved successfully. Some changes will reflect only after you refresh the page.")}))},this.toggleDelete=e=>{e.deleted?this.setValue(!1,"deleted",e):u.Z.confirmDelete((0,j.jsxs)(j.Fragment,{children:["Are you sure to delete the selected integration? ",(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),"This would also delete all the associated data like local Worklogs, Custom Reports, etc."]}),"Confirm delete integration",void 0,{waitFor:8}).then((()=>this.setValue(!0,"deleted",e)))},(0,r.f3)(this,"UserService","SettingsService","MessageService"),this.state={users:[],intgUsers:[]}}componentDidMount(){this.loadSettings()}async loadSettings(){let e=await this.$user.getAllUsers();e=await Promise.all(e.map((async e=>{const{id:s,userId:t,jiraUrl:i,email:l,lastLogin:a}=e;return{id:s,userId:t,jiraUrl:i,email:l,lastLogin:a,...await this.$settings.getAllSettings(e.id,h.Jp.Advanced)}}))),e[0].useWebVersion=await this.$settings.get("useWebVersion"),this.setState({users:e,intgUsers:e.slice(1)})}render(){const{state:{users:e,intgUsers:s}}=this;return(0,j.jsxs)("div",{className:"global-settings",children:[(0,j.jsxs)(d.TT,{children:[(0,j.jsx)("caption",{children:"Advanced settings"}),(0,j.jsxs)(d.Et,{children:[(0,j.jsxs)(d.lE,{children:[(0,j.jsx)(d.sg,{rowSpan:2,children:"Settings"}),(0,j.jsx)(d.sg,{colSpan:e.length,children:"Instances"})]}),(0,j.jsxs)(d.lE,{children:[(0,j.jsx)(d.sg,{children:"Default"}),s.map((e=>(0,j.jsxs)(d.sg,{children:[(0,o._P)(e.jiraUrl),(0,j.jsx)("span",{className:a()("fa pull-right delete-account",e.deleted?"fa-undo":"fa-trash"),title:e.deleted?"Undo delete":"Delete this integration",onClick:()=>this.toggleDelete(e)})]},e.id)))]})]}),(0,j.jsxs)(d.XP,{children:[(0,j.jsxs)(d.lE,{children:[(0,j.jsx)("td",{children:"Integrated on"}),(0,j.jsx)("td",{children:"N/A"}),s.map((e=>(0,j.jsx)("td",{children:e.lastLogin.format("dd-MMM-yyyy HH:mm:ss")},e.id)))]}),(0,j.jsxs)(d.lE,{children:[(0,j.jsx)("td",{children:"Jira Server Url"}),(0,j.jsx)("td",{children:"N/A"}),s.map((e=>{var s;return(0,j.jsx)("td",{children:(0,j.jsx)(c.zC,{placeholder:"e.g. https://jira.companysite.com",value:null===(s=e.jiraUrl)||void 0===s?void 0:s.toString(),args:e,field:"jiraUrl",onChange:this.setValue,disabled:e.deleted})},e.id)}))]}),(0,j.jsxs)(d.lE,{children:[(0,j.jsx)("td",{children:"Jira User id"}),(0,j.jsx)("td",{children:"N/A"}),s.map((e=>(0,j.jsx)("td",{children:(0,j.jsx)(c.zC,{placeholder:"User id of Jira",value:e.userId,args:e,field:"userId",onChange:this.setValue,disabled:e.deleted})},e.id)))]}),(0,j.jsxs)(d.lE,{children:[(0,j.jsx)("td",{children:"Email id"}),(0,j.jsx)("td",{children:"N/A"}),s.map((e=>(0,j.jsx)("td",{children:(0,j.jsx)(c.zC,{placeholder:"Email id of Jira",value:e.email,args:e,field:"email",onChange:this.setValue,disabled:e.deleted})},e.id)))]}),(0,j.jsxs)(d.lE,{children:[(0,j.jsx)("td",{children:"Open tickets JQL"}),e.map((e=>(0,j.jsx)("td",{children:(0,j.jsx)(c.zC,{multiline:!0,placeholder:h.he.openTicketsJQL,readOnly:e.id===g.rH,value:e.id===g.rH?h.he.openTicketsJQL:e.openTicketsJQL||"",args:e,field:"openTicketsJQL",onChange:this.setValue,disabled:e.deleted})},e.id)))]}),(0,j.jsxs)(d.lE,{children:[(0,j.jsx)("td",{children:"Ticket suggestions JQL"}),e.map((e=>(0,j.jsx)("td",{children:(0,j.jsx)(c.zC,{multiline:!0,placeholder:h.he.openTicketsJQL,readOnly:e.id===g.rH,value:e.id===g.rH?h.he.openTicketsJQL:e.suggestionJQL||"",args:e,field:"suggestionJQL",onChange:this.setValue,disabled:e.deleted})},e.id)))]}),(0,j.jsxs)(d.lE,{children:[(0,j.jsx)("td",{children:"Disable Jira issue updates"}),e.map((e=>(0,j.jsx)("td",{children:(0,j.jsx)(c.XZ,{checked:e.disableJiraUpdates,args:e,field:"disableJiraUpdates",onChange:this.setValue,disabled:e.deleted,label:"Disable Jira issue updates",title:"Do not show updates about changes for any issues happend in Jira"})},e.id)))]}),(0,j.jsxs)(d.lE,{children:[(0,j.jsx)("td",{children:"Jira updates JQL (used to fetch updates from Jira)"}),e.map((e=>(0,j.jsx)("td",{children:(0,j.jsx)(c.zC,{multiline:!0,placeholder:h.he.jiraUpdatesJQL,readOnly:e.id===g.rH,disabled:e.disableJiraUpdates||e.deleted,value:e.id===g.rH?h.he.jiraUpdatesJQL:e.jiraUpdatesJQL||"",args:e,field:"jiraUpdatesJQL",onChange:this.setValue})},e.id)))]}),m&&!!e[0]&&(0,j.jsxs)(d.lE,{children:[(0,j.jsx)("td",{children:"Use Jira Assistant Web version"}),(0,j.jsx)("td",{colSpan:s.length+1,children:(0,j.jsx)(c.XZ,{checked:e[0].useWebVersion,args:e[0],field:"useWebVersion",onChange:this.setValue,label:"Opt to always use Web build with latest updates and fixes"})})]}),p&&!!e[0]&&(0,j.jsxs)(d.lE,{children:[(0,j.jsx)("td",{children:"Enable tracking user actions (Anynmous, Google Analytics)"}),(0,j.jsx)("td",{colSpan:s.length+1,children:(0,j.jsx)(c.XZ,{checked:!1!==e[0].enableAnalyticsLogging,args:e[0],field:"enableAnalyticsLogging",onChange:this.setValue,label:"Help developers to identify what features are being used much"})})]}),p&&!!e[0]&&(0,j.jsxs)(d.lE,{children:[(0,j.jsx)("td",{children:"Enable tracking exceptions (Anynmous)"}),(0,j.jsx)("td",{colSpan:s.length+1,children:(0,j.jsx)(c.XZ,{checked:!1!==e[0].enableExceptionLogging,args:e[0],field:"enableExceptionLogging",onChange:this.setValue,label:"Help developers to identify what errors occur for users and would help in fixing it soon"})})]}),x&&!!e[0]&&(0,j.jsxs)(d.lE,{children:[(0,j.jsx)("td",{children:"Disable notifications from developer"}),(0,j.jsx)("td",{colSpan:s.length+1,children:(0,j.jsx)(c.XZ,{checked:e[0].disableDevNotification,args:e[0],field:"disableDevNotification",onChange:this.setValue,label:"Do not show important informations and bug notifications from developer"})})]})]})]}),(0,j.jsxs)("div",{className:"footer",children:[(0,j.jsx)(c.zx,{className:"pull-right",icon:"fa fa-save",label:"Save settings",type:"success",onClick:this.saveSettings}),(0,j.jsx)("strong",{children:"Note:"}),(0,j.jsx)("br",{}),"Changing these settings may cause application stability issues or lose in data. Be cautious with the changes you make.",(0,j.jsx)("br",{}),"Some settings would take effect only once you reopen Jira Assistant."]})]})}}const b=f}}]);