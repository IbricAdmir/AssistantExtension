// Array with all the categorys
let categorieen = [
    {
        title: "Scrollen",
        html: "test.html",
        keywords: ["scrollen", "scroll"]
    },
  ];

  // Get references to the search input and button
  var searchInput = document.getElementById('search-input');
  var searchButton = document.getElementById('search-button');

  // Add an event listener to the search button
  searchButton.addEventListener('click', function() {
    // Get the search query from the input field
    var query = searchInput.value;

// Check the keywords property of the object in the categorieen array for the search query
var keywordsMatch = categorieen[0].keywords.includes(query);

// Log the result of the keywords check to the console
console.log(keywordsMatch);

  });