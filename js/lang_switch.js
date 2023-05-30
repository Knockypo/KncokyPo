const introCN = [
    '明善',
    '<i class="fas fa-scroll"></i> 委托',
    '<i class="fab fa-alipay"></i> <i class="fab fa-weixin"></i> 支付宝/微信支付',
    '关于我',
    '画师',
    'CN/EN',
    'INFP | She/her',
    '我会创作 Unicorn Wars / DNAxCAT / FNAF / Roblox / TAWOG / PTP /South Park 的作品（我的圈子）',
    '交友不拒^ ^',
    '我的设定',
    '<i class="fas fa-heart"></i> 展示设定'
];
const introEN = [
    'Moonshine',
    '<i class="fas fa-scroll"></i> Commission',
    '<i class="fab fa-alipay"></i> <i class="fab fa-weixin"></i> Alipay/We Chat',
    'About me',
    'Artist ',
    'CN/EN',
    'INFP | She/her',
    'I will create works of Unicorn Wars / DNAxCAT / FNAF / Roblox / TAWOG / PTP / South Park (My circle of friends)',
    'Welcome to be friends with me.^ ^',
    'My OC',
    '<i class="fas fa-heart"></i> Show OC'
];
const intro_id = [
    document.getElementById("dwem"),
    document.getElementById("commission"),
    document.getElementById("p_show"),
    document.getElementById("about_me"),
    document.getElementById("intro_job"),
    document.getElementById("intro_lang"),
    document.getElementById("intro_pers"),
    document.getElementById("intro_hobb"),
    document.getElementById("intro_note"),
    document.getElementById("sona_title"),
    document.getElementById("show_oc")
];
const html_ = document.getElementById("html");
var langSwitch = document.getElementById("switch");
var lang = "cn";
function introLangChange() {
    if (lang === "cn") {
        lang = "en";
        for (i = 0; i < introEN.length; i++) {
            intro_id[i].innerHTML = introEN[i];
        }
        html_.lang = "en";
    }
    else {
        lang = "cn";
        for (i = 0; i < introCN.length; i++) {
            intro_id[i].innerHTML = introCN[i];
        }
        html_.lang = "zh-CN";
    }
}
langSwitch.onclick = introLangChange;