import{S as d,_,r as i,o as p,a as g,b as e,t as m,w as c,l as u,m as f,j as v,V as h,k}from"./require-cTYvlj5B.js";function w(t,s){return d.post("api/register/user",{username:t,password:s})}const x={name:"Login",setup(){const t=i(""),s=i(""),r=i("");function o(){w(t.value,s.value).then(function(n){r.value=n.msg,n.msg=="register_success"}).catch(function(n){r.value=n.message,console.log(n)})}return{user_name:t,password:s,msg:r,register_users:o}}},b={class:"login"},V={class:"login__header"},y=e("h2",null,[e("svg",{class:"icon"},[e("use",{"xlink:href":"#icon-lock"})]),f("注册 ")],-1),B={class:"login__form"},S=e("label",{for:"email"},"用户名",-1),C=e("label",{for:"password"},"密码",-1);function D(t,s,r,o,n,P){return p(),g("div",b,[e("header",V,[y,e("h4",null,m(o.msg),1)]),e("div",B,[e("div",null,[S,c(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>o.user_name=a),type:"text",name:"user_name",placeholder:"用户名"},null,512),[[u,o.user_name]])]),e("div",null,[C,c(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>o.password=a),type:"password",name:"password",placeholder:"密码"},null,512),[[u,o.password]])]),e("div",null,[e("button",{onClick:s[2]||(s[2]=a=>o.register_users())},"注册")])])])}const N=_(x,[["render",D]]),l=v(N);l.config.globalProperties.$axios=d;l.config.globalProperties.$cookies=h;l.use(k);l.mount("#app");
