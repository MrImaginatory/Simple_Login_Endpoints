import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./dataBase/db.js";

dotenv.config()

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server Started at Port: ${process.env.PORT}`);
        })
    }).catch((error) => {
        console.log("Error Connecting DB in Index.js: ", error);
    });