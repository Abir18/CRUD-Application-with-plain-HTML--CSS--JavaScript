// const list = document.querySelector("table");

// list.addEventListener("click", (e) => {
//   const url = `https://jsonplaceholder.typicode.com/users`;
//   const id = e.target.parentElement.parentElement.dataset.id;

//   let editButtonIsPressed = e.target.id === "edit-user";
//   let deleteButtonIsPressed = e.target.id === "delete-user";

//   if (editButtonIsPressed) {
//     console.log("User Edited");
//   }

//   if (deleteButtonIsPressed) {
//     console.log("User Deleted");
//     fetch(`${url}/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("deleted item", data);
//         // location.reload();
//       });
//   }
// });
