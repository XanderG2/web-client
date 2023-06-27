
var socket = io("https://chat-server.xangil.repl.co");

var chat_handle = "x";
var message_to_send = "";

socket.on("connect", function () {      socket.emit("message", chat_handle + " has entered the chat");

  socket.on("broadcast", display_message);
});


    

function chat(message) {
    message_to_send = chat_handle + ": " + message;
    socket.emit("message", message_to_send);
}

function display_message(message) {
  if (message_to_send != message) {
    console.log("\n" + message);
  }
}