const socialModel = require('../models/social')

exports.getSocial = async (req, res, next)=>{
    try {
        
        const socialData = await socialModel.findAll();
        res.status(200).json({
            success: true, 
            data: socialData
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
    
}

exports.postSocial = async (req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const social = await socialModel.create(data);
        res.status(200).json({
            success: true,
            message: "social created."
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.putSocial = async(req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const social = await socialModel.update(data, {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "social Updated"
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.deleteSocial = async(req, res, next) => {
    const data = req.body.data;
    try {

        const social = await socialModel.destroy( {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "social Deleted"
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}