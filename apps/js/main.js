const body = document.querySelector("body");
function switch_theme(btn) {
    if (body.classList.contains("light")) {
        body.classList.add("dark");
        body.classList.remove("light");
        btn.querySelector("p").innerText = "Light";
        btn.querySelector("img").src = "assets/images/icon-sun.svg";
    } else {
        body.classList.add("light");
        body.classList.remove("dark");
        btn.querySelector("p").innerText = "Dark";
        btn.querySelector("img").src = "assets/images/icon-moon.svg";
    }
}


