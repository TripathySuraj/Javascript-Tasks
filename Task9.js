function resetErrors() {
    document.getElementById("name_error").innerHTML = "";
    document.getElementById("email_error").innerHTML = "";
    document.getElementById("pass_error").innerHTML = "";
    document.getElementById("num_error").innerHTML = "";
    document.getElementById("gender_error").innerHTML = "";
    document.getElementById("language_error").innerHTML = "";
    document.getElementById("zip_error").innerHTML = "";
    document.getElementById("msg_error").innerHTML = "";
    document.getElementById("nameInput").innerHTML = "";
    document.getElementById("emailInput").innerHTML = "";
    document.getElementById("passInput").innerHTML = "";
    document.getElementById("numInput").innerHTML = "";
    document.getElementById("zipInput").innerHTML = "";
    document.getElementById("msgInput").innerHTML = "";
    document.getElementById("nameInput").style.background = "white";
    document.getElementById("emailInput").style.background = "white";
    document.getElementById("passInput").style.background = "white";
    document.getElementById("numInput").style.background = "white";
    document.getElementById("zipInput").style.background = "white";
    document.getElementById("msgInput").style.background = "white";
    document.getElementById("genderRadio").style.background = "maroon";
    document.getElementById("genderRadio").style.color = "white";
    document.getElementById("dropInput").style.background = "gainsboro";
}

function setError(id, message) {
    document.getElementById(id).innerHTML = message;
}

function inputErrorStyle(id) {
    document.getElementById(id).style.background = "yellow";
}

function validateForm() {
    resetErrors();
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passInput").value;
    let number = document.getElementById("numInput").value;
    let language = document.getElementById("dropInput").value;
    let zipCode = document.getElementById("zipInput").value;
    let msg = document.getElementById("msgInput").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;

    let errors = [];
    let error = {};

    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordPattern = /^(?=.*[0-9])/;

    if (name.trim().length == 0) {
        error = {
            "id": "name_error",
            "msg": "This field is required.",
            "oid": "nameInput"
        }
        errors.push(error);
    }

    if (email.trim().length == 0) {
        error = {
            "id": "email_error",
            "msg": "This field is required.",
            "oid": "emailInput"
        }
        errors.push(error);
    }

    else if (!emailPattern.test(email.toLowerCase())) {
        error = {
            "id": "email_error",
            "msg": "A valid email address is required.",
            "oid": "emailInput"
        }
        errors.push(error);
    }

    if (password.trim().length == 0) {
        error = {
            "id": "pass_error",
            "msg": "This field is required.",
            "oid": "passInput"
        }
        errors.push(error);
    }

    else if ((password.trim().length > 15) || (password.trim().length < 8)) {
        error = {
            "id": "pass_error",
            "msg": "Password must contain atleast 8 characters and at max 15 characters.",
            "oid": "passInput"
        }
        errors.push(error);
    }

    else if (!passwordPattern.test(password.toLowerCase())) {
        error = {
            "id": "pass_error",
            "msg": "Password is not valid as password should contain atleast one digit.",
            "oid": "passInput"
        }
        errors.push(error);
    }

    if (number.trim().length == 0) {
        error = {
            "id": "num_error",
            "msg": "This field is required.",
            "oid": "numInput"
        }
        errors.push(error);
    }

    else if (number.trim().length != 10) {
        error = {
            "id": "num_error",
            "msg": "A valid phone number is required.",
            "oid": "numInput"
        }
        errors.push(error);
    }

    if (male == false && female == false && other == false) {
        setError("gender_error", "Please select your gender.");
        document.getElementById("genderRadio").style.background = "yellow";
        document.getElementById("genderRadio").style.color = "black";
    }

    if (language == "select_language") {
        error = {
            "id": "language_error",
            "msg": "Please select a language.",
            "oid": "dropInput"
        }
        errors.push(error);

    }

    if (zipCode.trim().length == 0) {
        setError("zip_error", "This field is required.");
        inputErrorStyle("zipInput");
        error = {
            "id": "zip_error",
            "msg": "This field is required.",
            "oid": "zipInput"
        }
        errors.push(error);
    }

    if (msg.trim().length == 0) {
        error = {
            "id": "msg_error",
            "msg": "This field is required.",
            "oid": "msgInput"
        }
        errors.push(error);
    }

    if (errors.length > 0) {
        console.log(errors);
        for (let i = 0; i < errors.length; i++) {
            setError(errors[i]['id'], errors[i]['msg']);
            inputErrorStyle(errors[i]['oid']);
        }
        return false;
    }

    else {
        return true;
    }
}
