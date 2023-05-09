const prevBtn = document.querySelector(".category_prev");
const nextBtn = document.querySelector(".category_next");
const category = document.querySelector(".slides");

let currentTranslateX = 0;
const slideWidth = 75 + 20;

prevBtn.addEventListener("click", () => {
    if (currentTranslateX < 0) {
        currentTranslateX += slideWidth;
        category.style.transform = `translateX(${currentTranslateX}px)`;
        category.style.transition = `all 0.3s`;
    }
});

nextBtn.addEventListener("click", () => {
    const maxTranslateX = -(slideWidth * (12 - 9));
    if (currentTranslateX > maxTranslateX) {
        currentTranslateX -= slideWidth;
        category.style.transform = `translateX(${currentTranslateX}px)`;
        category.style.transition = `all 0.3s`;
    }
});
