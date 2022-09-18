const btn = document.getElementById('menu-btn')
const menu = document.getElementById('mobile_menu')

btn.addEventListener('click', ()=>{
    btn.classList.toggle('open')
    menu.classList.toggle('open_menu')
})

window.addEventListener('resize', ()=>{
if(window.innerWidth > 991){
    btn.classList.remove('open')
    menu.classList.remove('open_menu')
}
})




let carouselImages = document.querySelector('.carousel-images')
let headings = document.querySelectorAll('.headings')
let currentText = document.querySelectorAll('.current_text')
let nextText = document.querySelectorAll('.next_text')
let count = 0
let interval

carouselImages.style.transform = `translateX(-${100 * (count)}vw)` 

let prevBtn = document.getElementById('prevBtn')
let nextBtn = document.getElementById('nextBtn')
let mobileNextBtn = document.getElementById('mobileNextBtn')

mobileNextBtn.addEventListener('click', nextCarousel)
nextBtn.addEventListener('click', nextCarousel)
prevBtn.addEventListener('click', prevCarousel)

 function prevCarousel(){
    count--
    if(count < 0){
        count = 0
    }
    else{
        window.innerWidth < 991 ?  carouselImages.style.transform = `translateX(-${(100 * (count + 1)) - 100}vw)` : 
        carouselImages.style.transform = `translateX(-${(66.67 * (count + 1)) - 66.67}vw)`
    }
    changeHeading(count)
}



function nextCarousel(){
    count++
    if(count > 3){
        count = 0
        carouselImages.style.transform = `translateX(0)` 
    }
    else{
        window.innerWidth < 991 ?  carouselImages.style.transform = `translateX(-${100 * (count)}vw)` : 
        carouselImages.style.transform = `translateX(-${66.67 * (count)}vw)`
    }
    changeHeading(count)
}

function changeHeading(currentCount){

headings.forEach(heading=>{heading.classList.remove('show')})
headings[currentCount].classList.add('show')

currentText.forEach(text=>{text.classList.remove('show')})
currentText[currentCount].classList.add('show')


nextText.forEach(text=>{text.classList.remove('show')})

count === 3 ? nextText[0].classList.add('show') : nextText[currentCount + 1].classList.add('show')
}

interval = setInterval(() => {
  nextCarousel()
    }, 3000); 

let heroSection = document.querySelector('.hero')

heroSection.addEventListener('mouseenter', ()=>{
    clearInterval(interval);
})

heroSection.addEventListener('mouseleave', ()=>{
    interval = setInterval(() => {
  nextCarousel()
    }, 3000); 
})
    

/*List Items Pop */
let popCount = 0
let listItems = document.querySelector('.list').querySelectorAll('div')

setInterval(() => {
listItems.forEach(list=>{list.classList.remove('list_pop')})

listItems[popCount].classList.add('list_pop')

popCount === 5 ? popCount = 0 : popCount++

}, 3000);