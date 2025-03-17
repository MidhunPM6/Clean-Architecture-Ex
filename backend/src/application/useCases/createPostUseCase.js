const PostEntity =require('../../domain/entities/PostEntity')
const PostRepository =  require('../../infrastructure/repositories/PostRepository')

const createPostUseCase=async(postData)=>{
   const postEntity = new PostEntity(postData)
   return await PostRepository.create(postEntity)
}
 
module.exports=createPostUseCase