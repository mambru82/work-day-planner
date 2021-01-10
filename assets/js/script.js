var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("day-tasks"));

    if (!tasks) {
        tasks = [
            { time: "",
              task: "" }
        ]
    }
}
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
})

var timeCheck = function () {
    var timeValue = $(".time-9").text().trim();
    ampmCheck = timeValue[timeValue.length-2] + timeValue[timeValue.length-1];
    if (ampmCheck === "AM") {
        timeNumber = timeValue.splice(timeValue.length-2, 2, "");
    } else {
        timeNumber = timeValue.splice(timeValue.length-2, 2, "");
    }
    console.log(timeNumber, ampmCheck);
    console.log(timeValue, ampmCheck);
}
