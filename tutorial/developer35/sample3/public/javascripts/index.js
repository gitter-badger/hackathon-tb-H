// socket.ioの処理開始
const socket = io.connect();

// 自クライアントの接続イベント（event1）を受信する
socket.on('event1', function (data) {
    // 画面上にメッセージを表示
    $('#thread').prepend('<p>' + data + '</p>');
});

// 自クライアント以外の接続イベント（event2）を受信する
socket.on('event2', function (data) {
    // 画面上にメッセージを表示
    $('#thread').prepend('<p>' + data + '</p>');
});

// メッセージを入力する
function sendMessage() {
    const message = prompt('メッセージを入力してください。\n' +
                    'このメッセージはすべてのクライアントに送信されます。');

    // メッセージ入力イベント（event3）を送信する
    
}

// メッセージ表示イベント（event4）を受信する
socket.on('', function (data) {
    // 画面上にメッセージを表示
    $('#thread').prepend('<p>' + '</p>');
});
