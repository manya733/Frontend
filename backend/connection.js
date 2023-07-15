const mongoose = require('mongoose');
   const uri="mongodb+srv://manya733:1234@cluster0.yn1ojab.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(uri)
    .then((result) => {
        console.log('databse connected');
        
    }).catch((err) => {
        console.error(err);        
    });
    module.exports=mongoose;