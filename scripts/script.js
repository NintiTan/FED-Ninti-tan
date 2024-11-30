// JavaScript Document


// Image animation

document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.3 }); 

    hiddenElements.forEach(el => observer.observe(el));
  });

let currentImage = 0;



// product carousel

function showImage(current) {
  const carousel = document.querySelector('div > div');
  const totalImages = carousel.children.length;
  currentImage = (current + totalImages) % totalImages;
  carousel.style.transform = `TranslateX(-${currentImage * 100}%)`;
}

function nextImage() {
  showImage(currentImage + 1);
}

function prevImage() {
  showImage(currentImage - 1);
}

showImage(0);


