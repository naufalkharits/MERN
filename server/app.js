import dotenv from "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
// const { errorHandler } = require("./middleware/errorMiddleware");
// const cookieSession = require("cookie-session");
// const passportSetup = require("./passport");
// const passport = require("passport");
// const authRoute = require("./routes/auth");

const app = express();
const port = process.env.PORT;
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", userRouter);

// app.get("/", (req, res) => {
//     res.send("Hello, World!");
// });

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() =>
        app.listen(port, () => {
            console.log(port);
        })
    )
    .catch((err) => console.log(err));

// app.use("/api/users", require("./routes/userRoute"));

// app.use(errorHandler);

// app.listen(port, () => console.log(`Server started on port ${port}`));

// app.use(
//     cookieSession({
//         name: "session",
//         keys: ["fal"],
//         maxAge: 24 * 60 * 60 * 100,
//     })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use("/auth", authRoute);
