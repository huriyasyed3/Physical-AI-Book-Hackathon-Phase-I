# Quickstart: Docusaurus Chapter Tasks

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

## Setup Instructions

1. **Install Docusaurus**:
   ```bash
   npx create-docusaurus@latest website classic
   cd website
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Create the book structure**:
   ```bash
   mkdir -p docs/chapter-1
   ```

4. **Create lesson files**:
   ```bash
   touch docs/chapter-1/lesson-1.md
   touch docs/chapter-1/lesson-2.md
   touch docs/chapter-1/lesson-3.md
   ```

## Configuration

1. **Update `docusaurus.config.js`** to include your site metadata:
   ```javascript
   module.exports = {
     title: 'Physical AI Book',
     tagline: 'Exploring the intersection of artificial intelligence and physical systems',
     // ... other configuration
   };
   ```

2. **Update sidebar configuration** in `sidebars.js`:
   ```javascript
   module.exports = {
     tutorial: [
       {
         type: 'category',
         label: 'Chapter 1',
         items: ['chapter-1/lesson-1', 'chapter-1/lesson-2', 'chapter-1/lesson-3'],
       },
     ],
   };
   ```

## Adding Content

1. **Edit lesson files** in the `docs/` directory using Markdown
2. **Use Docusaurus directives** for enhanced features:
   ```markdown
   import Note from '@theme/Note';

   <Note>
   This is an important concept to remember.
   </Note>
   ```

## Building and Deployment

1. **Build the static site**:
   ```bash
   npm run build
   ```

2. **Serve the built site locally**:
   ```bash
   npm run serve
   ```

3. **Deploy** to your preferred hosting platform (GitHub Pages, Netlify, Vercel, etc.)