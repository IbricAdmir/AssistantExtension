//Array containing objects with all the category's in the extension
let categorieen = [
    {
        index: 0,
        title: "Scrollen",
        html: "scrollen.html",
        keywords: ["scrollen", "scroll", "ik wil scrollen", "scrolling", "hoe moet ik scrollen?", "hoe werkt scrollen?", "scrolling?"]
    },
    {
        index: 1,
        title: "Filteren",
        html: "filteren.html",
        keywords: ["filteren", "filters", "ik wil filteren", "hoe kan ik filteren?", "hoe moet ik filteren?", "filters?"]
    },
    {
        index: 2,
        title: "Wachtwoord vergeten",
        html: "wachtwoord.html",
        keywords: ["wachtwoord", "wachtwoord vergeten", "ik weet mijn wachtwoord niet meer", "wat is mijn wachtwoord?", "hoe moet ik mijn wachtwoord veranderen?", "wachtwoorden"]
    },
  ];

// Get references to the search input and button
let searchInput = document.getElementById('search-input');
let searchButton = document.getElementById('search-button');

searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      // Get the search query from the input field
    let query = searchInput.value;
 
    // For loop to iterate over the categorieen array
    for (let i = 0; i < categorieen.length; i++) {
        // Check if the keywords property of the current object in the array includes the search query
        let keywordsMatch = categorieen[i].keywords.includes(query);
 
        // If the keywords match, open the HTML file for the current object in a new browser window or tab
        if (keywordsMatch) {
            window.open(categorieen[i].html, "_parent");
        }
    }
  }});

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
            window.open(categorieen[i].html, "_parent");
        }
    }
});

//Currently it has opened a html page.

//But when you close the extension and open it again it will automatically open the default page stored in the manifest.



chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {

    // Get the current page
    var currentPage = categorieen[i].html;

    // Use the localStorage API to store the current page
    localStorage.setItem('currentPage', currentPage);
    console.log ("Page is stored")
  
  });
  
   
  
  chrome.runtime.onStartup.addListener(function() {
      // Retrieve the stored page from localStorage
      var storedPage = localStorage.getItem('currentPage');

      if(storedPage == 'true'){
        this.toggleContrastMode();
      }

      // Navigate to the stored page
  
      window.location.href = storedPage;
  
    });

/* Store the current page in local storage when the extension is closed
window.onbeforeunload = function() {
    localStorage.setItem("currentPage", categorieen[i].html);
    console.log("Current page stored in local storage: " + categorieen[i].html);
  }
  

// Retrieve the current page from local storage and open it when the extension is opened again
window.onload = function() {``
    let currentPage = localStorage.getItem("currentPage");
    if (currentPage) {
        categorieen[i].html = currentPage;
    }
  }
*/