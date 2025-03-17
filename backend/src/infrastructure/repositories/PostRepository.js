const IPostRepository = require('../../domain/repositories/IPostRepository')
const PostModel = require('../database/PostModel')



class PostRepository extends IPostRepository  {
  async create(postEntity){
   const post = new PostModel(postEntity)
   return await post.save()
  }
}

module.exports = new PostRepository();