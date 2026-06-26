"use client";

import { useCompleteProfile } from "../../../hooks/auth/useCompleteProfile";

export default function CompleteProfilePage() {
  const {
    firstName, setFirstName,
    lastName, setLastName,
    dob, setDob,
    phone, setPhone,
    gender, setGender,
    citizenCardId, setCitizenCardId,
    address, setAddress,
    city, setCity,
    country, setCountry,
    isProcessing, isSuccess,
    handleCompleteProfile,
    router
  } = useCompleteProfile();

  return (
    <main className="flex items-center justify-center min-h-screen px-margin-mobile pt-32 pb-12 relative overflow-hidden bg-background">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        <div
          className="w-full h-full scale-110 blur-sm bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmhNU-Ag7TwDGEJivtFb3mWS3qE0WYFnHd7Bxa_Mh-DulxY2gm4GS2A7gpUsMbMUb4cbON_8w0rj8noM2O5Od_i8LFn9lhdh6saHYuCUGd-GGRHsRPrwCDm_NUesfRpxwqxrcIPECM0Vs8qioNjcUUyvwH5nVr17JZY0AsEUYs1eaO9-MVWX6-OZ3cuHPVqBIayFCqz5ryk1y_t5xSvnUkmGKFkIDeCS1gPZpXFL7y07D2NcX91Ei_MLMcUNE3frwJheKii66N_VI')",
          }}
        ></div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed top-20 right-8 flex items-center gap-4 z-50">
        <span className="font-label-md text-label-md text-white/70 uppercase tracking-widest hidden md:inline-block">
          Step 2 of 2
        </span>
        <div className="w-32 h-[2px] bg-white/20 rounded-full overflow-hidden hidden md:block">
          <div className="h-full bg-secondary w-full transition-all duration-1000 ease-in-out"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-2xl rounded-lg p-10 md:p-12 shadow-2xl bg-[#fbf9f8]/85 backdrop-blur-md border border-outline-variant/40">
        <div className="mb-10">
          <h1 className="font-headline-md text-headline-md text-primary mb-2">
            Complete Your Profile
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Please provide your personal details to finalise your Lumière Gastronomy account.
          </p>
        </div>

        <form className="space-y-7" onSubmit={handleCompleteProfile}>
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <label
                className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1 group-focus-within:text-secondary transition-colors"
                htmlFor="first_name"
              >
                FIRST NAME
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md text-body-md focus:ring-0 focus:border-secondary transition-all duration-300 outline-none"
                id="first_name"
                placeholder="John"
                required
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="relative group">
              <label
                className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1 group-focus-within:text-secondary transition-colors"
                htmlFor="last_name"
              >
                LAST NAME
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md text-body-md focus:ring-0 focus:border-secondary transition-all duration-300 outline-none"
                id="last_name"
                placeholder="Doe"
                required
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Date of Birth & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <label
                className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1 group-focus-within:text-secondary transition-colors"
                htmlFor="dob"
              >
                DATE OF BIRTH
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md transition-colors text-on-surface-variant focus:border-secondary focus:ring-0 outline-none"
                id="dob"
                required
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="relative group">
              <label
                className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1 group-focus-within:text-secondary transition-colors"
                htmlFor="phone"
              >
                PHONE NUMBER
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md text-body-md focus:ring-0 focus:border-secondary transition-all duration-300 outline-none placeholder:text-outline-variant/50"
                id="phone"
                placeholder="+84 000 000 000"
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {/* Gender */}
          <div className="space-y-3">
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase">
              GENDER
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setGender(true)}
                className={`flex-1 py-3 font-label-md text-label-md border transition-all duration-200 rounded ${gender === true
                    ? "border-secondary bg-secondary/10 text-secondary"
                    : "border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary"
                  }`}
              >
                <span className="material-symbols-outlined text-[18px] align-middle mr-1">male</span>
                Male
              </button>
              <button
                type="button"
                onClick={() => setGender(false)}
                className={`flex-1 py-3 font-label-md text-label-md border transition-all duration-200 rounded ${gender === false
                    ? "border-secondary bg-secondary/10 text-secondary"
                    : "border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary"
                  }`}
              >
                <span className="material-symbols-outlined text-[18px] align-middle mr-1">female</span>
                Female
              </button>
            </div>
          </div>

          {/* Citizen Card ID */}
          <div className="relative group">
            <label
              className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1 group-focus-within:text-secondary transition-colors"
              htmlFor="citizen_card_id"
            >
              CITIZEN ID / PASSPORT NO.
            </label>
            <input
              className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md text-body-md focus:ring-0 focus:border-secondary transition-all duration-300 outline-none"
              id="citizen_card_id"
              placeholder="123456789012"
              required
              type="text"
              value={citizenCardId}
              onChange={(e) => setCitizenCardId(e.target.value)}
            />
          </div>

          {/* Address */}
          <div className="relative group">
            <label
              className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1 group-focus-within:text-secondary transition-colors"
              htmlFor="address"
            >
              ADDRESS
            </label>
            <input
              className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md text-body-md focus:ring-0 focus:border-secondary transition-all duration-300 outline-none"
              id="address"
              placeholder="123 Main Street"
              required
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* City & Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <label
                className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1 group-focus-within:text-secondary transition-colors"
                htmlFor="city"
              >
                CITY
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md text-body-md focus:ring-0 focus:border-secondary transition-all duration-300 outline-none"
                id="city"
                placeholder="Ho Chi Minh City"
                required
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="relative group">
              <label
                className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1 group-focus-within:text-secondary transition-colors"
                htmlFor="country"
              >
                COUNTRY
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md text-body-md focus:ring-0 focus:border-secondary transition-all duration-300 outline-none"
                id="country"
                placeholder="Vietnam"
                required
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <button
              className="w-full md:w-auto px-8 py-4 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors order-2 md:order-1"
              type="button"
              onClick={() => router.push("/login")}
            >
              Skip for now
            </button>
            <button
              className={`w-full md:w-auto px-12 py-4 font-label-md text-label-md rounded-lg active:scale-[0.98] transition-all duration-300 ease-out order-1 md:order-2 flex items-center justify-center gap-3 ${isSuccess
                  ? "bg-secondary text-white"
                  : "bg-primary text-white hover:bg-secondary hover:shadow-lg"
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
                  Redirecting to Login...
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

      {/* Simple Footer for Onboarding */}
      <footer className="fixed bottom-0 w-full py-4 text-center pointer-events-none">
        <p className="font-label-sm text-label-sm text-white/40">
          © 2024 Lumière Gastronomy. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
