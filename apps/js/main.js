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

// Getting the data from the API
const search = document.querySelector(".search__btn");
const input = document.querySelector(".search__box");

search.addEventListener("click", (e) => {
    e.preventDefault();
    const userName = input.value.trim();

    if (userName.length == 0) {
        input.parentNode.classList.add("error");
        input.parentNode.querySelector("img").src =
            "assets/images/icon-search-error.svg";
    } else {
        input.parentNode.classList.remove("error");
    }
});

/* function find() {
    console.log("Clicked on search");



    console.log("User name: " + userName);
}
 */
