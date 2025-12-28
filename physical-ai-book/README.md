# Physical AI Book

Welcome to the **Physical AI Book**, a comprehensive guide to understanding and implementing artificial intelligence in physical systems. This book explores the intersection of AI and robotics, focusing on how intelligent agents can interact with and control physical environments.

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator, with a custom UI/UX design for educational content.

## About This Book

This book is designed for students, developers, and educators interested in **Physical AI** - the integration of artificial intelligence with physical systems such as robots, autonomous vehicles, and smart environments. You'll learn how to build AI systems that can perceive, reason about, and act in the physical world.

## Modules

Throughout this book, you'll explore:

- **Module 1**: The Robotic Nervous System (ROS 2) - Understanding how robots communicate and coordinate
- **Module 2**: Digital Twins (Gazebo & Unity) - Creating virtual environments for simulation and testing
- **Module 3**: The AI-Robot Brain (NVIDIA Isaac™) - Implementing intelligent control systems
- **Module 4**: Vision-Language-Action (VLA) - Building systems that perceive, understand, and act

## UI/UX Features

This site features a custom, professional design optimized for educational content:

- **Modern Color Scheme**: Professional blue-based palette with optimal contrast
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Enhanced Readability**: Carefully chosen typography and spacing for long-form content
- **Intuitive Navigation**: Clear information architecture for educational materials
- **Accessibility**: WCAG 2.1 AA compliant design with proper contrast ratios

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
