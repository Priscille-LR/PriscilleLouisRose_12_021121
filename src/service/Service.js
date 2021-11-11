import { PerformanceModel } from "../models/perfomanceModel"
import { UserModel } from "../models/userModel"
import { ActivityModel } from "../models/activityModel"
import { AverageSessionsModel } from "../models/averageSessionsModel"

class Service {

    constructor(dataSource) {
        this.dataSource = dataSource
    }

    getUserInfo() {
        const result = this.dataSource.getUserInfo()
        return new UserModel(result)
    }

    getUserPerformance() {
        const result = this.dataSource.getUserPerformance()
        return new PerformanceModel(result)
    }

    getUserActivity() {
        const result = this.dataSource.getUserActivity()
        return new ActivityModel(result)
    }

    getUserAverageSessions() {
        const result = this.dataSource.getUserAverageSessions()
        return new AverageSessionsModel(result)
    }

}

export default Service