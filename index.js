import express from "express";
import router from "./routes/user.route.js";
import connectDB from './connect.js';
import todorouter from "./routes/todo.router.js";



const app = express();

connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', router);
app.use('/api', todorouter);

app.listen(3000, () =>{
    console.log(`server is running on 3000`);

});