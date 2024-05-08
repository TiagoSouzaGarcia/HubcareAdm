document.addEventListener("DOMContentLoaded", function () {
   const footer = document.querySelector(".footer");
   const whatsappButton = document.querySelector(".w-btn");

   const observer = new IntersectionObserver(
      (entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
               whatsappButton.style.opacity = "0";
            } else {
               whatsappButton.style.opacity = "1";
            }
         });
      },
      {
         threshold: [0.4], // 40% visibility
      }
   );

   observer.observe(footer);
});
