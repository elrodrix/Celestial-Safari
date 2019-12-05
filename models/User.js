const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;
// Create Schema
const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	user_collection: {
		type: ObjectId,
		ref: "Collection"
	},
	date: {
		type: Date,
		default: Date.now
	}
});
module.exports = User = mongoose.model("users", UserSchema);
