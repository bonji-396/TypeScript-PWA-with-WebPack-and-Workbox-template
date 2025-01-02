# WebPack で TypeScript + PWA のテンプレート

WebPackとWorkBoxを利用して、TypeScriptでPWAのフロントエンドアプリを作るためのテンプレートです。

## 主な技術構成
- Node.js
- TypeScript
- PWA
- Sass
- RxJS


## 行いたいこと

基本的には、PWAのフロントエンドをTypeScriptで記述し作成するためのテンプレートとして利用したい。
最低限以下の導入が済んだ状態を条件としています。

- `manifest.json`  
まずは、拡張機能やプログレッシブウェブアプリ（PWA）の動作を定義するJSON形式のファイルを初期で導入。
- `serivce-worker.ts`  
TypeScriptにて、service-worker.tsを書き、service-worker.jsをにコンパイルして利用する。またキャッシュ戦略や同期処理なども、PWAライブラリ等を利用せずに、自身で実装したいため最低限のコードのみを記載。
- `sass`  
scssの利用に慣れているので、sassの導入はしたかった。
- `rxjs`  
機能として利用するJavaScript用ライブラリをサンプル導入例として、リアクティブプログラミングライブラリを選択。

また、開発効率を上げるため、開発サーバーでの自動更新で反映させたい。


## 導入

以下を実行
```zsh
npm install
```
### 開発利用パッケージ

これらのパッケージは主に開発環境の構築とビルドプロセスの自動化に使用されています。

|パッケージ|説明|
|---|---|
|@types/serviceworker|Service Workerのための TypeScript型定義ファイル。PWAの開発において、Service WorkerのAPIを型安全に利用するために必要です。|
|css-loader|webpackでCSSファイルを処理するためのローダー。CSSをJavaScriptモジュールとして扱えるようにする|
|html-webpack-plugin|HTMLファイルを生成し、バンドルされたJavaScriptやCSSを自動で注入するwebpackプラグイン|
|mini-css-extract-plugin|CSSを別ファイルとして抽出するwebpackプラグイン。パフォーマンス向上のためにCSSを分離する|
|sass|SASSプリプロセッサのNode.js実装。SCSSファイルをCSSにコンパイルするために使用します。|
|sass-loader|webpackでSass/SCSSファイルを処理するためのローダー。SassをCSSにコンパイルする|
|ts-loader|webpackでTypeScriptファイルを処理するためのローダー。TypeScriptをJavaScriptにコンパイルする|
|typescript|JavaScriptに静的型付けを追加するプログラミング言語。型安全性とIDEのサポートを強化します。|
|webpack|モジュールバンドラー。複数のファイルを1つにまとめ、最適化する|
|webpack-cli|webpackをコマンドラインで使用するためのツール|
|webpack-dev-server|開発用のローカルサーバー。ホットリロードなどの開発支援機能を提供|
|copy-webpack-plugin|静的ファイルを出力ディレクトリにコピーするwebpackプラグイン|
|workbox-webpack-plugin|PWAのService Worker生成を自動化するGoogleのWorkboxツールとwebpackの連携プラグイン|
|rimraf|Node.jsで`rm -rf`コマンドと同等の機能を提供するツール。ビルド前のdistディレクトリのクリーンアップなどに使用します。|


## 開発用ローカルサーバー実行

```zsh
npm run clean
npm start
```

## ビルド
```zsh
npm run build
```

## ビルド&プレビュー
```zsh
npm run preview
```
