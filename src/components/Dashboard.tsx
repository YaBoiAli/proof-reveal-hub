import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  FileText, 
  Shield, 
  Eye, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  Plus,
  Download,
  Share2,
  Lock
} from "lucide-react";

export const Dashboard = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [records] = useState([
    {
      id: 1,
      name: "Annual Physical Report",
      type: "Physical Exam",
      date: "2024-03-15",
      status: "encrypted",
      proofs: 3,
      size: "2.4 MB"
    },
    {
      id: 2,
      name: "Blood Test Results",
      type: "Lab Results",
      date: "2024-03-10",
      status: "encrypted",
      proofs: 1,
      size: "1.2 MB"
    },
    {
      id: 3,
      name: "Vaccination Record",
      type: "Immunization",
      date: "2024-02-28",
      status: "encrypted",
      proofs: 5,
      size: "890 KB"
    }
  ]);

  const useCases = [
    {
      title: "Daycare Enrollment",
      description: "Prove vaccination status without revealing medical history",
      icon: Shield,
      color: "bg-primary/10 text-primary",
      fields: ["Age ≥ 2 years", "Up-to-date vaccinations", "No allergies to common foods"]
    },
    {
      title: "Doctor Visit",
      description: "Share relevant symptoms while keeping other conditions private",
      icon: FileText,
      color: "bg-secondary/10 text-secondary",
      fields: ["Insurance valid", "Previous allergic reactions", "Current medications"]
    },
    {
      title: "Employment Health Check",
      description: "Confirm fitness for work without full medical disclosure",
      icon: CheckCircle,
      color: "bg-accent/10 text-accent",
      fields: ["No disqualifying conditions", "Vision/hearing adequate", "Physical fitness level"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Health Records Dashboard</h1>
          <p className="text-muted-foreground">Manage your encrypted health records and generate zero-knowledge proofs</p>
        </div>

        <Tabs defaultValue="records" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="records">My Records</TabsTrigger>
            <TabsTrigger value="proofs">Generate Proofs</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>

          {/* Records Tab */}
          <TabsContent value="records" className="space-y-6">
            {/* Upload Section */}
            <Card className="border-dashed border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Upload Health Records</h3>
                    <p className="text-muted-foreground mb-4">
                      Drag and drop your medical files or click to browse. Files are automatically encrypted.
                    </p>
                    {uploadProgress > 0 && (
                      <div className="space-y-2">
                        <Progress value={uploadProgress} className="w-full max-w-xs mx-auto" />
                        <p className="text-sm text-muted-foreground">Encrypting... {uploadProgress}%</p>
                      </div>
                    )}
                  </div>
                  <Button variant="hero" size="lg">
                    <Plus className="mr-2 h-5 w-5" />
                    Choose Files
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Records List */}
            <div className="grid gap-4">
              {records.map((record) => (
                <Card key={record.id} className="hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{record.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{record.type}</span>
                            <span>•</span>
                            <span>{record.date}</span>
                            <span>•</span>
                            <span>{record.size}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Lock className="h-3 w-3" />
                          Encrypted
                        </Badge>
                        <Badge variant="outline">
                          {record.proofs} proofs generated
                        </Badge>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Proofs Tab */}
          <TabsContent value="proofs" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover:shadow-medium transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${useCase.color}`}>
                        <useCase.icon className="h-6 w-6" />
                      </div>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        Generate
                      </Button>
                    </div>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Selective Fields:</p>
                      {useCase.fields.map((field, fieldIndex) => (
                        <div key={fieldIndex} className="flex items-center gap-2 text-sm">
                          <Eye className="h-3 w-3 text-muted-foreground" />
                          <span>{field}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { action: "Proof generated", detail: "Daycare enrollment proof", time: "2 hours ago", status: "success" },
                  { action: "Record uploaded", detail: "Blood test results", time: "1 day ago", status: "success" },
                  { action: "Verification requested", detail: "Employment health check", time: "2 days ago", status: "pending" },
                  { action: "Proof shared", detail: "Doctor visit proof", time: "3 days ago", status: "success" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.status === 'success' ? 'bg-secondary/10' : 'bg-amber-500/10'
                      }`}>
                        {activity.status === 'success' ? (
                          <CheckCircle className="h-4 w-4 text-secondary" />
                        ) : (
                          <Clock className="h-4 w-4 text-amber-500" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.detail}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};