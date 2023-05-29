const introCN = ['画师', 'CN/EN', 'INFP | She/her', '我会创作 Unicorn War / DNAxCAT / FNAF / Roblox / TAWOG / PTP 的作品（我的圈子）', '交友不拒^ ^'];
const introEN = ['Artist ', 'CN/EN', 'INFP | She/her', 'I will create works of Unicorn War / DNAxCAT / FNAF / Roblox / TAWOG / PTP (My circle of friends)', 'Welcome to be friends with me.^ ^'];
const intro_id = [
    document.getElementById("intro_job"),
    document.getElementById("intro_lang"),
    document.getElementById("intro_pers"),
    document.getElementById("intro_hobb"),
    document.getElementById("intro_note")
];
const html = document.getElementById("html");
var langSwitch = document.getElementById("switch");
var lang = "cn";
function introLangChange() {
    if (lang === "cn") {
        lang = "en";
        for (i = 0; i < introEN.length; i++) {
            intro_id[i].innerHTML = introEN[i];
        }
    }
    else {
        lang = "cn";
        for (i = 0; i < introCN.length; i++) {
            intro_id[i].innerHTML = introCN[i];
        }
    }
}
langSwitch.onclick = introLangChange;