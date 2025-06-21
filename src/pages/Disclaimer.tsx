import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Info, Shield, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet";

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer - Important Information About YojanaMints Services</title>
        <meta name="description" content="Important disclaimer about YojanaMints services. We are not affiliated with the Government of India. Results are indicative only." />
        <meta name="keywords" content="disclaimer, YojanaMints disclaimer, government scheme disclaimer, independent platform, citizen service disclaimer" />
        <meta name="author" content="YojanaMints" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yojanamints.com/disclaimer" />
        
        <meta property="og:title" content="Disclaimer - Important Information About YojanaMints" />
        <meta property="og:description" content="Important information about using YojanaMints and our services. We are an independent platform." />
        <meta property="og:url" content="https://yojanamints.com/disclaimer" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YojanaMints Disclaimer" />
        <meta name="twitter:description" content="Important disclaimers about our government scheme information services." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Disclaimer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Important information about using YojanaMints and our services
          </p>
        </div>

        <div className="space-y-8">
          {/* Main Disclaimer */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-800">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Not a Government Portal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700">
                <strong>YojanaMints is NOT affiliated with, endorsed by, or connected to the Government of India 
                or any state government.</strong> We are an independent platform providing informational services 
                to help citizens understand government schemes and benefits.
              </p>
            </CardContent>
          </Card>

          {/* Information Accuracy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="w-5 h-5 mr-2 text-blue-600" />
                Information Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                While we strive to provide accurate and up-to-date information about government schemes, 
                benefits, and eligibility criteria, we cannot guarantee the completeness or accuracy of all information.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Scheme details, eligibility criteria, and benefit amounts may change without notice</li>
                <li>Our calculators and estimators provide indicative results only</li>
                <li>Final eligibility and benefit amounts are determined by official government authorities</li>
                <li>Users should always verify information on official government portals</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibility */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                User Responsibility
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                By using YojanaMints, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You will verify all information on official government websites before taking any action</li>
                <li>You understand that our tools provide guidance only, not official determinations</li>
                <li>You will not rely solely on our platform for making financial or legal decisions</li>
                <li>You are responsible for ensuring you meet all official requirements when applying for schemes</li>
              </ul>
            </CardContent>
          </Card>

          {/* No Liability */}
          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                YojanaMints and its operators shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Any decisions made based on information provided on this platform</li>
                <li>Inaccuracies in scheme details, eligibility criteria, or benefit calculations</li>
                <li>Changes in government policies or scheme parameters</li>
                <li>Any direct or indirect losses resulting from use of our services</li>
                <li>Technical issues, downtime, or accessibility problems</li>
              </ul>
            </CardContent>
          </Card>

          {/* Official Sources */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <ExternalLink className="w-5 h-5 mr-2" />
                Always Verify with Official Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 mb-4">
                For accurate and final information, always consult official government portals:
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-700">
                <li>MyGov.in - Citizen Engagement Platform</li>
                <li>India.gov.in - National Portal of India</li>
                <li>Individual scheme portals (pmkisan.gov.in, pmay.gov.in, etc.)</li>
                <li>State government official websites</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle>Data and Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                YojanaMints does not store personal information like Aadhaar numbers, bank details, 
                or sensitive personal data. However, we may use cookies and analytics to improve 
                user experience. Please refer to our Privacy Policy for detailed information about 
                data handling practices.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle>Questions or Concerns?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                If you have questions about this disclaimer or our services, please contact us at:
              </p>
              <p className="text-blue-600 font-medium mt-2">
                contact@yojanamints.com
              </p>
            </CardContent>
          </Card>

          {/* Last Updated */}
          <div className="text-center text-sm text-gray-500 mt-8 pt-8 border-t border-gray-200">
            <p>This disclaimer was last updated on December 2024</p>
            <p className="mt-2">
              By using YojanaMints, you acknowledge that you have read and understood this disclaimer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
