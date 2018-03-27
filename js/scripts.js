$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".result").hide();

    var inputSentence = $("#sentence").val();
    // var vowels = ["a", "e", "i", "o", "u" ];



    for (var index = 0; index <= inputSentence.length - 1; index++) {
      alert(inputSentence.charAt(index));
    }



    $(".result").show();
    $("#result").text(inputSentence);
  });
});
