var translate = function(words) {
  var result = [];
  var endWord = "ay";
  if (consonantOrVowel(words)) {
    result = words.concat(endWord);
    return result;
  } else {
    var firstLetter = words[0];
    result.push(firstLetter, endWord);
    return result.join('');
  }
};

var consonantOrVowel = function(words) {
  var vowels = ["a","e","i","o","u"];

  for (var i = 0; i <= vowels.length; i+=1 ) {
    if (words[0] === vowels[i]) {
    return true;
    } else {
      return false;
    }
  }
};

$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    var words = ($("input#words").val());
    var result = translate(words);
    $("#result").text(result);

    event.preventDefault();
  });
});
