$("#urgent").click(function() {
    healthService.style.display = "";
    let value = $("#urgent").attr("value");
    sessionStorage.setItem(1, value);
    // display results
})

$("#dental").click(function() {
    healthService.style.display = "none";
    chooseAge.style.display = "";
    let value = $("#dental").attr("value");
    sessionStorage.setItem(1, value);
})

$("#mental").click(function() {
    healthService.style.display = "none";
    chooseAge.style.display = "";
    let value = $("#mental").attr("value");
    sessionStorage.setItem(1, value);
})

$("#age-submit").click(function() {
    chooseAge.style.display = "none";
    let value = $("#inlineFormInput").val();
    sessionStorage.setItem("age", value);
    // display results
});