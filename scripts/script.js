// JavaScript Document


// Image animation
// gebruikte bronnen: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

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
// gebruikte bronnen: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList https://developer.mozilla.org/en-US/docs/Web/CSS/transform

const captions = [
  { p1: "Synched Fligh Small Smolder Blue", p2: "1/3" },
  { p1: "Model is 176cm wearing a size small", p2: "2/3" },
  { p1: "Model is 176cm wearing a size small", p2: "3/3" },
];

function showImage(current) {
  const carousel = document.querySelector('div:first-of-type div:first-of-type > div');
  const totalImages = carousel.children.length;
  currentImage = (current + totalImages) % totalImages;
  carousel.style.transform = `TranslateX(-${currentImage * 100}%)`;

  const p1 = document.querySelector('#detailpage > div:first-of-type div p:first-of-type');
  const p2 = document.querySelector('#detailpage > div:first-of-type div p:nth-of-type(2)');

  p1.textContent = captions[currentImage].p1;
  p2.textContent = captions[currentImage].p2
}


function nextImage() {
  showImage(currentImage + 1);
}

function prevImage() {
  showImage(currentImage - 1);
}

showImage(0);


// Impact radio buttons

const howItsMadeRadio = document.getElementById('how-its-made');
const whereItsMadeRadio = document.getElementById('where-its-made');
const howItsMadeList = document.querySelector('#detailpage > div:nth-of-type(3)');
const whereItsMadeList = document.querySelector('#detailpage > div:nth-of-type(4)');

function updateListVisibility() {
    if (howItsMadeRadio.checked) {
        howItsMadeList.style.display = 'block';
        whereItsMadeList.style.display = 'none';
    } else if (whereItsMadeRadio.checked) {
        howItsMadeList.style.display = 'none';
        whereItsMadeList.style.display = 'block';
    }
}

updateListVisibility();

howItsMadeRadio.addEventListener('change', updateListVisibility);
whereItsMadeRadio.addEventListener('change', updateListVisibility);


// page theme

