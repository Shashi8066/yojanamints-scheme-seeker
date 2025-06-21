import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Users, GitCompare, Clock, CheckCircle, Shield } from "lucide-react";

const Index = () => {
  const tools = [
    {
      icon: CheckCircle,
      title: "Yojana Eligibility Checker",
      description: "Find which government schemes you may qualify for based on your personal details and circumstances.",
      link: "/eligibility-checker",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Calculator,
      title: "Subsidy Benefits Estimator", 
      description: "Estimate potential financial benefits and subsidies you could receive under various government schemes.",
      link: "/subsidy-estimator",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: GitCompare,
      title: "Scheme Comparison Tool",
      description: "Compare two government schemes side-by-side to understand benefits, eligibility, and application processes.",
      link: "/scheme-comparison",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Clock,
      title: "Live Scheme Tracker",
      description: "Stay updated on active government schemes currently open for applications with deadlines and details.",
      link: "/scheme-tracker",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Trusted Information",
      description: "All scheme data is sourced from official government portals and updated regularly."
    },
    {
      icon: Users,
      title: "Citizen-Focused",
      description: "Designed specifically to help Indian citizens navigate complex government benefits."
    },
    {
      icon: CheckCircle,
      title: "Easy to Use",
      description: "Simple forms and clear results make finding your benefits straightforward."
    }
  ];

  return (
    <>
      <Helmet>
        <title>YojanaMints - Decode India's Government Schemes | Yojana Eligibility Checker</title>
        <meta name="description" content="Discover your eligibility for Indian government schemes with smart calculators from YojanaMints. Check PM Kisan, PMAY, Ujjwala Yojana eligibility and estimate benefits." />
        <meta name="keywords" content="government schemes, yojana eligibility, PM Kisan, PMAY, Ujjwala Yojana, subsidy calculator, Indian schemes, benefits estimator" />
        <meta name="author" content="YojanaMints" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yojanamints.com/" />
        
        <meta property="og:title" content="YojanaMints - Decode India's Government Schemes" />
        <meta property="og:description" content="Your comprehensive toolkit for exploring government yojanas, checking eligibility, and estimating benefits. Simplifying access to citizen services." />
        <meta property="og:url" content="https://yojanamints.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="YojanaMints" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YojanaMints - Decode India's Government Schemes" />
        <meta name="twitter:description" content="Your comprehensive toolkit for exploring government yojanas, checking eligibility, and estimating benefits." />
      </Helmet>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Decode India's <span className="text-blue-600">Government Schemes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your comprehensive toolkit for exploring government yojanas, checking eligibility, 
              and estimating benefits. Simplifying access to citizen services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/eligibility-checker">Check Your Eligibility</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Powerful Tools for Citizens
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access our suite of tools designed to help you navigate India's government schemes efficiently and accurately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${tool.bgColor} flex items-center justify-center mb-4`}>
                        <IconComponent className={`w-6 h-6 ${tool.color}`} />
                      </div>
                      <CardTitle className="text-xl">{tool.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link to={tool.link}>Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose YojanaMints?
              </h2>
              <p className="text-lg text-gray-600">
                Built with citizens in mind, ensuring accuracy and ease of use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-12 bg-yellow-50 border-t border-yellow-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold text-yellow-800">Important Disclaimer</h3>
            </div>
            <p className="text-yellow-700 max-w-4xl mx-auto">
              YojanaMints is an independent citizen service platform and is not affiliated with the Government of India. 
              All results are indicative only. Please visit official government portals for final eligibility verification and scheme applications.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
