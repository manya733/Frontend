const {Schema,model,Types}=require('../connection');

const mySchema=new Schema({
    user:{type:Types.ObjectId,ref:'user'},
    title:{type:String,require:true},
    description:{type:String},
    data: {type: String},
    cover:{type:String,require:true},
    upvotes:{type:Number,default:0},

    
});
module.exports=model('blog',mySchema);
