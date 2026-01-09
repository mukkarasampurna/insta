const express = require('express');
const mongoose = require('mongoose');
const instagram = require('./model');
const app = express();
app.use(express.json());
mongoose.connect('mongodb+srv://sampurnamukkara_db_user:swapna@cluster0.ygrblnj.mongodb.net/').then(() => console.log('connected to db..')).catch(err => console.log(err))
app.post('/add_user',async (req,res) => {
    const {title} = req.body;
    const {description } = req.body;
    const {location} = req.body;
    const {collabration} = req.body;
    try{
        const newData = new instagram({title,description,location,collabration});
        await newData.save();
        return res.json("user can be sucessful")
    }
    catch(err){
        console.log(err.message);
    }
})
app.get('/get_all_data',async(req,res)=>{
    try{
        const allData = await instagram.find();
        return res.json(allData);
    }
    catch(err){
        console.log(err.message);
    }
})
app.put('/update/:id', async(req,res) => {
        const {title}=req.body;
        const {description}=req.body;
        const {location}=req.body;
        const {collabration}=req.body;

        try{
            await instagram.findByIdAndUpdate(req.params.id,{title,description,location,collabration},

            );
         return res.json(await instagram.find());
        }
        catch(err){
            console.log(err.message);
        }
    });
app.listen(3000,()=>console.log('server running on http://localhost:3000'))