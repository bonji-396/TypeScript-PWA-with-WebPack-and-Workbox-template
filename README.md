# WebPack で TypeScript + PWA のテンプレート

WebPackを利用して、TypeScriptでPWAのフロントエンドアプリを作るためのテンプレートです。


## 主な技術構成
- TypeScript
- PWA
- Sass
- RxJS

## 導入

以下を実行
```zsh
npm install
```
### 開発利用パッケージ

これらのパッケージは主に開発環境の構築とビルドプロセスの自動化に使用されています。

- @types/serviceworker: Service Worker APIのTypeScript型定義ファイル。PWAの開発でService Workerを型安全に実装するために使用
- css-loader: webpackでCSSファイルを処理するためのローダー。CSSをJavaScriptモジュールとして扱えるようにする
- html-webpack-plugin: HTMLファイルを生成し、バンドルされたJavaScriptやCSSを自動で注入するwebpackプラグイン
- mini-css-extract-plugin: CSSを別ファイルとして抽出するwebpackプラグイン。パフォーマンス向上のためにCSSを分離する
- sass: 人気のあるCSSプリプロセッサー。より効率的なスタイル記述を可能にする
- sass-loader: webpackでSass/SCSSファイルを処理するためのローダー。SassをCSSにコンパイルする
- ts-loader: webpackでTypeScriptファイルを処理するためのローダー。TypeScriptをJavaScriptにコンパイルする
- typescript: JavaScriptに静的型付けを追加するプログラミング言語
- webpack: モジュールバンドラー。複数のファイルを1つにまとめ、最適化する
- webpack-cli: webpackをコマンドラインで使用するためのツール
- webpack-dev-server: 開発用のローカルサーバー。ホットリロードなどの開発支援機能を提供
- copy-webpack-plugin: 静的ファイルを出力ディレクトリにコピーするwebpackプラグイン
- workbox-webpack-plugin: PWAのService Worker生成を自動化するGoogleのWorkboxツールとwebpackの連携プラグイン
- rimraf: Node.jsでファイルやディレクトリを再帰的に削除するツール。`rm -rf`コマンドの代替として使用

## 開発用ローカルサーバー実行

```zsh
npm run clean
npm start
```

## ビルド
```zsh
npm run build
```