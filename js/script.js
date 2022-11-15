// sticky header
const offset = window.pageYOffset;
const windowWidth = window.innerWidth;
const header = document.getElementsByClassName("header")[0];
const firstViewHeight = document.getElementsByClassName("fv")[0].offsetHeight;

console.log("header", header);
console.log("offset", offset);
console.log("firstViewHeight", firstViewHeight);

window.addEventListener("scroll", (e) => {
  e.preventDefault();
  console.log("scrolling---");
  if (windowWidth > 768) {
    console.log("width > 768---");
    if (offset > firstViewHeight) {
      console.log("higher now");
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }
});

// slider
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
  console.log("clicked");
  navColumn.classList.toggle("active");
  burgerBtn.classList.toggle("active");
  body.classList.toggle("stop-scrolling");
});
