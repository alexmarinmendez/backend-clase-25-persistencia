import UserService from "../services/userService.js"
import UserDTO from "../dtos/userDto.js"
const userService = new UserService()

const getUsers = async(req, res) => {
    let result = await userService.getUsers()
    let resultDTO = result.map(user => new UserDTO(user))
    res.send(resultDTO)
}

const saveUser = async(req, res) => {
    let user = req.body
    let result = await userService.addUser(user)
    res.send(new UserDTO(result))
}

export default { getUsers, saveUser }