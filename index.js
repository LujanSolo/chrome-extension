const buttonEl = document.getElementById('input-btn');
const searchEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

let myLeads = [
    "test1",
    "howdy y'all",
    "yuppers"
];


buttonEl.addEventListener('click', () => {
    myLeads.push(searchEl.value);
});

for(let i=0; i < myLeads.length; i++){
    ulEl.innerHTML += '<li>' + myLeads[i] + '</li>';
};