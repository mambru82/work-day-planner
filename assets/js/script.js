var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("day-tasks"));

    if (!tasks) {
        tasks = [
            { time: "",
              task: "" }
        ]
    } 

    $(".time-value").each(function() {
    var timeValue = $(this).attr("id");
    console.log(timeValue, tasks);
    for (i=0; i<tasks.length; i++) {
    if (tasks[i].time === timeValue) {
        console.log("found a match", tasks[i].task);
        var taskP = $("<p>")
            .text(tasks[i].task);
        $(this)
            .siblings(".activity-text")
            .find("p")
            .replaceWith(taskP);
    }
    }

    })

}

var currDay = moment().format("ddd, MMMM Do YYYY");
// console.log(currDay);
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
    var taskId = $(this).siblings(".time-value").attr("id");
    // console.log(taskId);
    var newText = $(this).parent().find("textarea").val();
    // console.log(newText);
    // console.log(this);

    var timeValue = $(this).parent().children(".time-value").contents().text().trim();
    ampmCheck = timeValue[timeValue.length-2] + timeValue[timeValue.length-1];
    console.log(timeValue, ampmCheck);

    var taskP = $("<p>")
    .text(newText);

    tasks.push({
        time: taskId,
        task: newText
    });

    console.log(tasks);
    saveTasks();

    $(this).parent().find("textarea").replaceWith(taskP);
    })

var saveTasks = function() {
    localStorage.setItem("day-tasks", JSON.stringify(tasks));
}

setInterval($(".time-value").each(function () {
    loadTasks();
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
    
    // console.log(segmentDayTime);
}), 50000);


