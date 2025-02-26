import {model, Schema} from 'mongoose';
const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title name is required!"],
            minlength: [2, "Title must be at least 2 characters"],
            maxlength: [255, "Title cannot be more than 255 characters"]
        },
        authorName: {
            type: String,
            required: [true, "Author is required!"],
            minlength: [5, "Author must be at least 5 characters long!"],
            maxlength: [255, "Author cannot be more than  255 characters"]
        },
        pages: {
            type: Number,
            required: [true, "Number of pages  is required!"],
            min: [1, "Book must have at least 1 pages !"]
        },
        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Book = model("Booki", BookSchema);
export default Book;
