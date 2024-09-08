const armageddon = document.getElementById("armageddon");
const supernova = document.getElementById("supernova");
const mainImage = document.getElementById("main-image");
const link = document.querySelector(".mv a");

let lastImage = mainImage.src;

function changeImage(src, url) {
    mainImage.classList.add('hidden');
    setTimeout(() => {
        mainImage.src = src;
        link.href = url;
    }, 400);

    setTimeout(() => {
        mainImage.classList.remove('hidden');
    }, 500);
}

armageddon.addEventListener("mouseenter", () => {
    changeImage("img/mv-armageddon.jpg", "https://youtu.be/nFYwcndNuOY?si=SuyzeJ-gsnOaR8OE");
    armageddon.style.fontWeight = "bolder";
});

supernova.addEventListener("mouseenter", () => {
    changeImage("img/mv-supernova.jpg", "https://youtu.be/phuiiNCxRMg?si=rAWF9poejOaIVfVX");
    supernova.style.fontWeight = "bolder";
});

armageddon.addEventListener("mouseleave", () => {
    armageddon.style.fontWeight = "normal";
});

supernova.addEventListener("mouseleave", () => {
    supernova.style.fontWeight = "normal";
});

armageddon.addEventListener("click", () => {
    changeImage("img/mv-armageddon.jpg", "https://youtu.be/nFYwcndNuOY?si=SuyzeJ-gsnOaR8OE");

});

supernova.addEventListener("click", () => {
    changeImage("img/mv-supernova.jpg", "https://youtu.be/phuiiNCxRMg?si=rAWF9poejOaIVfVX");

});


//รูปmembers
let currentIndex = 0;
const slides = document.querySelector('.member-slide');
const totalSlides = document.querySelectorAll('.member').length;
const menuItems = document.querySelectorAll('.mem-text li');

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
    highlightMenu(currentIndex);
}

function highlightMenu(index) {
    menuItems.forEach(item => item.classList.remove('selected'));
    menuItems[index].classList.add('selected');
}

// เพิ่ม event listener สำหรับการกดเมนู
menuItems.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentIndex = index;
        showSlide(currentIndex);
        highlightMenu(currentIndex);
    });
});

