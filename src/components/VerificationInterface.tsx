import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Shield, 
  FileCheck, 
  AlertCircle,
  Copy,
  QrCode,
  Scan
} from "lucide-react";

export const VerificationInterface = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationResult, setVerificationResult] = useState<'pending' | 'valid' | 'invalid' | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async () => {
    setIsVerifying(true);
    setVerificationResult('pending');
    
    // Simulate verification process
    setTimeout(() => {
      setVerificationResult(verificationCode.length > 10 ? 'valid' : 'invalid');
      setIsVerifying(false);
    }, 2000);
  };

  const mockProofs = [
    {
      id: 1,
      title: "Daycare Enrollment Proof",
      requester: "Sunshine Daycare Center",
      timestamp: "2024-03-15 10:30 AM",
      status: "verified",
      fields: ["Child age ≥ 2 years", "Up-to-date vaccinations", "No severe allergies"],
      code: "DYC-2024-A7B9X"
    },
    {
      id: 2,
      title: "Employment Health Check",
      requester: "TechCorp Solutions",
      timestamp: "2024-03-14 2:15 PM",
      status: "pending",
      fields: ["No disqualifying conditions", "Vision adequate", "Physical fitness confirmed"],
      code: "EMP-2024-K3M8N"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Proof Verification</h1>
          <p className="text-muted-foreground">Verify zero-knowledge health proofs instantly and securely</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Verification Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scan className="h-5 w-5" />
                  Verify Proof
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="verification-code">Verification Code</Label>
                  <div className="flex gap-2">
                    <Input
                      id="verification-code"
                      placeholder="Enter proof verification code (e.g., DYC-2024-A7B9X)"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button variant="outline" size="icon">
                      <QrCode className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Scan QR code or enter the verification code provided by the patient
                  </p>
                </div>

                <Button 
                  onClick={handleVerify} 
                  disabled={!verificationCode || isVerifying}
                  variant="hero"
                  className="w-full"
                >
                  {isVerifying ? (
                    <>
                      <Clock className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <Shield className="mr-2 h-4 w-4" />
                      Verify Proof
                    </>
                  )}
                </Button>

                {/* Verification Result */}
                {verificationResult && (
                  <Card className={`${
                    verificationResult === 'valid' ? 'border-secondary bg-secondary/5' :
                    verificationResult === 'invalid' ? 'border-destructive bg-destructive/5' :
                    'border-amber-500 bg-amber-500/5'
                  }`}>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3">
                        {verificationResult === 'valid' && (
                          <>
                            <CheckCircle className="h-8 w-8 text-secondary" />
                            <div>
                              <h3 className="font-semibold text-secondary">Proof Valid</h3>
                              <p className="text-sm text-muted-foreground">All conditions verified successfully</p>
                            </div>
                          </>
                        )}
                        {verificationResult === 'invalid' && (
                          <>
                            <XCircle className="h-8 w-8 text-destructive" />
                            <div>
                              <h3 className="font-semibold text-destructive">Proof Invalid</h3>
                              <p className="text-sm text-muted-foreground">Unable to verify the provided proof</p>
                            </div>
                          </>
                        )}
                        {verificationResult === 'pending' && (
                          <>
                            <Clock className="h-8 w-8 text-amber-500 animate-spin" />
                            <div>
                              <h3 className="font-semibold text-amber-600">Verifying</h3>
                              <p className="text-sm text-muted-foreground">Processing proof verification...</p>
                            </div>
                          </>
                        )}
                      </div>

                      {verificationResult === 'valid' && (
                        <div className="mt-4 space-y-3">
                          <Separator />
                          <div>
                            <h4 className="font-medium mb-2">Verified Claims:</h4>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-3 w-3 text-secondary" />
                                <span>Child age meets requirement (≥ 2 years)</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-3 w-3 text-secondary" />
                                <span>Vaccination records up to date</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-3 w-3 text-secondary" />
                                <span>No severe allergies reported</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Proof generated: March 15, 2024 at 10:30 AM
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>

            {/* Recent Verifications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Verifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockProofs.map((proof) => (
                    <div key={proof.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          proof.status === 'verified' ? 'bg-secondary/10' : 'bg-amber-500/10'
                        }`}>
                          {proof.status === 'verified' ? (
                            <CheckCircle className="h-4 w-4 text-secondary" />
                          ) : (
                            <Clock className="h-4 w-4 text-amber-500" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{proof.title}</p>
                          <p className="text-xs text-muted-foreground">{proof.requester}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={proof.status === 'verified' ? 'secondary' : 'outline'}>
                          {proof.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{proof.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Patient generates proof</p>
                      <p className="text-xs text-muted-foreground">Zero-knowledge proof created from encrypted health records</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Share verification code</p>
                      <p className="text-xs text-muted-foreground">Patient provides code via QR or text</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Instant verification</p>
                      <p className="text-xs text-muted-foreground">Mathematically verify claims without seeing raw data</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Privacy Guaranteed
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>No personal data transmitted</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>Cryptographic proof only</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>HIPAA compliant process</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>Tamper-proof verification</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};