// variables for html elements
const saveInputBtn = document.getElementById("input-btn");
const saveTabBtn = document.getElementById("tab-btn");
const deleteBtnEl = document.getElementById("del-btn");
const searchEl = document.getElementById("search-el");
const ulEl = document.getElementById("ul-el");

// array to hold existing websites
let myLeads = [];

// variable to parse JSON to a string
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// conditional statement to determine if any entries exist in window.localStorage
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
};

// button function that pushes user's entry from input field to the myLeads array
saveInputBtn.addEventListener("click", () => {
  myLeads.push(searchEl.value);
  searchEl.value = ""; // reset input field to blank
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); // store searches to window.localStorage
  render(myLeads); // call render function
});

// button function to save current active tab
saveTabBtn.addEventListener("click", () => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    function (tabs) {
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);
    })
});

// button function to DELETE ALL entries/li's from ul by clearing window.localStorage and setting myLeads to an empty array
deleteBtnEl.addEventListener("dblclick", () => {
  myLeads = [];
  localStorage.clear();
  render(myLeads);
});

// render function that dynamically creates li's within the declared ul on index.html
function render(leads) {
  let listItems = "";  // variable to hold all list items inside a string
  for (let i = 0; i < leads.length; i++) {
    // template string holding list elements and js references to myLeads array
    listItems += `<li>
                    <a href='${leads[i]}' target="_blank">
                      ${leads[i]}
                    </a>
                  </li>
                  `
  }
  //* note: putting this part of the function outside of the for loop allows us to manipulate the DOM once instead of several times (depending on # of list items that are created)
  ulEl.innerHTML = listItems; // take all created li's and add them as children to the ul
};