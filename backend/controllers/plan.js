const planModel = require('../models/plan')

exports.getPlan = async (req, res, next)=>{
    try {
        
        const planData = await planModel.findAll();
        res.status(200).json({
            success: true, 
            data: planData
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
    
}

exports.postPlan = async (req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const plan = await planModel.create(data);
        res.status(200).json({
            success: true,
            message: "plan created."
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.putPlan = async(req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const plan = await planModel.update(data, {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "plan Updated"
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.deletePlan = async(req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const plan = await planModel.destroy( {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "plan Deleted"
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}