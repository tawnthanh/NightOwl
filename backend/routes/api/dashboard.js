const express = require("express");
const asyncHandler = require("express-async-handler");
const db  = require("../../db/models");

const router = express.Router();

router.get("/posts", asyncHandler(async (req , res) => {
  const postObj = await db.PostContent.findAll({
    include: db.Post,
    order: [['updatedAt', 'DESC']]
  });
  const postTypesObj = await db.PostType.findAll();
  const usersObj = await db.User.findAll();

  const users = usersObj.map(user => user.username);

  const postTypes = postTypesObj.map(type => {
    return type.type;
  });



  const posts = postObj.map(post => {
    const postType = postTypes.filter((type, idx) => {
      if (idx+1 === post.Post.postTypeId) {
        return type;
      }
    })

    const associatedUser = users.filter((name, idx) => {
      if (idx + 1 === post.Post.userId) {
        return name;
      }
    });

    return {
      id: post.id,
      username: associatedUser,
      postId: post.postId,
      postType: postType,
      title: post.Post.title,
      description: post.description,
      src: post.src,
    }
  });

  return res.json(posts);
}))

router.post("/posts/like", asyncHandler(async (req, res) => {
  const { postId, userId } = req.body;

  const userLikedPost = await db.Like.findOne({
    where: { userId, postId },
  })

  if (userLikedPost) {
    await userLikedPost.destroy();
  } else {
    await db.Like.create({ postId, userId })
  }

}));


// router.get("/posts/like", asyncHandler(async (req, res) => {
//   const { userId, postId } = req.body;
//   const likes = await db.Like.findAll({
//     where: { userId, postId },
//   })

//   likes.likeStatus ? res.json(likes) : "no hit girl";
//   // console.log( likes );
//   // res.json(likes);
// }));


module.exports = router;
