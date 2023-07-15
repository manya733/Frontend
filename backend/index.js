const express=require('express')
const app=express();
const port=5000;

const userRouter=require('./router/userRouter');
const blogRouter=require('./router/blogRouter');
const cors=require('cors');


//Middleware
app.use(express.json());
app.use(cors());

app.use('/user',userRouter);
app.use('/blog',blogRouter);


//Routes
app.get('/',(req,res)=>

{
    res.send('Response from express server');

});
app.get('/add',(req,res)=>

{
    res.send('Response from add server');

});
app.get('/delete',(req,res)=>

{
    res.send('Response from delete server');

});

app.listen(port,()=>
{
    console.log('server started');
})


