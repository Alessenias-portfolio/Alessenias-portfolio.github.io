document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const items = document.querySelectorAll(".carousel-item");

    function showSlide(i) {
        items.forEach(item => item.classList.remove("active"));
        items[i].classList.add("active");
    }

    document.getElementById("prevBtn").addEventListener("click", function () {
        index = (index > 0) ? index - 1 : items.length - 1;
        showSlide(index);
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
        index = (index < items.length - 1) ? index + 1 : 0;
        showSlide(index);
    });

    // Show first slide initially
    showSlide(index);
});
