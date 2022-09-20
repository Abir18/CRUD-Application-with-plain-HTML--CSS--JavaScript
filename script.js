// Users Information in Table
// const tableUserId = document.querySelector(`.tableUserId`);
// const tableUserEmail = document.querySelector(".tableUserEmail");
// const tableUserAddress = document.querySelector(".tableUserAddress");

const userId = document.querySelector(".editId");
const userName = document.querySelector(".editName");
const userEmail = document.querySelector(".editEmail");
const userAddress = document.querySelector(".editAddress");
const list = document.querySelector("table");
const update = document.querySelector(".update");

update.disabled = true;
update.style.background = "#f3f3f3";
update.style.color = "#ddd";

userName.addEventListener("keyup", e => {
    update.disabled = false;
    update.style.background = "#fff";
    update.style.color = "#000";
});
userEmail.addEventListener("keyup", e => {
    update.disabled = false;
    update.style.background = "#fff";
    update.style.color = "#000";
});
userAddress.addEventListener("keyup", e => {
    update.disabled = false;
    update.style.background = "#fff";
    update.style.color = "#000";
});

let id = 1;

let users = [];

const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();

    users = [...data];
    // console.log(users, "users");
};
fetchData();

const tableBody = document.querySelector("tbody");
const rowElement = document.createElement("tr");

const editUserName = document.querySelector(".editName");
const editUserEmail = document.querySelector(".editEmail");
const editUserAddress = document.querySelector(".editAddress");
const editUserId = document.querySelector(".editId");

const loadIntoTable = async (url, table) => {
    const response = await fetch(url);
    //   const { id, name, email } = await response.json();
    const dataa = await response.json();

    editUserId.value = users[0].id;
    editUserName.value = users[0].name;
    editUserEmail.value = users[0].email;
    editUserAddress.value = users[0].address.city;

    let tableData = "";
    users.map(user => {
        tableData += `
    <tr data-id=${user.id}>
    <td class="tableUserId-${user.id}">${user.id}</td>
    <td class="tableUserName-${user.id}">${user.name}</td>
    <td class="tableUserEmail-${user.id}">${user.email}</td>
    <td class="tableUserAddress-${user.id}">${
            user?.address?.city || "Germany"
        }</td>

    <td class="button-layout">
    ${
        /* Comment in Template String */
        /* <button id="edit-user" onclick="editUserInfo(${d.id})">Edit</button> */ ""
        /* <button class="edit" id="edit-user">Edit</button> */
    }
    
    <button class="edit" id="edit-user-${user.id}">Edit</button>

    <button id="delete-user-${user.id}" class='delete-btn'>Delete</button>
    </td>

    </tr>
    `;
        // console.log(tableData);
    });
    tableBody.innerHTML = tableData;
    editList();
};

const resetForm = () => {
    console.log(id, "resetId");
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
        .forEach(element => (element.className = "form-control"));

    // document.querySelector(".editEmail").value = tableUserEmail;
    // document.querySelector(".editAddress").value = tableUserAddress;
};

const editList = () => {
    // console.log(update);

    list.addEventListener("click", async e => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        id = e.target.parentElement.parentElement.dataset.id;

        // console.log(e.target.id, "e.target.id");
        // console.log(id, "dataset.id");

        let editButtonIsPressed = e.target.id === `edit-user-${id}`;
        let deleteButtonIsPressed = e.target.id === `delete-user-${id}`;
        let updateButtonIsPressed =
            e.target.parentElement.className === "update";

        // console.log(e.target.parentElement, "parent");

        // update.addEventListener("click", () => {
        //   console.log("update button pressed");
        // });

        if (editButtonIsPressed) {
            // console.log("User Edited");
            // console.log(id);

            const tableUserId = document.querySelector(
                `.tableUserId-${id}`
            ).textContent;
            const tableUserName = document.querySelector(
                `.tableUserName-${id}`
            ).textContent;
            const tableUserEmail = document.querySelector(
                `.tableUserEmail-${id}`
            ).textContent;
            const tableUserAddress = document.querySelector(
                `.tableUserAddress-${id}`
            ).textContent;
            // console.log(tableUserName, "tableUserName")

            // const response = await fetch(
            //   `https://jsonplaceholder.typicode.com/users/${id}`
            // );
            // const data = await response.json();
            // const { name, email, address } = await response.json();

            // console.log(name, email, "singleUser");
            // console.log(userId, "userId")

            const editUserId = document.querySelector(".editId");
            // console.log(editUserId, "ew");
            userId.value = id;
            userName.value = tableUserName;
            userEmail.value = tableUserEmail;
            // userEmail.value = email;
            userAddress.value = tableUserAddress || "404";
            // userAddress.value = address?.city || "404 Not Found";
        }

        if (updateButtonIsPressed) {
            console.log("update button pressed");
        }

        if (deleteButtonIsPressed) {
            if (confirm("Are you sure to delete this user?")) {
                const deleteId = document.querySelector(`#delete-user-${id}`);
                // const deleteId = document.getElementById("delete-user-" + id);
                // console.log(deleteId, "idp");
                // console.log(id, "oo");

                // console.log(id, 'id');

                const filteredUsers = users.filter(user => user.id != id);

                users = [...filteredUsers];
                // console.log(id, "id");

                // console.log(filteredUsers, "filteredUsers");

                deleteId.parentElement.parentElement.remove();
                // resetForm();

                editUserId.value = filteredUsers[0].id;
                editUserName.value = filteredUsers[0].name;
                editUserEmail.value = filteredUsers[0].email;
                editUserAddress.value = filteredUsers[0].address.city;
            }
        }
    });
};

update.addEventListener("click", e => {
    e.preventDefault();

    const validName = editedUsernameValidation();
    const validEmail = editedEmailValidation();
    const validAddress = editedAddressValidation();

    if (!validName || !validEmail || !validAddress) {
        // alert("Please Insert Information Correctly");
        return;
    }

    if (confirm("Are you sure to update this user?")) {
        document
            .querySelectorAll(".form-control")
            .forEach(element => (element.className = "form-control"));

        fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`, {
            method: "PATCH",
            body: JSON.stringify({
                id: userId.value,
                name: userName.value,
                email: userEmail.value,
                address: userAddress.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then(response => response.json())
            .then(data => {
                const datasetId =
                    document.querySelector("table tbody tr")?.dataset.id;

                if (userId.value === data.id) {
                    // console.log("ID matched");

                    const trow = tableBody.querySelector(`tr `);

                    let singRow = document.querySelector(
                        `[data-id='${data.id}']`
                    );
                    // console.log(singRow, "singRow");

                    // console.log(data, "updataaa");

                    singRow.innerHTML = `
          <tr data-id=${data.id}>
          <td  class="tableUserId-${data.id}">${data.id}</td>
          <td class="tableUserName-${data.id}">${
                        data?.name || "Leanne Graham"
                    }</td>
          <td class="tableUserEmail-${data.id}">${
                        data?.email || "abc@abc.com"
                    }</td>
          <td class="tableUserAddress-${data.id}">${
                        data?.address || "Germany"
                    }</td>
          
          <td>
          ${
              /* Comment in Template String */
              /* <button id="edit-user" onclick="editUserInfo(${d.id})">Edit</button> */ ""
          }
          
          <button class="edit" id="edit-user-${data.id}" >Edit</button>
          <button id="delete-user-${data.id}" >Delete</button>
          </td>
          
          </tr>
          `;
                }
            });
    }
});

loadIntoTable(
    "https://jsonplaceholder.typicode.com/users",
    document.querySelector("table")
);
