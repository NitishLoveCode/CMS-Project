const post = require("../models/feed/post");

//@API : localhost:5001/api/feed/new-post
//@Des : for create new post
const homeFeed = async (req, res) => {
  const { title, description, content } = req.body;
  try {
    if ((!title || !description, !content)) {
      throw new Error("All filed required..");
    }
    const newPost = await post.create({
      title,
      description,
      content,
    });
    if (newPost) {
      res.status(200).json(newPost);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { homeFeed };
