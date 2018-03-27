$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".result").hide();

    var inputSentence = $("#sentence").val();
    // var vowels = ["a", "e", "i", "o", "u" ];
    var letters = inputSentence.split("");
    var newLetters = [];


    for (var index = 0; index < letters.length; index++) {
      if (letters[index] === "a" ||
      letters[index] === "e" ||
      letters[index] === "i" ||
      letters[index] === "o" ||
      letters[index] === "u") {

      newLetters.push("-");

      } else {
      newLetters.push(letters[index]);
      }
    }

    var arrayToString = newLetters.join("");


    $(".result").show();
    $("#result").text(arrayToString);
  });
});
