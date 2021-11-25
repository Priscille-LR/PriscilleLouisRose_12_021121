/**
 * Interface-like class; 
 * Made for us to know what methods to give to the classes that extend from it
 */

class IDataSource {

    async getUserInfo(userId) { }

    async getUserPerformance(userId) { }

    async getUserActivity(userId) { }

    async getUserAverageSessions(userId) { }

}

export default IDataSource


