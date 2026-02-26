const addMemberBtns = document.querySelectorAll(".addMemberBtn");
const addMemberModal = document.querySelector(".addMemberModal");
const modalCancel = document.querySelector(".modalCancelBtn");
const modalAddMember = document.querySelector(".modalAddMemberBtn");

const addContributionBtn = document.querySelector(".addContributionBtn");
const addContributionModal = document.querySelector(".addContributionModal");
const submitContributionBtn = document.querySelector(".submitContributionBtn");



addMemberBtns.forEach((addMemberBtn) =>{
addMemberBtn.addEventListener("click", () =>{
    console.log("new menber added!!");
    addMemberModal.showModal();
    
})
})

modalCancel.addEventListener("click", (event)=>{
    event.preventDefault();
    addMemberModal.close();
})

modalAddMember.addEventListener("click", (event) =>{
   event.preventDefault();
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