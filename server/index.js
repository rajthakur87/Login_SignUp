
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

const JWT_SECRET = process.env.SECRET_KEY;

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  EmployeeModel.findOne({ email })
    .then((employee) => {
      if (!employee) {
        return res.status(401).json({ message: "Email not found" });
      }

      bcrypt.compare(password, employee.password, (err, isMatch) => {
        if (err) {
          return res.status(500).json({ message: "Error comparing passwords" });
        }

        if (!isMatch) {
          return res.status(401).json({ message: "Incorrect password" });
        }

        // Generate JWT Token
        const token = jwt.sign(
          { id: employee._id, email: employee.email }, // Payload data
          JWT_SECRET, // Secret key
          { expiresIn: "1h" } // Token expiration time
        );

        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          maxAge: 3600000,
        });

        employee.token = token; // Store the generated token in the employee object
        employee
          .save()
          .then(() => {
            return res.json({ message: "Login successful", token: token });
          })
          .catch((err) => {
            console.error("Error saving token:", err);
            res.status(500).json({ message: "Error saving token" });
          });
      });
    })
    .catch((err) => {
      console.error("Login error:", err);
      res.status(500).json({ message: "Server error" });
    });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      EmployeeModel.create({
        name: name,
        email: email,
        password: hash,
      })
        .then((employee) =>
          res.json({ message: "Employee created successfully", employee })
        )
        .catch((err) => {
          console.error("Error creating employee:", err);
          res.status(500).json({ message: "Registration failed", error: err });
        });
    })
    .catch((err) => {
      console.error("Error hashing password:", err);
      res.status(500).json({ message: "Password hashing failed", error: err });
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
