export class UserModel {
    constructor(result) {
        this.id = result.data.id
        this.userInfo = result.data.userInfos
        this.todayScore = result.data.todayScore
        this.keyData = result.data.keyData
    }

    getUserName() {
        return `${this.userInfo.firstName}`
    }

    getCalorieCount() {
        return `${this.keyData.calorieCount} kCal`
    }

    getProteinCount() {
        return `${this.keyData.proteinCount} g`
    }

    getCarbohydrateCount() {
        return `${this.keyData.carbohydrateCount} g`
    }

    getLipidCount() {
        return `${this.keyData.lipidCount} g`
    }
}