const jobTransactionDal = require('../services/jobTransactionDal');

const addTransaction = async (req,res)=>{
    try {
        
        const response  = await jobTransactionDal.addTransaction(req);
         return res.status(200).json({status:true,message:"success",data:response});

    } catch (error) {

        return res.status(500).json({status:false,message:error});

    }
};


const editJobStatus = async (req,res)=>{
    try {
        
        const response  = await jobTransactionDal.updateTransaction(req);
         return res.status(200).json({status:true,message:"success",data:response});

    } catch (error) {

        return res.status(500).json({status:false,message:error.message});

    }
   
};


const deleteTransaction = async (req,res)=>{
    try {
        
        const response  = await jobTransactionDal.deleteTransaction(req.params.id);
         return res.status(200).json({status:true,message:"success",data:response});

    } catch (error) {

        return res.status(500).json({status:false,message:error});

    }
};

const getTransactionById =  async (req,res)=>{

    try {
       
        const query = await jobTransactionDal.queryTransactionById(req.params.id);

        if(!query)    return res.status(404).json({status:false,message:'not found data'});

        return res.status(200).json({status:true,message:'success',data:query});

   } catch (error) {

        return res.status(500).json({status:false,message:error});

   }
};

const getTransactionByCode = async (req,res)=>{

   try {
       
        const query = await jobTransactionDal.queryTransactionByCode(req.params.code);

        if(!query)    return res.status(404).json({status:false,message:'not found data'});

        return res.status(200).json({status:true,message:'success',data:query});

   } catch (error) {

        return res.status(500).json({status:false,message:error});

   }
};

const getTransactionByStatus = async (req,res)=>{

    try {
       
        const query = await jobTransactionDal.queryTransactionByStatus(req.params.status,req.params.index,req.params.size);

        if(query.length == 0)    return res.status(404).json({status:false,message:'not found data'});

        return res.status(200).json({status:true,message:'success',data:query});

   } catch (error) {

        return res.status(500).json({status:false,message:error});

   }
   
};

module.exports = {
    addTransaction,
    editJobStatus,
    deleteTransaction,
    getTransactionById,
    getTransactionById,
    getTransactionByCode,
    getTransactionByStatus
}