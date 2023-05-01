const body = document.querySelector("body");

const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

// Use the color scheme variable in your code
if (isDarkMode) {
    body.classList.add("dark");
    body.classList.remove("light");
} else {
    body.classList.add("light");
    body.classList.remove("dark");
}

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

// user Information
const avatar = document.querySelector(".user-avatar");
const name = document.querySelector(".name");
const login = document.querySelector(".login");
const joined = document.querySelector(".joined-date");

// Bio
const bio = document.querySelector(".bio");

// stat
const repo = document.querySelector(".repo");
const follower = document.querySelector(".follower");
const following = document.querySelector(".following");

// links
const place = document.querySelector(".location");
const twtr = document.querySelector(".twtr");
const blog = document.querySelector(".blog");
const work = document.querySelector(".work");

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

search.addEventListener("click", (e) => {
    e.preventDefault();
    let userName = input.value.trim();
    // userName = "RobiMez";
    // userName = "R4nn3r";

    if (userName.length == 0) {
        input.parentNode.classList.add("error");
        input.parentNode.querySelector("img").src =
            "assets/images/icon-search-error.svg";
    } else {
        input.parentNode.classList.remove("error");

        fetch(`https://api.github.com/users/${userName}`)
            .then((response) => response.json())
            .then((data) => {
                userName = "";
                avatar.src = data.avatar_url;
                name.innerText = data.name;

                if (data.name == "" || data.name == null) {
                    name.innerText = "Not Available";
                }
                login.innerText = `@${data.login}`;
                login.href = `https://github.com/${userName}`;

                let dates = data.created_at.split("T")[0].split("-");
                let yyyy = dates[0];
                let mm = months[dates[1] - 1];
                let dd = dates[2];

                joined.innerText = `Joined ${dd} ${mm} ${yyyy}`;

                if (data.bio) {
                    bio.innerText = data.bio;
                }

                repo.innerText = data.public_repos;
                follower.innerText = data.followers;
                following.innerText = data.following;

                place.innerText = data.location;
                twtr.innerText = data.twitter_username;
                blog.innerText = data.blog;
                work.innerText = data.company;

                // Change the Text if links not available
                if (data.location == "" || data.location == null) {
                    place.innerText = "Not Available";
                }
                if (
                    data.twitter_username == "" ||
                    data.twitter_username == null
                ) {
                    twtr.innerText = "Not Available";
                }
                if (data.blog == "" || data.blog == null) {
                    blog.innerText = "Not Available";
                }

                if (data.company == null || data.company == "") {
                    work.innerText = "Not Available";
                }
            });
    }
});
