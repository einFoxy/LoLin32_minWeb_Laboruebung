var gateway = `ws://${window.location.hostname}/ws`;
var websocket;
window.addEventListener('load', onload);

function onload(event) {
    initWebSocket();
    initButton();
}

function initWebSocket() {
    console.log('Trying to open a WebSockeet connection. . . ');
    websocket= new WebSocket(gateway);
    websocket.onopen = onOpen;
    websocket.onclose = onClose;
    websocket.onmessage = onMessage;
}

function onOpen(event) {
    console.log('Connection opened');
}

function onClose(event) {
    console.log('Connection closed');
    setTimeout(initWebSocket, 2000);
}

//task 4: 
function onMessage(event) {     //when client recives a message from the ESP:
    var text;
    var len;

    console.log("package recived from ESP:")
    console.log(event.data);

    if (event.data.charAt(0) == 'O')  // ON / OFF
    {
        console.log("updating state")
        document.getElementById('state').innerHTML = event.data;
    }    
    
}

function initButton() {
    document.getElementById('bON').addEventListener('click', toggleON);
    document.getElementById('bOFF').addEventListener('click', toggleOFF);
}

function toggleON(event) {
    websocket.send('bON'); 
    console.log("toggleON!");
}

function toggleOFF(event) {
    websocket.send('bOFF'); 
    console.log("toggleOFF!");
}