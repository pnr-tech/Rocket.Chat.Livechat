(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{srkh:function(e,t,n){"use strict";var r=n("qPgm"),o=function(e){var t,n=Math.floor((t=new Uint32Array(1),window.crypto.getRandomValues(t),2.3283064365386963e-10*t[0]*e.length));return"string"==typeof e?e.substr(n,1):e[n]},i=function(e){return void 0===e&&(e=17),function(e,t){return Array.from({length:e},(function(){return o(t)})).join("")}(e,"23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz")};function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return m}));var c={MODAL_OPEN:"modal.open",MODAL_CLOSE:"modal.close",MODAL_UPDATE:"modal.update",ERRORS:"errors"},u={BLOCK:"blockAction",VIEW_SUBMIT:"viewSubmit",VIEW_CLOSED:"viewClosed"},l={MESSAGE:"message",VIEW:"view"},h=new Map,d=function(e){var t=h.get(e);return h.delete(e),t},m=function(e){return new Promise((function(t,n){var o,u,l,m,p,f,g,v,y,b,O,j,P;o=e.appId,u=e.type,l=e.actionId,m=e.rid,p=e.mid,f=e.viewId,g=e.container,v=e.payload,y=function(e){var t=i();return h.set(t,e),setTimeout(d,5e3,t),t}(o);var w=function(e){try{throw d(y),e}catch(e){return n(e)}};try{return b={type:u,actionId:l,rid:m,mid:p,viewId:f,container:g,triggerId:y,payload:v},Promise.resolve(Promise.race([fetch(r.a.client.host+"/api/"+encodeURI("apps/ui.interaction/"+o),{method:"POST",body:r.a.client.getBody(b),headers:a({"x-visitor-token":r.a.credentials.token},r.a.client.getHeaders())}).then(r.a.client.handle),new Promise((function(e,t){setTimeout((function(){t(new Error(y))}),5e3)}))])).then((function(e){try{return j=(O=e).type,P=s(O,["type"]),t(function(e,t){var n=t.triggerId,r=s(t,["triggerId"]);if(h.has(n)&&d(n)){var o=r.view,i=r.viewId;if(o&&o.id&&(i=o.id),i)return[c.ERRORS].includes(e)?c.ERRORS:[c.MODAL_UPDATE].includes(e)?c.MODAL_UPDATE:[c.MODAL_OPEN].includes(e)?c.MODAL_OPEN:c.MODAL_ClOSE}}(j,P))}catch(e){return w(e)}}),w)}catch(e){w(e)}}))}},"t2/N":function(e,t,n){"use strict";n.r(t);var r=n("RNH9"),o=n("hosL"),i=n("XMrS"),a=n("U5IY"),s=n("Fl18"),c=n("/4k+"),u=n("cVMQ"),l=n("jdJj"),h=n("PyG4"),d=n("fsQa"),m=n("eanU"),p=n.n(m),f=n("gxdA"),g=n.n(f),v=n("ajAD"),y=n.n(v),b=n("dzn5"),O=n.n(b),j=n("Eo3F"),P=n.n(j),w=n("DkJZ"),C=n.n(w),T=n("2Wrb"),S=n.n(T),A=n("/1Qh"),k=n.n(A);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M=function(e){var t,n;function m(){for(var t,n=arguments.length,m=new Array(n),f=0;f<n;f++)m[f]=arguments[f];return(t=e.call.apply(e,[this].concat(m))||this).state={atBottom:!0,text:"",emojiPickerActive:!1},t.handleFilesDropTargetRef=function(e){t.filesDropTarget=e},t.handleMessagesContainerRef=function(e){t.messagesContainer=e?e.base:null},t.handleScrollTo=function(e){var n=t.props,r=n.onTop,o=n.onBottom;if(e===u.a.SCROLL_AT_BOTTOM)return t.setState({atBottom:!0}),void(o&&o());t.setState({atBottom:!1}),e===u.a.SCROLL_AT_TOP&&r&&r()},t.handleUploadClick=function(e){e.preventDefault(),t.filesDropTarget.browse()},t.handleSendClick=function(e){e.preventDefault(),t.handleSubmit(t.state.text)},t.handleSubmit=function(e){t.props.onSubmit&&(t.props.onSubmit(e),t.setState({text:""}),t.turnOffEmojiPicker())},t.handleChangeText=function(e){var n=e,r=t.props,o=r.onChangeText,i=r.limitTextLength;i&&i<e.length&&(n=n.substring(0,i)),t.setState({text:n}),o&&o(n)},t.toggleEmojiPickerState=function(){t.setState({emojiPickerActive:!t.state.emojiPickerActive})},t.handleEmojiSelect=function(e){t.toggleEmojiPickerState(),t.notifyEmojiSelect(e.native)},t.handleEmojiClick=function(){t.turnOffEmojiPicker()},t.turnOffEmojiPicker=function(){t.state.emojiPickerActive&&t.setState({emojiPickerActive:!t.state.emojiPickerActive})},t.render=function(e,n){var m=n.atBottom,f=void 0===m||m,v=n.text,b=e.color,j=e.title,w=e.fontColor,T=e.uid,A=e.agent,M=e.typingUsernames,E=e.avatarResolver,R=e.conversationFinishedMessage,_=e.loading,U=e.onUpload,I=e.messages,L=e.uploads,x=void 0!==L&&L,F=e.options,B=e.onChangeDepartment,q=e.onFinishChat,W=e.onRemoveUserData,N=e.onPrintTranscript,V=e.lastReadMessageId,Q=e.queueInfo,z=e.limitTextLength,H=e.resetLastAction,J=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["color","title","fontColor","uid","agent","typingUsernames","avatarResolver","conversationFinishedMessage","loading","onUpload","messages","uploads","options","onChangeDepartment","onFinishChat","onRemoveUserData","onPrintTranscript","lastReadMessageId","queueInfo","limitTextLength","resetLastAction"]);return Object(o.h)(l.a,D({color:b,title:j||d.a.t("Need help?"),fontColor:w,agent:A||null,queueInfo:Q,nopadding:!0,options:F,onChangeDepartment:B,onFinishChat:q,onRemoveUserData:W,className:Object(h.d)(k.a,"chat"),handleEmojiClick:t.handleEmojiClick},J),Object(o.h)(a.a,{ref:t.handleFilesDropTargetRef,overlayed:!0,overlayText:d.a.t("Drop here to upload a file"),onUpload:U},Object(o.h)(l.a.Content,{nopadding:!0},Object(o.h)("div",{id:"chat__messages",className:Object(h.d)(k.a,"chat__messages",{atBottom:f,loading:_})},Object(o.h)(u.a,{ref:t.handleMessagesContainerRef,avatarResolver:E,uid:T,messages:I,typingUsernames:M,conversationFinishedMessage:R,lastReadMessageId:V,onScrollTo:t.handleScrollTo,resetLastAction:H,handleEmojiClick:t.handleEmojiClick}),t.state.emojiPickerActive&&Object(o.h)(r.a,{style:{position:"absolute",zIndex:10,bottom:0,maxWidth:"90%",left:20,maxHeight:"90%"},showPreview:!1,showSkinTones:!1,sheetSize:64,onSelect:t.handleEmojiSelect,autoFocus:!0}))),Object(o.h)(l.a.Footer,{options:F?Object(o.h)(s.d,null,Object(o.h)(c.a.Group,null,N&&Object(o.h)(c.a.Item,{onClick:N,icon:O.a},d.a.t("Print Chat")),B&&Object(o.h)(c.a.Item,{onClick:B,icon:p.a},d.a.t("Change department")),W&&Object(o.h)(c.a.Item,{onClick:W,icon:P.a},d.a.t("Forget/Remove my data")),q&&Object(o.h)(c.a.Item,{danger:!0,onClick:q,icon:g.a},d.a.t("Finish this chat")))):null,limit:z?Object(o.h)(s.a,{limitTextLength:z,textLength:v.length}):null},Object(o.h)(i.a,{onUpload:U,onSubmit:t.handleSubmit,onChange:t.handleChangeText,placeholder:d.a.t("Type your message here"),value:v,notifyEmojiSelect:function(e){t.notifyEmojiSelect=e},handleEmojiClick:t.handleEmojiClick,pre:Object(o.h)(i.c,null,Object(o.h)(i.b,{onClick:t.toggleEmojiPickerState},Object(o.h)(S.a,{width:20}))),post:Object(o.h)(i.c,null,0===v.length&&x&&Object(o.h)(i.b,{onClick:t.handleUploadClick},Object(o.h)(y.a,{width:20})),v.length>0&&Object(o.h)(i.b,{onClick:t.handleSendClick},Object(o.h)(C.a,{width:20}))),limitTextLength:z}))))},t}return n=e,(t=m).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,m}(o.Component),E=n("Y3FI"),R=n("qPgm"),_=n("81xT"),U=n("qoWs"),I=n("YSmr"),L=n("UEyv"),x=n("vBLd"),F=n("Saaw"),B=n("kQFM");function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={room:null,connectingAgent:!1,queueSpot:0,triggerQueueMessage:!0,estimatedWaitTime:null},t.checkConnectingAgent=function(){return new Promise((function(e,n){var r,o,i,a,s,c,u,l,h,d;if(o=(r=t.props).connecting,i=r.queueInfo,s=(a=t.state).connectingAgent,c=a.queueSpot,u=a.estimatedWaitTime,l=o,h=i&&i.spot||0,d=i&&i.estimatedWaitTimeSeconds,l!==s||h!==c||d!==u)return t.state.connectingAgent=l,t.state.queueSpot=h,t.state.estimatedWaitTime=d,Promise.resolve(t.handleQueueMessage(o,i)).then(function(e){try{return Promise.resolve(t.handleConnectingAgentAlert(l,Object(U.b)(i))).then(function(e){try{return m.call(this)}catch(e){return n(e)}}.bind(this),n)}catch(e){return n(e)}}.bind(this),n);function m(){return e()}return m.call(this)}))},t.checkRoom=function(){var e=t.props.room,n=t.state.room;!e||n&&e._id===n._id||(t.state.room=e,setTimeout(F.e,500))},t.grantUser=function(){return new Promise((function(e,n){var r,o,i,a,s,c,u;return o=(r=t.props).token,i=r.user,a=r.guest,s=r.dispatch,i?e(i):(c=V({token:o},a),Promise.resolve(R.a.grantVisitor({visitor:c})).then((function(t){try{return u=t,Promise.resolve(s({user:u})).then((function(t){try{return e()}catch(e){return n(e)}}),n)}catch(e){return n(e)}}),n))}))},t.getRoom=function(){return new Promise((function(e,n){var r,o,i,a,s,c,u,l,m,p,f=function(e){return function(t){try{return Promise.resolve(i({loading:!1})).then(function(r){try{return e&&e.call(this,t)}catch(e){return n(e)}}.bind(this),n)}catch(e){return n(e)}}.bind(this)}.bind(this);return r=t.props,o=r.alerts,i=r.dispatch,a=r.room,s=r.messages,c=Object(F.c)(s),a?e(a):Promise.resolve(i({loading:!0})).then((function(t){try{var r=function(e){try{return m=e.data.error,p={id:Object(h.e)(),children:d.a.t("Error starting a new conversation: %{reason}",{reason:m}),error:!0,timeout:1e4},Promise.resolve(i({loading:!1,alerts:(o.push(p),o)})).then((function(t){try{throw Object(x.b)(m),e}catch(e){return n(e)}}),n)}catch(e){return f(n)(e)}};try{return u=Object(F.b)(),Promise.resolve(R.a.room(u)).then((function(t){try{return l=t,Promise.resolve(i({room:l,messages:c,noMoreMessages:!1})).then((function(t){try{return Promise.resolve(Object(F.d)()).then((function(t){try{return Object(x.a)("callback","chat-started"),f(e)(l)}catch(e){return r(e)}}),r)}catch(e){return r(e)}}),r)}catch(e){return r(e)}}),r)}catch(e){r(e)}}catch(e){return n(e)}}),n)}))},t.handleTop=function(){Object(F.f)()},t.startTyping=Object(h.p)((function(e){return new Promise((function(n,r){var o,i;return o=e.rid,i=e.username,Promise.resolve(R.a.notifyVisitorTyping(o,i,!0)).then((function(e){try{return t.stopTypingDebounced({rid:o,username:i}),n()}catch(e){return r(e)}}),r)}))}),4500),t.stopTyping=function(e){var t=e.rid,n=e.username;return R.a.notifyVisitorTyping(t,n,!1)},t.stopTypingDebounced=Object(h.f)(t.stopTyping,5e3),t.handleChangeText=function(){return new Promise((function(e,n){var r=t.props,o=r.user,i=r.room;return o&&o.username&&i&&i._id?(t.startTyping({rid:i._id,username:o.username}),e()):e()}))},t.resetLastAction=function(){var e=t.props,n=e.messages;(0,e.dispatch)({messages:n.map((function(e){return e.actionsVisible&&(e.actionsVisible=!1),e}))})},t.getAvatar=function(e,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=null),!n||r)return Object(h.h)(r||e);var o=t.props.defaultAvatar;return R.a.client.host+"/"+(o.url||o.defaultUrl)},t.handleSubmit=function(e){return new Promise((function(n,r){var o,i,a,s,c,u,l,d,m;return""===e.trim()?n():Promise.resolve(t.grantUser()).then((function(p){try{return Promise.resolve(t.getRoom()).then((function(p){try{o=p._id,i=t.props,a=i.alerts,s=i.dispatch,c=i.token,u=i.user,l=t.getAvatar(u.username,!0,u.name);var f=function(){try{return Promise.resolve(R.a.notifyVisitorTyping(o,u.username,!1)).then((function(e){try{return n()}catch(e){return r(e)}}),r)}catch(e){return r(e)}},g=function(e){try{return d=e.data.error,m={id:Object(h.e)(),children:d,error:!0,timeout:5e3},Promise.resolve(s({alerts:(a.push(m),a)})).then((function(e){try{return f()}catch(e){return r(e)}}),r)}catch(e){return r(e)}};try{return t.stopTypingDebounced.stop(),t.resetLastAction(),Promise.resolve(Promise.all([t.stopTyping({rid:o,username:u.username}),R.a.sendMessage({msg:Object(h.i)(e),token:c,rid:o,avatar:l})])).then((function(e){try{return f()}catch(e){return g(e)}}),g)}catch(e){g(e)}}catch(e){return r(e)}}),r)}catch(e){return r(e)}}),r)}))},t.doFileUpload=function(e,n){return new Promise((function(r,o){var i,a,s,c,u,l,m,p;i=t.props,a=i.alerts,s=i.dispatch;var f=function(){try{return r()}catch(e){return o(e)}},g=function(e){try{switch(c=e.data,u=c.reason,l=c.sizeAllowed,m=d.a.t("FileUpload Error"),u){case"error-type-not-allowed":m=d.a.t("Media Types Not Accepted.");break;case"error-size-not-allowed":m=d.a.t("File exceeds allowed size of %{size}.",{size:l})}return p={id:Object(h.e)(),children:m,error:!0,timeout:5e3},Promise.resolve(s({alerts:(a.push(p),a)})).then((function(e){try{return f()}catch(e){return o(e)}}),o)}catch(e){return o(e)}};try{return Promise.resolve(R.a.uploadFile({rid:e,file:n})).then((function(e){try{return f()}catch(e){return g(e)}}),g)}catch(e){g(e)}}))},t.handleUpload=function(e){return new Promise((function(n,r){var o;return Promise.resolve(t.grantUser()).then((function(i){try{return Promise.resolve(t.getRoom()).then((function(i){try{return o=i._id,e.forEach((function(e){return t.doFileUpload(o,e)})),n()}catch(e){return r(e)}}),r)}catch(e){return r(e)}}),r)}))},t.handleSoundStop=function(){return new Promise((function(e,n){var r,o,i,a;return o=(r=t.props).dispatch,a=void 0===(i=r.sound)?{}:i,Promise.resolve(o({sound:V(V({},a),{},{play:!1})})).then((function(t){try{return e()}catch(e){return n(e)}}),n)}))},t.onChangeDepartment=function(){Object(E.b)("/switch-department")},t.onFinishChat=function(){return new Promise((function(e,n){var r,o,i,a,s,c,u=function(e){return function(t){try{return Promise.resolve(i({loading:!1})).then(function(r){try{return Promise.resolve(Object(F.a)()).then(function(r){try{return e&&e.call(this,t)}catch(e){return n(e)}}.bind(this),n)}catch(e){return n(e)}}.bind(this),n)}catch(e){return n(e)}}.bind(this)}.bind(this);return Promise.resolve(_.a.confirm({text:d.a.t("Are you sure you want to finish this chat?")})).then(function(l){try{return l.success?(r=t.props,o=r.alerts,i=r.dispatch,a=r.room,s=(a=void 0===a?{}:a)._id,Promise.resolve(i({loading:!0})).then(function(t){try{var r=function(){try{return e()}catch(e){return n(e)}},a=function(e){try{return console.error(e),c={id:Object(h.e)(),children:d.a.t("Error closing chat."),error:!0,timeout:0},Promise.resolve(i({alerts:(o.push(c),o)})).then((function(e){try{return u(r)()}catch(e){return n(e)}}),n)}catch(e){return u(n)(e)}};try{if(s)return Promise.resolve(R.a.closeChat({rid:s})).then(function(e){try{return l.call(this)}catch(e){return a(e)}}.bind(this),a);function l(){return u(r)()}return l.call(this)}catch(e){a(e)}}catch(e){return n(e)}}.bind(this),n)):e()}catch(e){return n(e)}}.bind(this),n)}))},t.onRemoveUserData=function(){return new Promise((function(e,n){var r,o,i,a,s=function(e){return function(t){try{return Promise.resolve(Object(L.a)()).then(function(r){try{return Promise.resolve(i({loading:!1})).then(function(r){try{return Object(E.b)("/chat-finished"),e&&e.call(this,t)}catch(e){return n(e)}}.bind(this),n)}catch(e){return n(e)}}.bind(this),n)}catch(e){return n(e)}}.bind(this)}.bind(this);return Promise.resolve(_.a.confirm({text:d.a.t("Are you sure you want to remove all of your personal data?")})).then((function(c){try{return c.success?(r=t.props,o=r.alerts,i=r.dispatch,Promise.resolve(i({loading:!0})).then((function(t){try{var r=function(){try{return e()}catch(e){return n(e)}},c=function(e){try{return console.error(e),a={id:Object(h.e)(),children:d.a.t("Error removing user data."),error:!0,timeout:0},Promise.resolve(i({alerts:(o.push(a),o)})).then((function(e){try{return s(r)()}catch(e){return n(e)}}),n)}catch(e){return s(n)(e)}};try{return Promise.resolve(R.a.deleteVisitor()).then((function(e){try{return s(r)()}catch(e){return c(e)}}),c)}catch(e){c(e)}}catch(e){return n(e)}}),n)):e()}catch(e){return n(e)}}),n)}))},t.onPrintTranscript=function(){var e=document.getElementById("chat__messages").innerHTML,t=document.getElementsByTagName("head")[0].innerHTML,n=window.open(),r=n.document.createElement("script");r.innerHTML="window.print();",n.document.write(e),n.document.body.appendChild(r),n.document.head.innerHTML=t,n.document.close()},t.canSwitchDepartment=function(){var e=t.props,n=e.allowSwitchingDepartments,r=e.departments;return n&&(void 0===r?{}:r).filter((function(e){return e.showOnRegistration})).length>1},t.canFinishChat=function(){var e=t.props,n=e.room,r=e.connecting;return void 0!==n||r},t.canRemoveUserData=function(){return t.props.allowRemoveUserData},t.canPrintTranscript=function(){return t.props.transcript},t.showOptionsMenu=function(){return t.canSwitchDepartment()||t.canFinishChat()||t.canRemoveUserData()},t.render=function(e){var n=e.user,r=W(e,["user"]);return Object(o.h)(M,q({},r,{avatarResolver:t.getAvatar,uid:n&&n._id,onTop:t.handleTop,onChangeText:t.handleChangeText,onSubmit:t.handleSubmit,onUpload:t.handleUpload,options:t.showOptionsMenu(),onChangeDepartment:t.canSwitchDepartment()&&t.onChangeDepartment||null,onFinishChat:t.canFinishChat()&&t.onFinishChat||null,onRemoveUserData:t.canRemoveUserData()&&t.onRemoveUserData||null,onPrintTranscript:t.canPrintTranscript()&&t.onPrintTranscript||null,onSoundStop:t.handleSoundStop,resetLastAction:t.resetLastAction}))},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.handleConnectingAgentAlert=function(e,t){return new Promise(function(n,r){var o,i,a,s,c;return i=(o=this.props).alerts,a=o.dispatch,s=I.a.connectingAgentAlertId,c=i.filter((function(e){return e.id!==s})),e&&c.push({id:s,children:t||d.a.t("Please, wait for the next available agent.."),warning:!0,hideCloseButton:!0,timeout:0}),Promise.resolve(a({alerts:c})).then((function(e){try{return n()}catch(e){return r(e)}}),r)}.bind(this))},i.handleQueueMessage=function(e,t){return new Promise(function(n,r){var o,i,a,s,c,u,l,d,m,p;return t?(o=I.a.livechatQueueMessageId,a=(i=void 0===(i=t.message)?{}:i).text,s=i.user,c=this.state.triggerQueueMessage,this.props.room&&e&&a&&c?(this.state.triggerQueueMessage=!1,l=(u=this.props).dispatch,d=u.messages,m=new Date,p={_id:o,msg:a,u:s,ts:m.toISOString()},Promise.resolve(l({messages:Object(h.q)(d,p,(function(e){return e._id===p._id}),(function(e){return e.ts}))})).then((function(e){try{return n()}catch(e){return r(e)}}),r)):n()):n()}.bind(this))},i.componentDidMount=function(){return new Promise(function(e,t){return Promise.resolve(this.checkConnectingAgent()).then((function(n){try{return Object(F.e)(),e()}catch(e){return t(e)}}),t)}.bind(this))},i.componentDidUpdate=function(e){return new Promise(function(t,n){var r,o,i,a,s,c,u,l,h;return o=(r=this.props).messages,i=r.visible,a=r.minimized,s=r.dispatch,c=e.messages,u=e.alerts,o&&c&&o.length!==c.length&&i&&!a&&(l=o[o.length-1],h=c[c.length-1],(l&&h&&l._id!==h._id||1===o.length&&0===c.length)&&s({alerts:u.filter((function(e){return e.id!==I.a.unreadMessagesAlertId})),unread:null,lastReadMessageId:l._id})),Promise.resolve(this.checkConnectingAgent()).then(function(e){try{return this.checkRoom(),t()}catch(e){return n(e)}}.bind(this),n)}.bind(this))},i.componentWillUnmount=function(){this.handleConnectingAgentAlert(!1)},r}(o.Component),H=function(e){var t=e.ref,n=W(e,["ref"]);return Object(o.h)(B.a,null,(function(e){var r=e.config,i=r.settings,a=(i=void 0===i?{}:i).fileUpload,s=i.guestDefaultAvatar,c=i.allowSwitchingDepartments,u=i.forceAcceptDataProcessingConsent,l=i.showConnecting,m=i.transcript,p=i.limitTextLength,f=r.messages,g=(f=void 0===f?{}:f).conversationFinishedMessage,v=r.theme,y=(v=void 0===v?{}:v).color,b=v.title,O=r.departments,j=void 0===O?{}:O,P=e.iframe,w=(P=void 0===P?{}:P).theme,C=(w=void 0===w?{}:w).color,T=w.fontColor,S=w.iconColor,A=w.title,k=P.guest,D=e.token,M=e.agent,E=e.sound,R=e.user,_=e.room,U=e.messages,I=e.noMoreMessages,L=e.typing,x=e.loading,F=e.dispatch,B=e.alerts,W=e.visible,N=e.unread,V=e.lastReadMessageId,Q=e.triggerAgent,H=e.queueInfo;return Object(o.h)(z,q({ref:t},n,{theme:{color:C||y,fontColor:T,iconColor:S,title:A},title:A||b||d.a.t("Need help?"),sound:E,token:D,user:R,agent:M?{_id:M._id,name:M.name,status:M.status,email:M.emails&&M.emails[0]&&M.emails[0].address,username:M.username,phone:M.phone&&M.phone[0]&&M.phone[0].phoneNumber||M.customFields&&M.customFields.phone,avatar:M.username?{description:M.username,src:Object(h.h)(M.username)}:void 0}:void 0,room:_,messages:U&&U.filter((function(e){return Object(h.c)(e)})),noMoreMessages:I,emoji:!0,uploads:a,typingUsernames:Array.isArray(L)?L:[],loading:x,showConnecting:l,connecting:!(!_||M||!l&&!H),dispatch:F,departments:j,defaultAvatar:s,allowSwitchingDepartments:c,conversationFinishedMessage:g||d.a.t("Conversation finished"),allowRemoveUserData:u,transcript:m,alerts:B,visible:W,unread:N,lastReadMessageId:V,guest:k,triggerAgent:Q,queueInfo:H?{spot:H.spot,estimatedWaitTimeSeconds:H.estimatedWaitTimeSeconds,message:H.message}:void 0,limitTextLength:p}))}))},J=H;n.d(t,"Chat",(function(){return M})),n.d(t,"ChatContainer",(function(){return z})),n.d(t,"ChatConnector",(function(){return H})),n.d(t,"default",(function(){return J}))}}]);
//# sourceMappingURL=route-Chat.chunk.0816b.js.map