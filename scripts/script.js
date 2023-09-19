//scrolling behaviour
const headerLinks = document.querySelectorAll(".scroll-link");

for (const link of headerLinks) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });

  // close menu
  document.querySelector(".mobile-links").classList.remove("menu-open");
  document.querySelector(".mobile-button").classList.remove("button-open");
}

//mobile menu logic
document.querySelector(".mobile-button").addEventListener("click", () => {
  document.querySelector(".mobile-links").classList.toggle("menu-open");
  document.querySelector(".mobile-button").classList.toggle("button-open");
});
