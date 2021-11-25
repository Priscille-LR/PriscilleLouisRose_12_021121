/**
* @param {object} average sessions data 
**/

export class AverageSessionsModel {

    //format days to equal the days of the week
    days = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }

    constructor(averageSessions) {
        this.id = averageSessions.data.userId
        this.sessions = averageSessions.data.sessions.map((el) => ({
            day: this.days[el.day],
            sessionLength: el.sessionLength
        }))
    }
}