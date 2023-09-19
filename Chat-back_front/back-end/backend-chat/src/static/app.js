hhhh;
/* eslint-disable prettier/prettier */
const socket = io('http://localhost:3000');
const msgBox = document.getElementById('inputMessage');
const email= document.getElementById('inputEmail');
const msgCont = document.getElementById('messages-container');
const sendBtn = document.getElementById('buttonMessage');

const messages = [];
function getMessages() {
    fetch('http://localhost:3000/api/chat').then((response) => response.json()).then((data) => {
        loadData(data);
        data.forEach((el) => messages.push(el));
    }).catch((error) => console.error(error));
}

getMessages();

function sendEvent(email, e)
{
    sendMessage({email : email.value, text: e.target.value});
    e.target.value = '';
}

//send message when user prent enter

msgBox.addEventListener('keydown', (e) =>{
    if(e.keyCode !== 13) return ;
    sendEvent(email, e);
});

//send message when user pres button

sendBtn.addEventListener('click', (e) =>{
    sendEvent(email, e);
})

// display a message

function loadData(data){
    let messages = '';
    data.map((message) => {
        messages += `<li class="bg-success p-2 rounded mb-2 text-light">
            <span class="fw-bolder"> ${message.email} : </span>
            ${message.text}
         </li>`
    });
    msgCont.innerHTML = messages;
}

//for socket.io - emit senMessage event

function sendMessage(message) {
    socket.emit('sendMessage', message);
}

//listen to newMessage event

socket.on('recMessage', (message) =>{
    messages.push(message);
    loadData(messages);
});