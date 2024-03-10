const express = require("express")
require("dotenv").config();
const dbConnection = require("./config/db");
const cors = require('cors')

const userRouter = require("./routes/user.routes")

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", userRouter);

app.get("/", (req, res) => res.send("Hello world!"))
 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

dbConnection()
app.listen(port, () => console.log(`Server started on ${port}`));