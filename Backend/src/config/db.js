import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected Sucessfully");
  } catch (error) {
    console.log("getting error to connetct the mongodb", error);
    process.exit(1); //exit with faliure
  }
};
