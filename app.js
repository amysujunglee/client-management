const inputNewClient = document.querySelector('#new-client');
const addBtn = document.querySelector('.add-btn');
const clientList = document.querySelector('.client-list');


addBtn.addEventListener('click', addNewClient);

function addNewClient() {
    // To Do: if statment for empty input
    if (!inputNewClient.value) {
        console.log('Error');
    }

    const clientName = inputNewClient.value;

    const li = document.createElement('li');
    li.className = 'client';
    li.appendChild(document.createTextNode(clientName));

    clientList.appendChild(li);

    inputNewClient.value = '';
    inputNewClient.focus();
};