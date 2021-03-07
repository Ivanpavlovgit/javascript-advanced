async function loadContacts() {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await response.json();
    const phonebook = document.getElementById('phonebook');

    function displayContact(contact) {
        const contactView = e('li', {}, `${contact.person}: ${contact.phone}`
            , e('button', {onClick: event => deleteContact(event)}, 'Delete'));
        phonebook.appendChild(contactView);

        async function deleteContact(event) {
            //to not go back to main view
            event.preventDefault();
            const contactId = contact._id;
            //to check if ID is correct
            console.log(contactId);
            //to check if you want to delete the contact(fancy stuff)
            const confirmed = confirm(`Are you sure you hate ${contact.person} and want to destroy him/her?`);
            if (confirmed) {
                const response = await fetch('http://localhost:3030/jsonstore/phonebook/' + contactId, {
                    method: 'delete'
                });
                const data = await response.json();
                //to check if Contact is correct
                console.log(data);
                event.target.parentNode.remove();
                alert('Person destroyed, hope you are happy now')
            }
        }
    }

    Object.values(data).map(displayContact);
}
async function createContact(event) {
    event.preventDefault();
    //it would be so much better with FormData() :(
    const contactPerson = document.getElementById('person').value;
    const contactPhone = document.getElementById('phone').value;
    document.getElementById('person').value='';
    document.getElementById('phone').value='';
    const contact = {
        person: contactPerson,
        phone: contactPhone
    }
    //valid fields check
    if (contact.person === '' ||
        contact.phone === ''){
        return alert('All fields are required');
    }
        const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        });
    if (response.ok) {
        alert(`You have created a new Monster ${contact.person}`);
        //added Create button to hsow all contacts after successful creating for easier debuging
        loadContacts();
    }
}
function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadContacts);
    document.getElementById('btnCreate').addEventListener('click', createContact);
}
attachEvents();


function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) === 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}