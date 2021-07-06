// mobile nav menu
const ham = document.querySelector('.ham')
const closeIcon = document.querySelector('.close')
const mobileNav = document.querySelector('.mobile')

// hamburger icon
ham.addEventListener('click', ()=>{
    if(mobileNav.classList.contains('showMenu')){
        mobileNav.classList.remove('showMenu')
        closeIcon.style.display='none'
        ham.style.display='block'
    }else{
        mobileNav.classList.add('showMenu')
        closeIcon.style.display='block'
        ham.style.display='none'
    }
})
// close icon
closeIcon.addEventListener('click', ()=>{
    if(mobileNav.classList.contains('showMenu')){
        mobileNav.classList.remove('showMenu')
        closeIcon.style.display='none'
        ham.style.display='block'
    }else{
        mobileNav.classList.add('showMenu')
        closeIcon.style.display='block'
        ham.style.display='none'
    }
})