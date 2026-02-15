import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Card from './ui/Card';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL KEYS
        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setErrorMessage('Failed to send message. Please try again later.');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section id="contact" className="py-24 border-t border-slate-800/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-gradient"
                    >
                        Let's Work Together
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-5 gap-12 items-start">
                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 space-y-8"
                    >
                        <Card className="p-8 bg-slate-900/50 backdrop-blur-sm h-full">
                            <h3 className="text-xl font-bold text-slate-100 mb-6">Contact Info</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Email</p>
                                    <a href="mailto:hello@johndoe.dev" className="text-lg text-cyan-400 hover:underline">hello@johndoe.dev</a>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Socials</p>
                                    <div className="flex flex-col gap-2 mt-2">
                                        <a href="#" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                                            LinkedIn <span className="text-slate-600 text-sm">↗</span>
                                        </a>
                                        <a href="#" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                                            GitHub <span className="text-slate-600 text-sm">↗</span>
                                        </a>
                                        <a href="#" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
                                            Twitter <span className="text-slate-600 text-sm">↗</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-3"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="user_name" className="text-sm font-medium text-slate-300">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="user_name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="user_email" className="text-sm font-medium text-slate-300">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="user_email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all ${status === 'success'
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/50 cursor-default'
                                        : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98]'
                                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                            >
                                {status === 'idle' && (
                                    <>Send Message <Send size={20} /></>
                                )}
                                {status === 'sending' && (
                                    <>Sending... <Loader2 size={20} className="animate-spin" /></>
                                )}
                                {status === 'success' && (
                                    <>Message Sent! <CheckCircle size={20} /></>
                                )}
                                {status === 'error' && (
                                    <>Error Sending <AlertCircle size={20} /></>
                                )}
                            </button>

                            {status === 'error' && (
                                <p className="text-red-400 text-sm text-center bg-red-500/10 py-2 rounded border border-red-500/20">
                                    {errorMessage}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
