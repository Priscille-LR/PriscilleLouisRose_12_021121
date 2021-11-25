import IDataSource from "./IDataSource"
import { userInfo } from "../mock/userInfo"
import { userPerformance } from "../mock/userPerformance"
import { userActivity } from "../mock/userActivity"
import { averageSessions } from "../mock/averageSessions"

/**
 * Fetch mocked data from local Mock repository 
 */

class MockedData extends IDataSource {

    /**
     * @param {string} userId 
     * @returns {object} mocked data
     */
    getUserInfo(userId) {
        return userInfo
    }

    getUserPerformance(userId) {
        return userPerformance
    }

    getUserActivity(userId) {
        return userActivity
    }

    getUserAverageSessions(userId) {
        return averageSessions
    }
}

export default MockedData