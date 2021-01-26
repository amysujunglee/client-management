const clientContainer = document.querySelector('.client-container');
const clientName = document.querySelector('.client-name');

function newClient() {
    clientContainer.innerHTML += `<tr>
        <th scope="row"><span class="fa fa-chevron-up"></span></span></th>
        <td class="client-name"><input type="text"></td>
        <td>
            <div class="input-group mb-3">
                <input type="text" class="form-control">
                <div class="input-group-prepend">
                    <div>
                        <button type="button" class="btn btn-secondary">+</button>
                    </div>
                </div>
            </div>
        </td>
        <td>
            <div class="input-group mb-3">
                <input type="date" class="form-control">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox">
                    </div>
                </div>
            </div>
        </td>
        <td>
            <div class="input-group mb-3">
                <input type="date" class="form-control">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox">
                    </div>
                </div>
            </div>
        </td>
        <td><button type="button" class="btn btn-success btn-save">Save</button></td>
        <td><button type="button" class="btn btn-secondary btn-edit">Edit</button></td>
        <td><button type="button" class="btn btn-danger btn-del">Delete</button></td>
    </tr>`

    saveClient();
    deleteClient();
}

function saveClient() {
    const saveBtns = document.querySelectorAll('.btn-save');

    saveBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            let clientName = e.target.parentNode.parentNode.querySelector('.client-name input').value;
            console.log(clientName);

            clientContainer.innerHTML += `<tr>
            <th scope="row"><span class="fa fa-chevron-up"></span></span></th>
            <td class="client-name">${clientName}</td>`

            deleteClient();

        })

    })
}

function deleteClient() {
    const delBtns = document.querySelectorAll('.btn-del');
    delBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove();
        });
    });
}