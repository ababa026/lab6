// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers

function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
 function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var email = document.getElementById(email).value;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}

 function IsName(name) {
  var regex = /^[a-zA-Z]+$/;
  var name = document.getElementById(name).value;
  if(!regex.test(name)) {
    return false;
  }else{
    return true;
  }
}

function isCCV(ccv){
  var regex = /^[0-9]{3}$/;
  var ccv = document.getElementById(ccv).value;
  if(!regex.test(ccv)) {
    return false;
  }else{
    return true;
  }
}

function isNumber(ccv){
  var regex = /^[0-9]{16}$/;
  var ccv = document.getElementById(ccv).value;
  if(!regex.test(ccv)) {
    return false;
  }else{
    return true;
  }
}

function isMonth(ccv){
  var regex = /^[0-9]{2}$/;
  var ccv = document.getElementById(ccv).value;
  if(!regex.test(ccv)) {
    return false;
  }else{
    return true;
  }
}

function isDate(ccv){
  var regex = /^[0-9]{4}$/;
  var ccv = document.getElementById(ccv).value;
  if(!regex.test(ccv)) {
    return false;
  }else{
    return true;
  }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}


// HERE, JQuery "LISTENING" starts

$(document).ready(function(){
    $('#submit').click(function(){

        // Get the Login Name value and trim it
        var email = $('#email').val();
        var name = $('#name').val();
        var phone = $('#phone').val();
        var dateInput = $('#dateInput').val();
        var time = $('#time').val();
        var spec = $('#spec').val();
        var nameCard = $('#nameCard').val();
        var cardNum = $('#cardNum').val();
        var ccv = $('#ccv').val();
        var expMonth = $('#expMonth').val();
        var expYear = $('#expYear').val();

        // Check if empty of not
        if (email.length < 1) {
            alert('email is empty.');
            return false;
        }
        if (name.length < 1) {
            alert('name is empty.');
            return false;
        }
        if (phone.length < 1) {
            alert('phone is empty.');
            return false;
        }
        if (dateInput.length < 1) {
            alert('date is empty.');
            return false;
        }
        if (time.length < 1) {
            alert('Time is empty.');
            return false;
        }
        if (spec.length < 1) {
            alert('specialist is empty.');
            return false;
        }
        if (nameCard.length < 1) {
            alert('Card Name is empty.');
            return false;
        }
        if (cardNum.length < 1) {
            alert('card number is empty.');
            return false;
        }
        if (ccv.length < 1) {
            alert('ccv is empty.');
            return false;
        }
        if (expMonth.length < 1) {
            alert('Expiration month is empty.');
            return false;
        }
        if (expYear.length < 1) {
            alert('Expiration year is empty.');
            return false;
        } else {
            alert('Succesfully booked !');
            return false;
        }
    });
    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone");
            $("#phone").val("");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    $("#ccv").on("change", function(){
        if (!isCCV("ccv")){
            alert("Wrong format for ccv");
            $("#ccv").val("");
            $("#ccv").addClass("error");
        }
        else {
            $("#ccv").removeClass("error");
        }
    });

    $("#cardNum").on("change", function(){
        if (!isNumber("cardNum")){
            alert("Wrong format for card number");
            $("#cardNum").val("");
            $("#cardNum").addClass("error");
        }
        else {
            $("#cardNum").removeClass("error");
        }
    });

    $("#expYear").on("change", function(){
        if (!isYear("expYear")){
            alert("Wrong format for year");
            $("#expYear").val("");
            $("#expYear").addClass("error");
        }
        else {
            $("#ccv").removeClass("error");
        }
    });

    $("#expMonth").on("change", function(){
        if (!isMonth("expMonth")){
            alert("Wrong format for Month");
            $("#expMonth").val("");
            $("#expMonth").addClass("error");
        }
        else {
            $("#ccv").removeClass("error");
        }
    });

    $("#datepicker").datepicker( {
        format: "mm-yyyy",
        startView: "months", 
        minViewMode: "months"
    });

    $("#email").on("change", function(){
        if (!IsEmail("email")){
            alert("Wrong format for email");
            $("#email").val("");
            $("#email").addClass("error");
        }
        else {
            $("#email").removeClass("error");
        }
    });
    $("#name").on("change", function(){
        if (!IsName("name")){
            alert("Wrong format for name");
            $("#name").val("");
            $("#name").addClass("error");
        }
        else {
            $("#name").removeClass("error");
        }
    });
    $("#nameCard").on("change", function(){
        if (!IsName("nameCard")){
            alert("Wrong format for name on card");
            $("#nameCard").val("");
            $("#nameCard").addClass("error");
        }
        else {
            $("#nameCard").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
     $("#loginForm").validate({
        rules:{
            firstname: 'required',
        },
    });

    $("#submit").on('click', function () {
           //This will check validation of form depending on rules
           if($("#loginForm").valid())
           {
            alert("Wrong format");
           }
    });



});

