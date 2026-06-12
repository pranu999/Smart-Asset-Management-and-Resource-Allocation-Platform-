import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AdminLayout({ children }) {

  return (
    <>
      <Navbar />

      <Sidebar />

      <div
        style={{
          marginLeft: "240px",
          padding: "20px"
        }}
      >
        {children}
      </div>
    </>
  );
}

export default AdminLayout;