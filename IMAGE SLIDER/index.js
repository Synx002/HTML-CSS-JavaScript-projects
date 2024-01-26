const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll("img");

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }

  const screenWidth = window.innerWidth;

  // Menggunakan media query untuk mengubah nilai transformasi
  if (screenWidth <= 800) {
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 300}px)`;
  } else {
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 800}px)`;
  }

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

// Menambahkan event listener untuk menangani perubahan lebar layar
window.addEventListener("resize", () => {
  clearTimeout(timeout);
  updateImg();
});
