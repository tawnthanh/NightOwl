const express = require("express");
const asyncHandler = require("express-async-handler");
const db  = require("../../db/models");

const router = express.Router();

router.get("/posts", asyncHandler(async (req , res) => {
  const postObj = await db.PostContent.findAll({ include: db.Post });
  const postTypesObj = await db.PostType.findAll();

  const postTypes = postTypesObj.map(type => {
    return type.type;
  });

  console.log("postTypes", postTypes);

  const posts = postObj.map(post => {
    const postType = postTypes.filter((type, idx) => {
      if (idx+1 === post.Post.postTypeId) {
        return type;
      }
    })

    return {
      id: post.id,
      postId: post.postId,
      postType: postType,
      title: post.Post.title,
      description: post.description,
    }
  });
  
  res.json(posts)
}))

module.exports = router;
