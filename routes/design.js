const router = require('express').Router()
const { createDesign, getAllDesigns, getDesignsById, updateDesign, deleteDesign } = require('../controllers/designController');
const uploader = require('../helpers/cloudinary');

router.post('/create', uploader.single("imgDesign"), createDesign);
router.get('/getAll', getAllDesigns);
router.get('/getDesignById', getDesignsById);
router.patch('/updateDesign', updateDesign);
router.delete('/delete/:id', deleteDesign);

module.exports = router