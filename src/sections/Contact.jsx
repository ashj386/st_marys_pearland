import React, { useState } from 'react';
import { Button } from "@/components/Button";
import { Mail, MapPin, Phone, Send, Globe } from "lucide-react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: 'General Inquiry',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // 2. Define your EmailJS credentials
        const SERVICE_ID = 'service_lyfb738';
        const TEMPLATE_ID = 'template_2nrwzw2';
        const PUBLIC_KEY = 'BDQdom2SMTyMFn0V4';

        // 3. Send the form data
        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Thank you! Your message has been sent to the Altar Server Leadership.");
                
                // Clear the form on success
                setFormData({
                    name: '',
                    email: '',
                    title: 'General Inquiry',
                    message: ''
                });
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert("Oops! Something went wrong. Please try again later.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-background">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Get in <span className="text-primary">Touch</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have questions about joining the ministry or need to reach the executive board? 
                        Send us a message and we'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Left Side: Contact Information & Map */}
                    <div className="space-y-8">
                        <div className="glass-strong p-8 rounded-3xl border border-border/50">
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                        <MapPin className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Location</h3>
                                        <p className="text-muted-foreground text-sm">
                                            St. Mary's Syro-Malabar Catholic Church<br />
                                            1610 O'Day Rd, Pearland, TX 77581
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                        <Mail className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Email</h3>
                                        <p className="text-muted-foreground text-sm">abishekshaju12@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                        <Globe className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Parish Website</h3>
                                        <a href="https://stmaryspearland.org" target="_blank" rel="noreferrer" className="text-primary text-sm hover:underline">
                                            www.stmaryspearland.org
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Embedded Google Map */}
                        <div className="glass rounded-3xl overflow-hidden h-64 border border-border/30">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.7590136057797!2d-95.31792672446389!3d29.58161427515991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864099d47270bc89%3A0xe60245a0a827e411!2sSt%20Mary&#39;s%20Syro%20Malabar%20Catholic%20Church!5e0!3m2!1sen!2sus!4v1778416501510!5m2!1sen!2sus" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, filter: 'contrast(1.2)' }} 
                                allowFullScreen="" 
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="glass-strong p-8 md:p-10 rounded-3xl border border-primary/10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium ml-1">Your Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-surface/50 border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium ml-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-surface/50 border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Subject</label>
                                <select 
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full bg-surface/50 border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                                >
                                    <option>General Inquiry</option>
                                    <option>Joining the Ministry</option>
                                    <option>Website Feedback</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Message</label>
                                <textarea 
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-surface/50 border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <Button type="submit" className="w-full py-6 text-lg gap-2">
                                <Send size={18} />
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};