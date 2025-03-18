const { createPostUsecase } = require("../../config/container")





const createPost = async (req, res) => {
  try {
    console.log(req.body)
    const post = await createPostUsecase.execute(req.body)
    res.status(200).json({post})
    
    
  } catch (error) {
   console.error(error);
  }
}

module.exports = { createPost }
