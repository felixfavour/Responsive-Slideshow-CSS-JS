var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var images = document.getElementsByClassName("slider-inner");
var hiddenImages = document.getElementsByClassName("hidden");
nextBtn.onclick = nextImage;
var isHidden = function (value) {
    if (value.classList[1] == "hidden")
        return true;
    else
        return false;
};
function nextImage() {
    for (var i = 0; i < (images.length - 1); i++) {
        if (!isHidden(images[i])) {
            images[i].classList.add("hidden");
            if (i < images.length) {
                images[(i + 1)].classList.remove("hidden");
            }
            break;
        }
    }
}
//# sourceMappingURL=script.js.map