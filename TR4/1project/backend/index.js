const express = require("express");
const cors = require("cors");
const userRoutes = require("./router/user");
const connectDb = require("./config/db");
const gloablErrorHandler = require("./middleware/globalErrorHandler");
const authRoutes = require("./router/auth");
const productRoutes = require("./router/product");
const passport = require("passport");
const session = require("express-session");
const path = require("path");
const Order = require("./model/order")
require("dotenv").config();
require("./config/passport");
const stripe = require("stripe")("sk_test_51PQ23NKhZAmovhQkXOdFXfAunfNMJE8uHnXbbfBGksOMirucY7PwsikhvEvYaynFx5l3xvZvH5IYJrXPOuvbrHlb00Cge3ywXo");

const app = express();

app.use(session({
    secret : "Your_Secret_Key",
    resave : false,
    saveUninitialized : false,
    cookie : {secure : false}
}));

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

connectDb();

app.use("/uploads",express.static(path.join(__dirname , "uploads")))

app.use("/auth" , userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api",productRoutes)

app.get("/",(req,res)=>{
    res.send("Hello Techno")
})

app.post("/create-checkout-session",async (req,res)=>{
    const { products , userId , customerName , customerContactNumber , address , pinCode}  = req.body;
    console.log(req.body)
    const lineItems = products.map((product)=>(
        {
            price_data : {
                currency : "inr",
                product_data : {
                    name : product.name,
                },
                unit_amount : product.price * 100
            },
            quantity : 1
        }
    ));

    const session = await stripe.checkout.sessions.create({
        payment_method_types : ["card"],
        line_items : lineItems,
        mode : "payment",
        success_url : "http://localhost:5173/paymentsuccess",
        cancel_url : "http://localhost:5173/cancelPayment"
    });

    const order = new Order({
        product : products , userId , customerName , customerContactNumber , address , pinCode : +pinCode , transactionId : session.id
    });

    await order.save();

    res.json({id : session.id});

})


app.use(gloablErrorHandler);


app.listen(5000,()=>{
    console.log("Server is running on 5000");
});