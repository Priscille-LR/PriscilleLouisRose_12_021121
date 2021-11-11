export class AverageSessionsModel {
    constructor(result) {
        this.id = result.data.userId
        this.sessions = result.data.sessions.map((el) => ({
            day: el.day,
            sessionLength: el.sessionLength
        }))
    }
}