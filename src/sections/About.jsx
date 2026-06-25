import React from 'react';
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";
import { Shield, Users, Heart, Star } from "lucide-react";

export const About = () => {
    return (
        <div className="pb-20 min-h-screen bg-background">
            
            {/* 
              HERO CONTAINER: 
              - Uses aspect-video (16:9) to adapt naturally on mobile, expanding up to md:aspect-[21/9] on desktops.
              - Added a dark backdrop color matching the overlay so the edges blend gracefully.
            */}
            <section className="relative w-full aspect-video md:aspect-[21/9] pt-24 md:pt-32 mb-20 overflow-hidden flex items-center justify-center bg-black/40">
                {/* 
                  IMAGE TRICK:
                  - Changed 'object-cover' to 'object-contain'. 
                  - This forces the browser to show 100% of the image without ever clipping the sides or heads.
                */}
                <img 
                    src="/PHOTO-2025-05-11-21-48-50.jpg" 
                    alt="Our Ministry Group" 
                    className="absolute inset-0 w-full h-full object-contain object-center z-0"
                />
                
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 z-10 bg-background/70"></div>

                {/* Content Container */}
                <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 animate-fade-in text-foreground">
                        Our <span className="text-primary">Ministry</span>
                    </h1>
                    <p className="text-sm md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                        Serving at the Altar is a sacred privilege. We are a dedicated group of young men committed to 
                        enhancing the liturgical experience at St. Mary's Syro-Malabar Catholic Church.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="container mx-auto px-6 mb-20">
                <div className="glass-strong rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
                        <p className="text-muted-foreground text-lg mb-6">
                            We are a young, growing, and dedicated group of over 50 altar servers who serve at 
                            St. Mary's Syro-Malabar Catholic Church in Pearland, Texas.
                        </p>
                        <p className="text-muted-foreground text-lg mb-8">
                            Our mission is to assist the clergy during liturgical services and to foster a deeper 
                            connection with our faith. We are committed to providing a spiritual environment where 
                            youth can grow in leadership, discipline, and devotion.
                        </p>
                        <Link to="/contact">
                            <Button size="lg">Join the Ministry</Button>
                        </Link>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                        <div className="aspect-square rounded-2xl bg-surface/50 overflow-hidden border border-border/50">
                             <img src="/PHOTO-2024-11-30-18-19-41.jpg" alt="Serving" className="w-full h-full object-cover opacity-80" />
                        </div>
                        <div className="aspect-square rounded-2xl bg-surface/50 mt-8 overflow-hidden border border-border/50">
                             <img src="/PHOTO-2024-11-30-14-49-27 6.jpg" alt="Community" className="w-full h-full object-cover opacity-80" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="container mx-auto px-6 mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Why We Serve</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass p-8 rounded-2xl border border-border/50 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Shield className="text-primary" size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Discipline</h3>
                        <p className="text-muted-foreground">Learning the sacred rituals and maintaining order during the Holy Qurbana.</p>
                    </div>

                    <div className="glass p-8 rounded-2xl border border-border/50 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Users className="text-primary" size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Community</h3>
                        <p className="text-muted-foreground">Building lifelong friendships with fellow servers through meetings and outings.</p>
                    </div>

                    <div className="glass p-8 rounded-2xl border border-border/50 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Heart className="text-primary" size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Devotion</h3>
                        <p className="text-muted-foreground">Growing closer to Christ through active participation in the liturgy.</p>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="container mx-auto px-6 text-center py-20 border-t border-border/20">
                <Star className="text-primary mx-auto mb-6" size={40} />
                <h2 className="text-3xl font-bold mb-6">Ready to Serve?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    If you are a member of St. Mary's Pearland and wish to join our ministry, 
                    we would love to hear from you.
                </p>
                <Link to="/contact">
                    <Button variant="outline" size="lg">Contact Leadership</Button>
                </Link>
            </section>
        </div>
    );
};