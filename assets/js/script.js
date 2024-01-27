var slideIndex = 1;
showSlides(slideIndex);

function controlSlides(n){
    slideIndex += n;
    showSlides(slideIndex);
}

function dotSlide(n){
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n){
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    for (let index = 0; index < dots.length; index++) {
        dots[index].className = dots[index].className.replace(" active", "")
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active"
}

