var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var images = document.getElementsByClassName("slider-inner");
var hiddenImages = document.getElementsByClassName("hidden");
var counter = document.getElementById("counter")
nextBtn.onclick = nextImage
prevBtn.onclick = prevImage
var lastImage = images.length - 1

var isHidden = (value) => {
    if (value.classList.contains("hidden")) return true;
    else return false;
}

function nextImage() {
    for (var i = 0; i < (images.length); i++) {
        if (!isHidden(images[i])) {
            images[i].classList.add("hidden");
            if (i < (images.length-1)) {
                images[(i + 1)].classList.remove("hidden")
                images[(i + 1)].classList.add("blur")
            }
            break;
        }
        if(!isHidden(images[lastImage])) {
            images[0].classList.remove("hidden");
            images[0].classList.add("blur");
        }
    }
    counterFunc()
}

function prevImage() {
    for (var i = 0; i < (images.length); i++) {
        if (!isHidden(images[i])) {
            images[i].classList.add("hidden");
            if (i == 0) {
                images[lastImage].classList.remove("hidden")
                images[lastImage].classList.add("blur")
            }
            if (i < images.length) {
                images[(i-1)].classList.remove("hidden")
                images[(i-1)].classList.remove("hidden")
                images[(i-1)].classList.add("blur")
            break;
            }
        }
    }
    counterFunc()
}

var counterFunc = () => {
    for(var i = 0; i< images.length; i++) {
        if (!isHidden(images[i])) counter.innerText = (i+1).toString()
        counter.classList.add("upward")
        var removeAnimation = () => counter.classList.remove("upward")
        setTimeout(removeAnimation, 500)
    }
}