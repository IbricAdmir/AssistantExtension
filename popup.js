window.onload = function(){

// startup functie die wordt uitgevoerd
// wat is op dit moment de waarde van de pagina die laatst geopend is (deze in chrome storage zetten) (wachtwoord.html)
// is er een lastpage? ja ok naar die url toe.
// window.open naar die url 

// history.js

// console.log(window.location) (wat zit hierin)
// chrome.storage.local.set({ last_page_visit: iets_hier }).then(() => {
//   console.log("Value is set to " + value);
// });

// startup
// chrome.storage.local.get(["last_page_visit"]).then((result) => {
//   console.log("Value currently is " + result.key);
// nou window.open(result.key)
// });


  chrome.storage.local.get(["last visited page"], function(items){
    console.log('last visited page:', items);
    let lastVisitedPage = items["last visited page"];
    let found = false;
    for (let i = 0; i < categorieen.length; i++) {
      if(categorieen[i].html === lastVisitedPage) {
        window.open(categorieen[i].html, "_parent");
        found = true;
        break;
      }
    }
    if(!found) {
      console.log("last visited page not found");
    }
  });
}



//Array containing objects with all the category's in the extension
let categorieen = [
    {
        title: "Scrollen",
        html: "scrollen.html",
        keywords: ["scrollen", "scroll", "ik wil scrollen", "scrolling", "hoe moet ik scrollen?", "hoe werkt scrollen?", "scrolling?"]
    },
    {
        title: "Filteren",
        html: "filteren.html",
        keywords: ["filteren", "filters", "ik wil filteren", "hoe kan ik filteren?", "hoe moet ik filteren?", "filters?"]
    },
    {
        title: "Wachtwoord vergeten",
        html: "wachtwoord.html",
        keywords: ["wachtwoord", "wachtwoord vergeten", "ik weet mijn wachtwoord niet meer", "wat is mijn wachtwoord?", "hoe moet ik mijn wachtwoord veranderen?", "wachtwoorden"]
    },
  ];

// Get references to the search input and button
let searchInput = document.getElementById('search-input');
let searchButton = document.getElementById('search-button');

let lastpage = ""; // wachtwoord.html (update last page)



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
          chrome.storage.local.set({ "last visited page": categorieen[i].keywords.includes(query) }, function(){});
      }
  }
});

window.onunload = function(){
  for (let i = 0; i < categorieen.length; i++) {
    if(categorieen[i].html === window.location.href){
      chrome.storage.local.set({ "last visited page": window.location.href }, function(){
        console.log('page saved!');
      });
      break;
    }
  }
}