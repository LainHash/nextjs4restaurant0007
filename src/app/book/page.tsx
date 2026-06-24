import Link from 'next/link';
export default function Page() {
  return (
    <>

      {/* Main Content Canvas */}
      <main className="flex-grow pt-[120px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Page Header */}
        <div className="mb-16 max-w-2xl">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">Reserve a Table</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Experience quiet luxury. Secure your dining experience with us.</p>
        </div>
        {/* Asymmetric Booking Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Reservation Widget */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Date, Time, Guests */}
            <section className="bg-surface-container-lowest p-8 border border-outline-variant/50 rounded-lg shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="font-headline-sm text-headline-sm text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">calendar_today</span>
                Date &amp; Time
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date Input */}
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Select Date</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body-lg text-body-lg text-primary transition-colors cursor-pointer" type="date" defaultValue="2024-11-15" />
                </div>
                {/* Time Input */}
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Select Time</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body-lg text-body-lg text-primary transition-colors cursor-pointer appearance-none" defaultValue="19:00">
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                  </select>
                </div>
                {/* Guests Input */}
                <div className="flex flex-col md:col-span-2 mt-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-4">Number of Guests</label>
                  <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                    <button className="flex-shrink-0 w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center font-label-md text-label-md text-on-surface hover:border-secondary hover:text-secondary transition-colors">1</button>
                    <button className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary bg-secondary/10 flex items-center justify-center font-label-md text-label-md text-secondary transition-colors">2</button>
                    <button className="flex-shrink-0 w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center font-label-md text-label-md text-on-surface hover:border-secondary hover:text-secondary transition-colors">3</button>
                    <button className="flex-shrink-0 w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center font-label-md text-label-md text-on-surface hover:border-secondary hover:text-secondary transition-colors">4</button>
                    <button className="flex-shrink-0 w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center font-label-md text-label-md text-on-surface hover:border-secondary hover:text-secondary transition-colors">5+</button>
                  </div>
                </div>
              </div>
            </section>
            {/* Step 2: Occasion & Dietary */}
            <section className="bg-surface-container-lowest p-8 border border-outline-variant/50 rounded-lg">
              <h2 className="font-headline-sm text-headline-sm text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">restaurant_menu</span>
                Special Requests
              </h2>
              <div className="space-y-6">
                {/* Dietary Tags */}
                <div>
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-3 block">Dietary Requirements</label>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:border-secondary hover:text-secondary transition-all">Vegan</button>
                    <button className="px-4 py-2 rounded-full border border-secondary bg-secondary/10 text-secondary font-label-md text-label-md transition-all">Vegetarian</button>
                    <button className="px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:border-secondary hover:text-secondary transition-all">Gluten-Free</button>
                    <button className="px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:border-secondary hover:text-secondary transition-all">Nut Allergy</button>
                  </div>
                </div>
                {/* Occasion */}
                <div className="pt-4">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2 block">Occasion (Optional)</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body-md text-body-md text-primary placeholder-outline-variant transition-colors" placeholder="e.g., Anniversary, Birthday" type="text" />
                </div>
              </div>
            </section>
          </div>
          {/* Right Column: Visuals & Confirmation */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Atmosphere Image */}
            <div className="relative w-full h-[300px] lg:h-[400px] rounded-lg overflow-hidden group">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A stunning, high-angle close-up of a meticulously set dining table in an exclusive, high-end restaurant. The scene features polished silverware, crystal wine glasses reflecting soft ambient light, and crisp white linen napkins. The lighting is moody yet warm, emphasizing a 'quiet luxury' aesthetic with deep charcoal shadows and subtle golden highlights. In the background, soft out-of-focus elements suggest an elegant, minimalist interior design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrzpOQFYFGQ48wTBNkqEoeI1pF3CCFr-sAwPwzeDrj5etcbEksRLO8dhHcV0M-JGpcKiQhq4pKAcwfRCSqEFhQfEGyjY5Uq6GHZsA7yERzSs7yq2--y8PdEybx2oaUbi_1HFlXOvIzeH8x5EWck0Zf_WK8l_wvYqRDSN4ff9RqupV-Flih5Q2NoTNKOalemLWbDHx_ae97dQkcMAcGQTa67sO3QaEQ3qjAF65bGWTneGB9WFy23GQEeG3Ajk2h3CgUO0a0_BoD62s" />
              {/* Glassmorphism Overlay Policy */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface/80 backdrop-blur-md border border-surface-container-lowest/20 p-4 rounded-lg">
                <h3 className="font-label-md text-label-md text-primary mb-1">Reservation Policy</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">Cancellations must be made at least 24 hours in advance. A smart-casual dress code is strictly observed to maintain the ambiance of Lumière.</p>
              </div>
            </div>
            {/* Confirmation Summary Card */}
            <div className="bg-surface-container p-6 rounded-lg border border-outline-variant/30">
              <h3 className="font-headline-sm text-headline-sm text-primary border-b border-outline-variant/30 pb-4 mb-4">Your Reservation</h3>
              <ul className="space-y-4 font-body-md text-body-md text-on-surface">
                <li className="flex justify-between">
                  <span className="text-on-surface-variant">Date</span>
                  <span className="font-semibold text-primary">Nov 15, 2024</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-on-surface-variant">Time</span>
                  <span className="font-semibold text-primary">7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-on-surface-variant">Guests</span>
                  <span className="font-semibold text-primary">2 People</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-primary text-on-primary rounded font-label-md text-label-md py-4 hover:opacity-90 hover:scale-[0.99] transition-all duration-300 ease-out shadow-lg">
                Confirm &amp; Book
              </button>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}