// music-mv

const armageddon = document.getElementById("armageddon");
const supernova = document.getElementById("supernova");
const mainImage = document.getElementById("main-image");
const link = document.querySelector(".mv a")

let lastImage = mainImage.src;

function changeImage(src, url) {
    mainImage.classList.add('hidden'); // เพิ่มคลาสเพื่อทำให้รูปภาพโปร่งใส
    setTimeout(() => {
        mainImage.src = src; // เปลี่ยน src ของรูปภาพ
        link.href = url; // เปลี่ยนลิงก์
        mainImage.classList.remove('hidden'); // ลบคลาสเพื่อทำให้รูปภาพปรากฏขึ้น
    }, 500); // เวลาในการรอเพื่อให้การเปลี่ยนภาพเป็นไปอย่างช้า (500ms)
}

armageddon.addEventListener("mouseenter", () => {
    lastImage = mainImage.src;
    mainImage.src = "img/mv-armageddon.jpg";
    link.href = "https://youtu.be/nFYwcndNuOY?si=SuyzeJ-gsnOaR8OE";
    armageddon.style.fontWeight = "bold";
});


supernova.addEventListener("mouseenter", () => {
    lastImage = mainImage.src;
    mainImage.src = "img/mv-supernova.jpg";
    link.href = "https://youtu.be/phuiiNCxRMg?si=rAWF9poejOaIVfVX"
    supernova.style.fontWeight = "bold";
});


armageddon.addEventListener("mouseleave", () => {

    armageddon.style.fontWeight = "normal";
});

supernova.addEventListener("mouseleave", () => {

    supernova.style.fontWeight = "normal";
});

