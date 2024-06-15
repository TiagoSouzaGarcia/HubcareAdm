document.querySelectorAll('scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 160;

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            left: 0,
            behavior: 'smooth'
        });
    });
});
