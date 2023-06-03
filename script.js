




const outerL = document.querySelector('.outerL')
const menusidebar = document.querySelector('.menusidebar')
const closemenu = document.querySelector('.closemenu')




outerL.addEventListener('click',function(){
    menusidebar.style.transform = "translate(0%)"
})

closemenu.addEventListener('click',function(){
    menusidebar.style.transform = "translate(-100%)"
})
