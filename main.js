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
    }, 4000); 

let heroSection = document.querySelector('.hero')



/*List Items Pop 
let popCount = 0
let listItems = document.querySelector('.list').querySelectorAll('div')

setInterval(() => {
listItems.forEach(list=>{list.classList.remove('list_pop')})

listItems[popCount].classList.add('list_pop')

popCount === 5 ? popCount = 0 : popCount++

}, 3000); */

let recentFirstPage = document.getElementById('recent_deal_first_page')
let recentSecondPage = document.getElementById('recent_deal_second_page')
let products = document.querySelectorAll('.products')

recentFirstPage.addEventListener('click', ()=>{
products[1].classList.remove('active_products')
products[0].classList.add('active_products')
recentSecondPage.classList.remove('active')
recentFirstPage.classList.add('active')
})

recentSecondPage.addEventListener('click', ()=>{
products[0].classList.remove('active_products')  
products[1].classList.add('active_products')
recentFirstPage.classList.remove('active')
recentSecondPage.classList.add('active')
})



// let range = document.getElementById('points')
// let rangeText = document.getElementById('test')

// range.addEventListener('change', ()=>{
//     console.log('works')
//     rangeText.innerText = range.value
// })


let typeBox = document.querySelector('.type')
let typeDropDown = document.querySelector('.type_list')


typeBox.addEventListener('mouseenter', ()=>{
typeDropDown.classList.add('show')
})

typeBox.addEventListener('mouseleave', ()=>{
    typeDropDown.classList.remove('show')
})



let selectOptions = document.querySelectorAll('.select_option')
let selectedText = document.getElementById('selected_text')

selectOptions.forEach(option=>{
    option.addEventListener('click', ()=>{
     selectedText.innerText = option.querySelector('p').innerText
     selectOptions.forEach(elem=>{elem.style.backgroundColor= '#22273a'})
     option.style.backgroundColor = '#0cd68e'
    })
})


let priceRangeBtn = document.querySelectorAll('.price_range')

priceRangeBtn.forEach(btn =>{
    btn.addEventListener('mouseenter',()=>{
        btn.classList.add('active_range')
        btn.querySelector('div').classList.add('d-block')
    })
})

priceRangeBtn.forEach(btn =>{
    btn.addEventListener('mouseleave',()=>{
        btn.classList.remove('active_range')
        btn.querySelector('div').classList.remove('d-block')
    })
})