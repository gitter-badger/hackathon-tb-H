// モジュールのロード
const express = require('express');
const router = express.Router();

/**
 * ルーティングの設定
 */

// ルートパス「/」にアクセスした場合の処理
router.get('/', function(request, response) {
    // views/index.hbs を表示する
    response.render('index');
});

// ルーティングオブジェクトを外部ファイルへエクスポートする
module.exports = router;
