import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, CheckCircle } from "lucide-react";
import heroShield from "@/assets/hero-shield.png";

export const Hero = () => {
  const features = [
    { icon: Shield, text: "Zero-Knowledge Proofs" },
    { icon: Lock, text: "Complete Privacy" },
    { icon: Eye, text: "Selective Disclosure" },
    { icon: CheckCircle, text: "Instant Verification" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <Shield className="h-3 w-3" />
                Zero-Knowledge Healthcare
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Your Health Records,
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Privately Proven</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Share only what's necessary. Prove facts about your health records without revealing sensitive details using cutting-edge zero-knowledge technology.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {features.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2">
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Start Protecting Your Data
                <Shield className="ml-2 h-5 w-5 group-hover:animate-pulse" />
              </Button>
              <Button variant="outline" size="xl">
                See How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Trusted by healthcare professionals</p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">256-bit</div>
                  <div className="text-xs text-muted-foreground">Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">HIPAA</div>
                  <div className="text-xs text-muted-foreground">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Zero</div>
                  <div className="text-xs text-muted-foreground">Data Leaks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '0s' }} />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/3 -right-12 w-8 h-8 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
              
              {/* Main Hero Image */}
              <div className="relative bg-gradient-card rounded-3xl p-8 shadow-strong hover:shadow-glow transition-all duration-500 group">
                <img 
                  src={heroShield} 
                  alt="Healthcare Privacy Shield" 
                  className="w-80 h-80 object-contain group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-hero opacity-5 rounded-3xl group-hover:opacity-10 transition-opacity duration-500" />
              </div>
              
              {/* Status Cards */}
              <div className="absolute -left-6 top-16 bg-card border border-border rounded-lg p-3 shadow-medium animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <span className="text-xs font-medium">Records Encrypted</span>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-16 bg-card border border-border rounded-lg p-3 shadow-medium animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium">Proof Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};