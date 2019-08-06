$(".add").on("click", function() {
    var symptom = $("#inputSymptom").val();
    console.log(symptom);
    var newsymp = $("<button type='button' class='btn addSymp' style='background-color:#F8FDFF; margin: 0px 5px'>" + symptom + "</button></li>");
    $(".AddedSymptoms").append(newsymp);    
});
