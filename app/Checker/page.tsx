"use client";
import { useSession } from "next-auth/react";

export default function DebugSession() {
  const { data: session, status } = useSession();

  console.log("Session data:", session);
  console.log("Session status:", status);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>No session found</p>;

  return (
    <div>
      <h1>User: {session.user?.name}</h1>
      <p>Access Token: {session.accessToken}</p>
    </div>
  );
}
