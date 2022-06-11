//Consecutive turns, also notifies whose turn.

let turn=1;
$("button").on('click',()=>{
    if(turn ==1){
        $("#screen").text("Player Two Turn Follows");
        //fa-o is 'O' Icon
        $(this).addClass("fa-regular fa-o");
        turn = 2;
    } else{
        $('#screen').text("Player One Turn Follows")
        //fa-time is 'X' Icon
        $(this).addClass("fa fa-times");
        turn = 1;
    }
    
})

//Winning Conigurations

function check(symbol) {
    if ($("#1").hasClass(symbol) &&
        $("#2").hasClass(symbol) &&
        $("#3").hasClass(symbol))
    {
        $("#1").css("color", "green");
        $("#2").css("color", "green");
        $("#3").css("color", "green");
        return true;
    } else if ($("#4").hasClass(symbol)
            && $("#5").hasClass(symbol)
            && $("#6").hasClass(symbol))
    {
        $("#4").css("color", "green");
        $("#5").css("color", "green");
        $("#6").css("color", "green");
        return true;
    } else if ($("#7").hasClass(symbol)
            && $("#8").hasClass(symbol)
            && $("#9").hasClass(symbol))
    {
        $("#7").css("color", "green");
        $("#8").css("color", "green");
        $("#9").css("color", "green");
        return true;
    } else if ($("#7").hasClass(symbol)
            && $("#4").hasClass(symbol)
            && $("#1").hasClass(symbol))
    {
        $("#7").css("color", "green");
        $("#4").css("color", "green");
        $("#1").css("color", "green");
        return true;
    } else if ($("#8").hasClass(symbol)
            && $("#5").hasClass(symbol)
            && $("#2").hasClass(symbol))
    {
        $("#8").css("color", "green");
        $("#5").css("color", "green");
        $("#2").css("color", "green");
        return true;
    } else if ($("#9").hasClass(symbol)
            && $("#6").hasClass(symbol)
            && $("#3").hasClass(symbol))
    {
        $("#9").css("color", "green");
        $("#6").css("color", "green");
        $("#3").css("color", "green");
        return true;
    } else if ($("#7").hasClass(symbol)
            && $("#5").hasClass(symbol)
            && $("#3").hasClass(symbol))
    {
        $("#7").css("color", "green");
        $("#5").css("color", "green");
        $("#3").css("color", "green");
        return true;
    } else if ($("#9").hasClass(symbol)
            && $("#5").hasClass(symbol)
            && $("#1").hasClass(symbol))
    {
        $("#9").css("color", "green");
        $("#5").css("color", "green");
        $("#1").css("color", "green");
        return true;
    } else {
        return false;
    }
}