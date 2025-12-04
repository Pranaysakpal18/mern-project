import mongoose from "mongoose";

export const connectDB = async (MONGO_URI: string) => {
  try {
    const conn = await mongoose.connect(MONGO_URI);

    console.log("MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.log("MongoDB Error:", error);
    process.exit(1);
  }
};
