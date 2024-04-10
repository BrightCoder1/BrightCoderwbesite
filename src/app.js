const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const hbs = require("hbs");

// import DataConnection
const connectdb = require("./db/db");
// import data structure
const data = require("./schema/schema");

app.use(express.static("public"));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(201).render("home");
});

app.get("/notes", (req, res) => {
  res.status(201).render("notes");
});

app.get("/register", (req, res) => {
  res.status(201).render("register");
});

// Register data
app.post("/register", async (req, res) => {
  try {
    const student = new data({
      name: req.body.name,
      class: req.body.class,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
    });

    const student_register = await student.save();

    res.status(201).render("home");
  } catch (error) {
    console.log(error);
  }
});

connectdb().then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
});
