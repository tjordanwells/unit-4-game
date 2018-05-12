$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var randomNumber = Math.floor(Math.random() * 120) + 19;
    console.log(randomNumber);
    var totalScore = 0;

    var crystalArray = [
        Math.floor(Math.random() * 12) + 1,
        Math.floor(Math.random() * 12) + 1,
        Math.floor(Math.random() * 12) + 1,
        Math.floor(Math.random() * 12) + 1,
    ];

    for (i = 0; i < crystalArray.length; i++);

    var crystalImage = $("#crystal");

    crystalImage.attr("data-value", crystalArray[i]);
   


    $("#crystal").click(function() {
        var crystalValue = ($(this).attr("data-value"));
        totalScore += crystalValue;
        console.log(crystalValue);
        console.log(totalScore);

        if (totalScore === randomNumber) {
            wins++;
            alert("Winner!")
    
            function reset() {
                totalScore = 0;
                var randomNumber = Math.floor(Math.random() * 120) + 19;
                var crystalArray = [
                    Math.floor(Math.random() * 12) + 1,
                    Math.floor(Math.random() * 12) + 1,
                    Math.floor(Math.random() * 12) + 1,
                    Math.floor(Math.random() * 12) + 1,
                ];
            };
        };
    
        if (totalScore >= randomNumber) {
            losses++;
            alert("Loser!");
    
            function reset() {
                totalScore = 0;
                var randomNumber = Math.floor(Math.random() * 120) + 19;
                var crystalArray = [
                    Math.floor(Math.random() * 12) + 1,
                    Math.floor(Math.random() * 12) + 1,
                    Math.floor(Math.random() * 12) + 1,
                    Math.floor(Math.random() * 12) + 1,
                ];
            };
        };

        $(".randomNumber").html("<h2>" + randomNumber + "</h2>");
        $(".wins").text(wins);
        $(".losses").text(losses);
        $(".totalScore").html("<h1>" + totalScore + "</h1>");
    });

});