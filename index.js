const buttonEl = document.getElementById('input-btn');
const searchEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

let listItems = "";

let myLeads = [
    "test1",
    "howdy y'all",
    "yuppers"
];


buttonEl.addEventListener('click', () => {
    myLeads.push(searchEl.value);
    console.log(myLeads)
});

for(let i=0; i < myLeads.length; i++){
    listItems += "<li>" + myLeads[i] + "</li>";
    console.log(listItems)
}

ulEl.innerHTML = listItems;
console.log(listItems)