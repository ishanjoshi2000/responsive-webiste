document.addEventListener("DOMContentLoaded", function() {
    var mobileNav = document.querySelector(".mobile-nav");
    var nav = document.querySelector("nav");

    mobileNav.addEventListener("click", function() {

        nav.classList.toggle("expand");
    });
});
