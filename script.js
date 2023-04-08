let logo = document.getElementsByClassName('logo');
let lists = document.querySelectorAll('.navItem');
let intro = document.querySelector('.intro');
let cards = document.querySelectorAll('.card');

anime({
    targets: logo,
    opacity: [0, 1],
    delay: 1000,
    duration: 1000
})


anime({
    targets: lists,
    translateY: [-100, 0],
    delay: anime.stagger(100, { start: 1000 }), // increase delay by 100ms for each elements.
});


anime({
    targets: intro,
    opacity: [0, 1],
    duration: 1500,
    translateY: [-1000, 0],
    delay: anime.stagger(100)
});




let conts = Array.from(document.querySelector('.intro').childNodes).filter((elemt)=>{
    return elemt.nodeName !== '#text';
})

anime({
    targets: lists,
    width: [0, 'auto'],
    duration: 5000,
    delay: anime.stagger(100, { start: 1500 })
})

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