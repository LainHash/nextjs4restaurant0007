import apiClient from "../../utils/apiClient";

export const authService = {
  register: async (data: any) => {
    return await apiClient.post("/api/auth/register", data);
  },
  verifyEmail: async (data: { email: string; token: string }) => {
    return await apiClient.post("/api/auth/verify-email", data);
  },
  completeProfile: async (data: any) => {
    return await apiClient.post("/api/auth/complete-profile", data);
  },
  login: async (data: any) => {
    return await apiClient.post("/api/auth/login", data);
  },
};
