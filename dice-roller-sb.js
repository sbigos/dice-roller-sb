//Makes die and gives it a roll function

var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('button');
  
//On a click, the page will show a number between 1-6, and alert you if a 6 prints

  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
    if (result == 6) {
        alert("You won!");
    }
  }