import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})


var UserMod = mongoose.model('Users', userSchema);

export default UserMod