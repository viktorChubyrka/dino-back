const Post = require("../../db/models/post");

async function createPost(post,path){
    const { title ,description,} = post;
    const newPost = {
        title,
        bodyText:description,
        imageUrl:path,
        data:Date.now()
    };
    const newPostDB = new Post(newPost);
    await newPostDB.save();
    return {
        data: {
        status: 200,
        message: "created",
        },
    };
}
async function updatePost(post,path){
    const { id,title ,description,} = post;
    const newPost = {
        title,
        bodyText:description,
    };
    if(path){
        newPost.imageUrl = path;
    }
    await Post.updateOne({_id:id},newPost);
    return {
        data: {
        status: 200,
        message: "created",
        },
    };
}
async function getAllPosts(){
    const posts = await Post.find();
    return posts;
}
async function getPost(params){
    const post = await Post.findById(params.id);
    return post;
}
async function commentPost(body){
    let {id,nickname,comment} = body
    const post = await Post.findById(id);
    post.comments.push({nickname,comment,data:Date.now()})
    await Post.updateOne({_id:id},post);
    return "ok"
}
async function deleteComment(body){
    let {id,date} = body
    const post = await Post.findById(id);
    let indexToDelete = null
    post.comments.forEach((el,index)=>{
        if(el.date == date){
            indexToDelete = index
        }
    })
    post.comments.splice(indexToDelete,1);
    await Post.updateOne({_id:id},post);
    return "ok"
}

module.exports = {
    createPost,
    getAllPosts,
    getPost,
    commentPost,
    deleteComment,
    updatePost
};