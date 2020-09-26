// redo variables and show/hide code
const firstQuestion = document.getElementById("first-question");
const foodService = document.getElementById("food-service");
const shelterService = document.getElementById("shelter-service");
const healthService = document.getElementById("health-service");
const chooseGender = document.getElementById("gender");
const chooseAge = document.getElementById("age");

$("#food").click(function() {
    firstQuestion.style.display = "none";
    foodService.style.display = "";
});

$("#shelter").click(function() {
    firstQuestion.style.display = "none";
    shelterService.style.display = "";
});

$("#health").click(function() {
    firstQuestion.style.display = "none";
    healthService.style.display = "";
});

$("#daily").click(function() {
    firstQuestion.style.display = "none";
    chooseGender.style.display = "";
    sessionStorage.setItem(1, "daily_care")
});