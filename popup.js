let modal = document.getElementById("myModal");

let cancel = document.getElementById("close-modal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// console.log(document.getElementsByClassName("close")[0]);

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
    document.querySelector(".submit").disabled = false;
};
// console.log(btn.onclick);

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    document.querySelector(".newUserName").value = "";
    document.querySelector(".newUserEmail").value = "";
    document.querySelector(".newUserAddress").value = "";

    document
        .querySelectorAll(".form-control")
        .forEach((element) => (element.className = "form-control"));
};

// When the user clicks on Cancel button close the modal
cancel.addEventListener("click", () => {
    modal.style.display = "none";
    document.querySelector(".newUserName").value = "";
    document.querySelector(".newUserEmail").value = "";
    document.querySelector(".newUserAddress").value = "";

    document
        .querySelectorAll(".form-control")
        .forEach((element) => (element.className = "form-control"));
});

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
