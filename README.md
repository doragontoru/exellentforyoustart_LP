# LP「Excellent For You Start」取扱説明書

この度は、LPテンプレートをご利用いただきありがとうございます。
簡単なカスタマイズ方法と、サーバーへの公開手順について説明します。

## 1. ファイル構成

```
exellentforyoustart_LP/
│
├── index.html       ... LPの本体です。文章の修正はここで行います。
├── style.css        ... デザイン（色、レイアウト）を指定するファイルです。
├── README.md        ... このファイルです。
│
├── js/
│   └── main.js      ... アニメーションを制御するファイルです。
│
└── img/
    └── (空)         ... 画像を格納するフォルダです。
```

## 2. 画像の差し替え方法

現在、LPにはダミーの画像が表示されています。これらを貴サイト用の画像に差し替えることで、オリジナリティを高めることができます。

1.  **画像を用意する**
    *   ヒーローセクションの背景画像、ロゴ、アイコンなど、LPで使用したい画像をご用意ください。
    *   Webで表示するため、ファイルサイズが大きすぎないように注意してください（1枚あたり500KB以下が目安です）。

2.  **`img/` フォルダに格納**
    *   用意した画像を、このフォルダ内の `img/` フォルダにすべて入れてください。

3.  **`index.html` を編集**
    *   `index.html` をテキストエディタで開きます。
    *   `<img>` タグの `src` 属性や、CSSで背景画像を指定している部分を、2で格納したご自身の画像ファイル名に書き換えます。

    **例：ロゴの差し替え**
    ```html
    <!-- 変更前 -->
    <img src="https://picsum.photos/seed/logo1/150/50" alt="導入企業ロゴ1">

    <!-- 変更後 (imgフォルダに logo_company_a.png を入れた場合) -->
    <img src="img/logo_company_a.png" alt="A社 ロゴ">
    ```

    **例：ヒーロー背景の差し替え（`style.css`）**
    ```css
    /* 変更前 */
    .hero {
        background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://picsum.photos/seed/hero/1200/800') no-repeat center center/cover;
    }

    /* 変更後 (imgフォルダに hero_background.jpg を入れた場合) */
    .hero {
        background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('img/hero_background.jpg') no-repeat center center/cover;
    }
    ```

## 3. サーバーへの公開手順

このLPは、HTML、CSS、JavaScriptだけで構成されているため、様々な方法で簡単に公開できます。
ここでは、無料で利用できる **GitHub Pages** を使った公開手順を説明します。

1.  **GitHubアカウントの作成**: まだ持っていない場合は、[GitHub公式サイト](https://github.com/)でアカウントを作成します。

2.  **新規リポジトリの作成**:
    *   GitHubにログインし、新しいリポジトリを作成します。
    *   リポジトリ名は任意です（例: `my-awesome-lp`）。
    *   「Public」を選択して作成します。

3.  **ファイルのアップロード**:
    *   作成したリポジトリのページで、「Add file」→「Upload files」を選択します。
    *   `index.html`, `style.css`, `README.md` と、`js`, `img` フォルダをすべてドラッグ＆ドロップしてアップロードします。
    *   画面下の「Commit changes」ボタンを押して、変更を確定します。

4.  **GitHub Pagesの設定**:
    *   リポジトリのページの「Settings」タブに移動します。
    *   左側のメニューから「Pages」を選択します。
    *   「Source」または「Branch」の項目で、「main」（または `master`）ブランチを選択し、「/ (root)」フォルダを選択して「Save」ボタンを押します。

5.  **公開完了**:
    *   設定が完了すると、ページの上部に「Your site is live at `https://<あなたのユーザー名>.github.io/<リポジトリ名>/`」といったURLが表示されます。
    *   このURLが、あなたのLPの公開アドレスです。反映には数分かかる場合があります。

以上で作業は完了です。ご不明な点があれば、お気軽にご質問ください。
