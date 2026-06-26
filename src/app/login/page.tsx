"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-[10s] scale-110 motion-safe:animate-[pulse_15s_infinite]"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAL6VFMjKMzP6zslM_6xC1T5qDOzxnxGlMGergavPOh06_Y9UpvuYvgB0q6BVnRczNUL1IpVoqcSdzBKZrCBtVibyCDhMI4UqfOE2JzaE4bgzV26nNiGW_cW92n2Y7ieB6f1UdICHvtzsOKz3xcl5IL9dxJS-hVHrEehzQDQNa_VwvRerHo_b5dalyuAiEfzTNF82vE2VvInV4HnDgOYLFocEzVqcb3lyCLoAzJyUGW5kCN5_go95Wzbva5SjB8cY3IkiK7CUukD0M')",
          }}
        ></div>
        {/* Overlay for legibility */}
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Login Form Canvas */}
      <div className="relative z-10 w-full max-w-md px-margin-mobile">
        <div className="bg-white/85 backdrop-blur-md p-10 md:p-12 rounded-lg border border-outline-variant/20 shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="font-headline-md text-headline-md text-primary mb-2">Welcome Back</h1>
            <p className="font-body-md text-body-md text-on-surface-variant italic">A refined culinary experience awaits you.</p>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5 group">
              <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block group-focus-within:text-secondary transition-colors" htmlFor="email">
                Email
              </label>
              <input
                className="w-full bg-transparent border-b border-outline-variant focus:border-secondary outline-none py-3 px-1 transition-all duration-300 font-body-md text-body-md placeholder:text-outline-variant/50 focus:ring-0"
                id="email"
                placeholder="username@email.com"
                type="email"
                required
              />
            </div>
            <div className="space-y-1.5 group">
              <div className="flex justify-between items-center">
                <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block group-focus-within:text-secondary transition-colors" htmlFor="password">
                  PASSWORD
                </label>
                <Link className="font-label-sm text-label-sm text-secondary hover:underline transition-all" href="#">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  className="w-full bg-transparent border-b border-outline-variant focus:border-secondary outline-none py-3 px-1 transition-all duration-300 font-body-md text-body-md placeholder:text-outline-variant/50 focus:ring-0"
                  id="password"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  required
                />
                <button
                  className="absolute right-2 top-3 text-on-surface-variant/60 hover:text-primary transition-colors"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>
            <div className="pt-4">
              <button
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-lg hover:bg-primary/90 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/10"
                type="submit"
              >
                LOG IN
              </button>
            </div>
          </form>
          <div className="mt-10 pt-8 border-t border-outline-variant/20 text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Don't have an account?{" "}
              <Link className="text-secondary font-bold hover:underline transition-all ml-1" href="/signup">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
        {/* Decorative Element */}
        <div className="mt-8 flex justify-center gap-4 opacity-40">
          <div className="h-[1px] w-12 bg-outline-variant self-center"></div>
          <span className="font-label-sm text-label-sm text-white italic">Lumière Gastronomy</span>
          <div className="h-[1px] w-12 bg-outline-variant self-center"></div>
        </div>
      </div>
    </main>
  );
}
