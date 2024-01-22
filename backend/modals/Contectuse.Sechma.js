import mongoose from "mongoose";

const Contactus_Schema = mongoose.Schema({
  FullName: String,
  Phone: Number,
  Emai: String,
  Location: String,
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contactus_Modal = mongoose.model("mail", Contactus_Schema);
export default Contactus_Modal;
