import IDataSource from "./IDataSource"
import { userInfo } from "../mock/userInfo"
import { userPerformance } from "../mock/userPerformance"
import { userActivity } from "../mock/userActivity"
import { averageSessions } from "../mock/averageSessions"


class MockedData extends IDataSource {

    getUserInfo() {
        return userInfo
    }

    getUserPerformance() {
        return userPerformance
    }

    getUserActivity() {
        return userActivity
    }

    getUserAverageSessions() {
        return averageSessions
    }

}

export default MockedData