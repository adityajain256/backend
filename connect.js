import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://loginprc:adityajain@cluster0.tcuyj9n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

export default connectDb;