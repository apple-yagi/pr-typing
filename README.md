# PR Typing ⌨️

プレスリリースの文章でタイピングをするWebアプリケーション

## Why i made 👨‍🍳

プレスリリースの文章、ちゃんと読んでますか？  

私は画像しか見てません。

しかし、文章の中にこそ重要な情報が詰まっていると思っています。  
そこで文章を一言一句ちゃんと読むために、プレスリリースの文章でタイピングゲームができるようにしてみました。

これでプレスリリースの文章を一言一句、頭に刻み込むことができるはずですね🤪

## Let's play 🎮

[PR Typing](https://pr-typing.netlify.app/)

## What technology is used 🚀

### Frontend

- React / TypeScript
- [vite](https://ja.vitejs.dev/)
- [Stitches](https://stitches.dev/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

### Backend

- Python3.9
- Serverless Framework(AWS Lambda / API Gateway)

## Point

### プレスリリースの本文をローマ字に変換する

タイピングゲームをするにあたり、ローマ字が必要だったため、試行錯誤しました。

試してみてダメだった方法

- [kuroshiro](https://kuroshiro.org/README.jp.html)というライブラリを用いて、ブラウザ上でローマ字変換しようとしましたが、dictionaryがなくて断念しました
- [この記事](https://developermemo-blog.herokuapp.com/webapp-dev/155/)を参考に、既存のAPI経由でローマ字変換しようとしましたが、CORSに阻まれて断念しました

はじめは既存のライブラリやAPIを使用してやろうとしてましたが、なかなかうまくいかなかったので、[API](https://github.com/apple-yagi/pr-typing/tree/main/kanji-to-romaji-api)を建てました。

## Finally 👋

<p style="font-size: 40px; text-align: center;">This is Hackthon!!</p>
