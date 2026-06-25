import React from 'react';
import { Mail, LucideUserStar, LucideChurch } from "lucide-react";

const staffData = {
    spiritual: [
        {
            name: "Rev. Sr. Agnes Maria, MSMI",
            role: "Liturgical Coordinator",
            image: "/Screenshot 2026-06-21 at 7.40.12 PM.png", // Replace with actual path
            bio: "Providing spiritual guidance and oversight to liturgical services."
        },
        {
            name: "Rev. Fr. Varghese (Daey) George Kunnath, MST",
            role: "Vicar",
            image: "/fr-daey.jpg", // Replace with actual path
            bio: "Providing spiritual guidance and oversight to all church activities."
        }
    ],
    executive: [
        {
            name: "Tom Jacob",
            role: "President",
            image: "/Screenshot 2026-06-21 at 7.29.49 PM.png",
            bio: "Leading the ministry and coordinating with church leadership."
        },
        {
            name: "Jyothis Sajan",
            role: "Vice President",
            image: "/Screenshot 2026-06-21 at 7.29.21 PM.png",
            bio: "Managing communications and server schedules."
        },
    ]
};

export const Staff = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-background">
            {/* Header */}
            <div className="container mx-auto px-6 mb-16 text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    Our <span className="text-primary">Leadership</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    The dedicated individuals who guide our ministry and ensure the smooth 
                    conduct of our liturgical services.
                </p>
            </div>

            {/* Spiritual Leadership Section */}
            <section className="container mx-auto px-6 mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <LucideChurch className="text-primary" size={28} />
                    <h2 className="text-3xl font-bold">Spiritual Direction</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {staffData.spiritual.map((member, index) => (
                        <div key={index} className="glass-strong rounded-3xl p-6 flex flex-col sm:flex-row gap-6 items-center">
                            <div className="w-32 h-32 rounded-2xl overflow-hidden bg-surface flex-shrink-0">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-primary font-medium mb-3">{member.role}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Executive Board Section */}
            <section className="container mx-auto px-6">
                <div className="flex items-center gap-3 mb-8">
                    <LucideUserStar className="text-primary" size={28} />
                    <h2 className="text-3xl font-bold">Executive Board</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {staffData.executive.map((member, index) => (
                        <div key={index} className="glass-strong rounded-3xl p-6 flex flex-col sm:flex-row gap-6 items-center">
                            <div className="w-32 h-32 rounded-2xl overflow-hidden bg-surface flex-shrink-0">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-primary font-medium mb-3">{member.role}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};