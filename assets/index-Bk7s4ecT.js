import{o as a,c,a as s,b as S,n as v,t as p,d,w as y,r as l,F as g,e as b,f as N,g as R,h as k}from"./index-BrlVpLbb.js";function U(n){return{all:n=n||new Map,on:function(t,i){var e=n.get(t);e?e.push(i):n.set(t,[i])},off:function(t,i){var e=n.get(t);e&&(i?e.splice(e.indexOf(i)>>>0,1):n.set(t,[]))},emit:function(t,i){var e=n.get(t);e&&e.slice().map(function(o){o(i)}),(e=n.get("*"))&&e.slice().map(function(o){o(t,i)})}}}const m=U(),_=(n,t)=>{const i=n.__vccOpts||n;for(const[e,o]of t)i[e]=o;return i},M={data(){return{isShow:!1}},mounted(){m.on("show_intro",n=>{this.isShow=n})}},E={class:"detail_intro"},P={class:"p_title"};function B(n,t,i,e,o,r){return a(),c("div",{class:v(["intro_win",{show:o.isShow===!0}]),id:"intro"},[s("div",E,[s("div",P,[t[2]||(t[2]=s("p",{class:"p_title_text"},"自我介绍",-1)),s("button",{class:"p_close",onClick:t[0]||(t[0]=u=>o.isShow=!1),id:"i_close"},t[1]||(t[1]=[s("i",{class:"fas fa-xmark"},null,-1)]))]),t[3]||(t[3]=S('<div class="detail_frame"><div class="detail"><div> 我是 明善/餐点🍳<br> 也可称呼33/餐餐<br> 05后 生日 2.8 <br> 我没有雷点 很好交流<br> QQ：315340334 <br><span><hr></span> <br> 是个画画人！oc浓度中等———orz <br> 也可以一起打游戏！端游或者手游都可以哦^• ^～<br> （此网站有连接我的steam主页）<br> 混圈网站有写（敲敲）<br><span><hr></span> <br> 关于空间<br> 1.日常发疯/负能/转发 <br> 2.我的绘画成品/截图 <br> 3.还有一些别的XD <br><hr> <br> 亲友欢迎！语音直播可 </div></div></div>',1))])],2)}const O=_(M,[["render",B]]),T={data(){return{isShow:!1,sonaTitle:"",imgList:["../assets/img/sona01.jpg","../assets/img/sona02.png","../assets/img/sona03.jpg"]}},mounted(){m.on("sona_intro",n=>{this.isShow=n}),m.on("sona_title",n=>{this.sonaTitle=n})},methods:{getURL(n){return new URL(n,import.meta.url).href}}},D={class:"sona"},W={class:"p_title"},z={class:"p_title_text",id:"sona_title"},j={class:"s_frame"},A={class:"s_img"};function V(n,t,i,e,o,r){const u=l("el-image"),w=l("el-carousel-item"),$=l("el-carousel");return a(),c("div",{class:v(["sona_intro",{show:o.isShow===!0,hide:o.isShow===!1}]),id:"sona"},[s("div",D,[s("div",W,[s("p",z,p(o.sonaTitle),1),s("button",{class:"p_close",id:"s_close",onClick:t[0]||(t[0]=f=>o.isShow=!1)},t[1]||(t[1]=[s("i",{class:"fas fa-xmark"},null,-1)]))]),s("div",j,[s("div",A,[d($,{class:"s_carousel",height:"100%",interval:"0","motion-blur":""},{default:y(()=>[(a(!0),c(g,null,b(o.imgList,f=>(a(),N(w,{key:f},{default:y(()=>[d(u,{class:"img",src:r.getURL(f),alt:"",fit:"contain"},null,8,["src"])]),_:2},1024))),128))]),_:1})])])])],2)}const q=_(T,[["render",V],["__scopeId","data-v-bd7264b6"]]),G=""+new URL("wechat_code-DERVf7mS.jpg",import.meta.url).href,F=""+new URL("alipay_code-BWM08RgT.jpg",import.meta.url).href,H={data(){return{isShow:!1}},mounted(){m.on("cnpay",n=>{this.isShow=n})}},K={class:"payments"},Q={class:"p_title"};function Z(n,t,i,e,o,r){return a(),c("div",{class:v(["cnpay",{show:o.isShow===!0}]),id:"pay"},[s("div",K,[s("div",Q,[t[2]||(t[2]=s("p",{class:"p_title_text"},"付款码",-1)),s("button",{class:"p_close",id:"p_close",onClick:t[0]||(t[0]=u=>o.isShow=!1)},t[1]||(t[1]=[s("i",{class:"fas fa-xmark"},null,-1)]))]),t[3]||(t[3]=s("div",{class:"p_frame"},[s("div",{class:"p_qr"},[s("img",{src:G,alt:"微信支付码"}),s("img",{src:F,alt:"支付宝支付码"})])],-1))])],2)}const X=_(H,[["render",Z]]),J=""+new URL("char1-BPqqe7EX.png",import.meta.url).href,Y={data(){return{margins:[123,120,118,132.5,145,143.5],num:0,clicked:!1}},methods:{toggleChange(){let n=Math.round(Math.random()*5);for(;n===this.num;)n=Math.round(Math.random()*5);this.num=n,this.clicked=!0},getURL(n){return new URL(n,import.meta.url).href}}},tt={class:"main_character"},st=["src"];function nt(n,t,i,e,o,r){return a(),c("div",tt,[s("div",{class:"face_inner",onClick:t[0]||(t[0]=u=>r.toggleChange())},[s("div",{class:v(["msgbox",{hide:o.clicked===!0}])},"点她 ->",2),s("img",{src:r.getURL(`../assets/img/face${o.num+1}.png`),alt:"",class:"character_face",style:R({top:o.margins[o.num]+"px"})},null,12,st),t[1]||(t[1]=s("img",{src:J,alt:"",class:"character_itself"},null,-1))])])}const ot=_(Y,[["render",nt],["__scopeId","data-v-8987160e"]]),et=""+new URL("char2-B3kRO7BH.png",import.meta.url).href,it={},at={class:"greet_character"};function rt(n,t){return a(),c("div",at,t[0]||(t[0]=[s("div",{class:"greet_inner"},[s("div",{class:"msgbox"},"Hi~!"),s("img",{src:et,alt:""})],-1)]))}const ct=_(it,[["render",rt],["__scopeId","data-v-13e8cddb"]]),lt=""+new URL("char3-CEtGFZ9g.png",import.meta.url).href,dt={},mt={class:"character_mobile"};function _t(n,t){return a(),c("div",mt,t[0]||(t[0]=[s("img",{src:lt,alt:""},null,-1)]))}const ut=_(dt,[["render",_t],["__scopeId","data-v-5d30b57b"]]),pt={data(){return{amount:[0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]}},created(){},methods:{getNum(){return Math.round(Math.random()*4)+1},getURL(n){return new URL(n,import.meta.url).href}}},ft={class:"rains"},gt=["src"];function ht(n,t,i,e,o,r){return a(),c("div",ft,[(a(!0),c(g,null,b(o.amount,u=>(a(),c("span",null,[s("img",{src:r.getURL(`../assets/img/rain${r.getNum()}.png`),alt:""},null,8,gt)]))),256))])}const vt=_(pt,[["render",ht],["__scopeId","data-v-453bf50a"]]),bt={data(){return{amount:[0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]}},created(){},methods:{getNum(){return Math.round(Math.random()*4)+1},getURL(n){return new URL(n,import.meta.url).href}}},wt={class:"rains"},$t=["src"];function kt(n,t,i,e,o,r){return a(),c("div",wt,[(a(!0),c(g,null,b(o.amount,u=>(a(),c("span",null,[s("img",{src:r.getURL(`../assets/img/rain${r.getNum()}.png`),alt:""},null,8,$t)]))),256))])}const yt=_(bt,[["render",kt],["__scopeId","data-v-40d38ce4"]]),St=""+new URL("pfp-Be22y3HT.png",import.meta.url).href,xt={components:{Image_rain:vt,Chatacter_mobile:ut,Character_greet:ct,intro_win:O,sona_intro:q,cnpay:X,chatacter_face:ot,image_rain2:yt},data(){return{introCN:{main:["咚啵","委托","支付宝/微信支付","关于我","展示设定","我的设定"],aboutme:["画师","CN/EN","She/her","Dandy's World/Pokemon/Splatoon/TAWOG/South Park","很高兴认识你^ ^"]},introEN:{main:["KnockyPo","Commission","Alipay/We Chat","About me","Show OC","My OC"],aboutme:["Artist ","CN/EN","She/her","Dandy's World/Pokemon/Splatoon/TAWOG/South Park","Nice to meet you^ ^"]},chosenIntro:{},langStat:0}},created(){var n=navigator.language||navigator.userLanguage;console.log(n),n.indexOf("zh")!==-1?this.chosenIntro=this.introCN:this.chosenIntro=this.introEN,setTimeout(()=>{m.emit("sona_title",this.chosenIntro.main[5])},0)},methods:{showIntro(){console.log("emit"),m.emit("show_intro",!0)},showSona(){console.log("emit"),m.emit("sona_intro",!0)},showCnPay(){console.log("emit"),m.emit("cnpay",!0)},toggleLang(){this.langStat===0?(this.langStat=1,this.chosenIntro=this.introEN):(this.langStat=0,this.chosenIntro=this.introCN),m.emit("sona_title",this.chosenIntro.main[5])}}},Ct={class:"page_bg"},Lt={class:"main"},It={class:"introduction"},Nt={class:"intro_flex"},Rt={class:"intro_left"},Ut={id:"dwem"},Mt={class:"btn_form"},Et={class:"intro_right"},Pt={class:"about_title"},Bt={id:"about_me"},Ot={class:"intro_cont"},Tt={class:"intro_info"},Dt={class:"btn_form",id:"s_show"};function Wt(n,t,i,e,o,r){const u=l("image_rain"),w=l("image_rain2"),$=l("sona_intro"),f=l("intro_win"),x=l("cnpay"),C=l("chatacter_face"),L=l("character_greet"),I=l("chatacter_mobile");return a(),c(g,null,[s("div",Ct,[d(u),d(w)]),s("div",null,[d($),d(f),d(x),d(C),d(L),d(I),t[18]||(t[18]=s("h1",{class:"dwem33"},"KnockyPo",-1)),s("div",Lt,[s("div",It,[t[15]||(t[15]=s("hr",null,null,-1)),s("div",Nt,[s("div",Rt,[t[6]||(t[6]=s("img",{src:St,alt:"",class:"pfp"},null,-1)),s("h3",Ut,p(o.chosenIntro.main[0]),1),t[7]||(t[7]=s("div",{class:"gap"},null,-1)),s("div",Mt,[s("button",{class:"btn_link",id:"p_show",onClick:t[0]||(t[0]=h=>r.showCnPay())},[t[3]||(t[3]=s("i",{class:"fab fa-alipay"},null,-1)),t[4]||(t[4]=k()),t[5]||(t[5]=s("i",{class:"fab fa-weixin"},null,-1)),k(" "+p(o.chosenIntro.main[2]),1)])]),t[8]||(t[8]=s("div",{class:"gap"},null,-1)),t[9]||(t[9]=s("p",{class:"email"},"knockypo@gmail.com",-1))]),s("div",Et,[s("div",Pt,[s("h3",Bt,p(o.chosenIntro.main[3]),1),s("div",null,[s("button",{class:"btn_link lang_switch",id:"switch",onClick:t[1]||(t[1]=h=>r.toggleLang())},t[10]||(t[10]=[s("i",{class:"fas fa-language"},null,-1)]))])]),t[13]||(t[13]=s("div",{class:"hr"},null,-1)),s("ul",Ot,[(a(!0),c(g,null,b(o.chosenIntro.aboutme,h=>(a(),c("li",null,p(h),1))),256))]),t[14]||(t[14]=s("div",{class:"gap"},null,-1)),s("div",Tt,[s("div",Dt,[s("button",{class:"btn_link",id:"show_oc",onClick:t[2]||(t[2]=h=>r.showSona())},[t[11]||(t[11]=s("i",{class:"fas fa-heart"},null,-1)),k(" "+p(o.chosenIntro.main[4]),1)])]),t[12]||(t[12]=s("div",{class:"btn_form"},[s("button",{class:"btn_link"},"Discord: KnockyPo")],-1))])])]),t[16]||(t[16]=s("hr",null,null,-1))]),t[17]||(t[17]=S('<div class="link" data-v-93c67d1c><div data-v-93c67d1c><form action="https://discord.gg/52YyZEwb" data-v-93c67d1c><button data-v-93c67d1c><i class="fab fa-discord" data-v-93c67d1c></i></button></form></div><div data-v-93c67d1c><form action="https://twitter.com/dwem33" data-v-93c67d1c><button data-v-93c67d1c><i class="fab fa-twitter" data-v-93c67d1c></i></button></form></div><div data-v-93c67d1c><form action="https://open.spotify.com/user/31ntc57nlcdaf4q7ljeum5vx75ny?si=215246fbc6d64b33" data-v-93c67d1c><button data-v-93c67d1c><i class="fab fa-spotify" data-v-93c67d1c></i></button></form></div><div data-v-93c67d1c><form action="https://www.instagram.com/dwem33/?igshid=ZGUzMzM3NWJiOQ%3D%3D" data-v-93c67d1c><button data-v-93c67d1c><i class="fab fa-instagram" data-v-93c67d1c></i></button></form></div><div data-v-93c67d1c><form action="https://steamcommunity.com/profiles/76561198987873909" data-v-93c67d1c><button data-v-93c67d1c><i class="fab fa-steam" data-v-93c67d1c></i></button></form></div></div>',1))])])],64)}const jt=_(xt,[["render",Wt],["__scopeId","data-v-93c67d1c"]]);export{jt as default};
