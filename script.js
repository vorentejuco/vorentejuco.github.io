const navList = document.querySelector(".mobile-nav-list")
const barsIcon = document.querySelector(".hamburger")

function toggleMenu(){
     navList.classList.toggle('open')
     barsIcon.classList.toggle('open')
}