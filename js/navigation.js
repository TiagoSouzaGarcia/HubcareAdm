const btn_link_corretora = document.getElementById("btn_corretora");
const btn_link_digital = document.getElementById("btn_digital");
const btn_link_faleconosco = document.getElementById("btn_faleconosco");

btn_link_corretora.addEventListener("click", () => {
  window.location.href = "https://www.hubcaresaude.com.br";
});

btn_link_digital.addEventListener("click", () => {
  window.location.href = "https://hubcaredigital.com.br";
});

btn_link_faleconosco.addEventListener("click", () => {
  scrollToSection("atendimento_cliente_1");
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    const offsetTop = section.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}
