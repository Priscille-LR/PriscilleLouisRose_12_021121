import { PerformanceModel } from "../models/perfomanceModel"
import { UserModel } from "../models/userModel"
import { ActivityModel } from "../models/activityModel"
import { AverageSessionsModel } from "../models/averageSessionsModel"
import MockedData from "../dataSource/MockedData"
import DataFromAPI from "../dataSource/DataFromAPI"

class Service {

    constructor() {
        const sourceEnv = process.env.REACT_APP_SOURCE;
        this.dataSource = sourceEnv === "MOCK" ? new MockedData() : new DataFromAPI()
    }

    async getUserInfo(userId) {
        const result = await this.dataSource.getUserInfo(userId)
        console.log(result)
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