const mongoose = require('mongoose');

const schema = mongoose.Schema({
    channel:{
        type:String
    },
    first_name:{
        type:String
    },
    last_name :{
        type:String
    },
    name:{
        type:String
    },
    mobile:{
        type:String
    },
    facebook:{
        type:String
    },
    line:{
        type:String
    },
    is_active:{
        type:Boolean
    }
});

module.exports = mongoose.model('tutor_info',schema);