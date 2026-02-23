const addMemberBtns = document.querySelectorAll(".addMemberBtn");
const addMemberModal = document.querySelector(".addMemberModal");
const modalCancel = document.querySelector(".modalCancelBtn");
const modalAddMember = document.querySelector(".modalAddMemberBtn");



addMemberBtns.forEach((addMemberBtn) =>{
addMemberBtn.addEventListener("click", () =>{
    console.log("new menber added!!");
    addMemberModal.showModal();
    
})
})

modalCancel.addEventListener("click", ()=>{
    addMemberModal.close();
})

modalAddMember.addEventListener("click", () =>{
   
    alert("thank you!!");

     addMemberModal.remove();
})


