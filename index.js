const buttonEl = document.getElementById("input-btn");
const searchEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");


let myLeads = [];


buttonEl.addEventListener("click", () => {
  myLeads.push(searchEl.value);
  renderSearch();
  searchEl.value = "";
});

function renderSearch() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
      listItems += "<li>" + myLeads[i] + "</li>";
    }
    ulEl.innerHTML = listItems;
};


