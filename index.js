const buttonEl = document.getElementById('input-btn');
const searchEl = document.getElementById('input-el');

let myLeads = [];


buttonEl.addEventListener('click', () => {
    myLeads.push(searchEl.value);
    console.log(myLeads);
});