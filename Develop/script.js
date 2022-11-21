// Starter code source (index and  css) "crispy-octo-meme by: Georgeyoo, mfyke, cmathena2u"

// Save Button Variable
var saveButton = $(".saveBtn");
//

$("#currentDay").text(dayjs().format("MMMM D YYYY"));

colorBlock();
function colorBlock() {
    hour = dayjs().hour();

    $(".time-block").each(function(){
        currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        }else if (currentHour === hour) {
            $(this).addClass("present");
        }else {
            $(this).addClass("past");
        }
    })
};

//Save Button(click)
saveButton.on("click", function() {
    time = $(this).siblings(".hour").text();
    prep = $(this).siblings(".prep").val();

    // "Hour" and "Prep" save to local storage
    localStorage.setItem(time, prep);
});

//Text Input stays after refresh
userPrep();
function userPrep() {
    $(".hour").each(function() {
        currentHour = $(this).text();
        currentPrep = localStorage.getItem(currentHour);

    if(currentPrep !== null) {
        $(this).siblings(".prep").val(currentPrep);
    }
});
}
