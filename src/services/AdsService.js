import { Ads } from "@/models/Ads.js"
import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"
import { AppState } from "@/AppState.js"


class AdsService {

    async getAds() {
        const response = await api.get('api/ads')
        logger.log('got ads', response.data)
        const ads = response.data.map(adPOJO => new Ads(adPOJO))
        AppState.ads = ads
    }
}

export const adsService = new AdsService()