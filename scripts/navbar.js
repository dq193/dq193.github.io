function toggleNavbarOpacity(forceOpaque) {
    const navbar = document.getElementById("navbar");
    const navgrad = document.getElementById("navgrad");
    if (window.scrollY / window.innerHeight >= 1 || forceOpaque) {
        if (navbar.classList.contains("bg-transparent")) {
            navbar.classList.replace("bg-transparent", "bg-black");
            navgrad.classList.replace("from-transparent", "from-black");
        }
    } else {
        if (navbar.classList.contains("bg-black")) {
            navbar.classList.replace("bg-black", "bg-transparent");
            navgrad.classList.replace("from-black", "from-transparent");
        }
    }
}

window.addEventListener("DOMContentLoaded", (ev) => {
    document.getElementById("hamburger").addEventListener("click", (evv) => {
        const navbar = document.getElementById("navbar");
        const navmenu = document.getElementById("navmenu");
        if (navmenu.classList.contains("hidden")) {
            navmenu.classList.replace("hidden", "flex");
            toggleNavbarOpacity(true);
        } else {
            navmenu.classList.replace("flex", "hidden");
            toggleNavbarOpacity(false);
        }
    });
});

document.addEventListener("scroll", (ev) => {
    if (navmenu.classList.contains("hidden")) {
        toggleNavbarOpacity(false);
    }
});

window.addEventListener("resize", (ev) => {
    const navmenu = document.getElementById("navmenu");
    if (navmenu.classList.contains("hidden")) {
        toggleNavbarOpacity(false);
    }
})