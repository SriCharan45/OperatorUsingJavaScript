$(".add-btn").click(function(){
    var number1 = $(".num1").val();
    var number2 = $(".num2").val();
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var add = number1 + number2;
    $("h1").text("The Result : " + add.toString());
});
$(".sub-btn").click(function(){
    var number1 = $(".num1").val();
    var number2 = $(".num2").val();
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var sub = number1 - number2;
    $("h1").text("The Result : " + sub.toString());
});
$(".mul-btn").click(function(){
    var number1 = $(".num1").val();
    var number2 = $(".num2").val();
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var mul = number1 * number2;
    $("h1").text("The Result : " + mul.toString());
});
$(".div-btn").click(function(){
    var number1 = $(".num1").val();
    var number2 = $(".num2").val();
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var div = number1 / number2;
    $("h1").text("The Result : " + div.toString());
});
