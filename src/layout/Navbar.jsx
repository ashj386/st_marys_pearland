import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate for the button

const navLinks = [
    {href: "/about", label: "About"},
    {href: "/servers", label: "Servers"},
    {href: "/staff", label: "Staff"},
    {href: "/gallery", label: "Gallery"},
    {href: "/contact", label: "Contact"},
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate(); // Hook to change pages programmatically

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Simple helper to cleanly close the menu
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "bg-background/90 py-3" : "bg-background/90 py-5"} z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo Link - Added closeMobileMenu in case they open the menu and tap home */}
                <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2 focus:outline-none">
                    <img 
                        src="/channels4_profile-Photoroom.png" 
                        alt="St. Mary's Syro-Malabar Altar Servers Logo" 
                        className={`object-contain transition-all duration-500 ${
                            isScrolled ? "h-8" : "h-12"
                        }`} 
                    />
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <Link to={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* mobile menu button */}
                <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md animate-fade-in border-t border-border/10">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <Link 
                                to={link.href} 
                                key={index} 
                                onClick={closeMobileMenu} // <-- FIX: Closes menu when regular link is clicked
                                className="text-lg text-muted-foreground hover:text-foreground py-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                        
                    </div>
                </div>
            )}
        </header>
    );
}