// Create variables targeting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tag1 = document.querySelector('.tagline-1')
var tag2 = document.querySelector('.tagline-2')
//
var randomButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var makeNewButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var customButton = document.querySelector('.create-new-book-button')
//
var formPage = document.querySelector('.form-view')
var homePage = document.querySelector('.home-view')
var savedPage = document.querySelector('.saved-view')
var savedSection = document.querySelector('.saved-covers-section')
//
var userCover = document.querySelector('.user-cover')
var userTitle = document.querySelector('.user-title')
var userTag1 = document.querySelector('.user-desc1')
var userTag2 = document.querySelector('.user-desc2')
// We've provided a few variables below
var savedCovers = [];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', makeRandomCover)

randomButton.addEventListener('click', makeRandomCover)
randomButton.addEventListener('click', displayHomePage)

makeNewButton.addEventListener('click', displayFormPage)
makeNewButton.addEventListener('click', displayFormButtons)

viewSavedButton.addEventListener('click', viewSavedCovers)

homeButton.addEventListener('click', displayHomePage)
homeButton.addEventListener('click', displayHomeButtons)

saveCoverButton.addEventListener('click', save)

customButton.addEventListener('click', createCustom)

savedSection.addEventListener('dblclick', deleteCover)
// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
//ITERATION-0
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
//ITERATION-1:
function displayFormPage() {
  formPage.classList.remove('hidden')
  homePage.classList.add('hidden')
  savedPage.classList.add('hidden')
}
function displayFormButtons() {
  homeButton.classList.remove('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
}
//
function displayHomePage() {
  formPage.classList.add('hidden')
  homePage.classList.remove('hidden')
  savedPage.classList.add('hidden')
}
function displayHomeButtons() {
  homeButton.classList.add('hidden')
  randomButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
  viewSavedButton.classList.remove('hidden')
}
//ITERATION:
function displaySavedPage() {
  formPage.classList.add('hidden')
  homePage.classList.add('hidden')
  savedPage.classList.remove('hidden')
}
function displaySavedButtons() {
  homeButton.classList.remove('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  viewSavedButton.classList.add('hidden')
}
//ITERATION-2:
function createCustom() {
  event.preventDefault()

  covers.push(userCover.value)
  titles.push(userTitle.value)
  descriptors.push(userTag1.value)
  descriptors.push(userTag2.value)

  coverImage.src = userCover.value
  coverTitle.innerText = userTitle.value
  tag1.innerText = userTag1.value
  tag2.innerText = userTag2.value

  currentCover = new Cover(coverImage.src, coverTitle.innerText, tag1.innerText, tag2.innerText)

  returnHome()
}

function returnHome() {
  homePage.classList.remove('hidden')
  formPage.classList.add('hidden')
  homeButton.classList.add('hidden')
  randomButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
}
//ITERATION-3:
function viewSavedCovers() {
  savedSection.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    createCoverElement(savedCovers[i])
  }
  homePage.classList.add('hidden')
  formPage.classList.add('hidden')
  savedPage.classList.remove('hidden')
  homeButton.classList.remove('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
}

function save() {
  var isSaved = false
  for (var i = 0; i < savedCovers.length; i++) {
    if (currentCover.id === savedCovers[i].id) {
      isSaved = true
    }
  }
  if (!isSaved) {
    savedCovers.push(currentCover)
  }
}


function createCoverElement(para) {
  var newDiv = document.createElement('div')
  newDiv.setAttribute('id', para.id)
  newDiv.classList.add('mini-cover')
  newDiv.style.overflow = 'hidden'
  newDiv.style.background = `url(${para.cover})`
  newDiv.style.backgroundSize = 'cover'
  newDiv.innerHTML = `
  <h4 class='cover-title'>${para.title}</h4>
  <p class='tagline'> A tale of ${para.tagline1} and ${para.tagline2}</p> `

  savedSection.appendChild(newDiv)
}

//ITERATION-4:
function deleteCover(event) {

  //var miniCoverID = event.target.id

  //var miniCoverToDelete = document.getElementById(miniCoverID)
  //miniCoverToDelete.remove();

  for(i = 0; i < savedCovers.length; i++) {
    if(savedCovers[i].id === Number(event.target.parentNode.id)) {
      savedCovers.splice(i, 1)

    }
    viewSavedCovers()
  }
}
