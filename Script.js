const slides = document.querySelectorAll(".slides")
var counter = 0;

slides.forEach(
    (slides,index) =>{
        slides.style.left = `${index * 100}%`
    }
)

const goPrev = () =>{
    if(counter == 3 || counter < 0){
        counter = 0;
    }
    counter--
    slideImg()
}

const goNext = () =>{
    if(counter == 3 || counter < 0){
        counter = 0;
    }
    counter++
    console.log(counter);
    slideImg()
}

const slideImg = () =>{
    slides.forEach(
        (slides) =>{
            slides.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

const sweeper = document.querySelectorAll(".Sweeper")
var Index = 0;

function automaticSlide() {
    setTimeout(automaticSlide, 3000);
    var pics;
    for(pics =0; pics<sweeper.length; pics++){
        sweeper[pics].style.display = "none";
    }
    Index++;
    if(Index > sweeper.length){
        Index = 1;
    }
    sweeper[Index-1].style.display ="block";
}


automaticSlide();

