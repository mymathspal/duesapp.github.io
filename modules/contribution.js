
const addContributionBtn = document.querySelector(".addContributionBtn");
const addContributionModal = document.querySelector(".addContributionModal");
const submitContributionBtn = document.querySelector(".submitContributionBtn");


const searchMemberInput = document.getElementById("searchMember");
const contributeSearchMemberInput = document.querySelector(".contribSearchName")
const memberNameSuggestBox = document.querySelector(".memberNameSuggestions");
// const modalCancels = document.querySelectorAll(".modalCancelBtn");



const members = ["kofi", "kwabena", "kwame", "kojo", "afia", "Yaw", "ama"];





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

    modalCancels.forEach((modalCancel) => {
    modalCancel.addEventListener("click", (event)=>{
    event.preventDefault();
    addMemberModal.close();
})
})
