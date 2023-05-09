const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");


//ankushukey4
//GDh3OXsOIPqFxM2D
//mongodb+srv://ankushukey4:<password>@cluster0.27pmyww.mongodb.net/?retryWrites=true&w=majority
const app=express();

app.use(cors());
const PORT= 4000 || 3010;
app.get("/",(req,res)=>{
    res.send("ankush us back");
});

app.listen(PORT,()=>{
    console.log("server is listening at 4000")
})

const dbConnect=()=>{mongoose.connect("mongodb+srv://ankushukey4:GDh3OXsOIPqFxM2D@cluster0.27pmyww.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
})
.then(()=>console.log("mongodb conn. is succefful"))
.catch(err=>console.log("mongodb conn. is succefful",err));
}
dbConnect();