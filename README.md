# 運動会 短距離走得点板

運動会の短距離走の順位を入力して、チームごとの得点を集計するアプリです。スマートフォン・PC のブラウザーで利用できます。

**アプリを開く:** https://kawaitomohiro.github.io/tankyori-tokutenban/

## 主な機能

- 2〜6チーム、2〜10コースに対応
- 順位ごとの得点、学年名、チーム名・色を設定
- 同着、対象外の順位を記録
- 学年ごとの得点・履歴と全学年の合計を表示
- 履歴の編集・削除、直前の送信取り消し
- ダークモード／ライトモード、縦／横レイアウト

## データについて

得点や設定は利用中のブラウザーの `localStorage` に保存されます。サーバーや GitHub には送信されないため、別の端末・ブラウザーとは共有されません。ブラウザーのデータを消去すると記録も消えるので、必要な記録は消去前に控えてください。

## GitHub Pages への公開

このリポジトリには GitHub Actions による Pages デプロイ設定があります。

1. リポジトリの **Settings → Pages** を開く
2. **Build and deployment → Source** を **GitHub Actions** に設定
3. `main` ブランチへ push（または Actions の **Deploy to GitHub Pages** を手動実行）
4. Actions のデプロイ完了後、上記の URL で公開を確認

## ローカルで確認

リポジトリのルートで次を実行し、ブラウザーで http://localhost:8000 を開きます。

```bash
python3 -m http.server 8000
```

## ファイル

- `index.html` — GitHub Pages で公開するアプリ本体
- `code.gs` — Google Apps Script で公開する場合のエントリーポイント（GitHub Pages では使用しません）
