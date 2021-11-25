/**
* @param {object} activity data 
**/

export class ActivityModel {

    constructor(activity) {
        this.id = activity.data.userId
        this.sessions = activity.data.sessions.map((el, index) => ({
            day: index + 1, //format days to be like what is expected (current month days)
            kilogram: el.kilogram,
            calories: el.calories
        }))
    }
}