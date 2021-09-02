const Design = require('../models/Design');

exports.createDesign = (req,res) => {
    const imgDesign = req.file.path;
    const tags = req.body.tags.split(",")
    const design = {...req.body, imgDesign, tags};
    Design.create(design)
        .then(design => res.status(200).json({design}))
        .catch(err => res.status(500).json({err}))
}

exports.getAllDesigns = (req,res) => {
    Design.find({})
        .populate('_creator')
        .then(designs => res.status(200).json({designs}))
        .catch(err => res.status(500).json({err}))
}

exports.getDesignsById = (req,res) => {
    const {_id} = req.user
    Design.find({_creator: _id})
        .populate('_creator')
        .then(designs => res.status(200).json({designs}))
        .catch(err => res.status(500).json({err}))
    
}

exports.updateDesign = (req,res) => {
    const {_id} = req.body
    Design.findByIdAndUpdate(_id, {...req.body}, {new:true})
        .then(product => res.status(200).json({product}))
        .catch(err => res.status(500).json({err}))
}

exports.deleteDesign = (req, res) => {
    const {id} = req.params
    console.log(id)
    Design.findByIdAndDelete(id)
        .then(design => res.status(200).json({design}))
        .catch(err => res.status(500).json({err}))
}