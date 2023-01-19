// window.onload = function() {
//    var storedPage = localStorage.getItem('currentPage');

//    if (storedPage) {
//      localStorage.removeItem('currentPage');
//      window.location.href = storedPage;
//    }
//  }

// document.onvisibilitychange = function(event) {
//   var storedPage = localStorage.getItem('currentPage');
//   console.log('storedPage', storedPage);
//   console.log('document.visibilityState', document.visibilityState);

//   if (document.visibilityState === 'hidden') {
//     localStorage.setItem('currentPage', 'chrome-extension://ojfagkpjompcglhkegngogjakehebkap/wachtwoord.html');
//   }


  // if (!storedPage && document.visibilityState === 'hidden') {
  //   localStorage.setItem('currentPage', document.URL);
  // }
  // else {
  //   if (storedPage !== document.URL) {
  //     if (document.visibilityState === 'hidden') {
  //       localStorage.setItem('currentPage', document.URL);
  //     }
  //   }
  // }
// }

// Save data to storage locally, in just this browser...

// window.onload = function(){
//   // code to run after opening the window
//   chrome.storage.local.get(/* String or Array */["last visited page"], function(items){
//     //  items = [ { "phasersTo": "awesome" } ]
//     console.log('laatste pagina openen..', items);
//   });
// }

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


// window.onunload = function(){
//   // code to run before closing the tab
//   chrome.storage.local.set({ "last visited page": "scrollen.html" }, function(){
//     //  Data's been saved boys and girls, go on home
//     console.log('pagina opgeslagen!');
//   });
// }


//Currently it has opened a html page.

//But when you close the extension and open it again it will automatically open the default page stored in the manifest.



// chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {

//     // Get the current page
//     var currentPage = categorieen[i].html;

//     // Use the localStorage API to store the current page
//     localStorage.setItem('currentPage', currentPage);
//     console.log ("Page is stored")
  
//   });
  
   
  
//   chrome.runtime.onStartup.addListener(function() {
//       console.log('started');
//       // Retrieve the stored page from localStorage
//       var storedPage = localStorage.getItem('currentPage');

//       if(storedPage == 'true'){
//         this.toggleContrastMode();
//       }

//       // Navigate to the stored page
  
//       window.location.href = storedPage;
  
//     });

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