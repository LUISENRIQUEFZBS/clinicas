const path = require(`path`);
const express = require(`express`);
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

// app.get('/', function (req, res) {
//     res.send('Hello World');
//  })

const userRouter = require(`./routes/userRoutes`);

// app.use(`/api/v2/users`, userRouter);
app.use(`/api`, userRouter);

module.exports =app;