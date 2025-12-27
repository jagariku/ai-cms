# GitHub Copilot Instructions for Hearthstone Battlegrounds Blog

## Project Context

This is a Jekyll-based blog focused on Hearthstone Battlegrounds guides. Articles are written in Japanese, using Markdown with front matter. The site integrates Blizzard's Hearthstone API to fetch and display latest game data (heroes, minions, buddies).

## Coding Guidelines

- Use Ruby for scripts and Jekyll plugins.
- Environment variables for API credentials (.env file).
- Data stored in \_data/ as JSON/YAML.
- Build with `bundle exec jekyll build`.

## Article Writing Guidelines

- Write in Japanese.
- Use Jekyll front matter: title, date, categories (hearthstone battlegrounds).
- Include links to official Hearthstone site.
- Reference API data using Liquid tags (e.g., {% for minion in site.data.minions %}).
- Focus on beginner to intermediate players.
- Provide strategic advice based on latest data.

## API Usage

- Blizzard Hearthstone API for cards, heroes, etc.
- Endpoints: /hearthstone/cards with params set=battlegrounds, locale=ja_JP.
- Handle authentication with OAuth2.
- Filter data appropriately (e.g., collectible for minions).

## Best Practices

- Keep code secure: no hardcoded secrets.
- Update data regularly with scripts.
- Test builds locally before committing.
- Follow Hearthstone terms and avoid copyright issues.

## Response Style

- Be helpful and concise.
- Suggest code snippets in Ruby/Markdown.
- Explain changes clearly.
