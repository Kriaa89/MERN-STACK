# React Router Practice

A React application demonstrating dynamic routing capabilities using react-router-dom.

## Project Overview

This project showcases different routing scenarios in a React Single Page Application (SPA):
- **Basic routing:** Displays a welcome message at `/home`
- **Dynamic parameter handling:** Renders content based on URL parameters, handling numbers, words, and styled text.
- **Multiple parameter routing with styling:** Dynamically displays text with customizable text and background colors.

## Routes Implemented

1. `/home` - Displays a welcome message.
2. `/:number` - Shows a number or converts it to a word display based on type.
3. `/:word` - Displays the provided word.
4. `/:word/:textColor/:bgColor` - Displays the word with dynamic text and background colors.

## Technical Concepts

### Parameter Handling
- **Dynamic Routes:** Using `useParams()` to extract URL parameters.
- **Type Checking:** Using `isNaN(+id)` to differentiate between numbers and words.
- **Conditional Rendering:** Ternary operators to decide display output.
- **Conditional Rendering:** Uses a ternary operator:
  isNaN(+id) ? <h1>The word is: {id}</h1> : <h1>The number is: {id}</h1>

### Flow Chart Explanation

---

```mermaid
flowchart TD
    A[URL Parameter (/something)]
    B{isNaN(+id)?}
    C[Show Word]
    D[Show Number]
    A --> B
    B -- Yes --> C
    B -- No --> D
```

---

### Dynamic Styling
- **Inline Styles:** URL parameters used to set text color and background color dynamically.

## Setup Instructions

1. Clone the repository.
2. Install dependencies.
3. Run the development server using your preferred command (e.g., `npm start` or `yarn dev`).

## Route Examples

- http://localhost:5173/home → Welcome message.
- http://localhost:5173/42 → "The number is: 42".
- http://localhost:5173/hello → "The word is: hello".
- http://localhost:5173/hello/blue/red → "hello" (styled with blue text on red background).
