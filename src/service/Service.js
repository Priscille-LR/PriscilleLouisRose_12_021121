import { UserModel } from "../models/userModel"

class Service {

    constructor(dataSource) {
        this.dataSource = dataSource
    }

    getUserInfo() {
        const result = this.dataSource.getUserInfo()
        return new UserModel(result)
    }


}

export default Service