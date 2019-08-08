$(document).ready()
$(function(){  
   console.log(card)
    //  news API
    var queryUrl = 'https://newsapi.org/v2/top-headlines?q=health&apiKey=41d4ef890e554be3b094b8763989e327&limit4'
    $.ajax({
        url : queryUrl,
        method: 'GET'
    }).then(NEWS)
});
function NEWS(data){
    console.log(data)
}

