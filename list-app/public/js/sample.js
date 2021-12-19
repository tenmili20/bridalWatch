console.log("ファイル読み込み完了")
$(function () {
    $(".btn").on("click", function () {
        $(this).closest("div").css("display", "none");
        id = $(this).attr("href");
        $(id).addClass("fit").show("slow");
        console.log("hello");
    });
});
