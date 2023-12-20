const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    WDC_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WDC'
    },
    WDC_name: {
        type: String
    },
    FPO_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FPO'
    },
    FPO_name: {
        type: String
    },
    seller_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    seller_name: {
        type: String
    },
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    // type:{
    //     type:String,
    //     trim:true,
    //     maxlength:[50,'Type cannot be more than 50 characters']
    // },
    description: {
        type: String,
        required: [true, 'Please enter a description'],
        trim: true,
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    district:{
        type:String,
        required:[true,'Please enter a district'],
        trim:true
    },
    state: {
        type: String,
        required: [true, "Pleae enter your State"]
    },
    price: {
        type: Number,
        required: [true, 'Please enter a price'],
        trim: true,
        maxlength: [50, 'Price cannot be more than 50 characters']
    },
    quantityLeft:{
        type:Number,
    },
    minQuantity:{
        type:Number,
    },
    images: [
        {
            type: String,
        }
    ],
    category: {
        type: String,
        required: [true, 'Please enter a category'],
        trim: true,
        maxlength: [50, 'Category cannot be more than 50 characters']
    },
    date:{
        type: Date,
        default: Date.now
    },
    coordinates: [{
        type: Number
    }],
    phoneNumber: {
        type: Number
    }
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;