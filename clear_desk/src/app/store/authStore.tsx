// app/store/authStore.ts
import { create } from 'zustand'
import axios from 'axios'

interface User {
  name?: string
  email: string
  [key: string]: any
}

interface AuthState {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  checkAuth: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  login: async (email, password) => {
    const res = await axios.post('/api/auth/login', { email, password })
    set({ user: res.data.user })
  },

  logout: async () => {
    await axios.post('/api/auth/logout')
    set({ user: null })
  },

  checkAuth: async () => {
    try {
      const res = await axios.get('/api/me')
      set({ user: res.data.user })
    } catch {
      set({ user: null })
    }
  },
}))

