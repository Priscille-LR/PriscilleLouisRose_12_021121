import IDataSource from "./IDataSource"

const host = process.env.REACT_APP_API
const port = process.env.REACT_APP_PORT

/**
 * Fetch data from API. Has 4 methods corresponding to the API's 4 endpoints
 * This way, API calls are done outside of React Components
 */

class DataFromAPI extends IDataSource {

    /**
     * @param {string} userId 
     * @returns {object} data from API - Used in Greeting, Macros Cards, and ScoreGraph
     */
    async getUserInfo(userId) {
        const response = await fetch(`http://${host}:${port}/user/${userId}`)
        const userInfo = await response.json();
        return userInfo
    }

    /**
    * @param {string} userId 
    * @returns {object} data from API - Used to generate PerformanceGraph
    */
    async getUserPerformance(userId) {
        const response = await fetch(`http://${host}:${port}/user/${userId}/performance`)
        const userPerformance = await response.json()
        return userPerformance
    }

    /**
    * @param {string} userId 
    * @returns {object} data from API - Used to generate ActivityGraph
    */
    async getUserActivity(userId) {
        const response = await fetch(`http://${host}:${port}/user/${userId}/activity`)
        const userActivity = await response.json()
        return userActivity
    }

    /**
    * @param {string} userId 
    * @returns {object} data from API - Used to generate AverageSessionsGraph
    */
    async getUserAverageSessions(userId) {
        const response = await fetch(`http://${host}:${port}/user/${userId}/average-sessions`)
        const userAverageSessions = await response.json()
        return userAverageSessions
    }
}

export default DataFromAPI