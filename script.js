let logo = document.getElementsByClassName('logo');
let lists = document.querySelectorAll('.navList');
let intro = document.querySelector('.intro');
let cards = document.querySelectorAll('.card');
let toggleModeBtn = document.querySelector('.toggleModeBtn');

anime({
    targets: logo,
    opacity: [0, 1],
    delay: 1000,
    duration: 1000
})


anime({
    targets: [lists, toggleModeBtn],
    translateY: [-100, 0],
    delay: anime.stagger(100, { start: 1000 })
});


anime({
    targets: intro,
    opacity: [0, 1],
    duration: 1500,
    translateY: [-1000, 0],
    delay: anime.stagger(100)
});

function animateOnScroll(e){
    cards.forEach((card)=>{
        let windowHeight = window.innerHeight;
        let revealTop = card.getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            card.classList.add('active');
        }
        else{
            card.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', animateOnScroll);



function toggleTheme(){
    if(toggleModeBtn.src.includes("light")){
        toggleModeBtn.src = "./img/dark_mode.svg";
    } else{
        toggleModeBtn.src = "./img/light_mode.svg";
    }
}

toggleModeBtn.addEventListener('click', toggleTheme)