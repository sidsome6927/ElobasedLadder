const express = require('express');
const app = express();
const PORT = 8800;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const authRoute = require('./routes/auth');
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");




dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true,useUnifiedTopology : true}).then(()=>{console.log("Connected to MongoDB")}).catch((err) => console.log(err));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());
app.use(morgan("common"));

app.use("/backend/auth", authRoute);
app.use("/backend/users", userRoute);
app.use("/backend/posts", postRoute);

app.listen(PORT,() =>{
    console.log(`Server is running on ${PORT}`);
})