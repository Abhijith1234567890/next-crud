"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchUsers = async () => {
    try {
      setLoading(true)

      const res = await fetch("api/users")

      if (!res.ok) throw new Error("Failed to fetch")

      const data = await res.json()
      setUsers(data)
    } catch (err) {
      console.log("Fetch Error:", err);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure?")

    if (!confirmDelete) return

    try {
      await fetch("/api/users", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      })

      fetchUsers()
    } catch (err) {
      console.log("Delete Error:", err);
    }
  }

  return (
    <div className="container">
      <h1>Users List</h1>

      <Link href="/crud/add">➕ Add User</Link>

      {loading ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map(user => (
          <div key={user._id} style={{
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "8px"
          }}>
            <strong>{user.name}</strong> - {user.email}

            <div style={{ marginTop: "5px" }}>
              <Link href={`/crud/edit/${user._id}`}>Edit</Link>

              <button style={{ marginLeft: "10px" }} onClick={() => handleDelete(user._id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}