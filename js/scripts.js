var translate = function(words){
  var vowels = ["a","e","i","o","u"];

  for (var i = 0; i <= words.length; i+=1 ) {
    if (words[0] === vowels[i]) {
      
      return true;
    } else {
      return false;
    }
  }
}


$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    var words = ($("input#words").val());
    var result = translate(words);
    $("#result").text(result);

    event.preventDefault();

  });
});
