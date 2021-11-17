export class ActivityModel {
    days = {
        "2020-07-01": '1',
        "2020-07-02": '2',
        "2020-07-03": '3',
        "2020-07-04": '4',
        "2020-07-05": '5',
        "2020-07-06": '6',
        "2020-07-07": '7'
    }

    constructor(result) {
        this.id = result.data.userId
        this.sessions = result.data.sessions.map((el) => ({
            day: this.days[el.day],
            kilogram: el.kilogram,
            calories: el.calories
        }))
    }
}