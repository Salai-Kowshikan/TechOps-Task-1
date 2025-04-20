"use client";
import { useAdminStore } from "@/lib/zustand/useAdminStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function RoleGuard({
  children,
  roles,
}: {
  children: React.ReactNode;
  roles: ("superadmin" | "moderator")[];
}) {
  const { role } = useAdminStore();
  const router = useRouter();

  useEffect(() => {
    if (role && !roles.includes(role)) {
      router.push("/");
    }
  }, [role]);

  if (!role || !roles.includes(role)) return null;

  return <>{children}</>;
}
