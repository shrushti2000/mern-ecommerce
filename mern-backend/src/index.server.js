const express=require('express');
const env=require('dotenv');
const app=express();
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');
//routes
const authRoutes=require('./routes/auth')
const adminRoutes=require('./routes/admin/auth')
const categoryRoutes=require('./routes/category')
const productRoutes=require('./routes/product')

env.config();
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.jsjuc.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Database connected')
})
app.use(cors());
app.use(express.json());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})