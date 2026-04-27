import { connectDB } from "../../../../lib/mongodb";
import User from "../../../../models/User";

// GET - fetch users from DB
export async function GET() {
  await connectDB()

  const users = await User.find()

  return Response.json(users)
}

// POST - save user to DB
export async function POST(req) {
  await connectDB()

  const body = await req.json()

  const newUser = await User.create(body)

  return Response.json({
    message: "User saved",
    data: newUser
  })
}

// PUT (Update)
export async function PUT(req) {
  await connectDB()
  const body = await req.json()

  const updatedUser = await User.findByIdAndUpdate(
    body.id,
    { name: body.name, email: body.email, phone: body.phone },
    { new: true }
  )

  return Response.json(updatedUser)
}

// DELETE
export async function DELETE(req) {
  await connectDB()

  const { id } = await req.json()

  await User.findByIdAndDelete(id)

  return Response.json({ message: "User deleted" })
}