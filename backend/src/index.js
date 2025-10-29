import express from "express";
import cors from "cors";
import testRoute from "./routes/testRoute.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();

// Enable CORS for all origins (development only)
app.use(cors());

app.use(express.json());

// Routes
app.use("/api/test", testRoute);

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
