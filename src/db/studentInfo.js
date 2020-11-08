const mongoose = require('mongoose');

const schema = mongoose.Schema({
    channel:{
        type:String
    },
    name:{
        type:String
    },
    contact_name:{
        type:String
    },
    mobile:{
        type:String
    },
    line:{
        type:String
    },
    is_active:{
        type:Boolean
    }
});

module.exports = mongoose.model('student_info',schema);