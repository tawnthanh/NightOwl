const express = require("express");
const asyncHandler = require("express-async-handler");
const db  = require("../../db/models");
const router = require("./dashboard");

router.get("/:postType", asyncHandler(async (req, res) => {
  const postType = req.params.postType;
  const postTypeId = await db.PostType.findOne({
    where: { type: postType },
  });

  res.json(postTypeId)

}));

router.post("/:postType", asyncHandler(async (req, res) => {
  const { title, description, src, userId} = req.body;
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

}))

module.exports = router;
