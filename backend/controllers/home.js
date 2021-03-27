const homeModel = require('../models/home')

exports.getHome = async (req, res, next)=>{
    try {
        
        const homeData = await homeModel.findAll();
        res.status(200).json({
            success: true, 
            data: homeData
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
    
}

exports.postHome = async (req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const home = await homeModel.create(data);
        res.status(200).json({
            success: true,
            message: "Home created."
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.putHome = async(req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const home = await homeModel.update(data, {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "Home Updated"
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.deleteHome = async(req, res, next) => {
    const data = req.body.data;
    try {

        const home = await homeModel.destroy( {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "Home Deleted"
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}