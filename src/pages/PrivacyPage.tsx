import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lock, 
  Eye, 
  FileCheck, 
  AlertTriangle,
  CheckCircle,
  Key,
  Database,
  Network
} from "lucide-react";

const PrivacyPage = () => {
  const privacyFeatures = [
    {
      icon: Lock,
      title: "Client-Side Encryption",
      description: "All health records are encrypted on your device before any data leaves your computer. We never see your raw medical information.",
      details: ["AES-256 encryption", "Local key generation", "Zero server access to plaintext"]
    },
    {
      icon: Eye,
      title: "Selective Disclosure",
      description: "Choose exactly which facts to prove without revealing underlying data. Share only what's necessary for each situation.",
      details: ["Granular field control", "Custom proof templates", "Minimal data sharing"]
    },
    {
      icon: Shield,
      title: "Zero-Knowledge Proofs",
      description: "Mathematically prove statements about your health without revealing the actual data that proves them.",
      details: ["Cryptographic guarantees", "Tamper-proof verification", "No data leakage"]
    },
    {
      icon: Key,
      title: "Your Keys, Your Data",
      description: "You control the encryption keys. We can't access your data even if we wanted to - it's cryptographically impossible.",
      details: ["Client-side key management", "No key escrow", "Complete user control"]
    },
    {
      icon: Database,
      title: "Minimal Data Storage",
      description: "We only store encrypted proofs and verification metadata. Your actual health records never touch our servers.",
      details: ["Encrypted proof storage only", "No PHI on servers", "Automatic data expiration"]
    },
    {
      icon: Network,
      title: "Decentralized Verification",
      description: "Verification happens through cryptographic proofs, not by accessing a central database of your information.",
      details: ["No central health database", "Peer verification possible", "Reduced attack surface"]
    }
  ];

  const complianceStandards = [
    { name: "HIPAA", description: "Health Insurance Portability and Accountability Act compliance" },
    { name: "GDPR", description: "General Data Protection Regulation adherence" },
    { name: "SOC 2", description: "Security, availability, and confidentiality controls" },
    { name: "ISO 27001", description: "Information security management standards" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Shield className="h-3 w-3 mr-1" />
            Privacy First
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Your Health Data, <span className="bg-gradient-hero bg-clip-text text-transparent">Completely Private</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            HealthPass is built on the principle that your health information belongs to you. 
            Our zero-knowledge architecture ensures maximum privacy while enabling seamless verification.
          </p>
        </div>

        {/* Privacy Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {privacyFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <Card className="mb-16 bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-center mb-8">How Zero-Knowledge Privacy Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">1. Encrypt Locally</h3>
                <p className="text-sm text-muted-foreground">
                  Your health records are encrypted on your device using your personal keys before any data is transmitted.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">2. Generate Proofs</h3>
                <p className="text-sm text-muted-foreground">
                  Create cryptographic proofs of specific facts without revealing the underlying medical data.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">3. Verify Instantly</h3>
                <p className="text-sm text-muted-foreground">
                  Third parties can mathematically verify your claims without ever seeing your actual health records.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-5 w-5" />
                Compliance Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                    <Badge variant="secondary">{standard.name}</Badge>
                    <span className="text-sm text-muted-foreground">{standard.description}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                What We Never Do
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Store unencrypted health records</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Share data with third parties</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Use your data for advertising</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Require unnecessary personal information</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Hold your encryption keys</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Access your data without permission</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="text-center bg-gradient-card border-0">
          <CardContent className="pt-12 pb-12">
            <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're committed to transparency about how we protect your health information. 
              Our privacy practices are designed to give you complete control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Read Full Privacy Policy
              </Button>
              <Button variant="outline" size="lg">
                Contact Privacy Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPage;