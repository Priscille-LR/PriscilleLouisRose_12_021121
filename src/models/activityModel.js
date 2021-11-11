export class ActivityModel {
    constructor(result) {
        this.id = result.data.userId
        this.sessions = result.data.sessions
    }
}