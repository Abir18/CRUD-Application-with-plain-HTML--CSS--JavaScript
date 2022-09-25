const root = document.getElementById("root");
const template = document.createElement("main");

const wrapper = document.createElement("div");
const table = document.createElement("table");

wrapper.setAttribute("id", "wrapper");
template.appendChild(wrapper);

let modalNameInput;

// New User Popup

const newUserModal = () => {
    const popup = document.createElement("div");
    popup.className = "popup";

    const modal = document.createElement("div");
    modal.className = "modal";
    modal.setAttribute("id", "myModal");

    popup.append(modal);

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    modal.append(modalContent);

    const span = document.createElement("span");
    span.className = "close";
    span.innerHTML = "&times;";

    const modalInfo = document.createElement("div");
    modalInfo.className = "modal-info";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";

    const modalHeaderH2 = document.createElement("h2");
    modalHeaderH2.innerText = "New User";

    const modalLine = document.createElement("hr");
    modalLine.className = "new-user-line";

    modalHeader.append(modalHeaderH2);
    modalHeader.append(modalLine);

    modalContent.append(span);
    modalContent.append(modalInfo);

    const modalForm = document.createElement("form");
    modalForm.setAttribute("id", "form");
    modalForm.setAttribute("novalidate", "novalidate");

    const formWrapper = document.createElement("div");

    const modalNameDiv = document.createElement("div");
    modalNameDiv.className = "form-control";
    const modalNameLabel = document.createElement("label");
    modalNameLabel.textContent = "Name: ";
    modalNameLabel.setAttribute("for", "username");
    modalNameInput = document.createElement("input");
    modalNameInput.setAttribute("id", "username");
    modalNameInput.setAttribute("type", "text");
    modalNameInput.className = "newUserName";
    const errorName = document.createElement("small");
    const iNameError = document.createElement("i");
    const iNameSuccess = document.createElement("i");
    iNameError.className = "fas fa-check-circle";
    iNameSuccess.className = "fas fa-exclamation-circle";

    modalNameDiv.append(modalNameLabel);
    modalNameDiv.append(modalNameInput);
    modalNameDiv.append(errorName);
    modalNameDiv.append(iNameError);
    modalNameDiv.append(iNameSuccess);

    const modalEmailDiv = document.createElement("div");
    modalEmailDiv.className = "form-control";
    const modalEmailLabel = document.createElement("label");
    modalEmailLabel.textContent = "Eamil: ";
    modalEmailLabel.setAttribute("for", "useremail");
    const modalEmailInput = document.createElement("input");
    modalEmailInput.setAttribute("id", "useremail");
    modalEmailInput.setAttribute("type", "email");
    modalEmailInput.className = "newUserEmail";
    const errorEmail = document.createElement("small");
    const iEmailError = document.createElement("i");
    const iEmailSuccess = document.createElement("i");
    iEmailError.className = "fas fa-check-circle";
    iEmailSuccess.className = "fas fa-exclamation-circle";

    modalEmailDiv.append(modalEmailLabel);
    modalEmailDiv.append(modalEmailInput);
    modalEmailDiv.append(errorEmail);
    modalEmailDiv.append(iEmailError);
    modalEmailDiv.append(iEmailSuccess);

    const modalAddressDiv = document.createElement("div");
    modalAddressDiv.className = "form-control";
    const modalAddressLabel = document.createElement("label");
    modalAddressLabel.textContent = "Address: ";
    modalAddressLabel.setAttribute("for", "useraddress");
    const modalAddressInput = document.createElement("textarea");
    modalAddressInput.setAttribute("id", "useraddress");
    modalAddressInput.setAttribute("rows", "8");
    modalAddressInput.setAttribute("cols", "30");
    modalAddressInput.className = "newUserAddress";
    const errorAddress = document.createElement("small");
    const iAddressError = document.createElement("i");
    const iAddressSuccess = document.createElement("i");
    iAddressError.className = "fas fa-check-circle";
    iAddressSuccess.className = "fas fa-exclamation-circle";

    modalAddressDiv.append(modalAddressLabel);
    modalAddressDiv.append(modalAddressInput);
    modalAddressDiv.append(errorAddress);
    modalAddressDiv.append(iAddressError);
    modalAddressDiv.append(iAddressSuccess);

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";

    const saveButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    saveButton.className = "submit";
    saveButton.innerText = "Save";
    // saveButton.onclick = addNewUser(this);

    cancelButton.setAttribute("id", "close-modal");
    cancelButton.innerText = "Cancel";
    cancelButton.style.marginLeft = "10px";

    modalFooter.append(saveButton);
    modalFooter.append(cancelButton);

    formWrapper.append(modalNameDiv);
    formWrapper.append(modalEmailDiv);
    formWrapper.append(modalAddressDiv);
    formWrapper.append(modalFooter);

    modalForm.append(formWrapper);

    modalInfo.append(modalHeader);
    modalInfo.append(modalForm);

    return popup;
};

// Generate Users Table

const generateTableHead = (table, data) => {
    const tableHead = table.createTHead();
    const row1 = tableHead.insertRow();
    const row2 = tableHead.insertRow();
    // console.log(row1);
    // console.log(row2);

    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    th1.innerText = "User List";
    th1.setAttribute("colspan", "4");
    th1.style.textAlign = "left";
    th1.style.borderRight = "none";
    row1.append(th1);

    const newUserButton = document.createElement("button");
    newUserButton.innerText = " + New";
    newUserButton.setAttribute("id", "myBtn");
    newUserButton.className = "new-btn";
    th2.style.borderLeft = "none";
    th2.append(newUserButton);
    row1.append(th2);

    for (key of data) {
        const th = document.createElement("th");
        const text = document.createTextNode(key);
        th.append(text);
        row2.append(th);
    }
};

const generateTableData = (table, users) => {
    const tbody = table.createTBody();

    const tableCellClasses = [
        "tableUserId",
        "tableUserName",
        "tableUserEmail",
        "tableUserAddress",
    ];
    for (user of users) {
        const row = table.insertRow();
        row.setAttribute("data-id", `${user.id}`);
        let cellCounter = 0;
        for (userData in user) {
            let cell = row.insertCell();
            cell.className = `${tableCellClasses[cellCounter]}-${user.id}`;
            let text = document.createTextNode(user[userData]);
            cell.appendChild(text);
            tbody.appendChild(row);

            cellCounter++;
        }
        let cell1 = row.insertCell();
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.className = "edit";
        editButton.setAttribute("id", `edit-user-${user.id}`);
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.setAttribute("id", `delete-user-${user.id}`);
        deleteButton.style.marginLeft = "10px";
        cell1.appendChild(editButton);
        cell1.appendChild(deleteButton);
    }

    editList();
};

// For VerticalLine;
const middileSection = () => {
    const vertical = document.createElement("div");
    vertical.className = "vertical";
    return vertical;
};

// Edit Section

const RightSection = () => {
    const editSection = document.createElement("section");
    editSection.className = "edit-section";
    const headerDiv = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerText = "Edit Details";
    const hr = document.createElement("hr");
    headerDiv.append(h2);
    headerDiv.append(hr);

    const editSectionForm = document.createElement("form");
    editSectionForm.setAttribute("id", "edit-form");
    editSectionForm.setAttribute("novalidate", "novalidate");

    const editIdDiv = document.createElement("div");
    const editIdInput = document.createElement("input");
    editIdInput.setAttribute("type", "hidden");
    editIdInput.className = "editId";
    editIdDiv.append(editIdInput);

    const editNameDiv = document.createElement("div");
    editNameDiv.className = "form-control";
    const editNameLabel = document.createElement("label");
    editNameLabel.textContent = "Name: ";
    editNameLabel.setAttribute("for", "name");
    const editNameInput = document.createElement("input");
    editNameInput.setAttribute("id", "name");
    editNameInput.setAttribute("type", "text");
    editNameInput.className = "editName";
    const errorName = document.createElement("small");
    const iNameError = document.createElement("i");
    const iNameSuccess = document.createElement("i");
    iNameError.className = "fas fa-check-circle";
    iNameSuccess.className = "fas fa-exclamation-circle";
    editNameDiv.append(editNameLabel);
    editNameDiv.append(editNameInput);
    editNameDiv.append(errorName);
    editNameDiv.append(iNameError);
    editNameDiv.append(iNameSuccess);

    const editEmailDiv = document.createElement("div");
    editEmailDiv.className = "form-control";
    const editEmailLabel = document.createElement("label");
    editEmailLabel.textContent = "Email: ";
    editEmailLabel.setAttribute("for", "email");
    const editEmailInput = document.createElement("input");
    editEmailInput.setAttribute("id", "email");
    editEmailInput.setAttribute("type", "email");
    editEmailInput.className = "editEmail";
    const errorEmail = document.createElement("small");
    const iEmailError = document.createElement("i");
    const iEmailSuccess = document.createElement("i");
    iEmailError.className = "fas fa-check-circle";
    iEmailSuccess.className = "fas fa-exclamation-circle";
    editEmailDiv.append(editEmailLabel);
    editEmailDiv.append(editEmailInput);
    editEmailDiv.append(errorEmail);
    editEmailDiv.append(iEmailError);
    editEmailDiv.append(iEmailSuccess);

    const editAddressDiv = document.createElement("div");
    editAddressDiv.className = "form-control";
    const editAddressLabel = document.createElement("label");
    editAddressLabel.textContent = "Address: ";
    editAddressLabel.setAttribute("for", "address");
    const editAddressInput = document.createElement("textarea");
    editAddressInput.setAttribute("id", "address");
    editAddressInput.setAttribute("rows", "8");
    editAddressInput.setAttribute("cols", "30");
    editAddressInput.className = "editAddress";
    const errorAddress = document.createElement("small");
    const iAddressError = document.createElement("i");
    const iAddressSuccess = document.createElement("i");
    iAddressError.className = "fas fa-check-circle";
    iAddressSuccess.className = "fas fa-exclamation-circle";
    editAddressDiv.append(editAddressLabel);
    editAddressDiv.append(editAddressInput);
    editAddressDiv.append(errorAddress);
    editAddressDiv.append(iAddressError);
    editAddressDiv.append(iAddressSuccess);

    const updateButton = document.createElement("button");
    const resetButton = document.createElement("button");

    updateButton.className = "update";
    updateButton.textContent = "Update";
    resetButton.className = "reset";
    // resetButton.setAttribute("type", "reset");
    resetButton.textContent = "Reset";
    resetButton.style.marginLeft = "10px";

    resetButton.onclick = () => {
        // e.preventDefault();
        document.querySelector(".editName").value = document.querySelector(
            `.tableUserName-${id}`
        ).innerText;
        document.querySelector(".editEmail").value = document.querySelector(
            `.tableUserEmail-${id}`
        ).innerText;
        document.querySelector(".editAddress").value = document.querySelector(
            `.tableUserAddress-${id}`
        ).innerText;

        document
            .querySelectorAll(".form-control")
            .forEach((element) => (element.className = "form-control"));
    };

    editSectionForm.append(editIdDiv);
    editSectionForm.append(editNameDiv);
    editSectionForm.append(editEmailDiv);
    editSectionForm.append(editAddressDiv);
    editSectionForm.append(updateButton);
    editSectionForm.append(resetButton);

    editSection.append(headerDiv);
    editSection.append(editSectionForm);
    return editSection;
};

const modalLayout = newUserModal();
const verticalLine = middileSection();
const editSectionLayout = RightSection();

let users = [];

const tableHeadData = ["ID", "Name", "Email", "Address", "Actions"];
generateTableHead(table, tableHeadData);

wrapper.append(table);
wrapper.append(verticalLine);
wrapper.append(editSectionLayout);
wrapper.append(modalLayout);

const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();

    let count = 0;
    for (const item of data) {
        users[count] = {};
        users[count].id = item.id;
        users[count].name = item.name;
        users[count].email = item.email;
        users[count].address = item?.address?.city || "Gwenborough";
        count++;
    }

    return users;
};

const editUserData = (users) => {
    const editUserName = document.querySelector(".editName");
    const editUserEmail = document.querySelector(".editEmail");
    const editUserAddress = document.querySelector(".editAddress");
    const editUserId = document.querySelector(".editId");
    editUserId.value = users[0].id;
    editUserName.value = users[0].name;
    editUserEmail.value = users[0].email;
    editUserAddress.value = users[0].address.city
        ? users[0].address.city
        : users[0].address;
};

fetchData()
    .then(() => {
        generateTableData(table, users);
        editUserData(users);
    })
    .catch((err) => {
        alert("Something Went Wrong...\nData not Found !!!", err);
    });

root.appendChild(template);
