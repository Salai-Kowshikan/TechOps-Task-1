import axios from 'axios';

const API_BASE = '/api/auth';

export interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  phone: string;
}

export const registerUser = async (formData: FormData): Promise<any> => {
  try {
    const response = await axios.post(`${API_BASE}/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'Registration failed' };
  }
};