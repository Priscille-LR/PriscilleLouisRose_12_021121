/**
* @param {object} user general info 
**/

export class UserModel {
    constructor(userInfo) {
        this.id = userInfo.data.id
        this.userInfo = userInfo.data.userInfos
        this.todayScore = userInfo.data.todayScore || userInfo.data.score //fix api naming
        this.keyData = userInfo.data.keyData
    }

    /**
     * @returns {string} user firstname
     */
    getUserName() {
        return `${this.userInfo.firstName}`
    }

    /**
     * @returns {string} user calorie count
     */
    getCalorieCount() {
        return `${this.keyData.calorieCount} kCal`
    }

    /**
     * @returns {string} user protein count
     */
    getProteinCount() {
        return `${this.keyData.proteinCount} g`
    }

    /**
     * @returns {string} user carbohydrate count
     */
    getCarbohydrateCount() {
        return `${this.keyData.carbohydrateCount} g`
    }

    /**
     * @returns {string} user lipid count
     */
    getLipidCount() {
        return `${this.keyData.lipidCount} g`
    }
}