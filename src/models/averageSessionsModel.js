export class AverageSessionsModel {
    days = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }

    constructor(result) {
        this.id = result.data.userId
        this.sessions = result.data.sessions.map((el) => ({
            day: this.days[el.day],
            sessionLength: el.sessionLength
        }))
    }
}