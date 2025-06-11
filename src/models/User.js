import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  vehicleNumber: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  email1: { type: String, required: true },
  email2: { type: String, required: true },
});

// Use cached model to prevent overwrite warning
export default mongoose.models.User || mongoose.model("User", UserSchema);
