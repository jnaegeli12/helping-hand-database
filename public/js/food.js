$("#food-bank").click(function() {
    foodService.style.display = "none";
    let value = $("#food-bank").attr("value");
    sessionStorage.setItem(1, value);
    // display results
});

$("#served-meal").click(function() {
    foodService.style.display = "none";
    chooseGender.style.display = "";
    let value = $("#served-meal").attr("value");
    sessionStorage.setItem(1, value);
});

$("#male").click(function() {
    chooseGender.style.display = "none";
    chooseAge.style.display = "";
    let value = $("#male").attr("value");
    sessionStorage.setItem(2, value);
});

$("#female").click(function() {
    chooseGender.style.display = "none";
    chooseAge.style.display = "";
    let value = $("#female").attr("value");
    sessionStorage.setItem(2, value);
});

$("#family").click(function() {
    chooseGender.style.display = "none";
    let value = $("#family").attr("value");
    sessionStorage.setItem(2, value);
    // display results
});

$("#age-submit").click(function() {
    chooseAge.style.display = "none";
    let value = $("#inlineFormInput").val();
    sessionStorage.setItem("age", value);
    // display results
});