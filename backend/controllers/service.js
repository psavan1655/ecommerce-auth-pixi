const serviceModel = require('../models/service')

exports.getService = async (req, res, next)=>{
    try {
        
        const serviceData = await serviceModel.findAll();
        res.status(200).json({
            success: true, 
            data: serviceData
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
    
}

exports.postService = async (req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const service = await serviceModel.create(data);
        res.status(200).json({
            success: true,
            message: "service created."
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.putService = async(req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const service = await serviceModel.update(data, {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "service Updated"
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.deleteService = async(req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const service = await serviceModel.destroy({
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "service Deleted"
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}