import * as methods from './Methods.js';

export const i_window = document.getElementById("intro");
const i_close = document.getElementById("i_close");
const i_show = document.getElementById("show_intro");
export const p_window = document.getElementById("pay");
const p_close = document.getElementById("p_close");
const p_show = document.getElementById("p_show");
export const s_window = document.getElementById("sona");
const s_show = document.getElementById("s_show");
const s_close = document.getElementById("s_close");
export function showWindow(w_window) {
    w_window.style.display = "flex";
    setTimeout(function () { w_window.style.opacity = "100%"; }, 0);


}

export function hideWindow(w_window) {
    w_window.style.opacity = "0%";
    setTimeout(function () { w_window.style.display = "none"; }, 320);
    ;
}

p_show.addEventListener("click", methods.pay_showwindow)
p_close.addEventListener("click", methods.pay_hidewindow);
i_show.addEventListener("click", methods.intro_showwindow);
i_close.addEventListener("click", methods.intro_hidewindow);
s_show.addEventListener("click", methods.sona_showwindow);
s_close.addEventListener("click", methods.sona_hidewindow);