export class Post {
    constructor(data) {
        this.id = data._id
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.creator = data.creator
        this.creatorId= data.creatorId
        this.createdAt = new Date(data.createdAt)
        this.likes = data.likes
        this.likeIds = data.likeIds
    }
}
