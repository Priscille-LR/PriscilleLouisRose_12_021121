import IDataSource from "./IDataSource"
import { userInfo } from "../mock/userInfo"


class MockedData extends IDataSource {

    getUserInfo() {
        return userInfo
    }


}

export default MockedData