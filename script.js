$(function () {
    $(".fqaAns").hide();
    $("#ans1").show(function(){
        $("#ques1").addClass("quesOpen");
    });
    $(".fqaQues").click(function () {
        $(".fqaAns").hide(100);
        $(".fqaQues").removeClass("quesOpen");
        if($("+div",this).css("display")=="none"){
            $("+div",this).slideDown();
            $(this).addClass("quesOpen");
        };
    });
});