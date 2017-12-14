$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 2000);
});

$('input#phone').change(function() {
       if (($('input#phone').val().length)===10){
           $('#Next').removeClass('disabled');
       } else {
           $('#signNext').addClass('disabled');
       }
   });


