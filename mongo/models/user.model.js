
const mongoose =require('mongoose');
// dummy model to check if the db is working
const userSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        required: true,
        trim: true
    }
  },
  { timestamps: true }
);

const Users = mongoose.model('Users', userSchema);
module.exports = Users;