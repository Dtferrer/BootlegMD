$("#submit").on("click", function(){

   var startLocation = $("#exampleInputlocation1").val().trim();
   var endLocation = $("#exampleInputlocation2").val().trim();
   $("#exampleInputlocation1").empty();

    getDirections(startLocation, endLocation);
});

function getDirections(startLocation, endLocation) {
    var queryUrl = 'http://open.mapquestapi.com/directions/v2/route?key=A6vc2e1WIOf1eHAai2WljNdGvoRQAqi1&from=' + startLocation + '&to=' + endLocation + '';
        
    $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            response.route.legs.forEach(function(leg) {
                console.log('leg', leg);
                leg.maneuvers.forEach(displayStep)
        });
    });

    empty();   
}

function displayStep(move, moveNumber) {
    console.log('move', move);
    moveNumber++;
    var stepNumber = $('<p>').addClass('step').html("Step " + moveNumber + ": ");
    var street = $('<p>').addClass('street').html(move.streets + ' ').css("color", "red");
    // var distance = $('<span>').addClass('distance').html(move.distance);
    var narrative = $('<p>').addClass('narrative').html(move.narrative);

    var moveRow = $('<div>').addClass('row').append("Step " + moveNumber + ": " + "(" + move.streets + ") " + move.narrative);

    // var moveRow = $('<div>')
    //     .addClass('row')
    //     .append(stepNumber)
    //     .append(street)
    //     // .append(distance)
    //     .append(narrative);
    // // Add to Direction Container
    $('#finalDirections').append(moveRow);
}

function empty(){
    $("#exampleInputlocation1").val("");
    $("#exampleInputlocation2").val("");
}




// 'http://open.mapquestapi.com/directions/v2/route?key=A6vc2e1WIOf1eHAai2WljNdGvoRQAqi1&from=2000 Clarendon Blvd,Arlington,VA&to=2400+S+Glebe+Rd,+Arlington,+VA';