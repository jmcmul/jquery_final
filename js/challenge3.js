$(document).ready(function(){
 $("form").submit(function(onsubmit){
    var year = $('input[name="standing"]');
    var fruit = $('input[name="fruit"]');
    if((fruit.is(":checked")) && (year.is(":checked"))){
      return;
    }
    alert("Pick a fruit and a year!");
    event.preventDefault();
  })
})