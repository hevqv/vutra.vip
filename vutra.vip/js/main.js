"use strict";
window.addEventListener("load", (function() {
    var e = document.getElementById("navbarMenuCollapse");
    e.addEventListener("shown.bs.collapse", (function() {
        document.body.classList.add("menu-visible")
    })), e.addEventListener("hidden.bs.collapse", (function() {
        document.body.classList.remove("menu-visible")
    }));
    var n = new bootstrap.Collapse(e, {
        toggle: !1
    });
    [].forEach.call(document.querySelectorAll("#navbarMenuCollapse a:not(.dropdown-toggle)"), (function(e) {
        e.addEventListener("click", (function(e) {
            n.hide()
        }))
    }));
    var t = window.pageYOffset,
        l = document.querySelector(".navbar-top");
    window.addEventListener("scroll", (function() {
        var e = window.pageYOffset;
        e > t && e > 64 ? l.classList.contains("hide-header") || l.classList.add("hide-header") : l.classList.remove("hide-header"), t = window.pageYOffset, window.pageYOffset > 4 ? document.body.classList.contains("scrolled") || document.body.classList.add("scrolled") : document.body.classList.remove("scrolled")
    }));
    let a = .01 * window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${a}px`), window.addEventListener("resize", (function() {
        let e = .01 * window.innerHeight;
        document.documentElement.style.setProperty("--vh", `${e}px`)
    }));
    new Swiper(".slider-simple-a.swiper-container", {
        navigation: {
            nextEl: ".swiper-container.slider-simple-a .slider-next",
            prevEl: ".swiper-container.slider-simple-a .slider-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        loop: !0,
        grabCursor: !0,
        autoplay: {
            delay: 5e3
        },
        spaceBetween: 160,
        slidesPerView: "auto",
        centeredSlides: !0,
        speed: 600
    }), new Swiper(".slider-gallery-a.swiper-container", {
        navigation: {
            nextEl: ".swiper-container.slider-gallery-a .slider-next",
            prevEl: ".swiper-container.slider-gallery-a .slider-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        loop: !0,
        grabCursor: !0,
        autoplay: {
            delay: 5e3
        },
        spaceBetween: 0,
        slidesPerView: "auto",
        centeredSlides: !0,
        speed: 0,
        effect: "fade"
    }), new Swiper(".slider-simple-b.swiper-container", {
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        loop: !0,
        grabCursor: !0,
        autoplay: {
            delay: 5e3
        },
        effect: "fade"
    });
    try {
        new ScrollSlider(".scroll-simple-a", {
            scale1: .1
        }).init()
    } catch (e) {
        console.log("scroll-slider not available")
    }
    try {
        new SectionScroll(".sections-scroll ", {
            sectionClass: "section",
            navDotContainer: ".nav-dot-menu",
            changeOnSectionColor: ".change-on-section-color, .nav-dot-menu .nav-link"
        }).init()
    } catch (e) {
        console.log("sections-scroll not available")
    }
    try {
        new Rellax(".rellax")
    } catch (e) {
        console.log("rellax-js not available")
    }
    try {
        new ScrollAnim(".scroll-anim").init()
    } catch (e) {
        console.log("scroll-anim not available")
    }

    function o(e) {
        let n = e.getBoundingClientRect().top,
            t = e.getBoundingClientRect().bottom,
            l = n + Math.abs(t - n) / 2,
            a = window.innerHeight,
            o = (l - a / 2) / (a / 2),
            i = parseFloat(e.getAttribute("data-prl-speed-y")) || 0,
            s = parseFloat(e.getAttribute("data-prl-speed-x")) || 0,
            r = parseFloat(e.getAttribute("data-prl-scale")) || 0,
            d = .25 * window.innerWidth,
            c = s ? `translateX(${o*s*d}px)` : "",
            p = i ? `translateY(${o*i*(.25*a)}px)` : "",
            w = r ? `scale(${.5*o*r+1})` : "";
        e.style.transform = `${p} ${c}  ${w}`
    }

    function i(e) {
        let n = e.getBoundingClientRect().top,
            t = e.getBoundingClientRect().bottom,
            l = !1,
            a = !1,
            o = window.innerHeight,
            i = o / 3;
        return n < o + i && n + i > 0 && (l = !0), t < o + i && t + i > 0 && (a = !0), l || a
    }
    document.querySelectorAll("[data-prl]").forEach((function(e, n) {
        e.style["will-change"] = "transform", i(e) && o(e), window.addEventListener("scroll", (function(n) {
            i(e) && o(e)
        }))
    }));
    var s = document.querySelector("#page-loader");
    s && s.classList.add("p-hidden"), document.body.classList.add("page-loaded")
}));