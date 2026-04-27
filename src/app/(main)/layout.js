import "../globals.css"
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />

      {/* MAIN LAYOUT */}
      <div style={{display: "flex", minHeight: "80vh"}}>
        <main style={{ flex: 1, padding: "20px" }}>{children}</main>
      </div>

      <Footer />
    </>
  );
}
