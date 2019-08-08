var totalSymp = [];
var totalID = [];

var listSymp = [];
var sympID = [];

var queryURL = "https://healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR0ZmVycmVyQHVjc2QuZWR1Iiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIyODM1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMTA5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6IjEwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IkJhc2ljIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxOS0wOC0wMSIsImlzcyI6Imh0dHBzOi8vYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTU2NTI0MTU0NCwibmJmIjoxNTY1MjM0MzQ0fQ.9mhy12YbJNqj-1sWCE3h98YWTrvsQtnTZpaPXuH4Has&format=json&language=en-gb"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    for (var i = 0; i < response.length; i++) {
        $(".inputSymptom").append("<option value='" + response[i].Name + "' id='" + response[i].ID + "'>" + response[i].Name + "</option>");
        totalSymp.push(response[i].Name);
        totalID.push(response[i].ID);
        console.log(totalSymp);
        console.log(totalID);
    }
});



$(".add").on("click", function() {
    var symptom = $(".inputSymptom").val();
    var ID = $(".inputSymptom").attr("id");
    console.log(symptom);
    listSymp.push(symptom); 
    console.log(listSymp);
    var newsymp = $("<button type='button' class='btn addSymp' style='background-color:#F8FDFF; margin: 5px'>" + symptom + "</button></li>");
    $(".listSymptoms").append(newsymp);
    $(".addSymp").on("click", function() {
        $(this).remove();
    });
});

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

    // for (var i = 1; i < sympID; i++) {
    //     sympID[i] = "%20" + sympID[i];
    // }

    console.log(sympID);

    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR0ZmVycmVyQHVjc2QuZWR1Iiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIyODM1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMTA5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6IjEwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IkJhc2ljIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxOS0wOC0wMSIsImlzcyI6Imh0dHBzOi8vYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTU2NTI0MTU0NCwibmJmIjoxNTY1MjM0MzQ0fQ.9mhy12YbJNqj-1sWCE3h98YWTrvsQtnTZpaPXuH4Has"
    var queryURL = "https://healthservice.priaid.ch/diagnosis?symptoms=[" + sympID + "]&gender=" + sex + "&year_of_birth=" + birthyear + "&token=" + token +"&format=json&language=en-gb"
    console.log(queryURL);  
}


