import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Cookie, Database, UserCheck, AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - YojanaMints Data Protection & User Privacy</title>
        <meta name="description" content="Read YojanaMints privacy policy to understand how we protect your data while you use our government scheme tools and calculators." />
        <meta name="keywords" content="privacy policy, data protection, user privacy, YojanaMints privacy, government scheme privacy" />
        <meta name="author" content="YojanaMints" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yojanamints.com/privacy" />
        
        <meta property="og:title" content="Privacy Policy - YojanaMints Data Protection" />
        <meta property="og:description" content="Your privacy is important to us. This policy explains how YojanaMints handles information when you use our services." />
        <meta property="og:url" content="https://yojanamints.com/privacy" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YojanaMints Privacy Policy" />
        <meta name="twitter:description" content="Learn how we protect your privacy while using our government scheme tools." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how YojanaMints handles information when you use our services.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                Our Commitment to Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                YojanaMints is committed to protecting your privacy and ensuring the security of any information you provide. 
                This Privacy Policy explains our practices regarding data collection, use, and protection when you visit our website 
                and use our government scheme tools.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-5 h-5 mr-2 text-blue-600" />
                Information We Don't Collect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">No Personal Data Storage</h3>
                  <p className="text-green-700 text-sm">
                    We do NOT collect, store, or process sensitive personal information such as:
                  </p>
                  <ul className="list-disc list-inside text-green-700 text-sm mt-2 space-y-1">
                    <li>Aadhaar numbers or other government IDs</li>
                    <li>Bank account details or financial information</li>
                    <li>Personal income details or tax information</li>
                    <li>Family or household member information</li>
                    <li>Caste, religion, or other sensitive demographic data</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  All eligibility checks and benefit calculations are performed locally in your browser. 
                  The information you enter into our tools is not transmitted to our servers or stored anywhere.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2 text-purple-600" />
                Information We May Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Website Analytics</h3>
                <p className="text-gray-700 text-sm mb-2">
                  We may use analytics services to understand how visitors use our website, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Pages visited and time spent on each page</li>
                  <li>General location information (city/state level)</li>
                  <li>Device type and browser information</li>
                  <li>Referring websites and search terms</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                <p className="text-gray-700 text-sm">
                  When you contact us through our contact form, we collect only the information you voluntarily provide 
                  (name, email, message) to respond to your inquiry.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Cookie className="w-5 h-5 mr-2 text-orange-600" />
                Cookies and Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-700 text-sm">
                  We use essential cookies necessary for the website to function properly, such as maintaining 
                  your preferences and ensuring security.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-gray-700 text-sm">
                  We may use analytics cookies to understand website usage patterns and improve our services. 
                  These cookies do not collect personally identifiable information.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Advertising Cookies</h3>
                <p className="text-gray-700 text-sm">
                  We may use Google AdSense or similar services to display relevant advertisements. 
                  These services may use cookies to show ads based on your interests while respecting privacy guidelines.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="w-5 h-5 mr-2 text-indigo-600" />
                How We Use Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Any information we collect is used solely for:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Improving our website functionality and user experience</li>
                <li>Understanding which tools are most helpful to users</li>
                <li>Responding to user inquiries and support requests</li>
                <li>Ensuring website security and preventing abuse</li>
                <li>Complying with legal requirements if necessary</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">External Links</h3>
                <p className="text-gray-700 text-sm">
                  Our website contains links to official government portals and other external websites. 
                  We are not responsible for the privacy practices of these external sites.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Government Portals</h3>
                <p className="text-gray-700 text-sm">
                  When you click on links to official government scheme portals, you will be subject to 
                  their respective privacy policies and terms of service.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Browser Controls</h3>
                  <p className="text-gray-700 text-sm">
                    You can control cookies through your browser settings and choose to disable non-essential cookies 
                    if you prefer.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Requests</h3>
                  <p className="text-gray-700 text-sm">
                    If you have contacted us, you can request that we delete your contact information by 
                    emailing us at contact@yojanamints.com.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We implement appropriate security measures to protect any information we collect. However, 
                no method of transmission over the internet is 100% secure. Since we don't collect sensitive 
                personal information, the risk to your privacy is minimal.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                with an updated "Last Modified" date. We encourage you to review this policy periodically.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> contact@yojanamints.com<br />
                  <strong>Subject:</strong> Privacy Policy Inquiry
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Privacy;
