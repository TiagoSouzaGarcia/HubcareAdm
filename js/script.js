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

function updateHeroTitle() {
  const heroTitle = document.querySelector(".hero__titulo");

  if (window.innerWidth <= 767) {
    heroTitle.innerHTML = "Sua saúde em nossos planos";
  } else {
    heroTitle.innerHTML = "Cuidando da <strong>saúde</strong> da sua família";
  }
}

function callUpdates() {
  updateAriaOrientation();
  updateHeroTitle();
}

callUpdates();

window.addEventListener("resize", callUpdates);
