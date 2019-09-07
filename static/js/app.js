// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#submit");
var tbody = d3.select("tbody");


submit.on("click", function() {
  d3.select("tbody").html("");
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#form-input-date");
  var inputState = d3.select("#form-input-state");

  // Get the value property of the input element
  var inputDateValue = inputDate.property("value");
  var inputStateValue = inputState.property("value");

  function filterData(dataList) {
      var filteredData = dataList
      if(inputDateValue) {
        var filteredData = filteredData.filter(date => date.datetime === inputDateValue);
      }  
      
      if(inputStateValue) {
        var filteredData = filteredData.filter(state => state.state === inputStateValue);
      } 
      
      return filteredData
  }
  console.log(filterData(tableData))

  filterData(tableData).forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);  
    });
  });

})


