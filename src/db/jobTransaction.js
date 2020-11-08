const mongoose = require('mongoose');

const schema = mongoose.Schema({
    request_date : {
        type:Date,
        required:true
    },
    job_code:{
        type:String,
        required:true
    },
    subject : {
        type:String,
        required:true
    },
    level:{
        type:String
    },
    job_type:{
        type:String
    },
    location_type:{
        type:String
    },
    location:{
        type:String
    },
    date:{
        type:String
    },
    time:{
        type:String
    },
    price_per_hour:{
        type:Number
    },
    amount_of_time:{
        type:Number
    },
    student_id:{
        type:String
    },
    amount_student:{
        type:Number
    },
    tutor_type:{
        type:String
    },
    commission:{
        type:Number
    },
    tutor_id:{
        type:String
    },
    job_status:{
        type:String
    },
    memo:{
        type:String
    }
});

module.exports = mongoose.model('job_transaction',schema);