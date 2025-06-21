import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertTriangle, Shield, ExternalLink, Ban, Gavel } from "lucide-react";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - YojanaMints User Agreement</title>
        <meta name="description" content="Read YojanaMints terms and conditions before using our government scheme tools. Important user responsibilities and service disclaimers." />
        <meta name="keywords" content="terms and conditions, user agreement, YojanaMints terms, service terms, government scheme disclaimer" />
        <meta name="author" content="YojanaMints" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yojanamints.com/terms" />
        
        <meta property="og:title" content="Terms and Conditions - YojanaMints User Agreement" />
        <meta property="og:description" content="Please read these terms carefully before using YojanaMints services and tools." />
        <meta property="og:url" content="https://yojanamints.com/terms" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YojanaMints Terms and Conditions" />
        <meta name="twitter:description" content="User agreement and terms of service for YojanaMints platform." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using YojanaMints services and tools.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                By accessing and using YojanaMints website and services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by these terms, 
                please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
                Important Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Independent Service</h3>
                <p className="text-yellow-700 text-sm">
                  YojanaMints is an independent platform and is NOT affiliated with, endorsed by, 
                  or connected to the Government of India or any government agency. We are a private 
                  initiative providing informational services to citizens.
                </p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Indicative Results Only</h3>
                <p className="text-red-700 text-sm">
                  All eligibility checks, benefit calculations, and scheme comparisons provided by our tools 
                  are for informational purposes only. Results are indicative and should not be considered 
                  as official determinations of eligibility or benefit amounts.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Verification Requirement</h3>
                  <p className="text-gray-700 text-sm">
                    You are responsible for verifying all information provided by our tools with official 
                    government sources before making any decisions or taking any actions based on our results.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Accurate Information</h3>
                  <p className="text-gray-700 text-sm">
                    You agree to provide accurate information when using our tools and understand that 
                    incorrect input may lead to inaccurate results.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Official Applications</h3>
                  <p className="text-gray-700 text-sm">
                    For actual scheme applications, you must visit official government portals and follow 
                    their prescribed procedures. We do not process applications or facilitate scheme enrollment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ExternalLink className="w-5 h-5 mr-2 text-purple-600" />
                Third-Party Links and Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">External Links</h3>
                  <p className="text-gray-700 text-sm">
                    Our website contains links to official government portals and other external websites. 
                    We are not responsible for the content, accuracy, or practices of these external sites.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Government Portals</h3>
                  <p className="text-gray-700 text-sm">
                    When you access government portals through our links, you are subject to their 
                    respective terms of service and privacy policies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Ban className="w-5 h-5 mr-2 text-red-600" />
                Prohibited Uses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">You may not use our services for:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Any unlawful purpose or in violation of any applicable laws</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Interfering with or disrupting our services</li>
                <li>Misrepresenting our tools as official government services</li>
                <li>Commercial use without written permission</li>
                <li>Spreading false information about government schemes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700 text-sm">
                    YojanaMints and its operators shall not be liable for any direct, indirect, incidental, 
                    consequential, or punitive damages arising from your use of our services, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
                    <li>Decisions made based on information from our tools</li>
                    <li>Missed opportunities due to inaccurate information</li>
                    <li>Financial losses related to scheme applications</li>
                    <li>Technical issues or service interruptions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Content</h3>
                  <p className="text-gray-700 text-sm">
                    The content, tools, and design of YojanaMints are protected by intellectual property laws. 
                    You may not reproduce, distribute, or create derivative works without permission.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Government Information</h3>
                  <p className="text-gray-700 text-sm">
                    Government scheme information used in our tools is based on publicly available data. 
                    We do not claim ownership of government policies or scheme details.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We strive to maintain continuous service availability but do not guarantee uninterrupted access. 
                We may suspend or discontinue services for maintenance, updates, or other operational reasons 
                without prior notice.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy and Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Your use of our services is also governed by our Privacy Policy. We do not collect or store 
                sensitive personal information. Please review our Privacy Policy for detailed information 
                about our data practices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gavel className="w-5 h-5 mr-2 text-gray-600" />
                Governing Law
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                These terms and conditions are governed by and construed in accordance with the laws of India. 
                Any disputes arising from the use of our services shall be subject to the exclusive jurisdiction 
                of the courts in India.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We reserve the right to modify these terms and conditions at any time. Changes will be effective 
                immediately upon posting on this page. Your continued use of our services after changes are posted 
                constitutes acceptance of the modified terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> contact@yojanamints.com<br />
                  <strong>Subject:</strong> Terms and Conditions Inquiry
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Terms;
