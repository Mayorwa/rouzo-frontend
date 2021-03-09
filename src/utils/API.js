// const LIVE_URL = "https://evening-sierra-53394.herokuapp.com/api/v1/";
const DEV_URL = "http://127.0.0.1:9706/api/v1/";
export default class API {
    static register = DEV_URL+"signup";
    static login = DEV_URL+"login";
    static logout = DEV_URL+"logout";
    static getUser = DEV_URL+"getUser";
    static getStash = DEV_URL+"investor/stashDetails";
    static createSavings = DEV_URL+"stash/investor/save";
    static creditStash = DEV_URL+"stash/investor/credit";
    static getPortfolio = DEV_URL+"portfolio/getAll";
    static getOnePortfolio = DEV_URL+"portfolio/getOne";
    static getOneRate = DEV_URL+"portfolio/getOneRate";
    static addCompetition = DEV_URL+"competition/";
}
