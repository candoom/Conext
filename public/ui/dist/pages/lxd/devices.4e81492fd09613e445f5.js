webpackJsonp([3],{"/kJb":function(e,t,i){"use strict";var s=i("hBMt");t.a={components:{nic:s.a},data:function(){return{error:"",activeTab:"nic",snackbar:!1,snackbarColor:"green",snackbarText:"",snackbarTimeout:5e3}},methods:{setSnackbar:function(e){this.snackbar=!0,this.snackbarTimeout=2500,this.snackbarText=e},setError:function(e){this.error=e},openDialog:function(){this.$refs[this.activeTab].openDialog()}}}},"5/e6":function(e,t,i){var s=i("TvgE");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i("rjj0")("9e5d2190",s,!1,{sourceMap:!1})},B28n:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"",""])},Ee0Q:function(e,t){e.exports={empty:function(){return{architecture:"",config:{"image.architecture":"","image.description":"","image.os":"","image.release":"","image.serial":"","volatile.base_image":"","volatile.eth0.hwaddr":"","volatile.eth0.name":"","volatile.idmap.base":"","volatile.idmap.next":"","volatile.last_state.idmap":"","volatile.last_state.power":"","boot.autostart":!1,"security.privileged":!1,"security.nesting":!1,"limits.cpu":1,"limits.cpu.priority":5,"limits.processes":500,"limits.memory.swap.priority":5,"limits.disk.priority":5,"limits.network.priority":5,"limits.cpu.allowance":50,"limits.memory":1024,"limits.memory.swap":"0","limits.memory.enforce":"soft"},devices:{},ephemeral:!1,privileged:!1,profiles:["default"],stateful:!0,description:"",created_at:"",expanded_config:{},expanded_devices:{},name:"",status:"",status_code:0,last_used_at:"",state:{status:"",status_code:0,disk:{},memory:{usage:0,usage_peak:0,swap_usage:0,swap_usage_peak:0},network:{},pid:0,processes:0,cpu:{usage:0}},snapshots:[]}},infix:function(e){var t=this.empty(),i=t.config;return i["boot.autostart"]=e.config["boot.autostart"],i["security.privileged"]=e.config["security.privileged"],i["security.nesting"]=e.config["security.nesting"],i["limits.cpu"]=e.config["limits.cpu"]?Number(e.config["limits.cpu"]):t.config["limits.cpu"],i["limits.cpu.priority"]=e.config["limits.cpu.priority"]?Number(e.config["limits.cpu.priority"]):t.config["limits.cpu.priority"],i["limits.cpu.allowance"]=e.config["limits.cpu.allowance"]?Number(e.config["limits.cpu.allowance"].substring(0,e.config["limits.cpu.allowance"].indexOf("%"))):t.config["limits.cpu.allowance"],i["limits.processes"]=e.config["limits.processes"]?Number(e.config["limits.processes"]):t.config["limits.processes"],i["limits.disk.priority"]=e.config["limits.disk.priority"]?Number(e.config["limits.disk.priority"]):t.config["limits.disk.priority"],i["limits.network.priority"]=e.config["limits.network.priority"]?Number(e.config["limits.network.priority"]):t.config["limits.network.priority"],i["limits.memory"]=e.config["limits.memory"]?Number(e.config["limits.memory"].substring(0,e.config["limits.memory"].indexOf("MB"))):t.config["limits.memory"],i["limits.memory.swap"]=e.config["limits.memory.swap"]?e.config["limits.memory.swap"]:0,i["limits.memory.enforce"]="hard"===e.config["limits.memory.enforce"]?"hard":"soft",i["limits.memory.swap.priority"]=e.config["limits.memory.swap.priority"]?Number(e.config["limits.memory.swap.priority"]):t.config["limits.memory.swap.priority"],i["image.architecture"]=e.config["image.architecture"]||"",i["image.description"]=e.config["image.description"]||"",i["image.label"]=e.config["image.label"]||"",i["image.os"]=e.config["image.os"]||"",i["image.release"]=e.config["image.release"]||"",i["image.serial"]=e.config["image.serial"]||"",i["image.version"]=e.config["image.version"]||"",i["volatile.base_image"]=e.config["volatile.base_image"]||"",i["volatile.eth0.hwaddr"]=e.config["volatile.eth0.hwaddr"]||"",i["volatile.eth0.name"]=e.config["volatile.eth0.name"]||"",i["volatile.idmap.base"]=e.config["volatile.idmap.base"]||"",i["volatile.idmap.next"]=e.config["volatile.idmap.next"]||"",i["volatile.last_state.idmap"]=e.config["volatile.last_state.idmap"]||"",i["volatile.last_state.power"]=e.config["volatile.last_state.power"]||"",e.config=i,e},outfix:function(e){var t={"boot.autostart":e.config["boot.autostart"],"security.privileged":e.config["security.privileged"],"security.nesting":e.config["security.nesting"],"limits.cpu":String(e.config["limits.cpu"]),"limits.cpu.allowance":String(e.config["limits.cpu.allowance"])+"%","limits.cpu.priority":String(e.config["limits.cpu.priority"]),"limits.processes":String(e.config["limits.processes"]),"limits.memory":String(e.config["limits.memory"])+"MB","limits.memory.swap":String(e.config["limits.memory.swap"]),"limits.memory.swap.priority":String(e.config["limits.memory.swap.priority"]),"limits.memory.enforce":String(e.config["limits.memory.enforce"]),"limits.disk.priority":String(e.config["limits.disk.priority"]),"limits.network.priority":String(e.config["limits.network.priority"])};return e.config=t,void 0!==e.config["limits.memory.enforce"]&&null!==e.config["limits.memory.enforce"]||(e.config["limits.memory.enforce"]="soft"),void 0!==e.config["limits.memory.swap"]&&null!==e.config["limits.memory.swap"]||(e.config["limits.memory.swap"]="0"),e}}},TvgE:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"",""])},Ylae:function(e,t,i){var s=i("B28n");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i("rjj0")("33e4f0c7",s,!1,{sourceMap:!1})},bUSP:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-data-table",{attrs:{headers:e.tableHeaders,items:e.items,"hide-actions":"",loading:e.tableLoading},scopedSlots:e._u([{key:"items",fn:function(t){return[i("tr",[i("td",[e.linkedItem.devices?i("span",[e._v(e._s(t.item.dict.name))]):i("span",[i("a",{attrs:{href:"javascript:void(0)"},on:{click:function(i){i.stopPropagation(),e.editItem(t.item)}}},[e._v(e._s(t.item.dict.name))])])]),i("td",[e._v(e._s(t.item.dict.nictype))]),i("td",[e._v(e._s(t.item.dict.parent))]),i("td",[e.linkedItem.devices?i("span",[e.linkedItem.devices[t.item.name]?e._e():i("v-btn",{attrs:{depressed:"",small:""},on:{click:function(i){e.attachItem(t.item)}}},[e._v("Attach")]),e.linkedItem.devices[t.item.name]?i("v-btn",{attrs:{dark:"",depressed:"",small:"",color:"red"},on:{click:function(i){e.detachItem(t.item)}}},[e._v("Detach")]):e._e()],1):i("v-tooltip",{attrs:{left:""}},[i("v-btn",{staticClass:"mx-0",staticStyle:{float:"right"},attrs:{slot:"activator",icon:""},on:{click:function(i){i.stopPropagation(),e.deleteItem(t.item)}},slot:"activator"},[i("v-icon",{attrs:{color:"pink"}},[e._v("delete")])],1),i("span",[e._v("Delete")])],1)],1)])]}}])},[i("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}),i("template",{slot:"no-data"},[e._v("\n      "+e._s(e.tableLoading?"Fetching data, please wait...":"There are currently no nic devices.")+"\n    ")])],2),i("v-dialog",{attrs:{"max-width":"800px",scrollable:"","hide-overlay":null!==e.linkedItem},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",{staticStyle:{"overflow-x":"hidden","overflow-y":"auto",height:"calc(100vh - 104px)"},attrs:{flat:""}},[i("v-toolbar",{attrs:{card:"",dark:"",color:"light-blue darken-3"}},[i("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(t){e.close("preview")}}},[i("v-icon",[e._v("close")])],1),i("v-toolbar-title",[e._v(e._s(-1===e.editingIndex?"New":"Edit")+" Nic")]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(t){e.saveItem()}}},[e._v("Save")])],1)],1),i("v-card-text",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("h3",[e._v("General")]),i("v-text-field",{attrs:{rules:e.nameRule,label:"Name:",placeholder:"",required:"",hint:"Enter a name for the nic device."},model:{value:e.editingItem.dict.name,callback:function(t){e.$set(e.editingItem.dict,"name",t)},expression:"editingItem.dict.name"}}),i("v-select",{attrs:{items:["bridged","macvlan","p2p","physical","sriov"],label:"NIC Type:"},model:{value:e.editingItem.dict.nictype,callback:function(t){e.$set(e.editingItem.dict,"nictype",t)},expression:"editingItem.dict.nictype"}}),["bridged","macvlan","p2p","sriov"].includes(e.editingItem.dict.nictype)?i("div",[i("v-select",{attrs:{items:["lxdbr0"],label:"Parent:"},model:{value:e.editingItem.dict.parent,callback:function(t){e.$set(e.editingItem.dict,"parent",t)},expression:"editingItem.dict.parent"}}),i("v-text-field",{attrs:{label:"Hostname:",placeholder:"",hint:"Hostname of the interface inside the host."},model:{value:e.editingItem.dict.host_name,callback:function(t){e.$set(e.editingItem.dict,"host_name",t)},expression:"editingItem.dict['host_name']"}})],1):e._e(),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs6:""}},[i("v-text-field",{attrs:{label:"MAC address:",placeholder:"",hint:"MAC address of the interface."},model:{value:e.editingItem.dict.hwaddr,callback:function(t){e.$set(e.editingItem.dict,"hwaddr",t)},expression:"editingItem.dict.hwaddr"}})],1),i("v-flex",{attrs:{xs6:""}},[i("v-text-field",{attrs:{label:"MTU:",placeholder:"",hint:"MTU of the interface."},model:{value:e.editingItem.dict.mtu,callback:function(t){e.$set(e.editingItem.dict,"mtu",t)},expression:"editingItem.dict.mtu"}})],1)],1),["bridged","p2p"].includes(e.editingItem.dict.nictype)?i("div",[i("h3",[e._v("Limits")]),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs6:""}},[i("v-text-field",{attrs:{label:"Ingress:",placeholder:"",hint:"I/O limit in bit/s (supports kbit, Mbit, Gbit suffixes)."},model:{value:e.editingItem.dict["limits.ingress"],callback:function(t){e.$set(e.editingItem.dict,"limits.ingress",t)},expression:"editingItem.dict['limits.ingress']"}})],1),i("v-flex",{attrs:{xs6:""}},[i("v-text-field",{attrs:{label:"Egress:",placeholder:"",hint:"I/O limit in bit/s (supports kbit, Mbit, Gbit suffixes)."},model:{value:e.editingItem.dict["limits.egress"],callback:function(t){e.$set(e.editingItem.dict,"limits.egress",t)},expression:"editingItem.dict['limits.egress']"}})],1)],1)],1):e._e(),["bridged"].includes(e.editingItem.dict.nictype)?i("div",[i("h3",[e._v("DHCP")]),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs6:""}},[i("v-text-field",{attrs:{label:"IPv4 Address:",placeholder:"",hint:"An IPv4 address to assign to the container through DHCP."},model:{value:e.editingItem.dict["ipv4.address"],callback:function(t){e.$set(e.editingItem.dict,"ipv4.address",t)},expression:"editingItem.dict['ipv4.address']"}})],1),i("v-flex",{attrs:{xs6:""}},[i("v-text-field",{attrs:{label:"IPv6 Address:",placeholder:"",hint:"An IPv6 address to assign to the container through DHCP."},model:{value:e.editingItem.dict["ipv6.address"],callback:function(t){e.$set(e.editingItem.dict,"ipv6.address",t)},expression:"editingItem.dict['ipv6.address']"}})],1)],1),i("h4",[e._v("MAC Filtering")]),i("v-switch",{attrs:{color:"success"},model:{value:e.editingItem.dict["security.mac_filtering"],callback:function(t){e.$set(e.editingItem.dict,"security.mac_filtering",t)},expression:"editingItem.dict['security.mac_filtering']"}})],1):e._e(),["macvlan","physical"].includes(e.editingItem.dict.nictype)?i("div",[i("h3",[e._v("VLAN")]),i("v-text-field",{attrs:{label:"VLAN:",placeholder:"",hint:"VLAN ID to attach to."},model:{value:e.editingItem.dict.vlan,callback:function(t){e.$set(e.editingItem.dict,"vlan",t)},expression:"editingItem.dict['vlan']"}})],1):e._e(),["bridged","macvlan","p2p","sriov"].includes(e.editingItem.dict.nictype)?i("div",[i("h3",[e._v("MAAS")]),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs6:""}},[i("v-text-field",{attrs:{label:"MAAS IPv4:",placeholder:"",hint:"MAAS IPv4 subnet to register the container in."},model:{value:e.editingItem.dict["maas.subnet.ipv4"],callback:function(t){e.$set(e.editingItem.dict,"maas.subnet.ipv4",t)},expression:"editingItem.dict['maas.subnet.ipv4']"}})],1),i("v-flex",{attrs:{xs6:""}},[i("v-text-field",{attrs:{label:"MAAS IPv6:",placeholder:"",hint:"MAAS IPv6 subnet to register the container in."},model:{value:e.editingItem.dict["maas.subnet.ipv6"],callback:function(t){e.$set(e.editingItem.dict,"maas.subnet.ipv6",t)},expression:"editingItem.dict['maas.subnet.ipv6']"}})],1)],1)],1):e._e()],1)],1),i("div",{staticStyle:{flex:"1 1 auto"}})],1)],1)],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};t.a=a},hBMt:function(e,t,i){"use strict";var s=i("yXsy"),a=i("bUSP"),n=!1;var r=function(e){n||i("Ylae")},o=i("VU/8")(s.a,a.a,!1,r,null,null);o.options.__file="components/lxd/devices/nic.vue",t.a=o.exports},"lq+m":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("/kJb"),a=i("yZ5J"),n=!1;var r=function(e){n||i("5/e6")},o=i("VU/8")(s.a,a.a,!1,r,null,null);o.options.__file="pages/lxd/devices.vue",t.default=o.exports},yXsy:function(e,t,i){"use strict";var s=i("Xxa5"),a=i.n(s),n=i("exGp"),r=i.n(n),o=i("woOf"),c=i.n(o),l=i("Dd8w"),d=i.n(l),m=i("NYxO"),u=i("mtWM"),p=i.n(u),v=i("Ee0Q");t.a={components:{},props:["linked"],computed:d()({},Object(m.mapGetters)({loggedUser:"auth/loggedUser",loggedToken:"auth/loggedToken"}),{tableHeaders:function(){return this.attach,[{text:"Name",value:"name"},{text:"Type",value:"nictype"},{text:"Parent",value:"parent"},{text:"Actions",value:"name",sortable:!1,align:"center",width:"100px"}]}}),data:function(){return{error:"",valid:!0,dialog:!1,tableLoading:!0,items:[],editingIndex:-1,editingItem:{id:-1,type:"nic",name:"",dict:{nictype:"bridged","limits.ingress":"","limits.egress":"","limits.max":"",name:"",host_name:"",hwaddr:"",mtu:"",vlan:"","ipv4.address":"","ipv6.address":"","security.mac_filtering":"","maas.subnet.ipv4":"","maas.subnet.ipv6":"",parent:"lxdbr0"}},defaultItem:{id:-1,type:"nic",name:"",dict:{nictype:"bridged","limits.ingress":"","limits.egress":"","limits.max":"",name:"",host_name:"",hwaddr:"",mtu:"",vlan:"","ipv4.address":"","ipv6.address":"","security.mac_filtering":"","maas.subnet.ipv4":"","maas.subnet.ipv6":"",parent:"lxdbr0"}},linkedItem:{},nameRule:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=100||"Name must be less than 100 characters"}]}},beforeDestroy:function(){},mounted:function(){p.a.defaults.headers.common.Authorization="Bearer "+this.loggedToken,this.linkedItem=c()({},this.linked),this.initialize()},watch:{dialog:function(e){e||this.close()}},methods:{initialize:function(){var e=r()(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(this.loggedUser.sub+"/api/lxd/devices/nic");case 3:t=e.sent,this.items=t.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.error="Could not fetch data from server.";case 10:this.tableLoading=!1;case 11:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),attachItem:function(){var e=r()(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.linkedItem.devices=c()({},this.linkedItem.devices),this.$set(this.linkedItem.devices,t.name,d()({type:t.type},t.dict)),e.next=4,p.a.patch(this.loggedUser.sub+"/api/lxd/containers/"+this.linkedItem.name,{devices:this.linkedItem.devices});case 4:e.sent;case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),detachItem:function(){var e=r()(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.$delete(this.linkedItem.devices,t.name),this.linkedItem=c()({},v.outfix(this.linkedItem)),e.next=4,p.a.put(this.loggedUser.sub+"/api/lxd/containers/"+this.linkedItem.name,{config:this.linkedItem.config,devices:this.linkedItem.devices,ephemeral:this.linkedItem.ephemeral,stateful:this.linkedItem.stateful,profiles:this.linkedItem.profiles});case 4:e.sent;case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),editItem:function(e){this.editingIndex=this.items.indexOf(e),this.editingItem=c()({},e),this.editingItem.name=this.editingItem.dict.name,this.dialog=!0},saveItem:function(){var e=r()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.$refs.form.validate()){e.next=21;break}if(this.editingItem.name=this.editingItem.dict.name,e.prev=2,!(this.editingIndex>-1)){e.next=9;break}return e.next=6,p.a.put(this.loggedUser.sub+"/api/lxd/devices/nic/"+this.editingItem.name,this.editingItem);case 6:e.sent,e.next=12;break;case 9:return e.next=11,p.a.post(this.loggedUser.sub+"/api/lxd/devices/nic",this.editingItem);case 11:e.sent;case 12:this.$emit("snackbar","Device successfully saved."),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),this.error="Could not save device to server.";case 18:this.editingIndex>-1?c()(this.items[this.editingIndex],this.editingItem):this.items.push(c()({},this.editingItem)),-1===this.editingIndex&&this.close(),this.initialize();case 21:case"end":return e.stop()}},e,this,[[2,15]])}));return function(){return e.apply(this,arguments)}}(),deleteItem:function(){var e=r()(a.a.mark(function e(t){var i=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.$prompt.show({persistent:!0,width:400,toolbar:{color:"red darken-3",closable:!1},title:"Delete device?",text:"Are you sure you want to delete the <b>"+t.name+"</b> device?",buttons:[{title:"Yes",color:"success",handler:function(){var e=r()(a.a.mark(function e(){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.items.indexOf(t),i.items.splice(s,1),e.prev=2,e.next=5,p.a.delete(i.loggedUser.sub+"/api/lxd/devices/nic/"+t.name);case 5:e.sent,i.$emit("snackbar","Device successfully saved."),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),i.error="Failed to delete device.";case 12:case"end":return e.stop()}},e,i,[[2,9]])}));return function(){return e.apply(this,arguments)}}()},{title:"No",color:"error"}]});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),openDialog:function(){this.dialog=!0},close:function(){var e=this;this.dialog=!1,setTimeout(function(){e.editingItem=c()({},e.defaultItem),e.editingIndex=-1},300)}}}},yZ5J:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-snackbar",{attrs:{top:"",timeout:e.snackbarTimeout,color:e.snackbarColor},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.snackbarText)+"\n    "),i("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1),i("v-content",[i("v-container",{attrs:{fluid:"",tag:"section",id:"grid"}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{"d-flex":"",xs12:"","order-xs5":""}},[i("v-layout",{attrs:{column:""}},[i("v-flex",{staticClass:"display mb-2",attrs:{tag:"h1"}},[e._v("\n              LXD - Devices\n              "),i("v-btn",{staticStyle:{float:"right"},attrs:{color:"success"},on:{click:function(t){e.openDialog()}}},[e._v("New "+e._s(e.activeTab))])],1),i("v-flex",[i("v-alert",{attrs:{type:"error",value:e.error}},[e._v("\n                "+e._s(e.error)+"\n              ")]),i("v-tabs",{staticClass:"elevation-1",attrs:{"show-arrows":""},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[i("v-tab",{attrs:{ripple:"",href:"#nic"}},[e._v("Nic")]),i("v-tab-item",{attrs:{id:"nic"}},[i("nic",{ref:"nic",on:{snackbar:e.setSnackbar}})],1)],1)],1)],1)],1)],1)],1)],1)],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};t.a=a}});