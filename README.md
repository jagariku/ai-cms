# AI-Powered CMS

このプロジェクトは、Jekyll ベースの AI 活用 CMS です。GitHub Copilot を使って VSCode 上で Markdown 記事を作成し、AI で処理（将来拡張）して GitHub Pages にデプロイできます。

## セットアップ

1. Ruby と Bundler をインストール。
2. `bundle install` を実行。
3. 記事を `_posts/` に Markdown で追加。
4. `bundle exec jekyll serve` でローカルプレビュー。
5. GitHub にプッシュし、Pages を有効化。

## 使用方法

- VSCode で GitHub Copilot を使って記事を書く。
- ビルドは GitHub Pages が自動で行う。

## AI 機能

- 記事の要約を自動生成（OpenAI API 使用）。

## テーマ

カスタムテーマ "Navy Theme" を採用。紺色を基調とした見やすくユニークなデザイン。

- 環境変数 `OPENAI_API_KEY` を設定してください。
- ローカル: `OPENAI_API_KEY=your_key bundle exec jekyll serve`
- GitHub Actions: リポジトリの Secrets に `OPENAI_API_KEY` を追加。
