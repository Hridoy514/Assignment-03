const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    EmailAddress:{type:String},
    PhoneNumber:{type:String},
    City:{type:String},
    UserName:{type:String,unique:true},
    Password:{type:String}
},{versionKey:false});

const ProfileModel = mongoose.model('Profile',DataSchema);

module.exports=ProfileModel;