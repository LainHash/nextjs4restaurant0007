"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
    const pathname = usePathname();
    const { isAuthenticated, logout } = useAuth();

    const links = [
        { href: "/", label: "Home" },
        { href: "/menu", label: "Menu" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-container/80 backdrop-blur-md border-b border-outline-variant/30 flat no shadows">
            <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
                <Link className="font-headline-md text-headline-md text-primary dark:text-primary-fixed tracking-tighter" href="/">LUMIÈRE</Link>
                <div className="hidden md:flex gap-8 items-center">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link 
                                key={link.href} 
                                href={link.href}
                                className={`font-body-md text-body-md transition-colors duration-300 ease-out ${
                                    isActive 
                                        ? 'text-secondary dark:text-secondary-fixed-dim font-bold border-b-2 border-secondary' 
                                        : 'text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed'
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
                <div className="hidden md:flex items-center gap-4">
                    {isAuthenticated ? (
                        <>
                            <button onClick={logout} className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md">
                                Logout
                            </button>
                            <Link href="/book" className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2 rounded border border-primary hover:bg-surface hover:text-primary transition-colors duration-300">
                                Book a Table
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md px-2">
                                Login
                            </Link>
                            <Link href="/signup" className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2 rounded border border-primary hover:bg-surface hover:text-primary transition-colors duration-300">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
                <button className="md:hidden text-primary focus:outline-none p-2">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;