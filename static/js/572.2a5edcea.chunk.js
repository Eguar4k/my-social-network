"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[572],{2572:function(e,s,a){a.r(s),a.d(s,{default:function(){return k}});var n=a(1413),r=(a(2791),"Dialogs_dialogs__g1klt"),i="Dialogs_dialogsItem__zY6ai",t="Dialogs_formControl__7Kv+J",u="Dialogs_messages__jaF99",d="Dialogs_error__k3mcw",o={messages:"DialogItem_messages__-BCVd",message:"DialogItem_message__wHPcW"},l=a(1087),g=a(184),c=function(e){var s="/dialogitem"+e.id;return(0,g.jsx)("div",{children:(0,g.jsx)(l.OL,{to:s,className:function(e){return e.isActive?o.active:o.dialog},children:e.name})})},m="MessageItem_message__4ctgw",x=function(e){return(0,g.jsx)("div",{className:m,children:e.message})},f=a(4165),h=a(5861),v=a(1134),_=function(){var e=(0,h.Z)((0,f.Z)().mark((function e(s){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{values:s.newMessageText?s:{},errors:s.newMessageText?{}:{newMessageText:{type:"required",message:"Message is require field!"}}});case 1:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),j=function(e){var s,a=e.addMessageText,r=(0,v.cI)({resolver:_}),i=r.register,u=r.handleSubmit,o=r.formState.errors,l=r.reset,c=u((function(e){a(e.newMessageText),l()})),m=null===o||void 0===o?void 0:o.newMessageText;return(0,g.jsxs)("form",{onSubmit:c,children:[(0,g.jsx)("div",{children:(0,g.jsx)("button",{children:"Send message"})}),(0,g.jsxs)("div",{children:[(0,g.jsx)("textarea",(0,n.Z)((0,n.Z)({className:m&&t},i("newMessageText",{required:"Message is require field!",maxLength:{value:5,message:"Max length is 10 simbols"}})),{},{placeholder:"add new text"})),m&&(0,g.jsx)("div",{className:d,children:null===(s=o.newMessageText)||void 0===s?void 0:s.message})]})]})},w=function(e){var s=e.dialogsPage,a=s.dialog.map((function(e){return(0,g.jsx)(c,{name:e.name,id:e.id},e.id)})),n=s.message.map((function(e){return(0,g.jsx)(x,{message:e.message},e.id)}));return(0,g.jsxs)("div",{className:r,children:[(0,g.jsx)("div",{className:i,children:a}),(0,g.jsx)("div",{className:u,children:n}),(0,g.jsx)(j,{addMessageText:e.addMessageText})]})},M=a(9403),p=a(3531),T=a(5987),N=a(7689),Z=["isAuth"],b=function(e){return{isAuth:e.auth.isAuth}};var k=(0,a(7781).qC)((0,p.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(0,n.Z)({},M.N)),(function(e){return(0,p.$j)(b)((function(s){s.isAuth;var a=(0,T.Z)(s,Z);return s.isAuth?(0,g.jsx)(e,(0,n.Z)({},a)):(0,g.jsx)(N.Fg,{to:"/login"})}))}))(w)}}]);
//# sourceMappingURL=572.2a5edcea.chunk.js.map