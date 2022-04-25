const firstpassword = document.getElementById("password");
const secondpassword = document.getElementById("confirmpassword");
const firstpassdiv = document.getElementById("firstpassworddiv");
const secondpassdiv = document.getElementById("secondpassworddiv");
firstpassword.addEventListener('keyup', passwordEqual)
secondpassword.addEventListener('keyup', passwordEqual)


function passwordEqual() {
    firstpasswordvalue = firstpassword.value;
    secondpasswordvalue = secondpassword.value;
    if (firstpasswordvalue!=secondpasswordvalue) {
        if (firstpassword.classList.contains("error")) {
        }
        else {
            firstpassdiv.classList.add("error");
            secondpassdiv.classList.add("error");
            secondpassword.classList.add("error");
            firstpassword.classList.add("error");
            firstpassword.setCustomValidity('Passwords must be the same'); /*found this little helpful nugget thank god*/
        }
    }
    else {
        if (firstpassword.classList.contains("error")){
            firstpassdiv.classList.remove("error");
            secondpassdiv.classList.remove("error");
            secondpassword.classList.remove("error");
            firstpassword.classList.remove("error");
            firstpassword.setCustomValidity('');
        }
    }
}