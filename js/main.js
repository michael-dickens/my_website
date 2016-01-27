//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
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

//call the initialize function when the document has loaded
$(document).ready(initialize);

//function to add columns to a created table, taking cityPop as an argument

function addColumns(cityPop){
    
    $('tr').each(function(i){

    	if (i == 0){

    		console.log("butts")

    		$("th").apend('<th>City Size</th>');
    	} else {
    		console.log("but")

    		// Classifies cities by adding a new attribute citySize

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citysize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

    		$this.append('<td' + citySize + '</td>');
    	};
    });
};
addColumns()
// a function to add "events" to the table, as well as interactivity through click
// mouse hovering sensitivities

function addEvents(){

	$('#table').mouseover(function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += "random";

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};

		$(this).css('color', color);
	};
	// An interactive function that shows a message when clicked
	function clickme(){

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
});
};
addEvents()