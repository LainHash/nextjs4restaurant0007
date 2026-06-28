import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="flex-grow pt-[120px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="material-symbols-outlined text-4xl">check_circle</span>
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
          Reservation Confirmed
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Thank you for choosing Lumière. Your reservation has been successfully received. We look forward to welcoming you!
        </p>
        <div className="pt-8">
          <Link href="/" className="inline-block px-8 py-4 bg-primary text-on-primary rounded font-label-md text-label-md hover:opacity-90 hover:scale-[0.99] transition-all duration-300 ease-out shadow-lg">
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
