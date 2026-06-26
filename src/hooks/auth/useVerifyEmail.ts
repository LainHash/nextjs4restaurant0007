import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../../services/auth/authService";

export const useVerifyEmail = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeRemaining, setTimeRemaining] = useState(59);
  const [canResend, setCanResend] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeRemaining > 0) {
      const timerId = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      setCanResend(true);
    }
  }, [timeRemaining]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const code = otp.join("");
    if (code.length !== 6) return;

    const email = sessionStorage.getItem("signupEmail");
    if (!email) {
      alert("Session expired. Please sign up again.");
      router.push("/signup");
      return;
    }

    setIsProcessing(true);
    try {
      await authService.verifyEmail({ email, token: code });
      router.push("/signup/profile");
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Invalid or expired OTP code.";
      alert(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleResend = () => {
    // TODO: Call API to resend OTP
    setTimeRemaining(59);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
  };

  return {
    otp,
    timeRemaining,
    canResend,
    isProcessing,
    inputRefs,
    handleChange,
    handleKeyDown,
    handleVerify,
    handleResend,
  };
};
