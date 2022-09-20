const addNewUser = x => {
    const tbody = document.querySelector("tbody");
    const tr = document.querySelector("tr");
    const td = document.querySelector("td");
    const userId = document.getElementById("userId");
    const newUserName = document.querySelector(".newUserName").value;
    const newUserEmail = document.querySelector(".newUserEmail").value;
    const newUserAddress = document.querySelector(".newUserAddress").value;

    const validName = usernameValidation();
    const validEmail = emailValidation();
    const validAddress = addressValidation();

    if (!validName || !validEmail || !validAddress) {
        return;
    } else {
        x.disabled = true;
        const lastId = parseInt(
            document.querySelector("[data-id]:last-child")?.dataset.id || 0
        );

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify({
                id: lastId,
                name: newUserName,
                email: newUserEmail,
                address: newUserAddress,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then(response => response.json())
            .then(d => {
                users.push(d);
                // console.log(d, "postData");
                // console.log(users, "newAllData");

                let tableData = `
          <tr data-id=${lastId + 1 || 11}>
          <td id="tabId" class="tableUserId-${lastId + 1}">${lastId + 1}</td>
          <td class="tableUserName-${lastId + 1}">${d.name}</td>
          <td class="tableUserEmail-${lastId + 1}">${d.email}</td>
          <td class="tableUserAddress-${lastId + 1}">${
                    d?.address || "Germany"
                }</td>

          <td>
          <button id="edit-user-${lastId + 1}">Edit</button>
          <button id="delete-user-${lastId + 1}">Delete</button>
          </td>

          </tr>
          `;
                tbody.innerHTML += tableData;

                modal.style.display = "none";
                // resetForm();

                document.querySelector(".newUserName").value = "";
                document.querySelector(".newUserEmail").value = "";
                document.querySelector(".newUserAddress").value = "";

                document
                    .querySelectorAll(".form-control")
                    .forEach(element => (element.className = "form-control"));
            });
    }
};
