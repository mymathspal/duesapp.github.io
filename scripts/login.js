const email = document.getElementById("email");
const password = document.getElementById("password");
const loginFeedBack = document.querySelector(".feedback-message");
const loginBtn = document.querySelector(".login-btn");
const url = "../api/login.php"

loginBtn.addEventListener("click", async() => {
console.log("clicked");
await sendInputs();
});

function login(){};

function getloginInputs(){

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim()

    if (!emailValue || passwordValue === "")  {
        return { emailValue, passwordValue };
    }
    
    return;
    
};


async function sendInputs(){

    const data = getloginInputs();

    const request = {
        method : "POST",
        body   : JSON.stringify(data),
        headers: { "Content-Type" : "application/json"}
    };

    try{
        const response = await fetch(url, request);

        if(!response.ok){throw new Error(error);}

        // const feeback = response.json();
    }
    catch(error){
        // add a css error class
        console.log(error);
    }
    
};

