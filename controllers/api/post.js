const router = require('express').Router();
const post = require('../../models/Post');

// route to create/add a dish using async/await
router.post('/', async (req, res) => {
  try { 
    const postData = await post.create({
    userName: req.body.userName,
    post: req.body.post,
   
  });
  // if the post is successfully created, the new response will be returned as json
  res.status(200).json(postData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;