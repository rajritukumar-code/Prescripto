import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, reqired: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, reqired: true },
    image: { type: String, reqired: true },
    speciality: { type: String, reqired: true },
    degree: { type: String, reqired: true },
    experience: { type: String, reqired: true },
    About: { type: String, reqired: true },
    avilable: { type: Boolean, default: true },
    fees: { type: Number, reqired: true },
    address: { type: Object, reqired: true },
    data: { type: Number, reqired: true },
    slots_Booked: { type: Object, default: {} },
  },
  { minimize: false }
);

const doctorModel =
  mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

export default doctorModel;
