const whypodModel = require('../models/whypod')

exports.getWhypod = async (req, res, next)=>{
    try {
        
        const whypodData = await whypodModel.findAll();
        res.status(200).json({
            success: true, 
            data: whypodData
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
    
}

exports.postWhypod = async (req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const whypod = await whypodModel.create(data);
        res.status(200).json({
            success: true,
            message: "whypod created."
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.putWhypod = async(req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const whypod = await whypodModel.update(data, {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "whypod Updated"
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.deleteWhypod = async(req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const whypod = await whypodModel.destroy({
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "whypod Deleted"
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}