const p_window = document.getElementById("pay");
const close = document.getElementById("p_close");
const show = document.getElementById("p_show");
function showWindow() {
    p_window.style.display = "flex";
    setTimeout(function () { p_window.style.opacity = "100%"; }, 0);


}

function hideWindow() {
    p_window.style.opacity = "0%";
    setTimeout(function () { p_window.style.display = "none"; }, 320);
    ;
}

p_show.onclick = showWindow;
close.onclick = hideWindow;
