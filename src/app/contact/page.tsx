import Link from 'next/link';
export default function Page() {
    return (
        <>

            <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                {/* Page Header */}
                <header className="text-center mb-16 md:mb-24">
                    <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">Get in Touch</h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">We look forward to welcoming you. Reach out with any inquiries, reservation requests, or feedback.</p>
                </header>
                {/* Split Layout: Contact Form & Info */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-section-gap">
                    {/* Contact Form */}
                    <div className="bg-surface-container-lowest p-8 md:p-12 rounded border border-outline-variant/30">
                        <h2 className="font-headline-md text-headline-md text-primary mb-8">Send a Message</h2>
                        <form className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="name">Name</label>
                                <input className="input-minimal bg-transparent py-2 font-body-md text-body-md text-primary" id="name" name="name" required type="text" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">Email</label>
                                <input className="input-minimal bg-transparent py-2 font-body-md text-body-md text-primary" id="email" name="email" required type="email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="subject">Subject</label>
                                <select className="input-minimal bg-transparent py-2 font-body-md text-body-md text-primary appearance-none rounded-none cursor-pointer" id="subject" name="subject">
                                    <option value="reservation">Reservation Inquiry</option>
                                    <option value="events">Private Events</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="message">Message</label>
                                <textarea className="input-minimal bg-transparent py-2 font-body-md text-body-md text-primary resize-none" id="message" name="message" required rows={4}></textarea>
                            </div>
                            <button className="self-start mt-4 bg-primary text-on-primary font-label-md text-label-md px-8 py-3 rounded border border-primary hover:bg-surface hover:text-primary transition-colors duration-300" type="submit">
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                    {/* Contact Information & Map */}
                    <div className="flex flex-col gap-12">
                        <div>
                            <h2 className="font-headline-md text-headline-md text-primary mb-6">Contact Information</h2>
                            <ul className="flex flex-col gap-6">
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-secondary mt-1">location_on</span>
                                    <div>
                                        <p className="font-label-md text-label-md text-primary mb-1">Address</p>
                                        <p className="font-body-md text-body-md text-on-surface-variant">123 Culinary Avenue<br />Gastronomy District<br />Paris, 75008</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-secondary mt-1">call</span>
                                    <div>
                                        <p className="font-label-md text-label-md text-primary mb-1">Phone</p>
                                        <p className="font-body-md text-body-md text-on-surface-variant">+33 1 23 45 67 89</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-secondary mt-1">mail</span>
                                    <div>
                                        <p className="font-label-md text-label-md text-primary mb-1">Email</p>
                                        <p className="font-body-md text-body-md text-on-surface-variant">reservations@lumiere.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-label-md text-label-md text-primary mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <Link className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-secondary hover:text-secondary transition-colors" href="/">
                                    <span className="material-symbols-outlined text-[20px]">public</span>
                                </Link>
                                <Link className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-secondary hover:text-secondary transition-colors" href="/">
                                    <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                                </Link>
                            </div>
                        </div>
                        {/* Map Embed Placeholder */}
                        <div className="w-full h-64 bg-surface-container-high rounded border border-outline-variant/30 flex items-center justify-center relative overflow-hidden group cursor-pointer" data-location="Paris" style={{}}>
                            <img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" data-alt="A highly detailed overhead map view of central Paris, focusing on an elegant neighborhood with classic Haussmann architecture, subtle muted colors in a light-mode aesthetic, sophisticated and clean cartography style, warm sunlight highlighting the streets." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq7EtTnIiBGH6WwNI5aycSFUZjwP5A8Y_gecLmntiPEn1CI2Yl0ysKR0sCPONdTfTYoPu7s9CYL_7ZR7DQ-UcTp4Jlm-5dIgBETcXfeGIKJHoZTQUf5CWbWzQ5QMAI1DEV_X-5xQ1VKzPxIhvLB9_hnYuDOlInuuo8C2vw7gXwWOh4lELtm4HCi_Zf4GXZYAzt2uHoqviTUvb_LXJxyzpllP7N7dGGStBzcsv4FyDTmz7mZaevyxmUhxhjqdgrL7hnXXIkAjbN70s" />
                            <div className="absolute bg-surface/90 backdrop-blur px-4 py-2 rounded border border-outline-variant/50 font-label-md text-label-md text-primary shadow-lg pointer-events-none">
                                View on Map
                            </div>
                        </div>
                    </div>
                </section>
                {/* FAQ Section */}
                <section className="max-w-3xl mx-auto">
                    <h2 className="font-headline-md text-headline-md text-primary text-center mb-12">Frequently Asked Questions</h2>
                    <div className="flex flex-col border-t border-outline-variant/30">
                        <details className="group py-6 border-b border-outline-variant/30 cursor-pointer">
                            <summary className="flex justify-between items-center font-body-lg text-body-lg text-primary list-none">
                                Is there parking available?
                                <span className="material-symbols-outlined text-secondary group-open:rotate-180 transition-transform duration-300">expand_more</span>
                            </summary>
                            <div className="pt-4 font-body-md text-body-md text-on-surface-variant pr-8">
                                Valet parking is available at the main entrance for €25. There are also several public parking garages within a short walking distance in the Gastronomy District.
                            </div>
                        </details>
                        <details className="group py-6 border-b border-outline-variant/30 cursor-pointer">
                            <summary className="flex justify-between items-center font-body-lg text-body-lg text-primary list-none">
                                Do you host private events?
                                <span className="material-symbols-outlined text-secondary group-open:rotate-180 transition-transform duration-300">expand_more</span>
                            </summary>
                            <div className="pt-4 font-body-md text-body-md text-on-surface-variant pr-8">
                                Yes, Lumière features an exclusive private dining room that accommodates up to 24 guests, perfect for corporate dinners or intimate celebrations. Please select 'Private Events' in the contact form above for inquiries.
                            </div>
                        </details>
                        <details className="group py-6 border-b border-outline-variant/30 cursor-pointer">
                            <summary className="flex justify-between items-center font-body-lg text-body-lg text-primary list-none">
                                What is the dress code?
                                <span className="material-symbols-outlined text-secondary group-open:rotate-180 transition-transform duration-300">expand_more</span>
                            </summary>
                            <div className="pt-4 font-body-md text-body-md text-on-surface-variant pr-8">
                                Our dress code is smart elegant. We ask gentlemen to wear collared shirts and closed-toe shoes. Jackets are preferred but not required. Sportswear, shorts, and flip-flops are not permitted.
                            </div>
                        </details>
                        <details className="group py-6 border-b border-outline-variant/30 cursor-pointer">
                            <summary className="flex justify-between items-center font-body-lg text-body-lg text-primary list-none">
                                Can you accommodate dietary restrictions?
                                <span className="material-symbols-outlined text-secondary group-open:rotate-180 transition-transform duration-300">expand_more</span>
                            </summary>
                            <div className="pt-4 font-body-md text-body-md text-on-surface-variant pr-8">
                                We are happy to accommodate most dietary requirements with advance notice. Please mention any allergies or preferences when making your reservation or contacting us.
                            </div>
                        </details>
                    </div>
                </section>
            </main>

        </>
    );
}