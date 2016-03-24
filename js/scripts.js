$(document).ready(function() {
  $("form").submit(function(event) {
    // Set starting score to 0
    var score = 0;
    // Tallies the point value from each quiz question
    var result = parseInt($("input:radio[name=flavor]:checked").val());
    score += result; // Re-sets score to score + result
    result = parseInt($("input:radio[name=food]:checked").val());
    score += result; // Re-sets score to score + result
    result = parseInt($("input:radio[name=date]:checked").val());
    score += result; // Re-sets score to score + result
    result = parseInt($("input:radio[name=pet]:checked").val());
    score += result; // Re-sets score to score + result
    // Calculate results //
    if (score > 120) {
      alert("Salma Hayek");
    }
    else if (score > 80) {
      alert("Angelina Jolie");
    }
    else if (score > 40) {
      alert("Whoopi Goldberg!");
    }
    else {
      alert("Rosanne");
    }
    event.preventDefault();
  });
});
