var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var images = document.getElementsByClassName("slider-inner");
var hiddenImages = document.getElementsByClassName("hidden");
var counter = document.getElementById("counter");
var slideshowText = document.getElementById("slideshowText");
var slideshowAdditions = document.getElementById("slideshowAdditions");
slideshowText.style.opacity = "0";
slideshowAdditions.style.opacity = "0";
nextBtn.onclick = nextImage;
prevBtn.onclick = prevImage;
var lastImageIndex = images.length - 1;
var isHidden = function (value) {
    if (value.classList.contains("hidden"))
        return true;
    else
        return false;
};
function nextImage() {
    for (var i = 0; i < (images.length); i++) {
        if (!isHidden(images[i])) {
            images[i].classList.add("hidden");
            if (i < (images.length - 1)) {
                images[(i + 1)].classList.remove("hidden");
                images[(i + 1)].classList.add("blur");
            }
            break;
        }
        if (!isHidden(images[lastImageIndex])) {
            images[0].classList.remove("hidden");
            images[0].classList.add("blur");
        }
    }
    counterFunc();
}
function prevImage() {
    for (var i = 0; i < (images.length); i++) {
        if (!isHidden(images[i])) {
            images[i].classList.add("hidden");
            if (i == 0) {
                images[lastImageIndex].classList.remove("hidden");
                images[lastImageIndex].classList.add("blur");
                break;
            }
            if (i < images.length) {
                images[(i - 1)].classList.remove("hidden");
                images[(i - 1)].classList.remove("hidden");
                images[(i - 1)].classList.add("blur");
                break;
            }
        }
    }
    counterFunc();
}
var counterFunc = function () {
    for (var i = 0; i < images.length; i++) {
        if (!isHidden(images[i]))
            counter.innerText = (i + 1).toString();
        counter.classList.add("upward");
        slideshowText.classList.add("float-in-right");
        var removeAnimation = function () {
            counter.classList.remove("upward");
            slideshowText.classList.remove("float-in-right");
            slideshowText.style.opacity = "1";
            slideshowAdditions.style.opacity = "1";
        };
        setTimeout(removeAnimation, 400);
    }
};
//# sourceMappingURL=script.js.map