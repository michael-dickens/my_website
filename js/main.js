//execute script when window is loaded
window.onload = function(){

    //SVG dimension variables
    var w = 900, h = 500;

    var container = d3.select("body") //get the <body> element from the DOM
        .append("svg") //put a new svg in the body
        .attr("width", w) // assign width
        .attr("height", h) // assign height
        .attr("class", "container") //always assign a class (as the block name) for styling and future selection
        //.style("background-color", "rgba(55,0,0,0.9)"); // red, blue, green, alpha

        var innerRect = container.append("rect") //put a new rect in the svg
            .datum(400)
            .attr("width", function(d){ 
                return d * 2
            }) //rectangle width
            .attr("height", function(d){ 
                return d
            }) //rectangle height 
            .attr("class", "innerRect")
            .attr("x", 50)
            .attr("y", 50)
            .style("fill", "#FFFFFF");

        var cityPop = [
            { 
            city: 'Town A',
            population: 233209
            },
            {
            city: 'Town B',
            population: 50000
            },
            {
            city: 'Town C',
            population: 594833
            },
            {
            city: 'Town D',
            population: 104057
            }
        ];


        //find the minimum value of the array
        var minPop = d3.min(cityPop, function(d){
            return d.population;
            });


        //find the maximum value of the array
        var maxPop = d3.max(cityPop, function(d){
         return d.population;
        });

            //scale for circles center y coordinate
        var y = d3.scale.linear()
            .range([450, 50]) //was 440, 95
            .domain([0, 800000]); //was minPop, maxPop


        var x = d3.scale.linear() //create the scale
            .range([120, 730]) //output min and max
            .domain([0, 3]); //input min and max  


         //color scale generator 
        var color = d3.scale.linear()
            .range([
                "#FDBE85",
                "#D94701"
            ])
            .domain([
                minPop, 
                maxPop
            ]);




        var circles = container.selectAll(".circles") //but wait--there are no circles yet!
            .data(cityPop) //here we feed in an array
            .enter() //one of the great mysteries of the universe
            .append("circle") //add a circle for each datum
            .attr("class", "circles") //apply a class name to all circles
            .attr("r", function(d, i){ //circle radius
                var area = d.population * 0.01;
                return Math.sqrt(area/Math.PI);
                })
            .attr("cx", function(d, i){ //x coordinate
                return x(i); // uses the scale to place the circlez
                })
            .attr("cy", function(d){ //y coordinate
                return y(d.population);
                })
            .style("fill", function(d, i){ //add a fill based on the color scale generator
                return color(d.population);
                })
            .style("stroke", "#000"); //black circle stroke

        //AXES
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var axis = container.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(50, 0)")
            .call(yAxis);

        // TEXTO!
        var title = container.append("text")
            .attr("class", "title")
            .attr("text-anchor", "middle")
            .attr("x", 450)
            .attr("y", 30)
            .text("City Populations");

        //Labels
    var labels = container.selectAll(".labels")
        .data(cityPop)
        .enter()
        .append("text")
        .attr("class", "labels")
        .attr("text-anchor", "left")
        .attr("y", function(d){
            //vertical position centered on each circle
            return y(d.population) + 5;
        })
        //1st line
    var nameLine = labels.append("tspan")
        .attr("class","nameLine")
        .attr("x", function(d,i){
            //horizontal position to the right of each circle
            return x(i) + Math.sqrt(d.population * 0.01 / Math.PI) + 5;
        })

        .text(function(d){
            return d.city;
        })

    var format = d3.format(",");
        //2nd Line
    var popLine = labels.append("tspan")
        .attr("class", "popLine")
        .attr("x", function(d,i){
            //horizontal position to the right of each circle
            return x(i) + Math.sqrt(d.population * 0.01 / Math.PI) + 5;
            })
        .attr("dy", "15")
        .text(function(d){
            return "Pop. " + format(d.population);
        });

// In any method chain or block, only chain together methods belonging to the library referenced at the start of the chain
};