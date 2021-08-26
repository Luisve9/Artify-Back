const Design = require('../models/Design');

exports.createDesign = (req,res) => {
    const imgDesign = req.file.path;
    const design = {...req.body, imgDesign};

    Design.create(design)
        .then(design => res.status(200).json({design}))
        .catch(err => res.status(500).json({err}))
}
