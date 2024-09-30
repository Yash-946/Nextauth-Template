"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Navbar } from "@/components/layout/navbar";

function compiler() {
  const { data: session, status } = useSession();

  console.log(session);

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session) {
    return <div>You are not signed in</div>;
  }

  return (
    <div>

      <Navbar/>
      <div className="mt-10">

      
      <h1>Welcome, {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
      <p>User ID: {session.user?.id}</p>
      <p>profile : {session.user?.profielURL}</p>

      {/* Sign Out Button */}
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
      </div>
    </div>
  );
}

export default compiler;
