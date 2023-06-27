const message = document.getElementById("message");
const username = document.getElementById("user");
var socket = io("https://chat-server.xangil.repl.co");
var message_to_send = "";

socket.on("connect", function () {
  socket.on("broadcast", display_message);
});

function submitUser() {
  let chat_handle = username.value;
  socket.emit("message", chat_handle + " has entered the chat");
  document.getElementById("login").style.display = "none";
  document.getElementById("chat").style.display = "block";
}

function submitMessage() {
  chat(message.value, username.value)
}
  

function chat(message, chat_handle) {
    message_to_send = chat_handle + ": " + message;
    socket.emit("message", message_to_send);
}

function display_message(message, chat_handle) {
    const l = document.createElement("li");
    l.innerText = message;
    document.getElementById("messages").prepend(l);
    console.log("\n" + message);
}