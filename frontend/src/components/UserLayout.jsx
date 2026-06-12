import Navbar from "./Navbar";

function UserLayout({
  children
}) {

  return (

    <>
      <Navbar />

      <div
        style={{
          padding:"20px"
        }}
      >
        {children}
      </div>

    </>

  );
}

export default UserLayout;
