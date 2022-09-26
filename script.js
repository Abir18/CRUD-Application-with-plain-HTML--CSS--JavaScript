const userId = document.querySelector(".editId");
const userName = document.querySelector(".editName");
const userEmail = document.querySelector(".editEmail");
const userAddress = document.querySelector(".editAddress");

const list = document.querySelector("table");
const update = document.querySelector(".update");

update.disabled = true;
update.style.background = "#f3f3f3";
update.style.color = "#ddd";
update.style.cursor = "not-allowed";

userName.addEventListener("keyup", (e) => {
    update.disabled = false;
    update.style.background = "#fff";
    update.style.color = "#000";
    update.style.cursor = "pointer";
});
userEmail.addEventListener("keyup", (e) => {
    update.disabled = false;
    update.style.background = "#fff";
    update.style.color = "#000";
    update.style.cursor = "pointer";
});
userAddress.addEventListener("keyup", (e) => {
    update.disabled = false;
    update.style.background = "#fff";
    update.style.color = "#000";
    update.style.cursor = "pointer";
});

let id = 1;

let tableBody = document.querySelector("tbody");

const rowElement = document.createElement("tr");

const editList = () => {
    list.addEventListener("click", async (e) => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        id = e.target.parentElement.parentElement.dataset.id;

        let editButtonIsPressed = e.target.id === `edit-user-${id}`;
        let deleteButtonIsPressed = e.target.id === `delete-user-${id}`;
        let updateButtonIsPressed =
            e.target.parentElement.className === "update";

        if (editButtonIsPressed) {
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

            const editUserId = document.querySelector(".editId");

            userId.value = id;
            userName.value = tableUserName;
            userEmail.value = tableUserEmail;

            userAddress.value = tableUserAddress || "404";
        }

        if (deleteButtonIsPressed) {
            if (confirm("Are you sure to delete this user?")) {
                const deleteId = document.querySelector(`#delete-user-${id}`);

                const filteredUsers = users.filter((user) => user.id != id);

                users = [...filteredUsers];

                deleteId.parentElement.parentElement.remove();

                document.querySelector(".editId").value = filteredUsers[0]?.id;
                document.querySelector(".editName").value =
                    filteredUsers[0]?.name || "";
                document.querySelector(".editEmail").value =
                    filteredUsers[0]?.email || "";
                document.querySelector(".editAddress").value =
                    filteredUsers[0]?.address || "";
            }
        }
    });
};

update.addEventListener("click", (e) => {
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
            .forEach((element) => (element.className = "form-control"));

        fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`, {
            method: "PUT",
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
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const datasetId =
                    document.querySelector("table tbody tr")?.dataset.id;

                console.log(typeof userId.value, "userId.value");
                console.log(typeof data.id, "data.id");

                if (parseInt(userId.value) === data.id) {
                    console.log("Detected");

                    let updatedRow = document.querySelector(
                        `[data-id='${data.id}']`
                    );

                    updatedRow.innerHTML = `
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
                        
                        <button class="edit" id="edit-user-${
                            data.id
                        }" >Edit</button>
                        <button id="delete-user-${data.id}" >Delete</button>
                        </td>
                        
                        </tr>
                        `;
                }
            });
    }
});
