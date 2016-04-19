var main = function() {
  $(".shop").mouseover(function(){
    $(this).animate({

        marginTop: "+=15"
        },
      50);
  });
   $(".shop").mouseout(function(){
      $(this).animate({
          marginTop: "-=15"
          },
        50);
    });

    $(".link").mouseover(function(){
      $(this).animate({

          marginTop: "+=10"
          },
        50);
    });
     $(".link").mouseout(function(){
        $(this).animate({
            marginTop: "-=10"
            },
          50);
      });
  }
$(document).ready(main);
