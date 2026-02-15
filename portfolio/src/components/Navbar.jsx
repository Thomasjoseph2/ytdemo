import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeSection, scrollToSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['About', 'Experience', 'Projects', 'Testimonials', 'Skills'];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-4 shadow-lg'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="w-full px-8 md:px-12 flex justify-between items-center">
                    <div className="text-xl font-bold text-slate-100 tracking-tighter">
                        John<span className="text-cyan-400">.Doe</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex gap-8">
                            {navLinks.map((item) => {
                                const id = item.toLowerCase();
                                return (
                                    <li key={id}>
                                        <button
                                            onClick={() => scrollToSection(id)}
                                            className={`text-sm font-bold transition-colors hover:text-cyan-400 ${activeSection === id ? 'text-cyan-400' : 'text-slate-300'
                                                }`}
                                        >
                                            {item}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-slate-100"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-slate-900 pt-24 px-6 md:hidden"
                    >
                        <ul className="flex flex-col gap-6 text-center">
                            {navLinks.map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => {
                                            scrollToSection(item.toLowerCase());
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="text-2xl font-medium text-slate-300 hover:text-cyan-400"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
