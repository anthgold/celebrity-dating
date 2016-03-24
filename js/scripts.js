$(document).ready(function() {
  $("form").submit(function(event) {

    var score = 0;

    var result = parseInt($("input:radio[name=flavor]:checked").val());
    score += result;
    result = parseInt($("input:radio[name=food]:checked").val());
    score += result;
    result = parseInt($("input:radio[name=date]:checked").val());
    score += result;
    result = parseInt($("input:radio[name=pet]:checked").val());
    score += result;

    // calculate results //
    if (score > 120) {
      alert("Selma Hayek");
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
