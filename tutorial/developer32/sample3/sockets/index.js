/**
 * Socket.IOの処理
 */

module.exports = function (server) {

    const socketIo = require('socket.io')(server, { wsEngine: 'ws' });
    const io = socketIo.listen(server);

    // 接続
    io.sockets.on('connection', function (socket) {
        // 自クライアントに接続イベント（event1）を送信する
        socket.emit('event1', 'あなたが接続しました。');

        // 自クライアント以外に接続イベント（event2）を送信する
        socket.broadcast.emit('event2', '他のクライアントが接続しました。');

        // メッセージ入力イベント（event3）を受信する
        socket.on('', function (data) {
            if (!data) {
                return;
            }

            console.log('クライアントの入力値：' + data);

            // 全クライアントにメッセージ入力イベント（event4）を送信する

        });
    });
};
