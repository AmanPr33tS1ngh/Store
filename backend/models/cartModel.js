import mongoose from 'mongoose'

const cartSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    numReviews:{
        type:Number,
        required:true
    },
    countInStock:{
        type:Number,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true,
    }
})

const Cart=mongoose.model('Cart',cartSchema);
export default Cart