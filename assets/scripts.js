document.addEventListener("DOMContentLoaded", () => {

const previewButton = document.getElementById("previewBtn");
const editSwitch = document.getElementById("switch");
const editableContent = document.querySelectorAll(".editable");



editSwitch.addEventListener("change", () =>{
    console.log(editableContent);
    
    editableContent.forEach((element) =>{
    element.addAttribute("contenteditable");
    });
  

});


});


const upload = document.getElementById("imageUpload");
const img = document.getElementById("profilePic");

upload.addEventListener("change", () => {
    const file = upload.files[0];
    img.src = URL.createObjectURL(file);
});







