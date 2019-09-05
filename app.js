
$(document).ready(function(){
  $(document).on('mousemove', function(e){
      $('#4').offset({
         left:  e.pageX,
         top:   e.pageY
      });
  });
  $('div').click(function(){
     $('#4').removeClass();
     $('#4').addClass("circulo");
      if ($(this).attr('id') == 1) {
            $('#4').addClass('red')
      } else if ($(this).attr('id') == 2) {
            $('#4').addClass('yellow')
      } else if ($(this).attr('id') == 3) {
            $('#4').addClass('blue')
      }

  });
});
