import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Post } from "@/models/Post.js"
import { AppState } from "@/AppState.js"



class PostsService {
    async getAllPosts() {
        const response = await api.get('api/posts')
        logger.log('Got Posts 📄', response.data)
        const newPosts = response.data.posts.map(postPOJO => new Post(postPOJO))
        AppState.posts = newPosts
    }

    async getPostsById(creatorId) {
        const response = await api.get(`api/posts?creatorId=${creatorId}`)
        logger.log('This profile has these posts:', response.data)
        const newPosts = response.data.posts.map(postPOJO => new Post(postPOJO))
        AppState.posts = newPosts
    }

    async createPost(editablePostData) {
        const response = await api.post('api/posts', editablePostData)
        logger.log(response.data)
        const createdPost = new Post(response.data)
        AppState.posts.unshift(createdPost)
    }

    async deletePost(Id) {
        const response = await api.delete(`api/posts/${Id}`)
        logger.log('Post Deleted', response.data)
        const postIndex = AppState.posts.findIndex(post => post.id == Id)
        AppState.posts.splice(postIndex, 1)
    }

    async likePost(Id) {
        const response = await api.post(`api/posts/${Id}/like`)
        logger.log('post liked', response.data)
    }

}





export const postsService = new PostsService()