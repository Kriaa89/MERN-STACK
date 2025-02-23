import {model, Schema} from 'mongoose';
const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "First name is required!"],
            minlength: [2, "Title must be at least 2 characters"],
            maxlength: [255, "Title cannot be more than 255 chracaters"]
        },
        author: {
            type: String,
            required: [true, "Author is required!"],
            minlength: [5, "Author must be at least 5 characters long!"],
            maxlength: [255, "Author cannot be more than  255 characters"]
        },
        ages: {
            type: Number,
            required: [true, "Number of pages  is required!"],
            min: [16, "Book must have at least 1 pages !"]
        },
        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Book = model("Book", BookSchema);
export default Book;
