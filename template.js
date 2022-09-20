const root = document.querySelector("#root");
const template = document.createElement("main");

template.innerHTML = `
	<div id="wrapper">
        <table align="center" class="table" id="data_table">
            <thead>
                <tr>
                    <th colspan="4" style="text-align: left">User List</th>
                    <th>
                        <button id="myBtn" class="new-btn"> + New</button>
                    </th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>

        <div class="vertical"></div>

        <section class="edit-section">
            <div>
                <h2>Edit details</h2>
                <hr />
            </div>
            <form id="edit-form" novalidate>
                <div>
                    <input class="editId" type="hidden" />
                </div>
                <div class="form-control">
                    <label for="name">Name:</label>

                    <input id="name" type="text" class="editName" />

                    <small class="errName">Error message</small>
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-exclamation-circle"></i>
                </div>
                <div class="form-control">
                    <label for="email">Email:</label>
                    <input id="email" type="email" class="editEmail" />
                    <small class="errName">Error message</small>
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-exclamation-circle"></i>
                </div>
                <div class="form-control">
                    <label for="address">Address:</label>
                    <textarea name="" id="address" cols="30" rows="10" class="editAddress"></textarea>
                    <small class="errName">Error message</small>
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-exclamation-circle"></i>
                </div>
                <button class="update">Update</button>
                <button class="reset" onclick="resetForm()">Reset</button>
            </form>
        </section>
        <div class="popup">
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <div class="modal-info">
                        <div class="modal-header">
                            <h2>New User</h2>
                            <hr class="new-user-line" />
                        </div>

                        <form id="form" novalidate>
                            <div>
                                <div class="form-control">
                                    <label for="username">Name:</label>
                                    <input type="text" id="username" class="newUserName" />
                                    <small class="errName">Error message</small>
                                    <i class="fas fa-check-circle"></i>
                                    <i class="fas fa-exclamation-circle"></i>
                                </div>
                                <div class="form-control">
                                    <label for="useremail">Email:</label>
                                    <input id="useremail" type="email" class="newUserEmail" required />
                                    <i class="fas fa-check-circle"></i>
                                    <i class="fas fa-exclamation-circle"></i>
                                    <small class="errName">Error message</small>
                                </div>
                                <div class="form-control">
                                    <label for="useraddress">Address:</label>
                                    <textarea name="" id="useraddress" cols="30" rows="7"
                                        class="newUserAddress"></textarea>
                                    <i class="fas fa-check-circle"></i>
                                    <i class="fas fa-exclamation-circle"></i>
                                    <small class="errName">Error message</small>
                                </div>
                                <div class="modal-footer">
                                    <button class="submit" onclick="addNewUser(this)">Save</button>
                                    <button id="close-modal">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
	</div>
`;

root.appendChild(template);
