

var api_key = '2a74722c2c353c8693b5411d853ff890'; // Get your API key at developer.betterdoctor.com

// RUN ON PAGE LOAD
$(document).ready(function() {
    requestSpecialties();
})

// CLICK HANDLER
$('#run-search').on('click', function() {
    console.log('Running Search...');
    var specialty = $('#specialty-list').val();
    console.log('Search for Specailty: ', specialty);
    // Run Search
    requestSpecialtyDoctors(specialty);
})



// request a list of specialties
function requestSpecialties() {
    var listURL = "https://api.betterdoctor.com/2016-03-01/specialties?user_key=2a74722c2c353c8693b5411d853ff890"


    $.ajax ({
        url: listURL,
        method: "GET"
    }).then(createSpecialtySelect);
}

function requestSpecialtyDoctors(specialty_uid) {
    var url = "https://api.betterdoctor.com/2016-03-01/doctors?location=32.7157,-117.1611,25&skip=2&limit=10&specialty_uid=" + specialty_uid + "&user_key=" + api_key;


    $.ajax ({
        url,
        method: "GET"
    }).then(function(res) {
        res.data.forEach(createSpecialistCard)
    });
}


function createSpecialtySelect(response) {
    var select = $('<select>')
                    .attr('id', 'specialty-list')
                    .attr('name', 'specialty-list');
    select.append(
        $('<option>')
            .html("Select Specialty")
            .attr('value', '')
    );
    response.data.forEach(function(specialty) {
        var option = $("<option>")
            .attr("value", specialty.uid)
            .html(specialty.name);
        select.append(option);
    });
    $('#select-specialty').append(select);
}

        
function createSpecialistCard(doctor) {
    // console.log('doctor', doctor);
    console.log('Practices', doctor.practices[0].visit_address.street);
    console.log('Practices', doctor.practices[0].visit_address.city);
    console.log('Practices', doctor.practices[0].visit_address.state);
    var specialties = doctor.specialties.reduce(function(output, specialty) {
        output += specialty.name + ', ';
        return output.trim();
    }, '');
    var doctorImage = $('<img>')
                            .addClass('card-img-top')
                            .attr('alt', `${doctor.profile.title} ${doctor.profile.first_name} ${doctor.profile.last_name}`)
                            //.attr('src', doctors.urlToImage);
    var doctorName = $('<h5>')
                            .addClass('card-title')
                            .html(`${doctor.profile.title} ${doctor.profile.first_name} ${doctor.profile.last_name}`);
                            
    var doctorSpecialties = $('<p>')
                                .addClass('card-text')
                                .html(specialties);
    var street = doctor.practices[0].visit_address.street
    var city = doctor.practices[0].visit_address.city;
    var state = doctor.practices[0].visit_address.state;
    var website = doctor.practices[0].website;
    var doctorAddress = $('<p>')
                                .addClass('card-text')
                                .html(`${street}<br/>${city}, ${state}`);
    // var doctorHomepage = $('<p>')
    //                             .addClass('card-text')
    //                             .html(website)
    //                             .attr('src', website.url);
    
    var cardBody = $('<div>')
        .addClass('card-body')
        .append(doctorName)
        .append(doctorSpecialties)
        .append(doctorAddress)
        // .append(doctorHomepage);
    var card = $('<div>').addClass('card').append(doctorImage).append(cardBody);
    $('#doctor-list').append(card);
}

