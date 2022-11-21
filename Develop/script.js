// Starter code source (index and  css) "crispy-octo-meme by: Georgeyoo, mfyke, cmathena2u"

// Save Button
var saveButton = $(".saveBtn");
//

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
}