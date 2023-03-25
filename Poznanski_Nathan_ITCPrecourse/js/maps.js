const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryMaps = document.querySelectorAll('.gallery-map');
let currentlySelected = 0;

prevBtn.addEventListener('click', function(){  
    galleryMaps[currentlySelected].classList.remove("active");
    currentlySelected--;
    galleryMaps[currentlySelected].classList.add("active");
    nextBtn.disabled = false;

    if (currentlySelected === 0){
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', function(){
    galleryMaps[currentlySelected].classList.remove("active");
    currentlySelected++;

    galleryMaps[currentlySelected].classList.add("active");
    prevBtn.disabled = false;

    if (galleryMaps.length === currentlySelected+1){
        nextBtn.disabled = true;
    }
});