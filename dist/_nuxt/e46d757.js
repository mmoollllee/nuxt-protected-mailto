(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{162:function(t,n,o){"use strict";var e=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;t.exports=function(t){return!(t.length>320)&&e.test(t)}},163:function(t,n,o){"use strict";o.r(n);o(117),o(83),o(116),o(28);var e=o(162),r=o.n(e);function c(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return"string"==typeof t&&(t.endsWith(",")&&(t=t.substring(0,t.length-1)),t.startsWith(",")&&(t=t.substring(1)),t=t.split(",")),t=t.map((function(t){return t.trim()})),n?t:o?t.join(", "):t.join(",")}function l(t){var n=!0;return(t=c(t,!0,!1)).forEach((function(t){r()(t)||(n=!1)})),n}var d={props:{mail:{type:[String,Array],required:!0,validator:function(t){return l(t)}},cc:{type:[String,Array],default:void 0,validator:function(t){return l(t)}},bcc:{type:[String,Array],default:void 0,validator:function(t){return l(t)}},subject:{type:String,default:void 0},body:{type:String,default:void 0}},computed:{encoded:function(){for(var t=c(this.mail),n=[],i=t.length-1;i>=0;i--)n.unshift(["&#",t.charCodeAt(i),";"].join(""));return n.join("")}},methods:{mailtoHandler:function(t){t.preventDefault();var n,body,o,e,r,l=["mailto:",c(this.mail),(n=this.subject,body=this.body,o=this.cc,e=this.bcc,r=[],o=void 0!==o?"CC=".concat(c(o)):null,e=void 0!==e?"BCC=".concat(c(e)):null,n=void 0!==n?"subject=".concat(encodeURIComponent(n)):null,body=void 0!==body?"body=".concat(encodeURIComponent(body)):null,o&&r.push(o),e&&r.push(e),n&&r.push(n),body&&r.push(body),r.length>0?"?".concat(r.join("&")):"")];window.location.href=l.join("")}}},f=o(34),component=Object(f.a)(d,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("a",{attrs:{href:"#"},on:{click:t.mailtoHandler}},[t._t("default",(function(){return[o("span",{domProps:{innerHTML:t._s(t.encoded)}})]}))],2)}),[],!1,null,null,null);n.default=component.exports}}]);