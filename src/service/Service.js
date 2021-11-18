import { PerformanceModel } from "../models/perfomanceModel"
import { UserModel } from "../models/userModel"
import { ActivityModel } from "../models/activityModel"
import { AverageSessionsModel } from "../models/averageSessionsModel"
import IDataSource from "../dataSource/IDataSource"

class Service {

    constructor(dataSource) {
        this.dataSource = dataSource
    }

    async getUserInfo(userId) {
        const result = await this.dataSource.getUserInfo(userId)
        return new UserModel(result)
    }

    async getUserPerformance(userId) {
        const result = await this.dataSource.getUserPerformance(userId)
        return new PerformanceModel(result)
    }

    async getUserActivity(userId) {
        const result = await this.dataSource.getUserActivity(userId)
        return new ActivityModel(result)
    }

    async getUserAverageSessions(userId) {
        const result = await this.dataSource.getUserAverageSessions(userId)
        return new AverageSessionsModel(result)
    }

}

export default Service