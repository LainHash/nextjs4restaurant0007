import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../../services/auth/authService";
import { useAuth } from "../../contexts/AuthContext";

export const useLogin = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await authService.login({ email, password });
      console.log("Login API Response:", response.data);
      
      const token = response.data?.token || response.data?.value?.token || response.data?.data?.token || response.data?.Token || response.data?.Value?.Token;
      
      if (token) {
        login(token);
      } else {
        console.error("Token not found in response!", response.data);
      }
      router.push("/");
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Invalid email or password.";
      alert(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    isProcessing,
    handleLogin,
  };
};
