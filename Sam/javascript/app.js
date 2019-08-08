function test(){
    
    
    var queryUrl = 'http://open.mapquestapi.com/directions/v2/route?key=A6vc2e1WIOf1eHAai2WljNdGvoRQAqi1&from=2000 Clarendon Blvd,Arlington,VA&to=2400+S+Glebe+Rd,+Arlington,+VA';


    $.ajax({
        url: queryUrl,
        method:"GET"
    }).then(function(response) {
        var res = response.route.legs[0].maneuvers;
        // console.log(response.route.legs)
        
        var res2 = response.route.legs;
        for (let j = 0; j < res2.length; j++) {
            // console.log(res2[j]);
            for (let i = 0; i < res.length; i++) {
                console.log(res[i].narrative);
                
            }
        }

        
    })
    
}
test();

//get URL grab response



$("#submit").on("click", function(){
   var startLocation = $("#exampleInputlocation1").val().trim();
   var endLocation = $("exampleInputlocation2").val().trim();
   
})

