//------------------------------------------------------
//  サンプルソース4
//    jQueryを利用して要素内の値の取得・設定を行う
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

// public/ フォルダ以下の静的ファイルを読み込む
app.use(express.static('public'));

// サーバオブジェクトを外部ファイルへエクスポートする
module.exports = app;
