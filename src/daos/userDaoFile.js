import fs from 'fs'

export default class UserDaoFile {
    constructor() {
        this.path = './data/users.json'
        this.#init()
    }

    #init = async() => {
        if (!fs.existsSync(this.path)) {
            await fs.promises.writeFile(this.path, JSON.stringify([]))
        }
    }

    #readFile = async() => {
        return JSON.parse(await fs.promises.readFile(this.path, 'utf-8'))
    }

    getAll = async() => {
        return await this.#readFile()
    }

    save = async(user) => {
        try {
            let users = await this.#readFile()
            if (users.length===0) user.id = 1
            else user.id = users[users.length-1].id+1
            users.push(user)
            await fs.promises.writeFile(this.path, JSON.stringify(users, null, '\t'))
            return user
        } catch(err) {
            throw new Error('Cannot write file')
        }
    }
}