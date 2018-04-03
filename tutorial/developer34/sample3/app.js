//------------------------------------------------------
//  サンプルソース3
//    Socket.IO を利用してリアルタイム通信を行う
//------------------------------------------------------

// モジュールのロード
var express = require('express');
var routes = require('./routes/index');

var app = express();

// ルーティングの設定をroutes/index.js から読み込む
app.use('/', routes);

// views/ フォルダ以下のテンプレートを利用する
app.set('views', './views');

// テンプレートエンジンにHandlebars.jsを利用する
app.set('view engine', 'hbs');

// public/ フォルダ以下の静的ファイルを読み込む
app.use(express.static('public'));

// サーバオブジェクトを外部ファイルへエクスポートする
module.exports = app;
