const PostRepository = require('../infrastructure/repositories/PostRepository')
const createPostUseCase = require ('../application/useCases/createPostUseCase')

const postMongoRepo =new PostRepository()
const createPostUsecase =new createPostUseCase(postMongoRepo) 

module.exports={createPostUsecase}