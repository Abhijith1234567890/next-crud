import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/next-crud" // local DB

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return

  try {
    await mongoose.connect(MONGODB_URI)
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("DB Error:", err);
  }
}