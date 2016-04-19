var main = function() {
  var myDataRef = new Firebase('https://ratingstar.firebaseio.com/');

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
  $( ".shop" ).hover(function() {
    $(this).toggleClass("rightMove");
  });
  $(".estimate").hide();
  myDataRef.child("rate7").on('value', function (snapshot) {
var message = snapshot.val();

var counting1 = message.number1;
var counting2 = message.number2;
var counting3 = message.number3;
var counting4 = message.number4;
var counting5 = message.number5;
$('#count1').html(counting1);
$('#count2').html(counting2);
$('#count3').html(counting3);
$('#count4').html(counting4);
$('#count5').html(counting5);
$('#rate1').click(function(){
  counting1 = counting1 + 1;
  myDataRef.child("rate7").update({number1: counting1});
  $('#count1').html(counting1);
  close();
});
$('#rate2').click(function(){
  counting2 = counting2 + 1;
  myDataRef.child("rate7").update({number2: counting2});
  $('#count2').html(counting2);
  close();
});
$('#rate3').click(function(){
  counting3 = counting3 + 1;
  myDataRef.child("rate7").update({number3: counting3});
  $('#count3').html(counting3);
  close();
});
$('#rate4').click(function(){
  counting4 = counting4 + 1;
  myDataRef.child("rate7").update({number4: counting4});
  $('#count4').html(counting4);
  close();
});
$('#rate5').click(function(){
  counting5 = counting5 + 1;
  myDataRef.child("rate7").update({number5: counting5});
  $('#count5').html(counting5);
  close();
});
$('#score').html((counting5*5+
  counting4*4+
  counting3*3+
  counting2*2+
  counting1)/(counting5+counting4+counting3+counting2+counting1))
});
var close = function()
{
$(".estimate").slideDown(300).show();
$(".button").slideUp(300).addClass(displaynone);
}

}
$(document).ready(main);
