import { PerformanceModel } from "../models/perfomanceModel"
import { UserModel } from "../models/userModel"
import { ActivityModel } from "../models/activityModel"
import { AverageSessionsModel } from "../models/averageSessionsModel"
//import IDataSource from "../dataSource/IDataSource"

/**
 * Acts as a relay between the data and the web interface
 * Returns a new model for each API endpoint
 */

class Service {

    /**
     * @param {IDataSource} dataSource 
     */
    constructor(dataSource) {
        this.dataSource = dataSource
    }

    /**
     * @param {string} userId 
     * @returns {UserModel}
     */
    async getUserInfo(userId) {
        const result = await this.dataSource.getUserInfo(userId)
        return new UserModel(result)
    }

    /**
     * @param {string} userId 
     * @returns {PerformanceModel}
     */
    async getUserPerformance(userId) {
        const result = await this.dataSource.getUserPerformance(userId)
        return new PerformanceModel(result)
    }

    /**
     * @param {string} userId 
     * @returns {ActivityModel}
     */
    async getUserActivity(userId) {
        const result = await this.dataSource.getUserActivity(userId)
        return new ActivityModel(result)
    }

    /**
     * @param {string} userId 
     * @returns {AverageSessionsModel}
     */
    async getUserAverageSessions(userId) {
        const result = await this.dataSource.getUserAverageSessions(userId)
        return new AverageSessionsModel(result)
    }

}

export default Service