/*
Formula code is based on
            N!
     ---------------
       R! (N - R)!   
       
       * Find The factorial of N
       * Find the factorial of R
       * Subtract R from N and find that results factorial
       * Multiply R factorial by N - R factorial result 
*/
// variables to hold integer and factorial decimal values 
var N;
var R;
var N_factorial;
var R_factorial;
var N_minusR_factorial;

// Object to calculate the factorial of N and R
function FactorialObj(){

  // method to calculalte the factorial of a number
this.factorise = function(){

  //variables
var totalLotteryNumbers = N; // set to the value of the global variable N
var pickedNumbers = R; // set to the value of the global variable R
var N_minusR = totalLotteryNumbers - pickedNumbers; // Create integer of N - R and store it in a variable
   
//recursive function for calcuating the factorial   
var factorial = function(n) {
    if(n == 0) { // if n argument is 0 return 1 and stop recursively using this function 
        return 1
    } else {
        return n * factorial(n - 1); // else if n argument is not 1 invoke this function again and minus 1 from n.
      // n will be one integer less each time it is used recursively until it equals to 0 and meets the "if" condition 
    }
}

// initially invoking the function for each number a factorial is needed for. The number is provided as an argument for n. 
N_factorial = factorial(totalLotteryNumbers);
R_factorial = factorial(pickedNumbers);
N_minusR_factorial = factorial(N_minusR);
return console.log(factorial(totalLotteryNumbers), " / " + factorial(pickedNumbers)); // Testing 
                      
	}
}

//Create new instance of the object
var FindTheFactorial = new FactorialObj();

//Function to take user input and use the factorial object 
function jackpotOdds(){
  
  //Take N and R as integers and set them to global variables 
N = parseInt(prompt("How many Lottery Numbers In Total?"))
R = parseInt(prompt("How Many Numbers To Pick?"))
 
  //Run the factorise() method in the Object to find the factorial of N and R
FindTheFactorial.factorise();      

  //Display results 
document.getElementById("output").innerHTML = ("THERE IS A 1 IN " + "<br>" + Math.floor(N_factorial / (R_factorial * N_minusR_factorial )) + "<br>" + "CHANCE IN WINNING THE JACKPOT ");
}



























//TEST BUTTONS

/*
function showN()
{
  console.log('N = ' + N);
  
}

function showR()
{
  console.log('R = ' + R);
  
}

function showN_minusR()
{
  console.log('N - R = ' + FactorialObj(N_minusR));
  
} 

function nFactorial()
{
  console.log('N facorial is = ' + N_factorial);
  
}

function rFactorial()
{
  console.log('R facorial is = ' + R_factorial);
  
}

function nMinus_rFactorial()
{
  console.log('N - R facorial is = ' + R_factorial);
  
}

function calculate()
{
  console.log(N_factorial / (R_factorial * N_minusR_factorial) );
   
}
*/