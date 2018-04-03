//------------------------------------------------------
//  サンプルソース2
//    HTMLテンプレートエンジン（Handlebars.js）を利用して
//    処理に応じて表示内容を変更する
//------------------------------------------------------

// モジュールのロード
const express = require('express');
const routes = require('./routes/index');

const app = express();

// ルーティングの設定をroutes/index.js から読み込む
app.use('/', routes);

// views/ フォルダ以下のテンプレートを利用する
app.set('views', './views');

// テンプレートエンジンにHandlebars.jsを利用する
app.set('view engine', 'hbs');

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
