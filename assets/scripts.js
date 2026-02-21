const addMemberBtns = document.querySelectorAll(".addMemberBtn");
const addMemberModal = document.querySelector(".addMemberModal");
const modalCancel = document.querySelector(".modalCancel");
const modalAddMember = document.querySelector(".modalAddMember");



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
    addMemberModal.close();
    alert("thank you!!");
})


