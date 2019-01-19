// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
var submit = d3.select("#filter-btn");

// change case for table
function titleCase(str) {
    var str = str.toString()
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


tableData.forEach((allsitings) => {
    var row = tbody.append("tr");
    Object.entries(allsitings).forEach(([key, value]) => {
       value = titleCase(value);
        var cell = tbody.append("td");
     
      cell.text(value);
    });
  });
submit.on("click", function() {
   // Prevent the page from refreshing
    d3.event.preventDefault();

    // removes previous search
    document.getElementById("ufo-body").innerHTML = "";
    
    // grabs user input for dates
    // var inputElement = d3.select("#datetime");
    // var inputValue = inputElement.property("value");

    //condensed code on grabbing user input
    var inputValue = d3.select('#datetime').node().value;
    var city = d3.select("#city").node().value;
    var state = d3.select("#state").node().value;
    var country = d3.select("#country").node().value;
    var shape = d3.select("#shape").node().value;
    var filteredData = tableData;
    // filter data
    if (inputValue !== '') {
        filteredData = tableData.filter(dates=> dates.datetime === inputValue );}
    if (city !==''){
        // Allows user to input different cases and return a value
        city=city.toString().toLowerCase();
        filteredData = filteredData.filter(cities => cities.city=== city);}
    if (state !== ''){
        state=state.toString().toLowerCase();
        filteredData = filteredData.filter(states => states.state=== state);}
    if (country !== '') {
        country=country.toString().toLowerCase();
        filteredData = filteredData.filter(countries => countries.country=== country);}                   
    if (shape !== ''){
        shape=shape.toString().toLowerCase();
        filteredData = filteredData.filter(shapes => shapes.shape === shape);}
    console.log(filteredData);                        
    // filters dat by city + example of shortening co   de
    filteredData.forEach((siting)=>  {
    var row = tbody.append("tr");

    Object.entries(siting).forEach(([key, value]) => {
        // Append a cell to the row for each value
        // in the weather report object
        // apps function to change case
        value=titleCase(value);
        var cell = tbody.append("td");
        cell.text(value);
    });
    });})
