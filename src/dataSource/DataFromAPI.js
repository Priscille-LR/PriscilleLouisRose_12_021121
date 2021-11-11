import IDataSource from "./IDataSource"
import { useEffect } from "react";

class DataFromAPI extends IDataSource {


    async getUserInfo(userId) {
        const backend = "http://localhost:3000"

        const result = fetch(backend + '/user/' + userId)
            .then(response => response.json())
            .catch(error => console.log(error))
        return result

        // useEffect(() => {
        //     fetch(backend)
        //     .then((response) => response.json()
        //     .then(({userInfo}) => console.log(userInfo))
        //     .catch((error) => console.log(error))
        //     )
        // }, [])
    }
}

export default DataFromAPI