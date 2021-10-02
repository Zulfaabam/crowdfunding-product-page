// Variables
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const closeMenu = document.querySelector('.close-menu')
const bookmark = document.querySelector('.bookmark')
const bookmarkText = document.querySelector('.bookmark-text')
const circle = document.querySelector('.circle')
const mark = document.querySelector('.mark')
const backProjectBtn = document.querySelector('.back-project-btn')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal')
const checkBtns = document.querySelectorAll('.check-btn')
const pledge = document.querySelectorAll('.pledge')
const pledgeBox = document.querySelectorAll('.pledge-box')
const continueBtn = document.querySelectorAll('.continue-btn')
const succesBox = document.querySelector('.success')
const gotitBtn = document.querySelector('.gotit-btn')

// Function
const disableScroll = () => {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop
  ;(scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop)
    })
}

const enableScroll = () => {
  window.onscroll = function () {}
}

// Event Listener
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hidden')
  menu.classList.remove('hidden')
  disableScroll()
})

closeMenu.addEventListener('click', () => {
  menu.classList.toggle('hidden')
  hamburger.classList.remove('hidden')
  enableScroll()
})

bookmark.addEventListener('click', () => {
  if (
    circle.classList.contains('active') &&
    mark.classList.contains('active')
  ) {
    circle.classList.remove('active')
    mark.classList.remove('active')
    bookmarkText.style.color = '#2f2f2f'
    bookmarkText.textContent = 'Bookmark'
  } else {
    circle.classList.add('active')
    mark.classList.add('active')
    bookmarkText.style.color = 'hsl(176, 72%, 28%)'
    bookmarkText.textContent = 'Bookmarked'
  }
})

backProjectBtn.addEventListener('click', () => {
  modal.classList.remove('hidden')
  disableScroll()
})

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden')
  enableScroll()
})

for (let i = 0; i < checkBtns.length; i++) {
  checkBtns[i].addEventListener('click', () => {
    checkBtns[i].classList.toggle('checked')
    pledgeBox[i].classList.toggle('green-box')

    if (pledge[i].style.display === 'block') {
      pledge[i].style.display = 'none'
    } else {
      pledge[i].style.display = 'block'
    }
  })
}

continueBtn.forEach((c) => {
  c.addEventListener('click', () => {
    succesBox.classList.remove('hidden')
  })
})

gotitBtn.addEventListener('click', () => {
  succesBox.classList.add('hidden')
})
