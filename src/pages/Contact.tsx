import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, HelpCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Thank you for your message! We'll get back to you within 24-48 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contact YojanaMints - Get Help with Government Schemes</title>
        <meta name="description" content="Contact YojanaMints for questions about government schemes, eligibility tools, or technical support. We're here to help you navigate citizen services." />
        <meta name="keywords" content="contact YojanaMints, government scheme help, customer support, scheme assistance, yojana questions" />
        <meta name="author" content="YojanaMints" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yojanamints.com/contact" />
        
        <meta property="og:title" content="Contact YojanaMints - Government Scheme Support" />
        <meta property="og:description" content="Have questions about our tools or need help navigating government schemes? We're here to assist you." />
        <meta property="og:url" content="https://yojanamints.com/contact" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact YojanaMints Support" />
        <meta name="twitter:description" content="Get help with government schemes and our citizen service tools." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Contact YojanaMints
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our tools or need help navigating government schemes? 
            We're here to assist you on your journey to accessing citizen benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Mail className="w-5 h-5 mr-2 text-blue-600" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">
                  For general inquiries and support:
                </p>
                <a 
                  href="mailto:contact@yojanamints.com" 
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  contact@yojanamints.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MessageSquare className="w-5 h-5 mr-2 text-green-600" />
                  Quick Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Need immediate help? Check our FAQ section for common questions and answers.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <a href="/faq">
                    <HelpCircle className="w-4 h-4 mr-2" />
                    View FAQ
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Response Time</h3>
              <p className="text-yellow-700 text-sm">
                We typically respond to all inquiries within 24-48 hours during business days. 
                For urgent scheme-related questions, we recommend checking official government portals directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      placeholder="What is your message about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      placeholder="Please describe your question or feedback in detail..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Common Topics */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Questions We Help With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Scheme Eligibility</h3>
              <p className="text-sm text-gray-600">
                Questions about eligibility criteria for specific government schemes and how our tools work.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Benefit Calculations</h3>
              <p className="text-sm text-gray-600">
                Understanding how subsidy amounts are calculated and what factors affect benefit estimates.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Website Issues</h3>
              <p className="text-sm text-gray-600">
                Technical problems, suggestions for improvements, or feedback about our tools and interface.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">New Schemes</h3>
              <p className="text-sm text-gray-600">
                Requests to add newly launched government schemes or updates to existing scheme information.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Application Process</h3>
              <p className="text-sm text-gray-600">
                General guidance about applying to government schemes, though we recommend official portals for applications.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Privacy & Security</h3>
              <p className="text-sm text-gray-600">
                Questions about how we handle information and ensure user privacy while using our tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
