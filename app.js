//Write a JavaScript program to display the current day and time in the 
//following format. 
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

var currentDate = new Date();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = daysOfWeek[currentDate.getDay()];

var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

var time = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12; 

console.log("Today is: " + day + ".");
console.log("Current time is: " + hours + " " + time + " : " + minutes + " : " + seconds + ".");









