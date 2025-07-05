const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Підключення до бази даних
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "contacts_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("Підключено до бази MySQL");
});

// Ендпоінт для прийому контактних форм
app.post("/api/contact", (req, res) => {
  const { name, email, phone } = req.body;
  const sql = "INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)";

  db.query(sql, [name, email, phone], (err, result) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).send("DB insert failed");
    }
    res.status(200).send("Contact saved");
  });
});

app.listen(PORT, () => console.log(`Сервер на порту ${PORT}`));
