let lastScrollTop = 0;
let paragraph = document.getElementsByClassName('animation');

document.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop;
    for (let i = 0; i < paragraph.length; i++) {
        if (st > lastScrollTop) {
            paragraph[i].classList.add("animation-down")
            paragraph[i].classList.remove("animation-up")
        } else {
            paragraph[i].classList.add("animation-up")
            paragraph[i].classList.remove("animation-down")
        }
    }
    lastScrollTop = Math.max(0, st); // For Mobile or negative scrolling
}, false);