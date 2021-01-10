var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("day-tasks"));

    if (!tasks) {
        tasks = [
            { time: "",
              task: "" }
        ]
    }
}

var currDay = moment().format("ddd, MMMM Do YYYY");
console.log(currDay);
$("#currentDay").append(currDay);
$(".activity-text").on("click", "p", function(){
    var text = $(this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    // console.log(textInput);
    
    
})

$(".btn").on("click", function () {
    var newText = $(this).parent().find("textarea").val();
    console.log(newText);
    // console.log(this);

    var timeValue = $(this).parent().children(".time-value").contents().text().trim();
    ampmCheck = timeValue[timeValue.length-2] + timeValue[timeValue.length-1];
    console.log(timeValue, ampmCheck);

    var taskP = $("<p>")
    .text(newText);

    $(this).parent().find("textarea").replaceWith(taskP);
    })

$(".time-value").each(function () {
    var timeValue = $(this).attr("id");
    // console.log(timeValue);
    segmentDay = moment().format("DD MM YY")
    segmentDayTime = moment(segmentDay + " " + timeValue, "DD MM YY HH");
    timeDiff = segmentDayTime.diff(moment(), 'minutes');
    console.log(timeDiff);
    
    if (timeDiff<60 && timeDiff>0) {
        $(this).siblings(".col-10")
        .removeClass("[^=bg]")
        .addClass("bg-danger")
        }
    else if (timeDiff > 60) {
        $(this).siblings(".col-10")
        .removeClass("[^=bg]")
        .addClass("bg-success")
    }
    else {
        $(this).siblings(".col-10")
        .removeClass("[^=bg]")
        .addClass("bg-secondary")
    }
    
    console.log(segmentDayTime);

    // ampmCheck = timeValue[timeValue.length-2] + timeValue[timeValue.length-1];
    // if (ampmCheck === "AM") {
    //     timeArr = timeValue.split("");
    //     timeArr.splice(timeArr.length-2,2,"");
    //     timeValue = parseInt(timeArr.join(""));
    //  } else {
    //     timeArr = timeValue.split("");
    //     timeArr.splice(timeArr.length-2,2,"");
    //     timeValue = parseInt(timeArr.join("")) + 12;
    //  }
    // console.log(timeArr, timeValue);
})


