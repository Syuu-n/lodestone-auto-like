# lodestone-auto-like
FFXIV Lodestone ブログの1ページ目にある日記すべてに対して「いいね」を実行するE2Eテスト。

# 使い方
1. `.env_local` をコピーし `.env` を作成
2. 作成した `.env` へID、パスワード、ワンパスワードを入力
4. CHARACTER_INDEX はキャラクター選択画面の上から何番目のキャラクターであるか
3. `testcafe chrome test.js`
