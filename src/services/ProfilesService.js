import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Account } from "@/models/Account.js"
import { AppState } from "@/AppState.js"

class ProfilesService {
    async getProfileById(profileId){
        const response = await api.get(`api/profiles/${profileId}`)
        logger.log('Profile Aquired', response.data)
        const newProfile = new Account(response.data)
        AppState.activeProfile = newProfile
    }
}

export const profilesService = new ProfilesService()