//initialize function called when the script loads
function initialize(){
    cities();
    addEvents();
    addColumns();
};

//Create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'Burnsville',
            population: 61434
        },
        {
            city: 'Moose Jaw',
            population: 33274
        },
        {
            city: 'Beijing',
            population: 21150000
        },
        {
            city: 'Saint Petersburg',
            population: 4879566
        }
    ];
    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
};
//function to add the column citySize to an existing table
function addColumns(){
    $('tr').each(function(i){
        $("#mydiv").append("<table>");
        // when i = 0 City Size is added to the header
        if (i == 0){
         $("tr").append('<th>City Size</th>');   
        } else {
            // Classifies cities by adding a new attribute citySize
            var citySize;
            
            if (cityPop[i-1].population < 100000){
                citySize = 'Small';

            } else if (cityPop[i-1].population < 500000 || cityPop[i-1].population >= 100000){
                citysize = 'Medium';

            } else{
                citySize = 'Large';
            };
            // adds the city size to the table
            $("tr").append('<td>' + citySize + '</td>');
        };
    });
};

// a function to add "events" to the table, as well as interactivity through click
// mouse hovering sensitivities

function addEvents(){
    $("#mydiv").append("<table>");
    $('table').mouseover(function(){
        // Following block assigns a random color to a variable
        // then through css changes the color of the table
        var color = "rgb(";

        for (var i=0; i<3; i++){

            var random = Math.round(Math.random() * 255);

            color += random;

            if (i<2){
                color += ",";
            
            } else {
                color += ")";
        };
        // changes the table color
        $('table').css('color', color);
    };
    // An interactive function that shows a message when clicked
    function clickme(){
        // the click messge
        alert('Hey, you clicked me!');
    };
    // adding the event listener
    $('table').on('click', clickme);
    });
};
//once the document is done loading start the functions
$(document).ready(initialize);