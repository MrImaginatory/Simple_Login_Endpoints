import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${process.env.DB_NAME}`)
        console.log(`Database Successfully Connected At: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Databse Error: ", error);
        process.exit(1);
    }
}

export default connectDB;
