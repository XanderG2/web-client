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

function executeFunction() {
  var selectedOption = document.querySelector('input[name="option"]:checked').value;
  if (selectedOption === "option1") {
    style1();
  } else if (selectedOption === "option2") {
    style2();
  }
}

function style1() {
  const p = [...document.getElementsByTagName("p")];
  const inputs = [...document.getElementsByTagName("input")];
  const buttons = [...document.getElementsByTagName("button")];
  document.body.style.background = "linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(171,14,72,1) 34%, rgba(147,18,158,1) 59%, rgba(61,35,236,1) 100%";
  for (let i = 0; i < p.length; i++) {
    p[i].style.borderRadius = "5px";
    p[i].style.background = "#ff5773";
  }
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.borderRadius = "5px";
    inputs[i].style.background = "#f042ea";
  }
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.borderRadius = "5px";
    buttons[i].style.background = "#d11f3d";
  }
  document.getElementById("submit").innerText = "Submit";
  document.getElementById("send").innerText = "Send";
}

function style2() {
  const p = [...document.getElementsByTagName("p")];
  const inputs = [...document.getElementsByTagName("input")];
  const buttons = [...document.getElementsByTagName("button")];
  document.body.style.background = "white";
  for (let i = 0; i < p.length; i++) {
    p[i].style.borderRadius = "0px";
    p[i].style.background = "none";
  }
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.borderRadius = "4px";
    inputs[i].style.background = "#ffffff";
  }
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.borderRadius = "25px";
    buttons[i].style.background = "#ffffff";
  }
  document.getElementById("submit").innerText = "⬆";
  document.getElementById("send").innerText = "⬆";
  document.getElementById("submit").style.background = "#3f3fde";
  document.getElementById("send").style.background = "#3f3fde";
}