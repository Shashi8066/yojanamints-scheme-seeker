import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About YojanaMints - Your Government Scheme Information Hub</title>
        <meta name="description" content="Learn about YojanaMints, an independent platform dedicated to simplifying access to Indian government schemes and benefits through technology." />
        <meta name="keywords" content="about YojanaMints, government scheme platform, citizen services, yojana information, scheme eligibility" />
        <meta name="author" content="YojanaMints" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yojanamints.com/about" />
        
        <meta property="og:title" content="About YojanaMints - Government Scheme Information Platform" />
        <meta property="og:description" content="Empowering Indian citizens with simplified access to government schemes and benefits through technology." />
        <meta property="og:url" content="https://yojanamints.com/about" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About YojanaMints - Citizen Service Platform" />
        <meta name="twitter:description" content="Learn about our mission to simplify access to Indian government schemes." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About YojanaMints
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering Indian citizens with simplified access to government schemes and benefits through technology.
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed">
            YojanaMints is an independent citizen service platform dedicated to simplifying the complex landscape of Indian government schemes. 
            We understand that navigating through hundreds of yojanas, understanding eligibility criteria, and calculating potential benefits 
            can be overwhelming for the average citizen.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Our mission is to bridge the information gap between government initiatives and citizens who can benefit from them. 
            Through our suite of digital tools, we make it easier for Indians to discover, understand, and access the welfare schemes 
            they're entitled to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To democratize access to government welfare information and empower every Indian citizen 
                to discover and claim the benefits they deserve through simple, accurate, and user-friendly digital tools.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-green-600" />
              </div>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A digitally empowered India where every citizen can easily navigate government schemes, 
                understand their rights, and access the support they need for a better quality of life.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              What We Do
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Simplify Complex Information</h3>
              <p className="text-gray-600">
                We break down complex government scheme documents into easy-to-understand eligibility checkers 
                and benefit calculators that anyone can use.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Provide Accurate Estimations</h3>
              <p className="text-gray-600">
                Our tools help citizens estimate potential benefits from various schemes, enabling informed 
                decision-making about which programs to apply for.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Stay Current with Active Schemes</h3>
              <p className="text-gray-600">
                We continuously track active government schemes, application deadlines, and updates to ensure 
                citizens don't miss out on opportunities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Enable Easy Comparisons</h3>
              <p className="text-gray-600">
                Compare different schemes side-by-side to understand which programs best suit your needs and circumstances.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Important Disclaimers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Independent Platform</h3>
              <p className="text-yellow-700 text-sm">
                YojanaMints is an independent citizen service platform and is NOT affiliated with, endorsed by, 
                or connected to the Government of India or any government agency. We are a private initiative 
                aimed at helping citizens navigate public welfare schemes.
              </p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Information Accuracy</h3>
              <p className="text-blue-700 text-sm">
                While we strive to provide accurate and up-to-date information, all results from our tools are 
                indicative only. Official eligibility, benefit amounts, and application procedures may vary. 
                Always verify information on official government portals before making decisions.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">No Data Collection</h3>
              <p className="text-green-700 text-sm">
                We do not collect, store, or process personal information like Aadhaar numbers, bank details, 
                or sensitive personal data. All calculations are performed locally in your browser for your privacy and security.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Started Today</h2>
          <p className="text-gray-600 mb-6">
            Ready to explore government schemes that could benefit you? Start with our eligibility checker 
            or browse through our other tools to find the right schemes for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/eligibility-checker" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Check Your Eligibility
            </Link>
            <Link 
              to="/contact" 
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
