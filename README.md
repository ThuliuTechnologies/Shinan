 検索エンジン Shinan Ver.4.1
====
Overview
---
このスクリプトはサイトに埋め込むことにより
ページ内検索ができるようにするものです。

## Features
* 商用利用可能
* 軽量
* ページのタグ付けも可能

## Demo
* [DEMOページ](http://thuliu.webcrow.jp/demo/shinan_demo.html)

## Requirement
* Windows 98以降（現在、検索データを作成するソフトがWindows向けのみのため。）

## Usage
### 検索データと結果表示ページの作成
※すでに同じフォルダ内にfiles.datがある場合は、先に消してください。また、結果表示ページの文字エンコーディングはUTF-8にしてください。

* データ自動生成.exeを検索対象のhtmlファイルがあるフォルダに入れてください。その後、データ自動生成ソフトを起動して指示にしたがってください。
* 検索結果表示のページに以下の記述を行う。（必要に応じて書き換えてください。）
    `<div id="out"></div>`
    `<script type="text/javascript" src="shinan.js"></script>`

### 検索ボックスの設置
* formタグで検索結果表示のページに入力情報を送ってください。
* 検索結果表示のページに入力ボックスをtextfieldという名前で設置してください。
(name="textfield"とテキストボックスに記述)

### 各種ファイルの設置
* 検索結果表示のページとエンジン本体（shinan.js）、先ほどのソフトで生成されたfiles.datを同じフォルダに入れてください。

以上で準備は完了です。
検索結果表示のページを自由にアレンジしてください。

ver.4.1よりタグ付けとタグ検索が可能になりました。
また、ローカル環境で検索は利用できません。
#### [Shinan - Thuliu Technologies](http://thuliu.webcrow.jp/ja/shinan.html)も併せて参照してください。

## Licence
* Licenced MIT (データ自動作成ソフトを除く)
<https://opensource.org/licenses/mit-license.php>

## Copyright
* Copyright (c) 2016 Thuliu Technologies.
