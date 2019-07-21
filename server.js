const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.json({ msg: "Welcome to contact keeper api" }));
app.listen(PORT, () => console.log(`Server started on ${PORT}`));

//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
