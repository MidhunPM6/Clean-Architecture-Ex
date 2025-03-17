class PostEntity {

    constructor({title,post}) {
        if(!title || !post){
            throw new Error("Required title and post"); 
        }

        this.title=title,
        this.post=post
    }

}

module.exports = PostEntity;