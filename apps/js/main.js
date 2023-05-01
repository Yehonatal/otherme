const body = document.querySelector("body");
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themeBtn = document.querySelector(".theme-btn");
const searchBtn = document.querySelector(".search__btn");
const searchBox = document.querySelector(".search__box");
const userAvatar = document.querySelector(".user-avatar");
const name = document.querySelector(".name");
const userLogin = document.querySelector(".login");
const joinedDate = document.querySelector(".joined-date");
const userBio = document.querySelector(".bio");
const userRepo = document.querySelector(".repo");
const userFollower = document.querySelector(".follower");
const userFollowing = document.querySelector(".following");
const userPlace = document.querySelector(".location");
const userTwtr = document.querySelector(".twtr");
const userBlog = document.querySelector(".blog");
const userWork = document.querySelector(".work");
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

if (isDarkMode) {
    body.classList.add("dark");
} else {
    body.classList.add("light");
}

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    themeBtn.querySelector("p").innerText = body.classList.contains("light")
        ? "Dark"
        : "Light";
    themeBtn.querySelector("img").src = body.classList.contains("light")
        ? "assets/images/icon-moon.svg"
        : "assets/images/icon-sun.svg";
});

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const userName = searchBox.value.trim();

    if (userName.length == 0) {
        input.parentNode.classList.add("error");
        input.parentNode.querySelector("img").src =
            "assets/images/icon-search-error.svg";
        return;
    }

    try {
        const response = await fetch(
            `https://api.github.com/users/${userName}`
        );
        const data = await response.json();

        userAvatar.src = data.avatar_url;
        name.innerText = data.name || "Not Available";
        userLogin.innerText = `@${data.login}`;
        userLogin.href = `https://github.com/${userName}`;

        const dates = data.created_at.split("T")[0].split("-");
        const yyyy = dates[0];
        const mm = months[dates[1] - 1];
        const dd = dates[2];
        joinedDate.innerText = `Joined ${dd} ${mm} ${yyyy}`;

        userBio.innerText = data.bio || "This profile has no bio";
        userRepo.innerText = data.public_repos;
        userFollower.innerText = data.followers;
        userFollowing.innerText = data.following;
        userPlace.innerText = data.location || "Not Available";
        userTwtr.innerText = data.twitter_username || "Not Available";
        userBlog.innerText = data.blog || "Not Available";
        userWork.innerText = data.company || "Not Available";
    } catch (error) {
        console.log(error);
    }
});
