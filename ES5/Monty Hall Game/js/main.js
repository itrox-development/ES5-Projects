var doors = [];
var win = 0;
var lose = 0;
var state;

function random() {

    var instance = Math.ceil(Math.random() * 15);

    instance === 1 ? doors = ["GOAT", "CAR", "BOOK"] : null
    instance === 2 ? doors = ["CAR", "HAIRDRYER", "PENCIL"] : null
    instance === 3 ? doors = ["RABBIT", "CUP", "CAR"] : null

    instance === 4 ? doors = ["CHAIR", "CAR", "PEN"] : null
    instance === 5 ? doors = ["CAR", "SANDWICH", "RUBBER"] : null
    instance === 6 ? doors = ["TABLE", "DESK", "CAR"] : null

    instance === 7 ? doors = ["GLOVE", "CAR", "USB STICK"] : null
    instance === 8 ? doors = ["CAR", "BOTTLE", "BUCKET"] : null
    instance === 9 ? doors = ["CLOTH", "POT", "CAR"] : null

    instance === 10 ? doors = ["SHOE", "CAR", "RUG"] : null
    instance === 11 ? doors = ["CAR", "SPOON", "YO-YO"] : null
    instance === 12 ? doors = ["FLOWER", "CLOCK", "CAR"] : null

    instance === 13 ? doors = ["TIE", "CAR", "WHEEL"] : null
    instance === 14 ? doors = ["CAR", "STONE", "LIGHT BULB"] : null
    instance === 15 ? doors = ["BIN", "PILLOW", "CAR"] : null

    // return console.log("-----------------------------------------------------------");
    return console.log("----------------DOOR INSTANCE --> ", instance, doors, "------------------");
    //console.log(doors);
}
//random();
//console.log(random());
//console.log(doors);


function guess() {

    random();

    var montysDoorChoiceInstance = Math.ceil(Math.random() * 2);


    var doorGuess = prompt("WHICH DOOR DO YOU THINK THE CAR IS BEHIND? ");


    doorGuess = doorGuess.toUpperCase();
    if (doorGuess == 1 || doorGuess == "ONE") {

        if (doors[0] === "CAR") { // being right
            state = true;
            if (montysDoorChoiceInstance == 1) {

                // (wrongDoor, correctDoor, revealDoor,chosenDoorNo,behindDoorNo,changeToDoorNo)
                dynamicDoorFunction(doors[1], doors[0], doors[2], "1!", "3!", "2!");
            } else if (montysDoorChoiceInstance == 2) {

                // (wrongDoor, correctDoor, revealDoor,chosenDoorNo,behindDoorNo,changeToDoorNo)
                dynamicDoorFunction(doors[2], doors[0], doors[1], "1!", "2!", "3!");
            }

        }
        // being wrong - first possibility, guessed door 1
        else if (doors[1] === "CAR") { // car is behind door 2 
            state = false;
            // (wrongDoor, correctDoor, revealDoor,chosenDoorNo,behindDoorNo,changeToDoorNo)
            dynamicDoorFunction(doors[0], doors[1], doors[2], "1!", "3!", "2!");

        }
        // being wrong - second possibility, guessed door 1
        else if (doors[2] === "CAR") { // car is behind door 3 
            state = false;

            // (wrongDoor, correctDoor, revealDoor,chosenDoorNo,behindDoorNo,changeToDoorNo)
            dynamicDoorFunction(doors[0], doors[2], doors[1], "1!", "2!", "3!");
        }

    } else if (doorGuess == 2 || doorGuess == "TWO") {

        if (doors[1] === "CAR") { // being right
            state = true;
            if (montysDoorChoiceInstance == 1) {

                // (wrongDoor, correctDoor, revealDoor,chosenDoorNo,behindDoorNo,changeToDoorNo)
                dynamicDoorFunction(doors[0], doors[1], doors[2], "2!", "3!", "1!");
            } else if (montysDoorChoiceInstance == 2) {

                // (wrongDoor, correctDoor, revealDoor,chosenDoorNo,behindDoorNo,changeToDoorNo)
                dynamicDoorFunction(doors[2], doors[1], doors[0], "2!", "1!", "3!");
            }

        }

        // being wrong - first possibility, guessed door 2
        else if (doors[0] === "CAR") { // car is behind door 1 
            state = false;
            // (wrongDoor, correctDoor, revealDoor,chosenDoorNo,behindDoorNo,changeToDoorNo)
            dynamicDoorFunction(doors[1], doors[0], doors[2], "2!", "3!", "1!");

        }
        // being wrong - second possibility, guessed door 2
        else if (doors[2] === "CAR") { // car is behind door 3 
            state = false;

            // (wrongDoor, correctDoor, revealDoor,chosenDoorNo,behindDoorNo,changeToDoorNo)
            dynamicDoorFunction(doors[1], doors[2], doors[0], "2!", "1!", "3!");
        }

    } else if (doorGuess == 3 || doorGuess == "THREE") {

        if (doors[2] === "CAR") { // being right
            state = true;
            if (montysDoorChoiceInstance == 1) {

                // (wrongDoor, correctDoor, revealDoor,chosenDoorNo,behindDoorNo,changeToDoorNo)
                dynamicDoorFunction(doors[0], doors[2], doors[1], "3!", "2!", "1!");
            } else if (montysDoorChoiceInstance == 2) {

                // (wrongDoor, correctDoor, revealDoor,chosenDoorNo,behindDoorNo,changeToDoorNo)
                dynamicDoorFunction(doors[1], doors[2], doors[0], "3!", "1!", "2!");
            }

        }

        // being wrong - first possibility, guessed door 3
        else if (doors[1] === "CAR") { // car is behind door 2
            state = false;
            // (wrongDoor, correctDoor, revealDoor,chosenDoorNo,behindDoorNo,changeToDoorNo)
            dynamicDoorFunction(doors[2], doors[1], doors[0], "3!", "1!", "2!");

        }
        // being wrong - second possibility, guessed door 3
        else if (doors[0] === "CAR") { // car is behind door 1
            state = false;

            // (wrongDoor, correctDoor, revealDoor,chosenDoorNo,behindDoorNo,changeToDoorNo)
            dynamicDoorFunction(doors[2], doors[0], doors[1], "3!", "2!", "1!");
        }


    } else if (doorGuess == null) {
        //if cancelled do nothing so use prompt methods default cancel functionality
    } else {

        guess();
    }

}


function dynamicDoorFunction(wrongDoor, correctDoor, revealDoor, chosenDoorNo, behindDoorNo, changeToDoorNo) {

    alert("YOU CHOSE DOOR " + chosenDoorNo + " : Monty reveals a " + revealDoor + " behind door " + behindDoorNo);

    var r = confirm(" MONTY ASKS: \"Would you like to choose door " + changeToDoorNo + " instead?");

    if (state === true) { // run if guess is right 

        if (r == true) {
            console.log("YOU CHANGE TO DOOR " + changeToDoorNo + "AND REVEAL THE " + wrongDoor + " TOO BAD");
            lose++;
            console.log("YOU HAVE WON " + win + " TIME(S) AND LOST " + lose + " TIME(S)");
        } else {
            console.log("YOU STICK WITH DOOR " + chosenDoorNo + " AND REVEAL A " + correctDoor + " EXCELLENT!");
            win++;
            console.log("YOU HAVE WON " + win + " TIME(S) AND LOST " + lose + " TIME(S)");
        }

    } else if (state === false) { // run if guess is wrong 

        if (r == true) {
            console.log("YOU CHANGE TO DOOR " + changeToDoorNo + " AND REVEAL THE " + correctDoor + " EXCELLENT!");
            win++;
            console.log("YOU HAVE WON " + win + " TIME(S) AND LOST " + lose + " TIME(S)");
        } else {
            console.log("YOU STICK WITH DOOR  " + chosenDoorNo + " AND REVEAL A " + wrongDoor + " TOO BAD");
            lose++;
            console.log("YOU HAVE WON " + win + " TIME(S) AND LOST " + lose + " TIME(S)");
        }
    }

}