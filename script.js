// Add event listeners for both carousels
document.getElementById("prevBtn1").addEventListener("click", function() {
    moveCarousel("prev", "carousel-container1");
});
document.getElementById("nextBtn1").addEventListener("click", function() {
    moveCarousel("next", "carousel-container1");
});

document.getElementById("prevBtn2").addEventListener("click", function() {
    moveCarousel("prev", "carousel-container2");
});
document.getElementById("nextBtn2").addEventListener("click", function() {
    moveCarousel("next", "carousel-container2");
});

// Function to move the carousel
function moveCarousel(direction, containerClass) {
    var container = document.querySelector(`.${containerClass}`);
    var items = container.getElementsByClassName("carousel-item");
    
    // Find the currently visible carousel item
    var currentIndex = Array.from(items).findIndex(item => item.style.display === "block");

    // If no items are visible, start with the first one
    if (currentIndex === -1) currentIndex = 0;

    // Hide the currently visible item
    items[currentIndex].style.display = "none";

    // Calculate the next index
    if (direction === "next") {
        currentIndex = (currentIndex + 1) % items.length;
    } else {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
    }

    // Show the new item
    items[currentIndex].style.display = "block";
}

// Initialize the first item to be visible by default
document.addEventListener("DOMContentLoaded", function() {
    var carousels = document.querySelectorAll(".carousel-container");
    carousels.forEach(function(container) {
        var items = container.getElementsByClassName("carousel-item");
        if (items.length > 0) {
            items[0].style.display = "block"; // Show the first item by default
        }
    });
});

