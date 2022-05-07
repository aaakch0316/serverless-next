import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userid: {
		type: String,
		required: [true, "userid is required!"],
		trim: true,
	},
	password: {
		type: String,
		required: [true, "password is required!"],
		trim: true,
	},
	createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.User ||
    mongoose.model("User", UserSchema);