import mongoose from "mongoose";

const collectionName = 'users'

const schema = mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number,
    email: String,
    address: String,
    city: String
})

export default { collectionName, schema }