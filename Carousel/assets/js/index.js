let currentIndex = 0;
const carousel = document.getElementById("carousel");
const cards = carousel.getElementsByClassName("card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function changeCard(n) {
    cards[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + n + cards.length) % cards.length;
    cards[currentIndex].classList.add("active");
}

prevBtn.addEventListener("click", () => changeCard(-1));
nextBtn.addEventListener("click", () => changeCard(1));
