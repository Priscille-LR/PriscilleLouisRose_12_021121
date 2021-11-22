import IDataSource from "./IDataSource"

const host = process.env.REACT_APP_API
const port = process.env.REACT_APP_PORT


class DataFromAPI extends IDataSource {


    async getUserInfo(userId) {
        //const response = await fetch(`http://localhost:3000/user/${userId}`)
        //const { userInfo } = await response.json();
        //console.log(userInfo)
        // return userInfo
        const userInfo = await fetch(`http://${host}:${port}/user/${userId}`).then((data) => data.json())
        return userInfo
    }

    async getUserPerformance(userId) {
        // const response = await fetch('http://localhost:3000/user/' + userId + '/performance')
        // const { userPerformance } = await response.json()
        const userPerformance = await fetch(`http://${host}:${port}/user/${userId}/performance`).then((data) => data.json())
        return userPerformance
    }

    async getUserActivity(userId) {
        // const response = await fetch('http://localhost:3000/user/' + userId + '/activity')
        // const { userActivity } = await response.json()
        const userActivity = await fetch(`http://${host}:${port}/user/${userId}/activity`).then((data) => data.json())
        return userActivity
    }

    async getUserAverageSessions(userId) {
        // const response = await fetch('http://localhost:3000/user/' + userId + '/average-sessions')
        // const { userAverageSessions } = await response.json()
        const userAverageSessions = await fetch(`http://${host}:${port}/user/${userId}/average-sessions`).then((data) => data.json())
        return userAverageSessions
    }
}

export default DataFromAPI