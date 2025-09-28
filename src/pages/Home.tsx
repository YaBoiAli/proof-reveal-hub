import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  FileCheck, 
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Zero-Knowledge Proofs",
      description: "Prove facts about your health without revealing sensitive data using advanced cryptography."
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Your health records are encrypted locally before upload. We never see your raw data."
    },
    {
      icon: Eye,
      title: "Selective Disclosure",
      description: "Choose exactly what information to reveal for each verification request."
    },
    {
      icon: Users,
      title: "Multi-Party Verification",
      description: "Healthcare providers, employers, and institutions can verify claims instantly."
    },
    {
      icon: FileCheck,
      title: "HIPAA Compliant",
      description: "Built with healthcare privacy regulations in mind from day one."
    },
    {
      icon: Zap,
      title: "Instant Verification",
      description: "Cryptographic proofs verify in seconds, no manual review needed."
    }
  ];

  const useCases = [
    {
      title: "Daycare Enrollment",
      description: "Prove your child's vaccination status and age without sharing medical history",
      requirements: ["Age verification", "Vaccination status", "Allergy information"],
      color: "bg-primary/5 border-primary/20"
    },
    {
      title: "Employment Screening",
      description: "Confirm fitness for work roles without revealing specific conditions",
      requirements: ["Physical fitness", "Vision/hearing", "No disqualifying conditions"],
      color: "bg-secondary/5 border-secondary/20"
    },
    {
      title: "Insurance Claims",
      description: "Verify coverage and eligibility while maintaining medical privacy",
      requirements: ["Policy validity", "Coverage limits", "Pre-existing conditions"],
      color: "bg-accent/5 border-accent/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Powered by Zero-Knowledge Technology
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Healthcare Privacy, <span className="text-primary">Reimagined</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Share health information with confidence. Our zero-knowledge architecture ensures 
              your sensitive data never leaves your device while still enabling instant verification.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Real-World Applications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how HealthPass transforms privacy in healthcare across different scenarios
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className={`${useCase.color} hover:shadow-medium transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-sm text-muted-foreground mb-3">Verified Information:</p>
                    {useCase.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Control of Your Health Privacy?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join healthcare professionals and patients who trust HealthPass for secure, 
            private health information sharing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl">
              Start Your Free Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl">
              Watch Demo
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground">Proofs Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Healthcare Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-hero rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">HealthPass</span>
                <Badge variant="secondary" className="text-xs">ZK</Badge>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Revolutionizing healthcare privacy through zero-knowledge proofs and selective disclosure technology.
              </p>
              <p className="text-sm text-muted-foreground">
                © 2024 HealthPass. All rights reserved.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Features</div>
                <div>Security</div>
                <div>API Documentation</div>
                <div>Integrations</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Help Center</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Contact Us</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;