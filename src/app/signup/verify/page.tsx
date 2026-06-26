"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeRemaining, setTimeRemaining] = useState(59);
  const [canResend, setCanResend] = useState(false);
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

  const handleVerify = () => {
    // Navigate to profile completion
    router.push("/signup/profile");
  };

  const formatTime = (seconds: number) => {
    const s = seconds < 10 ? `0${seconds}` : seconds;
    return `0:${s}`;
  };

  return (
    <main className="flex-grow flex items-center justify-center min-h-screen relative pt-24 pb-section-gap overflow-hidden bg-[#fbf9f8]">
      {/* Blurred Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center scale-110 blur-xl opacity-40"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4q72jpW1ggpSVgYd26SjhGj5w_NX7k0f1CWUKnZh6ZkpFPzPYmcKRPvudZR5dvaPn2TJ6s-Mt7harLc2h_EdFOQl8r64sHItef4d8w9LSMOGEFfClkfnin1FBFfsh7jdu0cdkYpL2nWhPEXM2gnW5IihhcStVcBAmKsDWsvhqEB9Z_j21JE8gUU4gF8FlimJnNuLqRC7v3BJsrc5_H34ryH1J8Ihov3n_2rsynhich8lLa17fgiUAJyCJahC6j6--eUwLW8tjiIk')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf9f8]/40 via-[#fbf9f8]/20 to-[#fbf9f8]/60"></div>
      </div>
      
      {/* Verification Card */}
      <div className="relative z-10 w-full max-w-[480px] px-margin-mobile md:px-0">
        <div className="bg-white/90 backdrop-blur-xl border border-outline-variant/30 p-8 md:p-12 rounded-xl shadow-2xl shadow-primary/5 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#fed488]/20 text-secondary mb-6">
              <span className="material-symbols-outlined text-4xl">mark_email_read</span>
            </div>
            <h1 className="font-headline-md text-headline-md text-on-surface mb-3">Verify Your Email</h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We've sent a 6-digit code to your email address. Please enter it below to continue.
            </p>
          </div>
          
          {/* OTP Input Grid */}
          <div className="flex justify-between gap-2 md:gap-3 mb-10">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                className="w-full aspect-square text-center font-headline-sm text-headline-sm border-b-2 border-outline-variant bg-transparent transition-all focus:outline-none focus:border-secondary"
                maxLength={1}
                pattern="\d*"
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>
          
          {/* Action Button */}
          <button
            onClick={handleVerify}
            className="w-full bg-primary text-on-primary py-4 rounded-lg font-label-md text-label-md uppercase tracking-widest hover:bg-[#858383] transition-colors duration-300 mb-8 active:scale-[0.98]"
          >
            Verify & Continue
          </button>
          
          {/* Resend Link & Timer */}
          <div className="space-y-4">
            <p className="font-label-md text-label-md text-on-surface-variant">
              Didn't receive the code?{" "}
              {!canResend ? (
                <span className="text-secondary font-bold">
                  Resend in <span>{formatTime(timeRemaining)}</span>
                </span>
              ) : (
                <button
                  className="text-secondary font-bold hover:underline"
                  onClick={() => {
                    setTimeRemaining(59);
                    setCanResend(false);
                    setOtp(["", "", "", "", "", ""]);
                  }}
                >
                  Resend Code
                </button>
              )}
            </p>
            <Link
              className="inline-flex items-center text-label-sm text-on-surface-variant hover:text-primary transition-colors"
              href="/login"
            >
              <span className="material-symbols-outlined text-sm mr-2">arrow_back</span>
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
