import { ArrowRight } from "lucide-react"
import { Button } from "@/components/Button"
import { Link } from "react-router-dom"

export const Landing = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
            <img src="/church-front.jpg" className="w-full h-full object-cover opacity-40"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80to-background" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-1 gap-12 items-center">
                <div>
                    <div className="text-center text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
                        <h1>
                        St. Mary's Syro-Malabar Altar Servers of Pearland, Texas
                        </h1>
                    </div>
                </div>
                <div className="flex justify-center animate-fade-in">
                    <Button size="lg" asChild>
                            <Link to="/contact" className="flex items-center gap-2">
                                Interested? Join Us! <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                </div>   
            </div>
        </div>
    </section>
}