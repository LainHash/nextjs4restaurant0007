import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../../services/auth/authService";

export const useCompleteProfile = () => {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState<boolean | null>(null);
  const [citizenCardId, setCitizenCardId] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleCompleteProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (gender === null) {
      alert("Please select your gender.");
      return;
    }

    const email = sessionStorage.getItem("signupEmail");
    if (!email) {
      alert("Session expired. Please sign up again.");
      router.push("/signup");
      return;
    }

    setIsProcessing(true);
    try {
      await authService.completeProfile({
        email,
        firstName,
        lastName,
        dob,
        phone,
        gender,
        citizenCardId,
        address,
        city,
        country,
      });

      setIsSuccess(true);
      setTimeout(() => {
        sessionStorage.removeItem("signupEmail");
        router.push("/login");
      }, 1200);
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Failed to complete profile. Please try again.";
      alert(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    firstName, setFirstName,
    lastName, setLastName,
    dob, setDob,
    phone, setPhone,
    gender, setGender,
    citizenCardId, setCitizenCardId,
    address, setAddress,
    city, setCity,
    country, setCountry,
    isProcessing,
    isSuccess,
    handleCompleteProfile,
    router
  };
};
