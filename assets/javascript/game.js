$(document).ready(function(){
    var wins = 0
    var losses = 0 

    var redGem = random()
    var blueGem = random()  
    var greenGem = random()  
    var yellowGem = random()  
    
    var totalScore = 0
    var computerChoice = computerRandom()  

    document.getElementById("user-score").innerHTML = "Total Score: " + "<br>" + totalScore;
    document.getElementById("totals").innerHTML = "Wins: " + wins + " " + "Losses: " + losses;
    document.getElementById("computer-choice").innerHTML = computerChoice;

    
    function random() {
        return Math.floor(Math.random() * (12 - 1 + 1)) + 1
    }

    function computerRandom() {
        return Math.floor(Math.random() * (120 - 19 + 1)) + 19
    }
    
    function myFunction(a) {

        totalScore += a;

        if (totalScore > computerChoice) {
            alert("You Lose!");
            losses ++; 
            blueGem = random()
            redGem = random() 
            greenGem = random() 
            yellowGem = random()  
            computerChoice = computerRandom()
            totalScore = 0;
        }  
        
        else if (totalScore === computerChoice) {
            alert("You Win!");
            wins ++;
            totalScore = 0;
            blueGem = random()
            redGem = random() 
            greenGem = random()
            yellowGem = random()
            computerChoice = computerRandom()
        }

        document.getElementById("totals").innerHTML = "Wins: " + wins + " " + "Losses: " + losses;
        document.getElementById("computer-choice").innerHTML = computerChoice;
        document.getElementById("user-score").innerHTML = "Total Score: <br>" + totalScore;
    }

    $("#blueGem").on("click", function() {
        myFunction(blueGem);
    });

    $("#redGem").on("click", function() {
        myFunction(redGem);
    });

    $("#yellowGem").on("click", function() {
        myFunction(yellowGem);
    });

    $("#greenGem").on("click", function() {
        myFunction(greenGem);
    });
    
});


 

