//  Set date into "todayDate by using dayjs "
var todaysDate = dayjs().format("dddd, MMMM D, YYYY h:mm A");
console.log(todaysDate)
$("#todaysDate").append(todaysDate);


// function to set colors of hour sections based on the current hour of the day
function colors() {
    // get current time
    var hourNow = dayjs().hour();
    console.log (hourNow)
    // loop to run through each time block and determine which condition is met, splits the "id" into an array and pulls the index [1] as the data.
    $(".time-block").each(function () {
        var schedTime = parseInt($(this).attr("id").split("-")[1]);
        console.log(schedTime)
        // If schedule time in div is equal less than current hour at past color
        if (schedTime < hourNow) {
            $(this).addClass("past");
        }
        // If schedule time in div is equal to the current hour remove past color and add present color.
        else if (schedTime === hourNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        // if both above conditions are false then apply the DOM manipulations below.
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

// Jquery for saveBtn event listener
$(".saveBtn").on("click", function () {
    var event = $(this).siblings(".description").val();
    var eventTime = $(this).parent().attr("id");

    // save in localStorage upon click
    localStorage.setItem(eventTime, event);
})

// Functions to call
colors();