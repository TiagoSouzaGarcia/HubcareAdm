const divider = document.querySelector(".divider");

function updateAriaOrientation() {
  if (divider) {
    if (window.innerWidth <= 762) {
      divider.setAttribute("aria-orientation", "horizontal");
    } else {
      divider.setAttribute("aria-orientation", "vertical");
    }
  }
}

updateAriaOrientation();

window.addEventListener("resize", updateAriaOrientation);
