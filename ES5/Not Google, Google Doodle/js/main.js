


var x;
var y;

//Conditional Logic to check current boolean value of x and y
function check() {

    if (x && y === true)

    {
        document.getElementsByTagName("span")[0].setAttribute("class", "blue g");
     

    } else

    {
        document.getElementsByTagName("span")[0].setAttribute("class", "grey g");
      
    }

    if ((x === true && y === false) || (x === false && y === true)) {

        document.getElementsByTagName("span")[1].setAttribute("class", " red g");

    } else

    {
        document.getElementsByTagName("span")[1].setAttribute("class", "  g");

    }



    if ((x || y === true) || (x && y === true))
  
    {

        document.getElementsByTagName("span")[2].setAttribute("class", "orange g");

    } else

    {

        document.getElementsByTagName("span")[2].setAttribute("class", " g");

    }

    if (y === false)

    {
        document.getElementsByTagName("span")[7].setAttribute("class", " green g");

    } else {
        document.getElementsByTagName("span")[7].setAttribute("class", "  g");
    }

    if (x === false)

    {
      

        document.getElementsByTagName("span")[8].setAttribute("class", " red g");
       
    } else {
        document.getElementsByTagName("span")[8].setAttribute("class", "  g");


    
    }

}



// Functions to display output based on x and y boolean values
function valueChange1() {

    y = false;
    x = false;

    document.getElementsByTagName("span")[4].setAttribute("class", "hide");
    document.getElementsByTagName("span")[6].setAttribute("class", "hide");

}

function valueChange2() {

    y = true;
    x = true;
    document.getElementsByTagName("span")[4].setAttribute("class", "");
    document.getElementsByTagName("span")[6].setAttribute("class", "");

}

function valueChange3() {

    y = true;
    x = false;

    document.getElementsByTagName("span")[4].setAttribute("class", "hide");
    document.getElementsByTagName("span")[6].setAttribute("class", "");


}

function valueChange4() {

    y = false;
    x = true;

    document.getElementsByTagName("span")[4].setAttribute("class", "");
    document.getElementsByTagName("span")[6].setAttribute("class", "hide");

}


//Call back functions to run output functions 
function run() {
    setTimeout(function() {
        valueChange1()
    }, 0);
    setTimeout(function() {
        valueChange2()
    }, 3000);
    setTimeout(function() {
        valueChange3()
    }, 6000);
    setTimeout(function() {
        valueChange4()
    }, 9000);
  
}

//Invoke everything
run();
setInterval("check()", 0);
setInterval("run()", 12000);