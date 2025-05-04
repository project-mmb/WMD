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

document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.name-animation');
    if (!nameElement) {
      console.error('Error: .name-animation element not found!');
      return;
    }

    const names = ["MOTSHOLATHEBE", "BOWELO", "Mr M BOWELO"];
    let nameIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentName = names[nameIndex];

      if (isDeleting) {
        nameElement.textContent = currentName.substring(0, charIndex - 1);
        charIndex--;
      } else {
        nameElement.textContent = currentName.substring(0, charIndex + 1);
        charIndex++;
      }

      if (charIndex === currentName.length && !isDeleting) { 
        isDeleting = true;
        setTimeout(type, 1500);
      } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        nameIndex++;
        nameIndex = nameIndex % names.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? 100 : 150);
      }
    }
    type();
  });


  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
