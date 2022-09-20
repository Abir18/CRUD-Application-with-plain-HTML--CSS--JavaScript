// const updateUserInfo = async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//   const users = await response.json();

//   const td = document.querySelector("td");

//   const updatedUserId = document.querySelector(".editId").value;
//   console.log(updatedUserId, "uuw");

//   fetch(`https://jsonplaceholder.typicode.com/users/${updatedUserId}`, {
//     method: "PATCH",
//     body: JSON.stringify({
//       id: userId.value,
//       name: userName.value,
//       email: userEmail.value,
//       address: userAddress.value,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       // location.reload();
//       // history.go("/");
//     });
// };
