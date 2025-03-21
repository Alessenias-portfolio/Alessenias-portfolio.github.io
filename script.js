document.getElementById("prevBtn1").addEventListener("click", function() {
    moveCarousel("prev", "carousel-container", 1);
});
document.getElementById("nextBtn1").addEventListener("click", function() {
    moveCarousel("next", "carousel-container", 1);
});

document.getElementById("prevBtn2").addEventListener("click", function() {
    moveCarousel("prev", "carousel-container", 2);
});
document.getElementById("nextBtn2").addEventListener("click", function() {
    moveCarousel("next", "carousel-container", 2);
});

function moveCarousel(direction, containerClass, carouselNumber) {
    var container = document.querySelector(`.${containerClass}`);
    var items = container.getElementsByClassName("carousel-item");
    var currentIndex = Array.from(items).findIndex(item => item.style.display === "block");

    if (currentIndex === -1) currentIndex = 0;

    items[currentIndex].style.display = "none";

    if (direction === "next") {
        currentIndex = (currentIndex + 1) % items.length;
    } else {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
    }

    items[currentIndex].style.display = "block";
}

