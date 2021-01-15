
let slideIndex = 0;
const displayArrows = (isToTurnOn) => {
    document.getElementsByClassName("next")[0].classList.toggle("opacity1");
    document.getElementsByClassName("prev")[0].classList.toggle("opacity1");
}

const goToElement = (element) => {
    document.getElementById(element).scrollIntoView({ //goto next slide
        behavior: 'smooth'
    });
    setTimeout(() => { //cube animation
        document.getElementById(element).children[2].firstElementChild.classList.toggle("scaleY");
    }, 500)
    setTimeout(() => { //text animation
        document.getElementById(element).children[2].lastElementChild.classList.toggle("scaleX");
    }, 850)
}

const showSlides = (n, e) => {
    if (e != undefined) { //circle painting if button clicked
        let circle = document.getElementById("circle");
        circle.style.left = e.pageX - 40;
        circle.style.top = e.pageY -40;
        circle.style.display = "unset";
        setTimeout(() => {
            circle.style.display = "none";
        }, 150)
    }

    if (n == undefined) //first slide, no past scrolling
        return goToElement("img0");

    let indexBeforeChange = slideIndex;
    slideIndex += n
    let slides = document.getElementsByClassName("mySlides");

    if (slideIndex >= slides.length) {
        slideIndex = 0
        indexBeforeChange = slides.length - 1;
    }
    else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
        indexBeforeChange = 0;
    }

    goToElement("img" + slideIndex);

    //set the past slide back to inital state (cube and text animation)
    document.getElementById("img" + indexBeforeChange).children[2].firstElementChild.classList.toggle("scaleY");
    document.getElementById("img" + indexBeforeChange).children[2].lastElementChild.classList.toggle("scaleX");
}

showSlides();

