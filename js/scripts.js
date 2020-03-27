$(document).ready(function () {
  $('#quiz').hide();
  $("#javascript").hide();
  $("#python").hide();
  $("#ruby").hide();
  $("#startButton").click(function() {
    // Shows the quiz
    $('#quiz').show();

    // when the submit quiz button is pressed - do this
    $("#btnConfirm").click(function () {
      // sets amount of value variables. These will be compared to show whether you should learn JS, Python, or Ruby
      var amountOfA = 0;
      var amountOfB = 0;
      var amountOfC = 0;

      var questionone = $("input:radio[name=questionOne]:checked").val();
      var questiontwo = $("input:radio[name=questionTwo]:checked").val();
      var questionthree = $("input:radio[name=questionThree]:checked").val();
      var questionfour = $("input:radio[name=questionFour]:checked").val();
      var questionfive = $("input:radio[name=questionFive]:checked").val();

      if (questionone === "a") {
        amountOfA += 1;
      } else if (questionone === "b") {
        amountOfB += 1;
      } else if (questionone === "c") {
        amountOfC += 1;
      } else {
        console.log("There is an error in question one.")
      }

      if (questiontwo === "a") {
        amountOfA += 1;
      } else if (questiontwo === "b") {
        amountOfB += 1;
      } else if (questiontwo === "c") {
        amountOfC += 1;
      } else {
        console.log("There is an error in question two.")
      }

      if (questionthree === "a") {
        amountOfA += 1;
      } else if (questionthree === "b") {
        amountOfB += 1;
      } else if (questionthree === "c") {
        amountOfC += 1;
      } else {
        console.log("There is an error in question three.")
      }

      if (questionfour === "a") {
        amountOfA += 1;
      } else if (questionfour === "b") {
        amountOfB += 1;
      } else if (questionfour === "c") {
        amountOfC += 1;
      } else {
        console.log("There is an error in question one.")
      }

      if (questionfive === "a") {
        amountOfA += 1;
      } else if (questionfive === "b") {
        amountOfB += 1;
      } else if (questionfive === "c") {
        amountOfC += 1;
      } else {
        console.log("There is an error in question one.")
      }

      if(amountOfA > amountOfB && amountOfA > amountOfC) {
        $("#javascript").show();
        console.log("JAVASCRIPT");
      } else if(amountOfB > amountOfA && amountOfB > amountOfC) {
        $("#python").show();
        console.log("PYTHON");
      } else if(amountOfC > amountOfA && amountOfC > amountOfB) {
        $("#ruby").show();
        console.log("RUBY");
      }
      event.preventDefault();
    });
  });
});