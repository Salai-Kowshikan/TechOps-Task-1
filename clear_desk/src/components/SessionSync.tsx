"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import useUserDetailStore from "@/Store/userDetailStore";

export default function SessionSync() {
  const { data: session } = useSession();
  const setUser = useUserDetailStore((state) => state.setUser);
  
  useEffect(() => {
    if (session?.user) {
      console.log("Syncing session to store:", session.user);
      setUser({
        id: session.user.id,
        email: session.user.email || "",
        name: session.user.name || "",
        type: session.user.type || "user",
        is_admin: session.user.is_admin,
        token: session.user.token,
        phoneNumber: session.user.phoneNumber,
      });
    }
  }, [session, setUser]);

  return null; // This component doesn't render anything
}
