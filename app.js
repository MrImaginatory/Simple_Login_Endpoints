import cookieParser from "cookie-parser";
import cors from "cors";
import express, { urlencoded } from "express";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }))
app.use(cors());
app.use(cookieParser());

// importing routes

import loginRouter from "./routes/user.route.js";

app.use("/credentials", loginRouter);

export { app };
