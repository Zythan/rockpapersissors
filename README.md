Hello All,

Ok I might have gotten carried away with this one but I was having fun and learning optimization techniques. 
Course Name : Create a Back-End App with JavaScript

The lesson is your typical rock paper scissors, and I found two interesting optimizations while doing it.

First optimization is you can find the winner in one line of code:

const determineWinner = (playerChoice, compChoice) => {
    const player = convertChoiceToInt(playerChoice)
    const computer = convertChoiceToInt(compChoice)
    //This will give 1 if player wins, 2 if computer wins, 0 for a tie
    const winner = (3 + player - computer) % 3
    return winner
}

Explanation: 
In the sequence Rock=0, Paper=1, Scissors=2, each item defeats the preceding one. 
This is true even if we treat the sequence as wrapping (that is, the last item precedes the first).
First and last number are the total of the sequence ..in this case 3 :: choices are rock paper sissors
To put this in more mathematical terms, for any item X:
X is defeated by (X+1) % 3.
X defeats (X+2) % 3.
From this, it can be shown that (3+X-Y) % 3 is 1 if X defeats Y, or 2 if Y defeats X.
Adding 3 is needed to force the result to be non-negative: The modulus of a negative number will be negative or zero in C99 and implementation-dependent in C89.
The second optimization or just cool trick is Object Switch, using an object as a switch statement that just has a return for each case and a default if no valid case was found

const convertChoiceToInt = (choice) => {
    return ({        
        'rock'   : 0,
        'paper'  : 1,
        'sissors': 2
    })[choice] //?? `Bad Data :: winner = ${choice}`
}

Your choice as key of index to give you the value directly instead of using a switch and can be reused if assigned to a variable instead of making a function. Cool. Not sure if it is better but it is a cool idea. Oh, the Codecademy doesn’t like the default value for some reason so commented out. It works fine in node.js though.
Will post all code as a follow up post.
Anyway, I was having a good time just learning again and having the freedom to screw around with code and thought I would share.
