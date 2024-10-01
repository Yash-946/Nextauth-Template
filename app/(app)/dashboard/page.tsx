"use client";
import { useSession } from "next-auth/react";
import { Navbar } from "@/components/layout/navbar";

function Dashboard() {
  const { data: session, status } = useSession();

  // console.log(session);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You are not signed in</div>;
  }

  return (
    <div className="mt-10">
      <Navbar />
      {/* <div className="mt-10">
        <h1>Welcome, {session.user?.name}</h1>
        <p>Email: {session.user?.email}</p>
        <p>User ID: {session.user?.id}</p>
        <p>profile : {session.user?.profielURL}</p>

        
        <button
          onClick={() => signOut({ callbackUrl: "/sign-in" })}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Sign Out
        </button>
      </div> */}
    </div>
  );
}

export default Dashboard;
