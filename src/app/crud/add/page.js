"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function AddUser() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch("/api/users", {
      method: "POST",
      headers: {"Content-Type": "application.json"},
      body: JSON.stringify({name, email})
    })

    router.push("/crud") // redirect
  }

  return (
    <div className="container">
      <h1>Add User</h1>

      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name"/>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>

        <button type="submit">Add</button>
      </form>
    </div>
  )
}