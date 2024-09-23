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
}

export const postsService = new PostsService()