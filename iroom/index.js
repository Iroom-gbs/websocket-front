const socket = new WebSocket("ws://0.0.0.0:8080/ws")

socket.addEventListener("open", () => {
    console.log("websocket open")
})

socket.addEventListener("message", receive);

function submit(ele) {
    if (ele.value !== "" && event.key === 'Enter') {
        //Submit 되면 실행
        const div = document.getElementById("message")

        //ele.value 값에 유저가 입력한 값이 들어 있음.
        //div.innerHTML += "> " + ele.value + "<br>"

        socket.send(ele.value);

        //강제로 채팅 치면 아래로 스크롤하기
        div.scrollTop = div.scrollHeight;


        //입력창 비우기
        ele.value = "";
    }
}

function receive(ele) {
    const div = document.getElementById("message")
    div.innerHTML += "> " + ele.data + "<br>"
    div.scrollTop = div.scrollHeight;
}