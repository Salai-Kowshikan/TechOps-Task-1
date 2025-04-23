import { create } from 'zustand';

interface UserDetails {
  id: string;
  email: string;
  name: string;
  type: string;
  is_admin?: boolean;
  token?: string;
  phoneNumber?: string;
}

interface UserDetailStore {
  user: UserDetails | null;
  setUser: (user: UserDetails) => void;
  clearUser: () => void;
}

const useUserDetailStore = create<UserDetailStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useUserDetailStore;
