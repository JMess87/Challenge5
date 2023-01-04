//  Set date into "todayDate by using dayjs "
var todaysDate = dayjs().format("dddd, MMMM D, YYYY h:mm A");
console.log(todaysDate)
$("#todaysDate").append(todaysDate);


// function to set colors of hour sections based on the current hour of the day
function colors() {
    // get current time
    var hourNow = dayjs().hour();
    // loop to run through each time block and determine which condition is met
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < hourNow) {
            $(this).addClass("past");
        }
        else if (blockHour === hourNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
// Calling the colors function
colors();

// Jquery for saveBtn event listener
$(".saveBtn").on("click", function () {
    var event = $(this).siblings(".description").val();
    var eventTime = $(this).parent().attr("id");

    // save in localStorage upon click
    localStorage.setItem(eventTime, event);
})




// Repop previously saved information
$("#hour-6 .description").val(localStorage.getItem("hour-6"));
$("#hour-7 .description").val(localStorage.getItem("hour-7"));
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
