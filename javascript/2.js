$(document).ready(function(){
    $("div p").first().css({"color":"red"});
    $("div p").eq(1).css({"font-size":"30px","color":"blue"});
    $("div p").last().css({"font-size":"40px","color":"green","text-align":"center"});
});