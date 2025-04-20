import { create } from "zustand";

type AdminStore = {
  role: "superadmin" | "moderator" | null;
  setRole: (role: "superadmin" | "moderator") => void;
};

export const useAdminStore = create<AdminStore>((set) => ({
  role: null,
  setRole: (role) => set({ role }),
}));
