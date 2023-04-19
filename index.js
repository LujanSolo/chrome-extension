// variables for html elements
const buttonEl = document.getElementById("input-btn");
const searchEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

// array to hold existing websites
let myLeads = [];

// variable to parse JSON to a string
let storedLeads = JSON.parse(localStorage.getItem("myLeads"));

// conditional statement to determine if any entries exist in window.localStorage
if(storedLeads){
  myLeads = storedLeads;
  renderSearch();
};

// button function that pushes user's entry from input field to the myLeads array
buttonEl.addEventListener("click", () => {
  myLeads.push(searchEl.value);
  searchEl.value = ""; // reset input field to blank
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); // store searches to window.localStorage
  renderSearch(); // call renderSearch function
});

// renderSearch function that dynamically creates li's within the declared ul on index.html
function renderSearch() {
  let listItems = "";  // variable to hold all list items inside a string
  for (let i = 0; i < myLeads.length; i++) {
    // template string holding list elements and js references to myLeads array
    listItems += `<li>
                    <a href='${myLeads[i]}' target="_blank">
                      ${myLeads[i]}
                    </a>
                  </li>
                  `
  }
  //* note: putting this part of the function outside of the for loop allows us to manipulate the DOM once instead of several times (depending on # of list items that are created)
  ulEl.innerHTML = listItems; // take all created li's and add them as children to the ul
};