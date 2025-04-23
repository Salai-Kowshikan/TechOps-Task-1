import axios from 'axios';

const API_BASE = '/api/auth';

export interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  phone: string;
}

export const registerUser = async (formData: RegisterFormData | FormData): Promise<any> => {
  try {
    let dataToSend: FormData;

    if (formData instanceof FormData) {
      dataToSend = formData;
    } else {
      dataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        dataToSend.append(key, value);
      });
    }

    const response = await axios.post(`${API_BASE}/register`, dataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: 'Registration failed' };
  }
};