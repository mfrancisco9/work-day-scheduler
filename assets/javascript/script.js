var m = moment();
var today = m.format('dddd');
var thisHour = m.format('h:mm');
var militaryHour = m.format('HH'); 
// mid-day var for testing colors
// var militaryHour = 15;
var fullDayAndTime = m.format('MMMM Do, h:mm:ss a');
var todoList = $('#mainBoxesList').children();  //if this works, then todoList is a big array

//sets current time to display
function updateClock() {
    var time = moment().format('MMMM Do, h:mm:ss a'); 
    $("#currentDay").text(time);
    setTimeout(updateClock, 1000);
}
updateClock();


// loop for setting color based on time
for (i=0; i < todoList.length; i++) {
    if (
    parseInt($("#mainBoxesList").children().eq(i).children().eq(0).attr("data-time")) < militaryHour) {
        $("#mainBoxesList").children().eq(i).children().eq(1).addClass("past")
    } else if (
    parseInt($("#mainBoxesList").children().eq(i).children().eq(0).attr("data-time")) > militaryHour) {
        $("#mainBoxesList").children().eq(i).children().eq(1).addClass("future")
    } else {
        $("#mainBoxesList").children().eq(i).children().eq(1).addClass("present")
    }
}

//local storage setting
$(".saveButton").on("click", function() {
    console.log($(this).parent().siblings(".eventbox").val());;
    localStorage.setItem(`text${$(this).parent().siblings(".hour").attr("data-time")}`, ($(this).parent().siblings(".eventbox").val()));
    console.log(localStorage);
});



// for loop to retrieve placeholder text:
function setPlaceholder() {
for (i=0; i < todoList.length; i++) {
    $("#mainBoxesList").children().eq(i).children().eq(1).attr("value", localStorage.getItem(`text${i+9}`));
}
}

setPlaceholder();


//clear schedule setting

$("#clearAll").on("click", function(){
    localStorage.clear();
    for (i=0; i < todoList.length; i++) {
        $("#mainBoxesList").children().eq(i).children().eq(1).attr("value", localStorage.getItem(`text${i+9}`));
        console.log(localStorage.getItem(`text${i+9}`));
    }
})


