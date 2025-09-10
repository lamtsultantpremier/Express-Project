import express from 'express';
import colors from 'colors';
import {getAllPosts,getPostById,updatePost,deletePost,createPost} from '../controller/postContoller.js'
const router = express.Router();

router.get("/message",(req,res)=>
{
    res.send(process.cwd());
});
//Get all Posts
router.get("/",getAllPosts);

//Get Post By Id
router.get("/:id",getPostById);

//Create a Post
router.post("/",createPost);

//Update Post
router.put("/:id",updatePost);

//Delete ressources
router.delete("/:id",deletePost);

export default router;

