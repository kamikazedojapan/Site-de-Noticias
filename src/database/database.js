import mongoose from 'mongoose';

const connectDatabase = () => {
    console.log("Connecting to the database...");

    mongoose.connect("mongodb+srv://kamikazedojapan:56917400@databaseone.7kwja.mongodb.net/?retryWrites=true&w=majority&appName=DatabaseOne",)
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
}

export default connectDatabase;