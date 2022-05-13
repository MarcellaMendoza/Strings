// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeElement = document.getElementById("welcome-element")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

let name = "Mother of Dragons"
let greeting = "Welcome back, "

// Render the welcome message using welcomeElement.innerText
welcomeElement.innerText = greeting + name
//welcomeElement.innerText = welcomeElement.innerText + "🐲"
welcomeElement.innerText += "🐲"
