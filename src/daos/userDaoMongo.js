import mongoose from "mongoose";
import userModel from "../models/user.model.js";

export default class UserDaoMongo {
    constructor() {
        this.model = mongoose.model(userModel.collectionName, userModel.schema)
    }

    getAll = async() => {
        let result = await this.model.find()
        return result
    }

    save = async(user) => {
        let result = await this.model.create(user)
        return result
    }
}