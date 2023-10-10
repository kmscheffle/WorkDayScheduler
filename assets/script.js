// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var dateString = dayjs().format("dddd, MMMM DD")

var currentTime = dayjs().format("HH")
console.log(currentTime)
var dateEl = document.querySelector("#currentDay")
dateEl.textContent = dateString
var container = document.querySelector(".container-lg")
var template = document.querySelector("template")

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

function timeClass(hour) {
  if (hour === currentTime) return "present"
  else if (hour > currentTime) return "future"
  else if (hour < currentTime) return "past"
}

function timeStamps(hour) {
  switch (hour) {
    case 9:
      return "9 AM";
    case 10:
      return "10 AM";
    case 11:
      return "11 AM";
    case 12:
      return "12 PM";
    case 13:
      return "1 PM";
    case 14:
      return "2 PM";
    case 15:
      return "3 PM";
    case 16:
      return "4 PM";
    case 17:
      return "5 PM";
    default:

      break;
  }

}
for (let i = 0; i < hours.length; i++) {
  
  var timeBlock = template.content.cloneNode(true)
  timeBlock.querySelector(".hour").textContent = timeStamps(hours[i])
  timeBlock.querySelector("textarea").classList.add(timeClass(hours[i]))
  timeBlock.querySelector("textarea").textContent= localStorage.getItem(hours[i])
  timeBlock.querySelector("button").addEventListener("click", function (event) {
    localStorage.setItem(hours[i], event.currentTarget.previousElementSibling.value)
  
  })
  
  container.append(timeBlock)


}




// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

