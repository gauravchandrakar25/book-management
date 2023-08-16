const express = require('express'); 
const app = express();
import errorHandler from "./middlewares/errorHandler";
const dotenv = require("dotenv").config();
import connectDb from './config/dbConnection';     

connectDb()
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/books", require("./routes/bookRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

