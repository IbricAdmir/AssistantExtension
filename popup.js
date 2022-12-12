let categorieen = [
    {
        index: 0,
        title: "Scrollen",
        html: "test.html",
        keywords: ["scrollen", "scroll", "ik wil scrollen", "scrolling", "hoe moet ik scrollen?"]
    },
    {
        index: 1,
        title: "Filteren",
        html: "test2.html",
        keywords: ["filteren", "filters", "ik wil filteren", "hoe kan ik filteren?"]
    },
  ];

// Get references to the search input and button
let searchInput = document.getElementById('search-input');
let searchButton = document.getElementById('search-button');

// Add an event listener to the search button
searchButton.addEventListener('click', function() {
    // Get the search query from the input field
    let query = searchInput.value;

    // for loop to iterate over the categorieen array
    for (let i = 0; i < categorieen.length; i++) {
        // Check if the keywords property of the current object in the array includes the search query
        let keywordsMatch = categorieen[i].keywords.includes(query);

        // If the keywords match, open the HTML file for the current object in a new browser window or tab
        if (keywordsMatch) {
            window.open(categorieen[i].html, '_blank');
        }
    }
});
