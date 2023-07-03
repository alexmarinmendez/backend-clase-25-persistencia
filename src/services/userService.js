// import UsersDaoMem from "../daos/userDaoMem.js"
import UserDaoFile from "../daos/userDaoFile.js"

export default class UserService {
    constructor() {
        // this.usersDao = new UsersDaoMem()
        this.usersDao = new UserDaoFile()
    }

    getUsers = async() => {
        return this.usersDao.getAll()
    }

    addUser = async(user) => {
        return await this.usersDao.save(user)
    }
}