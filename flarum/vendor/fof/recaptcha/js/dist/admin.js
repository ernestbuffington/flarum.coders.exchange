(()=>{var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const a=flarum.core.compat["admin/app"];var r=e.n(a);r().initializers.add("fof/recaptcha",(function(){r().extensionData.for("fof-recaptcha").registerSetting({label:r().translator.trans("fof-recaptcha.admin.settings.help_text",{a:m("a",{href:"https://www.google.com/recaptcha/admin",target:"_blank",rel:"noopener"})}),type:"hidden"}).registerSetting({setting:"fof-recaptcha.type",label:r().translator.trans("fof-recaptcha.admin.settings.type_label"),options:{checkbox:"Checkbox",invisible:"Invisible"},required:!0,default:"checkbox",type:"select"}).registerSetting({setting:"fof-recaptcha.credentials.site",label:r().translator.trans("fof-recaptcha.admin.settings.site_key_label"),type:"text",required:!0}).registerSetting({setting:"fof-recaptcha.credentials.secret",label:r().translator.trans("fof-recaptcha.admin.settings.secret_key_label"),type:"password",required:!0}).registerPermission({permission:"fof-recaptcha.postWithoutCaptcha",label:r().translator.trans("fof-recaptcha.admin.permissions.post_without_captcha"),icon:"fas fa-robot"},"reply")}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map