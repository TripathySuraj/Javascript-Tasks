function resetErrors() {
    document.getElementById("name_error").innerHTML = "";
    document.getElementById("email_error").innerHTML = "";
    document.getElementById("web_error").innerHTML = "";
    document.getElementById("msg_error").innerHTML = "";
    document.getElementById("nameInput").innerHTML = "";
    document.getElementById("emailInput").innerHTML = "";
    document.getElementById("webInput").innerHTML = "";
    document.getElementById("msgInput").innerHTML = "";
    document.getElementById("nameInput").style.border = "1px solid black";
    document.getElementById("emailInput").style.border = "1px solid black";
    document.getElementById("webInput").style.border = "1px solid black";
    document.getElementById("msgInput").style.border = "1px solid black";
}

function setError(id, message) {
    document.getElementById(id).style.color = "red";
    document.getElementById(id).innerHTML = message;
}

function inputErrorStyle(id) {
    document.getElementById(id).style.border = "2px solid red";
}

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}

function validateForm() {
    resetErrors();
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let website = document.getElementById("webInput").value;
    let msg = document.getElementById("msgInput").value;

    let errors = [];
    let error = {};

    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

    if (website.trim().length == 0) {
        error = {
            "id": "web_error",
            "msg": "This field is required.",
            "oid": "webInput"
        }
        errors.push(error);

    }

    else if (isValidUrl(website) == false) {
        error = {
            "id": "web_error",
            "msg": "A valid url is required.  (write in 'http://abc.com' form)",
            "oid": "webInput"
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
            //console.log(errors[i]);
            setError(errors[i]['id'], errors[i]['msg']);
            inputErrorStyle(errors[i]['oid']);
        }
        return false;
    }
    else {
        return true;
    }
}

