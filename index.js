const express = require("express")
const app = express()
const port = process.env.PORT ||5000;

require("./db");
//Testi
var cors = require("cors");
app.use(cors());
app.use(express.json());

const userRoute = require("./routes/users");

app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Opinnäytetyöpelin rajapinta")

})

app.listen(port, () => console.log(`Server running in port ${port}`));