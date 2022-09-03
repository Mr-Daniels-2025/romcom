// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tag1 = document.querySelector('.tagline-1')
var tag2 = document.querySelector('.tagline-2')

var randomButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector(".save-cover-button")
var viewSavedButton = document.querySelector(".view-saved-button")
var makeNewButton = document.querySelector(".make-new-button")
var homeButton = document.querySelector('.home-button')
var customButton = document.querySelector('.create-new-book-button')

//var randomCover = document.querySelector(".random-cover-button")

var homePage = document.querySelector(".home-view")
var savedPage = document.querySelector(".saved-view")
var formPage = document.querySelector(".form-view")
var savedSection = document.querySelector('.saved-covers-section')

var userCover = document.querySelector('.user-cover')
var userTitle = document.querySelector('.user-title')
var userTag1 = document.querySelector('.user-desc1')
var userTag2 = document.querySelector('.user-desc2')

//add appropriate buttons referenced in Iteration-1 instructions.

//var homeHidden = document.querySelector(".home-button")

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
  //savedCovers.push??
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

saveCoverButton.addEventListener('click', save) // add in the word "save" for i-3

customButton.addEventListener('click', createCustom)

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
//--Iteration-0
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

//Iteration-1
//classList is property that returns a list of class attributes of an element in the DOM.
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
function displaySavedPage() {
  formPage.classList.add('hidden')
  homePage.classList.add('hidden')
  savePage.classList.remove('hidden')
}
function displaySavedButtons() {
  homeButton.classList.remove('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  viewSavedButton.classList.add('hidden')
}

// iteration-2
function createCustom() { //from iteration-0
  event.preventDefault() // you need this to keep the page from going back tot he default.

// STEP-2:  sets variables that I am already working with. This says "in this instance, what is the values.."
// "... change the value (i.e., use .value) of the thing that user is acting on."
var inputImage = userCover.value
var inputTitle = userTitle.value
var inputTag1 = userTag1.value
var inputTag2 = userTag2.values

//STEP-3:  we use this block of code (i.e., use a .push) to take whatever the user inputs...
//then push it into the covers array from the data.js file and use the method push to push whatever
//is in the user's input field into the array.
//NOTE:  the covers, titles, descriptors refers to the data.js file variable names.
//Note-2: the "arguments" inside of the methods are taken from the variables above.
//(the variables above change the value of the things the user is acting upon).

covers.push(inputImage)
titles.push(inputTitle)
descriptors.push(inputTag1)
descriptors.push(inputTag2)

// STEP-1: This block of info simply sets the values. Which means the user's input
//will allow me to have the new value
      coverImage.src = userCover.value
      coverTitle.innerText = userCover.value
      tag1.innerText = userCover.value
      tag2.innerText = userCover.value

      //the 'value' informs the HTML that it equals the user's input
      /*JavaScript values are the values that comprise values like Booleans, Strings, arrays,
      numbers, etc. Its behavior is the same as other programming languages as values are possessing
       some definite properties which is being used as per the
      requirement and run time environment while executing the JavaScript.*/

// This next piece is for iteration-3:
currentCover = new Cover(coverImage.src, coverTitle.innerText, tag1.innerText, tag2.innerText)

// Here we want a function to invoke / return another functions
//...before we execute that function.
  returnHome()
}

//Save the submitted data into the respective arrays
//use or store? values --> new instance class
// go back to the home view (hide the form view)
//End result should be displaying the New Cover Image

function returnHome() {
  homePage.classList.remove('hidden')
  formPage.classList.add('hidden')
  homeButton.classList.add('hidden')
  randomButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
  }
//Iteration-3

function viewSavedCovers() {
  savedSection.innerHTML = "";
  for (var i = 1; i < savedCovers.length; i++) {
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
  for (var i = 1; i < savedCovers.length; i++) {
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
