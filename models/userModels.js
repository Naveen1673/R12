const mongoose = require("mongoose");
const router  = require("../routes/userRoute");


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true,
        trim: true,
        require: [true, "username is required"],
        minLength: [3, "username must be of atleast 3 character"]
    },
    email: {
        type: String,
        unique: true,
        lowecase: true,
        require: [true, "email is required"],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
    },
    password: {
        type: String,
        require: [true, "Password is required"],
        minLength: [6, 'password must be of 6 character '],
        maxLength: [12, 'password must be of 6 character ']
    },

},
    { timestamps: true }
);

const user = mongoose.model('user', userSchema);
module.exports = user;