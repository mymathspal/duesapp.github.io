const modalAddMemberBtn = document.querySelector(".modalAddMemberBtn");
const addMemberModal = document.querySelector(".addMemberModal");
const addMemberBtns = document.querySelectorAll(".addMemberBtn");
const memberNames = document.querySelectorAll(".memberName");
const amountContributed = document.getElementById("amount");
const tbody = document.querySelector("tbody");

let message = "";

let count = 1;
let rows = "";

while (count <= 20) {
    rows += `
        <tr>
            <td>${(count)}</td>
            <td class="memberName">Nana Kwame Abeyie</td>
            <td>£20.00</td>
            <td>
                <a><img src="assets/edit.svg" class="icon editIcon" title="Edit"></a>
                <a><img src="assets/delete.svg" class="icon deleteIcon" title="Delete"></a>
            </td>
        </tr>
    `;
    count++;
}

tbody.innerHTML = rows;


addMemberBtns.forEach((addMemberBtn) =>{
addMemberBtn.addEventListener("click", () =>{
    addMemberModal.showModal();
    
})
})


modalAddMemberBtn.addEventListener("click", (event) =>{
   event.preventDefault();

    memberNames.forEach((memberName) => {
        message = `

        <tr>
            <td>${count}</td>
            <td class="memberName">${memberName.value}</td>
            <td>£${amountContributed.value}</td>
            <td>
                <a><img src="./assets/edit.svg" class="icon editIcon" title="Edit"></a>
                <a><img src="./assets/delete.svg" class="icon deleteIcon" title="Delete"></a>
            </td>
        </tr>`
        
    console.log(message);
    tbody.innerHTML += message;
    count++;
    })   

        alert("thank you!!");

      addMemberModal.close();
})
