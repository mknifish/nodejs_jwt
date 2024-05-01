const jwt = require('jsonwebtoken');
const fs = require('fs');

// シークレットキー（秘密鍵）
const secretKey = fs.readFileSync('秘密鍵ファイルのパスを指定'); // 秘密鍵ファイルのパスを指定

// ヘッダー情報
const header = {
    "alg": "ES256", // 使用するアルゴリズム
    "kid": "使用するキー情報",// 使用するキー情報
    "typ": "JWT" // トークンのタイプ
  };

// ペイロード情報
const payload = {
    "iss": "Issuer ID",// Issuer IDを指定
    "iat": Math.floor(Date.now() / 1000), // トークンの発行日時（現在時刻）
    "exp": Math.floor(Date.now() / 1000 + 20 * 60), // トークンの有効期限（現在時刻）
    "aud": 'appstoreconnect-v1',
    "scope": [
        "GET /v1/apps?filter[platform]=IOS"
    ] 
};

// JWTの生成
const token = jwt.sign(payload, secretKey, { algorithm: 'ES256', header });

console.log(token);
