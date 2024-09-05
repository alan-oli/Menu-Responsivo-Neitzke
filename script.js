const header = document.querySelector('header')
let nav = document.querySelector('.nav-bar')
const content = document.querySelector('.content')
let showSidebar = false
let links = document.querySelectorAll('.nav-item')

function toggleSidebar() {
    
    showSidebar = !showSidebar

    if(showSidebar) {                
        nav.style.animationName = 'showSidebar'
        nav.style.marginLeft = '0'
        content.style.filter = 'blur(2px)'
        nav.style.zIndex = '2'

    } else {        
        nav.style.animationName = 'hideSidebar'
        nav.style.marginLeft = '-100%'
        content.style.filter = 'blur(0)'
    }
}

function closeSidebar() {
    if(showSidebar) {
        toggleSidebar()
    }
}

window.addEventListener('resize', (ev) => {
    if (window.innerWidth > 738) {
        closeSidebar()
    }
} )


links.forEach(link => {
    link.addEventListener('mouseover', (ev) => {        
        link.classList.add('nav-item-active')
    })

    link.addEventListener('mouseout', (ev) => {
        link.classList.remove('nav-item-active')
    })
})




