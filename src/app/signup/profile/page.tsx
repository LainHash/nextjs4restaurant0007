"use client";

import { useState } from "react";
import Link from "next/link";

export default function CompleteProfilePage() {
  const [dietaryTags, setDietaryTags] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleTag = (tag: string) => {
    if (dietaryTags.includes(tag)) {
      setDietaryTags(dietaryTags.filter((t) => t !== tag));
    } else {
      setDietaryTags([...dietaryTags, tag]);
    }
  };

  const tags = ["Vegan", "Vegetarian", "Gluten-Free", "Dairy-Free", "Nut Allergy"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsSuccess(true);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <main className="flex items-center justify-center min-h-screen px-margin-mobile pt-32 pb-12 relative overflow-hidden bg-background">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        <div
          className="w-full h-full scale-110 blur-sm"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmhNU-Ag7TwDGEJivtFb3mWS3qE0WYFnHd7Bxa_Mh-DulxY2gm4GS2A7gpUsMbMUb4cbON_8w0rj8noM2O5Od_i8LFn9lhdh6saHYuCUGd-GGRHsRPrwCDm_NUesfRpxwqxrcIPECM0Vs8qioNjcUUyvwH5nVr17JZY0AsEUYs1eaO9-MVWX6-OZ3cuHPVqBIayFCqz5ryk1y_t5xSvnUkmGKFkIDeCS1gPZpXFL7y07D2NcX91Ei_MLMcUNE3frwJheKii66N_VI')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      
      {/* Header / Top Bar (Simplified for Onboarding) - Usually hidden by Layout Navbar but included for completeness if used standalone */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop py-6">
        {/* Empty as we rely on the global Navbar, but we could put the progress bar here */}
        <div className="hidden">LUMIÈRE</div>
        <div className="absolute top-20 right-8 flex items-center gap-4 z-50">
          <span className="font-label-md text-label-md text-white/70 uppercase tracking-widest hidden md:inline-block">Step 2 of 2</span>
          <div className="w-32 h-[2px] bg-white/20 rounded-full overflow-hidden hidden md:block">
            <div className="h-full bg-secondary w-full transition-all duration-1000 ease-in-out"></div>
          </div>
        </div>
      </header>

      <div className="relative z-10 w-full max-w-xl rounded-lg p-10 md:p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 bg-[#fbf9f8]/85 backdrop-blur-md border border-outline-variant/40">
        <div className="mb-10">
          <h1 className="font-headline-md text-headline-md text-primary mb-2">Refine Your Experience</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Tell us a bit more to ensure your visit to Lumière Gastronomy is perfectly tailored to your preferences.
          </p>
        </div>
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Phone & DOB Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Phone Number */}
            <div className="space-y-2 group focus-within:text-secondary">
              <label className="font-label-md text-label-md text-primary block group-focus-within:text-secondary transition-colors" htmlFor="phone">
                PHONE NUMBER
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline focus:border-secondary focus:ring-0 px-0 py-3 font-body-md transition-colors placeholder:text-outline outline-none"
                id="phone"
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
            </div>
            {/* Date of Birth */}
            <div className="space-y-2 group focus-within:text-secondary">
              <label className="font-label-md text-label-md text-primary block group-focus-within:text-secondary transition-colors" htmlFor="dob">
                DATE OF BIRTH <span className="text-on-surface-variant/50 font-normal">(OPTIONAL)</span>
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline focus:border-secondary focus:ring-0 px-0 py-3 font-body-md transition-colors text-on-surface-variant outline-none"
                id="dob"
                type="date"
              />
            </div>
          </div>
          
          {/* Preferred Language */}
          <div className="space-y-2 group focus-within:text-secondary">
            <label className="font-label-md text-label-md text-primary block group-focus-within:text-secondary transition-colors" htmlFor="language">
              PREFERRED LANGUAGE
            </label>
            <div className="relative">
              <select
                className="w-full appearance-none bg-transparent border-0 border-b border-outline focus:border-secondary focus:ring-0 px-0 py-3 font-body-md transition-colors cursor-pointer pr-10 outline-none"
                id="language"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="it">Italiano</option>
                <option value="es">Español</option>
                <option value="ja">日本語</option>
              </select>
              <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant group-focus-within:text-secondary">
                expand_more
              </span>
            </div>
          </div>
          
          {/* Dietary Preferences */}
          <div className="space-y-4">
            <label className="font-label-md text-label-md text-primary block">DIETARY PREFERENCES</label>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => {
                const isActive = dietaryTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded-full border transition-all font-label-md text-label-md flex items-center gap-2 group ${
                      isActive
                        ? "border-secondary bg-secondary/10 text-secondary"
                        : "border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary"
                    }`}
                  >
                    {tag}{" "}
                    <span
                      className={`material-symbols-outlined text-[18px] transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      check
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="text-label-sm text-on-surface-variant/60 italic">
              These preferences will be applied to all your future bookings.
            </p>
          </div>
          
          {/* Actions */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <button
              className="w-full md:w-auto px-8 py-4 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors order-2 md:order-1"
              type="button"
            >
              Skip for now
            </button>
            <button
              className={`w-full md:w-auto px-12 py-4 font-label-md text-label-md rounded-lg hover:shadow-lg active:scale-[0.98] transition-all duration-300 ease-out order-1 md:order-2 flex items-center justify-center gap-3 ${
                isSuccess ? "bg-secondary text-white" : "bg-primary text-white hover:bg-secondary"
              }`}
              type="submit"
              disabled={isProcessing || isSuccess}
            >
              {isProcessing ? (
                <>
                  <span className="animate-spin material-symbols-outlined">progress_activity</span>
                  Processing...
                </>
              ) : isSuccess ? (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  Welcome to Lumière
                </>
              ) : (
                <>
                  Complete Profile
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
