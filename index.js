const buttonEl = document.getElementById('input-btn');
const searchEl = document.getElementById('input-el');

let myLeads = [
    "test1",
    "test2",
    "test3"
];


buttonEl.addEventListener('click', () => {
    myLeads.push(searchEl.value);
});

for(let i=0; i < myLeads.length; i++){
    console.log(myLeads[i])
}