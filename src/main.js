// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tag1 = document.querySelector('.tagline-1')
var tag2 = document.querySelector('.tagline-2')
//~~
var randomButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var makeNewButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var customButton = document.querySelector('.create-new-book-button')
//~~
var mainCoverDisplay = document.querySelector('.main-cover')
var formPage = document.querySelector('.form-view')
var homePage = document.querySelector('.home-view')
var savedPage = document.querySelector('.saved-view')
//~~
var userCover = document.querySelector('.user-cover')
var userTitle = document.querySelector('.user-title')
var userTag1 = document.querySelector('.user-desc1')
var userTag2 = document.querySelector('.user-desc2')
// We've provided a few variables below
var savedCovers = [
 new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', makeRandomCover)

randomButton.addEventListener('click', makeRandomCover)
randomButton.addEventListener('click', displayHomePage)

makeNewButton.addEventListener('click', displayFormPage)
makeNewButton.addEventListener('click', displayFormButtons)

viewSavedButton.addEventListener('click', displaySavedPage)
viewSavedButton.addEventListener('click', displayFormButtons)

homeButton.addEventListener('click', displayHomePage)
homeButton.addEventListener('click', displayHomeButtons)

customButton.addEventListener('click', createCustomBook)
// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function makeRandomCover() {
  var randomImage = covers[getRandomIndex(covers)]
  var randomTitle = titles[getRandomIndex(titles)]
  var randomTagline1 = descriptors[getRandomIndex(descriptors)]
  var randomTagline2 = descriptors[getRandomIndex(descriptors)]
  var newCover = new Cover(randomImage, randomTitle, randomTagline1, randomTagline2)
  currentCover = newCover
  makeCurrentCover()
}

function makeCurrentCover() {
  coverImage.src = currentCover.cover
  coverTitle.innerText = currentCover.title
  tag1.innerText = currentCover.tagline1
  tag2.innerText = currentCover.tagline2
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function displayFormPage() {
  formPage.classList.remove('hidden')
  homePage.classList.add('hidden')
  savedPage.clasList.add('hidden')
}

function displayFormButtons() {
  homeButton.classList.remove('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
}

function displayHomePage() {
  formPage.classList.add('hidden')
  homePage.classList.remove('hidden')
  savedPage.clasList.add('hidden')
}

function displayHomeButtons() {
  homeButton.classList.add('hidden')
  randomButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
}

function displaySavedPage() {
  formPage.classList.add('hidden')
  homePage.classList.add('hidden')
  savedPage.classList.remove('hidden')
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function createCustomBook() {
  event.preventDefault()

  var inputCover = userCover.value
  var inputTitle = userTitle.value
  var inputTag1 = userTag1.value
  var inputTag2 = userTag2.value

  covers.push(inputCover)
  titles.push(inputTitle)
  descriptors.push(inputTag1, inputTag2)

  currentCover = new Cover(inputCover, inputTitle, inputTag1, inputTag2)

  coverImage.src = inputCover
  coverTitle.innerText = inputTitle
  tag1.innerText = inputTag1
  tag2.innerText = inputTag2

  returnHome()
}

function returnHome() {
  homePage.classList.remove('hidden')
  formPage.classList.add('hidden')
  homeButton.classList.add('hidden')
  randomButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
}
