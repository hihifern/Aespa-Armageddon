const armageddon = document.getElementById("armageddon");
const supernova = document.getElementById("supernova");
const mainImage = document.getElementById("main-image");
const link = document.querySelector(".mv a")

let lastImage = mainImage.src; // เก็บรูปภาพล่าสุดที่แสดงอยู่


// เมื่อวางเมาส์บน Armageddon
armageddon.addEventListener("mouseenter", () => {
    lastImage = mainImage.src; // เก็บรูปภาพล่าสุดก่อนจะเปลี่ยน
    mainImage.src = "maxresdefault.jpg"; 
    link.href = "https://youtu.be/nFYwcndNuOY?si=SuyzeJ-gsnOaR8OE"; 
    armageddon.style.fontWeight = "bold"; // เปลี่ยนสไตล์ข้อความเป็น bold
});

// เมื่อวางเมาส์บน Supernova
supernova.addEventListener("mouseenter", () => {
    lastImage = mainImage.src; // เก็บรูปภาพล่าสุดก่อนจะเปลี่ยน
    mainImage.src = "sddefault.jpg"; // เปลี่ยนรูปภาพเป็น sddefault.jpg เมื่อวางเมาส์
    link.href = "https://youtu.be/phuiiNCxRMg?si=rAWF9poejOaIVfVX"
    supernova.style.fontWeight = "bold"; // เปลี่ยนสไตล์ข้อความเป็น bold
});

// ถ้าต้องการคืนค่ารูปภาพล่าสุดเมื่อออกจากเมาส์
armageddon.addEventListener("mouseleave", () => {

    armageddon.style.fontWeight = "normal"; // เปลี่ยนสไตล์ข้อความกลับเป็นปกติ
});

supernova.addEventListener("mouseleave", () => {

    supernova.style.fontWeight = "normal"; // เปลี่ยนสไตล์ข้อความกลับเป็นปกติ
});