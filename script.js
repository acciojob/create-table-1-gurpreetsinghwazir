// Newcell1 and newcell2
function insert_Row() {
let table = document.getElementById("sampleTable");

let rowButton = document.querySelector("input"); 

rowButton.addEventListener("click", display);

function display(eventDetails){ 
let addRow = table.insertRow(0);

addRow.insertCell(0).innerHTML = "New Cell1";
addRow.insertCell(1).innerHTML = "New Cell2";

}
 
   
}
