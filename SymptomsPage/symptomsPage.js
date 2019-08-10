// global variables
var totalSymp = [];
var totalID = [];

var listSymp = [];
var sympID = [];

var queryURL="";

// URL for getting list of all diagnoses
var listURL = "https://healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR0ZmVycmVyQHVjc2QuZWR1Iiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIyODM1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMTA5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6IjEwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IkJhc2ljIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxOS0wOC0wMSIsImlzcyI6Imh0dHBzOi8vYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTU2NTQ3MjM3MCwibmJmIjoxNTY1NDY1MTcwfQ.p13wfS5q5sht-ZsPWhY7iGFAHO1UEDU8ZTl8TCWihzk&format=json&language=en-gb"

// AJAX for getting entire list
$.ajax({
    url: listURL,
    method: "GET"
}).then(function(response) {
    for (var i = 0; i < response.length; i++) {
        $(".inputSymptom").append("<option value='" + response[i].Name + "' id='" + response[i].ID + "'>" + response[i].Name + "</option>");
        totalSymp.push(response[i].Name);
        totalID.push(response[i].ID);
    }
});

// button for adding symptom

$(".add").on("click", function() {
    var symptom = $(".inputSymptom").val();
    var ID = $(".inputSymptom").attr("id");
    console.log(symptom);
    listSymp.push(symptom); 
    console.log(listSymp);
    var newsymp = $("<button type='button' value='" + symptom + " ' class='btn addSymp' style='background-color:#F8FDFF; margin: 5px'>" + symptom + "</button></li>");
    $(".listSymptoms").append(newsymp);
    $(".addSymp").on("click", function() {
        $(this).remove();
        // console.log(this)
        // for (var i = 0; i < listSymp.length; i++) {
        //     if (this.val() === listSymp[i]) {
        //         listSymp.splice(i, 1);
        //     }
        // }
        // console.log(listSymp);
    });
});

// completing the form
$(".submit").on("click", function() {
    displayIll();
})

function displayIll() {

    var age = $("#inputAge").val();
    console.log(age);
    var year = moment().format("YYYY");
    console.log(year);
    var birthyear = year - age;
    console.log(birthyear);
    var sex = $("#inputSex").val();
    console.log(sex);

    for (var i = 0; i < listSymp.length; i++) {
        for (var j = 0; j < totalSymp.length; j++) {
            if (listSymp[i] == totalSymp[j]) {
                sympID.push(totalID[j])
            }
        }
    }

    console.log(sympID);

    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR0ZmVycmVyQHVjc2QuZWR1Iiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIyODM1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMTA5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6IjEwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IkJhc2ljIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxOS0wOC0wMSIsImlzcyI6Imh0dHBzOi8vYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTU2NTQ2NzYwMSwibmJmIjoxNTY1NDYwNDAxfQ.lLXzJHVYZIqvhKYY7Oc8dwV6nIoQeKIoPrX3hbFZFhM"
    queryURL = "https://healthservice.priaid.ch/diagnosis?symptoms=[" + sympID + "]&gender=" + sex + "&year_of_birth=" + birthyear + "&token=" + token +"&format=json&language=en-gb"
    console.log(queryURL);  

    $.ajax({
        url: queryURL, 
        method: "GET"
    }).then(function(response) {
        console.log(response)
        for (var i=0; i < response.length; i++) {
            for (var j = 0; j < response[i].Specialisation.length; j++) {
                var card = $("<div>").addClass("card");
                var infoPName = response[i].Issue.ProfName;
                console.log(infoPName);
                var infoName = response[i].Issue.Name;
                console.log(infoName);
                var infoSpec = response[i].Specialisation[j].Name;
                console.log(infoSpec);
                $(card).append("<div class='card-body'><h5 class='card-title'>Diagnosis: " + infoPName + "</h5> <h6 class='card-subtitle mb-2 text-muted'>Also known as: " + infoName + 
                "</h6><p class='card-text'> Doctor Specialist: " + infoSpec + "</p></div>")
                console.log(card);
            }
        $(".listDiagnoses").append(card);
        }

        $(".list").append("<div class='form-group col-sm-1'><button class='btn btn-dark reset' type='button' style='background-color:#4F5051'>Reset</button");

        $(".reset").on("click", function() {
            var listSymp = [];
            var sympID = [];

            var queryURL="";

            $("#inputAge").val("");
            $("#inputSex").val("");
            $("#inputSymptom").val("");
            $(".listSymptoms").empty();
            $(".listDiagnoses").empty();
            $(this).remove();
        })

    });
}
