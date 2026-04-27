import "../../globals.css"
import Sidebar from "../../../../components/Sidebar";

export default function DashboardLayout({children}) {
  return (
    <div style={{display: "flex", minHeight: "100vh"}}>
      
      {/* SIDEBAR */}
      <Sidebar/>

      {/* MAIN CONTENT */}
      <main style={{flex: 1, padding: "30px", background: "#f5f7fa"}}>
        {children}
      </main>
    </div>
  );
}