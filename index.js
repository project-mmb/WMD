document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("slide-image");

    setTimeout(() => {
        image.style.opacity = "1";
        image.style.transform = "translateY(0)";
    }, 500);
    
    window.addEventListener("scroll", () => {
        const rect = image.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            image.style.opacity = "1";
            image.style.transform = "translateY(0)";
        }
    });
});


  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
