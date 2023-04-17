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
    // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";
    listItems += `<li>
                      <a href='${myLeads[i]}' target="_blank">
                        ${myLeads[i]}
                      </a>
                    </li>
                    `
  }
  ulEl.innerHTML = listItems;
};