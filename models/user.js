const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }] // reference to Post model
});

module.exports = mongoose.model('User', userSchema);
