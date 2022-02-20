// Timer 
let hourElement = document.querySelector("#hours");
let minuteElement = document.querySelector("#minutes");
let secondElement = document.querySelector("#seconds");
let millisecondElement = document.querySelector("#milliseconds");

// Button variables
let startButton = document.querySelector("#btn-start");
let stopButton = document.querySelector("#btn-stop");
let resetButton = document.querySelector("#btn-reset");

// Counter Variable
let hour = 00;
let minute = 00;
let second = 00;
let millisecond = 00;
let interval;

window.onload = () => clearFields();

startButton.onclick  = function() {
    clearInterval(interval); // If Some Error Happen and Interval is Setup, It Will Clear That Interval
    interval = setInterval(startTimer, 10); // 
};
stopButton.onclick = function() { 
    clearInterval(interval); // On Clicking Pause Buttom We Will Clear Interval
};
resetButton.onclick = function() {
    clearInterval(interval); // Clear Interval
    clearFields(); // Clear Timer Fields
}
function startTimer() {
    millisecond++;
    if(millisecond < 9) {
        millisecondElement.innerText = "0" + millisecond;
    }
    if(millisecond > 99) {
        second++;
        secondElement.innerText = "0" + second;
        millisecond = 0;
        millisecondElement.innerText = "0" + millisecond;
    }
    if(second > 60) {
        minute++;
        minuteElement.innerText = "0" + minute;
        second = 0;
        secondElement.innerText = "0" + second;
    }

    if(millisecond > 9) {
        millisecondElement.innerText = millisecond;
    }
    if (second > 9){
        secondElement.innerText = second;
    }
    if (minute > 9){
        minuteElement.innerText = minute;
    }
    if(hour > 9) {
        hourElement.innerText = hour;
    }
}

function clearFields() {
    hourElement.innerText = "00";
    minuteElement.innerText = "00";
    secondElement.innerText = "00";
    millisecondElement.innerText = "00";
}


   















// // DEFINE VARS TO HOLD TIME VALUES

// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// // VARS TO HOLD "DISPLAY" VALUE

// let displaySeconds = 0;
// let displayMinutes = 0;
// let displayHours = 0;

// var buttonStart = document.getElementById("btn-start");
// var buttonStop = document.getElementById("btn-stop");
// var buttonReset = document.getElementById("btn-reset");

// // DEFINE VAR TO HOLD SETINTERVAL{} FUNCTION

// let interval = null

// // Define var to hold stopWatch status
// let status = "stopped";


// // STOP WATCH FUNCTION {LOGIC TO DETERMINE WHEN TO INCREMENT NEXT VALUE

// buttonStart.addEventListener("click", () =>{
//    clearInterval(interval);
//    interval = setInterval(startTime, 0);

// })

// buttonStop.addEventListener("click", () =>{
//      clearInterval(interval);
// })

// buttonReset.addEventListener("click", () =>{
//     clearInterval(interval);
//     hours = "0";
//     minutes = "0";
//     seconds = "0";
//     displayHours.innerHTML = hours;
//     displayMinutes.innerHTML = minutes;
//     displaySeconds.innerHTML = seconds;
// })

// function stopWatch() {

//     seconds++;

//     // Logic to determine when to increment next value
//     if (seconds / 60 === 1){
//         seconds = 0;
//         minutes++;


//         if(minutes / 60 === 1){
//             minutes = 0;
//             hours++
//         }
//     }

//     // add leading to 0 to the value, if secs.. mins.. hours are only one digit

//     if(seconds < 10){
//         displaySeconds = "0" + seconds.toString();

//     }
//     else{
//         displaySeconds = seconds
//     }

//     if(minutes < 10){
//         displayMinutes = "0" + minutes.toString();
//     }
//     else{
//         displayMinutes = minutes;
//     }
//     if(hours < 10){
//         displayHours = "0" + hours.toString();
//     }
//     else{
//         displayHours = hours;
//     }

// document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

// }
// window.setInterval(stopWatch, 1000);

// // function startStop(){

// //     if(status === "stopped"){


// //         // start the stopwatch (by calling the setInterval() function)
// //         interval =  window.setInterval(stopWatch, 1000);
// //         document.getElementById("start").innerHTML = "start"
// //         status = "started"
// //     }
// //     else{

// //         window.clearInterval(interval);
// //         document.getElementById("start").innerHTML = "start"
// //         status = "stopped"
// //     }
// // }
