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
const searchMemberInput = document.getElementById("searchMember");
const contributeSearchMemberInput = document.querySelector(".contribSearchName")
const memberNameSuggestBox = document.querySelector(".memberNameSuggestions");

const members = ["kofi", "kwabena", "kwame", "kojo", "afia", "Yaw", "ama"];

let count = 1;
let rows = "";


  addContributionBtn.addEventListener("click", () => {
        addContributionModal.showModal();
    })


    submitContributionBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        // add it to the records 
        // show added message


        addContributionModal.close();
    })


    contributeSearchMemberInput.addEventListener("input", () =>{
        const searchValue = contributeSearchMemberInput.value.toLowerCase();
         memberNameSuggestBox.innerHTML = "";
         let limit = 0;
         if (searchValue === "") return;
        members.forEach((member)=>{
          if(member.toLowerCase().includes(searchValue) && limit < 3){
            const listItem = document.createElement("li");
            listItem.textContent = member;
            memberNameSuggestBox.appendChild(listItem);
            limit++;
          }
        })
    })





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
            <td class="memberName">${memberName.value}</td>
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






searchMemberInput.addEventListener("input", (event)=>{
    const searchMemberInputValue = searchMemberInput.value.toLowerCase();
    const memberTableRows = document.querySelectorAll("tbody tr");


    memberTableRows.forEach((memberTableRow) =>{
        const memberNameSearch = memberTableRow.querySelector(".memberName").textContent.toLowerCase();
        if (memberNameSearch.includes(searchMemberInputValue)){
            memberTableRow.style.display = "";
        }
        else{
            memberTableRow.style.display = "none";
          
        }

    })

})


    contributeSearchMemberInput.addEventListener("input", () =>{
        const searchValue = contributeSearchMemberInput.value.toLowerCase();
         memberNameSuggestBox.innerHTML = "";
         let limit = 0;
         if (searchValue === "") return;
        members.forEach((member)=>{
          if(member.toLowerCase().includes(searchValue) && limit < 3){
            const listItem = document.createElement("li");
            listItem.textContent = member;
            memberNameSuggestBox.appendChild(listItem);
            limit++;
          }
        })
    })



