const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Post, Like, PostContent, PostType } = require('../../db/models');


const router = express.Router();

router.get("/posts/:userId", asyncHandler(async (req, res) => {
  const userId = req.params.userId;

  const posts = await Post.findAll({
    order: [['updatedAt', 'DESC']],
    include: [{
      model: Like,
      where: { "userId": parseInt(userId) },
      required: false,
    }, PostContent, PostType, User]
  });

  return res.json(posts)
}));

router.post("/posts/like", asyncHandler(async (req, res) => {
  const { id, userId, likeStatus } = req.body;
  const userLikedPost = await Like.findOne({
    where: { userId, "postId": id },
  })

  if (userLikedPost) {
    await userLikedPost.update({"likeStatus": likeStatus});
  } else {
    await Like.create({ "postId": id, userId })
  }

}));


router.get("/posts/like/:userId", asyncHandler(async (req, res) => {
  const userId = req.params.userId;

  const posts = await Post.findAll({
    order: [['createdAt', 'DESC']],
    include: [{
      model: Like,
      where: { "userId": parseInt(userId), "likeStatus": true },
    }, PostContent, PostType, User ]
  });

  return res.json(posts)
}))

router.get("/:user/posts", asyncHandler(async (req, res) => {

}))


module.exports = router;
