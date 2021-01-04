const express = require("express");
const asyncHandler = require("express-async-handler");
const db  = require("../../db/models");
const router = require("./dashboard");

router.get("/create/:postType", asyncHandler(async (req, res) => {
  const postType = req.params.postType;
  const postTypeId = await db.PostType.findOne({
    where: { type: postType },
  });

  res.json(postTypeId)

}));

router.post("/create/:postType", asyncHandler(async (req, res) => {
  const { title, description, src, userId } = req.body;
  const postType = req.params.postType;

  const postTypeId = await db.PostType.findOne({
    where: { type: postType },
  });

  const post = await db.Post.create({
    userId,
    postTypeId: postTypeId.id,
    title
  });

  await db.PostContent.create({
    postId: post.id,
    description,
    src
  });

}));

router.delete("/delete-post/:postId", asyncHandler(async (req, res) => {
  const postId = req.params.postId;

  const postContent = await db.PostContent.findOne({
    where: { postId },
  })

  const allLikes = await db.Like.findAll({
    where: { postId }
  });

  const originalPost = await db.Post.findByPk(postId);

  res.json(postContent)
  if (postContent) {
    await postContent.destroy();
    await originalPost.destroy();
    allLikes.forEach( async (likedPost) => {
      await likedPost.destroy();
    });
  }

}));

router.get("/delete-post/:postId", asyncHandler(async (req, res) => {
  const postId = req.params.postId;

  const postContent = await db.PostContent.findOne({
    where: { postId },
  })

  const allLikes = await db.Like.findAll({
    where: { postId }
  });

  const originalPost = await db.Post.findByPk(postId);

  res.json(originalPost)
  // if (postContent) {
  //   await postContent.destroy();
  //   allLikes.forEach( async (likedPost) => {
  //     await likedPost.destroy();
  //   });
  //   await originalPost.destroy();
  // }

}));

module.exports = router;
