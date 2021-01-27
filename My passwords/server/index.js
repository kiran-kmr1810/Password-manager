const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'passwordmanager',
});

app.post("/addpassword",(req,res)=>{
    const {password , username , website ,comment} = req.body;

    db.query(
        "INSERT INTO passwords (website , passwords , username , comment) VALUES (?,?,?,?) ",
        [website , password , username , comment],
        (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send("success")
            }
        }
    );
});
app.listen(port , () => {
    console.log("server running")
});
