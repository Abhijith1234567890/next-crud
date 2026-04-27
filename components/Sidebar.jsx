import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside style={{
      width: "220px",
      background: "#f0f0f0",
      padding: "1rem",
      height: "100%"
    }}>
      
      <h2>Sidebar</h2>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </aside>
  );
}