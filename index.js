const buttonEl = document.getElementById('input-btn');
const searchEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

let myLeads = [];


buttonEl.addEventListener('click', () => {
    myLeads.push(searchEl.value);
});

for(let i=0; i < myLeads.length; i++){
    console.log(myLeads[i])
}