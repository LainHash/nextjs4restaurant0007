import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../../services/auth/authService";

export const useSignup = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please check again.");
      return;
    }

    setIsProcessing(true);
    try {
      await authService.register({
        userName,
        email,
        password,
        confirmPassword,
      });
      sessionStorage.setItem("signupEmail", email);

      setIsSuccess(true);
      setTimeout(() => {
        router.push("/signup/verify");
      }, 1000);
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
      alert(errorMessage);
      setIsSuccess(false);
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isProcessing,
    isSuccess,
    handleSignup,
  };
};
