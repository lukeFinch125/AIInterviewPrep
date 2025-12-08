"use client";

import { authClient } from "@/lib/auth-client"; //import the auth client

export const HomeView = () => {
  const { data: session } = authClient.useSession();
  if(!session) {
    return (
      <p>loading...</p>
    )
  }
  
  return (
    <div className="grid-cols2">
    </div>
  )
}