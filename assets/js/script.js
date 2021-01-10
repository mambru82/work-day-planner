var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
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
    console.log(textInput);
    
    $(".btn").on("click", function () {
    var newText = $("textarea").val();
    console.log(newText);

    var timeValue = $("time-value").text().trim();
    console.log(timeValue);


    })
})
