const jobTransactionDal = require('../services/jobTransactionDal');

const addTransaction = async (req,res)=>{
    try {
        
        const response  = await jobTransactionDal.addTransaction(req);
         return res.json({status:true,message:"success",data:response});

    } catch (error) {

        return res.status(500).json({status:false,message:error});

    }
};


const editJobStatus = async (req,res)=>{

   
};


const deleteTransaction = async (req,res)=>{
   
};

const getTransactionById =  async (req,res)=>{
    
};

const getTransactionByCode = async (req,res)=>{
   
};

const getTransactionByStatus = async (req,res)=>{

   
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