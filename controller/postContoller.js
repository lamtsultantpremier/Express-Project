
//  @desc Get all Post
//  @route GET /api/posts

let posts = [{id:1,title:"poste One"},{id:2,title:"Poste two"},{id:3,title:"Poste three"}];
export const getAllPosts = (req,res,next)=>{
     const limit = parseInt(req.query.limit);
        if(!isNaN(limit) && limit>0)
        {
            res
            .status(200)
            .json(posts.slice(0,limit));
        }
        else{
            res.status(200).json(posts);
        }    
}

// @desc Post by id
// @route GET /api/posts/:id
export const getPostById = (req,res,next)=>{
    const id = parseInt(req.params.id)
        const post = posts.find(post=>post.id === id);
       if(!post)
      {
        const error = new Error(`Post with id ${id} not found`);
        error.status = 404;
        next(error);
     }
       res.status(200).json(post);
}

// @desc PUT posts
// @route PUT /api/post/:id

export const updatePost = (req,res,next)=>{
     const id = parseInt(req.params.id);
    const post = posts.find(p=>p.id === id);
    if(!post){
        res.status.json({msg:`Post with id ${id} not found`});
    }
    post.title = req.body.title;
    res.status(200).json(post);
}

// @desc Delete Post
// DELETE /api/posts/:id
export const deletePost = (req,res,next)=>{
    const id = parseInt(req.params.id);
    if(!id)
    {
        res.status(404).json({msg:"Post with this id not found"});
    }
    const remainderPosts = posts.filter(post=>post.id != id);
    res.status(200).json(remainderPosts);
}

export const createPost = (req,res,next)=>{
    const newPost = req.body
    if(!newPost){
        const error = new Error('You must fill title field');
        error.status = 422;
        next(error);
    }
    newPost.id = posts.length +1;
    posts.unshift(newPost);
    res.status(201).json(newPost);
}
 