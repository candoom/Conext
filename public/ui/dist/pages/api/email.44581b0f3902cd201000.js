webpackJsonp([3],{"0DSM":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-alert",{attrs:{outline:"",type:"error",value:e.error}},[e._v("\n    "+e._s(e.error)+"\n  ")]),a("p",[e._v("Test the email template is working by sending a real email message.")]),a("v-form",{ref:"form",attrs:{lazy:""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("h3",[e._v("Recipient")]),a("v-text-field",{attrs:{label:"To:",rules:e.emailRules,hint:"Enter the recipients email address."},model:{value:e.to,callback:function(t){e.to=t},expression:"to"}}),e.parameters.length>0?a("div",[a("h3",[e._v("Paramiters")]),a("p",[e._v("The following parameters were matched from the templates source, they should be sent in the POST request when sending from your application.")]),e._l(e.parameters,function(t){return a("v-text-field",{key:t.key,attrs:{label:t.key,hint:"Enter value for parameter."},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"parameter.value"}})})],2):e._e()],1),a("h3",[e._v("Example Codes")]),a("p",[e._v("Below are some code snippets, which show how you would send the parameters in a POST request from your application.")]),a("h4",[e._v("Javascript (axios)")]),a("no-ssr",{attrs:{placeholder:"Loading..."}},[a("codemirror",{staticClass:"codeExamplesJS",attrs:{options:e.cmOption},model:{value:e.exampleJs,callback:function(t){e.exampleJs=t},expression:"exampleJs"}})],1),a("br"),a("h4",[e._v("PHP (curl)")]),a("no-ssr",{attrs:{placeholder:"Loading..."}},[a("codemirror",{staticClass:"codeExamplesPHP",attrs:{options:e.cmOption},model:{value:e.examplePHP,callback:function(t){e.examplePHP=t},expression:"examplePHP"}})],1)],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};t.a=r},"26Cp":function(e,t,a){"use strict";var i=a("NicH"),r=a("0DSM"),s=!1;var o=function(e){s||a("yHXF")},n=a("VU/8")(i.a,r.a,!1,o,null,null);n.options.__file="components/api/email/test.vue",t.a=n.exports},"3rEl":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".CodeMirror{border:1px solid #eee;height:auto;font-family:Ubuntu Mono,Menlo,Consolas,monospace;font-size:13px;line-height:1.1em}.CodeMirror,.CodeMirror-scroll{min-height:calc(100vh - 350px)}.CodeMirror-gutters{left:0!important}",""])},"93ad":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".codeExamplesJS .CodeMirror{border:1px solid #eee;font-family:Ubuntu Mono,Menlo,Consolas,monospace;font-size:13px;line-height:1.1em}.codeExamplesJS .CodeMirror,.codeExamplesJS .CodeMirror-scroll{height:190px!important;min-height:190px!important}.codeExamplesPHP .CodeMirror{border:1px solid #eee;font-family:Ubuntu Mono,Menlo,Consolas,monospace;font-size:13px;line-height:1.1em}.codeExamplesPHP .CodeMirror,.codeExamplesPHP .CodeMirror-scroll{height:255px!important;min-height:255px!important}",""])},J01r:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("xQUo"),r=a("kBAq"),s=!1;var o=function(e){s||a("K7+4")},n=a("VU/8")(i.a,r.a,!1,o,null,null);n.options.__file="pages/api/email.vue",t.default=n.exports},"K7+4":function(e,t,a){var i=a("3rEl");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("213f71af",i,!1,{sourceMap:!1})},NicH:function(e,t,a){"use strict";var i=a("Xxa5"),r=a.n(i),s=a("exGp"),o=a.n(s),n=a("woOf"),l=a.n(n),c=a("mvHQ"),d=a.n(c),m=a("Dd8w"),p=a.n(m),u=a("NYxO"),v=a("mtWM"),h=a.n(v);t.a={components:{},props:["item"],computed:p()({},Object(u.mapGetters)({loggedUser:"auth/loggedUser",loggedToken:"auth/loggedToken"}),{axiosParams:function(){var e={};return e.to=this.to,this.parameters.forEach(function(t){e[t.key]=t.value}),e},curlParams:function(){var e="";return e+="'to' => '"+this.to+"',\n",this.parameters.forEach(function(t){e+="    '"+t.key+"' => '"+t.value+"',\n"}),e},exampleJs:function(){return"axios.post('"+this.loggedUser.sub+"/api/email/"+this.template.slug+"', "+d()(this.axiosParams,null,2)+").then(response => {\n  console.log(response);\n}).catch(error => {\n  console.log(error);\n});"},examplePHP:function(){return"$ch = curl_init('"+this.loggedUser.sub+"/api/email/"+this.template.slug+"');\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($ch, CURLOPT_POSTFIELDS, [\n    "+this.curlParams+"]);\n\n$response = curl_exec($ch);\ncurl_close($ch);"}}),data:function(){return{cmOption:{smartIndent:!1,indentWithTabs:!0,tabSize:4,indentUnit:4,foldGutter:!0,styleActiveLine:!0,lineNumbers:!1,line:!0,readOnly:!0,keyMap:"sublime",mode:"text/x-php"},error:"",valid:!0,template:{},to:"",parameters:[],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(e)||"E-mail must be valid"}]}},beforeDestroy:function(){},mounted:function(){this.template=l()({},this.item),-1!==this.item.id&&this.initialize()},methods:{initialize:function(){var e=o()(r.a.mark(function e(){var t,a,i=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.to=this.$storage.get("test_email")||"",""!==this.template.key&&this.parameters.push({key:"key",value:this.template.key,required:!0}),(t=this.template.subject.match(/\{\{[ ]{0,}([\w\_-]{1,})[ ]{0,}\}\}/gi))&&t.forEach(function(e){i.parameters.push({key:e.replace("{{","").replace("}}","").trim(),value:"",required:!1})}),(a=this.template.source.match(/\{\{[ ]{0,}([\w\_-]{1,})[ ]{0,}\}\}/gi))&&a.forEach(function(e){i.parameters.push({key:e.replace("{{","").replace("}}","").trim(),value:"",required:!1})});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),send:function(){var e=o()(r.a.mark(function e(){var t=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.$refs.form.validate()&&h.a.post(this.loggedUser.sub+"/api/email/"+this.template.slug,this.axiosParams).then(function(e){e.data.error?t.error=e.data.error+"!":(t.$storage.set("test_email",t.axiosParams.to),t.$emit("snackbar","Test email sent!"))}).catch(function(e){t.error="Test email failed to send!"});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}},kBAq:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-snackbar",{attrs:{top:"",timeout:e.snackbarTimeout,color:e.snackbarColor},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.snackbarText)+"\n    "),a("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1),a("v-content",[a("v-container",{attrs:{fluid:"",tag:"section",id:"grid"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"","order-xs5":""}},[a("v-layout",{attrs:{column:""}},[a("v-flex",{staticClass:"display mb-2",attrs:{tag:"h1"}},[e._v("\n              API - Email\n              \n              "),"templates"==e.state?a("span",["templates"==e.state?a("v-btn",{staticStyle:{float:"right"},attrs:{color:"success"},on:{click:function(t){e.state="templates",e.dialog.template=!0}}},[e._v("New Template")]):e._e(),"templates"==e.state?a("v-btn",{staticStyle:{float:"right"},attrs:{color:"orange"},on:{click:function(t){e.state="providers"}}},[e._v("Providers")]):e._e()],1):e._e(),"providers"==e.state?a("span",["providers"==e.state?a("v-btn",{staticStyle:{float:"right"},attrs:{color:"success"},on:{click:function(t){e.state="providers",e.dialog.provider=!0}}},[e._v("New Provider")]):e._e(),"providers"==e.state?a("v-btn",{staticStyle:{float:"right"},attrs:{color:"orange"},on:{click:function(t){e.state="templates"}}},[e._v("Templates")]):e._e()],1):e._e()]),a("v-flex",[a("v-alert",{attrs:{type:"error",value:e.error}},[e._v("\n                "+e._s(e.error)+"\n              ")]),a("p",[e._v("The email API allows you to create custom email templates with multiple providers, then simply use a POST request to send the email.")]),"templates"==e.state?a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.tableHeaders.template,items:e.items.template,"hide-actions":"",loading:e.tableLoading},scopedSlots:e._u([{key:"items",fn:function(t){return[a("tr",{on:{click:function(a){a.stopPropagation(),e.tableExpand("template",t)}}},[a("td",[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){a.stopPropagation(),e.editItem("template",t.item)}}},[e._v(e._s(t.item.name))])]),a("td",[a("a",{attrs:{href:e.loggedUser.sub+"/api/email/"+t.item.slug,target:"_blank"}},[e._v(e._s(t.item.slug))])]),a("td",[e._v(e._s(t.item.subject))]),a("td",[e._v(e._s(t.item.type))]),a("td",[a("v-tooltip",{attrs:{left:""}},[a("v-btn",{staticClass:"mx-0",staticStyle:{float:"right"},attrs:{slot:"activator",icon:""},on:{click:function(a){e.deleteItem("template",t.item)}},slot:"activator"},[a("v-icon",{attrs:{color:"pink"}},[e._v("delete")])],1),a("span",[e._v("Delete")])],1),a("v-tooltip",{attrs:{left:""}},[a("v-btn",{staticClass:"mx-0",staticStyle:{float:"right"},attrs:{slot:"activator",icon:""},on:{click:function(a){e.previewItem("preview",t.item)}},slot:"activator"},[a("v-icon",{attrs:{color:"light-blue lighten-1"}},[e._v("visibility")])],1),a("span",[e._v("Preview")])],1),a("v-tooltip",{attrs:{left:""}},[a("v-btn",{staticClass:"mx-0",staticStyle:{float:"right"},attrs:{slot:"activator",icon:""},on:{click:function(a){e.testItem("testemail",t.item)}},slot:"activator"},[a("v-icon",{attrs:{color:"blue-grey darken-2"}},[e._v("bug_report")])],1),a("span",[e._v("Test")])],1)],1)])]}}])},[a("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}),a("template",{slot:"no-data"},[e._v("\n                    You have not added any email templates.\n                  ")])],2)],1):e._e(),"providers"==e.state?a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.tableHeaders.provider,items:e.items.provider,"hide-actions":"",loading:e.tableLoading},scopedSlots:e._u([{key:"items",fn:function(t){return[a("tr",[a("td",[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){a.stopPropagation(),e.editItem("provider",t.item)}}},[e._v(e._s(t.item.host))])]),a("td",[e._v(e._s(t.item.limit))]),a("td",[e._v(e._s(t.item.limit_sent))]),a("td",[a("v-btn",{staticClass:"mx-0",staticStyle:{float:"right"},attrs:{icon:""},on:{click:function(a){e.deleteItem("provider",t.item)}}},[a("v-icon",{attrs:{color:"pink"}},[e._v("delete")])],1),"Yes"==t.item.debug?a("v-btn",{staticClass:"mx-0",staticStyle:{float:"right"},attrs:{icon:""},on:{click:function(a){a.stopPropagation(),e.tableExpand("provider",t)}}},[a("v-icon",{attrs:{color:"blue-grey darken-2"}},[e._v("bug_report")])],1):e._e()],1)])]}},{key:"expand",fn:function(t){return[a("v-data-table",{attrs:{headers:e.expandedTableHeaders,items:t.item.ownAmsemaildebug,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("tr",{on:{click:function(e){e.stopPropagation(),t.expanded=!t.expanded}}},[a("td",[e._v(e._s(t.item.from))]),a("td",[e._v(e._s(t.item.to))]),a("td",[e._v(e._s(t.item.subject))]),a("td",[e._v(e._s(t.item.date))])])]}},{key:"expand",fn:function(t){return[a("v-card",{attrs:{flat:""}},[a("v-card-text",{domProps:{innerHTML:e._s(t.item.log?"<pre>"+t.item.log.replace(/<br\s*[\/]?>/gi,"")+"</pre>":"")}})],1)]}}])},[a("template",{slot:"no-data"},[e._v("\n                        "+e._s(e.tableLoading?"Fetching data, please wait...":"No debug logs have been recorded.")+"\n                      ")])],2)]}}])},[a("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}),a("template",{slot:"no-data"},[e._v("\n                    You have not added any email providers.\n                  ")])],2)],1):e._e()],1)],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600px",scrollable:""},model:{value:e.dialog.provider,callback:function(t){e.$set(e.dialog,"provider",t)},expression:"dialog.provider"}},[a("v-card",{attrs:{tile:""}},[a("v-toolbar",{attrs:{card:"",dark:"",color:"light-blue darken-3"}},[a("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(t){e.close("provider")}}},[a("v-icon",[e._v("close")])],1),a("v-toolbar-title",[e._v(e._s(-1===e.editingIndex.provider?"New":"Edit")+" Provider")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(t){e.save("provider")}}},[e._v("Save")])],1)],1),a("v-card-text",{staticStyle:{padding:"0px"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-form",{ref:"formprovider",attrs:{"lazy-validation":""},model:{value:e.valid.provider,callback:function(t){e.$set(e.valid,"provider",t)},expression:"valid.provider"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{label:"Host:",placeholder:"",required:"",hint:"Enter the SMTP connection hostname."},model:{value:e.editingItem.provider.host,callback:function(t){e.$set(e.editingItem.provider,"host",t)},expression:"editingItem.provider.host"}}),a("v-text-field",{attrs:{label:"Username:",placeholder:"",required:"",hint:"Enter the SMTP connection username."},model:{value:e.editingItem.provider.username,callback:function(t){e.$set(e.editingItem.provider,"username",t)},expression:"editingItem.provider.username"}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{label:"Port:",placeholder:"",required:"",hint:"Enter the SMTP connection port."},model:{value:e.editingItem.provider.port,callback:function(t){e.$set(e.editingItem.provider,"port",t)},expression:"editingItem.provider.port"}}),a("v-text-field",{attrs:{label:"Password:",placeholder:"",required:"",hint:"Enter the SMTP connection password."},model:{value:e.editingItem.provider.password,callback:function(t){e.$set(e.editingItem.provider,"password",t)},expression:"editingItem.provider.password"}})],1)],1),a("v-select",{attrs:{items:["None","TLS","SSL"],label:"Encryption:",hint:"Choose the SMTP connection encryption type."},model:{value:e.editingItem.provider.encryption,callback:function(t){e.$set(e.editingItem.provider,"encryption",t)},expression:"editingItem.provider.encryption"}}),a("v-text-field",{attrs:{label:"Message Limit:",placeholder:"",required:"",hint:"Enter the SMTP message limit."},model:{value:e.editingItem.provider.limit,callback:function(t){e.$set(e.editingItem.provider,"limit",t)},expression:"editingItem.provider.limit"}}),a("v-select",{attrs:{items:["Yes","No"],label:"Debug:"},model:{value:e.editingItem.provider.debug,callback:function(t){e.$set(e.editingItem.provider,"debug",t)},expression:"editingItem.provider.debug"}}),"Yes"===e.editingItem.provider.debug?a("p",{staticStyle:{"margin-top":"-20px",color:"rgba(0,0,0,0.54)","font-size":"12px"}},[e._v("All emails will be logged and shown in table.")]):e._e()],1)],1)],1)],1),a("div",{staticStyle:{flex:"1 1 auto"}})],1)],1),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:e.dialog.template,callback:function(t){e.$set(e.dialog,"template",t)},expression:"dialog.template"}},[a("v-card",{attrs:{tile:""}},[a("v-toolbar",{attrs:{card:"",dark:"",color:"light-blue darken-3"}},[a("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(t){e.close("template")}}},[a("v-icon",[e._v("close")])],1),a("v-toolbar-title",[e._v(e._s(-1===e.editingIndex.template?"New":"Edit")+" Template")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(t){e.save("template")}}},[e._v("Save")])],1)],1),a("v-card-text",{staticStyle:{padding:"0px"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-form",{ref:"formtemplate",attrs:{"lazy-validation":""},model:{value:e.valid.template,callback:function(t){e.$set(e.valid,"template",t)},expression:"valid.template"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{label:"Name:",placeholder:"",rules:e.nameRules,required:"",hint:"Enter the name of the email template."},model:{value:e.editingItem.template.name,callback:function(t){e.$set(e.editingItem.template,"name",t)},expression:"editingItem.template.name"}}),a("v-text-field",{attrs:{label:"Subject:",placeholder:"",required:"",hint:"Enter the email subject for this template."},model:{value:e.editingItem.template.subject,callback:function(t){e.$set(e.editingItem.template,"subject",t)},expression:"editingItem.template.subject"}}),a("v-select",{attrs:{items:["HTML","Plain"],label:"Type:",hint:"Choose the email template content type."},model:{value:e.editingItem.template.type,callback:function(t){e.$set(e.editingItem.template,"type",t)},expression:"editingItem.template.type"}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{label:"From:",placeholder:"",rules:e.emailRules,required:"",hint:"Enter the from email address."},model:{value:e.editingItem.template.from,callback:function(t){e.$set(e.editingItem.template,"from",t)},expression:"editingItem.template.from"}}),a("v-text-field",{attrs:{label:"Reply To:",placeholder:"",rules:e.emailRules,required:"",hint:"Enter the reply to email address."},model:{value:e.editingItem.template.replyto,callback:function(t){e.$set(e.editingItem.template,"replyto",t)},expression:"editingItem.template.replyto"}}),a("v-text-field",{attrs:{label:"Send Key:",placeholder:"",hint:"Enter a key which is required before sending email."},model:{value:e.editingItem.template.key,callback:function(t){e.$set(e.editingItem.template,"key",t)},expression:"editingItem.template.key"}})],1)],1),a("h3",[e._v("Template Source")]),a("no-ssr",{attrs:{placeholder:"Loading..."}},[a("codemirror",{attrs:{options:e.cmOption},model:{value:e.editingItem.template.source,callback:function(t){e.$set(e.editingItem.template,"source",t)},expression:"editingItem.template.source"}})],1)],1)],1)],1)],1),a("div",{staticStyle:{flex:"1 1 auto"}})],1)],1),a("v-dialog",{attrs:{"max-width":"900px",scrollable:""},model:{value:e.dialog.preview,callback:function(t){e.$set(e.dialog,"preview",t)},expression:"dialog.preview"}},[a("v-card",{attrs:{tile:""}},[a("v-toolbar",{attrs:{card:"",dark:"",color:"light-blue darken-3"}},[a("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(t){e.close("preview")}}},[a("v-icon",[e._v("close")])],1),a("v-toolbar-title",[e._v("Preview Template")]),a("v-spacer")],1),a("v-card-text",{staticStyle:{padding:"0px"}},[a("iframe",{staticStyle:{width:"100%",height:"calc(100vh - 200px)"},attrs:{srcdoc:e.editingItem.template.source,frameBorder:"0"}})]),a("div",{staticStyle:{flex:"1 1 auto"}})],1)],1),a("v-dialog",{attrs:{"max-width":"900px",scrollable:""},model:{value:e.dialog.testemail,callback:function(t){e.$set(e.dialog,"testemail",t)},expression:"dialog.testemail"}},[a("v-card",{attrs:{tile:""}},[a("v-toolbar",{attrs:{card:"",dark:"",color:"light-blue darken-3"}},[a("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(t){e.close("testemail")}}},[a("v-icon",[e._v("close")])],1),a("v-toolbar-title",[e._v("Test Email")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(t){e.$refs["testemail"+e.editingItem.template.id].send()}}},[e._v("Send")])],1)],1),-1!==e.editingItem.template.id?a("v-card-text",[a("test-email",{key:e.editingItem.template.id,ref:"testemail"+e.editingItem.template.id,attrs:{item:e.editingItem.template},on:{snackbar:e.setSnackbar}})],1):e._e(),a("div",{staticStyle:{flex:"1 1 auto"}})],1)],1)],1)],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};t.a=r},xQUo:function(e,t,a){"use strict";var i=a("woOf"),r=a.n(i),s=a("Xxa5"),o=a.n(s),n=a("exGp"),l=a.n(n),c=a("Dd8w"),d=a.n(c),m=a("NYxO"),p=(a("4swq"),a("mtWM")),u=a.n(p),v=a("26Cp");t.a={middleware:["authenticated"],components:{testEmail:v.a},computed:d()({},Object(m.mapGetters)({isAuthenticated:"auth/isAuthenticated",loggedUser:"auth/loggedUser",loggedToken:"auth/loggedToken"})),data:function(){return{state:"templates",error:"",cmOption:{smartIndent:!1,indentWithTabs:!0,tabSize:4,indentUnit:4,foldGutter:!0,styleActiveLine:!0,lineNumbers:!0,line:!0,keyMap:"sublime",mode:"text/html"},snackbar:!1,snackbarColor:"green",snackbarText:"",snackbarTimeout:5e3,items:{template:[],provider:[]},tableLoading:!0,tableHeaders:{template:[{text:"Name",value:"name"},{text:"Slug",value:"slug"},{text:"Subject",value:"subject"},{text:"Type",value:"type"},{text:"Actions",value:"name",sortable:!1,align:"right"}],provider:[{text:"Host",value:"host"},{text:"Limit",value:"limit"},{text:"Sent",value:"limit_sent"},{text:"Actions",value:"host",sortable:!1,align:"right"}]},expandedTableHeaders:[{text:"From",value:"from"},{text:"To",value:"to"},{text:"Subject",value:"subject"},{text:"Date",value:"date"}],dialog:{template:!1,provider:!1,preview:!1,testemail:!1},editingIndex:{template:-1,provider:-1},editingItem:{template:{id:-1,name:"",type:"HTML",subject:"",from:"",replyto:"",key:"",source:""},provider:{id:-1,host:"",username:"",password:"",encryption:"None",port:"",limit:"",debug:"No"}},defaultItem:{template:{id:-1,name:"",type:"HTML",subject:"",from:"",replyto:"",key:"",source:""},provider:{id:-1,host:"",username:"",password:"",encryption:"None",port:"",limit:"",debug:"No"}},valid:{template:!0,provider:!0},nameRules:[function(e){return!!e||"Name is required."}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(e)||"E-mail must be valid"}]}},mounted:function(){this.initialize()},watch:{"dialog.testemail":function(e){e||this.close("testemail")},"dialog.template":function(e){e||this.close("template")},"dialog.provider":function(e){e||this.close("provider")},"dialog.preview":function(e){e||this.close("preview")}},methods:{initialize:function(){var e=l()(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.loggedUser||this.$router.replace("/servers"),u.a.defaults.headers.common.Authorization="Bearer "+this.loggedToken,e.next=5,u.a.get(this.loggedUser.sub+"/api/ams/email/template");case 5:return t=e.sent,this.items.template=t.data.data,e.next=9,u.a.get(this.loggedUser.sub+"/api/ams/email/provider");case 9:t=e.sent,this.items.provider=t.data.data,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),this.error="Could not fetch data from server.";case 16:this.tableLoading=!1;case 17:case"end":return e.stop()}},e,this,[[0,13]])}));return function(){return e.apply(this,arguments)}}(),editItem:function(e,t){this.editingIndex[e]=this.items[e].indexOf(t),this.editingItem[e]=r()({},t),this.dialog[e]=!0},previewItem:function(e,t){this.editingIndex.template=this.items.template.indexOf(t),this.editingItem.template=r()({},t),this.dialog[e]=!0},testItem:function(e,t){this.editingIndex.template=this.items.template.indexOf(t),this.editingItem.template=r()({},t),this.dialog[e]=!0},deleteItem:function(){var e=l()(o.a.mark(function e(t,a){var i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.items[t].indexOf(a),this.items[t].splice(i,1),e.prev=2,this.loggedUser||this.$router.replace("/servers"),u.a.defaults.headers.common.Authorization="Bearer "+this.loggedToken,e.next=7,u.a.delete(this.loggedUser.sub+"/api/ams/email/"+t,{data:a});case 7:e.sent,this.snackbar=!0,this.snackbarText="Email "+t+" successfully deleted.",e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),this.error="Could not delete email "+t+" from server.";case 15:case"end":return e.stop()}},e,this,[[2,12]])}));return function(t,a){return e.apply(this,arguments)}}(),save:function(){var e=l()(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a="form"+t,!this.$refs[a].validate()){e.next=18;break}return this.editingIndex[t]>-1?r()(this.items[t][this.editingIndex[t]],this.editingItem[t]):this.items[t].push(r()({},this.editingItem[t])),e.prev=3,this.loggedUser||this.$router.replace("/servers"),u.a.defaults.headers.common.Authorization="Bearer "+this.loggedToken,e.next=8,u.a.post(this.loggedUser.sub+"/api/ams/email/"+t,this.editingItem[t]);case 8:e.sent,this.snackbar=!0,this.snackbarText="Email "+t+" successfully saved.",e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),this.error="Could not save email "+t+" to server.";case 16:-1===this.editingIndex[t]&&this.close(t),this.initialize();case 18:case"end":return e.stop()}},e,this,[[3,13]])}));return function(t){return e.apply(this,arguments)}}(),tableExpand:function(e,t){t.expanded=!t.expanded},close:function(e){var t=this;this.dialog[e]=!1,setTimeout(function(){t.editingItem=r()({},t.defaultItem),t.editingIndex={template:-1,provider:-1}},300)},setSnackbar:function(e){this.snackbar=!0,this.snackbarTimeout=2500,this.snackbarText=e}}}},yHXF:function(e,t,a){var i=a("93ad");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("985bf77a",i,!1,{sourceMap:!1})}});