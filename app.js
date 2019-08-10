

var api_key = '2a74722c2c353c8693b5411d853ff890'; // Get your API key at developer.betterdoctor.com

var queryURL = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + api_key;



//$.get(resource_url, function (data) {
    // data: { meta: {<metadata>}, data: {<array[Practice]>} }
//     var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
//     document.getElementById('content-placeholder').innerHTML = template(data);
// });

// request a list of specialties
    var listURL = "https://api.betterdoctor.com/2016-03-01/specialties?user_key=2a74722c2c353c8693b5411d853ff890"




$.ajax ({
     url: listURL,
     method: "GET"
}).then(function(response) {

    for (var i = 0; i < response.length; i++) {
        console.log(response.data)
        $(".specialty-list").append("<option value='" + response.data[i].name + "' id='" + response.data[i].uid + "'>" + response.data[i].name + "</option>")
}
});
