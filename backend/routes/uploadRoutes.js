const express=require('express') ;
const multer= require('multer');
const cloudinary =require('cloudinary');
const { isAdmin, isAuth }=require('../utils.js');

const upload = multer();

const uploadRouter = express.Router();

uploadRouter.post(
  '/',
  isAuth,
  isAdmin,
  upload.single('file'),
  async (req, res) => {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    try {
      await cloudinary.uploader.destroy(public_id);
      res.status(200).send();
  } catch (e) {
      res.status(400).send(e.message)
  }
    
  }
  
);

module.exports =uploadRouter;