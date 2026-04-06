// Selecting DOM Elements
const darkModeBtn = document.getElementById("dark-mode-btn");
const themeIcon = darkModeBtn.querySelector("i");
const body = document.body;

// Function to Switch Themes
darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    // Toggle Icon & Store Preference
    if (body.classList.contains("light-mode")) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "light");
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "dark");
    }
});

// Apply Saved Theme on Page Load
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        body.classList.add("light-mode");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }
};