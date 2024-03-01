
//Section16-21
function isEven(num){
    if (num%2===0){
        console.log('even');
    }
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
   
   
    //AND THIS LINE ↑↑↑↑↑
}

//Section16-22
function getColor(phrase) {
    if (phrase === 'stop') {
      console.log('red');
    } else if (phrase === 'slow') {
      console.log('yellow');
    } else if (phrase === 'go') {
      console.log('green');
    } else {
      console.log('purple');
    }
  }

//Section16-23
const num = 102;
 
// DO NOT TOUCH! (please)
if (num <= 100) {
  if (num >= 50) {
    console.log("HEY!");
  }
} else {
  if (num < 103) {
    if (num % 2 === 0) {
      console.log("YOU GOT ME!");
    }
  }
}


//Section16-24
const mystery = 'Pretty7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE
// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}