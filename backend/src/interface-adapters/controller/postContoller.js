const createPostUseCase = require("../../application/useCases/createPostUseCase");



const createPost = async (req, res) => {
  try {
    console.log(req.body)
    const post = await createPostUseCase(req.body)
    res.status(200).json({post})
    
    
  } catch (error) {
   console.error(error);
  }
}

module.exports = { createPost }
