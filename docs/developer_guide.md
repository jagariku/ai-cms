# Developer Guide

## Prerequisities
- **Ruby**: 3.0+
- **Bundler**: `gem install bundler`
- **Battle.net Account**: For API credentials (if fetching data).
- **OpenAI API Key**: For AI summarization features.

## Setup

1. **Install Dependencies**
   ```bash
   bundle install
   ```

2. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_key
   CLIENT_ID=your_battlenet_client_id
   CLIENT_SECRET=your_battlenet_client_secret
   ```

## Development Workflow

### Running the Site
To build and serve the site locally:
```bash
bundle exec jekyll serve
```
Access at `http://localhost:4000/ai-cms`.

### Managing Content
- Create new posts in `_posts/` following the format `YYYY-MM-DD-title.md`.
- Use VSCode with GitHub Copilot for assisted writing.

### Working with Data
To update the Hearthstone Battlegrounds hero data:
```bash
ruby fetch_heroes.rb
```
*Note: Requires valid Battle.net credentials in `.env`.*

## AI Features
The `_plugins/ai_processor.rb` plugin automatically runs during build.
- **To disable**: Unset `OPENAI_API_KEY` or remove the plugin from `_config.yml` (if configured there).
- **Cost Warning**: Each build triggers API calls for **all** posts. For large sites, consider caching or manual triggering logic.

## Deployment
Pushing to the `main` branch triggers the GitHub Pages build action.
Ensure the repository Settings > Secrets contains your `OPENAI_API_KEY` for the production build to generate summaries.
