import express from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
}));


app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from the server!" });
});

// api endpoint
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});