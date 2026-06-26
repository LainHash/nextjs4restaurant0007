"use client";

import Link from "next/link";
import { useSignup } from "../../hooks/auth/useSignup";

export default function SignupPage() {
  const {
    userName, setUserName,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    isProcessing, isSuccess,
    handleSignup
  } = useSignup();

  return (
    <main className="min-h-screen pt-20 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Image with Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center animate-subtle-zoom"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnk5jTnR6_YHqpJWko8_irr4y7GsbUpVtJ3i3UFWndt_rly4leoKsm-ROnoi2mJTnxes4ABMYOZnA8kBzreNDgnUPw3KTFvFsyerK90ttyTWSKlAT5fegVqGRyIegQ854cTlTJDxHgYr7wHw16h1TQxxXKa90gRPy-TGAJgO0C09LId1Fj-DHo4eh33igZBefFu8S3jVp9vuQwIAgXfeXr6_wY2A_xf1dQ47MaI3Icmk8BPRIU8EyvbklWqUp69ZB8iFrYNw26zWI')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Registration Container */}
      <section className="relative z-10 w-full max-w-xl px-margin-mobile my-12">
        <div className="bg-[#fbf9f8]/85 backdrop-blur-md p-8 md:p-12 shadow-2xl border border-white/20 rounded-lg">
          <div className="text-center mb-10">
            <h1 className="font-headline-md text-headline-md text-primary mb-2">Join LUMIÈRE</h1>
            <p className="font-body-md text-on-surface-variant">Begin your journey of culinary excellence</p>
          </div>
          <form className="space-y-6" onSubmit={handleSignup}>
            {/* User Name */}
            <div className="relative group">
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1 group-focus-within:text-secondary transition-colors" htmlFor="user_name">
                USER NAME
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md text-body-md focus:ring-0 focus:border-secondary transition-all duration-300 outline-none"
                id="user_name"
                placeholder="johndoe"
                required
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            {/* Email */}
            <div className="relative group">
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1 group-focus-within:text-secondary transition-colors" htmlFor="email">
                Email
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md text-body-md focus:ring-0 focus:border-secondary transition-all duration-300 outline-none"
                id="email"
                placeholder="email@example.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Password */}
              <div className="relative group">
                <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1 group-focus-within:text-secondary transition-colors" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md text-body-md focus:ring-0 focus:border-secondary transition-all duration-300 outline-none"
                  id="password"
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* Confirm Password */}
              <div className="relative group">
                <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1 group-focus-within:text-secondary transition-colors" htmlFor="confirm_password">
                  CONFIRM PASSWORD
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md text-body-md focus:ring-0 focus:border-secondary transition-all duration-300 outline-none"
                  id="confirm_password"
                  required
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            {/* Terms & Conditions */}
            <div className="flex items-start space-x-3 pt-2">
              <div className="flex items-center h-5">
                <input
                  className="w-4 h-4 text-secondary border-outline-variant rounded focus:ring-secondary/20"
                  id="terms"
                  required
                  type="checkbox"
                />
              </div>
              <label className="font-label-sm text-label-sm text-on-surface-variant leading-tight" htmlFor="terms">
                I agree to the{" "}
                <Link className="text-secondary border-b border-secondary/30 hover:border-secondary transition-all" href="#">
                  Terms & Conditions
                </Link>{" "}
                and Privacy Policy of Lumière.
              </label>
            </div>
            {/* Primary Action */}
            <div className="pt-4">
              <button
                className={`w-full py-4 font-label-md text-label-md uppercase tracking-[0.2em] transition-all duration-500 ease-in-out transform active:scale-[0.98] ${isSuccess ? "bg-green-800 text-white" : "bg-primary text-on-primary hover:bg-secondary"
                  }`}
                type="submit"
                disabled={isProcessing || isSuccess}
              >
                {isProcessing ? "PROCESSING..." : isSuccess ? "ACCOUNT CREATED" : "CREATE ACCOUNT"}
              </button>
            </div>
          </form>
          <div className="mt-10 pt-8 border-t border-outline-variant/30 text-center">
            <p className="font-body-md text-on-surface-variant mb-4">Already have an account?</p>
            <Link
              className="font-label-md text-label-md text-secondary border border-secondary px-8 py-3 hover:bg-secondary hover:text-on-secondary transition-all duration-300 inline-block uppercase tracking-widest"
              href="/login"
            >
              LOG IN NOW
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
