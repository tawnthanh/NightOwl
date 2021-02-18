const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Post, Like, PostContent, PostType } = require('../../db/models');


const router = express.Router();

router.get("/posts/:userId", asyncHandler(async (req, res) => {
  const userId = req.params.userId;

  const posts = await Post.findAll({
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


router.get("/posts/like", asyncHandler(async (req, res) => {
  const likePostObj = await Like.findAll({
    include: [db.User],
    order: [['updatedAt', 'DESC']],
  });

  res.json(likePostObj)
}))

router.get("/:user/posts", asyncHandler(async (req, res) => {

}))


module.exports = router;
