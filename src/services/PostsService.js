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
        logger.log(response)
    }
}



export const postsService = new PostsService()