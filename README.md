# 街洋食アーカイブ — GitHubへの公開手順

GitHub Desktop（無料のアプリ）を使う方法です。コマンド入力は一切不要で、
ボタン操作だけで公開・更新ができます。今後、写真の差し替えや文章の修正をする
際も同じ手順で更新できます。

---

## 最初の1回だけ行う準備

### 1. GitHubアカウントを作る
すでにお持ちの場合はスキップしてください。
https://github.com/ にアクセスし、「Sign up」から無料アカウントを作成します。

### 2. 新しいリポジトリ（保管庫）を作る
GitHubにログインした状態で、右上の「+」→「New repository」を選びます。

- Repository name: `machi-yoshoku-archives`（好きな名前でOK）
- Public を選択
- 「Add a README file」はチェックしなくてOK（このzipに既に入っているため）
- 「Create repository」をクリック

### 3. GitHub Desktopをインストール
https://desktop.github.com/ からダウンロードし、インストールします。
起動したら、さきほどのGitHubアカウントでログインします。

### 4. リポジトリをパソコンに複製（クローン）する
GitHub Desktopの「File」→「Clone repository」を選び、
手順2で作った `machi-yoshoku-archives` を選んでクローンします。
保存先フォルダの場所は覚えておいてください。

### 5. サイトのファイルをコピーする
このzipを解凍し、中身（index.html、css、js、images、assets、
robots.txt、sitemap.xml）を、手順4でクローンしたフォルダの中に
そのままコピー＆ペーストします。

### 6. GitHub Desktopで公開する
GitHub Desktopに戻ると、追加されたファイルが自動的に一覧表示されます。
画面左下の「Summary」欄に何か一言（例：「初回公開」）を入力し、
「Commit to main」ボタンを押します。
続けて画面上部の「Push origin」ボタンを押せば、GitHubへのアップロードが完了です。

### 7. GitHub Pagesを有効にする
GitHubのリポジトリページを開き、「Settings」→ 左メニューの「Pages」を選びます。
「Branch」を `main` 、フォルダを `/ (root)` にして「Save」を押します。
数分待つと、ページ上部に公開URL（例：`https://ユーザー名.github.io/machi-yoshoku-archives/`）
が表示されます。これが完成したサイトのURLです。

---

## 2回目以降の更新方法

1. ローカルのフォルダ内のファイルを直接編集・差し替えます
   （例：`images/menu-2000-curry.jpg` を新しい写真に置き換える）
2. GitHub Desktopを開く → 変更されたファイルが自動表示される
3. 「Summary」に変更内容を一言入力 → 「Commit to main」
4. 「Push origin」を押す

これだけで数分後にはサイトに反映されます。

---

## 任意：公開URLが決まったら

`index.html` と `sitemap.xml` 内にある仮のURL
（`https://kitchenabc.example/`）を、実際の公開URLに置き換えると、
SNSシェア時のリンクカードや検索エンジン向けの情報がより正確になります。
（必須ではありません。差し替えたい場合はお知らせいただければ反映します。）
