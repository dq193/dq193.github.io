document.addEventListener('scroll', (ev) => {
    // Fade banner
    const banner = document.getElementById('banner');
    const opacity = Math.max(0, 1 - 2 * (window.scrollY / window.innerHeight));
    banner.style.opacity = opacity;
});