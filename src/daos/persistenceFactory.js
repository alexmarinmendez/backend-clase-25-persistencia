import config from '../config/config.js'

export default class PersistenceFactory {
    static getPersistence = async() => {
        switch(config.app.persistence) {
            case "ARRAY":
                let { default: UsersDaoMem } = await import('./userDaoMem.js')
                return new UsersDaoMem()
            case "FILE":
                let { default: UsersDaoFile } = await import('./userDaoFile.js')
                return new UsersDaoFile()
        }
    }
}