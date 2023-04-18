const buttonEl = document.getElementById("input-btn");
const searchEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let myLeads = [];

let storedLeads = JSON.parse(localStorage.getItem("myLeads"));
console.log(storedLeads);

buttonEl.addEventListener("click", () => {
  myLeads.push(searchEl.value);
  searchEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderSearch();
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