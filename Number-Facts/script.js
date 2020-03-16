  function letter(inputtxt){
    if (inputtxt.match(/[a-z]/i)) {
      return true;
    return false;
}
    }
  $("#facts").on("submit", function(){

      $("#text").empty();
      
        let valid = true;
        if($("#number").val() == ""){
          $("#warning").empty();
          $("#text").empty();
           $("#numerr").html("<- Can't be empty.");
          $("#numerr").css("color", "red");
          valid = false;
        }
        else{
          $("#numerr").html("");
        }
        if(letter($("#number").val())){
          $("#numerr").html("Thats not a number, silly!");
          $("#numerr").css("color", "red");
          valid = false;

        }
        if(valid){
          $("#warning").html("This might take a few seconds. Please wait.");
          var settings = {
            async: true,
            crossDomain: true,
            url: "https://numbersapi.p.rapidapi.com/"+ $("#number").val() +"/trivia?fragment=true&notfound=floor&json=true",
            method: "GET",
            headers: {
              "x-rapidapi-host": "numbersapi.p.rapidapi.com",
              "x-rapidapi-key": "e7089f4622msh6e33c86698590d1p109f54jsn56754dadc0aa"
            }
          }

          $.ajax(settings).done(function (response) {
            if(response.found == false){
              $("#text").append("<p>Sorry, that number is too unique! Try another.</p>");
              $("#text").css("color", "red");
            }
            else{
              $("#text").empty();
               $("#warning").empty();
              $("#text").css("color", "black");
              $("#text").append("<h2>" + $("#number").val() +" is " + response.text + "<h2>");
            }
          });
        }
        event.preventDefault();
    });