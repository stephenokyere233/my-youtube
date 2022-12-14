//DECLARATION OF VARIABLES
let light = document.querySelector(".light");
let dark = document.querySelector(".dark");
let container = document.querySelector(".container");
let body = document.querySelector("body");

//LET'S CREATE A FUNCTION WITH AN EVERNT PARAMETER
//ARROW FUNCTION
const toggleMode = (e) => {
  //we'll make a nested if statement to check for some
  // conditions
  if (e.target.classList != "container__label--selected") {
    if (e.target.classList.contains("light")) {
      light.classList.add("container__label--selected");
      dark.classList.remove("container__label--selected");
    } else if (e.target.classList.contains("dark")) {
      dark.classList.add("container__label--selected");
      light.classList.remove("container__label--selected");
    }
  }
};
//ADDING OUR FIRST EVENT LISTENER
container.addEventListener("click", toggleMode);

//WE THEN CREATE A NEW FUNCTION TO CHANGE THE COLORS WHILE WE SWITCH
const change = (e) => {
  //here we'll use an if statement with logical operators(&&)
  if (body.classList != "dark" && e.target.classList.contains("dark")) {
    body.classList.add("dark");
  } else if (body.classList == "dark" && e.target.classList.contains("light")) {
    body.classList.remove("dark");
  }
};
//OUR NEXT EVENT LISTENER
container.addEventListener('click',change)