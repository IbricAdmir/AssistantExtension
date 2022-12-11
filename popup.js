// Array with all the category's
let categorieen = [
    {
        title: "Scrollen",
        html: "test.html",
        keywords: ["scrollen", "scroll"]
    },
  ];

// Get references to the search input and button
let searchInput = document.getElementById('search-input');
let searchButton = document.getElementById('search-button');

// Add an event listener to the search button
searchButton.addEventListener('click', function() {
    // Get the search query from the input field
    let query = searchInput.value;

    // Check the keywords property of the object in the categorieen array for the search query
    let keywordsMatch = categorieen[0].keywords.includes(query);

    // Log the result of the keywords check to the console
    console.log(keywordsMatch);
});