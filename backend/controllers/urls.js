const urlsModel = require('../models/urls')

exports.getUrls = async (req, res, next)=>{
    try {
        
        const urlsData = await urlsModel.findAll();
        res.status(200).json({
            success: true, 
            data: urlsData
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
    
}

exports.postUrls = async (req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const urls = await urlsModel.create(data);
        res.status(200).json({
            success: true,
            message: "urls created."
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.putUrls = async(req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const urls = await urlsModel.update(data, {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "urls Updated"
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.deleteUrls = async(req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const urls = await urlsModel.destroy({
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "urls Deleted"
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}