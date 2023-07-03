// import UsersDaoMem from "../daos/userDaoMem.js"
// import UserDaoFile from "../daos/userDaoFile.js"
import PersistenceFactory from "../daos/persistenceFactory.js"

export default class UserService {
    constructor() {
        // this.usersDao = new UsersDaoMem()
        // this.usersDao = new UserDaoFile()
        this.usersDao
        this.init()
    }

    init = async() => {
        this.usersDao = await PersistenceFactory.getPersistence()
    }

    getUsers = async() => {
        return this.usersDao.getAll()
    }

    addUser = async(user) => {
        return await this.usersDao.save(user)
    }
}