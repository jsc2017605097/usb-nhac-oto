const express = require('express');
const router = express.Router();
const authorModel = require('../models/author');
router.get('/',function(req,res,next){
    authorModel.find()
    .exec(function(error,result){
        if(error) return next(error);
        res.json(result);
    })
    
})
module.exports = router;