const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const authRoutes = require("./routes/authRoute");
// const testRoutes = require("./routes/tests");

app.use("/api/auth", authRoutes);
// app.use("/api/tests", testRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
