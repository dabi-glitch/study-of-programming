const loginInput = document.querySelector(".login-form input");
const loginbutton = document.querySelector(".login-form button");


function onLoginBtnClick(){
    const username = loginInput.value;
    if (username === "" ){
        alert("please input your name");
    }
    else if(username.length > 15) {
        alert("your name is so long");
    }
}
loginbutton.addEventListener("click",onLoginBtnClick);

