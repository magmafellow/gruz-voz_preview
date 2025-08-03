const filename = "{mobile-menu.js}"
console.log(`${filename} is loaded`)
const burgerBtn = document.querySelector(".header__burger")
const burgerMobileBtn = document.querySelector(".mobile-menu__burger")
const mobileMenu = document.querySelector(".mobile-menu")
const mobileMenuOverlay = document.querySelector('.mobile-menu__overlay')

let isOpen = false

function handleOpenBurger() {
  burgerBtn.classList.add("has-open")
  burgerMobileBtn.classList.add("has-open")

}
function handleCloseBurger() {
  burgerBtn.classList.remove("has-open")
  burgerMobileBtn.classList.remove("has-open")
}

function handleOpenMenu() {
  mobileMenu.classList.add("has-open")
}
function handleCloseMenu() {
  mobileMenu.classList.remove("has-open")
}

function handleOpen() {
  handleOpenBurger()
  handleOpenMenu()
  setTimeout(() => {
    document.body.classList.add("scroll-lock")
  }, 50)
  isOpen = !isOpen
}

function handleClose() {
  handleCloseBurger()
  handleCloseMenu()
  setTimeout(() => {
    document.body.classList.remove("scroll-lock")
  }, 200)
  isOpen = !isOpen
}

function onBurgerClick(_e) {
  if (!isOpen) {
    handleOpen()
  } else {
    handleClose()
  }
}

burgerBtn.addEventListener("click", onBurgerClick)
burgerMobileBtn.addEventListener("click", onBurgerClick)
mobileMenuOverlay.addEventListener('click', handleClose)
