(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"+mCh":function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,u)}c((r=r.apply(t,e||[])).next())}))},u=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},c=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n},a=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s},l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},h=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var f=l(n("fUcu")),d=n("7Z1F"),p=n("Dur/"),g=function(t){function e(e){var n=e.logger,r=(e.allPublic,e.rooms,e.integrationId,e.protocol),o=void 0===r?d.Protocols.DDP:r,s=c(e,["logger","allPublic","rooms","integrationId","protocol"]),u=t.call(this,i({logger:n},s))||this;return u.livechatStream="stream-livechat-room",u.userId="",u.logger=p.logger,u.socket=Promise.resolve(),u.import(o,s),u}return o(e,t),e.prototype.import=function(t,e){var r=this;switch(t){case d.Protocols.DDP:this.socket=Promise.resolve().then((function(){return h(n("R07M"))})).then((function(t){return new(0,t.DDPDriver)(i({logger:r.logger},e))}));break;default:throw new Error("Invalid Protocol: "+t+", valids: "+Object.keys(d.Protocols).join())}},e.prototype.connect=function(t,e){return s(this,void 0,void 0,(function(){var e=this;return u(this,(function(n){switch(n.label){case 0:return[4,this.socket];case 1:return[2,n.sent().connect(t).then((function(){return e.setUpConnection()}))]}}))}))},e.prototype.disconnect=function(){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.socket];case 1:return[2,t.sent().disconnect()]}}))}))},e.prototype.unsubscribe=function(t){return s(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.socket];case 1:return[2,e.sent().unsubscribe(t)]}}))}))},e.prototype.unsubscribeAll=function(){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.socket];case 1:return[2,t.sent().unsubscribeAll()]}}))}))},e.prototype.subscribeNotifyAll=function(){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.socket];case 1:return[2,t.sent().subscribeNotifyAll()]}}))}))},e.prototype.subscribeLoggedNotify=function(){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.socket];case 1:return[2,t.sent().subscribeLoggedNotify()]}}))}))},e.prototype.subscribeNotifyUser=function(){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.socket];case 1:return[2,t.sent().subscribeNotifyUser()]}}))}))},e.prototype.onMessage=function(t){return s(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.socket];case 1:return[2,e.sent().onMessage(t)]}}))}))},e.prototype.onTyping=function(t){return s(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.socket];case 1:return[2,e.sent().onTyping(t)]}}))}))},e.prototype.onAgentChange=function(t,e){return s(this,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return[4,this.subscribe(this.livechatStream,t)];case 1:return n.sent(),[4,this.onStreamData(this.livechatStream,(function(t){var n=a(t.fields.args,1)[0],r=n.type,o=n.data;"agentData"===r&&e(o)}))];case 2:return n.sent(),[2]}}))}))},e.prototype.onAgentStatusChange=function(t,e){return s(this,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return[4,this.subscribe(this.livechatStream,t)];case 1:return n.sent(),[4,this.onStreamData(this.livechatStream,(function(t){var n=a(t.fields.args,1)[0],r=n.type,o=n.status;"agentStatus"===r&&e(o)}))];case 2:return n.sent(),[2]}}))}))},e.prototype.onQueuePositionChange=function(t,e){return s(this,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return[4,this.subscribe(this.livechatStream,t)];case 1:return n.sent(),[4,this.onStreamData(this.livechatStream,(function(t){var n=a(t.fields.args,1)[0],r=n.type,o=n.data;"queueData"===r&&e(o)}))];case 2:return n.sent(),[2]}}))}))},e.prototype.notifyVisitorTyping=function(t,e,n){return s(this,void 0,void 0,(function(){return u(this,(function(r){switch(r.label){case 0:return[4,this.socket];case 1:return[2,r.sent().notifyVisitorTyping(t,e,n,this.credentials.token)]}}))}))},e.prototype.subscribe=function(t,e){return s(this,void 0,void 0,(function(){var n;return u(this,(function(r){switch(r.label){case 0:return n=this.credentials.token,[4,this.socket];case 1:return[2,r.sent().subscribe(t,e,{token:n,visitorToken:n})]}}))}))},e.prototype.subscribeRoom=function(t){return s(this,void 0,void 0,(function(){var e;return u(this,(function(n){switch(n.label){case 0:return e=this.credentials.token,[4,this.socket];case 1:return[2,n.sent().subscribeRoom(t,{token:e,visitorToken:e})]}}))}))},e.prototype.onStreamData=function(t,e){return s(this,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return[4,this.socket];case 1:return[2,n.sent().onStreamData(t,e)]}}))}))},e.prototype.setUpConnection=function(){return s(this,void 0,void 0,(function(){var t;return u(this,(function(e){switch(e.label){case 0:return t=this.credentials.token,[4,this.socket];case 1:return[2,e.sent().methodCall("livechat:setUpConnection",{token:t})]}}))}))},e}(f.default);e.default=g},"7Z1F":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.MQTT="mqtt",t.DDP="ddp"}(e.Protocols||(e.Protocols={}))},AtlH:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,u)}c((r=r.apply(t,e||[])).next())}))},u=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var c=n("Dur/"),a=n("dK1z"),l=n("sSti"),h=function(){function t(t){var e=t.host,n=void 0===e?"http://localhost:3000":e;this._headers={},this.host=n}return Object.defineProperty(t.prototype,"headers",{get:function(){return i({"Content-Type":"application/json"},this._headers)},set:function(t){this._headers=t},enumerable:!0,configurable:!0}),t.prototype.getHeaders=function(t){return t&&t.customHeaders?t.customHeaders:this.headers},t.prototype.getBody=function(t){return t instanceof FormData?t:JSON.stringify(t)},t.prototype.get=function(t,e,n){return fetch(this.host+"/api/v1/"+encodeURI(t)+"?"+this.getParams(e),{method:"GET",headers:this.getHeaders(n)}).then(this.handle)},t.prototype.post=function(t,e,n){return fetch(this.host+"/api/v1/"+encodeURI(t),{method:"POST",body:this.getBody(e),headers:this.getHeaders(n)}).then(this.handle)},t.prototype.put=function(t,e,n){return fetch(this.host+"/api/v1/"+encodeURI(t),{method:"PUT",body:this.getBody(e),headers:this.getHeaders(n)}).then(this.handle)},t.prototype.delete=function(t,e,n){return fetch(this.host+"/api/v1/"+encodeURI(t),{method:"DELETE",body:this.getBody(e),headers:this.getHeaders(n)}).then(this.handle)},t.prototype.handle=function(t){return s(this,void 0,void 0,(function(){var e,n;return u(this,(function(r){switch(r.label){case 0:return e=t.status,[4,t.json()];case 1:return n=r.sent(),[2,{status:e,data:n}]}}))}))},t.prototype.getParams=function(t){return Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+("object"==typeof t[e]?encodeURIComponent(JSON.stringify(t[e])):encodeURIComponent(t[e]))})).join("&")},t}();e.regExpSuccess=/(?!([45][0-9][0-9]))\d{3}/;var f=function(t){function n(e){var n=e.client,r=e.host,o=e.logger,i=(void 0===o&&c.logger,t.call(this)||this);return i.userId="",i.currentLogin=null,i.request=function(t,e,n,r,o,c){return void 0===n&&(n={}),void 0===r&&(r=!0),s(i,void 0,void 0,(function(){var i,s,a;return u(this,(function(u){switch(u.label){case 0:this.logger&&this.logger.debug("[API] "+t+" "+e+": "+JSON.stringify(n)),u.label=1;case 1:if(u.trys.push([1,11,,12]),r&&!this.loggedIn())throw new Error("");switch(i=void 0,t){case"GET":return[3,2];case"PUT":return[3,4];case"DELETE":return[3,6];case"POST":return[3,8]}return[3,8];case 2:return[4,this.client.get(e,n,c)];case 3:return i=u.sent(),[3,10];case 4:return[4,this.client.put(e,n,c)];case 5:return i=u.sent(),[3,10];case 6:return[4,this.client.delete(e,n,c)];case 7:return i=u.sent(),[3,10];case 8:return[4,this.client.post(e,n,c)];case 9:return i=u.sent(),[3,10];case 10:if(!i)throw new Error("API "+t+" "+e+" result undefined");if(!this.success(i,o))throw i;return this.logger&&this.logger.debug("[API] "+t+" "+e+" result "+i.status),s=i&&!i.data,[2,"DELETE"===t&&s?i:i.data];case 11:throw a=u.sent(),this.logger&&this.logger.error("[API] POST error("+e+"): "+JSON.stringify(a)),a;case 12:return[2]}}))}))},i.post=function(t,e,n,r,o){return void 0===o&&(o={}),i.request("POST",t,e,n,r,o)},i.get=function(t,e,n,r,o){return void 0===o&&(o={}),i.request("GET",t,e,n,r,o)},i.put=function(t,e,n,r,o){return void 0===o&&(o={}),i.request("PUT",t,e,n,r,o)},i.del=function(t,e,n,r,o){return void 0===o&&(o={}),i.request("DELETE",t,e,n,r,o)},i.client=n||new h({host:r}),i.logger=c.logger,i}return o(n,t),Object.defineProperty(n.prototype,"username",{get:function(){return this.currentLogin&&this.currentLogin.username},enumerable:!0,configurable:!0}),n.prototype.loggedIn=function(){return Object.keys(this.currentLogin||{}).every((function(t){return t}))},n.prototype.success=function(t,n){return!!(void 0===t.status||t.status&&e.regExpSuccess.test(t.status)||t.status&&n&&n.test(t.status))},n.prototype.login=function(t,e){return s(this,void 0,void 0,(function(){var n;return u(this,(function(r){switch(r.label){case 0:return[4,this.post("login",i({},t,e))];case 1:return n=r.sent().data,this.userId=n.userId,this.currentLogin={username:n.me.username,userId:n.userId,authToken:n.authToken,result:n},this.client.headers={"X-Auth-Token":n.authToken,"X-User-Id":n.userId},[2,n]}}))}))},n.prototype.logout=function(){return s(this,void 0,void 0,(function(){var t;return u(this,(function(e){switch(e.label){case 0:return this.currentLogin?[4,this.post("logout",{},!0)]:[2,null];case 1:return t=e.sent(),this.userId="",this.currentLogin=null,[2,t]}}))}))},n.prototype.prepareMessage=function(t,e,n){return new a.Message(t,i({rid:e,roomId:e},n))},n}(l.EventEmitter);e.default=f},"Dur/":function(t,e,n){"use strict";var r=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s},o=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t};Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){}return t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.warning=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.warning.apply(this,o(t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t}();function s(t){e.logger=t}e.logger=new i,e.replaceLog=s,e.silence=function(){s({debug:function(){return null},info:function(){return null},warn:function(){return null},warning:function(){return null},error:function(){return null}})}},KIET:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.debounce=function(t,e,n){var r;return void 0===e&&(e=100),void 0===n&&(n=!1),function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];var s=this,u=function(){r=void 0,n||t.apply(s,o)},c=n&&void 0===r;r&&clearTimeout(r),r=setTimeout(u,e),c&&t.apply(s,o)}},e.hostToWS=function(t,e){return void 0===e&&(e=!1),"ws"+(e?"s":"")+"://"+(t=t.replace(/^(https?:\/\/)?/,""))}},R07M:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,u)}c((r=r.apply(t,e||[])).next())}))},u=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},c=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n},a=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s},l=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(a(arguments[e]));return t},h=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var f=h(n("TCPm")),d=n("sSti"),p=n("Dur/");d.EventEmitter.prototype.removeAllListeners=function(t){return t?this._listeners[t]=[]:this._listeners={},[]};var g=n("zRbl"),v=n("KIET"),b=n("eb2x"),y=function(t){function e(e,n){void 0===n&&(n=null);var r=t.call(this)||this;return r.resume=n,r.sent=0,r.lastPing=Date.now(),r.subscriptions={},r.handlers=[],r.open=function(t){return void 0===t&&(t=r.config.reopen),new Promise((function(e,n){return s(r,void 0,void 0,(function(){var r,o=this;return u(this,(function(i){switch(i.label){case 0:return this.lastPing=Date.now(),[4,this.close()];case 1:i.sent(),this.reopenInterval&&clearInterval(this.reopenInterval),this.reopenInterval=setInterval((function(){return!o.alive()&&o.reopen()}),t);try{(r=new f.default(this.host)).onerror=n}catch(t){return this.logger.error(t),[2,n(t)]}return this.connection=r,this.connection.onmessage=this.onMessage.bind(this),this.connection.onclose=this.onClose.bind(this),this.connection.onopen=this.onOpen.bind(this,e),[2]}}))}))}))},r.onOpen=function(t){return s(r,void 0,void 0,(function(){var e,n=this;return u(this,(function(r){switch(r.label){case 0:return[4,this.send({msg:"connect",version:"1",support:["1","pre2","pre1"]})];case 1:return e=r.sent(),this.session=e.session,this.ping().catch((function(t){return n.logger.error("[ddp] Unable to ping server: "+t.message)})),this.emit("open"),this.resume?[4,this.login(this.resume)]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2,t(this.connection)]}}))}))},r.onClose=function(t){try{if(r.emit("close",t),1e3!==t.code)return r.reopen();r.reopenInterval&&clearInterval(r.reopenInterval),r.openTimeout&&clearTimeout(r.openTimeout),r.pingTimeout&&clearTimeout(r.pingTimeout),delete r.connection,r.logger.info("[ddp] Close ("+t.code+") "+t.reason)}catch(t){r.logger.error(t)}},r.onMessage=function(t){r.lastPing=Date.now(),r.ping();var e=t.data?JSON.parse(t.data):void 0;if(r.logger.debug(e),!e)return r.logger.error("[ddp] JSON parse error: "+t.message);r.logger.debug("[ddp] messages received: "+t.data),e.collection&&r.emit(e.collection,e),e.msg&&r.emit(e.msg,e)},r.close=function(){return s(r,void 0,void 0,(function(){var t=this;return u(this,(function(e){switch(e.label){case 0:return this.connected?(this.unsubscribeAll().catch((function(e){return t.logger.debug(e)})),[4,new Promise((function(e){if(t.connection)return t.once("close",e),void t.connection.close(1e3,"disconnect")})).catch(this.logger.error)]):[3,2];case 1:e.sent(),e.label=2;case 2:return[2,Promise.resolve()]}}))}))},r.reopen=function(){return s(r,void 0,void 0,(function(){var t=this;return u(this,(function(e){switch(e.label){case 0:return this.openTimeout?[2]:[4,this.close()];case 1:return e.sent(),this.openTimeout=setTimeout((function(){return s(t,void 0,void 0,(function(){var t=this;return u(this,(function(e){switch(e.label){case 0:return delete this.openTimeout,[4,this.open().catch((function(e){return t.logger.error("[ddp] Reopen error: "+e.message)}))];case 1:return e.sent(),[2]}}))}))}),this.config.reopen),[2]}}))}))},r.send=function(t){return s(r,void 0,void 0,(function(){var e=this;return u(this,(function(n){return[2,new Promise((function(n,r){if(!e.connection)throw new Error("[ddp] sending without open connection");var o=t.id||"ddp-"+e.sent;e.sent+=1;var s=i({},t,/connect|ping|pong/.test(t.msg)?{}:{id:o}),u=JSON.stringify(s);e.logger.debug("[ddp] sending message: "+u),e.connection.send(u),e.once("disconnected",r);var c=("ping"===s.msg?"pong":"connect"===s.msg&&"connected")||s.id;if(!c)return n();e.once(c,(function(s){return e.off("disconnect",r),s.error?r(s.error):n(i({},/connect|ping|pong/.test(t.msg)?{}:{id:o},s))}))}))]}))}))},r.ping=function(){return s(r,void 0,void 0,(function(){var t=this;return u(this,(function(e){return this.pingTimeout&&clearTimeout(this.pingTimeout),this.pingTimeout=setTimeout((function(){t.send({msg:"ping"}).then((function(){return t.ping()})).catch((function(){return t.reopen()}))}),this.config.ping),[2]}))}))},r.alive=function(){return!!r.lastPing&&Date.now()-r.lastPing<=2*r.config.ping},r.call=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return s(r,void 0,void 0,(function(){var n,r=this;return u(this,(function(o){switch(o.label){case 0:return[4,this.send({msg:"method",method:t,params:e}).catch((function(t){throw r.logger.error("[ddp] Call error: "+t.message),t}))];case 1:return[2,(n=o.sent()).result?n.result:n]}}))}))},r.login=function(t){return s(r,void 0,void 0,(function(){var e,n;return u(this,(function(r){switch(r.label){case 0:return e=this.loginParams(t),n=this,[4,this.call("login",e)];case 1:return n.resume=r.sent(),[4,this.subscribeAll()];case 2:return r.sent(),this.emit("login",this.resume),[2,this.resume]}}))}))},r.loginParams=function(t){return g.isLoginPass(t)||g.isLoginOAuth(t)||g.isLoginAuthenticated(t)?t:g.isLoginResult(t)?{resume:t.token}:{user:{username:t.username},password:{digest:b.sha256(t.password),algorithm:"sha-256"}}},r.logout=function(){return r.resume=null,r.unsubscribeAll().then((function(){return r.call("logout")}))},r.onEvent=function(t,e){r.on(t,e)},r.subscribe=function(t,e,n){return r.logger.info("[ddp] Subscribe to "+t+", param: "+JSON.stringify(e)),r.send({msg:"sub",name:t,params:e}).then((function(o){var i=o.subs?o.subs[0]:void 0,s=r.unsubscribe.bind(r,i),u=r.onEvent.bind(r,t),c={id:i,name:t,params:e,unsubscribe:s,onEvent:u};return n&&c.onEvent(n),r.subscriptions[i]=c,c})).catch((function(t){throw r.logger.error("[ddp] Subscribe error: "+t.message),t}))},r.subscribeAll=function(){var t=Object.keys(r.subscriptions||{}).map((function(t){var e=r.subscriptions[t],n=e.name,o=e.params;return r.subscribe(n,o)}));return Promise.all(t)},r.unsubscribe=function(t){return r.subscriptions[t]?(delete r.subscriptions[t],r.send({msg:"unsub",id:t}).then((function(t){return t.result||t.subs})).catch((function(t){if(!t.msg&&"nosub"!==t.msg)throw r.logger.error("[ddp] Unsubscribe error: "+t.message),t}))):Promise.reject(t)},r.unsubscribeAll=function(){var t=Object.keys(r.subscriptions).map((function(t){return r.subscriptions[t].unsubscribe()}));return Promise.all(t).then((function(){return r.subscriptions={}}))},r.logger=e.logger||p.logger,r.config={host:e.host||"http://localhost:3000",useSsl:e.useSsl||!1,reopen:e.reopen||1e4,ping:e.timeout||3e4},r.host=v.hostToWS(r.config.host,r.config.useSsl)+"/websocket",r.on("ping",(function(){r.send({msg:"pong"}).then(r.logger.debug,r.logger.error)})),r.on("result",(function(t){return r.emit(t.id,{id:t.id,result:t.result,error:t.error})})),r.on("ready",(function(t){return r.emit(t.subs[0],t)})),r}return o(e,t),Object.defineProperty(e.prototype,"connected",{get:function(){return!(!this.connection||1!==this.connection.readyState||!this.alive())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"loggedIn",{get:function(){return this.connected&&!!this.resume},enumerable:!0,configurable:!0}),e}(d.EventEmitter);e.Socket=y;var m=function(t){function e(e){void 0===e&&(e={});var n=e.host,r=void 0===n?"localhost:3000":n,o=(e.integrationId,e.config),h=e.logger,f=void 0===h?p.logger:h,d=c(e,["host","integrationId","config","logger"]),g=t.call(this)||this;return g.subscriptions={},g.userId="",g.joinedIds=[],g.connect=function(t){if(void 0===t&&(t={}),g.connected)return Promise.resolve(g);var e=i({},g.config,t);return new Promise((function(t,n){g.logger.info("[driver] Connecting",e),g.subscriptions=g.ddp.subscriptions,g.ddp.open().catch((function(t){g.logger.error("[driver] Failed to connect: "+t.message),n(t)})),g.ddp.on("open",(function(){return g.emit("connected")}));var r=!1,o=setTimeout((function(){g.logger.info("[driver] Timeout ("+e.timeout+")");var t=new Error("Socket connection timeout");r=!0,g.ddp.removeAllListeners("connected"),n(t)}),e.timeout);r||g.once("connected",(function(){if(g.logger.info("[driver] Connected"),r)return g.ddp.close();clearTimeout(o),t(g)}))}))},g.disconnect=function(){return g.ddp.close()},g.subscribe=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return g.logger.info("[DDP driver] Subscribing to "+t+" | "+JSON.stringify(n)),g.ddp.subscribe(t,[e,{useCollection:!1,args:n}])},g.subscribeNotifyAll=function(){return Promise.all(["roles-change","updateEmojiCustom","deleteEmojiCustom","updateAvatar","public-settings-changed","permissions-changed"].map((function(t){return g.subscribe("stream-notify-all",t,!1)})))},g.subscribeLoggedNotify=function(){return Promise.all(["Users:NameChanged","Users:Deleted","updateAvatar","updateEmojiCustom","deleteEmojiCustom","roles-change"].map((function(t){return g.subscribe("stream-notify-logged",t,!1)})))},g.subscribeNotifyUser=function(){return Promise.all(["message","otr","webrtc","notification","rooms-changed","subscriptions-changed","uiInteraction"].map((function(t){return g.subscribe("stream-notify-user",g.userId+"/"+t,!1)})))},g.subscribeRoom=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r="stream-notify-room";return Promise.all([g.subscribe.apply(g,l(["stream-room-messages",t],e)),g.subscribe.apply(g,l([r,t+"/typing"],e)),g.subscribe.apply(g,l([r,t+"/deleteMessage"],e))])},g.login=function(t,e){return s(g,void 0,void 0,(function(){var e;return u(this,(function(n){switch(n.label){case 0:return this.ddp&&this.ddp.connected?[3,2]:[4,this.connect()];case 1:n.sent(),n.label=2;case 2:return this.logger.info("[DDP driver] Login with "+JSON.stringify(t)),[4,this.ddp.login(t)];case 3:return e=n.sent(),this.userId=e.id,[2,e]}}))}))},g.logout=function(){return s(g,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return this.ddp&&this.ddp.connected?[4,this.ddp.logout()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},g.unsubscribe=function(t){return g.ddp.unsubscribe(t.id)},g.unsubscribeAll=function(){return g.ddp.unsubscribeAll()},g.onStreamData=function(t,e){function n(t){e(t)}return Promise.resolve(g.ddp.on(t,n)).then((function(){return{stop:function(){return g.ddp.off(t,n)}}}))},g.onMessage=function(t){g.ddp.on("stream-room-messages",(function(e){var n=a(e.fields.args,1)[0];return t(g.ejsonMessage(n))}))},g.onTyping=function(t){return g.ddp.on("stream-notify-room",(function(e){var n=a(e.fields.args,2),r=n[0],o=n[1];t(r,o)}))},g.notifyVisitorTyping=function(t,e,n,r){return g.ddp.call("stream-notify-room",t+"/typing",e,n,{token:r})},g.ejsonMessage=function(t){return t.ts&&(t.ts=new Date(t.ts.$date)),t},g.methodCall=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return(e=g.ddp).call.apply(e,l([t],n))},g.config=i({},o,d,{host:r.replace(/(^\w+:|^)\/\//,""),timeout:2e4}),g.ddp=new y(i({},g.config,{logger:f})),g.logger=f,g}return o(e,t),Object.defineProperty(e.prototype,"connected",{get:function(){return!!this.ddp.connected},enumerable:!0,configurable:!0}),e}(d.EventEmitter);e.DDPDriver=m},dK1z:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var o=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var i=function(t,e){var n=e.integrationId,i=o(e,["integrationId"]);r(this,"string"==typeof t?{msg:t}:t,i),n&&(this.bot={i:n})};e.Message=i},fUcu:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,u)}c((r=r.apply(t,e||[])).next())}))},u=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.credentials={},e}return o(e,t),e.prototype.login=function(t){return this.grantVisitor(t)},e.prototype.config=function(t){return s(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.get("livechat/config",t,!1)];case 1:return[2,e.sent().config]}}))}))},e.prototype.room=function(t){return s(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.get("livechat/room",i({token:this.credentials.token},t),!1)];case 1:return[2,e.sent().room]}}))}))},e.prototype.closeChat=function(t){var e=t.rid;return this.post("livechat/room.close",{rid:e,token:this.credentials.token},!1)},e.prototype.transferChat=function(t){var e=t.rid,n=t.department;return this.post("livechat/room.transfer",{rid:e,token:this.credentials.token,department:n},!1)},e.prototype.chatSurvey=function(t){return this.post("livechat/room.survey",{rid:t.rid,token:this.credentials.token,data:t.data},!1)},e.prototype.visitor=function(){return this.get("livechat/visitor/"+this.credentials.token)},e.prototype.grantVisitor=function(t){return s(this,void 0,void 0,(function(){var e;return u(this,(function(n){switch(n.label){case 0:return[4,this.post("livechat/visitor",t,!1)];case 1:return e=n.sent().visitor,this.credentials={token:e.token},[2,e]}}))}))},e.prototype.deleteVisitor=function(){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.del("livechat/visitor/"+this.credentials.token)];case 1:return[2,t.sent().visitor]}}))}))},e.prototype.updateVisitorStatus=function(t){return s(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.post("livechat/visitor.status",{token:this.credentials.token,status:t})];case 1:return[2,e.sent().status]}}))}))},e.prototype.nextAgent=function(t){return void 0===t&&(t=""),s(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.get("livechat/agent.next/"+this.credentials.token,{department:t})];case 1:return[2,e.sent().agent]}}))}))},e.prototype.agent=function(t){var e=t.rid;return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.get("livechat/agent.info/"+e+"/"+this.credentials.token)];case 1:return[2,t.sent().agent]}}))}))},e.prototype.message=function(t,e){return s(this,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return[4,this.get("livechat/message/"+t,i({token:this.credentials.token},e))];case 1:return[2,n.sent().message]}}))}))},e.prototype.sendMessage=function(t){return this.post("livechat/message",i({},t,{token:this.credentials.token}),!1)},e.prototype.editMessage=function(t,e){return this.put("livechat/message/"+t,e,!1)},e.prototype.deleteMessage=function(t,e){var n=e.rid;return this.del("livechat/message/"+t,{rid:n,token:this.credentials.token},!1)},e.prototype.loadMessages=function(t,e){return s(this,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return[4,this.get("livechat/messages.history/"+t,i({},e,{token:this.credentials.token}),!1)];case 1:return[2,n.sent().messages]}}))}))},e.prototype.sendOfflineMessage=function(t){return s(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.post("livechat/offline.message",i({},t),!1)];case 1:return[2,e.sent().message]}}))}))},e.prototype.sendVisitorNavigation=function(t){return this.post("livechat/page.visited",i({},t),!1)},e.prototype.requestTranscript=function(t,e){var n=e.rid;return this.post("livechat/transcript",{token:this.credentials.token,rid:n,email:t},!1)},e.prototype.videoCall=function(t){var e=t.rid;return this.get("livechat/video.call/"+this.credentials.token,{rid:e},!1)},e.prototype.sendCustomField=function(t){return this.post("livechat/custom.field",t,!1)},e.prototype.sendCustomFields=function(t){return this.post("livechat/custom.fields",t,!1)},e.prototype.uploadFile=function(t){var e=new FormData,n={"x-visitor-token":this.credentials.token};return e.append("file",t.file),this.post("livechat/upload/"+t.rid,e,!1,void 0,{customHeaders:n})},e}(c(n("AtlH")).default);e.default=a},zRbl:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isLoginPass=function(t){return t.user&&t.password&&void 0!==t.user.username&&void 0!==t.password.digest},e.isLoginOAuth=function(t){return t.oath&&void 0!==t.credentialToken&&void 0!==t.credentialSecret},e.isLoginAuthenticated=function(t){return void 0!==t.resume},e.isLoginResult=function(t){return void 0!==t.token}}}]);
//# sourceMappingURL=sdk.chunk.90a23.esm.js.map