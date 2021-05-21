require('dotenv').config();
const mongoose=require("mongoose");
const express=require("express");
const app=express();
var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");
var cors=require("cors");

//myRoutes

const authRoutes=require("./routes/auth");
const userRoutes=require("./routes/user");
const categoryRoutes=require("./routes/category");
const productRoutes=require("./routes/product");
const orderRoutes=require("./routes/order");
const { uniqueId } = require('lodash');
// const stripeRoutes=require('./routes/stripepayment')
const paymentBRoutes=require("./routes/payment")
//DB CONNECTION
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB CONNECTED");
})

//middlewares
 app.use(bodyParser.json());
 app.use(cookieParser());
 app.use(cors());

//my routes
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",orderRoutes);
app.use("/api",paymentBRoutes)
// app.use("/api",stripeRoutes)

//ports
const port=process.env.PORT || 8000;


//starting a server
app.listen(port,()=>{
    console.log(`app is running at ${port}`);
})

