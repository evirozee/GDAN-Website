function goToSection(sectionNum) {
    let carouselItems = document.getElementsByClassName('carousel-item');
    for (let i = 0; i<carouselItems.length; i++) {
        carouselItems[i].style.transform = `translateX(-${90*sectionNum}vw)`;
    }
}

function init() {
    document.body.ondragstart = function () { return false; };
}