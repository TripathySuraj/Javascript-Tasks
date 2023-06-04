function resetErrors() {
    document.getElementById("firstNameInput").innerHTML = "";
    document.getElementById("lastNameInput").innerHTML = "";
    document.getElementById("emailInput").innerHTML = "";
    document.getElementById("passInput").innerHTML = "";
    document.getElementById("repassInput").innerHTML = "";
    document.getElementById("ageInput").innerHTML = "";
    document.getElementById("numInput").innerHTML = "";
    document.getElementById("addressInput").innerHTML = "";
    document.getElementById("stateInput").innerHTML = "";
    //document.getElementById("countryInput").value = "select";
    document.getElementById("first_name_error").innerHTML = "";
    document.getElementById("last_name_error").innerHTML = "";
    document.getElementById("email_error").innerHTML = "";
    document.getElementById("pass_error").innerHTML = "";
    document.getElementById("repass_error").innerHTML = "";
    document.getElementById("gender_error").innerHTML = "";
    document.getElementById("age_error").innerHTML = "";
    document.getElementById("num_error").innerHTML = "";
    document.getElementById("address_error").innerHTML = "";
    document.getElementById("state_error").innerHTML = "";
    //document.getElementById("country_error").innerHTML = "";
}

function setError(id, message) {
    document.getElementById(id).innerHTML = message;
}

function validateForm() {
    resetErrors();
    let firstName = document.getElementById("firstNameInput").value;
    let lastName = document.getElementById("lastNameInput").value;
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passInput").value;
    let repassword = document.getElementById("repassInput").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let age = document.getElementById("ageInput").value;
    let number = document.getElementById("numInput").value;
    let address = document.getElementById("addressInput").value;
    let state = document.getElementById("stateInput").value;
    //let country = document.getElementById("dropInput").value; 
   
    let errors = [];
    let error = {};

    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   

    if (firstName.trim().length == 0) {
        
        error = {
            "id": "first_name_error",
            "msg": "POOR"
        }
        errors.push(error);
    }

    if (lastName.trim().length == 0) {
        error = {
            "id": "last_name_error",
            "msg": "POOR"
        }
        errors.push(error);
    }

    if (email.trim().length == 0) {
        error = {
            "id": "email_error",
            "msg": "POOR"
        }
        errors.push(error);
    }
    else if (!emailPattern.test(email.toLowerCase())) {
        error = {
            "id": "email_error",
            "msg": "POOR (invalid email id)"
        }
        errors.push(error);
    }
 
    if ((password.trim().length > 15) || (password.trim().length < 8)) {
        error = {
            "id": "pass_error",
            "msg": "POOR (password length should be 8-15)"
        }
        errors.push(error);
    }

    if (repassword.trim().length == 0) {
        error = {
            "id": "repass_error",
            "msg": "POOR OR MISMATCH"
        }
        errors.push(error);
    }

    else if(repassword!=password){
        error = {
            "id": "repass_error",
            "msg": "POOR OR MISMATCH"
        }
        errors.push(error);
    }

    if (male == false && female == false) {
        error = {
            "id": "gender_error",
            "msg": "Please select your gender."
        }
        errors.push(error);
    }

    if (age.trim().length == 0 || age<=0) {
        error = {
            "id": "age_error",
            "msg": "POOR"
        }
        errors.push(error);
    } 


    if (number.trim().length != 10) {
        error = {
            "id": "num_error",
            "msg": "POOR"
        }
        errors.push(error);
    }

    if (address.trim().length == 0) {
        error = {
            "id": "address_error",
            "msg": "POOR"
        }
        errors.push(error);
    }

    if (state.trim().length == 0) {
        error = {
            "id": "state_error",
            "msg": "POOR"
        }
        errors.push(error);
    }

   /*  if (country == "select") {
        error = {
            "id": "country_error",
            "msg": "Please select your country."
            
        }
        errors.push(error);

    } */
 
    if (errors.length > 0) {
        console.log(errors);
        for (let i = 0; i < errors.length; i++) {
            setError(errors[i]['id'], errors[i]['msg']);
        } 
        return false;
    }
   

    else {
        return true;
    }
}
