import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-surface-container-lowest dark:bg-tertiary-container border-t border-outline-variant flat no shadows">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-section-gap max-w-container-max mx-auto">
                <div className="md:col-span-1">
                    <div className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed mb-4">LUMIÈRE</div>
                    <p className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-fixed-variant">An elevated culinary experience.</p>
                </div>
                <div className="md:col-span-2 grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4">
                        <Link className="font-label-md text-label-md text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300 focus:ring-1 focus:ring-secondary inline-block" href="/">Location</Link>
                        <Link className="font-label-md text-label-md text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300 focus:ring-1 focus:ring-secondary inline-block" href="/">Opening Hours</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link className="font-label-md text-label-md text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300 focus:ring-1 focus:ring-secondary inline-block" href="/contact">Contact</Link>
                        <Link className="font-label-md text-label-md text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:text-secondary dark:hover:text-secondary-fixed transition-all duration-300 focus:ring-1 focus:ring-secondary inline-block" href="/">Newsletter</Link>
                    </div>
                </div>
                <div className="md:col-span-1 mt-8 md:mt-0 flex items-end">
                    <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-tertiary-fixed-variant">© 2024 Lumière Gastronomy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;