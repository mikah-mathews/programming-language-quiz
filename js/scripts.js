$(document).ready(function () {
  event.preventDefault();
  $("#quiz").hide();
  $(".explaination").hide();
  $("#startButton").click(function (event) {
    // Shows the quiz
    $("#quiz").toggle();

    // when the submit quiz button is pressed - do this
    $("#btnConfirm").click(function (event) {
      // sets amount of value variables. These will be compared to show whether you should learn JS, Python, or Ruby
      var amountOfA = 0;
      var amountOfB = 0;
      var amountOfC = 0;

      // checks to see value of question one
      $("input:radio[name=quesionOne]:checked").val() {
        if(value="a") {
          var amountOfA = function addA() {
            amountOfA + 1;
          } 
        } else if(value="b") {
          var amountOfB = amountOfB + 1;
        } else if(value="c") {
          var amountOfC = amountOfC + 1;
        }
      };

      // checks to see value of question two
      $("input:radio[name=quesionTwo]:checked").val() {
        if(value="a") {
          var amountOfA = amountOfA + 1;
        } else if(value="b") {
          var amountOfB = amountOfB + 1;
        } else if(value="c") {
          var amountOfC = amountOfC + 1;
        }

      // checks to see value of question Three
      $("input:radio[name=quesionThree]:checked").val() {
        if(value="a") {
          var amountOfA = amountOfA + 1;
        } else if(value="b") {
          var amountOfB = amountOfB + 1;
        } else if(value="c") {
          var amountOfC = amountOfC + 1;
        }

        // checks to see value of question Four
      $("input:radio[name=quesionFour]:checked").val() {
        if(value="a") {
          var amountOfA = amountOfA + 1;
        } else if(value="b") {
          var amountOfB = amountOfB + 1;
        } else if(value="c") {
          var amountOfC = amountOfC + 1;
        }

        // checks to see value of question Five
      $("input:radio[name=quesionFive]:checked").val() {
        if(value="a") {
          var amountOfA = amountOfA + 1;
        } else if(value="b") {
          var amountOfB = amountOfB + 1;
        } else if(value="c") {
          var amountOfC = amountOfC + 1;
        }

      if(amountOfA > amountOfB && amountOfA > amountOfC) {
        $("#javascript").show();
      } else if(amountOfB > amountOfA && amountOfB > amountOfC) {
        $("#python").show();
      } else if(amountOfC > amountOfA && amountOfC > amountOfB) {
        $("#ruby").show();
      }
      event.preventDefault();
    });
  });
});