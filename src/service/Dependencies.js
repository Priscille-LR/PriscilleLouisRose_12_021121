import MockedData from "../dataSource/MockedData"
import Service from "./Service"

/**
 * we can either use the mocked data or the one fetched from the API
 * replace DataFromAPI() by MockedData() to use the local mocked data
 */
export const dependencies = {
    userService: new Service(new MockedData())
}