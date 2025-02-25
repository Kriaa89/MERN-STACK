# MERN Books - Server Side

## Project Structure
```bash
server/
├── config/
│   └── mongoose.config.js    # Database connection using Mongoose and environment variables
├── controllers/
│   └── book.controller.js    # CRUD operations for Book documents
├── models/
│   └── book.model.js         # Book Schema with validations
├── routes/
│   └── book.routes.js        # API endpoints routing 
├── .env                    # Environment variables (e.g., PORT, MONGODB_URI)
└── server.js               # Main Express server file
```

## Setup Instructions
1. Initialize the project:
   npm init -y
2. Install dependencies:
   npm install express mongoose cors dotenv
3. For development, install nodemon:
   npm install --save-dev nodemon
4. Run the server:
   npm run dev

## API Endpoints
- GET /book     - Retrieves all books
- POST /book    - Creates a new book
- GET /book/:id - Retrieves a single book by ID
- DELETE /book/:id - Deletes a book

## Controllers Explanation
Inside book.controller.js, the following built-in methods and patterns are used:

- **CreateBook(req, res)**  
  • Uses Mongoose’s .create() method to add a new book document  
  • Wraps the operation in a try/catch to handle errors  
  • Responds with res.json() to send the new book or res.status(400).json(error) on failure  

- **getAllBooks(req, res)**  
  • Uses Mongoose’s .find() to retrieve the entire list of books  
  • Sends the results via res.json(), handling any errors similarly  

- **getOneBook(req, res)**  
  • Uses .findById() to search for a book based on the URL parameter  
  • Sends the found book or an error response

- **deleteBook(req, res)**  
  • Uses .findByIdAndDelete() to remove a book document  
  • Returns the deleted document or an error if the operation fails

Each method leverages Express’s response methods:
- res.json(): To send JSON responses
- res.status(): To set the HTTP error status code before sending an error response

The use of try/catch blocks is crucial to manage asynchronous errors in modern JavaScript, ensuring robustness in handling failed database operations.

## Learning & Troubleshooting
- Ensure your .env file is properly set up (PORT, MONGODB_URI).  
- Focus on understanding Express middleware (req, res) and error handling (try/catch, res.status).  
- Learn how Mongoose validations work and review the model definitions in book.model.js.  
- Use console.log statements and Node debugger tools to trace errors.  
- Review the documentation for Express and Mongoose for more in-depth guides.
