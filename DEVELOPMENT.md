# Documentation Development Guide

This folder contains the user manual for the GetWeightLoss Admin Portal, built with [Docusaurus](https://docusaurus.io/).

## Live Site

The documentation is deployed to GitHub Pages at:  
**https://terrence0205.github.io/getweightloss-admin/**

## Local Development

### Prerequisites

- Node.js 16.14 or higher
- npm or yarn

### Setup

1. Install dependencies:
   ```bash
   cd docs
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open http://localhost:3000 in your browser

The site will automatically reload as you edit markdown files.

### Building

To build a production-ready version:

```bash
npm run build
```

Output will be in the `build/` directory.

## File Structure

```
docs/
├── README.md                 # Overview & navigation
├── 01-getting-started.md     # Login, dashboard, concepts
├── 02-sales-leads.md         # Sales workflow
├── 03-orders.md              # Order management
├── 04-members.md             # Member profiles
├── 05-appointments.md        # Appointments
├── 06-chats.md               # Chat management
├── 07-documents.md           # Document handling
├── 08-common-tasks.md        # Cross-section skills
├── 09-faqs.md                # FAQs & troubleshooting
├── docusaurus.config.js      # Docusaurus configuration
├── sidebars.js               # Navigation sidebar structure
├── package.json              # Dependencies
├── src/
│   └── css/custom.css        # Custom styling
└── static/
    └── img/                  # Images & assets
```

## Editing Documentation

### Adding a new page

1. Create a new `.md` file in the `docs/` folder
2. Add frontmatter at the top:
   ```markdown
   ---
   title: My Page Title
   ---
   
   Content here...
   ```

3. Update `sidebars.js` to include the new page in navigation

### Updating existing pages

Simply edit the `.md` files. Changes are reflected immediately in development mode.

### Markdown features

Docusaurus supports extended Markdown:

- **Tabs**: Code examples in multiple languages
- **Callouts**: Info, warning, danger boxes
- **Code blocks**: Syntax highlighting, line highlighting
- **Links**: Cross-references between docs

See [Docusaurus docs](https://docusaurus.io/docs/markdown-features) for details.

## Deployment

Documentation is automatically deployed to GitHub Pages when changes are pushed to `main`:

1. Push your changes to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Site updates within ~1 minute at https://terrence0205.github.io/getweightloss-admin/

## Customization

### Colors & Styling

Edit `src/css/custom.css` to change:
- Brand colors (primary blue)
- Typography
- Layout
- Dark mode colors

### Navigation

Edit `sidebars.js` to reorganize or add sections to the sidebar.

### Site Configuration

Edit `docusaurus.config.js` for:
- Site title and description
- Navbar items
- Footer content
- Analytics

## Troubleshooting

### Port 3000 already in use

```bash
npm start -- --port 3001
```

### Build fails

Clear cache and rebuild:
```bash
npm run clear
npm run build
```

### Deployment not working

Check the GitHub Actions workflow:  
`.github/workflows/deploy-docs.yml`

Ensure the `gh-pages` branch exists in your repo.

## Support

For questions about:
- **Content**: Edit the `.md` files directly
- **Docusaurus features**: See https://docusaurus.io/docs
- **Deployment**: Check `.github/workflows/deploy-docs.yml`
