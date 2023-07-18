const express=require('express');
const router=express.Router();
const Model =require('../models/blogModel');

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
        
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
        
    });
   
});
router.get('/getall' ,(req,res)=>{
    Model.find({}).populate('user')
    .then((result) => {
           res.json(result);

        
    }).catch((err) => {
        res.status(500).json(err);
        
    });
})
router.get('/getbyid/:id', (req, res) => {
    console.log(req.params.id);
    Model.findById(req.params.id)
    .then((result) => {
    
        res.json(result);
       }).catch((err) => {
        res.status(500).json(err);
       });
});
router.put('/update/:id',(req,res)=>{
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result) => {
    
        res.json(result);
       }).catch((err) => {
        res.status(500).json(err);
       });


});
router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
    
        res.json(result);
       })
       .catch((err) => {
        res.status(500).json(err);
       });
}

);

module.exports = router;// export router

