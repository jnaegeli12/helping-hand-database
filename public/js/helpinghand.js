const firstQuestion = document.getElementById("first-question");
const foodResults = document.getElementById("food-results");
const shelterResults = document.getElementById("shelter-results");
const healthResults = document.getElementById("health-results");
const dailyResults = document.getElementById("daily-results");

$("#food").click(function () {
    firstQuestion.style.display = "none";
    foodResults.style.display = "";
    $.ajax('/api/food/', {
        type: 'GET'
    }).then(function(data) {
        console.log(data);
        console.log('data for shelter added')
    })
});

$("#shelter").click(function () {
    firstQuestion.style.display = "none";
    shelterResults.style.display = "";
    $.get('/api/shelter/', function(data, status) {
        console.log(data);
    });
});

$("#health_care").click(function () {
    firstQuestion.style.display = "none";
    healthResults.style.display = "";
    $.ajax('/api/health_care/', {
        type: 'GET'
    }).then(function(data) {
        console.log(data);
        console.log('data for healthcare added')
    })
});

$('#daily_care').click(function () {
    firstQuestion.style.display = "none";
    dailyResults.style.display = "";

    $.ajax('/api/daily_care/', {
        type: 'GET'
    }).then(function(data) {
        console.log(data);
        console.log('data for dailycare added')
    })
});

$("#new-org").on("click", function (event) {
    event.preventDefault();

    const newOrganization = {
        name: $("#org-name").val().trim(),
        address: $("#address").val().trim(),
        city: $("#city").val().trim(),
        state: $("#state").val().trim(),
        zip: $("#zip").val().trim(),
        phone_number: $("#phone_number").val().trim(),
        website: $("#website").val().trim()
    };
    console.log(newOrganization);

    $.ajax("/api/organization", {
        type: "POST",
        data: newOrganization
    }).then(
        function () {
            console.log("created new organization");
            location.reload();
        }
    );
});