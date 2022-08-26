/* Scroll to top */

const scrollToTop = document.querySelector(".scroll-to-top");

scrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", function () {
  if (scrollY > 400) {
    scrollToTop.style.visibility = "visible";
  } else {
    scrollToTop.style.visibility = "hidden";
  }
});

// Collapsing Text - Home - Ultima sectiune

const collapse = document.getElementsByClassName("summary");
let i;

for (i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function () {
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
