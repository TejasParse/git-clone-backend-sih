const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    age: {
        type: Number,
        required: [true, "Please Enter Age"]
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        trim: true,
        maxlength: [50, 'Email cannot be more than 50 characters']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        trim: true,
    },
    phoneNumber:{
        type:Number,
        required:[true,'Please enter a phone number'],
        trim:true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    address:{
        type:String,
        required:[true,'Please enter an address'],
        trim:true
    },
    pincode:{
        type:Number,
        required:[true,'Please enter a pincode'],
        trim:true
    },
    district:{
        type:String,
        trim:true
    },
    state: {
        type: String,
    },
    coordinates: [{
        type: Number
    }],
    profilePicture:{
        type:String,
        default: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
    },

    FPO:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'FPO'
    },
    percentageStake: [{
        type: Number,
        default: 0
    }],
    investedAmount: [{
        type: Number,
        default: 0
    }],
    fpoIncome: [{
        type: Number,
        default: 0
    }],
    fpoSellIncome: [
        {
            type: Number,
            default: 0
        }
    ],
    totalFPOIncome: {
        type: Number,
        default: 0
    },
    totalSellIncome: {
        type: Number,
        default: 0
    },
    FPO_invested: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'FPO'
        }
    ]
    // FPO_Role:{
    //     type:String,
    //     enum:['head','member'],
    //     default:'member'
    // }
    
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;