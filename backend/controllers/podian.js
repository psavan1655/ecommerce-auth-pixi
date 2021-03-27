const podianModel = require('../models/podian')

exports.getPodian = async (req, res, next)=>{
    try {
        
        const podianData = await podianModel.findAll();
        res.status(200).json({
            success: true, 
            data: podianData
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error
        });
    }
    
}

exports.postPodian = async (req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const podian = await podianModel.create(data);
        res.status(200).json({
            success: true,
            message: "podian created."
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.putPodian = async(req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const podian = await podianModel.update(data, {
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "podian Updated"
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}

exports.deletePodian = async(req, res, next) => {
    const data = req.body.data;
    // console.log(data);
    try {

        const podian = await podianModel.destroy({
            where: {id: data['id']}
        });
        res.status(200).json({
            success: true,
            message: "podian Deleted"
        });

    } catch (error) {
        
        res.status(500).json({
            success: false, 
            message: error
        });
    }
}