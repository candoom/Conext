webpackJsonp([11],{"0dDB":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,'code{padding:5px}code:after,code:before,kbd:after,kbd:before{content:"";letter-spacing:-1px}',""])},"3eOo":function(e,t,a){var r=a("0dDB");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("3d8f09e7",r,!1,{sourceMap:!1})},FfPa:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-content",[a("v-container",{attrs:{fluid:"",tag:"section",id:"grid"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"","order-xs5":""}},[a("v-layout",{attrs:{column:""}},[a("v-flex",{staticClass:"display-1 mb-3",attrs:{tag:"h1"}},[e._v("\n            Server - Logins\n          ")]),a("v-flex",[a("v-alert",{attrs:{type:"error",value:e.error}},[e._v("\n              "+e._s(e.error)+"\n            ")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items.logins,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v(e._s(t.item.User))]),a("td",[e._v(e._s(t.item.Terminal))]),a("td",[e._v(e._s(t.item.Date))]),a("td",[e._v(e._s(t.item.Disconnected))]),a("td",[e._v(e._s(t.item.Duration))])]}}])},[a("template",{slot:"no-data"})],2)],1)],1)],1)],1)],1)],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},POTC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("YjBQ"),n=a("FfPa"),s=!1;var i=function(e){s||a("3eOo")},o=a("VU/8")(r.a,n.a,!1,i,null,null);o.options.__file="pages/server/logins.vue",t.default=o.exports},YjBQ:function(e,t,a){"use strict";var r=a("Xxa5"),n=a.n(r),s=a("exGp"),i=a.n(s),o=a("Dd8w"),d=a.n(o),u=a("NYxO"),c=a("mtWM"),l=a.n(c);t.a={middleware:["authenticated"],components:{},computed:d()({},Object(u.mapGetters)({isAuthenticated:"auth/isAuthenticated",loggedUser:"auth/loggedUser",loggedToken:"auth/loggedToken"})),data:function(){return{error:"",headers:[{text:"User",value:"User"},{text:"Terminal",value:"Terminal"},{text:"Date",value:"Date"},{text:"Disconnected",value:"Disconnected"},{text:"Duration",value:"Duration"}],items:[]}},mounted:function(){this.initialize()},methods:{initialize:function(){var e=i()(n.a.mark(function e(){var t;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.a.defaults.headers.common.Authorization="Bearer "+this.loggedToken,e.next=3,l.a.get(this.loggedUser.sub+"/api/server/information/logins");case 3:t=e.sent,this.items=t.data.data;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}}});