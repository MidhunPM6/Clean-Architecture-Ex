const PostEntity =require('../../domain/entities/PostEntity')

class createPostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository
    }
     async execute(postData){
        const postEntity= new PostEntity(postData) 
        return await this.postRepository.create(postEntity)

    }
}


 
module.exports=createPostUseCase