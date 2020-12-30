const express = require("express");
const asyncHandler = require("express-async-handler");
const db  = require("../../db/models");

const router = express.Router();

router.get("/posts", asyncHandler(async (req , res) => {
  const postObj = await db.PostContent.findAll({ include: db.Post });
  const postTypesObj = await db.PostType.findAll();

  const postTypes = postTypesObj.map(type => {
    return {id:type.id, type:type.type}
  });

  const posts = postObj.map(post => {
    return {
      id: post.id,
      postId: post.postId,
      description: post.description,
      title: post.Post.title,
      postType: postType,
    }
  });
  
  res.json(posts)
}))

module.exports = router;
