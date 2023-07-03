import UserService from "../services/userService.js"
const userService = new UserService()

const getUsers = async(req, res) => {
    let result = await userService.getUsers()
    res.send(result)
}

const saveUser = async(req, res) => {
    let user = req.body
    let result = await userService.addUser(user)
    res.send(result)
}

export default { getUsers, saveUser }