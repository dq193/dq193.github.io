var hamburgerOpen = false;

function toggleHamburger() {
    const navbar = document.getElementById("navbar");
    const navmenu = document.getElementById("navmenu");
    if (navmenu.style.display === "none") {
        navmenu.style.display = "flex";
        navbar.style.backgroundColor = "black";
    } else {
        navmenu.style.display = "none";
        navbar.style.backgroundColor = "transparent";
    }
}