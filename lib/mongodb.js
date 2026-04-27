import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://root:12345@cluster-1.suemxgq.mongodb.net/next-crud" // local DB

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return

  try {
    await mongoose.connect(MONGODB_URI)
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("DB Error:", err);
  }
}