import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Shield, Calculator, Users, AlertTriangle, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet";

const FAQ = () => {
  const faqs = [
    {
      category: "General",
      icon: HelpCircle,
      questions: [
        {
          question: "Is YojanaMints an official government portal?",
          answer: "No, YojanaMints is an independent citizen service platform and is NOT affiliated with the Government of India or any government agency. We are a private initiative aimed at helping citizens navigate public welfare schemes. Always verify information on official government portals before making decisions."
        },
        {
          question: "Can I trust the benefit amounts and eligibility results shown?",
          answer: "Our results are indicative only and based on publicly available scheme guidelines. Actual eligibility and benefit amounts may vary based on current government policies, individual circumstances, and official verification. We strongly recommend confirming all information on official government portals before applying."
        },
        {
          question: "How often is the scheme information updated?",
          answer: "We strive to keep our information current by regularly reviewing official government announcements and scheme updates. However, government policies can change frequently. For the most up-to-date information, always check the official scheme portals."
        }
      ]
    },
    {
      category: "Privacy & Security",
      icon: Shield,
      questions: [
        {
          question: "Do you collect Aadhaar numbers or personal data?",
          answer: "No, we do NOT collect, store, or process sensitive personal information like Aadhaar numbers, bank details, income information, or other confidential data. All calculations are performed locally in your browser for your privacy and security."
        },
        {
          question: "Is my information safe when using your tools?",
          answer: "Yes, your information is safe because we don't collect it! All eligibility checks and benefit calculations happen locally in your browser. The information you enter into our forms is not transmitted to our servers or stored anywhere."
        },
        {
          question: "Do you share information with government agencies?",
          answer: "We cannot share what we don't collect. Since we don't store personal information, there's nothing to share. We are not connected to government agencies and operate as an independent information service."
        }
      ]
    },
    {
      category: "Using Our Tools",
      icon: Calculator,
      questions: [
        {
          question: "How accurate are the eligibility checker results?",
          answer: "Our eligibility checker uses general scheme criteria to provide indicative results. Accuracy depends on the information you provide and current scheme guidelines. Results should be used as a starting point - always verify eligibility on official portals before applying."
        },
        {
          question: "Why do benefit estimates vary from actual amounts?",
          answer: "Benefit estimates are calculated using general parameters and may not account for all variables like state-specific rules, current funding availability, or individual circumstances. Official benefit amounts are determined by government agencies during the application process."
        },
        {
          question: "Can I apply for schemes directly through your website?",
          answer: "No, we do not process scheme applications. We provide informational tools only. To apply for government schemes, you must visit the official portals we link to and follow their application procedures."
        },
        {
          question: "What should I do if I find incorrect information?",
          answer: "Please contact us at contact@yojanamints.com with details about the incorrect information. We appreciate feedback and work to maintain accuracy, though we always recommend verifying information on official sources."
        }
      ]
    },
    {
      category: "Technical Support",
      icon: Users,
      questions: [
        {
          question: "The website is not working properly on my device. What should I do?",
          answer: "Try refreshing the page, clearing your browser cache, or using a different browser. Our website works best on modern browsers. If problems persist, contact us with details about your device and browser."
        },
        {
          question: "Can I use your tools on mobile phones?",
          answer: "Yes, our website is designed to work on mobile devices, tablets, and desktops. If you experience issues on mobile, try using the latest version of your mobile browser."
        },
        {
          question: "Do I need to create an account to use your tools?",
          answer: "No, all our tools are freely accessible without registration or account creation. This also means we don't store any of your personal information."
        }
      ]
    },
    {
      category: "Scheme Information",
      icon: ExternalLink,
      questions: [
        {
          question: "Which government schemes do you cover?",
          answer: "We cover major central government schemes like PM Kisan, PM Awas Yojana, Ujjwala Yojana, Ayushman Bharat, and others. We continuously work to add more schemes based on user demand and scheme popularity."
        },
        {
          question: "Do you include state government schemes?",
          answer: "Currently, we focus primarily on central government schemes that apply across India. We may add state-specific schemes in the future based on user feedback and demand."
        },
        {
          question: "How do I know if a scheme is currently accepting applications?",
          answer: "Check our Live Scheme Tracker for currently active schemes with application deadlines. However, always verify the application status on the official scheme portal as deadlines can change without notice."
        },
        {
          question: "What if I'm eligible for multiple schemes?",
          answer: "Many government schemes can be accessed simultaneously if you meet their individual eligibility criteria. Use our comparison tool to understand different schemes and their benefits. Apply to all relevant schemes through their official portals."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Frequently Asked Questions About YojanaMints</title>
        <meta name="description" content="Find answers to common questions about YojanaMints, our government scheme tools, privacy practices, and how we help navigate citizen services." />
        <meta name="keywords" content="FAQ, frequently asked questions, YojanaMints help, government scheme questions, eligibility checker FAQ" />
        <meta name="author" content="YojanaMints" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yojanamints.com/faq" />
        
        <meta property="og:title" content="FAQ - Frequently Asked Questions About YojanaMints" />
        <meta property="og:description" content="Find answers to common questions about YojanaMints, our tools, and how we help you navigate government schemes." />
        <meta property="og:url" content="https://yojanamints.com/faq" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YojanaMints FAQ - Common Questions" />
        <meta name="twitter:description" content="Get answers to frequently asked questions about our government scheme tools." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about YojanaMints, our tools, and how we help you navigate government schemes.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <IconComponent className="w-5 h-5 mr-2 text-blue-600" />
                    {category.category}
                  </CardTitle>
                  <CardDescription>
                    Common questions about {category.category.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Help Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
              Still Need Help?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Contact Support</h3>
                <p className="text-blue-800 text-sm mb-3">
                  Can't find your answer? Send us a message and we'll help you within 24-48 hours.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Contact Us
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">Official Resources</h3>
                <p className="text-green-800 text-sm mb-3">
                  For official scheme information and applications, always visit government portals directly.
                </p>
                <a 
                  href="https://india.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm"
                >
                  India.gov.in
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-yellow-800 font-medium">Remember</p>
                  <p className="text-sm text-yellow-700 mt-1">
                    YojanaMints provides guidance only. For official applications, eligibility verification, 
                    and scheme enrollment, always use official government portals and follow their procedures.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FAQ;
