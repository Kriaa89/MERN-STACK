# MERN Books - Client Side

## Project Structure
```bash
client/
├── src/
│   ├── components/
│   │   └── Header.jsx       # Navigation header with links to Home and Add Book
│   ├── views/
│   │   ├── BookList.jsx     # Displays all books in a table format with links to details
│   │   ├── BookForm.jsx     # Form to create a new book; uses controlled inputs and POST request 
│   │   └── BookDetails.jsx  # Displays detailed book information and handles deletion ("Borrow")
│   ├── App.jsx              # Main component with routing setup
│   └── main.jsx             # Application entry point
└── package.json             # Dependencies and scripts
```

## Setup Instructions
1. Install dependencies with: 
   npm install
2. Run the development server (Vite):
   npm run dev

## API Integration
- Base URL: http://localhost:8000/api
- Endpoints:
  - GET /book     (retrieve all books)
  - POST /book    (create a new book)
  - GET /book/:id (retrieve one book)
  - DELETE /book/:id (delete a book)

## Component Details
- **BookList.jsx**: Fetches books using axios in useEffect; maps through the books array and links to book details.
- **BookForm.jsx**: Uses controlled inputs to capture book data and sends a POST request. On success, navigates back to Home.
- **BookDetails.jsx**: Extracts the book ID using useParams, shows book details and allows deletion via a DELETE request.
- **Header.jsx**: Provides consistent navigation across views.

## Troubleshooting & Tips
- Verify that the API base URL and endpoints in axios calls match your server configuration.
- Check your browser console and network tabs for error details.
- Focus on understanding useEffect and useState hooks for debugging data fetching issues.
- Review Vite and React documentation if hot module reloading or styling issues occur.
- Ensure that routing paths in App.jsx align with your component structure.
