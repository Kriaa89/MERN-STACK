React Blocks Project
This project recreates the "Plotting your Blocks" assignment using React Components and CSS styling. It demonstrates the use of functional components, component hierarchy, and CSS styling in React.

Project Structure
Code
react-blocks/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── MainContent.jsx
│   │   ├── Subcontent.jsx
│   │   └── Advertisement.jsx
│   ├── App.jsx
│   └── App.css
Components Overview
Functional Components
App: Root component that renders the main layout.
Header: Top section of the layout.
Navigation: Left sidebar section.
MainContent: Central content area containing Subcontent and Advertisement.
Subcontent: Three identical blocks within MainContent.
Advertisement: Bottom section within MainContent.
Component Hierarchy
Code
App
├── Header
├── Navigation
└── MainContent
    ├── Subcontent (x3)
    └── Advertisement
Technologies Used
React 18
Vite
CSS3
Learning Objectives Achieved
Created and nested functional components.
Implemented component-based architecture.
Applied CSS styling to React components.
Practiced component reusability.
