const aboutModel = require('../models/about')

exports.getAbout = async (req, res, next)=>{
    try {
        
        const aboutData = await aboutModel.findAll();
        res.status(200).json({
            success: true, 
            data: aboutData
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
    
}

exports.postAbout = async (req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const about = await aboutModel.create(data);
        res.status(200).json({
            success: true,
            message: "about created."
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.putAbout = async(req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const about = await aboutModel.update(data, {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "about Updated"
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.deleteAbout = async(req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const home = await aboutModel.destroy( {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "about Deleted"
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}