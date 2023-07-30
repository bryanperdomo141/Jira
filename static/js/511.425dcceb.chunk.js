"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[511],{7154:(t,e,s)=>{s.d(e,{T:()=>l,Z:()=>n});var i=s(6666),o=s(1404),r=s.n(o),a=s(2805);class n{constructor(){const t=new(r().Workbook);t.created=new Date,t.creator="Jira Assistant",t.lastModifiedBy="Jira Assistant",this.document=t}addTable(t){t=i(t);const e=this.normalizeSheetName(t.attr("export-sheet-name"));console.log("Exporting ",e),this.worksheet=this.document.addWorksheet(e),this.sheetOptions={mergeCells:[],width:{},styles:[],rowsToRemove:[],rowsToHide:[]},this.curRowNum=1;const s=t.find("> thead:not([exportignore]) > tr:not([exportignore])");this.prepareData(s),console.log("header rows",s.length);const o=t.find("> tbody:not([exportignore]) > tr:not([exportignore])");this.prepareData(o),console.log("bodyRows rows",o.length),this.worksheet.views=[{state:"frozen",xSplit:0,ySplit:s.length}],this.sheetOptions.mergeCells.forEach((t=>this.worksheet.mergeCells(t)));const r=this.sheetOptions.width;Object.keys(r).forEach((t=>{const e=this.worksheet.getColumn(t),s=parseFloat(r[t])/7.178;e.width=s})),this.sheetOptions.styles.forEach((t=>{const e=this.worksheet.getCell(t.key),s=t.style,i={};"left"!==s.textAlign&&(i.horizontal=s.textAlign),"left"!==s.verticalAlign&&(i.vertical=s.verticalAlign),e.alignment=i;const o=s.fontWeight||"";e.style.font={size:this.getFontSize(s.fontSize),bold:o.indexOf("bold")>-1||o>=550}})),this.sheetOptions.rowsToHide.forEach((t=>this.worksheet.getRow(t).hidden=!0)),this.sheetOptions.rowsToRemove.orderByDescending().forEach((t=>this.worksheet.spliceRows(t,1))),this.worksheet=null,this.sheetOptions=null,this.curRowNum=null}normalizeSheetName(t){return t?t.replace(/\[/g,"(").replace(/\]/g,")").replace(/:/g,"-").replace(/[?/\\]/g,""):t}trim(t){return t.replace(/^\s+|\s+$/gm,"")}getFontSize(t){return t?t.endsWith("px")?.75*parseInt(t.replace("px",""),10):t.endsWith("pt")?parseInt(t.replace("pt",""),10):t.endsWith("em")?.0833333*parseInt(t.replace("em",""),10):void 0:t}rgbaToHex(t){if(!t)return t;const e=t.substring(t.indexOf("(")).split(","),s=parseInt(this.trim(e[0].substring(1)),10),i=parseInt(this.trim(e[1]),10),o=parseInt(this.trim(e[2]),10);e[3]=e[3]||"1)";const r=parseFloat(this.trim(e[3].substring(0,e[3].length-1))).toFixed(2);return this.fixSize(s.toString(16))+this.fixSize(i.toString(16))+this.fixSize(o.toString(16))+this.fixSize((255*r).toString(16).substring(0,2))}fixSize(t){return 1===t.length?`0${t}`:t}prepareData(t){const e=this.worksheet,s=[];t.each(((t,o)=>{o=i(o);const r=this.getColArray(o,s);if(r){e.addRow(r).commit(),this.curRowNum++}}))}getColArray(t,e){const s=t.find("> th, > td"),o=[],r=!!t.attr("exportignore");return r&&this.sheetOptions.rowsToRemove.push(this.curRowNum),t.attr("exporthidden")&&this.sheetOptions.rowsToHide.push(this.curRowNum),s.each(((t,s)=>{for(;e[o.length]>0;)e[o.length]=e[o.length]-1,o[o.length]=null;let a=(s=i(s)).attr("exportValue");if(a||(a=s.text()),a&&!r){a=a.trim();switch(s.attr("exportType")){case"int":a=function(t){if(!t)return t;const e=parseInt(t,10);return isNaN(e)?t:e}(a);break;case"float":case"number":a=function(t){if(!t)return t;const e=parseFloat(t);return isNaN(e)?t:e}(a);break;case"date":a=h(a,!0);break;case"datetime":a=h(a,!1)}}o[o.length]=a;let n=s.attr("colspan")||1;const l=(s.attr("rowspan")||1)-1;l&&(e[o.length-1]=l);const c=this.numToChar(o.length),d=this.curRowNum;if(n>1||l>0){const t=this.numToChar(o.length+(n-1)),e=this.curRowNum+l;this.sheetOptions.mergeCells.push(`${c+d}:${t}${e}`)}if(!r){if(!n||n<2){const t=s.width();t>20&&(this.sheetOptions.width[c]=t)}this.sheetOptions.styles.push({key:c+d,style:window.getComputedStyle(s.get(0),null)})}for(;n>1;)n-=1,o[o.length]=null,l&&(e[o.length-1]=l)})),o}export(t){this.document.xlsx.writeBuffer().then((e=>{const s=new Blob([e],{type:"application/octet-stream"});(0,a.po)(s,`${t}.xlsx`)}))}charToNum(t){for(let e=0,s=1;e<s;e++,s++)t==this.numToChar(e)&&(s=e)}numToChar(t){const e=(t-1)%26,s=this.chr(65+e),i=parseInt((t-1)/26,10);return i>0?this.numToChar(i)+s:s}chr(t){return t>65535?(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t))):String.fromCharCode(t)}}const l={XLSX:"XLSX",CSV:"CSV",PDF:"PDF"};function h(t,e){if(!t)return t;const s=new Date(t);return isNaN(s.getTime())?t:s}},4918:(t,e,s)=>{s.d(e,{Xk:()=>f.X,ZP:()=>C,jn:()=>v});var i=s(7313),o=s(9642),r=s(2328),a=s(8041),n=s(1649),l=s(6123),h=s.n(l),c=s(1485),d=s(6666),g=s(5508),u=(s(8695),s(7154)),p=s(2805);class m{export(){this.format&&"XLSX"===this.format.toUpperCase()?this.exportToXlsx():this.format&&this.format===u.T.PDF?this.exportToPDF():this.exportToCsv()}exportToXlsx(){const t=d(this.element),e=new u.Z(u.T.XLSX);t.find("table.exportable").each(((t,s)=>e.addTable(s))),e.export(this.fileName)}exportToCsv(){let t=d(this.element);t.is("table")||(t=t.find("table.exportable")),this.exportTable(t,t.attr("export-sheet-name")||this.fileName||"download")}exportToPDF(){const t=d(this.element).find("table.exportable:first-child"),e=t.attr("export-sheet-name")||this.fileName||"download",s=new g.default({orientation:"landscape",unit:"in",format:"a3"});s.autoTable({html:t.get(0)}),s.save(`${e}.pdf`)}exportTable(t,e){const s=[];let i=null;function o(t,e){const s=[];t.each(((t,i)=>{d(i).children("th,td").each(((i,o)=>{o=d(o);let r=s[t];for(r||(r=s[t]=[]);null!=r[i];)i++;const a=e[i];a&&a.noExport||(e[i]={noExport:o.is("[no-export]")||o.is(":hidden")&&!o.is("[force-export]")}),r[i]=function(t){const e={encode:!0,trim:!0};let s=t.attr("export-option");s=s&&s.length>10?{...e,...JSON.parse(s)}:e;const i=t.find("[export-data]:first");let o=(t.attr("export-data")||i.attr("export-data")||i.text()||t.text()).replace(/\r?\n|\r/g," ");return s.trim&&(o=o.trim()),o.indexOf('"')>=0&&(o=o.replace(/"/g,'""')),s.encode&&o.indexOf(",")>=0&&(o=`"${o}"`),o}(o);let n=parseInt(o.attr("colspan"));for(;n>1;)r[i+n-1]="",n--;let l=parseInt(o.attr("rowspan"));for(;l>1;){let e=s[t+l-1];e||(e=s[t+l-1]=[]),e[i]="",l--}}))}));let i="";for(let r=0;r<s.length;r++){let t="";const a=s[r];for(let s=0;s<a.length;s++){var o;null!==(o=e[s])&&void 0!==o&&o.noExport||(t+=`,${a[s]||""}`)}i+=`${t.substring(1).replace(/\r?\n|\r/g," ")}\r\n`}return i}i="string"===typeof t?o(d(`#${t} thead:not([no-export]) tr:not([no-export]):visible`),s)+o(d(`#${t} tbody:visible tr:not([no-export]):visible`),s):o(t.find("thead:not([no-export]) tr:not([no-export]):visible"),s)+o(t.find("tbody:visible tr:not([no-export]):visible"),s),(0,p.ut)(i,e)}}var f=s(551),x=s(6310),k=s(6444),w=s(9149),S=s(6417);const v=new a.EventEmitter;let b=0;class y extends i.PureComponent{constructor(t,e,s){super(t),this.eventReceived=t=>this.executeEvent(t),this.toggleFullScreen=()=>{let{isFullScreen:t}=this.state;t=!t,this.$analytics.trackEvent("Toggle full screen",k.Jk.GadgetActions,this.title,t),t?document.body.classList.add("fs-layout"):document.body.classList.remove("fs-layout"),this.columnResizeMode=t?"fit":"expand",this.setState({isFullScreen:t})},this.addWorklogOn=t=>{this.addWorklog({ticketNo:t})},this.removeGadget=()=>{this.$analytics.trackEvent("Gadget removed",k.Jk.GadgetActions,this.title),this.performAction(f.X.RemoveGadget)},this.setLoader=t=>this.setState({isLoading:t}),this.exportData=t=>{const e=new m;e.fileName=this.title,e.format=t||this.exportFormat,e.element=this.el,this.$analytics.trackEvent("Export data",k.Jk.GadgetActions,e.format),e.export()},this.showGadgetContextMenu=t=>(0,c.pT)(t,this.getContextMenu()),this.getHeader=()=>{const{title:t,subTitle:e,isGadget:s,props:{draggableHandle:i}}=this,o="gadget-header"+(i?" movable":"");return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{ref:i,className:o,onContextMenu:s?this.showGadgetContextMenu:null,onDoubleClick:this.toggleFullScreen,children:[(0,S.jsx)("i",{className:`fa ${this.iconClass}`})," ",t," ",e&&(0,S.jsxs)("span",{children:[" - ",e]}),(0,S.jsxs)("div",{className:"float-end",children:[this.getTooltipElement(),this.renderCustomActions&&this.renderCustomActions(s),!this.hideRefresh&&this.getRefreshButton(),!this.hideMenu&&(0,S.jsx)(n.zx,{text:!0,icon:"fa fa-wrench",onClick:t=>(0,c.pT)(t,this.getContextMenu())})]})]}),(0,S.jsx)("div",{className:"clearfix"})]})},this.setRef=t=>{this.el=t;const{dropProps:{dropConnector:e}={}}=this.props;e&&e(t)},(0,x.f3)(this,"AnalyticsService"),this.instanceId=++b,this.title=e,this.iconClass=s,this.isGadget=!1!==t.isGadget,this.settings=t.settings||{fullWidth:!1,fullHeight:!1};const{fullWidth:i=!1,fullHeight:o=!1}=this.settings;this.state={fullWidth:i,fullHeight:o}}getContextMenu(){const{isFullScreen:t,fullWidth:e,fullHeight:s}=this.state,i=this.isGadget?[{separator:!0},{label:"Full width",icon:`fa fa-${e?"check-":""}circle fs-16 margin-r-5`,command:()=>this.setSizeOptions(!e,s)},{label:"Full height",icon:`fa fa-${s?"check-":""}circle fs-16 margin-r-5`,command:()=>this.setSizeOptions(e,!s)},{separator:!0},{label:"Remove",icon:"fa fa-remove",command:()=>this.removeGadget()}]:[],o=[];return this.hideExport||(o.push({separator:!0}),this.hideCSVExport||o.push({label:"Export to CSV",icon:"fa fa-file-text",disabled:!this.exportData,command:()=>this.exportData(u.T.CSV)}),this.hideXLSXExport||o.push({label:"Export to Excel",icon:"fa fa-file-excel",disabled:!this.exportData,command:()=>this.exportData(u.T.XLSX)}),this.hidePDFExport||o.push({label:"Export to PDF",icon:"fa fa-file-pdf",disabled:!this.exportData,command:()=>this.exportData(u.T.PDF)})),[{label:"Toggle full screen",icon:"fa fa-"+(t?"compress":"expand"),command:()=>this.toggleFullScreen()},...o,...i]}componentDidMount(){this.isGadget&&(v.on("change",this.eventReceived),this.$analytics.trackEvent("Gadget loaded",k.Jk.GadgetActions,this.title)),this._isMounted=!0}componentWillUnmount(){v.off("change",this.eventReceived)}setSizeOptions(t,e){const{settings:s}=this;s.fullWidth=t,s.fullHeight=e,this.setState({fullWidth:t,fullHeight:e}),this.saveSettings()}UNSAFE_componentWillReceiveProps(t){if(this.settings!==t.settings){this.settings=t.settings||{};const{fullWidth:e,fullHeight:s}=this.settings;this.setState({fullWidth:e,fullHeight:s})}}performAction(t,e){const{onAction:s}=this.props;s&&s({type:t,data:e},this.props.model,this.props.index)}addWorklog(t){this.performAction(f.X.AddWorklog,t)}editWorklog(t){this.performAction(f.X.AddWorklog,{id:t})}saveSettings(){this.performAction(f.X.SettingsChanged,this.settings)}executeEvent(t){}getFullScreenButton(){if(this.isGadget)return null;const{state:{isFullScreen:t}}=this;return(0,S.jsx)(n.zx,{text:!0,icon:t?"fa fa-compress":"fa fa-expand",onClick:this.toggleFullScreen,title:"Toggle full screen"})}getRefreshButton(t){const{disableRefresh:e,isLoading:s}=this.state;return(0,S.jsx)(n.zx,{text:!0,icon:"fa fa-refresh",disabled:e||s,onClick:t||this.refreshData,title:"Refresh data"})}getTooltipElement(){return this.getHint?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(r.u,{target:`.icon-hint-${this.instanceId}`,children:this.getHint()}),(0,S.jsx)("i",{className:`fa fa-info-circle icon-hint icon-hint-${this.instanceId}`,"data-pr-position":"bottom"})]}):null}renderBase(t){const{fullWidth:e,fullHeight:s,isLoading:i,isFullScreen:r}=this.state,{isGadget:a,props:{tabLayout:l,gadgetType:c}}=this;if(l)return(0,S.jsxs)(S.Fragment,{children:[t,this.renderFooter&&this.renderFooter()]});const d=e||!a,g=s||!a,u=h()("gadget",this.className,{docked:!a,"full-width":d&&!r,"full-height":g&&!r,"half-width":!d&&!r,"half-height":!g&&!r,"full-screen":r});return(0,S.jsxs)("div",{ref:this.setRef,className:u,"data-test-id":c,children:[i&&(0,S.jsx)(n.aN,{}),(0,S.jsxs)(o.Panel,{header:this.getHeader(),children:[t,this.renderFooter&&this.renderFooter()]})]})}render(){return(0,S.jsx)("div",{ref:this.setRef,className:"gadget half-width half-height",children:(0,S.jsx)(o.Panel,{header:"Gadget Unavailable",children:(0,S.jsxs)("div",{className:"pad-22",children:["This section contains an un-known gadget.",w.RX&&"You could have added a new Gadget from Web version which is not yet available in extension. ",w.RX&&"If not, please report about this issue to have it fixed!",!w.RX&&"Please report about this issue to have it fixed!"]})})})}}const C=y},1499:(t,e,s)=>{s.d(e,{Z:()=>d});s(7313);var i=s(4918),o=s(3997),r=s.n(o),a=s(1649),n=s(4616),l=s(794),h=s(6417);class c extends i.ZP{constructor(t,e,s){super(t,`Bulk import - [${e}]`,s),this.fileSelected=()=>{const t=this.fileSelector,e=t.files[0];if(e){if(!e.name.endsWith(".csv"))return this.$message.warning("Unknown file selected to import. Select a valid file to import"),void(t.value="");r().parse(e,{header:!0,transformHeader:this.transformHeader,skipEmptyLines:"greedy",complete:t=>{const{data:e}=t;e&&e.length||this.$message.warning("No rows found to import","No records exists"),this.processData(e)}})}t.value=""},this.getTicketLink=t=>(0,h.jsx)(l.Z,{className:"link",href:this.$userutils.getTicketUrl(t),children:t}),this.setFileSelector=t=>this.fileSelector=t,this.chooseFileForImport=()=>this.fileSelector.click(),(0,n.f3)(this,"UserUtilsService"),this.isGadget=!1,this.hideRefresh=!0}formatDate(t){return t instanceof Date?this.$userutils.formatDateTime(t):t}renderCustomActions(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("input",{ref:this.setFileSelector,type:"file",className:"hide",accept:".csv,.json, .xlsx",onChange:this.fileSelected}),(0,h.jsx)(a.zx,{text:!0,icon:"fa fa-upload",onClick:this.chooseFileForImport,title:"Choose file to import"})]})}}const d=c},5511:(t,e,s)=>{s.r(e),s.d(e,{default:()=>w});s(7313);var i=s(1329),o=s(1499),r=s(4616),a=s(1649),n=s(2805),l=s(794),h=s(6417);const c="Will Import",d="Error",g="Excluded",u="ticketNo",p="startDate",m="timespent",f="comment",x={ticketno:u,ticket:u,issuekey:u,issue:u,key:u,id:u,startdate:p,started:p,logdate:p,loggeddate:p,worklogdate:p,date:p,timespent:m,timespentseconds:m,seconds:m,hoursspent:m,time:m,spent:m,comment:f,comments:f,description:f,details:f};class k extends o.Z{constructor(t){super(t,"Worklog","fa fa-clock"),this.transformHeader=t=>t&&"string"===typeof t&&x[t.replace(/ /g,"").toLowerCase()]||null,this.importWorklogs=()=>{const{autoUpload:t,worklogData:e}=this.state,s=e.filter((t=>t.selected));if(t)this.uploadSelectedWorklogs(s);else{const t=s.map((t=>{t.selected=!1,t.disabled=!0;const{ticketNo:e,startDate:s,timespent:i,comment:o}=t,r=Math.floor(i/3600),a=Math.floor(i%3600/60),n={ticketNo:e,dateStarted:s,timeSpent:`${r.pad(2)}:${a.pad(2)}`,description:o};return this.$worklog.saveWorklog(n).then((e=>{t.id=e.id,t.status="Imported. Not Uploaded"}),(e=>{t.status=d,t.error=e}))}));Promise.all(t).then((()=>{this.$message.info("Worklog import completed. Upload it to Jira from Calendar or Worklog gadget."),this.setState({worklogData:[...e],selectedCount:""})}))}},this.toggleAllRows=()=>{let{selectAll:t,worklogData:e}=this.state;if(!e)return;t=!t;const s=t?c:g;e=[...e],e.forEach((e=>{e.disabled||(e.selected=t,e.status=s)})),this.setState({selectAll:t,worklogData:e,selectedCount:this.getSelectedLogs(e).length||""})},this.getSelectedLogs=t=>(t||this.state.worklogData).filter((t=>t.selected)),this.toggleAutoUpload=t=>this.setState({autoUpload:t}),this.toggleSelection=(t,e)=>{let{worklogData:s}=this.state;s=[...s],t.selected=!t.selected,t.status=t.selected?c:g,this.setState({worklogData:s,selectedCount:this.getSelectedLogs(s).length||""})},this.downloadTemplate=()=>{const t=(new Date).format("dd-MMM-yyyy HH:mm:ss"),e=["Ticket No,Start Date,Timespent,Comment",`JA-1001,${t},1w 2d 3h 4m,Logs 59 hours and 4 mins`,`JA-1001,${t},1d 1h,Logs 9 hours`,`JA-1002,${t},12.5,Logs 12 hours and 30 mins`,`JA-1003,${t},14:4,Logs 14 hours and 40 mins`,`JA-1003,${t},8,Logs 8 hours`];(0,n.ut)(e.join("\n"),"sample_worklog")},this.clearWorklogs=()=>{this.$q.reset(),this.setState({isLoading:!1,selectedCount:"",worklogData:null,ticketSummary:{},selectAll:!1})},(0,r.f3)(this,"UtilsService","UserUtilsService","TicketService","QueueService","WorklogService","SessionService","MessageService"),this.maxHrsToLog=this.$session.CurrentUser.maxHours;const e=this.$session.CurrentUser.autoUpload||!1;this.state={autoUpload:e,ticketSummary:{},selectedCount:""},this.$q.on("completed",(()=>{this.$message.info("Worklog upload completed"),this.setState({isLoading:!1,selectedCount:""})}))}processData(t){const e=t.map((t=>{let{ticketNo:e="",startDate:s="",timespent:i="",comment:o=""}=t;e=e.trim(),s=s.trim(),i=i.trim(),o=o.trim();let r=!0,a=!1,l=c,h="";const d=t=>{r=!1,a=!0,l="Invalid",h?h+=`;${t}`:h=t};if(e||d("Ticket No is required"),s){const t=this.$utils.convertDate(s);t instanceof Date?s=t:d("Log Date is invalid")}else d("Log Date is required");if(i){const t=(0,n.ZQ)(i);t>0?i=t:d("Timespent is invalid")}else d("Timespent is required");return{selected:r,disabled:a,status:l,error:h,ticketNo:e,startDate:s,timespent:i,comment:o}})),s=this.getSelectedLogs(e),i=s.map((t=>t.ticketNo)).distinct();this.$ticket.getTicketDetails(i,!0).then((t=>{const e=t.reduce(((t,e)=>{const{key:s,fields:{summary:i,assignee:o,issuetype:{iconUrl:r,name:a}={}}}=e,{displayName:n}=o||{};return t[s]={summary:i,assignee:n,issueTypeIcon:r,issueType:a},t}),{});this.setState({ticketSummary:e})}));const o=i.reduce(((t,e)=>(t[e]={summary:"Loading..."},t)),{});this.setState({worklogData:e,ticketSummary:o,selectAll:!0,selectedCount:s.length||""})}uploadSelectedWorklogs(t){t.groupBy((t=>t.ticketNo)).forEach((t=>{this.$q.add((()=>{const e=t.values;return 1===e.length?this.uploadWorklog(e[0]):e.reduce((async(t,e)=>(await t,this.uploadWorklog(e))),Promise.resolve())}))})),this.$q.start()}uploadWorklog(t){const{ticketNo:e,startDate:s,timespent:i,comment:o}=t;t.status="Uploading...",this.setState((({worklogData:t})=>({worklogData:[...t]})));return this.$worklog.upload(e,s,1e3*i,o).then((e=>{t.disabled=!0,t.selected=!1,t.status="Uploaded",t.worklogId=e.id,this.setState((({worklogData:t})=>({worklogData:[...t]})))}),(e=>{const{message:s,response:i,status:o,error:{errors:r,errorMessages:a}={}}=e;t.disabled=!0,t.selected=!1,t.status=d;const n=r&&Object.keys(r);return s?t.error=s:null!==n&&void 0!==n&&n.length?t.error=n.reduce(((t,e)=>{const s=r[e];return t?`${t}; ${s}`:s}),""):null!==a&&void 0!==a&&a.length?t.error=a.reduce(((t,e)=>t?`${t}; ${e}`:e),""):(null===i||void 0===i?void 0:i.length)>5&&i.length<=100?t.error=i:o&&(t.error=`Status Code: ${o}`),this.setState((({worklogData:t})=>({worklogData:[...t]}))),Promise.resolve()}))}formatTimespent(t){return"number"===typeof t?this.$utils.formatSecs(t):t}renderFooter(){const{state:{autoUpload:t,isLoading:e,selectedCount:s}}=this;return(0,h.jsxs)("div",{className:"pnl-footer",children:[(0,h.jsx)("div",{className:"float-start",children:(0,h.jsx)(a.XZ,{checked:t,label:"Directly upload worklog to Jira",disabled:e,onChange:this.toggleAutoUpload})}),(0,h.jsxs)("div",{className:"float-end",children:[(0,h.jsx)(a.zx,{text:!0,type:"info",icon:"fa fa-list",label:"Clear",disabled:e,onClick:this.clearWorklogs}),(0,h.jsx)(a.zx,{type:"success",icon:t?"fa fa-upload":"fa fa-save",disabled:e||!(s>0),label:t?`Upload ${s} worklogs`:`Import ${s} worklogs`,onClick:this.importWorklogs})]})]})}getWorklogLink(t){const{ticketNo:e,worklogId:s,status:i}=t;return(0,h.jsx)(l.Z,{className:"link",href:this.$userutils.getWorklogUrl(e,s),children:i})}render(){const{worklogData:t,ticketSummary:e,selectAll:s}=this.state;return super.renderBase((0,h.jsx)("div",{className:"import-worklog",children:(0,h.jsxs)(i.TT,{dataset:t,className:"worklog-table",children:[(0,h.jsx)(i.Et,{children:(0,h.jsxs)(i.lE,{children:[(0,h.jsx)(i.sg,{children:(0,h.jsx)(a.XZ,{checked:s,onChange:this.toggleAllRows})}),(0,h.jsx)(i.sg,{sortBy:"ticketNo",children:"Ticket No"}),(0,h.jsx)(i.sg,{children:"Issue Type"}),(0,h.jsx)(i.sg,{children:"Summary"}),(0,h.jsx)(i.sg,{sortBy:"startDate",children:"Log Date"}),(0,h.jsx)(i.sg,{sortBy:"timespent",children:"Timespent"}),(0,h.jsx)(i.sg,{children:"Comment"}),(0,h.jsx)(i.sg,{children:"Assignee"}),(0,h.jsx)(i.sg,{sortBy:"status",children:"Status"})]})}),(0,h.jsx)(i.XP,{children:(t,s)=>{const i=e[t.ticketNo]||null,o=i||{summary:"Unavailable"};return(0,h.jsxs)("tr",{className:t.error?"row-error":"",children:[(0,h.jsx)("td",{children:(0,h.jsx)(a.XZ,{checked:t.selected,disabled:t.disabled,onChange:()=>this.toggleSelection(t,s)})}),i&&(0,h.jsx)("td",{children:this.getTicketLink(t.ticketNo)}),!i&&(0,h.jsx)("td",{children:t.ticketNo}),(0,h.jsxs)("td",{children:[o.issueTypeIcon&&(0,h.jsx)("img",{src:o.issueTypeIcon,alt:""})," ",o.issueType]}),(0,h.jsx)("td",{children:o.summary}),(0,h.jsx)("td",{children:this.formatDate(t.startDate)}),(0,h.jsx)("td",{children:this.formatTimespent(t.timespent)}),(0,h.jsx)("td",{children:t.comment}),(0,h.jsx)("td",{children:o.assignee}),t.worklogId&&(0,h.jsx)("td",{title:"Worklog uploaded successfully",children:this.getWorklogLink(t)}),!t.worklogId&&(0,h.jsxs)("td",{title:t.error,children:[t.error&&(0,h.jsx)("span",{className:"fa fa-exclamation-triangle msg-error"})," ",t.status]})]},s)}}),(0,h.jsxs)(i.ch,{span:9,children:["Upload the list of worklogs by clicking the ( ",(0,h.jsx)("span",{className:"fa fa-upload"})," ) icon in top right corner. Click ",(0,h.jsx)("span",{className:"link",onClick:this.downloadTemplate,children:"here"})," to download a sample template."]})]})}))}}const w=k}}]);