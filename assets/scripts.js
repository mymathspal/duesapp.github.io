const addMemberBtns = document.querySelectorAll(".addMemberBtn");
const addMemberModal = document.querySelector(".addMemberModal");
const modalCancels = document.querySelectorAll(".modalCancelBtn");
const modalAddMember = document.querySelector(".modalAddMemberBtn");

const addContributionBtn = document.querySelector(".addContributionBtn");
const addContributionModal = document.querySelector(".addContributionModal");
const submitContributionBtn = document.querySelector(".submitContributionBtn");

const memberNames = document.querySelectorAll(".memberName");
const amountContributed = document.getElementById("amount");

  const tbody = document.querySelector("tbody");


let count = 1;
let rows = "";

while (count <= 20) {
    rows += `
        <tr>
            <td>${count}</td>
            <td>Nana Kwame Abeyie</td>
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

modalCancels.forEach((modalCancel) => {
    modalCancel.addEventListener("click", (event)=>{
    event.preventDefault();
    addMemberModal.close();
})
})


let message = "";

modalAddMember.addEventListener("click", (event) =>{
   event.preventDefault();

    memberNames.forEach((memberName) => {
        message = `

        <tr>
            <td>${count}</td>
            <td>${memberName.value}</td>
            <td>£${amountContributed.value}</td>
            <td>
                <a><img src="assets/edit.svg" class="icon editIcon" title="Edit"></a>
                <a><img src="assets/delete.svg" class="icon deleteIcon" title="Delete"></a>
            </td>
        </tr>`
        
    console.log(message);
    tbody.innerHTML += message;
    count++;
    })

  


   

        alert("thank you!!");

      addMemberModal.close();
})



addContributionBtn.addEventListener("click", () => {
    addContributionModal.showModal();
})


submitContributionBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    // add it to the records 
    // show added message


    addContributionModal.close();
})


// function addMember(memberNames, amountContributed){

//     memberNames.forEach((memberName) => {
//     // console.log(memberName.value);

//       if (memberName.value && amountContributed.value){
//         console.log(`${memberName.value} contributed ${amountContributed.value}`);
//       }

//       else{
//         console.log("nothing entered");
//       }
//     })
    
// }