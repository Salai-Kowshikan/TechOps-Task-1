import { create } from 'zustand'

export type AccessLevel = 'read' | 'read/write' | 'no_access'

interface AdminStore {
  isSuperAdmin: boolean
  moderatorCategoryAccess: { category: string, access: AccessLevel }[]
  setIsSuperAdmin: (value: boolean) => void
  setModeratorCategoryAccess: (access: { category: string, access: AccessLevel }[]) => void
}

export const useAdminStore = create<AdminStore>((set) => ({
  isSuperAdmin: true,
  moderatorCategoryAccess: [],
  setIsSuperAdmin: (value) => set({ isSuperAdmin: value }),
  setModeratorCategoryAccess: (access) => set({ moderatorCategoryAccess: access }),
}))

