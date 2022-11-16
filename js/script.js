// sticky header ----------------------------------------------
const offset = window.pageYOffset;
const windowWidth = window.innerWidth;
const header = document.getElementsByClassName("header")[0];
const firstViewHeight = document.getElementsByClassName("fv")[0].offsetHeight;

// CONCEPTセクション要素の上部の高さを取得
let elem = document.querySelector(".target-element");
let concept = elem.getBoundingClientRect();
// 現在のページの高さを取得 fixed height since page refresh
const currentWindowHeight = window.pageYOffset;

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset; // chaning value while scrolling
  // if scrolling heigt reaches out to concept.top (+ current windowHeight)
  if (scrollY > concept.top + currentWindowHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// slider　------------------------------------------------
$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  fade: true,
  cssEase: "linear",
  arrows: false,
});

// open & close hamburger menu ----------------------------
const burgerBtn = document.getElementsByClassName("burger-btn")[0];
const navColumn = document.getElementsByClassName("header-nav")[0];
const body = document.getElementsByTagName("body")[0];

burgerBtn.addEventListener("click", () => {
  navColumn.classList.toggle("active");
  burgerBtn.classList.toggle("active");
  body.classList.toggle("stop-scrolling");
});

// Smooth scroll ---------------------------------------------
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener("click", (e) => {
    e.preventDefault();
    const href = smoothScrollTrigger[i].getAttribute("href");
    const targetElement = document.getElementById(href.replace("#", ""));
    // get the height of the targetElement
    const rect = targetElement.getBoundingClientRect().top;
    // get the number of pixels the currently scrolled document
    const offset = window.pageYOffset;
    // get the fixed header hight
    const gap = 67;
    const target = rect + offset - gap;
    console.log("rect", rect);
    console.log("offset", offset);
    console.log("target", target);
    window.scrollTo({
      top: href === "#header" ? 0 : target,
      behavior: "smooth",
    });
    // remove active class below id when pressed from hidden nav bar
    navColumn.classList.remove("active");
    burgerBtn.classList.remove("active");
    body.classList.remove("stop-scrolling");
  });
}
