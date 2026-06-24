import cookieParser from "cookie-parser";
import express from "express";
import { authRouter } from "./features/auth/routes";

// The Express app with middleware + routes, but no listen() — so tests can
// drive it with Supertest while index.ts owns binding the port.
export const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
