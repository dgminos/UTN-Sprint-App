const createTaskDate = () => {
// get a new date (locale machine date time)
let date = new Date();
// get the date as a string
let stringDate = date.toDateString()
// get the time as a string
let time = date.toLocaleTimeString()
let taskDate = stringDate+ ' '+time
return taskDate
}

  addTaskFormSubmit.addEventListener("submit", (e) => {
    e.preventDefault()
    document.getElementById('date-span').innerHTML = createTaskDate()
  })