// configure the environment variables
require("dotenv").config({ path: "./app.env" });

// set the port
const PORT = process.env.PORT;

// for async errors
import "express-async-errors";

import express, { Application, Request, Response } from "express";

// security packages
import helmet from "helmet";
const xss = require("xss-clean");
import cors from 'cors'
import rateLimit from "express-rate-limit";

// initialize the express app
const app: Application = express();

// bring in middlewares
import {notFound} from "./src/middleware/not-found"
import {errorHandlerMiddleware} from "./src/middleware/error-handler"
import Routes from "./src/routes"

// security middlewares
app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors())
app.use(xss());
app.use(rateLimit({ windowMs: 60 * 1000, max: 60 }));

// app routes
// app.use('/api/v1', Routes)

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome the this cloud storage api")
})

// not found middleware
app.use(notFound)
// error handler middleware
app.use(errorHandlerMiddleware)

export default app;
