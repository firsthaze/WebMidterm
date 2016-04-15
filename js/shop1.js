var main = function() {
  var myDataRef = new Firebase('https://ratingstar.firebaseio.com/');
  /*myDataRef.child("rate").set({
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
    number5: 0
  });*/
  $(".estimate").hide();
  myDataRef.child("rate").on('value', function (snapshot) {
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
  myDataRef.child("rate").update({number1: counting1});
  $('#count1').html(counting1);
  close();
});
$('#rate2').click(function(){
  counting2 = counting2 + 1;
  myDataRef.child("rate").update({number2: counting2});
  $('#count2').html(counting2);
  close();
});
$('#rate3').click(function(){
  counting3 = counting3 + 1;
  myDataRef.child("rate").update({number3: counting3});
  $('#count3').html(counting3);
  close();
});
$('#rate4').click(function(){
  counting4 = counting4 + 1;
  myDataRef.child("rate").update({number4: counting4});
  $('#count4').html(counting4);
  close();
});
$('#rate5').click(function(){
  counting5 = counting5 + 1;
  myDataRef.child("rate").update({number5: counting5});
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
