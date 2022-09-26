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

for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function () {
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// const plusElement = document.querySelector("#svg1");
// const minusElement = document.querySelector("#svg2");
// const downwards = document.querySelector("#svg3");
// const upwards = document.querySelector("#svg4");

// function switchVisible() {
//   if (minusElement.style.display === "none") {
//     minusElement.style.display = "block";
//     plusElement.style.display = "none";
//   } else {
//     minusElement.style.display = "none";
//     plusElement.style.display = "block";
//   }
//   if (upwards.style.display === "none") {
//     upwards.style.display = "block";
//     downwards.style.display = "none";
//   } else {
//     upwards.style.display = "none";
//     downwards.style.display = "block";
//   }
// }
