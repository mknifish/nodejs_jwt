const jwt = require('jsonwebtoken');
const fs = require('fs');

// 受信したJWT
const receivedJWT = 'ここにJWT';

// 公開鍵の読み込み
const publicKey = fs.readFileSync('秘密鍵ファイルのパスを指定', 'utf8'); // 公開鍵ファイルのパスを指定

// JWTを検証する
jwt.verify(receivedJWT, publicKey, (err, decoded) => {
  if (err) {
    // 検証エラーが発生した場合の処理
    console.error('JWTの検証に失敗しました:', err);
  } else {
    // 検証に成功した場合の処理
    console.log('JWTの検証に成功しました:', decoded);
  }
});
