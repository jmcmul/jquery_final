$(document).ready(function(){
$("form").submit(function(event){
    var correctinput = true;
    var address = $("#streetaddr").val();
    var name = $("#fullname").val();
    if (name == 0){
      $("#nameerrormsg").css("display", "block");
      event.preventDefault();
      correctinput = false;
  } 
    else {
      $("#nameerrormsg").css("display", "none");
  }
    if (address == 0){
      $("#addrerrormsg").css("display", "block");
      event.preventDefault();
      correctinput = false;
  } else {
      $("#addrerrormsg").css("display", "none");
  }

return correctinput;

})

})