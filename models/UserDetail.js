import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    user_userid: {
		type: String,
		required: [true, "userid is required!"],
		trim: true,
	},
	data: {
		type: mongoose.Schema.Types.ObjectId, ref: alarm,
		required: [true, "password is required!"],
	},
	createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.User ||
    mongoose.model("User", UserSchema);