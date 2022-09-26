// New User
const form = document.getElementById("form");
const editForm = document.getElementById("edit-form");
const username = document.getElementById("username");
const email = document.getElementById("useremail");
const address = document.getElementById("useraddress");

editForm.addEventListener("submit", (e) => {
    console.log("edited form");
    e.preventDefault();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const val = {
        name: username.value,
        email: email.value,
        address: address.value,
    };

    return val;
});

const usernameValidation = () => {
    if (username.value.trim() === "") {
        setErrorFor(username, "*Username cannot be blank");
    } else if (username.value.length <= 5) {
        console.log(username.value.length);
        setErrorFor(username, "*Username must be at least 5 characters");
    } else if (username.value.length > 20) {
        setErrorFor(username, "*Username must less than 20 characters");
    } else {
        setSuccessFor(username);
        return username.value;
    }
};

const emailValidation = () => {
    if (email.value.trim() === "") {
        setErrorFor(email, "*Email cannot be blank");
    } else if (email.value.length < 10 || email.value.length > 50) {
        setErrorFor(email, "*Email must be in 10 to 50 characters");
    } else if (!isEmail(email.value)) {
        setErrorFor(email, "*Not a valid email");
    } else {
        setSuccessFor(email);
        return email.value;
    }
};

const addressValidation = () => {
    const addressValue = address.value.trim();
    if (address.value.trim() === "") {
        setErrorFor(address, "*Address cannot be blank");
    } else if (address.value.length < 10) {
        setErrorFor(address, "*Address must be at least 10 characters");
    } else if (address.value.length > 50) {
        setErrorFor(address, "*Address must be less than 50 characters");
    } else {
        setSuccessFor(address);
        return address.value;
    }
};

// New User Form Validation
username.addEventListener("keyup", usernameValidation);
username.addEventListener("blur", usernameValidation);

email.addEventListener("keyup", emailValidation);
email.addEventListener("blur", emailValidation);

address.addEventListener("keyup", addressValidation);
address.addEventListener("blur", addressValidation);

// Edit User Form Validation
const editedName = document.getElementById("name");
const editedEmail = document.getElementById("email");
const editedAddress = document.getElementById("address");

const editedUsernameValidation = () => {
    if (editedName.value.trim() === "") {
        setErrorFor(editedName, "*Username cannot be blank");
    } else if (editedName.value.length <= 5) {
        setErrorFor(editedName, "*Username must be at least 5 characters");
    } else if (editedName.value.length > 20) {
        setErrorFor(editedName, "*Username must less than 20 characters");
    } else {
        setSuccessFor(editedName);
        return editedName.value;
    }
};

const editedEmailValidation = () => {
    if (editedEmail.value.trim() === "") {
        setErrorFor(editedEmail, "*Email cannot be blank");
    } else if (editedEmail.value.length < 10 || editedEmail.value.length > 50) {
        setErrorFor(editedEmail, "*Email must be in 10 to 50 characters");
    } else if (!isEmail(editedEmail.value)) {
        setErrorFor(editedEmail, "*Not a valid email");
    } else {
        setSuccessFor(editedEmail);
        return editedEmail.value;
    }
};

const editedAddressValidation = () => {
    const addressValue = address.value.trim();
    if (editedAddress.value.trim() === "") {
        setErrorFor(editedAddress, "*Address cannot be blank");
    } else if (editedAddress.value.length < 10) {
        setErrorFor(editedAddress, "*Address must be at least 10 characters");
    } else if (editedAddress.value.length > 50) {
        setErrorFor(editedAddress, "*Address must be less than 50 characters");
    } else {
        setSuccessFor(editedAddress);
        return editedAddress.value;
    }
};

editedName.addEventListener("keyup", editedUsernameValidation);
editedName.addEventListener("blur", editedUsernameValidation);

editedEmail.addEventListener("keyup", editedEmailValidation);
editedEmail.addEventListener("blur", editedEmailValidation);

editedAddress.addEventListener("keyup", editedAddressValidation);
editedAddress.addEventListener("blur", editedAddressValidation);

const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
};

const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
};

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
