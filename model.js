const mongoose = require('mongoose');
const instagram = mongoose.Schema({
     title :{
        type: String,
        required : true,
    },
     description    : {
        type : String,
        required : true,
    },
    location :{
        type : String,
        required : true,
    },
     collabration :{
        type : String,
        required : true,
    
    }
    })

module.exports = mongoose.model('instagram',instagram)