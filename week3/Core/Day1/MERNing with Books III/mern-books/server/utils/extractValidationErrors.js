function extractValidationErrors(err) {
    const validationErrors = {};
    if (err.name === 'ValidationErrors') {
        for (const field in err.errors) {
            if (err.errors.hasOwnProperty(field)) {
                validationErrors[field] = err.errors[field].message;
            }
        }
    }
}