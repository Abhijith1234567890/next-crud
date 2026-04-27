"use client"

import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function EditUser() {
  const { id } = useParams("")
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  // fetch single user
  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        const user = data.find(u => u._id === id)
        if (user) {
          setName(user.name)
          setEmail(user.email)
        }
      })
  }, [id])

  const handleUpdate = async (e) => {
    e.preventDefault()

    await fetch("/api/users", {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name, email })
    })

    router.push("/crud") // redirect
  }

  return (
    <div className="container">
      <h1>Edit User</h1>

      <form onSubmit={handleUpdate}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}