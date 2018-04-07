$(document).ready(function() {
    
    var targetNumber = Math.floor(Math.random() * 102) + 19;
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var crystalValue = [
        Math.floor(Math.random() * 12) + 1,
        Math.floor(Math.random() * 12) + 1,
        Math.floor(Math.random() * 12) + 1,
        Math.floor(Math.random() * 12) + 1,
    ]   
    var crystals = $("#crystals");

    $("#targetNumber").text(targetNumber);

    for (var i = 0; i < 4; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src","http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
        imageCrystal.attr("data-crystalValue", crystalValue[i]);
        crystals.append(imageCrystal);
    }

    function resetGame() {
        counter = 0;
        $("#totalScore").text(counter);
        targetNumber = Math.floor(Math.random() * 102) + 19;
        $("#targetNumber").text(targetNumber);
    }

    
    crystals.on("click", ".crystal-image", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#totalScore").text(counter);

        if (counter === targetNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            resetGame();
        }
        else if (counter >= targetNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            resetGame();
        }
    })
})