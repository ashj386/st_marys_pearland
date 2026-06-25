import React from 'react';
import { Award, Star, UserPlus } from "lucide-react";

// Update this data object with real names and image paths

export const Servers = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-background">
            {/* Page Header */}
            <header className="container mx-auto px-6 mb-16 text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    Our <span className="text-primary">Servers</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Meet the dedicated young men who faithfully assist at the altar during the Holy Qurbana.
                </p>
            </header>
            <div className="w-full mb-16">
                <img 
                    src="src/assets/WhatsApp Image 2026-05-19 at 20.00.03.jpeg" /* Replace with your actual image path */
                    alt="Our Altar Servers" 
                    className="w-full object-cover"
                />
            </div>

            {/* Footer Note */}
            <div className="container mx-auto px-6 mt-20">
                <div className="glass p-10 rounded-[2rem] text-center border border-border/30 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-3">Want to join our Ministry?</h3>
                    <p className="text-muted-foreground text-lg mb-0">
                        New trainees are accepted annually. If you are interested, please contact the Executive Board.
                    </p>
                </div>
            </div>
        </div>
    );
};