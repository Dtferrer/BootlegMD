var listSymp = [];

$(".add").on("click", function() {
    var symptom = $("#inputSymptom").val();
    console.log(symptom);
    listSymp.push(symptom); 
    console.log(listSymp);
    var newsymp = $("<button type='button' class='btn addSymp' style='background-color:#F8FDFF; margin: 5px'>" + symptom + "</button></li>");
    $(".listSymptoms").append(newsymp);    
});
