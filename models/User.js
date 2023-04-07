const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({
    //personal:
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    avatarURL: String,
    //user type:
    type: {type:String, required: true},
    //firebase id:
    firebaseID: {type:String, required: true},
},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;