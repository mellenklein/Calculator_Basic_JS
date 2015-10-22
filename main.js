// Set variables to select each element on the page:
      //the input value of num_1
      //the input value of num_2
      //the 'Calculate' button
var num_one = document.getElementById('num_one');
var num_two = document.getElementById('num_two');
var calculateBtn = document.getElementById('calculateBtn');

document.addEventListener("DOMContentLoaded", function(event) {
  // Create a function to calculate the answer:
      // The function finds the value of num_one and num_two, converts both strings to numbers, then adds them together.
var handleClick = function(){
    var sum = Number(num_one.value) + Number(num_two.value);
    // Update the content of answer in the html to include the sum we calculated.
    document.getElementById('answer').innerHTML = sum;
    console.log(sum);
}
// Set the function to run everytime the button is clicked:
calculateBtn.addEventListener('click', handleClick);
});
