//------------------------------------------------------
//  サンプルソース1
//    npm start コマンドでアプリケーションを起動する
//------------------------------------------------------

// モジュールのロード
const express = require('express');
const routes = require('./routes/index');

const app = express();

// ルーティングの設定をroutes/index.js から読み込む
app.use('/', routes);

/**
 * サーバの設定
 */
// ポート番号の指定
const port = process.env.PORT || 3000;
// 接続を待ち受ける
app.listen(port, function () {
    // ログ出力
    console.log('Example app listening on port ' + port + '!');
});
