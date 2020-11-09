const trans_schema = require('../db/jobTransaction');

const addTransaction = async (req)=>{
    const newData = Object.assign(new trans_schema(),req.body);
    newData.job_status = "waiting";
    newData.request_date = Date.now();
    newData.tutor_id = "";
    newData.memo = "";

    const response = await newData.save();
    return response;

};

const updateTransaction = async (req)=>{

    let update = await trans_schema.findByIdAndUpdate({_id: req.body.id},{job_status:req.body.job_status , tutor_id:req.body.tutor_id , memo:req.body.memo});

    return update;
}

const deleteTransaction = async (id)=>{

    let del = await trans_schema.deleteOne({_id:id});

    return del;
}

const queryTransactionById = async (id)=>{
    
    let query = await trans_schema.findById(id);

    return query;
}

const queryTransactionByCode = async (code) => {

    let query = await trans_schema.findOne({job_code:code});
    
    return query ;
}

const queryTransactionByStatus = async (status,index,size) => {

    let query = await trans_schema.find({job_status:status}).sort({request_date:1})
    .skip(Number(index)*Number(size))
    .limit(Number(size))
    .exec();

    return query;

}

module.exports = {
    addTransaction,
    queryTransactionByStatus,
    queryTransactionByCode,
    queryTransactionById  ,
    deleteTransaction,
    updateTransaction
}